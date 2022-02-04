(function(a, l) {
    function x() {
        var a = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        a.gotoAndStop(this.currentFrame);
        a.paused = this.paused;
        a.framerate = this.framerate;
        return a
    }

    function h(b, d, e) {
        b = a.extend(b, a.MovieClip);
        b.clone = x;
        b.nominalBounds = d;
        b.frameBounds = e;
        return b
    }
    var g, b = {},
        y = {},
        k = {};
    b.ssMetadata = [];
    (b.button = function() {
        this.initialize(k.common_gacha_button)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 120, 48);
    (b.glitter = function() {
        this.initialize(k.common_gacha_glitter)
    }).prototype =
        g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 40, 40);
    (b.image80 = function() {
        this.initialize(k.common_gacha_image80)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 78, 78);
    (b.LocalAudition = function() {
        this.initialize(k.common_gacha_LocalAudition)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 480, 70);
    (b.LocalAudition_light = function() {
        this.initialize(k.common_gacha_LocalAudition_light)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 480, 70);
    (b.LocalAudition_shadow =
        function() {
            this.initialize(k.common_gacha_LocalAudition_shadow)
        }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 480, 70);
    (b.NEW = function() {
        this.initialize(k.common_gacha_NEW)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 112, 50);
    (b.new_bg_s_maku = function() {
        this.initialize(k.common_gacha_new_bg_s_maku)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 172, 172);
    (b.new_bg_s_maku_b = function() {
        this.initialize(k.common_gacha_new_bg_s_maku_b)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 172, 172);
    (b.new_w = function() {
        this.initialize(k.common_gacha_new_w)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 112, 50);
    (b.p0 = function() {
        this.initialize(k.common_gacha_p0)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 42, 44);
    (b.p0_w = function() {
        this.initialize(k.common_gacha_p0_w)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 42, 44);
    (b.p1 = function() {
        this.initialize(k.common_gacha_p1)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 42, 44);
    (b.p1_w = function() {
        this.initialize(k.common_gacha_p1_w)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 42, 44);
    (b.p2 = function() {
        this.initialize(k.common_gacha_p2)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 42, 44);
    (b.p2_w = function() {
        this.initialize(k.common_gacha_p2_w)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 42, 44);
    (b.p3 = function() {
        this.initialize(k.common_gacha_p3)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds =
        new a.Rectangle(0, 0, 42, 44);
    (b.p3_w = function() {
        this.initialize(k.common_gacha_p3_w)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 42, 44);
    (b.p4 = function() {
        this.initialize(k.common_gacha_p4)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 42, 44);
    (b.p4_w = function() {
        this.initialize(k.common_gacha_p4_w)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 42, 44);
    (b.p5 = function() {
        this.initialize(k.common_gacha_p5)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0,
        0, 42, 44);
    (b.p5_w = function() {
        this.initialize(k.common_gacha_p5_w)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 42, 44);
    (b.p6 = function() {
        this.initialize(k.common_gacha_p6)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 42, 44);
    (b.p6_w = function() {
        this.initialize(k.common_gacha_p6_w)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 42, 44);
    (b.p7 = function() {
        this.initialize(k.common_gacha_p7)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 42,
        44);
    (b.p7_w = function() {
        this.initialize(k.common_gacha_p7_w)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 42, 44);
    (b.p8 = function() {
        this.initialize(k.common_gacha_p8)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 42, 44);
    (b.p8_w = function() {
        this.initialize(k.common_gacha_p8_w)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 42, 44);
    (b.p9 = function() {
        this.initialize(k.common_gacha_p9)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 42, 44);
    (b.p9_w =
        function() {
            this.initialize(k.common_gacha_p9_w)
        }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 42, 44);
    (b.plus = function() {
        this.initialize(k.common_gacha_plus)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 42, 44);
    (b.plus_w = function() {
        this.initialize(k.common_gacha_plus_w)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 42, 44);
    (b.replace_bg = function() {
        this.initialize(k.common_gacha_replace_bg)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0,
        0, 480, 640);
    (b.replace_bg_blur = function() {
        this.initialize(k.common_gacha_replace_bg_blur)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 480, 640);
    (b.replace_caption = function() {
        this.initialize(k.common_gacha_replace_caption)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 336, 36);
    (b.replace_card01 = function() {
        this.initialize(k.common_gacha_replace_card01)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 220, 275);
    (b.replace_card02 = function() {
        this.initialize(k.common_gacha_replace_card02)
    }).prototype =
        g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 220, 275);
    (b.replace_card03 = function() {
        this.initialize(k.common_gacha_replace_card03)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 220, 275);
    (b.replace_card04 = function() {
        this.initialize(k.common_gacha_replace_card04)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 220, 275);
    (b.replace_card05 = function() {
        this.initialize(k.common_gacha_replace_card05)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 220, 275);
    (b.replace_card06 = function() {
        this.initialize(k.common_gacha_replace_card06)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 220, 275);
    (b.replace_card07 = function() {
        this.initialize(k.common_gacha_replace_card07)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 220, 275);
    (b.replace_card08 = function() {
        this.initialize(k.common_gacha_replace_card08)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 220, 275);
    (b.replace_card09 = function() {
        this.initialize(k.common_gacha_replace_card09)
    }).prototype =
        g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 220, 275);
    (b.replace_card10 = function() {
        this.initialize(k.common_gacha_replace_card10)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 220, 275);
    (b.replace_card_l1 = function() {
        this.initialize(k.common_gacha_replace_card_l1)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 640, 800);
    (b.replace_card_l10 = function() {
        this.initialize(k.common_gacha_replace_card_l10)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0,
        640, 800);
    (b.replace_card_l2 = function() {
        this.initialize(k.common_gacha_replace_card_l2)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 640, 800);
    (b.replace_card_l3 = function() {
        this.initialize(k.common_gacha_replace_card_l3)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 640, 800);
    (b.replace_card_l4 = function() {
        this.initialize(k.common_gacha_replace_card_l4)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 640, 800);
    (b.replace_card_l5 = function() {
        this.initialize(k.common_gacha_replace_card_l5)
    }).prototype =
        g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 640, 800);
    (b.replace_card_l6 = function() {
        this.initialize(k.common_gacha_replace_card_l6)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 640, 800);
    (b.replace_card_l7 = function() {
        this.initialize(k.common_gacha_replace_card_l7)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 640, 800);
    (b.replace_card_l8 = function() {
        this.initialize(k.common_gacha_replace_card_l8)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0,
        640, 800);
    (b.replace_card_l9 = function() {
        this.initialize(k.common_gacha_replace_card_l9)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 640, 800);
    (b.replace_costume01 = function() {
        this.initialize(k.common_gacha_replace_costume01)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 120, 120);
    (b.replace_costume02 = function() {
        this.initialize(k.common_gacha_replace_costume02)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 120, 120);
    (b.replace_costume03 = function() {
        this.initialize(k.common_gacha_replace_costume03)
    }).prototype =
        g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 120, 120);
    (b.replace_costume04 = function() {
        this.initialize(k.common_gacha_replace_costume04)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 120, 120);
    (b.replace_costume05 = function() {
        this.initialize(k.common_gacha_replace_costume05)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 120, 120);
    (b.replace_costume06 = function() {
        this.initialize(k.common_gacha_replace_costume06)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0,
        0, 120, 120);
    (b.replace_costume07 = function() {
        this.initialize(k.common_gacha_replace_costume07)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 120, 120);
    (b.replace_costume08 = function() {
        this.initialize(k.common_gacha_replace_costume08)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 120, 120);
    (b.replace_costume09 = function() {
        this.initialize(k.common_gacha_replace_costume09)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 120, 120);
    (b.replace_costume10 = function() {
        this.initialize(k.common_gacha_replace_costume10)
    }).prototype =
        g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 120, 120);
    (b.replace_petit01 = function() {
        this.initialize(k.common_gacha_replace_petit01)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 140, 190);
    (b.replace_petit02 = function() {
        this.initialize(k.common_gacha_replace_petit02)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 140, 190);
    (b.replace_petit03 = function() {
        this.initialize(k.common_gacha_replace_petit03)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0,
        140, 190);
    (b.replace_petit04 = function() {
        this.initialize(k.common_gacha_replace_petit04)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 140, 190);
    (b.replace_petit05 = function() {
        this.initialize(k.common_gacha_replace_petit05)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 140, 190);
    (b.replace_petit06 = function() {
        this.initialize(k.common_gacha_replace_petit06)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 140, 190);
    (b.replace_petit07 = function() {
        this.initialize(k.common_gacha_replace_petit07)
    }).prototype =
        g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 140, 190);
    (b.replace_petit08 = function() {
        this.initialize(k.common_gacha_replace_petit08)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 140, 190);
    (b.replace_petit09 = function() {
        this.initialize(k.common_gacha_replace_petit09)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 140, 190);
    (b.replace_petit10 = function() {
        this.initialize(k.common_gacha_replace_petit10)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0,
        140, 190);
    (b.replace_title = function() {
        this.initialize(k.common_gacha_replace_title)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 360, 140);
    (b.replace_title_light = function() {
        this.initialize(k.common_gacha_replace_title_light)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 360, 140);
    (b.scout_medal = function() {
        this.initialize(k.common_gacha_scout_medal)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 80, 80);
    (b.sp_bMas2k = function() {
        this.initialize(k.common_gacha_sp_bMas2k)
    }).prototype =
        g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 240, 320);
    (b.sp_bMask = function() {
        this.initialize(k.common_gacha_sp_bMask)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 480, 640);
    (b.sp_whiteGlow = function() {
        this.initialize(k.common_gacha_sp_whiteGlow)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 112, 132);
    (b.star = function() {
        this.initialize(k.common_gacha_star)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 40, 40);
    (b.star_rainbow = function() {
        this.initialize(k.common_gacha_star_rainbow)
    }).prototype =
        g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 792, 774);
    (b.vignette_mask = function() {
        this.initialize(k.common_gacha_vignette_mask)
    }).prototype = g = new a.Bitmap;
    g.nominalBounds = new a.Rectangle(0, 0, 480, 600);
    (b.\u30ab\u30fc\u30c6\u30f32 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#E6D1B6").s().p("Ap9OwIAA9fIT7AAIAAdfg");
        this.shape.setTransform(.025, 94.425);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#E6D1B6").s().p("Ap7OwIgCgBIAA9fIT7AAIAAACQgEJKg7JBQAdFhAOFjIgvAQg");
        this.shape_1.setTransform(-.975, 94.475);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#E6D1B6").s().p("Ap8OvIgBgBIAA9eIT6AAIABABQgIJIh2I6QA5FdAcFhIgbAgg");
        this.shape_2.setTransform(-1.975, 94.525);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("#E6D1B6").s().p("Ap9OvIAAgDIAA9dIT6AAIABABQgMJHixIxQBVFaArFfIgJAxg");
        this.shape_3.setTransform(-2.975, 94.575);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.f("#E6D1B6").s().p("Ap9OuIAA9fIT7AAQgQJGjsIpQB8F2A5F+g");
        this.shape_4.setTransform(-3.975, 94.625);
        this.shape_5 = new a.Shape;
        this.shape_5.graphics.f("#E6D1B6").s().p("AqauvIU1ABQhAJNjnIpQA7F6BfFgIyoAOg");
        this.shape_5.setTransform(-16.925, 94.425);
        this.shape_6 = new a.Shape;
        this.shape_6.graphics.f("#E6D1B6").s().p("Aq3uvIVvACQhvJTjjIpQgFGACDFAIybAhg");
        this.shape_6.setTransform(-29.875, 94.425);
        this.shape_7 = new a.Shape;
        this.shape_7.graphics.f("#E6D1B6").s().p("ArUuvIWpADQifJZjfIqQhEGECoEhIyPA0g");
        this.shape_7.setTransform(-42.825, 94.425);
        this.shape_8 = new a.Shape;
        this.shape_8.graphics.f("#E6D1B6").s().p("Ap6uvIT1ADQgzJwiWITQhFGEhKEYIudA9g");
        this.shape_8.setTransform(-51.85, 94.425);
        this.shape_9 = new a.Shape;
        this.shape_9.graphics.f("#E6D1B6").s().p("AosuvIRBADQA5KGhOH9QhFGEk8EQIqrBFg");
        this.shape_9.setTransform(-59.6718, 94.425);
        this.shape_10 = new a.Shape;
        this.shape_10.graphics.f("#E6D1B6").s().p("AnhuvIOpACQAwJ0gqH+QgoGMjaErIqtA0g");
        this.shape_10.setTransform(-53.2062, 94.425);
        this.shape_11 = new a.Shape;
        this.shape_11.graphics.f("#E6D1B6").s().p("AmZuvIMRABQAoJhgIIAQgKGTh4FHIqvAjg");
        this.shape_11.setTransform(-46.4462, 94.425);
        this.shape_12 =
            new a.Shape;
        this.shape_12.graphics.f("#E6D1B6").s().p("AleuvIJ5ABIA6RPQAUGbgWFjIqxARg");
        this.shape_12.setTransform(-38.3554, 94.425);
        this.shape_13 = new a.Shape;
        this.shape_13.graphics.f("#E6D1B6").s().p("AlZOwIAA9fIHhAAQAXI7A+IDQAyGjBKF+g");
        this.shape_13.setTransform(-24.9, 94.425);
        this.shape_14 = new a.Shape;
        this.shape_14.graphics.f("#E6D1B6").s().p("AkJOuIg3gSIAA9OIHcAAIAFAPQAXIqAuH3QAmGfA1F9IhQAZg");
        this.shape_14.setTransform(-27.85, 94.6563);
        this.shape_15 = new a.Shape;
        this.shape_15.graphics.f("#E6D1B6").s().p("AkDOsIglgjIAA89IHYAAIAJAKQAXIkAgHzQAZGcAgF7Ig3Axg");
        this.shape_15.setTransform(-30.8, 94.8875);
        this.shape_16 = new a.Shape;
        this.shape_16.graphics.f("#E6D1B6").s().p("Aj9OpIgSg0IAA8rIHTAAIANAFQAXIeARHvQAOGYAJF5IgcBKg");
        this.shape_16.setTransform(-33.75, 95.1188);
        this.shape_17 = new a.Shape;
        this.shape_17.graphics.f("#E6D1B6").s().p("Aj8OnIAA9gIHgAAQArQKgfNpg");
        this.shape_17.setTransform(-36.1963, 95.35);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape
            }]
        }, 2).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
                state: [{
                    t: this.shape_2
                }]
            },
            1).to({
            state: [{
                t: this.shape_3
            }]
        }, 1).to({
            state: [{
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_5
            }]
        }, 1).to({
            state: [{
                t: this.shape_6
            }]
        }, 1).to({
            state: [{
                t: this.shape_7
            }]
        }, 1).to({
            state: [{
                t: this.shape_8
            }]
        }, 1).to({
            state: [{
                t: this.shape_9
            }]
        }, 1).to({
            state: [{
                t: this.shape_10
            }]
        }, 1).to({
            state: [{
                t: this.shape_11
            }]
        }, 1).to({
            state: [{
                t: this.shape_12
            }]
        }, 1).to({
            state: [{
                t: this.shape_13
            }]
        }, 1).to({
            state: [{
                t: this.shape_14
            }]
        }, 1).to({
            state: [{
                t: this.shape_15
            }]
        }, 1).to({
            state: [{
                t: this.shape_16
            }]
        }, 1).to({
                state: [{
                    t: this.shape_17
                }]
            },
            1).to({
            state: []
        }, 1).wait(3))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-115.3, 0, 179.2, 190.7);
    (b.shape38 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,0,0.247)").s().p("AufO/IAA99Ic+AAIAAd9g");
        this.shape.setTransform(10.05, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-82.7, -95.8, 185.5, 191.7);
    (b.maku_oku_light_mc = function(b, d, e) {
        this.initialize(b,
            d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AmRHfIAAu9IMjAAIAAO9g");
        this.shape.setTransform(-2.475, 25.825);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.maku_oku_light_mc, new a.Rectangle(-42.7, -22, 80.5, 95.7), null);
    (b.\u30b7\u30f3\u30dc\u30eb1 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.lf(["#BBBBBB", "#E6D1B6"], [0, .082], 0, -37.3, 0, 31.4).s().p("AAEGSIgMsjIFVAAIAAMjgAlMGSIAAsjIFAAAIADMjg");
        this.shape.setTransform(.025,
            -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.\u30b7\u30f3\u30dc\u30eb1, new a.Rectangle(-33.2, -40.2, 66.5, 80.4), null);
    (b.white_mc = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.shape.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.white_mc, new a.Rectangle(0, 0, 240, 320), null);
    (b.w_bg_b = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance =
            new b.replace_bg_blur;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.w_bg_b, new a.Rectangle(0, 0, 480, 640), null);
    (b.w_bg = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_bg;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.w_bg, new a.Rectangle(0, 0, 480, 640), null);
    (b.title_l_light = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.LocalAudition_light;
        this.instance.parent =
            this;
        this.instance.setTransform(-240, -36);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-240, -36, 480, 70);
    (b.title_l_b = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.LocalAudition_shadow;
        this.instance.parent = this;
        this.instance.setTransform(-240, -36);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-240, -36, 480, 70);
    (b.title_l = function(f, d,
        e) {
        this.initialize(f, d, e, {});
        this.instance = new b.LocalAudition;
        this.instance.parent = this;
        this.instance.setTransform(-240, -36);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-240, -36, 480, 70);
    (b.star_flash = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AhjDTIjBgUIAni+Igni+IDBgWICohgIBQCxICQCDIiQCCIhQCxg");
        this.shape.setTransform(29.275, 30.8);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        h(b.star_flash, new a.Rectangle(0, 0, 58.6, 61.6), null);
    (b.plus_w_1 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.plus_w;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.plus_w_1, new a.Rectangle(0, 0, 42, 44), null);
    (b.medal_flash = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().rr(-24, -24, 48, 48, 6);
        this.shape.setTransform(24, 24);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        h(b.medal_flash, new a.Rectangle(0, 0, 48, 48), null);
    (b.item_flash = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AjvDwIAAnfIHfAAIAAHfg");
        this.shape.setTransform(24, 24);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.item_flash, new a.Rectangle(0, 0, 48, 48), null);
    (b.icon_w = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AjvDwIAAnfIHfAAIAAHfg");
        this.shape.setTransform(24,
            24);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.icon_w, new a.Rectangle(0, 0, 48, 48), null);
    (b.curtain_p = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#F2D1E4").s().p("AnzH0IAAvnIPnAAIAAPng");
        this.shape.setTransform(49.975, 50);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.curtain_p, new a.Rectangle(0, 0, 100, 100), null);
    (b.card10 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card10;
        this.instance.parent =
            this;
        this.instance.setTransform(-110, -137.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.card10, new a.Rectangle(-110, -137.5, 220, 275), null);
    (b.card9 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card09;
        this.instance.parent = this;
        this.instance.setTransform(-110, -137.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.card9, new a.Rectangle(-110, -137.5, 220, 275), null);
    (b.card8 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance =
            new b.replace_card08;
        this.instance.parent = this;
        this.instance.setTransform(-110, -137.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.card8, new a.Rectangle(-110, -137.5, 220, 275), null);
    (b.card7 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card07;
        this.instance.parent = this;
        this.instance.setTransform(-110, -137.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.card7, new a.Rectangle(-110, -137.5, 220, 275), null);
    (b.card6 = function(f,
        d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card06;
        this.instance.parent = this;
        this.instance.setTransform(-110, -137.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.card6, new a.Rectangle(-110, -137.5, 220, 275), null);
    (b.card5 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card05;
        this.instance.parent = this;
        this.instance.setTransform(-110, -137.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.card5, new a.Rectangle(-110,
        -137.5, 220, 275), null);
    (b.card4 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card04;
        this.instance.parent = this;
        this.instance.setTransform(-110, -137.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.card4, new a.Rectangle(-110, -137.5, 220, 275), null);
    (b.card3 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card03;
        this.instance.parent = this;
        this.instance.setTransform(-110, -137.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.card3, new a.Rectangle(-110, -137.5, 220, 275), null);
    (b.card2 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card02;
        this.instance.parent = this;
        this.instance.setTransform(-110, -137.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.card2, new a.Rectangle(-110, -137.5, 220, 275), null);
    (b.card1 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.visible = !1;
            var a = this;
            this.origin_scale = .4363;
            setTimeout(function() {
                if (220 != a.children[0].image.width ||
                    275 != a.children[0].image.height) a.scaleX = 220 / a.children[0].image.width * a.origin_scale, a.scaleY = 275 / a.children[0].image.height * a.origin_scale;
                a.visible = !0
            }, 0)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.instance = new b.replace_card01;
        this.instance.parent = this;
        this.instance.setTransform(-110, -137.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.card1, new a.Rectangle(-110, -138, 220, 275.5), null);
    (b.card_w = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AjvEsIAApXIHfAAIAAJXg");
        this.shape.setTransform(24, 30);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.card_w, new a.Rectangle(0, 0, 48, 60), null);
    (b.card_srl10 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card_l10;
        this.instance.parent = this;
        this.instance.setTransform(-320, -400);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.card_srl10, new a.Rectangle(-320, -400,
        640, 800), null);
    (b.card_srl9 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card_l9;
        this.instance.parent = this;
        this.instance.setTransform(-320, -400);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.card_srl9, new a.Rectangle(-320, -400, 640, 800), null);
    (b.card_srl8 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card_l8;
        this.instance.parent = this;
        this.instance.setTransform(-320, -400);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.card_srl8, new a.Rectangle(-320, -400, 640, 800), null);
    (b.card_srl7 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card_l7;
        this.instance.parent = this;
        this.instance.setTransform(-320, -400);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.card_srl7, new a.Rectangle(-320, -400, 640, 800), null);
    (b.card_srl6 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card_l6;
        this.instance.parent = this;
        this.instance.setTransform(-320, -400);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.card_srl6, new a.Rectangle(-320, -400, 640, 800), null);
    (b.card_srl5 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card_l5;
        this.instance.parent = this;
        this.instance.setTransform(-320, -400);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.card_srl5, new a.Rectangle(-320, -400, 640, 800), null);
    (b.card_srl4 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card_l4;
        this.instance.parent = this;
        this.instance.setTransform(-320, -400);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.card_srl4, new a.Rectangle(-320, -400, 640, 800), null);
    (b.card_srl3 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card_l3;
        this.instance.parent = this;
        this.instance.setTransform(-320, -400);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.card_srl3, new a.Rectangle(-320, -400, 640, 800), null);
    (b.card_srl2 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card_l2;
        this.instance.parent = this;
        this.instance.setTransform(-320, -400);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.card_srl2, new a.Rectangle(-320, -400, 640, 800), null);
    (b.card_srl1 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card_l1;
        this.instance.parent = this;
        this.instance.setTransform(-320, -400);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.card_srl1, new a.Rectangle(-320, -400, 640, 800), null);
    (b.card_bk = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AjvEsIAApXIHfAAIAAJXg");
        this.shape.setTransform(24,
            30);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.card_bk, new a.Rectangle(0, 0, 48, 60), null);
    (b.card_b = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AnfJYIAAyvIO/AAIAASvg");
        this.shape.setTransform(48, 60);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.card_b, new a.Rectangle(0, 0, 96, 120), null);
    (b.black_mc = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.shape.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.black_mc, new a.Rectangle(0, 0, 240, 320), null);
    (b.\u30ab\u30fc\u30c6\u30f32\u30b3\u30d4\u30fc = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#60535A").s().p("Ap9OwIAA9fIT7AAIAAdfg");
        this.shape.setTransform(.025, 94.425);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#60535A").s().p("Ap7OwIgCgBIAA9fIT7AAIAAACQgEJKg7JBQAdFhAOFjIgvAQg");
        this.shape_1.setTransform(-.975,
            94.475);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#60535A").s().p("Ap8OvIgBgBIAA9eIT6AAIABABQgIJIh2I6QA5FdAcFhIgbAgg");
        this.shape_2.setTransform(-1.975, 94.525);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("#60535A").s().p("Ap9OvIAAgDIAA9dIT6AAIABABQgMJHixIxQBVFaArFfIgJAxg");
        this.shape_3.setTransform(-2.975, 94.575);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.f("#60535A").s().p("Ap9OuIAA9fIT7AAQgQJGjsIpQB8F2A5F+g");
        this.shape_4.setTransform(-3.975, 94.625);
        this.shape_5 = new a.Shape;
        this.shape_5.graphics.f("#60535A").s().p("AqauvIU1ABQhAJNjnIpQA7F6BfFgIyoAOg");
        this.shape_5.setTransform(-16.925, 94.425);
        this.shape_6 = new a.Shape;
        this.shape_6.graphics.f("#60535A").s().p("Aq3uvIVvACQhvJTjjIpQgFGACDFAIybAhg");
        this.shape_6.setTransform(-29.875, 94.425);
        this.shape_7 = new a.Shape;
        this.shape_7.graphics.f("#60535A").s().p("ArUuvIWpADQifJZjfIqQhEGECoEhIyPA0g");
        this.shape_7.setTransform(-42.825, 94.425);
        this.shape_8 = new a.Shape;
        this.shape_8.graphics.f("#60535A").s().p("Ap6uvIT1ADQgzJwiWITQhFGEhKEYIudA9g");
        this.shape_8.setTransform(-51.85, 94.425);
        this.shape_9 = new a.Shape;
        this.shape_9.graphics.f("#60535A").s().p("AosuvIRBADQA5KGhOH9QhFGEk8EQIqrBFg");
        this.shape_9.setTransform(-59.6718, 94.425);
        this.shape_10 = new a.Shape;
        this.shape_10.graphics.f("#60535A").s().p("AnhuvIOpACQAwJ0gqH+QgoGMjaErIqtA0g");
        this.shape_10.setTransform(-53.2062, 94.425);
        this.shape_11 = new a.Shape;
        this.shape_11.graphics.f("#60535A").s().p("AmZuvIMRABQAoJhgIIAQgKGTh4FHIqvAjg");
        this.shape_11.setTransform(-46.4462, 94.425);
        this.shape_12 = new a.Shape;
        this.shape_12.graphics.f("#60535A").s().p("AleuvIJ5ABIA6RPQAUGbgWFjIqxARg");
        this.shape_12.setTransform(-38.3554, 94.425);
        this.shape_13 = new a.Shape;
        this.shape_13.graphics.f("#60535A").s().p("AlZOwIAA9fIHhAAQAXI7A+IDQAyGjBKF+g");
        this.shape_13.setTransform(-24.9, 94.425);
        this.shape_14 = new a.Shape;
        this.shape_14.graphics.f("#60535A").s().p("AkJOuIg3gSIAA9OIHcAAIAFAPQAXIqAuH3QAmGfA1F9IhQAZg");
        this.shape_14.setTransform(-27.85, 94.6563);
        this.shape_15 = new a.Shape;
        this.shape_15.graphics.f("#60535A").s().p("AkDOsIglgjIAA89IHYAAIAJAKQAXIkAgHzQAZGcAgF7Ig3Axg");
        this.shape_15.setTransform(-30.8,
            94.8875);
        this.shape_16 = new a.Shape;
        this.shape_16.graphics.f("#60535A").s().p("Aj9OpIgSg0IAA8rIHTAAIANAFQAXIeARHvQAOGYAJF5IgcBKg");
        this.shape_16.setTransform(-33.75, 95.1188);
        this.shape_17 = new a.Shape;
        this.shape_17.graphics.f("#60535A").s().p("Aj8OnIAA9gIHgAAQArQKgfNpg");
        this.shape_17.setTransform(-36.1963, 95.35);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape
            }]
        }, 2).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
                state: [{
                    t: this.shape_3
                }]
            },
            1).to({
            state: [{
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_5
            }]
        }, 1).to({
            state: [{
                t: this.shape_6
            }]
        }, 1).to({
            state: [{
                t: this.shape_7
            }]
        }, 1).to({
            state: [{
                t: this.shape_8
            }]
        }, 1).to({
            state: [{
                t: this.shape_9
            }]
        }, 1).to({
            state: [{
                t: this.shape_10
            }]
        }, 1).to({
            state: [{
                t: this.shape_11
            }]
        }, 1).to({
            state: [{
                t: this.shape_12
            }]
        }, 1).to({
            state: [{
                t: this.shape_13
            }]
        }, 1).to({
            state: [{
                t: this.shape_14
            }]
        }, 1).to({
            state: [{
                t: this.shape_15
            }]
        }, 1).to({
            state: [{
                t: this.shape_16
            }]
        }, 1).to({
            state: [{
                t: this.shape_17
            }]
        }, 1).to({
            state: []
        }, 1).wait(3))
    }).prototype =
        g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-115.3, 0, 179.2, 190.7);
    (b.\u30ab\u30fc\u30c6\u30f32_1 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape_18 = new a.Shape;
        this.shape_18.graphics.f("#F2D1E4").s().p("Ap9OwIAA9fIT7AAIAAdfg");
        this.shape_18.setTransform(.025, 94.425);
        this.shape_19 = new a.Shape;
        this.shape_19.graphics.f("#F2D1E4").s().p("Ap7OwIgCgBIAA9fIT7AAIAAACQgEJKg7JBQAdFhAOFjIgvAQg");
        this.shape_19.setTransform(-.975, 94.475);
        this.shape_20 = new a.Shape;
        this.shape_20.graphics.f("#F2D1E4").s().p("Ap8OvIgBgBIAA9eIT6AAIABABQgIJIh2I6QA5FdAcFhIgbAgg");
        this.shape_20.setTransform(-1.975, 94.525);
        this.shape_21 = new a.Shape;
        this.shape_21.graphics.f("#F2D1E4").s().p("Ap9OvIAAgDIAA9dIT6AAIABABQgMJHixIxQBVFaArFfIgJAxg");
        this.shape_21.setTransform(-2.975, 94.575);
        this.shape_22 = new a.Shape;
        this.shape_22.graphics.f("#F2D1E4").s().p("Ap9OuIAA9fIT7AAQgQJGjsIpQB8F2A5F+g");
        this.shape_22.setTransform(-3.975, 94.625);
        this.shape_23 = new a.Shape;
        this.shape_23.graphics.f("#F2D1E4").s().p("AqauvIU1ABQhAJNjnIpQA7F6BfFgIyoAOg");
        this.shape_23.setTransform(-16.925, 94.425);
        this.shape_24 = new a.Shape;
        this.shape_24.graphics.f("#F2D1E4").s().p("Aq3uvIVvACQhvJTjjIpQgFGACDFAIybAhg");
        this.shape_24.setTransform(-29.875, 94.425);
        this.shape_25 = new a.Shape;
        this.shape_25.graphics.f("#F2D1E4").s().p("ArUuvIWpADQifJZjfIqQhEGECoEhIyPA0g");
        this.shape_25.setTransform(-42.825, 94.425);
        this.shape_26 = new a.Shape;
        this.shape_26.graphics.f("#F2D1E4").s().p("Ap6uvIT1ADQgzJwiWITQhFGEhKEYIudA9g");
        this.shape_26.setTransform(-51.85, 94.425);
        this.shape_27 = new a.Shape;
        this.shape_27.graphics.f("#F2D1E4").s().p("AosuvIRBADQA5KGhOH9QhFGEk8EQIqrBFg");
        this.shape_27.setTransform(-59.6718, 94.425);
        this.shape_28 = new a.Shape;
        this.shape_28.graphics.f("#F2D1E4").s().p("AnhuvIOpACQAwJ0gqH+QgoGMjaErIqtA0g");
        this.shape_28.setTransform(-53.2062, 94.425);
        this.shape_29 = new a.Shape;
        this.shape_29.graphics.f("#F2D1E4").s().p("AmZuvIMRABQAoJhgIIAQgKGTh4FHIqvAjg");
        this.shape_29.setTransform(-46.4462, 94.425);
        this.shape_30 = new a.Shape;
        this.shape_30.graphics.f("#F2D1E4").s().p("AleuvIJ5ABIA6RPQAUGbgWFjIqxARg");
        this.shape_30.setTransform(-38.3554, 94.425);
        this.shape_31 =
            new a.Shape;
        this.shape_31.graphics.f("#F2D1E4").s().p("AlZOwIAA9fIHhAAQAXI7A+IDQAyGjBKF+g");
        this.shape_31.setTransform(-24.9, 94.425);
        this.shape_32 = new a.Shape;
        this.shape_32.graphics.f("#F2D1E4").s().p("AkJOuIg3gSIAA9OIHcAAIAFAPQAXIqAuH3QAmGfA1F9IhQAZg");
        this.shape_32.setTransform(-27.85, 94.6563);
        this.shape_33 = new a.Shape;
        this.shape_33.graphics.f("#F2D1E4").s().p("AkDOsIglgjIAA89IHYAAIAJAKQAXIkAgHzQAZGcAgF7Ig3Axg");
        this.shape_33.setTransform(-30.8, 94.8875);
        this.shape_34 = new a.Shape;
        this.shape_34.graphics.f("#F2D1E4").s().p("Aj9OpIgSg0IAA8rIHTAAIANAFQAXIeARHvQAOGYAJF5IgcBKg");
        this.shape_34.setTransform(-33.75, 95.1188);
        this.shape_35 = new a.Shape;
        this.shape_35.graphics.f("#F2D1E4").s().p("Aj8OnIAA9gIHgAAQArQKgfNpg");
        this.shape_35.setTransform(-36.1963, 95.35);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_18
            }]
        }).to({
            state: [{
                t: this.shape_18
            }]
        }, 2).to({
            state: [{
                t: this.shape_19
            }]
        }, 1).to({
            state: [{
                t: this.shape_20
            }]
        }, 1).to({
            state: [{
                t: this.shape_21
            }]
        }, 1).to({
            state: [{
                t: this.shape_22
            }]
        }, 1).to({
            state: [{
                t: this.shape_23
            }]
        }, 1).to({
            state: [{
                t: this.shape_24
            }]
        }, 1).to({
                state: [{
                    t: this.shape_25
                }]
            },
            1).to({
            state: [{
                t: this.shape_26
            }]
        }, 1).to({
            state: [{
                t: this.shape_27
            }]
        }, 1).to({
            state: [{
                t: this.shape_28
            }]
        }, 1).to({
            state: [{
                t: this.shape_29
            }]
        }, 1).to({
            state: [{
                t: this.shape_30
            }]
        }, 1).to({
            state: [{
                t: this.shape_31
            }]
        }, 1).to({
            state: [{
                t: this.shape_32
            }]
        }, 1).to({
            state: [{
                t: this.shape_33
            }]
        }, 1).to({
            state: [{
                t: this.shape_34
            }]
        }, 1).to({
            state: [{
                t: this.shape_35
            }]
        }, 1).to({
            state: []
        }, 1).wait(3))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-115.3, 0, 179.2, 190.7);
    (b.whole_skip = function(f, d, e) {
        this.initialize(f,
            d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.instance = new b.button;
        this.instance.parent = this;
        this.instance.setTransform(28, 2.3, .375, .375);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.whole_skip, new a.Rectangle(28, 2.3, 45, 18), null);
    (b.white = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        h(b.white, new a.Rectangle(-120, -160, 240, 320), null);
    (b.upper_light_b = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.lf(["#FFFFCC", "#FFFFFF", "rgba(255,255,255,0)"], [.153, .31, 1], -.1, -45.1, -.1, 32.1).s().p("AjXEwIBfpfIDxAAIBfJfg");
        this.shape.setTransform(0, 107.125);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.upper_light_b, new a.Rectangle(-21.6, 76.7, 43.3, 60.89999999999999), null);
    (b.text_window = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape =
            new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.8)").s().rr(-116, -45, 232, 90, 6);
        this.shape.setTransform(116, 45);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.text_window, new a.Rectangle(0, 0, 232, 90), null);
    (b.symbol66 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#5FFFBC").s().p("AgxAyIAAhjIBjAAIAABjg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        h(b.symbol66, new a.Rectangle(-5, -5, 10, 10), null);
    (b.symbol10 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFCCFF").s().p("AgLAMIAAgXIAXAAIAAAXg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.symbol10, new a.Rectangle(-1.2, -1.2, 2.4, 2.4), null);
    (b.symbol9 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#FF0000").ss(.1,
            1, 1).p("AgeCxQAcgEARgUQAlgmgwhJQgwhJAdhQQAIgZAPgXIANgR");
        this.shape.setTransform(.0256, -17.675);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.symbol9, new a.Rectangle(-4.1, -36.3, 8.3, 37.3), null);
    (b.symbol6 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Ay7EwIAApfMAl3AAAIAAJfg");
        this.shape.setTransform(241.45, 1.55);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.symbol6, new a.Rectangle(120.3, -28.8,
        242.39999999999998, 60.8), null);
    (b.star_inner = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.star_rainbow;
        this.instance.parent = this;
        this.instance.setTransform(-198, -193.5, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.star_inner, new a.Rectangle(-198, -193.5, 396, 387), null);
    (b.star_1 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.star;
        this.instance.parent = this;
        this.instance.setTransform(2.45, -2.3, .2362, .2362, 27.2356);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.star_1, new a.Rectangle(-1.8, -2.3, 12.700000000000001, 12.7), null);
    (b.shield = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("EhBnBH4MAAAiPvMCDPAAAMAAACPvgAyvZAMAlfAAAMAAAgx/MglfAAAg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.shield, new a.Rectangle(-420, -460, 840, 920), null);
    (b.shape41 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.image80;
        this.instance.parent = this;
        this.instance.setTransform(-19.5,
            -19.5, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-19.5, -19.5, 39, 39);
    (b.shape38_1 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("rgba(255,255,0,0.247)").s().p("AufO/IAA99Ic+AAIAAd9g");
        this.shape_1.setTransform(10.05, .025);
        this.timeline.addTween(a.Tween.get(this.shape_1).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-82.7, -95.8, 185.5, 191.7);
    (b.scoutmedal_core =
        function(f, d, e) {
            this.initialize(f, d, e, {});
            this.instance = new b.scout_medal;
            this.instance.parent = this;
            this.instance.setTransform(0, 0, .6, .6);
            this.timeline.addTween(a.Tween.get(this.instance).wait(1))
        }).prototype = h(b.scoutmedal_core, new a.Rectangle(0, 0, 48, 48), null);
    (b.s10000 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("A3IAAIXIgcIXJAcI3JAdg");
        this.shape.setTransform(0, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        h(b.s10000, new a.Rectangle(-148.1, -2.9, 296.29999999999995, 5.9), null);
    (b.replace_title_light_1 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.visible = !1;
            var a = this;
            setTimeout(function() {
                400 == a.children[0].image.width && 200 == a.children[0].image.height && (a.scaleX = 180 / a.children[0].image.width, a.scaleY = 70 / a.children[0].image.height);
                a.visible = !0
            }, 0)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.instance = new b.replace_title_light;
        this.instance.parent =
            this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_title_light_1, new a.Rectangle(0, 0, 360, 140), null);
    (b.replace_title_1 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.visible = !1;
            var a = this;
            setTimeout(function() {
                400 == a.children[0].image.width && 200 == a.children[0].image.height && (a.scaleX = 180 / a.children[0].image.width, a.scaleY = 70 / a.children[0].image.height);
                a.visible = !0
            }, 0)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.instance = new b.replace_title;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_title_1, new a.Rectangle(0, 0, 360, 140), null);
    (b.replace_caption_1 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_caption;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_caption_1, new a.Rectangle(0, 0, 168, 18), null);
    (b.replace_bg_1 = function(f,
        d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_bg;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_bg_1, new a.Rectangle(0, 0, 480, 640), null);
    (b.production_members_p = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Am1BWQgygBAAgyIAAhFQAAgzAyAAINrAAQAyAAAAAzIAABFQAAAygyABg");
        this.shape.setTransform(32.6, 0);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.production_members_p,
        new a.Rectangle(-16.2, -8.5, 97.60000000000001, 17.1), null);
    (b.plus_1 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.plus;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.plus_1, new a.Rectangle(0, 0, 21, 22), null);
    (b.particle_common_parts4 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.frame_0 = function() {
            this.visible = 0
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape =
            new a.Shape;
        this.shape.graphics.f("#000000").s().p("Ag5A6IAAhzIBzAAIAABzg");
        this.shape.setTransform(.575, -.225);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f().s("#6600FF").ss(1, 1, 1).p("ArJN9QB4gDCIhCQEPiGBOk+QAgiAA8kbQAOg+AOg3QARhAASg4QAehiAhhLQBbjQCFhrQCbh+DhgC");
        this.shape_1.setTransform(71.375, -89.3);
        this.timeline.addTween(a.Tween.get(this.shape_1).wait(1))
    }).prototype = h(b.particle_common_parts4, new a.Rectangle(-5.2, -179.6, 149, 185.2),
        null);
    (b.particle_common_parts3 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Ag9gOIBLgvIAwBLIhMAwg");
        this.shape.setTransform(-.25, .525);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FFFFFF").s().p("AgVgvIA8AAIgQBfIg9AAg");
        this.shape_1.setTransform(-.1, .8);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-6.4, -5.7,
        12.4, 12.5);
    (b.num_d_w = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_9 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(2));
        this.instance = new b.p1_w;
        this.instance.parent = this;
        this.instance.setTransform(.1, 0, .5, .5);
        this.instance_1 = new b.p2_w;
        this.instance_1.parent = this;
        this.instance_1.setTransform(.75, 0, .5, .5);
        this.instance_2 = new b.p3_w;
        this.instance_2.parent = this;
        this.instance_2.setTransform(.2,
            0, .5, .5);
        this.instance_3 = new b.p4_w;
        this.instance_3.parent = this;
        this.instance_3.setTransform(.8, 0, .5, .5);
        this.instance_4 = new b.p5_w;
        this.instance_4.parent = this;
        this.instance_4.setTransform(.5, 0, .5, .5);
        this.instance_5 = new b.p6_w;
        this.instance_5.parent = this;
        this.instance_5.setTransform(.5, 0, .5, .5);
        this.instance_6 = new b.p7_w;
        this.instance_6.parent = this;
        this.instance_6.setTransform(.55, 0, .5, .5);
        this.instance_7 = new b.p8_w;
        this.instance_7.parent = this;
        this.instance_7.setTransform(.5, 0, .5, .5);
        this.instance_8 =
            new b.p9_w;
        this.instance_8.parent = this;
        this.instance_8.setTransform(.8, 0, .5, .5);
        this.instance_9 = new b.p0_w;
        this.instance_9.parent = this;
        this.instance_9.setTransform(.8, 0, .5, .5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
                state: [{
                    t: this.instance_8
                }]
            },
            1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: []
        }, 1).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-2.2, 0, 24, 22);
    (b.num_d = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_9 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(2));
        this.instance = new b.p1;
        this.instance.parent = this;
        this.instance.setTransform(.1, 0, .5, .5);
        this.instance_1 = new b.p2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(.75, 0, .5, .5);
        this.instance_2 = new b.p3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(.2, 0, .5, .5);
        this.instance_3 = new b.p4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(.8, 0, .5, .5);
        this.instance_4 = new b.p5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(.5, 0, .5, .5);
        this.instance_5 = new b.p6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(.5, 0, .5, .5);
        this.instance_6 = new b.p7;
        this.instance_6.parent = this;
        this.instance_6.setTransform(.55,
            0, .5, .5);
        this.instance_7 = new b.p8;
        this.instance_7.parent = this;
        this.instance_7.setTransform(.5, 0, .5, .5);
        this.instance_8 = new b.p9;
        this.instance_8.parent = this;
        this.instance_8.setTransform(.8, 0, .5, .5);
        this.instance_9 = new b.p0;
        this.instance_9.parent = this;
        this.instance_9.setTransform(.8, 0, .5, .5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
                state: [{
                    t: this.instance_4
                }]
            },
            1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: []
        }, 1).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-2.2, 0, 24, 22);
    (b.mesh2 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.sp_bMask;
        this.instance.parent = this;
        this.instance.setTransform(-120, -160, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.mesh2, new a.Rectangle(-120, -160, 240, 320), null);
    (b.mesh = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("Eg0fBGAMAAAiL/MBo/AAAMAAACL/gAxQXBMAihAAAMAAAguBMgihAAAg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.instance = new b.sp_bMask;
        this.instance.parent = this;
        this.instance.setTransform(-120, -160, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.mesh, new a.Rectangle(-336, -448, 672, 896), null);
    (b.mc44 =
        function(b, d, e) {
            this.initialize(b, d, e, {});
            this.shape = new a.Shape;
            this.shape.graphics.f("#FFFFFF").s().p("AhZC+IisgTIAjiqIgjiqICsgTICXhXIBHCgICBB0IiBB0IhHCfgAhUi0IilATIAhCiIghCiIClASICPBSIBEiXIB7hvIh7hwIhEiXg");
            this.shape.setTransform(-.225, .1);
            this.timeline.addTween(a.Tween.get(this.shape).wait(1));
            this.shape_1 = new a.Shape;
            this.shape_1.graphics.f("#FFFFFF").s().p("AhvDtIjYgYIAsjUIgsjVIDYgYIC8hsIBaDHIChCSIihCSIhaDGgAhjjMIi7AUIAmC5IgmC4IC7AUICiBeIBOisICLh+IiLh/IhOisg");
            this.shape_1.setTransform(.025,
                0);
            this.shape_2 = new a.Shape;
            this.shape_2.graphics.f("#FFCCFF").s().p("Ah0D4IjjgYIAujfIgujfIDjgZIDFhyIBeDRICpCZIipCZIheDQgAhvjsIjYAYIAsDVIgsDUIDYAYIC8BsIBajGIChiSIihiSIhajHg");
            this.shape_2.setTransform(.025, 0);
            this.timeline.addTween(a.Tween.get({}).to({
                state: [{
                    t: this.shape_2
                }, {
                    t: this.shape_1
                }]
            }).wait(1))
        }).prototype = h(b.mc44, new a.Rectangle(-34.3, -36.1, 68.69999999999999, 72.30000000000001), null);
    (b.marker_sign_bighit = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#009900").s().p("AkuBfIAAi9IJdAAIAAC9g");
        this.shape.setTransform(30.325, 9.5);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.marker_sign_bighit, new a.Rectangle(0, 0, 60.7, 19), null);
    (b.maku_oku_light_mc_w = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AmVFiIB+rGIJEAKIBpK/g");
        this.shape.setTransform(-2.125, 34.925);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.maku_oku_light_mc_w, new a.Rectangle(-42.7, -.7, 81.2, 71.3), null);
    (b.maku_oku_light_mc_1 =
        function(b, d, e) {
            this.initialize(b, d, e, {});
            this.shape_1 = new a.Shape;
            this.shape_1.graphics.f("#333333").s().p("AmVFiIB+rGIJEAKIBpK/g");
            this.shape_1.setTransform(-2.125, 34.925);
            this.timeline.addTween(a.Tween.get(this.shape_1).wait(1))
        }).prototype = h(b.maku_oku_light_mc_1, new a.Rectangle(-42.7, -.7, 81.2, 71.3), null);
    (b.glitter_range = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.frame_0 = function() {
            this.visible = 0
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,204,0,0.247)").s().p("AuDOEIAA8HIcHAAIAAcHg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.glitter_range, new a.Rectangle(-90, -90, 180, 180), null);
    (b.glitter_common_parts1_1 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.glitter;
        this.instance.parent = this;
        this.instance.setTransform(-8, -8, .4, .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.glitter_common_parts1_1, new a.Rectangle(-8, -8, 16, 16), null);
    (b.fkds_w =
        function(b, d, e) {
            this.initialize(b, d, e, {});
            this.shape = new a.Shape;
            this.shape.graphics.f().s("#FFFFFF").ss(1, 1, 1).p("AEUA0IAAiwQAAgxgwAAIkbAAIhIAAAi9itIgNAAAkThKIAACJQAAAxAwAAIDGAAIAdA+IAfg+IBeAA");
            this.shape.setTransform(.175, 15.975);
            this.shape_1 = new a.Shape;
            this.shape_1.graphics.f("#FFFFFF").s().p("AgSCOIjGAAQgwgBAAgwIAAiJIgLgCIgMguIgogXIAggmIAOgyIAsAiIAjgGIAbgCIARAIIAWgJIAFAXIAPAMIBIAAIEbAAQAwAAAAAwIAACwIApAbIglAiIgIA3IgtghIgjAOIgegEIgOASIgHgBIgGgWIgZgMIAAgIIAPgHIheAAIgfA+gAi/iPIANAAIgFgTg");
            this.shape_1.setTransform(-.925,
                13);
            this.timeline.addTween(a.Tween.get({}).to({
                state: [{
                    t: this.shape_1
                }, {
                    t: this.shape
                }]
            }).wait(1))
        }).prototype = h(b.fkds_w, new a.Rectangle(-35.9, -9, 70.3, 44.2), null);
    (b.fkds_1keta_w = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#FFFFFF").ss(1, 1, 1).p("AiIitIgGAAADOAbIAAhPIAAgFIAAhEQAAgwgwAAIjVAAIgMAAAjNhSIAACRQAAAxAwAAICAAAIAdA+IAfg+IBKAA");
        this.shape.setTransform(2.225, 15.95);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FFFFFF").s().p("AC0CsIgHAMIgYAAIgQAUIgLgYIgagKIARgRIABgHIhKAAIgfA+Igdg+IiAAAQgwAAAAgxIAAiRIgNgDIgLgsIgtgcIAqgfIAIg1IAqAhIAqgDIAMgBIAVAEIAbgKIgBAYIAVATIgHACIAMAAIDVAAQAwAAAAAwIAABEIAAAFIAABPIALAgIAoAaIgmAiIgFA3gAiFiLIAGAAIAKgJIgFgTg");
        this.shape_1.setTransform(1.325, 12.525);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = h(b.fkds_1keta_w, new a.Rectangle(-27.1, -9.9, 57.7, 45.9), null);
    (b.fade_black = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.fade_black, new a.Rectangle(-120, -160, 240, 320), null);
    (b.efc_flash = function(b,
        d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FFFFFF", "rgba(255,255,255,0)"], [.31, 1], 0, 0, 0, 0, 0, 55.8).s().p("AmEGFQihihAAjkQAAjjChihQChihDjAAQDkAAChChQChChAADjQAADkihChQihChjkAAQjjAAihihg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.efc_flash, new a.Rectangle(-55, -55, 110, 110), null);
    (b.efc_card_kirari = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("A0WUsIAAg8MAotAAAIAAA8gA0WSQIAAlCMAotAAAIAAFCgA0WFDIAA3CMAotAAAIAAXCgA0Wy3IAAh0MAotAAAIAAB0g");
        this.shape.setTransform(.025, 46.675);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.efc_card_kirari, new a.Rectangle(-130.3, -85.7, 260.70000000000005, 264.8), null);
    (b.efa_\uff77\uff97\uff77\uff97_pp = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,0,0.247)").s().p("AyvXcMAAAgu3MAlfAAAMAAAAu3g");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        h(b.efa_\uff77\uff97\uff77\uff97_pp, new a.Rectangle(-120, -150, 240, 300), null);
    (b.efa_\uff77\uff97\uff77\uff97_p = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.image80;
        this.instance.parent = this;
        this.instance.setTransform(-19.5, -19.5, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.efa_\uff77\uff97\uff77\uff97_p, new a.Rectangle(-19.5, -19.5, 39, 39), null);
    (b.curtain_l = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#E6D1B6").s().p("Ap9OwIAA9fIT7AAIAAdfg");
        this.shape.setTransform(.025, 94.425);
        this.text = new a.Text("#E6D1B6", "12px 'FOT-NewRodin Pro DB'", "#E6D1B6");
        this.text.lineHeight = 21;
        this.text.lineWidth = 144;
        this.text.parent = this;
        this.text.setTransform(-11.3, 103.45);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#E6D1B6").s().p("Ap7OwIgCgBIAA9fIT7AAIAAACQgEJKg7JBQAdFhAOFjIgvAQg");
        this.shape_1.setTransform(-.975, 94.475);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#E6D1B6").s().p("Ap8OvIgBgBIAA9eIT6AAIABABQgIJIh2I6QA5FdAcFhIgbAgg");
        this.shape_2.setTransform(-1.975,
            94.525);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("#E6D1B6").s().p("Ap9OvIAAgDIAA9dIT6AAIABABQgMJHixIxQBVFaArFfIgJAxg");
        this.shape_3.setTransform(-2.975, 94.575);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.f("#E6D1B6").s().p("Ap9OuIAA9fIT7AAQgQJGjsIpQB8F2A5F+g");
        this.shape_4.setTransform(-3.975, 94.625);
        this.shape_5 = new a.Shape;
        this.shape_5.graphics.f("#E6D1B6").s().p("AqauvIU1ABQhAJNjnIpQA7F6BfFgIyoAOg");
        this.shape_5.setTransform(-16.925, 94.425);
        this.shape_6 = new a.Shape;
        this.shape_6.graphics.f("#E6D1B6").s().p("Aq3uvIVvACQhvJTjjIpQgFGACDFAIybAhg");
        this.shape_6.setTransform(-29.875, 94.425);
        this.shape_7 = new a.Shape;
        this.shape_7.graphics.f("#E6D1B6").s().p("ArUuvIWpADQifJZjfIqQhEGECoEhIyPA0g");
        this.shape_7.setTransform(-42.825, 94.425);
        this.shape_8 = new a.Shape;
        this.shape_8.graphics.f("#E6D1B6").s().p("Ap6uvIT1ADQgzJwiWITQhFGEhKEYIudA9g");
        this.shape_8.setTransform(-51.85, 94.425);
        this.shape_9 = new a.Shape;
        this.shape_9.graphics.f("#E6D1B6").s().p("AosuvIRBADQA5KGhOH9QhFGEk8EQIqrBFg");
        this.shape_9.setTransform(-59.6718, 94.425);
        this.shape_10 = new a.Shape;
        this.shape_10.graphics.f("#E6D1B6").s().p("AnhuvIOpACQAwJ0gqH+QgoGMjaErIqtA0g");
        this.shape_10.setTransform(-53.2062, 94.425);
        this.shape_11 = new a.Shape;
        this.shape_11.graphics.f("#E6D1B6").s().p("AmZuvIMRABQAoJhgIIAQgKGTh4FHIqvAjg");
        this.shape_11.setTransform(-46.4462, 94.425);
        this.shape_12 = new a.Shape;
        this.shape_12.graphics.f("#E6D1B6").s().p("AleuvIJ5ABIA6RPQAUGbgWFjIqxARg");
        this.shape_12.setTransform(-38.3554, 94.425);
        this.shape_13 = new a.Shape;
        this.shape_13.graphics.f("#E6D1B6").s().p("AlZOwIAA9fIHhAAQAXI7A+IDQAyGjBKF+g");
        this.shape_13.setTransform(-24.9, 94.425);
        this.shape_14 = new a.Shape;
        this.shape_14.graphics.f("#E6D1B6").s().p("AkJOuIg3gSIAA9OIHcAAIAFAPQAXIqAuH3QAmGfA1F9IhQAZg");
        this.shape_14.setTransform(-27.85, 94.6563);
        this.shape_15 = new a.Shape;
        this.shape_15.graphics.f("#E6D1B6").s().p("AkDOsIglgjIAA89IHYAAIAJAKQAXIkAgHzQAZGcAgF7Ig3Axg");
        this.shape_15.setTransform(-30.8, 94.8875);
        this.shape_16 = new a.Shape;
        this.shape_16.graphics.f("#E6D1B6").s().p("Aj9OpIgSg0IAA8rIHTAAIANAFQAXIeARHvQAOGYAJF5IgcBKg");
        this.shape_16.setTransform(-33.75,
            95.1188);
        this.shape_17 = new a.Shape;
        this.shape_17.graphics.f("#E6D1B6").s().p("Aj8OnIAA9gIHgAAQArQKgfNpg");
        this.shape_17.setTransform(-36.1963, 95.35);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape
            }, {
                t: this.text
            }]
        }, 2).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_3
            }]
        }, 1).to({
            state: [{
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_5
            }]
        }, 1).to({
            state: [{
                t: this.shape_6
            }]
        }, 1).to({
            state: [{
                t: this.shape_7
            }]
        }, 1).to({
                state: [{
                    t: this.shape_8
                }]
            },
            1).to({
            state: [{
                t: this.shape_9
            }]
        }, 1).to({
            state: [{
                t: this.shape_10
            }]
        }, 1).to({
            state: [{
                t: this.shape_11
            }]
        }, 1).to({
            state: [{
                t: this.shape_12
            }]
        }, 1).to({
            state: [{
                t: this.shape_13
            }]
        }, 1).to({
            state: [{
                t: this.shape_14
            }]
        }, 1).to({
            state: [{
                t: this.shape_15
            }]
        }, 1).to({
            state: [{
                t: this.shape_16
            }]
        }, 1).to({
            state: [{
                t: this.shape_17
            }]
        }, 1).to({
            state: []
        }, 1).wait(3))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-115.3, 0, 250, 190.7);
    (b.curtain = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#F2D1E4").s().p("Ap9OwIAA9fIT7AAIAAdfg");
        this.shape.setTransform(.025, 94.425);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#F2D1E4").s().p("Ap7OwIgCgBIAA9fIT7AAIAAACQgEJKg7JBQAdFhAOFjIgvAQg");
        this.shape_1.setTransform(-.975, 94.475);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#F2D1E4").s().p("Ap8OvIgBgBIAA9eIT6AAIABABQgIJIh2I6QA5FdAcFhIgbAgg");
        this.shape_2.setTransform(-1.975, 94.525);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("#F2D1E4").s().p("Ap9OvIAAgDIAA9dIT6AAIABABQgMJHixIxQBVFaArFfIgJAxg");
        this.shape_3.setTransform(-2.975,
            94.575);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.f("#F2D1E4").s().p("Ap9OuIAA9fIT7AAQgQJGjsIpQB8F2A5F+g");
        this.shape_4.setTransform(-3.975, 94.625);
        this.shape_5 = new a.Shape;
        this.shape_5.graphics.f("#F2D1E4").s().p("AqauvIU1ABQhAJNjnIpQA7F6BfFgIyoAOg");
        this.shape_5.setTransform(-16.925, 94.425);
        this.shape_6 = new a.Shape;
        this.shape_6.graphics.f("#F2D1E4").s().p("Aq3uvIVvACQhvJTjjIpQgFGACDFAIybAhg");
        this.shape_6.setTransform(-29.875, 94.425);
        this.shape_7 = new a.Shape;
        this.shape_7.graphics.f("#F2D1E4").s().p("ArUuvIWpADQifJZjfIqQhEGECoEhIyPA0g");
        this.shape_7.setTransform(-42.825, 94.425);
        this.shape_8 = new a.Shape;
        this.shape_8.graphics.f("#F2D1E4").s().p("Ap6uvIT1ADQgzJwiWITQhFGEhKEYIudA9g");
        this.shape_8.setTransform(-51.85, 94.425);
        this.shape_9 = new a.Shape;
        this.shape_9.graphics.f("#F2D1E4").s().p("AosuvIRBADQA5KGhOH9QhFGEk8EQIqrBFg");
        this.shape_9.setTransform(-59.6718, 94.425);
        this.shape_10 = new a.Shape;
        this.shape_10.graphics.f("#F2D1E4").s().p("AnhuvIOpACQAwJ0gqH+QgoGMjaErIqtA0g");
        this.shape_10.setTransform(-53.2062, 94.425);
        this.shape_11 = new a.Shape;
        this.shape_11.graphics.f("#F2D1E4").s().p("AmZuvIMRABQAoJhgIIAQgKGTh4FHIqvAjg");
        this.shape_11.setTransform(-46.4462, 94.425);
        this.shape_12 = new a.Shape;
        this.shape_12.graphics.f("#F2D1E4").s().p("AleuvIJ5ABIA6RPQAUGbgWFjIqxARg");
        this.shape_12.setTransform(-38.3554, 94.425);
        this.shape_13 = new a.Shape;
        this.shape_13.graphics.f("#F2D1E4").s().p("AlZOwIAA9fIHhAAQAXI7A+IDQAyGjBKF+g");
        this.shape_13.setTransform(-24.9, 94.425);
        this.shape_14 = new a.Shape;
        this.shape_14.graphics.f("#F2D1E4").s().p("AkJOuIg3gSIAA9OIHcAAIAFAPQAXIqAuH3QAmGfA1F9IhQAZg");
        this.shape_14.setTransform(-27.85, 94.6563);
        this.shape_15 = new a.Shape;
        this.shape_15.graphics.f("#F2D1E4").s().p("AkDOsIglgjIAA89IHYAAIAJAKQAXIkAgHzQAZGcAgF7Ig3Axg");
        this.shape_15.setTransform(-30.8, 94.8875);
        this.shape_16 = new a.Shape;
        this.shape_16.graphics.f("#F2D1E4").s().p("Aj9OpIgSg0IAA8rIHTAAIANAFQAXIeARHvQAOGYAJF5IgcBKg");
        this.shape_16.setTransform(-33.75, 95.1188);
        this.shape_17 = new a.Shape;
        this.shape_17.graphics.f("#F2D1E4").s().p("Aj8OnIAA9gIHgAAQArQKgfNpg");
        this.shape_17.setTransform(-36.1963,
            95.35);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape
            }]
        }, 2).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_3
            }]
        }, 1).to({
            state: [{
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_5
            }]
        }, 1).to({
            state: [{
                t: this.shape_6
            }]
        }, 1).to({
            state: [{
                t: this.shape_7
            }]
        }, 1).to({
            state: [{
                t: this.shape_8
            }]
        }, 1).to({
            state: [{
                t: this.shape_9
            }]
        }, 1).to({
            state: [{
                t: this.shape_10
            }]
        }, 1).to({
            state: [{
                t: this.shape_11
            }]
        }, 1).to({
                state: [{
                    t: this.shape_12
                }]
            },
            1).to({
            state: [{
                t: this.shape_13
            }]
        }, 1).to({
            state: [{
                t: this.shape_14
            }]
        }, 1).to({
            state: [{
                t: this.shape_15
            }]
        }, 1).to({
            state: [{
                t: this.shape_16
            }]
        }, 1).to({
            state: [{
                t: this.shape_17
            }]
        }, 1).to({
            state: []
        }, 1).wait(3))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-115.3, 0, 179.2, 190.7);
    (b.cursor_p_2 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("Al7lIIL3AAIl8KRg");
        this.shape.setTransform(-.025, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#999999").s().p("Al7lIIL3AAIl8KRg");
        this.shape_1.setTransform(6.575, 4.825);
        this.timeline.addTween(a.Tween.get(this.shape_1).wait(1))
    }).prototype = h(b.cursor_p_2, new a.Rectangle(-38, -32.8, 82.6, 70.5), null);
    (b.cursor_p = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Al7lIIL3AAIl8KRg");
        this.shape.setTransform(-.025, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#999999").s().p("Al7lIIL3AAIl8KRg");
        this.shape_1.setTransform(6.575, 4.825);
        this.timeline.addTween(a.Tween.get(this.shape_1).wait(1))
    }).prototype = h(b.cursor_p, new a.Rectangle(-38, -32.8, 82.6, 70.5), null);
    (b.clickpoint = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FF0000").s().p("AklAAIElklIElElIklElg");
        this.shape.setTransform(29.35, 29.35);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.clickpoint, new a.Rectangle(0,
        0, 58.7, 58.7), null);
    (b.btn = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AyvWqMAAAgtTMAlfAAAMAAAAtTg");
        this.shape.setTransform(120, 145);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.btn, new a.Rectangle(0, 0, 240, 290), null);
    (b.board = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        h(b.board, new a.Rectangle(-120, -160, 240, 320), null);
    (b.asset_efc_flashWhite = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FFFFFF", "#FFFFFF", "rgba(255,255,255,0)", "rgba(255,255,255,0)"], [.298, .522, 1, 1], 0, 0, 0, 0, 0, 130.2).s().p("AuRORQl6l6AAoXQAAoWF6l7QF7l6IWAAQIXAAF6F6QF7F7AAIWQAAIXl7F6Ql6F7oXAAQoWAAl7l7g");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.asset_efc_flashWhite, new a.Rectangle(-129.2, -129.2, 258.4, 258.4), null);
    (b.asset_efc_flashBlade =
        function(b, d, e) {
            this.initialize(b, d, e, {});
            this.shape = new a.Shape;
            this.shape.graphics.f("#FFFFFF").s().p("A3IAAIXIgcIXJAcI3JAdg");
            this.shape.setTransform(0, .025);
            this.timeline.addTween(a.Tween.get(this.shape).wait(1))
        }).prototype = h(b.asset_efc_flashBlade, new a.Rectangle(-148.1, -2.9, 296.29999999999995, 5.9), null);
    (b.asset_efc_flashWhite2 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FFFFFF", "rgba(255,255,255,0)", "rgba(255,255,255,0)"], [.392, 1, 1], 0, 0, 0, 0, 0,
            130.2).s().p("AuRORQl6l6AAoXQAAoWF6l7QF7l6IWAAQIXAAF6F6QF7F7AAIWQAAIXl7F6Ql6F7oXAAQoWAAl7l7g");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.asset_efc_flashWhite2, new a.Rectangle(-129.2, -129.2, 258.4, 258.4), null);
    (b._whiteGlow = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_1 = function() {
            exportRoot.srMes1_1 || (this.visible = !1);
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(1).call(this.frame_1).wait(1));
        this.instance = new b.sp_whiteGlow;
        this.instance.parent =
            this;
        this.instance.setTransform(-28, -33, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(2))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-28, -33, 56, 66);
    (b.replace_sign10 = function(a, b, e) {
        this.initialize(a, b, e, {})
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-16.3, 0, 656.3, 986.4);
    (b.replace_sign9 = function(a, b, e) {
        this.initialize(a, b, e, {})
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-16.3, 0, 656.3, 986.4);
    (b.replace_sign8 = function(a, b, e) {
        this.initialize(a,
            b, e, {})
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-16.3, 0, 656.3, 986.4);
    (b.replace_sign7 = function(a, b, e) {
        this.initialize(a, b, e, {})
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-16.3, 0, 656.3, 986.4);
    (b.replace_sign6 = function(a, b, e) {
        this.initialize(a, b, e, {})
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-16.3, 0, 656.3, 986.4);
    (b.replace_sign5 = function(a, b, e) {
        this.initialize(a, b, e, {})
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-16.3,
        0, 656.3, 986.4);
    (b.replace_sign4 = function(a, b, e) {
        this.initialize(a, b, e, {})
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-16.3, 0, 656.3, 986.4);
    (b.replace_sign3 = function(a, b, e) {
        this.initialize(a, b, e, {})
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-16.3, 0, 656.3, 986.4);
    (b.replace_sign2 = function(a, b, e) {
        this.initialize(a, b, e, {})
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-16.3, 0, 656.3, 986.4);
    (b.replace_sign1 = function(a, b, e) {
        this.initialize(a, b, e, {})
    }).prototype =
        g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-16.3, 0, 656.3, 986.4);
    (b.rare_effect_circle = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#FFFFFF").ss(5, 1, 1).p("ARLxKQHHHHAAKDQAAKEnHHHQnHHHqEAAQqDAAnHnHQnHnHAAqEQAAqDHHnHQHHnHKDAAQKEAAHHHHg");
        this.shape.setTransform(0, -155.4);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.rare_effect_circle, new a.Rectangle(-157.9, -313.3, 315.8, 315.8), null);
    (b.petit3_core = function(f, d, e) {
        this.initialize(f,
            d, e, {});
        this.instance = new b.replace_petit03;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.petit3_core, new a.Rectangle(0, 0, 70, 95), null);
    (b.petit2_core = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_petit02;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.petit2_core, new a.Rectangle(0, 0, 70, 95), null);
    (b.petit1_core = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_petit01;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.petit1_core, new a.Rectangle(0, 0, 70, 95), null);
    (b.petit_core10 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_petit10;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.petit_core10, new a.Rectangle(0, 0, 70, 95), null);
    (b.petit_core9 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_petit09;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.petit_core9, new a.Rectangle(0, 0, 70, 95), null);
    (b.petit_core8 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_petit08;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.petit_core8, new a.Rectangle(0, 0, 70, 95), null);
    (b.petit_core7 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_petit07;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.petit_core7, new a.Rectangle(0, 0, 70, 95), null);
    (b.petit_core6 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_petit06;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.petit_core6, new a.Rectangle(0, 0, 70, 95), null);
    (b.petit_core5 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_petit05;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.petit_core5, new a.Rectangle(0, 0, 70, 95), null);
    (b.petit_core4 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_petit04;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.petit_core4, new a.Rectangle(0, 0, 70, 95), null);
    (b.costume10_core = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_costume10;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .6667, .6667);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.costume10_core, new a.Rectangle(0, 0, 80, 80), null);
    (b.costume9_core = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_costume09;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .6667, .6667);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.costume9_core, new a.Rectangle(0, 0, 80, 80), null);
    (b.costume8_core = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_costume08;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .6667, .6667);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.costume8_core, new a.Rectangle(0, 0, 80, 80), null);
    (b.costume7_core = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_costume07;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .6667, .6667);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.costume7_core, new a.Rectangle(0, 0, 80, 80), null);
    (b.costume6_core = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_costume06;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .6667, .6667);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.costume6_core, new a.Rectangle(0, 0, 80, 80), null);
    (b.costume5_core = function(f,
        d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_costume05;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .6667, .6667);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.costume5_core, new a.Rectangle(0, 0, 80, 80), null);
    (b.costume4_core = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_costume04;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .6667, .6667);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.costume4_core,
        new a.Rectangle(0, 0, 80, 80), null);
    (b.costume3_core = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_costume03;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .6667, .6667);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.costume3_core, new a.Rectangle(0, 0, 80, 80), null);
    (b.costume2_core = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_costume02;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .6667, .6667);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b.costume2_core, new a.Rectangle(0, 0, 80, 80), null);
    (b.costume1_core = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_costume01;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .6667, .6667);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.costume1_core, new a.Rectangle(0, 0, 80, 80), null);
    (b._10 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card10;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b._10, new a.Rectangle(0, 0, 220, 275), null);
    (b._09 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card09;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b._09, new a.Rectangle(0, 0, 220, 275), null);
    (b._08 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card08;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b._08, new a.Rectangle(0, 0, 220, 275), null);
    (b._07 = function(f,
        d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card07;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b._07, new a.Rectangle(0, 0, 220, 275), null);
    (b._06 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card06;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b._06, new a.Rectangle(0, 0, 220, 275), null);
    (b._05 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card05;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b._05, new a.Rectangle(0, 0, 220, 275), null);
    (b._04 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card04;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b._04, new a.Rectangle(0, 0, 220, 275), null);
    (b._03 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card03;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b._03, new a.Rectangle(0, 0, 220, 275), null);
    (b._02 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card02;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b._02, new a.Rectangle(0, 0, 220, 275), null);
    (b._01 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_card01;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b._01, new a.Rectangle(0, 0, 220, 275), null);
    (b._new_p_w =
        function(f, d, e) {
            this.initialize(f, d, e, {});
            this.instance = new b.new_w;
            this.instance.parent = this;
            this.instance.setTransform(-25, -9);
            this.timeline.addTween(a.Tween.get(this.instance).wait(1))
        }).prototype = h(b._new_p_w, new a.Rectangle(-25, -9, 112, 50), null);
    (b._new_p = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.NEW;
        this.instance.parent = this;
        this.instance.setTransform(-25, -9);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b._new_p, new a.Rectangle(-25, -9, 112, 50), null);
    (b._mask2 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.sp_bMas2k;
        this.instance.parent = this;
        this.instance.setTransform(-120, -160);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b._mask2, new a.Rectangle(-120, -160, 240, 320), null);
    (b.glitter_inner_sphere_pink = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FF99CC", "rgba(255,153,204,0.302)", "rgba(255,153,204,0)"], [0, .522, 1], 0, 0, 0, 0, 0, 41.6).s().p("AkeEeQh2h2AAioQAAinB2h3QB3h2CnAAQCoAAB2B2QB3B3AACnQAACoh3B2Qh2B3ioAAQinAAh3h3g");
        this.shape.setTransform(.025, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.glitter_inner_sphere_pink, new a.Rectangle(-40.5, -40.5, 81.1, 81.1), null);
    (b.glitter_inner_sphere_orange = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FF9900", "rgba(255,153,0,0.302)", "rgba(255,153,0,0)"], [0, .522, 1], 0, 0, 0, 0, 0, 41.6).s().p("AkeEeQh2h2AAioQAAinB2h3QB3h2CnAAQCoAAB2B2QB3B3AACnQAACoh3B2Qh2B3ioAAQinAAh3h3g");
        this.shape.setTransform(.025, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.glitter_inner_sphere_orange, new a.Rectangle(-40.5, -40.5, 81.1, 81.1), null);
    (b.glitter_inner_sphere_blue = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#00CCFF", "rgba(0,204,255,0.302)", "rgba(0,204,255,0)"], [0, .522, 1], 0, 0, 0, 0, 0, 41.6).s().p("AkeEeQh2h2AAioQAAinB2h3QB3h2CnAAQCoAAB2B2QB3B3AACnQAACoh3B2Qh2B3ioAAQinAAh3h3g");
        this.shape.setTransform(.025, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        h(b.glitter_inner_sphere_blue, new a.Rectangle(-40.5, -40.5, 81.1, 81.1), null);
    (b.glitter_inner_sphere = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FFFFFF", "rgba(255,255,255,0.302)", "rgba(255,255,255,0)"], [0, .522, 1], 0, 0, 0, 0, 0, 41.6).s().p("AkeEeQh2h2AAioQAAinB2h3QB3h2CnAAQCoAAB2B2QB3B3AACnQAACoh3B2Qh2B3ioAAQinAAh3h3g");
        this.shape.setTransform(.025, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.glitter_inner_sphere, new a.Rectangle(-40.5,
        -40.5, 81.1, 81.1), null);
    (b._cards_SR_replace = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(10));
        this.instance = new b.replace_card_l1;
        this.instance.parent = this;
        this.instance.setTransform(-120, -150, .375, .375);
        this.instance_1 = new b.replace_card_l2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-120, -150, .375, .375);
        this.instance_2 = new b.replace_card_l3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-120,
            -150, .375, .375);
        this.instance_3 = new b.replace_card_l4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-120, -150, .375, .375);
        this.instance_4 = new b.replace_card_l5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-120, -150, .375, .375);
        this.instance_5 = new b.replace_card_l6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-120, -150, .375, .375);
        this.instance_6 = new b.replace_card_l7;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-120, -150, .375, .375);
        this.instance_7 = new b.replace_card_l8;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-120, -150, .375, .375);
        this.instance_8 = new b.replace_card_l9;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-120, -150, .375, .375);
        this.instance_9 = new b.replace_card_l10;
        this.instance_9.parent = this;
        this.instance_9.setTransform(-120, -150, .375, .375);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
                state: [{
                    t: this.instance_4
                }]
            },
            1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-120, -150, 240, 300);
    (b._bg_cover_mc_b = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.new_bg_s_maku_b;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype =
        h(b._bg_cover_mc_b, new a.Rectangle(0, 0, 86, 86), null);
    (b._bg_cover_mc = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.new_bg_s_maku;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b._bg_cover_mc, new a.Rectangle(0, 0, 86, 86), null);
    (b.\u30ab\u30fc\u30c6\u30f3\u958b\u304f2 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.\u30ab\u30fc\u30c6\u30f32("synched", 0, !1);
        this.instance.parent = this;
        this.instance.setTransform(26.75,
            -1.4, .4204, .4534, 0, 0, 180, 0, 94.4);
        this.instance_1 = new b.\u30ab\u30fc\u30c6\u30f32("synched", 0, !1);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-26.85, -1.4, .4204, .4534, 0, 0, 0, 0, 94.4);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(50))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-75.3, -44.2, 150.6, 86.5);
    (b.sprite39 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.instance = new b.shape38("synched", 0);
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.sprite39, new a.Rectangle(-82.7, -95.8, 185.5, 191.7), null);
    (b.\u30ab\u30fc\u30c6\u30f3\u958b\u304f2\u30b3\u30d4\u30fc = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.\u30ab\u30fc\u30c6\u30f32\u30b3\u30d4\u30fc("synched", 0, !1);
        this.instance.parent = this;
        this.instance.setTransform(16.8, 1.05, .263, .4068, 0, 0, 180, 0, 94.4);
        this.instance_1 = new b.\u30ab\u30fc\u30c6\u30f32\u30b3\u30d4\u30fc("synched",
            0, !1);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-16.7, 1.05, .263, .4068, 0, 0, 0, 0, 94.4);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(50))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-47, -37.3, 94.2, 77.6);
    (b.\u30ab\u30fc\u30c6\u30f3\u958b\u304f2_1 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance_2 = new b.\u30ab\u30fc\u30c6\u30f32_1("synched", 0, !1);
        this.instance_2.parent = this;
        this.instance_2.setTransform(16.8, 1.05,
            .263, .4068, 0, 0, 180, 0, 94.4);
        this.instance_3 = new b.\u30ab\u30fc\u30c6\u30f32_1("synched", 0, !1);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-16.7, 1.05, .263, .4068, 0, 0, 0, 0, 94.4);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_3
            }, {
                t: this.instance_2
            }]
        }).wait(50))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-47, -37.3, 94.2, 77.6);
    (b.upper_light = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.upper_light_b;
        this.instance.parent = this;
        this.instance.setTransform(0,
            77.6, 1, 1, 0, 0, 0, 0, 77.6);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regY: 107.1,
            y: 107.1,
            alpha: .9941
        }, 0).wait(1).to({
            alpha: .9785
        }, 0).wait(1).to({
            alpha: .9526
        }, 0).wait(1).to({
            alpha: .9162
        }, 0).wait(1).to({
            alpha: .8707
        }, 0).wait(1).to({
            alpha: .8193
        }, 0).wait(1).to({
            alpha: .767
        }, 0).wait(1).to({
            alpha: .7192
        }, 0).wait(1).to({
            alpha: .6802
        }, 0).wait(1).to({
            alpha: .652
        }, 0).wait(1).to({
            alpha: .6352
        }, 0).wait(1).to({
            regY: 77.6,
            y: 77.6,
            alpha: .6289
        }, 0).wait(1).to({
            regY: 107.1,
            y: 107.1,
            alpha: .6363
        }, 0).wait(1).to({
                alpha: .6563
            },
            0).wait(1).to({
            alpha: .6898
        }, 0).wait(1).to({
            alpha: .7359
        }, 0).wait(1).to({
            alpha: .7906
        }, 0).wait(1).to({
            alpha: .8464
        }, 0).wait(1).to({
            alpha: .8952
        }, 0).wait(1).to({
            alpha: .9314
        }, 0).wait(1).to({
            alpha: .9531
        }, 0).wait(1).to({
            regY: 77.6,
            y: 77.6,
            alpha: .9609
        }, 0).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-21.6, 76.7, 43.3, 60.89999999999999);
    (b.symbol8 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_26 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(26).call(this.frame_26).wait(1));
        this.instance = new b.symbol10;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).to({
            scaleX: .2222,
            scaleY: .2222
        }, 23).to({
            _off: !0
        }, 1).wait(3))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-1.2, -1.2, 2.4, 2.4);
    (b.symbol7 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {};
        this.frame_26 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(26).call(this.frame_26).wait(1));
        this.instance = new b.symbol9;
        this.instance.parent =
            this;
        this.instance.setTransform(3.2, -.75);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            _off: !0
        }, 26).wait(1));
        this.instance_1 = new b.symbol8;
        this.instance_1.parent = this;
        this.instance_1.setTransform(.15, -.8);
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            guide: {
                path: [.2, -.8, 3, -1.2, 4.7, -3.1, 8.4, -6.9, 3.6, -14.2, -1.2, -21.5, 1.7, -29.5, 2.5, -32, 4, -34.3, 4.3, -34.7, 4.5, -35]
            }
        }, 25, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-1, -36.3, 8.5,
        36.699999999999996);
    (b.symbol4 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.parent.c = 10
        };
        this.frame_1 = function() {};
        this.frame_2 = function() {
            this.gotoAndPlay(1)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));
        this.instance = new b.symbol66;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).to({
            _off: !0
        }, 1).wait(2))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-5,
        -5, 10, 10);
    (b.star_sign_accentuator = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.c = 0
        };
        this.frame_1 = function() {
            for (var a, d = 0; 3 > d; d++) a = new b.light_src, exportRoot.addChild(a), a.x = this.x + (40 * Math.random() | 0) - 20 + exportRoot.sign_accentuator.x, a.y = this.y + (30 * Math.random() | 0) - 15 + exportRoot.sign_accentuator.y, a.scaleX = a.scaleY = (50 * Math.random() | 0) / 100 + 4 * this.scaleX
        };
        this.frame_2 = function() {
            this.gotoAndPlay(1)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));
        this.instance = new b.star_inner;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(3))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-198, -193.5, 396, 387);
    (b.sprite42 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.shape41("synched", 0);
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.sprite42, new a.Rectangle(-19.5, -19.5, 39, 39), null);
    (b.sprite39_1 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.instance_1 = new b.shape38_1("synched", 0);
        this.instance_1.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1))
    }).prototype = h(b.sprite39_1, new a.Rectangle(-82.7, -95.8, 185.5, 191.7), null);
    (b.sign_effect_replace_container = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(10));
        this.replace_sign10 =
            new b.replace_sign10;
        this.replace_sign10.name = "replace_sign10";
        this.replace_sign10.parent = this;
        this.replace_sign10.setTransform(-120, -150, .375, .375);
        this.replace_sign10.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.replace_sign10).wait(9).to({
            alpha: 1
        }, 0).wait(1));
        this.replace_sign9 = new b.replace_sign9;
        this.replace_sign9.name = "replace_sign9";
        this.replace_sign9.parent = this;
        this.replace_sign9.setTransform(-120, -150, .375, .375);
        this.replace_sign9.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.replace_sign9).wait(8).to({
                alpha: 1
            },
            0).to({
            _off: !0
        }, 1).wait(1));
        this.replace_sign8 = new b.replace_sign8;
        this.replace_sign8.name = "replace_sign8";
        this.replace_sign8.parent = this;
        this.replace_sign8.setTransform(-120, -150, .375, .375);
        this.replace_sign8.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.replace_sign8).wait(7).to({
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.replace_sign7 = new b.replace_sign7;
        this.replace_sign7.name = "replace_sign7";
        this.replace_sign7.parent = this;
        this.replace_sign7.setTransform(-120, -150, .375, .375);
        this.replace_sign7.alpha =
            0;
        this.timeline.addTween(a.Tween.get(this.replace_sign7).wait(6).to({
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(3));
        this.replace_sign6 = new b.replace_sign6;
        this.replace_sign6.name = "replace_sign6";
        this.replace_sign6.parent = this;
        this.replace_sign6.setTransform(-120, -150, .375, .375);
        this.replace_sign6.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.replace_sign6).wait(5).to({
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(4));
        this.replace_sign5 = new b.replace_sign5;
        this.replace_sign5.name = "replace_sign5";
        this.replace_sign5.parent =
            this;
        this.replace_sign5.setTransform(-120, -150, .375, .375);
        this.replace_sign5.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.replace_sign5).wait(4).to({
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(5));
        this.replace_sign4 = new b.replace_sign4;
        this.replace_sign4.name = "replace_sign4";
        this.replace_sign4.parent = this;
        this.replace_sign4.setTransform(-120, -150, .375, .375);
        this.replace_sign4.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.replace_sign4).wait(3).to({
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(6));
        this.replace_sign3 =
            new b.replace_sign3;
        this.replace_sign3.name = "replace_sign3";
        this.replace_sign3.parent = this;
        this.replace_sign3.setTransform(-120, -150, .375, .375);
        this.replace_sign3.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.replace_sign3).wait(2).to({
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(7));
        this.replace_sign2 = new b.replace_sign2;
        this.replace_sign2.name = "replace_sign2";
        this.replace_sign2.parent = this;
        this.replace_sign2.setTransform(-120, -150, .375, .375);
        this.replace_sign2.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.replace_sign2).wait(1).to({
                alpha: 1
            },
            0).to({
            _off: !0
        }, 1).wait(8));
        this.replace_sign1 = new b.replace_sign1;
        this.replace_sign1.name = "replace_sign1";
        this.replace_sign1.parent = this;
        this.replace_sign1.setTransform(-120, -150, .375, .375);
        this.timeline.addTween(a.Tween.get(this.replace_sign1).to({
            _off: !0
        }, 1).wait(9))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(0, 0, 0, 0);
    (b.set2_number_pop_w = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.stop();
            this.visible = !0
        };
        this.frame_1 = function() {
            this.stop();
            this.visible = !0
        };
        this.frame_2 = function() {
            this.stop();
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));
        this.instance = new b.fkds_w;
        this.instance.parent = this;
        this.instance.setTransform(78.7, 20.75, 1, 1, 0, 0, 0, 36.1, 17.7);
        this.instance_1 = new b.fkds_1keta_w;
        this.instance_1.parent = this;
        this.instance_1.setTransform(78.7, 20.75, 1, 1, 0, 0, 0, 36.1, 17.7);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
                state: [{
                    t: this.instance_1
                }]
            },
            1).to({
            state: []
        }, 1).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(0, -5.2, 74.5, 42.1);
    (b.scout_medal_1 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_29 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(a.Tween.get(this).wait(29).call(this.frame_29).wait(1));
        this.costume = new b.medal_flash;
        this.costume.name = "costume";
        this.costume.parent = this;
        this.costume.setTransform(30, 32.2, 1, 1, 0, 0, 0, 30, 30);
        this.costume.alpha = 0;
        this.costume._off = !0;
        this.timeline.addTween(a.Tween.get(this.costume).wait(10).to({
                _off: !1
            },
            0).wait(1).to({
            regX: 24,
            regY: 24,
            x: 24,
            y: 26.2,
            alpha: .0191
        }, 0).wait(1).to({
            alpha: .0758
        }, 0).wait(1).to({
            alpha: .1615
        }, 0).wait(1).to({
            alpha: .2579
        }, 0).wait(1).to({
            alpha: .3465
        }, 0).wait(1).to({
            alpha: .4164
        }, 0).wait(1).to({
            alpha: .4645
        }, 0).wait(1).to({
            alpha: .4915
        }, 0).wait(1).to({
            regX: 30,
            regY: 30,
            x: 30,
            y: 32.2,
            alpha: .5
        }, 0).wait(1).to({
            regX: 24,
            regY: 24,
            x: 24,
            y: 26.2,
            alpha: .4846
        }, 0).wait(1).to({
            alpha: .4383
        }, 0).wait(1).to({
            alpha: .3663
        }, 0).wait(1).to({
            alpha: .2806
        }, 0).wait(1).to({
            alpha: .1959
        }, 0).wait(1).to({
            alpha: .123
        }, 0).wait(1).to({
                alpha: .0669
            },
            0).wait(1).to({
            alpha: .0285
        }, 0).wait(1).to({
            alpha: .0068
        }, 0).wait(1).to({
            regX: 30,
            regY: 30,
            x: 30,
            y: 32.2,
            alpha: 0
        }, 0).wait(1));
        this.instance = new b.scoutmedal_core;
        this.instance.parent = this;
        this.instance.setTransform(30, 32.2, 1, 1, 0, 0, 0, 30, 30);
        this.timeline.addTween(a.Tween.get(this.instance).wait(30))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(0, 2.2, 48, 48);
    (b.replace_bg_blur_1 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.w_bg_b;
        this.instance.parent = this;
        this.instance.setTransform(120,
            160, .5, .5, 0, 0, 0, 240, 320);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.replace_bg_blur_1, new a.Rectangle(0, 0, 240, 320), null);
    (b.production_members_mc = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.visible = !1;
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(2));
        this.t = new a.Text("", "12px 'Arial'", "#333333");
        this.t.name = "t";
        this.t.textAlign = "right";
        this.t.lineHeight = 15;
        this.t.lineWidth = 70;
        this.t.parent = this;
        this.t.setTransform(78.05,
            -4.5);
        this.text = new a.Text("\u6240\u5c5e ", "12px 'Arial'", "#333333");
        this.text.lineHeight = 14;
        this.text.lineWidth = 37;
        this.text.parent = this;
        this.text.setTransform(-9.95, -4.5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.text,
                p: {
                    color: "#333333"
                }
            }, {
                t: this.t,
                p: {
                    text: "",
                    color: "#333333"
                }
            }]
        }).to({
            state: [{
                t: this.text,
                p: {
                    color: "#FF0000"
                }
            }, {
                t: this.t,
                p: {
                    text: "112/255 \u4eba",
                    color: "#FF0000"
                }
            }]
        }, 1).wait(1));
        this.instance = new b.production_members_p("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(41.05,
            .2, 1.0041, 1.0554, 0, 0, 0, 40.6, 0);
        this.instance.alpha = .8984;
        this.timeline.addTween(a.Tween.get(this.instance).wait(2))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-15.9, -8.8, 98, 19.700000000000003);
    (b.particle_common_parts2 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_15 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(15).call(this.frame_15).wait(15));
        this.instance = new b.particle_common_parts4;
        this.instance.parent = this;
        this.instance.setTransform(0, .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(30));
        this.instance_1 = new b.particle_common_parts3;
        this.instance_1.parent = this;
        this.instance_1.setTransform(19.95, -4.05, .7674, .7674);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            regX: -.3,
            regY: .5,
            scaleX: .5693,
            scaleY: .5693,
            rotation: -174.9492,
            x: 52.25,
            y: -71.1,
            alpha: .7229
        }, 0).wait(1).to({
            scaleX: .5097,
            scaleY: .5097,
            rotation: -119.2289,
            x: 62,
            y: -90.9,
            alpha: .6395
        }, 0).wait(1).to({
            scaleX: .4735,
            scaleY: .4735,
            rotation: -85.4829,
            x: 67.85,
            y: -102.95,
            alpha: .5889
        }, 0).wait(1).to({
            scaleX: .4484,
            scaleY: .4484,
            rotation: -61.9876,
            x: 71.8,
            y: -111.4,
            alpha: .5538
        }, 0).wait(1).to({
            scaleX: .4299,
            scaleY: .4299,
            rotation: -44.682,
            x: 74.7,
            y: -117.6,
            alpha: .5278
        }, 0).wait(1).to({
            scaleX: .4159,
            scaleY: .4159,
            rotation: -31.6108,
            x: 76.95,
            y: -122.3,
            alpha: .5083
        }, 0).wait(1).to({
            scaleX: .4052,
            scaleY: .4052,
            rotation: -21.661,
            x: 78.6,
            y: -125.9,
            alpha: .4934
        }, 0).wait(1).to({
            scaleX: .3972,
            scaleY: .3972,
            rotation: -14.1306,
            x: 79.9,
            y: -128.6,
            alpha: .4821
        }, 0).wait(1).to({
            scaleX: .3912,
            scaleY: .3912,
            rotation: -8.5439,
            x: 80.9,
            y: -130.7,
            alpha: .4737
        }, 0).wait(1).to({
            scaleX: .3869,
            scaleY: .3869,
            rotation: -4.5615,
            x: 81.55,
            y: -132.15,
            alpha: .4678
        }, 0).wait(1).to({
            scaleX: .3841,
            scaleY: .3841,
            rotation: -1.9317,
            x: 82,
            y: -133.1,
            alpha: .4638
        }, 0).wait(1).to({
            scaleX: .3826,
            scaleY: .3826,
            rotation: -.4617,
            x: 82.25,
            y: -133.6,
            alpha: .4616
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: .382,
            scaleY: .382,
            rotation: 0,
            x: 82.45,
            y: -134,
            alpha: .4609
        }, 0).to({
            _off: !0
        }, 1).wait(16))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (b.particle_common_parts1 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 =
            function() {
                this.r = Math.floor(3 * Math.random() + 2);
                this.gotoAndPlay(this.r)
            };
        this.frame_21 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(15));
        this.instance = new b.particle_common_parts4;
        this.instance.parent = this;
        this.instance.setTransform(0, .4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(36));
        this.instance_1 = new b.particle_common_parts3;
        this.instance_1.parent = this;
        this.instance_1.setTransform(19.95, -4.05, .7347, .7347);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            regX: -.3,
            regY: .5,
            scaleX: .5967,
            scaleY: .5967,
            rotation: 140.8707,
            x: 51.1,
            y: -65.6,
            alpha: .8319
        }, 0).wait(1).to({
            scaleX: .5493,
            scaleY: .5493,
            rotation: 189.3068,
            x: 62.1,
            y: -86.5,
            alpha: .774
        }, 0).wait(1).to({
            scaleX: .5163,
            scaleY: .5163,
            rotation: 222.9188,
            x: 69.65,
            y: -101.05,
            alpha: .7339
        }, 0).wait(1).to({
            scaleX: .4911,
            scaleY: .4911,
            rotation: 248.676,
            x: 75.4,
            y: -112.1,
            alpha: .7032
        }, 0).wait(1).to({
            scaleX: .4709,
            scaleY: .4709,
            rotation: 269.3198,
            x: 79.9,
            y: -120.95,
            alpha: .6785
        }, 0).wait(1).to({
            scaleX: .4543,
            scaleY: .4543,
            rotation: 286.2744,
            x: 83.55,
            y: -128.25,
            alpha: .6583
        }, 0).wait(1).to({
            scaleX: .4404,
            scaleY: .4404,
            rotation: 300.3959,
            x: 86.7,
            y: -134.4,
            alpha: .6415
        }, 0).wait(1).to({
            scaleX: .4288,
            scaleY: .4288,
            rotation: 312.2476,
            x: 89.25,
            y: -139.5,
            alpha: .6273
        }, 0).wait(1).to({
            scaleX: .4191,
            scaleY: .4191,
            rotation: 322.2242,
            x: 91.45,
            y: -143.85,
            alpha: .6154
        }, 0).wait(1).to({
            scaleX: .4108,
            scaleY: .4108,
            rotation: 330.6158,
            x: 93.25,
            y: -147.5,
            alpha: .6054
        }, 0).wait(1).to({
            scaleX: .404,
            scaleY: .404,
            rotation: 337.643,
            x: 94.8,
            y: -150.55,
            alpha: .597
        }, 0).wait(1).to({
            scaleX: .3982,
            scaleY: .3982,
            rotation: 343.4783,
            x: 96.05,
            y: -153.1,
            alpha: .59
        }, 0).wait(1).to({
            scaleX: .3936,
            scaleY: .3936,
            rotation: 348.2599,
            x: 97.1,
            y: -155.2,
            alpha: .5843
        }, 0).wait(1).to({
            scaleX: .3898,
            scaleY: .3898,
            rotation: 352.1005,
            x: 97.95,
            y: -156.9,
            alpha: .5797
        }, 0).wait(1).to({
            scaleX: .3869,
            scaleY: .3869,
            rotation: 355.0937,
            x: 98.6,
            y: -158.2,
            alpha: .5762
        }, 0).wait(1).to({
            scaleX: .3847,
            scaleY: .3847,
            rotation: 357.3179,
            x: 99.1,
            y: -159.15,
            alpha: .5735
        }, 0).wait(1).to({
            scaleX: .3832,
            scaleY: .3832,
            rotation: 358.8401,
            x: 99.4,
            y: -159.8,
            alpha: .5717
        }, 0).wait(1).to({
            scaleX: .3823,
            scaleY: .3823,
            rotation: 359.7175,
            x: 99.6,
            y: -160.2,
            alpha: .5706
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: .382,
            scaleY: .382,
            rotation: 360,
            x: 99.8,
            y: -160.55,
            alpha: .5703
        }, 0).to({
            _off: !0
        }, 1).wait(16))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-5.2, -178.7, 148.5, 184.7);
    (b._new = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_27 = function() {
            this.gotoAndPlay(5)
        };
        this.timeline.addTween(a.Tween.get(this).wait(27).call(this.frame_27).wait(1));
        this.txt = new b._new_p_w;
        this.txt.name = "txt";
        this.txt.parent = this;
        this.txt.setTransform(-31,
            1, .5, .5, 0, 0, 0, 31, 15.9);
        this.txt.alpha = 0;
        this.txt.compositeOperation = "lighter";
        this.txt._off = !0;
        this.timeline.addTween(a.Tween.get(this.txt).wait(15).to({
            _off: !1
        }, 0).wait(1).to({
            regY: 16,
            y: 1.05,
            alpha: .3602
        }, 0).wait(1).to({
            alpha: .5764
        }, 0).wait(1).to({
            y: 1,
            alpha: .6484
        }, 0).wait(1).to({
            alpha: .5123
        }, 0).wait(1).to({
            alpha: .3923
        }, 0).wait(1).to({
            alpha: .2882
        }, 0).wait(1).to({
            alpha: .2001
        }, 0).wait(1).to({
            alpha: .1281
        }, 0).wait(1).to({
            alpha: .072
        }, 0).wait(1).to({
            alpha: .032
        }, 0).wait(1).to({
            alpha: .008
        }, 0).wait(1).to({
                alpha: 0
            },
            0).wait(1));
        this.txt_1 = new b._new_p;
        this.txt_1.name = "txt_1";
        this.txt_1.parent = this;
        this.txt_1.setTransform(-31, 1, .5, .5, 0, 0, 0, 31, 16);
        this.timeline.addTween(a.Tween.get(this.txt_1).wait(28));
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,84,178,0.502)").s().p("AgvDdIj9BZIBTj/IijjVIENABICYjdIBSD/IECBNIjaCdIAGEMg");
        this.shape.setTransform(-59.0977, -11.1307, .235, .235, 0, 20.4903, -159.5097);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("rgba(255,84,178,0.502)").s().p("AgvDdIj9BZIBTj/IijjVIENABICYjdIBSD/IECBNIjaCdIAGEMg");
        this.shape_1.setTransform(-67.05, 5.95, .3895, .3895, 0, -11.199, 168.801, .1, -.2);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(28));
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.lf(["rgba(255,0,112,0.498)", "rgba(255,0,126,0)"], [0, 1], 40, 0, -40, 0).s().p("AmPCbIAAk1IMfAAIAAE1g");
        this.shape_2.setTransform(-40, .5);
        this.timeline.addTween(a.Tween.get(this.shape_2).wait(28))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-81.9, -19.8, 81.9, 41.7);
    (b.glitter_common_parts1 =
        function(f, d, e) {
            this.initialize(f, d, e, {});
            this.frame_0 = function() {
                this.scaleX = this.scaleY = .25 * Math.random();
                this.p.visible = !1
            };
            this.frame_8 = function() {
                this.gotoAndPlay(this.timeline.position + Math.floor(7 * Math.random()))
            };
            this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(9));
            this.p = new b.clickpoint;
            this.p.name = "p";
            this.p.parent = this;
            this.p.setTransform(.05, .05, 1, 1, 0, 0, 0, 29.4, 29.4);
            this.timeline.addTween(a.Tween.get(this.p).to({
                _off: !0
            }, 1).wait(16));
            this.instance =
                new b.s10000;
            this.instance.parent = this;
            this.instance.setTransform(-.05, 0, .1255, 1);
            this.instance._off = !0;
            this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
                _off: !1
            }, 0).wait(1).to({
                scaleX: .372
            }, 0).to({
                scaleX: .5,
                alpha: .1289
            }, 4).to({
                _off: !0
            }, 1).wait(10));
            this.instance_1 = new b.glitter_common_parts1_1;
            this.instance_1.parent = this;
            this.instance_1.setTransform(0, 0, .6427, .6427, -44.822);
            this.instance_1.alpha = .4297;
            this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
                scaleX: 3.7607,
                scaleY: 3.7607,
                rotation: -11.2055,
                alpha: .8574
            }, 0).wait(1).to({
                scaleX: 4.8,
                scaleY: 4.8,
                rotation: 0,
                alpha: 1
            }, 0).wait(1).to({
                scaleX: 4.722,
                scaleY: 4.722,
                rotation: 1.9399,
                alpha: .971
            }, 0).wait(1).to({
                scaleX: 4.5026,
                scaleY: 4.5026,
                rotation: 7.4005,
                alpha: .8893
            }, 0).wait(1).to({
                scaleX: 4.1415,
                scaleY: 4.1415,
                rotation: 16.3817,
                alpha: .7549
            }, 0).wait(1).to({
                scaleX: 3.6391,
                scaleY: 3.6391,
                rotation: 28.8836,
                alpha: .5678
            }, 0).wait(1).to({
                scaleX: 2.9951,
                scaleY: 2.9951,
                rotation: 44.9061,
                alpha: .3281
            }, 0).to({
                _off: !0
            }, 1).wait(9))
        }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-74.1, -41, 148.2, 82.1);
    (b.glitter_96120 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            1 != exportRoot._g.gType ? (this.visible = !0, this.play()) : (this.visible = !1, this.stop())
        };
        this.frame_35 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(1));
        this.instance = new b.glitter_common_parts1;
        this.instance.parent = this;
        this.instance.setTransform(-1.3, -16.9, .281, .281);
        this.timeline.addTween(a.Tween.get(this.instance).wait(36));
        this.instance_1 = new b.glitter_common_parts1;
        this.instance_1.parent = this;
        this.instance_1.setTransform(24.65, -34.45, .281, .281);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(3).to({
            _off: !1
        }, 0).wait(33));
        this.instance_2 = new b.glitter_common_parts1;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-36.05, 16.8, .281, .281);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(7).to({
            _off: !1
        }, 0).wait(29));
        this.instance_3 = new b.glitter_common_parts1;
        this.instance_3.parent = this;
        this.instance_3.setTransform(50.95, 37.9, .281, .281);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(9).to({
            _off: !1
        }, 0).wait(27));
        this.instance_4 = new b.glitter_common_parts1;
        this.instance_4.parent = this;
        this.instance_4.setTransform(18.1, 60.25, .281, .281);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(11).to({
            _off: !1
        }, 0).wait(25));
        this.instance_5 = new b.glitter_common_parts1;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-45.1,
            -21.25, .281, .281);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(13).to({
            _off: !1
        }, 0).wait(23));
        this.instance_6 = new b.glitter_common_parts1;
        this.instance_6.parent = this;
        this.instance_6.setTransform(45.45, .3, .281, .281);
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(19).to({
            _off: !1
        }, 0).wait(17));
        this.instance_7 = new b.glitter_common_parts1;
        this.instance_7.parent = this;
        this.instance_7.setTransform(8.8, 27.95, .281, .281);
        this.instance_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(26).to({
            _off: !1
        }, 0).wait(10));
        this.instance_8 = new b.glitter_common_parts1;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-31.05, -62.3, .281, .281);
        this.instance_8._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(28).to({
            _off: !1
        }, 0).wait(8));
        this.instance_9 = new b.glitter_common_parts1;
        this.instance_9.parent = this;
        this.instance_9.setTransform(38.9, -58.65, .281, .281);
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(36));
        this.instance_10 = new b.glitter_range;
        this.instance_10.parent = this;
        this.instance_10.setTransform(0, 0, .5335, .6658);
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(36))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-53.3, -70.5, 112.5, 139);
    (b.fkds_1keta = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.glitter_common_parts1;
        this.instance.parent = this;
        this.instance.setTransform(17.55, 6.45, .281, .281);
        this.instance_1 = new b.glitter_common_parts1;
        this.instance_1.parent =
            this;
        this.instance_1.setTransform(10.25, 25, .281, .281);
        this.instance_2 = new b.glitter_common_parts1;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-16.45, 7.45, .281, .281);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));
        this.instance_3 = new b.star_1;
        this.instance_3.parent = this;
        this.instance_3.setTransform(9.9, 32.95, .8148, .8148, 139.7673, 0, 0, 12.6, 4.1);
        this.instance_4 = new b.star_1;
        this.instance_4.parent = this;
        this.instance_4.setTransform(27.4,
            31.1, 1.6578, 1.6578, 178.2594);
        this.instance_5 = new b.star_1;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-8.45, -2.45, .8069, .8069, 48.6906, 0, 0, 4, 4);
        this.instance_6 = new b.star_1;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-24.15, -6.15, 1.6252, 1.6252);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }]
        }).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#FFCC33").ss(1, 1, 1).p("AiditQgwAAAAAwIAAAWIAACmQAAAxAwAAICAAAIAdA+IAfg+IB/AAQAwAAAAgxIAAi8QAAgwgwAAIjVAAg");
        this.shape.setTransform(2.225, 15.95);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FFFFFF").s().p("AgdBvIiAAAQgwABAAgxIAAimIAAgWQAAgwAwAAIBmAAIDVAAQAwAAAAAwIAAC8QAAAxgwgBIh/AAIgfA/g");
        this.shape_1.setTransform(2.225, 15.95);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = h(b.fkds_1keta, new a.Rectangle(-27.1, -9.9, 57.7, 45.9), null);
    (b.fkds = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.glitter_common_parts1;
        this.instance.parent =
            this;
        this.instance.setTransform(20.05, 2.45, .281, .281);
        this.instance_1 = new b.glitter_common_parts1;
        this.instance_1.parent = this;
        this.instance_1.setTransform(14, 27.55, .281, .281);
        this.instance_2 = new b.glitter_common_parts1;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-23.85, 9.45, .281, .281);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));
        this.instance_3 = new b.star_1;
        this.instance_3.parent = this;
        this.instance_3.setTransform(9.95,
            32.15, .8148, .8148, 139.7673, 0, 0, 12.6, 4.1);
        this.instance_4 = new b.star_1;
        this.instance_4.parent = this;
        this.instance_4.setTransform(31.2, 30.3, 1.6578, 1.6578, 178.2594);
        this.instance_5 = new b.star_1;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-16.6, -1.55, .8069, .8069, 48.6906, 0, 0, 4, 4);
        this.instance_6 = new b.star_1;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-32.9, -5.25, 1.6252, 1.6252);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_6
                }, {
                    t: this.instance_5
                }, {
                    t: this.instance_4
                },
                {
                    t: this.instance_3
                }
            ]
        }).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#FFCC33").ss(1, 1, 1).p("AjjitQgwAAAAAxIAAAWIAAClQAAAxAwAAIDGAAIAdA+IAfg+IDFAAQAwAAAAgxIAAi7QAAgxgwAAIkbAAg");
        this.shape.setTransform(.175, 15.975);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FFFFFF").s().p("AgdBwIjGAAQgwAAAAgxIAAilIAAgWQAAgxAwAAICsAAIEbAAQAwAAAAAxIAAC7QAAAxgwAAIjFAAIgfA+g");
        this.shape_1.setTransform(.175, 15.975);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype =
        h(b.fkds, new a.Rectangle(-35.9, -9, 70.3, 44.8), null);
    (b.first_card = function(f, d, e) {
        this.initialize(f, d, e, {
            one: 2
        });
        this.frame_1 = function() {
            this.stop()
        };
        this.frame_3 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(1));
        this.card3 = new b.card_srl1;
        this.card3.name = "card3";
        this.card3.parent = this;
        this.card3.setTransform(0, 0, .15, .15);
        this.card3._off = !0;
        this.timeline.addTween(a.Tween.get(this.card3).wait(2).to({
            _off: !1
        }, 0).wait(2));
        this.card1 =
            new b.card1;
        this.card1.name = "card1";
        this.card1.parent = this;
        this.card1.setTransform(0, 0, .4363, .4363);
        this.timeline.addTween(a.Tween.get(this.card1).to({
            _off: !0
        }, 2).wait(2))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-48, -60, 96, 120);
    (b.efa_\uff77\uff97\uff77\uff97 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.efa_\uff77\uff97\uff77\uff97_p;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .4807, .4807);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            scaleX: .7356,
            scaleY: .7356
        }, 1).to({
            scaleX: 1.4901,
            scaleY: 1.4901
        }, 1).to({
            scaleX: 2.1305,
            scaleY: 2.1305,
            rotation: -34.3349,
            alpha: .5
        }, 4).to({
            _off: !0
        }, 1).wait(2))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-57.7, -57.7, 115.5, 115.5);
    (b.efa_kira = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.play()
        };
        this.frame_12 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));
        this.instance = new b.glitter_common_parts1;
        this.instance.parent =
            this;
        this.instance.setTransform(156.4, 68.4, .281, .281);
        this.timeline.addTween(a.Tween.get(this.instance).wait(13));
        this.instance_1 = new b.glitter_common_parts1;
        this.instance_1.parent = this;
        this.instance_1.setTransform(105.1, 15.7, .281, .281);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(3).to({
            _off: !1
        }, 0).wait(10));
        this.instance_2 = new b.glitter_common_parts1;
        this.instance_2.parent = this;
        this.instance_2.setTransform(67.7, 7.55, .281, .281);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(3).to({
                _off: !1
            },
            0).wait(10));
        this.instance_3 = new b.glitter_common_parts1;
        this.instance_3.parent = this;
        this.instance_3.setTransform(139.65, 16.85, .281, .281);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(6).to({
            _off: !1
        }, 0).wait(7));
        this.instance_4 = new b.glitter_common_parts1;
        this.instance_4.parent = this;
        this.instance_4.setTransform(64.55, 30.45, .281, .281, 0, 0, 0, 0, -1.3);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(6).to({
            _off: !1
        }, 0).wait(7));
        this.instance_5 =
            new b.glitter_common_parts1;
        this.instance_5.parent = this;
        this.instance_5.setTransform(126.65, 51.3, .281, .281);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(9).to({
            _off: !1
        }, 0).wait(4));
        this.instance_6 = new b.glitter_common_parts1;
        this.instance_6.parent = this;
        this.instance_6.setTransform(31.3, 6.85, .281, .281);
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(9).to({
            _off: !1
        }, 0).wait(4));
        this.instance_7 = new b.glitter_common_parts1;
        this.instance_7.parent =
            this;
        this.instance_7.setTransform(126.65, 34.1, .281, .281);
        this.instance_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(10).to({
            _off: !1
        }, 0).wait(3));
        this.instance_8 = new b.glitter_common_parts1;
        this.instance_8.parent = this;
        this.instance_8.setTransform(10.1, 27.25, .281, .281);
        this.instance_8._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(10).to({
            _off: !1
        }, 0).wait(3));
        this.instance_9 = new b.glitter_common_parts1;
        this.instance_9.parent = this;
        this.instance_9.setTransform(173.9,
            50.5, .281, .281);
        this.instance_9._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(11).to({
            _off: !1
        }, 0).wait(2));
        this.instance_10 = new b.glitter_common_parts1;
        this.instance_10.parent = this;
        this.instance_10.setTransform(52.15, 46.35, .281, .281);
        this.instance_10._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(11).to({
            _off: !1
        }, 0).wait(2));
        this.instance_11 = new b.glitter_common_parts1;
        this.instance_11.parent = this;
        this.instance_11.setTransform(87.3, 61.5, .281, .281);
        this.instance_11._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(11).to({
            _off: !1
        }, 0).wait(2));
        this.instance_12 = new b.glitter_range;
        this.instance_12.parent = this;
        this.instance_12.setTransform(95, 37.55, 1.0558, .4175);
        this.timeline.addTween(a.Tween.get(this.instance_12).wait(13))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(0, -1.3, 190, 78);
    (b.curtain_open2 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.curtain("synched", 0, !1);
        this.instance.parent = this;
        this.instance.setTransform(16.8,
            1.05, .263, .4068, 0, 0, 180, 0, 94.4);
        this.instance_1 = new b.curtain("synched", 0, !1);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-16.7, 1.05, .263, .4068, 0, 0, 0, 0, 94.4);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(50))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-47, -37.3, 94.2, 77.6);
    (b.curtain_open_l2 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.curtain_l("synched", 0, !1);
        this.instance.parent = this;
        this.instance.setTransform(26.9,
            -1.45, .4203, .4534, 0, 0, 180, -.3, 94.3);
        this.instance_1 = new b.curtain_l("synched", 0, !1);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-26.9, -1.5, .4203, .4534, 0, 0, 0, -.1, 94.2);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(50))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-75.3, -44.2, 150.6, 86.5);
    (b.cursor_2 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.cursor_p_2;
        this.instance.parent = this;
        this.instance.setTransform(210,
            135.75, .1846, .1863, 0, 0, 0, 0, -.6);
        this.timeline.addTween(a.Tween.get(this.instance).wait(2).to({
            scaleX: .1844,
            y: 137.7
        }, 0).wait(2))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(203, 129.8, 15.199999999999989, 15.099999999999994);
    (b.cursor = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.cursor_p;
        this.instance.parent = this;
        this.instance.setTransform(210, 135.75, .1846, .1863, 0, 0, 0, 0, -.6);
        this.timeline.addTween(a.Tween.get(this.instance).wait(2).to({
            scaleX: .1844,
            y: 137.7
        }, 0).wait(2))
    }).prototype =
        g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(203, 129.8, 15.199999999999989, 15.099999999999994);
    (b.container_num_d_w = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.num = new b.num_d_w;
        this.num.name = "num";
        this.num.parent = this;
        this.num.setTransform(3.3, 7, 1, 1, 0, 0, 0, 3.3, 7);
        this.timeline.addTween(a.Tween.get(this.num).wait(1))
    }).prototype = h(b.container_num_d_w, new a.Rectangle(.1, 0, 21, 22), null);
    (b.container_num_d = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.num = new b.num_d;
        this.num.name = "num";
        this.num.parent =
            this;
        this.num.setTransform(3.3, 7, 1, 1, 0, 0, 0, 3.3, 7);
        this.timeline.addTween(a.Tween.get(this.num).wait(1))
    }).prototype = h(b.container_num_d, new a.Rectangle(.1, 0, 21, 22), null);
    (b.card_reflect = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("Aj3BhIAAjBIHvAAIAADBg");
        this.shape.setTransform(0, -157.55);
        this.timeline.addTween(a.Tween.get(this.shape).wait(32));
        f = new a.Shape;
        f._off = !0;
        d = (new a.Graphics).p("AnfJYIAAyvIO/AAIAASvg");
        this.timeline.addTween(a.Tween.get(f).to({
            graphics: d,
            x: 0,
            y: 0
        }).wait(9).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(23));
        this.instance = new b.efc_card_kirari;
        this.instance.parent = this;
        this.instance.setTransform(-.5, 120.1, .542, .4283, 0, 0, -29.8291);
        d = [this.instance];
        for (e = 0; e < d.length; e++) d[e].mask = f;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regY: 46.7,
            y: 62.55
        }, 0).wait(1).to({
            y: 24.05
        }, 0).wait(1).to({
            y: 3.15
        }, 0).wait(1).to({
            regY: 0,
            y: -24.15
        }, 0).wait(1).to({
            regY: 46.7,
            y: -9.1
        }, 0).wait(1).to({
            y: -26.15
        }, 0).wait(1).to({
            y: -61.1
        }, 0).wait(1).to({
                regY: 0,
                y: -154.65
            },
            0).to({
            _off: !0
        }, 1).wait(23))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-48, -167.2, 96, 227.2);
    (b.replace_bg_2 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance_1 = new b.w_bg;
        this.instance_1.parent = this;
        this.instance_1.setTransform(240, 320, 1, 1, 0, 0, 0, 240, 320);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1))
    }).prototype = h(b.replace_bg_2, new a.Rectangle(0, 0, 480, 640), null);
    (b.rare_effect_container = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.play()
        };
        this.frame_9 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));
        this.instance = new b.rare_effect_circle;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .2574, .2574, 0, 0, 0, 0, -155.4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            scaleX: .535,
            scaleY: .535,
            alpha: .6468
        }, 0).wait(1).to({
            scaleX: .6999,
            scaleY: .6999,
            y: .1,
            alpha: .4371
        }, 0).wait(1).to({
            scaleX: .8156,
            scaleY: .8156,
            alpha: .2898
        }, 0).wait(1).to({
            scaleX: .9007,
            scaleY: .9007,
            alpha: .1816
        }, 0).wait(1).to({
            scaleX: .9632,
            scaleY: .9632,
            alpha: .1021
        }, 0).wait(1).to({
            scaleX: 1.0071,
            scaleY: 1.0071,
            alpha: .0463
        }, 0).wait(1).to({
            scaleX: 1.0339,
            scaleY: 1.0339,
            y: .15,
            alpha: .0121
        }, 0).wait(1).to({
            regY: -155.3,
            scaleX: 1.0434,
            scaleY: 1.0434,
            y: .1,
            alpha: 0
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-164.7, -164.7, 329.5, 329.5);
    (b.petit_core = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(10));
        this.instance = new b.petit1_core;
        this.instance.parent = this;
        this.instance.setTransform(35, 47.5, 1, 1, 0, 0, 0, 35, 47.5);
        this.instance_1 = new b.petit2_core;
        this.instance_1.parent = this;
        this.instance_1.setTransform(35, 47.5, 1, 1, 0, 0, 0, 35, 47.5);
        this.instance_2 = new b.petit3_core;
        this.instance_2.parent = this;
        this.instance_2.setTransform(35, 47.5, 1, 1, 0, 0, 0, 35, 47.5);
        this.instance_3 = new b.petit_core4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(35, 47.5, 1, 1, 0, 0, 0, 35, 47.5);
        this.instance_4 = new b.petit_core5;
        this.instance_4.parent =
            this;
        this.instance_4.setTransform(35, 47.5, 1, 1, 0, 0, 0, 35, 47.5);
        this.instance_5 = new b.petit_core6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(35, 47.5, 1, 1, 0, 0, 0, 35, 47.5);
        this.instance_6 = new b.petit_core7;
        this.instance_6.parent = this;
        this.instance_6.setTransform(35, 47.5, 1, 1, 0, 0, 0, 35, 47.5);
        this.instance_7 = new b.petit_core8;
        this.instance_7.parent = this;
        this.instance_7.setTransform(35, 47.5, 1, 1, 0, 0, 0, 35, 47.5);
        this.instance_8 = new b.petit_core9;
        this.instance_8.parent = this;
        this.instance_8.setTransform(35,
            47.5, 1, 1, 0, 0, 0, 35, 47.5);
        this.instance_9 = new b.petit_core10;
        this.instance_9.parent = this;
        this.instance_9.setTransform(35, 47.5, 1, 1, 0, 0, 0, 35, 47.5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
                state: [{
                    t: this.instance_9
                }]
            },
            1).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(0, 0, 70, 95);
    (b.costume_core = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(10));
        this.instance = new b.costume1_core;
        this.instance.parent = this;
        this.instance.setTransform(18, 18, .6, .6, 0, 0, 0, 30, 30);
        this.instance_1 = new b.costume2_core;
        this.instance_1.parent = this;
        this.instance_1.setTransform(18, 18, .6, .6, 0, 0, 0, 30, 30);
        this.instance_2 = new b.costume3_core;
        this.instance_2.parent = this;
        this.instance_2.setTransform(18, 18, .6, .6, 0, 0, 0, 30, 30);
        this.instance_3 = new b.costume4_core;
        this.instance_3.parent = this;
        this.instance_3.setTransform(18, 18, .6, .6, 0, 0, 0, 30, 30);
        this.instance_4 = new b.costume5_core;
        this.instance_4.parent = this;
        this.instance_4.setTransform(18, 18, .6, .6, 0, 0, 0, 30, 30);
        this.instance_5 = new b.costume6_core;
        this.instance_5.parent = this;
        this.instance_5.setTransform(18, 18, .6, .6, 0, 0, 0, 30, 30);
        this.instance_6 = new b.costume7_core;
        this.instance_6.parent = this;
        this.instance_6.setTransform(18,
            18, .6, .6, 0, 0, 0, 30, 30);
        this.instance_7 = new b.costume8_core;
        this.instance_7.parent = this;
        this.instance_7.setTransform(18, 18, .6, .6, 0, 0, 0, 30, 30);
        this.instance_8 = new b.costume9_core;
        this.instance_8.parent = this;
        this.instance_8.setTransform(18, 18, .6, .6, 0, 0, 0, 30, 30);
        this.instance_9 = new b.costume10_core;
        this.instance_9.parent = this;
        this.instance_9.setTransform(18, 18, .6, .6, 0, 0, 0, 30, 30);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
                state: [{
                    t: this.instance_2
                }]
            },
            1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(0, 0, 48, 48);
    (b._mesWindow = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.cursor_2;
        this.instance.parent = this;
        this.instance.setTransform(100.85, 31.2, .6429, .6408, 0,
            0, 0, 210, 135.9);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.161)").s().p("AwZHgQiBgBgBiBIAAq7QABiBCBgBMAgzAAAQCBABABCBIAAK7QgBCBiBABgAyNldIAAK7QAAB1B0gBMAgzAAAQB0AAAAh0IAAq7QAAh0h0AAMggzAAAQh0AAAAB0g");
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("rgba(255,255,255,0.329)").s().p("AwZHSQh0AAAAh0IAAq7QAAh0B0AAMAgzAAAQB0AAAAB0IAAK7QAAB0h0AAgAyAldIAAK7QAABnBnAAMAgzAAAQBnAAAAhnIAAq7QAAhnhnAAMggzAAAQhnAAAABng");
        this.shape_1.setTransform(.025,
            .025);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("rgba(255,255,255,0.498)").s().p("AwZHFQhnAAAAhnIAAq7QAAhnBnAAMAgzAAAQBnAAAABnIAAK7QAABnhnAAgAxyldIAAK7QAABaBZAAMAgzAAAQBaAAAAhaIAAq7QgBhahZABMggzAAAQhZgBAABag");
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("rgba(255,255,255,0.663)").s().p("AwZG4QhaAAAAhaIAAq7QAAhaBaAAMAgzAAAQBZAAABBaIAAK7QAABZhaABgAxmldIAAK7QAABMBNAAMAgzAAAQBMAAAAhMIAAq7QAAhNhMAAMggzAAAQhNAAAABNg");
        this.shape_3.setTransform(.025, .025);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.f("rgba(255,255,255,0.831)").s().p("AwZGrQhMAAgBhNIAAq7QABhNBMAAMAgzAAAQBMAAABBNIAAK7QgBBNhMAAgAxYldIAAK7QAABAA/gBMAgzAAAQA/AAAAg/IAAq7QAAg/g/AAMggzAAAQg/AAAAA/g");
        this.shape_5 = new a.Shape;
        this.shape_5.graphics.f("#FFFFFF").s().p("AwZGdQg/AAAAg/IAAq7QAAg/A/AAMAgzAAAQA/AAAAA/IAAK7QAAA/g/AAg");
        this.shape_5.setTransform(.025, .025);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = h(b._mesWindow, new a.Rectangle(-117.9, -47.9, 235.9, 95.9), null);
    (b.glitter_inner = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_1 = function() {
            this.gotoAndStop(Math.floor(3 *
                Math.random()) + 1)
        };
        this.timeline.addTween(a.Tween.get(this).wait(1).call(this.frame_1).wait(3));
        this.instance = new b.glitter_inner_sphere;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .7694, .7694);
        this.timeline.addTween(a.Tween.get(this.instance).wait(4));
        this.instance_1 = new b.glitter_inner_sphere_pink;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, .05, 1.5, .0862, -45);
        this.instance_2 = new b.glitter_inner_sphere_pink;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0,
            .3342, .3342);
        this.instance_3 = new b.glitter_inner_sphere_pink;
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, -.05, 1.5, .0862, 45);
        this.instance_4 = new b.glitter_inner_sphere_pink;
        this.instance_4.parent = this;
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }]
        }, 3).wait(1));
        this.instance_5 = new b.glitter_inner_sphere_blue;
        this.instance_5.parent = this;
        this.instance_5.setTransform(0, .05, 1.5, .0862, -45);
        this.instance_6 =
            new b.glitter_inner_sphere_blue;
        this.instance_6.parent = this;
        this.instance_6.setTransform(0, 0, .3342, .3342);
        this.instance_7 = new b.glitter_inner_sphere_blue;
        this.instance_7.parent = this;
        this.instance_7.setTransform(0, -.05, 1.5, .0862, 45);
        this.instance_8 = new b.glitter_inner_sphere_blue;
        this.instance_8.parent = this;
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }]
        }, 2).to({
            state: []
        }, 1).wait(1));
        this.instance_9 = new b.glitter_inner_sphere_orange;
        this.instance_9.parent = this;
        this.instance_9.setTransform(0, .05, 1.5, .0862, -45);
        this.instance_10 = new b.glitter_inner_sphere_orange;
        this.instance_10.parent = this;
        this.instance_10.setTransform(0, 0, .3342, .3342);
        this.instance_11 = new b.glitter_inner_sphere_orange;
        this.instance_11.parent = this;
        this.instance_11.setTransform(0, -.05, 1.5, .0862, 45);
        this.instance_12 = new b.glitter_inner_sphere_orange;
        this.instance_12.parent = this;
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_12
                }, {
                    t: this.instance_11
                },
                {
                    t: this.instance_10
                }, {
                    t: this.instance_9
                }
            ]
        }).to({
            state: []
        }, 2).wait(2))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-45.4, -45.4, 90.9, 90.9);
    (b._cards_SR = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.stop();
            exportRoot.premium_card_effect_flag || (this.replace_sign_container.visible = !1)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(10));
        this.replace_sign_container = new b.sign_effect_replace_container;
        this.replace_sign_container.name = "replace_sign_container";
        this.replace_sign_container.parent = this;
        this.timeline.addTween(a.Tween.get(this.replace_sign_container).wait(10));
        this.card_srl1 = new b.card_srl1;
        this.card_srl1.name = "card_srl1";
        this.card_srl1.parent = this;
        this.card_srl1.setTransform(0, 0, .375, .375);
        this.card_srl2 = new b.card_srl2;
        this.card_srl2.name = "card_srl2";
        this.card_srl2.parent = this;
        this.card_srl2.setTransform(0, 0, .375, .375);
        this.card_srl3 = new b.card_srl3;
        this.card_srl3.name = "card_srl3";
        this.card_srl3.parent = this;
        this.card_srl3.setTransform(0, 0,
            .375, .375);
        this.card_srl4 = new b.card_srl4;
        this.card_srl4.name = "card_srl4";
        this.card_srl4.parent = this;
        this.card_srl4.setTransform(0, 0, .375, .375);
        this.card_srl5 = new b.card_srl5;
        this.card_srl5.name = "card_srl5";
        this.card_srl5.parent = this;
        this.card_srl5.setTransform(0, 0, .375, .375);
        this.card_srl6 = new b.card_srl6;
        this.card_srl6.name = "card_srl6";
        this.card_srl6.parent = this;
        this.card_srl6.setTransform(0, 0, .375, .375);
        this.card_srl7 = new b.card_srl7;
        this.card_srl7.name = "card_srl7";
        this.card_srl7.parent = this;
        this.card_srl7.setTransform(0,
            0, .375, .375);
        this.card_srl8 = new b.card_srl8;
        this.card_srl8.name = "card_srl8";
        this.card_srl8.parent = this;
        this.card_srl8.setTransform(0, 0, .375, .375);
        this.card_srl9 = new b.card_srl9;
        this.card_srl9.name = "card_srl9";
        this.card_srl9.parent = this;
        this.card_srl9.setTransform(0, 0, .375, .375);
        this.card_srl10 = new b.card_srl10;
        this.card_srl10.name = "card_srl10";
        this.card_srl10.parent = this;
        this.card_srl10.setTransform(0, 0, .375, .375);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.card_srl1
            }]
        }).to({
                state: [{
                    t: this.card_srl2
                }]
            },
            1).to({
            state: [{
                t: this.card_srl3
            }]
        }, 1).to({
            state: [{
                t: this.card_srl4
            }]
        }, 1).to({
            state: [{
                t: this.card_srl5
            }]
        }, 1).to({
            state: [{
                t: this.card_srl6
            }]
        }, 1).to({
            state: [{
                t: this.card_srl7
            }]
        }, 1).to({
            state: [{
                t: this.card_srl8
            }]
        }, 1).to({
            state: [{
                t: this.card_srl9
            }]
        }, 1).to({
            state: [{
                t: this.card_srl10
            }]
        }, 1).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-120, -150, 240, 300);
    (b._cards = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(10));
        this.card1 = new b.card1;
        this.card1.name = "card1";
        this.card1.parent = this;
        this.card1.setTransform(-48, -59.95, .4363, .4363, 0, 0, 0, -110, -136.3);
        this.card2 = new b.card2;
        this.card2.name = "card2";
        this.card2.parent = this;
        this.card2.setTransform(0, -.5, .4363, .4363);
        this.card3 = new b.card3;
        this.card3.name = "card3";
        this.card3.parent = this;
        this.card3.setTransform(0, -.5, .4363, .4363);
        this.card4 = new b.card4;
        this.card4.name = "card4";
        this.card4.parent = this;
        this.card4.setTransform(0, -.5, .4363, .4363);
        this.card5 = new b.card5;
        this.card5.name =
            "card5";
        this.card5.parent = this;
        this.card5.setTransform(0, -.5, .4363, .4363);
        this.card6 = new b.card6;
        this.card6.name = "card6";
        this.card6.parent = this;
        this.card6.setTransform(0, -.5, .4363, .4363);
        this.card7 = new b.card7;
        this.card7.name = "card7";
        this.card7.parent = this;
        this.card7.setTransform(0, -.5, .4363, .4363);
        this.card8 = new b.card8;
        this.card8.name = "card8";
        this.card8.parent = this;
        this.card8.setTransform(0, -.5, .4363, .4363);
        this.card9 = new b.card9;
        this.card9.name = "card9";
        this.card9.parent = this;
        this.card9.setTransform(0,
            -.5, .4363, .4363);
        this.card10 = new b.card10;
        this.card10.name = "card10";
        this.card10.parent = this;
        this.card10.setTransform(0, -.5, .4363, .4363);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.card1
            }]
        }).to({
            state: [{
                t: this.card2
            }]
        }, 1).to({
            state: [{
                t: this.card3
            }]
        }, 1).to({
            state: [{
                t: this.card4
            }]
        }, 1).to({
            state: [{
                t: this.card5
            }]
        }, 1).to({
            state: [{
                t: this.card6
            }]
        }, 1).to({
            state: [{
                t: this.card7
            }]
        }, 1).to({
            state: [{
                t: this.card8
            }]
        }, 1).to({
            state: [{
                t: this.card9
            }]
        }, 1).to({
            state: [{
                t: this.card10
            }]
        }, 1).wait(1))
    }).prototype =
        g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-48, -60.5, 96, 120.5);
    (b._bg_mc_boke = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_bg_blur_1;
        this.instance.parent = this;
        this.instance.setTransform(-119.5, -160, 1, 1, 0, 0, 0, .5, 0);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b._bg_mc_boke, new a.Rectangle(-120, -160, 240, 320), null);
    (b.curtain_zoom_shot = function(f, d, e) {
        this.initialize(f, d, e, {
            local: 19
        });
        this.frame_0 = function() {
            1 == exportRoot._g.gType && this.gotoAndPlay("local")
        };
        this.frame_18 = function() {
            this.stop()
        };
        this.frame_37 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(19).call(this.frame_37).wait(1));
        this.instance = new b.curtain_open2("synched", 0, !1);
        this.instance.parent = this;
        this.instance.setTransform(0, 1.65, 4.4367, 4.4367);
        this.instance_1 = new b.curtain_open_l2("synched", 0, !1);
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 1.65, 4.4367, 4.4367);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).to({
            scaleX: 5.7502,
            scaleY: 4.4368,
            y: 1.6,
            startPosition: 4
        }, 4, a.Ease.get(-1)).to({
            scaleX: 6.1615,
            scaleY: 4.4367,
            y: 1.65,
            startPosition: 8
        }, 3).to({
            _off: !0
        }, 12).wait(19));
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(19).to({
            _off: !1
        }, 0).to({
            scaleX: 5.7502,
            scaleY: 4.4368,
            y: 1.6,
            startPosition: 4
        }, 4, a.Ease.get(-1)).to({
            scaleX: 6.1615,
            scaleY: 4.4367,
            y: 1.65,
            startPosition: 8
        }, 3).wait(12))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-464.1, -194.5, 927.7, 383.6);
    (b.window_petit = function(f, d, e) {
        this.initialize(f, d,
            e, {});
        this.instance = new b.mc44;
        this.instance.parent = this;
        this.instance.setTransform(29.4, 30.9, .8554, .8554);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        f = new a.Shape;
        f._off = !0;
        f.graphics.p("AhUCzIijgSIAhigIghihICjgSICOhRIBDCWIB7BuIh7BuIhDCVg");
        f.setTransform(29.7, 31.05);
        this.c = new b.petit_core;
        this.c.name = "c";
        this.c.parent = this;
        this.c.setTransform(29.25, 44, 1, 1, 0, 0, 0, 35, 47.5);
        d = [this.c];
        for (e = 0; e < d.length; e++) d[e].mask = f;
        this.timeline.addTween(a.Tween.get(this.c).wait(1))
    }).prototype =
        h(b.window_petit, new a.Rectangle(0, 0, 58.9, 61.8), null);
    (b.vignette = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.vignette_mask;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        this.card = new b._cards_SR;
        this.card.name = "card";
        this.card.parent = this;
        this.card.setTransform(120, 150);
        this.timeline.addTween(a.Tween.get(this.card).wait(1))
    }).prototype = h(b.vignette, new a.Rectangle(0, 0, 240, 300), null);
    (b.text_win2 = function(f,
        d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.cursor_2;
        this.instance.parent = this;
        this.instance.setTransform(220.85, 81.2, .6429, .6408, 0, 0, 0, 210, 135.9);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        this.instance_1 = new b.text_window;
        this.instance_1.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1))
    }).prototype = h(b.text_win2, new a.Rectangle(0, 0, 232, 90), null);
    (b.text_new_idol = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.replace_caption_1;
        this.instance.parent =
            this;
        this.instance.setTransform(-84, -9);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        this.instance_1 = new b.cursor;
        this.instance_1.parent = this;
        this.instance_1.setTransform(91.2, -1.25, .8259, .8259, 0, 0, 0, 209.7, 135.3);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("A3bBkIAAjHMAu3AAAIAADHg");
        this.shape.setTransform(13.9, 0);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = h(b.text_new_idol,
        new a.Rectangle(-136.1, -10, 300, 20), null);
    (b.symbol5 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.cc.text = exportRoot.call_msg
        };
        this.frame_17 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#7D5FFF").s().p("AlJBXIAAitIKTAAIAACtg");
        this.shape.setTransform(-317.125, 0);
        this.timeline.addTween(a.Tween.get(this.shape).to({
            _off: !0
        }, 1).wait(17));
        this.pa = new b.symbol7;
        this.pa.name = "pa";
        this.pa.parent = this;
        this.pa.setTransform(-151.15, -20.9);
        this.pa._off = !0;
        this.timeline.addTween(a.Tween.get(this.pa).wait(1).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 16).wait(1));
        this.pb = new b.symbol4;
        this.pb.name = "pb";
        this.pb.parent = this;
        this.pb.setTransform(-118.9, .15);
        this.pb._off = !0;
        this.timeline.addTween(a.Tween.get(this.pb).wait(1).to({
            _off: !1
        }, 0).wait(1).to({
            x: -99.505,
            y: .06
        }, 0).wait(1).to({
            x: -80.11,
            y: -.03
        }, 0).wait(1).to({
            x: -60.715,
            y: -.12
        }, 0).wait(1).to({
            x: -41.32,
            y: -.21
        }, 0).wait(1).to({
            x: -21.925,
            y: -.3
        }, 0).wait(1).to({
            x: -2.53,
            y: -.39
        }, 0).wait(1).to({
            x: 16.865,
            y: -.48
        }, 0).wait(1).to({
            x: 36.26,
            y: -.57
        }, 0).wait(1).to({
            x: 55.655,
            y: -.66
        }, 0).wait(1).to({
            x: 75.05,
            y: -.75
        }, 0).to({
            _off: !0
        }, 1).wait(6));
        this.instance = new b.symbol6;
        this.instance.parent = this;
        this.instance.setTransform(-236, 1.3);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            x: 44.2
        }, 13, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(4));
        this.cc = new a.Text("", "12px 'MS PGothic'", "#FF99FF");
        this.cc.name = "cc";
        this.cc.lineHeight = 14;
        this.cc.lineWidth = 256;
        this.cc.parent = this;
        this.cc.setTransform(-106, -8);
        this.timeline.addTween(a.Tween.get(this.cc).wait(18));
        this.cc_2 = new a.Text("", "12px 'MS PGothic'", "#FFFFFF");
        this.cc_2.name = "cc_2";
        this.cc_2.lineHeight = 14;
        this.cc_2.lineWidth = 256;
        this.cc_2.parent = this;
        this.cc_2.setTransform(-104.9, -6.9);
        this.timeline.addTween(a.Tween.get(this.cc_2).wait(18))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-350.1, -57, 757, 93.1);
    (b.sr_comment_window = function(f, d, e) {
        this.initialize(f, d, e, {
            close: 12
        });
        this.frame_0 =
            function() {
                for (i = 1; 6 > i; i++) this["tf" + i].text = "";
                this.play()
            };
        this.frame_3 = function() {
            for (i = 1; 6 > i; i++) this["tf" + i].text = exportRoot["tfv" + i]
        };
        this.frame_11 = function() {
            this.stop()
        };
        this.frame_17 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(8).call(this.frame_11).wait(6).call(this.frame_17).wait(1));
        this.tf5 = new a.Text("", "12px 'Arial'");
        this.tf5.name = "tf5";
        this.tf5.lineHeight = 15;
        this.tf5.lineWidth = 260;
        this.tf5.parent = this;
        this.tf5.setTransform(-104,
            136.95);
        this.tf4 = new a.Text("", "12px 'Arial'");
        this.tf4.name = "tf4";
        this.tf4.lineHeight = 15;
        this.tf4.lineWidth = 260;
        this.tf4.parent = this;
        this.tf4.setTransform(-104, 121.1);
        this.tf3 = new a.Text("", "12px 'Arial'");
        this.tf3.name = "tf3";
        this.tf3.lineHeight = 15;
        this.tf3.lineWidth = 260;
        this.tf3.parent = this;
        this.tf3.setTransform(-104, 105.4);
        this.tf1 = new a.Text("", "12px 'Arial'");
        this.tf1.name = "tf1";
        this.tf1.lineHeight = 15;
        this.tf1.lineWidth = 260;
        this.tf1.parent = this;
        this.tf1.setTransform(-104, 74);
        this.tf2 = new a.Text("",
            "12px 'Arial'");
        this.tf2.name = "tf2";
        this.tf2.lineHeight = 15;
        this.tf2.lineWidth = 260;
        this.tf2.parent = this;
        this.tf2.setTransform(-104, 89.7);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.tf2
            }, {
                t: this.tf1
            }, {
                t: this.tf3
            }, {
                t: this.tf4
            }, {
                t: this.tf5
            }]
        }).to({
            state: [{
                t: this.tf2
            }, {
                t: this.tf1
            }, {
                t: this.tf3
            }, {
                t: this.tf4
            }, {
                t: this.tf5
            }]
        }, 3).to({
            state: []
        }, 11).wait(4));
        this.instance = new b._mesWindow;
        this.instance.parent = this;
        this.instance.setTransform(0, 109.5, 1, 1, 0, 0, 0, 0, -.5);
        this.instance.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.instance).to({
                alpha: .8008
            },
            4).wait(8).to({
            scaleY: .962,
            alpha: .6992
        }, 0).to({
            scaleY: 1.0699
        }, 2).to({
            scaleY: .099
        }, 2).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-117.9, 0, 275.5, 163.7);
    (b.sprite43 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.sprite42;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .4807, .4807);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            scaleX: .7356,
            scaleY: .7356
        }, 1).to({
            scaleX: 1.4901,
            scaleY: 1.4901
        }, 1).to({
            scaleX: 2.1305,
            scaleY: 2.1305,
            rotation: -34.3349,
            alpha: .5
        }, 4).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-57.7, -57.7, 115.5, 115.5);
    (b.sign_accentuator = function(f, d, e) {
        this.initialize(f, d, e, {
            reverse: 24
        });
        this.frame_0 = function() {
            this.play()
        };
        this.frame_23 = function() {
            this.stop()
        };
        this.frame_24 = function() {
            this.play()
        };
        this.frame_47 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1).call(this.frame_24).wait(23).call(this.frame_47).wait(1));
        this.instance =
            new b.rare_effect_container("synched", 0, !1);
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .7658, .7658);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(12).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 11).wait(13).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 11).wait(1));
        this.pb = new b.star_sign_accentuator;
        this.pb.name = "pb";
        this.pb.parent = this;
        this.pb.setTransform(141.7, -261.85, 2, 2);
        this.timeline.addTween(a.Tween.get(this.pb).wait(1).to({
            scaleX: 1.4855,
            scaleY: 1.4855,
            rotation: -83.9985,
            x: 146.3919,
            y: -115.4772
        }, 0).wait(1).to({
            scaleX: 1.1303,
            scaleY: 1.1303,
            rotation: -243.2529,
            x: 126.7067,
            y: -24.0605
        }, 0).wait(1).to({
            scaleX: .8571,
            scaleY: .8571,
            rotation: -68.8099,
            x: 82.9433,
            y: 29.3592
        }, 0).wait(1).to({
            scaleX: .6417,
            scaleY: .6417,
            rotation: 65.5022,
            x: 28.743,
            y: 51.5843
        }, 0).wait(1).to({
            scaleX: .4745,
            scaleY: .4745,
            rotation: 185.1221,
            x: -16.3688,
            y: 46.6709
        }, 0).wait(1).to({
            scaleX: .3524,
            scaleY: .3524,
            rotation: 282.8957,
            x: -41.6628,
            y: 23.983
        }, 0).wait(1).to({
            scaleX: .2773,
            scaleY: .2773,
            rotation: 342.7707,
            x: -49,
            y: 3
        }, 0).to({
            scaleX: .2351,
            scaleY: .2351,
            rotation: 350.3035,
            x: -46.45,
            y: -22.95
        }, 1).wait(1).to({
            scaleX: .2326,
            scaleY: .2326,
            rotation: 372.8868,
            x: -42.7366,
            y: -30.6758
        }, 0).wait(1).to({
            scaleX: .2276,
            scaleY: .2276,
            rotation: 412.5025,
            x: -31.5833,
            y: -43.1139
        }, 0).wait(1).to({
            scaleX: .22,
            scaleY: .22,
            rotation: 470.5563,
            x: -7.3021,
            y: -53.419
        }, 0).wait(1).to({
            scaleX: .2091,
            scaleY: .2091,
            rotation: 556.7149,
            x: 27.3851,
            y: -45.2703
        }, 0).wait(1).to({
            scaleX: .1937,
            scaleY: .1937,
            rotation: 667.8755,
            x: 52.0861,
            y: -2.0745
        }, 0).wait(1).to({
            scaleX: .1711,
            scaleY: .1711,
            rotation: 823.1096,
            x: 16.8455,
            y: 59.5576
        }, 0).wait(1).to({
            scaleX: .1314,
            scaleY: .1314,
            rotation: 718.2764,
            x: -88.35,
            y: 16.2
        }, 0).to({
            _off: !0
        }, 1).wait(8).to({
            _off: !1,
            scaleX: 2,
            scaleY: 2,
            rotation: 720,
            skewY: 180,
            x: -145.5,
            y: -261.85
        }, 0).wait(1).to({
            scaleX: 1.4856,
            scaleY: 1.4856,
            skewX: -98.4592,
            skewY: 81.5408,
            x: -150.1919,
            y: -115.4772
        }, 0).wait(1).to({
            scaleX: 1.1303,
            scaleY: 1.1303,
            skewX: 71.9327,
            skewY: 251.9327,
            x: -130.5067,
            y: -24.0605
        }, 0).wait(1).to({
            scaleX: .8571,
            scaleY: .8571,
            skewX: 182.9844,
            skewY: 362.9844,
            x: -86.7433,
            y: 29.3592
        }, 0).wait(1).to({
            scaleX: .6417,
            scaleY: .6417,
            skewX: 273.7244,
            skewY: 453.7244,
            x: -32.543,
            y: 51.5843
        }, 0).wait(1).to({
            scaleX: .4745,
            scaleY: .4745,
            skewX: 328.8331,
            skewY: 508.8331,
            x: 12.5688,
            y: 46.6709
        }, 0).wait(1).to({
            scaleX: .3524,
            scaleY: .3524,
            skewX: 358.6049,
            skewY: 538.6049,
            x: 37.8628,
            y: 23.983
        }, 0).wait(1).to({
            scaleX: .2773,
            scaleY: .2773,
            skewX: 377.2293,
            skewY: 557.2293,
            x: 45.2,
            y: 3
        }, 0).to({
            scaleX: .2351,
            scaleY: .2351,
            skewX: 369.6965,
            skewY: 549.6965,
            x: 42.65,
            y: -22.95
        }, 1).wait(1).to({
                scaleX: .2326,
                scaleY: .2326,
                skewX: 373.564,
                skewY: 553.564,
                x: 38.9366,
                y: -30.6758
            },
            0).wait(1).to({
            scaleX: .2276,
            scaleY: .2276,
            skewX: 385.4143,
            skewY: 565.4143,
            x: 27.7833,
            y: -43.1139
        }, 0).wait(1).to({
            scaleX: .22,
            scaleY: .22,
            skewX: 406.8452,
            skewY: 586.8452,
            x: 3.5021,
            y: -53.419
        }, 0).wait(1).to({
            scaleX: .2091,
            scaleY: .2091,
            skewX: 434.3796,
            skewY: 614.3796,
            x: -31.1851,
            y: -45.2703
        }, 0).wait(1).to({
            scaleX: .1937,
            scaleY: .1937,
            skewX: 483.4614,
            skewY: 663.4614,
            x: -55.8861,
            y: -2.0745
        }, 0).wait(1).to({
            scaleX: .1711,
            scaleY: .1711,
            skewX: 563.4559,
            skewY: 743.4559,
            x: -20.6455,
            y: 59.5576
        }, 0).wait(1).to({
            scaleX: .1314,
            scaleY: .1314,
            skewX: 721.7236,
            skewY: 901.7236,
            x: 84.55,
            y: 16.2
        }, 0).to({
            _off: !0
        }, 1).wait(8))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-541.5, -648.8, 1079.2, 919.8);
    (b.set2_number_pop_sr_w = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_1 = function() {
            this.stop()
        };
        this.frame_2 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));
        this.instance = new b.plus_w_1;
        this.instance.parent =
            this;
        this.instance.setTransform(-45.2, -1.15, .5, .5, 0, 0, 0, 21, 22);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            x: -29.65,
            y: -1.2
        }, 0).to({
            _off: !0
        }, 1).wait(1));
        this.n2 = new b.container_num_d_w;
        this.n2.name = "n2";
        this.n2.parent = this;
        this.n2.setTransform(-38, -4.15, 1, 1, 0, 0, 0, 3.2, 7);
        this.timeline.addTween(a.Tween.get(this.n2).wait(1).to({
            x: -30.2,
            y: -1.2,
            alpha: 0
        }, 0).to({
            _off: !0
        }, 1).wait(1));
        this.n1 = new b.container_num_d_w;
        this.n1.name = "n1";
        this.n1.parent = this;
        this.n1.setTransform(-22.1, -4.15, 1,
            1, 0, 0, 0, 3.3, 7);
        this.timeline.addTween(a.Tween.get(this.n1).wait(1).to({
            y: -4.2
        }, 0).to({
            _off: !0
        }, 1).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AgSA6IhGAUIAbhFIgpg8IBKAFIAsg6IASBIIBFAZIg/AnIgDBJg");
        this.shape.setTransform(-54.7, -13.95, .7136, .7136, 0, 0, 0, -1, -.3);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("rgba(255,255,255,0.8)").s().p("AgtAyIhogOIBKhJIgThmIBdAvIBbgyIgQBoIBMBGIhnAQIgtBfg");
        this.shape_1.setTransform(-66, 5.05, 1, 1, 0, 0, 0, -1.1, -1.9);
        this.shape_2 =
            new a.Shape;
        this.shape_2.graphics.f("rgba(255,255,255,0.498)").s().p("AgSA6IhGAUIAbhFIgpg8IBKAFIAsg6IASBIIBFAZIg/AnIgDBJg");
        this.shape_2.setTransform(-44.7, -13.95, .7136, .7136, 0, 0, 0, -1, -.3);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("rgba(255,255,255,0.498)").s().p("AgtAyIhogOIBKhJIgThmIBdAvIBbgyIgQBoIBMBGIhnAQIgtBfg");
        this.shape_3.setTransform(-56, 5.05, 1, 1, 0, 0, 0, -1.1, -1.9);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
                state: [{
                    t: this.shape_3
                }, {
                    t: this.shape_2
                }]
            },
            1).to({
            state: []
        }, 1).wait(1));
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.lf(["rgba(255,255,255,0.486)", "rgba(255,255,255,0.408)", "rgba(255,255,255,0)"], [0, .624, 1], 31.1, 0, -31.1, 0).s().p("Ak2CWIAAkrIJtAAIAAErg");
        this.shape_4.setTransform(-31, .05);
        this.shape_5 = new a.Shape;
        this.shape_5.graphics.lf(["rgba(255,255,255,0.498)", "rgba(255,255,255,0.408)", "rgba(255,255,255,0)"], [0, .624, 1], 24.1, 0, -24.1, 0).s().p("AjwCWIAAkrIHhAAIAAErg");
        this.shape_5.setTransform(-24.1, 0);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_4
            }]
        }).to({
                state: [{
                    t: this.shape_5
                }]
            },
            1).to({
            state: []
        }, 1).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-230.9, -110.9, 425.9, 225);
    (b.set2_number_pop_sr = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_1 = function() {
            this.stop()
        };
        this.frame_2 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));
        this.num_plus = new b.plus_1;
        this.num_plus.name = "num_plus";
        this.num_plus.parent = this;
        this.num_plus.setTransform(67.65,
            5.45, 1, 1, 0, 0, 0, 10.2, 10.7);
        this.instance = new b.plus_1;
        this.instance.parent = this;
        this.instance.setTransform(83.2, 5.4, 1, 1, 0, 0, 0, 10.2, 10.7);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.num_plus
            }]
        }).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));
        this.n2 = new b.container_num_d;
        this.n2.name = "n2";
        this.n2.parent = this;
        this.n2.setTransform(75.15, 2.75, 1, 1, 0, 0, 0, 3.2, 7);
        this.timeline.addTween(a.Tween.get(this.n2).wait(1).to({
            x: 82.95,
            y: 5.7,
            alpha: 0
        }, 0).to({
            _off: !0
        }, 1).wait(1));
        this.n1 = new b.container_num_d;
        this.n1.name = "n1";
        this.n1.parent = this;
        this.n1.setTransform(91.05, 2.75, 1, 1, 0, 0, 0, 3.3, 7);
        this.timeline.addTween(a.Tween.get(this.n1).wait(1).to({
            y: 2.7
        }, 0).to({
            _off: !0
        }, 1).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,0,0.8)").s().p("AgSA6IhGAUIAbhFIgpg8IBKAFIAsg6IASBIIBFAZIg/AnIgDBJg");
        this.shape.setTransform(58.4, -7.05, .7136, .7136, 0, 0, 0, -1, -.3);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("rgba(255,255,0,0.8)").s().p("AgwAuIhegrIBcgwIAMhoIBKBJIBmgVIguBfIA0BZIhogPIhGBOg");
        this.shape_1.setTransform(47.1, 12, 1, 1, -17.2178, 0, 0, .5, -.9);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("rgba(255,255,0,0.8)").s().p("AgtAyIhogOIBKhJIgThmIBdAvIBbgyIgQBoIBMBGIhnAQIgtBfg");
        this.shape_2.setTransform(57.1, 11.95, 1, 1, 0, 0, 0, -1.1, -1.9);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape,
                p: {
                    x: 58.4
                }
            }]
        }).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape,
                p: {
                    x: 68.4
                }
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.lf(["rgba(255,253,102,0.71)",
            "rgba(255,253,97,0.675)", "rgba(255,255,0,0)"
        ], [0, .624, 1], 31.1, 0, -31.1, 0).s().p("Ak2CWIAAkrIJtAAIAAErg");
        this.shape_3.setTransform(82.05, 7);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.lf(["rgba(255,253,102,0.71)", "rgba(255,253,97,0.675)", "rgba(255,255,0,0)"], [0, .624, 1], 24.1, 0, -24.1, 0).s().p("AjwCWIAAkrIHhAAIAAErg");
        this.shape_4.setTransform(89.05, 7);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }]
        }).to({
            state: [{
                t: this.shape_4
            }]
        }, 1).to({
            state: []
        }, 1).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(0, -14.3, 113.2, 42.5);
    (b.set2_number_pop = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.stop();
            this.visible = !0
        };
        this.frame_1 = function() {
            this.stop();
            this.visible = !0
        };
        this.frame_2 = function() {
            this.stop();
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));
        this.num_plus = new b.plus_1;
        this.num_plus.name = "num_plus";
        this.num_plus.parent = this;
        this.num_plus.setTransform(26.65,
            15.45, 1, 1, 0, 0, 0, 10.2, 10.7);
        this.instance = new b.plus_1;
        this.instance.parent = this;
        this.instance.setTransform(35.7, 14.7, 1, 1, 0, 0, 0, 10.2, 10.7);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.num_plus
            }]
        }).to({
            state: [{
                t: this.instance,
                p: {
                    alpha: 1
                }
            }]
        }, 1).to({
            state: [{
                t: this.instance,
                p: {
                    alpha: 0
                }
            }]
        }, 1).wait(1));
        this.n2 = new b.container_num_d;
        this.n2.name = "n2";
        this.n2.parent = this;
        this.n2.setTransform(34.15, 12.75, 1, 1, 0, 0, 0, 3.2, 7);
        this.timeline.addTween(a.Tween.get(this.n2).wait(1).to({
                x: 35.45,
                y: 15,
                alpha: 0
            },
            0).wait(2));
        this.n1 = new b.container_num_d;
        this.n1.name = "n1";
        this.n1.parent = this;
        this.n1.setTransform(50.05, 12.75, 1, 1, 0, 0, 0, 3.3, 7);
        this.timeline.addTween(a.Tween.get(this.n1).wait(1).to({
            x: 43.55,
            y: 12
        }, 0).wait(1).to({
            alpha: 0
        }, 0).wait(1));
        this.instance_1 = new b.fkds;
        this.instance_1.parent = this;
        this.instance_1.setTransform(78.7, 20.75, 1, 1, 0, 0, 0, 36.1, 17.7);
        this.instance_2 = new b.fkds_1keta;
        this.instance_2.parent = this;
        this.instance_2.setTransform(78.7, 20.75, 1, 1, 0, 0, 0, 36.1, 17.7);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }]
        }).to({
            state: [{
                t: this.instance_2,
                p: {
                    alpha: 1
                }
            }]
        }, 1).to({
            state: [{
                t: this.instance_2,
                p: {
                    alpha: 0
                }
            }]
        }, 1).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(6.7, -6.8, 70.3, 45.9);
    (b.set_window_petit = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.star_flash;
        this.instance.parent = this;
        this.instance.setTransform(29.3, 30.8, 1, 1, 0, 0, 0, 29.3, 30.8);
        this.instance.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(11).to({
            alpha: .0134
        }, 0).wait(1).to({
            alpha: .0533
        }, 0).wait(1).to({
            alpha: .1136
        }, 0).wait(1).to({
                alpha: .1814
            },
            0).wait(1).to({
            alpha: .2436
        }, 0).wait(1).to({
            alpha: .2928
        }, 0).wait(1).to({
            alpha: .3266
        }, 0).wait(1).to({
            alpha: .3456
        }, 0).wait(1).to({
            alpha: .3516
        }, 0).wait(1).to({
            alpha: .3407
        }, 0).wait(1).to({
            alpha: .3082
        }, 0).wait(1).to({
            alpha: .2575
        }, 0).wait(1).to({
            alpha: .1973
        }, 0).wait(1).to({
            alpha: .1377
        }, 0).wait(1).to({
            alpha: .0865
        }, 0).wait(1).to({
            alpha: .047
        }, 0).wait(1).to({
            alpha: .02
        }, 0).wait(1).to({
            alpha: .0048
        }, 0).wait(1).to({
            alpha: 0
        }, 0).wait(1));
        this.petit_window = new b.window_petit;
        this.petit_window.name = "petit_window";
        this.petit_window.parent =
            this;
        this.petit_window.setTransform(29.4, 30.9, 1, 1, 0, 0, 0, 29.4, 30.9);
        this.timeline.addTween(a.Tween.get(this.petit_window).wait(30))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-5.7, -3.5, 70, 95);
    (b.set_number_pop_sr = function(f, d, e) {
        this.initialize(f, d, e, {
            run: 1,
            fix: 11,
            loop: 15
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_1 = function() {
            this.play()
        };
        this.frame_14 = function() {};
        this.frame_38 = function() {
            this.gotoAndPlay("loop")
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(24).call(this.frame_38).wait(1));
        this.set_num_w = new b.set2_number_pop_sr_w;
        this.set_num_w.name = "set_num_w";
        this.set_num_w.parent = this;
        this.set_num_w.setTransform(167.1, 37.8, 1, 1, 0, 0, 0, 3.9, 3.9);
        this.set_num_w.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.set_num_w).wait(1).to({
            x: 112.1
        }, 2, a.Ease.get(-1)).wait(1).to({
            x: 86,
            alpha: 1
        }, 0).to({
            x: 87,
            alpha: .3281
        }, 3, a.Ease.get(1)).to({
            x: 87.1,
            alpha: 0
        }, 2).wait(7).to({
            regX: -39.9,
            regY: 0,
            x: 43.2,
            y: 33.9,
            alpha: .5556
        }, 0).wait(1).to({
            alpha: .8889
        }, 0).wait(1).to({
                regX: 3.9,
                regY: 3.9,
                x: 87,
                y: 37.8,
                alpha: 1
            },
            0).wait(1).to({
            regX: -39.9,
            regY: 0,
            x: 43.2,
            y: 33.9,
            alpha: .81
        }, 0).wait(1).to({
            alpha: .64
        }, 0).wait(1).to({
            x: 43.25,
            alpha: .49
        }, 0).wait(1).to({
            alpha: .36
        }, 0).wait(1).to({
            alpha: .25
        }, 0).wait(1).to({
            alpha: .16
        }, 0).wait(1).to({
            alpha: .09
        }, 0).wait(1).to({
            alpha: .04
        }, 0).wait(1).to({
            alpha: .01
        }, 0).wait(1).to({
            regX: 3.9,
            regY: 3.9,
            x: 87.1,
            y: 37.8,
            alpha: 0
        }, 0).wait(11));
        this.set_num = new b.set2_number_pop_sr;
        this.set_num.name = "set_num";
        this.set_num.parent = this;
        this.set_num.setTransform(53.95, 30.9, 1, 1, 0, 0, 0, 3.9, 3.9);
        this.timeline.addTween(a.Tween.get(this.set_num).wait(1).to({
                x: -1.05
            },
            2, a.Ease.get(-1)).wait(1).to({
            x: -27.05
        }, 0).to({
            x: -26.05
        }, 3, a.Ease.get(1)).wait(9).to({
            regX: 70.9,
            regY: 8.6,
            x: 40.95,
            y: 35.6
        }, 0).wait(2).to({
            regX: 3.9,
            regY: 3.9,
            x: -26.05,
            y: 30.9
        }, 0).wait(1).to({
            regX: 70.9,
            regY: 8.6,
            x: 40.95,
            y: 35.6
        }, 0).wait(9).to({
            regX: 3.9,
            regY: 3.9,
            x: -26.05,
            y: 30.9
        }, 0).wait(11))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(2.2, 12.7, 161.10000000000002, 42.5);
    (b.set_number_pop = function(f, d, e) {
        this.initialize(f, d, e, {
            run: 1,
            loop: 6,
            fix: 19
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_1 =
            function() {};
        this.frame_18 = function() {
            this.gotoAndPlay("loop")
        };
        this.frame_21 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(17).call(this.frame_18).wait(3).call(this.frame_21).wait(1));
        this.set_num_w = new b.set2_number_pop_w;
        this.set_num_w.name = "set_num_w";
        this.set_num_w.parent = this;
        this.set_num_w.setTransform(11.85, 18.4, 1, 1, 0, 0, 0, 41.8, 16.4);
        this.set_num_w.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.set_num_w).wait(3).to({
            y: -10.1,
            alpha: .8516
        }, 0).wait(1).to({
            regX: 41.7,
            regY: 15.8,
            x: 11.75,
            y: -5.2,
            alpha: .6889
        }, 0).wait(1).to({
            y: 11.3,
            alpha: .1961
        }, 0).wait(1).to({
            regX: 41.8,
            regY: 16.4,
            x: 11.85,
            y: 18.4,
            alpha: 0
        }, 0).wait(16));
        this.set_num = new b.set2_number_pop;
        this.set_num.name = "set_num";
        this.set_num.parent = this;
        this.set_num.setTransform(11.85, 57.4, 1, 1, 0, 0, 0, 41.8, 16.4);
        this.timeline.addTween(a.Tween.get(this.set_num).to({
            y: 36.4
        }, 1, a.Ease.get(1)).to({
            y: -3.8
        }, 1, a.Ease.get(1)).to({
            y: -10.1
        }, 1).wait(1).to({
            regX: 40.7,
            regY: 17.7,
            x: 10.75,
            y: -3.3
        }, 0).wait(1).to({
                y: 13.2
            },
            0).wait(1).to({
            regX: 41.8,
            regY: 16.4,
            x: 11.85,
            y: 18.4
        }, 0).wait(1).to({
            regX: 40.7,
            regY: 17.7,
            x: 10.75,
            y: 19.45
        }, 0).wait(1).to({
            y: 18.75
        }, 0).wait(1).to({
            y: 17.45
        }, 0).wait(1).to({
            y: 15.9
        }, 0).wait(1).to({
            y: 15
        }, 0).wait(1).to({
            regX: 41.8,
            regY: 16.4,
            x: 11.85,
            y: 13.4
        }, 0).wait(1).to({
            regX: 40.7,
            regY: 17.7,
            x: 10.75,
            y: 14.95
        }, 0).wait(1).to({
            y: 15.65
        }, 0).wait(1).to({
            y: 17
        }, 0).wait(1).to({
            y: 18.5
        }, 0).wait(1).to({
            y: 19.4
        }, 0).wait(1).to({
            regX: 41.8,
            regY: 16.4,
            x: 11.85,
            y: 18.4
        }, 0).wait(4))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-23.3,
        -32.4, 70.3, 112.30000000000001);
    (b.pop_num_sr = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_1 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));
        this.n = new b.set_number_pop_sr;
        this.n.name = "n";
        this.n.parent = this;
        this.n.setTransform(43.2, 24.45, 1, 1, 0, 0, 0, 30, 17);
        this.timeline.addTween(a.Tween.get(this.n).wait(1).to({
            y: -10.55
        }, 0).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(96.5,
        -14.9, 80, 77.60000000000001);
    (b.particle4 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.restart = function() {
                for (var a = this.children, b = a.length, d = 0; d < b; d++) a[d].gotoAndPlay(0)
            }
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.p1 = new b.particle_common_parts2;
        this.p1.name = "p1";
        this.p1.parent = this;
        this.p1.setTransform(51.85, -25.45, .8585, .8585, -30.247);
        this.timeline.addTween(a.Tween.get(this.p1).wait(1));
        this.p2 = new b.particle_common_parts2;
        this.p2.name =
            "p2";
        this.p2.parent = this;
        this.p2.setTransform(102, -17, .7527, .5292, 0, 15.0291, -139.3157);
        this.timeline.addTween(a.Tween.get(this.p2).wait(1));
        this.p3 = new b.particle_common_parts1;
        this.p3.name = "p3";
        this.p3.parent = this;
        this.p3.setTransform(125.75, 33, .8544, .5085, 0, 55.8488, -103.7843, -59.9, -3.9);
        this.timeline.addTween(a.Tween.get(this.p3).wait(1));
        this.p4 = new b.particle_common_parts1;
        this.p4.name = "p4";
        this.p4.parent = this;
        this.p4.setTransform(122.15, -18.5, .6032, .6714, 0, -77.9081, -103.9501);
        this.timeline.addTween(a.Tween.get(this.p4).wait(1));
        this.p5 = new b.particle_common_parts1;
        this.p5.name = "p5";
        this.p5.parent = this;
        this.p5.setTransform(71.25, -14.85, .6032, .6032, -25.4488);
        this.timeline.addTween(a.Tween.get(this.p5).wait(1));
        this.p6 = new b.particle_common_parts2;
        this.p6.name = "p6";
        this.p6.parent = this;
        this.p6.setTransform(135.6, -24.65, .67, .5378, 0, 28.3544, -122.1159);
        this.timeline.addTween(a.Tween.get(this.p6).wait(1));
        this.p7 = new b.particle_common_parts1;
        this.p7.name = "p7";
        this.p7.parent = this;
        this.p7.setTransform(147.25, -16.7, 1.1194, 1.0589, 0,
            40.7354, -158.4762);
        this.timeline.addTween(a.Tween.get(this.p7).wait(1));
        this.p8 = new b.particle_common_parts1;
        this.p8.name = "p8";
        this.p8.parent = this;
        this.p8.setTransform(85.8, -22.5, .5292, .8921, -35.4726);
        this.timeline.addTween(a.Tween.get(this.p8).wait(1));
        this.p9 = new b.particle_common_parts2;
        this.p9.name = "p9";
        this.p9.parent = this;
        this.p9.setTransform(140.75, -17.75, 1, 1, -84.7188);
        this.timeline.addTween(a.Tween.get(this.p9).wait(1));
        this.p10 = new b.particle_common_parts1;
        this.p10.name = "p10";
        this.p10.parent =
            this;
        this.p10.setTransform(75.3, -15.15, .5925, .5292, 0, 15.2576, -164.7432);
        this.timeline.addTween(a.Tween.get(this.p10).wait(1));
        this.p11 = new b.particle_common_parts2;
        this.p11.name = "p11";
        this.p11.parent = this;
        this.p11.setTransform(107.9, -11.45, .5292, .5292, -45.4801);
        this.timeline.addTween(a.Tween.get(this.p11).wait(1));
        this.p12 = new b.particle_common_parts2;
        this.p12.name = "p12";
        this.p12.parent = this;
        this.p12.setTransform(135.05, -18.9, .7527, .5292, 0, 40.8099, -113.5355);
        this.timeline.addTween(a.Tween.get(this.p12).wait(1));
        this.p13 = new b.particle_common_parts1;
        this.p13.name = "p13";
        this.p13.parent = this;
        this.p13.setTransform(53.85, 36, .8545, .5085, 0, 60.1737, -99.4595, -59.8, -3.6);
        this.timeline.addTween(a.Tween.get(this.p13).wait(1));
        this.p14 = new b.particle_common_parts1;
        this.p14.name = "p14";
        this.p14.parent = this;
        this.p14.setTransform(31.5, -14, .6032, .6713, 0, -34.454, -60.4948);
        this.timeline.addTween(a.Tween.get(this.p14).wait(1));
        this.p15 = new b.particle_common_parts1;
        this.p15.name = "p15";
        this.p15.parent = this;
        this.p15.setTransform(90.7,
            -64.1, .5924, .5292, 0, 36.8151, -143.1856);
        this.timeline.addTween(a.Tween.get(this.p15).wait(1));
        this.p16 = new b.particle_common_parts2;
        this.p16.name = "p16";
        this.p16.parent = this;
        this.p16.setTransform(16.3, -18.5, .8585, .8585, -6.5255);
        this.timeline.addTween(a.Tween.get(this.p16).wait(1));
        this.p17 = new b.particle_common_parts2;
        this.p17.name = "p17";
        this.p17.parent = this;
        this.p17.setTransform(6.55, -31.7, .5292, .5292, 0, 36.7457, -143.2543);
        this.timeline.addTween(a.Tween.get(this.p17).wait(1));
        this.p18 = new b.particle_common_parts2;
        this.p18.name = "p18";
        this.p18.parent = this;
        this.p18.setTransform(-5.3, -14.15, .7527, .5292, 0, 15.0291, -139.3157);
        this.timeline.addTween(a.Tween.get(this.p18).wait(1));
        this.p19 = new b.particle_common_parts1;
        this.p19.name = "p19";
        this.p19.parent = this;
        this.p19.setTransform(29.35, 1.45, .8544, .5085, 0, 20.6446, -138.9891, -59.9, -3.9);
        this.timeline.addTween(a.Tween.get(this.p19).wait(1));
        this.p20 = new b.particle_common_parts1;
        this.p20.name = "p20";
        this.p20.parent = this;
        this.p20.setTransform(4.65, -27.5, .6032, .6714, 0, -19.4377,
            -45.4796);
        this.timeline.addTween(a.Tween.get(this.p20).wait(1));
        this.p21 = new b.particle_common_parts1;
        this.p21.name = "p21";
        this.p21.parent = this;
        this.p21.setTransform(10, -24, .6032, .6032, 19.5497);
        this.timeline.addTween(a.Tween.get(this.p21).wait(1));
        this.p22 = new b.particle_common_parts2;
        this.p22.name = "p22";
        this.p22.parent = this;
        this.p22.setTransform(-7.15, -27.65, .67, .5378, 0, 53.3678, -97.1001);
        this.timeline.addTween(a.Tween.get(this.p22).wait(1));
        this.p23 = new b.particle_common_parts1;
        this.p23.name = "p23";
        this.p23.parent = this;
        this.p23.setTransform(-44.9, -19.65, 1.1194, 1.0589, 0, 57.6306, -141.5801);
        this.timeline.addTween(a.Tween.get(this.p23).wait(1));
        this.p24 = new b.particle_common_parts1;
        this.p24.name = "p24";
        this.p24.parent = this;
        this.p24.setTransform(7.1, -12.3, .5292, .5292, -28.5129);
        this.timeline.addTween(a.Tween.get(this.p24).wait(1));
        this.p25 = new b.particle_common_parts2;
        this.p25.name = "p25";
        this.p25.parent = this;
        this.p25.setTransform(-21.75, -19.15, 1, 1, -45.4791);
        this.timeline.addTween(a.Tween.get(this.p25).wait(1));
        this.p26 = new b.particle_common_parts1;
        this.p26.name = "p26";
        this.p26.parent = this;
        this.p26.setTransform(-10.75, -12.3, .5925, .5292, 0, 17.9935, -162.0079);
        this.timeline.addTween(a.Tween.get(this.p26).wait(1));
        this.p27 = new b.particle_common_parts2;
        this.p27.name = "p27";
        this.p27.parent = this;
        this.p27.setTransform(-28.6, -12.9, .5292, .5292, -45.4801);
        this.timeline.addTween(a.Tween.get(this.p27).wait(1));
        this.p28 = new b.particle_common_parts2;
        this.p28.name = "p28";
        this.p28.parent = this;
        this.p28.setTransform(39.65, -25.9,
            .8585, .8585, -51.0507);
        this.timeline.addTween(a.Tween.get(this.p28).wait(1));
        this.p29 = new b.particle_common_parts1;
        this.p29.name = "p29";
        this.p29.parent = this;
        this.p29.setTransform(113.15, 5.65, .8544, .5085, 0, 39.4668, -120.1686, -59.8, -3.6);
        this.timeline.addTween(a.Tween.get(this.p29).wait(1));
        this.p30 = new b.particle_common_parts2;
        this.p30.name = "p30";
        this.p30.parent = this;
        this.p30.setTransform(27.95, -3.15, .67, .5378, 0, 73.3557, -77.1152);
        this.timeline.addTween(a.Tween.get(this.p30).wait(1));
        this.p31 = new b.particle_common_parts1;
        this.p31.name = "p31";
        this.p31.parent = this;
        this.p31.setTransform(96.55, -15.15, .5292, .5292, -118.5129);
        this.timeline.addTween(a.Tween.get(this.p31).wait(1));
        this.p32 = new b.particle_common_parts2;
        this.p32.name = "p32";
        this.p32.parent = this;
        this.p32.setTransform(26.35, -35.05, 1, 1, -.4013);
        this.timeline.addTween(a.Tween.get(this.p32).wait(1));
        this.p33 = new b.particle_common_parts1;
        this.p33.name = "p33";
        this.p33.parent = this;
        this.p33.setTransform(12.6, -6.75, .5925, .5292, 0, 107.9935, -72.0079);
        this.timeline.addTween(a.Tween.get(this.p33).wait(1));
        this.p34 = new b.particle_common_parts2;
        this.p34.name = "p34";
        this.p34.parent = this;
        this.p34.setTransform(31.7, -14.85, .8252, .9399, 0, 44.5205, -135.4795);
        this.timeline.addTween(a.Tween.get(this.p34).wait(1))
    }).prototype = h(b.particle4, new a.Rectangle(-171.3, -246.6, 442.5, 276.9), null);
    (b.particle3 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.particle_common_parts2;
        this.instance.parent = this;
        this.instance.setTransform(63.95, -20.2, .7528, .5292, 0, 136.8073, -17.5373);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        this.instance_1 = new b.particle_common_parts1;
        this.instance_1.parent = this;
        this.instance_1.setTransform(54.6, -2.25, .6032, .6714, 0, 43.8701, 17.8285);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1));
        this.instance_2 = new b.particle_common_parts2;
        this.instance_2.parent = this;
        this.instance_2.setTransform(63.95, -12.9, 1, 1, 37.0601);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(1));
        this.instance_3 = new b.particle_common_parts1;
        this.instance_3.parent = this;
        this.instance_3.setTransform(13.6, 24.65,
            .5924, .5292, 0, 155.0554, -24.9453);
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(1));
        this.instance_4 = new b.particle_common_parts2;
        this.instance_4.parent = this;
        this.instance_4.setTransform(50, 16, .8585, .8585, 61.4817);
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(1));
        this.instance_5 = new b.particle_common_parts2;
        this.instance_5.parent = this;
        this.instance_5.setTransform(8.5, 6.25, .5292, .5292, 0, 126.7457, -53.2543);
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(1));
        this.instance_6 =
            new b.particle_common_parts2;
        this.instance_6.parent = this;
        this.instance_6.setTransform(14.45, -1.3, .7527, .5292, 0, 105.0291, -49.3157);
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(1));
        this.instance_7 = new b.particle_common_parts1;
        this.instance_7.parent = this;
        this.instance_7.setTransform(13.4, 36.85, .8544, .5085, 0, 110.6446, -48.9891, -59.7, -3.7);
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(1));
        this.instance_8 = new b.particle_common_parts1;
        this.instance_8.parent = this;
        this.instance_8.setTransform(24,
            -2, .6032, .6714, 0, 70.5623, 44.5204);
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(1));
        this.instance_9 = new b.particle_common_parts1;
        this.instance_9.parent = this;
        this.instance_9.setTransform(38, 6, .6032, .6032, 64.5512);
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(1));
        this.instance_10 = new b.particle_common_parts1;
        this.instance_10.parent = this;
        this.instance_10.setTransform(28, -12, 1.1194, 1.0589, 0, 151.9413, -47.2698);
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(1));
        this.instance_11 =
            new b.particle_common_parts1;
        this.instance_11.parent = this;
        this.instance_11.setTransform(13.6, 24.65, .5292, .5292, 61.4871);
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(1));
        this.instance_12 = new b.particle_common_parts2;
        this.instance_12.parent = this;
        this.instance_12.setTransform(29, 16.55, 1, 1, 23.5401);
        this.timeline.addTween(a.Tween.get(this.instance_12).wait(1));
        this.instance_13 = new b.particle_common_parts1;
        this.instance_13.parent = this;
        this.instance_13.setTransform(12.6, -6.75, .5925, .5292, 0,
            107.9935, -72.0079);
        this.timeline.addTween(a.Tween.get(this.instance_13).wait(1));
        this.instance_14 = new b.particle_common_parts2;
        this.instance_14.parent = this;
        this.instance_14.setTransform(8.9, 4.6, .5292, .5292, 44.5199);
        this.timeline.addTween(a.Tween.get(this.instance_14).wait(1))
    }).prototype = h(b.particle3, new a.Rectangle(4.3, -155.7, 281.7, 311.1), null);
    (b.particle1 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            this.restart = function() {
                for (var a = 1; 30 >= a; a++) this["p" + a].gotoAndPlay(0)
            }
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.p1 = new b.particle_common_parts2;
        this.p1.name = "p1";
        this.p1.parent = this;
        this.p1.setTransform(-1.4, 38.65, .8585, .8585, -173.2889);
        this.timeline.addTween(a.Tween.get(this.p1).wait(1));
        this.p2 = new b.particle_common_parts1;
        this.p2.name = "p2";
        this.p2.parent = this;
        this.p2.setTransform(-26.5, 10.95, .8544, .5085, 0, -124.1512, 76.2156, -59.8, -3.9);
        this.timeline.addTween(a.Tween.get(this.p2).wait(1));
        this.p3 = new b.particle_common_parts1;
        this.p3.name =
            "p3";
        this.p3.parent = this;
        this.p3.setTransform(-12, 28, .6032, .6714, 0, 102.0919, 76.0499);
        this.timeline.addTween(a.Tween.get(this.p3).wait(1));
        this.p4 = new b.particle_common_parts1;
        this.p4.name = "p4";
        this.p4.parent = this;
        this.p4.setTransform(24, 22, .6032, .6032, 154.5512);
        this.timeline.addTween(a.Tween.get(this.p4).wait(1));
        this.p5 = new b.particle_common_parts2;
        this.p5.name = "p5";
        this.p5.parent = this;
        this.p5.setTransform(10, 40, .67, .5378, 0, -151.6456, 57.8841);
        this.timeline.addTween(a.Tween.get(this.p5).wait(1));
        this.p6 = new b.particle_common_parts1;
        this.p6.name = "p6";
        this.p6.parent = this;
        this.p6.setTransform(36, 16.45, 1.1194, 1.0589, 0, -118.0587, 42.7302);
        this.timeline.addTween(a.Tween.get(this.p6).wait(1));
        this.p7 = new b.particle_common_parts1;
        this.p7.name = "p7";
        this.p7.parent = this;
        this.p7.setTransform(13.6, 24.65, .5924, .5292, 0, 155.0554, -24.9453);
        this.timeline.addTween(a.Tween.get(this.p7).wait(1));
        this.p8 = new b.particle_common_parts2;
        this.p8.name = "p8";
        this.p8.parent = this;
        this.p8.setTransform(2.25, 20.95, .5292, .5292,
            134.5199);
        this.timeline.addTween(a.Tween.get(this.p8).wait(1));
        this.p9 = new b.particle_common_parts2;
        this.p9.name = "p9";
        this.p9.parent = this;
        this.p9.setTransform(-38, 10, .5292, .5292, 0, -53.2543, 126.7457);
        this.timeline.addTween(a.Tween.get(this.p9).wait(1));
        this.p10 = new b.particle_common_parts1;
        this.p10.name = "p10";
        this.p10.parent = this;
        this.p10.setTransform(-28, -14, .6032, .6714, 0, -58.4598, -84.5013);
        this.timeline.addTween(a.Tween.get(this.p10).wait(1));
        this.p11 = new b.particle_common_parts1;
        this.p11.name = "p11";
        this.p11.parent = this;
        this.p11.setTransform(-6.95, -18.05, .6032, .6032, -115.4488);
        this.timeline.addTween(a.Tween.get(this.p11).wait(1));
        this.p12 = new b.particle_common_parts2;
        this.p12.name = "p12";
        this.p12.parent = this;
        this.p12.setTransform(-30, 16, .67, .5379, 0, -103.6061, 105.9244);
        this.timeline.addTween(a.Tween.get(this.p12).wait(1));
        this.p13 = new b.particle_common_parts1;
        this.p13.name = "p13";
        this.p13.parent = this;
        this.p13.setTransform(-24, 30, 1.1194, 1.0589, 0, -28.0587, 132.7302);
        this.timeline.addTween(a.Tween.get(this.p13).wait(1));
        this.p14 = new b.particle_common_parts2;
        this.p14.name = "p14";
        this.p14.parent = this;
        this.p14.setTransform(-32.05, -3.5, 1, 1, -135.4791);
        this.timeline.addTween(a.Tween.get(this.p14).wait(1));
        this.p15 = new b.particle_common_parts1;
        this.p15.name = "p15";
        this.p15.parent = this;
        this.p15.setTransform(-14.65, 19.6, .5925, .5292, 0, -72.0065, 107.9921);
        this.timeline.addTween(a.Tween.get(this.p15).wait(1));
        this.p16 = new b.particle_common_parts2;
        this.p16.name = "p16";
        this.p16.parent = this;
        this.p16.setTransform(6.55, -31.7, .8585, .8585,
            -6.5255);
        this.timeline.addTween(a.Tween.get(this.p16).wait(1));
        this.p17 = new b.particle_common_parts2;
        this.p17.name = "p17";
        this.p17.parent = this;
        this.p17.setTransform(6.55, -31.7, .5292, .5292, 0, 36.7457, -143.2543);
        this.timeline.addTween(a.Tween.get(this.p17).wait(1));
        this.p18 = new b.particle_common_parts1;
        this.p18.name = "p18";
        this.p18.parent = this;
        this.p18.setTransform(29.35, 1.45, .8544, .5085, 0, 20.6446, -138.9891, -59.9, -3.9);
        this.timeline.addTween(a.Tween.get(this.p18).wait(1));
        this.p19 = new b.particle_common_parts1;
        this.p19.name = "p19";
        this.p19.parent = this;
        this.p19.setTransform(4.65, -27.5, .6032, .6714, 0, -19.4377, -45.4796);
        this.timeline.addTween(a.Tween.get(this.p19).wait(1));
        this.p20 = new b.particle_common_parts1;
        this.p20.name = "p20";
        this.p20.parent = this;
        this.p20.setTransform(10, -24, .6032, .6032, 19.5497);
        this.timeline.addTween(a.Tween.get(this.p20).wait(1));
        this.p21 = new b.particle_common_parts2;
        this.p21.name = "p21";
        this.p21.parent = this;
        this.p21.setTransform(-7.15, -27.65, .67, .5378, 0, -7.3809, -157.8494);
        this.timeline.addTween(a.Tween.get(this.p21).wait(1));
        this.p22 = new b.particle_common_parts2;
        this.p22.name = "p22";
        this.p22.parent = this;
        this.p22.setTransform(8, -18, 1, 1, -45.4791);
        this.timeline.addTween(a.Tween.get(this.p22).wait(1));
        this.p23 = new b.particle_common_parts1;
        this.p23.name = "p23";
        this.p23.parent = this;
        this.p23.setTransform(-10.75, -12.3, .5925, .5292, 0, 17.9935, -162.0079);
        this.timeline.addTween(a.Tween.get(this.p23).wait(1));
        this.p24 = new b.particle_common_parts2;
        this.p24.name = "p24";
        this.p24.parent = this;
        this.p24.setTransform(50, 16, .8585, .8585, 61.4817);
        this.timeline.addTween(a.Tween.get(this.p24).wait(1));
        this.p25 = new b.particle_common_parts1;
        this.p25.name = "p25";
        this.p25.parent = this;
        this.p25.setTransform(13.4, 36.85, .8544, .5085, 0, 110.6446, -48.9891, -59.7, -3.7);
        this.timeline.addTween(a.Tween.get(this.p25).wait(1));
        this.p26 = new b.particle_common_parts1;
        this.p26.name = "p26";
        this.p26.parent = this;
        this.p26.setTransform(24, -2, .6032, .6714, 0, 70.5623, 44.5204);
        this.timeline.addTween(a.Tween.get(this.p26).wait(1));
        this.p27 = new b.particle_common_parts1;
        this.p27.name =
            "p27";
        this.p27.parent = this;
        this.p27.setTransform(38, 6, .6032, .6032, 64.5512);
        this.timeline.addTween(a.Tween.get(this.p27).wait(1));
        this.p28 = new b.particle_common_parts2;
        this.p28.name = "p28";
        this.p28.parent = this;
        this.p28.setTransform(27.95, -3.15, .67, .5378, 0, 73.3557, -77.1152);
        this.timeline.addTween(a.Tween.get(this.p28).wait(1));
        this.p29 = new b.particle_common_parts1;
        this.p29.name = "p29";
        this.p29.parent = this;
        this.p29.setTransform(28, -12, 1.1194, 1.0589, 0, 151.9413, -47.2698);
        this.timeline.addTween(a.Tween.get(this.p29).wait(1));
        this.p30 = new b.particle_common_parts1;
        this.p30.name = "p30";
        this.p30.parent = this;
        this.p30.setTransform(13.6, 24.65, .5292, .5292, 61.4871);
        this.timeline.addTween(a.Tween.get(this.p30).wait(1))
    }).prototype = h(b.particle1, new a.Rectangle(-259.5, -245.4, 503, 474.70000000000005), null);
    (b.moji = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            c = 1
        };
        this.frame_19 = function() {
            this.gotoAndPlay(2)
        };
        this.frame_25 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(6).call(this.frame_25).wait(1));
        this.instance = new b.efa_kira;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .929, .929);
        this.timeline.addTween(a.Tween.get(this.instance).wait(26));
        this.title = new b.replace_title_light_1;
        this.title.name = "title";
        this.title.parent = this;
        this.title.setTransform(0, 0, .5, .5);
        this.title.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.title).wait(8).to({
            alpha: 1
        }, 4, a.Ease.get(-1)).to({
            alpha: 0
        }, 6, a.Ease.get(1)).to({
            _off: !0
        }, 2).wait(6));
        this.title_1 = new b.replace_title_1;
        this.title_1.name = "title_1";
        this.title_1.parent = this;
        this.title_1.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.title_1).wait(18).to({
            _off: !0
        }, 2).wait(6))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(0, 0, 180, 71.2);
    (b.light_src = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {};
        this.frame_18 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(1));
        this.instance = new b.glitter_inner;
        this.instance.parent = this;
        this.instance.setTransform(.15,
            -33.8, .2941, .2941);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            scaleX: .2496,
            scaleY: .2496,
            x: 4.3622,
            y: -47.0487
        }, 0).wait(1).to({
            scaleX: .2138,
            scaleY: .2138,
            x: 3.66,
            y: -57.816
        }, 0).wait(1).to({
            scaleX: .1841,
            scaleY: .1841,
            x: .7662,
            y: -66.7986
        }, 0).wait(1).to({
            scaleX: .1589,
            scaleY: .1589,
            x: -1.9962,
            y: -73.7492
        }, 0).wait(1).to({
            scaleX: .1373,
            scaleY: .1373,
            x: -3.3857,
            y: -80.4699
        }, 0).wait(1).to({
            scaleX: .1187,
            scaleY: .1187,
            x: -3.7375,
            y: -86.538
        }, 0).wait(1).to({
            scaleX: .1026,
            scaleY: .1026,
            x: -3.4837,
            y: -91.6703
        }, 0).wait(1).to({
            scaleX: .0887,
            scaleY: .0887,
            x: -2.9414,
            y: -95.935
        }, 0).wait(1).to({
            scaleX: .0766,
            scaleY: .0766,
            x: -2.2998,
            y: -99.4329
        }, 0).wait(1).to({
            scaleX: .0663,
            scaleY: .0663,
            x: -1.6893,
            y: -102.1809
        }, 0).wait(1).to({
            scaleX: .0576,
            scaleY: .0576,
            x: -1.117,
            y: -104.4094
        }, 0).wait(1).to({
            scaleX: .0504,
            scaleY: .0504,
            x: -.5711,
            y: -106.293
        }, 0).wait(1).to({
            scaleX: .0445,
            scaleY: .0445,
            x: -.0771,
            y: -107.8314
        }, 0).wait(1).to({
            scaleX: .04,
            scaleY: .04,
            x: .3421,
            y: -109.0321
        }, 0).wait(1).to({
            scaleX: .0367,
            scaleY: .0367,
            x: .6643,
            y: -109.8975
        }, 0).wait(1).to({
            scaleX: .0347,
            scaleY: .0347,
            x: .8695,
            y: -110.4245
        }, 0).wait(1).to({
            scaleX: .0341,
            scaleY: .0341,
            x: .95,
            y: -110.6
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-13.2, -112.1, 28.299999999999997, 91.8);
    (b.kira1_2 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_35 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(35).call(this.frame_35).wait(1));
        this.instance = new b.glitter_common_parts1;
        this.instance.parent = this;
        this.instance.setTransform(-90, 47.95, .281, .281);
        this.timeline.addTween(a.Tween.get(this.instance).wait(36));
        this.instance_1 = new b.glitter_common_parts1;
        this.instance_1.parent = this;
        this.instance_1.setTransform(98.4, -81.4, .281, .281);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(3).to({
            _off: !1
        }, 0).wait(33));
        this.instance_2 = new b.glitter_common_parts1;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-75.6, -65.1, .281, .281);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(13).to({
            _off: !1
        }, 0).wait(23));
        this.instance_3 = new b.glitter_common_parts1;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-37.35, -35.3, .281, .281);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(7).to({
            _off: !1
        }, 0).wait(29));
        this.instance_4 = new b.glitter_common_parts1;
        this.instance_4.parent = this;
        this.instance_4.setTransform(27.45, 58.25, .281, .281);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(9).to({
            _off: !1
        }, 0).wait(27));
        this.instance_5 = new b.glitter_common_parts1;
        this.instance_5.parent = this;
        this.instance_5.setTransform(90.5,
            51.35, .281, .281);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(11).to({
            _off: !1
        }, 0).wait(25));
        this.instance_6 = new b.glitter_common_parts1;
        this.instance_6.parent = this;
        this.instance_6.setTransform(61.3, -37.2, .281, .281);
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(19).to({
            _off: !1
        }, 0).wait(17));
        this.instance_7 = new b.glitter_common_parts1;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-23.6, 14.6, .281, .281);
        this.instance_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(26).to({
            _off: !1
        }, 0).wait(10));
        this.instance_8 = new b.glitter_common_parts1;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-85.75, -125.8, .281, .281);
        this.instance_8._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(28).to({
            _off: !1
        }, 0).wait(8));
        this.instance_9 = new b.glitter_common_parts1;
        this.instance_9.parent = this;
        this.instance_9.setTransform(40.15, -124.75, .281, .281);
        this.instance_9._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(33).to({
                _off: !1
            },
            0).wait(3));
        this.instance_10 = new b.sprite39_1;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-5.2, 0, 1.2934, 1.6689);
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(36))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-112.1, -159.9, 239.89999999999998, 320);
    (b.efa_\u30ad\u30e9\u30ad\u30e9\u30dc\u30fc\u30c9\u30ab\u30fc\u30c9\u7528 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            1 == exportRoot._g.gType ? (this.visible = !0, this.play()) : (this.visible = !1, this.stop())
        };
        this.frame_12 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));
        this.instance = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance.parent = this;
        this.instance.setTransform(31.8, -142.55, .281, .281);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(3).to({
            _off: !1
        }, 0).wait(10));
        this.instance_1 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_1.parent = this;
        this.instance_1.setTransform(13.55, 95.25, .281, .281);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(3).to({
            _off: !1
        }, 0).wait(10));
        this.instance_2 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-63.15, -86, .281, .281);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(3).to({
            _off: !1
        }, 0).wait(10));
        this.instance_3 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-103.1, .35, .281, .281);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(3).to({
                _off: !1
            },
            0).wait(10));
        this.instance_4 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_4.parent = this;
        this.instance_4.setTransform(82.35, 122.15, .281, .281);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(6).to({
            _off: !1
        }, 0).wait(7));
        this.instance_5 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_5.parent = this;
        this.instance_5.setTransform(20.3, -41.35, .281, .281);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(6).to({
            _off: !1
        }, 0).wait(7));
        this.instance_6 =
            new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-59.1, 43.15, .281, .281);
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(6).to({
            _off: !1
        }, 0).wait(7));
        this.instance_7 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-10.5, .55, .281, .281);
        this.instance_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(9).to({
            _off: !1
        }, 0).wait(4));
        this.instance_8 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_8.parent = this;
        this.instance_8.setTransform(64.55, 23.3, .281, .281);
        this.instance_8._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(9).to({
            _off: !1
        }, 0).wait(4));
        this.instance_9 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_9.parent = this;
        this.instance_9.setTransform(1.45, -113.55, .281, .281);
        this.instance_9._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(9).to({
            _off: !1
        }, 0).wait(4));
        this.instance_10 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_10.parent =
            this;
        this.instance_10.setTransform(-71.3, -137.05, .281, .281);
        this.instance_10._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(10).to({
            _off: !1
        }, 0).wait(3));
        this.instance_11 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_11.parent = this;
        this.instance_11.setTransform(84.6, -118.65, .281, .281);
        this.instance_11._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(10).to({
            _off: !1
        }, 0).wait(3));
        this.instance_12 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-69.25,
            110.1, .281, .281);
        this.instance_12._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_12).wait(10).to({
            _off: !1
        }, 0).wait(3));
        this.instance_13 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_13.parent = this;
        this.instance_13.setTransform(90.45, -64.95, .281, .281);
        this.instance_13._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_13).wait(11).to({
            _off: !1
        }, 0).wait(2));
        this.instance_14 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_14.parent = this;
        this.instance_14.setTransform(54.05, -5.1, .281,
            .281);
        this.instance_14._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_14).wait(11).to({
            _off: !1
        }, 0).wait(2));
        this.instance_15 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_15.parent = this;
        this.instance_15.setTransform(69.65, 55.75, .281, .281);
        this.instance_15._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_15).wait(11).to({
            _off: !1
        }, 0).wait(2));
        this.instance_16 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_16.parent = this;
        this.instance_16.setTransform(-56.05, 47.35, .281, .281);
        this.instance_16._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_16).wait(11).to({
            _off: !1
        }, 0).wait(2));
        this.instance_17 = new b.efa_\uff77\uff97\uff77\uff97;
        this.instance_17.parent = this;
        this.instance_17.setTransform(-62.45, -43.9, .281, .281);
        this.instance_17._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_17).wait(11).to({
            _off: !1
        }, 0).wait(2));
        this.instance_18 = new b.efa_\uff77\uff97\uff77\uff97_pp;
        this.instance_18.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance_18).wait(13))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-120, -150, 240, 300);
    (b.efa_\u30ad\u30e9\u30ad\u30e9\u30dc\u30fc\u30c9 = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_12 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(12).call(this.frame_12).wait(1));
        this.instance = new b.sprite43;
        this.instance.parent = this;
        this.instance.setTransform(79.4, 9.85, .281, .281);
        this.timeline.addTween(a.Tween.get(this.instance).wait(13));
        this.instance_1 = new b.sprite43;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-11.65,
            -7.4, .281, .281);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(3).to({
            _off: !1
        }, 0).wait(10));
        this.instance_2 = new b.sprite43;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-104.65, 8.7, .281, .281);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(3).to({
            _off: !1
        }, 0).wait(10));
        this.instance_3 = new b.sprite43;
        this.instance_3.parent = this;
        this.instance_3.setTransform(121.35, 7.25, .281, .281);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(6).to({
                _off: !1
            },
            0).wait(7));
        this.instance_4 = new b.sprite43;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-28.05, -17.85, .281, .281);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(6).to({
            _off: !1
        }, 0).wait(7));
        this.instance_5 = new b.sprite43;
        this.instance_5.parent = this;
        this.instance_5.setTransform(32.85, -6.5, .281, .281);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(9).to({
            _off: !1
        }, 0).wait(4));
        this.instance_6 = new b.sprite43;
        this.instance_6.parent =
            this;
        this.instance_6.setTransform(-113.1, -15.85, .281, .281);
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(9).to({
            _off: !1
        }, 0).wait(4));
        this.instance_7 = new b.sprite43;
        this.instance_7.parent = this;
        this.instance_7.setTransform(57.3, -6.9, .281, .281);
        this.instance_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(10).to({
            _off: !1
        }, 0).wait(3));
        this.instance_8 = new b.sprite43;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-82.65, -12.2, .281, .281);
        this.instance_8._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(10).to({
            _off: !1
        }, 0).wait(3));
        this.instance_9 = new b.sprite43;
        this.instance_9.parent = this;
        this.instance_9.setTransform(92.05, -8.65, .281, .281);
        this.instance_9._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(11).to({
            _off: !1
        }, 0).wait(2));
        this.instance_10 = new b.sprite43;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-47.65, -.2, .281, .281);
        this.instance_10._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(11).to({
                _off: !1
            },
            0).wait(2));
        this.instance_11 = new b.sprite43;
        this.instance_11.parent = this;
        this.instance_11.setTransform(11.4, 10.3, .281, .281);
        this.instance_11._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(11).to({
            _off: !1
        }, 0).wait(2));
        this.instance_12 = new b.sprite39;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-13.45, -4, 1.34, .2165);
        this.timeline.addTween(a.Tween.get(this.instance_12).wait(13))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-124.2, -24.7, 248.5, 41.5);
    (b.costume =
        function(f, d, e) {
            this.initialize(f, d, e, {});
            this.frame_29 = function() {
                this.gotoAndPlay(0)
            };
            this.timeline.addTween(a.Tween.get(this).wait(29).call(this.frame_29).wait(1));
            this.instance = new b.item_flash;
            this.instance.parent = this;
            this.instance.setTransform(24, 26.2, 1, 1, 0, 0, 0, 24, 24);
            this.instance.alpha = 0;
            this.timeline.addTween(a.Tween.get(this.instance).wait(11).to({
                alpha: .0125
            }, 0).wait(1).to({
                alpha: .0498
            }, 0).wait(1).to({
                alpha: .106
            }, 0).wait(1).to({
                alpha: .1693
            }, 0).wait(1).to({
                alpha: .2274
            }, 0).wait(1).to({
                    alpha: .2733
                },
                0).wait(1).to({
                alpha: .3048
            }, 0).wait(1).to({
                alpha: .3226
            }, 0).wait(1).to({
                alpha: .3281
            }, 0).wait(1).to({
                alpha: .318
            }, 0).wait(1).to({
                alpha: .2876
            }, 0).wait(1).to({
                alpha: .2404
            }, 0).wait(1).to({
                alpha: .1841
            }, 0).wait(1).to({
                alpha: .1286
            }, 0).wait(1).to({
                alpha: .0807
            }, 0).wait(1).to({
                alpha: .0439
            }, 0).wait(1).to({
                alpha: .0187
            }, 0).wait(1).to({
                alpha: .0045
            }, 0).wait(1).to({
                alpha: 0
            }, 0).wait(1));
            this.costume = new b.costume_core;
            this.costume.name = "costume";
            this.costume.parent = this;
            this.costume.setTransform(30, 32.2, 1, 1, 0, 0, 0, 30,
                30);
            this.timeline.addTween(a.Tween.get(this.costume).wait(30))
        }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(0, 2.2, 48, 48);
    (b.calling_container = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.frame_0 = function() {
            1 == exportRoot.call_flag ? this.play() : (this.stop(), this.visible = !1)
        };
        this.frame_1 = function() {
            "" != exportRoot.call_flag ? this.play() : (this.stop(), this.visible = !1)
        };
        this.frame_17 = function() {
            this.vignette.card.gotoAndStop(exportRoot.call_flag)
        };
        this.frame_32 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(16).call(this.frame_17).wait(15).call(this.frame_32).wait(1));
        this.tx = new b.symbol5;
        this.tx.name = "tx";
        this.tx.parent = this;
        this.tx.setTransform(160.05, 158.75);
        this.tx._off = !0;
        this.timeline.addTween(a.Tween.get(this.tx).wait(6).to({
            _off: !1
        }, 0).to({
            x: 130.05
        }, 21).to({
            _off: !0
        }, 1).wait(5));
        this.instance = new b.white;
        this.instance.parent = this;
        this.instance.setTransform(120.05, 160);
        this.instance.alpha = .9492;
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(17).to({
            _off: !1
        }, 0).wait(1).to({
            alpha: .9364
        }, 0).wait(1).to({
            alpha: .8941
        }, 0).wait(1).to({
            alpha: .8159
        }, 0).wait(1).to({
            alpha: .6958
        }, 0).wait(1).to({
            alpha: .5341
        }, 0).wait(1).to({
            alpha: .3496
        }, 0).wait(1).to({
            alpha: .1859
        }, 0).wait(1).to({
            alpha: .0831
        }, 0).wait(1).to({
            alpha: .0508
        }, 0).wait(1).to({
            alpha: 1
        }, 3, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(2));
        this.vignette = new b.vignette;
        this.vignette.name = "vignette";
        this.vignette.parent = this;
        this.vignette.setTransform(.05,
            10);
        this.vignette._off = !0;
        this.timeline.addTween(a.Tween.get(this.vignette).wait(17).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 14).wait(2));
        this.instance_1 = new b.white;
        this.instance_1.parent = this;
        this.instance_1.setTransform(120.05, 160);
        this.instance_1.alpha = .1016;
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            alpha: 1
        }, 6, a.Ease.get(-1)).wait(25).to({
            alpha: .3008
        }, 0).to({
            _off: !0
        }, 1).wait(1));
        this.instance_2 = new b.vignette;
        this.instance_2.parent = this;
        this.instance_2.setTransform(.05, 10);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(7).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 24).wait(2))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-220.1, 0, 533.1, 320);
    (b.bg = function(f, d, e) {
        this.initialize(f, d, e, {
            open: 3,
            dark: 33,
            local: 65
        });
        this.frame_0 = function() {
            1 != exportRoot._g.gType ? this.curtain_l.visible = !1 : (this.bg_cover.visible = !1, this.curtain_p.visible = !1, this.light.visible = !1, this.card_bk.visible = !1)
        };
        this.frame_2 = function() {
            this.stop()
        };
        this.frame_3 = function() {
            1 == exportRoot._g.gType ?
                this.gotoAndPlay("local") : exportRoot.light_bg_flag ? (1 == exportRoot.card_all && "\uff9a\uff71" == exportRoot.rare1 && (this.card.card1.scaleX *= .344, this.card.card1.scaleY *= .344, this.card.card1.x -= 30, this.card.card1.y -= 40), this.play()) : this.gotoAndPlay("dark");
            1 == exportRoot.card_all && "\uff9a\uff71" == exportRoot.rare1 && (this.card.scaleY = this.card.scaleX = 1.45, this.card.x = 90.25, this.card.y = 88.5)
        };
        this.frame_32 = function() {
            this.stop()
        };
        this.frame_33 = function() {};
        this.frame_64 = function() {
            this.stop()
        };
        this.frame_65 =
            function() {
                1 == exportRoot.card_all && this.card_l.gotoAndStop("one")
            };
        this.frame_94 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1).call(this.frame_3).wait(29).call(this.frame_32).wait(1).call(this.frame_33).wait(31).call(this.frame_64).wait(1).call(this.frame_65).wait(29).call(this.frame_94).wait(1));
        this.curtain_l = new b.\u30b7\u30f3\u30dc\u30eb1;
        this.curtain_l.name = "curtain_l";
        this.curtain_l.parent = this;
        this.curtain_l.setTransform(.5,
            -38.95);
        this.timeline.addTween(a.Tween.get(this.curtain_l).to({
            _off: !0
        }, 3).wait(92));
        e = new a.Shape;
        e._off = !0;
        f = (new a.Graphics).p("AlSmRIKlAAIgBMgIqjADg");
        this.timeline.addTween(a.Tween.get(e).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(65).to({
            graphics: f,
            x: .225,
            y: -39.05
        }).wait(30));
        this.instance = new b.\u30ab\u30fc\u30c6\u30f3\u958b\u304f2("synched", 1, !1);
        this.instance.parent = this;
        this.instance.setTransform(-.15, -40.05, 1, 1.093);
        this.instance._off = !0;
        f = [this.instance];
        for (d = 0; d < f.length; d++) f[d].mask = e;
        this.timeline.addTween(a.Tween.get(this.instance).wait(65).to({
                _off: !1
            },
            0).wait(30));
        this.instance_1 = new b.card_w;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-23, -57);
        this.instance_1.alpha = 0;
        f = [this.instance_1];
        for (d = 0; d < f.length; d++) f[d].mask = e;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(65).to({
            x: -24
        }, 0).wait(1).to({
            regX: 24,
            regY: 30,
            x: 0,
            y: -27,
            alpha: .005
        }, 0).wait(1).to({
            alpha: .02
        }, 0).wait(1).to({
            alpha: .045
        }, 0).wait(1).to({
            alpha: .08
        }, 0).wait(1).to({
            alpha: .125
        }, 0).wait(1).to({
            alpha: .18
        }, 0).wait(1).to({
            alpha: .245
        }, 0).wait(1).to({
            alpha: .32
        }, 0).wait(1).to({
                alpha: .405
            },
            0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -24,
            y: -57,
            alpha: .5
        }, 0).wait(1).to({
            regX: 24,
            regY: 30,
            x: 0,
            y: -27
        }, 0).wait(7).to({
            regX: 0,
            regY: 0,
            x: -24,
            y: -57
        }, 0).wait(12));
        this.instance_2 = new b.card_bk;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-24, -58);
        this.instance_2.alpha = 0;
        f = [this.instance_2];
        for (d = 0; d < f.length; d++) f[d].mask = e;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(65).to({
            y: -57,
            alpha: .6992
        }, 0).wait(1).to({
            regX: 24,
            regY: 30,
            x: 0,
            y: -27,
            alpha: .6922
        }, 0).wait(1).to({
            alpha: .6712
        }, 0).wait(1).to({
                alpha: .6363
            },
            0).wait(1).to({
            alpha: .5873
        }, 0).wait(1).to({
            alpha: .5244
        }, 0).wait(1).to({
            alpha: .4475
        }, 0).wait(1).to({
            alpha: .3566
        }, 0).wait(1).to({
            alpha: .2517
        }, 0).wait(1).to({
            alpha: .1329
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -24,
            y: -57,
            alpha: 0
        }, 0).wait(20));
        this.card_l = new b.first_card;
        this.card_l.name = "card_l";
        this.card_l.parent = this;
        this.card_l.setTransform(0, -27.8, .5, .5, 0, 0, 0, 0, -.2);
        this.card_l.alpha = 0;
        f = [this.card_l];
        for (d = 0; d < f.length; d++) f[d].mask = e;
        this.timeline.addTween(a.Tween.get(this.card_l).wait(65).to({
            y: -27.1,
            alpha: 1
        }, 0).to({
            regY: -.1,
            y: -27.05
        }, 10, a.Ease.get(-1)).to({
            regY: 0,
            y: -27
        }, 8, a.Ease.get(1)).wait(12));
        this.light_b = new b.white_mc;
        this.light_b.name = "light_b";
        this.light_b.parent = this;
        this.light_b.setTransform(-60.4, -100.7, .5, .5, 0, 0, 0, .1, 34.1);
        this.light_b.alpha = 0;
        f = [this.light_b];
        for (d = 0; d < f.length; d++) f[d].mask = e;
        this.timeline.addTween(a.Tween.get(this.light_b).wait(66).to({
            regX: 120,
            regY: 160,
            x: -.45,
            y: -37.75,
            alpha: .0085
        }, 0).wait(1).to({
            alpha: .0341
        }, 0).wait(1).to({
            alpha: .0766
        }, 0).wait(1).to({
                alpha: .1362
            },
            0).wait(1).to({
            alpha: .2129
        }, 0).wait(1).to({
            alpha: .3065
        }, 0).wait(1).to({
            alpha: .4172
        }, 0).wait(1).to({
            alpha: .545
        }, 0).wait(1).to({
            alpha: .6897
        }, 0).wait(1).to({
            regX: .1,
            regY: 34.1,
            x: -60.4,
            y: -100.7,
            alpha: .8516
        }, 0).wait(1).to({
            regX: 120,
            regY: 160,
            x: -.45,
            y: -37.75,
            alpha: .8607
        }, 0).wait(1).to({
            alpha: .8687
        }, 0).wait(1).to({
            alpha: .8754
        }, 0).wait(1).to({
            alpha: .8809
        }, 0).wait(1).to({
            alpha: .8851
        }, 0).wait(1).to({
            alpha: .8882
        }, 0).wait(1).to({
            alpha: .89
        }, 0).wait(1).to({
            regX: .1,
            regY: 34.1,
            x: -60.4,
            y: -100.7,
            alpha: .8906
        }, 0).wait(12));
        this.instance_3 = new b.fade_black;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-.45, -37.75, .5, .5);
        this.instance_3.alpha = .4219;
        this.instance_3._off = !0;
        f = [this.instance_3];
        for (d = 0; d < f.length; d++) f[d].mask = e;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(65).to({
            _off: !1
        }, 0).wait(1).to({
            alpha: .4177
        }, 0).wait(1).to({
            alpha: .405
        }, 0).wait(1).to({
            alpha: .3839
        }, 0).wait(1).to({
            alpha: .3544
        }, 0).wait(1).to({
            alpha: .3164
        }, 0).wait(1).to({
            alpha: .27
        }, 0).wait(1).to({
            alpha: .2152
        }, 0).wait(1).to({
                alpha: .1519
            },
            0).wait(1).to({
            alpha: .0802
        }, 0).wait(1).to({
            alpha: 0
        }, 0).to({
            _off: !0
        }, 1).wait(19));
        this.light_l = new b.maku_oku_light_mc;
        this.light_l.name = "light_l";
        this.light_l.parent = this;
        this.light_l.setTransform(2.35, -33.6, 1, 1, 0, 0, 0, 0, 34);
        this.light_l._off = !0;
        f = [this.light_l];
        for (d = 0; d < f.length; d++) f[d].mask = e;
        this.timeline.addTween(a.Tween.get(this.light_l).wait(65).to({
            _off: !1
        }, 0).wait(30));
        this.instance_4 = new b._bg_cover_mc_b;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-42, -30, 1, 1, 0, 0, 0, 0, 44);
        this.instance_4.alpha =
            .6016;
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(33).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 32).wait(30));
        this.instance_5 = new b._bg_cover_mc;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-42, -30, 1, 1, 0, 0, 0, 0, 44);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(33).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 32).wait(30));
        e = new a.Shape;
        e._off = !0;
        f = (new a.Graphics).p("AliFfQAWjLgBgeQgBgPgDgPQgBgOAFgWIAOguQAHgZAAgPQAAgJAEgkQADgfgCgNIgFhCIAJgQQAJgTAFgPQAIgYACg2IAAgXQAaASAwASQBgAjBtgCQBsgCBqgoQA2gTAfgTIgLA0QgGAZANAVQAIAMARAQIAPAPQgKAtAAAbIAAA8QACAwAJAnQAIAhAGALQADAGABAOQABAUgDAfIgFA6QgCAeABAUQABAPAEAXQAFAcgBA2g");
        this.timeline.addTween(a.Tween.get(e).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(33).to({
            graphics: f,
            x: 1.8341,
            y: -31.35
        }).wait(32).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(30));
        this.instance_6 = new b.\u30ab\u30fc\u30c6\u30f3\u958b\u304f2\u30b3\u30d4\u30fc("synched", 1, !1);
        this.instance_6.parent = this;
        this.instance_6.setTransform(1.85, -32.4, 1.4091, .9531);
        this.instance_6._off = !0;
        f = [this.instance_6];
        for (d = 0; d < f.length; d++) f[d].mask = e;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(33).to({
            _off: !1
        }, 0).to({
                _off: !0
            },
            32).wait(30));
        this.instance_7 = new b._whiteGlow;
        this.instance_7.parent = this;
        this.instance_7.setTransform(1.5, -28.85, 1.1671, 1.1671);
        this.instance_7.alpha = 0;
        f = [this.instance_7];
        for (d = 0; d < f.length; d++) f[d].mask = e;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(33).to({
            alpha: 1
        }, 0).to({
            _off: !0
        }, 32).wait(30));
        this.instance_8 = new b.card_w;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-23, -57);
        this.instance_8.alpha = 0;
        this.instance_8._off = !0;
        f = [this.instance_8];
        for (d = 0; d < f.length; d++) f[d].mask =
            e;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(33).to({
            _off: !1
        }, 0).wait(5).to({
            regX: 24,
            regY: 30,
            x: 1,
            y: -27,
            alpha: .008
        }, 0).wait(1).to({
            alpha: .032
        }, 0).wait(1).to({
            alpha: .0721
        }, 0).wait(1).to({
            alpha: .1281
        }, 0).wait(1).to({
            alpha: .2002
        }, 0).wait(1).to({
            alpha: .2883
        }, 0).wait(1).to({
            alpha: .3924
        }, 0).wait(1).to({
            alpha: .5125
        }, 0).wait(1).to({
            alpha: .6486
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -23,
            y: -57,
            alpha: .8008
        }, 0).wait(1).to({
            regX: 24,
            regY: 30,
            x: 1,
            y: -27,
            alpha: .7303
        }, 0).wait(1).to({
            alpha: .6692
        }, 0).wait(1).to({
                alpha: .6175
            },
            0).wait(1).to({
            alpha: .5752
        }, 0).wait(1).to({
            alpha: .5423
        }, 0).wait(1).to({
            alpha: .5188
        }, 0).wait(1).to({
            alpha: .5047
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -23,
            y: -57,
            alpha: .5
        }, 0).to({
            _off: !0
        }, 10).wait(30));
        this.instance_9 = new b.card_bk;
        this.instance_9.parent = this;
        this.instance_9.setTransform(-23, -57);
        this.instance_9.alpha = .8008;
        this.instance_9._off = !0;
        f = [this.instance_9];
        for (d = 0; d < f.length; d++) f[d].mask = e;
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(33).to({
            _off: !1
        }, 0).wait(5).to({
            regX: 24,
            regY: 30,
            x: 1,
            y: -27,
            alpha: .7928
        }, 0).wait(1).to({
            alpha: .7688
        }, 0).wait(1).to({
            alpha: .7287
        }, 0).wait(1).to({
            alpha: .6727
        }, 0).wait(1).to({
            alpha: .6006
        }, 0).wait(1).to({
            alpha: .5125
        }, 0).wait(1).to({
            alpha: .4084
        }, 0).wait(1).to({
            alpha: .2883
        }, 0).wait(1).to({
            alpha: .1521
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -23,
            y: -57,
            alpha: 0
        }, 0).to({
            _off: !0
        }, 18).wait(30));
        this.card_d = new b._cards;
        this.card_d.name = "card_d";
        this.card_d.parent = this;
        this.card_d.setTransform(1, -27, .5, .5);
        this.card_d.alpha = 0;
        f = [this.card_d];
        for (d = 0; d < f.length; d++) f[d].mask =
            e;
        this.timeline.addTween(a.Tween.get(this.card_d).wait(33).to({
            alpha: 1
        }, 0).to({
            _off: !0
        }, 32).wait(30));
        this.light_d = new b.maku_oku_light_mc_w;
        this.light_d.name = "light_d";
        this.light_d.parent = this;
        this.light_d.setTransform(2.35, -33.6, 1, 1, 0, 0, 0, 0, 34);
        this.light_d.alpha = 0;
        this.light_d._off = !0;
        f = [this.light_d];
        for (d = 0; d < f.length; d++) f[d].mask = e;
        this.timeline.addTween(a.Tween.get(this.light_d).wait(33).to({
            _off: !1
        }, 0).wait(4).to({
            alpha: 1
        }, 10).wait(1).to({
            regX: -2.1,
            regY: 34.9,
            x: .25,
            y: -32.7,
            alpha: .9881
        }, 0).wait(1).to({
                alpha: .9778
            },
            0).wait(1).to({
            alpha: .9691
        }, 0).wait(1).to({
            alpha: .9619
        }, 0).wait(1).to({
            alpha: .9564
        }, 0).wait(1).to({
            alpha: .9524
        }, 0).wait(1).to({
            alpha: .95
        }, 0).wait(1).to({
            regX: 0,
            regY: 34,
            x: 2.35,
            y: -33.6,
            alpha: .9492
        }, 0).to({
            _off: !0
        }, 10).wait(30));
        this.light_d_1 = new b.maku_oku_light_mc_1;
        this.light_d_1.name = "light_d_1";
        this.light_d_1.parent = this;
        this.light_d_1.setTransform(2.35, -33.6, 1, 1, 0, 0, 0, 0, 34);
        this.light_d_1.alpha = 0;
        f = [this.light_d_1];
        for (d = 0; d < f.length; d++) f[d].mask = e;
        this.timeline.addTween(a.Tween.get(this.light_d_1).wait(33).to({
                alpha: 1
            },
            0).to({
            _off: !0
        }, 32).wait(30));
        this.bg_cover = new b._bg_cover_mc;
        this.bg_cover.name = "bg_cover";
        this.bg_cover.parent = this;
        this.bg_cover.setTransform(-42, -30, 1, 1, 0, 0, 0, 0, 44);
        this.timeline.addTween(a.Tween.get(this.bg_cover).to({
            _off: !0
        }, 33).wait(62));
        e = new a.Shape;
        e._off = !0;
        f = (new a.Graphics).p("AliFfQAWjLgBgeQgBgPgDgPQgBgOAFgWIAOguQAHgZAAgPQAAgJAEgkQADgfgCgNIgFhCIAJgQQAJgTAFgPQAIgYACg2IAAgXQAaASAwASQBgAjBtgCQBsgCBqgoQA2gTAfgTIgLA0QgGAZANAVQAIAMARAQIAPAPQgKAtAAAbIAAA8QACAwAJAnQAIAhAGALQADAGABAOQABAUgDAfIgFA6QgCAeABAUQABAPAEAXQAFAcgBA2g");
        this.timeline.addTween(a.Tween.get(e).to({
            graphics: f,
            x: 1.8341,
            y: -31.35
        }).wait(33).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(62));
        this.curtain_p = new b.curtain_p;
        this.curtain_p.name = "curtain_p";
        this.curtain_p.parent = this;
        this.curtain_p.setTransform(0, -25, 1, 1, 0, 0, 0, 50, 50);
        f = [this.curtain_p];
        for (d = 0; d < f.length; d++) f[d].mask = e;
        this.timeline.addTween(a.Tween.get(this.curtain_p).to({
            _off: !0
        }, 3).wait(92));
        this.instance_10 = new b.\u30ab\u30fc\u30c6\u30f3\u958b\u304f2_1("synched", 1, !1);
        this.instance_10.parent = this;
        this.instance_10.setTransform(1.85,
            -32.4, 1.4091, .9531);
        this.instance_10._off = !0;
        f = [this.instance_10];
        for (d = 0; d < f.length; d++) f[d].mask = e;
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(3).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 30).wait(62));
        this.instance_11 = new b._whiteGlow;
        this.instance_11.parent = this;
        this.instance_11.setTransform(1.5, -28.85, 1.1671, 1.1671);
        this.instance_11.alpha = 0;
        f = [this.instance_11];
        for (d = 0; d < f.length; d++) f[d].mask = e;
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(3).to({
            alpha: 1
        }, 0).to({
            _off: !0
        }, 30).wait(62));
        this.instance_12 = new b.card_w;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-23, -57);
        this.instance_12.alpha = 0;
        f = [this.instance_12];
        for (d = 0; d < f.length; d++) f[d].mask = e;
        this.timeline.addTween(a.Tween.get(this.instance_12).wait(4).to({
            regX: 24,
            regY: 30,
            x: 1,
            y: -27,
            alpha: .008
        }, 0).wait(1).to({
            alpha: .032
        }, 0).wait(1).to({
            alpha: .0721
        }, 0).wait(1).to({
            alpha: .1281
        }, 0).wait(1).to({
            alpha: .2002
        }, 0).wait(1).to({
            alpha: .2883
        }, 0).wait(1).to({
            alpha: .3924
        }, 0).wait(1).to({
            alpha: .5125
        }, 0).wait(1).to({
                alpha: .6486
            },
            0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -23,
            y: -57,
            alpha: .8008
        }, 0).wait(1).to({
            regX: 24,
            regY: 30,
            x: 1,
            y: -27,
            alpha: .7303
        }, 0).wait(1).to({
            alpha: .6692
        }, 0).wait(1).to({
            alpha: .6175
        }, 0).wait(1).to({
            alpha: .5752
        }, 0).wait(1).to({
            alpha: .5423
        }, 0).wait(1).to({
            alpha: .5188
        }, 0).wait(1).to({
            alpha: .5047
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -23,
            y: -57,
            alpha: .5
        }, 0).to({
            _off: !0
        }, 12).wait(62));
        this.card_bk = new b.card_bk;
        this.card_bk.name = "card_bk";
        this.card_bk.parent = this;
        this.card_bk.setTransform(-23, -57);
        this.card_bk.alpha = .8008;
        f = [this.card_bk];
        for (d = 0; d < f.length; d++) f[d].mask = e;
        this.timeline.addTween(a.Tween.get(this.card_bk).wait(4).to({
            regX: 24,
            regY: 30,
            x: 1,
            y: -27,
            alpha: .7928
        }, 0).wait(1).to({
            alpha: .7688
        }, 0).wait(1).to({
            alpha: .7287
        }, 0).wait(1).to({
            alpha: .6727
        }, 0).wait(1).to({
            alpha: .6006
        }, 0).wait(1).to({
            alpha: .5125
        }, 0).wait(1).to({
            alpha: .4084
        }, 0).wait(1).to({
            alpha: .2883
        }, 0).wait(1).to({
            alpha: .1521
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -23,
            y: -57,
            alpha: 0
        }, 0).to({
            _off: !0
        }, 20).wait(62));
        this.card = new b._cards;
        this.card.name = "card";
        this.card.parent =
            this;
        this.card.setTransform(1, -27, .5, .5);
        this.card.alpha = 0;
        f = [this.card];
        for (d = 0; d < f.length; d++) f[d].mask = e;
        this.timeline.addTween(a.Tween.get(this.card).wait(3).to({
            alpha: 1
        }, 0).to({
            _off: !0
        }, 30).wait(62));
        this.light_b_1 = new b.maku_oku_light_mc_w;
        this.light_b_1.name = "light_b_1";
        this.light_b_1.parent = this;
        this.light_b_1.setTransform(2.35, -33.6, 1, 1, 0, 0, 0, 0, 34);
        this.light_b_1.alpha = 0;
        f = [this.light_b_1];
        for (d = 0; d < f.length; d++) f[d].mask = e;
        this.timeline.addTween(a.Tween.get(this.light_b_1).wait(3).to({
                alpha: .8008
            },
            10).wait(1).to({
            regX: -2.1,
            regY: 34.9,
            x: .25,
            y: -32.7
        }, 0).wait(7).to({
            regX: 0,
            regY: 34,
            x: 2.35,
            y: -33.6
        }, 0).to({
            _off: !0
        }, 12).wait(62));
        this.light = new b.maku_oku_light_mc_1;
        this.light.name = "light";
        this.light.parent = this;
        this.light.setTransform(2.35, -33.6, 1, 1, 0, 0, 0, 0, 34);
        f = [this.light];
        for (d = 0; d < f.length; d++) f[d].mask = e;
        this.timeline.addTween(a.Tween.get(this.light).to({
            _off: !0
        }, 33).wait(62));
        this.instance_13 = new b.black_mc;
        this.instance_13.parent = this;
        this.instance_13.setTransform(0, 0, 1, 1, 0, 0, 0, 120, 160);
        this.instance_13.alpha =
            .6016;
        this.instance_13._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_13).wait(33).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 32).wait(30));
        this.instance_14 = new b.replace_bg_2;
        this.instance_14.parent = this;
        this.instance_14.setTransform(0, 0, .5, .5, 0, 0, 0, 240, 320);
        this.timeline.addTween(a.Tween.get(this.instance_14).wait(95))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-151, -160, 305, 320);
    (b.set_petit = function(f, d, e) {
        this.initialize(f, d, e, {
            pattern0: 0,
            pattern1: 4,
            pattern2: 15,
            pattern3: 26,
            pattern4: 37,
            pattern5: 48
        });
        this.frame_0 = function() {
            this.icon1.visible = !1;
            this.icon2.visible = !1;
            this.stop()
        };
        this.frame_3 = function() {
            this.stop()
        };
        this.frame_4 = function() {};
        this.frame_6 = function() {
            this.icon1.visible = !0;
            window.se_play("");
            this.particle_l.restart()
        };
        this.frame_14 = function() {
            this.stop()
        };
        this.frame_15 = function() {};
        this.frame_17 = function() {
            this.icon1.visible = !0;
            this.particle_l.restart()
        };
        this.frame_18 = function() {
            this.icon2.visible = !0;
            window.se_play("");
            this.particle_r.restart()
        };
        this.frame_25 = function() {
            this.stop()
        };
        this.frame_26 = function() {};
        this.frame_28 = function() {
            this.particle_r.restart()
        };
        this.frame_36 = function() {
            this.stop()
        };
        this.frame_37 = function() {};
        this.frame_39 = function() {
            this.icon2.visible = !0;
            this.particle_r.restart()
        };
        this.frame_47 = function() {
            this.stop()
        };
        this.frame_48 = function() {};
        this.frame_50 = function() {
            this.particle_l.restart()
        };
        this.frame_51 = function() {
            this.icon2.visible = !0;
            this.particle_r.restart()
        };
        this.frame_58 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(1).call(this.frame_4).wait(2).call(this.frame_6).wait(8).call(this.frame_14).wait(1).call(this.frame_15).wait(2).call(this.frame_17).wait(1).call(this.frame_18).wait(7).call(this.frame_25).wait(1).call(this.frame_26).wait(2).call(this.frame_28).wait(8).call(this.frame_36).wait(1).call(this.frame_37).wait(2).call(this.frame_39).wait(8).call(this.frame_47).wait(1).call(this.frame_48).wait(2).call(this.frame_50).wait(1).call(this.frame_51).wait(7).call(this.frame_58).wait(1));
        this.particle_r = new b.particle1;
        this.particle_r.name = "particle_r";
        this.particle_r.parent = this;
        this.particle_r.setTransform(80.95, 21.45, .4283, .4283);
        this.particle_r.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.particle_r).to({
            _off: !0
        }, 1).wait(17).to({
            _off: !1,
            alpha: 1
        }, 0).to({
            _off: !0
        }, 8).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 9).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 9).wait(3).to({
            _off: !1
        }, 0).wait(8));
        this.particle_l = new b.particle1;
        this.particle_l.name = "particle_l";
        this.particle_l.parent = this;
        this.particle_l.setTransform(26.95,
            28.45, .4283, .4283);
        this.particle_l.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.particle_l).to({
            _off: !0
        }, 1).wait(5).to({
            _off: !1,
            x: 77.95,
            alpha: 1
        }, 0).to({
            _off: !0
        }, 9).wait(2).to({
            _off: !1,
            x: 26.95
        }, 0).to({
            _off: !0
        }, 9).wait(24).to({
            _off: !1
        }, 0).wait(9));
        this.instance = new b.asset_efc_flashWhite;
        this.instance.parent = this;
        this.instance.setTransform(79.15, 26.8, .1431, .0425);
        this.instance_1 = new b.asset_efc_flashBlade;
        this.instance_1.parent = this;
        this.instance_1.setTransform(79.15, 27.6, .3952, .5294);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_1,
                p: {
                    scaleX: .3952,
                    x: 79.15,
                    y: 27.6
                }
            }, {
                t: this.instance,
                p: {
                    scaleX: .1431,
                    scaleY: .0425,
                    x: 79.15,
                    y: 26.8
                }
            }]
        }, 16).to({
            state: [{
                t: this.instance_1,
                p: {
                    scaleX: .6334,
                    x: 77.95,
                    y: 28.2
                }
            }, {
                t: this.instance,
                p: {
                    scaleX: .3617,
                    scaleY: .173,
                    x: 77.95,
                    y: 27.4
                }
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_1,
                p: {
                    scaleX: .3952,
                    x: 79.15,
                    y: 27.6
                }
            }, {
                t: this.instance,
                p: {
                    scaleX: .1431,
                    scaleY: .0425,
                    x: 79.15,
                    y: 26.8
                }
            }]
        }, 31).to({
                state: [{
                    t: this.instance_1,
                    p: {
                        scaleX: .6334,
                        x: 77.95,
                        y: 28.2
                    }
                }, {
                    t: this.instance,
                    p: {
                        scaleX: .3617,
                        scaleY: .173,
                        x: 77.95,
                        y: 27.4
                    }
                }]
            },
            1).to({
            state: []
        }, 1).wait(8));
        this.instance_2 = new b.asset_efc_flashWhite;
        this.instance_2.parent = this;
        this.instance_2.setTransform(79.15, 26.8, .1431, .0425);
        this.instance_3 = new b.asset_efc_flashBlade;
        this.instance_3.parent = this;
        this.instance_3.setTransform(79.15, 27.6, .3952, .5294);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_3,
                p: {
                    scaleX: .3952,
                    x: 79.15,
                    y: 27.6
                }
            }, {
                t: this.instance_2,
                p: {
                    scaleX: .1431,
                    scaleY: .0425,
                    x: 79.15,
                    y: 26.8
                }
            }]
        }, 4).to({
            state: [{
                t: this.instance_3,
                p: {
                    scaleX: .6334,
                    x: 77.95,
                    y: 28.2
                }
            }, {
                t: this.instance_2,
                p: {
                    scaleX: .3617,
                    scaleY: .173,
                    x: 77.95,
                    y: 27.4
                }
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_3,
                p: {
                    scaleX: .3952,
                    x: 29.15,
                    y: 27.6
                }
            }, {
                t: this.instance_2,
                p: {
                    scaleX: .1431,
                    scaleY: .0425,
                    x: 29.15,
                    y: 26.8
                }
            }]
        }, 9).to({
            state: [{
                t: this.instance_3,
                p: {
                    scaleX: .6334,
                    x: 27.95,
                    y: 28.2
                }
            }, {
                t: this.instance_2,
                p: {
                    scaleX: .3617,
                    scaleY: .173,
                    x: 27.95,
                    y: 27.4
                }
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_3,
                p: {
                    scaleX: .3952,
                    x: 79.15,
                    y: 27.6
                }
            }, {
                t: this.instance_2,
                p: {
                    scaleX: .1431,
                    scaleY: .0425,
                    x: 79.15,
                    y: 26.8
                }
            }]
        }, 9).to({
            state: [{
                t: this.instance_3,
                p: {
                    scaleX: .6334,
                    x: 77.95,
                    y: 28.2
                }
            }, {
                t: this.instance_2,
                p: {
                    scaleX: .3617,
                    scaleY: .173,
                    x: 77.95,
                    y: 27.4
                }
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_3,
                p: {
                    scaleX: .3952,
                    x: 79.15,
                    y: 27.6
                }
            }, {
                t: this.instance_2,
                p: {
                    scaleX: .1431,
                    scaleY: .0425,
                    x: 79.15,
                    y: 26.8
                }
            }]
        }, 9).to({
            state: [{
                t: this.instance_3,
                p: {
                    scaleX: .6334,
                    x: 77.95,
                    y: 28.2
                }
            }, {
                t: this.instance_2,
                p: {
                    scaleX: .3617,
                    scaleY: .173,
                    x: 77.95,
                    y: 27.4
                }
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                    t: this.instance_3,
                    p: {
                        scaleX: .3952,
                        x: 29.15,
                        y: 27.6
                    }
                },
                {
                    t: this.instance_2,
                    p: {
                        scaleX: .1431,
                        scaleY: .0425,
                        x: 29.15,
                        y: 26.8
                    }
                }
            ]
        }, 9).to({
            state: [{
                t: this.instance_3,
                p: {
                    scaleX: .6334,
                    x: 27.95,
                    y: 28.2
                }
            }, {
                t: this.instance_2,
                p: {
                    scaleX: .3617,
                    scaleY: .173,
                    x: 27.95,
                    y: 27.4
                }
            }]
        }, 1).to({
            state: []
        }, 1).wait(9));
        this.instance_4 = new b.star_flash;
        this.instance_4.parent = this;
        this.instance_4.setTransform(80.4, 28.9, 1, 1, 0, 0, 0, 29.4, 30.9);
        this.instance_4.alpha = .6016;
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(6).to({
            _off: !1
        }, 0).to({
                y: 22.9,
                alpha: .3008
            },
            2, a.Ease.get(1)).to({
            y: 32.9,
            alpha: 0
        }, 2, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(6).to({
            _off: !1,
            x: 32.4,
            y: 28.9,
            alpha: .6016
        }, 0).to({
            y: 22.9,
            alpha: .3008
        }, 2, a.Ease.get(1)).to({
            y: 32.9,
            alpha: 0
        }, 2, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(37));
        this.icon1 = new b.set_window_petit;
        this.icon1.name = "icon1";
        this.icon1.parent = this;
        this.icon1.setTransform(32.4, 30.9, 1, 1, 0, 0, 0, 29.4, 30.9);
        this.timeline.addTween(a.Tween.get(this.icon1).wait(4).to({
            alpha: 0
        }, 0).wait(2).to({
            x: 80.4,
            y: 28.9,
            alpha: 1
        }, 0).to({
            y: 22.9
        }, 2, a.Ease.get(1)).to({
                y: 32.9
            },
            2, a.Ease.get(-1)).to({
            y: 30.9
        }, 3, a.Ease.get(1)).wait(2).to({
            x: 32.4,
            alpha: 0
        }, 0).wait(2).to({
            y: 28.9,
            alpha: 1
        }, 0).to({
            y: 22.9
        }, 2, a.Ease.get(1)).to({
            y: 32.9
        }, 2, a.Ease.get(-1)).to({
            y: 30.9
        }, 3, a.Ease.get(1)).wait(2).to({
            alpha: 0
        }, 0).wait(33));
        this.instance_5 = new b.medal_flash;
        this.instance_5.parent = this;
        this.instance_5.setTransform(86.7, 30.2, 1, 1, 0, 0, 0, 30, 30);
        this.instance_5.alpha = .9492;
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(28).to({
            _off: !1
        }, 0).to({
                y: 24.2,
                alpha: .3984
            },
            2, a.Ease.get(1)).to({
            y: 39.85,
            alpha: 0
        }, 2, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(17).to({
            _off: !1,
            x: 35.7,
            y: 30.2,
            alpha: .9492
        }, 0).to({
            y: 24.2,
            alpha: .3984
        }, 2, a.Ease.get(1)).to({
            y: 39.85,
            alpha: 0
        }, 2, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(4));
        this.icon3 = new b.scout_medal_1;
        this.icon3.name = "icon3";
        this.icon3.parent = this;
        this.icon3.setTransform(86.7, 28, 1, 1, 0, 0, 0, 30, 30);
        this.icon3._off = !0;
        this.timeline.addTween(a.Tween.get(this.icon3).wait(28).to({
            _off: !1
        }, 0).to({
            y: 22
        }, 2, a.Ease.get(1)).to({
            y: 37.65
        }, 2, a.Ease.get(-1)).to({
                y: 35.65
            },
            3, a.Ease.get(1)).wait(1).to({
            _off: !0
        }, 1).wait(13).to({
            _off: !1,
            x: 35.7,
            y: 28
        }, 0).to({
            y: 22
        }, 2, a.Ease.get(1)).to({
            y: 37.65
        }, 2, a.Ease.get(-1)).to({
            y: 35.65
        }, 3, a.Ease.get(1)).wait(2));
        this.instance_6 = new b.icon_w;
        this.instance_6.parent = this;
        this.instance_6.setTransform(75.4, 18.9, 1, 1, 0, 0, 0, 18.7, 18.7);
        this.instance_6.alpha = .6992;
        this.instance_6.compositeOperation = "lighter";
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(18).to({
            _off: !1
        }, 0).to({
            y: 12.9,
            alpha: .4492
        }, 2, a.Ease.get(1)).to({
            y: 28.55,
            alpha: 0
        }, 2, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(16).to({
            _off: !1,
            y: 18.9,
            alpha: .6992
        }, 0).to({
            y: 12.9,
            alpha: .4492
        }, 2, a.Ease.get(1)).to({
            y: 28.55,
            alpha: 0
        }, 2, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(7).to({
            _off: !1,
            y: 18.9,
            alpha: .6992
        }, 0).to({
            y: 12.9,
            alpha: .4492
        }, 2, a.Ease.get(1)).to({
            y: 28.55,
            alpha: 0
        }, 2, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(3));
        this.icon2 = new b.costume;
        this.icon2.name = "icon2";
        this.icon2.parent = this;
        this.icon2.setTransform(86.7, 35.65, 1, 1, 0, 0, 0, 30, 30);
        this.timeline.addTween(a.Tween.get(this.icon2).wait(4).to({
                alpha: 0
            },
            0).wait(14).to({
            y: 28,
            alpha: 1
        }, 0).to({
            y: 22
        }, 2, a.Ease.get(1)).to({
            y: 37.65
        }, 2, a.Ease.get(-1)).to({
            y: 35.65
        }, 3, a.Ease.get(1)).wait(1).to({
            alpha: 0
        }, 0).wait(13).to({
            y: 28,
            alpha: 1
        }, 0).to({
            y: 22
        }, 2, a.Ease.get(1)).to({
            y: 37.65
        }, 2, a.Ease.get(-1)).to({
            y: 35.65
        }, 3, a.Ease.get(1)).wait(2).to({
            alpha: 0
        }, 0).wait(3).to({
            y: 28,
            alpha: 1
        }, 0).to({
            y: 22
        }, 2, a.Ease.get(1)).to({
            y: 37.65
        }, 2, a.Ease.get(-1)).to({
            y: 35.65
        }, 3, a.Ease.get(1)).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-84.2, -83.7, 269.4, 210.4);
    (b.set_particle3 =
        function(f, d, e) {
            this.initialize(f, d, e, {});
            this.instance = new b.particle3;
            this.instance.parent = this;
            this.instance.setTransform(.2, .45);
            this.timeline.addTween(a.Tween.get(this.instance).wait(1))
        }).prototype = h(b.set_particle3, new a.Rectangle(4.5, -155.3, 281.7, 311.20000000000005), null);
    (b.moji_l = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.efa_\u30ad\u30e9\u30ad\u30e9\u30dc\u30fc\u30c9;
        this.instance.parent = this;
        this.instance.setTransform(111.4, 22.6, .929, .929);
        this.timeline.addTween(a.Tween.get(this.instance).wait(18));
        this.title = new b.title_l_light;
        this.title.name = "title";
        this.title.parent = this;
        this.title.setTransform(114, 17, .5, .5);
        this.title.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.title).wait(7).to({
            alpha: .3516,
            compositeOperation: NaN
        }, 4, a.Ease.get(-1)).to({
            alpha: 0
        }, 6, a.Ease.get(1)).wait(1));
        this.title_1 = new b.title_l;
        this.title_1.name = "title_1";
        this.title_1.parent = this;
        this.title_1.setTransform(114, 17, .5, .5);
        this.timeline.addTween(a.Tween.get(this.title_1).wait(18));
        this.instance_1 = new b.title_l_b("synched",
            0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(116.95, 20.35, .5, .5, 0, 0, 0, .1, .1);
        this.instance_1.alpha = .6992;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(18))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-6, -1, 242.9, 39.2);
    (b.bg_mc = function(f, d, e) {
        this.initialize(f, d, e, {});
        this.instance = new b.bg;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(b.bg_mc, new a.Rectangle(-120, -160, 240, 320), null);
    (b.title = function(f,
        d, e) {
        this.initialize(f, d, e, {
            local: 15
        });
        this.frame_0 = function() {
            1 == exportRoot._g.gType && this.gotoAndPlay("local")
        };
        this.frame_14 = function() {
            this.stop()
        };
        this.frame_29 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(1));
        this.instance = new b.moji_l;
        this.instance.parent = this;
        this.instance.setTransform(-58.4, 129.4, 1, 1, 0, 0, 0, -.2, .2);
        this.instance.alpha = .1992;
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(15).to({
                _off: !1
            },
            0).to({
            regX: 0,
            regY: 0,
            x: -12,
            y: 122,
            alpha: .6016
        }, 2, a.Ease.get(-1)).to({
            regX: .2,
            regY: .1,
            x: 4.4,
            y: 122.2,
            alpha: 1
        }, 2, a.Ease.get(1)).to({
            regX: 0,
            regY: 0,
            x: 6,
            y: 122
        }, 6, a.Ease.get(1)).wait(5));
        this.moji = new b.moji;
        this.moji.name = "moji";
        this.moji.parent = this;
        this.moji.setTransform(-33.2, 92.2, 1, 1, 0, 0, 0, -.2, .2);
        this.moji.alpha = .1992;
        this.timeline.addTween(a.Tween.get(this.moji).to({
            regX: 0,
            regY: 0,
            x: 13,
            y: 92,
            alpha: .6016
        }, 2, a.Ease.get(-1)).to({
            regX: .2,
            regY: .1,
            x: 29.2,
            y: 92.1,
            alpha: 1
        }, 2, a.Ease.get(1)).to({
            regX: 0,
            regY: 0,
            x: 31,
            y: 92
        }, 6, a.Ease.get(1)).to({
            _off: !0
        }, 5).wait(15))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-64.2, 91.9, 307.1, 75.5);
    (b.light_3 = function(f, d, e) {
        this.initialize(f, d, e, {
            main: 0,
            loop: 18,
            toop: 31
        });
        this.frame_0 = function() {
            this.visible = !1;
            this.stop()
        };
        this.frame_30 = function() {
            this.gotoAndPlay("loop")
        };
        this.frame_36 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(6).call(this.frame_36).wait(1));
        this.instance = new b.marker_sign_bighit;
        this.instance.parent = this;
        this.instance.setTransform(60.4, -230, 1, 1, 0, 0, 0, 30.3, 9.5);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            _off: !0
        }, 1).wait(36));
        f = new a.Shape;
        f._off = !0;
        d = (new a.Graphics).p("ABwHGQgrgFgHgIIgCgDIABgDIAEAAIAEAAQAKAFAmACQAsADBEgCQBEgCAlgGQATgDAFgDIABgBQAHgDgHgCQgLgCgbABIhxACIgJABIgBABIADADQACABAMAAIA7gCIADAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQgTAEgkABQggABgagBQgZgCgFgDQgCgBAGgDQAOgDAsgCIA1gBQANABAMgBIANgBIADgBIgGgBQgygCg1ACQgjABgfAEIgGAAIAAgBIAAAAQAJgCAAgCQAAgCgEgDIgjgYQgNAEgdACIgGAAIgGgBIgJAAIgQAAIgCgBIADgBIANAAIAXgBQABAAABAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgGAAIgPgBIgJAAIgLAAIgCgBIADAAIANAAQATgBADgBQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIgNAAIgHAAIgQgBIgBAAIAAAAIAAgBIABAAIAAAAIACAAIAFAAQAMgBACgBIABAAIgDgCIADAAIAhgEQgggXgBgCQgGgDgLAAIgBAAQgLAAgGADQAAACgkAYQAXADAaABIACAAIANAAIABABIAAAAIgKABIgHAAIgGABIAEACIAUABIAKAAIADAAIABAAIAAABIgBAAIgSABIgEAAIgQABIgCAAIABABQACABAQAAIAVABIAEAAIABAAIgCABIgUAAQgRAAgDABQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIAVABIAHAAIADAAIABABIgCAAIgZABIgjgCQgXgCgNgEIglAYQgDADAAABQgBABABAAQAAABAAAAQABAAAAABQABAAABABIALACIAIACQAiAIgBAHIAAADQgJAIgsAFQhAAIhbgDQhEgCgtgHQgugIAAgJIACgDQAHgGAWgEIAEAAIACABIAAAAIgBABQABAHA9AGIAXACIAoACQAzACA0gBQASgCACgBQADgBgLgCIgRgCQgJgCgLABIgyAAIgCgBIgBAAQgvgBgMgEIgEgCIACgCIAAAAQAFgDAUgBQAXgBAiABIADAAIArADIABAAQAKABALAAIAHgBIAGAAIAAgBIgDAAQgbgFg2gCIgqgBIgJAAIgDgBIACgBQATgCALgEIATgHQAmgMAygUQgDgDgIgCQgJgDgKAAQgMABgIACIgPAHQgUALgTAFQghAKg6AGQgbACgUAAQgQgBgFgBQgMgEAhgGQAXgEgEgBIgGAAIgLACIABgBQgkAGgxAAQgYAAgMgCQgNgCAEgDQAGgEAjgCQAkgBADgCIAAgBIgJAAQgfADgigBQghgBgQgDQgPgCAFgDQAGgEBIgBQBQgBA/gLQAjgFAlgLIAIgCIABgBIAjgIQAPgDAUAAQAXAAARAHQAJAEARANIAFAEIAIAGIA/gaIABgCQAAgCgFgBQgaACgUgDIgGgBQgXABgRgCQgOgCgDgBIAAgBQgcABgQgCQgJgCgFgCQgGgDAQgCQAPgBANACQANgBAEgDQAFgEAQgDQARgEAVgDIAqgDQAZgBARABQgPgCgNAAQgXABgGgBIgBgBIABgBIAMgBIAUAAIARABQAOABADADIADAAQADgDANgBQAPgDAXACIALABQAAAAABABQAAAAAAAAQAAAAAAAAQgBABAAAAQgKABgSgBQgQAAgMACIABAAQAZgCAuADQAjADAWAEQAVAFAAAFIgBABQgCAFgWAEQgWAEgjADQgWABABAEIABACIA3AXIADgDQARgNAMgGQATgJAYAAQAUAAANACIAfAIIAPAEQAjALAjAFQA/ALBQABQBHABAGAEQAGADgQACQgRADgfABQgjABgfgDIgKAAIAAABQAEACAjABQAjACAGAEQAFADgOACQgLACgZAAQgxAAgjgGIgMgBIgFAAQgEABAWAEQAhAGgLAEQgPAEg2gEQg8gFgggKQgTgFgSgLIgOgIQgIgCgLgBQgPAAgLAFQA0AWApANIATAHIAOAEQASADAUABQBxAFAOAOIABADQAAAJguAIQgtAHhFACIgsABQg/AAgxgGgAARE4IAAAAIAAAAQAUAEAYgCQALgBAAgBIAAAAIgEgBIgBABIAAAAIgCABIgHABQgTABgRgDIgDgBgABpEzQABAAAAAAQABABAAAAQABAAAAAAQAAAAAAAAIACABIADgBIAAAAIADgBIAIAAIAFAAIAFABIACgBIAAAAIgDgBIABAAIAEgBIABAAIgBgBIgEABQgKABgOAAQgOABgQgDIgEAAIgBABIABAAIAIABIACABIgBAAIgBAAIgBABIABAAIACAAIAEgBIAEAAgAghEzIAEABIAAAAIACABIACAAIAAgBIAEgBIALAAIAFAAIADABIACAAIABAAIgDgCIABAAIAHgBIACAAIgBgBIgEAAQgOACgQAAIgSgBIgIgBIgEAAIgBABIABAAIAFABIABAAIgBABIgDAAIAEABIAFgBIAEAAgAHAFfIgFgBIhZgGQATgIAegGQAXgFAigCQAagBAQACQASABAEACQALAFgbADQAAAAgBAAQAAAAAAAAQAAAAABAAQAAAAABAAQAQABAOACQAQACAEACQAGADgLAEQgKACgUABIgZAAQgXAAgcgBgAoLFgQgUgBgJgCQgMgEAGgDQAEgCAQgCQANgCAQgBQACAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAQgagDAKgFQAEgCASgBQAQgCAZABQAjACAYAFQAdAGAUAIIhZAGIgFABQgcABgXAAIgZAAg");
        e = (new a.Graphics).p("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");
        var g = (new a.Graphics).p("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"),
            h = (new a.Graphics).p("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"),
            k = (new a.Graphics).p("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"),
            l = (new a.Graphics).p("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"),
            n = (new a.Graphics).p("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"),
            p = (new a.Graphics).p("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"),
            u = (new a.Graphics).p("ABxHHQgrgGgIgIIgCgDIACgCIADgBIAEABQALAEAlADQAtACBEgCQBEgCAmgGQASgDAFgDIABAAQAHgEgHgCQgKgBgcAAIhxADIgJABIgBABIADACQACABAMAAIA7gCIADABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQgTAEgkABQghABgZgBQgagBgEgDQgDgCAHgCQAOgEAsgCIA1AAQANAAAMgBIANgBIADgBIgGAAQgygDg2ADQgjABgfADIgFAAIgBgBIABAAQAIgCAAgCQAAgCgDgCIgkgYQgNADgdADIgFgBIgHgBIgJAAIgQAAIgCgBIADAAIAOgBIAWAAQACgBAAAAQABAAAAAAQABAAgBAAQAAgBAAAAQAAgBgGAAIgPAAIgJAAIgLgBIgCgBIADAAIANAAQATAAAEgCQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAAgBIgNAAIgGAAIgRgBIgBAAIAAAAIAAAAIABgBIAAAAIACAAIAFAAQAMgBACgBIABAAIgDgCIADAAIAhgEQgggXAAgCQgGgDgMAAIgBAAQgLAAgGADQAAACgkAYQAXADAaABIACAAIANAAIABABIAAAAIgKABIgHAAIgGACIAEABIAVABIAJAAIADAAIABAAIAAABIgBAAIgSABIgEAAIgQABIgCAAIABABQACACAQAAIAVAAIAEAAIABAAIgCABIgUAAQgRAAgDACQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAIAVABIAHAAIADAAIABABIgCAAIgZACIgkgDQgWgCgNgEIglAZQgEACAAACQAAAAAAAAQAAABABAAQAAABABAAQABAAABABIALACIAIACQAiAJgBAGIgBADQgIAIgsAFQhBAIhbgDQhEgCgugHQgugIABgJIABgDQAHgGAWgEIAEAAIADABIAAAAIgBABQAAAIA+AFIAXACIAoACQAzADA0gCQASgBADgCQACgBgKgBIgRgDQgKgBgLAAIgyAAIgCAAIgBAAQgvgCgMgEIgEgCIACgCIAAAAQAFgCAUgCQAXgBAiABIADAAIArADIABAAQALACALgBIAGAAIAGgBIAAAAIgDgBQgagFg3gCIgqgBIgJAAIgDgBIACAAQATgDALgEIAUgGQAmgNAygUQgEgDgIgCQgIgDgKAAQgMABgJACIgPAHQgTALgUAFQghAKg6AGQgcACgTAAQgRAAgFgCQgLgEAhgGQAXgEgEgBIgGAAIgLACIABAAQglAGgwAAQgZgBgMgCQgNgCAEgDQAGgEAkgCQAkgBADgCIAAAAIgJAAQggACgigBQghgBgQgDQgPgCAFgDQAGgEBIgBQBQgBBAgLQAjgFAlgLIAJgCIAAgBIAjgIQAPgDAUAAQAYAAAQAHQAKAEAQANIAFAEIAIAGIA/gbIABgBQAAgCgEgBQgaACgUgDIgHgBQgWABgRgCQgPgCgCgBIAAgBQgcABgRgCQgIgCgGgCQgFgDAQgCQAOgBAOACQANgCAEgCQAFgEAQgDQARgEAVgDIAqgDQAZgBARABQgPgDgOABQgWABgGgBIgCgBIACgBIALgBIAVgBIARABQANACAEADIADAAQADgDANgCQAQgCAXACIAKABQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBABQgJABgTgBQgQgBgMADIABAAQAZgCAuADQAjACAWAFQAWAFgBAEIgBACQgCAFgWAEQgWAEgjADQgVABAAAEIACABIA2AYIADgDQARgNANgGQATgJAYAAQATAAAOACIAfAIIAPAEQAjALAjAFQA/ALBRABQBHABAGAEQAGADgQACQgRADgfABQgjABgggCIgJAAIAAAAQADACAkABQAjACAFAEQAGADgOACQgLACgaABQgwAAgkgGIgLgCIgFAAQgFABAWAEQAhAGgLAEQgOAEg3gEQg8gFgggKQgTgFgSgLIgOgIQgIgCgLgBQgQAAgKAFQA0AWAoAOIATAGIAPAEQASAEAUAAQBxAFAOAOIABADQAAAJgtAIQgtAHhGADIgsAAQhAAAgwgFgAARE3IAAABIAAAAQAUAEAYgCQALgBAAgBIAAAAIgDgBIgCAAIAAABIgCABIgHABQgTABgRgDIgDgBgABpEzQABAAABAAQAAAAABABQAAAAAAAAQABAAAAAAIABABIADgBIAAAAIADgBIAJAAIAEAAIAFAAIADAAIAAAAIgEgBIABAAIAFgBIAAAAIgBgBIgEAAQgJACgPAAQgOABgQgDIgEAAIgBABIABAAIAJABIABABIAAAAIgCAAIgBAAIABABIACAAIAEgBIAEAAgAghEzIAEABIAAAAIABABIADgBIAAAAIAEgBIALAAIAFAAIADABIACAAIABgBIgDgBIABAAIAHgBIACgBIgBAAIgEAAQgOACgRAAIgSgBIgHgBIgEAAIgBAAIAAABIAGABIAAAAIAAABIgDAAIAEAAIAEAAIAFAAgAHCFfIgFgBIhagGQAUgIAdgGQAYgFAigCQAagBAQACQASABAEACQALAFgbADQgBAAAAAAQAAAAAAAAQAAAAAAAAQABAAABAAQAQABAOACQAQACAEACQAGADgLAEQgKACgUABIgZAAQgXAAgcgBgAoNFgQgUgBgJgCQgMgEAGgDQAEgCAQgCQANgCARgBQABAAAAAAQABAAAAAAQAAAAAAAAQgBAAgBAAQgagDAKgFQAEgCASgBQAQgCAaABQAiACAYAFQAeAGAUAIIhaAGIgFABQgbABgXAAIgaAAg");
        this.timeline.addTween(a.Tween.get(f).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(4).to({
            graphics: d,
            x: -3.7155,
            y: 45.9886
        }).wait(1).to({
            graphics: e,
            x: -3.4859,
            y: 63.0372
        }).wait(1).to({
            graphics: g,
            x: -3.5258,
            y: 60.8232
        }).wait(1).to({
            graphics: h,
            x: -3.5498,
            y: 59.4944
        }).wait(1).to({
            graphics: k,
            x: -3.5578,
            y: 59.0509
        }).wait(23).to({
            graphics: l,
            x: -4.6331,
            y: 61.2309
        }).wait(1).to({
            graphics: n,
            x: -4.3677,
            y: 56.1677
        }).wait(1).to({
            graphics: p,
            x: -4.1087,
            y: 51.1041
        }).wait(1).to({
            graphics: u,
            x: -3.8159,
            y: 46.0294
        }).wait(3));
        this.instance_1 = new b.white;
        this.instance_1.parent = this;
        this.instance_1.alpha = 0;
        this.instance_1._off = !0;
        d = [this.instance_1];
        for (e = 0; e < d.length; e++) d[e].mask = f;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(4).to({
            _off: !1
        }, 0).wait(15).to({
            alpha: .0542
        }, 0).wait(1).to({
            alpha: .1845
        }, 0).wait(1).to({
            alpha: .3663
        }, 0).wait(1).to({
            alpha: .5504
        }, 0).wait(1).to({
            alpha: .6869
        }, 0).wait(1).to({
            alpha: .75,
            compositeOperation: NaN
        }, 0).wait(1).to({
            alpha: .6958
        }, 0).wait(1).to({
            alpha: .5655
        }, 0).wait(1).to({
            alpha: .3837
        }, 0).wait(1).to({
                alpha: .1996
            },
            0).wait(1).to({
            alpha: .0631
        }, 0).wait(1).to({
            alpha: 0
        }, 0).wait(7));
        this.bg_mc = new b.bg_mc;
        this.bg_mc.name = "bg_mc";
        this.bg_mc.parent = this;
        this.bg_mc._off = !0;
        d = [this.bg_mc];
        for (e = 0; e < d.length; e++) d[e].mask = f;
        this.timeline.addTween(a.Tween.get(this.bg_mc).wait(4).to({
            _off: !1
        }, 0).wait(33))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-120, -239.5, 240, 365.6);
    (b.light_2 = function(f, d, e) {
        this.initialize(f, d, e, {
            main: 0,
            loop: 18,
            toop: 31
        });
        this.frame_0 = function() {
            this.visible = !1;
            this.stop()
        };
        this.frame_30 =
            function() {
                this.gotoAndPlay("loop")
            };
        this.frame_36 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(6).call(this.frame_36).wait(1));
        this.instance = new b.marker_sign_bighit;
        this.instance.parent = this;
        this.instance.setTransform(-14.6, -230, 1, 1, 0, 0, 0, 30.3, 9.5);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            _off: !0
        }, 1).wait(36));
        f = new a.Shape;
        f._off = !0;
        d = (new a.Graphics).p("ADWHnQhVgDgzgTQgzgTANgXQANgXBFgOQBGgOBUAEQBVAEAzATQAzASgNAYQgMAXhGANQg2ALhAAAIgkgBgAlmHdQhGgNgOgXQgPgYAzgSQAygTBVgEQBUgEBGAOQBGAOAOAXQAOAXgyATQgyAThVADIgjABQhAAAg3gLgAAnFtQgPgBgDgDIAAgBIAAgBIACAAIABAAQAEACAMAAQAPABAYAAQAXgBANgCIAIgCIAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIgNgBIgmABIgEABIAAAAIABABIAFAAIAUgBIABABIAAAAQgGABgNAAIgTAAQgJAAgCgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQAEgCAPAAIASgBIAJAAIAEAAIABAAIgCAAQgRgBgSAAIgWACIgCAAIAAAAIAAAAIADgCIgBgBIgNgIIgOACIgCAAIgCgBIgDAAIgGAAIAAAAIABAAIAEAAIAIgBIABAAIgCgBIgFAAIgDAAIgEAAIAAAAIABAAIAEAAIAIgBIAAAAIAAAAIgEgBIgCAAIgGAAIgBAAIAAAAIAAAAIACAAIABAAIAFgBIAAAAIgBAAIABgBIAMgBQgLgIAAgBIgGgBIgBAAIgFABIgMAJIAQACIABAAIAEAAIABAAIgBAAIgDAAIgDAAIgBABIABAAIAHABIAEAAIABAAIAAAAIgBAAIgGAAIgBAAIgFABIgBAAIABAAIAFABIAHAAIABAAIABAAIgBAAIgHAAIgGABIABAAIAGAAIACAAIABABIABAAIgBAAIgIAAIgMAAIgMgCIgNAIIgBABIABABIAEABIADABQALADAAACIAAABQgDADgPABQgWADgfgBQgXgBgPgCQgQgDAAgDIABgBQACgCAHgBIACAAIAAAAIAAAAQABADAUACIAIAAIAOABIAjAAIAHAAIgDgBIgFgBIgHgBIgSAAIAAAAQgRAAgEgCIgBAAIABgBIAAAAIAIgBIATAAIABAAIAPABIAIAAIACAAIACAAIAAAAIgBgBIgbgCIgPAAIgDAAIgBgBIABAAIAKgCIAHgCIAegLIgEgCIgHgBIgHABIgFACQgGAEgHACQgLADgUACIgQABIgHgBQgEgBALgCQAIgCgCAAIgCAAIgDABIAAAAQgNACgQAAIgNgBQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAAAQACgBANgBIANgBIAAAAIgDAAIgXAAIgQgBQgBAAgBAAQgBgBgBAAQAAAAAAAAQAAgBAAAAQADgBAYAAQAbgBAWgDQAMgCANgEIADgBIAMgDIALgBQAJAAAFADIAJAGIACABIACACIAWgJIAAgBIgCgBQgJABgGgBIgDAAIgNgBIgFgBIAAAAIgQAAIgEgCQgBAAAAAAQAAAAAAgBQABAAABAAQABAAABAAIAKAAIAFgCIAIgCIANgCIAOgBIAOAAIgKgBIgJAAIgBAAIABgBIAEAAIAGAAIAGAAQAFABABABIABAAQAAgBAFgBIANAAIAEAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIgKAAIgKABIABAAIAYAAIAUACQAHACAAACIgBAAQAAACgIABIgTADQgIAAAAABIABABIATAIIABgBIAKgGQAGgEAIAAIAMABIAKADIAFABQAMAEAMACQAWADAbABQAYAAADABQAAAAAAABQAAAAgBAAQAAAAgBABQgBAAgBAAIgQABIgXAAIgEAAIAAAAIAOABQAMABABABQABAAAAAAQAAABAAAAQgBAAAAAAQgBABgBAAIgNABQgQAAgMgCIgEgBIgCAAIAGACQALACgDABQgFACgTgCQgUgCgLgDQgHgCgGgDIgFgDIgGgBQgGAAgDACIAgAMIAGACIAFABIANACQAmABAFAFIAAABQAAADgPADQgPACgYABIgQAAQgVAAgQgCgAAGE9IAAAAQAHABAJAAIADgBIgBAAIgBAAIAAAAIAAAAIgDAAIgMAAIgBAAgAAkE7IABABIABAAIABAAIAAgBIABAAIADAAIADAAIABAAIAAAAIgBAAIAAAAIACAAIAAgBIAAAAIgCAAIgIABIgKgBIgCAAIAAABIAEAAIgBAAIAAAAIABABIABgBIABAAgAgHE8IAAgBIABAAIAEAAIACAAIAAAAIABAAIAAAAIgBAAIAAAAIADgBIAAAAIgCAAIgJABIgGAAIgDgBIgBAAIgBAAIABABIABAAIABAAIgCAAIACAAIABAAIACAAIADAAIABAAIAAABIABAAIABAAgAEqFlQhMgLgbgWQgbgWAmgVQAmgVBSgHQBRgHBNAKQBNALAbAWQAbAXgmAUQgnAVhRAHQghADggAAQgwAAgugGgAnFFoQhSgHgngVQgogUAagXQAagWBMgLQBMgKBSAHQBSAHAoAVQAnAVgaAWQgaAWhMALQgtAGgwAAQggAAghgDgACZFKIgBAAIgfgCIARgFIAUgCIAOAAIAHABQAEACgJABQgBAAABAAIAKABIAHABQABAAAAABQAAAAAAAAQAAAAgBABQgBAAgBAAIgKABIgJABIgRgBgAixFKIgKgBQgBAAgBAAQAAgBgBAAQAAAAAAAAQAAgBABAAIAHgBIAKgBQABAAgBAAQgJgBADgCIAIgBIAOAAIAUACIARAFIgfACIgBAAIgRABIgJgBgAiTENQg9gQgBgYQAAgXA8gRQA8gQBWAAQBWAAA9AQQA9ARABAXQAAAYg8AQQg8ARhWAAQhWAAg9gRg");
        e = (new a.Graphics).p("AJfLFQjxgLiRg1QiRg2AmhBQAjhCDFgnQDFgnDvALQDxAKCRA2QCRA1gmBCQgjBBjFAnQibAfi0AAQgxAAg0gCgAv5KoQjHgngmhBQgphCCOg1QCOg2DwgKQDvgLDHAnQDGAnAnBCQApBBiOA2QiOA1jwALQg0ACgxAAQi0AAidgfgABuFrQgpgGgIgHIgCgDIACgCIADgBIAFAAQAJAFAkACQArADBCgCQBCgCAjgGQATgDAEgDIACAAQAGgEgHgBQgKgCgbAAIhsADIgKABIAAABIADACQACABAMAAIA4gCIAEABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgSAEgkABQggABgYgBQgYgCgFgCQgCgCAHgCQAMgEArgCIAzAAQANAAALgBIANgBIACAAIgGgBQgvgCg0ACQgiABgeADIgEAAIgCAAIACgBQAIgCAAgCQAAgCgEgCIgigXQgNADgbADIgGAAIgGgBIgIAAIgSgBIAAgBIADAAIAMAAIAWgBQACAAAAAAQABAAAAgBQABAAgBAAQAAAAAAAAQAAgBgGgBIgOAAIgIAAIgMAAIgBgBIACAAIANAAIAWgCIABgBIAAgBIgLAAIgHAAIgRgBIgBAAIgBAAIAAgBIAFAAIAEgBQAMAAABgBIABAAIgCgBIACgBIAggEQgegWAAgCQgGgDgMAAIgBAAQgKAAgGADQAAACgiAXQAWADAYABIADAAIAMAAIACABIgCAAQAAABgJAAIgHAAIgGABIAFACIAUABIALAAIACAAIAAABIgCAAIgRABIgDAAIgQAAIgCABIABAAQACACAQAAIAUAAIADABIABAAIgCAAIgTABQgQAAgDABIABACIAVAAIAGAAIACABIACAAIgCABIgYABQgRgBgRgBQgWgDgNgDIgkAXQgBABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAABQABAAAAAAQABABABAAIALADIAHACQAhAHAAAHIgBADQgIAHgqAFQg/AIhYgDQhCgCgrgHQgtgHABgJIACgDQAGgFAVgEIAEgBIACABIAAABQAAAIA8AFIAWACIAmACQAyACAygBQARgCACgBQACgBgJgBIgQgDQgJgCgLABIgwAAIgDgBQgugBgMgEIgDgCIACgBIAAgBQAFgCATgBQAWgBAhABIACAAIArADQAKABALgBIAHAAIAFgBIAAAAIgDgBQgagEg0gCIgogBIgJAAIgDgBIABgBQAUgCAKgEIASgGQAlgMAwgTQgDgEgHgCQgIgCgLAAQgLAAgIADIgPAHQgTAKgSAFQggAJg4AGQgbACgTAAQgQAAgFgCQgKgEAggFQAWgFgFAAIgGAAIgKABIABAAQgjAGgvAAQgYgBgMgBQgLgDADgCQAGgEAigCQAjgBAEgCIAAAAIgKAAQgeACghgBQgggBgPgDQgPgCAFgDQAHgEBEAAQBNgBA9gLQAjgFAkgKIAJgDIAhgIQAOgDAUAAQAXAAAPAHQAJAEAQAMIAGAEQACADAFADIA8gaIACgBQAAgCgFgBQgaACgSgDIgHgBQgVABgQgCQgOgBgCgCIgBgBQgbABgPgCIgOgDQgGgEAQgBQAOgCANACQAMgBAEgDQAFgDAPgEQAQgDAVgCQATgDAWAAQAYgBAQABQgOgDgOAAQgUABgGgBIgDgBIADgBIAKgBIAUAAIAQABQAOABADADIADAAQACgDAOgBQAOgCAWABIAKABQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQgJABgRgBQgPAAgNACIABAAQAYgCAsADQAiADAWAEQAVAEgBAFIgBACQgCAEgVAEQgWAFghACQgVABAAAEIACABIA1AXIACgDQARgMAMgGQASgJAXAAQAUAAANACIAeAIIAOAEQAiAKAhAFQA9AKBOACQBFAAAGAEQAFADgPACQgRADgeABQghABgfgCIgKAAIAAAAQAEACAjABQAhACAFAEQAGACgOADQgKABgZABQgvAAgigGIgMgBIgEAAQgEAAAVAFQAgAFgLAEQgNAEg2gEQg5gFgfgJQgTgFgRgLIgNgHQgIgDgLAAQgPAAgKAFQAyAVAoANIARAGIAOAEQASADATABQBtAFANANIACADQAAAJgsAHQgsAHhDADIgrAAQg9AAgugFgAASDhIAAAAQAUAFAXgDQAKgBAAgBIgDAAIgCAAIAAAAIgCABIgHABQgSABgQgDIgDAAgABmDdQABAAABAAQABAAAAAAQABAAAAAAQAAAAAAABIACAAIADAAIAAgBIADgBIAIAAIAJABIADAAIAAgBIgEAAIABgBIAEAAIABgBIgBAAIgEAAQgJACgOAAQgOAAgPgCIgEAAIAAABIAKABIgDABIABAAIACAAIAEAAIADgBgAgXDeIAAgBIAFAAIAKgBIAFAAIACABIADAAIABAAIgEgBIABAAIAKgCIgBAAIgFAAQgNACgQAAIgRgBIgHgBIgEAAIgCAAIABABIAFAAIABABIgEABIAEAAIAEgBIAFAAIAJAAIAEABIAAABIABAAIACAAgANNFTQjYgehNhAQhNg/Bsg6QBtg7DngVQDngUDZAeQDbAdBNBAQBNA/huA7QhsA7jnAUQheAJhbAAQiHAAiCgSgA0GFcQjogUhvg7Qhxg7BKg/QBJhADZgdQDYgeDoAUQDoAVBxA7QBuA6hKA/QhJBAjXAeQiBASiHAAQhbAAhegJgAGzEHIgFgBIhWgGQATgHAcgHQAXgEAhgCQAYgBAQACQASABADACQALAEgaADQgBAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAQARAAAMACQARACADACQAGADgMADQgJADgTABIgZAAIgwgBgAn3EIQgUgBgJgDQgMgDAGgDQADgCAQgCQANgCAQAAQABAAABAAQAAAAAAAAQAAAAAAgBQgBAAgBAAQgZgDAKgEQAEgCARgBQAQgCAYABQAhACAXAEQAdAHATAHIhWAGIgEABIgwABIgZAAgAmhBaQiugvgChBQgChCCsgvQCqgvD0AAQDzAACtAvQCuAvABBCQACBBirAvQiqAvj0AAQj0AAisgvg");
        var g = (new a.Graphics).p("AIsKoQjdgJiEgxQiFgxAig9QAhg7C0gkQC0gkDbAKQDdAJCFAxQCEAxgiA8QghA8i0AkQiNAcimAAQgtAAgvgCgAujKOQi2gkgkg8Qglg8CCgxQCCgxDcgJQDagKC3AkQC2AkAjA7QAmA9iCAxQiCAxjdAJQgvACgtAAQilAAiPgcgABkFrQglgFgHgHIgCgCIABgDIAEAAIAEAAQAIAEAhACQAoADA8gCQA8gCAhgFQARgDAEgDIABAAQAHgDgHgCQgJgBgZAAIhjADIgJAAIAAABIACACQADACAKgBIA0gBIADAAQABAAgBABQgRADggABQgdABgWgBQgXgBgEgDQgCgBAGgDQAMgDAngBIAvgBQALABALgCIALAAIADgBIgGAAQgrgDgwACQgfACgbACIgEAAIgBAAIABAAQAHgCAAgCQAAgBAAAAQgBgBAAAAQAAAAgBgBQgBAAAAgBIgggVQgLADgaACIgFAAIgFgBIgIAAIgQgBIAAAAIACAAIAMgBIAUAAQABAAABgBQABAAAAAAQAAAAAAAAQAAAAgBAAQAAgBgFgBIgNAAIgHAAIgLAAIgBgBIACAAIAMAAIAUgCIABgBIAAAAIgLgBIgGAAIgPgBIgBAAIgBAAIAAAAIAEgBIAFAAQAKAAABgBIABAAIgCgCIACAAIAegDQgcgVAAgCQgGgCgKAAIgBAAQgKAAgFACQAAACgfAVQAUADAWAAIACAAIAMABIABABIgBAAQAAAAgJAAIgGABIgFABIAEABIASABIALAAIABAAIAAABIgBAAIgQABIgDAAIgOAAIgCABIABAAQABACAPAAIASAAIADABIABAAIgCAAIgRAAQgPAAgDACIABABIATABIAGAAIACAAIACABIgCAAIgWABIgfgCQgVgCgLgDIgiAVQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQABAAABAAIAKADIAHABQAdAIABAGIgBACQgIAHgnAFQg5AHhQgDQg9gCgngGQgqgHABgIIACgDQAFgFAUgDIADAAIADAAIAAABQAAAHA2AFIAUACIAjACQAuACAtgCQAQgBACgBQACgBgIgBIgPgDQgIgBgKAAIgtAAIgCAAQgqgCgLgDIgDgCIACgBIAAgBQAEgCASgBQAUgBAeABIACAAIAoADQAJABAKgBIAGAAIAFAAIAAgBIgDgBQgXgDgwgDIglAAIgIAAIgDgBIABgBQASgCAKgDIAQgGQAigLAsgSQgDgDgHgCQgHgCgKAAQgKABgIACIgNAGQgRAKgRAEQgdAJgzAFQgZACgRAAQgPgBgEgBQgKgDAdgGQAVgDgFgBIgFAAIgKABIACAAQghAGgrAAQgWgBgLgBQgKgDADgCQAFgDAggCQAggBADgCIAAAAIgJAAQgbABgfgBQgdAAgNgDQgOgBAEgDQAGgEA/AAQBHgBA4gKQAfgFAhgJIAIgCIAfgIQANgDASAAQAVAAAOAHQAIAEAOALIAGADQACADAEACIA4gXIABgBQAAgCgEgBQgYACgRgDIgGgBQgTABgPgCQgNgBgCgBIAAgBQgZABgOgCIgNgDQgFgDAOgCQANgBAMACQALgBADgDQAGgDANgDQAPgEATgCQARgCAUAAQAWgBAPABQgMgDgNABQgTABgGgCIgCAAIACgBIAKgBIASAAIAPAAQANACADACIACAAQACgCANgCQAMgCAVACIAJABQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQgIABgQAAQgOgBgMACIABAAQAXgBAoACQAfADAUADQATAEgBAFIgBABQgCAEgTAEQgUAEgeACQgTABAAAEIACABIAwAVIACgDQAQgLAKgFQARgIAVgBQASAAAMACIAcAHIAMAEQAfAJAfAFQA4AKBHABQA/AAAGAEQAEACgOACQgOADgcAAQgfABgcgBIgJAAIAAAAQADACAgABQAfACAEADQAGACgNADQgKABgWABQgrAAgfgGIgLgBIgEAAQgDABATADQAdAGgKADQgMAEgxgEQg0gEgdgJQgRgFgQgJIgMgHQgIgCgJgBQgOAAgJAFQAuATAkAMIAQAGIANADQAQADASABQBkAEAMAMIABADQAAAIgoAHQgoAGg+ACIgoABQg3AAgrgFgAARDtIAAAAQASAEAVgCQAJgBAAgBIgDAAIgCAAIAAAAIgBABIgGABQgRABgPgDIgCAAgABeDpQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAIACAAIACAAIAAgBIADAAIAIAAIAIAAIACAAIAAAAIgDgBIABAAIADgBIACAAIgCgBIgDABQgIABgNAAQgNABgNgDIgFAAIAAABIAKACIgDAAIABAAIACABIADgBIADAAgAgVDqIAAgBIAFAAIAJAAIAEAAIACAAIADAAIABAAIgEgBIABAAIAJgBIgBgBIgEAAQgMACgPAAIgQgBIgGgBIgDAAIgCABIABAAIAEABIABAAIgDABIADAAIAEAAIAEAAIAJAAIADAAIAAABIABAAIACAAgAMGFVQjGgbhGg6QhHg6Bjg2QBkg2DUgTQDTgSDHAbQDIAbBHA6QBGA6hkA2QhkA2jTATQhWAHhTAAQh8AAh3gQgAyZFeQjVgThmg2Qhng2BDg6QBDg6DHgbQDGgbDUASQDVATBnA2QBlA2hDA6QhEA6jEAbQh3AQh7AAQhUAAhVgHgAGOEPIgEAAIhPgFQARgHAagGQAVgEAegCQAWgBAPABQAQACADACQAKAEgXACQgDABADAAQAPAAALACQAPACADABQAGAEgLACQgIADgSAAIgXABIgsgCgAnNEQQgSAAgIgDQgLgCAFgEQADgBAPgCQAMgCAPAAQADAAgDgBQgYgCAKgEQADgCAQgCQAOgBAXABQAdACAWAEQAaAGASAHIhPAFIgEAAIgsACIgXgBgAl+BxQifgrgCg8QgBg8CcgrQCcgrDgAAQDfAACeArQCfArABA8QACA8idArQicArjeAAQjgAAiegrg"),
            h = (new a.Graphics).p("AINKXQjQgJh+guQh9gvAhg5QAeg4CrgiQCqgiDPAJQDQAJB+AvQB9AughA5QgeA4irAiQiFAbicAAQgrAAgtgCgAtwJ+Qisgighg4Qgkg5B7guQB7gvDQgJQDOgJCtAiQCsAiAhA4QAkA5h7AvQh7AujQAJQgtACgqAAQidAAiHgbgABfFrQgjgEgHgHIgCgCIABgCIADgBIAEAAQAJAEAfACQAlACA5gBQA5gCAfgFQAQgDAEgCIABAAQAGgDgGgCQgJgBgYAAIheACIgIABIAAABIACACQADABAKAAIAxgCIADABQABAAgBAAQgQADgfABQgbABgVgBQgWgBgEgDQgCgBAGgCQALgDAlgCIAsAAQALAAAKgBIALAAIACgBIgFAAQgpgCgtABQgdACgaACIgEAAIgBAAIABgBQAHgBAAgCQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBgBIgegUQgLADgYACIgFAAIgFgBIgHAAIgPAAIAAgBIACAAIALAAIATgBQABAAABAAQABAAAAAAQAAgBAAAAQAAAAgBAAQAAgBgFAAIgMAAIgHAAIgKgBIgBAAIACgBIALAAIATgBIABgBIAAgBIgKAAIgGAAIgOgBIgBAAIgBAAIAAAAIAEgBIAEAAIALgBIABAAIgCgCIACAAIAcgDQgbgTAAgDQgFgCgKAAIgBAAQgJAAgFACQAAACgdAUQATADAVAAIACAAIALABIABABIgBAAQAAAAgIAAIgGABIgFABIAEABIARABIAKAAIABAAIAAAAIgBAAIgPACIgDAAIgNAAIgCABIABAAQABABAOAAIARABIADAAIABAAIgCABIgQAAQgOAAgDABIABABIASABIAFAAIACAAIACABIgCAAIgVABIgdgCQgTgCgLgDIgfAUIgCAEQgBAAAAAAQABABAAAAQAAABABAAQAAAAABAAIAKADIAGABQAcAHAAAGIgBACQgGAHglAEQg2AHhNgDQg5gBglgHQgngGABgIIACgCQAEgFATgDIADgBIACABIAAABQABAGAzAFIATACIAhACQArABArgBQAPgBACgBQACgBgIgBIgOgCQgIgCgJABIgqgBIgCAAQgogBgKgDIgDgCIACgBIAAgBQAEgCARgBQATgBAcABIACAAIAlADQAJABAJgBIAGAAIAFgBIAAAAIgDgBQgWgDgugCIgjgBIgHAAIgDgBIABAAQARgCAJgDIAQgGQAggKAqgRQgEgDgGgCQgHgCgJAAQgKABgHACIgMAGQgQAJgQAEQgcAIgwAFQgYACgQAAQgOgBgEgBQgJgDAcgFQATgEgEgBIgFABIgJABIABAAQgfAFgoAAIgfgCQgLgCADgDQAFgDAegBQAegBADgCIAAAAIgIAAQgaABgdAAQgbgBgNgCQgNgCAEgDQAGgDA7gBQBDAAA1gJQAegFAfgJIAIgCIAdgIQALgCASAAQAUAAANAGQAIAEANAKIAFAEQACACAEADIA1gWIABgCQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAgBAAQgWABgQgCIgGgBQgSABgOgCQgMgBgDgBIAAgBQgYABgNgCIgMgDQgFgDAOgBQAMgCALACQALgBADgCQAFgDANgDQAOgDASgCQAQgCATgBQAVgBAOABQgMgCgMAAQgSABgFgBIgCgBIACgBIAJAAIARgBIAOABQAMABADADIACAAQACgDAMgBQAMgCATACIAJAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIgXAAQgNAAgLACIABAAQAVgCAmADQAdACATADQATAEgBAEIgBACQgCAEgSADQgTAEgdACQgSABAAADIACACIAuATIACgCQAOgLAKgFQAQgHAUgBQARAAALACIAaAHIAMADQAeAJAdAFQA0AIBDABQA9ABAFADQAEADgNACQgOACgaABQgdAAgbgBIgIAAIAAAAQADACAeABQAdABAEADQAFADgMACQgJABgVABQgpAAgdgFIgKgBIgEgBQgDABASAEQAbAFgJADQgMAEgugEQgxgEgbgIQgRgFgPgJIgLgGQgHgCgJgBQgNAAgJAEQArATAjALIAPAGIAMADQAPADARAAQBfAEALAMIABACQAAAIgmAGQgmAHg6ABIgmABQg0AAgogFgAAQD0IAAABQARADAUgCQAJgBAAgBIgDAAIgCAAIAAABIgBAAIgGABQgQABgOgDIgCAAgABZDwQAAAAABABQABAAAAAAQAAAAABAAQAAAAAAAAIACABIACgBIAAAAIADgBIAHAAIAIABIACgBIAAAAIgDAAIABgBIADAAIABgBIgBAAIgDAAQgIACgMAAQgMAAgNgCIgEAAIAAABIAJABIgDABIABAAIACAAIADgBIADAAgAgTDyIAAgBIAEgBIAJAAIAEAAIACABIACAAIABAAIgDgBIAAAAIAIgCIgBAAIgEAAQgKACgPAAIgPgBIgGgBIgDAAIgCAAIABABIAEAAIABABIgDAAIADABIAEgBIAEAAIAIAAIAEABIAAAAIABABIACAAgALbFWQi7gZhCg3QhDg3BdgyQBfg0DIgRQDIgSC8AaQC9AaBCA2QBDA3hfAzQheAzjIASQhQAHhPAAQh1AAhxgQgAxZFfQjIgShhgzQhhgzA/g3QBAg2C8gaQC6gaDJASQDJARBhA0QBgAyhAA3Qg/A3i6AZQhwAQh1AAQhOAAhSgHgAF4EVIgEgBIhKgFQAQgGAZgGQAUgEAcgBQAVgBAOABQAPABADACQAJAEgWACQgDABADAAQAOAAALACQAOABADACQAFADgKADQgIACgRABIgVAAIgqgBgAmzEWQgRgBgIgCQgKgDAEgDQADgCAOgBQALgCAOAAQADAAgDgBQgWgCAJgEQADgCAPgBQAOgBAVABQAcABAUAEQAaAGAQAGIhKAFIgEABIgqABIgVAAgAlpB/QiWgogCg5QgBg5CUgoQCTgpDTAAQDTAACVApQCWAoACA5QABA5iUAoQiTApjSAAQjUAAiVgpg"),
            k = (new a.Graphics).p("AIDKRQjMgJh7gtQh7guAgg3QAeg4CnghQCnghDKAJQDNAJB7AtQB7AuggA3QgeA4inAhQiDAaiZAAQgqAAgsgCgAtfJ5Qioghghg4Qgjg3B5guQB4gtDMgJQDKgJCpAhQCpAhAhA4QAjA3h5AuQh4AtjNAJQgrACgqAAQiZAAiFgagABdFrQgigEgHgHIgCgCIABgCIADAAIAEAAQAIAEAfACQAkACA4gCQA4gCAegFQAQgCAEgDIABAAQAGgDgGgBQgJgCgXAAIhcADIgIABIAAAAIACACQACACAKgBIAwgBIADAAQABAAgBABQgQADgeABQgbABgUgCQgVgBgEgCQgCgBAGgCQALgEAkgBIArAAQALAAAKgBIALgBIACAAIgFgBQgpgCgsACQgcABgaADIgEAAIgBgBIABAAQAHgCAAgBQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBgBIgdgUQgLADgXACIgFAAIgFgBIgHAAIgPAAIAAgBIACAAIALAAIATgBQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgFAAIgMAAIgHAAIgKgBIgBAAIACAAIALAAIATgCIABgBIAAAAIgKgBIgGAAIgOAAIgBAAIgBgBIAAAAIAEgBIAEAAIALgBIABAAIgCgBIACgBIAbgDQgagSAAgDQgFgCgKAAIgBAAQgJAAgEACQAAACgdAUQASADAVAAIACAAIALAAIABABIgBAAQAAABgIAAIgGAAIgFABIAEABIARABIAKAAIABAAIAAABIgBAAIgPABIgDAAIgNAAIgCABIABAAQABABAOAAIARABIADAAIABAAIgCABIgQAAQgOAAgDABIABABIASABIAFAAIACAAIACABIgCAAIgVABIgcgCQgTgCgLgDIgfAUIgBADQgBABAAAAQAAABABAAQAAAAAAAAQABABABAAIAJACIAGACQAcAGAAAGIgBACQgGAHglAEQg1AHhKgDQg4gBglgHQgmgGABgHIABgDQAFgEATgEIADAAIACABIAAABQAAAGAyAFIATABIAgACQArACAqgCQAOgBACgBQACgBgIgBIgNgCQgIgBgJAAIgpAAIgCAAQgogCgKgDIgDgCIACgBIAAAAQAEgCARgBQATgBAbABIACAAIAkACQAJABAJAAIAGAAIAFgBIAAAAIgDgBQgWgDgsgDIgiAAIgHAAIgDgBIABAAQAQgCAJgEIAQgFQAfgKApgRQgDgCgGgCQgHgCgJAAQgKAAgHADIgMAFQgQAJgPAEQgcAIgvAFQgXACgQAAQgOgBgEgBQgJgDAcgFQASgEgEAAIgEAAIgJABIABAAQgfAFgnAAIgegCQgKgCADgCQAEgDAegCQAdgBADgCIAAAAIgIAAQgZACgdgBQgagBgNgCQgNgCAEgCQAGgDA6gBQBCgBAzgJQAegEAegJIAIgCIAcgHQAMgCARAAQATAAANAFQAIAEANAKIAFAEQACACAEACIA0gVIABgCQAAAAgBAAQAAgBAAAAQgBAAgBAAQAAgBgBAAQgWACgQgDIgGgBQgRABgOgBQgMgCgCgBIAAgBQgYABgMgCIgMgDQgFgCANgCQAMgBALACQALgBADgDQAFgDAMgCQAOgEASgCQAPgBATgBQAUgBAOABQgMgCgLAAQgSABgFgBIgCgBIACgBIAJgBIARAAIANABQAMABADADIACAAQACgDAMgBQALgCATABIAJABQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAIgXAAQgMAAgLABIABAAQAVgBAlADQAcACATADQASAEgBAEIgBABQgCAEgRADQgTAEgcACQgSABAAADIACACIAtATIACgCQAOgLAKgFQAPgHAUAAQARgBALACIAZAHIAMADQAdAJAcAEQA0AJBCABQA7ABAFADQAEACgNACQgOACgZABQgdABgagCIgIAAIAAAAQADACAdABQAdACAEADQAFACgMACQgJACgUAAQgpAAgcgFIgKgBIgEAAQgDAAASAEQAaAFgIADQgMADgtgDQgxgEgagIQgQgEgPgJIgLgGQgHgDgJAAQgNAAgIAEQAqASAiALIAPAFIAMADQAPADAQABQBdAEALALIABADQAAAHglAGQglAHg5ABIglABQgzAAgogFgAAPD2IAAABQARADAUgBQAJgBAAgBIgDgBIgCAAIAAABIgBAAIgGABQgQABgOgCIgCgBgABXDzQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIACAAIACAAIAAgBIADAAIAHgBIAIABIABAAIAAAAIgCgBIAAAAIADgBIABAAIgBAAIgDAAQgHABgMAAQgMABgNgCIgEAAIAAAAIAJABIgDABIABAAIACAAIADAAIADAAgAgTD0IAAgBIAEAAIAJAAIAEAAIACAAIACAAIABAAIgDgBIAAAAIAIgBIgBAAIgEAAQgKABgOAAIgPgBIgGAAIgDgBIgCABIABAAIAEABIABAAIgDABIADAAIAEAAIAEgBIAIABIADAAIAAABIABAAIACAAgALNFXQi3gahBg1QhCg2BbgxQBdgzDEgRQDEgRC5AZQC5AZBBA2QBCA2hdAyQhcAyjEARQhQAHhNAAQhyAAhvgPgAxDFfQjFgRhegyQhggyA+g2QA/g2C4gZQC3gZDFARQDFARBfAzQBeAxg+A2Qg/A1i2AaQhuAPhyAAQhNAAhQgHgAFxEWIgEAAIhJgFQAQgGAYgGQAUgEAbgBQAVgBANABQAPACADABQAJAEgVACQgDABADAAQANAAALACQAOABADACQAFADgKADQgIACgQAAIgVABIgpgCgAmrEXQgRAAgHgCQgKgDAFgDQACgCAOgBQALgCAOAAQADAAgDgBQgWgCAJgEQADgBAOgCQAOgBAVABQAbABAUAEQAZAGAQAGIhJAFIgEAAIgpACIgVgBgAliCEQiTgogCg4QgBg3CRgoQCQgoDQAAQDOAACSAoQCUAoABA3QACA4iSAoQiQAojOAAQjQAAiSgog"),
            l = (new a.Graphics).p("AHvKkQjFgIh2gsQh3gsAfg1QAdg2ChggQCiggDDAJQDFAIB2AsQB3AsgfA2QgdA1iiAgQh+AZiTAAQgpAAgqgCgAtAKNQijgggfg1Qgig2B1gsQB0gsDFgIQDCgJCjAgQCjAgAfA2QAhA1h0AsQh0AsjFAIQgqACgoAAQiUAAh/gZgABZGKQghgFgHgGIgBgCIABgCIADgBIAEAAQAHAEAeACQAjACA2gCQA2gBAdgFQAPgDAEgCIABAAQAFgDgFgBQgJgBgWAAIhZACIgHABIAAAAIACACQACABAJAAIAugBIADAAQABAAgBAAQgPAEgdAAQgaABgTgBQgUgBgEgCQgBgBAAAAQAAAAABgBQAAAAABgBQABAAABAAQALgDAjgCIApAAQALAAAJgBIALgBIACAAIgFAAQgngCgrABQgbABgZADIgDAAIgBgBIABAAQAGgCAAgBQAAgBAAAAQAAAAgBgBQAAAAAAgBQgBAAgBAAIgcgUQgKADgXACIgEAAIgFgBIgHAAIgOAAIAAgBIACAAIAKAAIASgBQABAAABAAQAAAAABAAQAAAAAAgBQAAAAgBAAIgFgBIgLAAIgHAAIgJgBIgBAAIACAAIAKAAIASgCIABgBIAAAAIgJgBIgGAAIgNAAIgBAAIgBAAIAAgBIAEAAIADAAIALgCIABAAIgCgBIACAAIAagDQgZgSAAgCQgFgDgJAAIgBAAQgJAAgEADQAAABgcATQASADAUAAIACAAIAKABIABAAIgBAAQAAABgIAAIgFAAIgFABIAEACIAQAAIAJAAIABABIAAAAIgBAAIgOABIgDAAIgMAAIgCABIABAAQABABANAAIARABIACAAIABAAIgCABIgPAAQgNAAgDABIABABIARABIAFAAIACAAIACABIgCAAIgUABIgbgCQgSgCgLgDIgeAUIgCADQAAAAAAAAQAAABABAAQAAAAAAABQABAAAAAAIAKACIAGACQAaAGAAAGIAAACQgHAGgjAEQgzAHhIgDQg2gBgjgGQglgGABgHIACgDQAEgEASgEIADAAIACABIAAABQAAAGAwAEIASACIAgABQAoACApgBQAOgBACgBQACgBgIgBIgNgCQgHgCgJABIgoAAIgCgBQgmgBgJgDIgDgCIACgBIAAAAQAEgCAQgBQASgBAaABIACAAIAjACQAJACAIgBIAGAAIAFgBIAAAAIgDgBQgVgDgrgCIghgBIgHAAIgCgBIABAAQAQgCAIgDIAPgFQAegKAogQQgDgCgGgCQgHgCgIAAQgKAAgGADIgMAFQgPAIgPAFQgbAHgtAFQgXACgPgBQgNAAgEgBQgJgDAbgFQASgDgEgBIgFAAIgIABIABAAQgeAFgmAAIgdgCQgJgCACgCQAFgDAcgCQAdgBADgBIAAAAIgIAAQgZABgbgBQgaAAgMgCQgMgCADgDQAGgDA4AAQA/gBAygIQAdgFAdgIIAHgCIAbgHQAMgCAQAAQATAAAMAFQAIAEAMAKIAFADQACACAEACIAygUIABgCQAAAAgBAAQAAgBAAAAQgBAAgBAAQAAgBgBAAQgVACgPgDIgGgBQgRABgNgBQgMgCgBgBIgBAAQgWAAgNgBIgLgDQgFgDANgBQAMgBAKABQALgBACgCQAFgDAMgDQANgDARgCIAigCQATgBAOABQgMgCgLAAQgRABgFgBIgCgBIACAAIAJgBIAQgBIANABQALABADADIACAAQACgDALgBQAMgCASACIAIABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIgWAAQgMAAgKACIABAAQAUgCAkADQAbACASADQARAEgBAEIgBABQgBADgRAEQgSADgcACQgRABAAADIACACIArASIACgCQAOgLAKgEQAOgHATAAQARgBAKACIAZAHIALADQAcAIAbAFQAyAIA/ABQA5AAAFADQAEADgNACQgNACgYAAQgcABgZgBIgIAAIAAAAQADABAcABQAcACAEADQAEACgLACQgIACgUAAQgnAAgcgFIgJgBIgEAAQgDABARADQAaAFgIADQgMADgrgDQgvgEgagIQgPgEgOgJIgLgFQgGgDgJAAQgMAAgJAEQApARAhALIAOAFIAMADQAOADAQABQBZADALALIABADQAAAHgkAGQgkAGg3ABIgjABQgyAAgmgEgAAPEZIAAAAQAQAEATgCQAIgBAAgBIgDgBIgBABIAAAAIgBABIgGAAQgPABgNgCIgCgBgABUEVIADABIABAAIACAAIAAAAIADgBIAHAAIAHABIACgBIAAAAIgDAAIABgBIADAAIABgBIgBAAIgDAAQgHACgMAAQgLAAgMgCIgEAAIAAABIAJABIgDABIABAAIACAAIACgBIADAAgAgSEWIAAAAIADgBIAJAAIAEAAIACABIABAAIABAAIgCgBIAAAAIAIgCIgBAAIgEAAQgKACgNAAIgPgBIgFgBIgDAAIgCAAIABABIAEAAIABABIgDAAIADABIAEgBIADAAIAIAAIADABIAAAAIABAAIACAAgAKzF2QixgZg/g0Qg+gzBYgwQBZgwC9gRQC9gRCyAZQCyAYA/A0QA/A0haAwQhZAwi9ARQhMAGhLAAQhuAAhqgOgAwcF+Qi9gRhbgwQhcgwA8g0QA8g0CygYQCwgZC+ARQC+ARBcAwQBaAwg9AzQg8A0ivAZQhqAOhuAAQhLAAhNgGgAFjE4IgEgBIhGgFQAPgGAYgFQATgEAagBQAUgBANABQAPACACABQAJAEgVACQgDABADAAQANAAALABQANACADABQAFADgKADQgHACgQAAIgVABIgngBgAmbE4QgQAAgIgCQgKgDAFgDQADgBANgCQAKgBAOAAQADAAgDgBQgVgCAIgEQADgBAOgCQANgBAUABQAbABATAEQAYAFAPAGIhGAFIgEABIgnABIgUgBgAlVCrQiOgngBg2QgBg2CMglQCLgnDIAAQDHAACNAnQCNAlACA2QABA2iMAnQiLAmjHAAQjIAAiNgmg"),
            n = (new a.Graphics).p("AGSJlQiggGhggkQhggjAZgsQAYgrCCgaQCDgaCeAHQCgAHBgAjQBgAkgZArQgXAsiDAaQhnAUh3AAIhDgCgAqjJTQiDgagagsQgbgrBegkQBegjCggHQCegHCEAaQCEAaAZArQAcAshfAjQheAkigAGQgiACggAAQh4AAhogUgABIGAQgagDgGgGIgBgBIABgCIACAAIADAAQAHADAXABQAdACAsgBQArgBAYgEQAMgCADgCIABgBQAFgCgFgBIgZgBIhIACIgGABIAAAAIACACQABABAIgBIAlgBIADAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgMACgYABQgVABgQgBQgQgBgDgCQgBAAAAAAQAAgBABAAQAAAAABgBQABAAABAAQAIgDAcgBIAiAAIAQgBIAJAAIABgBIgEAAQgfgCgjACIgqADIgDAAIgBgBIABAAQAGgBAAgCQgBAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgWgQQgJACgSACIgEAAIgEgBIgFAAIgMAAIAAgBIACAAIAIAAIAPAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAgBAAIgEgBIgJAAIgFAAIgIgBIAAAAIABAAIAIAAIAPgBIABgBIAAgBIgIAAIgFAAIgLAAIAAAAIgBgBIAAAAIADAAIADAAIAIgBIABgBIgBAAIABgBIAWgCQgVgPAAgCQgEgBgHAAIgBAAQgHAAgDABQAAACgXAPQAPACAPABIACAAIAIAAIABAAIgBAAIgGABIgEAAIgEABIADABIANABIAIAAIAAAAIAAAAIAAAAIgMABIgCAAIgKAAIgBABIAAAAQABABALAAIANAAIACABIABAAIgCAAIgMAAIgNABIABABIAOABIAEAAIABAAIACAAIgCABIgQAAIgWgBIgXgEIgYAQIgCACQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAIAHACIAFABQAWAFAAAFIgBABQgFAGgdADQgpAFg6gCQgsgBgdgFQgegFABgGIABgCQAEgDAPgDIACAAIACABIAAAAQAAAFAnAEIAPABIAZABQAhACAhgBIANgCQAAAAAAAAQAAgBAAAAQgBAAgBAAQgBAAgCgBIgKgBQgHgBgGAAIghAAIgBAAQgfgBgIgDIgCgBIABgBIAAAAQADgCANgBQAPAAAWAAIABAAIAdACIANABIAFgBIAEAAIAAAAIgCgBQgRgDgjgBIgbgBIgFAAIgDAAIABgBQANgBAHgDIAMgEQAZgIAfgNQgCgCgEgBQgGgCgHAAQgHABgGABIgKAFQgMAGgMAEQgVAGglAEIgfABQgLAAgDgBQgHgDAWgDQAOgDgDgBIgEAAIgGABIAAAAQgXAEgfAAIgYgBQgIgCADgCQADgCAXgBQAXgBADgBIAAgBIgHAAQgTACgXgBQgUAAgKgCQgKgCADgCQAEgCAtgBQA0AAAogHQAXgEAYgHIAGgBIAWgGQAJgBANAAQAQAAAKAEQAGADAKAIIAEACIAFAEIAogRIABgBQAAAAAAAAQgBAAAAgBQAAAAgBAAQgBAAAAgBQgRACgNgCIgEgBQgOABgLgBIgLgDIAAAAQgSAAgKgBIgJgCQgEgCALgBQAJgBAIABQAJgBACgCQAEgCAKgCQAKgDAOgBIAbgCIAbAAQgJgCgKABQgNAAgEgBIgCAAIACgBIAHgBIANAAIAKABQAKABACACIABAAQACgCAJgBQAJgCAPABIAHABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgSABQgKgBgIACIAAAAQARgBAdABQAWACAPADQAOADgBADIgBABQgBADgOADQgPACgWACQgOABAAACIACABIAjAPIABgCQAMgIAHgDQAMgGAQAAQANgBAIACIAUAFIAKACQAWAHAWAEQApAHAzAAQAuABAEACQADACgKACQgLACgUAAQgWABgVgCIgGAAIAAABQADABAXABQAWABADACQAEACgJACIgXABQggAAgWgEIgIgBIgDAAQgCABAOADQAVADgHADQgJADgkgDQglgDgVgHQgNgDgLgHIgJgFQgFgBgHgBQgKAAgHADQAhAOAbAJIALAEIAJADQAMACANABQBIADAJAIIABACQAAAGgdAFQgdAFgtABIgdABQgoAAgfgEgAAMElIAAAAQANADAPgCQAHAAAAgBIgCgBIgCABIAAAAIAAAAIgFABQgMABgLgCIgCgBgABEEiIACABIACAAIABAAIAAgBIADAAIAFAAIAGAAIACAAIAAAAIgDgBIABAAIACAAIABgBIgBAAIgCAAIgPABQgJABgKgCIgEAAIAAABIAHABIgCAAIABAAIABAAIADAAIACAAgAgPEjIAAgBIADAAIAHAAIADAAIACAAIABAAIABAAIgCgBIAAAAIAGgBIAAAAIgDAAIgTABIgMAAIgEgBIgDAAIgBAAIAAABIAEAAIAAAAIgCABIACAAIADAAIADAAIAHAAIACAAIAAABIABAAIABAAgAIwFwQiPgUgzgqQgzgqBIgmQBIgoCZgNQCagOCQAUQCRAUAyAqQAzAqhIAnQhIAniaAOQg9AFg9AAQhZAAhXgMgAtVF3QiZgOhKgnQhLgnAxgqQAxgqCQgUQCPgUCaAOQCaANBKAoQBJAmgxAqQgxAqiOAUQhWAMhZAAQg8AAg/gFgAEgE+IgDgBIg5gDQAMgFATgFQAQgDAVgBQAQAAALAAQAMABACACQAHADgRACQgCAAACAAIATABQALACACABQAEACgHACQgGACgNAAIgRABIgggBgAlNE+QgNAAgHgCQgHgCADgCQADgBAKgCIAUgBQACAAgCAAQgRgCAGgDQADgCALgBQALAAAQAAQAWABAPADQATAFANAFIg5ADIgDABIggABIgQgBgAkUDLQhzgfgBgsQgCgsBygfQBxgfCiAAQChAAByAfQBzAfABAsQACAshyAfQhxAfihAAQiiAAhygfg"),
            p = (new a.Graphics).p("AE1InQh7gFhKgcQhJgbATghQASghBkgUQBkgUB6AFQB6AFBKAcQBKAbgUAhQgSAhhkAUQhOAQhcAAIgzgBgAoFIYQhlgUgUghQgVghBJgbQBIgcB6gFQB6gFBlAUQBlAUAUAhQAUAhhIAbQhIAch7AFIgzABQhbAAhQgQgAA4F3QgVgDgEgEIgBgBIABgBIABgBIADAAQAFADASABQAWABAhgBQAigBASgDQAJgBADgCIAAAAQABAAABgBQAAAAAAAAQAAgBAAAAQgBAAgBgBIgTAAIg3ABIgFABIAAAAIACABIAHABIAcgBIACAAIAAAAQgJACgSABIgdAAQgMgBgCgBQgBgBAAAAQAAAAABAAQAAgBAAAAQABAAABAAQAGgCAWgBIAaAAIAMgBIAHAAIABgBIgDAAQgYgBgbABIggACIgCAAIgBAAIABAAQABAAAAgBQABAAABAAQAAAAABgBQAAAAAAAAIgCgCIgRgMIgVADIgDAAIgDgBIgEAAIgJAAIAAAAIABgBIAHAAIALAAQABAAAAAAQAAAAAAAAQABAAAAgBQgBAAAAAAIgDAAIgHAAIgEAAIgGgBIAAAAIABAAIAGAAIALgBIABgBIAAAAIgGAAIgEAAIgIgBIAAAAIgBAAIAAAAIACAAIADAAIAGgBIABAAIgBgBIABAAIAQgCQgPgLAAgCQgDgBgGAAIgBAAQgFAAgDABQAAABgRAMQALACAMAAIABAAIAHAAIAAABIAAAAIgFAAIgDAAIgDABIACABIAKAAIAGAAIABAAIAAABIgBAAIgJAAIgCAAIgHABIgBAAIABAAQAAABAIAAIAKAAIACAAIAAAAIgBABIgJAAIgKAAIABABIAKABIADAAIABAAIABAAIgBAAIgMABIgRgBIgSgDIgSAMIgBACQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAIAGACIADAAQARAEAAAEIAAABQgFAEgVADQggAEgtgCQghgBgWgEQgXgDAAgFIABgBQADgDALgCIACAAIABAAIAAABQAAAEAfACIALABIATABQAaABAZAAIAKgCQAAAAAAAAQAAAAAAAAQgBAAgBgBQgBAAgBAAIgIgBIgKgBIgZAAIgBAAQgYgBgFgCIgCgBIABAAIAAgBQACgBAKAAIAcAAIABAAIAWABIALAAIADAAIADAAIAAAAIgCgBQgNgCgagBIgVgBIgEAAIgCAAIABAAQAKgBAFgCIAJgEIArgQIgFgCQgEgCgFABQgGAAgEABIgIAEQgJAFgKACQgQAFgcADIgYABIgKgBQgGgCARgDQALgCgCAAIgDAAIgGABIABgBQgSADgYAAIgSgBQgCAAgBAAQgBgBAAAAQgBAAAAgBQAAAAABAAQADgCARgBQASgBACgBIAAAAIgFAAIggABQgQgBgIgBQgIgBADgCQADgCAjAAQAnAAAfgGQASgCASgGIAFgBIARgEQAHgCAKAAQAMAAAHAEQAFACAIAGIADACIADADIAfgNIABgBIgCgBQgNABgKgCIgDAAQgLAAgIgBIgJgBIAAgBIgVAAIgHgCQgDgCAIAAQAHgBAGABQAHgBACgBQACgCAIgCIATgDIAUgBIAVAAQgHgCgHABIgOAAIgBgBIABAAIAGgBIAKAAIAIAAQAHABACACIABAAQABgCAHgBQAHgBALABIAFABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABgBAAIgNAAQgIgBgGACIAAAAQAMgBAXABIAcAEQALACgBACIAAABQgBACgLACQgLADgRABQgLAAAAACIACABIAaALIACgBQAIgGAGgDQAJgEAMgBQAKAAAHABIAPAEIAHACQARAFASADQAeAFAoABQAjAAADACQACACgHABQgIABgQABIghgBIgEAAIAAAAQABABASABQARABADACQAAAAAAAAQABABgBAAQAAAAgCABQgBAAgBAAIgSABQgYAAgRgDIgGAAIgDAAQgBAAAKACQAQADgFACQgHACgbgCQgdgCgQgFQgKgDgJgFIgGgEIgKgBQgHgBgFADQAZALAUAGIAJAEIAHABIATADQA4ACAGAHIABABQAAAFgWADQgXAEgiABIgWABQgfAAgXgDgAAJExIAAAAQAKACAMgBIAFgBIgBAAIgCAAIAAAAIAAAAIgEABQgJAAgIgBIgCAAgAA0EvIACAAIABAAIABAAIAAAAIACgBIAEAAIAFABIABAAIAAgBIgCAAIABAAIACgBIAAAAIAAAAIgCAAIgMABQgHAAgIgBIgCAAIAAAAIAFABIgBABIAAAAIABAAIACAAIACgBgAgLEvIAAAAIACAAIAGgBIACAAIABABIABAAIAAAAIgBgBIAAAAIAFgBIgBAAIgCAAIgOABIgJAAIgEgBIgBAAIgCAAIABAAIACABIABAAIgCABIACAAIACgBIADAAIAEAAIACABIAAAAIABAAIABAAgAGuFrQhugQgnggQgnggA2geQA4geB2gKQB1gLBvAQQBvAPAnAgQAnAgg4AeQg3Aeh2AKQgvAFguAAQhFAAhCgJgAqOFvQh2gKg4geQg6geAmggQAlggBvgPQBtgQB2ALQB2AKA6AeQA4AegmAgQglAghtAQQhCAJhFAAQguAAgwgFgADdFEIgCAAIgsgDQAJgEAPgDQAMgDAQgBIAVABQAJAAABACQAGACgNABQgCAAACAAIAPABIAKACQADACgGACQgFABgKAAIgNABIgYgBgAj/FEQgLAAgEgBQgGgCADgCIAKgCIAOgBQACAAgCAAQgNgBAGgCQABgCAJAAIAVgBQAQABAMADQAPADAJAEIgrADIgCAAIgZABIgMgBgAjUDsQhYgYgBghQgBgiBXgYQBXgYB8AAQB7AABYAYQBYAYABAiQABAhhXAYQhXAYh7AAQh8AAhYgYg"),
            u = (new a.Graphics).p("ADXHoQhVgEg0gTQgzgTANgXQANgXBGgOQBFgOBVAEQBVAEA0ATQAzATgNAXQgNAXhGAOQg2ALhAAAIgkgBgAlnHeQhHgOgOgXQgOgXAygTQAygTBWgEQBUgEBHAOQBGAOAOAXQAOAXgyATQgyAThWAEIgjABQhAAAg3gLgAAnFuQgPgCgCgDIgBgBIAAgBIACAAIABAAQAEACAMAAQAQABAXAAQAXgBANgCIAIgCIAAAAQABgBAAAAQABAAAAAAQAAgBgBAAQAAAAgBAAIgNgBIgmABIgDABIAAAAIAAABIAFAAIAUgBIACABIAAAAQgHABgNAAIgTAAQgJAAgCgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAEgCAQAAIASgBIAIAAIAFAAIABAAIgCAAQgRgBgTAAIgWACIgCAAIAAAAIAAAAIADgCIgBgBIgMgIIgPACIgCAAIgCgBIgDAAIgGAAIAAAAIABAAIAEAAIAIgBIABAAIgCgBIgFAAIgDAAIgEAAIAAAAIAAAAIAFAAIAIgBIAAAAIAAAAIgEgBIgCAAIgGAAIgBAAIAAAAIAAAAIACAAIABAAIAFgBIAAAAIgBAAIABgBIAMgBQgLgIAAgBIgGgBIgBAAIgFABIgMAJIAQACIABAAIAEAAIABAAIgBAAIgDAAIgDAAIgBABIABAAIAHABIAEAAIABAAIAAAAIgBAAIgGAAIgBAAIgFABIgBAAIABAAIAFABIAHAAIABAAIABAAIgBAAIgHAAIgGABIABAAIAGAAIACAAIABABIABAAIgBAAIgIAAIgMAAIgMgCIgNAIIgBABIABABIAEABIADABQALADAAACIAAABQgDADgPABQgWADgfgBQgYgBgPgCQgQgDAAgDIABgBQACgCAIgBIABAAIABAAIAAAAQAAADAVACIAIAAIANABIAkAAIAHAAIgDgBIgGgBIgHgBIgRAAIgBAAQgQAAgEgCIgBAAIAAgBIAAAAIAJgBIATAAIABAAIAPABIAIAAIACAAIACAAIAAAAIgBgBIgcgCIgOAAIgDAAIgBgBIAAAAIALgCIAGgCIAegLIgDgCIgHgBIgHABIgFACQgHAEgGACQgMADgTACIgRABIgHgBQgEgBAMgCQAIgCgCAAIgCAAIgEABIABAAQgNACgQAAIgNgBQgBAAgBgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQACgBAMgBIAOgBIAAAAIgEAAIgWAAIgRgBQgBAAgBAAQgBgBAAAAQgBAAAAAAQAAgBABAAQACgBAYAAQAcgBAVgDQANgCAMgEIADgBIAMgDIAMgBQAIAAAGADIAJAFIACACIACACIAWgJIAAgBIgCgBQgJABgGgBIgDAAIgNgBIgGgBIAAAAIgPgBIgFgBQAAAAAAAAQAAgBAAAAQABAAABAAQAAAAACAAIAJAAIAGgCIAHgCIANgCIAPgBIAOAAIgKgBIgJAAIgBAAIABgBIADAAIAHAAIAGAAQAFABABABIABAAQAAgBAFgBIANAAIAEAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgKAAIgKABIABAAIAYAAIAUACQAHACAAACIgBAAQAAACgIABIgTACQgIABAAABIABABIATAIIABgBIAKgHQAGgDAIAAIAMABIALADIAFABQAMAEAMACQAVADAbABQAZAAACABQABAAAAABQAAAAgBAAQAAAAgBABQgBAAgBAAIgRABIgXAAIgDAAIAAAAIANABQAMABACABQABAAAAAAQAAABgBAAQAAAAgBAAQgBABgBAAIgMABQgRAAgMgCIgEgBIgCAAIAHACQALACgEABQgFACgTgCQgUgCgLgDQgHgCgGgDIgEgDIgHgBQgFAAgEACIAgAMIAGACIAFABIANACQAnABAEAFIABABQAAADgQADQgPACgYABIgPAAQgWAAgQgBgAAGE9IAAAAQAHABAJAAIADgBIgBAAIgBAAIAAAAIAAAAIgDAAIgMAAIgBAAgAAkE7IACABIAAAAIABAAIAAgBIABAAIADAAIAEAAIAAAAIAAAAIgBAAIABAAIABgBIAAAAIAAAAIgBAAIgJABIgKgBIgCAAIAAAAIAEABIgBAAIAAAAIABAAIABAAIACAAgAgHE8IAAgBIABAAIAEAAIACAAIAAAAIABAAIAAAAIgBAAIAAAAIADgBIAAAAIgCAAIgJABIgGAAIgDgBIgBAAIgBAAIABAAIABABIABAAIgCAAIACAAIABAAIACAAIADAAIABAAIAAABIABAAIABAAgAErFlQhMgLgbgWQgcgXAmgUQAngVBSgHQBSgIBNALQBNALAbAWQAcAWgnAVQgnAVhRAHQghADghAAQgvAAgvgGgAnHFoQhSgHgngVQgogVAagWQAagWBNgLQBMgLBSAIQBSAHAoAVQAnAUgaAXQgaAWhMALQguAGgvAAQghAAghgDgACaFKIgCAAIgegCIARgFIATgCIAPAAIAHABQAEACgJABQgBAAABAAIAKABIAHABQABAAAAABQAAAAAAAAQgBAAAAABQgBAAgBAAIgKABIgJABIgRgBgAiyFKIgKgBQgBAAgBAAQAAgBAAAAQgBAAAAAAQABgBAAAAIAHgBIAKgBQABAAgBAAQgJgBAEgCIAHgBIAPAAIATACIARAFIgeACIgCAAIgRABIgJgBgAiTENQg+gRAAgXQgBgYA9gQQA8gRBWAAQBWAAA9ARQA+AQAAAYQABAXg9ARQg8AQhWAAQhWAAg9gQg");
        this.timeline.addTween(a.Tween.get(f).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(4).to({
            graphics: d,
            x: -3.7393,
            y: 48.8295
        }).wait(1).to({
            graphics: e,
            x: -3.5534,
            y: 71.0858
        }).wait(1).to({
            graphics: g,
            x: -3.5877,
            y: 68.1949
        }).wait(1).to({
            graphics: h,
            x: -3.6083,
            y: 66.4599
        }).wait(1).to({
            graphics: k,
            x: -3.6151,
            y: 65.8808
        }).wait(23).to({
            graphics: l,
            x: -4.682,
            y: 67.8122
        }).wait(1).to({
            graphics: n,
            x: -4.3956,
            y: 61.5019
        }).wait(1).to({
            graphics: p,
            x: -4.1148,
            y: 55.1911
        }).wait(1).to({
            graphics: u,
            x: -3.8398,
            y: 48.8803
        }).wait(3));
        this.instance_1 = new b.white;
        this.instance_1.parent = this;
        this.instance_1.alpha = 0;
        this.instance_1._off = !0;
        d = [this.instance_1];
        for (e = 0; e < d.length; e++) d[e].mask = f;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(4).to({
            _off: !1
        }, 0).wait(15).to({
            alpha: .0542
        }, 0).wait(1).to({
            alpha: .1845
        }, 0).wait(1).to({
            alpha: .3663
        }, 0).wait(1).to({
            alpha: .5504
        }, 0).wait(1).to({
            alpha: .6869
        }, 0).wait(1).to({
            alpha: .75,
            compositeOperation: NaN
        }, 0).wait(1).to({
            alpha: .6958
        }, 0).wait(1).to({
            alpha: .5655
        }, 0).wait(1).to({
            alpha: .3837
        }, 0).wait(1).to({
                alpha: .1996
            },
            0).wait(1).to({
            alpha: .0631
        }, 0).wait(1).to({
            alpha: 0
        }, 0).wait(7));
        this.bg_mc = new b.bg_mc;
        this.bg_mc.name = "bg_mc";
        this.bg_mc.parent = this;
        this.bg_mc._off = !0;
        d = [this.bg_mc];
        for (e = 0; e < d.length; e++) d[e].mask = f;
        this.timeline.addTween(a.Tween.get(this.bg_mc).wait(4).to({
            _off: !1
        }, 0).wait(33))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-120, -239.5, 240, 381.7);
    (b.light_1 = function(f, d, e) {
        this.initialize(f, d, e, {
            main: 0,
            loop: 18,
            toop: 31
        });
        this.frame_0 = function() {
            this.visible = !1;
            this.stop()
        };
        this.frame_18 =
            function() {
                1 == exportRoot._g.gType ? this.fff.visible = !1 : this.fff_l.visible = !1
            };
        this.frame_30 = function() {
            this.gotoAndPlay("loop")
        };
        this.frame_36 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(12).call(this.frame_30).wait(6).call(this.frame_36).wait(1));
        this.instance = new b.marker_sign_bighit;
        this.instance.parent = this;
        this.instance.setTransform(-89.6, -230, 1, 1, 0, 0, 0, 30.3, 9.5);
        this.timeline.addTween(a.Tween.get(this.instance).to({
                _off: !0
            },
            1).wait(36));
        f = new a.Shape;
        f._off = !0;
        d = (new a.Graphics).p("ADSCdQhVgDgzgTQgzgTAOgXQANgXBGgOQBGgOBUAEQBVADAzATQAzATgOAXQgNAXhGAOQg4ALhAAAIgigBgAlrCTQhFgOgOgXQgNgXAygTQAzgTBVgDQBUgEBGAOQBGAOANAXQAOAXgzATQgzAThVADIgiABQhAAAg4gLgAhmAnQgrgMAAgQQAAgQArgLQAqgMA8AAQA9AAAqAMQArALAAAQQAAAQgrAMQgqAMg9AAQg8AAgqgMgAEpAbQhMgLgagVQgbgXAmgUQAogVBRgHQBSgIBMALQBNAKAbAXQAaAWgnAUQgnAVhRAHQgiADgiAAQguAAgtgGgAnGAeQhSgHgngVQgngUAagWQAbgXBNgKQBMgLBSAIQBSAHAnAVQAmAUgaAXQgbAVhMALQgtAGguAAQghAAgigDgAiSg8Qg8gRAAgXQAAgYA8gQQA9gRBVAAQBWAAA9ARQA9AQAAAYQAAAXg9ARQg9AQhWAAQhVAAg9gQg");
        e = (new a.Graphics).p("AptG+QjhgbhXg+Qhag9Big9QBhg8DjgYQDhgYDgAbQDfAaBYA+QBZA+hhA8QhiA9jhAXQhrAMhrAAQh2AAh1gOgAIuFVQi1gtgNhCQgQhCCigxQCigyDxgDQDzgEC2AtQC2AsAOBCQAQBCiiAxQiiAyjyADIgjABQjdAAiqgpgAxwCJQj0gHiag0QibgzAYhBQAYhCC8gqQC7gpDzAGQDwAHCcAzQCaA0gYBCQgYBBi7ApQiiAljLAAIg/gBgAgaB3QikgMhYgpQhYgoArgsQArgtCVgXQCUgYCkAMQClAMBYApQBXAogqAsQgrAtiVAXQhjAQhpAAQg2AAg3gEgAOmAFQjqgPh8g6Qh9g5A+hAQA+hADRghQDSghDqARQDrARB8A5QB8A5g+BAQg9BAjSAiQiIAUiUAAQhPAAhRgGgAnpilQjNgkg0hAQg1hBCDg4QCDg3DugOQDugODLAkQDNAkA0BBQA1BBiDA3QiDA3jtAOQhDAEhAAAQikAAiTgag");
        var g = (new a.Graphics).p("AIqGXQjcgJiFgxQiFgxAkg9QAgg7C0gkQC1gkDaAKQDdAJCFAxQCEAxgiA8QghA8i0AkQiPAcimAAQgtAAgugCgAukF9Qi3gkgjg8Qglg8CCgxQCDgxDcgJQDagKC2AkQC2AkAkA7QAlA9iCAxQiDAxjcAJQguACgtAAQimAAiPgcgAkHBkQhwgegBgrQgBgqBugeQBugeCdAAQCeAABvAeQBwAeABAqQABArhvAeQhtAfieAAQidAAhvgfgAMGBEQjGgbhGg5QhGg6Big1QBlg2DTgTQDUgTDHAcQDIAbBGA6QBGA5hlA1QhjA2jTATQhWAIhTAAQh8AAh3gRgAyZBNQjVgThmg2Qhng1BDg5QBEg6DHgbQDFgcDVATQDUATBnA2QBlA1hEA6QhDA5jFAbQh3ARh7AAQhTAAhVgIgAl+ieQiegrgCg9QgBg8CdgrQCcgrDgAAQDeAACeArQCfArABA8QACA9idArQicArjfAAQjgAAiegrg"),
            h = (new a.Graphics).p("ACzGEQjEgUhYg0QhXg1BJg1QBLg2C+gXQDAgXDEAUQDGAUBXA0QBYA1hKA1QhKA2i/AXQhnANhoAAQhaAAhcgKgAs5FLQjTgDiOgqQiQgrALg5QAIg5CcgmQCagnDTADQDSADCOAqQCQArgKA5QgJA5iaAmQiRAki/AAIgeAAgAJwBXQikgkgYg4QgZg5CDgtQCDgsDQgGQDTgHCjAkQCmAkAYA5QAYA5iDAsQiCAtjTAGIg6AAQiuAAiNgegAiEBoQiSgIhRgiQhSghAdgnQAdgoB9gWQB6gWCRAIQCTAIBRAjQBRAhgdAnQgdAnh9AWQhZAQhlAAQgmAAgngCgAykgHQi4gcg3g4Qg6g3BogxQBogyDKgPQDLgPC3AdQC3AcA5A3QA5A3hoAyQhoAyjKAOQhGAFhEAAQiAAAh4gSgAAlh8QjNgLhzgwQh2gvAqg5QAqg4CvgfQCvgfDPAMQDOALB0AwQB1AwgqA4QgqA4ivAfQh/AWiQAAQg3AAg5gDg"),
            k = (new a.Graphics).p("Ah2FwQiugegtg3Qgsg3BvgvQBugvDIgMQDLgMCsAeQCwAfAsA3QAsA3hvAvQhtAvjKAMQg4ADg2AAQiMAAh9gWgAwQECQjGgPhqgwQhpgxA0g2QAyg2CzgcQCxgcDIAPQDGANBpAxQBqAwgzA2Qg0A3ixAcQh2ASiAAAQhBAAhDgEgANlCaQjNgGiDgsQiCgrAUg4QATg3CegjQCggjDNAFQDPAGCBAsQCDArgTA3QgTA4igAjQiIAeirAAIg6AAgAjMBPQiGgQg1glQg2gjA6glQA7gkCHgOQCGgPCFAQQCGAQA1AlQA1Alg6AjQg5AkiIAPQg/AGhAAAQhGAAhGgIgAxuhVQibgmgMg4QgNg4CIgqQCJgqDOgCQDNgECbAmQCaAlAOA4QALA4iIAqQiJAqjNADIgeAAQi8AAiOgigACCiCQi9gWhMg0QhMg0BSgzQBTg0C/gUQC/gUC+AWQC+AXBLA1QBMA0hTAzQhSAzjAAUQhYAJhYAAQhmAAhmgMg"),
            l = (new a.Graphics).p("AlWFTQiTgngCg5QgCg4CRgoQCQgnDNAAQDOAACUAnQCTAoACA4QACA4iSAoQiPAnjOAAIgFAAQjLAAiRgngAyICzQi3gZhCg2QhCg1BdgxQBagyDEgSQDDgRC6AZQC3AaBCA0QBCA1hcAyQhdAzjDARQhOAHhNAAQhyAAhvgPgAMVC6QjEgRhggyQhfgyA/g2QA/g0C1gaQC2gZDEARQDFARBgAyQBgAxg/A2Qg/A1i2AZQhtAQhyAAQhNAAhPgHgAjNA0Qh3gXgYgmQgYgnBVggQBVggCOgHQCPgGB2AXQB2AYAZAmQAXAnhUAfQhVAgiOAHIg8ABQhsAAhdgSgAqWhsQjMgIh6gtQh8guAfg3QAeg3CmghQCnghDKAJQDMAIB8AtQB6AugfA3QgeA3imAhQiEAaibAAQgoAAgqgCgAEZiEQioghghg4Qgig2B3guQB4guDLgIQDKgJCpAhQCpAgAgA4QAkA3h4AtQh3AujMAJQgqABgpAAQibAAiGgZg"),
            n = (new a.Graphics).p("AjrGCQjKgLhxgvQhzgvApg3QApg2CugfQCqgfDKAMQDKALBxAvQByAvgpA3QgpA3itAeQh8AWiMAAQg1AAg3gDgAKjDyQi0gbg3g3Qg4g1BmgxQBmgxDFgNQDIgPCzAbQCzAcA3A2QA4A2hmAxQhmAwjGAPQhEAEhBAAQh/AAh1gSgAzMB9QiigjgXg4QgXg2CBgsQB/gsDOgGQDMgGChAkQChAjAXA3QAWA3h/AsQiAAsjMAGIg7AAQirAAiIgegAAtBXQiQgChigeQhjgdAIgmQAGgoBrgaQBsgbCPACQCRACBiAdQBkAegJAnQgGAmhrAbQhkAZiEAAIgUAAgAL+g0QjNgDiLgqQiMgqAJg3QAKg4CXgmQCZglDOADQDNACCMAqQCLAqgKA3QgIA4iYAmQiOAjjAAAIgZAAgAoKh+QjBgUhVgzQhVgzBJg0QBHg1C8gXQC8gXDBAVQC/ATBWAzQBVA0hIA0QhIA0i7AXQhlAMhmAAQhYAAhagJg"),
            p = (new a.Graphics).p("AoPF6Qi+gXhLg0QhMg1BTgzQBSgzDAgVQC/gUC/AXQC9AXBLA0QBLA0hSAzQhTA0i/AUQhaAKhaAAQhlAAhkgMgAHaEhQibgmgLg4QgNg4CKgqQCJgqDNgDQDOgDCaAmQCbAlALA4QAOA4iJAqQiKAqjNADIgjAAQi5AAiNgigAvEBzQjPgFiCgsQiEgsAUg3QAUg4CggjQCegjDOAFQDNAGCEAsQCCArgUA4QgUA3ieAkQiJAeipAAIg6gBgAgWBkQiLgKhLgiQhKgjAkglQAkgmB/gUQB9gUCMALQCLAKBLAiQBKAjgkAlQgkAmh/AUQhSANhZAAQgvAAgvgEgAMYAEQjHgNhpgxQhpgwA0g3QA1g2CxgcQCygcDHAPQDHAOBqAwQBpAxg1A2Qg0A2iyAdQhzARh9AAQhDAAhGgFgAmfiMQiugfgsg2Qgtg3BvgvQBvgvDKgMQDKgMCtAfQCtAeAtA3QAsA3hvAvQhvAvjJAMQg3ADg1AAQiNAAh+gWg"),
            u = (new a.Graphics).p("AICF5QjNgIh7guQh6gtAgg4QAeg3CnghQCngiDLAJQDNAJB6AuQB7AtggA4QgeA3inAhQiEAaiZAAQgpAAgsgCgAtgFhQipghggg3Qgjg4B5gtQB5guDMgJQDKgJCpAiQCoAhAhA3QAjA4h5AtQh5AujMAIQgrACgqAAQiZAAiFgagAj0BdQhogcgBgnQgBgnBngcQBlgcCSAAQCSAABnAcQBoAcABAnQABAnhnAcQhmAciSAAQiRAAhngcgALNA/Qi3gZhBg1QhCg2BcgxQBdgyDEgSQDEgRC4AaQC6AZBBA1QBAA2hcAxQhdAyjEASQhOAGhNAAQhzAAhvgPgAxDBIQjFgShegyQhggxA/g2QA/g1C3gZQC3gaDFARQDFASBgAyQBdAxg+A2Qg/A1i2AZQhvAPhzAAQhMAAhPgGgAliiTQiTgngBg4QgBg4CRgoQCQgoDQAAQDOAACSAoQCUAoABA4QABA4iRAnQiRAojOAAQjPAAiTgog"),
            z = (new a.Graphics).p("ACwF9QjAgUhWgzQhXg0BJg0QBJg0C7gXQC8gXDAATQDCAUBWA0QBWAzhJA0QhIA1i8AXQhlAMhmAAQhYAAhagJgAspFFQjOgDiMgqQiNgpALg4QAHg4CagmQCXgmDPADQDNADCMApQCNAqgKA4QgIA4iYAmQiOAji7AAIgeAAgAJkBVQiggjgZg3QgXg4CAgrQCAgsDMgGQDOgGChAjQCiAjAYA4QAYA3iAAsQiAAsjOAGIg7ABQipAAiLgfgAiBBmQiPgIhQghQhRghAdgmQAdgnB6gVQB4gWCOAIQCPAIBQAiQBRAggdAmQgcAnh7AWQhXAPhjAAQglAAgngCgAyNgGQi0gcg3g3Qg4g2BngxQBmgwDGgOQDFgPC1AcQC0AbA3A3QA4A2hmAwQhnAxjFAOQhGAFhDAAQh9AAh1gRgAAlh5QjKgLhxgvQhzgvApg3QApg3CtgeQCqgfDLALQDLAMBxAvQBzAvgpA2QgpA3isAfQh+AWiOAAQg1AAg2gDg"),
            q = (new a.Graphics).p("Ah2FwQiugegtg3Qgsg3BvgvQBugvDIgMQDLgMCsAeQCwAfAsA3QAsA3hvAvQhtAvjKAMQg4ADg2AAQiMAAh9gWgAwQECQjGgPhqgwQhpgxA0g2QAyg2CzgcQCxgcDIAPQDGANBpAxQBqAwgzA2Qg0A3ixAcQh2ASiAAAQhBAAhDgEgANlCaQjNgGiDgsQiCgrAUg4QATg3CegjQCggjDNAFQDPAGCBAsQCDArgTA3QgTA4igAjQiIAeirAAIg6AAgAjMBPQiGgQg1glQg2gjA6glQA7gkCHgOQCGgPCFAQQCGAQA1AlQA1Alg6AjQg5AkiIAPQg/AGhAAAQhGAAhGgIgAxuhVQibgmgMg4QgNg4CIgqQCJgqDOgCQDNgECbAmQCaAlAOA4QALA4iIAqQiJAqjNADIgeAAQi8AAiOgigACCiCQi9gWhMg0QhMg0BSgzQBTg0C/gUQC/gUC+AWQC+AXBLA1QBMA0hTAzQhSAzjAAUQhYAJhYAAQhmAAhmgMg"),
            r = (new a.Graphics).p("AlWFTQiTgngCg5QgCg4CRgoQCQgnDNAAQDOAACUAnQCTAoACA4QACA4iSAoQiPAnjOAAIgFAAQjLAAiRgngAyICzQi3gZhCg2QhCg1BdgxQBagyDEgSQDDgRC6AZQC3AaBCA0QBCA1hcAyQhdAzjDARQhOAHhNAAQhyAAhvgPgAMVC6QjEgRhggyQhfgyA/g2QA/g0C1gaQC2gZDEARQDFARBgAyQBgAxg/A2Qg/A1i2AZQhtAQhyAAQhNAAhPgHgAjNA0Qh3gXgYgmQgYgnBVggQBVggCOgHQCPgGB2AXQB2AYAZAmQAXAnhUAfQhVAgiOAHIg8ABQhsAAhdgSgAqWhsQjMgIh6gtQh8guAfg3QAeg3CmghQCnghDKAJQDMAIB8AtQB6AugfA3QgeA3imAhQiEAaibAAQgoAAgqgCgAEZiEQioghghg4Qgig2B3guQB4guDLgIQDKgJCpAhQCpAgAgA4QAkA3h4AtQh3AujMAJQgqABgpAAQibAAiGgZg"),
            t = (new a.Graphics).p("AjrGCQjKgLhxgvQhzgvApg3QApg2CugfQCqgfDKAMQDKALBxAvQByAvgpA3QgpA3itAeQh8AWiMAAQg1AAg3gDgAKjDyQi0gbg3g3Qg4g1BmgxQBmgxDFgNQDIgPCzAbQCzAcA3A2QA4A2hmAxQhmAwjGAPQhEAEhBAAQh/AAh1gSgAzMB9QiigjgXg4QgXg2CBgsQB/gsDOgGQDMgGChAkQChAjAXA3QAWA3h/AsQiAAsjMAGIg7AAQirAAiIgegAAtBXQiQgChigeQhjgdAIgmQAGgoBrgaQBsgbCPACQCRACBiAdQBkAegJAnQgGAmhrAbQhkAZiEAAIgUAAgAL+g0QjNgDiLgqQiMgqAJg3QAKg4CXgmQCZglDOADQDNACCMAqQCLAqgKA3QgIA4iYAmQiOAjjAAAIgZAAgAoKh+QjBgUhVgzQhVgzBJg0QBHg1C8gXQC8gXDBAVQC/ATBWAzQBVA0hIA0QhIA0i7AXQhlAMhmAAQhYAAhagJg"),
            v = (new a.Graphics).p("AoPF6Qi+gXhLg0QhMg1BTgzQBSgzDAgVQC/gUC/AXQC9AXBLA0QBLA0hSAzQhTA0i/AUQhaAKhaAAQhlAAhkgMgAHaEhQibgmgLg4QgNg4CKgqQCJgqDNgDQDOgDCaAmQCbAlALA4QAOA4iJAqQiKAqjNADIgjAAQi5AAiNgigAvEBzQjPgFiCgsQiEgsAUg3QAUg4CggjQCegjDOAFQDNAGCEAsQCCArgUA4QgUA3ieAkQiJAeipAAIg6gBgAgWBkQiLgKhLgiQhKgjAkglQAkgmB/gUQB9gUCMALQCLAKBLAiQBKAjgkAlQgkAmh/AUQhSANhZAAQgvAAgvgEgAMYAEQjHgNhpgxQhpgwA0g3QA1g2CxgcQCygcDHAPQDHAOBqAwQBpAxg1A2Qg0A2iyAdQhzARh9AAQhDAAhGgFgAmfiMQiugfgsg2Qgtg3BvgvQBvgvDKgMQDKgMCtAfQCtAeAtA3QAsA3hvAvQhvAvjJAMQg3ADg1AAQiNAAh+gWg"),
            w = (new a.Graphics).p("AICF5QjNgIh7guQh6gtAgg4QAeg3CnghQCngiDLAJQDNAJB6AuQB7AtggA4QgeA3inAhQiEAaiZAAQgpAAgsgCgAtgFhQipghggg3Qgjg4B5gtQB5guDMgJQDKgJCpAiQCoAhAhA3QAjA4h5AtQh5AujMAIQgrACgqAAQiZAAiFgagAj0BdQhogcgBgnQgBgnBngcQBlgcCSAAQCSAABnAcQBoAcABAnQABAnhnAcQhmAciSAAQiRAAhngcgALNA/Qi3gZhBg1QhCg2BcgxQBdgyDEgSQDEgRC4AaQC6AZBBA1QBAA2hcAxQhdAyjEASQhOAGhNAAQhzAAhvgPgAxDBIQjFgShegyQhggxA/g2QA/g1C3gZQC3gaDFARQDFASBgAyQBdAxg+A2Qg/A1i2AZQhvAPhzAAQhMAAhPgGgAliiTQiTgngBg4QgBg4CRgoQCQgoDQAAQDOAACSAoQCUAoABA4QABA4iRAnQiRAojOAAQjPAAiTgog"),
            m = (new a.Graphics).p("ACwF9QjAgUhWgzQhXg0BJg0QBJg0C7gXQC8gXDAATQDCAUBWA0QBWAzhJA0QhIA1i8AXQhlAMhmAAQhYAAhagJgAspFFQjOgDiMgqQiNgpALg4QAHg4CagmQCXgmDPADQDNADCMApQCNAqgKA4QgIA4iYAmQiOAji7AAIgeAAgAJkBVQiggjgZg3QgXg4CAgrQCAgsDMgGQDOgGChAjQCiAjAYA4QAYA3iAAsQiAAsjOAGIg7ABQipAAiLgfgAiBBmQiPgIhQghQhRghAdgmQAdgnB6gVQB4gWCOAIQCPAIBQAiQBRAggdAmQgcAnh7AWQhXAPhjAAQglAAgngCgAyNgGQi0gcg3g3Qg4g2BngxQBmgwDGgOQDFgPC1AcQC0AbA3A3QA4A2hmAwQhnAxjFAOQhGAFhDAAQh9AAh1gRgAAlh5QjKgLhxgvQhzgvApg3QApg3CtgeQCqgfDLALQDLAMBxAvQBzAvgpA2QgpA3isAfQh+AWiOAAQg1AAg2gDg"),
            A = (new a.Graphics).p("Ah2FwQiugegtg3Qgsg3BvgvQBugvDIgMQDLgMCsAeQCwAfAsA3QAsA3hvAvQhtAvjKAMQg4ADg2AAQiMAAh9gWgAwQECQjGgPhqgwQhpgxA0g2QAyg2CzgcQCxgcDIAPQDGANBpAxQBqAwgzA2Qg0A3ixAcQh2ASiAAAQhBAAhDgEgANlCaQjNgGiDgsQiCgrAUg4QATg3CegjQCggjDNAFQDPAGCBAsQCDArgTA3QgTA4igAjQiIAeirAAIg6AAgAjMBPQiGgQg1glQg2gjA6glQA7gkCHgOQCGgPCFAQQCGAQA1AlQA1Alg6AjQg5AkiIAPQg/AGhAAAQhGAAhGgIgAxuhVQibgmgMg4QgNg4CIgqQCJgqDOgCQDNgECbAmQCaAlAOA4QALA4iIAqQiJAqjNADIgeAAQi8AAiOgigACCiCQi9gWhMg0QhMg0BSgzQBTg0C/gUQC/gUC+AWQC+AXBLA1QBMA0hTAzQhSAzjAAUQhYAJhYAAQhmAAhmgMg"),
            B = (new a.Graphics).p("AlWFTQiTgngCg5QgCg4CRgoQCQgnDNAAQDOAACUAnQCTAoACA4QACA4iSAoQiPAnjOAAIgFAAQjLAAiRgngAyICzQi3gZhCg2QhCg1BdgxQBagyDEgSQDDgRC6AZQC3AaBCA0QBCA1hcAyQhdAzjDARQhOAHhNAAQhyAAhvgPgAMVC6QjEgRhggyQhfgyA/g2QA/g0C1gaQC2gZDEARQDFARBgAyQBgAxg/A2Qg/A1i2AZQhtAQhyAAQhNAAhPgHgAjNA0Qh3gXgYgmQgYgnBVggQBVggCOgHQCPgGB2AXQB2AYAZAmQAXAnhUAfQhVAgiOAHIg8ABQhsAAhdgSgAqWhsQjMgIh6gtQh8guAfg3QAeg3CmghQCnghDKAJQDMAIB8AtQB6AugfA3QgeA3imAhQiEAaibAAQgoAAgqgCgAEZiEQioghghg4Qgig2B3guQB4guDLgIQDKgJCpAhQCpAgAgA4QAkA3h4AtQh3AujMAJQgqABgpAAQibAAiGgZg"),
            C = (new a.Graphics).p("AjrGCQjKgLhxgvQhzgvApg3QApg2CugfQCqgfDKAMQDKALBxAvQByAvgpA3QgpA3itAeQh8AWiMAAQg1AAg3gDgAKjDyQi0gbg3g3Qg4g1BmgxQBmgxDFgNQDIgPCzAbQCzAcA3A2QA4A2hmAxQhmAwjGAPQhEAEhBAAQh/AAh1gSgAzMB9QiigjgXg4QgXg2CBgsQB/gsDOgGQDMgGChAkQChAjAXA3QAWA3h/AsQiAAsjMAGIg7AAQirAAiIgegAAtBXQiQgChigeQhjgdAIgmQAGgoBrgaQBsgbCPACQCRACBiAdQBkAegJAnQgGAmhrAbQhkAZiEAAIgUAAgAL+g0QjNgDiLgqQiMgqAJg3QAKg4CXgmQCZglDOADQDNACCMAqQCLAqgKA3QgIA4iYAmQiOAjjAAAIgZAAgAoKh+QjBgUhVgzQhVgzBJg0QBHg1C8gXQC8gXDBAVQC/ATBWAzQBVA0hIA0QhIA0i7AXQhlAMhmAAQhYAAhagJg"),
            D = (new a.Graphics).p("AoPF6Qi+gXhLg0QhMg1BTgzQBSgzDAgVQC/gUC/AXQC9AXBLA0QBLA0hSAzQhTA0i/AUQhaAKhaAAQhlAAhkgMgAHaEhQibgmgLg4QgNg4CKgqQCJgqDNgDQDOgDCaAmQCbAlALA4QAOA4iJAqQiKAqjNADIgjAAQi5AAiNgigAvEBzQjPgFiCgsQiEgsAUg3QAUg4CggjQCegjDOAFQDNAGCEAsQCCArgUA4QgUA3ieAkQiJAeipAAIg6gBgAgWBkQiLgKhLgiQhKgjAkglQAkgmB/gUQB9gUCMALQCLAKBLAiQBKAjgkAlQgkAmh/AUQhSANhZAAQgvAAgvgEgAMYAEQjHgNhpgxQhpgwA0g3QA1g2CxgcQCygcDHAPQDHAOBqAwQBpAxg1A2Qg0A2iyAdQhzARh9AAQhDAAhGgFgAmfiMQiugfgsg2Qgtg3BvgvQBvgvDKgMQDKgMCtAfQCtAeAtA3QAsA3hvAvQhvAvjJAMQg3ADg1AAQiNAAh+gWg"),
            E = (new a.Graphics).p("AICF5QjNgIh7guQh6gtAgg4QAeg3CnghQCngiDLAJQDNAJB6AuQB7AtggA4QgeA3inAhQiEAaiZAAQgpAAgsgCgAtgFhQipghggg3Qgjg4B5gtQB5guDMgJQDKgJCpAiQCoAhAhA3QAjA4h5AtQh5AujMAIQgrACgqAAQiZAAiFgagAj0BdQhogcgBgnQgBgnBngcQBlgcCSAAQCSAABnAcQBoAcABAnQABAnhnAcQhmAciSAAQiRAAhngcgALNA/Qi3gZhBg1QhCg2BcgxQBdgyDEgSQDEgRC4AaQC6AZBBA1QBAA2hcAxQhdAyjEASQhOAGhNAAQhzAAhvgPgAxDBIQjFgShegyQhggxA/g2QA/g1C3gZQC3gaDFARQDFASBgAyQBdAxg+A2Qg/A1i2AZQhvAPhzAAQhMAAhPgGgAliiTQiTgngBg4QgBg4CRgoQCQgoDQAAQDOAACSAoQCUAoABA4QABA4iRAnQiRAojOAAQjPAAiTgog"),
            F = (new a.Graphics).p("ACwF9QjAgUhWgzQhXg0BJg0QBJg0C7gXQC8gXDAATQDCAUBWA0QBWAzhJA0QhIA1i8AXQhlAMhmAAQhYAAhagJgAspFFQjOgDiMgqQiNgpALg4QAHg4CagmQCXgmDPADQDNADCMApQCNAqgKA4QgIA4iYAmQiOAji7AAIgeAAgAJkBVQiggjgZg3QgXg4CAgrQCAgsDMgGQDOgGChAjQCiAjAYA4QAYA3iAAsQiAAsjOAGIg7ABQipAAiLgfgAiBBmQiPgIhQghQhRghAdgmQAdgnB6gVQB4gWCOAIQCPAIBQAiQBRAggdAmQgcAnh7AWQhXAPhjAAQglAAgngCgAyNgGQi0gcg3g3Qg4g2BngxQBmgwDGgOQDFgPC1AcQC0AbA3A3QA4A2hmAwQhnAxjFAOQhGAFhDAAQh9AAh1gRgAAlh5QjKgLhxgvQhzgvApg3QApg3CtgeQCqgfDLALQDLAMBxAvQBzAvgpA2QgpA3isAfQh+AWiOAAQg1AAg2gDg"),
            G = (new a.Graphics).p("Ah2FwQiugegtg3Qgsg3BvgvQBugvDIgMQDLgMCsAeQCwAfAsA3QAsA3hvAvQhtAvjKAMQg4ADg2AAQiMAAh9gWgAwQECQjGgPhqgwQhpgxA0g2QAyg2CzgcQCxgcDIAPQDGANBpAxQBqAwgzA2Qg0A3ixAcQh2ASiAAAQhBAAhDgEgANlCaQjNgGiDgsQiCgrAUg4QATg3CegjQCggjDNAFQDPAGCBAsQCDArgTA3QgTA4igAjQiIAeirAAIg6AAgAjMBPQiGgQg1glQg2gjA6glQA7gkCHgOQCGgPCFAQQCGAQA1AlQA1Alg6AjQg5AkiIAPQg/AGhAAAQhGAAhGgIgAxuhVQibgmgMg4QgNg4CIgqQCJgqDOgCQDNgECbAmQCaAlAOA4QALA4iIAqQiJAqjNADIgeAAQi8AAiOgigACCiCQi9gWhMg0QhMg0BSgzQBTg0C/gUQC/gUC+AWQC+AXBLA1QBMA0hTAzQhSAzjAAUQhYAJhYAAQhmAAhmgMg"),
            H = (new a.Graphics).p("AlWFTQiTgngCg5QgCg4CRgoQCQgnDNAAQDOAACUAnQCTAoACA4QACA4iSAoQiPAnjOAAIgFAAQjLAAiRgngAyICzQi3gZhCg2QhCg1BdgxQBagyDEgSQDDgRC6AZQC3AaBCA0QBCA1hcAyQhdAzjDARQhOAHhNAAQhyAAhvgPgAMVC6QjEgRhggyQhfgyA/g2QA/g0C1gaQC2gZDEARQDFARBgAyQBgAxg/A2Qg/A1i2AZQhtAQhyAAQhNAAhPgHgAjNA0Qh3gXgYgmQgYgnBVggQBVggCOgHQCPgGB2AXQB2AYAZAmQAXAnhUAfQhVAgiOAHIg8ABQhsAAhdgSgAqWhsQjMgIh6gtQh8guAfg3QAeg3CmghQCnghDKAJQDMAIB8AtQB6AugfA3QgeA3imAhQiEAaibAAQgoAAgqgCgAEZiEQioghghg4Qgig2B3guQB4guDLgIQDKgJCpAhQCpAgAgA4QAkA3h4AtQh3AujMAJQgqABgpAAQibAAiGgZg"),
            I = (new a.Graphics).p("AjrGCQjKgLhxgvQhzgvApg3QApg2CugfQCqgfDKAMQDKALBxAvQByAvgpA3QgpA3itAeQh8AWiMAAQg1AAg3gDgAKjDyQi0gbg3g3Qg4g1BmgxQBmgxDFgNQDIgPCzAbQCzAcA3A2QA4A2hmAxQhmAwjGAPQhEAEhBAAQh/AAh1gSgAzMB9QiigjgXg4QgXg2CBgsQB/gsDOgGQDMgGChAkQChAjAXA3QAWA3h/AsQiAAsjMAGIg7AAQirAAiIgegAAtBXQiQgChigeQhjgdAIgmQAGgoBrgaQBsgbCPACQCRACBiAdQBkAegJAnQgGAmhrAbQhkAZiEAAIgUAAgAL+g0QjNgDiLgqQiMgqAJg3QAKg4CXgmQCZglDOADQDNACCMAqQCLAqgKA3QgIA4iYAmQiOAjjAAAIgZAAgAoKh+QjBgUhVgzQhVgzBJg0QBHg1C8gXQC8gXDBAVQC/ATBWAzQBVA0hIA0QhIA0i7AXQhlAMhmAAQhYAAhagJg"),
            J = (new a.Graphics).p("AoPF6Qi+gXhLg0QhMg1BTgzQBSgzDAgVQC/gUC/AXQC9AXBLA0QBLA0hSAzQhTA0i/AUQhaAKhaAAQhlAAhkgMgAHaEhQibgmgLg4QgNg4CKgqQCJgqDNgDQDOgDCaAmQCbAlALA4QAOA4iJAqQiKAqjNADIgjAAQi5AAiNgigAvEBzQjPgFiCgsQiEgsAUg3QAUg4CggjQCegjDOAFQDNAGCEAsQCCArgUA4QgUA3ieAkQiJAeipAAIg6gBgAgWBkQiLgKhLgiQhKgjAkglQAkgmB/gUQB9gUCMALQCLAKBLAiQBKAjgkAlQgkAmh/AUQhSANhZAAQgvAAgvgEgAMYAEQjHgNhpgxQhpgwA0g3QA1g2CxgcQCygcDHAPQDHAOBqAwQBpAxg1A2Qg0A2iyAdQhzARh9AAQhDAAhGgFgAmfiMQiugfgsg2Qgtg3BvgvQBvgvDKgMQDKgMCtAfQCtAeAtA3QAsA3hvAvQhvAvjJAMQg3ADg1AAQiNAAh+gWg"),
            K = (new a.Graphics).p("AICF5QjNgIh7guQh6gtAgg4QAeg3CnghQCngiDLAJQDNAJB6AuQB7AtggA4QgeA3inAhQiEAaiZAAQgpAAgsgCgAtgFhQipghggg3Qgjg4B5gtQB5guDMgJQDKgJCpAiQCoAhAhA3QAjA4h5AtQh5AujMAIQgrACgqAAQiZAAiFgagAj0BdQhogcgBgnQgBgnBngcQBlgcCSAAQCSAABnAcQBoAcABAnQABAnhnAcQhmAciSAAQiRAAhngcgALNA/Qi3gZhBg1QhCg2BcgxQBdgyDEgSQDEgRC4AaQC6AZBBA1QBAA2hcAxQhdAyjEASQhOAGhNAAQhzAAhvgPgAxDBIQjFgShegyQhggxA/g2QA/g1C3gZQC3gaDFARQDFASBgAyQBdAxg+A2Qg/A1i2AZQhvAPhzAAQhMAAhPgGgAliiTQiTgngBg4QgBg4CRgoQCQgoDQAAQDOAACSAoQCUAoABA4QABA4iRAnQiRAojOAAQjPAAiTgog"),
            L = (new a.Graphics).p("An9FsQi3gVhIgzQhJgyBRgyQBPgxC5gUQC4gTC3AWQC3AWBIAyQBIAzhPAxQhQAxi4AUQhXAJhWAAQhhAAhigMgAHIEXQiVglgKg2QgNg2CFgoQCEgoDFgDQDHgDCUAkQCVAkALA2QAOA2iFAoQiEApjGADIgeAAQi0AAiKghgAuiBwQjGgGh+gqQh/gqAUg1QATg2CagiQCYgiDHAGQDFAFB/AqQB9AqgTA2QgUA1iYAiQiFAdikAAIg2AAgAgWBhQiGgJhIgiQhHghAjgjQAjglB6gTQB4gUCHAKQCHAKBHAhQBIAhgjAkQgjAkh6AUQhQAMhXAAQgsAAgtgDgAL7AEQi/gMhmgvQhlgvAyg0QAzg0CrgbQCrgbDAAOQDAANBlAvQBmAvgzA0QgyA0isAbQhvARh6AAQhAAAhCgFgAmQiHQingdgsg0Qgqg1BrguQBrgtDCgLQDDgMCmAeQCoAdAqA1QArA1hrAtQhrAtjBAMQg1ADgzAAQiJAAh5gWg"),
            M = (new a.Graphics).p("AGSEnQiggHhggjQhggkAZgsQAXgrCDgaQCDgaCeAHQCgAHBgAkQBgAjgZAsQgYAriCAaQhoAUh4AAIhBgBgAqjEUQiEgagZgrQgbgsBegjQBfgkCfgHQCegHCEAaQCDAaAaArQAbAsheAkQhfAjifAHIhCABQh4AAhogUgAi+BJQhRgWgBgfQgBgeBQgWQBQgWBxAAQByAABRAWQBRAWABAeQAAAfhQAWQhPAWhzAAQhxAAhQgWgAIwAxQiPgUgzgpQgzgqBIgmQBJgnCZgOQCZgOCQAUQCRAUAzAqQAyAqhIAmQhIAniaAOQg+AFg8AAQhZAAhXgMgAtVA4QiZgOhKgnQhLgmAxgqQAxgqCQgUQCPgUCaAOQCaAOBLAnQBIAmgxAqQgwApiPAUQhWAMhZAAQg9AAg+gFgAkUhzQhzgfgBgsQgBgrBygfQBxgfCiAAQChAAByAfQBzAfABArQABAshyAfQhxAfihAAQiiAAhygfg"),
            N = (new a.Graphics).p("ABpDkQhzgMgzgfQgzgfArgfQArgfBwgOQBxgOBzAMQB0AMAzAfQA0AegsAgQgrAfhwAOQg8AIg8AAQg2AAg3gGgAnlDCQh7gBhUgZQhVgZAHgiQAEgiBcgWQBbgXB8ACQB7ACBUAZQBUAZgGAhQgEAihbAWQhWAVhyAAIgQAAgAFvAzQhhgVgOghQgOghBMgbQBOgaB6gDQB8gEBgAVQBhAVAOAiQAOAghMAaQhNAbh8ADIgiABQhmAAhTgSgAhNA9QhWgFgwgUQgwgTASgXQARgXBJgNQBHgNBWAFQBWAFAvAUQAwATgRAXQgRAXhKANQgzAJg6AAIgvgBgAq6gEQhsgRghggQghggA9geQA9gdB3gJQB3gJBsARQBrARAiAgQAhAhg9AdQg9Adh3AIQgpADgnAAQhMAAhHgKgAAWhJQh5gGhDgcQhFgdAYghQAZggBngSQBmgTB6AHQB6AHBDAcQBFAcgYAhQgZAhhnASQhLANhUAAQggAAgigCg"),
            O = (new a.Graphics).p("ADWCdQhVgDgzgTQgzgTANgXQANgXBFgOQBGgOBVAEQBVADAzATQA0ATgOAXQgMAYhGANQg3ALg/AAIglgBgAloCTQhGgNgOgYQgOgXAygTQAygTBWgDQBTgEBHAOQBHAOANAXQAPAXgzATQgyAThVADIglABQg/AAg3gLgAhmAnQgrgMAAgQQgBgQArgMQArgLA8AAQA9AAArALQArAMAAAQQABAQgrAMQgqAMg9AAQg8AAgsgMgAErAaQhNgKgbgWQgbgWAmgVQAngVBSgHQBSgHBNAKQBNALAbAWQAcAXgnAUQgnAVhSAHQghADggAAQgwAAgugHgAnHAeQhSgHgngVQgogUAagXQAagWBNgLQBMgKBSAHQBSAHAoAVQAnAVgaAWQgaAWhMAKQguAHgwAAQggAAghgDgAiTg9Qg+gQAAgYQgBgXA9gRQA8gQBXAAQBVAAA9AQQA+ARAAAXQABAYg9AQQg8ARhWAAQhWAAg9gRg"),
            P = (new a.Graphics).p("ABJCfQhPgIglgWQgjgVAegWQAegWBOgKQBPgJBQAIQBQAIAkAWQAkAVgeAWQgeAWhOAKQgqAFgqAAQgmAAgmgEgAlRCHQhWgBg7gRQg6gRAEgYQADgXBAgQQBAgQBWABQBVACA7ARQA6ARgEAYQgDAXg/AQQg7AOhMAAIgPAAgAD/AkQhCgPgLgWQgKgYA2gSQA1gSBWgDQBVgCBEAOQBDAPAKAXQAKAXg1ASQg2AShWADIgYAAQhHAAg6gMgAg1ArQg8gEghgOQgigNAMgQQAMgQAzgJQAygJA7AEQA8ADAhAOQAhANgMAQQgLAQg0AJQglAHgqAAIgdgBgAnmgCQhLgMgXgWQgXgXAqgUQArgVBTgGQBSgGBMAMQBKALAXAXQAYAWgrAVQgqAUhTAFQgcACgcAAQg0AAgygGgAAPgyQhTgFgwgTQgwgUARgXQASgXBIgNQBGgMBVAEQBUAFAwAUQAwATgRAXQgSAXhHANQg2AJg8AAIgrgBg");
        this.timeline.addTween(a.Tween.get(f).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(4).to({
            graphics: d,
            x: -3.725,
            y: 81.836
        }).wait(1).to({
            graphics: e,
            x: -10.5243,
            y: 99.5743
        }).wait(1).to({
            graphics: g,
            x: -3.5621,
            y: 95.4753
        }).wait(1).to({
            graphics: h,
            x: 2.8688,
            y: 96.037
        }).wait(1).to({
            graphics: k,
            x: 3.3592,
            y: 97.2457
        }).wait(1).to({
            graphics: l,
            x: -2.8217,
            y: 98.9789
        }).wait(1).to({
            graphics: n,
            x: -9.0066,
            y: 97.3494
        }).wait(1).to({
            graphics: p,
            x: -9.5681,
            y: 95.5512
        }).wait(1).to({
            graphics: u,
            x: -3.4732,
            y: 93.7964
        }).wait(1).to({
            graphics: z,
            x: 2.7496,
            y: 95.5345
        }).wait(1).to({
            graphics: q,
            x: 3.3592,
            y: 97.2457
        }).wait(1).to({
            graphics: r,
            x: -2.8217,
            y: 98.9789
        }).wait(1).to({
            graphics: t,
            x: -9.0066,
            y: 97.3494
        }).wait(1).to({
            graphics: v,
            x: -9.5681,
            y: 95.5512
        }).wait(1).to({
            graphics: w,
            x: -3.4732,
            y: 93.7964
        }).wait(1).to({
            graphics: m,
            x: 2.7496,
            y: 95.5345
        }).wait(1).to({
            graphics: A,
            x: 3.3592,
            y: 97.2457
        }).wait(1).to({
            graphics: B,
            x: -2.8217,
            y: 98.9789
        }).wait(1).to({
            graphics: C,
            x: -9.0066,
            y: 97.3494
        }).wait(1).to({
            graphics: D,
            x: -9.5681,
            y: 95.5512
        }).wait(1).to({
            graphics: E,
            x: -3.4732,
            y: 93.7964
        }).wait(1).to({
            graphics: F,
            x: 2.7496,
            y: 95.5345
        }).wait(1).to({
            graphics: G,
            x: 3.3592,
            y: 97.2457
        }).wait(1).to({
            graphics: H,
            x: -2.8217,
            y: 98.9789
        }).wait(1).to({
            graphics: I,
            x: -9.0066,
            y: 97.3494
        }).wait(1).to({
            graphics: J,
            x: -9.5681,
            y: 95.5512
        }).wait(1).to({
            graphics: K,
            x: -3.4732,
            y: 93.7964
        }).wait(1).to({
            graphics: L,
            x: -10.4333,
            y: 100.7469
        }).wait(1).to({
            graphics: M,
            x: -4.3565,
            y: 93.3742
        }).wait(1).to({
            graphics: N,
            x: -.2824,
            y: 88.5613
        }).wait(1).to({
            graphics: O,
            x: -3.8185,
            y: 81.9194
        }).wait(1).to({
            graphics: P,
            x: -1.2396,
            y: 82.5661
        }).wait(2));
        this.fff_l = new b.white;
        this.fff_l.name =
            "fff_l";
        this.fff_l.parent = this;
        this.fff_l.setTransform(-4, 73.4, 1.9646, .5346, 0, -1.4965, 0, 0, -43);
        this.fff_l.alpha = 0;
        this.fff_l._off = !0;
        d = [this.fff_l];
        for (e = 0; e < d.length; e++) d[e].mask = f;
        this.timeline.addTween(a.Tween.get(this.fff_l).wait(18).to({
            _off: !1
        }, 0).to({
            alpha: .1992,
            compositeOperation: NaN
        }, 6).to({
            alpha: 0
        }, 6).wait(7));
        this.fff = new b.white;
        this.fff.name = "fff";
        this.fff.parent = this;
        this.fff.setTransform(-4, 73.4, 1.9646, .5346, 0, -1.4965, 0, 0, -43);
        this.fff.alpha = .5;
        this.fff._off = !0;
        d = [this.fff];
        for (e =
            0; e < d.length; e++) d[e].mask = f;
        this.timeline.addTween(a.Tween.get(this.fff).wait(18).to({
            _off: !1
        }, 0).to({
            alpha: .8984
        }, 6).to({
            alpha: .5
        }, 6).wait(7));
        this.bg_mc = new b.bg_mc;
        this.bg_mc.name = "bg_mc";
        this.bg_mc.parent = this;
        this.bg_mc._off = !0;
        d = [this.bg_mc];
        for (e = 0; e < d.length; e++) d[e].mask = f;
        this.timeline.addTween(a.Tween.get(this.bg_mc).wait(4).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 32).wait(1))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-151.2, -239.5, 296.1, 385.1);
    (b.common_gacha = function(f, d, e) {
        this.initialize(f,
            d, e, {
                light_to_dark: 1,
                main: 30,
                toop: 69,
                open: 74,
                fsr: 85,
                fsrn: 90,
                movie_end: 95,
                skip: 100,
                skip2: 112,
                movie_end_s: 120,
                skip_s: 137,
                toSref: 145,
                toSrefPlain: 157,
                cLoop: 171,
                skip3: 176,
                open2: 186,
                fsr2: 201,
                open3: 206,
                fsr3: 228,
                sref: 233,
                srefSkip: 273,
                srefSkip2: 275,
                premium_ef: 288,
                sref2: 311,
                sref3: 319,
                single: 333
            });
        this.frame_0 = function() {
            var a = window.im_cjs,
                b = exportRoot._g = exportRoot._g || {};
            b.gType = void 0 === a.petit_id1 ? 1 : 2;
            exportRoot._url = a._url;
            exportRoot.card_all = a.card_all;
            exportRoot.card_count = a.card_count;
            exportRoot.max_card_count =
                a.max_card_count;
            for (d = 1; 10 >= d; d++) exportRoot["new_card" + d] = window.im_cjs["new_card" + d] || 0, exportRoot["card_name" + d] = window.im_cjs["card_name" + d], exportRoot["rare" + d] = window.im_cjs["rare" + d], exportRoot["card_att" + d] = window.im_cjs["card_att" + d], exportRoot["card_def" + d] = window.im_cjs["card_def" + d], exportRoot["card_cost" + d] = window.im_cjs["card_cost" + d], exportRoot["card_pop" + d] = window.im_cjs["card_pop" + d] || 0, 2 <= b.gType && (exportRoot["petit_id" + d] = window.im_cjs["petit_id" + d], exportRoot["petit_small_flag" +
                d] = window.im_cjs["petit_small_flag" + d], exportRoot["premium_card_flag" + d] = window.im_cjs["premium_card_flag" + d], exportRoot["srMes" + d + "_1"] = window.im_cjs["srMes" + d + "_1"], exportRoot["srMes" + d + "_2"] = window.im_cjs["srMes" + d + "_2"], exportRoot["srMes" + d + "_3"] = window.im_cjs["srMes" + d + "_3"], exportRoot["srMes" + d + "_4"] = window.im_cjs["srMes" + d + "_4"], exportRoot["srMes" + d + "_5"] = window.im_cjs["srMes" + d + "_5"]);
            2 <= b.gType && (exportRoot.srFlg1 = a.srFlg1, exportRoot.srFlg2 = a.srFlg2, exportRoot.premium_card_effect_flag = window.im_cjs.premium_card_effect_flag ||
                0, exportRoot.call_flag = window.im_cjs.call_flag || 0, exportRoot.call_msg = window.im_cjs.call_msg || "\u25cb\u25cb\u25cb\u25cb\u25cb\u25cb\u3055\u3093\u2026\u2026", exportRoot.light_bg_flag = window.im_cjs.light_bg_flag);
            exportRoot.petit_ch_pos_y = exportRoot.set_petit.icon1.petit_window.c.y;
            exportRoot.my_number = 1;
            exportRoot.nokori = 5;
            exportRoot.retry_url = "http://www.google.co.jp/";
            exportRoot.retry_flag = 0;
            exportRoot.mes1 = "\u3072\u3068\u3053\u3068\u3081";
            exportRoot.mes2 = "\u3075\u305f\u3053\u3068\u3081";
            exportRoot.mes3 =
                "\u3055\u3093";
            exportRoot.mes4 = "\u3088\u3093";
            exportRoot.mes5 = "\u3054";
            exportRoot.mes6 = "\u308d\u304f";
            exportRoot.mes7 = "\u306a\u306a";
            exportRoot.mes8 = "\u306f\u3061";
            exportRoot.mes9 = "\u304d\u3085\u3046";
            exportRoot.mes10 = "\u3058\u3085\u3046";
            exportRoot.Dig1 = 0;
            exportRoot.Dig2 = 0;
            exportRoot.Dig3 = 0;
            exportRoot.Dig4 = 0;
            exportRoot.Dig5 = 0;
            exportRoot.Dig6 = 0;
            exportRoot.Dig7 = 0;
            exportRoot.Dig8 = 0;
            exportRoot.Dig9 = 0;
            exportRoot.Dig10 = 0;
            for (var d = 1; d <= exportRoot.card_all; d++) exportRoot["mes" + d] = exportRoot["card_name" +
                d] + "(" + exportRoot["rare" + d] + ")\u304c\u6240\u5c5e!\n\u653b : " + exportRoot["card_att" + d] + "\u3000\u5b88 : " + exportRoot["card_def" + d] + "\n\uff7a\uff7d\uff84 : " + exportRoot["card_cost" + d], 0 < this["card_pop" + d] && (exportRoot["mes" + d] = exportRoot["mes" + d] + "\n\u4eba\u6c17\u5ea6+" + exportRoot["card_pop" + d]);
            exportRoot.srNum = 0;
            for (d = 1; d <= exportRoot.card_all; d++) {
                exportRoot["srMes" + d + "_1"] && exportRoot.srNum++;
                switch (exportRoot["petit_id" + d]) {
                    case 1:
                        add_message = "\n\u3055\u3089\u306b\u3077\u3061\uff83\uff9e\uff9a\uff97\u3092\uff79\uff9e\uff6f\uff84!";
                        break;
                    case 2:
                        add_message = "\n\u3055\u3089\u306b\u3077\u3061\uff83\uff9e\uff9a\uff97\uff65\u3077\u3061\u8863\u88c5\u3092\uff79\uff9e\uff6f\uff84!";
                        break;
                    case 3:
                        add_message = "\n\u3055\u3089\u306b\uff7d\uff76\uff73\uff84\uff92\uff80\uff9e\uff99\u3092\uff79\uff9e\uff6f\uff84!";
                        break;
                    case 4:
                        add_message = "\n\u3055\u3089\u306b\u3077\u3061\u8863\u88c5\u3092\uff79\uff9e\uff6f\uff84!";
                        break;
                    case 5:
                        add_message = "\n\u3055\u3089\u306b\uff7d\uff76\uff73\uff84\uff92\uff80\uff9e\uff99\uff65\u3077\u3061\u8863\u88c5\u3092\uff79\uff9e\uff6f\uff84!"
                }
                0 <
                    exportRoot["petit_id" + d] && (exportRoot["mes" + d] += add_message)
            }
            exportRoot.srCnt = 0;
            exportRoot.srExtraCnt = 0;
            exportRoot.count = 1;
            exportRoot.key_flag = 0;
            exportRoot.retry_enble = 0;
            exportRoot.plain_SR_flag = 0;
            exportRoot.SR_limit = 10;
            exportRoot.skipped_flag = 0;
            exportRoot.pre_sr_count = 0;
            for (d = 1; d <= exportRoot.card_all; d++)
                if (exportRoot.srr = exportRoot["srMes" + d + "_1"], exportRoot.srr || "S\uff9a\uff71" == exportRoot["rare" + d] && 1 == exportRoot["premium_card_flag" + d]) exportRoot.pre_sr_count++, exportRoot["array_SR" + exportRoot.pre_sr_count] =
                    d;
            var e = this;
            exportRoot.next = function() {
                exportRoot.count++;
                exportRoot.count <= exportRoot.card_all ? exportRoot.branchNextCard() : 0 == exportRoot.key_flag && (exportRoot.key_flag = 1, window.location.href = exportRoot._url)
            };
            exportRoot.setSR = function() {
                exportRoot.srCnt++;
                for (d = 1; 6 > d; d++) exportRoot["tfv" + d] = exportRoot["srMes" + exportRoot.count + "_" + d];
                exportRoot.bCard.gotoAndStop(exportRoot.srCnt - 1);
                exportRoot.bCard.replace_sign_container.gotoAndStop(exportRoot.count - 1)
            };
            exportRoot.firstJudge = function() {
                exportRoot.srMes1_1 ?
                    exportRoot.gotoAndPlay("fsr") : "S\uff9a\uff71" == exportRoot.rare1 && exportRoot.premium_card_flag1 ? (exportRoot.plain_SR_flag = 1, exportRoot.nextCard(), exportRoot.gotoAndPlay("fsrn")) : 1 < exportRoot.card_all ? exportRoot.gotoAndPlay("movie_end") : exportRoot.gotoAndPlay("movie_end_s")
            };
            exportRoot.branchNextCard = function() {
                exportRoot.srr = exportRoot["srMes" + exportRoot.count + "_1"];
                exportRoot.srCnt + 1 > exportRoot.SR_limit ? e.gotoAndPlay("cLoop") : exportRoot.srr ? e.gotoAndPlay("toSref") : "S\uff9a\uff71" == exportRoot["rare" +
                    exportRoot.count] && exportRoot["premium_card_flag" + exportRoot.count] ? (exportRoot.plain_SR_flag = 1, e.gotoAndPlay("toSrefPlain")) : e.gotoAndPlay("cLoop")
            };
            exportRoot.nextCard = function() {
                exportRoot.new_card = exportRoot["new_card" + exportRoot.count];
                exportRoot.tf.text = exportRoot["mes" + exportRoot.count];
                var a = exportRoot.card_count + exportRoot.count;
                exportRoot.max_card_count <= exportRoot.nokori + a && exportRoot.cardNum.gotoAndStop(1);
                exportRoot.cardNum.t.text = a + "/" + exportRoot.max_card_count + "\u4eba";
                e.new_effect.visible =
                    1 != exportRoot.new_card ? !1 : !0
            };
            exportRoot.petit_icon = function() {
                exportRoot["petit_id" + exportRoot.count] ? (e.set_petit.icon1.petit_window.c.gotoAndStop(exportRoot.count - 1), e.set_petit.icon2.costume.gotoAndStop(exportRoot.count - 1), e.set_petit.gotoAndPlay("pattern" + exportRoot["petit_id" + exportRoot.count]), e.set_petit.icon1.petit_window.c.y = 1 == exportRoot["petit_small_flag" + exportRoot.count] ? exportRoot.petit_ch_pos_y - 3 : exportRoot.petit_ch_pos_y) : e.set_petit.gotoAndPlay("pattern0")
            };
            exportRoot.pop_num_display =
                function() {
                    var a = exportRoot["pop_num" + exportRoot.target].set_num.my_number,
                        b = exportRoot.target;
                    a = 99 < a ? 99 : a;
                    this.pop_num_large.n.set_num.gotoAndStop(2);
                    this.pop_num_large.n.set_num_w.gotoAndStop(2);
                    0 < a ? 10 > a ? (this["pop_num" + b].set_num.gotoAndStop(1), this["pop_num" + b].set_num_w.gotoAndStop(1), this["pop_num" + b].set_num.n1.num.gotoAndStop(a - 1)) : (this["pop_num" + b].set_num.gotoAndStop(0), this["pop_num" + b].set_num_w.gotoAndStop(0), this["pop_num" + b].set_num.n2.num.gotoAndStop(parseInt(a / 10) - 1), this["pop_num" +
                        b].set_num.n1.num.gotoAndStop(a % 10 - 1)) : (this["pop_num" + b].set_num.gotoAndStop(2), this["pop_num" + b].set_num_w.gotoAndStop(2))
                };
            exportRoot.pop_num_large_display = function() {
                var a = exportRoot["card_pop" + exportRoot.count],
                    b = exportRoot.target;
                a = 99 < a ? 99 : a;
                0 < a ? (10 > a ? (this.pop_num_large.n.set_num.gotoAndStop(1), this.pop_num_large.n.set_num_w.gotoAndStop(1), this.pop_num_large.n.set_num.n1.num.gotoAndStop(a - 1), this.pop_num_large.n.set_num_w.n1.num.gotoAndStop(a - 1)) : (this.pop_num_large.n.set_num.gotoAndStop(0),
                    this.pop_num_large.n.set_num_w.gotoAndStop(0), this.pop_num_large.n.set_num.n2.num.gotoAndStop(parseInt(a / 10) - 1), this.pop_num_large.n.set_num_w.n2.num.gotoAndStop(parseInt(a / 10) - 1), this.pop_num_large.n.set_num.n1.num.gotoAndStop(a % 10 - 1), this.pop_num_large.n.set_num_w.n1.num.gotoAndStop(a % 10 - 1)), 2 == b && (this.pop_num_large.n.set_num.visible = !0, this.pop_num_large.n.set_num_w.visible = !0)) : (this.pop_num_large.n.set_num.gotoAndStop(2), this.pop_num_large.n.set_num_w.gotoAndStop(2))
            };
            exportRoot.skip_control =
                function() {
                    exportRoot.skipped_flag = 1;
                    0 < exportRoot.pre_sr_count && exportRoot.srCnt < exportRoot.pre_sr_count ? (exportRoot.plain_SR_flag = 0, e.pop_num_large.n.gotoAndStop(0), exportRoot.count = exportRoot["array_SR" + (exportRoot.srCnt + 1)], exportRoot.srr = exportRoot["srMes" + exportRoot.count + "_1"], exportRoot.srr ? e.gotoAndPlay("sref") : "S\uff9a\uff71" == exportRoot["rare" + exportRoot.count] && 1 == exportRoot["premium_card_flag" + exportRoot.count] && (exportRoot.plain_SR_flag = 1, e.gotoAndPlay("srefSkip2"))) : 0 == exportRoot.key_flag &&
                        (exportRoot.key_flag = 1, window.location.href = exportRoot._url)
                };
            exportRoot.sign_effect_stop = function() {};
            exportRoot.sign_effect_play = function() {
                e.bCard.replace_sign_container.visible = !0
            };
            exportRoot.sign_effect_adjust = function() {
                e.sign_accentuator.visible = !1;
                if (exportRoot.bCard.replace_sign_container["replace_sign" + this.count].sign_effect) {
                    var a = exportRoot.bCard.replace_sign_container["replace_sign" + this.count].sign_effect.reflect_mask.x,
                        b = exportRoot.bCard.replace_sign_container["replace_sign" + this.count].sign_effect.reflect_mask.y;
                    exportRoot.sign_accentuator.visible = !0;
                    exportRoot.sign_accentuator.x = .375 * a;
                    exportRoot.sign_accentuator.y = .375 * b;
                    120 < exportRoot.sign_accentuator.x && exportRoot.sign_accentuator.gotoAndPlay("reverse")
                }
            }
        };
        this.frame_1 = function() {
            1 == this._g.gType ? (this.overlay_black.visible = !1, this.overlay_white.visible = !1, this.overlay_black2.visible = !1) : this.overlay_black2_l.visible = !1
        };
        this.frame_2 = function() {
            exportRoot.call_flag && 1 == exportRoot.call_flag || this.gotoAndPlay("main")
        };
        this.frame_3 = function() {};
        this.frame_30 =
            function() {
                this.li1.visible = !1;
                this.li2.visible = !1;
                this.li3.visible = !1;
                2 == exportRoot.srFlg1 ? (this.li3.visible = !0, this.li3.play()) : 1 == exportRoot.srFlg1 ? (this.li2.visible = !0, this.li2.play()) : (this.li1.visible = !0, this.li1.play());
                window.se_play("se_057")
            };
        this.frame_32 = function() {
            function a(d) {
                b.gotoAndPlay("toop");
                b.btn.removeEventListener("click", a)
            }
            var b = this;
            this.btn.removeAllEventListeners("click");
            this.btn.addEventListener("click", a);
            this.skip_btn.removeAllEventListeners("click");
            this.skip_btn.addEventListener("click",
                function(a) {
                    exportRoot.skip_control();
                    b.btn.removeAllEventListeners("click")
                })
        };
        this.frame_68 = function() {
            this.stop()
        };
        this.frame_69 = function() {
            this.li1.gotoAndPlay("toop");
            this.li2.gotoAndPlay("toop");
            this.li3.gotoAndPlay("toop");
            this.play()
        };
        this.frame_73 = function() {
            2 == exportRoot.srFlg2 ? this.gotoAndPlay("open3") : 1 == exportRoot.srFlg2 ? this.gotoAndPlay("open2") : this.gotoAndPlay("open")
        };
        this.frame_74 = function() {
            this.play()
        };
        this.frame_75 = function() {
            function a(d) {
                exportRoot.firstJudge();
                b.btn.removeEventListener("click",
                    a)
            }
            var b = this;
            this.btn.removeAllEventListeners("click");
            this.btn.addEventListener("click", a);
            window.se_play("se_058")
        };
        this.frame_76 = function() {
            this.curtain_ls.gotoAndPlay("open")
        };
        this.frame_84 = function() {
            exportRoot.firstJudge()
        };
        this.frame_89 = function() {
            this.gotoAndPlay("sref")
        };
        this.frame_90 = function() {};
        this.frame_94 = function() {
            this.gotoAndPlay("srefSkip2")
        };
        this.frame_95 = function() {};
        this.frame_100 = function() {
            this.card1.gotoAndStop(exportRoot.count - 1);
            this.card2.gotoAndStop(exportRoot.count);
            exportRoot.target = 1;
            exportRoot["pop_num" + exportRoot.target].set_num.my_number = exportRoot["card_pop" + exportRoot.count];
            exportRoot.pop_num_display();
            window.se_play("se_059")
        };
        this.frame_101 = function() {
            function a(d) {
                b.gotoAndPlay("skip2");
                b.pop_num1.gotoAndPlay("fix");
                b.btn.removeEventListener("click", a);
                b.particle_rise.restart()
            }
            var b = this;
            this.btn.removeAllEventListeners("click");
            this.btn.addEventListener("click", a)
        };
        this.frame_105 = function() {
            this.pop_num1.gotoAndPlay("run")
        };
        this.frame_109 = function() {
            this.particle_rise.restart()
        };
        this.frame_112 = function() {
            this.btn.removeAllEventListeners("click");
            1 == exportRoot._g.gType && (exportRoot.cardNum.visible = !0);
            exportRoot.nextCard();
            exportRoot.petit_icon()
        };
        this.frame_113 = function() {
            function a(d) {
                exportRoot.count++;
                exportRoot.branchNextCard();
                b.btn.removeEventListener("click", a)
            }
            var b = this;
            this.btn.removeAllEventListeners("click");
            this.btn.addEventListener("click", a)
        };
        this.frame_119 = function() {
            this.stop()
        };
        this.frame_120 = function() {};
        this.frame_125 = function() {
            exportRoot.target = 1;
            this.pop_num_large.n.gotoAndStop(0);
            exportRoot.pop_num_large.n.set_num.my_number = exportRoot["card_pop" + exportRoot.count];
            exportRoot.pop_num_large_display();
            window.se_play("se_060")
        };
        this.frame_126 = function() {
            function a(d) {
                b.gotoAndPlay("skip_s");
                b.pop_num_large.n.gotoAndPlay("fix");
                b.btn.removeEventListener("click", a)
            }
            var b = this;
            this.btn.removeAllEventListeners("click");
            this.btn.addEventListener("click", a)
        };
        this.frame_130 = function() {};
        this.frame_134 = function() {
            this.particle_rise.restart()
        };
        this.frame_137 = function() {
            1 == exportRoot._g.gType &&
                (exportRoot.cardNum.visible = !0);
            1 == this.new_card1 ? this.new_effect.gotoAndPlay("appear") : this.pop_num_large.gotoAndStop(1);
            this.pop_num_large.n.gotoAndPlay("run");
            exportRoot.nextCard();
            exportRoot.petit_icon()
        };
        this.frame_138 = function() {
            function a(d) {
                0 == exportRoot.key_flag ? (exportRoot.key_flag = 1, window.location.href = exportRoot._url) : b.btn.removeEventListener("click", a)
            }
            var b = this;
            this.btn.removeAllEventListeners("click");
            this.btn.addEventListener("click", a)
        };
        this.frame_144 = function() {
            this.stop()
        };
        this.frame_145 =
            function() {
                0 == exportRoot.skipped_flag ? this.card2.gotoAndStop(exportRoot.count - 2) : this.card2.gotoAndStop(exportRoot.array_SR + exportRoot.srCnt);
                this.card3.gotoAndStop(exportRoot.count - 1);
                exportRoot.target = 2;
                exportRoot["pop_num" + exportRoot.target].set_num.my_number = 0 == exportRoot.skipped_flag ? exportRoot["card_pop" + (exportRoot.count - 1)] : exportRoot["card_pop" + exportRoot["array_SR" + exportRoot.srCnt]];
                exportRoot.pop_num_display()
            };
        this.frame_148 = function() {
            this.gotoAndPlay("sref")
        };
        this.frame_157 = function() {
            0 ==
                exportRoot.skipped_flag ? this.card2.gotoAndStop(exportRoot.count - 1) : this.card2.gotoAndStop(exportRoot.array_SR + exportRoot.srCnt);
            this.card3.gotoAndStop(exportRoot.count);
            exportRoot.target = 2;
            exportRoot["pop_num" + exportRoot.target].set_num.my_number = 0 == exportRoot.skipped_flag ? exportRoot["card_pop" + (exportRoot.count - 1)] : exportRoot["card_pop" + exportRoot["array_SR" + exportRoot.srCnt]];
            exportRoot.pop_num_display()
        };
        this.frame_160 = function() {
            this.gotoAndPlay("srefSkip2")
        };
        this.frame_171 = function() {
            this.card1.gotoAndStop(exportRoot.count -
                2);
            this.card2.gotoAndStop(exportRoot.count - 1);
            exportRoot.count < exportRoot.card_all ? this.card3.gotoAndStop(exportRoot.count) : this.card3.visible = 0;
            exportRoot.target = 1;
            this["pop_num" + exportRoot.target].set_num.my_number = this["card_pop" + (exportRoot.count - 1)];
            exportRoot.pop_num_display();
            exportRoot.target = 2;
            this["pop_num" + exportRoot.target].set_num.my_number = this["card_pop" + exportRoot.count];
            exportRoot.pop_num_display();
            this.pop_num2.gotoAndStop(0);
            this.new_effect.visible = 1 != exportRoot.new_card ? !1 : !0;
            window.se_play("se_060")
        };
        this.frame_172 = function() {
            function a(d) {
                b.gotoAndPlay("skip3");
                b.pop_num1.gotoAndPlay("fix");
                b.btn.removeEventListener("click", a)
            }
            var b = this;
            this.btn.removeAllEventListeners("click");
            this.btn.addEventListener("click", a)
        };
        this.frame_176 = function() {
            exportRoot.nextCard();
            exportRoot.petit_icon();
            this.pop_num2.gotoAndPlay("run");
            this.particle_rise.restart()
        };
        this.frame_177 = function() {
            function a(d) {
                exportRoot.next();
                b.btn.removeEventListener("click", a)
            }
            var b = this;
            this.btn.removeAllEventListeners("click");
            this.btn.addEventListener("click", a)
        };
        this.frame_185 = function() {
            this.stop()
        };
        this.frame_186 = function() {
            this.play();
            this.curtain_ls2.gotoAndPlay("open")
        };
        this.frame_187 = function() {
            window.se_play("se_058")
        };
        this.frame_189 = function() {
            function a(d) {
                exportRoot.srMes1_1 ? b.gotoAndPlay("fsr2") : b.gotoAndPlay("movie_end");
                b.btn.removeEventListener("click", a)
            }
            var b = this;
            this.btn.removeAllEventListeners("click");
            this.btn.addEventListener("click", a)
        };
        this.frame_200 = function() {
            this.btn.removeAllEventListeners("click");
            exportRoot.srMes1_1 ? this.gotoAndPlay("fsr2") : "S\uff9a\uff71" == exportRoot.rare1 && exportRoot.premium_card_flag1 ? (exportRoot.plain_SR_flag = 1, exportRoot.nextCard(), this.gotoAndPlay("fsrn")) : this.gotoAndPlay("movie_end")
        };
        this.frame_205 = function() {
            this.gotoAndPlay("sref")
        };
        this.frame_206 = function() {
            this.play()
        };
        this.frame_207 = function() {
            window.se_play("se_058")
        };
        this.frame_209 = function() {
            function a(d) {
                exportRoot.srMes1_1 ? b.gotoAndPlay("fsr3") : b.gotoAndPlay("movie_end");
                b.btn.removeEventListener("click",
                    a)
            }
            var b = this;
            this.curtain_ls.gotoAndPlay("open");
            this.btn.removeAllEventListeners("click");
            this.btn.addEventListener("click", a)
        };
        this.frame_227 = function() {
            this.btn.removeAllEventListeners("click");
            exportRoot.srMes1_1 ? this.gotoAndPlay("fsr3") : "S\uff9a\uff71" == exportRoot.rare1 && exportRoot.premium_card_flag1 ? (exportRoot.plain_SR_flag = 1, exportRoot.nextCard(), this.gotoAndPlay("fsrn")) : this.gotoAndPlay("movie_end")
        };
        this.frame_232 = function() {
            this.gotoAndPlay("sref")
        };
        this.frame_233 = function() {
            exportRoot.setSR();
            exportRoot.nextCard();
            this.pop_num_large.n.gotoAndStop(0);
            window.se_play("se_061")
        };
        this.frame_234 = function() {
            this.bCard.replace_sign_container.visible = !1
        };
        this.frame_236 = function() {
            function a(d) {
                b.gotoAndPlay("srefSkip");
                b.btn.removeEventListener("click", a)
            }
            var b = this;
            this.btn.removeAllEventListeners("click");
            this.btn.addEventListener("click", a)
        };
        this.frame_242 = function() {
            for (i = 1; 6 > i; i++) exportRoot["tf" + i].text = exportRoot["tfv" + i]
        };
        this.frame_273 = function() {
            exportRoot.target = 1;
            this.pop_num_large.n.set_num.my_number =
                exportRoot["card_pop" + exportRoot.count];
            this.pop_num_large.n.set_num_w.my_number = exportRoot["card_pop" + exportRoot.count];
            exportRoot.pop_num_large_display();
            1 != exportRoot.new_card ? this.pop_num_large.gotoAndStop(1) : this.pop_num_large.gotoAndStop(0);
            window.se_play("se_061_b")
        };
        this.frame_275 = function() {
            function a(d) {
                b.skip_control();
                b.btn.removeEventListener("click", a)
            }
            exportRoot.plain_SR_flag && (exportRoot.nextCard(), exportRoot.setSR(), this.pop_num_large.n.gotoAndStop(0), exportRoot.target = 1, this.pop_num_large.n.set_num.my_number =
                exportRoot["card_pop" + exportRoot.count], exportRoot.pop_num_large_display(), 1 != exportRoot.new_card && this.pop_num_large.gotoAndStop(1));
            this.bCard.replace_sign_container.visible = !1;
            var b = this;
            this.skip_btn.removeAllEventListeners("click");
            this.skip_btn.addEventListener("click", a)
        };
        this.frame_276 = function() {
            exportRoot.plain_SR_flag ? this.sr_comment_window.visible = !1 : (this.sr_comment_window.visible = !0, this.sr_comment_window.gotoAndPlay(0))
        };
        this.frame_277 = function() {
            this.pop_num_large.n.gotoAndPlay("run")
        };
        this.frame_278 = function() {
            function a(d) {
                1 == exportRoot["premium_card_flag" + exportRoot.count] ? b.gotoAndPlay("premium_ef") : b.gotoAndPlay("sref2");
                b.pop_num_large.n.gotoAndPlay("fix");
                b.btn.removeEventListener("click", a)
            }
            var b = this;
            this.btn.removeAllEventListeners("click");
            this.btn.addEventListener("click", a)
        };
        this.frame_287 = function() {
            this.stop()
        };
        this.frame_288 = function() {
            this.play();
            exportRoot.sign_effect_stop();
            0 == exportRoot.plain_SR_flag && this.sr_comment_window.gotoAndPlay("close")
        };
        this.frame_289 =
            function() {
                exportRoot.sign_effect_adjust()
            };
        this.frame_292 = function() {
            function a(d) {
                b.gotoAndPlay("sref2");
                b.btn.removeEventListener("click", a)
            }
            var b = this;
            this.btn.removeAllEventListeners("click");
            this.btn.addEventListener("click", a)
        };
        this.frame_303 = function() {
            exportRoot.sign_effect_play()
        };
        this.frame_311 = function() {
            exportRoot.plain_SR_flag = 0;
            exportRoot.petit_icon();
            this.pop_num_large.n.gotoAndPlay("fix");
            this.tfs.text = exportRoot["mes" + exportRoot.count]
        };
        this.frame_314 = function() {};
        this.frame_316 =
            function() {
                function a(d) {
                    if (1 != exportRoot.skipped_flag)
                        if (exportRoot.count >= exportRoot.card_all) {
                            if (0 == exportRoot.key_flag) {
                                exportRoot.key_flag = 1;
                                window.location.href = exportRoot._url;
                                return
                            }
                        } else b.gotoAndPlay("sref3");
                    else exportRoot.skip_control();
                    b.btn.removeEventListener("click", a)
                }
                var b = this;
                this.btn.removeAllEventListeners("click");
                this.btn.addEventListener("click", a)
            };
        this.frame_318 = function() {
            this.stop()
        };
        this.frame_319 = function() {
            exportRoot.target = 1;
            exportRoot["pop_num" + exportRoot.target].set_num.my_number =
                exportRoot["card_pop" + exportRoot.count];
            exportRoot.pop_num_display();
            this.pop_num1.gotoAndStop("fix")
        };
        this.frame_332 = function() {
            this.tfs.text = "";
            1 == exportRoot.key_flag ? this.stop() : exportRoot.count >= exportRoot.card_all ? this.stop() : (0 == exportRoot.skipped_flag ? exportRoot.count++ : exportRoot.count = exportRoot["array_SR" + (exportRoot.srCnt + 1)], exportRoot.nextCard(), exportRoot.branchNextCard())
        };
        this.frame_359 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(27).call(this.frame_30).wait(2).call(this.frame_32).wait(36).call(this.frame_68).wait(1).call(this.frame_69).wait(4).call(this.frame_73).wait(1).call(this.frame_74).wait(1).call(this.frame_75).wait(1).call(this.frame_76).wait(8).call(this.frame_84).wait(5).call(this.frame_89).wait(1).call(this.frame_90).wait(4).call(this.frame_94).wait(1).call(this.frame_95).wait(5).call(this.frame_100).wait(1).call(this.frame_101).wait(4).call(this.frame_105).wait(4).call(this.frame_109).wait(3).call(this.frame_112).wait(1).call(this.frame_113).wait(6).call(this.frame_119).wait(1).call(this.frame_120).wait(5).call(this.frame_125).wait(1).call(this.frame_126).wait(4).call(this.frame_130).wait(4).call(this.frame_134).wait(3).call(this.frame_137).wait(1).call(this.frame_138).wait(6).call(this.frame_144).wait(1).call(this.frame_145).wait(3).call(this.frame_148).wait(9).call(this.frame_157).wait(3).call(this.frame_160).wait(11).call(this.frame_171).wait(1).call(this.frame_172).wait(4).call(this.frame_176).wait(1).call(this.frame_177).wait(8).call(this.frame_185).wait(1).call(this.frame_186).wait(1).call(this.frame_187).wait(2).call(this.frame_189).wait(11).call(this.frame_200).wait(5).call(this.frame_205).wait(1).call(this.frame_206).wait(1).call(this.frame_207).wait(2).call(this.frame_209).wait(18).call(this.frame_227).wait(5).call(this.frame_232).wait(1).call(this.frame_233).wait(1).call(this.frame_234).wait(2).call(this.frame_236).wait(6).call(this.frame_242).wait(31).call(this.frame_273).wait(2).call(this.frame_275).wait(1).call(this.frame_276).wait(1).call(this.frame_277).wait(1).call(this.frame_278).wait(9).call(this.frame_287).wait(1).call(this.frame_288).wait(1).call(this.frame_289).wait(3).call(this.frame_292).wait(11).call(this.frame_303).wait(8).call(this.frame_311).wait(3).call(this.frame_314).wait(2).call(this.frame_316).wait(2).call(this.frame_318).wait(1).call(this.frame_319).wait(13).call(this.frame_332).wait(27).call(this.frame_359).wait(1));
        this.instance = new b.shield;
        this.instance.parent = this;
        this.instance.setTransform(119.2, 159.6, 1, 1, 0, 0, 0, -.8, -.4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(186).to({
            regX: 0,
            regY: 0,
            x: 120,
            y: 160
        }, 0).wait(174));
        this.instance_1 = new b.whole_skip;
        this.instance_1.parent = this;
        this.instance_1.setTransform(216, 10.9, 1, 1, 0, 0, 0, 52, 9.9);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(32).to({
            _off: !1
        }, 0).wait(113).to({
            _off: !0
        }, 88).wait(42).to({
            _off: !1
        }, 0).wait(85));
        this.txc =
            new b.calling_container;
        this.txc.name = "txc";
        this.txc.parent = this;
        this.txc.setTransform(120, 160, 1, 1, 0, 0, 0, 120, 160);
        this.txc._off = !0;
        this.timeline.addTween(a.Tween.get(this.txc).wait(3).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 42).wait(315));
        this.pa = new b.light_src;
        this.pa.name = "pa";
        this.pa.parent = this;
        this.pa._off = !0;
        this.timeline.addTween(a.Tween.get(this.pa).wait(288).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 23).wait(49));
        this.sign_accentuator = new b.sign_accentuator;
        this.sign_accentuator.name = "sign_accentuator";
        this.sign_accentuator.parent =
            this;
        this.sign_accentuator.setTransform(120, 160);
        this.sign_accentuator.alpha = 0;
        this.sign_accentuator._off = !0;
        this.timeline.addTween(a.Tween.get(this.sign_accentuator).wait(288).to({
            _off: !1
        }, 0).wait(1).to({
            alpha: 1
        }, 0).to({
            _off: !0
        }, 22).wait(49));
        this.instance_2 = new b.particle3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(165.85, 125.6, .6888, .6474);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(35).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 39).wait(286));
        this.instance_3 =
            new b.set_particle3;
        this.instance_3.parent = this;
        this.instance_3.setTransform(61.05, 125.3, .6888, .6474);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(34).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 40).wait(286));
        this.instance_4 = new b.particle3;
        this.instance_4.parent = this;
        this.instance_4.setTransform(4.35, 124.15, .993, .7669);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(33).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 41).wait(286));
        this.instance_5 = new b.efc_flash;
        this.instance_5.parent = this;
        this.instance_5.setTransform(31.35, 131.65, .7151, .7151);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(33).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: 1.4248,
            scaleY: 1.4248,
            x: 53.3,
            y: 126.85
        }, 0).wait(1).to({
            scaleX: .6165,
            scaleY: .6165,
            x: 193.35,
            y: 147.05
        }, 0).wait(1).to({
            scaleX: .441,
            scaleY: .441,
            x: 84.35,
            y: 108.1
        }, 0).wait(1).to({
            scaleX: .2265,
            scaleY: .2265,
            x: 208.55,
            y: 138.65
        }, 0).to({
            _off: !0
        }, 1).wait(322));
        this.instance_6 = new b.text_new_idol;
        this.instance_6.parent =
            this;
        this.instance_6.setTransform(120, 172);
        this.instance_6.alpha = .0117;
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(40).to({
            _off: !1
        }, 0).wait(1).to({
            alpha: .3008
        }, 0).to({
            alpha: 1
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 24).wait(291));
        this.title = new b.title;
        this.title.name = "title";
        this.title.parent = this;
        this.title._off = !0;
        this.timeline.addTween(a.Tween.get(this.title).wait(33).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 36).wait(291));
        this.instance_7 = new b.efc_flash;
        this.instance_7.parent =
            this;
        this.instance_7.setTransform(114.6, 2.1, 1.4248, 1.4248);
        this.instance_8 = new b.upper_light;
        this.instance_8.parent = this;
        this.instance_8.setTransform(120, -177.8, 4.6902, 1.8181);
        this.instance_8._off = !0;
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_7
            }]
        }, 34).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 3).to({
            state: [{
                t: this.instance_8
            }]
        }, 31).to({
            state: [{
                t: this.instance_8
            }]
        }, 3).to({
            state: []
        }, 1).wait(287));
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(35).to({
                _off: !1
            },
            0).to({
            scaleX: 4.3431,
            scaleY: 1.7185
        }, 3, a.Ease.get(1)).wait(31).to({
            scaleX: 2.3673,
            scaleY: 1.4344
        }, 3, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(287));
        this.li1 = new b.light_1;
        this.li1.name = "li1";
        this.li1.parent = this;
        this.li1.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.li1).wait(30).to({
            _off: !0
        }, 44).wait(286));
        this.li2 = new b.light_2;
        this.li2.name = "li2";
        this.li2.parent = this;
        this.li2.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.li2).wait(30).to({
            _off: !0
        }, 44).wait(286));
        this.li3 =
            new b.light_3;
        this.li3.name = "li3";
        this.li3.parent = this;
        this.li3.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.li3).wait(30).to({
            _off: !0
        }, 44).wait(286));
        this.overlay_white = new b.white;
        this.overlay_white.name = "overlay_white";
        this.overlay_white.parent = this;
        this.overlay_white.setTransform(120, 160);
        this.overlay_white.alpha = 0;
        this.overlay_white._off = !0;
        this.timeline.addTween(a.Tween.get(this.overlay_white).wait(90).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(62).to({
            _off: !1,
            alpha: 0
        }, 0).to({
            alpha: 1
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(199));
        this.overlay_black = new b.fade_black;
        this.overlay_black.name = "overlay_black";
        this.overlay_black.parent = this;
        this.overlay_black.setTransform(120, 160);
        this.overlay_black.alpha = .9492;
        this.timeline.addTween(a.Tween.get(this.overlay_black).to({
            _off: !0
        }, 3).wait(82).to({
            _off: !1,
            alpha: .1211
        }, 0).to({
            alpha: .9492
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(111).to({
            _off: !1,
            alpha: .1211
        }, 0).to({
            alpha: .9492
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(22).to({
            _off: !1,
            alpha: .1211
        }, 0).to({
            alpha: .9492
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(127));
        this.particle = new b.particle1;
        this.particle.name = "particle";
        this.particle.parent = this;
        this.particle.setTransform(92.95, 107.05, .7805, .7805, 0, 0, 0, -39.6, -8.1);
        this.particle._off = !0;
        this.timeline.addTween(a.Tween.get(this.particle).wait(188).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 18).wait(2).to({
            _off: !1,
            x: 95.35,
            y: 132.7
        }, 0).to({
            _off: !0
        }, 25).wait(127));
        this.instance_9 = new b.asset_efc_flashWhite2;
        this.instance_9.parent = this;
        this.instance_9.setTransform(120,
            160, 1.3892, 1.3892);
        this.instance_9._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(208).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 1).wait(151));
        f = new a.Shape;
        f._off = !0;
        d = (new a.Graphics).p("AJTcYQk0iOhJjKQhJjJDMiPQDMiOFqAAQFrAAE0COQEzCPBJDJQBJDKjLCOQjMCPlrAAQlqAAk0iPgA8ncYQjLiOBJjKQBJjJEziPQE0iOFrAAQFqAADMCOQDMCPhJDJQhJDKk0COQk0CPlqAAQlrAAjMiPgAMovbQiminAAjrQAAjsCmimQCninDsAAQDrAACnCnQCmCmAADsQAADrimCnQinCmjrAAQjsAAinimgAzhvbQiminAAjrQAAjsCmimQCminDsAAQDsAACmCnQCnCmAADsQAADrinCnQimCmjsAAQjsAAimimg");
        e = (new a.Graphics).p("AF/P8QjGhcgviBQgiheA7hKQAXhIAkhAQCEjqDoAAQDqAADFDqQA2BAArBIQBxBKAiBeQAvCBiCBcQiDBbjpAAQjpAAjGhbgAyZP8QiChcAuiBQAjheBxhKQAqhIA2hAQDHjqDpAAQDpAACDDqQAkBAAXBIQA7BKgiBeQgvCBjFBcQjHBbjoAAQjqAAiDhbgAE2hqQiLiKAAjEQAAjDCLiLQCJiKDFAAQDDAACKCKQCLCLgBDDQABDEiLCKQiKCJjDAAQjFAAiJiJgAwWhwQiJiKAAjDQAAjECJiKQCLiKDEAAQDDAACKCKQCLCKAADEQAADDiLCKQiKCKjDAAQjEAAiLiKg");
        var g = (new a.Graphics).p("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"),
            h = (new a.Graphics).p("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"),
            k = (new a.Graphics).p("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"),
            l = (new a.Graphics).p("AE8W1QhkgngCgyQgBgIADgFIADgFIAKAAQAcAUBHAPQBOARBWABQC1gBBvgkQBkgfgMgnQgCgGgKgEQgUgJgwAAQiUAAhAAIQgoAFgaAMQAIAIADAIQACAEAQgBICKgKQAKAAABABIAAADQgSAJglAKQg5ANg5AAQiSAAgDghQgEghCVgJQCogLAPgJQgJgCg9gDIhIgDQgPAAgrADQgvADgYAEQgQACgsAKQglAHgLAAQgLAAAAgBIADgCQASgWAAgDIgDgMIhZh+QgSALgjAKQgcAHgKAAIgegDIgrgJIADgCIgNAEQACADAHADQA4ABAGAFIgEACQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAAAIgyACQgbAAg2gPQgugOgSgKQgqA6gmAzQgRAVAAAJQgBAHA5AqQA7AsgBAdQgDAqhQAnQhxA0jNABQjKAAh7g1QhxgwAXg9QAHgUAkgZQAkgYAUAAIAKAAIgDACQgKAlA+AdQBbArDWAAQBqAAAlgJQASgEAFgJQgigfipgEQiTgFAKglQADgLAagJQAigMA7AAQAsAAB2AUIAFACIASABQAMAAAWgDQATgCAAgCIgBgCQgygUhVgLQiRgPgFgCIABAAIAwgWQAygYAZgVIBbg9IBshTQACgUgbgJIgdgFQgdAAgcAcQgwAvglAYQg3AihPAcQhhAhhKAAQhIAAAHgTQAEgNA1gWQA1gXABgBQgBgCgNADQgOACgKAEQgQAFgzAKQg9AMgcAAQh2AAANgdQAJgUBFgKQBegOAKgDIgBgBQhhANhVgKQhOgKAKgTQAGgNAlgGQAjgGAzAAQBFgBBmgNQBYgOAigLQCBgpBhg1QAggTAQgEQAYgJAkABQAwgBAXAiQAOAVAqBLIB7hlIACgCQAAAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgCQAAgFgDgDIgFgDQgWAFgZgEQgcgFgSgCIgrgCQgagBgSgHQgMgEgKgBQgNgCgbgCQgWgBgOgHQgMgHACgGQAAgFAKgEQANgGAXABQAVgBAQACQALgCAhgbQAegYBcgIQA0gFAsABIgLgDIgygDQgcgCgGgCQAUgIAaAAQAcAAASAGQAGACARAKIAUgNQANgFAjAAQARAAALACQAIACAKAEIgEAEIgVABIgkgCQgUgBgOAHIAYgBQDiAOAHAtQADAZhTAXQhcAagDAEQACADAzAtIA2AuQAOgnASgbQAigyA7ABQAugBB0A3QCIBBAgAGQCWAiCeAHQA/ADANACQAbAEAGAMQAGAMgkAMQgmALhDAAIg5gDIg5gEQgKAAADABIADAAQC+AagEAbQgGAXhqAAQhIAAgygQQg5gRgNgBIA2AYQAxAWAEANQAHAThJAAQhAAAhoghQhVgagfgTQg9gngmgwQgXgdggAAQgIAAgRAFQgXAHABAJQABADB2BaQCGBoAiALQARAGBDAOQBCAMAVACQBYAJBCAgQA+AdALAfQAUA0hYAxQh0BBjsAAQizgBhygrgAA6OqIhFBmQBTARAgACQAHAAAFAEQgfAHgRAFIAIAJQBCAAAEADIgBABQgHADggADQggAEgLAEIABACQAIAGAhACQAoACAJACIgEABQgEACggACIgcADQA0ACAQgFQAIgCABgFQgJgFgjgBQgkgCgHgDIAAgCIA8gDQAWgCAAgKQgBgGgBAAQgBAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAgBQhGgBgDgEIAYgCQAWgEgDgNQAIgEA9gOQgkgogUgzQgLgaggABIgBAAQgWAAgMAQgABzMnQAlAMAWAAQAZAAAGgEQAEgCADgFIgDgCIgJAFQgJAEgSAAQgMAAgSgDIgXgGgAEWMdQAHgBAFgDQAGgDAKAAIAJABIAIABQgCgLADABQABAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAQgBgBAAgBQAAgBgBAAQAAgBAAAAQgBAAAAABIgCACIgZAFQgQACgLAAIgdgEIgUgDIgFACIATAFQgGAEAEABQAIgBAIAAQAOAAAPAEgAAlMdQAHgBAJgDQAKgDAHAAQAHAAAGACIAEABIgBgBIABAAIgFgDQADgCAOgEQgEgBgWADIgfAEQgHAAgTgEQgUgEgGAAIgIABIADAAIAMAHQgGABAAACIADABIAKgBQAOAAATAFgANpOwQh0gRgQgBQA0gwA5gRQApgOA5AAQAmAAAaAIQAXAIAEAJQABACgGAGQgJAHgNAGQBCAJAaAKQATAGAFAKQAGAMgUAIQgcAMg/AAQgsAAhqgQgAukO4QgggIAIgRQAMgYBmgKIAAgBQgfgJAFgLQAHgQAngFQAmgGAxAGQB7APApA8Qg3ALgzAHQhmAQhaAAQgmAAgZgIgAjoCAQiCiAAAjdQAAjeCEi0QCDi0C2ABQC4AAB/C0QCACzAADeQAADdiCB+QiCB/i3ACIgFAAQizAAh/h/g"),
            n = (new a.Graphics).p("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");
        this.timeline.addTween(a.Tween.get(f).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(186).to({
            graphics: d,
            x: 103.575,
            y: 145.975
        }).wait(1).to({
            graphics: e,
            x: 125.35,
            y: 111.125
        }).wait(1).to({
            graphics: g,
            x: 110.8908,
            y: 142.7737
        }).wait(1).to({
            graphics: h,
            x: 119.7015,
            y: 156.127
        }).wait(1).to({
            graphics: k,
            x: 117.364,
            y: 152.5842
        }).wait(1).to({
            graphics: l,
            x: 115.9614,
            y: 150.4586
        }).wait(1).to({
            graphics: n,
            x: 115.4939,
            y: 149.75
        }).wait(14).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(154));
        this.curtain_ls2 = new b.bg;
        this.curtain_ls2.name = "curtain_ls2";
        this.curtain_ls2.parent =
            this;
        this.curtain_ls2.setTransform(120, 160);
        this.curtain_ls2.alpha = 0;
        d = [this.curtain_ls2];
        for (e = 0; e < d.length; e++) d[e].mask = f;
        this.timeline.addTween(a.Tween.get(this.curtain_ls2).wait(186).to({
            alpha: 1
        }, 0).to({
            _off: !0
        }, 20).wait(154));
        f = new a.Shape;
        f._off = !0;
        d = (new a.Graphics).p("AJTcYQk0iOhJjKQhJjJDMiPQDMiOFqAAQFrAAE0COQEzCPBJDJQBJDKjLCOQjMCPlrAAQlqAAk0iPgA8ncYQjLiOBJjKQBJjJEziPQE0iOFrAAQFqAADMCOQDMCPhJDJQhJDKk0COQk0CPlqAAQlrAAjMiPgAMovbQiminAAjrQAAjsCmimQCninDsAAQDrAACnCnQCmCmAADsQAADrimCnQinCmjrAAQjsAAinimgAzhvbQiminAAjrQAAjsCmimQCminDsAAQDsAACmCnQCnCmAADsQAADrinCnQimCmjsAAQjsAAimimg");
        e = (new a.Graphics).p("AF/P8QjGhcgviBQgiheA7hKQAXhIAkhAQCEjqDoAAQDqAADFDqQA2BAArBIQBxBKAiBeQAvCBiCBcQiDBbjpAAQjpAAjGhbgAyZP8QiChcAuiBQAjheBxhKQAqhIA2hAQDHjqDpAAQDpAACDDqQAkBAAXBIQA7BKgiBeQgvCBjFBcQjHBbjoAAQjqAAiDhbgAE2hqQiLiKAAjEQAAjDCLiLQCJiKDFAAQDDAACKCKQCLCLgBDDQABDEiLCKQiKCJjDAAQjFAAiJiJgAwWhwQiJiKAAjDQAAjECJiKQCLiKDEAAQDDAACKCKQCLCKAADEQAADDiLCKQiKCKjDAAQjEAAiLiKg");
        g = (new a.Graphics).p("ADgP4QhjAsh1AAQijAAh/hXQgqgcgngnQiZiaAAjZQAAi+B1iNIgBggQAAjACIiJQCKiJDAAAQCRAAByBOQAwgLA1AAQDBAACJCJQCJCIAADCIAAAMQBWB/AACiQAABYgaBNQglByhbBcQiaCajaAAQh9AAhogyg");
        h = (new a.Graphics).p("ACcQsQh1A0iKAAQjBAAiWhmQgygigtguQi1i1AAkAQAAjhCKimIgBglQAAjjChiiQCiiiDkAAQCqAACHBcQA5gMA+AAQDkAAChChQCiCiAADjIAAAPQBlCVAADAQAABngeBcQgrCGhtBsQi2C3kAAAQiUAAh6g8g");
        k = (new a.Graphics).p("ACuQeQhxAziDAAQi5AAiRhjQgvgggsgsQiuiuAAj2QAAjXCFigIgBgkQAAjaCbibQCbibDbAAQCjAACBBYQA3gMA7AAQDbAACbCbQCbCbAADaIAAAPQBhCPAAC4QAABjgcBXQgqCChoBnQivCvj2AAQiNAAh2g5g");
        l = (new a.Graphics).p("AC5QWQhuAxiAAAQi1AAiMhgQgvgggqgrQipipAAjwQAAjRCBicIgBgjQAAjUCWiYQCYiXDUABQCggBB+BWQA2gLA6AAQDVAACXCWQCXCYAADUIAAAOQBeCMAACzQAABhgbBVQgpB+hmBlQiqCrjvAAQiKgBhzg3g");
        n = (new a.Graphics).p("AC8QTQhsAxh/AAQizAAiMhfQgugggqgqQioioAAjuQAAjQCAiaIgBgjQAAjSCWiWQCWiWDSAAQCfAAB9BVQA1gLA5AAQDUAACVCVQCWCWAADTIAAAOQBeCKAACyQAABggcBUQgoB9hlBkQioCpjuAAQiJAAhyg3g");
        var p = (new a.Graphics).p("AJTcYQk0iOhJjKQhJjJDMiPQDMiOFqAAQFrAAE0COQEzCPBJDJQBJDKjLCOQjMCPlrAAQlqAAk0iPgA8ncYQjLiOBJjKQBJjJEziPQE0iOFrAAQFqAADMCOQDMCPhJDJQhJDKk0COQk0CPlqAAQlrAAjMiPgAMovbQiminAAjrQAAjsCmimQCninDsAAQDrAACnCnQCmCmAADsQAADrimCnQinCmjrAAQjsAAinimgAzhvbQiminAAjrQAAjsCmimQCminDsAAQDsAACmCnQCnCmAADsQAADrinCnQimCmjsAAQjsAAimimg"),
            u = (new a.Graphics).p("AJTcYQk0iOhJjKQhJjJDMiPQDMiOFqAAQFrAAE0COQEzCPBJDJQBJDKjLCOQjMCPlrAAQlqAAk0iPgA8ncYQjLiOBJjKQBJjJEziPQE0iOFrAAQFqAADMCOQDMCPhJDJQhJDKk0COQk0CPlqAAQlrAAjMiPgAMovbQiminAAjrQAAjsCmimQCninDsAAQDrAACnCnQCmCmAADsQAADrimCnQinCmjrAAQjsAAinimgAzhvbQiminAAjrQAAjsCmimQCminDsAAQDsAACmCnQCnCmAADsQAADrinCnQimCmjsAAQjsAAimimg"),
            z = (new a.Graphics).p("AF/P8QjGhcgviBQgiheA7hKQAXhIAkhAQCEjqDoAAQDqAADFDqQA2BAArBIQBxBKAiBeQAvCBiCBcQiDBbjpAAQjpAAjGhbgAyZP8QiChcAuiBQAjheBxhKQAqhIA2hAQDHjqDpAAQDpAACDDqQAkBAAXBIQA7BKgiBeQgvCBjFBcQjHBbjoAAQjqAAiDhbgAE2hqQiLiKAAjEQAAjDCLiLQCJiKDFAAQDDAACKCKQCLCLgBDDQABDEiLCKQiKCJjDAAQjFAAiJiJgAwWhwQiJiKAAjDQAAjECJiKQCLiKDEAAQDDAACKCKQCLCKAADEQAADDiLCKQiKCKjDAAQjEAAiLiKg"),
            q = (new a.Graphics).p("AX3OrQgrgTgIgfIgCgKIACgKIADgBQABgBABAAQAAAAABABQAAAAABAAQAAAAABABQAKASAmAIQAtAKBFgHQBFgIAmgXQATgMAGgLIAAgBQAIgOgIgFQgKgHgcABIhzAKQgGAAgDADIgBAEIADAJQACAGAMgCIA8gHIAEACQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQgUAPglADQghAFgagFQgagGgEgLQgCgGAGgJQAOgNAtgHQAfgEAXACQAOACAMgFIANgDIACgDQgBgBgFAAQgygKg2AJQgkAEggAMQgCACgDgCIgBgBIABgBQAJgJAAgIQAAgIgEgHIgjhaQgNAMgeAKQgDACgDgDQgDgDgDgBIgJAAQgOAAgDgCIgCgCIADgCIAOgBQATAAAFgDQAEgCgCgDQAAgDgGgCIgPgBIgJAAQgJAAgDgBIgCgDIAEgCIANAAQATgCAEgEQAAAAABAAQAAgBAAAAQAAgBAAgBQABAAAAgBIAAgDQgCgCgLAAIgHAAQgOAAgEgCIAAAAIgBgCIAAgBIABgBIABAAIACgBIAFgBQAMgCACgDIABgCIgDgFQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAQAZgIAIgGQgfhVAAgLQgGgKgNAAIAAAAQgNAAgGAKQAAAIglBaQAYANAbACIACAAQAKAAADACIACACIgBABQgBACgJAAIgHACQgHADAAACQAAADAEADQAEACASAAIAJAAIADABIABACIAAABIgBAAQgDAEgPABIgEAAQgOAAgDACIgCADIABACQACAGARAAIAVABIAEABIABABIgCACQgDACgRAAQgTAAgCAEQgBAEABACQAFADASAAIAHAAIACABQABABAAAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAQgSAEgHAAQgTgCgTgHQgWgJgNgNIgnBbQgDAHAAAHQgBAHAEAFIALAKIAIAHQAjAfgBAZIgBAKQgJAegtAUQhBAehdgLQhFgIgugcQgvgcABgiIACgMQAHgVAWgOIAFgBIACACIAAABIgBAEQAAAbA/AWIAXAHQATAFAWADQA0AIA0gGQASgEADgFQACgGgKgFIgRgJQgKgGgLACIgzgBIgBgBIgBAAQgxgGgMgPQgDgFAAgDIABgFIAAgBQAFgKAVgEQAYgFAiAFIADAAIAsAMIABAAQAKAEALgCIAHgCQAGAAAAgCIAAgBIgDgEQgbgQg3gKQgUgDgXAAIgIAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAUgJALgOIAUgaQAnguAzhKQgEgNgHgIQgJgKgKACQgMABgJAKQgGAIgKASQgUAngTAVQgiAjg7AWQgcAIgUgBQgRAAgFgHQgLgOAhgXQAYgPgEgEIgGABIgMAGIABgBQglAXgxAAQgZgCgMgHQgNgIAEgMQAGgNAkgHQAlgGADgHIAAgBQgBgBgIABQghAIgigEQghgDgQgLQgQgHAFgMQAHgOBJgEQBRgDBBgoQAjgVAmgoIAJgIIABgCQAZgaAKgHQAQgKAUAAQAYAAAQAbQAKAQAQAvIAGAPQADAMAEAKIBBhjIABgGQAAgGgEgEQgbAHgUgKIgHgFQgWAFgSgIQgOgHgDgFIAAgDQgdACgQgHQgJgFgFgJQgGgLARgHQAOgGAOAIQANgFAEgKQAGgNAQgOQARgPAWgIQATgIAXgEQAagDARADQgPgKgOACQgWAEgGgFIgCgDIACgEQADgDAIgBQAIgCANABQALAAAGADQAOAGADALIADAAQAEgLAOgGQAPgIAYAGQAHABADADQADAEgDADQgJAEgTgDQgQgCgNAJIABAAQAagGAvALQAjAJAWAQQAWARgBASIgBAHQgCARgXAPQgWARgkAJQgVAFAAAOIABAGIA3BXIADgKQASgwANgWQATgiAZgBQAUgBAOAKQAJAGAWAXIAOAPQAkAnAjAWQBAAnBRAEQBJAEAGAOQAFALgPAIQgSALggADQgjAEgggIQgKgBAAABIAAABQAEAHAkAGQAkAHAFANQAFALgOAJQgLAHgaACQgxAAgkgXIgMgFIgFgBQgEAEAWAPQAhAXgLAOQgPAQg3gQQg9gSggglQgTgUgTgpQgJgVgFgGQgHgKgMgBQgPgCgLAUQA0BRApAyIATAaIAPANQASAOAVADQByASAOAzIABAMQAAAigvAcQguAchHAIQgXADgWAAQhAAAgxgWgAWaGWIAAABIAAACQAUAPAZgIQALgEAAgEIAAgBIgEgCIgCABIAAADIgBABIgHAEQgUAFgRgMIgDgCgAXzGHQABAAABAAQABAAAAAAQAAABABABQAAAAAAABIACACQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgCIAEgCIAIgCIAFABIAFACIACAAIAAgBQAAgBgBAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIABgBIAEgDIABgBIgBgCIgEABQgKAGgOABQgPACgQgKIgEAAIgBACIABABIAJAEIABACIAAACIgCABIgBAAIABABIACABIAEgCQAAgBAAAAQABAAAAgBQABAAABAAQAAAAABAAgAVmGGIAEACIAAACIACACIACgBIAAgDQAAAAABAAQAAgBAAAAQABAAABAAQABAAABAAIALgCQACgBADACIADACQAAAAABABQAAAAABAAQAAAAABAAQAAgBAAAAIABgBIgEgEIABgBIAIgEIACgCIgBgBQgBAAAAAAQgBgBAAAAQgBAAAAABQgBAAAAAAQgQAIgQAAQgKgBgIgDIgIgEIgEAAIgBABIAAACIAGADIAAABIAAACIgDADIADAAIAGgCIAEgBgAdQIoIgFgBIhbgXQAUgdAegZQAYgSAjgGQAagDAQAFQASAFAFAJQALAPgcAMQgDACAEAAQAQACAOAHQARAHADAIQAGANgLAMQgKAKgUADQgMACgOAAQgXAAgcgHgANzItQgVgDgJgKQgMgMAGgNQAEgIAQgHQAOgHARgCQAEAAgEgCQgagMAKgPQAEgJASgFQARgFAaADQAiAGAZASQAeAZAUAdIhbAXIgFABQgdAHgXAAQgNAAgMgCg"),
            r = (new a.Graphics).p("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"),
            t = (new a.Graphics).p("AFETMQh+g5gXhZIgFgeIAFgcIAKgFQAIgDAFAGQAeA1BvAZQCDAbDKgUQDKgXBvhEQA3gjAPggIADgDQAWgogWgQQgegUhRADIlPAeQgSAAgKAKIgCAKIAJAaQAFARAkgFICugUIAKAFQAFAFgFADQg4AqhsAKQhgANhLgPQhMgQgNggQgHgSAUgZQAogoCDgUQBbgLBCAGQAoAFAjgNIAmgKIAIgIQgFgFgNAAQiSgcifAaQhoANhdAjQgIAEgHgEIgCgFIACgDQAZgZAAgXQAAgWgKgXIhnkHQgmAkhYAeQgIAFgHgHQgLgLgJgCIgaAAQgoAAgJgFIgFgHIAKgGIAngCQA4AAAMgIQANgHgFgIQAAgKgSgFQgKgCghAAIgbAAQgaAAgJgFIgFgIIALgFIAmAAQA4gFAKgNQAFgDAAgJIAAgIQgFgIggAAIgVAAQgoAAgJgFIgCAAIgDgEIAAgDIAFgFIABAAIAFgDIAQgDQAjgEAFgKIACgFIgHgPQACgFAFAAQBKgXAZgSQhdj5AAgfQgSgegjAAIgDAAQgiAAgSAeQAAAXhsEGQBEAmBPAFIAFAAQAeAAAIAHIAFAGIgCACQgDAIgZAAIgVAFQgVAHAAAIQAAAHANAIQALAIAzAAIAbAAIALACIACAFIAAADIgCACQgLAKgrADIgMAAQgnAAgKAHIgFAIIACAFQAFARAyAAIA/ADIAKAFIACADIgFAFQgHAFgzAAQg2AAgIAMQgCANAFAFQAMAKA0AAIAUAAIAIADQAFACAAAFQAAAFgHAAQgzANgVAAQg2gFg3gUQhCgcgmgmIhxEJQgKAXAAAUQgCAUAMAPQAIAIAZATIAXAVQBlBbgDBJIgDAeQgZBWiDA6QjABYkOghQjJgXiGhQQiIhTAChjIAFgjQAVg8BCgrIAMgDIAIAIIAAACIgDAKQAABRC2A/IBEAUQA3APA/AIQCYAZCZgRQA1gNAIgPQAHgPgegQIgygbQgcgPghAFIiVgDIgEgCIgDAAQiNgUgkgrQgKgQAAgHIAFgQIAAgCQAPgcA9gMQBEgPBlAPIAHAAICBAhIADAAQAeAMAhgFIATgFQASAAAAgHIAAgDIgKgKQhOgwihgcQg6gKhCAAIgZAAQgKAAAAgIQAAgFAFgCQA6gZAggrIA7hJQBxiGCVjZQgKgmgXgWQgZgfgeAGQgkACgZAfQgRAWgcA1Qg6Byg6A8QhiBnisBAQhTAZg6gDQgwgCgQgUQgggpBihBQBFgugNgMIgSAEIghASIADgCQhsBBiQAAQhJgFgkgUQglgZAMghQASgoBqgUQBqgQAJgWIAAgDQgCgCgZACQheAXhkgKQhggKgwgeQgugXAQghQAUgrDUgKQDsgKC+h0QBng8Bvh0IAagZIACgFQBJhLAegUQAugfA5AAQBHAAAwBRQAcAtAwCKIAPArQAKAjANAcIC9kfIADgSQAAgRgOgNQhOAVg5gcIgUgPQhCAPgzgZQgrgUgHgQIAAgHQhTAFgwgUQgZgPgQgZQgRgiAvgUQAsgRAoAXQAmgNANgeQAOgmAwgoQAzgsA/gZQA3gWBEgKQBMgLAwALQgrgfgoAFQhCANgSgPIgFgKIAFgKQALgLAWgCQAagFAjACQAgAAASALQApAPAKAjIAHAAQAMgjAogPQAugXBDAPQAVACAKALQAIAMgIAIQgcAMg3gKQgugFglAZIACAAQBMgRCIAhQBnAZBCAwQA/AygDA1IgCASQgIAyhBAuQhCAwhnAbQhAAQAAAnIAGASICfD7IAKgbQAyiMAmg/QA6hjBGgFQA7gCAoAcQAcARA/BEIArAtQBnBxBnA/QC7ByDtAMQDUAKARArQAQAeguAaQgyAeheAKQhnAKhdgXQgcgCAAACIAAADQAKAWBqAQQBoAUAOAoQAQAegpAcQghAUhLAFQiQAAhqhBIghgQQgHgEgHAAQgNAMBBAuQBgBBghApQgqAwiigwQiwg1hghrQg4g5g1h5Qgcg9gMgRQgXgfgggCQgugGghA7QCaDsB3CTIA3BJIArAoQA1ApA8AHQFNA1ApCVIACAjQAABjiIBTQiGBQjOAaQhEAHg/AAQi7AAiQg/gAA2lHIgCADIACAFQA6AtBHgWQAhgNAAgMIAAgDIgLgFIgFACIAAAIIgEAFIgVAKQg5APgzgjIgIgFgAE6l0QAKAAAAAKIAFAFQAIAAAAgFIAAgFIAKgIIAZgFIANADIAPAIIAHgDIAAgDQgKgFAAgEIADgFIANgIIACgDIgCgFIgNADQgcASgrACQgrAFgtgcIgNAAIgCAFIACADIAZANIAGAEIgDAFIgFADIgDADIADACIAIADIAKgIQACgFAKAAgAhgl3IAKAIIAAAFIAFAFIAIgCIAAgIQAAgFAMAAIAhgFQAFgDAKAFIAIAIQAGADADgDIACgCIgLgNIADgCIAYgNIAFgFIgDgDQgHgFgGAFQgsAXgwAAQgcgCgZgLQgUgKgDAAIgKgCIgEAFIACAFIAPAIIADAFIgDAEIgIAIIALADIAOgIIAOgDgAUyBjIgPgFIkJhCQA6hVBZhGQBGg2BlgRQBMgKAwAPQA0APANAZQAhAuhQAjQgLAFANAAQAwAFAoAUQAwAVAKAWQASAlghAmQgcAcg8AHQgjAHgnAAQhEAAhTgTgA4SBvQg8gHgcgcQghgmASglQAKgWAwgVQApgUAwgFQAMAAgKgFQhOgjAeguQANgZA1gPQAwgPBLAKQBlARBHA2QBYBGA6BVIkJBCIgPAFQhTAThDAAQgoAAgjgHg"),
            v = (new a.Graphics).p("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"),
            w = (new a.Graphics).p("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"),
            m = (new a.Graphics).p("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"),
            A = (new a.Graphics).p("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"),
            B = (new a.Graphics).p("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"),
            C = (new a.Graphics).p("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"),
            D = (new a.Graphics).p("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"),
            E = (new a.Graphics).p("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"),
            F = (new a.Graphics).p("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"),
            G = (new a.Graphics).p("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"),
            H = (new a.Graphics).p("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"),
            I = (new a.Graphics).p("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"),
            J = (new a.Graphics).p("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"),
            K = (new a.Graphics).p("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"),
            L = (new a.Graphics).p("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"),
            M = (new a.Graphics).p("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"),
            N = (new a.Graphics).p("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"),
            O = (new a.Graphics).p("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"),
            P = (new a.Graphics).p("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"),
            x = (new a.Graphics).p("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"),
            y = (new a.Graphics).p("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");
        this.timeline.addTween(a.Tween.get(f).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(74).to({
            graphics: d,
            x: 103.575,
            y: 145.975
        }).wait(1).to({
            graphics: e,
            x: 125.35,
            y: 111.125
        }).wait(1).to({
            graphics: g,
            x: 97.8568,
            y: 106.6248
        }).wait(1).to({
            graphics: h,
            x: 104.591,
            y: 112.7502
        }).wait(1).to({
            graphics: k,
            x: 102.8043,
            y: 111.1251
        }).wait(1).to({
            graphics: l,
            x: 101.7323,
            y: 110.15
        }).wait(1).to({
            graphics: n,
            x: 101.375,
            y: 109.825
        }).wait(15).to({
            graphics: p,
            x: 103.575,
            y: 145.975
        }).wait(91).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(20).to({
            graphics: u,
            x: 103.575,
            y: 145.975
        }).wait(1).to({
            graphics: z,
            x: 125.35,
            y: 111.125
        }).wait(1).to({
            graphics: q,
            x: 198.627,
            y: 96.0877
        }).wait(1).to({
            graphics: r,
            x: 123.9033,
            y: 126.538
        }).wait(1).to({
            graphics: t,
            x: 123.9035,
            y: 129.0582
        }).wait(1).to({
            graphics: v,
            x: 123.9036,
            y: 129.8842
        }).wait(1).to({
            graphics: w,
            x: 123.9036,
            y: 130.297
        }).wait(1).to({
            graphics: m,
            x: 123.9036,
            y: 130.4896
        }).wait(1).to({
            graphics: A,
            x: 123.9036,
            y: 130.5417
        }).wait(1).to({
            graphics: B,
            x: 123.9036,
            y: 130.6495
        }).wait(1).to({
            graphics: C,
            x: 123.9036,
            y: 130.7574
        }).wait(1).to({
            graphics: D,
            x: 123.9036,
            y: 130.8653
        }).wait(1).to({
            graphics: E,
            x: 123.9036,
            y: 130.9732
        }).wait(1).to({
            graphics: F,
            x: 123.9037,
            y: 131.081
        }).wait(1).to({
            graphics: G,
            x: 123.9037,
            y: 131.1889
        }).wait(1).to({
            graphics: H,
            x: 123.9037,
            y: 131.2968
        }).wait(1).to({
            graphics: I,
            x: 123.9037,
            y: 131.4047
        }).wait(1).to({
            graphics: J,
            x: 123.9037,
            y: 131.5125
        }).wait(1).to({
            graphics: K,
            x: 123.9037,
            y: 131.6204
        }).wait(1).to({
            graphics: L,
            x: 123.9037,
            y: 131.9482
        }).wait(1).to({
            graphics: M,
            x: 123.9038,
            y: 132.5754
        }).wait(1).to({
            graphics: N,
            x: 123.9039,
            y: 133.8103
        }).wait(1).to({
            graphics: O,
            x: 123.904,
            y: 136.0154
        }).wait(1).to({
            graphics: P,
            x: 123.9043,
            y: 139.8113
        }).wait(1).to({
            graphics: x,
            x: 123.9049,
            y: 146.7085
        }).wait(1).to({
            graphics: y,
            x: 123.9064,
            y: 153.298
        }).wait(2).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(127));
        this.curtain_ls = new b.bg;
        this.curtain_ls.name = "curtain_ls";
        this.curtain_ls.parent = this;
        this.curtain_ls.setTransform(120, 160);
        this.curtain_ls._off = !0;
        d = [this.curtain_ls];
        for (e = 0; e < d.length; e++) d[e].mask = f;
        this.timeline.addTween(a.Tween.get(this.curtain_ls).wait(74).to({
            _off: !1
        }, 0).wait(21).to({
                alpha: 0
            },
            0).to({
            _off: !0
        }, 91).wait(20).to({
            _off: !1,
            alpha: 1
        }, 0).to({
            _off: !0
        }, 27).wait(127));
        this.overlay_black2_l = new b.fade_black;
        this.overlay_black2_l.name = "overlay_black2_l";
        this.overlay_black2_l.parent = this;
        this.overlay_black2_l.setTransform(120, 160);
        this.overlay_black2_l.alpha = .8516;
        this.overlay_black2_l._off = !0;
        this.timeline.addTween(a.Tween.get(this.overlay_black2_l).wait(1).to({
            _off: !1
        }, 0).wait(34).to({
            alpha: .2305
        }, 0).to({
            alpha: .3008
        }, 10).wait(24).to({
            alpha: .6016
        }, 0).to({
            alpha: .8008
        }, 4, a.Ease.get(-1)).wait(1).to({
                _off: !0
            },
            21).wait(91).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 47).wait(127));
        this.overlay_black2 = new b.fade_black;
        this.overlay_black2.name = "overlay_black2";
        this.overlay_black2.parent = this;
        this.overlay_black2.setTransform(120, 160);
        this.overlay_black2.alpha = .8516;
        this.overlay_black2._off = !0;
        this.timeline.addTween(a.Tween.get(this.overlay_black2).wait(1).to({
            _off: !1
        }, 0).wait(34).to({
            alpha: .2305
        }, 0).to({
            alpha: .6016
        }, 10).wait(24).to({
            alpha: .8008
        }, 4, a.Ease.get(-1)).wait(1).to({
            _off: !0
        }, 21).wait(91).to({
            _off: !1
        }, 0).to({
                _off: !0
            },
            47).wait(127));
        this.bg = new b.bg;
        this.bg.name = "bg";
        this.bg.parent = this;
        this.bg.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.bg).wait(95).to({
            alpha: 0
        }, 0).wait(91).to({
            alpha: 1
        }, 0).to({
            _off: !0
        }, 47).wait(127));
        this.instance_10 = new b.board;
        this.instance_10.parent = this;
        this.instance_10.setTransform(120, 160);
        this.instance_10.alpha = .2188;
        this.instance_10._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(145).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 3).to({
            _off: !0
        }, 3).wait(209));
        this.set_petit =
            new b.set_petit;
        this.set_petit.name = "set_petit";
        this.set_petit.parent = this;
        this.set_petit.setTransform(176.6, 219.05, 1, 1, 0, 0, 0, 49.5, 44);
        this.set_petit.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.set_petit).wait(112).to({
            alpha: 1
        }, 0).wait(8).to({
            alpha: 0
        }, 0).wait(17).to({
            alpha: 1
        }, 0).wait(8).to({
            alpha: 0
        }, 0).wait(31).to({
            alpha: 1
        }, 0).wait(10).to({
            alpha: 0
        }, 0).wait(125).to({
            alpha: 1
        }, 0).wait(8).to({
            regX: 0,
            regY: 0,
            x: 127.1,
            y: 175.05,
            alpha: 0
        }, 0).wait(41));
        this.curtain_zoom = new b.curtain_zoom_shot;
        this.curtain_zoom.name =
            "curtain_zoom";
        this.curtain_zoom.parent = this;
        this.curtain_zoom.setTransform(120.3, 169.75, 1, 1, 0, 0, 0, .3, 8.1);
        this.curtain_zoom._off = !0;
        this.timeline.addTween(a.Tween.get(this.curtain_zoom).wait(95).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 19).wait(6).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 19).wait(221));
        this.cardNum = new b.production_members_mc;
        this.cardNum.name = "cardNum";
        this.cardNum.parent = this;
        this.cardNum.setTransform(153.65, 215.5);
        this.timeline.addTween(a.Tween.get(this.cardNum).wait(145).to({
            _off: !0
        }, 41).wait(174));
        this.tf = new a.Text("", "11px 'Arial'", "#333333");
        this.tf.name = "tf";
        this.tf.lineHeight = 14;
        this.tf.lineWidth = 216;
        this.tf.parent = this;
        this.tf.setTransform(12, 235);
        this.tf._off = !0;
        this.timeline.addTween(a.Tween.get(this.tf).wait(112).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 8).wait(17).to({
            _off: !1
        }, 0).wait(8).to({
            color: "#000000"
        }, 0).to({
            _off: !0
        }, 26).wait(5).to({
            _off: !1,
            color: "#333333"
        }, 0).to({
            _off: !0
        }, 10).wait(174));
        this.particle_1 = new b.particle4;
        this.particle_1.name = "particle_1";
        this.particle_1.parent = this;
        this.particle_1.setTransform(55.8,
            229.75, .7876, 1.1581, 0, 0, 0, -38.5, -8.1);
        this.instance_11 = new b.text_win2;
        this.instance_11.parent = this;
        this.instance_11.setTransform(120, 273.75, 1, .035, 0, 0, 0, 116, 50);
        this.instance_11._off = !0;
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.particle_1
            }]
        }).to({
            state: [{
                t: this.instance_11
            }]
        }, 109).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
                state: [{
                    t: this.instance_11
                }]
            },
            1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: []
        }, 4).to({
            state: [{
                t: this.instance_11
            }]
        }, 14).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 4).to({
            state: []
        }, 41).wait(174));
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(109).to({
            _off: !1
        }, 0).wait(1).to({
            regY: 45,
            scaleY: .0985,
            y: 273.4
        }, 0).wait(1).to({
            scaleY: .3313,
            y: 272.7
        }, 0).wait(1).to({
            regY: 50.1,
            scaleY: 1.091,
            y: 276.1
        }, 0).wait(1).to({
            regY: 45,
            scaleY: 1.082,
            y: 270.55
        }, 0).wait(1).to({
            scaleY: 1.0494,
            y: 270.7
        }, 0).wait(1).to({
            scaleY: 1.0116,
            y: 270.85
        }, 0).wait(1).to({
            regY: 50,
            scaleY: 1,
            y: 276
        }, 0).to({
            _off: !0
        }, 4).wait(14).to({
            _off: !1,
            scaleY: .035,
            y: 273.75
        }, 0).wait(1).to({
            regY: 45,
            scaleY: .0985,
            y: 273.4
        }, 0).wait(1).to({
            scaleY: .3313,
            y: 272.7
        }, 0).wait(1).to({
            regY: 50.1,
            scaleY: 1.091,
            y: 276.1
        }, 0).wait(1).to({
                regY: 45,
                scaleY: 1.082,
                y: 270.55
            },
            0).wait(1).to({
            scaleY: 1.0494,
            y: 270.7
        }, 0).wait(1).to({
            scaleY: 1.0116,
            y: 270.85
        }, 0).wait(1).to({
            regY: 50,
            scaleY: 1,
            y: 276
        }, 0).wait(4).to({
            _off: !0
        }, 41).wait(174));
        this.particle_rise = new b.particle4;
        this.particle_rise.name = "particle_rise";
        this.particle_rise.parent = this;
        this.particle_rise.setTransform(55.8, 229.75, .7876, 1.1581, 0, 0, 0, -38.5, -8.1);
        this.particle_rise.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.particle_rise).wait(109).to({
            alpha: 1
        }, 0).wait(11).to({
            alpha: 0
        }, 0).wait(14).to({
            alpha: 1
        }, 0).wait(11).to({
                alpha: 0
            },
            0).wait(31).to({
            alpha: 1
        }, 0).wait(10).to({
            alpha: 0
        }, 0).wait(174));
        this.instance_12 = new b.efa_\u30ad\u30e9\u30ad\u30e9\u30dc\u30fc\u30c9\u30ab\u30fc\u30c9\u7528;
        this.instance_12.parent = this;
        this.instance_12.setTransform(121.35, 135.3, .4833, .4833);
        this.instance_12._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_12).wait(109).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 11).wait(14).to({
            _off: !1,
            regX: .1,
            scaleX: 1.0001,
            scaleY: 1.0001,
            x: 120.1,
            y: 160
        }, 0).to({
            _off: !0
        }, 11).wait(31).to({
            _off: !1,
            regX: 0,
            scaleX: .4833,
            scaleY: .4833,
            x: 121.35,
            y: 135.3
        }, 0).to({
            _off: !0
        }, 10).wait(174));
        this.instance_13 = new b.glitter_96120;
        this.instance_13.parent = this;
        this.instance_13.setTransform(119.85, 140.45, .9936, .9936);
        this.instance_13._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_13).wait(109).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 11).wait(14).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 11).wait(31).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 10).wait(174));
        f = new a.Shape;
        f._off = !0;
        d = (new a.Graphics).p("Ah2PmIAAyvIO/AAIAASvg");
        e = (new a.Graphics).p("Ah2PmIAAyvIO/AAIAASvg");
        this.timeline.addTween(a.Tween.get(f).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(106).to({
            graphics: d,
            x: 84.1,
            y: 99.8
        }).wait(7).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(61).to({
            graphics: e,
            x: 84.1,
            y: 99.8
        }).wait(7).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(179));
        this.instance_14 = new b.efc_card_kirari;
        this.instance_14.parent = this;
        this.instance_14.setTransform(119.5, 257.5, .542, .4283, 0, 0, -29.8291);
        this.instance_14._off = !0;
        d = [this.instance_14];
        for (e = 0; e < d.length; e++) d[e].mask = f;
        this.timeline.addTween(a.Tween.get(this.instance_14).wait(106).to({
                _off: !1
            },
            0).to({
            y: 116.6
        }, 3, a.Ease.get(1)).to({
            y: -13.9
        }, 3, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(61).to({
            _off: !1,
            y: 257.5
        }, 0).to({
            y: 116.6
        }, 3, a.Ease.get(-1)).to({
            y: -13.9
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(179));
        this.tfs = new a.Text("", "11px 'Arial'");
        this.tfs.name = "tfs";
        this.tfs.lineHeight = 14;
        this.tfs.lineWidth = 216;
        this.tfs.parent = this;
        this.tfs.setTransform(12, 235);
        this.tfs._off = !0;
        this.timeline.addTween(a.Tween.get(this.tfs).wait(313).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 6).wait(41));
        this.tf5 = new a.Text("", "12px 'Arial'");
        this.tf5.name = "tf5";
        this.tf5.lineHeight = 15;
        this.tf5.lineWidth = 260;
        this.tf5.parent = this;
        this.tf5.setTransform(16, 296.95);
        this.tf4 = new a.Text("", "12px 'Arial'");
        this.tf4.name = "tf4";
        this.tf4.lineHeight = 15;
        this.tf4.lineWidth = 260;
        this.tf4.parent = this;
        this.tf4.setTransform(16, 281.1);
        this.tf3 = new a.Text("", "12px 'Arial'");
        this.tf3.name = "tf3";
        this.tf3.lineHeight = 15;
        this.tf3.lineWidth = 260;
        this.tf3.parent = this;
        this.tf3.setTransform(16, 265.4);
        this.tf1 = new a.Text("", "12px 'Arial'");
        this.tf1.name = "tf1";
        this.tf1.lineHeight =
            15;
        this.tf1.lineWidth = 260;
        this.tf1.parent = this;
        this.tf1.setTransform(16, 234);
        this.tf2 = new a.Text("", "12px 'Arial'");
        this.tf2.name = "tf2";
        this.tf2.lineHeight = 15;
        this.tf2.lineWidth = 260;
        this.tf2.parent = this;
        this.tf2.setTransform(16, 249.7);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.tf2
            }, {
                t: this.tf1
            }, {
                t: this.tf3
            }, {
                t: this.tf4
            }, {
                t: this.tf5
            }]
        }, 242).to({
            state: []
        }, 31).wait(87));
        this.sr_comment_window = new b.sr_comment_window;
        this.sr_comment_window.name = "sr_comment_window";
        this.sr_comment_window.parent =
            this;
        this.sr_comment_window.setTransform(120.05, 160.05);
        this.sr_comment_window._off = !0;
        this.timeline.addTween(a.Tween.get(this.sr_comment_window).wait(276).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 18).wait(66));
        this.instance_15 = new b._mesWindow;
        this.instance_15.parent = this;
        this.instance_15.setTransform(120, 269.5, 1, .099, 0, 0, 0, 0, -.5);
        this.instance_15.alpha = .6992;
        this.instance_15._off = !0;
        this.instance_16 = new b.text_win2;
        this.instance_16.parent = this;
        this.instance_16.setTransform(120, 275.75, 1, .035, 0, 0, 0, 116, 50);
        this.instance_16._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_15).wait(240).to({
            _off: !1
        }, 0).to({
            scaleY: 1.0699
        }, 2, a.Ease.get(1)).to({
            scaleY: .962
        }, 2, a.Ease.get(1)).to({
            scaleY: 1
        }, 3, a.Ease.get(.26)).wait(23).to({
            alpha: .4688
        }, 0).to({
            _off: !0
        }, 3).wait(87));
        this.timeline.addTween(a.Tween.get(this.instance_16).wait(311).to({
            _off: !1
        }, 0).to({
            scaleY: 1.0608,
            y: 276
        }, 2).to({
            scaleY: 1
        }, 2, a.Ease.get(1)).wait(4).to({
            scaleY: .035,
            y: 275.75
        }, 2, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(38));
        this.instance_17 = new b.asset_efc_flashBlade;
        this.instance_17.parent =
            this;
        this.instance_17.setTransform(120, 160, .511, .4138);
        this.instance_18 = new b.asset_efc_flashWhite2;
        this.instance_18.parent = this;
        this.instance_18.setTransform(120, 160, .2097, .048);
        this.instance_19 = new b.asset_efc_flashWhite2;
        this.instance_19.parent = this;
        this.instance_19.setTransform(120, 160, .31, .161);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_18,
                p: {
                    scaleX: .2097,
                    scaleY: .048,
                    alpha: 1
                }
            }, {
                t: this.instance_17,
                p: {
                    scaleX: .511,
                    scaleY: .4138
                }
            }]
        }, 235).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_18,
                p: {
                    scaleX: .6033,
                    scaleY: .5667,
                    alpha: .3281
                }
            }, {
                t: this.instance_17,
                p: {
                    scaleX: .675,
                    scaleY: .6897
                }
            }]
        }, 36).to({
            state: [{
                t: this.instance_19
            }, {
                t: this.instance_18,
                p: {
                    scaleX: .6587,
                    scaleY: .6587,
                    alpha: 1
                }
            }, {
                t: this.instance_17,
                p: {
                    scaleX: 1.2639,
                    scaleY: 1
                }
            }]
        }, 1).to({
            state: []
        }, 1).wait(86));
        this.instance_20 = new b.board;
        this.instance_20.parent = this;
        this.instance_20.setTransform(120, 160);
        this.instance_20.alpha = .5195;
        this.instance_20._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_20).wait(273).to({
            _off: !1
        }, 0).to({
                _off: !0
            },
            1).wait(86));
        this.instance_21 = new b.particle1;
        this.instance_21.parent = this;
        this.instance_21.setTransform(94.95, 148.5, .5227, .5227, 0, 0, 0, -39.8, -8.1);
        this.instance_21._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_21).wait(236).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 31).wait(93));
        this.new_effect = new b._new;
        this.new_effect.name = "new_effect";
        this.new_effect.parent = this;
        this.new_effect.setTransform(305.35, 38, .9999, .9999);
        this.new_effect._off = !0;
        this.timeline.addTween(a.Tween.get(this.new_effect).wait(112).to({
                _off: !1
            },
            0).to({
            x: 265.45
        }, 2, a.Ease.get(-1)).to({
            x: 239.05
        }, 1).to({
            x: 240.7
        }, 2, a.Ease.get(1)).wait(2).to({
            _off: !0
        }, 1).wait(17).to({
            _off: !1,
            x: 305.35
        }, 0).to({
            x: 265.45
        }, 2, a.Ease.get(-1)).to({
            x: 239.05
        }, 1).to({
            x: 240.7
        }, 2, a.Ease.get(1)).wait(29).to({
            x: 309.95
        }, 2, a.Ease.get(-1)).wait(3).to({
            x: 327.25
        }, 0).to({
            x: 305.35
        }, 1, a.Ease.get(-1)).to({
            x: 265.45
        }, 2, a.Ease.get(-1)).to({
            x: 239.05
        }, 1).to({
            x: 240.7
        }, 3, a.Ease.get(1)).wait(2).to({
            _off: !0
        }, 1).wait(47).to({
            _off: !1,
            x: 329.1
        }, 0).wait(44).to({
            x: 305.35
        }, 0).to({
            x: 265.45
        }, 2, a.Ease.get(-1)).to({
                x: 239.05
            },
            1).to({
            x: 240.7
        }, 3, a.Ease.get(1)).wait(68).to({
            x: 305.35
        }, 0).to({
            x: 265.45
        }, 2, a.Ease.get(-1)).to({
            x: 239.05
        }, 1).to({
            x: 240.7
        }, 3, a.Ease.get(1)).wait(3));
        this.instance_22 = new b.mesh;
        this.instance_22.parent = this;
        this.instance_22.setTransform(120, 160, .4494, .4494);
        this.instance_22._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_22).wait(236).to({
            _off: !1
        }, 0).to({
            scaleX: .4332,
            scaleY: .4332
        }, 3, a.Ease.get(1)).wait(19).to({
            scaleX: .3668,
            scaleY: .3668
        }, 0).wait(1).to({
            scaleX: .754,
            scaleY: .754
        }, 0).wait(1).to({
            scaleX: 1.2743,
            scaleY: 1.2743
        }, 0).to({
            scaleX: .9031,
            scaleY: .9031
        }, 3, a.Ease.get(1)).to({
            scaleX: 1,
            scaleY: 1
        }, 3, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(93));
        this.glitter_sr = new b.kira1_2;
        this.glitter_sr.name = "glitter_sr";
        this.glitter_sr.parent = this;
        this.glitter_sr.setTransform(112.2, 159.95);
        this.glitter_sr.alpha = 0;
        this.glitter_sr._off = !0;
        this.timeline.addTween(a.Tween.get(this.glitter_sr).wait(275).to({
            _off: !1
        }, 0).wait(1).to({
            alpha: 1
        }, 0).to({
            _off: !0
        }, 12).wait(24).to({
            _off: !1
        }, 0).wait(48));
        this.instance_23 = new b.fade_black;
        this.instance_23.parent = this;
        this.instance_23.setTransform(120, 160);
        this.instance_23.alpha = .9492;
        this.instance_23._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_23).wait(233).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 3).wait(124));
        this.instance_24 = new b._mask2;
        this.instance_24.parent = this;
        this.instance_24.setTransform(120, 160, 1.0236, 1.0236);
        this.instance_24._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_24).wait(267).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: 1.0272,
            scaleY: 1.0272
        }, 0).wait(1).to({
            scaleX: 1.0385,
            scaleY: 1.0385
        }, 0).wait(1).to({
            scaleX: 1.0593,
            scaleY: 1.0593
        }, 0).wait(1).to({
            scaleX: 1.0941,
            scaleY: 1.0941
        }, 0).wait(1).to({
            scaleX: 1.1543,
            scaleY: 1.1543
        }, 0).wait(1).to({
            scaleX: 1.3127,
            scaleY: 1.3127
        }, 0).to({
            scaleX: 1.5024,
            scaleY: 1.5024
        }, 1).to({
            _off: !0
        }, 1).wait(85));
        this.instance_25 = new b.mesh2;
        this.instance_25.parent = this;
        this.instance_25.setTransform(120, 160);
        this.instance_25.alpha = .8984;
        this.instance_25._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_25).wait(267).to({
            _off: !1
        }, 0).to({
                alpha: .4883
            },
            5, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(87));
        this.pop_num_large = new b.pop_num_sr;
        this.pop_num_large.name = "pop_num_large";
        this.pop_num_large.parent = this;
        this.pop_num_large.setTransform(188.95, 56.35, 1, 1, 0, 0, 0, 43.1, 24.4);
        this.timeline.addTween(a.Tween.get(this.pop_num_large).wait(233).to({
            _off: !0
        }, 89).wait(11).to({
            _off: !1
        }, 0).wait(27));
        this.instance_26 = new b.card_reflect("synched", 0, !1);
        this.instance_26.parent = this;
        this.instance_26.setTransform(120, 160, 2.5, 2.5);
        this.instance_26._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_26).wait(131).to({
                _off: !1
            },
            0).to({
            _off: !0
        }, 12).wait(133).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 12).wait(36).to({
            _off: !1,
            scaleX: 1,
            scaleY: .9997,
            y: 140.05,
            mode: "independent"
        }, 0).to({
            _off: !0
        }, 9).wait(15).to({
            _off: !1,
            scaleX: 2.5,
            scaleY: 2.5,
            y: 160,
            mode: "synched",
            startPosition: 0,
            loop: !1
        }, 0).wait(12));
        this.instance_27 = new b.card_w;
        this.instance_27.parent = this;
        this.instance_27.setTransform(120, 160, 5, 5, 0, 0, 0, 24, 30);
        this.instance_27.alpha = 0;
        this.instance_27.compositeOperation = "lighter";
        this.instance_27._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_27).wait(267).to({
                _off: !1
            },
            0).to({
            alpha: .1484
        }, 6, a.Ease.get(-.99)).to({
            alpha: .8516
        }, 1).wait(1).to({
            alpha: .8435
        }, 0).wait(1).to({
            alpha: .8175
        }, 0).wait(1).to({
            alpha: .7713
        }, 0).wait(1).to({
            alpha: .7027
        }, 0).wait(1).to({
            alpha: .6118
        }, 0).wait(1).to({
            alpha: .5025
        }, 0).wait(1).to({
            alpha: .3838
        }, 0).wait(1).to({
            alpha: .2686
        }, 0).wait(1).to({
            alpha: .169
        }, 0).wait(1).to({
            alpha: .0918
        }, 0).wait(1).to({
            alpha: .039
        }, 0).wait(1).to({
            alpha: .0093
        }, 0).wait(1).to({
            alpha: 0
        }, 0).to({
            _off: !0
        }, 1).wait(36).to({
            _off: !1,
            regY: 30.1,
            scaleX: 2,
            scaleY: 2,
            y: 140.2
        }, 0).to({
                alpha: .4492
            },
            3, a.Ease.get(.74)).to({
            regX: 24.1,
            x: 120.15,
            y: 140.15,
            alpha: 0
        }, 3, a.Ease.get(.74)).to({
            _off: !0
        }, 1).wait(29));
        this.bCard = new b._cards_SR;
        this.bCard.name = "bCard";
        this.bCard.parent = this;
        this.bCard.setTransform(120, 160);
        this.bCard.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.bCard).wait(120).to({
            alpha: 1
        }, 0).wait(25).to({
            alpha: 0
        }, 0).wait(88).to({
            alpha: 1
        }, 0).wait(88).to({
            scaleX: .6046,
            scaleY: .6046,
            y: 146.821
        }, 0).wait(1).to({
            scaleX: .4733,
            scaleY: .4733,
            y: 142.442
        }, 0).wait(1).to({
                scaleX: .4159,
                scaleY: .4159,
                y: 140.5288
            },
            0).wait(1).to({
            scaleX: .4,
            scaleY: .4,
            y: 140
        }, 0).wait(9).to({
            scaleX: 1,
            scaleY: 1,
            y: 160
        }, 0).wait(27));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.shape.setTransform(120, 160);
        this.shape._off = !0;
        this.timeline.addTween(a.Tween.get(this.shape).wait(274).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 1).wait(85));
        this.instance_28 = new b.card_w;
        this.instance_28.parent = this;
        this.instance_28.setTransform(120, 140, 2, 2, 0, 0, 0, 24, 30);
        this.instance_28.alpha = 0;
        this.instance_28._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_28).wait(109).to({
            _off: !1
        }, 0).to({
            alpha: .0117,
            compositeOperation: NaN
        }, 5, a.Ease.get(1)).to({
            _off: !0
        }, 6).wait(240));
        this.instance_29 = new b.card_b;
        this.instance_29.parent = this;
        this.instance_29.setTransform(135.6, 108, 1, 1, 0, 0, 0, 63.6, 28);
        this.instance_29.alpha = .7383;
        this.instance_29._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_29).wait(95).to({
            _off: !1
        }, 0).wait(4).to({
            alpha: .6406
        }, 3, a.Ease.get(-.96)).to({
            alpha: .2617
        }, 4).to({
            alpha: .0898
        }, 2).to({
                _off: !0
            },
            1).wait(251));
        this.card1 = new b._cards;
        this.card1.name = "card1";
        this.card1.parent = this;
        this.card1.setTransform(120, 140);
        this.card1.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.card1).wait(95).to({
            alpha: 1
        }, 0).wait(25).to({
            alpha: 0
        }, 0).wait(51).to({
            alpha: 1
        }, 0).wait(1).to({
            regY: -.5,
            x: 98.9,
            y: 139.5
        }, 0).wait(1).to({
            x: 52.9
        }, 0).wait(1).to({
            x: .95
        }, 0).wait(1).to({
            x: -41.8
        }, 0).wait(1).to({
            regY: 0,
            x: -60,
            y: 140
        }, 0).to({
            x: -57
        }, 3, a.Ease.get(1)).wait(7).to({
            x: 120,
            alpha: 0
        }, 0).wait(174));
        this.card2 = new b._cards;
        this.card2.name =
            "card2";
        this.card2.parent = this;
        this.card2.setTransform(280, 140);
        this.card2.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.card2).wait(100).to({
            alpha: 1
        }, 0).wait(20).to({
            alpha: 0
        }, 0).wait(25).to({
            x: 116,
            alpha: 1
        }, 0).to({
            x: -56.25
        }, 6, a.Ease.get(-1)).wait(6).to({
            x: 116
        }, 0).to({
            x: -56.25
        }, 6, a.Ease.get(-1)).wait(8).to({
            x: 280
        }, 0).wait(1).to({
            regY: -.5,
            x: 254.65,
            y: 139.5
        }, 0).wait(1).to({
            x: 203.95
        }, 0).wait(1).to({
            x: 155.5
        }, 0).wait(1).to({
            regY: 0,
            x: 133.35,
            y: 140
        }, 0).to({
            x: 116.8
        }, 1).to({
            x: 120
        }, 3, a.Ease.get(1)).wait(7).to({
            x: 280,
            alpha: 0
        }, 0).wait(174));
        this.card3 = new b._cards;
        this.card3.name = "card3";
        this.card3.parent = this;
        this.card3.setTransform(276.8, 140, 1, 1, 0, 0, 0, -.2, 0);
        this.card3.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.card3).wait(145).to({
            alpha: 1
        }, 0).wait(26).to({
            regX: 0,
            x: 440
        }, 0).wait(1).to({
            regY: -.5,
            x: 421,
            y: 139.5
        }, 0).wait(1).to({
            x: 379.45
        }, 0).wait(1).to({
            x: 332.6
        }, 0).wait(1).to({
            x: 294
        }, 0).wait(1).to({
            regY: 0,
            x: 277.6,
            y: 140
        }, 0).to({
            x: 280
        }, 3, a.Ease.get(1)).wait(7).to({
            regX: -.2,
            x: 276.8,
            alpha: 0
        }, 0).wait(174));
        this.pop_num1 =
            new b.set_number_pop;
        this.pop_num1.name = "pop_num1";
        this.pop_num1.parent = this;
        this.pop_num1.setTransform(303, -120, 1, 1, 0, 0, 0, 30, 17);
        this.timeline.addTween(a.Tween.get(this.pop_num1).wait(95).to({
            x: 139,
            y: 61
        }, 0).wait(15).to({
            regX: 10.7,
            regY: 24.9,
            x: 119.7,
            y: 68.9
        }, 0).wait(3).to({
            regX: 30,
            regY: 17,
            x: 139,
            y: 61
        }, 0).wait(22).to({
            regX: 10.7,
            regY: 24.9,
            x: 119.7,
            y: 68.9
        }, 0).wait(3).to({
            regX: 30,
            regY: 17,
            x: 139,
            y: 61
        }, 0).wait(7).to({
            alpha: 0
        }, 0).wait(26).to({
            alpha: 1
        }, 0).wait(1).to({
            regX: 10.7,
            regY: 24.9,
            x: 98.85,
            y: 68.9
        }, 0).wait(1).to({
                x: 53.35
            },
            0).wait(1).to({
            x: 2
        }, 0).wait(1).to({
            x: -40.3
        }, 0).wait(1).to({
            regX: 30,
            regY: 17,
            x: -39,
            y: 61
        }, 0).wait(143).to({
            x: 137,
            alpha: 0
        }, 0).wait(4).to({
            alpha: 1
        }, 3).wait(34));
        this.pop_num2 = new b.set_number_pop;
        this.pop_num2.name = "pop_num2";
        this.pop_num2.parent = this;
        this.pop_num2.setTransform(458, -120, 1, 1, 0, 0, 0, 30, 17);
        this.timeline.addTween(a.Tween.get(this.pop_num2).wait(95).to({
            x: 294,
            y: 61
        }, 0).wait(50).to({
            x: 135
        }, 0).wait(1).to({
            alpha: 0
        }, 0).wait(11).to({
            alpha: 1
        }, 0).wait(1).to({
            alpha: 0
        }, 0).wait(13).to({
                x: 297,
                alpha: 1
            },
            0).wait(1).to({
            regX: 10.7,
            regY: 24.9,
            x: 252.8,
            y: 68.9
        }, 0).wait(1).to({
            x: 203.05
        }, 0).wait(1).to({
            x: 155.45
        }, 0).wait(1).to({
            regX: 30,
            regY: 17,
            x: 153,
            y: 61
        }, 0).wait(1).to({
            x: 139
        }, 0).wait(5).to({
            regX: 10.7,
            regY: 24.9,
            x: 119.7,
            y: 68.9
        }, 0).wait(3).to({
            regX: 30,
            regY: 17,
            x: 139,
            y: 61
        }, 0).wait(135).to({
            alpha: 0
        }, 0).wait(41));
        this.instance_30 = new b.white_mc;
        this.instance_30.parent = this;
        this.instance_30.setTransform(120, 160, 1, 1, 0, 0, 0, 120, 160);
        this.instance_30.alpha = 0;
        this.instance_30._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_30).wait(186).to({
                _off: !1
            },
            0).wait(174));
        this.instance_31 = new b.black_mc;
        this.instance_31.parent = this;
        this.instance_31.setTransform(120, 160, 1, 1, 0, 0, 0, 120, 160);
        this.instance_31.alpha = .7891;
        this.instance_31._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_31).wait(95).to({
            _off: !1
        }, 0).to({
            alpha: 0
        }, 9).wait(16).to({
            alpha: .7891
        }, 0).to({
            alpha: 0
        }, 9).wait(16).to({
            _off: !0
        }, 26).wait(15).to({
            _off: !1
        }, 0).wait(174));
        this.instance_32 = new b.white;
        this.instance_32.parent = this;
        this.instance_32.setTransform(120, 160);
        this.instance_32.alpha =
            0;
        this.instance_32._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_32).wait(173).to({
            _off: !1
        }, 0).to({
            alpha: .1484
        }, 3, a.Ease.get(-1)).to({
            alpha: 0
        }, 7, a.Ease.get(1)).to({
            _off: !0
        }, 3).wait(174));
        this.instance_33 = new b.black_mc;
        this.instance_33.parent = this;
        this.instance_33.setTransform(120, 160, 1, 1, 0, 0, 0, 120, 160);
        this.instance_33.alpha = .1992;
        this.instance_33._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_33).wait(171).to({
            _off: !1
        }, 0).to({
            alpha: .5
        }, 2, a.Ease.get(1)).wait(3).to({
                _off: !0
            },
            1).wait(183));
        this.bg_loop = new b.bg;
        this.bg_loop.name = "bg_loop";
        this.bg_loop.parent = this;
        this.bg_loop.setTransform(120, 160);
        this.bg_loop._off = !0;
        this.timeline.addTween(a.Tween.get(this.bg_loop).wait(171).to({
            _off: !1
        }, 0).wait(12).to({
            _off: !0
        }, 3).wait(174));
        this.instance_34 = new b.black_mc;
        this.instance_34.parent = this;
        this.instance_34.setTransform(120, 160, 1, 1, 0, 0, 0, 120, 160);
        this.instance_34.alpha = .1992;
        this.instance_34._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_34).wait(120).to({
                _off: !1
            },
            0).to({
            _off: !0
        }, 25).wait(215));
        this.instance_35 = new b._bg_mc_boke;
        this.instance_35.parent = this;
        this.instance_35.setTransform(120, 160);
        this.instance_35._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_35).wait(95).to({
            _off: !1
        }, 0).wait(88).to({
            _off: !0
        }, 3).wait(89).to({
            _off: !1
        }, 0).wait(85));
        this.skip_btn = new b.btn;
        this.skip_btn.name = "skip_btn";
        this.skip_btn.parent = this;
        this.skip_btn.setTransform(179.95, 15.05, .5002, .0938, 0, 0, 0, 120, 160.6);
        this.skip_btn.alpha = .0117;
        this.timeline.addTween(a.Tween.get(this.skip_btn).wait(233).to({
                y: -35.15
            },
            0).wait(42).to({
            y: 15.05
        }, 0).wait(85));
        this.btn = new b.btn;
        this.btn.name = "btn";
        this.btn.parent = this;
        this.btn.setTransform(120, 190.6, .9999, 1, 0, 0, 0, 120, 160.6);
        this.btn.alpha = .0117;
        this.timeline.addTween(a.Tween.get(this.btn).wait(360));
        this.replace_sign10 = new b.replace_sign10;
        this.replace_sign10.name = "replace_sign10";
        this.replace_sign10.parent = this;
        this.replace_sign10.setTransform(299.9, 439.95, .2, .2, 0, 0, 0, -.5, -.3);
        this.timeline.addTween(a.Tween.get(this.replace_sign10).to({
            _off: !0
        }, 1).wait(359));
        this.replace_sign9 =
            new b.replace_sign9;
        this.replace_sign9.name = "replace_sign9";
        this.replace_sign9.parent = this;
        this.replace_sign9.setTransform(234.35, 440, .2, .2);
        this.timeline.addTween(a.Tween.get(this.replace_sign9).to({
            _off: !0
        }, 1).wait(359));
        this.replace_sign8 = new b.replace_sign8;
        this.replace_sign8.name = "replace_sign8";
        this.replace_sign8.parent = this;
        this.replace_sign8.setTransform(168.8, 440, .2, .2);
        this.timeline.addTween(a.Tween.get(this.replace_sign8).to({
            _off: !0
        }, 1).wait(359));
        this.replace_sign7 = new b.replace_sign7;
        this.replace_sign7.name = "replace_sign7";
        this.replace_sign7.parent = this;
        this.replace_sign7.setTransform(103.25, 440, .2, .2);
        this.timeline.addTween(a.Tween.get(this.replace_sign7).to({
            _off: !0
        }, 1).wait(359));
        this.replace_sign6 = new b.replace_sign6;
        this.replace_sign6.name = "replace_sign6";
        this.replace_sign6.parent = this;
        this.replace_sign6.setTransform(37.7, 440, .2, .2);
        this.timeline.addTween(a.Tween.get(this.replace_sign6).to({
            _off: !0
        }, 1).wait(359));
        this.replace_sign5 = new b.replace_sign5;
        this.replace_sign5.name =
            "replace_sign5";
        this.replace_sign5.parent = this;
        this.replace_sign5.setTransform(-27.85, 440, .2, .2);
        this.timeline.addTween(a.Tween.get(this.replace_sign5).to({
            _off: !0
        }, 1).wait(359));
        this.replace_sign4 = new b.replace_sign4;
        this.replace_sign4.name = "replace_sign4";
        this.replace_sign4.parent = this;
        this.replace_sign4.setTransform(-93.4, 440, .2, .2);
        this.timeline.addTween(a.Tween.get(this.replace_sign4).to({
            _off: !0
        }, 1).wait(359));
        this.replace_sign3 = new b.replace_sign3;
        this.replace_sign3.name = "replace_sign3";
        this.replace_sign3.parent =
            this;
        this.replace_sign3.setTransform(-158.95, 440, .2, .2);
        this.timeline.addTween(a.Tween.get(this.replace_sign3).to({
            _off: !0
        }, 1).wait(359));
        this.replace_sign2 = new b.replace_sign2;
        this.replace_sign2.name = "replace_sign2";
        this.replace_sign2.parent = this;
        this.replace_sign2.setTransform(-224.5, 440, .2, .2);
        this.timeline.addTween(a.Tween.get(this.replace_sign2).to({
            _off: !0
        }, 1).wait(359));
        this.replace_sign1 = new b.replace_sign1;
        this.replace_sign1.name = "replace_sign1";
        this.replace_sign1.parent = this;
        this.replace_sign1.setTransform(-290.25,
            440.4, .2, .2, 0, 0, 0, -1, 2);
        this.timeline.addTween(a.Tween.get(this.replace_sign1).to({
            _off: !0
        }, 1).wait(359));
        this.instance_36 = new b.replace_caption_1;
        this.instance_36.parent = this;
        this.instance_36.setTransform(-176, 33, 1, 1, 0, 0, 0, 84, 9);
        this.timeline.addTween(a.Tween.get(this.instance_36).to({
            _off: !0
        }, 1).wait(359));
        this.instance_37 = new b.replace_title_1;
        this.instance_37.parent = this;
        this.instance_37.setTransform(-170, -18, 1, 1, 0, 0, 0, 90, 35);
        this.timeline.addTween(a.Tween.get(this.instance_37).to({
            _off: !0
        }, 1).wait(359));
        this.instance_38 = new b.replace_bg_blur_1;
        this.instance_38.parent = this;
        this.instance_38.setTransform(380.25, 142, .5, .4999, 0, 0, 0, .5, 0);
        this.timeline.addTween(a.Tween.get(this.instance_38).to({
            _off: !0
        }, 1).wait(359));
        this.instance_39 = new b.replace_bg_1;
        this.instance_39.parent = this;
        this.instance_39.setTransform(380, -32, .25, .25);
        this.timeline.addTween(a.Tween.get(this.instance_39).to({
            _off: !0
        }, 1).wait(359));
        this.instance_40 = new b._cards_SR_replace;
        this.instance_40.parent = this;
        this.instance_40.setTransform(-140,
            200);
        this.timeline.addTween(a.Tween.get(this.instance_40).to({
            _off: !0
        }, 1).wait(359));
        this._0 = new b._10;
        this._0.name = "_0";
        this._0.parent = this;
        this._0.setTransform(250.5, 219.9, 1, 1, 0, 0, 0, .5, -.1);
        this.timeline.addTween(a.Tween.get(this._0).to({
            _off: !0
        }, 1).wait(359));
        this._9 = new b._09;
        this._9.name = "_9";
        this._9.parent = this;
        this._9.setTransform(250, 195.2);
        this.timeline.addTween(a.Tween.get(this._9).to({
            _off: !0
        }, 1).wait(359));
        this._8 = new b._08;
        this._8.name = "_8";
        this._8.parent = this;
        this._8.setTransform(250,
            170.8);
        this.timeline.addTween(a.Tween.get(this._8).to({
            _off: !0
        }, 1).wait(359));
        this._7 = new b._07;
        this._7.name = "_7";
        this._7.parent = this;
        this._7.setTransform(250, 146.4);
        this.timeline.addTween(a.Tween.get(this._7).to({
            _off: !0
        }, 1).wait(359));
        this._6 = new b._06;
        this._6.name = "_6";
        this._6.parent = this;
        this._6.setTransform(250, 122);
        this.timeline.addTween(a.Tween.get(this._6).to({
            _off: !0
        }, 1).wait(359));
        this._5 = new b._05;
        this._5.name = "_5";
        this._5.parent = this;
        this._5.setTransform(250, 97.6);
        this.timeline.addTween(a.Tween.get(this._5).to({
                _off: !0
            },
            1).wait(359));
        this._4 = new b._04;
        this._4.name = "_4";
        this._4.parent = this;
        this._4.setTransform(250, 73.2);
        this.timeline.addTween(a.Tween.get(this._4).to({
            _off: !0
        }, 1).wait(359));
        this._3 = new b._03;
        this._3.name = "_3";
        this._3.parent = this;
        this._3.setTransform(250, 48.8);
        this.timeline.addTween(a.Tween.get(this._3).to({
            _off: !0
        }, 1).wait(359));
        this._2 = new b._02;
        this._2.name = "_2";
        this._2.parent = this;
        this._2.setTransform(250, 24.4);
        this.timeline.addTween(a.Tween.get(this._2).to({
            _off: !0
        }, 1).wait(359));
        this._1 = new b._01;
        this._1.name = "_1";
        this._1.parent = this;
        this._1.setTransform(250.5, -.1, 1, 1, 0, 0, 0, .5, -.1);
        this.timeline.addTween(a.Tween.get(this._1).to({
            _off: !0
        }, 1).wait(359));
        this.instance_41 = new b.costume10_core;
        this.instance_41.parent = this;
        this.instance_41.setTransform(-82, 317.95, .6, .6, 0, 0, 0, 30, 29.9);
        this.timeline.addTween(a.Tween.get(this.instance_41).to({
            _off: !0
        }, 1).wait(359));
        this.instance_42 = new b.costume9_core;
        this.instance_42.parent = this;
        this.instance_42.setTransform(-82, 273.2, .6, .6, 0, 0, 0, 30, 30);
        this.timeline.addTween(a.Tween.get(this.instance_42).to({
                _off: !0
            },
            1).wait(359));
        this.instance_43 = new b.costume8_core;
        this.instance_43.parent = this;
        this.instance_43.setTransform(-82, 228.8, .6, .6, 0, 0, 0, 30, 30);
        this.timeline.addTween(a.Tween.get(this.instance_43).to({
            _off: !0
        }, 1).wait(359));
        this.instance_44 = new b.costume7_core;
        this.instance_44.parent = this;
        this.instance_44.setTransform(-82, 184.4, .6, .6, 0, 0, 0, 30, 30);
        this.timeline.addTween(a.Tween.get(this.instance_44).to({
            _off: !0
        }, 1).wait(359));
        this.instance_45 = new b.costume6_core;
        this.instance_45.parent = this;
        this.instance_45.setTransform(-82,
            140, .6, .6, 0, 0, 0, 30, 30);
        this.timeline.addTween(a.Tween.get(this.instance_45).to({
            _off: !0
        }, 1).wait(359));
        this.instance_46 = new b.costume5_core;
        this.instance_46.parent = this;
        this.instance_46.setTransform(-82, 95.6, .6, .6, 0, 0, 0, 30, 30);
        this.timeline.addTween(a.Tween.get(this.instance_46).to({
            _off: !0
        }, 1).wait(359));
        this.instance_47 = new b.costume4_core;
        this.instance_47.parent = this;
        this.instance_47.setTransform(-82, 51.2, .6, .6, 0, 0, 0, 30, 30);
        this.timeline.addTween(a.Tween.get(this.instance_47).to({
            _off: !0
        }, 1).wait(359));
        this.instance_48 = new b.costume3_core;
        this.instance_48.parent = this;
        this.instance_48.setTransform(-82, 6.8, .6, .6, 0, 0, 0, 30, 30);
        this.timeline.addTween(a.Tween.get(this.instance_48).to({
            _off: !0
        }, 1).wait(359));
        this.instance_49 = new b.costume2_core;
        this.instance_49.parent = this;
        this.instance_49.setTransform(-82, -37.6, .6, .6, 0, 0, 0, 30, 30);
        this.timeline.addTween(a.Tween.get(this.instance_49).to({
            _off: !0
        }, 1).wait(359));
        this.instance_50 = new b.costume1_core;
        this.instance_50.parent = this;
        this.instance_50.setTransform(-82,
            -82, .6, .6, 0, 0, 0, 30, 30);
        this.timeline.addTween(a.Tween.get(this.instance_50).to({
            _off: !0
        }, 1).wait(359));
        this.instance_51 = new b.petit_core10;
        this.instance_51.parent = this;
        this.instance_51.setTransform(354.5, 387.5, 1, 1, 0, 0, 0, 34.5, 47.5);
        this.timeline.addTween(a.Tween.get(this.instance_51).to({
            _off: !0
        }, 1).wait(359));
        this.instance_52 = new b.petit_core9;
        this.instance_52.parent = this;
        this.instance_52.setTransform(313.8, 387.5, 1, 1, 0, 0, 0, 35, 47.5);
        this.timeline.addTween(a.Tween.get(this.instance_52).to({
                _off: !0
            },
            1).wait(359));
        this.instance_53 = new b.petit_core8;
        this.instance_53.parent = this;
        this.instance_53.setTransform(272.7, 387.5, 1, 1, 0, 0, 0, 35, 47.5);
        this.timeline.addTween(a.Tween.get(this.instance_53).to({
            _off: !0
        }, 1).wait(359));
        this.instance_54 = new b.petit_core7;
        this.instance_54.parent = this;
        this.instance_54.setTransform(231.6, 387.5, 1, 1, 0, 0, 0, 35, 47.5);
        this.timeline.addTween(a.Tween.get(this.instance_54).to({
            _off: !0
        }, 1).wait(359));
        this.instance_55 = new b.petit_core6;
        this.instance_55.parent = this;
        this.instance_55.setTransform(190.5,
            387.5, 1, 1, 0, 0, 0, 35, 47.5);
        this.timeline.addTween(a.Tween.get(this.instance_55).to({
            _off: !0
        }, 1).wait(359));
        this.instance_56 = new b.petit_core5;
        this.instance_56.parent = this;
        this.instance_56.setTransform(149.4, 387.5, 1, 1, 0, 0, 0, 35, 47.5);
        this.timeline.addTween(a.Tween.get(this.instance_56).to({
            _off: !0
        }, 1).wait(359));
        this.instance_57 = new b.petit_core4;
        this.instance_57.parent = this;
        this.instance_57.setTransform(108.3, 387.5, 1, 1, 0, 0, 0, 35, 47.5);
        this.timeline.addTween(a.Tween.get(this.instance_57).to({
                _off: !0
            },
            1).wait(359));
        this.instance_58 = new b.petit3_core;
        this.instance_58.parent = this;
        this.instance_58.setTransform(67.2, 387.5, 1, 1, 0, 0, 0, 35, 47.5);
        this.timeline.addTween(a.Tween.get(this.instance_58).to({
            _off: !0
        }, 1).wait(359));
        this.instance_59 = new b.petit2_core;
        this.instance_59.parent = this;
        this.instance_59.setTransform(26.1, 387.5, 1, 1, 0, 0, 0, 35, 47.5);
        this.timeline.addTween(a.Tween.get(this.instance_59).to({
            _off: !0
        }, 1).wait(359));
        this.instance_60 = new b.petit1_core;
        this.instance_60.parent = this;
        this.instance_60.setTransform(-15,
            387.5, 1, 1, 0, 0, 0, 35, 47.5);
        this.timeline.addTween(a.Tween.get(this.instance_60).to({
            _off: !0
        }, 1).wait(359))
    }).prototype = g = new a.MovieClip;
    g.nominalBounds = new a.Rectangle(-188.2, -328.8, 845.9000000000001, 1059.7);
    b.properties = {
        id: "common_gacha",
        width: 240,
        height: 320,
        fps: 12,
        color: "#000000",
        opacity: 1,
        manifest: [{
                src: "../../../images/button.png",
                id: "common_gacha_button"
            }, {
                src: "../../../images/glitter.png",
                id: "common_gacha_glitter"
            }, {
                src: "../../../images/image80.png",
                id: "common_gacha_image80"
            },
            {
                src: "../../../images/LocalAudition.png",
                id: "common_gacha_LocalAudition"
            }, {
                src: "../../../images/LocalAudition_light.png",
                id: "common_gacha_LocalAudition_light"
            }, {
                src: "../../../images/LocalAudition_shadow.png",
                id: "common_gacha_LocalAudition_shadow"
            }, {
                src: "../../../images/NEW.png",
                id: "common_gacha_NEW"
            }, {
                src: "../../../images/new_bg_s_maku.png",
                id: "common_gacha_new_bg_s_maku"
            }, {
                src: "../../../images/new_bg_s_maku_b.png",
                id: "common_gacha_new_bg_s_maku_b"
            }, {
                src: "../../../images/new_w.png",
                id: "common_gacha_new_w"
            }, {
                src: "../../../images/p0.png",
                id: "common_gacha_p0"
            }, {
                src: "../../../images/p0_w.png",
                id: "common_gacha_p0_w"
            }, {
                src: "../../../images/p1.png",
                id: "common_gacha_p1"
            }, {
                src: "../../../images/p1_w.png",
                id: "common_gacha_p1_w"
            }, {
                src: "../../../images/p2.png",
                id: "common_gacha_p2"
            }, {
                src: "../../../images/p2_w.png",
                id: "common_gacha_p2_w"
            }, {
                src: "../../../images/p3.png",
                id: "common_gacha_p3"
            }, {
                src: "../../../images/p3_w.png",
                id: "common_gacha_p3_w"
            }, {
                src: "../../../images/p4.png",
                id: "common_gacha_p4"
            }, {
                src: "../../../images/p4_w.png",
                id: "common_gacha_p4_w"
            }, {
                src: "../../../images/p5.png",
                id: "common_gacha_p5"
            }, {
                src: "../../../images/p5_w.png",
                id: "common_gacha_p5_w"
            }, {
                src: "../../../images/p6.png",
                id: "common_gacha_p6"
            }, {
                src: "../../../images/p6_w.png",
                id: "common_gacha_p6_w"
            }, {
                src: "../../../images/p7.png",
                id: "common_gacha_p7"
            }, {
                src: "../../../images/p7_w.png",
                id: "common_gacha_p7_w"
            }, {
                src: "../../../images/p8.png",
                id: "common_gacha_p8"
            }, {
                src: "../../../images/p8_w.png",
                id: "common_gacha_p8_w"
            }, {
                src: "../../../images/p9.png",
                id: "common_gacha_p9"
            }, {
                src: "../../../images/p9_w.png",
                id: "common_gacha_p9_w"
            }, {
                src: "../../../images/plus.png",
                id: "common_gacha_plus"
            }, {
                src: "../../../images/plus_w.png",
                id: "common_gacha_plus_w"
            }, {
                src: "../../../images/replace_bg.jpg",
                id: "common_gacha_replace_bg"
            }, {
                src: "../../../images/replace_bg_blur.jpg",
                id: "common_gacha_replace_bg_blur"
            }, {
                src: "../../../images/replace_caption.png",
                id: "common_gacha_replace_caption"
            },
            {
                src: "../../../images/replace_card01.jpg",
                id: "common_gacha_replace_card01"
            }, {
                src: "../../../images/replace_card02.jpg",
                id: "common_gacha_replace_card02"
            }, {
                src: "../../../images/replace_card03.jpg",
                id: "common_gacha_replace_card03"
            }, {
                src: "../../../images/replace_card04.jpg",
                id: "common_gacha_replace_card04"
            }, {
                src: "../../../images/replace_card05.jpg",
                id: "common_gacha_replace_card05"
            }, {
                src: "../../../images/replace_card06.jpg",
                id: "common_gacha_replace_card06"
            }, {
                src: "../../../images/replace_card07.jpg",
                id: "common_gacha_replace_card07"
            }, {
                src: "../../../images/replace_card08.jpg",
                id: "common_gacha_replace_card08"
            }, {
                src: "../../../images/replace_card09.jpg",
                id: "common_gacha_replace_card09"
            }, {
                src: "../../../images/replace_card10.jpg",
                id: "common_gacha_replace_card10"
            }, {
                src: "../../../images/replace_card_l1.jpg",
                id: "common_gacha_replace_card_l1"
            }, {
                src: "../../../images/replace_card_l10.jpg",
                id: "common_gacha_replace_card_l10"
            }, {
                src: "../../../images/replace_card_l2.jpg",
                id: "common_gacha_replace_card_l2"
            }, {
                src: "../../../images/replace_card_l3.jpg",
                id: "common_gacha_replace_card_l3"
            }, {
                src: "../../../images/replace_card_l4.jpg",
                id: "common_gacha_replace_card_l4"
            }, {
                src: "../../../images/replace_card_l5.jpg",
                id: "common_gacha_replace_card_l5"
            }, {
                src: "../../../images/replace_card_l6.jpg",
                id: "common_gacha_replace_card_l6"
            }, {
                src: "../../../images/replace_card_l7.jpg",
                id: "common_gacha_replace_card_l7"
            }, {
                src: "../../../images/replace_card_l8.jpg",
                id: "common_gacha_replace_card_l8"
            }, {
                src: "../../../images/replace_card_l9.jpg",
                id: "common_gacha_replace_card_l9"
            }, {
                src: "../../../images/replace_costume01.png",
                id: "common_gacha_replace_costume01"
            }, {
                src: "../../../images/replace_costume02.png",
                id: "common_gacha_replace_costume02"
            }, {
                src: "../../../images/replace_costume03.png",
                id: "common_gacha_replace_costume03"
            }, {
                src: "../../../images/replace_costume04.png",
                id: "common_gacha_replace_costume04"
            }, {
                src: "../../../images/replace_costume05.png",
                id: "common_gacha_replace_costume05"
            }, {
                src: "../../../images/replace_costume06.png",
                id: "common_gacha_replace_costume06"
            }, {
                src: "../../../images/replace_costume07.png",
                id: "common_gacha_replace_costume07"
            }, {
                src: "../../../images/replace_costume08.png",
                id: "common_gacha_replace_costume08"
            }, {
                src: "../../../images/replace_costume09.png",
                id: "common_gacha_replace_costume09"
            }, {
                src: "../../../images/replace_costume10.png",
                id: "common_gacha_replace_costume10"
            }, {
                src: "../../../images/replace_petit01.png",
                id: "common_gacha_replace_petit01"
            }, {
                src: "../../../images/replace_petit02.png",
                id: "common_gacha_replace_petit02"
            }, {
                src: "../../../images/replace_petit03.png",
                id: "common_gacha_replace_petit03"
            }, {
                src: "../../../images/replace_petit04.png",
                id: "common_gacha_replace_petit04"
            }, {
                src: "../../../images/replace_petit05.png",
                id: "common_gacha_replace_petit05"
            }, {
                src: "../../../images/replace_petit06.png",
                id: "common_gacha_replace_petit06"
            }, {
                src: "../../../images/replace_petit07.png",
                id: "common_gacha_replace_petit07"
            }, {
                src: "../../../images/replace_petit08.png",
                id: "common_gacha_replace_petit08"
            }, {
                src: "../../../images/replace_petit09.png",
                id: "common_gacha_replace_petit09"
            }, {
                src: "../../../images/replace_petit10.png",
                id: "common_gacha_replace_petit10"
            }, {
                src: "../../../images/replace_title.png",
                id: "common_gacha_replace_title"
            }, {
                src: "../../../images/replace_title_light.png",
                id: "common_gacha_replace_title_light"
            }, {
                src: "../../../images/scout_medal.png",
                id: "common_gacha_scout_medal"
            }, {
                src: "../../../images/sp_bMas2k.png",
                id: "common_gacha_sp_bMas2k"
            }, {
                src: "../../../images/sp_bMask.png",
                id: "common_gacha_sp_bMask"
            }, {
                src: "../../../images/sp_whiteGlow.png",
                id: "common_gacha_sp_whiteGlow"
            }, {
                src: "../../../images/star.png",
                id: "common_gacha_star"
            }, {
                src: "../../../images/star_rainbow.png",
                id: "common_gacha_star_rainbow"
            }, {
                src: "../../../images/vignette_mask.png",
                id: "common_gacha_vignette_mask"
            }
        ],
        preloads: []
    };
    (b.Stage = function(a) {
        createjs.Stage.call(this, a)
    }).prototype = g = new createjs.Stage;
    g.setAutoPlay = function(a) {
        this.tickEnabled = a
    };
    g.play = function() {
        this.tickEnabled = !0;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    };
    g.stop = function(a) {
        a && this.seek(a);
        this.tickEnabled = !1
    };
    g.seek = function(a) {
        this.tickEnabled = !0;
        this.getChildAt(0).gotoAndStop(b.properties.fps * a / 1E3)
    };
    g.getDuration = function() {
        return this.getChildAt(0).totalFrames / b.properties.fps * 1E3
    };
    g.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / b.properties.fps * 1E3
    };
    l.bootcompsLoaded = l.bootcompsLoaded || [];
    l.bootstrapListeners || (l.bootstrapListeners = []);
    l.bootstrapCallback = function(a) {
        l.bootstrapListeners.push(a);
        if (0 < l.bootcompsLoaded.length)
            for (var b = 0; b < l.bootcompsLoaded.length; ++b) a(l.bootcompsLoaded[b])
    };
    l.compositions = l.compositions || {};
    l.compositions.common_gacha = {
        getStage: function() {
            return exportRoot.getStage()
        },
        getLibrary: function() {
            return b
        },
        getSpriteSheet: function() {
            return y
        },
        getImages: function() {
            return k
        }
    };
    l.compositionLoaded = function(a) {
        l.bootcompsLoaded.push(a);
        for (var b = 0; b < l.bootstrapListeners.length; b++) l.bootstrapListeners[b](a)
    };
    l.getComposition = function(a) {
        return l.compositions[a]
    };
    l.makeResponsive =
        function(a, d, e, g, h) {
            function f() {
                var f = b.properties.width,
                    n = b.properties.height,
                    q = window.innerWidth,
                    r = window.innerHeight,
                    t = window.devicePixelRatio || 1,
                    v = q / f,
                    w = r / n,
                    m = 1;
                if (a)
                    if ("width" == d && k == q || "height" == d && l == r) m = p;
                    else if (e) 1 == g ? m = Math.min(v, w) : 2 == g && (m = Math.max(v, w));
                else if (q < f || r < n) m = Math.min(v, w);
                h[0].width = f * t * m;
                h[0].height = n * t * m;
                h.forEach(function(a) {
                    a.style.width = f * m + "px";
                    a.style.height = n * m + "px"
                });
                stage.scaleX = t * m;
                stage.scaleY = t * m;
                k = q;
                l = r;
                p = m;
                stage.tickOnUpdate = !1;
                stage.update();
                stage.tickOnUpdate = !0
            }
            var k, l, p = 1;
            window.addEventListener("resize", f);
            f()
        }
})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;