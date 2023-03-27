(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.cjs009_cutin_result_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cjs009_cutin_result_01.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2));

	// mc
	this.cjs009_cutin_result_01 = new lib.cjs009_cutin_result_01_cutin();
	this.cjs009_cutin_result_01.setTransform(0,-15.9,1,1,0,0,0,248,114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cjs009_cutin_result_01}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-199.9,110,292.9);


// symbols:
(lib.cjs009_cutin_result_01_flower_left = function() {
	this.sourceRect=new cjs.Rectangle(8,8,324,334);
    this.initialize(img.cjs009_cutin_result_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,334);


(lib.cjs009_cutin_result_01_flower_right = function() {
	this.sourceRect=new cjs.Rectangle(8,350,314,344);
    this.initialize(img.cjs009_cutin_result_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,344);


(lib.cjs009_cutin_result_01_star_01 = function() {
	this.sourceRect=new cjs.Rectangle(8,702,104,94);
    this.initialize(img.cjs009_cutin_result_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,94);


(lib.cjs009_cutin_result_01_star_02 = function() {
	this.sourceRect=new cjs.Rectangle(120,702,44,44);
    this.initialize(img.cjs009_cutin_result_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,44);


(lib.cjs009_cutin_result_01_star_02_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.cjs009_cutin_result_01_star_02();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44,44);


(lib.cjs009_cutin_result_01_star_01_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.cjs009_cutin_result_01_star_01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,94);


(lib.cjs009_cutin_result_01_flower_right_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.cjs009_cutin_result_01_flower_right();
	this.instance.setTransform(-156.9,-281.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-156.9,-281.9,314,344);


(lib.cjs009_cutin_result_01_flower_left_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.cjs009_cutin_result_01_flower_left();
	this.instance.setTransform(-161.9,-267.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-161.9,-267.9,324,334);


(lib.cjs009_cutin_result_01_star_02_core = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img
	this.instance = new lib.cjs009_cutin_result_01_star_02_1();
	this.instance.setTransform(22,22,0.639,0.639,0,0,0,22.1,22);
	this.instance.alpha = 0.43;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.71,scaleY:0.71,x:22.1,alpha:0.539},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:22,alpha:0.855},0).wait(1).to({regX:22,scaleX:0.98,scaleY:0.98,alpha:0.961},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:22.1,y:22.1,alpha:0.934},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:22,y:22,alpha:0.832},0).wait(1).to({scaleX:0.78,scaleY:0.78,alpha:0.641},0).wait(1).to({regX:21.9,regY:21.9,scaleX:0.67,scaleY:0.67,alpha:0.453},0).wait(1).to({scaleX:0.61,scaleY:0.61,alpha:0.355},0).wait(1).to({regX:22.1,regY:22.1,scaleX:0.6,scaleY:0.6,x:22.1,y:22.1,alpha:0.328},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.9,8,28.1,28.1);


(lib.cjs009_cutin_result_01_star_01_core = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mc
	this.instance = new lib.cjs009_cutin_result_01_star_01_1();
	this.instance.setTransform(52,47,0.63,0.63,0,0,0,52,47);
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.67,scaleY:0.67,x:52.1,alpha:0.281},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:52,y:47.1,alpha:0.59},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:47,alpha:0.891},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.969},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.922},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:52.1,alpha:0.73},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:52,alpha:0.441},0).wait(1).to({scaleX:0.53,scaleY:0.53,alpha:0.25},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.199},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.3,17.4,65.5,59.2);


(lib.cjs009_cutin_result_01_star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{off:0,on:5});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(13).call(this.frame_17));

	// star_02
	this.instance = new lib.cjs009_cutin_result_01_star_02_core();
	this.instance.setTransform(100,124,0.728,0.728,0,0,0,22,22);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).wait(5));

	// star_02
	this.instance_1 = new lib.cjs009_cutin_result_01_star_02_core();
	this.instance_1.setTransform(-290,174.1,0.909,0.909,0,0,0,21.9,22.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(9));

	// star_02
	this.instance_2 = new lib.cjs009_cutin_result_01_star_02_core();
	this.instance_2.setTransform(-271.9,134,1,1,0,0,0,22,22);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).wait(3));

	// star_02
	this.instance_3 = new lib.cjs009_cutin_result_01_star_02_core();
	this.instance_3.setTransform(-285.4,-59.4,0.841,0.841,0,0,0,22,22);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).wait(5));

	// star_02
	this.instance_4 = new lib.cjs009_cutin_result_01_star_02_core();
	this.instance_4.setTransform(-186.9,-0.9,1,1,0,0,0,22,22);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).wait(7));

	// star_02
	this.instance_5 = new lib.cjs009_cutin_result_01_star_02_core();
	this.instance_5.setTransform(-396,-57.9,0.728,0.728,0,0,0,22,22);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({_off:false},0).wait(2));

	// star_02
	this.instance_6 = new lib.cjs009_cutin_result_01_star_02_core();
	this.instance_6.setTransform(5,-64.7,1,1,0,0,0,22,22);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).wait(4));

	// star_02
	this.instance_7 = new lib.cjs009_cutin_result_01_star_02_core();
	this.instance_7.setTransform(130,-61.7,1,1,0,0,0,22,22);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11).to({_off:false},0).wait(7));

	// star_02
	this.instance_8 = new lib.cjs009_cutin_result_01_star_02_core();
	this.instance_8.setTransform(40.9,180.9,0.818,0.818,0,0,0,21.9,21.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).wait(9));

	// star_02
	this.instance_9 = new lib.cjs009_cutin_result_01_star_02_core();
	this.instance_9.setTransform(176,-11,1,1,0,0,0,22,22);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(7).to({_off:false},0).wait(11));

	// star_02
	this.instance_10 = new lib.cjs009_cutin_result_01_star_02_core();
	this.instance_10.setTransform(-383.9,42,1,1,0,0,0,22,22);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(5).to({_off:false},0).wait(13));

	// star_01
	this.instance_11 = new lib.cjs009_cutin_result_01_star_01_core();
	this.instance_11.setTransform(188.3,-63.7,0.61,0.61,-42.9,0,0,51.9,47);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(16).to({_off:false},0).wait(2));

	// star_01
	this.instance_12 = new lib.cjs009_cutin_result_01_star_01_core();
	this.instance_12.setTransform(-208.2,59.4,0.61,0.61,-42.9,0,0,51.9,47);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(13).to({_off:false},0).wait(5));

	// star_01
	this.instance_13 = new lib.cjs009_cutin_result_01_star_01_core();
	this.instance_13.setTransform(-388.7,99.3,0.36,0.358,0,-12.8,-12.6,52.1,46.8);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({_off:false},0).wait(13));

	// star_01
	this.instance_14 = new lib.cjs009_cutin_result_01_star_01_core();
	this.instance_14.setTransform(-154.9,-74.3,0.9,0.9,0,-46,-45.8,52,47.1);

	this.instance_15 = new lib.cjs009_cutin_result_01_star_01_core();
	this.instance_15.setTransform(-336.8,146.8,0.9,0.9,0,-46,-45.8,52,47.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15},{t:this.instance_14}]},9).wait(9));

	// star_01
	this.instance_16 = new lib.cjs009_cutin_result_01_star_01_core();
	this.instance_16.setTransform(-259.9,36.3,0.358,0.36,0,-4.9,-4.9,52,47);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(17).to({_off:false},0).wait(1));

	// star_01
	this.instance_17 = new lib.cjs009_cutin_result_01_star_01_core();
	this.instance_17.setTransform(-348.5,-22.3,0.894,0.899,-8.9,0,0,51.9,47.1);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(15).to({_off:false},0).wait(3));

	// star_01
	this.instance_18 = new lib.cjs009_cutin_result_01_star_01_core();
	this.instance_18.setTransform(81.1,166.7,0.435,0.438,0,-56.4,-55.4,52.1,47.1);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(13).to({_off:false},0).wait(5));

	// star_01
	this.instance_19 = new lib.cjs009_cutin_result_01_star_01_core();
	this.instance_19.setTransform(183,120.2,0.36,0.358,0,-12.8,-12.6,52.1,46.8);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(11).to({_off:false},0).wait(7));

	// star_01
	this.instance_20 = new lib.cjs009_cutin_result_01_star_01_core();
	this.instance_20.setTransform(151,73.1,0.849,0.852,0,13,13,52,47.1);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(9).to({_off:false},0).wait(9));

	// star_01
	this.instance_21 = new lib.cjs009_cutin_result_01_star_01_core();
	this.instance_21.setTransform(91,-49.4,0.442,0.436,0,0,0,52,46.9);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(7).to({_off:false},0).wait(11));

	// star_01
	this.instance_22 = new lib.cjs009_cutin_result_01_star_01_core();
	this.instance_22.setTransform(-21.4,11.5,1.01,1.011,0,0,0,52,47);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(5).to({_off:false},0).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.cjs009_cutin_result_01_flower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":4});

	// timeline functions:
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(10).call(this.frame_13));

	// flower_left
	this.instance = new lib.cjs009_cutin_result_01_flower_left_1();
	this.instance.setTransform(-412.6,157.2,0.593,0.593,0,0,0,-161.9,66);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:157.3},0).wait(1).to({regX:-161.9,scaleX:1.03,scaleY:1.03,x:-412.6,y:157.2},0).wait(1).to({regX:-161.8,scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1,y:157.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(3));

	// flower_right
	this.flower_right = new lib.cjs009_cutin_result_01_flower_right_1();
	this.flower_right.setTransform(416.1,157.2,0.593,0.593,0,0,0,157,62);
	this.flower_right._off = true;

	this.timeline.addTween(cjs.Tween.get(this.flower_right).wait(4).to({_off:false},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:416,y:157.1},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({regY:62.1,scaleX:1.01,scaleY:1.01,y:157.2},0).wait(1).to({regY:62,scaleX:0.99,scaleY:0.99,x:416.1,y:157.1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.cjs009_cutin_result_01_cutin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0));

	// flower
	this.flower = new lib.cjs009_cutin_result_01_flower();
	this.flower.setTransform(408.9,389.9,1,1,0,0,0,162,167);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.flower}]}).wait(1));

	// star
	this.star = new lib.cjs009_cutin_result_01_star();
	this.star.setTransform(408.9,-22.9,1,1,0,0,0,52,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;