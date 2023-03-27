/**
 * SoundJS 0.5.2 に対するパッチ
 */
define(['underscore', 'lib/sound-util', 'catalog/ua/sound/webaudio', 'util/function'], function(_, SoundUtility, UA, FunctionUtility) {

	'use strict';

	////////////////////////////////////////////////////////////
	// constant

	var DECODER_DELAY = 529;

	// for low quality sound without LAME header
	var DEFAULT_MPEG_DELAY = 576;
	var DEFAULT_MPEG_PADDING = 1152; // 1-frame
	//var DEFAULT_MPEG_PADDING = 1728; // 1.5-frames
	//var DEFAULT_MPEG_PADDING = 2304; // 2-frames

	////////////////////////////////////////////////////////////
	// device-oriented properties

	// 再生速度
	var preferredPlaybackRate = 1;
	if (UA.shouldUseDoublePlaybackRate()) {
		// 特定端末のみ、再生速度が半分になってしまうので、倍速にする
		preferredPlaybackRate = 2;
	} else if (UA.shouldUseHalfPlaybackRate()) {
		preferredPlaybackRate = 0.5;
	}

	////////////////////////////////////////////////////////////

	var createjs = window.createjs;
	if (createjs.denaVersion) {
		return;
	}

	// check mp3 capability with audio/mpeg
	// because some clients such as iOS 6 Safari cannot play audio/mp3 while it can play audio/mpeg
	_.each([createjs.HTMLAudioPlugin, createjs.WebAudioPlugin], function(s) {
		var original = s._generateCapabilities;
		s._generateCapabilities = function() {
			var retval = original.apply(this, arguments);
			var capabilities = s._capabilities;
			if (capabilities) {
				capabilities.mp3 = capabilities.mp3 || SoundUtility.getAudioCapabilities()['mp3'];
				// #242242 Google Chrome 40.0.2214.111 (64-bit) において createPanner を行うとクラッシュする問題への対応
				if (UA.cannotCreatePanner()) {
					capabilities.panning = false;
				}
			}
			return retval;
		};
	});

	if (UA.cannotUseWebAudio()) {
		// Web Audio が上手く働かない端末に関しては HTML Audio で再生する
		createjs.WebAudioPlugin.isSupported = FunctionUtility.returnFalse;
	}

	(function() {
		var P = createjs.LoadQueue.prototype;
		var LoadQueue__createTag = P._createTag;
		P._createTag = function(item) {
			if (item.type === createjs.LoadQueue.SOUND) {
				var customHandler = this._typeCallbacks[item.type] || this._extensionCallbacks[item.ext];
				if (customHandler && customHandler.scope === createjs.Sound && createjs.Sound.activePlugin instanceof createjs.WebAudioPlugin) {
					// WebAudioPlugin does not require tags
					return null;
				}
			}
			return LoadQueue__createTag.apply(this, arguments);
		};
	}).call(this);

	// retry to load mp3 in failure
	// see http://stackoverflow.com/questions/10365335/decodeaudiodata-returning-a-null-error
	(function() {
		var P = createjs.WebAudioPlugin.Loader.prototype;

		P.load = function(src) {
			if (src != null) {
				// TODO does this need to set this.originalSrc
				this.src = src;
			}
			this.request = new XMLHttpRequest();
			this.request.open("GET", this.src, true);
			this.request.responseType = "arraybuffer";
			this.request.onload = createjs.proxy(this.handleLoad, this);
			////////////////////////////////////////////////////////////
			// MODIFIED
			// onError --> onerror
			this.request.onerror = createjs.proxy(this.handleError, this);
			////////////////////////////////////////////////////////////
			this.request.onprogress = createjs.proxy(this.handleProgress, this);
			this.request.send();
		};

		P.handleLoad = function(evt) {
			// remove handlers
			_.each(['onload', 'onerror', 'onprogress'], function(h) {
				evt.currentTarget[h] = null;
			});

			// decodeAudioData only when the response comes with successful status code
			if (evt.target && String(evt.target.status)[0] != 2 && String(evt.target.status)[0] != 3) {
				// should fire handleError
				return this.handleError(evt);
			}
			var self = this;
			var context = this.owner.context;
			var response = this.request.response;
			var errorCallback = createjs.proxy(this.handleError, this);

			// read LAME header and set delay/padding for mp3
			var lame = SoundUtility.readLAMEHeader(response);

			if (preferredPlaybackRate > 1) {
				// 倍速再生の場合は、見かけの長さを倍にする
				var responseArray = new Uint8Array(response);
				if (lame.id3v2 && lame.frameHeaderOffset) {
					// MPEG1 を MPEG2 に見せかけて、見かけ上のサンプルレートを半分にする
					responseArray[lame.frameHeaderOffset + 1] &= 0xF3;
				}
				var doubleResponseArray = new Uint8Array(response.byteLength * preferredPlaybackRate);
				doubleResponseArray.set(responseArray, 0);
				response = doubleResponseArray.buffer;
				responseArray = null;
				doubleResponseArray = null;
			}

			var successCallback = function(buffer) {

				if (lame && lame.sampleRate) {
					if (lame.id3v2) {
						buffer.id3v2 = lame.id3v2;
						// Web Audio API seems to support gapless loop with ID3v2 and LAME headers.
						buffer.delay = lame.encoderDelay ? (lame.encoderDelay / lame.sampleRate) : (DEFAULT_MPEG_DELAY / lame.sampleRate);
						buffer.padding = lame.padding ? (lame.padding / lame.sampleRate) : (DEFAULT_MPEG_PADDING / lame.sampleRate);
					} else {
						// Web Audio API does not seem to support gapless loop without ID3v2 or LAME header.
						// It also seems to ignore decoder-delay.
						buffer.delay = lame.encoderDelay ? ((lame.encoderDelay + DECODER_DELAY) / lame.sampleRate) : ((DEFAULT_MPEG_DELAY + DECODER_DELAY) / lame.sampleRate);
						buffer.padding = lame.padding ? (lame.padding / lame.sampleRate) : (DEFAULT_MPEG_PADDING / lame.sampleRate);
					}

					// HACK FOR GAPLESS LOOP
					var resolution = 100;
					buffer.delay = Math.ceil(buffer.delay * resolution) / resolution;
					buffer.padding = Math.ceil(buffer.padding * resolution) / resolution;
				}

				self.handleAudioDecoded(buffer);
			};

			context.decodeAudioData(response, successCallback, function(err) {
				if (err) {
					return errorCallback(err);
				} else {
					var buf8 = new Uint8Array(response);
					buf8.indexOf = Array.prototype.indexOf;
					var i = 0;
					while (1) {
						i = buf8.indexOf(0xFF, i); if (i == -1 || (buf8[i+1] & 0xE0 == 0xE0)) break;
						i++;
					}
					if (i >= 0) {
						context.decodeAudioData(response.slice(i), successCallback, function(err) {
							if (err) {
								return errorCallback(err);
							} else {
								console.error('failed to decodeAudioData');
							}
						});
					} else {
						console.error('failed to decodeAudioData');
					}
				}
			});
		};

		P.handleError = function(evt) {
			// remove handlers
			_.each(['onload', 'onerror', 'onprogress'], function(h) {
				evt.currentTarget[h] = null;
			});
			this.owner.removeSound(this.src);
			this.onerror && this.onerror(evt);
		};
	}).call(this);

	(function() {
		var S = createjs.HTMLAudioPlugin.SoundInstance;
		var P = S.prototype;

		P._handleSoundReady = function(event) {
			////////////////////////////////////////////////////////////
			// MODIFIED
			// Chrome において、再生するまで audio タグの duration がずっと 0 になってしまっている場合がある
			this._duration = this.tag.duration * 1000 || 0.5;
			////////////////////////////////////////////////////////////
			this.playState = createjs.Sound.PLAY_SUCCEEDED;
			this.paused = this._paused = false;
			this.tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, false);

			if (this._offset >= this.getDuration()) {
				this.playFailed();
				return;
			} else if (this._offset > 0) {
				this.tag.currentTime = this._offset * 0.001;
			}
			if (this._remainingLoops == -1) {
				this.tag.loop = true;
			}
			if(this._remainingLoops != 0) {
				this.tag.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this.loopHandler, false);
				this.tag.loop = true;
			}
			this.tag.play();
		};
	}).call(this);

	(function() {
		var P = createjs.WebAudioPlugin.SoundInstance.prototype;

		P._init = function (src, owner) {
			this._owner = owner;
			this.src = src;
			this.gainNode = this._owner.context.createGain();
			// #242242 Google Chrome 40.0.2214.111 (64-bit) においてクラッシュが頻発するので条件分岐
			if (! UA.cannotCreatePanner()) {
				this.panNode = this._owner.context.createPanner(); //TODO test how this affects when we have mono audio
				this.panNode.panningModel = this._owner._panningModel;
				this.panNode.connect(this.gainNode);
			}
			if (this._owner.isPreloadComplete(this.src)) {
				this._duration = this._owner._arrayBuffers[this.src].duration * 1000;
			}
			this._endedHandler = createjs.proxy(this._handleSoundComplete, this);
		};

		P._cleanUpAudioNode = function(audioNode) {
			if(audioNode) {
				////////////////////////////////////////////////////////////
				// MODIFIED
				try {
					audioNode.stop(0);
				} catch (e) {
					// 特定端末にて InvalidStateError: DOM Exception 11 というエラーが出る場合がある
					// do nothing
				}
				try {
					if (this.panNode) {
						audioNode.disconnect(this.panNode);
					} else {
						audioNode.disconnect(this.gainNode);
					}
				} catch (e) {
					// 特定端末にて Invalid index parameters というエラーが出るため、引数を除去
					audioNode.disconnect();
				}
				////////////////////////////////////////////////////////////
				audioNode = null;	// release reference so Web Audio can handle removing references and garbage collection
			}
			return audioNode;
		};

		/**
		 * Handles starting playback when the sound is ready for playing.
		 * @method _handleSoundReady
		 * @protected
		 */
		P._handleSoundReady = function (event) {
			if (window.createjs == null) {
				return;
			}

			if ((this._offset*1000) > this.getDuration()) { // converting offset to ms
				this.playFailed();
				return;
			} else if (this._offset < 0) { // may not need this check if play ignores negative values, this is not specified in the API http://www.w3.org/TR/webaudio/#AudioBufferSourceNode
				this._offset = 0;
			}

			this.playState = createjs.Sound.PLAY_SUCCEEDED;
			this._paused = false;

			this.gainNode.connect(this._owner.gainNode); // this line can cause a memory leak. Nodes need to be disconnected from the audioDestination or any sequence that leads to it.

			////////////////////////////////////////////////////////////
			// MODIFIED
			var buffer = this._owner._arrayBuffers[this.src];
			var magicPadding = buffer.padding || 0;
			var magicDelay = buffer.delay || 0;

			if (this._remainingLoops == 0) {
				// consider delay/padding only when looping
				magicPadding = 0; magicDelay = 0;
			} else {
				// HACK FOR GAPLESS LOOP
				// (loop with cross-fade because delay/padding cannot be obtained for some files)
				magicPadding += magicDelay; magicDelay = 0;
			}

			var dur = buffer.duration / preferredPlaybackRate;
			this.sourceNode = this._createAndPlayAudioNode((this._owner.context.currentTime - dur), this._offset);
			this._duration = dur * 1000; // NOTE *1000 because WebAudio reports everything in seconds but js uses milliseconds

			this._startTime = this.sourceNode.startTime - (this._offset + magicPadding);

			// TODO source に対する gain を使うのをやめて、全て gainNode で操作する
			if (buffer.id3v2) { // the default value cannot be trusted
				this.sourceNode.gain.setValueAtTime(this.sourceNode.gain.value, this.sourceNode.startTime + dur - magicPadding);
				this.sourceNode.gain.linearRampToValueAtTime(0, this.sourceNode.startTime + dur);
				this.sourceNode.gain.cancelScheduledValues(this.sourceNode.startTime + dur + 1);
			}

			this._soundCompleteTimeout = setTimeout(this._endedHandler, (dur - (this._offset + magicPadding)) * 1000);
			if (this._remainingLoops != 0) {
				this._sourceNodeNext = this._createAndPlayAudioNode(this._startTime, magicDelay);
				if (buffer.id3v2) { // the default value cannot be trusted
					this._sourceNodeNext.gain.setValueAtTime(this._sourceNodeNext.gain.value, this._sourceNodeNext.startTime + dur - (magicDelay + magicPadding));
					this._sourceNodeNext.gain.linearRampToValueAtTime(0, this._sourceNodeNext.startTime + dur - magicDelay);
					this._sourceNodeNext.gain.cancelScheduledValues(this._sourceNodeNext.startTime + dur - magicDelay + 1);
				}
			}
			////////////////////////////////////////////////////////////
		};

		P._createAndPlayAudioNode = function(startTime, offset) {
			var audioNode = this._owner.context.createBufferSource();
			////////////////////////////////////////////////////////////
			// MODIFIED
			if (typeof audioNode.gain === "undefined") {
				var audioGain = this._owner.context.createGain();
				audioNode.gain = audioGain.gain;
			}
			////////////////////////////////////////////////////////////
			audioNode.buffer = this._owner._arrayBuffers[this.src];
			if (this.panNode) {
				audioNode.connect(this.panNode);
			} else {
				audioNode.connect(this.gainNode);
			}
			var currentTime = this._owner.context.currentTime;
			////////////////////////////////////////////////////////////
			// MODIFIED
			audioNode.startTime = startTime + audioNode.buffer.duration / preferredPlaybackRate;
			audioNode.playbackRate.value = preferredPlaybackRate;
			////////////////////////////////////////////////////////////
			audioNode.start(audioNode.startTime, offset, audioNode.buffer.duration - offset);
			return audioNode;
		};

		/**
		 * Audio has finished playing. Manually loop it if required.
		 * @method _handleSoundComplete
		 * @param event
		 * @protected
		 */
		// called internally by _soundCompleteTimeout in WebAudioPlugin
		P._handleSoundComplete = function (event) {
			this._offset = 0; // have to set this as it can be set by pause during playback
			////////////////////////////////////////////////////////////
			// MODIFIED
			var self = this;
			var buffer = this._owner._arrayBuffers[this.src];
			var sourceNode = this.sourceNode;
			var context = this._owner.context;
			var endTime = sourceNode.startTime + buffer.duration;
			////////////////////////////////////////////////////////////
			if (this._remainingLoops != 0) {
				this._remainingLoops--; // NOTE this introduces a theoretical limit on loops = float max size x 2 - 1

				// OJR we are using a look ahead approach to ensure smooth looping. We add _sourceNodeNext to the audio
				// context so that it starts playing even if this callback is delayed. This technique and the reasons for
				// using it are described in greater detail here: http://www.html5rocks.com/en/tutorials/audio/scheduling/
				// NOTE the cost of this is that our audio loop may not always match the loop event timing precisely.
				if(this._sourceNodeNext) { // this can be set to null, but this should not happen when looping
					////////////////////////////////////////////////////////////
					// MODIFIED
					var magicPadding = buffer.padding || 0;
					var magicDelay = buffer.delay || 0;

					// HACK FOR GAPLESS LOOP
					// (loop with cross-fade because delay/padding cannot be obtained for some files)
					magicPadding += magicDelay; magicDelay = 0;

					// iOS 8 においてサスペンド・レジューム時に時間がずれてしまう場合があるので interval で時間の経過をチェックしてから cleanUpAudioNode を呼び出す (#216112)
					var cleanUpInterval = setInterval(function() {
						if (endTime < context.currentTime) {
							self._cleanUpAudioNode(sourceNode);
							clearInterval(cleanUpInterval);
						}
					}, 1000);
					this.sourceNode = this._sourceNodeNext;
					this._startTime = this.sourceNode.startTime - (magicDelay + magicPadding);

					this._sourceNodeNext = this._createAndPlayAudioNode(this._startTime, magicDelay);
					// サスペンド・レジューム等で時間がずれてしまう場合があるので、現在時刻との差分を確認する
					this._soundCompleteTimeout = setTimeout(this._endedHandler, Math.max(0, this._startTime - context.currentTime) * 1000 + this._duration);

					if (buffer.id3v2) { // the default value cannot be trusted
						this._sourceNodeNext.gain.setValueAtTime(this._sourceNodeNext.gain.value, this._sourceNodeNext.startTime + (this._duration/1000) - (magicDelay + magicPadding));
						this._sourceNodeNext.gain.linearRampToValueAtTime(0, this._sourceNodeNext.startTime + (this._duration/1000) - magicDelay);
						this._sourceNodeNext.gain.cancelScheduledValues(this._sourceNodeNext.startTime + (this._duration/1000) - magicDelay + 1);
					}

					////////////////////////////////////////////////////////////
				}
				else {
					this._handleSoundReady(null);
				}

				this._sendEvent("loop");
				return;
			}

			if (window.createjs == null) {
				return;
			}
			////////////////////////////////////////////////////////////
			// MODIFIED
			this.playState = createjs.Sound.PLAY_FINISHED;
			this._sendEvent("complete");
			var cleanUpInterval = setInterval((function f() {
				if (self.playState !== createjs.Sound.PLAY_FINISHED) {
					// 再生状態が変わったので clean up しない
					clearInterval(cleanUpInterval);
				} else if (endTime < context.currentTime) {
					self._cleanUp();
					clearInterval(cleanUpInterval);
				}
				return f;
			}()), 1000);
			////////////////////////////////////////////////////////////
		};

	}).call(this);

});
