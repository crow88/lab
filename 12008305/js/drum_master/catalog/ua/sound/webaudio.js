define(['underscore'], function(_) {

	var checkUA = function(targets) {
		var ua = Game.ua;

		var checkUserAgent = function(target) {
			if (! target.ua) { return true; }
			if (target.ua instanceof RegExp) {
				return target.ua.test(ua.ua);
			} else {
				return ua.ua === target.ua;
			}
		};

		var checkDeviceModel = function(target) {
			var device = target.device;
			if (! device) { return true; }
			var model = device.model;
			if (! model) { return true; }
			return ua.ua.indexOf(model) >= 0;
		};
		var checkOSName = function(target) {
			var os = target.os;
			if (! os) { return true; }
			var name = os.name;
			if (! name) { return true; }
			return ua.os.name == name;
		};
		var checkOSVersion = function(target) {
			var os = target.os;
			if (! os) { return true; }
			var version = os.version;
			if (! version) { return true; }
			return ua.os.version == version;
		};
		var checkBrowserName = function(target) {
			var browser = target.browser;
			if (! browser) { return true; }
			var name = browser.name;
			if (! name) { return true; }
			return ua.browser.name == name;
		};

		return _.some(targets, function(target) {
			return checkUserAgent(target) && checkDeviceModel(target) && checkOSName(target) && checkOSVersion(target) && checkBrowserName(target);
		});
	};

	return {
		/**
		 * Web Audio での音再生ができない端末判定
		 */
		cannotUseWebAudio: function() {
			var targets = [
				{ // SOL25 (標準ブラウザ)
					// https://sannen.cygames.jp/redmine/issues/201011
					// API的には対応しているが、何故か音が出ないもの
					ua: 'Mozilla/5.0 (Linux; U; Android 4.4.2; ja-jp; SOL25 Build/17.1.C.0.296) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
				},
				{ // SOL25 (Chrome)
					// https://sannen.cygames.jp/redmine/issues/201011
					// API的には対応しているが、何故か音が出ないもの
					ua: new RegExp('Mozilla/5\.0 \\(Linux; Android 4\.4\.2; SOL25 Build/17\.1\.C\.0\.296\\) AppleWebKit/537\.36 \\(KHTML, like Gecko\\) Chrome/[\.0-9]* Mobile Safari/537\.36')
				},
				{ // F-01F 4.4.2 (標準ブラウザ)
					// https://sannen.cygames.jp/redmine/issues/249245
					// AudioContext を初期化してから画面遷移するとブラウザがクラッシュするもの
					ua: 'Mozilla/5.0 (Linux; U; Android 4.4.2; ja-jp; F-01F Build/V10R22A) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
				},
				{ // SO-01F (Chrome)
					// https://sannen.cygames.jp/redmine/issues/248950
					// API的には対応しているが、何故か音が出ないもの
					ua: new RegExp('Mozilla/5\.0 \\(Linux; Android 4\.4\.2; SO-01F Build/14\.3\.B\.0\.288\\) AppleWebKit/537\.36 \\(KHTML, like Gecko\\) Chrome/[\.0-9]* Mobile Safari/537\.36')
				}
			];

			return checkUA(targets);
		},

		cannotDisconnectWithArguments: function() {
			var targets = [
				{ // HTC J One HTL22
					device: { model: 'HTL22' },
					os: { name: 'Android' }
				},
				{ // SO-02E (Android 4.2.2) 標準ブラウザ
					device: { model: 'SO-02E Build/10.3.1.B.0.256' },
					os: { name: 'Android', version: '4.2.2' },
					browser: { name: 'Mobile Safari' }
				}
			];
			// 特定端末にて AudioNode に対して引数付き disconnect を行うと Invalid index parameters というエラーが出てしまう
			// https://sannen.cygames.jp/redmine/issues/178021
			return checkUA(targets);
		},

		cannotStop: function() {
			var targets = [
				{ // GALAXY S4 SC-04E (Android 4.3)
					device: { model: 'SC-04E' },
					os: { name: 'Android', version: '4.3' }
				}
			];
			// 特定端末において AudioNode に対して stop を実行すると InvalidStateError: DOM Exception 11 というエラーが出てしまう
			// https://sannen.cygames.jp/redmine/issues/178160 に付随した問題
			return checkUA(targets);
		},

		cannotCreatePanner: function() {
			// #242242 Google Chrome 40.0.2214.111 (64-bit) において createPanner を行うとクラッシュする問題への対応
			// #249920 SonySO-02F において、左右の音量に差が出てしまうので、状況を限定
			// ただし Google Chrome においては UA の偽装が容易なため「左右音量に差が出る端末以外」という絞り方をする
			var targets = [
				{ // SonySO-02F (標準ブラウザ)
					ua: new RegExp('Mozilla/5\.0 \\(Linux; U; Android 4\.[0-9]+\.[0-9]+; ja-jp; SonySO-02F Build/[\.0-9a-zA-Z]*\\) AppleWebKit/[\.0-9]+ \\(KHTML, like Gecko\\) Version\/[\.0-9]* Mobile Safari/[\.0-9]+')
				}
			];

			// 「以外」が欲しいので真偽値を反転
			return ! checkUA(targets);
		},

		shouldUseDoublePlaybackRate: function() {
			var targets = [
				{ // GALAXY S4 SC-04E (Android 4.3)
					// 標準ブラウザでのみ発生する問題なので、細かく記述
					ua: 'Mozilla/5.0 (Linux; Android 4.3; ja-jp; SC-04E Build/JSS15J) AppleWebKit/537.36 (KHTML, like Gecko) Version/1.5 Chrome/28.0.1500.94 Mobile Safari/537.36'
				}
			];

			// 特定端末において再生速度が半分になってしまう
			// https://sannen.cygames.jp/redmine/issues/178160
			// https://sannen.cygames.jp/redmine/issues/187561
			return checkUA(targets);
		},

		shouldUseHalfPlaybackRate: function() {
			var targets = [
				{ // ASUS MeMO Pad HD7 (ME173X; Android 4.2.2) + Chrome
					device: { model: 'ME173X Build/JDQ39' },
					os: { name: 'Android', version: '4.2.2' },
					browser: { name: 'Chrome' } // 標準ブラウザはここが Safari になる
				}
			];
			// 特定端末において再生速度が倍になってしまう
			// https://sannen.cygames.jp/redmine/issues/184704
			return checkUA(targets);
		}
	};
});
