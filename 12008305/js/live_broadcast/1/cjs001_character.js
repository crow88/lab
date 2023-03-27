(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.cjs001_character = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

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
p.nominalBounds = new cjs.Rectangle(-149.9,-18.9,640,520);


// symbols:
(lib.c0001_0 = function() {
	this.initialize(img.c0001_0);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,520);


(lib.c0001_1 = function() {
	this.initialize(img.c0001_1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,520);


(lib.c0001_2 = function() {
	this.initialize(img.c0001_2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,520);


(lib.c0001_3 = function() {
	this.initialize(img.c0001_3);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,520);


(lib.c0001_4 = function() {
	this.initialize(img.c0001_4);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,520);


(lib.c0001_5 = function() {
	this.initialize(img.c0001_5);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,520);


(lib.c0001_6 = function() {
	this.initialize(img.c0001_6);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,520);


(lib.c0001_7 = function() {
	this.initialize(img.c0001_7);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,520);


(lib.spread_flower_circle_pink = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,79,156,0.2)","#FF4194"],[0,1],0,0,0,0,0,47.8).s().p("AFQlPQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACLCLIAAAA").cp();

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.4,-47.4,95,95);


(lib.gr_exclamation = function() {
	this.initialize();

	// レイヤー 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF8C00").ss(1.5,1,1).p("ABakQIgqGXIhfAAIgqmXICzAAAAzERIhlAAIAAhUIBlAAIAABU").cp();
	this.shape_1.setTransform(0,-7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#FFCE95"],[0,1],0,-8.9,0,9).s().p("ABajLIgqGXIhfAAIgqmXICzAA").cp();
	this.shape_2.setTransform(0,-14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD09A").s().p("AAzAqIhlAAIAAhTIBlAAIAABT").cp();
	this.shape_3.setTransform(0,15.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.9,-34.9,18,54.6);


(lib.flower_pink2 = function() {
	this.initialize();

	// レイヤー 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF74BA").s().p("AAdgdQAIgSgNgGQgOgGgIASQgGASABAOQgJgLgRgIQgTgIgFANQgHAOATAIQASAGANgBQgMALgGAPQgIATANAFQAOAGAIgSQAGgRgBgOQAKAMAQAGQATAJAFgOQAGgOgSgIQgSgGgOABQAMgJAHgRIAAAA").cp();

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.5,-5.5,11.3,11.3);


(lib.flower_pink1 = function() {
	this.initialize();

	// レイヤー 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFA9E9").s().p("AAIgQQAEgZgKgcQgIgggYAIQgYAIALAgQAJAcASASQgZgEgcAKQghAIAJAYQAHAYAhgLQAbgJATgSQgEAZAKAcQAIAhAYgJQAYgHgLghQgKgcgRgSQAZAEAcgKQAggIgIgYQgIgYggALQgdAKgRARIAAAA").cp();

	this.addChild(this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.5,-9.6,19.3,19.3);


(lib.eye_close = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.c0001_5();
	this.instance.setTransform(-319.9,-279.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-319.9,-279.9,640,520);


(lib.character_core = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// ch
	this.instance_1 = new lib.c0001_0();
	this.instance_1.setTransform(-319.9,-279.9);

	this.instance_2 = new lib.c0001_1();
	this.instance_2.setTransform(-319.9,-279.9);

	this.instance_3 = new lib.c0001_2();
	this.instance_3.setTransform(-319.9,-279.9);

	this.instance_4 = new lib.c0001_3();
	this.instance_4.setTransform(-319.9,-279.9);

	this.instance_5 = new lib.c0001_4();
	this.instance_5.setTransform(-319.9,-279.9);

	this.instance_6 = new lib.c0001_5();
	this.instance_6.setTransform(-319.9,-279.9);

	this.instance_7 = new lib.c0001_6();
	this.instance_7.setTransform(-319.9,-279.9);

	this.instance_8 = new lib.c0001_7();
	this.instance_8.setTransform(-319.9,-279.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.9,-279.9,640,520);


(lib.drop2 = function() {
	this.initialize();

	// レイヤー 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(173,242,255,0)","#95EEFF"],[0,0.569],0,0,0,0,0,8.9).s("#71DCFF").ss(0.5,1,1).p("AhLgEQgLAeAnALQAKABAlgIQAhgHAtALIgagiQgigkghAAQgxAAgLAgIAAAA").cp();

	// レイヤー 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABDgOQABABAAABIAbAiIAAAAQAEAFAAAHQAAAGgEAFQgDAFgGADIAAAAQgGACgGgCIAAAAQgogJgfAGQgoAIgMgBQgCAAgBgBIAAAAQgcgIgKgQQgNgSAJgYIAAAAQAOguBBAAIAAAAQAqAAAoAqIAAAAAAzAAIgBAAIAAAAQggghghgBQguAAgLAfQgFANAGAJQAGAKASAFIAAAAQAKABAlgHQAfgHAqAJIgWgeABPAgIAAgBIAAAAQAAABAAAAIAAAA").cp();

	this.addChild(this.shape_7,this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.8,-5.7,19.8,11.5);


(lib.drop1 = function() {
	this.initialize();

	// レイヤー 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["rgba(173,242,255,0)","#95EEFF"],[0,0.569],-0.5,-1.9,0,-0.5,-1.9,10.4).s("#71DCFF").ss(0.8,1,1).p("AA3hCQAhAYgfAlQgJAGgrATQglAQgmApQgCgYAEgdQAJg5AjgYQAugiAhAZIAAAA").cp();
	this.shape_8.setTransform(1.2,1.8,1,1,0,0,180);

	// レイヤー 3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhChSQArgiA7ArQAqAcAKBCQAFAggCAbQgBAIgGAFQgGAFgJAAQgIgBgFgGQgjglghgPQgvgVgKgJQgBgBgBgBQgVgYABgWQAAgYAZgTIAAAAAg5hFQgRANgBASQAAAQAQAUIABABQAJAGAsATQAkAPAlApQABABABABQACAAABgBQABgBAAgCQADgZgFgdQgJg7gkgZQgxgjgjAaIAAAA").cp();
	this.shape_9.setTransform(1.2,1.7);

	this.addChild(this.shape_9,this.shape_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,-8.1,18.5,19.7);


(lib.question = function() {
	this.initialize();

	// レイヤー 3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFFFF","#FFDDB6"],[0.463,1],0,-21.2,0.3,21.3).s().p("AAFAdQAYgOAKgNQALgNAAgUQAAgVgQgNQgQgMgZgCQgcABgPAUQgRAUAAAmIiQgUQABg6AbgpQAcgpAwgWQAxgWA8gBQA+AAAvAVQAvAUAbAkQAbAkAAAwQABAwgTAkQgSAjgqAbQgUANgOAKQgOAJgIANQgJAMAAARQAAAHABAIQAAAGABAHIiNACQgCgLgCgKQAAgJAAgKQAAgtAUggQATggAogcIAAAA").cp();
	this.shape_10.setTransform(-0.2,-9.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE1BF").s().p("ABOhIIABCQIicABIgBiQICcgB").cp();
	this.shape_11.setTransform(-0.1,23);

	// レイヤー 2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s("#FF8C00").ss(3,1,1).p("ABRjIQgigOgtgBQgrAAgiAPQgkAQgUAeQgTAdgBAqIBnAPQAAgcAMgOQALgOAUAAQASABALAJQALAJAAAPQAAAPgHAKQgIAKgRAKQgdATgNAXQgPAVAAAgQAAAHAAAHQABAHABAIIBlAAQAAgFAAgFQgBgFAAgFQAAgNAHgIQAFgKALgGQAKgHAOgJQAegSAOgZQANgZAAgkQAAgjgTgaQgTgaghgPIAAAAAA3BvIhwAAIAABoIBwAAIAAho").cp();
	this.shape_12.setTransform(0,0.3,1.393,1.393,-0.4,0,0,0,0.1);

	this.addChild(this.shape_12,this.shape_11,this.shape_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.5,-29.9,42.6,60.3);


(lib.notice_passion_inner = function() {
	this.initialize();

	// レイヤー 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FFDF91","#FF8627","#98EBFF"],[0,1,1],-10.3,0,10.5,0).s("#FF9966").ss(2,1,1).p("AhngzIDPA8IgIArIjHgCIAAhl").cp();
	this.shape_13.setTransform(5.7,-0.9,1.5,1.5);

	this.addChild(this.shape_13);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.9,-8.8,31.4,15.8);


(lib.laugh_parts_b = function() {
	this.initialize();

	// レイヤー 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FE9E39","#FCE99A"],[0,1],-13.7,0,13.9,0).s().p("ABjiCIAnAuIjlDXIguhaIDsir").cp();
	this.shape_14.setTransform(-15.9,14.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FE9E39","#FCE99A"],[0,1],-13.8,0,13.9,0).s().p("ACLABIgKA7IkDgWIgIhiIEVA9").cp();
	this.shape_15.setTransform(-21.6,-21.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FE9E39","#FCE99A"],[0,1],-8.8,0,9,0).s().p("AhTABQgDgWgCgYICogPIAJBAIinA5IgBgNQAAgBAAgCQgBgCAAgDQgBgBAAgBIAAgCQAAgDAAgCQAAgBAAgBQAAgCAAgCQAAAAAAgBQgBgBAAgCIAAgCQAAgBAAgCIgBgEQAAgCAAgCQAAgBAAgCQAAgCAAgCIAAAA").cp();
	this.shape_16.setTransform(-16.8,-3.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF781E").s().p("AhCgjQAAACAAACQAAABAAACQAAACAAACIABAEQAAABAAABIAAADQAAABABACQAAAAAAABQAAABAAACQAAABAAACQAAACABACIAAABQAAABAAABQAAACABADQAAABAAACIABAMICng3IgJhBIioAPQACAYADAYIAAAAABwiMIkegZIgLiGIE3BHIgOBYAB7gWIjGBDIgMiPIDFgRIANBdABsjYIkUg/IAIBkIEDAWIAJg7AB9AMIjsCtIAuBaIDljZIgnguAiDC1IECi8IA7BCIkADxIg9h3").cp();
	this.shape_17.setTransform(-18.5,0);

	this.addChild(this.shape_17,this.shape_16,this.shape_15,this.shape_14);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.2,-29.9,37.3,60.1);


(lib.laugh_parts_a = function() {
	this.initialize();

	// レイヤー 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FF9933","#FCE99A"],[0,1],-9.7,0,9.9,0).s().p("ABigDIgKBDIizgPIgGhwIDDA8").cp();
	this.shape_18.setTransform(-17.8,-20.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#FE9E39","#FCE99A"],[0,1],-10.8,0,10.9,0).s().p("ABAhtIAsA2IimClIgyhnICsh0").cp();
	this.shape_19.setTransform(-13.2,15.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FE9C37","#FCE99A"],[0,1],-14.7,0,14.8,0).s().p("ACLg8IAJA9IkfA8IgHhoIEdgR").cp();
	this.shape_20.setTransform(-23.7,-1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF7812").s().p("ABnhIIkdARIAIBpIEeg7IgJg/AB8h3IjOgRIgHiaIDkBGIgPBlAB6jPIjDg8IAGByICzAPIAKhFAB3hZIANBbIlBBEIgMiLIFAgUACFApIirB2IAwBnICoinIgtg2ACJASIBBBOIjFDDIhCiLIDGiG").cp();
	this.shape_21.setTransform(-20.1,0);

	this.addChild(this.shape_21,this.shape_20,this.shape_19,this.shape_18);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.4,-29.1,40.5,58.4);


(lib.chord2 = function() {
	this.initialize();

	// レイヤー 1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FC8D05").s().p("ACfhrQABAJABB8QAAA/AAA9QACAEABADQAHAUgWAUQgVAVglAIQglAJgegJQgcgIgHgUQgGgUAUgUQAVgVAlgIQAlgIAeAIQAGABAFADIAAjMQgIgHh7hVIAADFQACAEABADQAHAUgUAUQgVAVglAIQglAJgegJQgegIgHgUQgGgUAWgUQAVgVAlgIQAlgIAeAIQAGABAFADIAAj3QAQAMBGAxQBIAzANALIAAAA").cp();
	this.shape_22.setTransform(16.7,23.1);

	this.addChild(this.shape_22);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33.3,46.2);


(lib.chord1 = function() {
	this.initialize();

	// レイヤー 1
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FCE05F").s().p("ACagDQgShFg+gXQgTgIgVgBIgSgBIAADFQACAEABADQAHAUgWAUQgTAVglAIQglAJgegJQgegIgHgUQgGgUAWgUQAVgVAlgIQAlgIAeAIQAGABAFADIAAj3QAHAJAjAJQArAMARAIQBLAkgTBfIAAAA").cp();
	this.shape_23.setTransform(15.9,17.3);

	this.addChild(this.shape_23);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31.7,34.6);


(lib.spread_flower_pink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:1},true);

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
	this.instance_9 = new lib.flower_pink2("synched",0);
	this.instance_9.setTransform(21.4,5.2,0.715,0.715);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({startPosition:0,_off:false},0).to({scaleX:1.2,scaleY:1.2,rotation:-608.8,x:59.1,y:2.8,alpha:0.5},4,cjs.Ease.get(1)).to({scaleX:1.41,scaleY:1.41,rotation:-1079.9,x:76.1,y:1.7,alpha:0.219},5).to({_off:true},1).wait(1));

	// flower2
	this.instance_10 = new lib.flower_pink2("synched",0);
	this.instance_10.setTransform(-13.9,-10.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({startPosition:0,_off:false},0).to({scaleX:1.29,scaleY:1.29,rotation:-556.2,x:-27.7,y:-28.7,alpha:0.57},4,cjs.Ease.get(1)).to({scaleX:1.54,scaleY:1.54,rotation:-1079.9,x:-39.2,y:-44.5,alpha:0.219},5).to({_off:true},1).wait(1));

	// flower1
	this.instance_11 = new lib.flower_pink1("synched",0);
	this.instance_11.setTransform(15.8,-6.4,0.793,0.793);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({startPosition:0,_off:false},0).to({scaleX:0.96,scaleY:0.96,rotation:-556.2,x:39.3,y:-31,alpha:0.57},4,cjs.Ease.get(1)).to({scaleX:1.11,scaleY:1.11,rotation:-1079.9,x:58.8,y:-51.5,alpha:0.219},5).to({_off:true},1).wait(1));

	// flower3
	this.instance_12 = new lib.flower_pink2("synched",0);
	this.instance_12.setTransform(-14.4,14.3,0.715,0.715);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({startPosition:0,_off:false},0).to({scaleX:1.09,scaleY:1.09,rotation:-556.2,x:-32.7,y:39.2,alpha:0.57},4,cjs.Ease.get(1)).to({scaleX:1.41,scaleY:1.41,rotation:-1079.9,x:-48.1,y:59.8,alpha:0.219},5).to({_off:true},1).wait(1));

	// flower3
	this.instance_13 = new lib.flower_pink2("synched",0);
	this.instance_13.setTransform(5.6,19);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({startPosition:0,_off:false},0).to({scaleX:1.26,scaleY:1.26,rotation:-556.2,x:16.6,y:47.3,alpha:0.57},4,cjs.Ease.get(1)).to({scaleX:1.49,scaleY:1.49,rotation:-1079.9,x:25.7,y:70.8,alpha:0.219},5).to({_off:true},1).wait(1));

	// flower2
	this.instance_14 = new lib.flower_pink2("synched",0);
	this.instance_14.setTransform(-20.8,2.2);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({startPosition:0,_off:false},0).to({scaleX:1.49,scaleY:1.49,rotation:-556.2,x:-49.6,y:4.7,alpha:0.57},4,cjs.Ease.get(1)).to({scaleX:1.89,scaleY:1.89,rotation:-1079.9,x:-73.7,y:6.7,alpha:0.219},5).to({_off:true},1).wait(1));

	// flower1
	this.instance_15 = new lib.flower_pink1("synched",0);
	this.instance_15.setTransform(0.3,-12.1,0.781,0.781,-44.9);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({startPosition:0,_off:false},0).to({scaleX:1.1,scaleY:1.1,rotation:-413.2,x:-1.4,y:-47,alpha:0.57},4,cjs.Ease.get(1)).to({scaleX:1.36,scaleY:1.36,rotation:-1079.9,x:-3,y:-76.3,alpha:0.219},5).to({_off:true},1).wait(1));

	// レイヤー 1
	this.instance_16 = new lib.spread_flower_circle_pink();
	this.instance_16.setTransform(0,0,0.558,0.558);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({_off:false},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.398},0).to({scaleX:1.35,scaleY:1.35,alpha:0.352},3,cjs.Ease.get(-0.99)).to({scaleX:1.72,scaleY:1.72,alpha:0.051},5,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mc_eye_close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{run:1},true);

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

	// レイヤー 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AHRjTIBcECIjPAtIi+gKIkyBGIieBOIidA8IhfiPIBajfICbhaICiAHICwhQICPgyIEnBO").cp();
	mask.setTransform(-3.9,-87.4);

	// レイヤー 1
	this.instance_17 = new lib.eye_close();

	this.instance_17.mask = mask;
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({alpha:1},0).to({alpha:0},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.9,-279.9,640,520);


(lib.mc_exclamation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{run:1},true);

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
	this.instance_18 = new lib.gr_exclamation();
	this.instance_18.setTransform(-3.9,12.4,0.461,0.461,15);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({_off:false},0).to({scaleX:1.14,scaleY:1.14,x:1.2,y:-3.5},1,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1,x:0,y:0.4},5,cjs.Ease.get(1)).wait(10).to({scaleX:0.66,scaleY:0.66,x:-6.9,y:24.4,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.character_set = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{init:0},true);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eye}]}).wait(21));

	// core
	this.core = new lib.character_core();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.core}]}).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.9,-279.9,640,520);


(lib.sweat_fly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{run:1},true);

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
	this.instance_19 = new lib.drop1("synched",0);
	this.instance_19.setTransform(3.3,-10,1,1,0,0,180);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({startPosition:0,_off:false},0).to({skewX:45,skewY:225.1,x:35.3,y:-21.3,alpha:0.219},3,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({skewX:0,skewY:180,x:3.3,y:-9.9,alpha:1,_off:false},0).to({skewX:45,skewY:225.1,x:35.3,y:-21.3,alpha:0.219},3,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// drop2
	this.instance_20 = new lib.drop2("synched",0);
	this.instance_20.setTransform(4.8,-1.6,0.848,0.848,0,-14.9,165);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,skewX:30,skewY:210.1,x:40.8,y:3.6,alpha:0.219},3,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({scaleX:0.85,scaleY:0.85,skewX:-14.8,skewY:165,x:4.8,y:-1.5,alpha:1,_off:false},0).to({scaleX:1,scaleY:1,skewX:30,skewY:210.1,x:40.8,y:-1.3,alpha:0.219},3,cjs.Ease.get(1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mc_question = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{run:1},true);

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
	this.instance_21 = new lib.question();
	this.instance_21.setTransform(-0.7,-1.4);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({_off:false},0).to({x:0.1,y:-27.5,alpha:1},3,cjs.Ease.get(1)).to({y:-16.7},4,cjs.Ease.get(-0.99)).to({y:-18.2},2).wait(7).to({y:-9.3,alpha:0},5,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.notice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{run:1},true);

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
	this.instance_22 = new lib.notice_passion_inner();
	this.instance_22.setTransform(4.2,-9.5,1,1,-51.6,0,0,48.5,0.1);

	this.instance_23 = new lib.notice_passion_inner();
	this.instance_23.setTransform(10.4,-9.3,1,1,-18.1,0,0,48.5,0.1);

	this.instance_24 = new lib.notice_passion_inner();
	this.instance_24.setTransform(11.1,-12.5,1,1,5.5,0,0,48.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22}]},1).to({state:[]},2).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22}]},3).to({state:[]},2).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22}]},3).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.laugh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{run:1},true);

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
	this.instance_25 = new lib.laugh_parts_a("synched",0);
	this.instance_25.setTransform(-30.2,20.5,1.074,0.957,0,0,0,-20.2,0);

	this.instance_26 = new lib.laugh_parts_b("synched",0);
	this.instance_26.setTransform(-29.5,22.9,1.134,0.975,0,0,0,-18.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_25,p:{scaleX:1.074,scaleY:0.957,x:-30.2,regX:-20.2}}]},1).to({state:[{t:this.instance_25,p:{scaleX:1,scaleY:1,x:-28.7,regX:-20.2}}]},1).to({state:[{t:this.instance_25,p:{scaleX:0.969,scaleY:1.017,x:-28,regX:-20.1}}]},3).to({state:[{t:this.instance_26,p:{scaleX:1.134,scaleY:0.975,x:-29.5}}]},1).to({state:[{t:this.instance_26,p:{scaleX:1,scaleY:1,x:-27}}]},1).to({state:[{t:this.instance_26,p:{scaleX:0.946,scaleY:1.042,x:-26}}]},3).to({state:[{t:this.instance_25,p:{scaleX:1.074,scaleY:0.957,x:-30.2,regX:-20.2}}]},1).to({state:[{t:this.instance_25,p:{scaleX:1,scaleY:1,x:-28.7,regX:-20.2}}]},1).to({state:[{t:this.instance_25,p:{scaleX:0.969,scaleY:1.017,x:-28,regX:-20.1}}]},3).to({state:[{t:this.instance_26,p:{scaleX:1.134,scaleY:0.975,x:-29.5}}]},1).to({state:[{t:this.instance_26,p:{scaleX:1,scaleY:1,x:-27}}]},1).to({state:[{t:this.instance_26,p:{scaleX:0.946,scaleY:1.042,x:-26}}]},3).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.chord = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{run:1},true);

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
	this.instance_27 = new lib.chord2();
	this.instance_27.setTransform(-35.9,76.7,0.558,0.558,-0.2,0,0,15.7,17.4);
	this.instance_27.alpha = 0.102;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(2).to({_off:false},0).wait(1).to({regY:17.5,scaleX:0.61,scaleY:0.61,rotation:1.3,x:-37.3,y:68.4,alpha:0.172},0).wait(1).to({regX:15.6,scaleX:0.66,scaleY:0.66,rotation:3.1,x:-37.7,y:59.9,alpha:0.238},0).wait(1).to({regX:15.8,regY:17.4,scaleX:0.71,scaleY:0.71,rotation:5,x:-36.9,y:51.4,alpha:0.309},0).wait(1).to({regX:15.7,scaleX:0.76,scaleY:0.76,rotation:6.8,x:-34.9,y:43,alpha:0.379},0).wait(1).to({regX:15.6,scaleX:0.81,scaleY:0.81,rotation:8.6,x:-31.5,y:35.3,alpha:0.449},0).wait(1).to({regX:15.7,scaleX:0.86,scaleY:0.86,rotation:10.6,x:-26.5,y:28.3,alpha:0.52},0).wait(1).to({regY:17.5,scaleX:0.91,scaleY:0.91,rotation:12.5,x:-20.2,y:22.6,alpha:0.59},0).wait(1).to({regX:15.9,regY:17.4,scaleX:0.96,scaleY:0.96,rotation:14.3,x:-13.8,y:16.9,alpha:0.66},0).wait(1).to({scaleX:1,scaleY:1,rotation:7,x:-9.7,y:11.4,alpha:0.711},0).wait(1).to({regX:15.8,scaleX:1.04,scaleY:1.04,rotation:0,x:-6.3,y:5.5,alpha:0.77},0).wait(1).to({regX:15.9,scaleX:1.08,scaleY:1.08,rotation:-7.4,x:-3.7,y:-0.7,alpha:0.828},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:-14.9,x:-2.2,y:-7.3,alpha:0.891},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:-22.4,x:-1.6,y:-14,alpha:0.941},0).wait(1).to({regX:15.8,regY:17.3,scaleX:1.21,scaleY:1.21,rotation:-29.8,x:-2,y:-20.6,alpha:1},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:-24.8,x:-2.5,y:-23.3,alpha:0.801},0).wait(1).to({rotation:-19.8,x:-3.3,y:-25.8,alpha:0.602},0).wait(1).to({regX:15.9,scaleX:1.21,scaleY:1.21,rotation:-14.9,x:-4.2,y:-28.4,alpha:0.398},0).wait(1).to({regX:15.8,scaleX:1.21,scaleY:1.21,rotation:-10.1,x:-5.6,y:-30.7,alpha:0.199},0).wait(1).to({regX:15.9,rotation:-5.4,x:-7.3,y:-32.9,alpha:0},0).to({_off:true},1).wait(1));

	// chord
	this.instance_28 = new lib.chord1();
	this.instance_28.setTransform(-23.4,77.3,0.989,0.989,-44.9,0,0,15.8,17.4);
	this.instance_28.alpha = 0.102;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(1).to({_off:false},0).wait(1).to({regX:15.7,scaleX:1.01,scaleY:1.01,rotation:-37.4,x:-17.5,y:67.4,alpha:0.191},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:-29.9,x:-10.7,y:58.1,alpha:0.281},0).wait(1).to({regX:15.8,scaleX:1.05,scaleY:1.05,rotation:-22.3,x:-2.6,y:49.8,alpha:0.371},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:-14.8,x:6.7,y:43,alpha:0.461},0).wait(1).to({regY:17.3,scaleX:1.1,scaleY:1.1,rotation:-7.3,x:17.1,y:37.9,alpha:0.551},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:0,x:26.8,y:31.6,alpha:0.641},0).wait(1).to({regY:17.4,scaleX:1.14,scaleY:1.14,rotation:7.3,x:35.2,y:23.5,alpha:0.73},0).wait(1).to({scaleX:1.16,scaleY:1.16,rotation:14.8,x:41.8,y:13.8,alpha:0.82},0).wait(1).to({regY:17.3,scaleX:1.19,scaleY:1.19,rotation:22.3,x:46.7,y:3.2,alpha:0.91},0).wait(1).to({regX:15.9,scaleX:1.21,scaleY:1.21,rotation:30,x:50.1,y:-7.7,alpha:1},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:29.8,x:52.1,y:-11.7,alpha:0.84},0).wait(1).to({x:54.1,y:-15.9,alpha:0.672},0).wait(1).to({x:56.2,y:-20.1,alpha:0.5},0).wait(1).to({regX:15.8,scaleX:1.21,scaleY:1.21,x:58.2,y:-24.2,alpha:0.34},0).wait(1).to({regX:15.9,regY:17.2,scaleX:1.21,scaleY:1.21,rotation:29.9,x:60.4,y:-28.4,alpha:0.172},0).wait(1).to({regY:17.3,scaleX:1.21,scaleY:1.21,rotation:30,x:62.5,y:-32.5,alpha:0},0).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mc_effect_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// chord
	this.chord = new lib.chord();
	this.chord.setTransform(-48.9,-14.4,0.999,0.999,-48.6,0,0,-23.6,77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.chord}]}).wait(7));

	// exclamation
	this.exclamation = new lib.mc_exclamation();
	this.exclamation.setTransform(-80.5,-44.1,1,1,-42.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.exclamation}]}).wait(7));

	// laugh
	this.laugh = new lib.laugh();
	this.laugh.setTransform(-82.7,-43.6,1.198,1.198,35.2,0,0,-30.2,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.laugh}]}).wait(7));

	// notice
	this.notice = new lib.notice();
	this.notice.setTransform(-84.1,-32.6,1,1,33.9,0,0,-28.5,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.notice}]}).wait(7));

	// question
	this.question = new lib.mc_question();
	this.question.setTransform(-69.9,-37.9,1,1,-17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.question}]}).wait(7));

	// sweat_fly
	this.sweat_fly = new lib.sweat_fly();
	this.sweat_fly.setTransform(-66.9,-30.9,1.4,1.4,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sweat_fly}]}).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.cjs001_character_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{wait:1,jump:12,jump_flower:21,jump_double:38,nod:53,swing:61},true);

	// timeline functions:
	this.frame_0 = function() {
		this.character_set.faceblink = [];
		
		//init
		//0:まばたきしない 1~:まばたきする
		this.character_set.faceblink[0] = 1;
		this.character_set.faceblink[1] = 0;
		this.character_set.faceblink[2] = 0;
		this.character_set.faceblink[3] = 1;
		this.character_set.faceblink[4] = 0;
		this.character_set.faceblink[5] = 0;
		this.character_set.faceblink[6] = 0;
		this.character_set.faceblink[7] = 0;
		
		//表情指定に動きを合わせる
		this.motion_act = function(num, flg){
			
			if(flg){
				switch(num){
					case 0:
						//通常
						this.gotoAndPlay("jump");
						break;
					case 1:
						//喜び
						this.gotoAndPlay("jump_flower");
						break;
					case 2:
						//ドヤッ
						this.gotoAndPlay("nod");
						break;
					case 3:
						//キリッ
						this.gotoAndPlay("jump");
						break;
					case 4:
						//デレ
						this.gotoAndPlay("swing");
						break;
					case 5:
						//目閉じ
						this.gotoAndPlay("nod");
						break;
					case 6:
						//怒る拗ねる
						this.gotoAndPlay("jump_double");
						break;
					case 7:
						//ハートウェーブ
						this.gotoAndPlay("nod");
						break;
				}
			}
			
			//表情指定
			this.character_set.facechange(num);
		}
		
		
		this.effect_act = function(num){
			
			switch(num){
				case 0:
					//chord
					this.wait_effect.chord.gotoAndPlay("run");
					this.character_set.facechange(1);
				
					break;
				case 1:
					//exclamation
					this.wait_effect.exclamation.gotoAndPlay("run");
					this.character_set.facechange(3);
				
					break;
				case 2:
					//laugh
					this.wait_effect.laugh.gotoAndPlay("run");
					this.character_set.facechange(1);
				
					break;
				case 3:
					//notice
					this.wait_effect.notice.gotoAndPlay("run");
					this.character_set.facechange(0);
				
					break;
				case 4:
					//question
					this.wait_effect.question.gotoAndPlay("run");
					this.character_set.facechange(0);
				
					break;
				case 5:
					//sweat_fly
					this.wait_effect.sweat_fly.gotoAndPlay("run")
					this.character_set.facechange(3);
					
				
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
	this.frame_74 = function() {
		this.gotoAndPlay("wait");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(9).call(this.frame_20).wait(4).call(this.frame_24).wait(13).call(this.frame_37).wait(14).call(this.frame_51).wait(9).call(this.frame_60).wait(14).call(this.frame_74).wait(6));

	// wait_effect
	this.wait_effect = new lib.mc_effect_container();
	this.wait_effect.setTransform(0,-326.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wait_effect}]}).wait(81));

	// effect
	this.flower_pink = new lib.spread_flower_pink();
	this.flower_pink.setTransform(1,-331.9,1.8,1.8);
	this.flower_pink._off = true;

	this.timeline.addTween(cjs.Tween.get(this.flower_pink).wait(21).to({_off:false},0).to({_off:true},16).wait(44));

	// character_set
	this.character_set = new lib.character_set();
	this.character_set.setTransform(0,0,1,1,0,0,0,0,240);

	this.timeline.addTween(cjs.Tween.get(this.character_set).wait(12).to({y:6},0).to({y:-9.8},3,cjs.Ease.get(1)).to({y:3},3,cjs.Ease.get(-0.99)).to({y:0},2).wait(1).to({y:6},2,cjs.Ease.get(1)).to({y:-17.8},3,cjs.Ease.get(1)).to({y:3},4,cjs.Ease.get(-0.99)).to({y:0},2).wait(5).wait(1).to({y:7},0).to({y:-9.8},2,cjs.Ease.get(1)).to({y:7},3,cjs.Ease.get(-0.99)).to({y:-9.8},2,cjs.Ease.get(1)).to({y:7},3,cjs.Ease.get(-0.99)).to({y:0},3).wait(2).to({y:10},3,cjs.Ease.get(1)).to({y:0},4,cjs.Ease.get(-0.99)).wait(1).to({rotation:-1.3,x:0.3},6,cjs.Ease.get(1)).to({rotation:0,x:0},7,cjs.Ease.get(-0.99)).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.9,-519.9,640,520);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;