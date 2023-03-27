(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.cjs001_character = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.cjs001_character.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2));

	// cjs001_character
	this.cjs001_character = new lib.cjs001_character_1();
	this.cjs001_character.setTransform(170,501);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cjs001_character}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-728.9,-18.9,974,542);


// symbols:
(lib.arm_left = function() {
	this.initialize(img.arm_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,53);


(lib.arm_right = function() {
	this.initialize(img.arm_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,55);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,295);


(lib.c0009_1 = function() {
	this.initialize(img.c0009_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,520);


(lib.c0009_2 = function() {
	this.initialize(img.c0009_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,520);


(lib.c0009_3 = function() {
	this.initialize(img.c0009_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,520);


(lib.c0009_4 = function() {
	this.initialize(img.c0009_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,520);


(lib.c0009_5 = function() {
	this.initialize(img.c0009_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,520);


(lib.c0009_6 = function() {
	this.initialize(img.c0009_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,520);


(lib.c0009_7 = function() {
	this.initialize(img.c0009_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,520);


(lib.ear_left = function() {
	this.initialize(img.ear_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,140);


(lib.ear_right = function() {
	this.initialize(img.ear_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,123);


(lib.stick_left = function() {
	this.initialize(img.stick_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,297);


(lib.stick_right = function() {
	this.initialize(img.stick_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,291);


(lib.spread_flower_circle_pink = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,79,156,0.2)","#FF4194"],[0,1],0,0,0,0,0,47.8).s().p("AlOFPQiMiKAAjFQAAjECMiKQCKiMDEAAQDFAACKCMQCMCKAADEQAADFiMCKQiKCMjFAAQjEAAiKiMg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.4,-47.4,95,95);


(lib.gr_stick_right = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.stick_right();
	this.instance.setTransform(-33.4,-145.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.4,-145.4,67,291);


(lib.gr_stick_left = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.stick_left();
	this.instance.setTransform(-53.4,-148.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.4,-148.4,107,297);


(lib.gr_exclamation = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF8C00").ss(1.5,1,1).p("ABakQIgqGXIhfAAIgqmXgAAzERIhlAAIAAhUIBlAAg");
	this.shape.setTransform(0,-7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFCE95"],[0,1],0,-8.9,0,9).s().p("AguDLIgrmWICzAAIgrGWg");
	this.shape_1.setTransform(0,-14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD09A").s().p("AgyAqIAAhTIBlAAIAABTg");
	this.shape_2.setTransform(0,15.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.9,-34.9,18,54.6);


(lib.gr_ear_right = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.ear_right();
	this.instance.setTransform(-48.9,-61.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.9,-61.4,98,123);


(lib.gr_ear_left = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.ear_left();
	this.instance.setTransform(-26.4,-69.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.4,-69.9,53,140);


(lib.gr_body = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.body();
	this.instance.setTransform(-77.4,-147.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77.4,-147.4,155,295);


(lib.gr_arm_right = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.arm_right();
	this.instance.setTransform(-21.4,-27.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.4,-27.4,43,55);


(lib.gr_arm_left = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.arm_left();
	this.instance.setTransform(-26.9,-26.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.9,-26.4,54,53);


(lib.flower_pink2 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF74BA").s().p("AgXA2QgNgFAIgTQAGgPAMgLQgNABgSgGQgTgIAHgOQAFgNATAIQARAIAJALQgBgOAGgSQAIgSAOAGQANAGgIASQgHARgMAJQAOgBASAGQASAIgGAOQgFAOgTgJQgQgGgKgMQABAOgGARQgGAOgJAAIgHgCg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.5,-5.5,11.3,11.3);


(lib.flower_pink1 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA9E9").s().p("AgBBGQgKgcAEgZQgTASgbAJQghALgHgYQgJgYAhgIQAcgKAZAEQgSgSgJgcQgLggAYgIQAYgIAIAgQAKAcgEAZQARgRAdgKQAggLAIAYQAIAYggAIQgcAKgZgEQARASAKAcQALAhgYAHQgFACgEAAQgRAAgGgag");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.5,-9.6,19.3,19.3);


(lib.eye_close = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.c0009_5();
	this.instance.setTransform(-319.9,-279.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-319.9,-279.9,640,520);


(lib.character_core = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// ch
	this.instance = new lib.c0009_1();
	this.instance.setTransform(-319.9,-279.9);

	this.instance_1 = new lib.c0009_2();
	this.instance_1.setTransform(-319.9,-279.9);

	this.instance_2 = new lib.c0009_3();
	this.instance_2.setTransform(-319.9,-279.9);

	this.instance_3 = new lib.c0009_4();
	this.instance_3.setTransform(-319.9,-279.9);

	this.instance_4 = new lib.c0009_5();
	this.instance_4.setTransform(-319.9,-279.9);

	this.instance_5 = new lib.c0009_6();
	this.instance_5.setTransform(-319.9,-279.9);

	this.instance_6 = new lib.c0009_7();
	this.instance_6.setTransform(-319.9,-279.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.9,-279.9,640,520);


(lib.drop2 = function() {
	this.initialize();

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#71DCFF").ss(0.5,1,1).p("AhLgEQgLAeAnALQAKABAlgIQAhgHAtALIgagiQgigkghAAQgxAAgLAgg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(173,242,255,0)","#95EEFF"],[0,0.569],0,0,0,0,0,8.9).s().p("AgvAlQgngLALgeQALggAxAAQAhAAAiAkIAaAiQgtgLghAHQghAHgLAAIgDAAg");

	// レイヤー 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxA5IgDgBIAAAAQgcgIgKgQQgNgSAJgYIAAAAQAOguBBAAIAAAAQAqAAAoAqIAAAAIABACIAbAiIAAAAQAEAFAAAHQAAAGgEAFQgDAFgGADIAAAAQgGACgGgCIAAAAQgogJgfAGQgiAHgNAAIgFAAgAhIgDQgFANAGAJQAGAKASAFIAAAAQAKABAlgHQAfgHAqAJIgWgeIgBAAIAAAAQggghghgBQguAAgLAfgABPAgIAAgBIAAAAIAAABg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.8,-5.7,19.8,11.5);


(lib.drop1 = function() {
	this.initialize();

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#71DCFF").ss(0.8,1,1).p("AA3hCQAhAYgfAlQgJAGgrATQglAQgmApQgCgYAEgdQAJg5AjgYQAugiAhAZg");
	this.shape.setTransform(1.2,1.8,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(173,242,255,0)","#95EEFF"],[0,0.569],-0.5,-1.9,0,-0.5,-1.9,10.4).s().p("AhEAYQAJg5AjgYQAugiAhAZQAhAYgfAlQgJAGgrATQglAQgmApQgCgYAEgdg");
	this.shape_1.setTransform(1.2,1.8,1,1,0,0,180);

	// レイヤー 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABFBiQgIgBgFgGQgjglghgPQgvgVgKgJIgCgCQgVgYABgWQAAgYAZgTQArgiA7ArQAqAcAKBCQAFAggCAbQgBAIgGAFQgGAFgHAAIgCAAgAg5hFQgRANgBASQAAAQAQAUIABABQAJAGAsATQAkAPAlApIACACIADgBIABgDQADgZgFgdQgJg7gkgZQgbgUgYAAQgSAAgPALg");
	this.shape_2.setTransform(1.2,1.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,-8.1,18.5,19.7);


(lib.question = function() {
	this.initialize();

	// レイヤー 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#FFDDB6"],[0.463,1],0,-21.2,0.3,21.3).s().p("AhKC5IAAgTQAAgtAUggQATggAogcQAYgOAKgNQALgNAAgUQAAgVgQgNQgQgMgZgCQgcABgPAUQgRAUAAAmIiQgUQABg6AbgpQAcgpAwgWQAxgWA8gBQA+AAAvAVQAvAUAbAkQAbAkAAAwQABAwgTAkQgSAjgqAbIgiAXQgOAJgIANQgJAMAAARIABAPIABANIiNACIgEgVg");
	this.shape.setTransform(-0.2,-9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE1BF").s().p("AhOhHICcgBIABCQIicABg");
	this.shape_1.setTransform(-0.1,23);

	// レイヤー 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF8C00").ss(3,1,1).p("ABRjIQgigOgtgBQgrAAgiAPQgkAQgUAeQgTAdgBAqIBnAPQAAgcAMgOQALgOAUAAQASABALAJQALAJAAAPQAAAPgHAKQgIAKgRAKQgdATgNAXQgPAVAAAgQAAAHAAAHQABAHABAIIBlAAQAAgFAAgFQgBgFAAgFQAAgNAHgIQAFgKALgGQAKgHAOgJQAegSAOgZQANgZAAgkQAAgjgTgaQgTgaghgPgAA3BvIhwAAIAABoIBwAAg");
	this.shape_2.setTransform(-0.1,0.1,1.393,1.393,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5DYIAAhpIBwAAIAABpgAg0BPIgCgPIAAgOQAAggAPgVQANgXAdgTQARgKAIgKQAHgKAAgPQAAgPgLgJQgLgJgSgBQgUAAgLAOQgMAOAAAdIhngQQABgqATgdQAUgeAkgQQAigOArAAQAtAAAiAOQAhAPATAbQATAZAAAjQAAAkgNAZQgOAZgeASIgYAQQgLAHgFAJQgHAJAAAMIABAKIAAAKg");
	this.shape_3.setTransform(-0.1,0.1,1.393,1.393,-0.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.5,-29.9,42.6,60.3);


(lib.notice_passion_inner = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9966").ss(2,1,1).p("AhngzIDPA8IgIArIjHgCg");
	this.shape.setTransform(5.7,-0.9,1.5,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFDF91","#FF8627","#98EBFF"],[0,1,1],-10.3,0,10.5,0).s().p("AhnAxIAAhkIDPA7IgIAsg");
	this.shape_1.setTransform(5.7,-0.9,1.5,1.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.9,-8.8,31.4,15.8);


(lib.laugh_parts_b = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FE9E39","#FCE99A"],[0,1],-13.7,0,13.9,0).s().p("AiJApIDsirIAnAuIjlDXg");
	this.shape.setTransform(-15.9,14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FE9E39","#FCE99A"],[0,1],-13.8,0,13.9,0).s().p("AiBAmIgJhhIEVA8IgJA7g");
	this.shape_1.setTransform(-21.6,-21.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FE9E39","#FCE99A"],[0,1],-8.8,0,9,0).s().p("AhQAwIAAgDIAAgFIgBgCIAAgCIAAgFIgBgDIAAgDIAAgBIAAgDIAAgCIAAgDIgBgEIAAgEIAAgDIAAgEIgFgtICogQIAJA/IioA6g");
	this.shape_2.setTransform(-16.8,-3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF781E").s().p("AiDC1IECi8IA7BCIkADxgAhvC5IAuBaIDljZIgngugAhXhiIDFgRIANBdIjGBDgAhHhTIAFAwIAAAEIAAADIAAAEIABAEIAAACIAAADIABADIAAABIAAADIAAADIABAEIAAABIAAACIABAFIAAADIABAMICng3IgJhBgAiuilIgLiGIE3BHIgOBYgAigizIEDAWIAJg7IkUg/g");
	this.shape_3.setTransform(-18.5,0);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.2,-29.9,37.3,60.1);


(lib.laugh_parts_a = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF9933","#FCE99A"],[0,1],-9.7,0,9.9,0).s().p("AhbAyIgGhxIDDA8IgKBDg");
	this.shape.setTransform(-17.8,-20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FE9E39","#FCE99A"],[0,1],-10.8,0,10.9,0).s().p("AhsAHICsh0IAsA2IilClg");
	this.shape_1.setTransform(-13.2,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FE9C37","#FCE99A"],[0,1],-14.7,0,14.8,0).s().p("AiSgrIEdgSIAJA+IkeA8g");
	this.shape_2.setTransform(-23.7,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF7812").s().p("Ag9CYIDGiGIBBBOIjFDDgAgmCfIAwBnICoinIgtg2gAjJhFIFAgUIANBbIlBBEgAi2g3IAIBpIEeg7IgJg/gAhSiIIgHiaIDkBGIgPBlgAhDiZICzAPIAKhFIjDg8g");
	this.shape_3.setTransform(-20.1,0);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.4,-29.1,40.5,58.4);


(lib.chord2 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC8D05").s().p("AAYDiQgcgIgHgUQgGgUAUgUQAVgVAlgIQAlgIAeAIIALAEIAAjMQgIgHh7hVIAADFIADAHQAHAUgUAUQgVAVglAIQglAJgegJQgegIgHgUQgGgUAWgUQAVgVAlgIQAlgIAeAIIALAEIAAj3IBWA9QBIAzANALQABAJABB8IAAB8IADAHQAHAUgWAUQgVAVglAIQgSAFgRAAQgRAAgPgFg");
	this.shape.setTransform(16.7,23.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33.3,46.2);


(lib.chord1 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCE05F").s().p("Ah3CoQgegIgHgUQgGgUAWgUQAVgVAlgIQAlgIAeAIIALAEIAAj3QAHAJAjAJQArAMARAIQBLAkgTBfQgShFg+gXQgTgIgVgBIgSgBIAADFIADAHQAHAUgWAUQgTAVglAIQgSAFgRAAQgRAAgPgFg");
	this.shape.setTransform(15.9,17.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31.7,34.6);


(lib.spread_flower_pink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{run:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11));

	// flower3
	this.instance = new lib.flower_pink2("synched",0);
	this.instance.setTransform(21.4,5.2,0.715,0.715);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0,_off:false},0).to({scaleX:1.2,scaleY:1.2,rotation:-608.8,x:59.1,y:2.8,alpha:0.5},4,cjs.Ease.get(1)).to({scaleX:1.41,scaleY:1.41,rotation:-1079.9,x:76.1,y:1.7,alpha:0.219},5).to({_off:true},1).wait(1));

	// flower2
	this.instance_1 = new lib.flower_pink2("synched",0);
	this.instance_1.setTransform(-13.9,-10.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0,_off:false},0).to({scaleX:1.29,scaleY:1.29,rotation:-556.2,x:-27.7,y:-28.7,alpha:0.57},4,cjs.Ease.get(1)).to({scaleX:1.54,scaleY:1.54,rotation:-1079.9,x:-39.2,y:-44.5,alpha:0.219},5).to({_off:true},1).wait(1));

	// flower1
	this.instance_2 = new lib.flower_pink1("synched",0);
	this.instance_2.setTransform(15.8,-6.4,0.793,0.793);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0,_off:false},0).to({scaleX:0.96,scaleY:0.96,rotation:-556.2,x:39.3,y:-31,alpha:0.57},4,cjs.Ease.get(1)).to({scaleX:1.11,scaleY:1.11,rotation:-1079.9,x:58.8,y:-51.5,alpha:0.219},5).to({_off:true},1).wait(1));

	// flower3
	this.instance_3 = new lib.flower_pink2("synched",0);
	this.instance_3.setTransform(-14.4,14.3,0.715,0.715);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({startPosition:0,_off:false},0).to({scaleX:1.09,scaleY:1.09,rotation:-556.2,x:-32.7,y:39.2,alpha:0.57},4,cjs.Ease.get(1)).to({scaleX:1.41,scaleY:1.41,rotation:-1079.9,x:-48.1,y:59.8,alpha:0.219},5).to({_off:true},1).wait(1));

	// flower3
	this.instance_4 = new lib.flower_pink2("synched",0);
	this.instance_4.setTransform(5.6,19);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({startPosition:0,_off:false},0).to({scaleX:1.26,scaleY:1.26,rotation:-556.2,x:16.6,y:47.3,alpha:0.57},4,cjs.Ease.get(1)).to({scaleX:1.49,scaleY:1.49,rotation:-1079.9,x:25.7,y:70.8,alpha:0.219},5).to({_off:true},1).wait(1));

	// flower2
	this.instance_5 = new lib.flower_pink2("synched",0);
	this.instance_5.setTransform(-20.8,2.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({startPosition:0,_off:false},0).to({scaleX:1.49,scaleY:1.49,rotation:-556.2,x:-49.6,y:4.7,alpha:0.57},4,cjs.Ease.get(1)).to({scaleX:1.89,scaleY:1.89,rotation:-1079.9,x:-73.7,y:6.7,alpha:0.219},5).to({_off:true},1).wait(1));

	// flower1
	this.instance_6 = new lib.flower_pink1("synched",0);
	this.instance_6.setTransform(0.3,-12.1,0.781,0.781,-44.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({startPosition:0,_off:false},0).to({scaleX:1.1,scaleY:1.1,rotation:-413.2,x:-1.4,y:-47,alpha:0.57},4,cjs.Ease.get(1)).to({scaleX:1.36,scaleY:1.36,rotation:-1079.9,x:-3,y:-76.3,alpha:0.219},5).to({_off:true},1).wait(1));

	// レイヤー 1
	this.instance_7 = new lib.spread_flower_circle_pink();
	this.instance_7.setTransform(0,0,0.558,0.558);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.398},0).to({scaleX:1.35,scaleY:1.35,alpha:0.352},3,cjs.Ease.get(-0.99)).to({scaleX:1.72,scaleY:1.72,alpha:0.051},5,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mc_usagi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{to_usagi:2,talk:20,from_usagi:37});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.gotoAndStop(0);
	}
	this.frame_35 = function() {
		this.gotoAndStop(0);
	}
	this.frame_48 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(16).call(this.frame_35).wait(13).call(this.frame_48).wait(1));

	// arm_right.png
	this.instance = new lib.gr_arm_right();
	this.instance.setTransform(53.1,-293.3,1,1,0,0,0,-11.4,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:-11.4,scaleY:0.82,skewX:-8.1,skewY:-12.3,x:55,y:-289.2},6,cjs.Ease.get(1)).to({regY:-20,scaleY:1,skewX:2.2,skewY:2.2,x:51,y:-293.4},5,cjs.Ease.get(-0.99)).to({regX:-11.3,regY:-19.8,skewX:0,skewY:0,x:53.1,y:-293.2},4,cjs.Ease.get(-0.99)).wait(3).to({regX:-11.2,regY:-19.9,scaleY:0.96,skewX:14.4,skewY:0.8,x:56.1,y:-292.1},3,cjs.Ease.get(1)).to({regX:-11.3,regY:-19.7,scaleX:1.02,scaleY:0.99,skewX:-17.5,skewY:-21.3,x:53.2,y:-293.1},3,cjs.Ease.get(1)).to({regY:-19.8,scaleX:1,scaleY:1,skewX:5.4,skewY:1.7,x:53.1,y:-293.2},5,cjs.Ease.get(1)).to({scaleY:1,skewX:0,skewY:0},2).wait(4).to({regX:-11.4,scaleY:0.82,skewX:-8.1,skewY:-12.3,x:55,y:-289.2},3,cjs.Ease.get(1)).to({regX:-11.3,scaleY:1,skewX:0,skewY:0,x:53.1,y:-293.2},4,cjs.Ease.get(-0.99)).wait(6));

	// arm_left.png
	this.instance_1 = new lib.gr_arm_left();
	this.instance_1.setTransform(-49.3,-301.8,1,1,0,0,0,-2.4,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({regY:-17.2,scaleY:0.89,skewX:-13.2,skewY:-15,x:-46.2,y:-301.6},6,cjs.Ease.get(1)).to({scaleY:1,skewX:3.7,skewY:2.2,x:-49.2},5,cjs.Ease.get(-0.99)).to({regY:-17.3,skewX:0,skewY:0,y:-301.7},4,cjs.Ease.get(-0.99)).wait(3).to({regY:-17.4,rotation:-13,x:-46.2,y:-300.7},3,cjs.Ease.get(1)).to({regY:-17.2,scaleY:0.77,rotation:0,x:-49.2,y:-301.6},3,cjs.Ease.get(1)).to({regY:-17.3,scaleY:1,skewX:5.1,skewY:1.2,y:-301.7},5,cjs.Ease.get(1)).to({scaleY:1,skewX:0,skewY:0},2).wait(4).to({regY:-17.2,scaleY:0.89,skewX:-13.2,skewY:-15,x:-46.2,y:-301.6},3,cjs.Ease.get(1)).to({regY:-17.3,scaleY:1,skewX:0,skewY:0,x:-49.2,y:-301.7},4,cjs.Ease.get(-0.99)).wait(6));

	// stick_right.png
	this.instance_2 = new lib.gr_stick_right();
	this.instance_2.setTransform(65.6,-285.3,1,1,0,0,0,-30.9,-138.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({regX:-30.7,regY:-138.9,rotation:6,x:68.7,y:-288.2},6,cjs.Ease.get(1)).to({regX:-30.8,regY:-138.8,rotation:-3,x:63.7,y:-285.2},5,cjs.Ease.get(-0.99)).to({rotation:0,x:65.6},4,cjs.Ease.get(-0.99)).wait(3).to({rotation:-5.3,x:60.2,y:-282.1},3,cjs.Ease.get(1)).to({rotation:5.5,x:70.6,y:-285.1},3,cjs.Ease.get(1)).to({rotation:-3,x:62.6,y:-285.2},5,cjs.Ease.get(1)).to({rotation:0,x:65.6},2).wait(4).to({regX:-30.7,regY:-138.9,rotation:6,x:68.7,y:-288.2},3,cjs.Ease.get(1)).to({regX:-30.8,regY:-138.8,rotation:-22.8,x:65.6,y:-285.2},4,cjs.Ease.get(-0.99)).wait(5).to({rotation:0},0).wait(1));

	// stick_left.png
	this.instance_3 = new lib.gr_stick_left();
	this.instance_3.setTransform(-38.4,-287.3,1,1,0,0,0,48,-138.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({rotation:-3.2,x:-37.3,y:-289.2},6,cjs.Ease.get(1)).to({regY:-138.7,rotation:1,x:-38.3,y:-287.1},5,cjs.Ease.get(-0.99)).to({regY:-138.8,rotation:0,y:-287.2},4,cjs.Ease.get(-0.99)).wait(3).to({rotation:3.5,x:-29.3,y:-285},3,cjs.Ease.get(1)).to({rotation:-5.8,x:-38.3,y:-290.2},3,cjs.Ease.get(1)).to({rotation:2,y:-287.1},5,cjs.Ease.get(1)).to({rotation:0,y:-287.2},2).wait(4).to({rotation:-3.2,x:-37.3,y:-289.2},3,cjs.Ease.get(1)).to({rotation:20.5,x:-38.3,y:-287.1},4,cjs.Ease.get(-0.99)).wait(5).to({rotation:0,y:-287.2},0).wait(1));

	// body.png
	this.instance_4 = new lib.gr_body();
	this.instance_4.setTransform(-3.4,-249.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({scaleY:1.02,rotation:1.7,x:-2.7,y:-247.1},6,cjs.Ease.get(1)).to({scaleY:1,rotation:-2,x:-1.5,y:-249},5,cjs.Ease.get(-0.99)).to({rotation:0,x:-3.3,y:-249.3},4,cjs.Ease.get(-0.99)).wait(3).to({rotation:1.7,x:-1.7,y:-248.6},3,cjs.Ease.get(1)).to({rotation:-2.2,x:-1.4,y:-248.9},3,cjs.Ease.get(1)).to({rotation:0.8,x:-4,y:-249.6},5,cjs.Ease.get(1)).to({rotation:0,x:-3.3,y:-249.3},2).wait(4).to({scaleY:1.02,rotation:1.7,x:-2.7,y:-247.1},3,cjs.Ease.get(1)).to({scaleY:1.01,rotation:0,x:-3.3,y:-247.3},4,cjs.Ease.get(-0.99)).wait(5).to({scaleY:1,y:-249.3},0).wait(1));

	// ear_right.png
	this.instance_5 = new lib.gr_ear_right();
	this.instance_5.setTransform(28.1,-377.9,1,1,0,0,0,-14.9,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({regX:-14.7,regY:30.7,scaleX:1.03,scaleY:0.98,skewX:17.2,skewY:26.2,x:32.7,y:-376.3},6,cjs.Ease.get(1)).to({regX:-14.9,regY:30.4,scaleX:1,scaleY:1,rotation:-7.7,skewX:0,skewY:0,x:25,y:-378.7},5,cjs.Ease.get(-0.99)).to({regX:-14.8,regY:30.5,rotation:0,x:28.1,y:-377.8},4,cjs.Ease.get(-0.99)).wait(3).to({regX:-14.9,scaleX:1.04,skewX:8.7,skewY:24.3,x:33.5,y:-376},3,cjs.Ease.get(1)).to({regX:-14.8,regY:30.6,scaleX:1,skewX:-12.2,skewY:-9.3,x:24.7,y:-378.5},3,cjs.Ease.get(1)).to({regX:-14.7,regY:30.4,scaleX:1,scaleY:1,skewX:2.5,skewY:6.4,x:29.4,y:-377.7},5,cjs.Ease.get(1)).to({regX:-14.8,regY:30.5,scaleY:1,skewX:0,skewY:0,x:28.1,y:-377.8},2).wait(4).to({regX:-14.7,regY:30.7,scaleX:1.03,scaleY:0.98,skewX:17.2,skewY:26.2,x:32.7,y:-376.3},3,cjs.Ease.get(1)).to({regX:-14.8,regY:30.6,scaleX:1,scaleY:1,skewX:-17.2,skewY:-17.9,x:28,y:-377.8},4,cjs.Ease.get(-0.99)).wait(5).to({regY:30.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:28.1},0).wait(1));

	// ear_left.png
	this.instance_6 = new lib.gr_ear_left();
	this.instance_6.setTransform(-38.3,-382.9,1,1,0,0,0,-14.9,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({regX:-14.7,scaleX:1.06,skewX:11.9,skewY:31,x:-33.5,y:-383.4},6,cjs.Ease.get(1)).to({regX:-14.8,regY:35.1,scaleX:1,rotation:-10.9,skewX:0,skewY:0,x:-41.4,y:-380.9},5,cjs.Ease.get(-0.99)).to({regY:35,rotation:0,x:-38.2,y:-382.8},4,cjs.Ease.get(-0.99)).wait(3).to({regX:-14.9,scaleX:1.03,skewX:7.9,skewY:21.9,x:-32.7,y:-383.1},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,skewX:-11.8,skewY:-9.4,x:-41.8,y:-380.8},3,cjs.Ease.get(1)).to({regX:-14.8,scaleX:1,scaleY:1,skewX:3.2,skewY:7.4,x:-37,y:-383.4},5,cjs.Ease.get(1)).to({scaleX:1,skewX:0,skewY:0,x:-38.2,y:-382.8},2).wait(4).to({regX:-14.7,scaleX:1.06,skewX:11.9,skewY:31,x:-33.5,y:-383.4},3,cjs.Ease.get(1)).to({regX:-15,scaleX:1.01,skewX:-7.8,skewY:-13.8,x:-38.4,y:-382.8},4,cjs.Ease.get(-0.99)).wait(5).to({regX:-14.8,scaleX:1,skewX:0,skewY:0,x:-38.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.9,-487.9,270,488);


(lib.mc_eye_close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"run":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.visible=false;
	}
	this.frame_1 = function() {
		this.visible=true;
	}
	this.frame_3 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoSAqIBzilIB9hJICbAjIDpgKIBngmIBkANICWBLIBQDIIhiBvIj3g1Iijg8IjIA8Ii5BDIhaAGg");
	mask.setTransform(-7,-92.7);

	// レイヤー 1
	this.instance = new lib.eye_close();
	this.instance.alpha = 0.012;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).to({alpha:0},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.9,-279.9,640,520);


(lib.mc_exclamation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"run":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25));

	// レイヤー 1
	this.instance = new lib.gr_exclamation();
	this.instance.setTransform(-3.9,12.4,0.461,0.461,15);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1.14,scaleY:1.14,x:1.2,y:-3.5},1,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1,x:0,y:0.4},5,cjs.Ease.get(1)).wait(10).to({scaleX:0.66,scaleY:0.66,x:-6.9,y:24.4,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.character_set = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{init:0});

	// timeline functions:
	this.frame_0 = function() {
		this.currentface=0;
		
		this.func_closeeye = function(){
			this.eye.gotoAndPlay("run");
		}
		
		//まばたきセットアップ
		setInterval(function(a){
			
			if(a.faceblink[a.currentface] == 1){
				//まばたき許可
				//console.log("まばたきできる");
				if(Math.random()*100 >= 80){
				
					a.func_closeeye();
					//console.log("まばたきした");
				}
				else {
					//console.log("まばたきしなかった");
				}
			}
			else{
				//console.log("まばたきしない");
			}
			
		}, 1000, this);
		
		
		this.stop();
		
		//外部から変数を受け取るための関数
		this.facechange = function(num) {
			this.currentface = num;
			//まばたき
			this.eye.visible = false;
			
			//表情変化
			this.core.gotoAndStop(this.currentface);
			
			return this.currentface;
		}
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(18));

	// eye
	this.eye = new lib.mc_eye_close();
	this.eye.setTransform(7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eye}]}).wait(21));

	// core
	this.core = new lib.character_core();
	this.core.setTransform(7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.core}]}).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-312.9,-279.9,640,520);


(lib.sweat_fly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"run":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11));

	// drop1
	this.instance = new lib.drop1("synched",0);
	this.instance.setTransform(3.3,-10,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0,_off:false},0).to({skewX:45,skewY:225.1,x:35.3,y:-21.3,alpha:0.219},3,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({skewX:0,skewY:180,x:3.3,y:-9.9,alpha:1,_off:false},0).to({skewX:45,skewY:225.1,x:35.3,y:-21.3,alpha:0.219},3,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// drop2
	this.instance_1 = new lib.drop2("synched",0);
	this.instance_1.setTransform(4.8,-1.6,0.848,0.848,0,-14.9,165);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,skewX:30,skewY:210.1,x:40.8,y:3.6,alpha:0.219},3,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({scaleX:0.85,scaleY:0.85,skewX:-14.8,skewY:165,x:4.8,y:-1.5,alpha:1,_off:false},0).to({scaleX:1,scaleY:1,skewX:30,skewY:210.1,x:40.8,y:-1.3,alpha:0.219},3,cjs.Ease.get(1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mc_question = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"run":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23));

	// question
	this.instance = new lib.question();
	this.instance.setTransform(-0.7,-1.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:0.1,y:-27.5,alpha:1},3,cjs.Ease.get(1)).to({y:-16.7},4,cjs.Ease.get(-0.99)).to({y:-18.2},2).wait(7).to({y:-9.3,alpha:0},5,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.notice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"run":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13));

	// mark1
	this.instance = new lib.notice_passion_inner();
	this.instance.setTransform(4.2,-9.5,1,1,-51.6,0,0,48.5,0.1);

	this.instance_1 = new lib.notice_passion_inner();
	this.instance_1.setTransform(10.4,-9.3,1,1,-18.1,0,0,48.5,0.1);

	this.instance_2 = new lib.notice_passion_inner();
	this.instance_2.setTransform(11.1,-12.5,1,1,5.5,0,0,48.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[]},2).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},3).to({state:[]},2).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},3).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.laugh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"run":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21));

	// mark
	this.instance = new lib.laugh_parts_a("synched",0);
	this.instance.setTransform(-30.2,20.5,1.074,0.957,0,0,0,-20.2,0);

	this.instance_1 = new lib.laugh_parts_b("synched",0);
	this.instance_1.setTransform(-29.5,22.9,1.134,0.975,0,0,0,-18.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{scaleX:1.074,scaleY:0.957,x:-30.2,regX:-20.2}}]},1).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:-28.7,regX:-20.2}}]},1).to({state:[{t:this.instance,p:{scaleX:0.969,scaleY:1.017,x:-28,regX:-20.1}}]},3).to({state:[{t:this.instance_1,p:{scaleX:1.134,scaleY:0.975,x:-29.5}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,x:-27}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.946,scaleY:1.042,x:-26}}]},3).to({state:[{t:this.instance,p:{scaleX:1.074,scaleY:0.957,x:-30.2,regX:-20.2}}]},1).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:-28.7,regX:-20.2}}]},1).to({state:[{t:this.instance,p:{scaleX:0.969,scaleY:1.017,x:-28,regX:-20.1}}]},3).to({state:[{t:this.instance_1,p:{scaleX:1.134,scaleY:0.975,x:-29.5}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,x:-27}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.946,scaleY:1.042,x:-26}}]},3).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.chord = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"run":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23));

	// chord
	this.instance = new lib.chord2();
	this.instance.setTransform(-35.9,76.7,0.558,0.558,-0.2,0,0,15.7,17.4);
	this.instance.alpha = 0.102;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).wait(2).to({_off:false},0).wait(1).to({regY:17.5,scaleX:0.61,scaleY:0.61,rotation:1.3,x:-37.3,y:68.4,alpha:0.172},0).wait(1).to({regX:15.6,scaleX:0.66,scaleY:0.66,rotation:3.1,x:-37.7,y:59.9,alpha:0.238},0).wait(1).to({regX:15.8,regY:17.4,scaleX:0.71,scaleY:0.71,rotation:5,x:-36.9,y:51.4,alpha:0.309},0).wait(1).to({regX:15.7,scaleX:0.76,scaleY:0.76,rotation:6.8,x:-34.9,y:43,alpha:0.379},0).wait(1).to({regX:15.6,scaleX:0.81,scaleY:0.81,rotation:8.6,x:-31.5,y:35.3,alpha:0.449},0).wait(1).to({regX:15.7,scaleX:0.86,scaleY:0.86,rotation:10.6,x:-26.5,y:28.3,alpha:0.52},0).wait(1).to({regY:17.5,scaleX:0.91,scaleY:0.91,rotation:12.5,x:-20.2,y:22.6,alpha:0.59},0).wait(1).to({regX:15.9,regY:17.4,scaleX:0.96,scaleY:0.96,rotation:14.3,x:-13.8,y:16.9,alpha:0.66},0).wait(1).to({scaleX:1,scaleY:1,rotation:7,x:-9.7,y:11.4,alpha:0.711},0).wait(1).to({regX:15.8,scaleX:1.04,scaleY:1.04,rotation:0,x:-6.3,y:5.5,alpha:0.77},0).wait(1).to({regX:15.9,scaleX:1.08,scaleY:1.08,rotation:-7.4,x:-3.7,y:-0.7,alpha:0.828},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:-14.9,x:-2.2,y:-7.3,alpha:0.891},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:-22.4,x:-1.6,y:-14,alpha:0.941},0).wait(1).to({regX:15.8,regY:17.3,scaleX:1.21,scaleY:1.21,rotation:-29.8,x:-2,y:-20.6,alpha:1},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:-24.8,x:-2.5,y:-23.3,alpha:0.801},0).wait(1).to({rotation:-19.8,x:-3.3,y:-25.8,alpha:0.602},0).wait(1).to({regX:15.9,scaleX:1.21,scaleY:1.21,rotation:-14.9,x:-4.2,y:-28.4,alpha:0.398},0).wait(1).to({regX:15.8,scaleX:1.21,scaleY:1.21,rotation:-10.1,x:-5.6,y:-30.7,alpha:0.199},0).wait(1).to({regX:15.9,rotation:-5.4,x:-7.3,y:-32.9,alpha:0},0).to({_off:true},1).wait(1));

	// chord
	this.instance_1 = new lib.chord1();
	this.instance_1.setTransform(-23.4,77.3,0.989,0.989,-44.9,0,0,15.8,17.4);
	this.instance_1.alpha = 0.102;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({regX:15.7,scaleX:1.01,scaleY:1.01,rotation:-37.4,x:-17.5,y:67.4,alpha:0.191},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:-29.9,x:-10.7,y:58.1,alpha:0.281},0).wait(1).to({regX:15.8,scaleX:1.05,scaleY:1.05,rotation:-22.3,x:-2.6,y:49.8,alpha:0.371},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:-14.8,x:6.7,y:43,alpha:0.461},0).wait(1).to({regY:17.3,scaleX:1.1,scaleY:1.1,rotation:-7.3,x:17.1,y:37.9,alpha:0.551},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:0,x:26.8,y:31.6,alpha:0.641},0).wait(1).to({regY:17.4,scaleX:1.14,scaleY:1.14,rotation:7.3,x:35.2,y:23.5,alpha:0.73},0).wait(1).to({scaleX:1.16,scaleY:1.16,rotation:14.8,x:41.8,y:13.8,alpha:0.82},0).wait(1).to({regY:17.3,scaleX:1.19,scaleY:1.19,rotation:22.3,x:46.7,y:3.2,alpha:0.91},0).wait(1).to({regX:15.9,scaleX:1.21,scaleY:1.21,rotation:30,x:50.1,y:-7.7,alpha:1},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:29.8,x:52.1,y:-11.7,alpha:0.84},0).wait(1).to({x:54.1,y:-15.9,alpha:0.672},0).wait(1).to({x:56.2,y:-20.1,alpha:0.5},0).wait(1).to({regX:15.8,scaleX:1.21,scaleY:1.21,x:58.2,y:-24.2,alpha:0.34},0).wait(1).to({regX:15.9,regY:17.2,scaleX:1.21,scaleY:1.21,rotation:29.9,x:60.4,y:-28.4,alpha:0.172},0).wait(1).to({regY:17.3,scaleX:1.21,scaleY:1.21,rotation:30,x:62.5,y:-32.5,alpha:0},0).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mc_effect_container1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// chord
	this.chord = new lib.chord();
	this.chord.setTransform(40,-42.4,1,1,8.8,0,0,-23.5,77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.chord}]}).wait(2));

	// exclamation
	this.exclamation = new lib.mc_exclamation();
	this.exclamation.setTransform(63.3,-78.1,1,1,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.exclamation}]}).wait(2));

	// laugh
	this.laugh = new lib.laugh();
	this.laugh.setTransform(62,-75.7,1.198,1.198,150,0,0,-30.3,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.laugh}]}).wait(2));

	// notice
	this.notice = new lib.notice();
	this.notice.setTransform(60.6,-69.6,1,1,156.5,0,0,-28.5,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.notice}]}).wait(2));

	// question
	this.question = new lib.mc_question();
	this.question.setTransform(55,-74.9,1,1,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.question}]}).wait(2));

	// sweat_fly
	this.sweat_fly = new lib.sweat_fly();
	this.sweat_fly.setTransform(46,-62.9,1.4,1.4,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sweat_fly}]}).wait(2));

	// flower_pink
	this.flower_pink = new lib.spread_flower_pink();
	this.flower_pink.setTransform(0,0,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.flower_pink}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mc_effect_container0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// chord
	this.chord = new lib.chord();
	this.chord.setTransform(-48.9,-14.4,0.999,0.999,-48.6,0,0,-23.6,77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.chord}]}).wait(2));

	// exclamation
	this.exclamation = new lib.mc_exclamation();
	this.exclamation.setTransform(-80.5,-44.1,1,1,-42.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.exclamation}]}).wait(2));

	// laugh
	this.laugh = new lib.laugh();
	this.laugh.setTransform(-82.7,-43.6,1.198,1.198,35.2,0,0,-30.2,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.laugh}]}).wait(2));

	// notice
	this.notice = new lib.notice();
	this.notice.setTransform(-84.1,-32.6,1,1,33.9,0,0,-28.5,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.notice}]}).wait(2));

	// question
	this.question = new lib.mc_question();
	this.question.setTransform(-69.9,-37.9,1,1,-17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.question}]}).wait(2));

	// sweat_fly
	this.sweat_fly = new lib.sweat_fly();
	this.sweat_fly.setTransform(-66.9,-30.9,1.4,1.4,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sweat_fly}]}).wait(2));

	// flower_pink
	this.flower_pink = new lib.spread_flower_pink();
	this.flower_pink.setTransform(0,0,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.flower_pink}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.cjs001_character_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{wait:1,jump:12,jump_flower:21,jump_double:38,nod:53,nod2:61,nod_double:78,swing_left:91,swing_right:109,out_L:127,out:138,in_L:148,"to_usagi":163,talk_usagi:194,wait_usagi:212,"from_usagi":222});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		//初期化
		this.character_set.faceblink = [];
		
		
		//0:まばたきしない 1~:まばたきする
		this.character_set.faceblink[0] = 1;//ここはいじらない
		this.character_set.faceblink[1] = 1;
		this.character_set.faceblink[2] = 0;
		this.character_set.faceblink[3] = 1;
		this.character_set.faceblink[4] = 1;
		this.character_set.faceblink[5] = 0;
		this.character_set.faceblink[6] = 0;
		this.character_set.faceblink[7] = 1;
		
		//キャラの向き
		this.foward_type=0;//0:左向き  1:右向き
		
		//一時的に設定(向きを切り替えるため)
		this.foward_type_anzu=0;
		this.foward_type_usagi=1;
		
		
		this.num=0;
		this.flg=0;
		
		
		
		//表情指定に動きを合わせる(プリセット)
		this.motion_act = function(num, flg){
			this.num=num;
			this.flg=flg;
			
			if(this.flg){
				switch(this.num){
					case 1:
						//通常
						if(this.flg)this.motion_select(1);
						//表情指定
						this.face_select(this.num);
						break;
					case 2:
						//喜
						if(this.flg)this.motion_select(3);
						//表情指定
						this.face_select(this.num);
						break;
					case 3:
						//困
						if(this.flg)this.motion_select(5);
						//表情指定
						this.face_select(this.num);
						break;
					case 4:
						//怒拗
						if(this.flg)this.motion_select(2);
						//表情指定
						this.face_select(this.num);
						break;
					case 5:
						//目閉じ
						if(this.flg)this.motion_select(1);
						//this.effect_select(6);
						//表情指定
						this.face_select(this.num);
						break;
					case 6:
						//あくび
						if(this.flg)this.motion_select(6);
						//表情指定
						this.face_select(this.num);
						break;
					case 7:
						//ドヤ顔
						if(this.flg)this.motion_select(1);
						//表情指定
						this.face_select(this.num);
						break;
					case 11:
						//out_L
						this.foward_type = this.foward_type_usagi;
						if(this.flg){
							this.motion_select(80);
						}
						else{
							this.motion_select(81);
						}
						this.face_select(7);
						break;
					case 12:
						//talk
						if(this.flg){
							this.motion_select(83);
						}
						else{
							this.motion_select(81);
						}
						//this.face_select(1);
						break;
					case 13:
						//in_L
						this.foward_type = this.foward_type_anzu;
						if(this.flg){
							this.motion_select(82);
						}
						else{
							this.motion_select(0);
						}
						this.face_select(7);
						break;
				}
			}
			
		}
		
		//詳細指定
		this.detail_select = function(face_num, motion_num, effect_num){
			
			//表情指定
			this.face_select(face_num);
			//モーション指定
			this.motion_select(motion_num);
			//エフェクト指定
			this.effect_select(effect_num);
			
		}
		
		//表情指定
		this.face_select=function(face_num){
			if(face_num == 0){return;}
			this.character_set.facechange(face_num);
		
		}
		
		
		//モーション設定
		this.motion_select=function(motion_num){
			switch(motion_num){
				case 0:
					this.gotoAndPlay("wait");
					break;
				case 1:
					//nod
					this.gotoAndPlay("nod");
					//this.gotoAndPlay("nod2");//ゆっくりめ
					break;
				case 2:
					//nod_double
					this.gotoAndPlay("nod_double");
					break;
				case 3:
					//jump
					this.gotoAndPlay("jump");
					break;
				case 4:
					//jump_double
					this.gotoAndPlay("jump_double");
					break;
				case 5:
					//swing_left
					this.gotoAndPlay("swing_left");
					break;
				case 6:
					//swing_right
					this.gotoAndPlay("swing_right");
					break;
				case 80:
					//特殊 to_usagi
					this.foward_type = this.foward_type_usagi;
					this.gotoAndPlay("to_usagi");
					break;
				case 81:
					//特殊 wait usagi
					this.foward_type = this.foward_type_usagi;
					this.gotoAndPlay("wait_usagi");
					break;
				case 82:
					//特殊 from_usagi
					this.foward_type = this.foward_type_anzu;
					this.gotoAndPlay("from_usagi");
					break;
				case 83:
					//特殊 talk_usagi
					this.foward_type = this.foward_type_usagi;
					this.gotoAndPlay("talk_usagi");
					break;
			}
		}
		
		//エフェクト
		this.effect_select=function(effect_num){
			switch(effect_num){
				case 1:
					//chord
					this["wait_effect" + this.foward_type].chord.gotoAndPlay("run");
					break;
				case 2:
					//exclamation
					this["wait_effect" + this.foward_type].exclamation.gotoAndPlay("run");
					break;
				case 3:
					//laugh
					this["wait_effect" + this.foward_type].laugh.gotoAndPlay("run");
					break;
				case 4:
					//notice
					this["wait_effect" + this.foward_type].notice.gotoAndPlay("run");
					break;
				case 5:
					//question
					this["wait_effect" + this.foward_type].question.gotoAndPlay("run");
					break;
				case 6:
					//sweat_fly
					this["wait_effect" + this.foward_type].sweat_fly.gotoAndPlay("run");
					break;
				case 7:
					//flower_pink
					this["wait_effect" + this.foward_type].flower_pink.gotoAndPlay("run");
					break;
			}
			
		}
	}
	this.frame_11 = function() {
		this.gotoAndPlay("wait");
	}
	this.frame_20 = function() {
		this.gotoAndPlay("wait");
	}
	this.frame_24 = function() {
		this.flower_pink.gotoAndPlay("start");
	}
	this.frame_37 = function() {
		this.gotoAndPlay("wait");
	}
	this.frame_51 = function() {
		this.gotoAndPlay("wait");
	}
	this.frame_60 = function() {
		this.gotoAndPlay("wait");
	}
	this.frame_72 = function() {
		this.gotoAndPlay("wait");
	}
	this.frame_90 = function() {
		this.gotoAndPlay("wait");
	}
	this.frame_108 = function() {
		this.gotoAndPlay("wait");
	}
	this.frame_126 = function() {
		this.gotoAndPlay("wait");
	}
	this.frame_137 = function() {
		this.stop();
	}
	this.frame_147 = function() {
		this.stop();
	}
	this.frame_162 = function() {
		this.stop();
	}
	this.frame_178 = function() {
		this.usagi.gotoAndPlay("to_usagi");
	}
	this.frame_193 = function() {
		this.stop();
	}
	this.frame_194 = function() {
		this.usagi.gotoAndPlay("talk");
	}
	this.frame_207 = function() {
		this.stop();
	}
	this.frame_219 = function() {
		this.stop();
	}
	this.frame_222 = function() {
		this.usagi.gotoAndPlay("from_usagi");
	}
	this.frame_252 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(9).call(this.frame_20).wait(4).call(this.frame_24).wait(13).call(this.frame_37).wait(14).call(this.frame_51).wait(9).call(this.frame_60).wait(12).call(this.frame_72).wait(18).call(this.frame_90).wait(18).call(this.frame_108).wait(18).call(this.frame_126).wait(11).call(this.frame_137).wait(10).call(this.frame_147).wait(15).call(this.frame_162).wait(16).call(this.frame_178).wait(15).call(this.frame_193).wait(1).call(this.frame_194).wait(13).call(this.frame_207).wait(12).call(this.frame_219).wait(3).call(this.frame_222).wait(30).call(this.frame_252).wait(4));

	// wait_effect_l
	this.wait_effect0 = new lib.mc_effect_container0();
	this.wait_effect0.setTransform(0,-326.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wait_effect0}]}).wait(257));

	// wait_effect_r
	this.wait_effect1 = new lib.mc_effect_container1();
	this.wait_effect1.setTransform(0,-326.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wait_effect1}]}).wait(257));

	// effect
	this.flower_pink = new lib.spread_flower_pink();
	this.flower_pink.setTransform(1,-331.9,1.8,1.8);
	this.flower_pink._off = true;

	this.timeline.addTween(cjs.Tween.get(this.flower_pink).wait(21).to({_off:false},0).to({_off:true},16).wait(220));

	// usagi
	this.usagi = new lib.mc_usagi();
	this.usagi.setTransform(-599.9,22);
	this.usagi.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.usagi).wait(178).to({x:0,y:160,alpha:1},0).to({y:17},6,cjs.Ease.get(1)).to({y:33},5,cjs.Ease.get(-0.99)).to({y:22},4,cjs.Ease.get(-0.99)).wait(1).to({y:30},3,cjs.Ease.get(1)).to({y:12},3,cjs.Ease.get(1)).to({y:24},5,cjs.Ease.get(1)).to({y:22},2).wait(15).to({y:19},3,cjs.Ease.get(1)).to({y:216},5,cjs.Ease.get(-0.99)).wait(1).to({x:-599.8,y:22,alpha:0.012},0).wait(26));

	// character_set
	this.character_set = new lib.character_set();
	this.character_set.setTransform(-585.9,0,1,1,0,0,0,0,240);

	this.timeline.addTween(cjs.Tween.get(this.character_set).wait(1).to({x:0},0).wait(11).to({y:6},0).to({y:-9.8},3,cjs.Ease.get(1)).to({y:3},3,cjs.Ease.get(-0.99)).to({y:0},2).wait(1).to({y:6},2,cjs.Ease.get(1)).to({y:-17.8},3,cjs.Ease.get(1)).to({y:3},4,cjs.Ease.get(-0.99)).to({y:0},2).wait(5).wait(1).to({y:7},0).to({y:-9.8},2,cjs.Ease.get(1)).to({y:7},3,cjs.Ease.get(-0.99)).to({y:-9.8},2,cjs.Ease.get(1)).to({y:7},3,cjs.Ease.get(-0.99)).to({y:0},3).wait(2).to({y:10},3,cjs.Ease.get(1)).to({y:0},4,cjs.Ease.get(-0.99)).wait(1).to({y:10},5,cjs.Ease.get(1)).to({y:0},6,cjs.Ease.get(-0.99)).wait(6).to({y:10},3,cjs.Ease.get(1)).to({y:0},3,cjs.Ease.get(1)).to({y:10},3,cjs.Ease.get(1)).to({y:0},3,cjs.Ease.get(-0.99)).wait(1).to({rotation:-2.8,x:0.3},8,cjs.Ease.get(1)).to({rotation:0,x:0},9,cjs.Ease.get(-0.99)).wait(1).to({rotation:3,x:-0.1},8,cjs.Ease.get(1)).to({rotation:0,x:0},9,cjs.Ease.get(-0.99)).wait(1).to({x:2},2,cjs.Ease.get(1)).to({x:-49.8,alpha:0.012},8,cjs.Ease.get(-0.99)).wait(11).to({x:4,alpha:1},10,cjs.Ease.get(1)).to({x:0},4).wait(1).to({y:-2.8},3,cjs.Ease.get(1)).to({y:130},5,cjs.Ease.get(-0.99)).wait(1).to({x:-682.8,y:100,alpha:0.012},0).wait(67).to({x:0,y:149,alpha:1},0).to({y:-7.8},6,cjs.Ease.get(1)).to({y:3},4,cjs.Ease.get(-0.99)).to({y:0},3).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-898.9,-519.9,974,542);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;