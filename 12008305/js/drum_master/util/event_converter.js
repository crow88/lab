define([
	'underscore'
], function( _ ) {

	var TOUCH_TO_MOUSE = {
		touchstart: "mousedown",
		touchend:   "mouseup",
		touchmove:  "mousemove",
	};

	var EventConverter = {

		isTouchDevice: function () {
			var rtn = false;
			if ( _.isNumber(window.navigator.maxTouchPoints) ) {
				rtn = 0 < window.navigator.maxTouchPoints;
			} else {
				rtn = 'ontouchstart' in document.documentElement;
			}
			console.log("isTouchDevice: " + rtn);
			return rtn;
		},

		convertToMouse: function ( touchEventName ) {
			if ( touchEventName.match(/^on.+/) ) {
				return "on" + TOUCH_TO_MOUSE[touchEventName];
			}
			return TOUCH_TO_MOUSE[touchEventName];
		},

		convertBackboneEvToMouse: function ( evObj ) {
			return _.reduce(evObj, function ( memo, funcName, evAndEl ) {
				_.each ( TOUCH_TO_MOUSE, function ( mouseEvName, touchEvName ) {
					evAndEl = evAndEl.replace(touchEvName, mouseEvName);
				});
				memo[evAndEl] = funcName;
				return memo;
			}, {} );
		},


	};

	return EventConverter;

});
