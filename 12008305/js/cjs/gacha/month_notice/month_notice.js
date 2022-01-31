(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.angel_mark = function() {
	this.initialize(img.month_notice_angel_mark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,122);


(lib.bg_grid = function() {
	this.initialize(img.month_notice_bg_grid);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,620);


(lib.bg_harajuku = function() {
	this.initialize(img.month_notice_bg_harajuku);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,620);


(lib.bg_silhouette = function() {
	this.initialize(img.month_notice_bg_silhouette);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,1200);


(lib.chihiro_body = function() {
	this.initialize(img.month_notice_chihiro_body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,548);


(lib.chihiro_face2 = function() {
	this.initialize(img.month_notice_chihiro_face2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,132);


(lib.fp_kirakira = function() {
	this.initialize(img.month_notice_fp_kirakira);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.name_plate = function() {
	this.initialize(img.month_notice_name_plate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,54);


(lib.news_flas = function() {
	this.initialize(img.month_notice_news_flas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,40);


(lib.replace_notice_text1 = function() {
	this.initialize(img.month_notice_replace_notice_text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,160);


(lib.replace_notice_text1_b = function() {
	this.initialize(img.month_notice_replace_notice_text1_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,160);


(lib.replace_notice_text1_w = function() {
	this.initialize(img.month_notice_replace_notice_text1_w);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,160);


(lib.replace_notice_text2 = function() {
	this.initialize(img.month_notice_replace_notice_text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,72);


(lib.replace_silhouette1 = function() {
	this.initialize(img.month_notice_replace_silhouette1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,480);


(lib.replace_silhouette2 = function() {
	this.initialize(img.month_notice_replace_silhouette2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,480);


(lib.screen = function() {
	this.initialize(img.month_notice_screen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,348,228);


(lib.shuttle2 = function() {
	this.initialize(img.month_notice_shuttle2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,276);


(lib.sp_kirakira = function() {
	this.initialize(img.month_notice_sp_kirakira);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.star = function() {
	this.initialize(img.month_notice_star);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.table = function() {
	this.initialize(img.month_notice_table);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,492,222);


(lib.title = function() {
	this.initialize(img.month_notice_title);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,446,246);


(lib.title_idol2 = function() {
	this.initialize(img.month_notice_title_idol2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,32);


(lib.title_w = function() {
	this.initialize(img.month_notice_title_w);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,446,246);


(lib.title_white = function() {
	this.initialize(img.month_notice_title_white);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,165);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.logo_w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.title_w();
	this.instance.parent = this;
	this.instance.setTransform(-112,-62,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_w, new cjs.Rectangle(-112,-62,223,123), null);


(lib.シンボル10000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3IAAIXIgcIXJAcI3JAdg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル10000, new cjs.Rectangle(-148.1,-2.9,296.29999999999995,5.9), null);


(lib.yajirusi_p = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444545").s().p("AAjA0IhMAAIAAgfIAoAAIg0gyIAWgWIA1A2IAAgqIAfAAIAABIQACATgRAAIgDAAg");
	this.shape.setTransform(-5.3448,-5.1698);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.yajirusi_p, new cjs.Rectangle(-10.7,-10.3,10.7,10.3), null);


(lib.yajirusi_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAjA0IhMAAIAAgfIAoAAIg0gyIAWgWIA1A2IAAgqIAfAAIAABIQACATgRAAIgDAAg");
	this.shape.setTransform(-5.3448,-5.1698);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.yajirusi_b, new cjs.Rectangle(-10.7,-10.3,10.7,10.3), null);


(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvYOMAAAgwbMAlfAAAMAAAAwbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.white, new cjs.Rectangle(-120,-155,240,310), null);


(lib.title_white_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.title_white();
	this.instance.parent = this;
	this.instance.setTransform(-92.5,-41.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.title_white_1, new cjs.Rectangle(-92.5,-41.2,185,82.5), null);


(lib.text_window = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.898)").s().rr(-116,-35,232,70,6);
	this.shape.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_window, new cjs.Rectangle(-116,-40,232,70), null);


(lib.shuttle2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.shuttle2();
	this.instance.parent = this;
	this.instance.setTransform(-69,-69,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-69,138,138);


(lib.shield = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvgAyvYOMAlfAAAMAAAgwbMglfAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shield, new cjs.Rectangle(-400,-300,800,600), null);


(lib.select_circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,79,156,0.2)","#FF4194"],[0,1],0,0,0,0,0,47.8).s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACLCLQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.select_circle, new cjs.Rectangle(-47.5,-47.5,95,95), null);


(lib.screen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.screen();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.screen_1, new cjs.Rectangle(0,0,174,114), null);


(lib.question_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9FE7FF","#23C8FF"],[0,1],0.1,6.5,0.1,-6.3).s().p("AgqArQgSgQAAgaQAAgZASgRQARgSAZAAQAaAAARASQASARAAAZQAAAagSAQQgRARgaAAQgZAAgRgRg");
	this.shape.setTransform(-0.175,20.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#33CCFF","#9FE7FF"],[0,1],0,17.4,0,-17.4).s().p("AgZCiQgLgHAAgQQAAgjANgWQANgVARgOIAkgbQARgNAJgSQAGgMAAgNQAAgQgIgOQgJgNgQgJQgQgIgYgBQgjAAgVASQgWARAAAnQgBAOgKAHQgLAHgOAAQgRAAgNgIQgNgJAAgRQAAgpARggQASgfAjgSQAjgSAzAAQA1AAAjATQAiATARAeQAQAdAAAiQAAAPgDAOQgDAOgGANQgMAWgRAPQgSAOgSALQgSALgMANQgNAOAAAUQgBAQgLAIQgKAIgOAAQgOAAgLgIg");
	this.shape_1.setTransform(-0.025,-5.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.question_container, new cjs.Rectangle(-52,-40.2,104,80.5), null);


(lib.powder_paper_core_inner_yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* gotoAndPlay(random(4)+2)*/
		this.gotoAndPlay(Math.floor(Math.random()*4)+1);
	}
	this.frame_5 = function() {
		/* gotoAndPlay(2)*/
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF81").s().p("AgYAOIAAguIArAeIAGAjg");
	this.shape.setTransform(0.3,-0.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF81").s().p("AgQgcIAeAMIADAgIgSANg");
	this.shape_1.setTransform(-0.675,-0.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF81").s().p("AgXAYIAagzIAVAUIgIAjg");
	this.shape_2.setTransform(-0.6,-0.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF81").s().p("AgbgGIAWgYIAhAyIgJALg");
	this.shape_3.setTransform(0.025,0.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3.5,5.9,7.1);


(lib.powder_paper_core_inner_purple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* gotoAndPlay(random(4)+2)*/
		this.gotoAndPlay(Math.floor(Math.random()*4)+1);
	}
	this.frame_5 = function() {
		/* gotoAndPlay(2)*/
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF89FF").s().p("AgYAOIAAguIArAeIAGAjg");
	this.shape.setTransform(0.3,-0.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF89FF").s().p("AgQgcIAeAMIADAgIgSANg");
	this.shape_1.setTransform(-0.675,-0.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF89FF").s().p("AgXAYIAagzIAVAUIgIAjg");
	this.shape_2.setTransform(-0.6,-0.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF89FF").s().p("AgbgGIAWgYIAhAyIgJALg");
	this.shape_3.setTransform(0.025,0.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3.5,5.9,7.1);


(lib.powder_paper_core_inner_pink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* gotoAndPlay(random(4)+2)*/
		this.gotoAndPlay(Math.floor(Math.random()*4)+1);
	}
	this.frame_5 = function() {
		/* gotoAndPlay(2)*/
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFBEFF").s().p("AgYAOIAAguIArAeIAGAjg");
	this.shape.setTransform(0.3,-0.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBEFF").s().p("AgQgcIAeAMIADAgIgSANg");
	this.shape_1.setTransform(-0.675,-0.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFBEFF").s().p("AgXAYIAagzIAVAUIgIAjg");
	this.shape_2.setTransform(-0.6,-0.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFBEFF").s().p("AgbgGIAWgYIAhAyIgJALg");
	this.shape_3.setTransform(0.025,0.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3.5,5.9,7.1);


(lib.powder_paper_core_inner_green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* gotoAndPlay(random(4)+2)*/
		this.gotoAndPlay(Math.floor(Math.random()*4)+1);
	}
	this.frame_5 = function() {
		/* gotoAndPlay(2)*/
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAFF87").s().p("AgYAOIAAguIArAeIAGAjg");
	this.shape.setTransform(0.3,-0.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AAFF87").s().p("AgQgcIAeAMIADAgIgSANg");
	this.shape_1.setTransform(-0.675,-0.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AAFF87").s().p("AgXAYIAagzIAVAUIgIAjg");
	this.shape_2.setTransform(-0.6,-0.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AAFF87").s().p("AgbgGIAWgYIAhAyIgJALg");
	this.shape_3.setTransform(0.025,0.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3.5,5.9,7.1);


(lib.powder_paper_core_inner_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* gotoAndPlay(random(4)+2)*/
		this.gotoAndPlay(Math.floor(Math.random()*4)+1);
	}
	this.frame_5 = function() {
		/* gotoAndPlay(2)*/
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#77FFFF").s().p("AgYAOIAAguIArAeIAGAjg");
	this.shape.setTransform(0.3,-0.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#77FFFF").s().p("AgQgcIAeAMIADAgIgSANg");
	this.shape_1.setTransform(-0.675,-0.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#77FFFF").s().p("AgXAYIAagzIAVAUIgIAjg");
	this.shape_2.setTransform(-0.6,-0.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#77FFFF").s().p("AgbgGIAWgYIAhAyIgJALg");
	this.shape_3.setTransform(0.025,0.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3.5,5.9,7.1);


(lib.news_letter_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.988)").s().p("AgFAsIAAgMIALAAIAAAMgAgDAUIgCg/IALAAIgBA/g");
	this.shape.setTransform(419.45,10.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,102,102,0.988)").s().p("AgEA1IAAglIgjAAIAAAFIgJAAIAAg2IAsAAIAAgTIAIAAIAAATIAtAAIAAA2IgJAAIAAgFIgkAAIAAAlgAAEAJIAkAAIAAgkIgkAAgAgnAJIAjAAIAAgkIgjAAg");
	this.shape_1.setTransform(407.4,10.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,102,102,0.988)").s().p("AgoA2IAAg+QgHALgFAIIgGgGQAKgMAHgSQAIgRACgLIAJACQgDAQgJASIADAAIAABHgAgOA0IAAgxIgIAJIgEgFQAGgHAGgJQAHgJADgIIAHADQgCAGgDAGIAWAAIAGgOIAJACIgHAMIAcAAIAAAGIgcAAIAAAKIAZAAIAAAHIgZAAIAAAKIAaAAIAAAHIgaAAIAAAMIAeAAIAAAHIg/AAIAAAEgAgFApIAYAAIAAgMIgYAAgAgFAWIAYAAIAAgKIgYAAgAgFAFIAYAAIAAgKIgYAAgAgPgcIAAgVIAIAAIAAAPIAUAAIAAgSIAJAAIAAASIAWAAIAAgPIAJAAIAAAVg");
	this.shape_2.setTransform(395.4,10.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(102,102,102,0.988)").s().p("AgxA0IAAhnIAqAAIAAAlIghAAIAABCgAgogUIAZAAIAAgJIgZAAgAgogjIAZAAIAAgJIgZAAgAAZAzIgBgIIAMAAQAFAAAAgEIAAg1IgiAAIAAglIArAAIAABdQAAAEgDACQgDADgFAAgAAQgUIAZAAIAAgJIgZAAgAAQgjIAZAAIAAgJIgZAAgAgeArQALgHACgPIgOAAIAAgGIAOAAIAAgPIgLAAIAAgGIA5AAIAAAGIgMAAIAAAPIAPAAIAAAGIgPAAIAAAbIgJAAIAAgbIgRAAQgCASgPAKgAgIALIAAAEIAQAAIAAgPIgQAAg");
	this.shape_3.setTransform(383.425,10.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,102,102,0.988)").s().p("AgxAmQATgCAPgFQAPgFAKgIQAKgHAIgHQAGgGAIgMIAIAFQgJAQgRAMQgPANgQAGQgRAGgXADgAgxgmIAGgIQAVAJAWANIgGAIQgVgNgWgJg");
	this.shape_4.setTransform(371.8,10.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(102,102,102,0.988)").s().p("AgwAEIAAgHIBgAAIAAAHg");
	this.shape_5.setTransform(359.4,10.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(102,102,102,0.988)").s().p("AATAHIgXgWIgGgFIgBAAIgCAAIgEAEIgTAYIgQAVIgHgHIAMgOIAYgfQAEgFAHAAIAGABQADABADAEIASARIAqAnIgHAJIgigkgAAYgUQgFgEAAgFQAAgGAFgDQADgEAGAAQAFAAAEAEQADAEAAAFQAAAFgDAEQgEADgFAAQgGAAgDgDgAAbgjQgDACABAEQgBADADADQACACAEAAQADAAACgCQADgDAAgDQAAgEgDgCQgCgDgDAAQgEAAgCADg");
	this.shape_6.setTransform(347.45,10.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(102,102,102,0.988)").s().p("AgxAmQATgCAPgFQAPgFAKgIQAKgHAIgHQAGgGAIgMIAIAFQgJAQgRAMQgPANgQAGQgRAGgXADgAgxgmIAGgIQAVAJAWANIgGAIQgVgNgWgJg");
	this.shape_7.setTransform(335.8,10.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(102,102,102,0.988)").s().p("AgXgNIgUADIgBgIIAUgDIgEgTIAKgCIADAUIA3gHIAGAEQgFALgIALQgHAJgJAGIgGgFQAHgGAGgHQAHgIACgHIguAHIALA3IgJACg");
	this.shape_8.setTransform(323.3,11.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(102,102,102,0.988)").s().p("AgCAPIg1AGIAAgJIA0gFIgDgcIgsADIgBgIIAsgEIgBgTIAJgBIABAUIArgEIABAIIgrAEIADAcIAxgEIABAIIgxAEIADAlIgKAAg");
	this.shape_9.setTransform(311.475,10.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(102,102,102,0.988)").s().p("AgVAyQgHgCgEgDQgEgDgDgFQgDgFAAgFIgBgSQAAgVADgfIAJAAQgDAeAAAWIAAAOQABAFADAFQADAFAGACQAGADAJAAQAOAAALgJQALgJAGgWIAIADQgGAXgNALQgNALgTAAQgIAAgGgBgAgJgsIAHgDIAIARIgGADQgEgKgFgHgAAHgvIAHgDIAJAQIgHADIgJgQg");
	this.shape_10.setTransform(300.025,10.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(102,102,102,0.988)").s().p("AgKAUIgMgIIgJgHIgDgEIgCgCQAAgGAIgGIAegUQAKgIALgKIAHAHQgVASgbARIgHAEQAAABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIABACIAHAEIAiAYQALAIAKAJIgIAHQgSgSgVgOg");
	this.shape_11.setTransform(287.375,10.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(102,102,102,0.988)").s().p("AgsAuQAkgHAVgUIgRgMIgPgJIAFgGIASALIAQAKQAPgPAEgYIgxAAQgOAVgUANIgFgGQAcgVAPgiIAJACIgJASIA3AAIABABQgFAkgZAWQgZAWgkAGg");
	this.shape_12.setTransform(275.075,10.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(102,102,102,0.988)").s().p("AAPAzIgQAAIgKgBQgDAAgCgCIgEgEIgBgGIAAguIgfACIgBgIIAggCIAAgiIAJAAIAAAhIBBgGIABAIIhCAGIAAAuQABAEADABQAEACASAAIASgBQAHAAABgEQACgDAAgRIAJABIAAATQAAAEgCACIgCADIgFACIgJABIgSAAg");
	this.shape_13.setTransform(263.25,10.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(102,102,102,0.988)").s().p("AgwAEIAAgHIBgAAIAAAHg");
	this.shape_14.setTransform(251.4,10.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(102,102,102,0.988)").s().p("AgPA2IgMgCQgFgBgDgDQgEgCgCgEQgCgDAAgJIAAhIIAKAAIAAAkQAxgKAUgIIAFAIQgNAGgVAFQgVAEgTACIAAAcQAAAGABADQACAEAFABQAFACAHAAIA5AAIAAAJgAAUggQgEgDAAgFQABgGAEgDQADgEAGABQAFgBAEAEQAEAEgBAFQAAAFgDAEQgEADgFAAQgGAAgEgEgAAXguQgCACAAAEQAAAEACACQADACAEAAQADAAADgCQACgDAAgDQAAgDgCgDQgEgCgCgBQgEABgDACg");
	this.shape_15.setTransform(239.95,9.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(102,102,102,0.988)").s().p("AgdAgQAhgFAOgSQANgSACgbIAKABQgFAjgRASQgSARgdAFgAgqgeIAJgDIAHAOIAIATIgJACQgFgOgKgSgAgNgkIAIgCIAHAQIAHARIgIADQgDgOgLgUg");
	this.shape_16.setTransform(227.2,11.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(102,102,102,0.988)").s().p("Ag6ApIALgNQAGgGADgIIAHgOQADgHACgMIACgaIAKAAQgBAigKAVQgJAWgTAPgAAiAVQgHgQgEgSQgDgTAAgOIAKAAIAAABQAAAaAHAVQAHAVAPAQIgHAHQgKgKgIgPg");
	this.shape_17.setTransform(215.425,10.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(102,102,102,0.988)").s().p("AgFAsIAAgMIALAAIAAAMgAgDAUIgCg/IALAAIgBA/g");
	this.shape_18.setTransform(191.15,10.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(102,102,102,0.988)").s().p("AgnA2IAAg+QgIALgFAIIgFgGQAJgMAIgSQAHgRACgLIAJACQgEAQgIASIADAAIAABHgAgNA0IAAgxIgJAJIgFgFQAHgHAHgJQAGgJADgIIAIADQgDAGgDAGIAWAAIAGgOIAIACIgGAMIAcAAIAAAGIgcAAIAAAKIAZAAIAAAHIgZAAIAAAKIAZAAIAAAHIgZAAIAAAMIAeAAIAAAHIg+AAIAAAEgAgEApIAXAAIAAgMIgXAAgAgEAWIAXAAIAAgKIgXAAgAgEAFIAXAAIAAgKIgXAAgAgPgcIAAgVIAJAAIAAAPIATAAIAAgSIAJAAIAAASIAWAAIAAgPIAIAAIAAAVg");
	this.shape_19.setTransform(179.1,10.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(102,102,102,0.988)").s().p("AgxA0IAAhnIAqAAIAAAlIghAAIAABCgAgogUIAZAAIAAgJIgZAAgAgogjIAZAAIAAgJIgZAAgAAZAzIgBgIIAMAAQAFAAAAgEIAAg1IgiAAIAAglIArAAIAABdQAAAEgDACQgDADgFAAgAAQgUIAZAAIAAgJIgZAAgAAQgjIAZAAIAAgJIgZAAgAgeArQALgHACgPIgOAAIAAgGIAOAAIAAgPIgLAAIAAgGIA5AAIAAAGIgMAAIAAAPIAPAAIAAAGIgPAAIAAAbIgJAAIAAgbIgRAAQgCASgPAKgAgIALIAAAEIAQAAIAAgPIgQAAg");
	this.shape_20.setTransform(167.125,10.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(102,102,102,0.988)").s().p("Ag7ApQAIgFAFgHQAHgIADgKQAEgKAAgUIAAgYIAKAAIAAAaIgBAWQgCAJgFAIQgEAIgGAHQgHAHgIAEgAACArIAAhaIAKAAIAABSQAJgDALgJQAMgJAIgPIAIAEQgHAQgRAMQgPAMgQAEg");
	this.shape_21.setTransform(155.15,10.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(102,102,102,0.988)").s().p("Ag6AuIALgNQAGgGADgHIAHgPQADgHADgLIACgbIAKAAQgCAjgJAUQgKAWgSAPgAAfAZQgJgQgCgSQgEgUAAgMIAKAAIAAABQAAAaAHAVQAHAVAQAQIgHAHQgLgKgHgQgAAbgtIAGgDQAFAIAEAJIgHADIgIgRgAArgwIAHgDIAJAQIgHADQgDgJgGgHg");
	this.shape_22.setTransform(143.1,9.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(102,102,102,0.988)").s().p("AAFAqIAAguQgVAKgWAFIgDgHQAbgGASgMQAUgNAJgOIAJAEQgGAJgIAHIgOAKIAAA1g");
	this.shape_23.setTransform(130.575,11.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(102,102,102,0.988)").s().p("AgoAmQARgEAMgIQALgKgBgQIAAgGIg1AAIAAgJIBtAAIAAAJIguAAIAAAEQAAAOgFAJQgEAJgLAHQgKAHgRADgAgvgmIAAgIIBfAAIAAAIg");
	this.shape_24.setTransform(119.15,10.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(102,102,102,0.988)").s().p("AAFAHQgcAcgdAMIgFgIQAZgJAYgWQAWgUAKgaIhBAAIAAgIIBMAAIACADQgIAYgSAUQASANAdAaIgJAHQgQgQgcgYg");
	this.shape_25.setTransform(107.1,10.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(102,102,102,0.988)").s().p("AguAiIAAgIIAqAAIAAgzIgiAAIAAgIIBNAAIAAAIIgiAAIAAAzIAqAAIAAAIg");
	this.shape_26.setTransform(94.925,11.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(102,102,102,0.988)").s().p("AgrAmQAfgDAWgQQAXgQACgoIhQAAIAAgIIBbAAQAAAVgIAVQgGAUgWANQgTAOggADg");
	this.shape_27.setTransform(83.3,10.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(102,102,102,0.988)").s().p("AgcAsIAAhXIA5AAIAAAJIguAAIAAAaIAsAAIAAAJIgsAAIAAAiIAuAAIAAAJg");
	this.shape_28.setTransform(73.725,10.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(102,102,102,0.988)").s().p("AgEAsIgjhXIAMAAIAbBIIAdhIIALAAIgjBXg");
	this.shape_29.setTransform(65.65,10.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(102,102,102,0.988)").s().p("AgQAsIAAgIIAMAAIAAhHIgMAAIAAgIIAhAAIAAAIIgLAAIAABHIALAAIAAAIg");
	this.shape_30.setTransform(59.1,10.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(102,102,102,0.988)").s().p("AgaAsIAAhXIAKAAIAABOIAsAAIAAAJg");
	this.shape_31.setTransform(53.85,10.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(102,102,102,0.988)").s().p("AAoAmQghAFg8ADIgCgJIAMAAQAJgQAKgZQAKgaAGgSIAJACIgPAsIgSAmQAzgDASgDQgKgRgPgSIAIgFQARAUATAjIgKAEIgGgLg");
	this.shape_32.setTransform(43.95,10.275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(102,102,102,0.988)").s().p("AgwAEIAAgHIBhAAIAAAHg");
	this.shape_33.setTransform(31.95,10.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(102,102,102,0.988)").s().p("AgdApQAegDAOgLQAOgLAAgUIAAgsIAKAAIAAAuQAAANgHAMQgGALgPAHQgOAHgYACgAgmAMIAAg7IAKAAIAAA7g");
	this.shape_34.setTransform(20.1,10.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(102,102,102,0.988)").s().p("AglAzIAAhlIAKAAIAAAfQAjALAeARIgGAIQgMgIgRgIQgQgHgOgEIAAA9gAAAgpIAGgDQAGAIADAJIgGADIgJgRgAARgsIAGgDIAJAQIgGADIgJgQg");
	this.shape_35.setTransform(9.35,10.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.news_letter_inner, new cjs.Rectangle(0,0,427.7,40), null);


(lib.name_plate_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.name_plate();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,27);


(lib.mask_screen_w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().rr(-77,-47,154,94,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mask_screen_w, new cjs.Rectangle(-77,-47,154,94), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_3
	this.instance = new lib.title();
	this.instance.parent = this;
	this.instance.setTransform(-111.5,-61.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.5,-61.5,223,123);


(lib.loght_gra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjmO5Igy2BIAoAFIAxWCgAjhrUID3gJIAxWBIj3AJgACVu7IBTgCIAxWBIhTADg");
	this.shape.setTransform(-2.875,71.9727,1,1.8018);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.2,-100.7,88.5,345.4);


(lib.kamif_p = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGgBQgFABgEgFg");
	this.shape.setTransform(0.025,1.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.kamif_p, new cjs.Rectangle(-1.4,0.2,2.9,2.9), null);


(lib.icon_passion_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD019").s().p("EgAdAiNQAhibglhDQgjg9hKgrQgmgXhogpQhbgmgqgeQhAgugVhEQgZhQAOhUQAQhdA+hmQDWBKDhAAQDqAADahPQg3A/gcBCQglBYATBPQAUBRAcAwQAQAaAiAiQAdAeAMAbQASApAFBOQAMCukzCtQgwAcizBZQh1A6gVAbQBPh3AjibgAX2YhQhViGhKgUQhEgThTAWQgsAMhmArQhaAmgzAJQhOANhAgiQiYhQg1jbQDPhkChilQCiilBhjQQAFBVAaBBQAlBaBFAqQBHArA2AOQAeAHAwABQApAAAcALQArARA6AzQCEByheFUQgQA3hAC9QgpB7AEAjQgciNhWiGgA2hbdQg2gPi+hBQh7gpgjADQCNgbCFhVQCHhVAUhKQAShFgVhTQgLgrgshmQgmhbgJg0QgMhNAghAQBSiaDig1QBkDPCkCiQCkCiDQBhQhVAGhDAaQhcAjgsBHQgsBIgNA2QgHAdAAAwQgBAqgLAcQgQAqgzA7QhDBMiQAAQhmAAiOgngAmHOvQi2hOiNiMQiNiNhMi3QhRi8AAjPQAAjOBRi8QBMi3CNiNQCNiMC2hOQC9hPDOAAQDPgBC9BQQC2BOCNCMQCNCNBNC3QBQC8AADOQAADPhQC8QhNC3iNCNQiNCMi2BOQi9BPjPAAQjOAAi9hPgAnfncQjIDIAAEaQABEbDHDIQDJDIEaAAQEbAADJjIQDIjIAAkbQAAkajIjIQjJjIkbAAQkaAAjJDIgAWtICQhbgPhng/QBHjSAAjcQABjyhWjiQBBA5BBAdQBcApBSgUQBRgTAvgdQAbgPAigiQAdgdAcgMQAqgSBNgGQCugLCuEyQAbAyBaCyQA5B1AbAWQh3hRibgiQibgihDAmQg+AjgrBKQgWAmgqBnQglBcgeAqQguA/hEAWQgzAQg1AAQgdAAgfgFgEgjVADfQgcgzhZixQg6h1gagVQB3BQCaAjQCcAhBCgmQA+gjAshKQAVgmArhoQAlhbAegqQAthABFgVQBRgZBVAPQBeAPBpBCIAEACIgKAeQgeA4gOB2QgUBzAAB0QAADxBTDeQhBg7hDgfQhegshTAUQhSAUgwAdQgZAPgjAiQgdAdgcAMQgpAThOAEIgNABQioAAinkngAzSq1QgjhnhNgvQhHgrg2gNQgdgIgxAAQgpgBgbgKQgrgSg6gzQiEhyBelTQAQg3A/i9QAqh8gEgjQAcCNBVCGQBVCGBLAUQBEASBTgVQArgMBngrQBagmAzgJQBOgMA/AhQBLAnAyBHQA4BOAbB5IABAEIgWALQhKAWhyBgQiHBlhrCFQhrCFhFCcQgDhagZhGgAOau2QipiijUheQBYgDBGgaQBjgkAthKQAshIAOg2QAHgcABgxQAAgpALgcQARgrAyg6QB0iDFTBeQA3APC9A/QB7AqAigDQiMAciGBUQiGBVgUBLQgTBEAWBUQALAqArBnQAnBaAIA0QANBNghA/QgmBKhHAyQhNA3h3AcQhnjQipiigAl+1SQAxhigWhXQgThSgdgwQgPgZgigjQgdgdgMgcQgTgqgFhNQgLiuEzitQAxgdCxhYQB1g6AWgbQhQB3giCbQgiCbAlBDQAkA9BKAsQAmAWBnAqQBcAkAqAfQA/AtAWBFQAaBQgPBXQgRBehBBpIgBABIgpgNQg6gahngMQhvgThyAAQj5AAjnBaQA+hBAghEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon_passion_inner, new cjs.Rectangle(-246.3,-246.3,492.6,492.6), null);


(lib.icon_cute_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD019").s().p("EALYAjQQiqgUiRhRQiVhVhliKQhjiIhQl/QhQFthgCEQhkCKiWBVQiQBRiqAUQiqAUiqgsQivguiWhtQiWhthiiZQhfiTghioQgiioAhijQAiioBkiKQBbh9EpiyQlMAdiRgvQijg0h+h1Qh6hwhHibQhIibgKivQgLi1A5iwQA6iwBziMQBviICVhUQCWhUCkgTQCrgUCiA1QCRAvD8DcQiKlDAAicQAAirBHicQBFiXB+h0QB+h0CjhAQCphCC5AAQC4AACpBCQCkBAB9B0QB+B0BFCXQBICcAACrQAACkiXFXQEnkLCig1QCjg0CqATQClAUCVBTQCVBUBvCIQBzCMA6CwQA5CwgLC1QgKCvhICbQhHCbh6BxQh+B0ijA1QitA4m3g0QGCDXBrCUQBkCKAiCoQAhCjgiCoQghCohfCTQhiCZiVBtQiWBtiwAuQh0Aeh1AAQg1AAg1gGgABoPRQBlFtBYB6QCVDMDhA5QDhA5Cqh7QCrh8APjoQAQjoiVjMQhdiBlbjgQjuiblFizQFxAtEZAPQGZAWCWgxQDxhOB7jEQB8jEhBjJQhBjIjYhWQjXhXjxBOQh+Aqj3C+Qi6CQj0DbQEgqRAAjhQAAj8iVizQiViyjRAAQjTAAiUCyQiVCzAAD8QAADhEhKVQjzjbi7iRQj3i+h+gpQjxhOjXBWQjYBWhBDIQhBDJB8DEQB7DEDxBOQCJAsFhgNQECgKFbgoQk2CujfCTQk0DMhXB4QiVDNAQDoQAPDoCqB7QCqB8Dig5QDhg5CVjMQBWh4BjlhQBHkBBFlbQBGFjBHEDg");
	this.shape.setTransform(0.025,0.0375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon_cute_inner, new cjs.Rectangle(-231.9,-226.1,463.9,452.29999999999995), null);


(lib.icon_cool_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD019").s().p("EglNgFXIKf6UMA1cAAAIKgaUMglJAlDgAgDXXIMg7lI5AAAgAEpTdIAAAKIAKgTIX03pIrpACIsLXngAlOTUIAJATIAAgKIgJgJIsL3nIrqgCgAUzm+ILRAAImZuvgEggNgG+ILSAAIk3uvgAsjnRIZAAAIsgzUgAQupNIGaxZIy6AAgAw2pNIMgxZIy6AAg");
	this.shape.setTransform(0,0.0188,0.125,0.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon_cool_inner, new cjs.Rectangle(-29.7,-25.3,59.5,50.7), null);


(lib.grip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* _visible = false;*/
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AkkAAIEkkkIElEkIklElg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.grip, new cjs.Rectangle(-29.3,-29.3,58.7,58.7), null);


(lib.flower2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF74BA").s().p("AgXA3QgOgGAIgTQAGgOANgMQgOABgRgGQgTgIAGgOQAGgOATAIQAQAIAKALQgBgOAGgRQAJgTANAGQAOAHgIASQgHAQgMAKQAOgBARAGQATAJgGANQgGAOgTgIQgQgHgKgMQABAOgGARQgHAOgJAAIgGgBg");
	this.shape.setTransform(0.0156,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-5.6,11.3,11.3);


(lib.flower1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA9E9").s().p("AgCBHQgJgcADgZQgTASgbAJQggAKgIgXQgIgYAhgKQAbgJAZADQgRgRgKgdQgKggAXgIQAYgIAKAhQAJAbgDAaQAQgRAegKQAggLAIAXQAIAYghAKQgbAJgagDQASARAJAdQAMAggYAIQgFABgFAAQgQAAgIgZg");
	this.shape.setTransform(0.017,-0.0159);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-9.6,19.299999999999997,19.299999999999997);


(lib.copy_open = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.title_idol2();
	this.instance.parent = this;
	this.instance.setTransform(-125.5,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy_open, new cjs.Rectangle(-125.5,0,125.5,16), null);


(lib.copy_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.749)").s().rr(-100,-24,200,48,5);
	this.shape.setTransform(100,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy_base, new cjs.Rectangle(0,0,200,48), null);


(lib.bg_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// white
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgjJAu4MAAAhdvMBGTAAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-300,450,600);


(lib.bg_transition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* gotoAndStop( random( 5 ) + 1 );
		*/
		this.gotoAndStop( Math.floor(Math.random() * 5) + 1 );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,153,204,0.988)").s().rr(-77,-47,154,94,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,204,0,0.988)").s().rr(-77,-47,154,94,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,51,51,0.988)").s().rr(-77,-47,154,94,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,204,255,0.988)").s().rr(-77,-47,154,94,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,204,0,0.988)").s().rr(-77,-47,154,94,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-47,154,94);


(lib.bg_shibuya = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.instance = new lib.bg_harajuku();
	this.instance.parent = this;
	this.instance.setTransform(-120,-155,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_shibuya, new cjs.Rectangle(-120,-155,240,310), null);


(lib.bg_grid_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.bg_grid();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_grid_inner, new cjs.Rectangle(0,0,240,310), null);


(lib.bg_black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgjJAu4MAAAhdvMBGTAAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_black, new cjs.Rectangle(-225,-300,450,600), null);


(lib.bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD019").s().dr(-3,-100,6,200);
	this.shape.setTransform(0.5,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bar, new cjs.Rectangle(-2.5,0,6,200), null);


(lib.angel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB4FwQgzgcAAgmQAAgGABgEIACgEIAGAAQAOAQAmALQApANAtAAQBgAABAgbQA8gZAAgfQgBgFgEgDQgKgIgbAAQhSAAglAHQgXAEgPAKQAEAHAAAGQABADAJgBIBNgIQAFAAABABIgBADQgKAHgWAHQggALgfAAQhQAAAAgaQAAgbBUgIQBggJAJgHQgEgCgigDIgpgCIggACIgqAGIgiAKQgWAHgFAAQgGAAAAgCIACgCQALgRAAgDIgBgKIgthzQgMALgVAJQgRAHgFAAQgFAAgOgDIgYgJIACgBIgIADQACADAEADQAgACADADIgCADQAAAAgBABQAAAAAAAAQAAABAAABQAAAAAAABIgdABQgPAAghgOQgdgNgKgJIgqBiQgJATAAAHQAAAHAjAjQAhAjABAXQAAAfgqAcQg3AmhpAAQhnAAhIglQhFgkAAgvQAAgPAPgVQAPgUALAAQAGAAAAABIgCABQACAfAoAXQA4AhByAAQA5AAATgHQAJgDACgHQgUgYhdgEQhRgDAAgfQAAgJANgHQASgKAhAAQAZAABEAQIADACQAEACAGAAQAHAAAMgDQAKgDABgBIgBgBQgegSgygIIhXgPIAAgBIAZgTQAagVAMgTIAwg7IA7hSQABgVgTgJIgTgGQgSAAgPAeQgYAwgVAXQgcAigsAaQgzAegrAAQgrAAAAgSQABgLAagVIAcgXQAAgCgJADQgHACgFADQgJAGgdAJQghALgRAAQhHAAAAgbQAAgTAogKQA2gOAGgEIgBgBQg5AOg2gLQgzgKgBgTQABgNAVgGQAUgHAgAAQAsAAA8gPQA3gOASgMQBNguA4g+QATgWAKgHQAQgJAYAAQAhAAASAoQAMAaAgBUIBNh1IACgBIAAgGQAAgGgCgEIgEgDQgPAFgRgEQgUgHgMgCIgdgCQgSgBgOgJQgHgFgHgCQgKgDgSgBQgQgCgKgJQgJgJAAgIQAAgFAGgGQAJgHAPAAQAQAAALADQAGgDAWgkQATggBDgMQAlgHAgACIgJgFIglgFQgTgCgEgDQANgLATAAQAVAAANAJQAFADAMANIAOgRQAJgIAaAAQAMAAAJAEQAFACAHAFIgCAGIgQABIgbgDQgOgBgLAKIASgCQCjAUAAA8QAAAhg7AdQhAAggCAFQABAEAgA1IAhA0QAMgsAOggQAbg7AoAAQAfAABHBCQBNBJATAHQBZAkBiAIQAnADAHACQAQAEAAANQAAAMgZALQgbALgpAAIgigDIgjgEQgFAAAAABIADAAQBuAbgKAZQgKAWg/AAQgrAAgbgPQgegRgIgBQADAEAaAUQAYAVAAALQgBASgqAAQglAAg5geQgvgZgQgSQghgmgSgxQgMgfgUAAQgGAAgLAFQgOAHAAAKQAAAEBBBaQBEBhARAKQAJAFAkAMQAkALAMABQAwAIAgAbQAcAYAAAYQAAAog4AlQhGAuh5AAQhbAAg5gfgAgRhjIgqBrQA0ARATADQAEAAADAEQgTAGgKAGIAGAIQAnABACACIAAABQgFACgTAEQgTAEgHADIABACQAFAGATACQAYACAEACIgBABIgWAEIgQADQAeABAJgEQAFgCACgFQgGgEgVgCQgUgCgFgCIAAgCIAkgEQAMgCAAgJQAAgGgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgqgBgBgEIANgCQAOgFgCgNQAFgEAmgOQgVgogNg4QgGgcgVAAQgOAAgIATgAAVj/QAZAOAOAAQATAAAEgFQACgCACgGIgBgDIgHAHQgGAFgNAAQgJAAgLgFIgRgHgACGkNQAEAAAEgEQAFgEAHAAIAGABQAEACACgBQgBgOACABQAAABABAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAgCAAgBQAAgBAAAAQAAgBAAAAQgBAAAAAAIgBADQgHADgLADQgLADgIAAQgGAAgOgEIgOgFIgDACIAMAIQgEAFADABQAFgBAGAAQAKAAAKAEgAghkNQAFAAAGgEQAHgEAFAAQAFAAAEACQABABAAAAQAAAAABAAQAAABAAAAQAAgBABAAIgBgBIAAAAQgCgDgBgBIAMgIQgEgBgNAEQgSAFgEAAQgFAAgOgFQgOgFgFAAQgGAAABABIACABIAJAJQgFABAAACIACABIAIgBQAKAAANAGgAH9hdQhHgTgKgBQAsg3ArgVQAfgQAmAAQAaAAAPAKQANAIAAALQABADgHAHQgHAIgKAHQAoALAOALQAKAHAAALQAAAOgQAJQgUANgpAAQgcAAhBgSgAqPhTQgYgKAAgSQAAgcBBgMIAAgBQgYgKAAgOQAAgSAYgHQAYgHAkAHQBWASAoBGQgiAMgfAJQg9AQg7AAQgXAAgTgHg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.angel, new cjs.Rectangle(-67.9,-39.8,135.9,79.69999999999999), null);


(lib.replace_target_notice_text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dummy_sp
	this.instance = new lib.replace_notice_text2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.replace_target_notice_text2, new cjs.Rectangle(0,0,144,36), null);


(lib.replace_silhouette2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dummy_sp
	this.instance = new lib.replace_silhouette2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.replace_silhouette2_1, new cjs.Rectangle(0,0,240,240), null);


(lib.replace_silhouette1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dummy_sp
	this.instance = new lib.replace_silhouette1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.replace_silhouette1_1, new cjs.Rectangle(0,0,240,240), null);


(lib.repalce_target_notice_text1_w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dummy_sp
	this.instance = new lib.replace_notice_text1_w();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.repalce_target_notice_text1_w, new cjs.Rectangle(0,0,132,80), null);


(lib.repalce_target_notice_text1_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dummy_sp
	this.instance = new lib.replace_notice_text1_b();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.repalce_target_notice_text1_b, new cjs.Rectangle(0,0,132,80), null);


(lib.repalce_target_notice_text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dummy_sp
	this.instance = new lib.replace_notice_text1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.repalce_target_notice_text1, new cjs.Rectangle(0,0,132,80), null);


(lib._kirakira = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _0x40
	this.instance = new lib.sp_kirakira();
	this.instance.parent = this;
	this.instance.setTransform(-10,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// _0x20
	this.instance_1 = new lib.fp_kirakira();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._kirakira, new cjs.Rectangle(-10,-10,20,20), null);


(lib.good_circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,244,194,0.2)","#FFCA4A"],[0,1],0,0,0,0,0,47.8).s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACLCLQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.good_circle, new cjs.Rectangle(-47.5,-47.5,95,95), null);


(lib.flower2_good = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("AgXA3QgOgGAIgTQAGgOANgMQgOABgRgGQgTgIAGgOQAGgOATAIQAQAIAKALQgBgOAGgRQAJgTANAGQAOAHgIASQgHAQgMAKQAOgBARAGQATAJgGANQgGAOgTgIQgQgHgKgMQABAOgGARQgHAOgJAAIgGgBg");
	this.shape.setTransform(0.0156,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-5.6,11.3,11.3);


(lib.flower1_good = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AgCBHQgJgcADgZQgTASgbAJQggAKgIgXQgIgYAhgKQAbgJAZADQgRgRgKgdQgKggAXgIQAYgIAKAhQAJAbgDAaQAQgRAegKQAggLAIAXQAIAYghAKQgbAJgagDQASARAJAdQAMAggYAIQgFABgFAAQgQAAgIgZg");
	this.shape.setTransform(0.017,-0.0159);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-9.6,19.299999999999997,19.299999999999997);


(lib.star_ring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,210,0,0.047)","#FFFFFF"],[0,1],0,0,0,0,0,67.4).s().p("AnWHWQjCjDAAkTQAAkSDCjEQDEjCESAAQETAADDDCQDDDEAAESQAAETjDDDQjDDDkTAAQkSAAjEjDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,238,0,0.047)","#FFFFFF"],[0,1],0,0,0,0,0,75.7).s().p("AoPIPQjajZAAk2QAAk0DajbQDbjaE0AAQE2AADZDaQDbDbAAE0QAAE2jbDZQjZDbk2AAQk0AAjbjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.star_ring, new cjs.Rectangle(-74.6,-74.6,149.3,149.3), null);


(lib.spread_star_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_3
	this.instance = new lib.star();
	this.instance.parent = this;
	this.instance.setTransform(-30,-33,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.spread_star_inner, new cjs.Rectangle(-51.1,-48.6,102.2,97.2), null);


(lib.guideline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* _visible = false;*/
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.guideline, new cjs.Rectangle(-1,-356,2,357), null);


(lib.ignition_glitter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF","rgba(255,255,255,0)"],[0,0.427,1],0,0,0,0,0,34.6).s().p("AlaAAIFalaIFaFaIlaFag");
	this.shape.setTransform(-2.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-34.7,69.3,69.30000000000001);


(lib.eureka_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,204,255,0.988)").s().p("AhLD+QgNgJgJgOQgHgOgBgRQABgQAHgOQAJgOANgIQAOgIAQAAQAQAAAOAIQAOAIAHAOQAJAOABAQQgBARgJAOQgHAOgOAJQgOAIgQABQgQgBgOgIgAhBByQgKgIAAgPIAAg1QAAgNAIgLQAHgLAMgFQAMgHANgCQAbgDAUgOQATgOAKgVQAKgUAAgXQAAgSgHgTQgIgUgQgOQgRgOgbgBQgaAAgRAGQgSAFgMAIIgZAQQgHAEgGACQgHACgHAAQgPAAgJgJQgKgIAAgOQAAgJAGgKQAGgKAMgJQARgMATgKQATgKAagFQAagHAlAAQApABAhANQAhAOAWAXQAXAXALAcQAMAcAAAdQgBA4gYAmQgYAlgoAVQgnAVgtAFQgGAAgDAFQgCAFAAAFQgBAQgJAIQgJAIgNAAQgMAAgJgIg");
	this.shape.setTransform(2.875,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6));

	// レイヤー_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5FNQh5gRhbhcQhwhwgBidQABieBwhwQBwhxCdAAQCfAABwBxQBvBwAACeQAACdhvBwQhbBbh5ARIg7Bhg");
	this.shape_1.setTransform(-0.05,4.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(6));

	// レイヤー_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,204,255,0.663)").s().p("AgEG8QgFgCgEgFIg2hZQh6gUhchcQh1h1AAikQAAilB1h1QB1h1CkAAQClAAB1B1QB1B1AAClQAACkh1B1QhbBch6AUIg2BZQgEAFgFACIgFABIgFgBgAkTlBQhzByAACiQAAChBzByQBcBcB5ATIA4BcQACADADABQACAAACAAQADgBACgDIA4hdQB5gSBbhcQBzhyAAihQAAiihzhyQhyhziiAAQigAAhzBzg");
	this.shape_2.setTransform(-0.05,4.6243);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,204,255,0.329)").s().p("AgHHEQgIgDgFgHIg0hWQh6gVhdhdQh3h3AAioQAAioB3h4QB4h4CnABQCpgBB3B4QB3B4AACoQAACoh3B3QhcBch5AVIg1BXQgFAHgIADIgIABIgIgBgAkZlHQh1B1AAClQAACkB1B1QBcBcB6AUIA2BZQAEAFAFACQAFACAFgCQAFgCAEgFIA2hZQB6gUBbhcQB1h1AAikQAAilh1h1Qh1h1ilAAIAAAAQikAAh1B1g");
	this.shape_3.setTransform(-0.05,4.624);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33CCFF").s().p("AgBG1QgDgBgCgDIg4hcQh5gThchcQhzhyAAihQAAiiBzhyQBzhzCgAAQCiAAByBzQBzByAACiQAAChhzByQhbBch5ASIg4BdQgCADgDABIgCAAIgCAAg");
	this.shape_4.setTransform(-0.05,4.6247);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.7,-47.6,81.4,97.6);


(lib.concent2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Agow/IBRACMgAgAh9g");
	this.shape.setTransform(2.575,-204.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.concent2, new cjs.Rectangle(-1.5,-313,8.2,217.7), null);


(lib.concent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAm8aMAAYA4gIh7AUg");
	this.shape.setTransform(3.475,285.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.concent, new cjs.Rectangle(-2.7,104,12.399999999999999,363.7), null);


(lib._char_B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak1FAIAAp/IJrAAIAAJ/g");
	mask.setTransform(-32.25,-33);

	// レイヤー_5
	this.instance = new lib.chihiro_face2();
	this.instance.parent = this;
	this.instance.setTransform(-64,-66,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._char_B, new cjs.Rectangle(-63.2,-65,63.2,65), null);


(lib._char_A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_5
	this.instance = new lib.chihiro_body();
	this.instance.parent = this;
	this.instance.setTransform(-57,-274,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._char_A, new cjs.Rectangle(-57,-274,114,274), null);


(lib._btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyvYOMAAAgwbMAlfAAAMAAAAwbg");
	this.shape.setTransform(120,155);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,310);


(lib.yajirusi2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		/* 
		gotoAndPlay(1)*/
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// レイヤー_1
	this.instance = new lib.yajirusi_b();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-5.3,regY:-5.2,x:-6.7,y:-6.6},0).wait(1).to({x:-6.4,y:-6.3},0).wait(1).to({x:-6,y:-5.9},0).wait(1).to({x:-5.6,y:-5.5},0).wait(1).to({x:-5.35,y:-5.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:-5.3,regY:-5.2,x:-5.35,y:-5.25},0).wait(1).to({x:-5.65,y:-5.55},0).wait(1).to({x:-6.05,y:-5.95},0).wait(1).to({x:-6.45,y:-6.35},0).wait(1).to({x:-6.7,y:-6.6},0).wait(1).to({regX:0,regY:0,x:-1.5,y:-1.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-11.8,12.2,11.8);


(lib.yajirusi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		/* 
		gotoAndPlay(1)*/
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// レイヤー_1
	this.instance = new lib.yajirusi_p();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-5.3,regY:-5.2,x:-6.7,y:-6.6},0).wait(1).to({x:-6.4,y:-6.3},0).wait(1).to({x:-6,y:-5.9},0).wait(1).to({x:-5.6,y:-5.5},0).wait(1).to({x:-5.35,y:-5.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:-5.3,regY:-5.2,x:-5.35,y:-5.25},0).wait(1).to({x:-5.65,y:-5.55},0).wait(1).to({x:-6.05,y:-5.95},0).wait(1).to({x:-6.45,y:-6.35},0).wait(1).to({x:-6.7,y:-6.6},0).wait(1).to({regX:0,regY:0,x:-1.5,y:-1.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-11.8,12.2,11.8);


(lib.window_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(32));

	// レイヤー_2
	this.instance = new lib.yajirusi2();
	this.instance.parent = this;
	this.instance.setTransform(110.7,134.4,1,1,0,0,0,0.2,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(32));

	// text_window
	this.instance_1 = new lib.text_window();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,110,1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.04},3,cjs.Ease.get(1)).wait(1).to({scaleY:1},0).wait(25).to({scaleY:0.925},1).to({scaleY:1.2002},1).to({scaleY:1},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,62,232,84);


(lib.transition_container2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// angel
	this.instance = new lib.angel();
	this.instance.parent = this;
	this.instance.setTransform(77,47,0.2371,0.6235,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:0.0133},2,cjs.Ease.get(1)).wait(1).to({scaleX:0.0569,skewY:0},0).to({scaleX:0.6297,x:81},3,cjs.Ease.get(1)).wait(1).to({scaleX:0.4834},0).wait(1).to({scaleX:0.4258},0).wait(1).to({scaleX:0.3967},0).wait(1).to({scaleX:0.3874},0).to({scaleX:0.9248},2,cjs.Ease.get(-1)).to({scaleX:0.0236,scaleY:0.5609},1,cjs.Ease.get(1)).to({_off:true},1).wait(23));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AvnwOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AvnwOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AvnwOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AvnwOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AvnwOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AvnwOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AvnwOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AvnwOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_13 = new cjs.Graphics().p("AvnwOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_14 = new cjs.Graphics().p("ArewOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AmZwOMAx/AAAMgSwAgdMgx/AAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-192,y:43.9233}).wait(1).to({graphics:mask_graphics_1,x:-62.3403,y:43.9233}).wait(1).to({graphics:mask_graphics_2,x:2.1645,y:43.9233}).wait(1).to({graphics:mask_graphics_3,x:43.6959,y:43.9233}).wait(1).to({graphics:mask_graphics_4,x:68.8695,y:43.9233}).wait(1).to({graphics:mask_graphics_5,x:78,y:43.9233}).wait(6).to({graphics:mask_graphics_11,x:78,y:43.9233}).wait(1).to({graphics:mask_graphics_12,x:143,y:43.9233}).wait(1).to({graphics:mask_graphics_13,x:208,y:43.9233}).wait(1).to({graphics:mask_graphics_14,x:246.4998,y:43.9233}).wait(1).to({graphics:mask_graphics_15,x:279,y:43.9233}).wait(1).to({graphics:null,x:0,y:0}).wait(22));

	// bg_transition
	this.instance_1 = new lib.bg_transition();
	this.instance_1.parent = this;
	this.instance_1.setTransform(77,47);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},16).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-487.5,-126.4,1115,346.5);


(lib.transition_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// angel
	this.instance = new lib.angel();
	this.instance.parent = this;
	this.instance.setTransform(77,47,0.6235,0.6235,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({scaleX:0.0318},2).wait(1).to({scaleX:0.0569,skewY:0},0).to({scaleX:0.6297},3).wait(1).to({scaleX:0.6252},0).wait(1).to({scaleX:0.6096},0).wait(1).to({scaleX:0.5792},0).wait(1).to({scaleX:0.5312},0).wait(1).to({scaleX:0.4722},0).wait(1).to({scaleX:0.4227},0).wait(1).to({scaleX:0.3952},0).wait(1).to({scaleX:0.3874},0).to({scaleX:0.9248},3,cjs.Ease.get(-1)).to({scaleX:0.0236,scaleY:0.9001},2,cjs.Ease.get(1)).to({_off:true},1).wait(2));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AvnwOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AvnwOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AvnwOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AvnwOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AvnwOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AvnwOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AvnwOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AvnwOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AvnwOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AvnwOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AvnwOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AvSwOMAx/AAAMgSwAgdMgx/AAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AmZwOMAx/AAAMgSwAgdMgx/AAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-192,y:43.9233}).wait(1).to({graphics:mask_graphics_1,x:-153.4286,y:43.9233}).wait(1).to({graphics:mask_graphics_2,x:-114.8571,y:43.9233}).wait(1).to({graphics:mask_graphics_3,x:-76.2857,y:43.9233}).wait(1).to({graphics:mask_graphics_4,x:-37.7143,y:43.9233}).wait(1).to({graphics:mask_graphics_5,x:0.8571,y:43.9233}).wait(1).to({graphics:mask_graphics_6,x:39.4286,y:43.9233}).wait(1).to({graphics:mask_graphics_7,x:78,y:43.9233}).wait(12).to({graphics:mask_graphics_19,x:78,y:43.9233}).wait(1).to({graphics:mask_graphics_20,x:94.25,y:43.9233}).wait(1).to({graphics:mask_graphics_21,x:143,y:43.9233}).wait(1).to({graphics:mask_graphics_22,x:222.1248,y:43.9233}).wait(1).to({graphics:mask_graphics_23,x:279,y:43.9233}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// bg_transition
	this.instance_1 = new lib.bg_transition();
	this.instance_1.parent = this;
	this.instance_1.setTransform(77,47);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,154,94);


(lib.table_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// arrow
	this.instance = new lib.yajirusi();
	this.instance.parent = this;
	this.instance.setTransform(229.2,-5.35,1,1,0,0,0,0.2,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// text
	this.t4 = new cjs.Text("", "12px 'Arial'", "#333333");
	this.t4.name = "t4";
	this.t4.lineHeight = 15;
	this.t4.lineWidth = 260;
	this.t4.parent = this;
	this.t4.setTransform(16,-20.5);

	this.t3 = new cjs.Text("", "12px 'Arial'", "#333333");
	this.t3.name = "t3";
	this.t3.lineHeight = 15;
	this.t3.lineWidth = 260;
	this.t3.parent = this;
	this.t3.setTransform(16,-35.5);

	this.t2 = new cjs.Text("", "12px 'Arial'", "#333333");
	this.t2.name = "t2";
	this.t2.lineHeight = 15;
	this.t2.lineWidth = 260;
	this.t2.parent = this;
	this.t2.setTransform(16,-51.5);

	this.t1 = new cjs.Text("", "12px 'Arial'", "#333333");
	this.t1.name = "t1";
	this.t1.lineHeight = 15;
	this.t1.lineWidth = 260;
	this.t1.parent = this;
	this.t1.setTransform(16,-67.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4}]}).to({state:[]},2).wait(1));

	// window
	this.instance_1 = new lib.table();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,-84,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-84,280.6,111);


(lib.silhouette2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_9
	this.instance = new lib.replace_silhouette2_1();
	this.instance.parent = this;
	this.instance.setTransform(120,120,1,1,0,0,0,120,120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.silhouette2, new cjs.Rectangle(0,0,240,240), null);


(lib.silhouette1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_9
	this.instance = new lib.replace_silhouette1_1();
	this.instance.parent = this;
	this.instance.setTransform(120,120,1,1,0,0,0,120,120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.silhouette1, new cjs.Rectangle(0,0,240,240), null);


(lib.shuttle2_mc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* play();
		*/
		
		this.play();
	}
	this.frame_99 = function() {
		/* gotoAndPlay(1);*/
		
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(99).call(this.frame_99).wait(1));

	// レイヤー_1
	this.instance = new lib.shuttle2_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,37.95,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.6,-15.7,107.30000000000001,107.3);


(lib.shuttle2_mc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_107 = function() {
		/* gotoAndPlay(1);*/
		
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(107).call(this.frame_107).wait(1));

	// レイヤー_1
	this.instance = new lib.shuttle2_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,55.2,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},107).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.3,-13.1,136.6,136.6);


(lib.shuttle2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_69 = function() {
		/* gotoAndPlay(1);
		*/
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(69).call(this.frame_69).wait(1));

	// レイヤー_1
	this.instance = new lib.shuttle2_1("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},69).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.4,-97.4,194.8,194.8);


(lib.select_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// flower3
	this.instance = new lib.flower2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(21.35,5.15,0.7153,0.7153);
	this.instance.filters = [new cjs.ColorFilter(0.83, 0.83, 0.83, 1, 43.35, 43.35, 43.35, 0)];
	this.instance.cache(-8,-8,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9263,scaleY:0.9263,rotation:-109.2395,x:37.9483,y:4.0879,alpha:0.7629},0).wait(1).to({scaleX:1.0075,scaleY:1.0075,rotation:-151.2698,x:44.3346,y:3.6793,alpha:0.6717},0).wait(1).to({scaleX:1.0578,scaleY:1.0578,rotation:-177.32,x:48.2928,y:3.4261,alpha:0.6152},0).wait(1).to({scaleX:1.0947,scaleY:1.0947,rotation:-196.4325,x:51.1968,y:3.2402,alpha:0.5737},0).wait(1).to({scaleX:1.1264,scaleY:1.1264,rotation:-212.8396,x:53.6898,y:3.0807,alpha:0.5381},0).wait(1).to({scaleX:1.159,scaleY:1.159,rotation:-229.6917,x:56.2504,y:2.9169,alpha:0.5015},0).wait(1).to({scaleX:1.1995,scaleY:1.1995,rotation:-250.6808,x:59.4396,y:2.7128,alpha:0.456},0).wait(1).to({scaleX:1.2618,scaleY:1.2618,rotation:-282.9321,x:64.34,y:2.3993,alpha:0.386},0).wait(1).to({scaleX:1.4107,scaleY:1.4107,rotation:-360,x:76.05,y:1.65,alpha:0.2188},0).to({_off:true},1).wait(2));

	// flower2
	this.instance_1 = new lib.flower2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14,-10.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.1626,scaleY:1.1626,rotation:-109.2395,x:-21.6923,y:-20.6188,alpha:0.7629},0).wait(1).to({scaleX:1.2251,scaleY:1.2251,rotation:-151.2698,x:-24.6519,y:-24.6467,alpha:0.6717},0).wait(1).to({scaleX:1.2639,scaleY:1.2639,rotation:-177.32,x:-26.4863,y:-27.1432,alpha:0.6152},0).wait(1).to({scaleX:1.2923,scaleY:1.2923,rotation:-196.4325,x:-27.8321,y:-28.9748,alpha:0.5737},0).wait(1).to({scaleX:1.3167,scaleY:1.3167,rotation:-212.8396,x:-28.9875,y:-30.5471,alpha:0.5381},0).wait(1).to({scaleX:1.3418,scaleY:1.3418,rotation:-229.6917,x:-30.1741,y:-32.1621,alpha:0.5015},0).wait(1).to({scaleX:1.3731,scaleY:1.3731,rotation:-250.6808,x:-31.6521,y:-34.1736,alpha:0.456},0).wait(1).to({scaleX:1.4211,scaleY:1.4211,rotation:-282.9321,x:-33.9231,y:-37.2643,alpha:0.386},0).wait(1).to({scaleX:1.5357,scaleY:1.5357,rotation:-360,x:-39.35,y:-44.65,alpha:0.2188},0).to({_off:true},1).wait(2));

	// flower1
	this.instance_2 = new lib.flower1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(15.8,-6.5,0.7927,0.7927);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:0.8875,scaleY:0.8875,rotation:-109.2395,x:28.8481,y:-20.2005,alpha:0.7629},0).wait(1).to({scaleX:0.9239,scaleY:0.9239,rotation:-151.2698,x:33.8683,y:-25.4718,alpha:0.6717},0).wait(1).to({scaleX:0.9465,scaleY:0.9465,rotation:-177.32,x:36.9799,y:-28.7389,alpha:0.6152},0).wait(1).to({scaleX:0.9631,scaleY:0.9631,rotation:-196.4325,x:39.2628,y:-31.1359,alpha:0.5737},0).wait(1).to({scaleX:0.9773,scaleY:0.9773,rotation:-212.8396,x:41.2225,y:-33.1936,alpha:0.5381},0).wait(1).to({scaleX:0.9919,scaleY:0.9919,rotation:-229.6917,x:43.2354,y:-35.3072,alpha:0.5015},0).wait(1).to({scaleX:1.0101,scaleY:1.0101,rotation:-250.6808,x:45.7424,y:-37.9396,alpha:0.456},0).wait(1).to({scaleX:1.0381,scaleY:1.0381,rotation:-282.9321,x:49.5947,y:-41.9844,alpha:0.386},0).wait(1).to({scaleX:1.1049,scaleY:1.1049,rotation:-360,x:58.8,y:-51.65,alpha:0.2188},0).to({_off:true},1).wait(2));

	// flower3
	this.instance_3 = new lib.flower2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-14.45,14.3,0.7153,0.7153);
	this.instance_3.filters = [new cjs.ColorFilter(0.83, 0.83, 0.83, 1, 43.35, 43.35, 43.35, 0)];
	this.instance_3.cache(-8,-8,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:0.9263,scaleY:0.9263,rotation:-109.2395,x:-24.7064,y:28.1067,alpha:0.7629},0).wait(1).to({scaleX:1.0075,scaleY:1.0075,rotation:-151.2698,x:-28.6526,y:33.4188,alpha:0.6717},0).wait(1).to({scaleX:1.0578,scaleY:1.0578,rotation:-177.32,x:-31.0984,y:36.7113,alpha:0.6152},0).wait(1).to({scaleX:1.0947,scaleY:1.0947,rotation:-196.4325,x:-32.8928,y:39.1269,alpha:0.5737},0).wait(1).to({scaleX:1.1264,scaleY:1.1264,rotation:-212.8396,x:-34.4333,y:41.2006,alpha:0.5381},0).wait(1).to({scaleX:1.159,scaleY:1.159,rotation:-229.6917,x:-36.0155,y:43.3305,alpha:0.5015},0).wait(1).to({scaleX:1.1995,scaleY:1.1995,rotation:-250.6808,x:-37.9861,y:45.9833,alpha:0.456},0).wait(1).to({scaleX:1.2618,scaleY:1.2618,rotation:-282.9321,x:-41.0142,y:50.0595,alpha:0.386},0).wait(1).to({scaleX:1.4107,scaleY:1.4107,rotation:-360,x:-48.25,y:59.8,alpha:0.2188},0).to({_off:true},1).wait(2));

	// flower3
	this.instance_4 = new lib.flower2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(5.6,19);
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 153, 204, 0)];
	this.instance_4.cache(-8,-8,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleX:1.1475,scaleY:1.1475,rotation:-109.2395,x:11.684,y:34.7184,alpha:0.7629},0).wait(1).to({scaleX:1.2043,scaleY:1.2043,rotation:-151.2698,x:14.0249,y:40.7661,alpha:0.6717},0).wait(1).to({scaleX:1.2394,scaleY:1.2394,rotation:-177.32,x:15.4757,y:44.5144,alpha:0.6152},0).wait(1).to({scaleX:1.2652,scaleY:1.2652,rotation:-196.4325,x:16.5402,y:47.2645,alpha:0.5737},0).wait(1).to({scaleX:1.2874,scaleY:1.2874,rotation:-212.8396,x:17.454,y:49.6253,alpha:0.5381},0).wait(1).to({scaleX:1.3102,scaleY:1.3102,rotation:-229.6917,x:18.3926,y:52.0501,alpha:0.5015},0).wait(1).to({scaleX:1.3385,scaleY:1.3385,rotation:-250.6808,x:19.5615,y:55.0702,alpha:0.456},0).wait(1).to({scaleX:1.3821,scaleY:1.3821,rotation:-282.9321,x:21.3577,y:59.7108,alpha:0.386},0).wait(1).to({scaleX:1.4861,scaleY:1.4861,rotation:-360,x:25.65,y:70.8,alpha:0.2188},0).to({_off:true},1).wait(2));

	// flower2
	this.instance_5 = new lib.flower2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-20.9,2.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({scaleX:1.271,scaleY:1.271,rotation:-109.2395,x:-36.9673,y:3.5155,alpha:0.7629},0).wait(1).to({scaleX:1.3752,scaleY:1.3752,rotation:-151.2698,x:-43.1493,y:4.0409,alpha:0.6717},0).wait(1).to({scaleX:1.4398,scaleY:1.4398,rotation:-177.32,x:-46.9808,y:4.3665,alpha:0.6152},0).wait(1).to({scaleX:1.4872,scaleY:1.4872,rotation:-196.4325,x:-49.792,y:4.6054,alpha:0.5737},0).wait(1).to({scaleX:1.5279,scaleY:1.5279,rotation:-212.8396,x:-52.2052,y:4.8105,alpha:0.5381},0).wait(1).to({scaleX:1.5697,scaleY:1.5697,rotation:-229.6917,x:-54.6838,y:5.0211,alpha:0.5015},0).wait(1).to({scaleX:1.6218,scaleY:1.6218,rotation:-250.6808,x:-57.771,y:5.2835,alpha:0.456},0).wait(1).to({scaleX:1.7018,scaleY:1.7018,rotation:-282.9321,x:-62.5146,y:5.6867,alpha:0.386},0).wait(1).to({scaleX:1.8929,scaleY:1.8929,rotation:-360,x:-73.85,y:6.65,alpha:0.2188},0).to({_off:true},1).wait(2));

	// flower1
	this.instance_6 = new lib.flower1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.3,-12.15,0.7812,0.7812,-44.9992);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({scaleX:0.9577,scaleY:0.9577,rotation:110.1765,x:-0.7621,y:-31.6614,alpha:0.7629},0).wait(1).to({scaleX:1.0256,scaleY:1.0256,rotation:31.3695,x:-1.1707,y:-39.1685,alpha:0.6717},0).wait(1).to({scaleX:1.0676,scaleY:1.0676,rotation:-17.4746,x:-1.4239,y:-43.8213,alpha:0.6152},0).wait(1).to({scaleX:1.0985,scaleY:1.0985,rotation:-53.3106,x:-1.6098,y:-47.235,alpha:0.5737},0).wait(1).to({scaleX:1.125,scaleY:1.125,rotation:-84.074,x:-1.7693,y:-50.1655,alpha:0.5381},0).wait(1).to({scaleX:1.1522,scaleY:1.1522,rotation:-115.6717,x:-1.9331,y:-53.1755,alpha:0.5015},0).wait(1).to({scaleX:1.1861,scaleY:1.1861,rotation:-155.0263,x:-2.1372,y:-56.9244,alpha:0.456},0).wait(1).to({scaleX:1.2382,scaleY:1.2382,rotation:-215.4975,x:-2.4507,y:-62.6848,alpha:0.386},0).wait(1).to({scaleX:1.3627,scaleY:1.3627,rotation:-360,x:-3.2,y:-76.45,alpha:0.2188},0).to({_off:true},1).wait(2));

	// レイヤー_1
	this.instance_7 = new lib.select_circle();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.5578,0.5578);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.2947,scaleY:1.2947,alpha:0.3984},2,cjs.Ease.get(1)).to({scaleX:1.7159,scaleY:1.7159,alpha:0.1016},7,cjs.Ease.get(-1)).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.4,-89.6,168.5,171.1);


(lib.question = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_38 = function() {
		/* gotoAndPlay( 1 );
		*/
		
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1));

	// レイヤー_1
	this.instance = new lib.question_container();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:2.1,scaleX:0.9864,y:2.1},0).wait(1).to({scaleX:0.9403},0).wait(1).to({scaleX:0.8516},0).wait(1).to({scaleX:0.7102},0).wait(1).to({scaleX:0.5196},0).wait(1).to({scaleX:0.32},0).wait(1).to({scaleX:0.1694},0).wait(1).to({scaleX:0.0877},0).wait(1).to({regY:0,scaleX:0.0641,y:0},0).to({scaleX:0.1282,skewY:180},1).wait(1).to({regY:2.1,scaleX:0.1408,y:2.1},0).wait(1).to({scaleX:0.1838},0).wait(1).to({scaleX:0.2665},0).wait(1).to({scaleX:0.3981},0).wait(1).to({scaleX:0.5757},0).wait(1).to({scaleX:0.7617},0).wait(1).to({scaleX:0.9019},0).wait(1).to({scaleX:0.978},0).wait(1).to({regY:0,scaleX:1,y:0},0).wait(1).to({regY:2.1,scaleX:0.9874,y:2.1},0).wait(1).to({scaleX:0.9444},0).wait(1).to({scaleX:0.8617},0).wait(1).to({scaleX:0.7301},0).wait(1).to({scaleX:0.5525},0).wait(1).to({scaleX:0.3666},0).wait(1).to({scaleX:0.2263},0).wait(1).to({scaleX:0.1502},0).wait(1).to({regY:0,scaleX:0.1282,y:0},0).to({scaleX:0.0641,skewY:0},1).wait(1).to({regY:2.1,scaleX:0.0777,y:2.1},0).wait(1).to({scaleX:0.1238},0).wait(1).to({scaleX:0.2125},0).wait(1).to({scaleX:0.3539},0).wait(1).to({scaleX:0.5445},0).wait(1).to({scaleX:0.7441},0).wait(1).to({scaleX:0.8947},0).wait(1).to({scaleX:0.9764},0).wait(1).to({regY:0,scaleX:1,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-22.1,31.299999999999997,48.400000000000006);


(lib.powder_paper_core_yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{r:58,"-":118});

	// timeline functions:
	this.frame_0 = function() {
		/* _rotation = _rotation + Math.random()*14
		
		//gotoAndPlay(random(25)+2)
		gotoAndPlay(random(65)+15)*/
		
		this.rotation = this.rotation + Math.random() * 14;
		this.gotoAndPlay( Math.floor(Math.random() * 65) + 14 );
	}
	this.frame_118 = function() {
		/* gotoAndPlay("r")*/
		this.gotoAndPlay("r");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(118).call(this.frame_118).wait(1));

	// base
	this.instance = new lib.powder_paper_core_inner_yellow();
	this.instance.parent = this;
	this.instance.setTransform(-1.4,-17.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({x:0},0).to({x:2.1,y:692.85},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-20.9,8.4,716.8);


(lib.powder_paper_core_purple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"r":58,"-":118});

	// timeline functions:
	this.frame_0 = function() {
		/* _rotation = _rotation + Math.random()*14
		
		//gotoAndPlay(random(25)+2)
		gotoAndPlay(random(65)+15)*/
		
		this.rotation = this.rotation + Math.random() * 14;
		this.gotoAndPlay( Math.floor(Math.random() * 65) + 14 );
	}
	this.frame_118 = function() {
		/* gotoAndPlay("r")*/
		this.gotoAndPlay("r");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(118).call(this.frame_118).wait(1));

	// base
	this.instance = new lib.powder_paper_core_inner_purple();
	this.instance.parent = this;
	this.instance.setTransform(-1.4,-17.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({x:0},0).to({x:2.1,y:692.85},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-20.9,8.4,716.8);


(lib.powder_paper_core_pink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"r":58,"-":118});

	// timeline functions:
	this.frame_0 = function() {
		/* _rotation = _rotation + Math.random()*14
		
		//gotoAndPlay(random(25)+2)
		gotoAndPlay(random(65)+15)*/
		
		this.rotation = this.rotation + Math.random() * 14;
		this.gotoAndPlay( Math.floor(Math.random() * 65) + 14 );
	}
	this.frame_118 = function() {
		/* gotoAndPlay("r")*/
		this.gotoAndPlay("r");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(118).call(this.frame_118).wait(1));

	// base
	this.instance = new lib.powder_paper_core_inner_pink();
	this.instance.parent = this;
	this.instance.setTransform(-1.4,-17.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({x:0},0).to({x:2.1,y:692.85},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-20.9,8.4,716.8);


(lib.powder_paper_core_green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"r":58,"-":118});

	// timeline functions:
	this.frame_0 = function() {
		/* _rotation = _rotation + Math.random()*14
		
		//gotoAndPlay(random(25)+2)
		gotoAndPlay(random(65)+15)*/
		
		this.rotation = this.rotation + Math.random() * 14;
		this.gotoAndPlay( Math.floor(Math.random() * 65) + 14 );
	}
	this.frame_118 = function() {
		/* gotoAndPlay("r")*/
		this.gotoAndPlay("r");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(118).call(this.frame_118).wait(1));

	// base
	this.instance = new lib.powder_paper_core_inner_green();
	this.instance.parent = this;
	this.instance.setTransform(-1.4,-17.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({x:0},0).to({x:2.1,y:692.85},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-20.9,8.4,716.8);


(lib.powder_paper_core_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"r":58,"-":118});

	// timeline functions:
	this.frame_0 = function() {
		/* _rotation = _rotation + Math.random()*14
		
		//gotoAndPlay(random(25)+2)
		gotoAndPlay(random(65)+15)*/
		
		this.rotation = this.rotation + Math.random() * 14;
		this.gotoAndPlay( Math.floor(Math.random() * 65) + 14 );
	}
	this.frame_118 = function() {
		/* gotoAndPlay("r")*/
		this.gotoAndPlay("r");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(118).call(this.frame_118).wait(1));

	// base
	this.instance = new lib.powder_paper_core_inner_blue();
	this.instance.parent = this;
	this.instance.setTransform(-1.4,-17.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({x:0},0).to({x:2.1,y:692.85},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-20.9,8.4,716.8);


(lib.powder_paper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.powder_paper_core_yellow();
	this.instance.parent = this;
	this.instance.setTransform(-123.3,58.7,2.2434,2.2434);

	this.instance_1 = new lib.powder_paper_core_blue();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-150.15,45.45);

	this.instance_2 = new lib.powder_paper_core_green();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-141.65,38.15,0.8151,0.8151,0,0,180);

	this.instance_3 = new lib.powder_paper_core_yellow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50.85,54.6,1.482,1.482,0,0,180);

	this.instance_4 = new lib.powder_paper_core_purple();
	this.instance_4.parent = this;
	this.instance_4.setTransform(16.2,39.4);

	this.instance_5 = new lib.powder_paper_core_pink();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-74.85,40.1,0.5634,0.5634);

	this.instance_6 = new lib.powder_paper_core_blue();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-132.7,42.9,1.0737,1.1914);

	this.instance_7 = new lib.powder_paper_core_green();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-127,43.5,0.5916,0.5916);

	this.instance_8 = new lib.powder_paper_core_blue();
	this.instance_8.parent = this;
	this.instance_8.setTransform(73.95,35.3,0.7145,0.7145,0,0,180);

	this.instance_9 = new lib.powder_paper_core_purple();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-32.5,41.8,1.8772,1.8772,0,0,180);

	this.instance_10 = new lib.powder_paper_core_green();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-56.8,31.1,0.5775,0.5775);

	this.instance_11 = new lib.powder_paper_core_blue();
	this.instance_11.parent = this;
	this.instance_11.setTransform(131.1,34.25,0.5106,0.5106);

	this.instance_12 = new lib.powder_paper_core_pink();
	this.instance_12.parent = this;
	this.instance_12.setTransform(35.95,52.4,0.8962,0.8962);

	this.instance_13 = new lib.powder_paper_core_yellow();
	this.instance_13.parent = this;
	this.instance_13.setTransform(117.9,39.2,0.9937,0.8943);

	this.instance_14 = new lib.powder_paper_core_green();
	this.instance_14.parent = this;
	this.instance_14.setTransform(115.45,36.35,1.0614,1.0614);

	this.instance_15 = new lib.powder_paper_core_pink();
	this.instance_15.parent = this;
	this.instance_15.setTransform(107.05,38.25,0.571,0.571);

	this.instance_16 = new lib.powder_paper_core_yellow();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-11.85,42);

	this.instance_17 = new lib.powder_paper_core_pink();
	this.instance_17.parent = this;
	this.instance_17.setTransform(1.35,47.05);

	this.instance_18 = new lib.powder_paper_core_purple();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-82.55,37.2);

	this.instance_19 = new lib.powder_paper_core_pink();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-103.6,34.85,0.5557,0.5557,2.4518);

	this.instance_20 = new lib.powder_paper_core_green();
	this.instance_20.parent = this;
	this.instance_20.setTransform(66.8,57.8,1.7537,1.7537);

	this.instance_21 = new lib.powder_paper_core_pink();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-22.2,34.75);

	this.instance_22 = new lib.powder_paper_core_purple();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-115.1,52.15,1.7537,1.7537,0,0,180);

	this.instance_23 = new lib.powder_paper_core_yellow();
	this.instance_23.parent = this;
	this.instance_23.setTransform(84.95,45.05);

	this.instance_24 = new lib.powder_paper_core_green();
	this.instance_24.parent = this;
	this.instance_24.setTransform(11.05,55.3,1.7537,1.7537);

	this.instance_25 = new lib.powder_paper_core_yellow();
	this.instance_25.parent = this;
	this.instance_25.setTransform(57.45,34.75);

	this.instance_26 = new lib.powder_paper_core_yellow();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-92.25,47.85);

	this.instance_27 = new lib.powder_paper_core_purple();
	this.instance_27.parent = this;
	this.instance_27.setTransform(99.75,49.9,1.7537,1.7537);

	this.instance_28 = new lib.powder_paper_core_blue();
	this.instance_28.parent = this;
	this.instance_28.setTransform(29.45,56.3,1.7537,1.7537);

	this.instance_29 = new lib.powder_paper_core_purple();
	this.instance_29.parent = this;
	this.instance_29.setTransform(46.15,43.75);

	this.instance_30 = new lib.powder_paper_core_pink();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-40.5,33.4);

	this.instance_31 = new lib.powder_paper_core_blue();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-62.55,51.3,2.2434,2.2434);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.powder_paper, new cjs.Rectangle(-153.7,2.5,285.5,37), null);


(lib.news_letter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.news_letter_inner();
	this.instance.parent = this;
	this.instance.setTransform(746.5,11,1,1,0,0,0,306.5,11);

	this.instance_1 = new lib.news_letter_inner();
	this.instance_1.parent = this;
	this.instance_1.setTransform(306.7,11,1,1,0,0,0,306.7,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.news_letter, new cjs.Rectangle(0,0,867.7,40), null);


(lib.logo_400_large = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{light:1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
		this.stop();
	}
	this.frame_1 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_14 = function() {
		/* stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(1));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AGeIaIgfhKIgeALQgQAGgLABQgRACgKAHQgLAHgHAOQgFAKgJALQgLAMgFgBQgEAAgEgFQgEgFgCgFQgGgXgJgKQgLgNgXABQgGABgKgEIgQgHIAUggIgUgBIkGAAIkIgBQgRAAgHAGQgHAHgBAQQgFAngGAEQgHADgigVIhWg1IhWg1QgKgHgJAAQgJgBgLAGIkQCDIgPAHIgRAGIAAgaIgcAEIAIgnIgfADIAPgiICPj5QAHgLgBgIQAAgIgHgLIhaiQQgKgPACgFQADgGATgEICKgdQghgVAhgRIgDgGIgNgBIgNgBIglAFIglAFQgGAAgJgCIgPgDIAFgOQAEgJADgFQAegpAVgYQAIgJACgJQABgJgDgLQgIgVgLgsQgEgQAGgHQAGgGAQADIAnAHIAoAIQAHABAIgCQAIgCAGgEIAjgbIAkgcQAFgDAIgDIAPgFIAEAPQACAJgBAGIgDAjQgCAWAAANQAAAHAEAIQAEAIAGAEQAKAHASALIAdARQAJAFAGgBQAGgBAGgIQAigqApguQANgOADgBQAJgEAIAUQACAEALACQALADAEgDQAWgQAGgSQADgIgBgOIgCgXQABgQAHgEQAIgFALAJQAaAUAbgDQAXgCAdgSQADgCAHgBIANgBIAAAMQABAIgBAEQgFAUgFALQgIAOAGAMQAEAJAMAKQAFAEALACIAUAFIACgrIACgmQACgUAKgJQAJgJAUAAIApABQAXACAQAQQAFAEAPAAIAagBQAMACAIgFQAHgFAIgLQAMgSAkgBQAkgCAQARQAMANAKAFQANAHAQAAQAGAAALAFIASAKIAGgEQAdgIAJgEQAUgKAMgSQAJgNAjACQAhACARAMQAJAGAPAAQBsgDA1ABQAHAAAKAGIATANIgQhYQgFgYAIgHQAHgGAYAGIAEACQBcAvBKhLQAKgJARgJIALgEQAHgCACACQADAEACAGQACAHgBAFQgHAygIAmQgDALADAHQADAHAJAGIAgAWIAfAXQAMAJABAGQACAIgNAJQgMAKgNAYQhCB8gYAwQgGAMgEAVIgIAlIBpBGQACABAGgBIAKgDQAjgFAMABQAZACARAVQAJALACAKQACALgFALIgaA+IAcAQQAQAJAKAHQANAKABAOQAAANgKAOIheB/IAUANQALAHAGAGQASATAdAnQABABgDAGQgDAFgCABIgLACIgLAAIjMAAIjMAAQgggBgTAJQgXALgMAcQgFANgKAPIgRAaQgJANgHAAQgJAAgHgRgAI9EQIgHAaQArAHAPgDQAOgEAJgVIhDgbIgHAWgACEDhQgGAHgJARIgUAYIgXAcICwgBQADAAAEgDQAEgDABgEIAKgbIAKgdIgjgCIgfgEQgkgFgUgFIgJgBQgMAAgHAIgAG0C0IgIAiQgFATgHANQgBABAEAFIAIANIA0iLIgGgEQgaAQgLAqgAgLDLIAHADIArhcIgYAAgAKVCQIAhAhIAjgoIg+AAgAmQjyIAMA8IALA7QACAHAEAIQAFAJAEAAQAUACAJgBQAQAAAGgHQASgTAWgeIAigyIgRgsQgSgDgNAIQgLAHgKARQgFAJgLAMIgSAUIgNgXQgIgNgEgKQgFgNgHgEQgEgDgGAAQgGAAgHACgAqniJIACADIA0AAIAZgeIgDgEg");
	mask.setTransform(0.9762,0.4518);

	// light
	this.instance = new lib.loght_gra("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-20.95,-6.05,1,1,44.9994,0,0,0,99.7);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:-2.9,regY:72,x:0.7,y:-23.55},0).wait(1).to({x:13.3,y:-10.9},0).wait(1).to({regX:0,regY:99.7,x:35.8,y:50.7},0).wait(1).to({regX:-2.9,regY:72,x:98.4,y:70},0).wait(1).to({x:114.55,y:84.75},0).wait(1).to({x:125.55,y:94.75},0).wait(1).to({x:133.7,y:102.15},0).wait(1).to({x:139.8,y:107.7},0).wait(1).to({x:144.3,y:111.8},0).wait(1).to({x:147.4,y:114.6},0).wait(1).to({x:149.2,y:116.25},0).wait(1).to({regX:0,regY:99.7,x:132.3,y:138.5},0).to({_off:true},1).wait(1));

	// img
	this.instance_1 = new lib.logo("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.5,-61.5,223,123);


(lib.kamif = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"r":44,"-":164});

	// timeline functions:
	this.frame_0 = function() {
		/* _rotation = _rotation + Math.random()*20-10
		
		tellTarget("p") {
			gotoAndPlay((random(4)+1))
		}
		gotoAndPlay(random(110)+12)*/
		
		this.rotation = this.rotation + Math.random()*20-10;
		
		this.p.gotoAndPlay(Math.floor(Math.random()*4));
		
		this.gotoAndPlay(Math.floor(Math.random()*110)+11);
	}
	this.frame_164 = function() {
		/* gotoAndPlay("r")*/
		
		this.gotoAndPlay("r");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(164).call(this.frame_164).wait(1));

	// レイヤー_1
	this.p = new lib.kamif_p();
	this.p.name = "p";
	this.p.parent = this;
	this.p.setTransform(0,-17.45);

	this.timeline.addTween(cjs.Tween.get(this.p).wait(44).to({x:7.95,y:687.8},120).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-17.2,10.9,708.1);


(lib.icon_passion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.bar();
	this.instance.parent = this;
	this.instance.setTransform(272.65,-129.8,9.9995,9.9995,-121.5999);

	this.instance_1 = new lib.icon_passion_inner();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon_passion, new cjs.Rectangle(-246.3,-1207.5,2235.4,1453.8), null);


(lib.icon_cute = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.bar();
	this.instance.parent = this;
	this.instance.setTransform(249.75,-106.6,10.0796,10.0796,-120.9575);

	this.instance_1 = new lib.icon_cute_inner();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.8274,0.8274);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon_cute, new cjs.Rectangle(-191.9,-1173.8,2183.4,1361), null);


(lib.icon_cool = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.bar();
	this.instance.parent = this;
	this.instance.setTransform(23.35,-15.6,0.9986,0.9987,-122.8657,0,0,0.1,0.1);
	this.instance.alpha = 0.75;

	this.instance_1 = new lib.icon_cool_inner();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.7489,0.7489,-31.6116);
	this.instance_1.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon_cool, new cjs.Rectangle(-28.9,-126.8,221.3,154.7), null);


(lib.efa_ｷﾗｷﾗ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.instance = new lib.シンボル10000();
	this.instance.parent = this;
	this.instance.setTransform(-0.05,0,0.1255,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:0.372},3).to({scaleX:0.5,alpha:0.1289},5).to({_off:true},1).wait(13));

	// レイヤー_3
	this.instance_1 = new lib._kirakira();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.6427,0.6427,-44.822);
	this.instance_1.alpha = 0.4297;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.38,scaleY:1.38,rotation:-25.2124,alpha:0.6792},0).wait(1).to({scaleX:1.9067,scaleY:1.9067,rotation:-11.2055,alpha:0.8574},0).wait(1).to({scaleX:2.2227,scaleY:2.2227,rotation:-2.8014,alpha:0.9644},0).wait(1).to({scaleX:2.328,scaleY:2.328,rotation:0,alpha:1},0).wait(1).to({scaleX:2.3399,scaleY:2.3399,rotation:0.7999,alpha:0.988},0).wait(1).to({scaleX:2.3723,scaleY:2.3723,rotation:2.975,alpha:0.9555},0).wait(1).to({scaleX:2.425,scaleY:2.425,rotation:6.5254,alpha:0.9024},0).wait(1).to({scaleX:2.4981,scaleY:2.4981,rotation:11.4511,alpha:0.8287},0).wait(1).to({scaleX:2.5917,scaleY:2.5917,rotation:17.7519,alpha:0.7344},0).wait(1).to({scaleX:2.7058,scaleY:2.7058,rotation:25.4281,alpha:0.6196},0).wait(1).to({scaleX:2.8402,scaleY:2.8402,rotation:34.4795,alpha:0.4841},0).wait(1).to({scaleX:2.9951,scaleY:2.9951,rotation:44.9061,alpha:0.3281},0).to({_off:true},1).wait(10));

	// Dummy_Layer
	this.instance_2 = new lib.grip();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.1,-42.3,148.2,84.69999999999999);


(lib.date_w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_3
	this.instance = new lib.repalce_target_notice_text1_w();
	this.instance.parent = this;
	this.instance.setTransform(66,40,1,1,0,0,0,66,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.date_w, new cjs.Rectangle(0,0,132,80), null);


(lib.date_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_3
	this.instance = new lib.repalce_target_notice_text1_b();
	this.instance.parent = this;
	this.instance.setTransform(66,40,1,1,0,0,0,66,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.date_b, new cjs.Rectangle(0,0,132,80), null);


(lib.date = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_3
	this.instance = new lib.repalce_target_notice_text1();
	this.instance.parent = this;
	this.instance.setTransform(66,40,1,1,0,0,0,66,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.date, new cjs.Rectangle(0,0,132,80), null);


(lib.copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.replace_target_notice_text2();
	this.instance.parent = this;
	this.instance.setTransform(21,1,1,1,0,0,0,72,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// angel_mark
	this.instance_1 = new lib.angel_mark();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-92,-30,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy, new cjs.Rectangle(-92,-30,181,61), null);


(lib.bg_grid_loop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.bg_grid_inner();
	this.instance.parent = this;
	this.instance.setTransform(120,464.1,1,1,0,0,0,120,155.1);

	this.instance_1 = new lib.bg_grid_inner();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,155,1,1,0,0,0,120,155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_grid_loop, new cjs.Rectangle(0,0,240,619), null);


(lib.bg_grid_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_76 = function() {
		/* gotoAndPlay( 1 );
		*/
		
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(76).call(this.frame_76).wait(29));

	// レイヤー_1
	this.instance = new lib.bg_grid_loop();
	this.instance.parent = this;
	this.instance.setTransform(120,155,1,1,0,0,0,120,155);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-155},104).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-310,595.9,929);


(lib.good_effect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		/* stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// flower3
	this.instance = new lib.flower2_good("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(21.35,5.15,0.7153,0.7153);
	this.instance.filters = [new cjs.ColorFilter(0.83, 0.83, 0.83, 1, 43.35, 43.35, 43.35, 0)];
	this.instance.cache(-8,-8,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.4107,scaleY:1.4107,rotation:-360,x:76.05,y:1.65,alpha:0.2188},11,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// flower2
	this.instance_1 = new lib.flower2_good("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14,-10.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.5357,scaleY:1.5357,rotation:-360,x:-39.35,y:-44.65,alpha:0.2188},11,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// flower1
	this.instance_2 = new lib.flower1_good("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(15.8,-6.5,0.7927,0.7927);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.1049,scaleY:1.1049,rotation:-360,x:58.8,y:-51.65,alpha:0.2188},11,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// flower3
	this.instance_3 = new lib.flower2_good("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-14.45,14.3,0.7153,0.7153);
	this.instance_3.filters = [new cjs.ColorFilter(0.83, 0.83, 0.83, 1, 43.35, 43.35, 43.35, 0)];
	this.instance_3.cache(-8,-8,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.4107,scaleY:1.4107,rotation:-360,x:-48.25,y:59.8,alpha:0.2188},11,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// flower3
	this.instance_4 = new lib.flower2_good("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(5.6,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.4861,scaleY:1.4861,rotation:-360,x:25.65,y:70.8,alpha:0.2188},11,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// flower2
	this.instance_5 = new lib.flower2_good("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-20.9,2.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.8929,scaleY:1.8929,rotation:-360,x:-73.85,y:6.65,alpha:0.2188},11,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// flower1
	this.instance_6 = new lib.flower1_good("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.3,-12.15,0.7812,0.7812,-44.9992);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.3627,scaleY:1.3627,rotation:-720,x:-3.2,y:-76.45,alpha:0.2188},11,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// en
	this.instance_7 = new lib.good_circle();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.5578,0.5578);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.7159,scaleY:1.7159,alpha:0.0508},11,cjs.Ease.get(1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.4,-89.6,168.5,171.1);


(lib.spread_star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_22 = function() {
		/* stop();
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(2));

	// as
	this.instance = new lib.guideline();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.45,1,1,0,0,0,0.5,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},22).wait(2));

	// heart
	this.instance_1 = new lib.spread_star_inner();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.7487,0.7487);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:360,x:2,y:-133.75,alpha:0.8008},8,cjs.Ease.get(1)).to({regX:-0.1,regY:-0.1,rotation:396.2324,x:-0.15,y:-160.85,alpha:0.75},1).to({regX:0,regY:0,scaleX:0.3461,scaleY:0.3461,rotation:478.0429,x:-0.1,y:-246.9,alpha:0.0898},8,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.2,-260.4,84.80000000000001,280.59999999999997);


(lib.star_ring_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		/* stop();*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(2));

	// レイヤー_1
	this.instance = new lib.star_ring();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.4284,0.4284);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.9727,scaleY:1.9727,alpha:0.5781},7,cjs.Ease.get(0.92)).to({scaleX:2.2938,scaleY:2.2938,alpha:0.1289},6).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.2,-171.2,342.5,342.5);


(lib.ignition_glitter_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF","rgba(255,255,255,0)"],[0,0.106,0.863],0,0,0,0,0,28.3).s().p("AiJDtQhig5gdhuQgdhtA5hiQA6hiBtgdQBtgcBiA5QBiA5AdBtQAdBtg6BiQg5BihtAdQglAJgjAAQhGAAhBglg");
	this.shape.setTransform(0.0222,-0.011);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.instance = new lib.ignition_glitter("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.0532,6.8742,90);

	this.instance_1 = new lib.ignition_glitter("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.0532,6.8742);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.5,-238.8,476.4,476.4);


(lib.eureka_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_54 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(54).call(this.frame_54).wait(1));

	// レイヤー_4
	this.instance = new lib.eureka_inner();
	this.instance.parent = this;
	this.instance.setTransform(0.05,15,0.1924,0.4147);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.2766,scaleY:1.1707,y:-3.5},2,cjs.Ease.get(-1)).to({scaleX:0.9542,scaleY:0.9542,y:0},3,cjs.Ease.get(1)).wait(1).to({regX:-0.1,regY:4.6,scaleX:0.9743,scaleY:0.9743,x:-0.05,y:4.5},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0.05,y:0},0).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.9,-59.2,103.9,114.2);


(lib.concent_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.concent();
	this.instance.parent = this;
	this.instance.setTransform(-0.15,0.5,0.8875,0.8875,-119.2436);

	this.instance_1 = new lib.concent();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.15,0.45,0.8875,0.8875,161.3249);

	this.instance_2 = new lib.concent2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.15,0.45,0.8874,0.8874,-75.9023);

	this.instance_3 = new lib.concent2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.15,0.45,0.8874,0.8874,75.4526);

	this.instance_4 = new lib.concent2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.15,0.45,0.8874,0.8874,109.34);

	this.instance_5 = new lib.concent();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.15,0.45,0.8875,0.8875,-14.9518);

	this.instance_6 = new lib.concent();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-0.15,0.45,0.8874,0.8874,77.8353);

	this.instance_7 = new lib.concent2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-0.15,0.45,0.8875,0.8875,-78.9281);

	this.instance_8 = new lib.concent2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-0.15,0.45,0.8875,0.8875,-117.3405);

	this.instance_9 = new lib.concent();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-0.15,0.45,0.8875,0.8875,-164.7438);

	this.instance_10 = new lib.concent2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-0.15,0.45,0.8874,0.8874,133.0127);

	this.instance_11 = new lib.concent();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-0.15,0.45,0.8875,0.8875,-7.2496);

	this.instance_12 = new lib.concent();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-0.1,0.5,0.8874,0.8874,31.1881);

	this.instance_13 = new lib.concent2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-0.15,0.45,0.8874,0.8874,43.9327);

	this.instance_14 = new lib.concent2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-0.15,0.45,0.8875,0.8875,-47.2338);

	this.instance_15 = new lib.concent();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-0.15,0.45,0.8875,0.8875,-79.0683);

	this.instance_16 = new lib.concent2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-0.15,0.45,0.8874,0.8874,24.1813);

	this.instance_17 = new lib.concent();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-0.15,0.45,0.8875,0.8875,28.4561);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.concent_container, new cjs.Rectangle(-406.3,-402.2,815.3,814.7), null);


(lib.シンボル12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.kamif();
	this.instance.parent = this;
	this.instance.setTransform(-7.1,14.55,1.37,1.37);

	this.instance_1 = new lib.kamif();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.85,5.8,1.37,1.37);

	this.instance_2 = new lib.kamif();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-29.7,27.35,1.8096,1.8096);

	this.instance_3 = new lib.kamif();
	this.instance_3.parent = this;
	this.instance_3.setTransform(81.65,20.85,1.8096,1.8096);

	this.instance_4 = new lib.kamif();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-91.15,11.5,1.61,1.61);

	this.instance_5 = new lib.kamif();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-54.75,9.3,1.37,1.37);

	this.instance_6 = new lib.kamif();
	this.instance_6.parent = this;
	this.instance_6.setTransform(95.9,29.15,1.61,1.61);

	this.instance_7 = new lib.kamif();
	this.instance_7.parent = this;
	this.instance_7.setTransform(31.75,31.3,1.61,1.61);

	this.instance_8 = new lib.kamif();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-75,21.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル12, new cjs.Rectangle(-93.5,-17.8,191.8,26), null);


(lib.replace_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.news_letter();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-439.85},420).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-439.8,0,1307.5,50);


(lib.powder_paper_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* //iphoneだったら表示しない
		//if (/:iosFlg == 1) {
		//	_visible = 0;
		//	gotoAndStop(2);
		//}
		stop();*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// base
	this.instance = new lib.powder_paper();
	this.instance.parent = this;
	this.instance.setTransform(69.05,0,0.489,0.489);

	this.instance_1 = new lib.powder_paper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-66.05,0,0.489,0.489);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.1,0,274.6,19.3);


(lib.news_flas_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkNhFIPJAAQAEAAADADQADADAAAEIAACLQAAAEgDADQgDADgEAAIvJAAQgJgBgBgJIAAiLQAAgEADgDQADgDAEAAg");
	mask.setTransform(71,9);

	// レイヤー_2
	this.instance = new lib.replace_text();
	this.instance.parent = this;
	this.instance.setTransform(43,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// レイヤー_1
	this.instance_1 = new lib.news_flas();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.news_flas_1, new cjs.Rectangle(0,0,144,20), null);


(lib.icon_passion_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.icon_passion();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:871.4,regY:-480.6,x:83.85,y:-46.05},0).wait(1).to({x:80.45,y:-44.05},0).wait(1).to({x:77.15,y:-42},0).wait(1).to({x:73.8,y:-40},0).wait(1).to({x:70.5,y:-37.95},0).wait(1).to({x:67.15,y:-35.95},0).wait(1).to({x:63.85,y:-33.9},0).wait(1).to({x:60.5,y:-31.9},0).wait(1).to({x:57.2,y:-29.85},0).wait(1).to({x:53.85,y:-27.85},0).wait(1).to({x:50.55,y:-25.8},0).wait(1).to({x:47.2,y:-23.8},0).wait(1).to({x:43.9,y:-21.75},0).wait(1).to({x:40.55,y:-19.75},0).wait(1).to({x:37.25,y:-17.7},0).wait(1).to({x:33.9,y:-15.7},0).wait(1).to({x:30.6,y:-13.7},0).wait(1).to({x:27.25,y:-11.65},0).wait(1).to({x:23.95,y:-9.65},0).wait(1).to({x:20.6,y:-7.6},0).wait(1).to({x:17.3,y:-5.6},0).wait(1).to({x:13.95,y:-3.55},0).wait(1).to({x:10.65,y:-1.55},0).wait(1).to({x:7.3,y:0.5},0).wait(1).to({x:4,y:2.5},0).wait(1).to({x:0.65,y:4.55},0).wait(1).to({x:-2.65,y:6.55},0).wait(1).to({x:-6,y:8.6},0).wait(1).to({x:-9.3,y:10.6},0).wait(1).to({x:-12.65,y:12.65},0).wait(1).to({x:-15.95,y:14.65},0).wait(1).to({x:-19.3,y:16.65},0).wait(1).to({x:-22.6,y:18.7},0).wait(1).to({x:-25.95,y:20.7},0).wait(1).to({x:-29.25,y:22.75},0).wait(1).to({x:-32.6,y:24.75},0).wait(1).to({x:-35.9,y:26.8},0).wait(1).to({x:-39.25,y:28.8},0).wait(1).to({x:-42.55,y:30.85},0).wait(1).to({x:-45.9,y:32.85},0).wait(1).to({x:-49.2,y:34.9},0).wait(1).to({x:-52.55,y:36.9},0).wait(1).to({x:-55.85,y:38.95},0).wait(1).to({x:-59.2,y:40.95},0).wait(1).to({x:-62.5,y:43},0).wait(1).to({x:-65.85,y:45},0).wait(1).to({x:-69.15,y:47.05},0).wait(1).to({x:-72.5,y:49.05},0).wait(1).to({x:-75.8,y:51.05},0).wait(1).to({x:-79.15,y:53.1},0).wait(1).to({x:-82.45,y:55.1},0).wait(1).to({x:-85.8,y:57.15},0).wait(1).to({x:-89.1,y:59.15},0).wait(1).to({x:-92.45,y:61.2},0).wait(1).to({x:-95.75,y:63.2},0).wait(1).to({x:-99.1,y:65.25},0).wait(1).to({x:-102.4,y:67.25},0).wait(1).to({x:-105.75,y:69.3},0).wait(1).to({x:-109.05,y:71.3},0).wait(1).to({x:-112.4,y:73.35},0).wait(1).to({x:-115.7,y:75.35},0).wait(1).to({x:-119.05,y:77.4},0).wait(1).to({x:-122.35,y:79.4},0).wait(1).to({x:-125.7,y:81.4},0).wait(1).to({x:-129,y:83.45},0).wait(1).to({x:-132.35,y:85.45},0).wait(1).to({x:-135.65,y:87.5},0).wait(1).to({x:-139,y:89.5},0).wait(1).to({x:-142.3,y:91.55},0).wait(1).to({x:-145.65,y:93.55},0).wait(1).to({x:-148.95,y:95.6},0).wait(1).to({x:-152.3,y:97.6},0).wait(1).to({x:-155.6,y:99.65},0).wait(1).to({x:-158.95,y:101.65},0).wait(1).to({x:-162.25,y:103.7},0).wait(1).to({x:-165.6,y:105.7},0).wait(1).to({x:-168.9,y:107.75},0).wait(1).to({x:-172.25,y:109.75},0).wait(1).to({x:-175.55,y:111.75},0).wait(1).to({x:-178.9,y:113.8},0).wait(1).to({x:-182.2,y:115.8},0).wait(1).to({x:-185.55,y:117.85},0).wait(1).to({x:-188.85,y:119.85},0).wait(1).to({x:-192.2,y:121.9},0).wait(1).to({x:-195.5,y:123.9},0).wait(1).to({x:-198.85,y:125.95},0).wait(1).to({x:-202.15,y:127.95},0).wait(1).to({x:-205.5,y:130},0).wait(1).to({x:-208.8,y:132},0).wait(1).to({x:-212.15,y:134.05},0).wait(1).to({x:-215.45,y:136.05},0).wait(1).to({x:-218.8,y:138.1},0).wait(1).to({x:-222.1,y:140.1},0).wait(1).to({x:-225.45,y:142.15},0).wait(1).to({x:-228.75,y:144.15},0).wait(1).to({x:-232.1,y:146.15},0).wait(1).to({x:-235.4,y:148.2},0).wait(1).to({x:-238.75,y:150.2},0).wait(1).to({x:-242.05,y:152.25},0).wait(1).to({x:-245.4,y:154.25},0).wait(1).to({x:-248.7,y:156.3},0).wait(1).to({x:-252.05,y:158.3},0).wait(1).to({x:-255.35,y:160.35},0).wait(1).to({x:-258.7,y:162.35},0).wait(1).to({x:-262,y:164.4},0).wait(1).to({x:-265.35,y:166.4},0).wait(1).to({x:-268.65,y:168.45},0).wait(1).to({x:-272,y:170.45},0).wait(1).to({x:-275.3,y:172.5},0).wait(1).to({x:-278.65,y:174.5},0).wait(1).to({x:-281.95,y:176.5},0).wait(1).to({x:-285.3,y:178.55},0).wait(1).to({x:-288.6,y:180.55},0).wait(1).to({x:-291.95,y:182.6},0).wait(1).to({x:-295.25,y:184.6},0).wait(1).to({x:-298.6,y:186.65},0).wait(1).to({x:-301.9,y:188.65},0).wait(1).to({x:-305.25,y:190.7},0).wait(1).to({x:-308.55,y:192.7},0).wait(1).to({x:-311.9,y:194.75},0).wait(1).to({x:-315.2,y:196.75},0).wait(1).to({x:-318.55,y:198.8},0).wait(1).to({x:-321.85,y:200.8},0).wait(1).to({x:-325.2,y:202.85},0).wait(1).to({x:-328.5,y:204.85},0).wait(1).to({regX:0,regY:0,x:-418.95,y:254.95},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-443.6,-120.7,642.5,400.3);


(lib.icon_cute_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_122 = function() {
		/* stop();*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(122).call(this.frame_122).wait(1));

	// レイヤー_1
	this.instance = new lib.icon_cute();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:899.8,regY:-493.3,x:85.7,y:-46.95},0).wait(1).to({x:81.4,y:-44.45},0).wait(1).to({x:77.15,y:-42},0).wait(1).to({x:72.85,y:-39.6},0).wait(1).to({x:68.6,y:-37.15},0).wait(1).to({x:64.3,y:-34.7},0).wait(1).to({x:60.05,y:-32.25},0).wait(1).to({x:55.75,y:-29.85},0).wait(1).to({x:51.45,y:-27.4},0).wait(1).to({x:47.2,y:-24.95},0).wait(1).to({x:42.9,y:-22.5},0).wait(1).to({x:38.65,y:-20.1},0).wait(1).to({x:34.35,y:-17.65},0).wait(1).to({x:30.1,y:-15.2},0).wait(1).to({x:25.8,y:-12.75},0).wait(1).to({x:21.5,y:-10.35},0).wait(1).to({x:17.25,y:-7.9},0).wait(1).to({x:12.95,y:-5.45},0).wait(1).to({x:8.7,y:-3},0).wait(1).to({x:4.4,y:-0.6},0).wait(1).to({x:0.15,y:1.85},0).wait(1).to({x:-4.15,y:4.3},0).wait(1).to({x:-8.45,y:6.7},0).wait(1).to({x:-12.7,y:9.15},0).wait(1).to({x:-17,y:11.6},0).wait(1).to({x:-21.25,y:14.05},0).wait(1).to({x:-25.55,y:16.45},0).wait(1).to({x:-29.8,y:18.9},0).wait(1).to({x:-34.1,y:21.35},0).wait(1).to({x:-38.35,y:23.8},0).wait(1).to({x:-42.65,y:26.2},0).wait(1).to({x:-46.95,y:28.65},0).wait(1).to({x:-51.2,y:31.1},0).wait(1).to({x:-55.5,y:33.55},0).wait(1).to({x:-59.75,y:35.95},0).wait(1).to({x:-64.05,y:38.4},0).wait(1).to({x:-68.3,y:40.85},0).wait(1).to({x:-72.6,y:43.3},0).wait(1).to({x:-76.9,y:45.7},0).wait(1).to({x:-81.15,y:48.15},0).wait(1).to({x:-85.45,y:50.6},0).wait(1).to({x:-89.7,y:53},0).wait(1).to({x:-94,y:55.45},0).wait(1).to({x:-98.25,y:57.9},0).wait(1).to({x:-102.55,y:60.35},0).wait(1).to({x:-106.85,y:62.75},0).wait(1).to({x:-111.1,y:65.2},0).wait(1).to({x:-115.4,y:67.65},0).wait(1).to({x:-119.65,y:70.1},0).wait(1).to({x:-123.95,y:72.5},0).wait(1).to({x:-128.2,y:74.95},0).wait(1).to({x:-132.5,y:77.4},0).wait(1).to({x:-136.75,y:79.85},0).wait(1).to({x:-141.05,y:82.25},0).wait(1).to({x:-145.35,y:84.7},0).wait(1).to({x:-149.6,y:87.15},0).wait(1).to({x:-153.9,y:89.6},0).wait(1).to({x:-158.15,y:92},0).wait(1).to({x:-162.45,y:94.45},0).wait(1).to({x:-166.7,y:96.9},0).wait(1).to({x:-171,y:99.35},0).wait(1).to({x:-175.3,y:101.75},0).wait(1).to({x:-179.55,y:104.2},0).wait(1).to({x:-183.85,y:106.65},0).wait(1).to({x:-188.1,y:109.05},0).wait(1).to({x:-192.4,y:111.5},0).wait(1).to({x:-196.65,y:113.95},0).wait(1).to({x:-200.95,y:116.4},0).wait(1).to({x:-205.25,y:118.8},0).wait(1).to({x:-209.5,y:121.25},0).wait(1).to({x:-213.8,y:123.7},0).wait(1).to({x:-218.05,y:126.15},0).wait(1).to({x:-222.35,y:128.55},0).wait(1).to({x:-226.6,y:131},0).wait(1).to({x:-230.9,y:133.45},0).wait(1).to({x:-235.15,y:135.9},0).wait(1).to({x:-239.45,y:138.3},0).wait(1).to({x:-243.75,y:140.75},0).wait(1).to({x:-248,y:143.2},0).wait(1).to({x:-252.3,y:145.65},0).wait(1).to({x:-256.55,y:148.05},0).wait(1).to({x:-260.85,y:150.5},0).wait(1).to({x:-265.1,y:152.95},0).wait(1).to({x:-269.4,y:155.35},0).wait(1).to({x:-273.7,y:157.8},0).wait(1).to({x:-277.95,y:160.25},0).wait(1).to({x:-282.25,y:162.7},0).wait(1).to({x:-286.5,y:165.1},0).wait(1).to({x:-290.8,y:167.55},0).wait(1).to({x:-295.05,y:170},0).wait(1).to({x:-299.35,y:172.45},0).wait(1).to({x:-303.65,y:174.85},0).wait(1).to({x:-307.9,y:177.3},0).wait(1).to({x:-312.2,y:179.75},0).wait(1).to({x:-316.45,y:182.2},0).wait(1).to({x:-320.75,y:184.6},0).wait(1).to({x:-325,y:187.05},0).wait(1).to({x:-329.3,y:189.5},0).wait(1).to({x:-333.55,y:191.95},0).wait(1).to({x:-337.85,y:194.35},0).wait(1).to({x:-342.15,y:196.8},0).wait(1).to({x:-346.4,y:199.25},0).wait(1).to({x:-350.7,y:201.65},0).wait(1).to({x:-354.95,y:204.1},0).wait(1).to({x:-359.25,y:206.55},0).wait(1).to({x:-363.5,y:209},0).wait(1).to({x:-367.8,y:211.4},0).wait(1).to({x:-372.1,y:213.85},0).wait(1).to({x:-376.35,y:216.3},0).wait(1).to({x:-380.65,y:218.75},0).wait(1).to({x:-384.9,y:221.15},0).wait(1).to({x:-389.2,y:223.6},0).wait(1).to({x:-393.45,y:226.05},0).wait(1).to({x:-397.75,y:228.5},0).wait(1).to({x:-402.05,y:230.9},0).wait(1).to({x:-406.3,y:233.35},0).wait(1).to({x:-410.6,y:235.8},0).wait(1).to({x:-414.85,y:238.25},0).wait(1).to({x:-419.15,y:240.65},0).wait(1).to({x:-423.4,y:243.1},0).wait(1).to({x:-427.7,y:245.55},0).wait(1).to({regX:0,regY:0,x:-521.95,y:297.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-541.1,-117.3,740.2,433.3);


(lib.icon_cool_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_125 = function() {
		/* stop();*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(125).call(this.frame_125).wait(1));

	// レイヤー_1
	this.instance = new lib.icon_cool();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:81.7,regY:-49.5,x:78.4,y:-47.45},0).wait(1).to({x:75.1,y:-45.35},0).wait(1).to({x:71.8,y:-43.25},0).wait(1).to({x:68.5,y:-41.15},0).wait(1).to({x:65.15,y:-39.05},0).wait(1).to({x:61.85,y:-36.95},0).wait(1).to({x:58.55,y:-34.85},0).wait(1).to({x:55.25,y:-32.75},0).wait(1).to({x:51.9,y:-30.65},0).wait(1).to({x:48.6,y:-28.55},0).wait(1).to({x:45.3,y:-26.45},0).wait(1).to({x:42,y:-24.4},0).wait(1).to({x:38.65,y:-22.3},0).wait(1).to({x:35.35,y:-20.2},0).wait(1).to({x:32.05,y:-18.1},0).wait(1).to({x:28.75,y:-16},0).wait(1).to({x:25.45,y:-13.9},0).wait(1).to({x:22.1,y:-11.8},0).wait(1).to({x:18.8,y:-9.7},0).wait(1).to({x:15.5,y:-7.6},0).wait(1).to({x:12.2,y:-5.5},0).wait(1).to({x:8.85,y:-3.4},0).wait(1).to({x:5.55,y:-1.35},0).wait(1).to({x:2.25,y:0.75},0).wait(1).to({x:-1.05,y:2.85},0).wait(1).to({x:-4.4,y:4.95},0).wait(1).to({x:-7.7,y:7.05},0).wait(1).to({x:-11,y:9.15},0).wait(1).to({x:-14.3,y:11.25},0).wait(1).to({x:-17.6,y:13.35},0).wait(1).to({x:-20.95,y:15.45},0).wait(1).to({x:-24.25,y:17.55},0).wait(1).to({x:-27.55,y:19.65},0).wait(1).to({x:-30.85,y:21.75},0).wait(1).to({x:-34.2,y:23.8},0).wait(1).to({x:-37.5,y:25.9},0).wait(1).to({x:-40.8,y:28},0).wait(1).to({x:-44.1,y:30.1},0).wait(1).to({x:-47.45,y:32.2},0).wait(1).to({x:-50.75,y:34.3},0).wait(1).to({x:-54.05,y:36.4},0).wait(1).to({x:-57.35,y:38.5},0).wait(1).to({x:-60.65,y:40.6},0).wait(1).to({x:-64,y:42.7},0).wait(1).to({x:-67.3,y:44.8},0).wait(1).to({x:-70.6,y:46.85},0).wait(1).to({x:-73.9,y:48.95},0).wait(1).to({x:-77.25,y:51.05},0).wait(1).to({x:-80.55,y:53.15},0).wait(1).to({x:-83.85,y:55.25},0).wait(1).to({x:-87.15,y:57.35},0).wait(1).to({x:-90.5,y:59.45},0).wait(1).to({x:-93.8,y:61.55},0).wait(1).to({x:-97.1,y:63.65},0).wait(1).to({x:-100.4,y:65.75},0).wait(1).to({x:-103.7,y:67.85},0).wait(1).to({x:-107.05,y:69.9},0).wait(1).to({x:-110.35,y:72},0).wait(1).to({x:-113.65,y:74.1},0).wait(1).to({x:-116.95,y:76.2},0).wait(1).to({x:-120.3,y:78.3},0).wait(1).to({x:-123.6,y:80.4},0).wait(1).to({x:-126.9,y:82.5},0).wait(1).to({x:-130.2,y:84.6},0).wait(1).to({x:-133.55,y:86.7},0).wait(1).to({x:-136.85,y:88.8},0).wait(1).to({x:-140.15,y:90.9},0).wait(1).to({x:-143.45,y:93},0).wait(1).to({x:-146.8,y:95.05},0).wait(1).to({x:-150.1,y:97.15},0).wait(1).to({x:-153.4,y:99.25},0).wait(1).to({x:-156.7,y:101.35},0).wait(1).to({x:-160,y:103.45},0).wait(1).to({x:-163.35,y:105.55},0).wait(1).to({x:-166.65,y:107.65},0).wait(1).to({x:-169.95,y:109.75},0).wait(1).to({x:-173.25,y:111.85},0).wait(1).to({x:-176.6,y:113.95},0).wait(1).to({x:-179.9,y:116.05},0).wait(1).to({x:-183.2,y:118.1},0).wait(1).to({x:-186.5,y:120.2},0).wait(1).to({x:-189.85,y:122.3},0).wait(1).to({x:-193.15,y:124.4},0).wait(1).to({x:-196.45,y:126.5},0).wait(1).to({x:-199.75,y:128.6},0).wait(1).to({x:-203.05,y:130.7},0).wait(1).to({x:-206.4,y:132.8},0).wait(1).to({x:-209.7,y:134.9},0).wait(1).to({x:-213,y:137},0).wait(1).to({x:-216.3,y:139.1},0).wait(1).to({x:-219.65,y:141.15},0).wait(1).to({x:-222.95,y:143.25},0).wait(1).to({x:-226.25,y:145.35},0).wait(1).to({x:-229.55,y:147.45},0).wait(1).to({x:-232.9,y:149.55},0).wait(1).to({x:-236.2,y:151.65},0).wait(1).to({x:-239.5,y:153.75},0).wait(1).to({x:-242.8,y:155.85},0).wait(1).to({x:-246.1,y:157.95},0).wait(1).to({x:-249.45,y:160.05},0).wait(1).to({x:-252.75,y:162.15},0).wait(1).to({x:-256.05,y:164.25},0).wait(1).to({x:-259.35,y:166.3},0).wait(1).to({x:-262.7,y:168.4},0).wait(1).to({x:-266,y:170.5},0).wait(1).to({x:-269.3,y:172.6},0).wait(1).to({x:-272.6,y:174.7},0).wait(1).to({x:-275.95,y:176.8},0).wait(1).to({x:-279.25,y:178.9},0).wait(1).to({x:-282.55,y:181},0).wait(1).to({x:-285.85,y:183.1},0).wait(1).to({x:-289.15,y:185.2},0).wait(1).to({x:-292.5,y:187.3},0).wait(1).to({x:-295.8,y:189.35},0).wait(1).to({x:-299.1,y:191.45},0).wait(1).to({x:-302.4,y:193.55},0).wait(1).to({x:-305.75,y:195.65},0).wait(1).to({x:-309.05,y:197.75},0).wait(1).to({x:-312.35,y:199.85},0).wait(1).to({x:-315.65,y:201.95},0).wait(1).to({x:-319,y:204.05},0).wait(1).to({x:-322.3,y:206.15},0).wait(1).to({x:-325.6,y:208.25},0).wait(1).to({x:-328.9,y:210.35},0).wait(1).to({regX:0,regY:0,x:-413.95,y:261.95},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-442.8,-126.8,635.2,416.6);


(lib.glitter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{go:1});

	// timeline functions:
	this.frame_0 = function() {
		/* _visible = false;
		stop();*/
		
		this.visible = false;
		this.stop();
	}
	this.frame_1 = function() {
		/* _visible = true;
		play();*/
		
		this.visible = true;
		this.play();
	}
	this.frame_13 = function() {
		/* stop();*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(12).call(this.frame_13).wait(1));

	// レイヤー_1
	this.instance = new lib.ignition_glitter_container("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.2496,0.2496,55.4094);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},1,cjs.Ease.get(1)).to({rotation:132.8648},7,cjs.Ease.get(1)).to({_off:true},1).wait(1).to({_off:false,rotation:135.3368},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.2,-59.2,118.7,118.7);


(lib.efa_キラキラボードカード用 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		/* stop ();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Layer_25
	this.instance = new lib.efa_ｷﾗｷﾗ();
	this.instance.parent = this;
	this.instance.setTransform(46.8,13.95,0.2503,0.2503);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(6));

	// Layer_21
	this.instance_1 = new lib.efa_ｷﾗｷﾗ();
	this.instance_1.parent = this;
	this.instance_1.setTransform(53,31.85,0.281,0.281);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(7));

	// Layer_19_コピー
	this.instance_2 = new lib.efa_ｷﾗｷﾗ();
	this.instance_2.parent = this;
	this.instance_2.setTransform(50.85,-34.55,0.4175,0.4175);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(4));

	// Layer_19
	this.instance_3 = new lib.efa_ｷﾗｷﾗ();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-18.15,14.2,0.2,0.2);

	this.instance_4 = new lib.efa_ｷﾗｷﾗ();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-55,19.85,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3}]},8).wait(5));

	// Layer_15
	this.instance_5 = new lib.efa_ｷﾗｷﾗ();
	this.instance_5.parent = this;
	this.instance_5.setTransform(30.05,32.35,0.15,0.15);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).wait(3));

	// Layer_11
	this.instance_6 = new lib.efa_ｷﾗｷﾗ();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-53.1,-38,0.3,0.3);

	this.instance_7 = new lib.efa_ｷﾗｷﾗ();
	this.instance_7.parent = this;
	this.instance_7.setTransform(15,-38,0.3,0.3);

	this.instance_8 = new lib.efa_ｷﾗｷﾗ();
	this.instance_8.parent = this;
	this.instance_8.setTransform(55.3,-20.4,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},12).wait(1));

	// Layer_3_コピー
	this.instance_9 = new lib.efa_ｷﾗｷﾗ();
	this.instance_9.parent = this;
	this.instance_9.setTransform(18.65,6.9,0.3203,0.3203);

	this.instance_10 = new lib.efa_ｷﾗｷﾗ();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-26.95,-28.3,0.3203,0.3203);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10},{t:this.instance_9}]},3).wait(10));

	// レイヤー_4_コピー
	this.instance_11 = new lib.efa_ｷﾗｷﾗ();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-39.75,30.7,0.3203,0.3203);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(5).to({_off:false},0).wait(8));

	// Layer_5_コピー_5
	this.instance_12 = new lib.efa_ｷﾗｷﾗ();
	this.instance_12.parent = this;
	this.instance_12.setTransform(41.9,-19.8,0.3203,0.3203);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(8).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,-67.4,238.1,122.10000000000001);


(lib.character3_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{n_to_s:1,s_to_n:8});

	// timeline functions:
	this.frame_0 = function() {
		/* stop()*/
		
		this.stop();
	}
	this.frame_1 = function() {
		/* play()*/
		
		this.play();
	}
	this.frame_7 = function() {
		/* stop()*/
		
		this.stop();
	}
	this.frame_8 = function() {
		/* play()*/
		
		this.play();
	}
	this.frame_14 = function() {
		/* stop()*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(1).call(this.frame_8).wait(6).call(this.frame_14).wait(1));

	// レイヤー_2
	this.glitter = new lib.glitter();
	this.glitter.name = "glitter";
	this.glitter.parent = this;
	this.glitter.setTransform(32.75,-186.5);

	this.timeline.addTween(cjs.Tween.get(this.glitter).wait(15));

	// face
	this.instance = new lib._char_B();
	this.instance.parent = this;
	this.instance.setTransform(35.1,-156.55,1,1,0,0,0,0.1,-0.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:-32.3,regY:-33,x:2.7,y:-189.25,alpha:0.3056},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:0.9722},0).wait(1).to({regX:0.1,regY:-0.3,x:35.1,y:-156.55,alpha:1},0).wait(1).to({alpha:0},5).to({_off:true},1).wait(1));

	// body
	this.instance_1 = new lib._char_A();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,12.5,1,1,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-261.4,139.1,274);


(lib.bg_silhouette_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{appear1:1,appeard1:34,appear2:35,appeard2:68});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_34 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_68 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(34).call(this.frame_34).wait(34).call(this.frame_68).wait(1));

	// question
	this.instance = new lib.eureka_container("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-41.8,-103.5,0.4947,0.4947,-27.2226);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({_off:false},0).to({_off:true},4).wait(30).to({_off:false},0).wait(4));

	// effect
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF","rgba(255,255,255,0)"],[0,0.427,1],-0.6,1.2,0,-0.6,1.2,98.9).s().rr(-100,-100,200,200,1);
	this.shape.setTransform(-5.6309,-231.2413,1.6015,1.6015);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(69));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao2ROIAA5yQAFjiChihQCmimDqAAQDqAACnCmQChChAFDiIAAZyg");
	mask.setTransform(0.7,-5.325);

	// silhouetee1
	this.silhouette = new lib.silhouette1();
	this.silhouette.name = "silhouette";
	this.silhouette.parent = this;
	this.silhouette.setTransform(-0.35,-23.15,0.8,0.8,0,0,0,120,120);
	this.silhouette.alpha = 0;
	this.silhouette._off = true;

	var maskedShapeInstanceList = [this.silhouette];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.silhouette).wait(1).to({_off:false},0).wait(1).to({scaleX:0.8004,scaleY:0.8004,x:-0.3,alpha:0.0016},0).wait(1).to({scaleX:0.8016,scaleY:0.8016,y:-23.2,alpha:0.0068},0).wait(1).to({scaleX:0.8038,scaleY:0.8038,x:-0.35,y:-23.35,alpha:0.0157},0).wait(1).to({scaleX:0.8069,scaleY:0.8069,y:-23.5,alpha:0.0289},0).wait(1).to({scaleX:0.8112,scaleY:0.8112,y:-23.75,alpha:0.0467},0).wait(1).to({scaleX:0.8167,scaleY:0.8167,x:-0.4,y:-24.05,alpha:0.0697},0).wait(1).to({scaleX:0.8236,scaleY:0.8236,y:-24.45,alpha:0.0984},0).wait(1).to({scaleX:0.832,scaleY:0.832,y:-24.9,alpha:0.1334},0).wait(1).to({scaleX:0.8421,scaleY:0.8421,x:-0.45,y:-25.5,alpha:0.1754},0).wait(1).to({scaleX:0.854,scaleY:0.854,y:-26.15,alpha:0.225},0).wait(1).to({scaleX:0.8678,scaleY:0.8678,x:-0.55,y:-26.95,alpha:0.2827},0).wait(1).to({scaleX:0.8836,scaleY:0.8836,x:-0.6,y:-27.8,alpha:0.3486},0).wait(1).to({scaleX:0.9013,scaleY:0.9013,x:-0.65,y:-28.85,alpha:0.4223},0).wait(1).to({scaleX:0.9205,scaleY:0.9205,x:-0.7,y:-29.9,alpha:0.5023},0).wait(1).to({scaleX:0.9406,scaleY:0.9406,x:-0.75,y:-31,alpha:0.5861},0).wait(1).to({scaleX:0.9607,scaleY:0.9607,x:-0.8,y:-32.15,alpha:0.6697},0).wait(1).to({scaleX:0.9797,scaleY:0.9797,x:-0.9,y:-33.25,alpha:0.7487},0).wait(1).to({scaleX:0.9966,scaleY:0.9966,x:-0.95,y:-34.15,alpha:0.8191},0).wait(1).to({scaleX:1.0107,scaleY:1.0107,x:-1,y:-34.95,alpha:0.8782},0).wait(1).to({scaleX:1.022,scaleY:1.022,y:-35.6,alpha:0.925},0).wait(1).to({scaleX:1.0303,scaleY:1.0303,x:-1.05,y:-36.05,alpha:0.9596},0).wait(1).to({scaleX:1.0359,scaleY:1.0359,y:-36.4,alpha:0.9828},0).wait(1).to({scaleX:1.039,scaleY:1.039,y:-36.55,alpha:0.9959},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-1.1,y:-36.65,alpha:1},0).wait(1).to({scaleX:1.0392,scaleY:1.0392,y:-36.55},0).wait(1).to({scaleX:1.0363,scaleY:1.0363,y:-36.4},0).wait(1).to({scaleX:1.0309,scaleY:1.0309,y:-36},0).wait(1).to({scaleX:1.0227,scaleY:1.0227,y:-35.45},0).wait(1).to({scaleX:1.0131,scaleY:1.0131,y:-34.8},0).wait(1).to({scaleX:1.0055,scaleY:1.0055,y:-34.25},0).wait(1).to({scaleX:1.0012,scaleY:1.0012,x:-1.05,y:-33.95},0).wait(1).to({scaleX:1,scaleY:1,x:-1.1,y:-33.9},0).to({_off:true},2).wait(34));

	// silhouetee2
	this.silhouette_1 = new lib.silhouette2();
	this.silhouette_1.name = "silhouette_1";
	this.silhouette_1.parent = this;
	this.silhouette_1.setTransform(-0.35,-23.15,0.8,0.8,0,0,0,120,120);
	this.silhouette_1.alpha = 0;
	this.silhouette_1._off = true;

	var maskedShapeInstanceList = [this.silhouette_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.silhouette_1).wait(35).to({_off:false},0).wait(1).to({scaleX:0.8004,scaleY:0.8004,x:-0.3,alpha:0.0016},0).wait(1).to({scaleX:0.8016,scaleY:0.8016,y:-23.2,alpha:0.0068},0).wait(1).to({scaleX:0.8038,scaleY:0.8038,x:-0.35,y:-23.35,alpha:0.0157},0).wait(1).to({scaleX:0.8069,scaleY:0.8069,y:-23.5,alpha:0.0289},0).wait(1).to({scaleX:0.8112,scaleY:0.8112,y:-23.75,alpha:0.0467},0).wait(1).to({scaleX:0.8167,scaleY:0.8167,x:-0.4,y:-24.05,alpha:0.0697},0).wait(1).to({scaleX:0.8236,scaleY:0.8236,y:-24.45,alpha:0.0984},0).wait(1).to({scaleX:0.832,scaleY:0.832,y:-24.9,alpha:0.1334},0).wait(1).to({scaleX:0.8421,scaleY:0.8421,x:-0.45,y:-25.5,alpha:0.1754},0).wait(1).to({scaleX:0.854,scaleY:0.854,y:-26.15,alpha:0.225},0).wait(1).to({scaleX:0.8678,scaleY:0.8678,x:-0.55,y:-26.95,alpha:0.2827},0).wait(1).to({scaleX:0.8836,scaleY:0.8836,x:-0.6,y:-27.8,alpha:0.3486},0).wait(1).to({scaleX:0.9013,scaleY:0.9013,x:-0.65,y:-28.85,alpha:0.4223},0).wait(1).to({scaleX:0.9205,scaleY:0.9205,x:-0.7,y:-29.9,alpha:0.5023},0).wait(1).to({scaleX:0.9406,scaleY:0.9406,x:-0.75,y:-31,alpha:0.5861},0).wait(1).to({scaleX:0.9607,scaleY:0.9607,x:-0.8,y:-32.15,alpha:0.6697},0).wait(1).to({scaleX:0.9797,scaleY:0.9797,x:-0.9,y:-33.25,alpha:0.7487},0).wait(1).to({scaleX:0.9966,scaleY:0.9966,x:-0.95,y:-34.15,alpha:0.8191},0).wait(1).to({scaleX:1.0107,scaleY:1.0107,x:-1,y:-34.95,alpha:0.8782},0).wait(1).to({scaleX:1.022,scaleY:1.022,y:-35.6,alpha:0.925},0).wait(1).to({scaleX:1.0303,scaleY:1.0303,x:-1.05,y:-36.05,alpha:0.9596},0).wait(1).to({scaleX:1.0359,scaleY:1.0359,y:-36.4,alpha:0.9828},0).wait(1).to({scaleX:1.039,scaleY:1.039,y:-36.55,alpha:0.9959},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-1.1,y:-36.65,alpha:1},0).wait(1).to({scaleX:1.0392,scaleY:1.0392,y:-36.55},0).wait(1).to({scaleX:1.0363,scaleY:1.0363,y:-36.4},0).wait(1).to({scaleX:1.0309,scaleY:1.0309,y:-36},0).wait(1).to({scaleX:1.0227,scaleY:1.0227,y:-35.45},0).wait(1).to({scaleX:1.0131,scaleY:1.0131,y:-34.8},0).wait(1).to({scaleX:1.0055,scaleY:1.0055,y:-34.25},0).wait(1).to({scaleX:1.0012,scaleY:1.0012,x:-1.05,y:-33.95},0).wait(1).to({scaleX:1,scaleY:1,x:-1.1,y:-33.9},0).wait(2));

	// bg
	this.instance_1 = new lib.bg_silhouette();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-225,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-391.4,450,691.4);


(lib.effect_spread_star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// レイヤー_1
	this.instance = new lib.spread_star("synched",1,false);
	this.instance.parent = this;
	this.instance.setTransform(0.65,5.5,0.5235,0.5235,-177.0259);

	this.instance_1 = new lib.spread_star("synched",1,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16.9,-2.2,0.4695,0.4695,-81.4512);

	this.instance_2 = new lib.spread_star("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(14.75,-5.65,0.416,0.416,66.1694);

	this.instance_3 = new lib.spread_star("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(15.05,5.9,0.416,0.416,118.5873);

	this.instance_4 = new lib.spread_star("synched",1,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-3.85,-14,0.4603,0.4603,-23.464);

	this.instance_5 = new lib.spread_star("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(9.05,-15.9,0.3386,0.3386,44.3135);

	this.instance_6 = new lib.spread_star("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(3.15,-1.2,0.5521,0.5521,-147.5499);

	this.instance_7 = new lib.spread_star("synched",1,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(0.35,1.05,0.5521,0.5521,90.4165);

	this.instance_8 = new lib.spread_star("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(12.25,14.2,0.4101,0.4101,155.3315);

	this.instance_9 = new lib.spread_star("synched",0,false);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-11.05,5.95,0.4731,0.4731,-116.6808);

	this.instance_10 = new lib.spread_star("synched",0,false);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-11.8,-5.8,0.5201,0.5201,-44.477);

	this.instance_11 = new lib.spread_star("synched",0,false);
	this.instance_11.parent = this;
	this.instance_11.setTransform(3.05,11.25,0.5316,0.5316,7.4749);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(20));

	// レイヤー_3
	this.instance_12 = new lib.star_ring_container("synched",0,false);
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.2,-171.2,342.5,342.5);


(lib.concent_wrapper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* _visible = true;
		play();
		*/
		
		this.visible = true;
		this.play();
	}
	this.frame_7 = function() {
		/* stop();
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1));

	// レイヤー_1
	this.instance = new lib.concent_container();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1.3,regY:5.1,x:1.3,y:5.1,alpha:0.9703},0).wait(1).to({alpha:0.8688},0).wait(1).to({alpha:0.6781},0).wait(1).to({alpha:0.4135},0).wait(1).to({alpha:0.1827},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0.1016},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-406.3,-402.2,815.3,814.7);


(lib._bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// grd
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFE420","rgba(255,228,32,0)","rgba(255,228,32,0)","#FFE420"],[0,0.118,0.906,1],-120,0,120,0).s().rr(-120,-310,240,620,3);
	this.shape.setTransform(120,310);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// symbol
	this.instance = new lib.icon_cute_container();
	this.instance.parent = this;
	this.instance.setTransform(396.75,110.4);

	this.instance_1 = new lib.icon_passion_container();
	this.instance_1.parent = this;
	this.instance_1.setTransform(330.2,13.85,0.9869,0.9869);

	this.instance_2 = new lib.icon_cute_container();
	this.instance_2.parent = this;
	this.instance_2.setTransform(101.3,103.1,0.8476,0.8476);

	this.instance_3 = new lib.icon_cool_container();
	this.instance_3.parent = this;
	this.instance_3.setTransform(209.15,-65.7,0.8181,0.8181);

	this.instance_4 = new lib.icon_cute_container();
	this.instance_4.parent = this;
	this.instance_4.setTransform(124.9,293.85,0.6336,0.6336);

	this.instance_5 = new lib.icon_passion_container();
	this.instance_5.parent = this;
	this.instance_5.setTransform(368.2,-88.15,0.8292,0.8292);

	this.instance_6 = new lib.icon_cool_container();
	this.instance_6.parent = this;
	this.instance_6.setTransform(225.4,117.3);

	this.instance_7 = new lib.icon_passion_container();
	this.instance_7.parent = this;
	this.instance_7.setTransform(172.2,206.85,1.1609,1.1609);

	this.instance_8 = new lib.icon_cute_container();
	this.instance_8.parent = this;
	this.instance_8.setTransform(275.3,247.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// shuttle
	this.instance_9 = new lib.shuttle2_mc3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(200,121.05,0.473,0.473);

	this.instance_10 = new lib.shuttle2_mc3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(28,53.05);

	this.instance_11 = new lib.shuttle2_mc2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(122.3,-36.75);

	this.instance_12 = new lib.shuttle2_mc();
	this.instance_12.parent = this;
	this.instance_12.setTransform(83.95,288.95);

	this.instance_13 = new lib.shuttle2_mc3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(130.95,203.95,1.1288,1.1288);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// bg_grid_container
	this.instance_14 = new lib.bg_grid_container();
	this.instance_14.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

}).prototype = getMCSymbolPrototype(lib._bg1, new cjs.Rectangle(-9.9,-188.2,605.8,808.2), null);


(lib.立ち上るパーティクル = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.シンボル12();
	this.instance.parent = this;
	this.instance.setTransform(162.3,-0.3,0.5,0.5,0,180,0,0,13.5);
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.シンボル12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(41.45,1.65,0.5,0.5,0,180,0,0,13.5);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.立ち上るパーティクル, new cjs.Rectangle(-5.2,2.3,216.7,15), null);


(lib.zoom_bg_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.instance = new lib._bg1("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-120.95,-181.85,1.0234,1.0233,0,0,0,-0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:119.3,regY:155,scaleX:1.0278,scaleY:1.0278,x:0.85,y:-22.9},0).wait(1).to({scaleX:1.0328,scaleY:1.0328,x:0.05,y:-22.65},0).wait(1).to({scaleX:1.0384,scaleY:1.0383,x:-0.8,y:-22.5},0).wait(1).to({scaleX:1.0444,scaleY:1.0443,x:-1.7,y:-22.35},0).wait(1).to({scaleX:1.0509,scaleY:1.0508,x:-2.65,y:-22.15},0).wait(1).to({scaleX:1.0577,scaleY:1.0577,x:-3.65,y:-21.95},0).wait(1).to({scaleX:1.065,scaleY:1.065,x:-4.75,y:-21.85},0).wait(1).to({scaleX:1.0727,scaleY:1.0726,x:-5.9,y:-21.7},0).wait(1).to({scaleX:1.0807,scaleY:1.0807,x:-6.95,y:-21.6},0).wait(1).to({scaleX:1.089,scaleY:1.089,x:-8.15,y:-21.55},0).wait(1).to({scaleX:1.0977,scaleY:1.0976,x:-9.3},0).wait(1).to({scaleX:1.1066,scaleY:1.1066,x:-10.55,y:-21.6},0).wait(1).to({scaleX:1.1159,scaleY:1.1158,x:-11.7,y:-21.65},0).wait(1).to({scaleX:1.1254,scaleY:1.1254,x:-12.9,y:-21.7},0).wait(1).to({scaleX:1.1352,scaleY:1.1351,x:-14.1,y:-21.9},0).wait(1).to({scaleX:1.1452,scaleY:1.1452,x:-15.35,y:-22.15},0).wait(1).to({scaleX:1.1555,scaleY:1.1555,x:-16.55,y:-22.45},0).wait(1).to({scaleX:1.166,scaleY:1.166,x:-17.8,y:-22.8},0).wait(1).to({scaleX:1.1768,scaleY:1.1768,x:-19,y:-23.25},0).wait(1).to({scaleX:1.1878,scaleY:1.1878,x:-20.2,y:-23.75},0).wait(1).to({scaleX:1.199,scaleY:1.199,x:-21.35,y:-24.35},0).wait(1).to({scaleX:1.2104,scaleY:1.2104,x:-22.5,y:-25.05},0).wait(1).to({scaleX:1.2221,scaleY:1.222,x:-23.6,y:-25.8},0).wait(1).to({scaleX:1.2339,scaleY:1.2339,x:-24.65,y:-26.6},0).wait(1).to({scaleX:1.246,scaleY:1.2459,x:-25.7,y:-27.5},0).wait(1).to({scaleX:1.2582,scaleY:1.2582,x:-26.65,y:-28.5},0).wait(1).to({scaleX:1.2707,scaleY:1.2706,x:-27.55,y:-29.5},0).wait(1).to({scaleX:1.2833,scaleY:1.2833,x:-28.4,y:-30.65},0).wait(1).to({scaleX:1.2961,scaleY:1.2961,x:-29.15,y:-31.85},0).wait(1).to({scaleX:1.3091,scaleY:1.3091,x:-29.85,y:-33.15},0).wait(1).to({scaleX:1.3223,scaleY:1.3223,x:-30.5,y:-34.45},0).wait(1).to({scaleX:1.3357,scaleY:1.3357,x:-31.05,y:-35.85},0).wait(1).to({scaleX:1.3493,scaleY:1.3493,x:-31.5,y:-37.3},0).wait(1).to({scaleX:1.363,scaleY:1.363,x:-31.9,y:-38.8},0).wait(1).to({scaleX:1.377,scaleY:1.3769,x:-32.2,y:-40.35},0).wait(1).to({scaleX:1.3911,scaleY:1.391,x:-32.35,y:-41.95},0).wait(1).to({scaleX:1.4053,scaleY:1.4053,x:-32.45,y:-43.6},0).wait(1).to({scaleX:1.4198,scaleY:1.4197,y:-45.25},0).wait(1).to({scaleX:1.4344,scaleY:1.4344,x:-32.5,y:-47.1},0).wait(1).to({scaleX:1.4492,scaleY:1.4492,x:-32.35,y:-49.15},0).wait(1).to({scaleX:1.4642,scaleY:1.4641,x:-32.15,y:-51.2},0).wait(1).to({scaleX:1.4793,scaleY:1.4793,x:-31.85,y:-53.3},0).wait(1).to({scaleX:1.4946,scaleY:1.4946,x:-31.5,y:-55.5},0).wait(1).to({scaleX:1.5101,scaleY:1.5101,x:-31,y:-57.75},0).wait(1).to({scaleX:1.5258,scaleY:1.5258,x:-30.35,y:-60.05},0).wait(1).to({scaleX:1.5416,scaleY:1.5416,x:-29.65,y:-62.35},0).wait(1).to({scaleX:1.5577,scaleY:1.5576,x:-28.75,y:-64.75},0).wait(1).to({scaleX:1.5738,scaleY:1.5738,x:-27.8,y:-67.15},0).wait(1).to({scaleX:1.5902,scaleY:1.5902,x:-26.7,y:-69.6},0).wait(1).to({scaleX:1.6067,scaleY:1.6067,x:-25.45,y:-72.1},0).wait(1).to({scaleX:1.6235,scaleY:1.6234,x:-24.1,y:-74.6},0).wait(1).to({scaleX:1.6404,scaleY:1.6403,x:-22.65,y:-77.15},0).wait(1).to({scaleX:1.6574,scaleY:1.6574,x:-21.05,y:-79.7},0).wait(1).to({scaleX:1.6747,scaleY:1.6747,x:-19.35,y:-82.3},0).wait(1).to({scaleX:1.6921,scaleY:1.6921,x:-17.55,y:-84.85},0).wait(1).to({scaleX:1.7097,scaleY:1.7097,x:-15.55,y:-87.4},0).wait(1).to({scaleX:1.7276,scaleY:1.7275,x:-13.45,y:-90},0).wait(1).to({scaleX:1.7456,scaleY:1.7455,x:-11.25,y:-92.55},0).wait(1).to({scaleX:1.7637,scaleY:1.7637,x:-8.95,y:-95.15},0).wait(1).to({scaleX:1.7821,scaleY:1.7821,x:-6.45,y:-98},0).wait(1).to({scaleX:1.8007,scaleY:1.8007,x:-3.9,y:-100.9},0).wait(1).to({scaleX:1.8195,scaleY:1.8194,x:-1.15,y:-103.9},0).wait(1).to({scaleX:1.8384,scaleY:1.8384,x:1.75,y:-106.85},0).wait(1).to({scaleX:1.8576,scaleY:1.8576,x:4.75,y:-109.9},0).wait(1).to({scaleX:1.877,scaleY:1.877,x:7.9,y:-112.85},0).wait(1).to({scaleX:1.8966,scaleY:1.8966,x:11.25,y:-115.9},0).wait(1).to({scaleX:1.9164,scaleY:1.9164,x:14.65,y:-118.85},0).wait(1).to({scaleX:1.9364,scaleY:1.9364,x:18.3,y:-121.85},0).wait(1).to({scaleX:1.9567,scaleY:1.9566,x:22.05,y:-124.85},0).wait(1).to({scaleX:1.9771,scaleY:1.9771,x:25.9,y:-127.85},0).wait(1).to({scaleX:1.9978,scaleY:1.9978,x:29.95,y:-130.85},0).wait(1).to({scaleX:2.0188,scaleY:2.0187,x:34.15,y:-133.8},0).wait(1).to({scaleX:2.0399,scaleY:2.0399,x:38.45,y:-136.7},0).wait(1).to({scaleX:2.0614,scaleY:2.0613,x:42.9,y:-139.65},0).wait(1).to({scaleX:2.0831,scaleY:2.083,x:47.5,y:-142.55},0).wait(1).to({scaleX:2.105,scaleY:2.105,x:52.25,y:-145.45},0).wait(1).to({scaleX:2.1272,scaleY:2.1272,x:57.2,y:-148.25},0).wait(1).to({scaleX:2.1497,scaleY:2.1496,x:62.25,y:-151.05},0).wait(1).to({scaleX:2.1724,scaleY:2.1724,x:67.45,y:-153.85},0).wait(1).to({scaleX:2.1955,scaleY:2.1954,x:72.75,y:-156.55},0).wait(1).to({scaleX:2.2188,scaleY:2.2188,x:77.75,y:-158.55},0).wait(1).to({scaleX:2.2424,scaleY:2.2424,x:82.8,y:-160.5},0).wait(1).to({scaleX:2.2664,scaleY:2.2664,x:87.9,y:-162.55},0).wait(1).to({scaleX:2.2907,scaleY:2.2907,x:93.05,y:-164.65},0).wait(1).to({scaleX:2.3153,scaleY:2.3153,x:98.15,y:-166.9},0).wait(1).to({scaleX:2.3403,scaleY:2.3403,x:103.4,y:-169.15},0).wait(1).to({scaleX:2.3656,scaleY:2.3656,x:108.65,y:-171.55},0).wait(1).to({scaleX:2.3913,scaleY:2.3913,x:113.95,y:-174.05},0).wait(1).to({scaleX:2.4174,scaleY:2.4174,x:119.25,y:-176.6},0).wait(1).to({scaleX:2.4439,scaleY:2.4439,x:124.6,y:-179.35},0).wait(1).to({scaleX:2.4709,scaleY:2.4709,x:130.05,y:-182.15},0).wait(1).to({scaleX:2.4983,scaleY:2.4983,x:135.45,y:-185.15},0).wait(1).to({scaleX:2.5261,scaleY:2.5261,x:140.85,y:-188.3},0).wait(1).to({scaleX:2.5545,scaleY:2.5545,x:146.3,y:-191.65},0).wait(1).to({scaleX:2.5833,scaleY:2.5833,x:151.7,y:-195.2},0).wait(1).to({scaleX:2.6127,scaleY:2.6127,x:157.1,y:-199},0).wait(1).to({scaleX:2.6427,scaleY:2.6427,x:162.3,y:-202.35},0).wait(1).to({scaleX:2.6733,scaleY:2.6733,x:167.35,y:-205.6},0).wait(1).to({scaleX:2.7045,scaleY:2.7045,x:172.35,y:-209},0).wait(1).to({scaleX:2.7364,scaleY:2.7364,x:177.2,y:-212.65},0).wait(1).to({scaleX:2.7691,scaleY:2.7691,x:181.95,y:-216.55},0).wait(1).to({scaleX:2.8025,scaleY:2.8025,x:186.45,y:-220.65},0).wait(1).to({scaleX:2.8368,scaleY:2.8368,x:190.65,y:-225.05},0).wait(1).to({scaleX:2.872,scaleY:2.872,x:194.5,y:-229.7},0).wait(1).to({scaleX:2.9082,scaleY:2.9082,x:197.8,y:-234.75},0).wait(1).to({scaleX:2.9455,scaleY:2.9455,x:200.55,y:-240},0).wait(1).to({scaleX:2.984,scaleY:2.984,x:202.65,y:-245.35},0).wait(1).to({scaleX:3.0238,scaleY:3.0238,x:204.1,y:-250.65},0).wait(1).to({scaleX:3.0651,scaleY:3.0651,x:204.85,y:-255.9},0).wait(1).to({scaleX:3.1081,scaleY:3.1081,x:204.7,y:-261.75},0).wait(1).to({scaleX:3.153,scaleY:3.153,x:202.5,y:-270.25},0).wait(1).to({regX:0,regY:0,scaleX:3.2,scaleY:3.2,x:-183.1,y:-773},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237,-1375.4,1960.7,2586.5);


(lib.character3_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{jump:1,nod:18,shade:1});

	// timeline functions:
	this.frame_0 = function() {
		/* if (_name eq "pos") _visible = false;
		
		stop();
		*/
		if (this.name == "pos") this.visible = false;
		
		this.stop();
	}
	this.frame_1 = function() {
		/* play();
		*/
		
		this.play();
	}
	this.frame_17 = function() {
		/* stop();
		*/
		
		this.stop();
	}
	this.frame_18 = function() {
		/* play();
		*/
		
		this.play();
	}
	this.frame_33 = function() {
		/* stop();
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(16).call(this.frame_17).wait(1).call(this.frame_18).wait(15).call(this.frame_33).wait(1));

	// chara2
	this.c = new lib.character3_base();
	this.c.name = "c";
	this.c.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.c).wait(1).to({y:3},0).wait(1).to({regX:29.9,regY:-128.9,x:29.9,y:-133.65},0).wait(1).to({y:-136.8},0).wait(1).to({y:-138.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:29.9,regY:-128.9,x:29.9,y:-138.65},0).wait(1).to({y:-138},0).wait(1).to({y:-136.9},0).wait(1).to({y:-135.05},0).wait(1).to({y:-132.05},0).wait(1).to({regX:0,regY:0,x:0,y:4},0).wait(1).to({regX:29.9,regY:-128.9,x:29.9,y:-125.2},0).wait(1).to({y:-126.3},0).wait(1).to({y:-128.1},0).wait(1).to({y:-129.45},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({y:0},0).wait(2).to({regX:29.9,regY:-128.9,x:29.9,y:-128.6},0).wait(1).to({y:-127.5},0).wait(1).to({y:-125.4},0).wait(1).to({y:-123.35},0).wait(1).to({y:-122.25},0).wait(1).to({regX:0,regY:0,x:0,y:7},0).wait(1).to({regX:29.9,regY:-128.9,x:29.9,y:-122.25},0).wait(1).to({y:-123.55},0).wait(1).to({y:-125.9},0).wait(1).to({y:-128.3},0).wait(1).to({y:-129.55},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).to({y:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-271.4,139.1,291);


// stage content:
(lib.month_notice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"jump":452,label_open:1,label_logo:62,label_jump:141,label_transition1:190,label_transition2:231,label_gate:274,label_get:311,label_flower1:423,s2:190,s3:231,s4:270,s5:336,s6:377});

	// timeline functions:
	this.frame_0 = function() {
		this.jump = function(){
			if (this.key_flag == 1) {
				this.key_flag = 0;
				location.href = this.url;
			}
		}
		////-----------------
		////　初期化
		////-----------------
		//fscommand2("SetQuality", "medium");
		//_highquality = true;
		//_focusrect = false;
		//
		//key_flag = 1;
		//
		//
		////-----------------
		////　パラメータ
		////-----------------
		////**
		////終了後の遷移先
		////url = "http://mbga.jp";
		//
		//t1_1 = "今月もやってまいりました!";
		//t1_2 = "『速報!!注目のｱｲﾄﾞﾙ!』";
		//t1_3 = "進行は私、ちひろがお送り";
		//t1_4 = "いたします!";
		//
		//t2_1 = "このｺｰﾅｰでは、30日15時に";
		//t2_2 = "登場する「注目のｱｲﾄﾞﾙ」を、";
		//t2_3 = "一足お先にちょっぴりお見せ";
		//t2_4 = "しちゃいます!";
		//
		//t3_1 = "さあ、いったいどのｱｲﾄﾞﾙが";
		//t3_2 = "登場するのでしょうか?";
		//t3_3 = "今月の「注目のｱｲﾄﾞﾙ」は－－";
		//t3_4 = "こちらです!!";
		//
		//t4_1 = "このｼﾙｴｯﾄは…もしかして";
		//t4_2 = "あのｱｲﾄﾞﾙ…!?";
		//t4_3 = "";
		//t4_4 = "";
		//
		//t5_1 = "このｼﾙｴｯﾄは…もしかして";
		//t5_2 = "あのｱｲﾄﾞﾙ…!?";
		//t5_3 = "";
		//t5_4 = "";
		//
		//t6_1 = "とっても気になりますね!";
		//t6_2 = "ｱｲﾄﾞﾙの登場は30日23時です!!";
		//t6_3 = "楽しみにしていてくださいね!";
		//t6_4 = "";
		//
		//
		//
		//
		//
		//
		//
		///**/
		//
		
		this.key_flag = 1;
		
		var im_cjs = window.im_cjs;
		
		this.url = im_cjs._url;
		
		this.t1_1 = im_cjs.t1_1;
		this.t1_2 = im_cjs.t1_2;
		this.t1_3 = im_cjs.t1_3;
		this.t1_4 = im_cjs.t1_4;
		
		this.t2_1 = im_cjs.t2_1;
		this.t2_2 = im_cjs.t2_2;
		this.t2_3 = im_cjs.t2_3;
		this.t2_4 = im_cjs.t2_4;
		
		this.t3_1 = im_cjs.t3_1;
		this.t3_2 = im_cjs.t3_2;
		this.t3_3 = im_cjs.t3_3;
		this.t3_4 = im_cjs.t3_4;
		
		this.t4_1 = im_cjs.t4_1;
		this.t4_2 = im_cjs.t4_2;
		this.t4_3 = im_cjs.t4_3;
		this.t4_4 = im_cjs.t4_4;
		
		this.t5_1 = im_cjs.t5_1;
		this.t5_2 = im_cjs.t5_2;
		this.t5_3 = im_cjs.t5_3;
		this.t5_4 = im_cjs.t5_4;
		
		this.t6_1 = im_cjs.t6_1;
		this.t6_2 = im_cjs.t6_2;
		this.t6_3 = im_cjs.t6_3;
		this.t6_4 = im_cjs.t6_4;
	}
	this.frame_1 = function() {
		window.se_play("se_041_1");
		///* デバッグ
		//gotoAndPlay( "s3" );
		////gotoAndPlay( "last" );
		////*/
		//
		//gotoAndStop( "table/:3" );
		//
		this.table.gotoAndPlay(2);
	}
	this.frame_62 = function() {
		window.se_play("se_134");
	}
	this.frame_96 = function() {
		/* m1 = t1_1;
		m2 = t1_2;
		*/
		this.m1 = this.t1_1;
		this.m2 = this.t1_2;
		this.table.t1.text = this.m1;
		this.table.t2.text = this.m2;
	}
	this.frame_141 = function() {
		window.se_play("se_110");
		/* gotoAndPlay( "ch/:jump" );
		gotoAndStop( "table/:1" );*/
		this.ch.gotoAndPlay("jump");
		this.table.gotoAndStop(0);
	}
	this.frame_187 = function() {
		/* m3 = t1_3;
		m4 = t1_4;
		
		//笑顔
		gotoAndPlay("ch/c/:n_to_s");
		
		gotoAndPlay("ch/:nod");
		
		gotoAndPlay( "ch/c/glitter/:2" );
		*/
		this.m3 = this.t1_3;
		this.m4 = this.t1_4;
		this.table.t3.text = this.m3;
		this.table.t4.text = this.m4;
		
		//笑顔
		this.ch.c.gotoAndPlay("n_to_s");
		this.ch.gotoAndPlay("nod");
		this.ch.c.glitter.gotoAndPlay(1);
	}
	this.frame_189 = function() {
		/* //カーソル出現
		gotoAndStop( "table/:2" );
		
		stop();*/
		//カーソル出現
		this.table.gotoAndStop(1);
		this.stop();
		/*
		on (press, keyPress "<Enter>") {
			gotoAndPlay("s2");
		}
		on (keyPress "5") {
			gotoAndPlay("s2");
		}
		*/
		
		this.btn.on("click", function(e){
			this.gotoAndPlay("s2");
		}, this, true);
	}
	this.frame_190 = function() {
		window.se_play("se_110");
	}
	this.frame_213 = function() {
		/* m1 = t2_1;
		m2 = t2_2;
		m3 = t2_3;
		m4 = t2_4;
		
		gotoAndPlay("ch/:jump");
		
		//カーソル隠す
		gotoAndStop( "table/:1" );
		*/
		this.m1 = this.t2_1;
		this.m2 = this.t2_2;
		this.m3 = this.t2_3;
		this.m4 = this.t2_4;
		this.table.t1.text = this.m1;
		this.table.t2.text = this.m2;
		this.table.t3.text = this.m3;
		this.table.t4.text = this.m4;
		
		this.ch.gotoAndPlay("jump");
		
		//カーソル隠す
		this.table.gotoAndStop(0);
	}
	this.frame_230 = function() {
		/* stop();
		
		//カーソル出現
		gotoAndStop( "table/:2" );*/
		
		this.stop();
		
		//カーソル出現
		this.table.gotoAndStop(1);
		/*
		on (press, keyPress "<Enter>") {
			gotoAndPlay( "s3" );
		}
		on (keyPress "5") {
			gotoAndPlay( "s3" );
		}
		*/
		
		this.btn.on("click", function(e){
			this.gotoAndPlay("s3");
		}, this, true);
	}
	this.frame_231 = function() {
		window.se_play("se_110");
		/* m1 = t3_1;
		m2 = t3_2;
		m3 = "";
		m4 = "";
		
		
		//通常
		gotoAndPlay("ch/c/:s_to_n");
		
		
		//カーソル隠す
		gotoAndStop( "table/:1" );*/
		
		this.m1 = this.t3_1;
		this.m2 = this.t3_2;
		this.m3 = "";
		this.m4 = "";
		this.table.t1.text = this.m1;
		this.table.t2.text = this.m2;
		this.table.t3.text = this.m3;
		this.table.t4.text = this.m4;
		
		//通常
		this.ch.c.gotoAndPlay("s_to_n");
		
		//カーソル隠す
		this.table.gotoAndStop(0);
	}
	this.frame_269 = function() {
		/* stop();
		
		m3 = t3_3;
		
		//カーソル出現
		gotoAndStop( "table/:2" );*/
		
		this.stop();
		
		this.m3 = this.t3_3;
		this.table.t3.text = this.m3;
		
		//カーソル出現
		this.table.gotoAndStop( 1 );
		/*
		on (press, keyPress "<Enter>") {
			gotoAndPlay("s4");
		}
		on (keyPress "5") {
			gotoAndPlay("s4");
		}
		*/
		
		this.btn.on("click", function(e){
			this.gotoAndPlay("s4");
		}, this, true);
	}
	this.frame_270 = function() {
		/* m1 = t3_4;
		m2 = "";
		m3 = "";
		m4 = "";
		
		//カーソル隠す
		gotoAndStop( "table/:1" );*/
		
		this.m1 = this.t3_4;
		this.m2 = "";
		this.m3 = "";
		this.m4 = "";
		this.table.t1.text = this.m1;
		this.table.t2.text = this.m2;
		this.table.t3.text = this.m3;
		this.table.t4.text = this.m4;
		
		//カーソル隠す
		this.table.gotoAndStop( 0 );
	}
	this.frame_274 = function() {
		window.se_play("se_016");
	}
	this.frame_311 = function() {
		window.se_play("se_059");
		/* gotoAndPlay( "bg_silhouette/:appear1" );
		*/
		
		this.bg_silhouette.gotoAndPlay( "appear1" );
	}
	this.frame_329 = function() {
		/* m1 = t4_1;
		m2 = t4_2;
		m3 = t4_3;
		m4 = t4_4;*/
		
		this.m1 = this.t4_1;
		this.m2 = this.t4_2;
		this.m3 = this.t4_3;
		this.m4 = this.t4_4;
	}
	this.frame_332 = function() {
		this.t1.text = this.m1;
		this.t2.text = this.m2;
		this.t3.text = this.m3;
		this.t4.text = this.m4;
	}
	this.frame_335 = function() {
		/* 
		
		stop();*/
		
		this.stop();
		/*
		on (press, keyPress "<Enter>") {
			gotoAndPlay("s5");
		}
		on (keyPress "5") {
			gotoAndPlay("s5");
		}
		*/
		
		this.btn.on("click", function(e){
			this.gotoAndPlay("s5");
		}, this, true);
	}
	this.frame_336 = function() {
		/* gotoAndStop( "bg_silhouette/:appeared" );
		
		m1 = t5_1;
		m2 = t5_2;
		m3 = "";
		m4 = "";*/
		
		this.bg_silhouette.gotoAndStop( "appeared" );
		
		this.m1 = this.t5_1;
		this.m2 = this.t5_2;
		this.m3 = "";
		this.m4 = "";
		this.t1.text = "";
		this.t2.text = "";
		this.t3.text = "";
		this.t4.text = "";
	}
	this.frame_345 = function() {
		/* gotoAndPlay( "bg_silhouette/:appear2" );
		*/
		
		this.bg_silhouette.gotoAndPlay("appear2");
	}
	this.frame_370 = function() {
		/* m1 = t5_1;
		m2 = t5_2;
		m3 = t5_3;
		m4 = t5_4;*/
		
		this.m1 = this.t5_1;
		this.m2 = this.t5_2;
		this.m3 = this.t5_3;
		this.m4 = this.t5_4;
	}
	this.frame_373 = function() {
		this.t1.text = this.m1;
		this.t2.text = this.m2;
		this.t3.text = this.m3;
		this.t4.text = this.m4;
	}
	this.frame_376 = function() {
		/* 
		
		stop();*/
		
		this.stop();
		/*
		on (press, keyPress "<Enter>") {
			gotoAndPlay("s6");
		}
		on (keyPress "5") {
			gotoAndPlay("s6");
		}
		*/
		
		this.btn.on("click", function(e){
			this.gotoAndPlay("s6");
		}, this, true);
	}
	this.frame_377 = function() {
		/* gotoAndStop( "bg_silhouette/:appeard2" );
		
		m1 = t6_1;
		m2 = t6_2;
		m3 = "";
		m4 = "";*/
		
		this.bg_silhouette.gotoAndStop( "appeard2" );
		
		this.m1 = this.t6_1;
		this.m2 = this.t6_2;
		this.m3 = "";
		this.m4 = "";
		this.table.t1.text = this.m1;
		this.table.t2.text = this.m2;
		this.table.t3.text = this.m3;
		this.table.t4.text = this.m4;
	}
	this.frame_423 = function() {
		window.se_play("se_110");
		/* m3 = t6_3;
		m4 = t6_4;
		
		////笑顔
		gotoAndPlay("ch/c/:n_to_s");
		gotoAndPlay("ch/:jump");
		
		stop();*/
		
		this.m3 = this.t6_3;
		this.m4 = this.t6_4;
		this.table.t3.text = this.m3;
		this.table.t4.text = this.m4;
		
		//笑顔
		this.ch.c.gotoAndPlay("n_to_s");
		this.ch.gotoAndPlay("jump");
		
		this.stop();
		/*
		on( press, keyPress "<Enter>" ){
			call( "jump" );
		}
		on( keyPress "5" ){
			call( "jump" );
		}
		*/
		
		this.btn.on("click", function(e){
			this.jump();
		}, this, true);
	}
	this.frame_452 = function() {
		////-----------------------
		//// call jump
		////-----------------------
		//
		//if (key_flag == 1) {
		//	key_flag = 0;
		//	getURL(url);
		//	/*
		//	gotoAndPlay("sender:2");
		//	gotoAndPlay("pusher/:pushed");
		//	*/
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(61).call(this.frame_62).wait(34).call(this.frame_96).wait(45).call(this.frame_141).wait(46).call(this.frame_187).wait(2).call(this.frame_189).wait(1).call(this.frame_190).wait(23).call(this.frame_213).wait(17).call(this.frame_230).wait(1).call(this.frame_231).wait(38).call(this.frame_269).wait(1).call(this.frame_270).wait(4).call(this.frame_274).wait(37).call(this.frame_311).wait(18).call(this.frame_329).wait(3).call(this.frame_332).wait(3).call(this.frame_335).wait(1).call(this.frame_336).wait(9).call(this.frame_345).wait(25).call(this.frame_370).wait(3).call(this.frame_373).wait(3).call(this.frame_376).wait(1).call(this.frame_377).wait(46).call(this.frame_423).wait(29).call(this.frame_452).wait(11));

	// shield
	this.instance = new lib.shield();
	this.instance.parent = this;
	this.instance.setTransform(120,155);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(463));

	// effect
	this.instance_1 = new lib.effect_spread_star("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,160,1.1827,1.1827);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(62).to({_off:false},0).to({_off:true},35).wait(366));

	// title_frame
	this.instance_2 = new lib.title_white_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,155,3.5187,3.5187);
	this.instance_2.alpha = 0.1016;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(1).to({scaleX:3.5178,scaleY:3.5178,alpha:0.1019},0).wait(1).to({scaleX:3.5151,scaleY:3.5151,alpha:0.1029},0).wait(1).to({scaleX:3.5105,scaleY:3.5105,alpha:0.1045},0).wait(1).to({scaleX:3.504,scaleY:3.504,alpha:0.1068},0).wait(1).to({scaleX:3.4955,scaleY:3.4955,alpha:0.1098},0).wait(1).to({scaleX:3.4851,scaleY:3.4851,alpha:0.1136},0).wait(1).to({scaleX:3.4726,scaleY:3.4726,alpha:0.118},0).wait(1).to({scaleX:3.458,scaleY:3.458,alpha:0.1232},0).wait(1).to({scaleX:3.4412,scaleY:3.4412,alpha:0.1292},0).wait(1).to({scaleX:3.4222,scaleY:3.4222,alpha:0.136},0).wait(1).to({scaleX:3.4008,scaleY:3.4008,alpha:0.1436},0).wait(1).to({scaleX:3.377,scaleY:3.377,alpha:0.1521},0).wait(1).to({scaleX:3.3506,scaleY:3.3506,alpha:0.1615},0).wait(1).to({scaleX:3.3215,scaleY:3.3215,alpha:0.1719},0).wait(1).to({scaleX:3.2896,scaleY:3.2896,alpha:0.1833},0).wait(1).to({scaleX:3.2548,scaleY:3.2548,alpha:0.1957},0).wait(1).to({scaleX:3.2168,scaleY:3.2168,alpha:0.2093},0).wait(1).to({scaleX:3.1755,scaleY:3.1755,alpha:0.224},0).wait(1).to({scaleX:3.1306,scaleY:3.1306,alpha:0.24},0).wait(1).to({scaleX:3.082,scaleY:3.082,alpha:0.2574},0).wait(1).to({scaleX:3.0293,scaleY:3.0293,alpha:0.2762},0).wait(1).to({scaleX:2.9722,scaleY:2.9722,alpha:0.2965},0).wait(1).to({scaleX:2.9105,scaleY:2.9105,alpha:0.3185},0).wait(1).to({scaleX:2.8436,scaleY:2.8436,alpha:0.3424},0).wait(1).to({scaleX:2.7711,scaleY:2.7711,alpha:0.3682},0).wait(1).to({scaleX:2.6924,scaleY:2.6924,alpha:0.3963},0).wait(1).to({scaleX:2.6069,scaleY:2.6069,alpha:0.4268},0).wait(1).to({scaleX:2.5138,scaleY:2.5138,alpha:0.46},0).wait(1).to({scaleX:2.412,scaleY:2.412,alpha:0.4963},0).wait(1).to({scaleX:2.3004,scaleY:2.3004,alpha:0.5362},0).wait(1).to({scaleX:2.1773,scaleY:2.1773,alpha:0.58},0).wait(1).to({scaleX:2.0408,scaleY:2.0408,alpha:0.6287},0).wait(1).to({scaleX:1.8881,scaleY:1.8881,alpha:0.6832},0).wait(1).to({scaleX:1.7154,scaleY:1.7154,alpha:0.7448},0).wait(1).to({scaleX:1.5169,scaleY:1.5169,alpha:0.8156},0).wait(1).to({scaleX:1.2838,scaleY:1.2838,alpha:0.8988},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).to({_off:true},1).wait(401));

	// title_w
	this.instance_3 = new lib.logo_w("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,155);
	this.instance_3.alpha = 0.9492;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(62).to({_off:false},0).wait(1).to({regX:-0.5,regY:-0.5,x:119.5,y:154.5,alpha:0.946},0).wait(1).to({alpha:0.9357},0).wait(1).to({alpha:0.9174},0).wait(1).to({alpha:0.8901},0).wait(1).to({alpha:0.8526},0).wait(1).to({alpha:0.8038},0).wait(1).to({alpha:0.7428},0).wait(1).to({alpha:0.6693},0).wait(1).to({alpha:0.5842},0).wait(1).to({alpha:0.4907},0).wait(1).to({alpha:0.3937},0).wait(1).to({alpha:0.3001},0).wait(1).to({alpha:0.2158},0).wait(1).to({alpha:0.1449},0).wait(1).to({alpha:0.0889},0).wait(1).to({alpha:0.0477},0).wait(1).to({alpha:0.0202},0).wait(1).to({alpha:0.0048},0).wait(1).to({regX:0,regY:0,x:120,y:155,alpha:0},0).to({_off:true},1).wait(381));

	// title
	this.instance_4 = new lib.logo("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(120,155);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).to({_off:false},0).wait(19).to({startPosition:0},0).wait(32).to({startPosition:0},0).wait(1).to({alpha:0.9974},0).wait(1).to({alpha:0.989},0).wait(1).to({alpha:0.9744},0).wait(1).to({alpha:0.9527},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.8848},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:0.7789},0).wait(1).to({alpha:0.7103},0).wait(1).to({alpha:0.6316},0).wait(1).to({alpha:0.5448},0).wait(1).to({alpha:0.4531},0).wait(1).to({alpha:0.3613},0).wait(1).to({alpha:0.2747},0).wait(1).to({alpha:0.1977},0).wait(1).to({alpha:0.1331},0).wait(1).to({alpha:0.0821},0).wait(1).to({alpha:0.0443},0).wait(1).to({alpha:0.0188},0).wait(1).to({alpha:0.0045},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(328));

	// white
	this.instance_5 = new lib.white();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120,155);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(62).to({_off:false},0).wait(1).to({alpha:0.9895},0).wait(1).to({alpha:0.9547},0).wait(1).to({alpha:0.8898},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.6493},0).wait(1).to({alpha:0.4798},0).wait(1).to({alpha:0.3076},0).wait(1).to({alpha:0.165},0).wait(1).to({alpha:0.0681},0).wait(1).to({alpha:0.0157},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(389));

	// zoom_bg_container
	this.instance_6 = new lib.zoom_bg_container();
	this.instance_6.parent = this;
	this.instance_6.setTransform(120,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(96).to({alpha:0},16).to({_off:true},1).wait(350));

	// title_corner
	this.logo_400_large = new lib.logo_400_large();
	this.logo_400_large.name = "logo_400_large";
	this.logo_400_large.parent = this;
	this.logo_400_large.setTransform(198.5,24.9,0.35,0.3499);
	this.logo_400_large.alpha = 0;
	this.logo_400_large._off = true;

	this.timeline.addTween(cjs.Tween.get(this.logo_400_large).wait(190).to({_off:false},0).wait(1).to({alpha:0.0145},0).wait(1).to({alpha:0.0638},0).wait(1).to({alpha:0.1586},0).wait(1).to({alpha:0.3096},0).wait(1).to({alpha:0.5133},0).wait(1).to({alpha:0.7266},0).wait(1).to({alpha:0.8875},0).wait(1).to({alpha:0.9747},0).wait(1).to({alpha:1},0).wait(264));

	// white
	this.instance_7 = new lib.white();
	this.instance_7.parent = this;
	this.instance_7.setTransform(120,155);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(336).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(-1)).to({alpha:0},12).to({_off:true},1).wait(105));

	// text
	this.t4 = new cjs.Text("", "12px 'Arial'", "#333333");
	this.t4.name = "t4";
	this.t4.lineHeight = 15;
	this.t4.lineWidth = 260;
	this.t4.parent = this;
	this.t4.setTransform(13,291);

	this.t3 = new cjs.Text("", "12px 'Arial'", "#333333");
	this.t3.name = "t3";
	this.t3.lineHeight = 15;
	this.t3.lineWidth = 260;
	this.t3.parent = this;
	this.t3.setTransform(13,276);

	this.t2 = new cjs.Text("", "12px 'Arial'", "#333333");
	this.t2.name = "t2";
	this.t2.lineHeight = 15;
	this.t2.lineWidth = 260;
	this.t2.parent = this;
	this.t2.setTransform(13,260);

	this.t1 = new cjs.Text("", "12px 'Arial'", "#333333");
	this.t1.name = "t1";
	this.t1.lineHeight = 15;
	this.t1.lineWidth = 260;
	this.t1.parent = this;
	this.t1.setTransform(13,244);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4}]},329).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4}]},3).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4}]},4).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4}]},37).to({state:[]},4).wait(86));

	// window
	this.idol_window = new lib.window_container();
	this.idol_window.name = "idol_window";
	this.idol_window.parent = this;
	this.idol_window.setTransform(120.3,165.35);
	this.idol_window._off = true;

	this.timeline.addTween(cjs.Tween.get(this.idol_window).wait(329).to({_off:false},0).to({_off:true},7).wait(34).to({_off:false},0).to({_off:true},7).wait(86));

	// effect
	this.instance_8 = new lib.good_effect();
	this.instance_8.parent = this;
	this.instance_8.setTransform(68,106.5,1.3383,1.3383);

	this.cn = new lib.concent_wrapper();
	this.cn.name = "cn";
	this.cn.parent = this;
	this.cn.setTransform(119.5,104.9,1,1,0,0,0,-0.5,-0.1);

	this.instance_9 = new lib.powder_paper_container();
	this.instance_9.parent = this;
	this.instance_9.setTransform(119.9,-19.45);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},141).to({state:[]},12).to({state:[{t:this.cn}]},131).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_9}]},84).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).wait(69));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(293).to({_off:false},0).wait(85).to({regX:-3.6,regY:397,x:116.3,y:377.55,alpha:0.9956},0).wait(1).to({alpha:0.9814},0).wait(1).to({alpha:0.9559},0).wait(1).to({alpha:0.9172},0).wait(1).to({alpha:0.8632},0).wait(1).to({alpha:0.7917},0).wait(1).to({alpha:0.7016},0).wait(1).to({alpha:0.5935},0).wait(1).to({alpha:0.4729},0).wait(1).to({alpha:0.3501},0).wait(1).to({alpha:0.2379},0).wait(1).to({alpha:0.1458},0).wait(1).to({alpha:0.0775},0).wait(1).to({alpha:0.0324},0).wait(1).to({alpha:0.0076},0).wait(1).to({regX:0,regY:0,x:119.9,y:-19.45,alpha:0},0).to({_off:true},1).wait(69));

	// stage
	this.bg_silhouette2 = new lib.bg_silhouette_1();
	this.bg_silhouette2.name = "bg_silhouette2";
	this.bg_silhouette2.parent = this;
	this.bg_silhouette2.setTransform(119.65,215.4,1.3286,1.3286,0,0,0,-0.7,0.6);
	this.bg_silhouette2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bg_silhouette2).wait(377).to({_off:false},0).wait(1).to({regX:0,regY:-45.7,x:120.6,y:153.9,alpha:0.9961},0).wait(1).to({alpha:0.9837},0).wait(1).to({alpha:0.9614},0).wait(1).to({alpha:0.9276},0).wait(1).to({alpha:0.8808},0).wait(1).to({alpha:0.8191},0).wait(1).to({alpha:0.741},0).wait(1).to({alpha:0.6464},0).wait(1).to({alpha:0.5378},0).wait(1).to({alpha:0.4219},0).wait(1).to({alpha:0.3087},0).wait(1).to({alpha:0.2084},0).wait(1).to({alpha:0.1276},0).wait(1).to({alpha:0.068},0).wait(1).to({alpha:0.0285},0).wait(1).to({alpha:0.0067},0).wait(1).to({regX:-0.7,regY:0.6,x:119.65,y:215.4,alpha:0},0).to({_off:true},1).wait(68));

	// news
	this.news_flas = new lib.news_flas_1();
	this.news_flas.name = "news_flas";
	this.news_flas.parent = this;
	this.news_flas.setTransform(3,3);
	this.news_flas._off = true;

	this.timeline.addTween(cjs.Tween.get(this.news_flas).wait(107).to({_off:false},0).wait(168).to({regX:72,regY:10,scaleX:1.0023,scaleY:1.0023,x:74.75,y:12.7},0).wait(1).to({scaleX:1.0093,scaleY:1.0093,x:74.15,y:11.9},0).wait(1).to({scaleX:1.0213,scaleY:1.0213,x:73.15,y:10.45},0).wait(1).to({scaleX:1.0387,scaleY:1.0387,x:71.6,y:8.45},0).wait(1).to({scaleX:1.0618,scaleY:1.0618,x:69.5,y:5.65},0).wait(1).to({scaleX:1.0913,scaleY:1.0913,x:66.85,y:2.15},0).wait(1).to({scaleX:1.1277,scaleY:1.1277,x:63.6,y:-2.2},0).wait(1).to({scaleX:1.1717,scaleY:1.1717,x:59.65,y:-7.45},0).wait(1).to({scaleX:1.2244,scaleY:1.2244,x:54.9,y:-13.75},0).wait(1).to({scaleX:1.287,scaleY:1.287,x:49.3,y:-21.2},0).wait(1).to({scaleX:1.3612,scaleY:1.3612,x:42.65,y:-30.05},0).wait(1).to({scaleX:1.4494,scaleY:1.4494,x:34.75,y:-40.55},0).wait(1).to({scaleX:1.5551,scaleY:1.5551,x:25.3,y:-53.15},0).wait(1).to({scaleX:1.684,scaleY:1.684,x:13.8,y:-68.5},0).wait(1).to({scaleX:1.8462,scaleY:1.8462,x:-0.75,y:-87.9},0).wait(1).to({scaleX:2.0647,scaleY:2.0647,x:-20.35,y:-113.95},0).wait(1).to({regX:0,regY:0,scaleX:2.4236,scaleY:2.4236,x:-227,y:-181},0).to({_off:true},1).wait(96).to({_off:false,scaleX:1,scaleY:1,x:3,y:3},0).wait(75));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_122 = new cjs.Graphics().p("ApXR+IAAkOISvAAIAAEOg");
	var mask_graphics_123 = new cjs.Graphics().p("ApXR+IAAkOISvAAIAAEOg");
	var mask_graphics_124 = new cjs.Graphics().p("ApXR+IAAkOISvAAIAAEOg");
	var mask_graphics_125 = new cjs.Graphics().p("ApXR+IAAkOISvAAIAAEOg");
	var mask_graphics_126 = new cjs.Graphics().p("ApXR+IAAkOISvAAIAAEOg");
	var mask_graphics_127 = new cjs.Graphics().p("ApXR+IAAkOISvAAIAAEOg");
	var mask_graphics_128 = new cjs.Graphics().p("ApXR+IAAkOISvAAIAAEOg");
	var mask_graphics_129 = new cjs.Graphics().p("ApXR+IAAkOISvAAIAAEOg");
	var mask_graphics_130 = new cjs.Graphics().p("ApXR+IAAkOISvAAIAAEOg");
	var mask_graphics_131 = new cjs.Graphics().p("ApXR+IAAkOISvAAIAAEOg");
	var mask_graphics_132 = new cjs.Graphics().p("ApXR+IAAkOISvAAIAAEOg");
	var mask_graphics_133 = new cjs.Graphics().p("ApXR+IAAkOISvAAIAAEOg");
	var mask_graphics_134 = new cjs.Graphics().p("ApXR+IAAkOISvAAIAAEOg");
	var mask_graphics_135 = new cjs.Graphics().p("ApXR+IAAkOISvAAIAAEOg");
	var mask_graphics_136 = new cjs.Graphics().p("ApMR+IAAkOISvAAIAAEOg");
	var mask_graphics_137 = new cjs.Graphics().p("ApIR+IAAkOISvAAIAAEOg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(122).to({graphics:mask_graphics_122,x:-47,y:115}).wait(1).to({graphics:mask_graphics_123,x:-46.401,y:115}).wait(1).to({graphics:mask_graphics_124,x:-44.4566,y:115}).wait(1).to({graphics:mask_graphics_125,x:-40.909,y:115}).wait(1).to({graphics:mask_graphics_126,x:-35.4529,y:115}).wait(1).to({graphics:mask_graphics_127,x:-27.7633,y:115}).wait(1).to({graphics:mask_graphics_128,x:-17.5921,y:115}).wait(1).to({graphics:mask_graphics_129,x:-4.9992,y:115}).wait(1).to({graphics:mask_graphics_130,x:9.2956,y:115}).wait(1).to({graphics:mask_graphics_131,x:23.7875,y:115}).wait(1).to({graphics:mask_graphics_132,x:36.7612,y:115}).wait(1).to({graphics:mask_graphics_133,x:47.1312,y:115}).wait(1).to({graphics:mask_graphics_134,x:54.6428,y:115}).wait(1).to({graphics:mask_graphics_135,x:59.5319,y:115}).wait(1).to({graphics:mask_graphics_136,x:61.0949,y:115}).wait(1).to({graphics:mask_graphics_137,x:61.5,y:115}).wait(1).to({graphics:null,x:0,y:0}).wait(325));

	// name_plate
	this.instance_10 = new lib.name_plate_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(63.1,226.2,1,1,0,0,0,60.1,23.2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(122).to({_off:false},0).to({alpha:1},4).wait(1).to({regX:60,regY:13.5,x:63,y:216.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:60.1,regY:23.2,x:63.1,y:226.2},0).wait(137).to({startPosition:0},0).wait(1).to({regX:60,regY:13.5,scaleX:1.0019,scaleY:1.0019,x:62.65,y:216.6},0).wait(1).to({scaleX:1.0078,scaleY:1.0078,x:61.75,y:216.8},0).wait(1).to({scaleX:1.0179,scaleY:1.0179,x:60.25,y:217.3},0).wait(1).to({scaleX:1.0326,scaleY:1.0326,x:57.95,y:217.95},0).wait(1).to({scaleX:1.0521,scaleY:1.0521,x:54.95,y:218.8},0).wait(1).to({scaleX:1.077,scaleY:1.077,x:51.05,y:219.95},0).wait(1).to({scaleX:1.1076,scaleY:1.1076,x:46.3,y:221.3},0).wait(1).to({scaleX:1.1447,scaleY:1.1447,x:40.6,y:223},0).wait(1).to({scaleX:1.1892,scaleY:1.1892,x:33.7,y:225},0).wait(1).to({scaleX:1.2419,scaleY:1.2419,x:25.5,y:227.35},0).wait(1).to({scaleX:1.3045,scaleY:1.3045,x:15.8,y:230.15},0).wait(1).to({scaleX:1.3788,scaleY:1.3788,x:4.3,y:233.5},0).wait(1).to({scaleX:1.4679,scaleY:1.4679,x:-9.6,y:237.5},0).wait(1).to({scaleX:1.5765,scaleY:1.5765,x:-26.4,y:242.4},0).wait(1).to({scaleX:1.7133,scaleY:1.7133,x:-47.65,y:248.55},0).wait(1).to({scaleX:1.8975,scaleY:1.8975,x:-76.2,y:256.8},0).wait(1).to({regX:60.1,regY:23.2,scaleX:2.2,scaleY:2.2,x:-122.95,y:291.8},0).to({_off:true},1).wait(171));

	// table
	this.table = new lib.table_1();
	this.table.name = "table";
	this.table.parent = this;
	this.table.setTransform(0,311.55);

	this.timeline.addTween(cjs.Tween.get(this.table).wait(275).to({regX:136.3,regY:-28.5,scaleX:1.0019,scaleY:1.0019,x:136.2,y:283.25},0).wait(1).to({scaleX:1.0078,scaleY:1.0078,x:135.9,y:283.9},0).wait(1).to({scaleX:1.0179,scaleY:1.0179,x:135.4,y:285},0).wait(1).to({scaleX:1.0326,scaleY:1.0326,x:134.65,y:286.6},0).wait(1).to({scaleX:1.0521,scaleY:1.0521,x:133.65,y:288.75},0).wait(1).to({scaleX:1.077,scaleY:1.077,x:132.4,y:291.5},0).wait(1).to({scaleX:1.1076,scaleY:1.1076,x:130.8,y:294.85},0).wait(1).to({scaleX:1.1447,scaleY:1.1447,x:128.9,y:298.9},0).wait(1).to({scaleX:1.1892,scaleY:1.1892,x:126.65,y:303.8},0).wait(1).to({scaleX:1.2419,scaleY:1.2419,x:123.9,y:309.6},0).wait(1).to({scaleX:1.3045,scaleY:1.3045,x:120.7,y:316.45},0).wait(1).to({scaleX:1.3788,scaleY:1.3788,x:116.9,y:324.65},0).wait(1).to({scaleX:1.4679,scaleY:1.4679,x:112.3,y:334.45},0).wait(1).to({scaleX:1.5765,scaleY:1.5765,x:106.75,y:346.4},0).wait(1).to({scaleX:1.7133,scaleY:1.7133,x:99.75,y:361.4},0).wait(1).to({scaleX:1.8975,scaleY:1.8975,x:90.25,y:381.65},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:2.2,scaleY:2.2,x:-225.2,y:477.8},0).to({_off:true},1).wait(85).to({_off:false,regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:311.55},0).wait(86));

	// effect
	this.instance_11 = new lib.select_container();
	this.instance_11.parent = this;
	this.instance_11.setTransform(53.45,104.45,1.4,1.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(423).to({_off:false},0).wait(40));

	// copy
	this.instance_12 = new lib.copy("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(113.2,203.75);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(396).to({_off:false},0).wait(1).to({regX:-1.5,regY:0.5,x:111.85,y:204.25,alpha:0.0059},0).wait(1).to({x:112.4,alpha:0.025},0).wait(1).to({x:113.4,alpha:0.0594},0).wait(1).to({x:114.9,alpha:0.1115},0).wait(1).to({x:117,alpha:0.1838},0).wait(1).to({x:119.75,alpha:0.2781},0).wait(1).to({x:123.1,alpha:0.3939},0).wait(1).to({x:126.9,alpha:0.5256},0).wait(1).to({x:130.85,alpha:0.6613},0).wait(1).to({x:134.45,alpha:0.7847},0).wait(1).to({x:137.3,alpha:0.8829},0).wait(1).to({x:139.25,alpha:0.9506},0).wait(1).to({x:140.35,alpha:0.9884},0).wait(1).to({regX:0,regY:0,x:142.2,y:203.75,alpha:1},0).wait(53));

	// copy_base
	this.instance_13 = new lib.copy_base();
	this.instance_13.parent = this;
	this.instance_13.setTransform(321,204,1,1,0,0,0,100,24);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(394).to({_off:false},0).wait(1).to({x:320.15,alpha:0.0052},0).wait(1).to({x:317.45,alpha:0.0216},0).wait(1).to({x:312.6,alpha:0.0512},0).wait(1).to({x:305.3,alpha:0.0957},0).wait(1).to({x:295.2,alpha:0.1573},0).wait(1).to({x:282,alpha:0.2377},0).wait(1).to({x:265.65,alpha:0.3374},0).wait(1).to({x:246.55,alpha:0.454},0).wait(1).to({x:225.8,alpha:0.5803},0).wait(1).to({x:205.45,alpha:0.7046},0).wait(1).to({x:187.5,alpha:0.8137},0).wait(1).to({x:173.55,alpha:0.899},0).wait(1).to({x:164,alpha:0.9573},0).wait(1).to({x:158.65,alpha:0.9899},0).wait(1).to({x:157,alpha:1},0).wait(54));

	// chihiro
	this.ch = new lib.character3_container();
	this.ch.name = "ch";
	this.ch.parent = this;
	this.ch.setTransform(50.8,267.2,0.8,0.8,0,0,0,0,-0.1);
	this.ch._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ch).wait(96).to({_off:false},0).wait(179).to({regX:29.9,regY:-130.4,scaleX:0.8022,scaleY:0.8022,x:74.5,y:162.95},0).wait(1).to({scaleX:0.8091,scaleY:0.8091,x:73.8},0).wait(1).to({scaleX:0.8209,scaleY:0.8209,x:72.65,y:162.9},0).wait(1).to({scaleX:0.838,scaleY:0.838,x:71},0).wait(1).to({scaleX:0.8608,scaleY:0.8608,x:68.8,y:162.85},0).wait(1).to({scaleX:0.8898,scaleY:0.8898,x:66,y:162.8},0).wait(1).to({scaleX:0.9255,scaleY:0.9255,x:62.5,y:162.7},0).wait(1).to({scaleX:0.9689,scaleY:0.9689,x:58.3,y:162.65},0).wait(1).to({scaleX:1.0207,scaleY:1.0207,x:53.3,y:162.55},0).wait(1).to({scaleX:1.0822,scaleY:1.0822,x:47.35,y:162.45},0).wait(1).to({scaleX:1.1552,scaleY:1.1552,x:40.3,y:162.3},0).wait(1).to({scaleX:1.2419,scaleY:1.2419,x:31.95,y:162.15},0).wait(1).to({scaleX:1.3459,scaleY:1.3459,x:21.9,y:161.95},0).wait(1).to({scaleX:1.4726,scaleY:1.4726,x:9.6,y:161.7},0).wait(1).to({scaleX:1.6322,scaleY:1.6322,x:-5.85,y:161.4},0).wait(1).to({scaleX:1.847,scaleY:1.847,x:-26.65,y:161},0).wait(1).to({regX:0,regY:-0.1,scaleX:2.2,scaleY:2.2,x:-126.65,y:447.05},0).to({x:-216.65},1,cjs.Ease.get(1)).wait(85).to({scaleX:0.8,scaleY:0.8,x:50.8,y:267.2},0).wait(86));

	// _
	this.instance_14 = new lib.question();
	this.instance_14.parent = this;
	this.instance_14.setTransform(155,106.55);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(377).to({_off:false},0).wait(86));

	// transition
	this.instance_15 = new lib.transition_container("synched",0,false);
	this.instance_15.parent = this;
	this.instance_15.setTransform(155,109,1,1,0,0,0,77,47);

	this.instance_16 = new lib.transition_container2("synched",0,false);
	this.instance_16.parent = this;
	this.instance_16.setTransform(155,109,1,1,0,0,0,77,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},190).to({state:[{t:this.instance_16}]},41).wait(232));

	// glitter
	this.instance_17 = new lib.efa_キラキラボードカード用();
	this.instance_17.parent = this;
	this.instance_17.setTransform(160,110);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(96).to({_off:false},0).to({_off:true},200).wait(81).to({_off:false},0).wait(1).to({regX:3.2,regY:-4,x:163.2,y:106},0).wait(15).to({regX:0,regY:0,x:160,y:110},0).wait(70));

	// copy
	this.instance_18 = new lib.copy_open();
	this.instance_18.parent = this;
	this.instance_18.setTransform(223.2,163.5);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(246).to({_off:false},0).to({alpha:1},12).to({_off:true},16).wait(189));

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(0.3,1,1).p("Ai+HbIF9u0");
	this.shape.setTransform(149.875,109.05);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(377).to({_off:false},0).wait(86));

	// mask2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_377 = new cjs.Graphics().p("Ah4nXQJSgCARABQALAAAFAMQACAGAAAGQgCNqgBAaQAAAIgGAGQgGAGgHAAIvjABg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(377).to({graphics:mask_1_graphics_377,x:181.625,y:109.0107}).wait(86));

	// idol2
	this.silhouette = new lib.silhouette2();
	this.silhouette.name = "silhouette";
	this.silhouette.parent = this;
	this.silhouette.setTransform(193.55,116.8,0.7,0.6999,0,0,0,120,119.8);
	this.silhouette._off = true;

	var maskedShapeInstanceList = [this.silhouette];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.silhouette).wait(377).to({_off:false},0).wait(86));

	// mask1 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_377 = new cjs.Graphics().p("AmpHWQgTAAgGgLIgEgLIgCt4QAAgYAPgGQAGgDAHACIN1AAImAOwg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(377).to({graphics:mask_2_graphics_377,x:123.35,y:108.975}).wait(86));

	// idol1
	this.silhouette_1 = new lib.silhouette1();
	this.silhouette_1.name = "silhouette_1";
	this.silhouette_1.parent = this;
	this.silhouette_1.setTransform(117.8,116.95,0.7,0.6999,0,0,0,120,120);
	this.silhouette_1._off = true;

	var maskedShapeInstanceList = [this.silhouette_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.silhouette_1).wait(377).to({_off:false},0).wait(86));

	// mask_idn (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_231 = new cjs.Graphics().p("AldifIXHAAQAIAAAHAEQAHAEAEAHQAEAHAAAIIAANvQAAAIgEAHQgEAHgHAEQgHAEgIAAI3HAAQgNAAgIgJQgJgIAAgNIAAtvQAAgIAEgHQAEgHAHgEQAHgEAIAAg");
	var mask_3_graphics_274 = new cjs.Graphics().p("AldifIXHAAQAIAAAHAEQAHAEAEAHQAEAHAAAIIAANvQAAAIgEAHQgEAHgHAEQgHAEgIAAI3HAAQgNAAgIgJQgJgIAAgNIAAtvQAAgIAEgHQAEgHAHgEQAHgEAIAAg");
	var mask_3_graphics_275 = new cjs.Graphics().p("AleihIXIAAQAIAAAHAEQAHAEAEAHQAEAGAAAJIAANyQAAAJgEAGQgEAHgHAEQgHAEgIAAI3IAAQgNAAgJgJQgIgIAAgNIAAtyQAAgJAEgGQAEgHAHgEQAGgEAJAAg");
	var mask_3_graphics_276 = new cjs.Graphics().p("AliioIXMAAQAJAAAGAEQAHAEAEAHQAEAHAAAIIAAN9QAAAIgEAHQgEAHgHAEQgGAEgJAAI3MAAQgNAAgJgJQgIgIAAgNIAAt9QAAgIAEgHQAEgHAHgEQAGgEAJAAg");
	var mask_3_graphics_277 = new cjs.Graphics().p("Alpi0IXTAAQAJAAAHAEQAGAFAEAHQAFAHAAAIIAAONQAAAJgFAHQgEAHgGAEQgHAEgJABI3TAAQgNgBgIgJQgJgIAAgOIAAuNQAAgIAEgHQAEgHAHgFQAHgEAIAAg");
	var mask_3_graphics_278 = new cjs.Graphics().p("AlzjFIXeAAQAIAAAHAFQAHAEAEAHQAEAHAAAJIAAOmQAAAJgEAHQgEAHgHAFQgHAEgIAAI3eAAQgNAAgIgJQgJgJAAgOIAAumQAAgJAEgHQAEgHAHgEQAHgFAIAAg");
	var mask_3_graphics_279 = new cjs.Graphics().p("AmAjbIXrAAQAJAAAHAEQAGAFAFAHQAEAHAAAKIAAPGQAAAKgEAHQgFAIgGAEQgHAEgJAAI3rAAQgNAAgJgJQgIgKgBgOIAAvGQAAgKAFgHQAEgHAHgFQAHgEAIAAg");
	var mask_3_graphics_280 = new cjs.Graphics().p("AmQj4IX7AAQAJAAAHAFQAHAEAEAIQAEAIABAJIAAPxQgBAKgEAHQgEAIgHAFQgHAEgJAAI37AAQgOAAgIgKQgJgJgBgPIAAvxQABgJAEgIQAEgIAHgEQAHgFAJAAg");
	var mask_3_graphics_281 = new cjs.Graphics().p("AmlkcIYRAAQAJAAAHAFQAHAFAEAIQAEAIABALIAAQkQgBAKgEAIQgEAIgHAFQgHAFgJAAI4RAAQgNAAgJgLQgJgKgBgPIAAwkQABgLAEgIQAEgIAHgFQAHgFAJAAg");
	var mask_3_graphics_282 = new cjs.Graphics().p("Am+lHIYrAAQAJAAAHAGQAHAFAEAIQAFAJAAALIAARjQAAAKgFAJQgEAJgHAFQgHAFgJAAI4rAAQgNgBgKgKQgJgLAAgQIAAxjQAAgLAEgJQAFgIAHgFQAHgGAJAAg");
	var mask_3_graphics_283 = new cjs.Graphics().p("Ancl6IZKAAQAJAAAHAFQAHAGAFAJQAEAJAAAMIAASuQAAALgEAJQgFAJgHAGQgHAFgJAAI5KAAQgNAAgKgMQgJgLAAgRIAAyuQAAgMAEgJQAFgJAHgGQAHgFAJAAg");
	var mask_3_graphics_284 = new cjs.Graphics().p("An/m3IZuAAQAJAAAIAGQAHAGAEAKQAFAJAAANIAAUGQAAANgFAJQgEAKgHAGQgIAGgJAAI5uAAQgOAAgJgNQgKgMAAgTIAA0GQAAgNAEgJQAFgKAHgGQAIgGAJAAg");
	var mask_3_graphics_285 = new cjs.Graphics().p("AopoAIaZAAQAJAAAIAHQAIAGAEALQAFALAAANIAAVwQAAANgFALQgEALgIAGQgIAGgJAAI6ZAAQgOAAgKgOQgKgNAAgUIAA1wQAAgNAFgLQAEgLAIgGQAIgHAJAAg");
	var mask_3_graphics_286 = new cjs.Graphics().p("ApapWIbLAAQAKAAAIAHQAIAHAFAMQAEAMABAOIAAXtQgBAPgEALQgFAMgIAHQgIAHgKAAI7LAAQgPAAgKgPQgKgPgBgWIAA3tQAAgOAFgMQAFgMAIgHQAIgHAKAAg");
	var mask_3_graphics_287 = new cjs.Graphics().p("AqWq9IcJAAQAKAAAIAIQAJAHAFANQAEANABAQIAAaDQgBAQgEANQgFANgJAHQgIAIgKAAI8JAAQgQAAgKgQQgKgQgBgZIAA6DQAAgQAFgNQAFgNAIgHQAJgIAKAAg");
	var mask_3_graphics_288 = new cjs.Graphics().p("Arfs7IdUAAQAIAAAHAFQAHAFAFAJQAFAIADAMQADALAAANIAAc7QAAANgDALQgDAMgFAIQgFAJgHAFQgHAFgIAAI9UAAQgQgBgLgSQgKgRgBgbIAA87QAAgNADgLQADgMAFgIQAGgJAGgFQAHgFAIAAg");
	var mask_3_graphics_289 = new cjs.Graphics().p("As6vZIeyAAQAIAAAHAFQAIAGAFAKQAGAJADANQADANAAAPMAAAAghQAAAPgDAMQgDANgGAKQgFAKgIAFQgHAGgIAAI+yAAQgRgBgMgUQgLgUAAgeMAAAgghQAAgPADgNQADgNAFgJQAGgKAHgGQAHgFAJAAg");
	var mask_3_graphics_290 = new cjs.Graphics().p("Au2yvMAgxAAAQAJABAIAGQAIAGAFALQAGAMAEAOQADAPAAARMAAAAlXQAAARgDAPQgEAPgGALQgFALgIAGQgIAHgJAAMggxAAAQgSgBgMgXQgMgXAAgjMAAAglXQAAgRADgPQAEgOAFgMQAGgLAIgGQAIgGAIgBg");
	var mask_3_graphics_291 = new cjs.Graphics().p("AyA4NMAkBAAAQAKAAAIAIQAJAHAGAOQAHAOADARQAEASAAAVMAAAAtVQAAAVgEASQgDARgHAOQgGAOgJAHQgIAIgKAAMgkBAAAQgUgBgNgcQgNgcgBgqMAAAgtVQAAgVAEgSQAEgRAGgOQAGgOAJgHQAIgIAKAAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(231).to({graphics:mask_3_graphics_231,x:116,y:78}).wait(43).to({graphics:mask_3_graphics_274,x:116,y:78}).wait(1).to({graphics:mask_3_graphics_275,x:116.0064,y:78.1228}).wait(1).to({graphics:mask_3_graphics_276,x:116.026,y:78.501}).wait(1).to({graphics:mask_3_graphics_277,x:116.0596,y:79.1506}).wait(1).to({graphics:mask_3_graphics_278,x:116.1084,y:80.0908}).wait(1).to({graphics:mask_3_graphics_279,x:116.1734,y:81.3442}).wait(1).to({graphics:mask_3_graphics_280,x:116.256,y:82.9379}).wait(1).to({graphics:mask_3_graphics_281,x:116.358,y:84.9053}).wait(1).to({graphics:mask_3_graphics_282,x:116.4815,y:87.2877}).wait(1).to({graphics:mask_3_graphics_283,x:116.6292,y:90.1376}).wait(1).to({graphics:mask_3_graphics_284,x:116.8047,y:93.5231}).wait(1).to({graphics:mask_3_graphics_285,x:117.0128,y:97.5363}).wait(1).to({graphics:mask_3_graphics_286,x:117.26,y:102.3058}).wait(1).to({graphics:mask_3_graphics_287,x:117.5564,y:108.0227}).wait(1).to({graphics:mask_3_graphics_288,x:117.9178,y:114.9932}).wait(1).to({graphics:mask_3_graphics_289,x:118.3728,y:123.7705}).wait(1).to({graphics:mask_3_graphics_290,x:118.9854,y:135.5863}).wait(1).to({graphics:mask_3_graphics_291,x:119.9918,y:154.9995}).wait(1).to({graphics:null,x:0,y:0}).wait(171));

	// black
	this.instance_19 = new lib.bg_black();
	this.instance_19.parent = this;
	this.instance_19.setTransform(154.75,112.15,0.35,0.35,0,0,0,-0.7,0.5);
	this.instance_19.alpha = 0.5;
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(239).to({_off:false},0).to({_off:true},7).wait(217));

	// white
	this.instance_20 = new lib.bg_white();
	this.instance_20.parent = this;
	this.instance_20.setTransform(154.75,112.15,0.35,0.35,0,0,0,-0.7,0.5);
	this.instance_20.alpha = 0.5;
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(246).to({_off:false},0).to({alpha:0},12).wait(17).to({regX:0,regY:0,scaleX:0.351,scaleY:0.351,x:154.9674,y:112.0956,alpha:0.0009},0).wait(1).to({scaleX:0.354,scaleY:0.354,x:154.8677,y:112.388,alpha:0.0037},0).wait(1).to({scaleX:0.3591,scaleY:0.3591,x:154.6976,y:112.8864,alpha:0.0084},0).wait(1).to({scaleX:0.3664,scaleY:0.3664,x:154.4538,y:113.6014,alpha:0.0151},0).wait(1).to({scaleX:0.376,scaleY:0.376,x:154.132,y:114.5447,alpha:0.024},0).wait(1).to({scaleX:0.3881,scaleY:0.3881,x:153.7276,y:115.7301,alpha:0.0351},0).wait(1).to({scaleX:0.4029,scaleY:0.4029,x:153.2354,y:117.173,alpha:0.0487},0).wait(1).to({scaleX:0.4204,scaleY:0.4204,x:152.6492,y:118.8917,alpha:0.0649},0).wait(1).to({scaleX:0.4411,scaleY:0.4411,x:151.9616,y:120.9076,alpha:0.0839},0).wait(1).to({scaleX:0.465,scaleY:0.465,x:151.164,y:123.2457,alpha:0.1059},0).wait(1).to({scaleX:0.4925,scaleY:0.4925,x:150.2462,y:125.9365,alpha:0.1313},0).wait(1).to({scaleX:0.5239,scaleY:0.5239,x:149.1954,y:129.0168,alpha:0.1603},0).wait(1).to({scaleX:0.5599,scaleY:0.5599,x:147.9962,y:132.5325,alpha:0.1934},0).wait(1).to({scaleX:0.6009,scaleY:0.6009,x:146.6287,y:136.5414,alpha:0.2312},0).wait(1).to({scaleX:0.6477,scaleY:0.6477,x:145.0674,y:141.1187,alpha:0.2743},0).wait(1).to({scaleX:0.7013,scaleY:0.7013,x:143.2777,y:146.3652,alpha:0.3238},0).wait(1).to({scaleX:0.7632,scaleY:0.7632,x:141.2119,y:152.4215,alpha:0.3808},0).wait(1).to({scaleX:0.8355,scaleY:0.8355,x:138.7992,y:159.4947,alpha:0.4474},0).wait(1).to({scaleX:0.9216,scaleY:0.9216,x:135.9275,y:167.9134,alpha:0.5268},0).wait(1).to({scaleX:1.0274,scaleY:1.0274,x:132.3975,y:178.2622,alpha:0.6242},0).wait(1).to({scaleX:1.1658,scaleY:1.1658,x:127.7789,y:191.8019,alpha:0.7518},0).wait(1).to({regX:-0.8,regY:0.6,scaleX:1.38,scaleY:1.38,x:119.6,y:213.4,alpha:0.9492},0).wait(1).to({regX:0,regY:0,scaleX:1.3797,scaleY:1.3797,x:120.6997,y:212.5605,alpha:0.9443},0).wait(1).to({scaleX:1.3789,scaleY:1.3789,x:120.6988,y:212.5938,alpha:0.9288},0).wait(1).to({scaleX:1.3774,scaleY:1.3774,x:120.6972,y:212.6533,alpha:0.901},0).wait(1).to({scaleX:1.3752,scaleY:1.3752,x:120.6947,y:212.7421,alpha:0.8596},0).wait(1).to({scaleX:1.3721,scaleY:1.3721,x:120.6914,y:212.8635,alpha:0.8029},0).wait(1).to({scaleX:1.3682,scaleY:1.3682,x:120.6871,y:213.0191,alpha:0.7303},0).wait(1).to({scaleX:1.3635,scaleY:1.3635,x:120.6819,y:213.2075,alpha:0.6424},0).wait(1).to({scaleX:1.3581,scaleY:1.3581,x:120.676,y:213.4214,alpha:0.5426},0).wait(1).to({scaleX:1.3524,scaleY:1.3524,x:120.6698,y:213.6461,alpha:0.4378},0).wait(1).to({scaleX:1.347,scaleY:1.347,x:120.6639,y:213.8611,alpha:0.3375},0).wait(1).to({scaleX:1.3423,scaleY:1.3423,x:120.6588,y:214.0474,alpha:0.2505},0).wait(1).to({scaleX:1.3387,scaleY:1.3387,x:120.6548,y:214.1925,alpha:0.1828},0).wait(1).to({scaleX:1.3362,scaleY:1.3362,x:120.652,y:214.2925,alpha:0.1362},0).wait(1).to({scaleX:1.3347,scaleY:1.3347,x:120.6505,y:214.349,alpha:0.1098},0).wait(1).to({regX:-0.8,regY:0.7,scaleX:1.3343,scaleY:1.3343,x:119.6,y:215.25,alpha:0.1016},0).wait(1).to({regX:0,regY:0,scaleX:1.3325,scaleY:1.3325,x:120.65,y:214.3572,alpha:0.077},0).wait(1).to({scaleX:1.3314,scaleY:1.3314,y:214.3897,alpha:0.063},0).wait(1).to({regX:-0.8,regY:0.7,scaleX:1.3311,scaleY:1.3311,x:119.6,y:215.35,alpha:0.0586},0).wait(1).to({regX:0,regY:0,scaleX:1.3297,scaleY:1.3297,x:120.6594,y:214.4383,alpha:0.0252},0).wait(1).to({scaleX:1.3289,scaleY:1.3289,x:120.6647,y:214.4602,alpha:0.0061},0).wait(1).to({regX:-0.7,regY:0.6,scaleX:1.3286,scaleY:1.3286,x:119.65,y:215.4,alpha:0},0).to({_off:true},60).wait(86));

	// stage
	this.bg_silhouette = new lib.bg_silhouette_1();
	this.bg_silhouette.name = "bg_silhouette";
	this.bg_silhouette.parent = this;
	this.bg_silhouette.setTransform(154.75,112.15,0.35,0.35,0,0,0,-0.7,0.5);
	this.bg_silhouette._off = true;

	var maskedShapeInstanceList = [this.bg_silhouette];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.bg_silhouette).wait(239).to({_off:false},0).wait(36).to({regX:0,regY:-45.7,scaleX:0.351,scaleY:0.351,x:154.95,y:96},0).wait(1).to({scaleX:0.354,scaleY:0.354,x:154.85,y:96.15},0).wait(1).to({scaleX:0.3591,scaleY:0.3591,x:154.65,y:96.45},0).wait(1).to({scaleX:0.3664,scaleY:0.3664,x:154.45,y:96.85},0).wait(1).to({scaleX:0.376,scaleY:0.376,x:154.1,y:97.3},0).wait(1).to({scaleX:0.3881,scaleY:0.3881,x:153.7,y:97.95},0).wait(1).to({scaleX:0.4029,scaleY:0.4029,x:153.2,y:98.75},0).wait(1).to({scaleX:0.4204,scaleY:0.4204,x:152.6,y:99.65},0).wait(1).to({scaleX:0.4411,scaleY:0.4411,x:151.95,y:100.75},0).wait(1).to({scaleX:0.465,scaleY:0.465,x:151.15,y:101.95},0).wait(1).to({scaleX:0.4925,scaleY:0.4925,x:150.2,y:103.4},0).wait(1).to({scaleX:0.5239,scaleY:0.5239,x:149.15,y:105.05},0).wait(1).to({scaleX:0.5599,scaleY:0.5599,x:147.95,y:106.9},0).wait(1).to({scaleX:0.6009,scaleY:0.6009,x:146.6,y:109.05},0).wait(1).to({scaleX:0.6477,scaleY:0.6477,x:145.05,y:111.5},0).wait(1).to({scaleX:0.7013,scaleY:0.7013,x:143.25,y:114.3},0).wait(1).to({scaleX:0.7632,scaleY:0.7632,x:141.2,y:117.5},0).wait(1).to({scaleX:0.8355,scaleY:0.8355,x:138.75,y:121.25},0).wait(1).to({scaleX:0.9216,scaleY:0.9216,x:135.9,y:125.8},0).wait(1).to({scaleX:1.0274,scaleY:1.0274,x:132.35,y:131.3},0).wait(1).to({scaleX:1.1658,scaleY:1.1658,x:127.75,y:138.5},0).wait(1).to({regX:-0.8,regY:0.6,scaleX:1.38,scaleY:1.38,x:119.6,y:213.4},0).wait(1).to({regX:0,regY:-45.7,scaleX:1.3797,scaleY:1.3797,x:120.65,y:149.5},0).wait(1).to({scaleX:1.3789,scaleY:1.3789,y:149.55},0).wait(1).to({scaleX:1.3774,scaleY:1.3774,y:149.7},0).wait(1).to({scaleX:1.3752,scaleY:1.3752,y:149.85},0).wait(1).to({scaleX:1.3721,scaleY:1.3721,y:150.15},0).wait(1).to({scaleX:1.3682,scaleY:1.3682,y:150.45},0).wait(1).to({scaleX:1.3635,scaleY:1.3635,y:150.9},0).wait(1).to({scaleX:1.3581,scaleY:1.3581,y:151.35},0).wait(1).to({scaleX:1.3524,scaleY:1.3524,y:151.8},0).wait(1).to({scaleX:1.347,scaleY:1.347,y:152.3},0).wait(1).to({scaleX:1.3423,scaleY:1.3423,y:152.65},0).wait(1).to({scaleX:1.3387,scaleY:1.3387,y:152.95},0).wait(1).to({scaleX:1.3362,scaleY:1.3362,y:153.2},0).wait(1).to({scaleX:1.3347,scaleY:1.3347,y:153.3},0).wait(1).to({regX:-0.8,regY:0.7,scaleX:1.3343,scaleY:1.3343,x:119.6,y:215.25},0).wait(1).to({regX:0,regY:-45.7,scaleX:1.3325,scaleY:1.3325,x:120.65,y:153.45},0).wait(1).to({scaleX:1.3314,scaleY:1.3314,y:153.5},0).wait(1).to({regX:-0.8,regY:0.7,scaleX:1.3311,scaleY:1.3311,x:119.6,y:215.35},0).wait(1).to({regX:0,regY:-45.7,scaleX:1.3297,scaleY:1.3297,x:120.65,y:153.65},0).wait(1).to({scaleX:1.3289,scaleY:1.3289,y:153.7},0).wait(1).to({regX:-0.7,regY:0.6,scaleX:1.3286,scaleY:1.3286,x:119.65,y:215.4},0).to({_off:true},60).wait(86));

	// mask_screen
	this.instance_21 = new lib.mask_screen_w();
	this.instance_21.parent = this;
	this.instance_21.setTransform(155,109);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(377).to({_off:false},0).wait(86));

	// screen_inner_b
	this.date_b = new lib.date_b();
	this.date_b.name = "date_b";
	this.date_b.parent = this;
	this.date_b.setTransform(87.95,69.6);
	this.date_b.alpha = 0.5;
	this.date_b._off = true;

	this.timeline.addTween(cjs.Tween.get(this.date_b).wait(211).to({_off:false},0).to({_off:true},2).wait(250));

	// screen_inner_w
	this.date_w = new lib.date_w();
	this.date_w.name = "date_w";
	this.date_w.parent = this;
	this.date_w.setTransform(87.95,69.6);
	this.date_w.alpha = 0.9492;
	this.date_w._off = true;

	this.timeline.addTween(cjs.Tween.get(this.date_w).wait(213).to({_off:false},0).to({alpha:0},10).to({_off:true},16).wait(224));

	// screen_inner
	this.date = new lib.date();
	this.date.name = "date";
	this.date.parent = this;
	this.date.setTransform(87.95,69.6);
	this.date._off = true;

	this.timeline.addTween(cjs.Tween.get(this.date).wait(211).to({_off:false},0).to({_off:true},28).wait(224));

	// title
	this.logo_400_large_1 = new lib.logo_400_large();
	this.logo_400_large_1.name = "logo_400_large_1";
	this.logo_400_large_1.parent = this;
	this.logo_400_large_1.setTransform(149.5,107.95,0.7,0.7,0,0,0,-0.7,-0.1);
	this.logo_400_large_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.logo_400_large_1).wait(96).to({_off:false},0).to({_off:true},115).wait(252));

	// screen
	this.screen = new lib.screen_1();
	this.screen.name = "screen";
	this.screen.parent = this;
	this.screen.setTransform(68,52);
	this.screen._off = true;

	this.timeline.addTween(cjs.Tween.get(this.screen).wait(96).to({_off:false},0).wait(367));

	// powder
	this.instance_22 = new lib.立ち上るパーティクル();
	this.instance_22.parent = this;
	this.instance_22.setTransform(119.75,336.15,1,1,0,0,0,107.7,15.6);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(96).to({_off:false},0).wait(367));

	// bg
	this.instance_23 = new lib.bg_shibuya("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(120,155);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(96).to({_off:false},0).wait(178).to({startPosition:0},0).wait(1).to({scaleX:1.0019,scaleY:1.0019,x:119.9043},0).wait(1).to({scaleX:1.0078,scaleY:1.0078,x:119.6096},0).wait(1).to({scaleX:1.0179,scaleY:1.0179,x:119.1034},0).wait(1).to({scaleX:1.0326,scaleY:1.0326,x:118.3708},0).wait(1).to({scaleX:1.0521,scaleY:1.0521,x:117.3941},0).wait(1).to({scaleX:1.077,scaleY:1.077,x:116.1523},0).wait(1).to({scaleX:1.1076,scaleY:1.1076,x:114.6192},0).wait(1).to({scaleX:1.1447,scaleY:1.1447,x:112.7628},0).wait(1).to({scaleX:1.1892,scaleY:1.1892,x:110.5421},0).wait(1).to({scaleX:1.2419,scaleY:1.2419,x:107.904},0).wait(1).to({scaleX:1.3045,scaleY:1.3045,x:104.7768},0).wait(1).to({scaleX:1.3788,scaleY:1.3788,x:101.0603},0).wait(1).to({scaleX:1.4679,scaleY:1.4679,x:96.6055},0).wait(1).to({scaleX:1.5765,scaleY:1.5765,x:91.174},0).wait(1).to({scaleX:1.7133,scaleY:1.7133,x:84.3344},0).wait(1).to({scaleX:1.8975,scaleY:1.8975,x:75.1272},0).wait(1).to({scaleX:2.2,scaleY:2.2,x:60},0).wait(86).to({scaleX:1,scaleY:1,x:120},0).wait(86));

	// replace_text
	this.replace_text = new lib.replace_text();
	this.replace_text.name = "replace_text";
	this.replace_text.parent = this;
	this.replace_text.setTransform(-254,-89.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.replace_text).to({_off:true},1).wait(462));

	// notice_siluette2
	this.instance_24 = new lib.replace_silhouette2_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-139.5,453.4,1,1,0,0,0,120,120);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({_off:true},1).wait(462));

	// notice_siluette1
	this.instance_25 = new lib.replace_silhouette1_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-139.5,202.45,1,1,0,0,0,120,120);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({_off:true},1).wait(462));

	// notice_text2
	this.instance_26 = new lib.replace_target_notice_text2();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-159.5,42.45,1,1,0,0,0,72,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({_off:true},1).wait(462));

	// notice_text1
	this.instance_27 = new lib.repalce_target_notice_text1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-161.5,-26.55,1,1,0,0,0,66,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({_off:true},1).wait(462));

	// btn
	this.btn = new lib._btn();
	this.btn.name = "btn";
	this.btn.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(463));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222,-172.6,2202.1,799.2);
// library properties:
lib.properties = {
	id: 'month_notice',
	width: 240,
	height: 310,
	fps: 18,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/angel_mark.png?1595989248920", id:"month_notice_angel_mark"},
		{src:"images/bg_grid.png?1595989248920", id:"month_notice_bg_grid"},
		{src:"images/bg_harajuku.jpg?1595989248920", id:"month_notice_bg_harajuku"},
		{src:"images/bg_silhouette.jpg?1595989248920", id:"month_notice_bg_silhouette"},
		{src:"images/chihiro_body.png?1595989248920", id:"month_notice_chihiro_body"},
		{src:"images/chihiro_face2.png?1595989248920", id:"month_notice_chihiro_face2"},
		{src:"images/fp_kirakira.png?1595989248920", id:"month_notice_fp_kirakira"},
		{src:"images/name_plate.png?1595989248920", id:"month_notice_name_plate"},
		{src:"images/news_flas.png?1595989248920", id:"month_notice_news_flas"},
		{src:"images/replace_notice_text1.png?1595989248920", id:"month_notice_replace_notice_text1"},
		{src:"images/replace_notice_text1_b.png?1595989248920", id:"month_notice_replace_notice_text1_b"},
		{src:"images/replace_notice_text1_w.png?1595989248920", id:"month_notice_replace_notice_text1_w"},
		{src:"images/replace_notice_text2.png?1595989248920", id:"month_notice_replace_notice_text2"},
		{src:"images/replace_silhouette1.png?1595989248920", id:"month_notice_replace_silhouette1"},
		{src:"images/replace_silhouette2.png?1595989248920", id:"month_notice_replace_silhouette2"},
		{src:"images/screen.png?1595989248920", id:"month_notice_screen"},
		{src:"images/shuttle2.png?1595989248920", id:"month_notice_shuttle2"},
		{src:"images/sp_kirakira.png?1595989248920", id:"month_notice_sp_kirakira"},
		{src:"images/star.png?1595989248920", id:"month_notice_star"},
		{src:"images/table.png?1595989248920", id:"month_notice_table"},
		{src:"images/title.png?1595989248920", id:"month_notice_title"},
		{src:"images/title_idol2.png?1595989248920", id:"month_notice_title_idol2"},
		{src:"images/title_w.png?1595989248920", id:"month_notice_title_w"},
		{src:"images/title_white.png?1595989248920", id:"month_notice_title_white"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['month_notice'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;