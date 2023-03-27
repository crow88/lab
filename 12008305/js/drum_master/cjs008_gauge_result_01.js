(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.cjs008_gauge_result_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cjs008_gauge_result_01.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2));

	// レイヤー 14
	this.cjs008_gauge_result_01 = new lib.cjs008_gauge_result_01_gauge_container();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cjs008_gauge_result_01}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:
(lib.cjs008_gauge_rainbow = function() {
	this.sourceRect=new cjs.Rectangle(8,200,350,59);
    this.initialize(img.cjs008_gauge_result_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,59);


(lib.result_gauge_1 = function() {
	this.sourceRect=new cjs.Rectangle(8,104,536,88);
    this.initialize(img.cjs008_gauge_result_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,536,88);


(lib.result_gauge_2 = function() {
	this.sourceRect=new cjs.Rectangle(8,8,536,88);
    this.initialize(img.cjs008_gauge_result_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,536,88);


(lib.cjs008_gauge_result_01_point = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scale_off:0,scale_on:10,scale_flash:20,scale_clear_off:30,scale_clear_on:42});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_41 = function() {
		this.stop();
	}
	this.frame_53 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(1).call(this.frame_20).wait(9).call(this.frame_29).wait(12).call(this.frame_41).wait(12).call(this.frame_53));

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D0000").s().p("AgsG4IAAtvIBZAAIAANvg");
	this.shape.setTransform(4.5,44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F12102").s().p("AgsG4IAAtvIBZAAIAANvg");
	this.shape_1.setTransform(4.5,44);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFB00").s().p("AgsG4IAAtvIBZAAIAANvg");
	this.shape_2.setTransform(4.5,44);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#644700").s().p("AgsG4IAAtvIBZAAIAANvg");
	this.shape_3.setTransform(4.5,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},10).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape_2}]},12).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,88);


(lib.cjs008_gauge_result_01_image_gauge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{frame1:0,frame2:7});

	// timeline functions:
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(7).call(this.frame_13));

	// レイヤー 4
	this.instance = new lib.result_gauge_2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},7).wait(7));

	// レイヤー 3
	this.instance_1 = new lib.result_gauge_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[]},7).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,536,88);


(lib.cjs008_gauge_result_01_gauge_rainbow = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.cjs008_gauge_rainbow();
	this.instance.setTransform(350,0);

	this.instance_1 = new lib.cjs008_gauge_rainbow();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,700,59);


(lib.cjs008_gauge_result_01_rainbow_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:0});

	// レイヤー 2
	this.instance = new lib.cjs008_gauge_result_01_gauge_rainbow();
	this.instance.setTransform(-349.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-262.3},1).to({x:-174.8},1).to({x:-87.3},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-349.9,0,700,59);


(lib.cjs008_gauge_result_01_gauge_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{normal:1,rainbow:10});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.gotoAndPlay("normal");
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.play();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1).call(this.frame_10).wait(10).call(this.frame_20));

	// TEST:frame
	this.gauge_frame = new lib.cjs008_gauge_result_01_image_gauge();
	this.gauge_frame.setTransform(208,36,1,1,0,0,0,208,36);
	this.gauge_frame._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gauge_frame).wait(1).to({_off:false},0).wait(20));

	// soul
	this.rainbow_container = new lib.cjs008_gauge_result_01_rainbow_container();
	this.rainbow_container.setTransform(3,3,1.349,1.349);
	this.rainbow_container._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rainbow_container).wait(1).wait(9).to({_off:false},0).wait(11));

	// s50
	this.s48 = new lib.cjs008_gauge_result_01_point();
	this.s48.setTransform(428,0);
	this.s48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s48).wait(1).to({_off:false},0).wait(20));

	// s49
	this.s50 = new lib.cjs008_gauge_result_01_point();
	this.s50.setTransform(446,0);
	this.s50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s50).wait(1).to({_off:false},0).wait(20));

	// s48
	this.s49 = new lib.cjs008_gauge_result_01_point();
	this.s49.setTransform(437,0);
	this.s49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s49).wait(1).to({_off:false},0).wait(20));

	// s47
	this.s47 = new lib.cjs008_gauge_result_01_point();
	this.s47.setTransform(419,0);
	this.s47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s47).wait(1).to({_off:false},0).wait(20));

	// s46
	this.s46 = new lib.cjs008_gauge_result_01_point();
	this.s46.setTransform(410,0);
	this.s46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s46).wait(1).to({_off:false},0).wait(20));

	// s45
	this.s45 = new lib.cjs008_gauge_result_01_point();
	this.s45.setTransform(401,0);
	this.s45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s45).wait(1).to({_off:false},0).wait(20));

	// s44
	this.s44 = new lib.cjs008_gauge_result_01_point();
	this.s44.setTransform(392,0);
	this.s44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s44).wait(1).to({_off:false},0).wait(20));

	// s43
	this.s43 = new lib.cjs008_gauge_result_01_point();
	this.s43.setTransform(383,0);
	this.s43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s43).wait(1).to({_off:false},0).wait(20));

	// s42
	this.s42 = new lib.cjs008_gauge_result_01_point();
	this.s42.setTransform(374,0);
	this.s42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s42).wait(1).to({_off:false},0).wait(20));

	// s41
	this.s41 = new lib.cjs008_gauge_result_01_point();
	this.s41.setTransform(365,0);
	this.s41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s41).wait(1).to({_off:false},0).wait(20));

	// s40
	this.s40 = new lib.cjs008_gauge_result_01_point();
	this.s40.setTransform(356,0);
	this.s40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s40).wait(1).to({_off:false},0).wait(20));

	// s39
	this.s39 = new lib.cjs008_gauge_result_01_point();
	this.s39.setTransform(347,0);
	this.s39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s39).wait(1).to({_off:false},0).wait(20));

	// s38
	this.s38 = new lib.cjs008_gauge_result_01_point();
	this.s38.setTransform(338,0);
	this.s38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s38).wait(1).to({_off:false},0).wait(20));

	// s37
	this.s37 = new lib.cjs008_gauge_result_01_point();
	this.s37.setTransform(329,0);
	this.s37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s37).wait(1).to({_off:false},0).wait(20));

	// s36
	this.s36 = new lib.cjs008_gauge_result_01_point();
	this.s36.setTransform(320,0);
	this.s36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s36).wait(1).to({_off:false},0).wait(20));

	// s35
	this.s35 = new lib.cjs008_gauge_result_01_point();
	this.s35.setTransform(311,0);
	this.s35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s35).wait(1).to({_off:false},0).wait(20));

	// s34
	this.s34 = new lib.cjs008_gauge_result_01_point();
	this.s34.setTransform(302,0);
	this.s34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s34).wait(1).to({_off:false},0).wait(20));

	// s33
	this.s33 = new lib.cjs008_gauge_result_01_point();
	this.s33.setTransform(293,0);
	this.s33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s33).wait(1).to({_off:false},0).wait(20));

	// s32
	this.s32 = new lib.cjs008_gauge_result_01_point();
	this.s32.setTransform(284,0);
	this.s32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s32).wait(1).to({_off:false},0).wait(20));

	// s31
	this.s31 = new lib.cjs008_gauge_result_01_point();
	this.s31.setTransform(275,0);
	this.s31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s31).wait(1).to({_off:false},0).wait(20));

	// s30
	this.s30 = new lib.cjs008_gauge_result_01_point();
	this.s30.setTransform(266,0);
	this.s30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s30).wait(1).to({_off:false},0).wait(20));

	// s29
	this.s29 = new lib.cjs008_gauge_result_01_point();
	this.s29.setTransform(257,0);
	this.s29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s29).wait(1).to({_off:false},0).wait(20));

	// s28
	this.s28 = new lib.cjs008_gauge_result_01_point();
	this.s28.setTransform(248,0);
	this.s28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s28).wait(1).to({_off:false},0).wait(20));

	// s27
	this.s27 = new lib.cjs008_gauge_result_01_point();
	this.s27.setTransform(239,0);
	this.s27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s27).wait(1).to({_off:false},0).wait(20));

	// s26
	this.s26 = new lib.cjs008_gauge_result_01_point();
	this.s26.setTransform(230,0);
	this.s26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s26).wait(1).to({_off:false},0).wait(20));

	// s25
	this.s25 = new lib.cjs008_gauge_result_01_point();
	this.s25.setTransform(221,0);
	this.s25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s25).wait(1).to({_off:false},0).wait(20));

	// s24
	this.s24 = new lib.cjs008_gauge_result_01_point();
	this.s24.setTransform(212,0);
	this.s24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s24).wait(1).to({_off:false},0).wait(20));

	// s23
	this.s23 = new lib.cjs008_gauge_result_01_point();
	this.s23.setTransform(203,0);
	this.s23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s23).wait(1).to({_off:false},0).wait(20));

	// s22
	this.s22 = new lib.cjs008_gauge_result_01_point();
	this.s22.setTransform(194,0);
	this.s22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s22).wait(1).to({_off:false},0).wait(20));

	// s21
	this.s21 = new lib.cjs008_gauge_result_01_point();
	this.s21.setTransform(185,0);
	this.s21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s21).wait(1).to({_off:false},0).wait(20));

	// s20
	this.s20 = new lib.cjs008_gauge_result_01_point();
	this.s20.setTransform(176,0);
	this.s20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s20).wait(1).to({_off:false},0).wait(20));

	// s19
	this.s19 = new lib.cjs008_gauge_result_01_point();
	this.s19.setTransform(167,0);
	this.s19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s19).wait(1).to({_off:false},0).wait(20));

	// s18
	this.s18 = new lib.cjs008_gauge_result_01_point();
	this.s18.setTransform(158,0);
	this.s18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s18).wait(1).to({_off:false},0).wait(20));

	// s17
	this.s17 = new lib.cjs008_gauge_result_01_point();
	this.s17.setTransform(149,0);
	this.s17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s17).wait(1).to({_off:false},0).wait(20));

	// s16
	this.s16 = new lib.cjs008_gauge_result_01_point();
	this.s16.setTransform(140,0);
	this.s16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s16).wait(1).to({_off:false},0).wait(20));

	// s15
	this.s15 = new lib.cjs008_gauge_result_01_point();
	this.s15.setTransform(131,0);
	this.s15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s15).wait(1).to({_off:false},0).wait(20));

	// s14
	this.s14 = new lib.cjs008_gauge_result_01_point();
	this.s14.setTransform(122,0);
	this.s14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s14).wait(1).to({_off:false},0).wait(20));

	// s13
	this.s13 = new lib.cjs008_gauge_result_01_point();
	this.s13.setTransform(113,0);
	this.s13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s13).wait(1).to({_off:false},0).wait(20));

	// s12
	this.s12 = new lib.cjs008_gauge_result_01_point();
	this.s12.setTransform(104,0);
	this.s12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s12).wait(1).to({_off:false},0).wait(20));

	// s11
	this.s11 = new lib.cjs008_gauge_result_01_point();
	this.s11.setTransform(95,0);
	this.s11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s11).wait(1).to({_off:false},0).wait(20));

	// s10
	this.s10 = new lib.cjs008_gauge_result_01_point();
	this.s10.setTransform(86,0);
	this.s10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s10).wait(1).to({_off:false},0).wait(20));

	// s9
	this.s9 = new lib.cjs008_gauge_result_01_point();
	this.s9.setTransform(77,0);
	this.s9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s9).wait(1).to({_off:false},0).wait(20));

	// s8
	this.s8 = new lib.cjs008_gauge_result_01_point();
	this.s8.setTransform(68,0);
	this.s8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s8).wait(1).to({_off:false},0).wait(20));

	// s7
	this.s7 = new lib.cjs008_gauge_result_01_point();
	this.s7.setTransform(59,0);
	this.s7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s7).wait(1).to({_off:false},0).wait(20));

	// s6
	this.s6 = new lib.cjs008_gauge_result_01_point();
	this.s6.setTransform(50,0);
	this.s6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s6).wait(1).to({_off:false},0).wait(20));

	// s5
	this.s5 = new lib.cjs008_gauge_result_01_point();
	this.s5.setTransform(41,0);
	this.s5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s5).wait(1).to({_off:false},0).wait(20));

	// s4
	this.s4 = new lib.cjs008_gauge_result_01_point();
	this.s4.setTransform(32,0);
	this.s4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s4).wait(1).to({_off:false},0).wait(20));

	// s3
	this.s3 = new lib.cjs008_gauge_result_01_point();
	this.s3.setTransform(23,0);
	this.s3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s3).wait(1).to({_off:false},0).wait(20));

	// s2
	this.s2 = new lib.cjs008_gauge_result_01_point();
	this.s2.setTransform(14,0);
	this.s2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s2).wait(1).to({_off:false},0).wait(20));

	// s1
	this.s1 = new lib.cjs008_gauge_result_01_point();
	this.s1.setTransform(5,0);
	this.s1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(1).to({_off:false},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;