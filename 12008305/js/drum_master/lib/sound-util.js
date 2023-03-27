define(['catalog/ua/sound/webaudio'], function(UA) {

	'use strict';

	var audioSupport = null;
	/**
	 * Check media support in the client audio.
	 * @function getAudioCapabilities
	 * @return {Object} boolean assoc over each audio extension
	 */
	function getAudioCapabilities() {
		if (audioSupport) {
			return audioSupport;
		}
		var a = document.createElement('audio');
		var support;
		if (!!a.canPlayType) {
			support = {};
			support.mp3 = !!(a.canPlayType('audio/mpeg;').replace(/no/, ''));
			support.ogg = !!(a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''));
			support.wav = !!(a.canPlayType('audio/wav; codecs="1"').replace(/no/, ''));
			support.aac = !!(a.canPlayType('audio/mp4; codecs="mp4a.40.2"').replace(/no/, ''));
		}
		a = null;
		audioSupport = support;
		return support;
	}

	/**
	 * @function isSupportedHTMLAudio
	 * @return {Boolean} true if the client supports HTML5 Audio
	 */
	function isSupportedHTMLAudio() {
		return !! getAudioCapabilities();
	}
	/**
	 * @function isSupportedWebAudio
	 * @return {Boolean} true if the client supports Web Audio API
	 */
	function isSupportedWebAudio() {
		if (UA.cannotUseWebAudio()) {
			return false;
		} else {
			return window.webkitAudioContext || window.mozAudioContext || window.AudioContext;
		}
	}

	/**
	 * @function findMediaType
	 * @param {String} ext extension for media file
	 * @return {String} media type for the given extension
	 */
	function findMediaType(ext) {
		switch (ext) {
		case 'mp3':
			return 'audio/mpeg';
		case 'ogg':
			return 'audio/ogg';
		case 'wav':
			return 'audio/wav';
		case 'aac':
		case 'm4a':
			return 'audio/mp4';
		default:
			return '';
		}
	}

	////////////////////////////////////////////////////////////
	// read MP3 header

	/**
	 * @function getBitRate
	 * @param {Byte} versionCode header byte to represent MPEG version
	 * @param {Byte} layerCode header byte to represent MPEG Layer
	 * @param {Byte} bitRateCode header byte to represent bit-rate
	 * @return {Number} bit-rate
	 * @see http://www.mp3-tech.org/programmer/frame_header.html
	 */
	function getBitRate(versionCode, layerCode, bitRateCode) {
		var bitRate = 0;
		if (versionCode === 0x3) {
			// MPEG 1
			if (layerCode === 0x3) { // Layer I
				bitRate = [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448][bitRateCode];
			} else if (layerCode === 0x2) { // Layer II
				bitRate = [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384][bitRateCode];
			} else if (layerCode === 0x1) { // Layer III
				bitRate = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320][bitRateCode];
			}
		} else if (versionCode === 0x2 || versionCode === 0x0) {
			// MPEG 2 and 2.5
			if (layerCode === 0x3) { // Layer I
				bitRate = [0, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256][bitRateCode];
			} else if (layerCode === 0x2 || layerCode === 0x1) {
				bitRate = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160][bitRateCode];
			}
		}
		if (! bitRate) {
			throw new Error('unknown bit-rate');
		}
		return bitRate;
	}
	/**
	 * @function getSampleRate
	 * @param {Byte} versionCode header byte to represent MPEG version
	 * @param {Byte} sampleRateCode header byte to represent sample-rate
	 * @return {Number} sample-rate
	 * @see http://www.mp3-tech.org/programmer/frame_header.html
	 */
	function getSampleRate(versionCode, sampleRateCode) {
		var sampleRate = 0;
		if (versionCode === 0x3) {
			// MPEG 1
			sampleRate = [44100, 48000, 32000][sampleRateCode];
		} else if (versionCode === 0x2) {
			// MPEG 2
			sampleRate = [22050, 24000, 16000][sampleRateCode];
		} else if (versionCode === 0x0) {
			// MPEG 2.5
			sampleRate = [11025, 12000, 8000][sampleRateCode];
		}
		if (! sampleRate) {
			throw new Error('unknown sample-rate');
		}
		return sampleRate;
	}
	/**
	 * @function getInfoOffset
	 * @param {Byte} versionCode header byte to represent MPEG version
	 * @param {Byte} channelCode header byte to represent channel mode
	 * @return {Number} Xing/Info offset from frame header start position
	 */
	function getInfoOffset(versionCode, channelCode) {
		var infoOffset = 0;
		if (versionCode === 0x3) {
			// MPEG1
			if (channelCode === 0x3) {
				// Mono
				infoOffset = 0x15;
			} else {
				infoOffset = 0x24;
			}
		} else {
			if (channelCode === 0x3) {
				// Mono
				infoOffset = 0x0D;
			} else {
				infoOffset = 0x15;
			}
		}
		if (! infoOffset) {
			throw new Error('unknown info-offset');
		}
		return infoOffset;
	}
	/**
	 * Read LAME header of mp3 file.
	 *
	 * @function readLameHeader
	 * @param {ArrayBuffer} buffer binary contents
	 * @return {Object} LAME header information
	 * @see http://www.mp3-tech.org/programmer/frame_header.html
	 */
	function readLAMEHeader(buffer) {
		var result = {};

		var bytes = new Uint8Array(buffer);
		var offset = 0;
		function readByte() {
			return bytes[offset++];
		}
		function readBytes(n) {
			return bytes.subarray(offset, (offset = offset + n));
		}

		// ID3v2Tag
		if (bytes[0] === 0x49 && bytes[1] === 0x44 && bytes[2] === 0x33) {
			result.id3v2 = true;

			// skip id and version
			offset += 5;
			var flagByte = readByte();
			var size = 0;
			for (var i = 0; i < 4; i++) { size <<= 7; size |= readByte(); }
			offset += size;

			if (flagByte & 0x40) {
				// include extended header
				offset += 10;
			}
		}

		result.frameHeaderOffset = offset;

		// FrameHeader
		var frameHeaderBytes = readBytes(4);
		if (frameHeaderBytes[0] !== 0xFF || (frameHeaderBytes[1] & 0xE0) !== 0xE0) {
			console.warn('invalid frame header');
			return result;
		}

		var versionCode = (frameHeaderBytes[1] & 0x18) >> 3;
		var layerCode = (frameHeaderBytes[1] & 0x06) >> 1;
		var bitRateCode = (frameHeaderBytes[2] & 0xF0) >> 4;
		var bitRate = getBitRate(versionCode, layerCode, bitRateCode);
		var sampleRateCode = (frameHeaderBytes[2] & 0x0C) >> 2;
		var sampleRate = getSampleRate(versionCode, sampleRateCode);
		//var paddingCode = (frameHeaderBytes[2] & 0x02) >> 1;
		var channelCode = (frameHeaderBytes[3] & 0xC0) >> 6;
		//var frameSize = Math.floor(144 * bitRate * 1000 / sampleRate) + paddingCode;
		var infoPos = getInfoOffset(versionCode, channelCode);
		offset += (infoPos - 4); // offset seeked by 4 bytes for frame header

		result.bitRate = bitRate;
		result.sampleRate = sampleRate;

		// Info Tag
		var id = readBytes(4);
		if (! ((id[0] === 0x58 && id[1] === 0x69 && id[2] === 0x6E && id[3] === 0x67) || // Xing
					 (id[0] === 0x49 && id[1] === 0x6E && id[2] === 0x66 && id[3] === 0x6F))) { // Info
			console.warn('invalid info tag', id);
			return result;
		}
		// LameTag offset
		offset += (0x77 - 4); // offset seeked by 4 bytes for lame tag header
		// skip unnecessary tags (quality, encoder, version, encodingMethod, lowpass, amplitude, track, album, encodingFlags, bitRate)
		offset += 22;
		var delays = readBytes(3);

		var encoderDelay = (delays[0] << 4) | ((delays[1] & 0xF0) >> 4);
		var paddedAtEnd = ((delays[1] & 0x0F) << 8) | delays[2];

		result.encoderDelay = encoderDelay;
		result.padding = paddedAtEnd;

		return result;
	}

	return {
		getAudioCapabilities: getAudioCapabilities,
		isSupportedHTMLAudio: isSupportedHTMLAudio,
		isSupportedWebAudio: isSupportedWebAudio,
		findMediaType: findMediaType,
		readLAMEHeader: readLAMEHeader
	};

});
