(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.cjs001_hop_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cjs001_hop_01.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2));

	// mc
	this.cjs001_hop_01 = new lib.cjs001_hop_01_1();
	this.cjs001_hop_01.setTransform(24.5,24.5,1,1,0,0,0,24.5,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cjs001_hop_01}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:
(lib.cjs001_hop_01_pinya_1 = function() {
	this.sourceRect=new cjs.Rectangle(8,8,92,127);
    this.initialize(img.cjs001_hop_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,127);


(lib.cjs001_hop_01_pinya_2 = function() {
	this.sourceRect=new cjs.Rectangle(108,8,92,127);
    this.initialize(img.cjs001_hop_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,127);


(lib.cjs001_hop_01_soul1 = function() {
	this.sourceRect=new cjs.Rectangle(128,143,112,56);
    this.initialize(img.cjs001_hop_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,56);


(lib.cjs001_hop_01_soul2 = function() {
	this.sourceRect=new cjs.Rectangle(8,143,112,56);
    this.initialize(img.cjs001_hop_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,56);


(lib.mc_chara = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img
	this.instance = new lib.cjs001_hop_01_pinya_1();
	this.instance.setTransform(-45.9,-126.9);

	this.instance_1 = new lib.cjs001_hop_01_pinya_2();
	this.instance_1.setTransform(-45.9,-125.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-126.9,92,127);


(lib.cjs001_hop_01_soul = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3));

	// img
	this.instance = new lib.cjs001_hop_01_soul1();
	this.instance.setTransform(0,-6.9,0.25,0.25);

	this.instance_1 = new lib.cjs001_hop_01_soul2();
	this.instance_1.setTransform(0,-27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.25,scaleY:0.25,y:-6.9}}]}).to({state:[{t:this.instance,p:{scaleX:0.5,scaleY:0.5,y:-13.9}}]},1).to({state:[{t:this.instance,p:{scaleX:0.75,scaleY:0.75,y:-20.9}}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6.9,28,14);


(lib.mc_hop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{animation_start:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.play();
	}
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(17).call(this.frame_18));

	// mc
	this.mc_chara = new lib.mc_chara();
	this.mc_chara.setTransform(0,-0.9);
	this.mc_chara._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_chara).wait(1).to({_off:false},0).wait(1).to({x:44},0).wait(1).to({x:87},0).wait(1).to({x:127,y:40},0).wait(1).to({x:166,y:29},0).wait(1).to({x:204,y:34},0).wait(1).to({x:243,y:40},0).wait(1).to({x:279,y:29},0).wait(1).to({x:319,y:34},0).wait(1).to({x:360,y:40},0).wait(1).to({x:402,y:29},0).wait(1).to({x:440,y:34},0).wait(1).to({x:482,y:40},0).wait(1).to({x:522,y:29},0).wait(1).to({x:563,y:34},0).wait(1).to({x:602,y:40},0).wait(1).to({x:648,y:29},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mc_chara_bad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"animation_start":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18));

	// mc
	this.instance = new lib.cjs001_hop_01_soul();
	this.instance.setTransform(11.5,11.5,1,1,0,0,0,11.5,11.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({x:51.5,y:12.5},0).wait(1).to({x:91.5,y:2.5},0).wait(1).to({x:131.5,y:-7.3},0).wait(1).to({x:171.5,y:-17.3},0).wait(1).to({x:211.5,y:-27.3},0).wait(1).to({x:251.5,y:-17.3},0).wait(1).to({x:291.5,y:2.5},0).wait(1).to({x:331.5,y:12.5},0).wait(1).to({x:371.5,y:2.5},0).wait(1).to({x:411.5,y:-17.3},0).wait(1).to({x:451.5,y:-27.3},0).wait(1).to({x:491.5,y:-17.3},0).wait(1).to({x:531.5,y:2.5},0).wait(1).to({x:571.5,y:12.5},0).wait(1).to({x:611.5,y:2.5},0).wait(1).to({x:651.5,y:-17.3},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.cjs001_hop_01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0));

	// chara_bad
	this.mc_chara_bad = new lib.mc_chara_bad();
	this.mc_chara_bad.setTransform(38,23.5,1,1,0,0,0,38,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_chara_bad}]}).wait(1));

	// chara
	this.mc_hop = new lib.mc_hop();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_hop}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;