(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.cjs002_soul_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cjs002_soul_01.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2));

	// mc
	this.cjs002_soul_01 = new lib.cjs002_soul_01_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cjs002_soul_01}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:
(lib.cjs002_soul_01_fire1 = function() {
	this.sourceRect=new cjs.Rectangle(8,701,149,166);
    this.initialize(img.cjs002_soul_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,166);


(lib.cjs002_soul_01_fire2 = function() {
	this.sourceRect=new cjs.Rectangle(8,188,171,164);
    this.initialize(img.cjs002_soul_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,164);


(lib.cjs002_soul_01_fire3 = function() {
	this.sourceRect=new cjs.Rectangle(8,531,156,162);
    this.initialize(img.cjs002_soul_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,162);


(lib.cjs002_soul_01_fire4 = function() {
	this.sourceRect=new cjs.Rectangle(8,8,172,172);
    this.initialize(img.cjs002_soul_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,172);


(lib.cjs002_soul_01_fire5 = function() {
	this.sourceRect=new cjs.Rectangle(180,360,147,153);
    this.initialize(img.cjs002_soul_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,153);


(lib.cjs002_soul_01_fire6 = function() {
	this.sourceRect=new cjs.Rectangle(8,360,164,163);
    this.initialize(img.cjs002_soul_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,163);


(lib.cjs002_soul_01_fire7 = function() {
	this.sourceRect=new cjs.Rectangle(187,188,146,149);
    this.initialize(img.cjs002_soul_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,149);


(lib.cjs002_soul_01_fire8 = function() {
	this.sourceRect=new cjs.Rectangle(172,531,153,165);
    this.initialize(img.cjs002_soul_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,165);


(lib.font = function() {
	this.sourceRect=new cjs.Rectangle(188,8,54,52);
    this.initialize(img.cjs002_soul_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,52);


(lib.gr_hit_effect_circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3A4QgYgYAAggQAAgfAYgYQAYgYAfAAQAgAAAYAYQAYAYAAAfQAAAggYAYQgYAYggAAQgfAAgYgYg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC80").s().p("Ag3A4QgYgYAAggQAAgfAYgYQAYgYAfAAQAgAAAYAYQAYAYAAAfQAAAggYAYQgYAYggAAQgfAAgYgYg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("Ag3A4QgYgYAAggQAAgfAYgYQAYgYAfAAQAgAAAYAYQAYAYAAAfQAAAggYAYQgYAYggAAQgfAAgYgYg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF4D00").s().p("Ag3A4QgYgYAAggQAAgfAYgYQAYgYAfAAQAgAAAYAYQAYAYAAAfQAAAggYAYQgYAYggAAQgfAAgYgYg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Ag3A4QgYgYAAggQAAgfAYgYQAYgYAfAAQAgAAAYAYQAYAYAAAfQAAAggYAYQgYAYggAAQgfAAgYgYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-7.9,16,16);


(lib.font_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.font();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,54,52);


(lib.cjs002_notes_01_fire_animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fire
	this.instance = new lib.cjs002_soul_01_fire1();
	this.instance.setTransform(-53.9,-52.9,0.6,0.6);

	this.instance_1 = new lib.cjs002_soul_01_fire2();
	this.instance_1.setTransform(-59.9,-51.9,0.6,0.6);

	this.instance_2 = new lib.cjs002_soul_01_fire3();
	this.instance_2.setTransform(-53.9,-52.9,0.6,0.6);

	this.instance_3 = new lib.cjs002_soul_01_fire4();
	this.instance_3.setTransform(-59.9,-54.9,0.6,0.6);

	this.instance_4 = new lib.cjs002_soul_01_fire5();
	this.instance_4.setTransform(-52.9,-47.9,0.6,0.6);

	this.instance_5 = new lib.cjs002_soul_01_fire6();
	this.instance_5.setTransform(-57.9,-51.9,0.6,0.6);

	this.instance_6 = new lib.cjs002_soul_01_fire7();
	this.instance_6.setTransform(-53.9,-47.9,0.6,0.6);

	this.instance_7 = new lib.cjs002_soul_01_fire8();
	this.instance_7.setTransform(-52.9,-52.9,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.9,-52.9,89.4,99.6);


(lib.gr_hit_effect_onemove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.gr_hit_effect_circle("synched",0,false);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1,y:-9.8,startPosition:1},0).wait(1).to({x:4,y:-19.8,startPosition:2},0).wait(1).to({x:6.8,y:-27.1,alpha:0.5,startPosition:3},0).wait(1).to({x:12.5,y:-34.3,alpha:0.25,startPosition:4},0).wait(1).to({x:16.3,y:-37.3,alpha:0.051},0).wait(1).to({x:20,y:-40.3,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-7.9,16,16);


(lib.cjs002_notes_01_fire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{animation_start:1,animation_end:14});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.play();
	}
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(1).call(this.frame_14).wait(4).call(this.frame_18));

	// font
	this.instance = new lib.font_1("synched",0);
	this.instance.setTransform(-3.9,1,1,1,0,0,0,27,26);
	this.instance.alpha = 0.5;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0,_off:false},0).wait(1).to({alpha:1},0).wait(13).to({alpha:0.5},0).to({_off:true},1).wait(3));

	// fire
	this.instance_1 = new lib.cjs002_notes_01_fire_animation();
	this.instance_1.setTransform(-2.2,0.2,0.347,0.347,0,0,0,-21,12);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:-4.8,y:2.2},0).wait(1).to({regX:-20.8,scaleX:1.8,scaleY:1.8,x:-5.8,y:3.2},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:-5.4,y:3.1},0).wait(1).to({scaleX:1,scaleY:1,x:-5.7,y:3},0).wait(9).wait(1).to({alpha:0.449},0).wait(1).to({alpha:0.109},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mc_hit_effect_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.instance = new lib.gr_hit_effect_onemove("synched",1,false);
	this.instance.setTransform(-7.5,-18.4,1,1,-22.2);

	this.instance_1 = new lib.gr_hit_effect_onemove("synched",1,false);
	this.instance_1.setTransform(7.6,18.5,1,1,157.7);

	this.instance_2 = new lib.gr_hit_effect_onemove("synched",1,false);
	this.instance_2.setTransform(-18.4,7.6,1,1,-112.2);

	this.instance_3 = new lib.gr_hit_effect_onemove("synched",1,false);
	this.instance_3.setTransform(18.5,-7.5,1,1,67.7);

	this.instance_4 = new lib.gr_hit_effect_onemove("synched",1,false);
	this.instance_4.setTransform(-18.4,-7.7,1,1,-67.2);

	this.instance_5 = new lib.gr_hit_effect_onemove("synched",1,false);
	this.instance_5.setTransform(18.5,7.8,1,1,112.7);

	this.instance_6 = new lib.gr_hit_effect_onemove("synched",1,false);
	this.instance_6.setTransform(-7.7,18.5,1,1,-157.2);

	this.instance_7 = new lib.gr_hit_effect_onemove("synched",1,false);
	this.instance_7.setTransform(7.8,-18.4,1,1,22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(6));

	// レイヤー 1
	this.instance_8 = new lib.gr_hit_effect_onemove("synched",0,false);
	this.instance_8.setTransform(-14.1,-14.1,1,1,-44.9);

	this.instance_9 = new lib.gr_hit_effect_onemove("synched",0,false);
	this.instance_9.setTransform(14.2,14.2,1,1,135);

	this.instance_10 = new lib.gr_hit_effect_onemove("synched",0,false);
	this.instance_10.setTransform(-14.1,14.2,1,1,-134.9);

	this.instance_11 = new lib.gr_hit_effect_onemove("synched",0,false);
	this.instance_11.setTransform(14.2,-14.1,1,1,45);

	this.instance_12 = new lib.gr_hit_effect_onemove("synched",0,false);
	this.instance_12.setTransform(-19.9,0,1,1,-89.9);

	this.instance_13 = new lib.gr_hit_effect_onemove("synched",0,false);
	this.instance_13.setTransform(20,0,1,1,90);

	this.instance_14 = new lib.gr_hit_effect_onemove("synched",0,false);
	this.instance_14.setTransform(0,20,1,1,180);

	this.instance_15 = new lib.gr_hit_effect_onemove("synched",0,false);
	this.instance_15.setTransform(0,-19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.4,-68.4,137,137);


(lib.mc_hit_effect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{hit:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.play();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8).call(this.frame_9));

	// レイヤー 2
	this.instance = new lib.mc_hit_effect_container("synched",0,false);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0,_off:false},0).to({_off:true},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.cjs002_soul_01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0));

	// hit_effect
	this.hit_effect = new lib.mc_hit_effect();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit_effect}]}).wait(1));

	// soul
	this.fire = new lib.cjs002_notes_01_fire();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fire}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;