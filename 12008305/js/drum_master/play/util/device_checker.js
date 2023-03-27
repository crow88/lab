define([
	'underscore',
	], function( _ ) {

	"use strict";

	var DeviceChecker = {
		isPcAndNotChromeSafari: function ( userAgent ) {
			return ( ( ! this.isAndroid(userAgent) ) && ( ! this.isIos(userAgent) ) && -1 == userAgent.indexOf("Mobile") && // isPC
					-1 == userAgent.indexOf("Chrome") &&
					-1 == userAgent.indexOf("Safari"));
		},
		isAndroid: function (userAgent) {
			return	0 <= userAgent.indexOf("Android");
		},
		isAndroidChrome: function (userAgent) {
			return	0 <= userAgent.indexOf("Android") &&
					0 <= userAgent.indexOf("Chrome");
		},
		isAndroidDefBrowser2or3or4: function (userAgent ) {
			return ( ! this.isAndroidChrome( userAgent ) ) && ( userAgent.match(/Android\s(2|3|4)/) );
		},
		isAndroidDefBrowser4_0OrLess: function ( userAgent ) {
			return ( ! this.isAndroidChrome( userAgent ) ) && ( userAgent.match(/Android\s(2|3|4.0)/) ) ;
		},
		isAndroidDefBrowser4_1OrLess: function ( userAgent ) {
			return ( ! this.isAndroidChrome( userAgent ) ) && ( userAgent.match(/Android\s(2|3|4.0|4.1)/) ) ;
		},
		isAndroidEqGreater5: function ( userAgent ) {
			return userAgent.match(/Android\s(5|6|7)/);
		},
		isAndroidNexus5x6p: function (userAgent) {
			return userAgent.match(/Nexus\s6P/) || userAgent.match(/Nexus\s5X/);
		},
		isAndroidNexus: function ( userAgent ) {
			return 0 <= userAgent.indexOf("Nexus");
		},
		isAndroid2345Tablet: function (userAgent) {
			return userAgent.match(/Android\s(2|3|4|5)/) && - 1 == userAgent.indexOf("Mobile");
		},
		isAndroidIsai: function (userAgent) {
			return userAgent.match(/\sLG(V32|V31|L24|L22)\s/);
		},
		isAndroidOldGalaxy: function (userAgent) {
			return userAgent.match(/\sSC\-0[1234]\w\s/);
		},
		isIphone4: function ( userAgent ) {
			if ( 0 <= userAgent.indexOf("iPhone") ) {
				var heightPx = window.screen.height;
				if ( _.isNumber ( window.devicePixelRatio ) ){
					heightPx *= window.devicePixelRatio;
				}
				return heightPx == 960;
			}
		},
		isIos9_012: function ( userAgent ) {
			return userAgent.match(/iPhone\sOS\s9_[012]/) || userAgent.match(/iPad;\sCPU\sOS\s9_[012]/);
		},
		isIos: function ( userAgent ) {
			return userAgent.match(/(iPhone|iPad)/);
		},
		isIosVerEqualGreaterThan6: function (userAgent) {
			return this.isIos(userAgent) &&
			( ! ( userAgent.match(/iPhone\sOS\s[2345]/) || userAgent.match(/iPad;\sCPU\sOS\s[345]/) ) );
		},
		isIpad12OrMini1: function (userAgent ) {
			if ( 0 <= userAgent.indexOf("iPad") ) {
				var widthPx  = window.screen.width;
				var heightPx = window.screen.height;
				if ( _.isNumber ( window.devicePixelRatio ) ){
					widthPx  *= window.devicePixelRatio;
					heightPx *= window.devicePixelRatio;
				}
				return widthPx === 768 && heightPx === 1024 ;
			}
			return false;
		},
		// アプリが強制終了する Android WebView 一覧
		isAndroidWebViewNexus5X: function(userAgent) { // Nexus 5X LG-H791
			// e.g. 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/48.0.2564.106 Mobile Safari/537.36'
			return userAgent.match(/ Android .*; Nexus 5X /);
		},
		isAndroidWebViewNexus6P: function(userAgent) { // Nexus 6P
			// e.g. 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 6P Build/MMB29P; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/48.0.2564.106 Mobile Safari/537.36'
			return userAgent.match(/ Android .*; Nexus 6P /);
		},

		// 楽曲を再生できない Android WebView 一覧
		isAndroidWebViewSH01G: function(userAgent) { // AQUOS ZETA SH-01G
			// e.g. 'Mozilla/5.0 (Linux; Android 4.4.4; SH-01G Build/S7070) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36'
			return userAgent.match(/ Android .*; SH-01G /);
		},
		isAndroidWebViewMT7J1: function(userAgent) { // Ascend Mate7 MT7-J1
			// e.g. 'Mozilla/5.0 (Linux; Android 4.4.2; HUAWEI MT7-J1 Build/HuaweiMT7-J1) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36'
			return userAgent.match(/ Android .*; HUAWEI MT7-J1 /);
		},
		isAndroidWebViewAST21: function(userAgent) { // ASUS MeMO Pad 8 AST21
			// e.g. 'Mozilla/5.0 (Linux; Android 4.4.2; AST21 Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Safari/537.36'
			return userAgent.match(/ Android .*; AST21 /);
		},
		isAndroidWebViewKYL22: function(userAgent) { // DIGNO M KYL22
			// e.g. 'Mozilla/5.0 (Linux; U; Android 4.2.2; ja-; KYL22 Build/100.1.1f00) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
			return userAgent.match(/ Android .*; KYL22 /);
		},
		isAndroidWebViewGTI9300: function(userAgent) { // Galaxy S III GT-I9300
			// e.g. 'Mozilla/5.0 (Linux; U; Android 4.0.4; ja-; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
			return userAgent.match(/ Android .*; GT-I9300 /);
		},
		isAndroidWebViewSC05G: function(userAgent) { // Galaxy S6 SC-05G
			// e.g. 'Mozilla/5.0 (Linux; Android 5.0.2; SC-05G Build/LRX22G; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36'
			return userAgent.match(/ Android .*; SC-05G /);
		},
		isAndroidWebViewSCT21: function(userAgent) { // GALAXY Tab S SCT21
			// e.g. 'Mozilla/5.0 (Linux; Android 4.4.4; SCT21 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Safari/537.36'
			return userAgent.match(/ Android .*; SCT21 /);
		},
		isAndroidWebViewNexus10: function(userAgent) { // Nexus 10
			// e.g. 'Mozilla/5.0 (Linux; Android 5.0; Nexus 10 Build/LRX21P; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/46.0.2490.76 Safari/537.36'
			return userAgent.match(/ Android .*; Nexus 10 /);
		},
		isAndroidWebViewNexus4: function(userAgent) { // Nexus 4
			// e.g. 'Mozilla/5.0 (Linux; U; Android 4.3; ja-; Nexus 4 Build/JWR66V) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
			return userAgent.match(/ Android .*; Nexus 4 /);
		},
		isAndroidWebViewSGPT12: function(userAgent) { // Xperia Tablet S
			// e.g. 'Mozilla/5.0 (Linux; U; Android 4.1.1; ja-; SGPT12 Build/TJDSU0177) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30'
			return userAgent.match(/ Android .*; SGPT12 /);
		},
		isAndroidWebViewSOL24: function(userAgent) { // Xperia Z Ultra SOL24
			// e.g. 'Mozilla/5.0 (Linux; Android 4.4.2; SOL24 Build/14.3.C.0.239) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36'
			return userAgent.match(/ Android .*; SOL24 /);
		},
		isAndroidWebViewSOT21: function(userAgent) { // Xperia Z2 Tablet SOT21
			// e.g. 'Mozilla/5.0 (Linux; Android 4.4.2; SOT21 Build/17.1.1.C.1.45) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Safari/537.36'
			return userAgent.match(/ Android .*; SOT21 /);
		},
		isAndroidWebViewSC01F: function(userAgent) { // GALAXY Note 3 SC-01F
			// e.g. 'Mozilla/5.0 (Linux; U; Android 4.3; ja-; SC-01F Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
			return userAgent.match(/ Android .*; SC-01F /);
		},
		isAndroidWebViewME173X: function(userAgent) { // MeMO Pad HD7 ME173-BL16
			// e.g. 'Mozilla/5.0 (Linux; U; Android 4.2.2; ja-; ME173X Build/JDQ39) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30'
			return userAgent.match(/ Android .*; ME173X /);
		},
		isAndroidWebViewF03G: function(userAgent) { // ARROWS Tab F-03G
			// e.g. 'Mozilla/5.0 (Linux; Android 4.4.4; F-03G Build/V11R27F) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Safari/537.36'
			return userAgent.match(/ Android .*; F-03G /);
		},
		isAndroidWebViewSHV31: function(userAgent) { // AQUOS SERITE mini SHV31
			// e.g. 'Mozilla/5.0 (Linux; Android 4.4.4; SHV31 Build/S1190) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36'
			return userAgent.match(/ Android .*; SHV31 /);
		},
		isAndroidWebView305SH: function(userAgent) { // AQUOS CRYSTAL 305SH
			// e.g. 'Mozilla/5.0 (Linux; Android 4.4.4; 305SH Build/S0114) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36'
			return userAgent.match(/ Android .*; 305SH /);
		},

		// FIXME AQUOS CRYSTAL 403SH の UA が不明なので調べて追加

		isAndroidWebViewSC01H: function(userAgent) { // GALAXY Active neo Sc-01H
			// e.g. 'Mozilla/5.0 (Linux; Android 5.1.1; SC-01H Build/LMY47X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/48.0.2564.106 Mobile Safari/537.36'
			return userAgent.match(/ Android .*; SC-01H /);
		},
		isAndroidWebViewSH02G: function(userAgent) { // Disney Mobile on docomo SH-02G
			// e.g. 'Mozilla/5.0 (Linux; Android 4.4.4; SH-02G Build/SB050) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36'
			return userAgent.match(/ Android .*; SH-02G /);
		},
		isAndroidWebViewHW03E: function(userAgent) { // Ascend D2 HW-03E
			// e.g. 'Mozilla/5.0 (Linux; U; Android 4.1.2; ja-; HW-03E Build/HuaweiD2-6114) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
			return userAgent.match(/ Android .*; HW-03E /);
		},
		isAndroidWebViewLGL23: function(userAgent) { // G Flex LGL23
			// e.g. 'Mozilla/5.0 (Linux; U; Android 4.2.2; ja-; LGL23 Build/JDQ39B) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.2 Mobile Safari/534.30'
			return userAgent.match(/ Android .*; LGL23 /);
		},
		isAndroidWebViewAsusT00P: function(userAgent) { // ASUS Zenfone 5 LTE ASUS_T00P
			// e.g. 'Mozilla/5.0 (Linux; Android 4.4.2; ASUS_T00P Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36'
			return userAgent.match(/ Android .*; ASUS_T00P /);
		}
	};

	window.d = DeviceChecker;

	return DeviceChecker;

});
