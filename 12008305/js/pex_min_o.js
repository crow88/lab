"Pex: https://github.com/PexJS/PexJS";
"version: ec5136d(sjis)";
! function() {
    "use strict";
    var a = "1.1.0",
        b = function() {
            console.log.apply(console, Array.prototype.slice.apply(arguments))
        },
        c = function(e) {
            throw console.error.apply(console, Array.prototype.slice.apply(arguments)), e
        },
        d = function() {
            console.warn.apply(console, Array.prototype.slice.apply(arguments))
        },
        e = function(e) {
            if (e.constructor == Array) return [].concat(e);
            var t = {};
            for (var r in e) t[r] = e[r];
            return t
        },
        f = {
            shapeDetail: null,
            partialDraw: !1,
            delayEval: !0,
            fixRatio: !0,
            width: null,
            height: null,
            transparent: !1,
            fps: null,
            frameCallback: {},
            disableFrameSkip: !1,
            cacheColoredImage: !0,
            stopOnStart: !1,
            enableButton: !1,
            enableTouch: !1,
            debug: !1,
            suppressLog: {},
            origin: null,
            frameRect: null,
            compileAction: !0,
            operation: {},
            cacheMaxShapeSize: null,
            cacheMaxTotalSize: null,
            onerror: null,
            enableStyleText: !1,
            _enableWorkaroundForUnicolor: !1,
            colorLevels: 16,
            swfBinary: null
        },
        g = {};
    g.Ub = 0, g._b = 1, g.Nb = 2, g.Xb = 4, g.Cb = 6, g.Hb = 7, g.Wb = 8, g.$b = 9, g.Kb = 10, g.Rb = 11, g.Tb = 12, g.Fb = 20, g.Db = 21, g.Ob = 22, g.Yb = 26, g.Zb = 28, g.Pb = 32, g.Sb = 33, g.Ib = 34, g.Eb = 35, g.Gb = 36, g.Jb = 37, g.Qb = 39, g.Vb = 43, g.Mb = 46, g.Lb = 48;
    var h = {};
    h.Ab = 0, h.tb = 1, h.Bb = 2;
    var i = {};
    i.zb = 0, i.ub = 16, i.xb = 18, i.yb = 64, i.sb = 65, i.wb = 66, i.vb = 67;
    var j = {};
    j.S = 4, j.X = 5, j.V = 6, j.fb = 7, j.ob = 8, j.gb = 9, j.W = 23, j.o = 10, j.mb = 11, j.R = 12, j.w = 13, j.A = 14, j.M = 15, j.q = 16, j.U = 17, j.T = 18, j.ib = 19, j.kb = 20, j.jb = 21, j.nb = 24, j.G = 28, j.db = 29, j.cb = 32, j.hb = 33, j.C = 34, j.ab = 35, j.v = 36, j._ = 37, j.pb = 38, j.eb = 39, j.z = 40, j.lb = 41, j.B = 45, j.$ = 48, j.Q = 49, j.u = 50, j.r = 51, j.D = 52, j.P = 53, j.O = 54, j.N = 55, j.Z = 76, j.I = 129, j.E = 131, j.qb = 138, j.bb = 139, j.H = 140, j.Y = 150, j.L = 153, j.K = 157, j.s = 158, j.J = 159, j.rb = 141, j.F = 154;
    var k = function e(t) {
            var r = t.charCodeAt(0);
            return e.Ch = e.Ch || new RegExp("[�｡�｢�｣�､�･�ｦ�ｧ�ｨ�ｩ�ｪ�ｫ�ｬ�ｭ�ｮ�ｯ�ｰ�ｱ�ｲ�ｳ�ｴ�ｵ�ｶ�ｷ�ｸ�ｹ�ｺ�ｻ�ｼ�ｽ�ｾ�ｿ���ｾゑｾ�ｾ�ｾ�ｾ�ｾ�ｾ茨ｾ会ｾ奇ｾ具ｾ鯉ｾ搾ｾ趣ｾ擾ｾ撰ｾ托ｾ抵ｾ難ｾ費ｾ包ｾ厄ｾ暦ｾ假ｾ呻ｾ夲ｾ幢ｾ懶ｾ晢ｾ橸ｾ歉"), r >= 32 && 126 >= r || e.Ch.test(t)
        },
        l = function(e, t, r) {
            return [e[0] * t + e[2] * r + 20 * e[4], e[1] * t + e[3] * r + 20 * e[5]]
        },
        m = function(e, t, r) {
            0 != a.indexOf(e.JSON_VERSION) && 1 != a.indexOf(e.JSON_VERSION) && c("src object is not compatible with this Pex version. Please regenerate new one using parse_swf."), t || (t = {});
            for (var i = {
                    Af: e.Af,
                    Ii: [],
                    Pd: !0,
                    loadingImageCount: 0
                }, n = e.Ii, h = 0, s = n.length; s > h; h++) {
                var o = n[h];
                if (o.hasOwnProperty("img")) {
                    var f = t[o.img] || document.createElement("img");
                    f.src || (f.onload = function() {
                        0 === --i.loadingImageCount && r && r()
                    }, f.src = o.img, ++i.loadingImageCount), o.img = f
                }
                i.Ii.push(o)
            }
            return 0 === i.loadingImageCount && r && r(), i
        },
        n = function() {
            this.data = {}, this.Je = [], this.debug = !1, this.suppressFPS = !1, this.af = 0, this.rg = 0;
            var e = this;
            ! function t() {
                setTimeout(t, 1e3 / 60);
                for (var r = Date.now(), i = !1, a = 0; a < e.Je.length; a++) i = e.Je[a].Qi(r) || i;
                i && e.af++;
                var n = e.rg = e.rg || r;
                r - n > 1e3 && (e.debug && !e.suppressFPS && b("fps:" + 1e3 * e.af / (r - n)), e.af = 0, e.rg = r)
            }()
        };
    n.rf = function() {
        var e = n;
        return e.bc ? e.bc : e.bc = new e
    }, n.prototype.Eg = function(e, t, r) {
        var i;
        if ("string" == typeof e) {
            var a = r && r.name || e;
            if (i = this.data[a]) {
                var n = new p(i, t, r);
                return i.Ic(function(e) {
                    return function() {
                        e.me.apply(e, arguments)
                    }
                }(n)), this.Je.push(n), n
            }
            if ("string" == typeof a) {
                if (!r || !r.ig) {
                    var h = new Db(r),
                        n = new p(h, t, r);
                    return h.Eg(e, function(e) {
                        return function() {
                            e.me.apply(e, arguments)
                        }
                    }(n)), r && r.solo || (this.data[a] = h), this.Je.push(n), n
                }
                c("unimplemented json reader")
            }
            return null
        }
        if ("object" == typeof e) {
            var a = r && r.name || e;
            if ("undefined" != typeof a.c_name) var s = a.c_name;
            else var s = a;
            if (i = this.data[s]) {
                var n = new p(i, t, r);
                return n.me(), this.Je.push(n), n
            }
            var h = m(e, r && r.Kf),
                n = new p(h, t, r);
            return n.me(), r && r.solo || (this.data[s] = h), this.Je.push(n), n
        }
        return null
    }, n.prototype.Gj = function(e) {
        for (var t = this.Je, r = t.length, i = 0; r > i; i++)
            if (t[i] == e) return t.splice(i, 1), !0;
        return !1
    };
    var o = function(e, t, r) {
        o.Te = o.Te || Date.now(), r = r || {};
        var i = n.rf();
        i.debug = i.debug || r.debug;
        for (var a in f) a in r || (r[a] = f[a]);
        for (var a in r) !a in f && r.debug && b("unknown option: " + a);
        return i.suppressFPS |= r.suppressLog.fps, i.Eg(e, t, r)
    };
    window.Pex = o;
    var p = function(e, t, r) {
        this.le = e, this.Qd = "string" == typeof t ? document.getElementById(t) : t, this.ch = q(r), this.canvas = null, this.Ih = r.partialDraw ? new ab(this) : new _(this), this.onCreateMC = [], this.newMcList = [], this.kj = new y(this), this.ue = {
            name: ""
        }, this.Qg = {}, this.$c = null, this.Ri = [], this.ag = !1, this.Sc = null, this.jd = [], this.Ui = new L(this);
        var i = this;
        this.readyCallbacks = [], this.Fj = function() {
            for (var e = i.readyCallbacks, t = e.length, r = 0; t > r; r++) e[r]();
            i.Fj = null
        }, this.noskip = !1, this.frameSkipRatio = 0, this.logicalRenderCount = 0, this.Sf()
    };
    p.prototype.Sf = function() {
        var e = this.ch,
            i = this.le,
            a = new x;
        this.Rc = new r(this, a, i.Ii), this.Qh = new t(this, a, null, null), this.Ri.push(this.Qh);
        var n = i.Af;
        this.Qh.yh.uc = n.df, this.mf = e.fps || n.mf, n.nf && this.Ih._h(n.nf), this.df = 0, this.renderCount = 0, this.Vh = !e.stopOnStart
    }, p.prototype.me = function() {
        var e = this.le;
        e.Pd && (this.ch.debug && b("parse completed: " + (Date.now() - o.Te)), this.Fg = !0);
        var t = e.Af;
        this.Qh && (this.Qh.yh.uc = t.df), this.mf = this.ch.fps || t.mf, this.Rc.Nc(this.ue), t.nf && this.Ih._h(t.nf), this.Ih.Ej && this.Ih.Ej()
    }, p.prototype.Qi = function(e) {
        var t, r = this.df;
        if (this.stopFrame) t = Number.MAX_VALUE;
        else if (this.yi) {
            if (t = this.mf * (e - this.yi) / 1e3 | 0, this.frameSkipRatio) {
                var i = t * (1 - this.frameSkipRatio) | 0;
                if (i <= this.logicalRenderCount) return;
                this.logicalRenderCount = i
            }
        } else this.yi = e, t = 1;
        if (!(r == t || this.le.loadingImageCount > 0)) {
            if (this.Fj && this.Fg && this.Fj(), !this.stopFrame) {
                if (!this.Vh) return;
                (1 >= r || this.ch.disableFrameSkip && t - r > 1 || t - r > 30) && (t = r + 1, this.yi = e - r / this.mf * 1e3)
            }
            for (var a = !1, n = !1, h = []; t > r;) {
                r++;
                var s;
                if (!this.kj.Vh) {
                    s = this.ag ? this.Si : this.Ri.length - 1;
                    for (var o = s; o >= 0; o--) {
                        var c = this.Ri[o];
                        if (c.dg) {
                            var f = 1;
                            if (c.yh.dc < c.yh.uc && (f = c.yh.dc + 1), !this.gotoFrame(c, f)) return this.ch.debug && b("gotoFrame: try to go to non-loading frame at mclist"), this.ag = !0, this.Si = o, !1
                        }
                        c.onEnterFrames.length && h.push(c)
                    }
                    for (var l = h.length, o = 0; l > o; o++)
                        for (var c = h[o], u = c.Cc || "/", g = c.yh.dc, p = c.onEnterFrames, d = p.length, v = 0; d > v; v++) p[v](this.Sc, u, g);
                    h = []
                }
                if (!this.kj.Uh()) return this.ch.debug && b("gotoFrame: try to go to non-loading frame inside VM"), !1;
                if (this.ch.enableButton && this.Bj() && !this.kj.Uh()) return this.ch.debug && b("gotoFrame: try to go to non-loading frame inside VM"), !1;
                if (this.onCreateMC.length)
                    for (var $ = this.onCreateMC, y = $.length, j = this.newMcList, l = j.length, o = 0; l > o; o++)
                        for (var u = j[o].Cc || "/", v = 0; y > v; v++) $[v](this.Sc, u);
                if (this.newMcList = [], this.ag = !1, n = !0, this.noskip && (this.ch.debug && b("noskip frame and force rendering"), this.Ih.Hh(), a = !0, this.noskip = !1), this.stopFrame) {
                    var m = this.Qh.yh.dc,
                        w = this.stopFrame % this.Qh.yh.uc;
                    if (0 == w && (w = this.Qh.yh.uc), m == w) {
                        this.lastStopFrame = this.stopFrame, this.stopFrame = 0;
                        break
                    }
                }
            }
            return this.df = r, a || this.Ih.Hh(), n && this.renderCount++, !0
        }
    }, p.prototype.Bj = function() {
        for (var e = !1, t = this.jd, r = t.length - 1; r >= 0; r--) {
            var i = t[r],
                a = i.Pg;
            if (!i.Yf) {
                var n = !1;
                for (var h in a.fd) {
                    if (this.Ui._f(h) && i.Zf(!0)) {
                        this.kj.Hc(i.nh, a.fd[h]), n = !0;
                        break
                    }
                    if ("sh" == h && this.Ui.Vg) {
                        if (i.$f(this.Ui.Vg.x, this.Ui.Vg.y)) {
                            this.kj.Hc(i.nh, a.fd[h]), n = !0;
                            break
                        }
                    } else if ("Dh" == h && this.Ui.Wg && i.$f(this.Ui.Wg.x, this.Ui.Wg.y)) {
                        this.kj.Hc(i.nh, a.fd[h]), n = !0;
                        break
                    }
                }
                if (n) {
                    e = !0;
                    break
                }
            }
        }
        return this.Ui.Cd(), this.Ui.Dd(), e
    }, p.prototype.gotoFrame = function(e, t) {
        t = +t;
        var r = e.yh.dc;
        t = 1 > t ? 1 : t;
        var i = !0;
        if (t > e.yh.uc && (t = e.yh.uc, i = !1), e.Yf || t === r) return !0;
        if (t > e.yh.gc) return !1;
        var a = !1;
        t == r + 1 && (a = !0);
        var n = e.Pg;
        e.yh.dc = t;
        var h = n.bf[t];
        if (i && h)
            for (var s = h.length, o = 0; s > o; o++) this.kj.Hc(e, h[o]);
        if (a) {
            for (var c = n.ef[t], s = c.length, o = 0; s > o; o++) e.Fh(c[o]);
            for (var f = n.cf[t], l = f.length, o = 0; l > o; o++) e.ae(t, f[o]);
            var u = n.gf[t],
                g = !1;
            for (var o in u)
                if (u[o]) {
                    g = !0;
                    var b = e.zd[o],
                        p = n.hf[t][o].Mg;
                    b && !b.ag && p && b.ai(p)
                } g && (e.og = this.df)
        } else {
            for (var d = n.ff[r], v = d.length, $ = n.ff[t], y = $.length, o = 0, j = 0, f = [], m = []; y > o && v > j;) {
                var w = $[o],
                    k = d[j];
                w === k ? (m[m.length] = w, o++, j++) : k > w ? (f[f.length] = w, o++) : (e.Fh(k), j++)
            }
            if (o != y)
                for (; y > o;) f.push($[o++]);
            else if (j != v)
                for (; v > j;) e.Fh(d[j++]);
            for (var s = f.length, o = 0; s > o; o++) {
                var C = f[o];
                e.ae(t, C, n.Df[C].bd != t)
            }
            e.og = this.df, s = m.length;
            for (var o = 0; s > o; o++) {
                var C = m[o],
                    b = e.zd[C],
                    p = n.hf[t][C].Mg;
                b && !b.ag && p && b.ai(p)
            }
        }
        var A = this.ch.frameCallback,
            M = A[e.yh.jc];
        if (M || (M = A["" === e.Cc ? "/" : e.Cc]), M) {
            var I = n.jf;
            for (var E in I) t == I[E] && M[E] && M[E](this);
            var S = M[t] || t == e.yh.uc && M.last;
            S && S(this)
        }
        return n.noskipFrameList[t] && (this.noskip = !0), !0
    }, p.prototype.getAPI = function() {
        return this.Sc || (this.Sc = new I(this))
    }, p.prototype.getFPS = function() {
        return this.mf
    }, p.prototype.setFPS = function(e) {
        this.yi && (this.yi = Date.now() - this.df / e * 1e3), this.mf = this.ch.fps = e
    }, p.prototype.getFrameSkipRatio = function() {
        return this.frameSkipRatio
    }, p.prototype.setFrameSkipRatio = function(e) {
        return this.logicalRenderCount = this.mf * (Date.now() - this.yi) * (1 - e) / 1e3 | 0, this.frameSkipRatio = e, !0
    };
    var q = function(e) {
            var t = function(e, r) {
                    for (var i in e) {
                        var a = e[i];
                        a instanceof HTMLElement || a instanceof Function ? r[i] = a : a instanceof Array ? (r[i] = [], t(a, r[i])) : a instanceof Object ? (r[i] = {}, t(a, r[i])) : r[i] = a
                    }
                },
                r = {};
            return t(e, r), r
        },
        r = function(e, t, r, i, a) {
            this.Ie = e, this.Pg = t, this.Ii = r, this.hd = i, this.gd = a, this.Qc = 0, this.af = 1, this.Cf = 0, this.Ef = [], this.cd = [], this.ne = [], this.Gf = {}, this.Ff = {}, this.ug = {}
        };
    r.prototype.Nc = function(e) {
        this.Ii ? this.Pc(e) : this.Oc(e)
    }, r.prototype.Pc = function(e) {
        var t = this.Ie,
            r = this.Pg,
            i = this.Ii,
            a = i.length;
        e: for (var n = this.Qc; a > n; n++) {
            var h = i[n];
            switch (h.aj) {
                case g.Ub:
                    r.wj = this.af - 1;
                    break e;
                case g.$b:
                    !t.ch.transparent && (t.$c || (t.$c = h.Kd));
                    break;
                case g.Vb:
                    r.jf[h.name] = this.af, "_noskip" === h.name.toLowerCase() && (r.noskipFrameList[this.af] = !0);
                    break;
                case g._b:
                    var o = this.af;
                    r.ff[o] = [].concat(this.Ef), r.cf[o] = this.cd, r.ef[o] = this.ne, r.gf[o] = this.Ff, this.cd = [], this.ne = [], this.Ff = {};
                    var c = {};
                    for (var f in this.Gf) c[f] = this.Gf[f];
                    r.hf[o] = c, this.af++;
                    break;
                case g.Yb:
                    var l = h.wd,
                        u = (h.re, this.ug[h.re]),
                        b = l || this.Gf[u].wd,
                        p = e[b];
                    if (p.aj == g.Mb || b >= 65536 && 4294967295 >= b) {
                        b >= 65536 && (p = e[p.dh]);
                        var v = {},
                            $ = this.Gf[u];
                        for (var f in h) v[f] = h[f] || $ && $[f];
                        v.wd = s(t, p, h.Ah, e), h = v, l = v.wd
                    }
                    if (h.Xg && !l) {
                        var y = this.Gf[u],
                            j = {};
                        for (var f in h) j[f] = h[f];
                        for (var f in y) null == h[f] && null != y[f] && (j[f] = y[f]);
                        this.Gf[u] = j, this.Ff[u] = !0
                    } else {
                        if (h.Xg) {
                            var y = this.Gf[u],
                                j = {};
                            for (var f in h) j[f] = h[f];
                            for (var f in y) null == h[f] && null != y[f] && (j[f] = y[f]);
                            h = j, this.Ef.splice(this.Ef.indexOf(u), 1), this.ne.push(u)
                        }
                        var m = ++this.Cf;
                        this.Ef.push(m), this.Gf[m] = h, this.cd.push(m);
                        var w = {};
                        w.id = m, w.wd = h.wd, w.tg = h.re, w.bd = this.af, w.rh = h, w.Dj = {}, r.Df[m] = w, this.ug[h.re] = m
                    }
                    break;
                case g.Zb:
                    var u = this.ug[h.re];
                    this.Ef.splice(this.Ef.indexOf(u), 1), this.ne.push(u), delete this.Gf[u], delete this.ug[h.re];
                    break;
                case g.Tb:
                    var k = (t.ch.compileAction ? z : A)(h.Gc, t.ch.debug);
                    (r.bf[this.af] || (r.bf[this.af] = [])).push(k);
                    break;
                case g.Wb:
                    break;
                case g.Cb:
                case g.Db:
                case g.Eb:
                case g.Fb:
                case g.Gb:
                case g.Nb:
                case g.Ob:
                case g.Pb:
                case g.Hb:
                case g.Ib:
                case g.Kb:
                case g.Lb:
                case g.Rb:
                case g.Sb:
                case g.Jb:
                case g.Mb:
                case g.Qb:
                    e[h.id] = h;
                    break;
                default:
                    d("Analyzer: unknown tag detected [" + h.aj + "]")
            }
        }
        this.Qc = a, r.of = this.af - 1, r.Cf = this.Cf, r.bj()
    }, r.prototype.Oc = function(e) {
        for (var t = (this.Ie, this.Pg), r = this.hd, i = this.gd, a = [null, [],
                [],
                [],
                []
            ], n = [null, [],
                [],
                [],
                []
            ], h = [null, [],
                [],
                [],
                []
            ], s = [null, {}, {}, {}, {}], o = r.length, c = 0; o > c; c++) {
            var f = r[c],
                l = f.wd,
                u = (e[l], ++this.Cf),
                b = null,
                p = {
                    aj: g.Yb,
                    Xg: 0,
                    re: f.re,
                    wd: l,
                    Mg: f.Mg,
                    ie: f.Ld,
                    name: null,
                    Ed: null
                };
            if (f.Ei && (a[1].push(u), s[1][u] = p, n[1].push(u), f.Di || h[2].push(u), b || (b = 1)), f.Di && (a[2].push(u), s[2][u] = p, f.Ei || n[2].push(u), f.Bi || h[3].push(u), b || (b = 2)), f.Bi && (a[3].push(u), s[3][u] = p, f.Di || n[3].push(u), f.Ci || h[4].push(u), b || (b = 3)), f.Ci) {
                for (var d = f.Di, v = 1; 3 >= v; v++) a[v].push(u), s[v][u] = p, d || n[v].push(u);
                b || (b = 4)
            }
            var $ = {};
            $.id = u, $.wd = l, $.tg = f.re + (4 == b ? 65536 : 0), $.bd = b, $.rh = p, $.Dj = {}, t.Df[u] = $
        }
        for (var c in i) {
            var y = i[c];
            y.lg && (t.fd[y.lg] = z(y.Gc)), y.mh ? t.fd.sh = z(y.Gc) : y.kh && (t.fd.Dh = z(y.Gc))
        }
        t.ff = a, t.cf = n, t.ef = h, t.hf = s, t.gf = [{}, {}, {}, {}], t.jf = {
            ac: 1,
            j: 2,
            d: 3,
            g: 4
        }, t.bf = {}, t.of = 3, t.Cf = this.Cf, t.bj(), this.Qc = o
    };
    var s = function(e, t, r, i) {
            r = r || 0;
            var a = 65536 * t.id + r,
                n = i[a];
            if (n) return a;
            n = {
                id: a,
                dh: t.id,
                aj: g.Nb
            };
            for (var s = r / 65536, o = 1 - s, f = [], l = 0; 4 > l; l++) f.push(t.ti[l] * o + t.Ce[l] * s);
            n.dd = f;
            for (var u = [], b = t.Qe.length, l = 0; b > l; l++) {
                var p = t.Qe[l],
                    d = {
                        zf: {}
                    };
                if (d.aj = p.aj, 0 == p.aj) d.Kd = p.start * o + p.end * s;
                else if (16 == p.aj || 18 == p.aj) {
                    for (var v = [], $ = 0; 6 > $; $++) v[$] = p.start[$] * o + p.end[$] * s;
                    d.Mg = v;
                    for (var y = [], j = p.zf.Bh.length, $ = 0; j > $; $++) {
                        var m = p.zf.Bh[$];
                        y[$] = {
                            Ah: m.xi * o + m.Ge * s,
                            Kd: m.ui * o + m.De * s
                        }
                    }
                    d.zf.Bh = y
                } else c("createVirtualShapeFromMorph: unsupported morphing param:", p.aj);
                u.push(d)
            }
            n.Qe = u;
            for (var w = [], b = t.Bg.length, l = 0; b > l; l++) {
                var k = t.Bg[l],
                    C = {
                        width: k.zi * o + k.He * s,
                        Kd: k.ui * o + k.De * s
                    };
                w.push(C)
            }
            n.Bg = w, t.vi.length > t.Ee.length && c("createVirtualShapeFromMorph: difference detected at startEdges and endEdges");
            for (var A = t.vi.length, M = [], l = 0; A > l; l++) {
                var I = t.vi[l],
                    E = t.Ee[l],
                    S = {};
                I.aj == h.tb && E.aj == h.Ab ? (E.aj = h.tb, E.Wc = E.he = E.x / 2, E.Xc = E.ke = E.y / 2) : I.aj == h.Ab && E.aj == h.tb && (I.aj = h.tb, I.Wc = I.he = I.x / 2, I.Xc = I.ke = I.y / 2), S.aj = I.aj, I.aj == h.Bb ? (S.Ag = I.Ag, S.Oe = I.Oe, S.Pe = I.Pe, S.Ae = I.Ae * o + E.Ae * s, S.Be = I.Be * o + E.Be * s, S.Bg = I.Bg, S.Qe = I.Qe) : I.aj == h.Ab ? (S.x = I.x * o + E.x * s, S.y = I.y * o + E.y * s) : I.aj == h.tb ? (S.he = I.he * o + E.he * s, S.ke = I.ke * o + E.ke * s, S.Wc = I.Wc * o + E.Wc * s, S.Xc = I.Xc * o + E.Xc * s) : c("createVirtualShapeFromMorph: unknown edge type:", I.aj), M.push(S)
            }
            return n.hi = M, i[a] = n, a
        },
        t = function(e, t, r, i, a) {
            this.Ie = e, this.Pg = t, t.bh = function(e) {
                return function() {
                    e.Rg.apply(e, arguments)
                }
            }(this), this.we = {}, this.displayListCount = {}, this.yh = {
                yc: 0,
                Ac: 0,
                dc: 0,
                uc: t.of,
                cc: 100,
                wc: 1,
                xc: 0,
                hc: 0,
                tc: null,
                gc: t.of,
                jc: null,
                ec: null,
                vc: null,
                ic: 1,
                fc: 0,
                zc: 100,
                Bc: 100,
                nc: 0,
                oc: 90,
                rc: 1,
                sc: 1,
                kc: 0,
                lc: 0
            }, this.hj = {}, this.ag = !1, this.dg = !0, this.Xf = !1, this.Vf = !1, this.Yf = !1, this.nh = r, this.children = [], this.Ad = {}, this.zd = {}, this.Tf = 0, this.og = 0, this.Bd = {
                yd: -1,
                Ug: !0
            }, this.Pf(i), this.Cc = r ? r.Cc + "/" + this.yh.jc : "", this.id = null, this.onEnterFrames = [], a ? this.Ke = !0 : this.Ie.newMcList.push(this), this.ue = r && r.ue || e.ue, this.Qg = r && r.Qg || e.Qg
        };
    t.prototype.Rg = function() {
        this.yh.gc = this.Pg.of, this.Pg.wj && (this.yh.uc = this.Pg.wj)
    }, t.prototype.Pf = function(e) {
        var t = this.nh;
        if (e && (this.yh.jc = e.name ? e.name : t ? "instance" + ++t.Tf : "instance1", this.ai(e.Mg)), t) {
            t.children.push(this);
            var r = this.yh.jc;
            t.Ad[r] && t.Ad[r].push(this) || (t.Ad[r] = [this])
        }
    };
    var u = function(e, t, r, i, a, n, h, s) {
        var o = {};
        r *= 20, i *= 20;
        var c = h ? r * h : 0,
            f = s ? i * s : 0,
            l = w(e);
        return e[l] = {
            aj: g.Db,
            id: l,
            img: t
        }, l++, o.shapeId = l, e[o.shapeId] = {
            aj: g.Nb,
            id: o.shapeId,
            dd: [-c, r - c, -f, i - f],
            Qe: [{
                aj: 65,
                _c: o.shapeId - 1,
                Mg: [20, 0, 0, 20, -c / 20, -f / 20]
            }],
            Bg: [],
            hi: [{
                aj: 2,
                Ae: r - c,
                Be: i - f,
                Pe: 1
            }, {
                aj: 0,
                x: -r,
                y: 0
            }, {
                aj: 0,
                x: 0,
                y: -i
            }, {
                aj: 0,
                x: r,
                y: 0
            }, {
                aj: 0,
                x: 0,
                y: i
            }]
        }, l++, o.containerId = l, e[o.containerId] = {
            aj: g.Qb,
            id: o.containerId,
            df: 1,
            Ji: [{
                aj: g.Yb,
                wd: o.shapeId,
                re: 1,
                Xg: 0,
                Mg: [a, 0, 0, n, 0, 0]
            }, {
                aj: g._b
            }, {
                aj: g.Ub
            }]
        }, o.rh = {
            aj: g.Yb,
            wd: o.containerId,
            re: 1,
            Mg: [1, 0, 0, 1, 0, 0],
            Xg: 0
        }, o
    };
    t.prototype.replaceMovieClip = function(e, t, r, i, a, n) {
        var h = e.width,
            s = e.height;
        if (!h || !s) return d("[MovieClip#replaceMovieClip] Unable to replace because image might not be loaded."), !1;
        var o = t ? t / h : 1,
            c = r ? r / s : 1;
        i && (c = o = Math.min(o, c)), this._resetDisplayList(), this.dg = !1;
        var f = u(this.ue, e, h, s, o, c, a, n),
            l = this.nh.Pg;
        l.Cf++;
        var g = l.Cf,
            b = {},
            p = this.yh.dc;
        b.id = g, b.wd = f.containerId, b.tg = 1, b.bd = p, b.rh = f.rh, b.Dj = {}, this.Pg.Df[g] = b;
        for (var v = 1; v <= this.yh.uc; v++) this.Pg.hf[v][g] = f.rh;
        return this.ae(this.af, g), !0
    }, t.prototype.Gd = function(e, t) {
        var r = this.nh,
            i = r.Pg,
            a = r.Pg.Df[this.id],
            n = a.id;
        i.Cf++;
        var h = i.Cf,
            s = G(a.rh);
        s.name = e;
        var o = G(a);
        o.rh = s, o.id = h, o.tg = t, r.Pg.Df[h] = o, r.ae(null, h);
        var c = r.zd[h],
            f = c.yh,
            l = f.jc;
        f = G(this.yh), f.jc = l, f.dc = 1, c.Xf = !0, c.og = this.Ie.df;
        for (var u = i.hf, g = u.length, b = 0, p = 0, d = 1; g > d; d++)
            if (u[d] && u[d][n]) 0 == b && (b = d), p = d - b + 1, u[p][h] = G(u[d][n]), u[p][h].name = e;
            else if (b > 0) {
            p = d - b + 1;
            for (var v = d - b; g > p;) u[p][h] = u[p - v][h], p++;
            break
        }
        return c
    }, t.prototype.ae = function(e, i) {
        var a = this.ue,
            n = this.Ie.ch,
            h = this.Pg.Df[i],
            s = h.wd,
            o = a[s],
            c = h.tg;
        if (this.og = this.Ie.df, this.we[c]) {
            var f = this.displayListCount[c] || 0;
            ++f, c = c + "." + ("000" + f).slice(-4), h.tg = c, this.displayListCount[c] = f
        }
        this.we[c] = h;
        var l = !1;
        switch (o.aj) {
            case g.Hb:
            case g.Ib:
                l = !0;
            case g.Qb:
                var u = h.rh,
                    p = this.Ie,
                    d = this.Qg,
                    v = d[s];
                if (!v) {
                    v = new x;
                    var $ = new r(p, v, o.Ji, o.xd, o.Gc);
                    $.Nc(a), d[s] = v
                }
                var y = new t(p, v, this, u);
                h.Dj[i] = y, l && (y.dg = !1, y.Vf = !0, this.Ie.jd.push(y)), p.Ri.push(y); {
                    p.gotoFrame(y, 1, !1)
                }
                if (y.id = i, this.zd[i] = y, n.replace && u.name)
                    for (var j = n.replace, m = j.length, w = 0; m > w; w++) {
                        var k = j[w];
                        u.name == k.name && y.replaceMovieClip(k.img, k.width, k.height, k.keepAspect, k.xratio, k.yratio)
                    }
                break;
            case g.Jb:
                var C = a[o.id],
                    A = D(this, C.gj),
                    M = A[0],
                    I = A[1];
                M ? "undefined" == typeof M.hj[I] ? I && (M.hj[I] = C.Rf) : C.Rf = M.hj[I] + "" : this.Ie.ch.debug && b("[DefineEditText:variableName] unable to access: " + C.gj)
        }
    }, t.prototype.Fh = function(e) {
        var t = this.Pg.Df[e],
            r = (t.wd, t.tg);
        this.og = this.Ie.df, delete this.we[r];
        var i = this.zd,
            a = i[e];
        delete i[e], a && this.Eh(a)
    }, t.prototype.Eh = function(e, t) {
        if (e.og = this.Ie.df, !t) {
            var r = e.nh;
            r.og = this.Ie.df;
            for (var i = r.children, a = i.length, n = 0; a > n; n++)
                if (e == i[n]) {
                    i.splice(n, 1);
                    break
                } for (var h = r.Ad[e.yh.jc], a = h.length, n = 0; a > n; n++)
                if (e == h[n]) {
                    h.splice(n, 1), 0 == h.length && delete r.Ad[e.yh.jc];
                    break
                }
        }
        for (var i = e.children, a = e.children.length, n = 0; a > n; n++) e.Eh(i[n], !0);
        for (var s = this.Ie.Ri, a = s.length, n = 0; a > n; n++) {
            var o = s[n];
            if (o == e) {
                s.splice(n, 1);
                break
            }
        }
        for (var c = this.Ie.jd, a = c.length, n = 0; a > n; n++) {
            var f = c[n];
            if (f == e) {
                c.splice(n, 1);
                break
            }
        }
        e.Yf = !0
    }, t.prototype.Re = function(e) {
        var t = this.Ad,
            r = t[e];
        if (r && r[0]) return r[0];
        e = e.toLowerCase();
        for (var i in t)
            if (i.toLowerCase() == e) return t[i][0];
        return null
    }, t.prototype.td = function() {
        this.og = this.Ie.df;
        var e = this.yh;
        e.zc = 100 * Math.sqrt(e.rc * e.rc + e.kc * e.kc), e.Bc = 100 * Math.sqrt(e.sc * e.sc + e.lc * e.lc), e.nc = 180 * Math.atan2(e.kc, e.rc) / Math.PI, e.oc = 180 * Math.atan2(e.sc, e.lc) / Math.PI
    }, t.prototype.sf = function() {
        var e = this.yh;
        return [e.rc, e.kc, e.lc, e.sc, e.yc, e.Ac]
    }, t.prototype.ci = function(e) {
        var t = this.yh,
            r = (e - t.nc) / 180 * Math.PI,
            i = Math.cos(r),
            a = Math.sin(r),
            n = [i, a, -a, i, 0, 0],
            h = l(n, t.rc, t.kc),
            s = l(n, t.lc, t.sc);
        t.rc = h[0], t.kc = h[1], t.lc = s[0], t.sc = s[1], this.td()
    }, t.prototype.ei = function(e) {
        this.og = this.Ie.df;
        var t = this.yh,
            r = t.zc;
        if (0 != r) {
            var i = e / r;
            t.rc *= i, t.kc *= i, 0 == e ? t.nc = v(t.nc) : 0 > e && (t.nc = 180 * Math.atan2(t.kc, t.rc) / Math.PI)
        } else {
            var a = t.nc / 180 * Math.PI;
            t.rc = e / 100 * Math.cos(a), t.kc = e / 100 * Math.sin(a)
        }
        t.zc = 100 * Math.sqrt(t.rc * t.rc + t.kc * t.kc)
    }, t.prototype.fi = function(e) {
        this.og = this.Ie.df;
        var t = this.yh,
            r = t.Bc;
        if (0 != r) {
            var i = e / r;
            t.sc *= i, t.lc *= i, 0 == e ? t.oc = v(t.oc) : 0 > e && (t.oc = 180 * Math.atan2(t.sc, t.lc) / Math.PI)
        } else {
            var a = t.oc / 180 * Math.PI;
            t.sc = e / 100 * Math.cos(a), t.lc = e / 100 * Math.sin(a)
        }
        t.Bc = 100 * Math.sqrt(t.sc * t.sc + t.lc * t.lc)
    }, t.prototype.bi = function(e, t) {
        this.og = this.Ie.df, this.yh[e] = t
    }, t.prototype.ai = function(e) {
        this.yh.rc = e[0], this.yh.kc = e[1], this.yh.lc = e[2], this.yh.sc = e[3], this.yh.yc = e[4], this.yh.Ac = e[5], this.td()
    }, t.prototype.wf = function() {
        var e = this.nh;
        if (this.nh) {
            var t = this.ag ? this.sf() : e.Pg.hf[e.yh.dc][this.id].Mg;
            return N(e.wf(), t || [1, 0, 0, 1, 0, 0])
        }
        return this.Ie.Sh || [1, 0, 0, 1, 0, 0]
    }, t.prototype.Zf = function(e) {
        if (e) {
            for (var t = this; t;) {
                if (!t.Zf()) return !1;
                t = t.nh
            }
            return !0
        }
        var r = this.yh;
        return r.wc - 0 && r.zc > 0 && r.Bc > 0
    }, t.prototype.qf = function(e) {
        var t = this.we,
            r = this.yh.dc,
            i = [Number.MAX_VALUE, -Number.MAX_VALUE, Number.MAX_VALUE, -Number.MAX_VALUE];
        for (var a in t) {
            var n, h = t[a],
                s = h.id,
                o = this.Pg.hf[r][s],
                f = this.zd[s];
            if (f) {
                var l = f.ag ? f.sf() : o.Mg;
                n = f.qf(l)
            } else {
                var u = this.ue[h.wd],
                    g = u.dd;
                g ? n = o.Mg ? O(o.Mg, g) : g : c("bounds not found")
            }
            n[0] < i[0] && (i[0] = n[0]), n[1] > i[1] && (i[1] = n[1]), n[2] < i[2] && (i[2] = n[2]), n[3] > i[3] && (i[3] = n[3])
        }
        if (0 == Object.keys(t).length && (i = [0, 0, 0, 0]), !e)
            if (this.ag) e = this.sf();
            else {
                var b = this.nh;
                if (b) {
                    var p = b.yh.dc;
                    e = b.Pg.hf[p][this.id].Mg
                } else e = [1, 0, 0, 1, 0, 0]
            } return O(e, i)
    }, t.prototype.$f = function(e, t) {
        for (var r = this; r;) {
            if (!r.Zf()) return !1;
            r = r.nh
        }
        e *= 20, t *= 20;
        var i = this.qf(this.wf());
        return i[0] <= e && e <= i[1] && i[2] <= t && t <= i[3]
    };
    var v = function(e) {
        for (; e > 180;) e -= 360;
        for (; - 180 >= e;) e += 360;
        return -150 >= e ? 180 : -120 >= e ? -135 : -60 >= e ? -90 : -30 >= e ? -45 : 30 >= e ? 0 : 60 >= e ? 45 : 120 >= e ? 90 : 150 >= e ? 135 : 180
    };
    t.prototype.bg = function(e) {
        var t = this.og;
        if (t >= e) return !0;
        if (this.Wf(e)) return !0;
        for (var r = this.nh; r;) {
            if (r.og >= e) return !0;
            r = r.nh
        }
        return !1
    }, t.prototype.Wf = function(e) {
        if (this.Bd.yd == this.Ie.df) return this.Bd.Ug;
        this.Bd.yd = this.Ie.df;
        var t = this.we,
            r = this.ue;
        for (var i in t) {
            var a = t[i],
                n = this.zd[a.id];
            if (n && n.bg(e)) return this.Bd.Ug = !0, !0;
            if (37 == r[a.rh.wd].aj) return this.Bd.Ug = !0, !0
        }
        return this.Bd.Ug = !1, !1
    }, t.prototype.loadMovie = function(e, t, i) {
        var a, h, s = this,
            o = function() {
                if (h.Nc(c), a.Pd) {
                    if (a.loadingImageCount > 0) return void setTimeout(o, 0);
                    s.ue = c, s.Qg = f;
                    var e = a.Af.nf,
                        t = (e[1] - e[0]) / 20,
                        r = (e[3] - e[2]) / 20,
                        n = i.width || t,
                        u = i.height || r,
                        g = n / t,
                        b = u / r,
                        p = -n * i.xratio || 0,
                        d = -u * i.yratio || 0;
                    s._startMovie(l, a.Ii, g, b, p, d, i.name, i.onready)
                }
            },
            c = {
                name: this.Cc
            },
            f = {},
            l = w(c),
            u = f[l] = new x;
        if ("object" == typeof t) return a = m(t, this.Ie.ch.Kf, o), h = new r(this.Ie, u, a.Ii), h.Nc(c), !0;
        var g = n.rf().data;
        return (a = g[t]) ? (h = new r(this.Ie, u, a.Ii), o(), !0) : (a = g[t] = new Db({
            onerror: i.onerror,
            delayEval: i.delayEval || null == i.delayEval
        }), h = new r(this.Ie, u, a.Ii), a.Eg(t, o), !0)
    }, t.prototype._startMovie = function(e, t, r, i, a, n, h, s) {
        this.Ie;
        this._resetDisplayList(), this.dg = !1;
        var o = this.ue;
        o[e] = {
            aj: g.Qb,
            id: e,
            df: 1,
            Ji: t
        };
        var c = {
                aj: g.Yb,
                wd: e,
                re: 1,
                Mg: [r, 0, 0, i, a, n],
                Xg: 0,
                name: h || ""
            },
            f = ++this.Pg.Cf,
            l = this.yh.dc;
        this.Pg.Df[f] = {
            id: f,
            wd: e,
            tg: 1,
            bd: l,
            rh: c,
            Dj: {}
        };
        for (var u = 1; u <= this.yh.uc; u++) this.Pg.hf[u][f] = c;
        this.ae(this.af, f, null), s && s()
    }, t.prototype._resetDisplayList = function() {
        var e = this.we;
        for (var t in e) {
            var r = e[t];
            this.Fh(r.id)
        }
    };
    var w = function(e) {
            for (var t = 4294967296; e[t];) t++;
            return t
        },
        x = function() {
            this.bh = null, this.of = 0, this.wj = 0, this.ff = [], this.cf = [], this.ef = [], this.hf = [], this.gf = [], this.Df = {}, this.jf = {}, this.bf = {}, this.fd = {}, this.noskipFrameList = [], this.Cf = 0
        };
    x.prototype.bj = function() {
        this.bh && this.bh()
    };
    var y = function(e) {
        this.Ie = e, this.Le = new t(e, new x, null, null, !0), this.Ec = [], this.uh = [], this.Vh = !1, this.Fc = [], this.Sd = [], this.ce = null
    };
    y.prototype.Hc = function(e, t, r) {
        var i = this.Fc,
            a = i || (r ? this.uh : this.Ec);
        a[a.length] = [e, t]
    }, y.prototype.executeAction = function(e, t, r) {
        if (0 == e.yh.dc) return this.Hc(e, t, r), !0;
        var i = this.ce,
            a = this.Fc,
            n = this.Sd,
            h = a.splice(0, a.length),
            s = n.splice(0, n.length);
        this.Hc(e, t, r);
        var o = this.Uh();
        return o || this.Ie.ch.debug && b("gotoFrame: try to go to non-loading frame inside VM"), this.ce = i, a.push.apply(a, h), n.push.apply(n, s), o
    }, y.prototype.Uh = function() {
        var e = this.uh,
            t = this.Ec,
            r = this.Fc,
            i = this.Sd;
        e.length && (r = e, this.uh = []), t.length && (r.push.apply(r, t), this.Ec = []);
        var a = this.Vh;
        this.Vh = !0;
        var n = this.ce;
        for (this.ce = null; r.length;) {
            var h = r[0],
                s = h[0];
            if (n = n || {
                    qh: 0,
                    Og: s,
                    eh: s,
                    qi: [],
                    Se: !1,
                    ud: null
                }, s.Yf) r.shift(), n = i.pop();
            else {
                var o = h[1],
                    c = o(this, n, B, C, D, E, F, G, H, b, d);
                if (!c) return this.ce = n, !1;
                if (n.Se) r.shift(), n = i.pop();
                else {
                    i[i.length] = n, r.unshift.apply(r, n.ud);
                    for (var f = n.ud.length, l = 1; f > l; l++) i[i.length] = null;
                    n = null
                }
            }
        }
        return this.Vh = a, !0
    };
    var z = function(e, t) {
            for (var r = "var c=d.qh;var e=d.Og;var f=d.qi;while(c>=0){switch('o'+c){", i = e.length, a = 0; i > a; a++) {
                var n = e[a];
                switch (r += "case 'o" + n._g + "':", n.Id) {
                    case j.Z:
                        r += "f[f.length]=f[f.length-1];";
                        break;
                    case j.W:
                        r += "f.length--;";
                        break;
                    case j.o:
                        r += "var a=(+f[f.length-1])||0;", r += "var b=(+f[f.length-2])||0;", r += "f[f.length-2]=a+b;", r += "f.length--;";
                        break;
                    case j.mb:
                        r += "var a=(+f[f.length-1])||0;", r += "var b=(+f[f.length-2])||0;", r += "f[f.length-2]=b-a;", r += "f.length--;";
                        break;
                    case j.R:
                        r += "var a=(+f[f.length-1])||0;", r += "var b=(+f[f.length-2])||0;", r += "f[f.length-2]=a*b;", r += "f.length--;";
                        break;
                    case j.w:
                        r += "var a=(+f[f.length-1])||0;", r += "var b=(+f[f.length-2])||0;", r += "f[f.length-2]=(a==0)?'#ERROR':b/a;", r += "f.length--;";
                        break;
                    case j.M:
                        r += "var a=(+f.pop())||0;", r += "var b=(+f.pop())||0;", r += "f[f.length]=(b<a)?1:0;";
                        break;
                    case j.A:
                        r += "var a=(+f.pop())||0;", r += "var b=(+f.pop())||0;", r += "f[f.length]=(a==b)?1:0;";
                        break;
                    case j.q:
                        r += "var a=(+f.pop())||0;", r += "var b=(+f.pop())||0;", r += "f[f.length]=(a&&b)?1:0;";
                        break;
                    case j.U:
                        r += "var a=(+f.pop())||0;", r += "var b=(+f.pop())||0;", r += "f[f.length]=(a||b)?1:0;";
                        break;
                    case j.T:
                        r += "var a=(+f[f.length-1])||0;", r += "f[f.length-1]=(a==0)?1:0;";
                        break;
                    case j.hb:
                        r += "var a=f[f.length-1];a=(a==null)?'':a;", r += "var b=f[f.length-2];b=(b==null)?'':b;", r += "f[f.length-2]=b+''+a;", r += "f.length--;";
                        break;
                    case j.ib:
                        r += "var a=f.pop()+'';", r += "var b=f.pop()+'';", r += "f[f.length]=(a==b)?1:0;";
                        break;
                    case j.jb:
                        r += "var g=+f.pop();", r += "var h=+f.pop()-1;", r += "var k=f.pop()+'';", r += "if(isNaN(g)||isNaN(h)){f[f.length]=''}else{", r += "h=(h<0)?0:h;", r += "g=(g<0)?m(k):g;", r += "f[f.length]=n(k,h,g);}";
                        break;
                    case j.P:
                        r += "var g=+f.pop();", r += "var h=+f.pop()-1;", r += "var k=f.pop()+'';", r += "if(isNaN(g)||isNaN(h)){f[f.length]=''}else{", r += "h=(h<0)?0:h;", r += "g=(g<0)?k.length:g;", r += "f[f.length]=k.substr(h,g);}";
                        break;
                    case j.kb:
                        r += "var k=f[f.length-1]+'';", r += "f[f.length-1]=m(k);";
                        break;
                    case j.Q:
                        r += "var k=f[f.length-1]+'';", r += "f[f.length-1]=k.length;";
                        break;
                    case j.lb:
                        r += "var b=f.pop()+'';", r += "var a=f.pop()+'';", r += "f[f.length]=(a<b)?1:0;";
                        break;
                    case j.nb:
                        r += "f[f.length-1]=(+(f[f.length-1]))|0;";
                        break;
                    case j.u:
                        d("ActionCharToAscii: unimplemented correctly"), r += "f[f.length-1]=(f[f.length-1]+'').charCodeAt(0);";
                        break;
                    case j.r:
                        d("ActionAsciiToChar: unimplemented correctly"), r += "f[f.length-1]=String.fromCharCode(f[f.length-1]);";
                        break;
                    case j.O:
                        r += "f[f.length-1]=(f[f.length-1]+'').charCodeAt(0);";
                        break;
                    case j.N:
                        r += "f[f.length-1]=String.fromCharCode(f[f.length-1]);";
                        break;
                    case j.K:
                        r += "var b=+f.pop();", r += "if(b){c=" + (null == n.ed ? "-1" : n.$g + n.ed) + ";break;}";
                        break;
                    case j.L:
                        r += "c=" + (null == n.ed ? "-1" : n.$g + n.ed) + ";break;";
                        break;
                    case j.Y:
                        for (var h = n.fj.length, s = 0; h > s; s++) {
                            var o = n.fj[s];
                            r += "f[f.length]=", r += null == o ? "null;" : "string" == typeof o ? "unescape('" + escape(o) + "');" : o + ";"
                        }
                        break;
                    case j.G:
                        r += "var o=f.pop();", r += "var value;", r += "var q=r(e,o);", r += "var s=q[0];var t=q[1];", r += "value=(s&&(((s==u.Le)?u.Ie.Qh:s).hj[t]));", r += "value=(typeof(value)=='undefined')?'':value;", r += "f[f.length]=value;";
                        break;
                    case j.db:
                        r += "var value=f.pop();", r += "var t=f.pop();", r += "var q=r(e,t);", r += "q[0] && (((q[0]==u.Le)?u.Ie.Qh:q[0]).hj[q[1]]=value);";
                        break;
                    case j.C:
                        r += "var p=f.pop();", r += "var v=f.pop();", r += "var w=x(e,v);", r += "var name=z[p];", r += "if(w&&w!=u.Le){if(!name){f[f.length]=0}else{", r += "switch(name){case'tc':f[f.length]=(w.nh&&w.Cc)||'/';break;", r += "case'xc':var A=w.qf();f[f.length]=(A[1]-A[0])/20;break;", r += "case'hc':var A=w.qf();f[f.length]=(A[3]-A[2])/20;break;", r += "case'yc':case'Ac':if(w.ag){f[f.length]=((w.yh[name]*50)|0)/50;}", r += "else{var B=w.nh;var C=B&&B.yh.dc;var h=(name=='yc'?4:5);", r += "f[f.length]=B?((B.Pg.hf[C][w.id].Mg[h]*50)|0)/50:0}break;", r += "default:f[f.length]=w.yh[name];}}}else{f[f.length]=p;}";
                        break;
                    case j.ab:
                        r += "var value=f.pop();", r += "var p=f.pop();", r += "var v=f.pop();", r += "var w=x(e,v);", r += "var name=z[p];", r += "if(w&&w!=u.Le){var D=(value==parseFloat(value));switch(name){", r += "case'nc':if(D){w.ag=true;w.ci(+value);}break;", r += "case'zc':if(D){w.ag=true;w.ei(+value);}break;", r += "case'Bc':if(D){w.ag=true;w.fi(+value);}break;", r += "case'cc':case'yc':case'Ac':if(D){w.ag=true;w.bi(name,(+value)||0);}break;", r += "case'fc':case'ic':case'wc':if(value==0||value==1){w.bi(name,+value);}break;", r += "case'xc':var A=w.qf();var E=(A[1]-A[0])/20;var F=w.yh.zc;", r += "if(F!=0){E/=Math.abs(F)};w.ag=true;w.ei(+value/(E||1));break;", r += "case'hc':var A=w.qf();var E=(A[3]-A[2])/20;var F=w.yh.Bc;", r += "if(F!=0){E/=Math.abs(F)};w.ag=true;w.fi(+value/(E||1));break;", r += "case'dc':case'tc':case'uc':case'jc':break;", r += "default:w.yh[name]=value;break;}}";
                        break;
                    case j.V:
                        r += "e.dg=true;";
                        break;
                    case j.fb:
                        r += "e.dg=false;";
                        break;
                    case j.s:
                        r += "var o=f.pop();", r += "var q=r(e,o);", r += "var w=q[0];if(w&&!w.Yf){", r += "var G=q[1];var H=w.Pg.jf[(G+'')]||G;", r += "if(!isNaN(parseInt(H))){var I=w.Pg.bf[H];if(I){", r += "var J=I.length;var q=[];for(var i=0;i<J;i++){q[q.length]=[w,I[i]];}", r += "d.Se=false;d.qh=" + n.$g + ";d.Og=e;d.ud=q;return true;}}}";
                        break;
                    case j.H:
                        r += "e.dg=false;var H=e.Pg.jf[unescape('" + escape(n.ng) + "')];", r += "if(H){var q=u.Ie.gotoFrame(e,H);if(!q){d.qh=" + n._g + ";d.Og=e;return false;}}";
                        break;
                    case j.I:
                        r += "if(e!=u.Le){e.dg=false;var q=u.Ie.gotoFrame(e," + n.af + ");", r += "if(!q){d.qh=" + n._g + ";d.Og=e;return false;}}";
                        break;
                    case j.J:
                        r += "var o=f.pop()+'';var q=r(e,o);var w=q[0];", r += "if(w&&w!=u.Le){var G=q[1];var H=w.Pg.jf[(G+'')]||G;", r += "if(!isNaN(parseInt(H))){w.dg=" + (n.play ? "true" : "false") + ";var q=u.Ie.gotoFrame(w,H);", r += "if(!q){d.qh=" + n._g + ";d.Og=e;f[f.length]=o;return false;}}}";
                        break;
                    case j.S:
                        r += "e.dg=false;var q=u.Ie.gotoFrame(e,e.yh.dc+1);", r += "if(!q){d.qh=" + n._g + ";d.Og=e;return false;}";
                        break;
                    case j.X:
                        r += "e.dg=false;var q=u.Ie.gotoFrame(e,e.yh.dc-1);";
                        break;
                    case j.bb:
                        r += "e=x(d.eh,'" + n.name + "')||u.Le;";
                        break;
                    case j.cb:
                        r += "var K=f.pop();e=x(d.eh,K)||u.Le;";
                        break;
                    case j.F:
                        if (r += "var L=f.pop();var M=f.pop();", n.Gg && d("not implemented:GetURL2 load sprite. ignored"), r += "if(M){", (1 == n.$h || 2 == n.$h) && (r += "var N=e.hj;", r += "var O=[];for(var P in N){O.push(P+'='+(encodeURI(N[P])||''))}", r += "if(O.length>0)M+=(M.indexOf('?')>=0?'&':'?')+O.join('&');"), n.Hg) {
                            switch (r += "var Q=new XMLHttpRequest();", n.$h) {
                                case 0:
                                case 1:
                                    r += "Q.open('GET', M, true);", r += "Q.send('');";
                                    break;
                                case 2:
                                    r += "Q.open('POST', M, true);", r += "Q.setRequestHeader('Content-Type' ,'application/x-www-form-urlencoded; charset=Shift-jis');", r += "Q.send(O.join('&'));"
                            }
                            r += "Q.onreadystatechange=(function(R){return function(){if(Q.readyState == 4 && Q.status == 200){", r += "var S=x(R,L);", r += "if(!S){console.warn('[getURL2] Not found S');S=R}", r += "var T=decodeURI(Q.responseText).split('&');var J=T.length;", r += "for(var P=0;P<J;P++){var U=T[P].split('=');S.hj[U[0]]=U[1];}", r += "}};})(e);"
                        } else switch (n.$h) {
                            case 0:
                            case 1:
                                r += "location.href=M;";
                                break;
                            case 2:
                                r += "var form = document.createElement('form');document.body.appendChild(form);", r += "form.action=M;form.method='post';var N=e.hj;", r += "for(var P in N){var input=document.createElement('input');input.aj='hidden';input.name=P;input.value=encodeURI(N[P]||'');form.appendChild(input);}", r += "form.submit();"
                        }
                        r += "}else{EngineLogW(\"'cj' argument of getURL() is empty\");V(e,L);}";
                        break;
                    case j.v:
                        r += "var W=f.pop();var X=''+f.pop();var Y=''+f.pop();", r += "var Z=x(e,Y);", r += "var $=Z&&Z.wd;", r += "var B=(Z&&Z.nh)||null;", r += "if(B!=null){var _ = B.we[W];", r += "if(_){var ab=_.id;if(_.Dj&&_.Dj[ab]&&_.Dj[ab].Xf){B.Fh(ab);}else{break;}}", r += "var bb=Z.Gd(X,W);bb.yh.wc=1;}";
                        break;
                    case j._:
                        r += "var L=''+f.pop();V(e,L);";
                        break;
                    case j.D:
                        r += "f[f.length]=Date.now();";
                        break;
                    case j.$:
                        r += "f[f.length-1]=(Math.random()*f[f.length-1])|0;";
                        break;
                    case j.B:
                        r += "var cb=f.pop();var db=f.length;", r += "if(f[db-1]=='JavaScript'){", r += "var eb=[];var fb=eval(f[db-2]);f.length-=2;var J=cb-2;for(var i=0;i<J;i++){eb[i]=f.pop();}fb.apply(null,eb);f[f.length]=0;", r += "}else{f.length-=cb;f[f.length]=-1;}";
                        break;
                    case j.pb:
                        r += t ? "EngineLogD('Trace: '+f.pop());" : "f.pop();";
                        break;
                    case 0:
                        break;
                    default:
                        d("not implemented action:" + n.Id), r += "/* not implemented */"
                }
            }
            return r += "c=-1;break;default:gb('jump miss');}}d.Se=true;return true;", new Function("u,d,m,n,r,x,z,hb,V,EngineLogD,EngineLogW", r)
        },
        A = function(a, b) {
            return function(c, d, e, f, g, h, i, k, l, m, n) {
                for (var o = d.Og, p = d.qi, q = {}, r = a.length, s = 0; r > s; s++) {
                    var t = a[s];
                    q[t._g] = s
                }
                for (var s = q[d.qh]; r > s; s++) {
                    var t = a[s];
                    switch (t.Id) {
                        case j.Z:
                            p[p.length] = p[p.length - 1];
                            break;
                        case j.W:
                            p.length--;
                            break;
                        case j.o:
                            var u = +p[p.length - 1] || 0,
                                v = +p[p.length - 2] || 0;
                            p[p.length - 2] = u + v, p.length--;
                            break;
                        case j.mb:
                            var u = +p[p.length - 1] || 0,
                                v = +p[p.length - 2] || 0;
                            p[p.length - 2] = v - u, p.length--;
                            break;
                        case j.R:
                            var u = +p[p.length - 1] || 0,
                                v = +p[p.length - 2] || 0;
                            p[p.length - 2] = u * v, p.length--;
                            break;
                        case j.w:
                            var u = +p[p.length - 1] || 0,
                                v = +p[p.length - 2] || 0;
                            p[p.length - 2] = 0 == u ? "#ERROR" : v / u, p.length--;
                            break;
                        case j.M:
                            var u = +p.pop() || 0,
                                v = +p.pop() || 0;
                            p[p.length] = u > v ? 1 : 0;
                            break;
                        case j.A:
                            var u = +p.pop() || 0,
                                v = +p.pop() || 0;
                            p[p.length] = u == v ? 1 : 0;
                            break;
                        case j.q:
                            var u = +p.pop() || 0,
                                v = +p.pop() || 0;
                            p[p.length] = u && v ? 1 : 0;
                            break;
                        case j.U:
                            var u = +p.pop() || 0,
                                v = +p.pop() || 0;
                            p[p.length] = u || v ? 1 : 0;
                            break;
                        case j.T:
                            var u = +p[p.length - 1] || 0;
                            p[p.length - 1] = 0 == u ? 1 : 0;
                            break;
                        case j.hb:
                            var u = p[p.length - 1];
                            u = null == u ? "" : u;
                            var v = p[p.length - 2];
                            v = null == v ? "" : v, p[p.length - 2] = v + "" + u, p.length--;
                            break;
                        case j.ib:
                            var u = p.pop() + "",
                                v = p.pop() + "";
                            p[p.length] = u == v ? 1 : 0;
                            break;
                        case j.jb:
                            var w = +p.pop(),
                                x = +p.pop() - 1,
                                y = p.pop() + "";
                            isNaN(w) || isNaN(x) ? p[p.length] = "" : (x = 0 > x ? 0 : x, w = 0 > w ? e(y) : w, p[p.length] = f(y, x, w));
                            break;
                        case j.P:
                            var w = +p.pop(),
                                x = +p.pop() - 1,
                                y = p.pop() + "";
                            isNaN(w) || isNaN(x) ? p[p.length] = "" : (x = 0 > x ? 0 : x, w = 0 > w ? y.length : w, p[p.length] = y.substr(x, w));
                            break;
                        case j.kb:
                            var y = p[p.length - 1] + "";
                            p[p.length - 1] = e(y);
                            break;
                        case j.Q:
                            var y = p[p.length - 1] + "";
                            p[p.length - 1] = y.length;
                            break;
                        case j.lb:
                            var v = p.pop() + "",
                                u = p.pop() + "";
                            p[p.length] = v > u ? 1 : 0;
                            break;
                        case j.nb:
                            p[p.length - 1] = 0 | +p[p.length - 1];
                            break;
                        case j.u:
                            n("ActionCharToAscii: unimplemented correctly"), p[p.length - 1] = (p[p.length - 1] + "").charCodeAt(0);
                            break;
                        case j.r:
                            n("ActionAsciiToChar: unimplemented correctly"), p[p.length - 1] = String.fromCharCode(p[p.length - 1]);
                            break;
                        case j.O:
                            p[p.length - 1] = (p[p.length - 1] + "").charCodeAt(0);
                            break;
                        case j.N:
                            p[p.length - 1] = String.fromCharCode(p[p.length - 1]);
                            break;
                        case j.K:
                            var v = +p.pop();
                            v && (s = null == t.ed ? r : q[t.$g + t.ed] - 1);
                            break;
                        case j.L:
                            s = null == t.ed ? r : q[t.$g + t.ed] - 1;
                            break;
                        case j.Y:
                            Array.prototype.push.apply(p, t.fj);
                            break;
                        case j.G:
                            var z = p.pop(),
                                A, B = g(o, z),
                                C = B[0],
                                D = B[1];
                            A = C && (C == c.Le ? c.Ie.Qh : C).hj[D], A = "undefined" == typeof A ? "" : A, p[p.length] = A;
                            break;
                        case j.db:
                            var A = p.pop(),
                                D = p.pop(),
                                B = g(o, D);
                            B[0] && ((B[0] == c.Le ? c.Ie.Qh : B[0]).hj[B[1]] = A);
                            break;
                        case j.C:
                            var E = p.pop(),
                                F = p.pop(),
                                G = h(o, F),
                                H = i[E];
                            if (G && G != c.Le)
                                if (H) switch (H) {
                                    case "tc":
                                        p[p.length] = G.nh && G.Cc || "/";
                                        break;
                                    case "xc":
                                        var I = G.qf();
                                        p[p.length] = (I[1] - I[0]) / 20;
                                        break;
                                    case "hc":
                                        var I = G.qf();
                                        p[p.length] = (I[3] - I[2]) / 20;
                                        break;
                                    case "yc":
                                    case "Ac":
                                        if (G.ag) p[p.length] = (50 * G.yh[H] | 0) / 50;
                                        else {
                                            var J = G.nh,
                                                K = J && J.yh.dc,
                                                x = "yc" == H ? 4 : 5;
                                            p[p.length] = J ? (50 * J.Pg.hf[K][G.id].Mg[x] | 0) / 50 : 0
                                        }
                                        break;
                                    default:
                                        p[p.length] = G.yh[H]
                                } else p[p.length] = 0;
                                else p[p.length] = E;
                            break;
                        case j.ab:
                            var A = p.pop(),
                                E = p.pop(),
                                F = p.pop(),
                                G = h(o, F),
                                H = i[E];
                            if (G && G != c.Le) {
                                var L = A == parseFloat(A);
                                switch (H) {
                                    case "nc":
                                        L && (G.ag = !0, G.ci(+A));
                                        break;
                                    case "zc":
                                        L && (G.ag = !0, G.ei(+A));
                                        break;
                                    case "Bc":
                                        L && (G.ag = !0, G.fi(+A));
                                        break;
                                    case "cc":
                                    case "yc":
                                    case "Ac":
                                        L && (G.ag = !0, G.bi(H, +A || 0));
                                        break;
                                    case "fc":
                                    case "ic":
                                    case "wc":
                                        (0 == A || 1 == A) && G.bi(H, +A);
                                        break;
                                    case "xc":
                                        var I = G.qf(),
                                            M = (I[1] - I[0]) / 20,
                                            N = G.yh.zc;
                                        0 != N && (M /= Math.abs(N)), G.ag = !0, G.ei(+A / (M || 1));
                                        break;
                                    case "hc":
                                        var I = G.qf(),
                                            M = (I[3] - I[2]) / 20,
                                            N = G.yh.Bc;
                                        0 != N && (M /= Math.abs(N)), G.ag = !0, G.fi(+A / (M || 1));
                                        break;
                                    case "dc":
                                    case "tc":
                                    case "uc":
                                    case "jc":
                                        break;
                                    default:
                                        G.yh[H] = A
                                }
                            }
                            break;
                        case j.V:
                            o.dg = !0;
                            break;
                        case j.fb:
                            o.dg = !1;
                            break;
                        case j.s:
                            var z = p.pop(),
                                B = g(o, z),
                                G = B[0];
                            if (G && !G.Yf) {
                                var O = B[1],
                                    P = G.Pg.jf[O + ""] || O;
                                if (!isNaN(parseInt(P))) {
                                    var Q = G.Pg.bf[P];
                                    if (Q) {
                                        for (var R = Q.length, B = [], S = 0; R > S; S++) B[B.length] = [G, Q[S]];
                                        return d.Se = !1, d.qh = t.$g, d.Og = o, d.ud = B, !0
                                    }
                                }
                            }
                            break;
                        case j.H:
                            o.dg = !1;
                            var P = o.Pg.jf[t.ng];
                            if (P) {
                                var B = c.Ie.gotoFrame(o, P);
                                if (!B) return d.qh = t._g, d.Og = o, !1
                            }
                            break;
                        case j.I:
                            if (o != c.Le) {
                                o.dg = !1;
                                var B = c.Ie.gotoFrame(o, t.af);
                                if (!B) return d.qh = t.af, d.Og = o, !1
                            }
                            break;
                        case j.J:
                            var z = p.pop() + "",
                                B = g(o, z),
                                G = B[0];
                            if (G && G != c.Le) {
                                var O = B[1],
                                    P = G.Pg.jf[O + ""] || O;
                                if (!isNaN(parseInt(P))) {
                                    G.dg = t.play;
                                    var B = c.Ie.gotoFrame(G, P);
                                    if (!B) return d.qh = t._g, d.Og = o, p[p.length] = z, !1
                                }
                            }
                            break;
                        case j.S:
                            o.dg = !1;
                            var B = c.Ie.gotoFrame(o, o.yh.dc + 1);
                            if (!B) return d.qh = t._g, d.Og = o, !1;
                            break;
                        case j.X:
                            o.dg = !1;
                            var B = c.Ie.gotoFrame(o, o.yh.dc - 1);
                            break;
                        case j.bb:
                            o = h(d.eh, t.name) || c.Le;
                            break;
                        case j.cb:
                            var T = p.pop();
                            o = h(d.eh, T) || c.Le;
                            break;
                        case j.F:
                            t.Gg && n("not implemented:GetURL2 load sprite. ignored");
                            var U = p.pop(),
                                V = p.pop();
                            if (V) {
                                if (1 == t.$h || 2 == t.$h) {
                                    var W = o.hj,
                                        X = [];
                                    for (var Y in W) X.push(Y + "=" + (encodeURI(W[Y]) || ""));
                                    X.length > 0 && (V += (V.indexOf("?") >= 0 ? "&" : "?") + X.join("&"))
                                }
                                if (t.Hg) {
                                    var Z = new XMLHttpRequest;
                                    switch (t.$h) {
                                        case 0:
                                        case 1:
                                            Z.open("GET", V, !0), Z.send("");
                                            break;
                                        case 2:
                                            Z.open("POST", V, !0), Z.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=Shift-jis"), Z.send(X.join("&"))
                                    }
                                    Z.onreadystatechange = function(e) {
                                        return function() {
                                            if (4 == Z.readyState && 200 == Z.status) {
                                                var t = h(e, U);
                                                t || (console.warn("[getURL2] Not found targetMC"), t = e);
                                                for (var r = decodeURI(Z.responseText).split("&"), i = r.length, a = 0; i > a; a++) {
                                                    var n = r[a].split("=");
                                                    t.hj[n[0]] = n[1]
                                                }
                                            }
                                        }
                                    }(o)
                                } else switch (t.$h) {
                                    case 0:
                                    case 1:
                                        location.href = V;
                                        break;
                                    case 2:
                                        var $ = document.createElement("form");
                                        document.body.appendChild($), $.action = V, $.method = "post";
                                        var W = o.hj;
                                        for (var Y in W) {
                                            var _ = document.createElement("input");
                                            _.aj = "hidden", _.name = Y, _.value = encodeURI(W[Y] || ""), $.appendChild(_)
                                        }
                                        $.submit()
                                }
                            } else n("'url' argument of getURL() is empty"), l(o, U);
                            break;
                        case j.v:
                            var ab = p.pop(),
                                bb = "" + p.pop(),
                                cb = "" + p.pop(),
                                db = h(o, cb),
                                eb = db && db.wd,
                                J = db && db.nh || null;
                            if (null != J) {
                                var fb = J.we[ab];
                                if (fb) {
                                    var gb = fb.id;
                                    if (!(fb.Dj && fb.Dj[gb] && fb.Dj[gb].Xf)) return -1;
                                    J.Fh(gb)
                                }
                                var hb = db.Gd(bb, ab);
                                hb.yh.wc = 1
                            }
                            break;
                        case j._:
                            var U = "" + p.pop();
                            l(o, U);
                            break;
                        case j.D:
                            p[p.length] = Date.now();
                            break;
                        case j.$:
                            p[p.length - 1] = Math.random() * p[p.length - 1] | 0;
                            break;
                        case j.B:
                            var ib = p.pop(),
                                jb = p.length;
                            if ("JavaScript" == p[jb - 1]) {
                                var kb = [],
                                    lb = eval(p[jb - 2]);
                                p.length -= 2;
                                for (var mb = ib - 2, S = 0; mb > S; S++) kb[S] = p.pop();
                                lb.apply(null, kb), p[p.length] = 0
                            } else p.length -= ib, p[p.length] = -1;
                            break;
                        case j.pb:
                            b ? m("Trace: " + p.pop()) : p.pop();
                            break;
                        case 0:
                            break;
                        default:
                            n("not implemented action:" + t.Id)
                    }
                }
                return d.Se = !0, !0
            }
        },
        B = function(e) {
            for (var t = 0, r = 0; r < e.length; r++) t += k(e.charAt(r)) ? 1 : 2;
            return t
        },
        C = function(e, t, r) {
            for (var i = 0, a = 0, n = [], h = 0; t > a;) {
                var s = e.charAt(i),
                    o = k(s) ? 1 : 2;
                a += o, i++
            }
            for (a != t && (n.push("�･"), h = 1); i < e.length && r > h; i++) {
                var s = e.charAt(i),
                    o = k(s) ? 1 : 2;
                h + o > r ? (n[n.length] = "�･", h += 1) : (n[n.length] = s, h += o)
            }
            return n.join("")
        },
        D = function(e, t) {
            var r = e.Vf && e.nh || e,
                i = t + "",
                a = i.split(":");
            return 2 == a.length && (r = E(e, a[0]), i = a[1]), [r, i]
        },
        E = function(e, t) {
            if ("" == t) return !e.Ke && e || null;
            if (e = e.Ke && e.Ie.Qh || e, "_level0" == t) return e.Ie.Qh;
            var r = t.split("/"),
                i = 0;
            "" == r[0] && (e = e.Ie.Qh, i++);
            for (var a; i < r.length; i++)
                if (a = r[i], "" == a || "." == a);
                else if (".." == a) {
                if (!e.nh) return null;
                for (e = e.nh; e.Vf;) e = e.nh
            } else if ("." == a.charAt(0) && (a = a.substring(1)), e = e.Re(a), !e) return null;
            return e
        },
        F = ["yc", "Ac", "zc", "Bc", "dc", "uc", "cc", "wc", "xc", "hc", "nc", "tc", "gc", "jc", "ec", "vc", "ic", "fc"],
        G = function(e) {
            var t = {};
            for (var r in e) t[r] = e[r];
            return t
        },
        H = function(e, t) {
            var r = E(e, t),
                i = r ? r.nh : null;
            if (null != i && null != r)
                for (var a in i.we)
                    if (a >= 16384) {
                        var n = i.we[a];
                        if (e = n.Dj[n.id], e == r) {
                            if (e.Xf) return void i.Fh(n.id);
                            d("[removeSprite] not cloned", e, t)
                        }
                    }
        },
        I = function(e) {
            this.Ie = e
        };
    I.prototype.gotoFrame = function(e, t, r) {
        var i = this.Ie,
            a = E(i.Qh, e);
        if (!a) return !1;
        if (t = +(a.Pg.jf[t + ""] || t), !t) return !1;
        var n = z([{
            Id: j.I,
            af: t,
            _g: 0
        }, {
            Id: j.V,
            _g: 4
        }]);
        return r || "undefined" == typeof r ? (i.kj.executeAction(a, n), !0) : (i.kj.Hc(a, n), !0)
    }, I.prototype.gotoAndStop = function(e, t, r) {
        var i = this.Ie,
            a = E(i.Qh, e);
        if (!a) return !1;
        t = +(a.Pg.jf[t + ""] || t);
        var n = z([{
            Id: j.I,
            af: t,
            _g: 0
        }, {
            Id: j.fb,
            _g: 0
        }]);
        return r || "undefined" == typeof r ? (i.kj.executeAction(a, n), !0) : (i.kj.Hc(a, n), !0)
    }, I.prototype.keyDown = function(e) {
        this.Ie.Ui.keyDown(e)
    }, I.prototype.play = function(e) {
        var t = this.Ie,
            r = e && E(t.Qh, e) || t.Qh;
        return r ? (r.dg = !0, !0) : !1
    }, I.prototype.stop = function(e) {
        var t = this.Ie,
            r = e && E(t.Qh, e) || t.Qh;
        if (!r) return !1;
        var i = z([{
            Id: j.fb,
            _g: 0
        }]);
        return t.kj.Hc(r, i), !0
    }, I.prototype.stopAll = function(e) {
        var t = this.Ie,
            r = e && E(t.Qh, e) || t.Qh;
        if (!r) return !1;
        var i = function(e) {
            var r = z([{
                Id: j.fb,
                _g: 0
            }]);
            t.kj.Hc(e, r);
            for (var a = e.children, n = a.length, h = 0; n > h; h++) i(a[h])
        };
        return i(r), !0
    }, I.prototype.getVariable = function(e, t) {
        var r = this.Ie,
            i = E(r.Qh, e);
        return i ? i.hj[t] : void 0
    }, I.prototype.getVariables = function(e, t) {
        var r = E(this.Ie.Qh, e);
        if (r) {
            if (!t) return r.hj;
            if (!(t instanceof Array)) return void d("variableNames should be an Array.");
            for (var i, a = {}, n = r.hj, h = t.length, s = 0; h > s; s++) i = t[s], n.hasOwnProperty(i) && (a[i] = n[i]);
            return a
        }
    }, I.prototype.destroy = function() {
        this.Ie.Ui.removeAllListeners();
        var e = n.rf();
        return e.Gj(this.Ie)
    }, I.prototype.setVariable = function(e, t, r) {
        var i = this.Ie,
            a = E(i.Qh, e);
        return a ? (a.hj[t] = r, !0) : !1
    }, I.prototype.setVariables = function(e, t) {
        var r = E(this.Ie.Qh, e);
        if (!r) return !1;
        var i = r.hj;
        for (var a in t) i[a] = t[a];
        return !0
    };
    var J = function(e, t, r) {
        var i = e.Ie,
            a = t && E(i.Qh, t);
        return a ? a.yh[r] : void 0
    };
    I.prototype.getCurrentFrame = function(e) {
        return J(this, e || "/", "dc")
    }, I.prototype.getTotalFrames = function(e) {
        return J(this, e || "/", "uc")
    }, I.prototype.getVisible = function(e) {
        return J(this, e || "/", "wc")
    }, I.prototype.setVisible = function(e, t) {
        var r = this.Ie,
            i = E(r.Qh, e);
        if (!i) return !1;
        var a = +t;
        return 0 == a || 1 == a ? (i.bi("wc", a), !0) : (d("Invalid value: " + t), !1)
    }, I.prototype.setPosition = function(e, t, r) {
        var i = E(this.Ie.Qh, e);
        return i ? (i.ag = !0, i.bi("yc", +t || 0), i.bi("Ac", +r || 0), !0) : !1
    }, I.prototype.setMovieClipProperty = function(e, t, r) {
        var i = this.Ie,
            a = E(i.Qh, e);
        if (!a) return !1;
        switch (t) {
            case "zc":
                a.ag = !0, a.ei(+r || 0);
                break;
            case "Bc":
                a.ag = !0, a.fi(+r || 0);
                break;
            case "nc":
                a.ag = !0, a.ci(+r || 0);
                break;
            case "yc":
            case "Ac":
            case "cc":
                a.ag = !0, a.bi(t, +r || 0);
                break;
            case "fc":
            case "ic":
            case "wc":
                (0 == r || 1 == r) && a.bi(t, +r);
                break;
            default:
                return !1
        }
        return !0
    }, I.prototype.getMovieClipProperty = function(e, t) {
        var r = this.Ie,
            i = E(r.Qh, e);
        return i ? i.yh[t] : void 0
    }, I.prototype.ready = function(e) {
        this.Ie.Fg ? e() : this.Ie.readyCallbacks.push(e)
    }, I.prototype.engineStart = function() {
        return this.Ie.Vh = !0, !0
    }, I.prototype.engineStop = function() {
        return this.Ie.Vh = !1, !0
    }, I.prototype.getMovieClipNames = function(e) {
        var t = this.Ie,
            r = e && E(t.Qh, e) || t.Qh;
        return r ? Object.keys(r.Ad) : null
    }, I.prototype.getFrameLabelMap = function(e) {
        var t = this.Ie,
            r = e && E(t.Qh, e) || t.Qh;
        if (!r) return null;
        var i = r.Pg.jf,
            a = {};
        for (var n in i) a[n] = i[n];
        return a
    }, I.prototype._getCacheImageInfo = function() {
        var e = this.Ie.Ih;
        return e && e.pd
    }, I.prototype.replaceMovieClip = function(e, t, r, i, a, n, h) {
        for (var s = this.Ie, o = s.Ri, c = 0; c < o.length; c++) {
            var f = o[c];
            f.yh.jc == e && f.replaceMovieClip(t, r, i, a, n, h)
        }
        for (var l = s.ch.replace || (s.ch.replace = []), c = 0; c < l.length; c++) {
            var u = l[c];
            if (u.name == e) return u.img = t, u.width = r, u.height = i, u.keepAspect = a, u.xratio = n, void(u.yratio = h)
        }
        l.push({
            name: e,
            img: t,
            width: r,
            height: i,
            keepAspect: a,
            xratio: n,
            yratio: h
        })
    }, I.prototype.getRenderingContext = function() {
        return this.Ie && this.Ie.Ih && this.Ie.Ih.be
    }, I.prototype._getStatics = function() {
        return {
            _frameCount: this.Ie.df,
            renderCount: this.Ie.renderCount
        }
    }, I.prototype.getMovieClipNamesAtPoint = function(e, t) {
        var r = [];
        e *= 20, t *= 20;
        var i = function(a) {
            var n = a.qf(a.wf());
            if (n[0] <= e && e <= n[1] && n[2] <= t && t <= n[3]) {
                r.push(a.Cc || "/");
                for (var h = a.children, s = h.length, o = 0; s > o; o++) i(h[o])
            }
        };
        return i(this.Ie.Qh), r
    }, I.prototype.addEventListener = function(e, t, r) {
        switch (e.toLowerCase()) {
            case "enterframe":
                var i = E(this.Ie.Qh, r);
                if (!i) return !1;
                var a = i.onEnterFrames.indexOf(t);
                if (-1 !== a) return !1;
                i.onEnterFrames.push(t);
                break;
            case "movieclipcreate":
                var n = this.Ie,
                    a = n.onCreateMC.indexOf(t);
                if (-1 !== a) return !1;
                n.onCreateMC.push(t);
                break;
            default:
                d("Invalid event: " + e)
        }
        return !0
    }, I.prototype.removeEventListener = function(e, t, r) {
        switch (e.toLowerCase()) {
            case "enterframe":
                var i = E(this.Ie.Qh, r);
                if (!i) return !1;
                var a = i.onEnterFrames.indexOf(t);
                if (-1 === a) return !1;
                i.onEnterFrames.splice(a, 1);
                break;
            case "movieclipcreate":
                var n = this.Ie,
                    a = n.onCreateMC.indexOf(t);
                if (-1 === a) return !1;
                n.onCreateMC.splice(a, 1);
                break;
            default:
                d("Invalid event: " + e)
        }
        return !0
    }, I.prototype.redraw = function() {
        this.Ie.Ih.Hh()
    }, I.prototype.getFPS = function() {
        return this.Ie.getFPS()
    }, I.prototype.setFPS = function(e) {
        this.Ie.setFPS(e)
    }, I.prototype.getFrameSkipRatio = function() {
        return this.Ie.getFrameSkipRatio()
    }, I.prototype.setFrameSkipRatio = function(e) {
        return this.Ie.setFrameSkipRatio(e)
    }, I.prototype.callActions = function(e, t) {
        var r = this.Ie,
            i = E(r.Qh, e);
        if (!i) return !1;
        if (t = +(i.Pg.jf[t + ""] || t), !t) return !1;
        var a = z([{
            Id: j.Y,
            fj: [t],
            _g: 0
        }, {
            Id: j.s,
            $g: 2,
            _g: 1
        }, {
            Id: 0,
            _g: 2
        }]);
        return r.kj.executeAction(i, a), !0
    }, I.prototype.loadMovie = function(e, t, r) {
        var i = E(this.Ie.Qh, e);
        return i ? void i.loadMovie(e, t, r) : !1
    }, I.prototype.showFrame = function(e) {
        var t = this.Ie.lastStopFrame || 0,
            r = 1 + e * this.Ie.mf | 0;
        return t != r && (this.Ie.stopFrame = r, this.Ie.Qi(Date.now())), this.Ie.Qh.yh.dc
    };
    var L = function(e) {
        if (this.Ie = e, this.eg = !1, this.Vg = null, this.Wg = null, this.ee = {
                x: 0,
                y: 0
            }, this.kg = {}, this.listenerList = [], this.Ie.ch.enableTouch) {
            var t = this;
            this.addListener(document, "keydown", function(e) {
                t.keyDown(e.keyCode)
            }, !1), "ontouchstart" in document.body || (e.ch.debug && b("PC browser mode detected"), this.addListener(e.Qd, "mousedown", function(e) {
                t.Xi.call(t, e), e.preventDefault()
            }, !1), this.addListener(document, "mouseup", function(e) {
                t.Wg = {
                    x: t.ee.x,
                    y: t.ee.y
                }, t.eg && (t.Wi.call(t, e), e.preventDefault())
            }, !1)), this.addListener(e.Qd, "touchstart", function(e) {
                t.Xi.call(t, e.touches[0]), e.preventDefault()
            }, !1), this.addListener(document, "touchend", function(e) {
                t.Wg = {
                    x: t.ee.x,
                    y: t.ee.y
                }, t.eg && (t.Wi.call(t, e), e.preventDefault())
            }, !1)
        }
    };
    L.prototype.vf = function(e) {
        var t = e.pageX,
            r = e.pageY,
            i = this.Ie.Qd.style.zoom;
        if (i) {
            var a = i.substring(0, i.length - 1) / 100;
            t /= a, r /= a
        }
        for (var n = this.Ie.canvas; n;) t -= n.offsetLeft, r -= n.offsetTop, n = n.offsetParent;
        return {
            x: t,
            y: r
        }
    }, L.prototype.keyDown = function(e) {
        this.kg[e] = !0
    }, L.prototype.Xi = function(e) {
        var t = this.vf(e);
        return this.di(t.x, t.y), this.yg ? (this.Vi(t.x, t.y), !1) : (this.eg = !0, this.yi = (new Date).getTime(), this.Yi = t, this.Qf = t, this.sg = t, !1)
    }, L.prototype.Wi = function() {
        return this.eg = !1, this.Wg = {
            x: this.sg.x,
            y: this.sg.y
        }, this.Zh(), !1
    }, L.prototype.Dd = function() {
        this.Vg = null, this.Wg = null
    }, L.prototype.Cd = function() {
        this.kg = {}
    }, L.prototype._f = function(e) {
        return this.kg[e] || !1
    }, L.prototype.Vi = function(e, t) {
        this.ah && this.ah(e, t) || (this.Vg = {
            x: e,
            y: t
        }, this.yg && this.yg !== !0 && this.keyDown(this.yg), !this.yg && this.Ve && this.Ve.Ui && this.keyDown(this.Ve.Ui))
    }, L.prototype.Zh = function() {
        if (!this.sg || this.sg.x == this.Qf.x && this.sg.y == this.Qf.y) return void this.Vi(this.Yi.x, this.Yi.y);
        if (this.Ve) {
            var e = Math.atan2(this.sg.x - this.Qf.x, -this.sg.y + this.Qf.y) / Math.PI * 180;
            for (var t in this.Ve) {
                var r = t.split(":");
                2 == r.length && (r[0] <= e && e <= r[1] || r[0] <= e + 360 && e + 360 <= r[1]) && this.keyDown(this.Ve[t])
            }
        }
    }, L.prototype.di = function() {}, L.prototype.addListener = function(e, t, r, i) {
        this.listenerList.push([e, t, r]), e.addEventListener(t, r, i)
    }, L.prototype.removeAllListeners = function() {
        for (var e = this.listenerList.length, t = 0; e > t; t++) {
            var r = this.listenerList[t];
            r[0].removeEventListener(r[1], r[2], !1), this.listenerList[t] = null
        }
    };
    var M = function(e) {
            var t = e[0] * e[3] - e[1] * e[2];
            return 0 == t && d("revTransform: detT == 0"), [e[3] / t, -e[1] / t, -e[2] / t, e[0] / t, (e[2] * e[5] - e[3] * e[4]) / t, (e[1] * e[4] - e[0] * e[5]) / t]
        },
        N = function(e, t) {
            return 0 == e[2] && 0 == e[1] ? 0 == t[2] && 0 == t[1] ? [e[0] * t[0], 0, 0, e[3] * t[3], e[0] * t[4] + e[4], e[3] * t[5] + e[5]] : [e[0] * t[0], e[3] * t[1], e[0] * t[2], e[3] * t[3], e[0] * t[4] + e[4], e[3] * t[5] + e[5]] : 0 == t[2] && 0 == t[1] ? [e[0] * t[0], e[1] * t[0], e[2] * t[3], e[3] * t[3], e[0] * t[4] + e[2] * t[5] + e[4], e[1] * t[4] + e[3] * t[5] + e[5]] : [e[0] * t[0] + e[2] * t[1], e[1] * t[0] + e[3] * t[1], e[0] * t[2] + e[2] * t[3], e[1] * t[2] + e[3] * t[3], e[0] * t[4] + e[2] * t[5] + e[4], e[1] * t[4] + e[3] * t[5] + e[5]]
        },
        O = function(e, t, r) {
            var i = [],
                a = t[0],
                n = t[1],
                h = t[2],
                s = t[3],
                o = n - a,
                c = s - h,
                f = r ? [e[0] * a + e[2] * h + e[4], e[1] * a + e[3] * h + e[5]] : l(e, a, h),
                u = e[0] * o,
                g = e[1] * o,
                b = e[2] * c,
                p = e[3] * c;
            return u >= 0 ? b >= 0 ? (i[1] = f[0] + u + b, i[0] = f[0]) : (i[1] = f[0] + u, i[0] = f[0] + b) : b >= 0 ? (i[1] = f[0] + b, i[0] = f[0] + u) : (i[1] = f[0], i[0] = f[0] + u + b), g >= 0 ? p >= 0 ? (i[3] = f[1] + g + p, i[2] = f[1]) : (i[3] = f[1] + g, i[2] = f[1] + p) : p >= 0 ? (i[3] = f[1] + p, i[2] = f[1] + g) : (i[3] = f[1], i[2] = f[1] + g + p), i
        },
        P = function(e) {
            var t = [e >> 16 & 255, e >> 8 & 255, 255 & e, (e >> 24 & 255) / 255];
            return "rgba(" + t.join() + ")"
        },
        Q = function(e, t, r) {
            var i = function(e) {
                return Math.round(100 * e)
            };
            if (r) {
                if (i(e[2]) == i(t[2]) && i(e[0]) == i(t[0]) && i(e[3]) == i(t[3]) && i(e[1]) == i(t[1])) return !0
            } else if (i(e[4]) == i(t[4]) && i(e[5]) == i(t[5]) && i(e[2]) == i(t[2]) && i(e[0]) == i(t[0]) && i(e[3]) == i(t[3]) && i(e[1]) == i(t[1])) return !0;
            return !1
        },
        R = function(e, t) {
            if (e.length != t.length) return !1;
            for (var r = e.length, i = 0; r > i; i++)
                for (var a = e[i], n = t[i], h = 0; 8 > h; h++)
                    if (a[h] != n[h]) return !1;
            return !0
        },
        S = function(e, t) {
            var r = e.length;
            if (!r) return P(t);
            for (var i = [t >> 16 & 255, t >> 8 & 255, 255 & t, t >> 24 & 255], a = r - 1; a >= 0; a--) {
                var n = e[a];
                i[0] = 0 | Math.max(0, Math.min(255, i[0] * n[0] / 256 + n[4])), i[1] = 0 | Math.max(0, Math.min(255, i[1] * n[1] / 256 + n[5])), i[2] = 0 | Math.max(0, Math.min(255, i[2] * n[2] / 256 + n[6])), i[3] = Math.max(0, Math.min(255, i[3] * n[3] / 256 + n[7]))
            }
            return i[3] /= 255, "rgba(" + i.join() + ")"
        },
        T = function(e) {
            return function(t, r) {
                if (!r.width) return r;
                var i = t.length;
                if (!i) return r;
                for (var a = r.width, n = r.height, h = a * n, s = 0; i > s; s++) h += "-" + t[s].join();
                var o = e.getColoredImage(h, r);
                return o ? o : (o = U(t, r), e.cacheColoredImage(h, r, o), U.hh = null, o)
            }
        },
        U = function() {
            var e = null;
            if (navigator.userAgent.toLowerCase().match(/chrome\/(\d+)/) && RegExp.$1 < 27) {
                var t, r = function(e, i, a, n) {
                    if (a * n > 65536)
                        if (a > n) {
                            var h = .5 * a | 0;
                            r(e, i, h, n), r(e + h, i, a - h, n)
                        } else {
                            var s = .5 * n | 0;
                            r(e, i, a, s), r(e, i + s, a, n - s)
                        }
                    else t.push([e, i, a, n])
                };
                e = function(e, i) {
                    return t = [], r(0, 0, e, i), t
                }
            }
            var i = ["#ff0000", "#00ff00", "#0000ff"],
                a = function(e, t, r, i, a, n) {
                    for (var h = t.length - 1; h >= 0; h--) {
                        var s = t[h];
                        if (256 != s[a] && (e.globalCompositeOperation = "source-over", e.fillStyle = "rgb(0,0,0)", e.globalAlpha = 1 - s[a] / 256, e.fillRect(0, 0, r, i)), 0 != s[a + 4]) {
                            var o = s[a + 4] / 255;
                            0 > o ? (e.globalCompositeOperation = "darker", e.fillStyle = "rgb(0,0,0)", o = -o) : (e.globalCompositeOperation = "lighter", e.fillStyle = n), e.globalAlpha = o, e.fillRect(0, 0, r, i)
                        }
                    }
                };
            return function(t, r) {
                if (!r.width) return r;
                var n = t.length;
                if (!n) return r;
                var h = r.width,
                    s = r.height,
                    o = U.hh || (U.hh = $.getFreeCanvas());
                o.width = h, o.height = s;
                var c = o.getContext("2d");
                if (1 == t.length) {
                    var f = t[0];
                    if (256 == f[0] && 256 == f[1] && 256 == f[2] && 0 == f[4] && 0 == f[5] && 0 == f[6]) return c.globalAlpha = f[3] / 256, c.drawImage(r, 0, 0), o
                }
                var l = U.Mc || (U.Mc = $.getFreeCanvas());
                l.width = h, l.height = s;
                var u = l.getContext("2d");
                u.drawImage(r, 0, 0), u.globalCompositeOperation = "source-atop", u.fillStyle = "rgba(255,255,255,1)", u.fillRect(0, 0, h, s);
                for (var g = n - 1; g >= 0; g--) {
                    var f = t[g];
                    u.globalCompositeOperation = "destination-in", u.globalAlpha = Math.min(Math.max(0, f[3] / 256), 1), u.fillRect(0, 0, h, s), f[7] && (u.globalCompositeOperation = "lighter", u.fillStyle = "rgba(255,255,255,1)", u.globalAlpha = f[7] / 255, u.fillRect(0, 0, h, s), d("[transformImageColor] addAlpha detected. not support"))
                }
                for (var b = !0, g = n - 1; g >= 0; g--) {
                    var f = t[g],
                        p = f[0],
                        v = f[4];
                    if (p != f[1] || p != f[2] || v != f[5] || v != f[6]) {
                        b = !1;
                        break
                    }
                }
                var y = e && e(h, s) || [
                    [0, 0, h, s]
                ];
                if (b) {
                    var j = "rgb(255,255,255)";
                    if (1 === y.length) c.drawImage(r, 0, 0), a(c, t, h, s, 0, j);
                    else
                        for (var m = U.regionCanvas || (U.regionCanvas = $.getFreeCanvas()), w = m.getContext("2d"), k = y.length - 1; k >= 0; k--) {
                            var C = y[k],
                                A = C[0],
                                M = C[1],
                                I = m.width = C[2],
                                E = m.height = C[3];
                            w.drawImage(r, A, M, I, E, 0, 0, I, E), a(w, t, I, E, 0, j), c.drawImage(m, A, M)
                        }
                } else
                    for (var S = U.Nh || (U.Nh = []), B = U.Mh || (U.Mh = []), F = y.length - 1; F >= 0; F--) {
                        for (var C = y[F], A = C[0], M = C[1], I = C[2], E = C[3], k = 0; 3 > k; k++) {
                            var D = B[k] || (B[k] = $.getFreeCanvas());
                            D.width = I, D.height = E;
                            var P = S[k] || (S[k] = D.getContext("2d"));
                            P.drawImage(r, A, M, I, E, 0, 0, I, E), P.globalCompositeOperation = "darker", P.fillStyle = i[k], P.fillRect(0, 0, I, E)
                        }
                        c.globalCompositeOperation = "lighter";
                        for (var k = 0; 3 > k; k++) a(S[k], t, I, E, k, i[k]), c.drawImage(B[k], A, M)
                    }
                return c.globalCompositeOperation = "destination-in", c.globalAlpha = 1, c.drawImage(l, 0, 0), o
            }
        }(),
        V = function(e, t) {
            if (e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), 0 == t) return e.split("\n");
            for (var r = [], i = "", a = 0, n = 0, h = "", s = e.length, o = 0; s > o; o++) {
                var c = e.charAt(o),
                    f = k(c) ? 1 : 2;
                "\n" == c ? (a + n > t ? (r.push(i), r.push(h)) : r.push(i + h), i = "", a = 0, h = "", n = 0) : (n + f > t && ("" == i ? r.push(h) : (r.push(i), r.push(h), i = "", a = 0), h = "", n = 0), h += c, n += f), (" " == c || o == s - 1) && (a + n > t ? (r.push(i), i = h, a = n) : (i += h, a += n), h = "", n = 0)
            }
            return r.push(i), r
        },
        W = function(e, t) {
            var r = t.Rf,
                i = t.gj;
            if (i) {
                var a;
                a = "/" == i.charAt(0) || "." == i.charAt(0) ? i : e.Cc + ":" + i;
                var n = D(e, a);
                if (n[0]) {
                    var h = n[0].hj[n[1]];
                    "undefiend" == typeof h ? d("Cannot found:" + i, e, t) : r = h + ""
                } else d("Invalid movie clip name specified:" + i, e, t)
            }
            return r
        },
        X = function(e, t, r, a, n) {
            var s = "",
                o = t.gi[r],
                f = [{
                    cmd: "SolidFill",
                    Kd: a,
                    aj: i.zb
                }],
                u = function() {
                    var e, t, r, a, n, o, f, u, g, b, p = function(e) {
                            for (var t = [], r = e.length, i = r - 1; i >= 0; i--) {
                                var a = e[i];
                                t.push(null != a.he ? {
                                    oj: a.pj,
                                    rj: a.sj,
                                    he: a.he,
                                    ke: a.ke,
                                    pj: a.oj,
                                    sj: a.rj
                                } : {
                                    oj: a.pj,
                                    rj: a.sj,
                                    pj: a.oj,
                                    sj: a.rj
                                })
                            }
                            return t
                        },
                        d = function(e) {
                            if (u.length) {
                                if (0 != n ? (t[n - 1] = t[n - 1] || [], t[n - 1].push(u)) : 0 != o && 0 != f && (b[o - 1].aj == i.zb ? (a[o - 1] = a[o - 1] || [], a[o - 1].push(u)) : b[f - 1].aj == i.zb && (a[f - 1] = a[f - 1] || [], a[f - 1].push(u))), 0 != o) {
                                    var h = o - 1;
                                    e && (h = 0), r[h] = r[h] || [], r[h].push(u)
                                }
                                if (0 != f) {
                                    var h = f - 1;
                                    e && (h = 0), r[h] = r[h] || [], r[h].push(p(u))
                                }
                                u = []
                            }
                        },
                        v = function() {
                            e.push({
                                Bg: g,
                                Qe: b,
                                zg: t,
                                Ne: r,
                                Lg: a
                            }), t = [], r = [], a = []
                        },
                        $ = function(e, t) {
                            s += "ib.beginPath();", m(e);
                            for (var r = t.length, i = 0; r > i; i++) {
                                var a = t[i];
                                s += "ib.moveTo(" + a[0].oj / 20 + "," + a[0].rj / 20 + ");";
                                for (var n = a.length, h = 0; n > h; h++) {
                                    var o = a[h];
                                    s += null != o.he ? "ib.quadraticCurveTo(" + o.he / 20 + "," + o.ke / 20 + "," + o.pj / 20 + "," + o.sj / 20 + ");" : "ib.lineTo(" + o.pj / 20 + "," + o.sj / 20 + ");"
                                }
                            }
                            s += "ib.stroke();"
                        },
                        y = function(e, t) {
                            if (!t) return e;
                            var r, i = {};
                            return r = l(t, e.oj, e.rj), i.oj = r[0], i.rj = r[1], r = l(t, e.pj, e.sj), i.pj = r[0], i.sj = r[1], null != e.he && (r = l(t, e.he, e.ke), i.he = r[0], i.ke = r[1]), i
                        },
                        j = function(e) {
                            do {
                                for (var t = [], r = !1, i = e.length, a = 0; i > a; a++) {
                                    for (var n = t.length, h = 0; n > h; h++) {
                                        var s = e[a].length - 1,
                                            o = t[h].length - 1;
                                        if (e[a][0].oj == t[h][o].pj && e[a][0].rj == t[h][o].sj) {
                                            t[h] = t[h].concat(e[a]), r = !0;
                                            break
                                        }
                                        if (t[h][0].oj == e[a][s].pj && t[h][0].rj == e[a][s].sj) {
                                            t[h] = e[a].concat(t[h]), r = !0;
                                            break
                                        }
                                    }
                                    h == t.length && t.push(e[a])
                                }
                                e = t
                            } while (r);
                            return e
                        },
                        m = function(e) {
                            if (null != e.width) {
                                var t = e.width / 20;
                                s += "ib.lineWidth=" + t + "*jb<1?1/jb:" + t + ";"
                            }
                            null != e.Kd && (s += "ib.strokeStyle=kb(lb," + e.Kd + ");")
                        },
                        w = function(e) {
                            var t = null;
                            switch (e.aj) {
                                case i.zb:
                                    s += "ib.fillStyle=kb(lb," + e.Kd + ");";
                                    break;
                                case i.yb:
                                case i.sb:
                                case i.wb:
                                case i.vb:
                                    var r = e.Mg;
                                    t = [r[0] / 20, r[1] / 20, r[2] / 20, r[3] / 20, r[4], r[5]], s += "var img=mb[" + e._c + "].img;", s += "if(img.width==0&&img.height==0){return false;}", s += "if(lb.length) {img=nb(lb,img);}", s += "ib.fillStyle=ib.createPattern(img,'repeat');";
                                    break;
                                case i.ub:
                                case i.xb:
                                    t = e.Mg, s += "var ob;", s += e.aj == i.ub ? "ob=ib.createLinearGradient(-16384 / 20, 0, 16384 / 20, 0);" : "ob=ib.createRadialGradient(0, 0, 0, 0, 0, 16384 / 20);";
                                    for (var a = e.zf.Bh.length, n = 0; a > n; n++) {
                                        var h = e.zf.Bh[n];
                                        s += "ob.addColorStop(" + h.Ah / 255 + ",kb(lb, " + h.Kd + "));"
                                    }
                                    s += "ib.fillStyle=ob;";
                                    break;
                                default:
                                    c("renderShape.setFillStyle: unknown draw type called: " + e.aj)
                            }
                            return t
                        },
                        k = function(e, t) {
                            if (t.aj != i.sb) return !1;
                            var r = t.Mg;
                            if (!r || r[0] != r[3] || 0 != r[1] || 0 != r[2]) return !1;
                            if (1 != e.length) return !1;
                            var a = e[0];
                            if (4 != a.length) return !1;
                            for (var n = [], h = 0; 4 > h; h++) {
                                var o = a[h];
                                if (o.he || o.ke) return !1;
                                n[n.length] = {
                                    x: o.pj - o.oj,
                                    y: o.sj - o.rj
                                }
                            }
                            if (0 == n[0].x && 0 == n[1].y && 0 == n[2].x && 0 == n[3].y && n[0].y == -n[2].y && n[1].x == -n[3].x || 0 == n[0].y && 0 == n[1].x && 0 == n[2].y && 0 == n[3].x && n[0].x == -n[2].x && n[1].y == -n[3].y) {
                                var c = [r[0] / 20, r[1], r[2], r[3] / 20, r[4], r[5]],
                                    f = t._c;
                                return s += "var img=mb[" + f + "].img;", s += "if(img.width==0&&img.height==0){return false;}", s += "if(lb.length) {img=nb(lb,img);}", s += "ib.transform(" + c.join() + ");", s += "ib.drawImage(img, 0, 0);", s += "ib.transform(" + M(c).join() + ");", !0
                            }
                            return !1
                        };
                    return function(i, l, p, m) {
                        e = [], b = i, g = l, t = [], r = [], a = [], n = 0, o = 0, f = 0, u = [];
                        for (var C = 0, A = 0, I = p.length, E = 0; I > E; E++) {
                            var S = p[E];
                            switch (S.aj) {
                                case h.tb:
                                    var B = C + S.he,
                                        F = A + S.ke,
                                        D = B + S.Wc,
                                        P = F + S.Xc;
                                    u.push({
                                        oj: C,
                                        rj: A,
                                        he: B,
                                        ke: F,
                                        pj: D,
                                        sj: P
                                    }), C = D, A = P;
                                    break;
                                case h.Ab:
                                    var D = C + S.x,
                                        P = A + S.y;
                                    u.push({
                                        oj: C,
                                        rj: A,
                                        pj: D,
                                        sj: P
                                    }), C = D, A = P;
                                    break;
                                case h.Bb:
                                    d(m), (S.Bg || S.Qe) && (v(), g = S.Bg || g, b = S.Qe || b), null != S.Ae && (C = S.Ae), null != S.Be && (A = S.Be), null != S.Ag && (n = S.Ag), null != S.Oe && (o = S.Oe), null != S.Pe && (f = S.Pe);
                                    break;
                                default:
                                    c("drawObject.renderShape: Unknown type detected:", S.aj)
                            }
                        }
                        d(m), v(), s += "ib.lineCap='round';";
                        for (var x = e.length, E = 0; x > E; E++) {
                            var L = e[E];
                            if (g = L.Bg, b = L.Qe, t = L.zg, r = L.Ne, a = L.Lg, !m)
                                for (var _ = a.length, G = 0; _ > G; G++) {
                                    var Q = a[G];
                                    if (Q) {
                                        var N = {
                                            width: 1,
                                            Kd: b[G].Kd
                                        };
                                        $(N, Q)
                                    }
                                }
                            for (var R = r.length, G = 0; R > G; G++) {
                                var O, U = r[G];
                                if (U) {
                                    if (U = j(U), k(U, b[G])) continue;
                                    if (!m) {
                                        var T = w(b[G]);
                                        T && (s += "ib.transform(" + T.join() + ");"), O = T && M(T) || null
                                    }(!m || 0 == E && 0 == G) && (s += "ib.beginPath();");
                                    for (var J = U.length, H = 0; J > H; H++) {
                                        var K = U[H];
                                        if (K) {
                                            var q = y(K[0], O);
                                            s += "ib.moveTo(" + q.oj / 20 + "," + q.rj / 20 + ");";
                                            for (var V = (K.length, 0); V < K.length; V++) {
                                                var W = y(K[V], O);
                                                s += null != W.he ? "ib.quadraticCurveTo(" + W.he / 20 + "," + W.ke / 20 + "," + W.pj / 20 + "," + W.sj / 20 + ");" : "ib.lineTo(" + W.pj / 20 + "," + W.sj / 20 + ");"
                                            }
                                        }
                                    }
                                    m ? E == e.length - 1 && G == r.length - 1 && (s += "ib.clip();", s += "if(ib.globalCompositeOperation!='source-over'){", s += "ib.save();ib.setTransform(1,0,0,1,0,0);ib.globalCompositeOperation='source-over';", s += "ib.globalAlpha=1;ib.clearRect(0,0,ib.canvas.width+1,ib.canvas.height);", s += "ib.drawImage(copiedCanvas,0,0);ib.restore();}") : (s += "ib.fill();", O && (s += "ib.transform(" + O.join() + ");"))
                                }
                            }
                            if (!m)
                                for (var X = t.length, G = 0; X > G; G++) {
                                    var Q = t[G];
                                    Q && $(g[G], Q)
                                }
                        }
                    }
                }();
            return u(f, null, o, n), s
        },
        Y = function(e, t, r, i, a, n, h, s, o) {
            for (var c, f, l, u, g = [], b = 0, p = e.length; p > b;) {
                for (c = 0, f = [], l = [], u = 0; p > b; b++) {
                    var d = e.charCodeAt(b),
                        v = -1;
                    if (1 == o.multiline && 10 == d) {
                        if (c + u > t) {
                            b -= l.length - 1;
                            break
                        }
                        b++, f = f.concat(l), c += u;
                        break
                    }
                    for (var $ in h.Jd)
                        if (h.Jd[$] == d) {
                            v = $;
                            break
                        } if (-1 != v) {
                        var y = h.We[v];
                        if (u + y > t) {
                            if (f.length) b -= l.length;
                            else {
                                if (y > t && 0 == l.length) {
                                    f.push(v), c = y, b++;
                                    break
                                }
                                f = f.concat(l), c += u
                            }
                            break
                        }
                        if (l.push(v), u += y, 32 == d || b == p - 1) {
                            if (1 == o.multiline && 1 == o.mj && c + u > t) {
                                b -= l.length - 1;
                                break
                            }
                            f = f.concat(l), c += u, u = 0, l = []
                        }
                    }
                }
                var j = 0;
                switch (o.align) {
                    case 1:
                        j = (i - r) / s * 20 - c;
                        break;
                    case 2:
                    case 3:
                        j = ((i - r) / s * 20 - c) / 2
                }
                g.push({
                    indices: f,
                    align: j / 20
                })
            }
            return g
        },
        Z = function(e) {
            var t = e.width,
                r = e.height;
            if (!(65536 >= t * r || t >= 4096 || r >= 4096)) {
                var i = document.createElement("div");
                i.style.width = t + "px", i.style.height = r + "px", i.style.overflow = "hidden";
                var a = e.parentNode;
                a.insertBefore(i, e), a.removeChild(e), i.appendChild(e), t > r ? e.width = 4096 : e.height = 4096
            }
        },
        $ = function(e) {
            this._cacheMaxTotalSize = e || 15728640, this._cacheSize = 0, this._coloredImageCache = {}, this._imageInfoCache = {}, this._usedCanvases = []
        };
    $._freeCanvases = [], $.getFreeCanvas = function() {
        return $._freeCanvases.pop() || document.createElement("canvas")
    }, $.destroyCanvas = function(e) {
        e.width = e.height = 16, $._freeCanvases.push(e)
    }, $.prototype.getImageInfo = function(e) {
        return this._imageInfoCache[e]
    }, $.prototype.cacheImageInfo = function(e, t) {
        if (t) {
            var r = t.img,
                i = r.width * r.height << 2;
            this._cacheSize + i > this._cacheMaxTotalSize && this.clearCache(), this._imageInfoCache[e] = t, this._cacheSize += i, this._usedCanvases.push(r)
        }
    }, $.prototype.getColoredImage = function(e, t) {
        var r = this._coloredImageCache[e];
        if (r)
            for (var i = r.length, a = 0; i > a; a++) {
                var n = r[a];
                if (n[0] == t) return n[1]
            }
        return null
    }, $.prototype.cacheColoredImage = function(e, t, r) {
        var i = r.width * r.height << 2,
            a = this._coloredImageCache[e] || (this._coloredImageCache[e] = []);
        this._cacheSize + i > this._cacheMaxTotalSize && this.clearCache(), a.push([t, r]), this._cacheSize += i, this._usedCanvases.push(r)
    }, $.prototype.clearCache = function() {
        this._imageInfoCache = {}, this._coloredImageCache = {}, this._cacheSize = 0;
        for (var e = this._usedCanvases, t = $._freeCanvases, r = e.length, i = 0; r > i; i++) {
            var a = e[i];
            a.width = a.height = 16, t.push(a)
        }
        this._usedCanvases = []
    };
    var _ = function(e) {
        this.Ie = e, this.Qd = e.Qd, this.qd = {}, this.od = {}, this.nd = {}, this.Rh = 1, this.cacheController = new $(e.ch.cacheMaxTotalSize), this.Zi = e.ch.cacheColoredImage ? T(this.cacheController) : U
    };
    _.sd = function(e) {
        var t = Math.sqrt(e[0] * e[0] + e[1] * e[1]),
            r = Math.sqrt(e[2] * e[2] + e[3] * e[3]);
        return Math.sqrt(t * r)
    }, _.prototype._h = function(e) {
        if (this._i = e[1] - e[0], this.$i = e[3] - e[2], !this.be) {
            var t;
            "canvas" == this.Qd.tagName.toLowerCase() ? t = this.Ie.canvas = this.Qd : (t = this.Ie.canvas = document.createElement("canvas"), this.Qd.appendChild(t));
            var r, i, a, n = this._i / 20,
                h = this.$i / 20,
                s = this.Ie.ch,
                o = null;
            if (s.width || s.height) {
                if (s.fixRatio) {
                    r = s.width && s.width / n || s.height && s.height / h || 1;
                    var c = n * r | 0,
                        f = h * r | 0;
                    i = c / n, a = f / h, n = c, h = f
                } else {
                    var i = s.width && s.width / n || 1,
                        a = s.height && s.height / h || 1;
                    n = s.width || n, h = s.height || h
                }
                o = [i, 0, 0, a, 0, 0], r = i > a ? i : a
            } else r = 1;
            if (this.Ah = r, s.frameRect) {
                var l = s.frameRect;
                n = l[2] * (i || r), h = l[3] * (a || r), o || (o = [1, 0, 0, 1, 0, 0]), o[4] = -l[0] * (i || r), o[5] = -l[1] * (a || r)
            }
            t.width != (0 | n) && (s.debug && b("set canvas width to " + (0 | n)), t.width = 0 | n), t.height != (0 | h) && (s.debug && b("set canvas height to " + (0 | h)), t.height = 0 | h), this.frameWidth = t.width, this.frameHeight = t.height, s._enableWorkaroundForUnicolor && Z(t), this.width = o && n / o[0] || n, this.height = o && h / o[3] || h;
            var u = t.getContext("2d");
            this.be = u, o && (s.origin && (s.frameRect ? d("option.origin is ignored because option.frameRect is specified.") : (o[4] = s.origin[0], o[5] = s.origin[1])), u.transform.apply(u, o), this.Ie.Sh = o, this.Rh = _.sd(o))
        }
    }, _.prototype.Hh = function(e, t, r, i) {
        var a = this.Ie,
            n = a.ch,
            h = this.be;
        if (h) {
            if (!e) {
                var s = h.canvas;
                null != a.$c ? (h.fillStyle = P(a.$c), h.fillRect(0, 0, this.width + 1, this.height)) : h.clearRect(0, 0, this.width + 1, this.height), h.save(), e = this.Ie.Qh, t = []
            }
            if (e.yh.wc) {
                var o = h.globalCompositeOperation;
                for (var c in n.operation) c == e.yh.jc && (h.globalCompositeOperation = n.operation[c]);
                i = n.shapeDetail && n.shapeDetail[e.yh.jc] || i;
                var f = e.Pg,
                    l = e.yh.dc,
                    u = [],
                    g = [];
                for (var p in e.we) 65536 > p && (g[g.length] = p);
                g.sort(function(e, t) {
                    return e - t
                });
                for (var d = this.cacheController, v = g.length, y = e.ue, j = 0; v > j; j++) {
                    var m = e.we[g[j]],
                        w = m.id,
                        k = (f.Df[w], f.hf[l][w]),
                        C = !1,
                        A = r || this.Rh,
                        I = y[m.wd];
                    k.Ed && (h.save(), u.push(k.Ed), C = !0);
                    var E = null,
                        B = e.zd[w],
                        F = k.ie;
                    if (F && 256 == F[0] && 256 == F[1] && 256 == F[2] && 256 == F[3] && 0 == F[4] && 0 == F[5] && 0 == F[6] && 0 == F[7] && (F = null), F && t.push(F), B) {
                        var D = B.yh;
                        0 != D.zc && 0 != D.Bc && (E = B.ag ? B.sf() : k.Mg, E && (C || h.save(), h.transform.apply(h, E), A *= _.sd(E)), this.Hh(B, t, A, i))
                    } else if (34 == I.aj) E = k.Mg, E && (C || h.save(), h.transform.apply(h, E), A *= _.sd(E));
                    else {
                        E = k.Mg, E && (C || h.save(), h.transform.apply(h, E), A *= _.sd(E));
                        var x = "";
                        37 == I.aj && (x = W(e, I));
                        var L = I.id + y.name;
                        if (C) {
                            var G = h.globalCompositeOperation;
                            if ("source-over" != G) {
                                var s = h.canvas,
                                    Q = $.getFreeCanvas();
                                Q.width = this.frameWidth, Q.height = this.frameHeight, Q.getContext("2d").drawImage(s, 0, 0), h.globalCompositeOperation = G
                            }(this.nd[L] || (this.nd[L] = bb(a, I, !0, y)))(a, h, I, k.Mg, t, x, S, this.Zi, V, A, Y, X, Q, y), Q && ($.destroyCanvas(Q), Q = null), h.save()
                        } else {
                            var N = n.shapeDetail,
                                R = this.qd[L] || N && (N[L] && N[L].method || i && i.method || N.all && N.all.method);
                            this.qd[L] || (this.qd[L] = 37 != I.aj && R || "func");
                            var O = !1;
                            if ("cache" == R) {
                                if (t && t.length) {
                                    for (var U = ",", T = t.length, J = 0; T > J; J++) U += t[J].join();
                                    L += U
                                }
                                var H = d.getImageInfo(L);
                                if (!H) {
                                    var K = N && +(N[L] && N[L].cacheScale || i && i.cacheScale || N.all && N.all.cacheScale || this.Rh) || A,
                                        q = N && +(N[L] && N[L].adjustLineScale || i && i.adjustLineScale || N.all && N.all.adjustLineScale),
                                        Z = A;
                                    q && (Z = q * this.Rh);
                                    var z = bb(a, I, !1, y),
                                        et = (I.dd, (I.dd[1] - I.dd[0]) / 20),
                                        tt = (I.dd[3] - I.dd[2]) / 20;
                                    if (et * (K || 1) < this._i / 20 * this.Rh * 2 && tt * (K || 1) < this.$i / 20 * this.Rh * 2) {
                                        var s = $.getFreeCanvas();
                                        s.width = Math.ceil(et * (K || 1)) || 1, s.height = Math.ceil(tt * (K || 1)) || 1, n.debug && !n.suppressLog.drawCache && b("create cache for [" + I.id + "] width: " + s.width + " height:" + s.height);
                                        var rt = s.getContext("2d");
                                        rt.transform(s.width / et, 0, 0, s.height / tt, 0, 0), rt.transform(1, 0, 0, 1, -I.dd[0] / 20, -I.dd[2] / 20), z(a, rt, I, k.Mg, t, x, S, this.Zi, V, Z, Y, X, null, y) && (H = {
                                            img: s,
                                            x: I.dd[0] / 20,
                                            y: I.dd[2] / 20,
                                            width: et,
                                            height: tt,
                                            scale: K
                                        }, d.cacheImageInfo(L, H))
                                    } else this.qd[L] = "func", n.shapeDetail = n.shapeDetail || {}, n.shapeDetail[L] = "func", n.debug && b("cache avoided: " + m.wd)
                                }
                                H && (H.width && H.height && (H.scale && (h.drawImage(H.img, H.x, H.y, H.width, H.height) || !0) || h.drawImage(H.img, H.x, H.y)), O = !0)
                            }
                            if (!O) {
                                var L = I.id + (C ? "c" : "") + y.name;
                                (this.od[L] || (this.od[L] = bb(a, I, C, y)))(a, h, I, k.Mg, t, x, S, this.Zi, V, A, Y, X, null, y)
                            }
                        }
                    }
                    if (E && C ? h.transform.apply(h, M(E)) : h.restore(), F && t.pop(), u.length) {
                        var it = u[u.length - 1],
                            at = g[j + 1];
                        (null == at || at > it) && (u.pop(), h.restore(), h.restore())
                    }
                }
                h.globalCompositeOperation = o, e == this.Ie.Qh && h.restore()
            }
        }
    };
    var ab = function(e) {
        this.Ie = e, e.Sh = [1, 0, 0, 1, 0, 0], this.Qd = e.Qd, this.qd = {}, this.od = {}, this.nd = {}, this.Rh = 1, this.Fd, this.tagListCursor = 0, this.pg = -1, this.qg = {}, this.ve = [], e.ch.debug && b("dirty rect start"), this.cacheController = new $(e.ch.cacheMaxTotalSize), this.Zi = e.ch.cacheColoredImage ? T(this.cacheController) : U
    };
    ab.prototype._h = function(e) {
        if (this._i = e[1] - e[0], this.$i = e[3] - e[2], !this.be) {
            var t;
            "canvas" == this.Qd.tagName.toLowerCase() ? t = this.Ie.canvas = this.Qd : (t = this.Ie.canvas = document.createElement("canvas"), this.Qd.appendChild(t));
            var r, i, a, n = this._i / 20,
                h = this.$i / 20,
                s = this.Ie.ch,
                o = null;
            if (s.width || s.height) {
                if (s.fixRatio) {
                    r = s.width && s.width / n || s.height && s.height / h || 1;
                    var c = n * r | 0,
                        f = h * r | 0;
                    i = c / n, a = f / h, n = c, h = f
                } else i = s.width && s.width / n || 1, a = s.height && s.height / h || 1, n = s.width || n, h = s.height || h;
                o = [i, 0, 0, a, 0, 0], r = i > a ? i : a
            } else r = 1;
            if (this.Ah = r, s.frameRect) {
                var l = s.frameRect;
                n = l[2] * (i || r), h = l[3] * (a || r), o || (o = [1, 0, 0, 1, 0, 0]), o[4] = -l[0] * (i || r), o[5] = -l[1] * (a || r)
            }
            t.width != (0 | n) && (s.debug && b("set canvas width to " + (0 | n)), t.width = 0 | n), t.height != (0 | h) && (s.debug && b("set canvas height to " + (0 | h)), t.height = 0 | h), this.frameWidth = t.width, this.frameHeight = t.height, s._enableWorkaroundForUnicolor && Z(t), this.width = o && n / o[0] || n, this.height = o && h / o[3] || h;
            var u = t.getContext("2d");
            u.getImageData(0, 0, 1, 1), this.be = u, o && (s.origin && (s.frameRect ? d("option.origin is ignored because option.frameRect is specified.") : (o[4] = s.origin[0], o[5] = s.origin[1])), this.Ie.Sh = o, this.Rh = _.sd(o)), null != this.Ie.$c && (t.style.backgroundColor = P(this.Ie.$c))
        }
    }, ab.prototype.Aj = function(e, t, r, i, a, n) {
        var h = [];
        if (e || (e = this.Ie.Qh, t = this.Ie.Sh, r = [], this.Fd = 1, i = ""), e.yh.wc) {
            if (!e.bg(this.pg)) return e.rd;
            var s = [],
                o = e.Pg,
                c = e.yh.dc,
                f = this.Ie,
                l = e.ue,
                u = f.ch;
            for (var g in u.operation) g == e.yh.jc && (a = u.operation[g]);
            n = u.shapeDetail && u.shapeDetail[e.yh.jc] || n;
            var b = [];
            for (var p in e.we) 65536 > p && (b[b.length] = p);
            b.sort(function(e, t) {
                return e - t
            });
            for (var d = b.length, v = 0; d > v; v++) {
                var $, y, j = e.we[b[v]],
                    m = j.id,
                    w = o.hf[c][m],
                    k = l[j.wd],
                    C = w.ie;
                y = !C || 256 == C[0] && 256 == C[1] && 256 == C[2] && 256 == C[3] && 0 == C[4] && 0 == C[5] && 0 == C[6] && 0 == C[7] ? r : r.concat([C]);
                var A = e.zd[m],
                    M = i + ("0000" + m.toString(16)).slice(-4);
                if (w.Ed && (s.push([w.Ed, this.Fd]), h.push(this.Fd++)), A) $ = A.ag ? A.sf() : w.Mg, Array.prototype.push.apply(h, this.Aj(A, $ && N(t, $) || t, y, M, a, n));
                else {
                    if ($ = w.Mg, $[0] * $[3] == $[1] * $[2]) continue;
                    $ = $ && N(t, $) || t;
                    var I = O($, k.dd),
                        E = ab.te(I),
                        S = "";
                    37 == k.aj && (S = W(e, k)), h.push({
                        rh: w,
                        transform: $,
                        je: y,
                        vj: M,
                        operation: a || "source-over",
                        detail: n,
                        rect: E,
                        Pi: S,
                        ue: l
                    })
                }
                if (s.length) {
                    var B = s[s.length - 1],
                        F = B[0],
                        D = b[v + 1];
                    (null == D || D > F) && (h.push(-B[1]), s.pop())
                }
            }
            return e.rd = h, h
        }
    }, ab.sd = function(e) {
        var t = Math.sqrt(e[0] * e[0] + e[1] * e[1]),
            r = Math.sqrt(e[2] * e[2] + e[3] * e[3]);
        return Math.sqrt(t * r)
    }, ab.Th = function(e) {
        for (var t = [], r = 0; 4 > r; r++) t[r] = e[r];
        for (var r = 4; 6 > r; r++) t[r] = Math.round(e[r]);
        return t
    }, ab.te = function(e) {
        var t = [];
        return t[0] = Math.floor(e[0] / 20) - 1, t[2] = Math.floor(e[2] / 20) - 1, t[1] = Math.ceil((e[1] - e[0]) / 20) + t[0] + 2, t[3] = Math.ceil((e[3] - e[2]) / 20) + t[2] + 2, t
    }, ab.prototype.Jc = function(e) {
        var t = (this.be.canvas, this.frameWidth - 1),
            r = this.frameHeight - 1;
        if (!(e[0] > t || e[1] < 0 || e[2] > r || e[3] < 0)) {
            for (var i = e[0] > 0 ? e[0] : 0, a = e[1] < t ? e[1] : t, n = e[2] > 0 ? e[2] : 0, h = e[3] < r ? e[3] : r, s = this.ve, o = 0; o < s.length; o++) {
                var c = s[o];
                a < c[0] || c[1] < i || h < c[2] || c[3] < n || (i = c[0] > i ? i : c[0], a = c[1] < a ? a : c[1], n = c[2] > n ? n : c[2], h = c[3] < h ? h : c[3], s.splice(o, 1), o = -1)
            }
            s[s.length] = [i, a, n, h]
        }
    }, ab.Nd = function(e, t, r, i) {
        return Q(e.transform, t.transform, r) && (i || R(e.je, t.je)) && e.Pi === t.Pi ? !0 : !1
    }, ab.prototype.zj = function(e, t, r, i, a, n) {
        var h = this.Ie,
            s = e.id + n.name,
            o = this.od[s] || (this.od[s] = bb(h, e, !1, n)),
            c = (e.dd, (e.dd[1] - e.dd[0]) / 20),
            f = (e.dd[3] - e.dd[2]) / 20,
            l = this.Ie.ch,
            u = l.cacheMaxShapeSize || 2;
        if (c * (i || 1) > this._i / 20 * this.Rh * u || f * (i || 1) > this.$i / 20 * this.Rh * u) return null;
        var g = $.getFreeCanvas();
        g.width = Math.ceil(c * (i || 1)) || 1, g.height = Math.ceil(f * (i || 1)) || 1, l.debug && !l.suppressLog.drawCache && b("create cache for [" + e.id + "] width: " + g.width + " height:" + g.height);
        var p = g.getContext("2d");
        return p.transform(g.width / c, 0, 0, g.height / f, 0, 0), p.transform(1, 0, 0, 1, -e.dd[0] / 20, -e.dd[2] / 20), a && (r = a * this.Rh), o(h, p, e, null, t, "", S, this.Zi, V, r, Y, X, null, n) ? ((0 == g.width || 0 == g.height) && (g.width = 1, g.height = 1), {
            img: g,
            x: e.dd[0] / 20,
            y: e.dd[2] / 20,
            width: c,
            height: f,
            scale: i
        }) : null
    }, ab.prototype.Wd = function(e) {
        this.ve = [];
        for (var t = e.length, r = 0; t > r; r++) {
            var i = e[r];
            if ("number" != typeof i) {
                var a = i.vj,
                    n = this.qg[a];
                n ? (ab.Nd(i, n) || (this.Jc(i.rect), this.Jc(n.rect)), delete this.qg[a]) : this.Jc(i.rect)
            }
        }
        for (var h in this.qg) this.Jc(this.qg[h].rect), delete this.qg[h]
    }, ab.prototype.Ej = function() {
        var e = this.Ie,
            t = e.ch,
            r = t.shapeDetail;
        if (r) {
            var i = this.cacheController;
            if (r.all && r.all.preload) {
                t.debug && b("preload: all");
                for (var a = e.le.Ii, n = a.length, h = this.tagListCursor; n > h; h++) {
                    var s = a[h];
                    switch (s.aj) {
                        case g.Nb:
                        case g.Ob:
                        case g.Pb:
                        case g.Rb:
                        case g.Sb:
                        case g.Jb:
                            var o = s.id,
                                c = s,
                                f = this.qd[o] || r[o] && r[o].method || r.all && r.all.method;
                            if (f = 37 != c.aj && f || "func", this.qd[o] || (this.qd[o] = f) && t.debug && !t.suppressLog.drawCache && b("CacheMethod[" + o + "]=" + f), "cache" == f) {
                                {
                                    var l = r[o] && r[o].cacheScale || r.all && r.all.cacheScale || this.Rh;
                                    r[o] && r[o].adjustLineScale || r.all && r.all.adjustLineScale
                                }
                                i.getImageInfo[o] || i.cacheImageInfo(o, this.zj(c, [], l, l, null, this.Ie.ue))
                            } else this.od[o] || (this.od[o] = bb(e, c, !1, this.Ie.ue))
                    }
                }
                this.tagListCursor = n
            } else
                for (var o in r) {
                    var c = e.ue[o];
                    if (c && r[o].preload) {
                        if (this.qd[o]) continue;
                        t.debug && b("preload: " + o);
                        var f = this.qd[o] || r[o].method || r.all && r.all.method;
                        if (f = 37 != c.aj && f || "func", this.qd[o] || (this.qd[o] = f) && t.debug && !t.suppressLog.drawCache && b("CacheMethod[" + o + "]=" + f), "cache" == f) {
                            {
                                var l = r[o].cacheScale || r.all && r.all.cacheScale || this.Rh;
                                r[o] && r[o].adjustLineScale || r.all && r.all.adjustLineScale
                            }
                            i.getImageInfo[o] || i.cacheImageInfo(o, this.zj(c, [], l, l, null, this.Ie.ue))
                        } else this.od[o] || (this.od[o] = bb(e, c, !1, this.Ie.ue))
                    }
                }
        }
    }, ab.prototype.Hh = function() {
        var e = this.be;
        if (e) {
            var t = this.Aj() || [];
            this.Wd(t);
            var r = this.Ie,
                i = r.ch,
                a = this.ve,
                n = a.length,
                h = e.canvas;
            e.fillStyle = P(this.Ie.$c);
            for (var s = 0; n > s; s++) {
                var o = a[s];
                i.transparent ? (0 == o[0] && o[1] + 1 == e.canvas.width && o[1]++, e.clearRect(o[0], o[2], o[1] - o[0] + 1, o[3] - o[2] + 1)) : (0 == o[0] && o[1] + 1 == e.canvas.width && o[1]++, e.fillRect(o[0], o[2], o[1] - o[0] + 1, o[3] - o[2] + 1))
            }
            e.fillStyle = "rgba(0,0,0,1)", e.save(), e.beginPath();
            for (var s = 0; n > s; s++) {
                var o = a[s];
                e.rect(o[0], o[2], o[1] - o[0] + 1, o[3] - o[2] + 1)
            }
            e.clip();
            for (var c = this.cacheController, f = t.length, l = 0, u = 0; f > u; u++) {
                var g = t[u];
                if ("number" != typeof g) {
                    for (var p = g.rh, d = g.transform, v = g.je, y = g.rect, j = g.Pi, m = ab.sd(d), w = g.ue, k = w[p.wd], C = p.Ed, A = !1, s = 0; n > s; s++) {
                        var o = a[s];
                        if (o[1] >= y[0] && y[1] >= o[0] && o[3] >= y[2] && y[3] >= o[2]) {
                            A = !0;
                            break
                        }
                    }
                    if (A || C) {
                        e.globalCompositeOperation = g.operation;
                        var I = g.detail;
                        if (C) {
                            var E = e.globalCompositeOperation;
                            if ("source-over" != E) {
                                e.restore(), e.restore();
                                var B = $.getFreeCanvas();
                                if (B.width = this.frameWidth, B.height = this.frameHeight, B.getContext("2d").drawImage(h, 0, 0), e.save(), l > 0) e.clip();
                                else {
                                    e.save();
                                    for (var s = 0; n > s; s++) {
                                        var o = a[s];
                                        e.rect(o[0], o[2], o[1] - o[0] + 1, o[3] - o[2] + 1)
                                    }
                                    e.clip()
                                }
                                e.save(), e.globalCompositeOperation = E
                            }
                            e.transform.apply(e, d);
                            var F = k.id + w.name;
                            (this.nd[F] || (this.nd[F] = bb(r, k, !0, w)))(r, e, k, d, v, j, S, this.Zi, V, m, Y, X, B, w), B && ($.destroyCanvas(B), B = null), e.save(), l++, e.transform.apply(e, M(d))
                        } else {
                            var F = k.id + w.name,
                                D = i.shapeDetail,
                                x = this.qd[F] || D && (D[F] && D[F].method || I && I.method || D.all && D.all.method);
                            x = 37 != k.aj && x || "func", this.qd[F] || (this.qd[F] = x) && i.debug && !i.suppressLog.drawCache && b("CacheMethod[" + F + "]=" + x);
                            var L = !1;
                            if ("cache" == x) {
                                var _ = F;
                                if (v && v.length) {
                                    for (var G = ",", Q = v.length, N = 0; Q > N; N++) G += v[N].join();
                                    _ += G
                                }
                                var R = c.getImageInfo(_);
                                if (!R) {
                                    var O = D && +(D[F] && D[F].cacheScale || I && I.cacheScale || D.all && D.all.cacheScale || this.Rh) || m,
                                        U = D[F] && D[F].adjustLineScale || I && I.adjustLineScale || D.all && D.all.adjustLineScale;
                                    R = this.zj(k, v, m, O, U, w), R && c.cacheImageInfo(_, R), R || (this.qd[F] = "func", i.shapeDetail = i.shapeDetail || {}, i.shapeDetail[F] = "func", i.debug && b("cache avoided: " + p.wd))
                                }
                                if (R && R.width && R.height) {
                                    if (L = !0, e.save(), 0 == d[1] && 0 == d[2]) {
                                        var T = d[0],
                                            J = d[3],
                                            H = T > 0 ? 1 : -1,
                                            K = J > 0 ? 1 : -1,
                                            q = Math.round(H * R.width * T),
                                            W = Math.round(H * (R.x * T + d[4])),
                                            Z = Math.round(K * R.height * J),
                                            z = Math.round(K * (R.y * J + d[5]));
                                        e.transform(H, 0, 0, K, 0, 0), e.drawImage(R.img, W, z, q, Z)
                                    } else e.transform.apply(e, d), e.drawImage(R.img, R.x, R.y, R.width, R.height);
                                    e.restore()
                                }
                            }
                            if (!L) {
                                var F = k.id + w.name;
                                e.save(), e.transform.apply(e, d), (this.od[F] || (this.od[F] = bb(r, k, !1, w)))(r, e, k, p.Mg, v, j, S, this.Zi, V, m, Y, X, null, w) || (t[u] = 0 / 0), e.restore()
                            }
                        }
                    }
                } else if (g > 0) e.save();
                else {
                    for (; l > 0; l--) e.restore();
                    e.restore()
                }
            }
            e.restore(), e.globalCompositeOperation = "source-over", this.pg = this.Ie.df, this.qg = {};
            for (var u = 0; u < t.length; u++) {
                var g = t[u];
                if ("number" != typeof g) {
                    var et = g.vj;
                    this.qg[et] = g
                }
            }
        }
    };
    var bb = function() {
            var e = "",
                t = !1,
                r = function() {
                    var t, r, a, n, s, o, f, u, g, b, p = function(e) {
                            for (var t = [], r = e.length, i = r - 1; i >= 0; i--) {
                                var a = e[i];
                                t.push(null != a.he ? {
                                    oj: a.pj,
                                    rj: a.sj,
                                    he: a.he,
                                    ke: a.ke,
                                    pj: a.oj,
                                    sj: a.rj
                                } : {
                                    oj: a.pj,
                                    rj: a.sj,
                                    pj: a.oj,
                                    sj: a.rj
                                })
                            }
                            return t
                        },
                        d = function(e) {
                            if (u.length) {
                                if (0 != s ? (r[s - 1] = r[s - 1] || [], r[s - 1].push(u)) : 0 != o && 0 != f && (b[o - 1].aj == i.zb ? (n[o - 1] = n[o - 1] || [], n[o - 1].push(u)) : b[f - 1].aj == i.zb && (n[f - 1] = n[f - 1] || [], n[f - 1].push(u))), 0 != o) {
                                    var t = o - 1;
                                    e && (t = 0), a[t] = a[t] || [], a[t].push(u)
                                }
                                if (0 != f) {
                                    var t = f - 1;
                                    e && (t = 0), a[t] = a[t] || [], a[t].push(p(u))
                                }
                                u = []
                            }
                        },
                        v = function() {
                            t.push({
                                Bg: g,
                                Qe: b,
                                zg: r,
                                Ne: a,
                                Lg: n
                            }), r = [], a = [], n = []
                        },
                        $ = function(t, r) {
                            e += "ib.beginPath();", m(t);
                            for (var i = r.length, a = 0; i > a; a++) {
                                var n = r[a];
                                e += "ib.moveTo(" + n[0].oj / 20 + "," + n[0].rj / 20 + ");";
                                for (var h = n.length, s = 0; h > s; s++) {
                                    var o = n[s];
                                    e += null != o.he ? "ib.quadraticCurveTo(" + o.he / 20 + "," + o.ke / 20 + "," + o.pj / 20 + "," + o.sj / 20 + ");" : "ib.lineTo(" + o.pj / 20 + "," + o.sj / 20 + ");"
                                }
                            }
                            e += "ib.stroke();"
                        },
                        y = function(e, t) {
                            if (!t) return e;
                            var r, i = {};
                            return r = l(t, e.oj, e.rj), i.oj = r[0], i.rj = r[1], r = l(t, e.pj, e.sj), i.pj = r[0], i.sj = r[1], null != e.he && (r = l(t, e.he, e.ke), i.he = r[0], i.ke = r[1]), i
                        },
                        j = function(e) {
                            do {
                                for (var t = [], r = !1, i = e.length, a = 0; i > a; a++) {
                                    for (var n = t.length, h = 0; n > h; h++) {
                                        var s = e[a].length - 1,
                                            o = t[h].length - 1;
                                        if (e[a][0].oj == t[h][o].pj && e[a][0].rj == t[h][o].sj) {
                                            t[h] = t[h].concat(e[a]), r = !0;
                                            break
                                        }
                                        if (t[h][0].oj == e[a][s].pj && t[h][0].rj == e[a][s].sj) {
                                            t[h] = e[a].concat(t[h]), r = !0;
                                            break
                                        }
                                    }
                                    h == t.length && t.push(e[a])
                                }
                                e = t
                            } while (r);
                            return e
                        },
                        m = function(t) {
                            if (null != t.width) {
                                var r = t.width / 20;
                                e += "ib.lineWidth=" + r + "*jb<1?1/jb:" + r + ";"
                            }
                            null != t.Kd && (e += "ib.strokeStyle=kb(lb," + t.Kd + ");")
                        },
                        w = function(t) {
                            var r = null;
                            switch (t.aj) {
                                case i.zb:
                                    e += "ib.fillStyle=kb(lb," + t.Kd + ");";
                                    break;
                                case i.yb:
                                case i.sb:
                                case i.wb:
                                case i.vb:
                                    var a = t.Mg;
                                    r = [a[0] / 20, a[1] / 20, a[2] / 20, a[3] / 20, a[4], a[5]], e += "var img=mb[" + t._c + "].img;", e += "if(img.width==0&&img.height==0){return false;}", e += "if(lb.length) {img=nb(lb,img);}", e += "ib.fillStyle=ib.createPattern(img,'repeat');";
                                    break;
                                case i.ub:
                                case i.xb:
                                    r = t.Mg, e += "var ob;", e += t.aj == i.ub ? "ob=ib.createLinearGradient(-16384 / 20, 0, 16384 / 20, 0);" : "ob=ib.createRadialGradient(0, 0, 0, 0, 0, 16384 / 20);";
                                    for (var n = t.zf.Bh.length, h = 0; n > h; h++) {
                                        var s = t.zf.Bh[h];
                                        e += "ob.addColorStop(" + s.Ah / 255 + ",kb(lb, " + s.Kd + "));"
                                    }
                                    e += "ib.fillStyle=ob;";
                                    break;
                                default:
                                    c("renderShape.setFillStyle: unknown draw type called: " + t.aj)
                            }
                            return r
                        },
                        k = function(t, r) {
                            if (r.aj != i.sb) return !1;
                            var a = r.Mg;
                            if (!a || Math.abs(a[0]) != Math.abs(a[3]) || 0 != a[1] || 0 != a[2]) return !1;
                            if (1 != t.length) return !1;
                            var n = t[0];
                            if (4 != n.length) return !1;
                            for (var h = [], s = 0; 4 > s; s++) {
                                var o = n[s];
                                if (o.he || o.ke) return !1;
                                h[h.length] = {
                                    x: o.pj - o.oj,
                                    y: o.sj - o.rj
                                }
                            }
                            if (0 == h[0].x && 0 == h[1].y && 0 == h[2].x && 0 == h[3].y && h[0].y == -h[2].y && h[1].x == -h[3].x || 0 == h[0].y && 0 == h[1].x && 0 == h[2].y && 0 == h[3].x && h[0].x == -h[2].x && h[1].y == -h[3].y) {
                                var c = [a[0] / 20, a[1], a[2], a[3] / 20, a[4], a[5]],
                                    f = r._c;
                                return e += "var img=mb[" + f + "].img;", e += "if(img.width==0&&img.height==0){return false;}", e += "if(lb.length) {img=nb(lb,img);}", e += "ib.transform(" + c.join() + ");", e += "ib.drawImage(img, 0, 0);", e += "ib.transform(" + M(c).join() + ");", !0
                            }
                            return !1
                        };
                    return function(i, l, p, m) {
                        t = [], b = i, g = l, r = [], a = [], n = [], s = 0, o = 0, f = 0, u = [];
                        for (var C = 0, A = 0, I = p.length, E = 0; I > E; E++) {
                            var S = p[E];
                            switch (S.aj) {
                                case h.tb:
                                    var B = C + S.he,
                                        F = A + S.ke,
                                        D = B + S.Wc,
                                        P = F + S.Xc;
                                    u.push({
                                        oj: C,
                                        rj: A,
                                        he: B,
                                        ke: F,
                                        pj: D,
                                        sj: P
                                    }), C = D, A = P;
                                    break;
                                case h.Ab:
                                    var D = C + S.x,
                                        P = A + S.y;
                                    u.push({
                                        oj: C,
                                        rj: A,
                                        pj: D,
                                        sj: P
                                    }), C = D, A = P;
                                    break;
                                case h.Bb:
                                    d(m), (S.Bg || S.Qe) && (v(), g = S.Bg || g, b = S.Qe || b), null != S.Ae && (C = S.Ae), null != S.Be && (A = S.Be), null != S.Ag && (s = S.Ag), null != S.Oe && (o = S.Oe), null != S.Pe && (f = S.Pe);
                                    break;
                                default:
                                    c("drawObject.renderShape: Unknown type detected:", S.aj)
                            }
                        }
                        d(m), v(), e += "ib.lineCap='round';";
                        for (var x = t.length, E = 0; x > E; E++) {
                            var L = t[E];
                            if (g = L.Bg, b = L.Qe, r = L.zg, a = L.Ne, n = L.Lg, !m)
                                for (var _ = n.length, G = 0; _ > G; G++) {
                                    var Q = n[G];
                                    if (Q) {
                                        var N = {
                                            width: 1,
                                            Kd: b[G].Kd
                                        };
                                        $(N, Q)
                                    }
                                }
                            for (var R = a.length, G = 0; R > G; G++) {
                                var O, U = a[G];
                                if (U) {
                                    if (U = j(U), k(U, b[G])) continue;
                                    if (!m) {
                                        var T = w(b[G]);
                                        T && (e += "ib.transform(" + T.join() + ");"), O = T && M(T) || null
                                    }(!m || 0 == E && 0 == G) && (e += "ib.beginPath();");
                                    for (var J = U.length, H = 0; J > H; H++) {
                                        var K = U[H];
                                        if (K) {
                                            var q = y(K[0], O);
                                            e += "ib.moveTo(" + q.oj / 20 + "," + q.rj / 20 + ");";
                                            for (var V = (K.length, 0); V < K.length; V++) {
                                                var W = y(K[V], O);
                                                e += null != W.he ? "ib.quadraticCurveTo(" + W.he / 20 + "," + W.ke / 20 + "," + W.pj / 20 + "," + W.sj / 20 + ");" : "ib.lineTo(" + W.pj / 20 + "," + W.sj / 20 + ");"
                                            }
                                        }
                                    }
                                    m ? E == t.length - 1 && G == a.length - 1 && (e += "ib.clip();", e += "if(ib.globalCompositeOperation!='source-over'){", e += "ib.save();ib.setTransform(1,0,0,1,0,0);ib.globalCompositeOperation='source-over';", e += "ib.globalAlpha=1;ib.clearRect(0,0,ib.canvas.width+1,ib.canvas.height);", e += "ib.drawImage(copiedCanvas,0,0);ib.restore();}") : (e += "ib.fill();", O && (e += "ib.transform(" + O.join() + ");"))
                                }
                            }
                            if (!m)
                                for (var X = r.length, G = 0; X > G; G++) {
                                    var Q = r[G];
                                    Q && $(g[G], Q)
                                }
                        }
                    }
                }(),
                a = function(t, a, n, h) {
                    a.Mg && (e += "ib.transform(" + a.Mg.join() + ");");
                    for (var s, o, c, f = a.Bh, l = 0, u = 0, g = f.length, b = 0; g > b; b++) {
                        var p = f[b];
                        null != p.Ze && (s = h[p.Ze]), null != p.Kd && (c = p.Kd), null != p.x && (l = p.x), null != p.y && (u = p.y), null != p.height && (o = p.height);
                        for (var d = p.xf.length, v = 0; d > v; v++) {
                            var $ = p.xf[v],
                                y = o / 1024;
                            e += "ib.transform(1,0,0,1," + l / 20 + "," + u / 20 + ");", e += "ib.transform(" + y + ",0,0," + y + ",0,0);", r([{
                                Kd: c,
                                aj: i.zb
                            }], null, s.gi[$.Mf], n), e += "ib.transform(" + 1 / y + ",0,0," + 1 / y + ",0,0);", e += "ib.transform(1,0,0,1," + -l / 20 + "," + -u / 20 + ");", l += $.Kc
                        }
                    }
                    a.Mg && (e += "ib.transform(" + M(a.Mg).join() + ");")
                },
                n = function(r, i, a, n) {
                    if (i.ej) {
                        var h = i.dd[0] / 20 + 2,
                            s = i.dd[1] / 20 - 2,
                            o = i.dd[2] / 20 + 2,
                            c = i.dd[3] / 20 - 2,
                            f = n[i.Ze],
                            l = i.height / 1024,
                            u = (s - h) / l * 20;
                        e += "var font=mb[pb.Ze];", e += "var glyphInfo=makeGlyphInfo(qb," + u + "," + h + "," + s + "," + o + "," + c + ",font," + l + ",pb);", e += "var J = glyphInfo.length;", e += "for (var line = 0; line < J; line++) {", e += "var align = glyphInfo[line].align;", e += "var indices = glyphInfo[line].indices;", e += "ib.save();", e += "ib.transform(1,0,0,1," + h + "," + (o + f.Xe * l / 20) + ");", e += "ib.transform(" + l + ",0,0," + l + ",0,0);", e += "ib.transform(1,0,0,1,align,0);", e += "for(var l = 0; l < indices.length; l++) {", e += "var h = indices[l];", e += "var clippingState = " + (a ? "{begin: l == 0 && line == 0, end: l == indices.length - 1}" : "null") + ";", e += "eval(renderFont(/*ib*/null,font,h,pb.Kd,clippingState,/*rb*/null,sb));", e += "ib.transform(1,0,0,1,font.We[h]/20.0,0);", e += "}", e += "ib.restore();", e += "ib.transform(1,0,0,1,0," + (f.Xe + f.Ye) * l / 20 + ");", e += "}", e += "ib.transform(1,0,0,1,0," + -(f.Xe + f.Ye) * l / 20 + "*line);"
                    } else {
                        var h = (i.dd[0] + i.wg) / 20,
                            s = (i.dd[1] - i.Oh) / 20,
                            o = i.dd[2] / 20,
                            c = i.dd[3] / 20;
                        e += "ib.beginPath();", e += "ib.moveTo(" + h + "," + o + ");", e += "ib.lineTo(" + h + "," + c + ");", e += "ib.lineTo(" + s + "," + c + ");", e += "ib.lineTo(" + s + "," + o + ");", e += "ib.closePath();";
                        var g = i.height / 20,
                            b = (i.height + i.vg) / 20,
                            p = i.mj && i.multiline ? Math.ceil((s - h) / g * 2) : 0;
                        e += "ib.font = '" + g + "px sans-serif';", e += "ib.fillStyle=kb(lb," + i.Kd + ");", e += "ib.textBaseline='top';";
                        var d = 0,
                            v = 0;
                        switch (i.align) {
                            case 1:
                                e += "ib.textAlign='end';", d = s - 4, v = o + 2;
                                break;
                            case 2:
                                e += "ib.textAlign='center';", d = (h + s) / 2 + 2, v = o + 2;
                                break;
                            case 3:
                            default:
                                e += "ib.textAlign='start';", d = h + 2, v = o + 2
                        }
                        if (t && (e += "ib.textAlign='start';", e += "var styles_=[{'_g':0}],offsetDiff=0,textProp='te'+'xt',colorProp='co'+'lor';", e += "qb=qb.replace(/(?:([\\r\\n]+)|\\{(\\{.*?\\})\\})/g,function(match_,crlf,tb,c){", e += "if(crlf){offsetDiff-=match_.length;return match_;}", e += "var data_=JSON.parse(tb);var qb=data_[textProp]||'';var textLength=qb.length;var actualOffset=c+offsetDiff;", e += "styles_.push({'_g':actualOffset,'Kd':data_[colorProp]});styles_.push({'_g':actualOffset+textLength});", e += "offsetDiff-=match_.length-textLength;return qb;});", e += "var startPos=0,c=0,defaultColor=kb(lb," + i.Kd + "),style_=styles_[0],nextStyle=styles_[1],j=0,drawString,endPos,offsetWidth_,partialString;"), e += "var ub = vb(qb," + p + ");", e += "var J = ub.length;", e += "for(var i = 0, y = " + v + "; i < J; i++, y+=" + b + ") {", t) {
                            switch (e += "drawString=ub[i];endPos=drawString.length+c;offsetWidth_=0;", i.align) {
                                case 1:
                                    e += "offsetWidth_-=ib.measureText(drawString).width;";
                                    break;
                                case 2:
                                    e += "offsetWidth_-=ib.measureText(drawString).width*0.5;";
                                    break;
                                case 3:
                            }
                            e += "while(nextStyle&&nextStyle._g<endPos){partialString=drawString.slice(startPos,nextStyle._g-c);", e += i.Ng ? "ib.fillText(partialString," + d + "+offsetWidth_,y," + i.Ng + ");" : "ib.fillText(partialString," + d + "+offsetWidth_,y);", e += "startPos=nextStyle._g-c;offsetWidth_+=ib.measureText(partialString).width;", e += "++j;style_=styles_[j];nextStyle=styles_[j+1];ib.fillStyle=style_.Kd||defaultColor;}", e += "startPos=style_._g-c;if(startPos<0){startPos=0;}", e += i.Ng ? "ib.fillText(drawString.slice(startPos)," + d + "+offsetWidth_,y," + i.Ng + ");" : "ib.fillText(drawString.slice(startPos)," + d + "+offsetWidth_,y);", e += "c+=drawString.length;startPos=0;"
                        } else e += i.Ng ? "ib.fillText(ub[i]," + d + ",y," + i.Ng + ");" : "ib.fillText(ub[i]," + d + ",y);";
                        e += "};"
                    }
                };
            return function(i, h, s, o) {
                switch (e = "", t = i.ch.enableStyleText, h.aj) {
                    case g.Nb:
                    case g.Ob:
                    case g.Pb:
                        r(h.Qe, h.Bg, h.hi, s);
                        break;
                    case g.Rb:
                    case g.Sb:
                        a(i, h, s, o);
                        break;
                    case g.Jb:
                        n(i, h, s, o)
                }
                return e += "return true", new Function("sb,ib,pb,transform,lb,qb,kb,nb,vb,jb,makeGlyphInfo,renderFont,copiedCanvas,mb", e)
            }
        }(),
        cb = function(e, t) {
            return 256 * e[t + 1] + e[t]
        },
        db = function(e, t) {
            var r = 256 * e[t + 1] + e[t];
            return 0 != (32768 & r) && (r |= -65536), r
        },
        eb = function(e, t) {
            return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]
        },
        fb = function(e, t) {
            return 255 << 24 | e[t] << 16 | e[t + 1] << 8 | e[t + 2]
        },
        gb = function(e, t) {
            return e[t + 3] << 24 | e[t] << 16 | e[t + 1] << 8 | e[t + 2]
        },
        hb = function(e, t) {
            return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]
        },
        ib = function(e, t) {
            for (var r = t; e[r];) r++;
            return String.fromCharCode.apply(null, e.slice(t, r))
        },
        jb = function(e, t, r) {
            return String.fromCharCode.apply(null, e.slice(t, t + r))
        },
        kb = function(e, t) {
            for (var r = t; e[r];) r++;
            var i = yb(e.slice(t, r));
            return [null === i ? "" : i, r - t + 1]
        },
        lb = function(e, t) {
            return 0 != (e & 1 << t - 1) ? e - (1 << t) : e
        },
        mb = function(e, t) {
            return lb(e, t) / 65536
        },
        nb = function(e, t, r) {
            return e[t + (r >> 3)] >> 7 - (7 & r) & 1
        },
        ob = function(e, t, r, i) {
            if (!i) return 0;
            var a = (t << 3) + r,
                n = a + i,
                h = a >> 3,
                s = 7 & a,
                o = n >> 3,
                c = 7 & n;
            if (h == o) return e[h] >> 8 - c & (1 << i) - 1;
            for (var f = e[h] & 255 >> s, l = h + 1; o > l; l++) f <<= 8, f |= e[l];
            return 0 == c ? f : f << c | e[o] >> 8 - c
        },
        pb = function(e, t, r) {
            var i = e[t] >> 3;
            return r[0] = lb(ob(e, t, 5, i), i), r[1] = lb(ob(e, t, 5 + i, i), i), r[2] = lb(ob(e, t, 5 + 2 * i, i), i), r[3] = lb(ob(e, t, 5 + 3 * i, i), i), Math.ceil((5 + 4 * i) / 8)
        },
        qb = function(e, t, r) {
            var i = nb(e, t, 0),
                a = 1,
                n = 0;
            i ? (n = ob(e, t, a, 5), a += 5, r[0] = mb(ob(e, t, a, n), n), r[3] = mb(ob(e, t, a + n, n), n), a += 2 * n) : (r[0] = 1, r[3] = 1);
            var h = nb(e, t, a);
            return a++, h ? (n = ob(e, t, a, 5), a += 5, r[1] = mb(ob(e, t, a, n), n), r[2] = mb(ob(e, t, a + n, n), n), a += 2 * n) : (r[1] = 0, r[2] = 0), n = ob(e, t, a, 5), a += 5, r[4] = lb(ob(e, t, a, n), n) / 20, r[5] = lb(ob(e, t, a + n, n), n) / 20, a += 2 * n, Math.ceil(a / 8)
        },
        rb = function(e, t, r, i) {
            var a = nb(e, t, 0),
                n = nb(e, t, 1),
                h = ob(e, t, 2, 4),
                s = 6;
            if (n) {
                if (i) {
                    var o;
                    r[0] = 256 == (o = lb(ob(e, t, s, h), h)) ? o : (o / i | 0) * i, s += h, r[1] = 256 == (o = lb(ob(e, t, s, h), h)) ? o : (o / i | 0) * i, s += h, r[2] = 256 == (o = lb(ob(e, t, s, h), h)) ? o : (o / i | 0) * i, s += h
                } else r[0] = lb(ob(e, t, s, h), h), s += h, r[1] = lb(ob(e, t, s, h), h), s += h, r[2] = lb(ob(e, t, s, h), h), s += h;
                r[3] = 256, s += h
            } else r[0] = 256, r[1] = 256, r[2] = 256, r[3] = 256;
            return a ? (r[4] = lb(ob(e, t, s, h), h), s += h, r[5] = lb(ob(e, t, s, h), h), s += h, r[6] = lb(ob(e, t, s, h), h), s += h, r[7] = 0, s += h) : (r[4] = 0, r[5] = 0, r[6] = 0, r[7] = 0), Math.ceil(s / 8)
        },
        sb = function(e, t, r, i) {
            var a = e[t],
                n = 128 & a,
                h = 64 & a,
                s = ob(e, t, 2, 4),
                o = 6;
            if (h)
                if (i) {
                    var c;
                    r[0] = 256 == (c = lb(ob(e, t, o, s), s)) ? c : (c / i | 0) * i, o += s, r[1] = 256 == (c = lb(ob(e, t, o, s), s)) ? c : (c / i | 0) * i, o += s, r[2] = 256 == (c = lb(ob(e, t, o, s), s)) ? c : (c / i | 0) * i, o += s, r[3] = 256 == (c = lb(ob(e, t, o, s), s)) ? c : (c / i | 0) * i, o += s
                } else r[0] = lb(ob(e, t, o, s), s), o += s, r[1] = lb(ob(e, t, o, s), s), o += s, r[2] = lb(ob(e, t, o, s), s), o += s, r[3] = lb(ob(e, t, o, s), s), o += s;
            else r[0] = 256, r[1] = 256, r[2] = 256, r[3] = 256;
            return n ? (r[4] = lb(ob(e, t, o, s), s), o += s, r[5] = lb(ob(e, t, o, s), s), o += s, r[6] = lb(ob(e, t, o, s), s), o += s, r[7] = lb(ob(e, t, o, s), s), o += s) : (r[4] = 0, r[5] = 0, r[6] = 0, r[7] = 0), Math.ceil(o / 8)
        },
        tb = function(e, t) {
            var r = eb(e, t),
                i = r >> 31 & 1,
                a = r >> 23 & 255,
                n = 8388607 & r;
            return 255 == a ? 0 == n ? 0 == i ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : Number.NaN : 0 == a && 0 == n ? 0 : (0 == i ? 1 : -1) * (n / Math.pow(2, 23) + 1) * Math.pow(2, a - 127)
        },
        ub = function(e, t) {
            var r = eb(e, t),
                i = eb(e, t + 4),
                a = r >>> 31 & 1,
                n = r >>> 20 & 2047,
                h = 1048575 & r,
                s = i;
            return (0 == a ? 1 : -1) * (h / Math.pow(2, 20) + s / Math.pow(2, 52) + 1) * Math.pow(2, n - 1023)
        },
        vb = function(e, t, r, i) {
            var a = t;
            i.pi = ob(e, t, 0, 2), i.Uf = ob(e, t, 2, 2);
            var n = ob(e, t, 4, 4);
            a++;
            for (var h = [], s = 0; n > s; s++) {
                var o = e[a];
                if (a++, 3 == r) {
                    var c = gb(e, a);
                    a += 4
                } else {
                    var c = fb(e, a);
                    a += 3
                }
                h.push({
                    Ah: o,
                    Kd: c
                })
            }
            return i.Bh = h, a - t
        },
        wb = function(e, t, r, i) {
            return i ? void e.__defineGetter__(t, function() {
                return delete this[t], this[t] = r()
            }) : void(e[t] = r())
        },
        xb = function(e, t, r, i) {
            if (i)
                for (var a = r.length, n = 0; a > n; n++) e.__defineGetter__(r[n], function(e) {
                    return function() {
                        var r = t();
                        for (var i in r) delete this[i], this[i] = r[i];
                        return r[e]
                    }
                }(r[n]));
            else {
                var h = t();
                for (var s in h) e[s] = h[s]
            }
        },
        yb = function(e) {
            var t = e.map(function(e) {
                var t = e.toString(16).toUpperCase();
                return 1 == t.length ? "%0" + t : "%" + t
            });
            return zb(t.join(""))
        },
        zb = function(e) {
            return e.replace(new RegExp("%(8[1-9A-F]|[9E][0-9A-F]|F[0-9A-C])(%[4-689A-F][0-9A-F]|%7[0-9A-E]|[@-~])|%([0-7][0-9A-F]|A[1-9A-F]|[B-D][0-9A-F])", "ig"), function(e) {
                var t = parseInt(e.substring(1, 3), 16),
                    r = e.length;
                return 3 == r ? String.fromCharCode(160 > t ? t : t + 65216) : Ab.charAt(188 * (160 > t ? t - 129 : t - 193) + (4 == r ? e.charCodeAt(3) - 64 : (t = parseInt(e.substring(4), 16)) < 127 ? t - 64 : t - 65))
            })
        },
        Ab = function() {
            for (var e, t = '0  0 !0 "H ,H .2H!*H!+H!H/ !0a0z  +$H$   *(H#.H<H#/0/-0/.0]0).0 #p--0V0 &0 \'0/," O" ! H H/#,H%:"FH%," [" F" !e !M !," !-H (H )0!$0OH#+H#-H%+H%-0 (0 )0 *0 +0 ,0 -0 .0 /0! 0!!H +H -  +!  -c /\'H!-"[ H!,H!:"="[ny:"#$[$"[$   + " #~ ##y #H6H|H;H9HVH #H &H *H"   *\'[ &[VF,+F,/F,:%,\'F`F*!F* F+#F+"F+-F+," #+0!"yMyKy\\yh0!#732~ e" +~D~(n"e~o~"*~")7~"n~(H:y-"y-$~  ~ #732~" ~^"#!~" ~" n[!"F~[*"[+"y*~#-"y-~Y~"+~",432y"+" 0"=/"=-"=*" " " y  k4F./7432H! H!!H!"H!#H!$HOHUH!\'H!(H!)432HyH~H"#H"$HFH[H"\'H"(H")H"*H"+H",H"-H".H"H/0H#!H#"H##H#$HYHZH#\'H#(H#)H#*43H$!H$"H$#H$$HWHSH$\'H$(H$)H$*H$+H$,H$-HpH$Hb H%!H%"H%#H%$H%%H%&H%\'H%(H%)H%*40$!0$"0$#0$$0W0S0$\'0$(0$)0$*0$+0$,0$-0p0P0% 0%!0%"0%#0%$0%%0%&0%\'0%(0%)0%*0%+0%,0%-0%.0%/0& 0&!0&"0&#0&$0J0=0&\'0&(0&)0&*0&+0&,0&-0&.0&/0c0w0n0q0\'$0>0@0R0\'(0\')0d0r0l0_0\'.0\'/0f0v0e0o0u0?0D0(\'0L0()0G0x0m0}0(.0(/0K0\\0M0h7320*!0*"0*#0*$0^0i0*\'0*(0*)0**0*+0*,0*-0*.0*/0+ 0+!0+"0+#0+$0Q0k0+\'0+(0+)0+*0++0+,0+-0+.0+/0, 0,!0,"0,#0,$0T0`0,\'0,(0,)0,*0,+0,,0,-0,.0,/0- 0-!0-"0-#0-$0g0j0-\'0-(0-)0-*0-+0-,0--0-.0-/0;090:0<0806050B0.(0.)0.*0.+0.,0.-0..0./0/ 0/!0/"0/#0/$0b0X7 #\\ #M #)0#)$ #C #A #E #N #)K#s #a #z #] #);#)/ #*  #*! #*0#*$ #^ #i #*c#*f#*)7 #+! #+" #+0#+$ #Q #k #+c#+f#+K#+* #++ #+, #+- #+;#+/ #,  #,! #,0#,$ #T #` #,c#,f#,){43|! |!!|!"|!0$!$|O| !|U|!c$!f$!K$!*|!+|!,|!-|!;$!/|" |y|~|"0$"$|F|[|"c$"f$"K$"*|"+|",|"-|";$"/7432|0|#!|#"|#0$#$|Y W!|Z|#c$#f$#K$#*|#+|#,|#-|#;$#/|$ |$!|$"|$0$$$|W|S|$c$$f$$K$$*|$+|$,|$-|$;$P742F  F "F ,F! F!(F!$F!,F",F"$F#$F#,F !F #F /F!#F!+F!\'F"#F##F"+F#+F$+F" F"/F"(F#\'F#/F!-F0FFF#(F$"{{{{{{{{{{{{{I43"S "S!"S~S#"S$"$J"$="SnSeSMS*"S+"S,"S-"S:S/"$c"$w"$n"$q"U "U!"U~U#"U$yJy="UnUeU)2##$h#!$##~##$-##!o#"q0###Z#Y!#Yq0-##[##"###"+##$*###+##z##]##)<#(<#(/##,$##*!7##r0!-0!/yU##,-yy#"*$#"^#"i#"*q"*o"#!#"#"#"#h#\'<#_##l"F~[!~"+~":y!"y*~^~" "y/~+/~Y~"M~*{{{{{I743p)T%!J* #A#b$, &!!k#"?)XK~u>o!,\'^ & *i#9&:%J.-u=eiab&()Yn@%*U"\'O+)Q] DrN/$_&"_+.a(5"Ul)/L+>+(C.Q&0)=)@u(C,\'E(j\'Pp6P *P$-P]%|C&/Fh>]W* O, A -X! X!c=!ZK%c+*>P>c\')1_*-_./f,#u .(D#x "K%%K\'^##+pCp^%_/f+"K,!\'(./$;V(/U.*"K#(d#"o"L"xz"b!$O#\'V$+g$9%&;%)1%/ON/[-.+f8?"-)="AcA* E1%$ Q#/Y+(R ,/\'1-(/,"A.?Z/]%,d+*$9!\'(hv/`:J&!?% S+!-?!*z#Q)6%#*A-=\'$-,C(b&$"p\\K$+A/"oP)KT#9%%+J+0%/w=" =/ZfS,#D,/Z-"EW+@,(dpN#$e/!(?+G& M.j-+">*+@,*))T& ix !}GC+[N6#*g!D%wF(0%)$W++W./= "D#*A#/S,+X/!$c(B!!$\'OE!gq#/\';!e@e-!?EK& )F+]!QDA%+`T*>F%!/CM6A%%/(V/-`"+,J/i*"i+"@++$qx\'/,!(C&]",] .).,W,*U,Ao\'Q! W,$k!kv,=(@\'[!$6)$H^#\'D &A:E*PE/#$;Q#Up.8b%P#-P*!P\'Y"*V#.b& CKb*,O++J+9\']!=(@\')`r=+$`,+#c&+q,"\'N-\'aB*#,r(\'e+!e-+(0$oRo./o-#(\'=G+F&"N,*L/5KpE!.DGP,W,.Dy!\'F)>#+v6e+-D/.m, AT)\\#)]%p,+P!*()<%&-6u^m^.1%/.k "i )S &[!- &y["- J#)a$!==&x &-Rcc>$,@D_>e^(\'/)CxA(.m]%!/O"+6\\J$+Y++Y-!=UDN[-*/\'L-u,+(?\'Gnh*\'s+Dj,)s(D-CdZ\'HD,.M 6"(Y&(>$ W.-Z"9&$+Ao`oD+++qn\'x*d&+()s(]"(j+(/ #K.-C*#A)$)@C+=%,+ZE-N$-N$5#ar" &*"k*\'X(kz jbb"\'F%]& c&".`-#k;@.-!(W+(\\ (/$$$9$z#C#/=\\k*#*E(Se^O,d,#u+"\\-,h(TJ+]"De"(0%u#!l^%" L"T\'$5$B8/(Y!*V+-F" ^"-?".>-1%%)^e^)5%+(T+)?+-QBFBA *Z!!XUZ!+5#-+J&[_U?Z(/i+#5QZT@/"[/)@/W\'$+ >!(@<R +dHr*!ly_.E/Z\'H f]e=o).(a#G,,m*+Ku)W!ChC\\C*")=%E-#)MLyu<?$"Q,+?-,,q*)@$,R#T,*E/.+} +A,!N!!)?$)?(P !P 6#\'O%)T=?\'/^)$>+ C+,W,K%;TB6/,`#.5q*J-@%:&wXmkmS^b.0&+T&,!@,_>\'/\')$?k#d  _ V1-(N/G!L,+$}R(.,,(/!-N:s .a#,p(V _%! V))Y+)`~X"f&p`+#*n* >\\\')$RtN\'1G+,xc&#*,o,*E*V$ C$ Y%*k?S^(Gc\'e@\'>).,g#\'W+*"v!*D% K &$9u8%p,\'P!O#,^$#?+*6/!Z FJ%Uqj,$[,\'[,<c\'(\'$ #d@d*B+ (_!*l/B-=JB\'FQ#+Q,W%-.D"-[";&#!A: D%*G#!}--M/D/ !\')i)Q*p*(p*+p*,PaP*V -O!$R*/J!\'O!/JYW#"O#\'b#.Q%*TLY,9%/#>/$i "XV & &j#!/J%A*$k,,!n,"n.-R./f/L!Ve (?pK/\'h9EH)C\')^*p/V!-g,"-=(UAg,$ =/[)>q(A? l(O T%"8%\'$>-/.h"=%*S+"Z+#-\'$#$\'N!\'a-r$+_,*e+N#,,L\'/(C/x#N/-!\\-O$!/Mf$6g #J#6%##*n-R#AR.N"5(.*/))`)z()]F!\'@!!*D%6%+ d\'^ @%+-#K$\'A?$<[*-+\\.>TO,$D#Nd)X,hE\'$(X!d**wGALl([vRB &?!)ZT"/F$!+?*+G!#\'t$(.,-K9%#=LL\')$!P,F +6yO!$W%%Yn-q.^\'(QCOXF/(S >&!\'=U@!*A#+[$#*J&,=&Xu[9#>=d#-l1_$,_)E8+\'X+(0.o$*D,-G (G&#x=(./-N!*](/e+L/,.a.?"(@yX$(Z/, A)AuO )U+" &,d&b$d\'$_% L$ G"Zc(p/J #C "J J%!\'T"#?[Y%*>cb(V%*,T./i!+[!/D"/Z#\'[\\`*"E"_n*,q"Bv$\'D/_\'Ec,f*NN+x!N,:(.-"K&#h>Ad)?%s!#)B?!$Y#)b#+YBQ/"=9k.Kquq/B-$#e#\'G  GtA%|86  Q#8%$\'T&/^]OkW-/O.*Q/"@"#D%W&dX6&n- l,*L+$f*!f9o/ DpG(\'}.(M#\'A,\')D\')/!#p)$pMP g#$?$$C$#6*"b/(TtU )XG@*(BW*\'L!G).G*$xR\\K$6.a,)p*$PlP*b !C !J!$CUT")b"+C"/6#)^#<%$!O$ 6%(C>OdFEgQWQg+(b-6%-.>-/>B?.(Y.)^.+>/!DV[!$`")@"-D#*@%#+= "=$#=/S@jeU()@zkTX-"ijA:X.]>#"@(RD,d#/l;_V_!(_%B-+!fOf #f*/f+!(O$v(/e"*(Y"L$,(D!x!+m*"m/,K,*\\>Mw\'o/M/,C*$A$-NV))))s-(]#QFQ"*Q#/>$ ?(g&"/@/;(`*(b/).+C!$Q"#Q$$^&/-d$ \\R]& ).-"q$S/ N!c>!OHj -*s*(n-+(1`k$N #p,^&/V@Wx6^i &D!,\'= /= =oAxU-/\'>g_#*([.a$"paP%V#,C% Jjb-5%-.5\'1&,)E$q\'f"G% hAL-b>V.*@#"Q Q% *T!(jcV$,C?6aQ++VXA"$j#*Uoj+\'Z;(c_\\,R"f\'(O\'([\'A-J(B-0o-,L,!(/ )A)Q[WnD> \'X*m*O!+W\'$"A"^oi)Gf+W$+F- 6\'/,\'(C]tP%T"$^$(k$#5&"DwS\'bdu\'Q&_~h"X?,a*-r#C#!C!G%"#>+-X"/=$*5$5&nj++*?*)A-!@Ka-=#$,)0&a*+@+/=%"$;C )?#,F,\'U .D$MJ&Z?/w5q,*>"#rE\'.eDCxom-+\\\'()\\ J*,=*k+xpgp-$P#*P\'b"#^#/?#/F%<%&-Q(.QzQzC)H%QV,$g;F:Q/-@ !j0@%"bQ,J*/J+-J.D\']&k[+\'k, /qW\')$Ez!l/(_!E-"+f*"v "v/#()AG%.G&)G=GmG..m,\'m-,A,,N/`k/pxP#,P(gOVQ>+/i!$D0!=$[+"U.,k,++n#B$+->-$\'m!\'h*f ,f##v.*u)$(/)5T )Bb/ /(Q(]"+dt(./?+}A.+$;Y#/O\'/>hO*,C+*S (ABX/ &>+.m.^+)/?  r;% \'[\'/$e]%`!?$*\'9.e 6!)C, SZL-=Jz\'UBhB-!\'fVx!-(.,*K&.D,\'K*^ !b"/^,#i>#clnY\\$,\\,(h"+e6%+,F/#U /)$<Q#-J+(D"$kqU+Gn.E#;d".(U+}*#)O"))A%!!F#->S^+H&#(D*#E-*,E V&-^#,6S?+)>,#O--8/.5! U"/5-#"\'z \'z+_$"\'8-\'/-"v.-e!/uKLS(E"xK(B$(/"/K#!\\$+)U,A`\\zp, PP%!W%#$O/)Z" 5_S,$U;+\'Z#\':&\\,-M(Y#-W\\C++X--!\'C-\':B,)Q(\'B!)b!t(?#(H P,^,1=FR*,d<e!,))H%!,Jt*J.`AX+(A-/Z.)=X$@/B-!W-9K>\\(\'N J!5%yj"$ =\\=-A9^.k_-"\'/n=/(?*/?/\'G/?"*C#-CEY.(b/K&V%M8)=W +>!!b"-g#"V#$>#.Tp?%$J%#O&!>A?a6*#T+Q%, J, b,!O,!^.(W.G%.;%/c&"\'X"(S"-k#(`#R= \'= ,="-=\'=R5G[*!X*Y&,+`-(D;A6(w#,w[\'U\'>,Rc!\'?-\'K!\'A%\')/ d;r!!l*R-#N Aojux?$N?-L/#G!/G#,G%$Gq(`!m-.\\*$M=h\'.)$!(AzEN$;*$;u986>!)>"\'Vl6oWmT+"F<D T&P5@U>=-$$nk>qd&#u+L+n\\+(h"V&#O\'/$N/5".jKj+Aw.-\'6$fRen()5N-/(>%(1O,#+P#(P9$1%%% >*"V+-g+.C/,Z!$5#"/J+ =$k(.5)a&-\'D-/!>##>+Ew/\'CB)5_##v<e*/?**(s*G#*(.*+(/aK#"\\--E \'p+*p,O" Y(>%(.T, +>!^,#-vpG *(/T)=#)@-rFG,/N ()UF&/Y#*(K!>$#C\'(F:%&#*D,#$cG\'@!lx\'/;LcK$")O$h! h!(A(/\'W.s,W- >jA%c&d"}*(A-kZ5\'$A\\N#TN!\'A, L/5/(S$\'^+/u9&c",>%-="b!,W"#J":%]Y/(U "@y J#/J\'$=!/=\'S(/[v=kZ;%nn>!/@-+l+.(VJ(/ L/-(E/G* GhG,+K!-\\M)>")>A%(E* .v &A+Q:j -`y*J^=!S\'KR/#d$-l$-\'<.v *m*,(j$}9(6/\'GC" @"-A#^&$$["NG"-dor, G*,A.*_@e ,(\'$)p-C!$?#$YZV+*Y, F,!J--j~="$@$+ &vZoS,,A-W&-!@_Zb,w$B!_J,+d\'/r*-_-*\'8*\'tL!de!+e#)?iG&.m,.}bK\'(KRM*-M\\Coa*6"$g%(S/#(w#JU(\')?\'6%v+#l,6&$T?O,*D#**=/5&/jC*n-)>(/>(BKBC&\']/lE_" _$$D \'G#$A#+K&!)/"V .>">%#,T#:%  C%*^(.6)Pn#g+(Q`W#!j <& /ZY`#(Z##X#+k$,-J.)=/C-<&zj)/j/Ow6p()>.)@/(dhl-/_,/_zf&!o$NYLS,u+,?1LT}cK !K&-hEE!,s!F ,b()@!(.v-#?Y} (K" P,Y \'W"$>#\'Z &X#$A>X:,}+#K!/P->T.m,*J,/_)^Y"LA%!\'=#,YQ?kQ, i$ j>!K%,p-J\\^Mi,cG%O%#6(O%)^& / &FZl!eY&C%A$ )z$s"(P%YfJ+/.f!V,+O:b/?& " &!$k"#$=H&,/ &.-.f,.v\'/e-$Lxm+(K  K".AG).-+a-+p<%#/VMR+",\\}N$,]/A.--c">YY%$W+?&FD")5"-Z,*[/./\'$~G!\')$#D/,!G/.o#?!BD/?#.^#.)PSK%$(1VA*v#O-/-d.*(1X}*m#R"/(z$D*#-G+|<CY?& J\'=&"T&#*"J5&+$5-9&6+c*-R.-d./r**_++f#-f`D,+GC)YQ&<%m>/#5%*-=)=*f&+Q>#\'G,> "$R6%\'0%/!k J=d&` >/$d!*\'X.v/$(w(KW)a#r,)>%,d/EQ!u,$K! \').E*Mo#J*9R$|:-p/F+)C/;&"+-=#`\'/U,.L=+LRG#+\\pM/#)] &*!R [q"*eB(W\'m*/$;O!$J!,Q%(Q+b%9J<Y.(O/!W/Y%XQ1S!/[#!!=*[wjXBF">#*R#*f\'$v#N!\'L\'@G+/G-,}?}/#MsCRN "z6%"T&Y\'@/S\'O&,Lq,-m,#h*.A\'Z-F%()`K5z,(H-hs>-+K!^?if[#+S)1P$Z/"`_L1+?[_+$)YShX/\'V@^(/>+",_",n"^$ *\\<]+$p*-P$6VT >%"$#m)6$$?eW+)^9g.C%.*g./>/!X (`"Q&##i#- &GX,$ \'LRNB* +_;e$\'G "G5(8$K!#K+(\\"-\\-()/ 5,6&WD$:J>&./$@ur!+K&)h-U.+^PF1A$*$(/$-(/.-M$W!\'?DQMCT%%.)@-1\'.(/>!,m+,(.:)?+c+)P!j++X1!>0A1%!$6$!V(Y%?>sT`V/MJ)@>`:!@ro-/m.-K!$K/-h$-\'(F\'o^"*^.*JwbES !F !FO^!*T!,g" V%!V?W??C>+C%,/J-(k +`"C&$"jRUuZx`}/@-@--D5X-ac&/w,?b#>-(\'ER+$EQ$\'Q"lj_\'O"0(S#?&)?8G .x|mS(;/K #K /)$!)A@N"-s0C-? ,g"g%$ TfF, 5!*@$)5-!Br#d6f/$u|K%#M?%,;] >##b/)>1Z-zn\'E@#\'a/r8&+-"n.,G*jfZiO!/(d(UhW,$*zXe.Q+T\\$E !6&\'?`X ,@%=&,m(T*K$!N!YW!=,\'M g)$(K*Y!?$8g!.*?)N+ BVD#dh$kA")a$\';$>\'>Y@A (.-/A<&T-p(T,#T/! (/.C0"m-!f()D\'C.HJ6$BY!J%NF,#/E.8.1%)G%/,-G(j/9\'a \'AF+Buwq"+w+OBWH%&#\'k$sw,#lN$8Y./,$8Q_T&*[ *A/,#_ -f/-v##v+/(1"()ED*W-/S"G&$*-(N@R@,:&-#B$Z\'oW*S\'/>e*-)s,$HY.,Z"-j#MJ%@@/@,#n$,f,,f+*(/")\\$g  g\'/C*M&(?&E#\'U$n/-m+>(/"m;)=*K!NR/\')8RBu")P"b"J%Yi",jlX,,*@_r)$lCeZ?u(/.+=-j/" n &\'9+o*+)z!).*J!/-r+!\'(nr+L (R+$D*.?5!fm>%!>&VU+M&[.m@d\\Es.*P! \'/c&"zrPC^z.C&\'^?)D8A+,P#W~W#$^#,g#-Q;=$",J)URX,#5,$B"$(n*/q.->%$\'8!e",?.N,*E+,$\\`\'U)N!"N.X##-=&)>&*@8\'} ?$#D.6#"^YO$"JNY.(>/\'` +["$A"\'A"*+JK&+-S,,,>+"@*B(\\\'](_,+\'/Rf^(G+G+N,++K\'/)>.N-k* +l#? )C,#6t5\'(@+-(\'$YR E/(.)/#kl*d!>##)>xs.g/=v]o/!f)?/#T/T>&"rSK#`D>).Q*a_! @\'.x",$H%%Xi*!A,#@/ "\'$:\'ALD(G%%m\'C.-X#,/>T\']"e-\'h"(M/"uzD.-z"g$,OX,J(`g,cOm*\'m-#N#+JP\'P&$;-p-?\';%MQ*=%+,T!*?;Y.)` !="\'=%\'@%*\'=&5jB"Zr[(O vse)NQ,m* m5}\'$A!,A$$P*5$*k+=e!.(S!?&*K.?, UC#)GL$d?%\'P b[btC8%&c-\'N/v\'NK\'(N=-b%/!@F%&,+(p,/\'[)a)F" J$#Q&\'WxZ!*S[B!!^AB,(E,-B-!+A/ J(\'(V89)P>%!>%uV5YBY/ il$$:&?#-C()A%+lqN O 1%m!@%&\'G>"FR^?!!rD% P%KE"$R+,R-.L1*(/-$K$-$1b",C*"C/ !E*-P--e!\'M.^cZY%&k)>"+L-,(/!$d$F"-b()ZO%&" *=*5+,-l#/o.C "#$H?0%%$$JoO)$C+]%,/V,.b-"C.)="+UZ@%#5%+Ack,g&,9c/Eo"\':+f-.e+#u ,(p,(c"(\\"G"*m$*KiM-"N/-z/#]&,$8/p*O (gFJ\'$^s?<g/-?/-A"#/=+Swk_ &}F!M_yf**v*L+  mmm+/M\'.A#F$" N"T#!> g%YTGD$+[q$\'[R\'=dS\\5%",Z,*U+D%fV8TCSn,\'/1%!9@,=SE(.()Q$).+QlQa)="@\')i+,6pA]C6%v)`\'Ca*i\'/.)T[?-piP<%#,D"+Ank,*+(/,$P*-\'5-).+/$;@U[.f&/"+?!Y$\'Zn*aW%-/#rC%,*T+`(w`8*u-!d!$v ?))E,(j,!!R"V"-CM"wy\'F/R-+E"\']&UKQ*\'b*!?!^%$ g$_= .@-/(H\'MNz/W).*\'Fj.T%!$jmE-+/_.,)@").+i$\'D*y(0FNWQX+-+q!+@/"_+"f!\'u)C!#[n().-)@.5@F"H)K%%,"S"#+l\'.m+V%P& k_ +C(V0!$6b!+J\\,n#*fZ\\,6/FR:%#(W/\'E-|?*,G##(.})>=\'/#?*.)WZ! A! D,+)@%"G.-(/#?%"/P%O!"^",>#,Q+^%Bj * &!([#-=cA_i5@-mqZq#\'>#!\'C LgGNK$*K\\KbA,$(\'(g)OpLP%)$;.G(N/#/N!V *gBT)A%++C.+D#-i#/i$,!=-`)$i]D- k.kw)$>"(d*/\'/Gf  u$N$,NN!xy(;*KJA_)Ki!\'5")U+#[,(Z-\'$\'/,,\'H`-, \'/?(r*L/D@%o+!N#,A/@-!+_&!u#-)U*$BO#>%g &+ S/.+?,-D"-(s>~C$ b,J&\'$5G(\'$ &\'$o>:L,/L9\\,,A:A\'?/xq(R*,+u$5#* >J%"(A-$U.z\'$ )>%ED+lMADd-,)/}$1=U5%TD%,pDp*6 -*$:O!,T+.5%)ALU-+,q!/@$"R*-d!,lB([/G-"Kl\\,/A>N!?"a_-O "Q#)D\')@-,+w- \'$##v.L/"*A*#)T\').)/\'SVuU-)E-"/)?8.8PZP(Q!+>"+O-+i !,q+"\'h,e-#M#$A+\'AXE *).E)X"=*=+\'Wy>"*#c,LmF.,A|k!K&/"#w$E,#B-/$f&/(p.K"#h"T$$"a&X*-#c(N,,"}./E#F"+W*$O.,^/ Sw@E`))Sji/ /\'["n/,r.-f !f\'.(\'$+K,6U-).h\'N$fxh#"G-J "g$mG\'Uk*m,$v @ -Ud ]/"p))pNz! G&+?,!?&DK &BB(E(O%{732%/ ,$9|9%$:*$<!$<&$<,$</$8"$6&$6(pep?(`+pGe!F/ -p(8.)8.)/p* p*"p+ p+#pkp,8.,-p,$p`p,"p-\'p-8..-p-/p/\'P )P%*P0P%+P%-P%\'P$\'P@PLP(/PNPrP&)PcP\\P&/PDPA%!!(P-$P-/P,8/-(P-+P-!P-*P- P8P6% !^ "? !W "^ F% VP!,$HJ "O "C ",$H8/.b !O  J|Y|@cYV%%VV|?V^VJ &T \'? (V )^ ?% +W +F ,C ,^ +Y ,F -J -6 6% .g <% .6 /C b%! C! O! F!!J!O%!!W!!^!"O!#^!#>!#T!#Q!#b!$VOF!$TOWU"d/?UCU^U6!(V!(F&-?!(T!(C!(b!)O!)Y!C%!A%!*W!*J!*F!*C!*^!*Q!+Y!+O!+F!+V!Q%!+g!T%!,C!-Q!;D%%%!.C!.g!/V!b%!/6" W" QyW" 6~>~^~6"#Y"#C"P%"$W"$Q"$TF6FW[^"\'W[C"\'Y"\'b"_%"(g")W")F"\'O"(?"\\(tLt>"*T"*g"+T"Q%",O",g"->"-6"<%"5N.g";%"/Y"b%"/?"/C0J0(>#?0g#!V0b#O%#!^#"Y#"b##O##Y##?#$V#$J#W$9>#$C#$g!-JY6ZCZ6\\?#\'Q#\'>#(F#A%#*V#*J#^%#*6#+V#+J#,#l!"A-C#-/=/,w.6#.6#.?#.g#/^$ O$#g$$V$"T$"g$#T$"6$#J$"C$!g$$6$(b$>%$(6Wb$\'O$\'>$\'V$)F$\'Q$(V$@%$(W$K%$D%$,>$*F$+?$^%$*T$,W$,?$*?$*Q$,F$*W$+6$+T$-?$6%$5%% b%!WPgp6pgP^$:%%#C%$V%&Y%$T%"6%%T%W%%%J%%>%#?%#Y%%g%)C%(V$*b%G%%)b%\'Q%\'6%)?%)6%*6%\'T%(Y%*C%(>%*?%-^%T%%-b%,W%-T%8%%-W&!W%/>&!J%/6%/g&!Q%/C&$6J w-b&#W&#J&#F&#?=Q=W&"b=T=^&D%&(V&G%&*V&)W&(b&^%&*6&+J&+W&,F&+T&,O&,Y&,V&,?&,6&-O&-Y&->&.6&/CcV&H%cWcCc?cQcgwYw?wJ%,>wTnJq>q?\'$6qQ\'$V\'P%@ClV\'(?@ORb\'(C\')YdVrYdWd^rVlYlJ_W_F_Yf^_J\'<%fQvCvg(\'FeODFuQ(c&+,V?Fog(\'C(?%xC()bGQx^}6xQx?G6(T%}Y}O}>}C}?(6%}T(8%}b(.b(/^(/C(1%(/T(/gKFK^\\V\\kGJ)F%MTMghFh?hB*-FC%%CV)$6C^C?AFAVA>ATACE?NO)]P%8tQsYaFzJ).?]TNg]C]^*F%*!b*!O*!T* C*!^*$ViT*$C*Y%*#JiFi^*)^*+T*+6*,Q*,F*+g*<%*->*5%*.C*-J*/^*1%+ T+ Q+!J+#F*-V+"^+#J+#6+$Y+W%+$VQOQ%%Q^QQ+J%kC+\'V+\'Y+>%+\'D%(?+\'^+(V+(Y+*J++?+,Y+,>+,C+-W+-V+8%+5%+:%+-6+6%+.Q+/V+/J+/Y,V%, >, ?, g,!Y,"V,"F,"?,#?,#C,$O,$J,$6TYTV,P%+\'O`T`85F,@%,\'C,(T,)O,)W))Q,*Q,+Q,+J,+T,+>,T%,+6,,>,-C,.C,/g,/^,.g-(T,.^- Q-O%-!>gT-!b-!Q-!O-!W-"F-!^-!C-!?-$TgF-$6-$QjT-\'Y-@%-(>-(W-(F-*F-]%-*T-*6-+g-K%-+>-+T-,C-,g--Y--F--J--Q-.Q-/F-b%;Q9^9C9O9Q<J<>8W8Y8V866>6W6b5F5W8>.>%.@%B*).+TBb.*V.,O.,F.,?.-V.,b.-J.<%.-g.-^.-Q.:%.9%..?..C..T./O./Y./V./W./?./6/ Y/ CbgbT/ Q/!O/!J/"C/"g/#?/$O/$?/$T/$6/"bbObJb>bCXOXg/\'Y/\'>/(Y/(F/\'b/G%/(?/)O/(>/)6/)C/)?tVt?tg1T/-J/1%/8%H?HO/-j +YHX "U & & !A ! & "A  5 #U !k O& "k "=  X #iVi|U &i \'@VX|i|=|j &Z|Z &S|[ &` &kVA (U (j .@ (Z )i (S a& )= )@ M& *@ (k 9& +D ;& -Z +WH & +j ,= Q& -D!$j!O&! = /= /@!  & /S /i! Z!"U 1& /U! j! 5!$@!#5!"D!"@!$i!#X!#`!"`!#S!#j!$[!$S!\'Z!\'@ODOAOiUk!\'SUX!J&!\'UOXOjOZ!>&!)A!)=!(@!*`!)S!)i!G&!)U!*k!*5!,`!,i!,A!/@!,D!,Z!,=!+i!,+\'/\'A!,j!5&!<&!/=!/i!/S!H&!/j!/`!/5"  &" D" A" j" `ySyky5~U~i~5"0&"#["#Z"$U"$5F5[ZFk[ &[D"\'`"(["(A"\'5"M&")Z")="-S"(Z")S"-@"-U"+k",X"H&",=$-S",D"-`",`",i",[",@"a&",A0`".5"/U#"@0[0D".X"b&Y &##5#$j$!`#P&#)=#(5#f&#*k#\'=#*Z#(X#(A#)X#Q&ZkZA#+5#.A#, &#,=#<&#,A#-[#/=#,S$!=$#S$ =$!Z$"=$#=%!j$!@$"D$ XS@SX$\'=$$5%"i$C&$)Z$^&$*A$(D$+`$-i$-[$T&$,@$+k$-D$,[PU$Be A$;&$9&"*`$<&p/J"`P=PSP[P*J  &P-J!D%!,JVJ"$J"#J"+J#$JYJ#@%#=%#(>$+J$D%%=%%%J$-J%D%%5%%-JnJ\'D%eJoxGJaJ)/J*+J+@%,#J,=%,!J,$J,,J-"J-+J-A%;J9J/UR"= *= #J1&R#=Y=#=&#$=!,=P=$$=$)=$!=%5J-=&$=&\'=&(=%/=&"=c=o=L=(5&()=u=N=]=,!=+)=,)=+5&+,=,$=+(=-=&-*=;=#/=5=.)=/ =b=/@cXw=w5n=n\'E#Dn5qXq=\'$UqDq@\'$=>5@ &>A@Z@S\'(AR &dAR`@i\'(`\'(kd=dU\'?&r@\'.XrS\'.`rZ\'.ArD\'8&_5_j\':&\'.5rAl5l=\'.@*)`v5u=eAu &ujo[u5xZek?ADZ(\'@(\'X()XLXGj()S(]&(a&LZ**5xA(\'S(Q&G &xiKXLj(\'5KUmiKD}DM[M=(9&K`mj}S(.@(g&h=\\[KS}@(<&)F&(/A(;&(.XMDMi\\iMZMUm=EAE@C`EDAkCSE5A5hAEShjCA)0&AUC5CjNUAia[s5] &aXzU]Za5z6+.Dzi]jakzZs@*"5))Us &))`)C&aS]5).D* [*!k)H&+ i)/A)/[).@*V&aU*!5).j*!S).k* i*![*,U*"Z*!Z*$S* `*\'[*#=*\'D*$@i[^A*=&*$D*#D*"[*K&*(j** &*(S**[**Z*ED!@*+k*,Z*,[*+D*+Z**`*-5*-U*-X**i*-i*.i*1&+VD!=*/i+![+Ua#U+!X+#D+#\'@-`+#)N.5+$@+$Z+$AQ &QAQSQkQXkU+\'D+\'A+\'X+f&+(S+(Z+(j+)D+C&+)5+*S+*i+*k+*X++[++U++Z++@++`+,=+,k+-Z+-X+.`+.k+/Z+./).+5, D,!Z,!S,!k,"S,"ZT5T%&`[`i,([,(j,)i,(U,a&,\'5`D,\'Z,M&,K&,,S,/U,-Z,+j,-@,T&,-j,*5,+U,+5,+i,-k,.X,-A,.i-!/L$j-#=-"k-#j-#D-!A-Y&-#Z-![- `jZ-)ZjSgi-\'AgA-(5-C&/8&-?&-/A9%&;i-Q&-,@-5&-+D-,=-.`--5-,`-.D--[-T&-/i--A-8&-g&-.i-.5:j55:59AB[6X<5:Z5k:kB=8j9X8Z<i85:S.H&9j<D.([.*i.)D.,A.+@.-Z.+j.*X.,S.+[.-S.g&.(X.^&.,[.)X/$U/!!c$`..`./D./5/#X./[/#U..X/#[.,`/#5/!Z./@/(=/d&/\'D/(U/f&XXbkHZXj/([/\'`bD/(5/)U/,[/=&1ZtZtUtS1A/,=ti/-X/g&/.`/-S/-DHU/.5/-+c E  kH*c!!c !c XHB !+c!i/\'$c!-c!(c!/c0c#B #"\'V!c&#c)E Mc*/c/!c*,c+(c+#c*B -/c,+c--c-E! E /-w!,w!E!J\'O%wLw=\'U"w$,\'O&\'U,w(/w1wuwCw*(w*,w-R!+E!+B!-"w,E!-$w,B!;w.,wBwbw/,w/E!Hn -n! n!+n"(n"-n",n0n#"n#+n#,n#/n$ nSn$+\'F(n\'$n\'B"envn(R"MnAn*"n*R"+E"+"n,#n`n,$n,B"-"n:n;n9n/E"/>  /q!R0*q!,qUq!-q#$q"/q"E#Fq#B#$B#P).-(\'YRZ*\'Z(qcq\'(q>qrqdq,(q+#q,B#++q, q6q.B#-B$*"\'$V\'S/\'$Fq/(\'$#"\'$#*\'W%\'$#/\'W/\'WE$$!\'W,\'SE$c\'S#\'S*\'$@\'$\'B$x\'$)B$*R$,*\'$,/\'$-$q/!\'$;\'$<\'$B\'pEpBP"\'P \'P!\'P(\'P\'>|> #>V> ,> .> ->O>!#>!.>[>",>#,>$$>$->$*>$)>%+>S>%*>&)>&$>&\'>&+>&->\'(>@>D>(\'>\'$>G>()>e>)$>s>]>^>*#>,">+#>,#>Q>+->+(>+,>+!>,->,*>-">-)><>-.>/.>H>/,@ !>/ >t>/">/#@ +@ -@ )@!/@"\'@" @y@~@"$@#$@0@#+@$\'@$(@S@%,@%(\'=!\'="\'=(\'=E=*\'=R=,@c@n@@@\'(@l@f@o@L@x@(.@A@h@))@s@+ @+$@+(@+)@+*@,"@,-@j@-"@-.@9@6@B@.*D"/@1R (R Rc$R"En$R!B\'FR[R!+R#Rq(R$R>*\'@(\'@+\'>+\'@%R\'/R\'BRE\'(B\'xR\\R* R)Br RkR+Er/R+,R+-R++R,Rl-R-R_*R-,R<R.B\'/,\'f,\'v"\'M&\'e \'M*\'(W\'LB(\'$\'(D\'(l\'(s\'L,\'G#\'(Q\'G*\'G/\'}!\'(`\'m+\'}$\'xBx,\'(T\'m*\'(.,\'(B\'}*\'(/-\'(/$\'KR\\"\'\\!\'\\EM,\'M+\')$ \'A \'CRC/\'C*\'C%\'C#\'E*\'E/\')G\')]\'s\')/$+\'s*\'sBa#\'aEa*\'zE]%\')B\').,\')9\')<d (d -d!(d!E*" d!/\'N d#!d#+d#B*#R*$#\'^R*$Ei!d&"d&))/]dcd\'E*_dLdEdCdNdAd*E*,(d+ dkdTd,$d+/Kod,R*,*d,-d,/dgd-#d-E*-*d--d9d:d5d.-d/ r "r /r *r &r##r!(r!E+!B+Yr"(rZ\'Q rdr|r$-r +r$,rWr>rJr\'$\'kR+crw\'k,\'kB+]rNr)/r}rzrsrxrMr(/\'Q-r)E+,+r,!r,,r,/r+$r`r--r.E,!!l!$r5r6\'` l  l R,!#r/#r/R,!R, -rXl"#l"R,"*l!/l#R,"+l#-l$,l$#\'T$lPl$ \'T \'T(\'T/\'`$\'T&lJ\'`,l>lolKl*$l*-l*"l*+l*!l*(l+#l+"l+!l*B,+E,+-l, lTl,"l-(l-"l-,l:a#+l./l/"l/$lXlt_ &_ "_!,_O_ *_W_$+_"B-#"_#/_Y_S_q_%&_$B-n_&(_&B-P_&#_h_(Eg+_(/___a_+*_*B-*#_Q_,R-+-_*+\'<-_*"_*/_-,_+(_)/_+ _-(_--_8_-B-1_/"_9\';%\';*\':#\':!\'9"\'<!\'9/\';E;+\':"\'8&\'5&\'<+\'<%\'<E8#\'<R<"\'<*\'5R6-\'6&\'6B6E6*\'BE5*\'5EB,\'B+\'.o_g\'B-(tBB/\'.L\'.(E.m\'.M\'.K\'.h\'.)$\'.A\'.(B.a\'.z\'/#(\'/#*\'/W\'/$,\'/$-\'/$Bb \'b!\'b%\'b$\'b(\'b/\'X \'X(\'XEXR/\'(\'/e\'/D\'/o\'/L\'/(R/m\'/)$\'/)B/]\'/s\'t#\'t/\'1"\'1EtB1&\'1L+w\'/T\'/`\'/,*\'/g\'/-$\'/9\'/5\'/.EH#\'H)N-,f &f|f +f!"f!L !N !,fyf"L #/f#+f$*fS(V"(VLV*(V/f&"f&L qfnfcf@f\'N _f\'/fufDf?fafhfsf*g!Kf*,f-+f6f-N --f,$f-*fjv N ./f/!v!+v"N!"#v"/v$+AxvSv#.(O#(O!f/,vw(U.vJv=v\'$vovLvGvfvev* vCv*$v*#(O/vhv*N!+ vQv+.v+L!+-v, v,"v+*v,N!,-v-!v-N!-L!,L!-*v-/v;vBvtv1v/.e !e "eVe \'e *e -e! eUe"N~+e#L"##e$ (FNFLF-(F*(F/([$(["([L[*([+e".eweRe\'L"\'.e}eMe*+e)/e++e*,e9e<e-/e-"e/$e/#etoh(0#e1e/N"-.(0&e-,(0N"-N#Yo#$oUo#"o#!o$ o#NY oWo"/o"+o!\'o!L#?oso**o)/o*"oAo"#o(.o(\'oGoloQoqo>o* o(N#*L#/$u!#o.+o,.o/-u #o-L$ +o,!o/\'u \'o;o/"u -u~u" o+-u#(? &o1(S-u"*u#,?%*uuuR(S+u*-(S.ue(SN$Su",(S/u\'N$Yu,*(S"u+N$+/u)/u-N$,-u++u-*u- u,!u`uju*!?yuH(P$?!\'?!(?",?!/?O?!$(P,?$ ?&#?%(?$(?$!D "?$+?%%?f?*$?L?\\?G?*(?&-?)$?a?.*?(\'?z?R?\'.?K?,)?+*?,/?+)?- ?g?--?6?-,?/)D *D!#D +?/.?tD &D~D!*D0D#/D$-$6%D%$D%/(=\'DwDhD*#D*)D**DxDmDkD*/D,$D`D+ D,)L"#D*+D-$D-.D.)D.,D-/D-+D./(w"(c&(cLc (c#D1(w!(cNc-D/Nc*(q$(q/(q\'(q+(\'F(nNw*(@ (>/(RL\'$,(\'p(R$(>\'(@L@.(>N>#(@#(@*LV(d"(\')/(\'e(d/(l+(r-(l (_ Aj(d+(l$(r#(l\'(\'`(r+(\'./(\'/"(\';L /L -(\'/.(\'X(\'/\'L .(_"L!!LULOL~LyL#!LZL#)L"\'L#+L$$L$"(?"(?N?.(D"(D+LvL\'.L).L>L_LQLnLeLELM(G.L)NG"L}(G$L+ L+/L+!L,#L,$L-$L-L})L--L/NK"L/,L/$L.L(/"(K$(K,(K*(\\#()$#(\\.()F(M*(M+()$!()$$(h+()Z(hL)$,(\\-(A (C.()=(A$(A-(A*(A/(E$(E\'(E.(N#()L()G()h())Ls!(sN)i(s,(s/(a"(a*(a-(a/(z (]*(],(]-()B()/$()/(G #GUG! G ,G!+G!-GFGZG$!G%+G%"GSG$(GlG&-G&,G&"G?GeGuG*(G*!G\\G^GiGsG*#G,$G,-G,"G-*G.+G/#GBG8G/!x!$G;G:G/\'G-.G-+x ,x \'x!*G9xUx! x!\'x" x##E*+x[x"+x#.x"L+$!x$,xPxpx$NQ&(Q+(Q*(k+(Q/(k,(k/x\'$x_xfxmx(.xMxhxAx)N+sm#*m$!m#/m$L,$,mp(T (T%(`"(`,m\'L,dmem(N,?mGm}m(.m)$mlm)Dy-m*-m**m+-m+"m+#m*.mkm,L,,!m8m<m-*m/-mtm1}|}V} *} \'} /} -}! )/p}!#m,-}!$}U(j\'(j-}w}q}v})N-,"}+.}+*},/}-*}j},,}-+},+}.*}.+}-/}<}/,(;L;N-H(9-(9.(9 (9/(8"(<%(.0(<$(8*(8\'(8N8,(6 (8L6N5$(5 (:*(5#(6%(.@(B"(B,(.v(.(\'(.?(.u(.x(.G(.h(.\\(.)$(.)N.**(.*!(.*,(.+ (.`(.+!(.+.(.T(.,L.,+(.-+(.<(./,(.1(..+(./.(/ *(/V(/O(/!"(/!N/!#(/!,(/!/(/!+(/ ,(/[(/##(/#+(/#N/W(/$"(/#.(/$,(/$N/S(/p(b\'(b,(X"(X#(X$(/z(/)/(t#(t-(t/(1\'(/-*(/6(/:(/.*(/./K(\'(H$KV(HNH*K!!KOKyK -K!.KUK +K"\'KZKYK#NH(KPK% K%!K%"K .K$)K#.K%&K%(K%.K&(K&/K@A*(KnKeK_KvKfKGK()K(/K*(K*/K+!KQK:K8&"$(K-+\\ "\\!"\\!)\\#"\\0\\$*)O&)O()U#\\J)U)\\q\\n\\x\\()\\e\\*"\\*+\\*/\\**\\Q\\+$\\+*\\, \\,!\\,)\\,+\\- \\j\\-/\\9\\-+\\/,\\b\\XM!.\\HM!$M",MOM!!)F.)F\'MWM$)M&$M$(MCM#/M$+)F MzMAMhMa)F*M,/M+)M+\'M.))0/Mth$$h".h!)h~h!*h"#h#*hYh#+)Y,)Z hl)Z.)Y&h+ h*,h*-h)$h+)hjh-\'h.(h6h-(h,#h--h- h,(h8)$!*)$!$)$!#)$ #)$ \')$! )$Z)$"+)$Y)$y)$#*)$$!)W")$$$)W+)S )S")W.)S*M"))$c)$>)$R)$_)W*)$l)$\'.)$v)$\'/CeC(\'CGC)$CACNC))C* C*(C*\'C*-C+,C++C+)C+.C,iH&C,#C,-C,,CgC-$CjC-,C9C6C:AyA"(A".A"/A$"A$,APA$+ARA%,A%.A%-A%/)=&An)=,A}ANACAEA**A*\'A+!A+"A+ A+$AkA+(A+)A,.A,+A,)A,-()$-A-,E -AgA/)E|E &E (E!#E .E!!E /EUE!)E"$E"*E0E#)E#-E#.E$$ESE$(E$"E$))>,)@ )@$E=)@?"-")@+EwE\')E?ElEvEdEDExE(/EKEzE*(EiE*#E+#E+$E,#E`E,(E,+E-,E.-)/PE/"d-/EXEbN /N ,N#(N"$NyN#\'N#-NSNPN$+)D+)D/NcNwN\'$Nq)G*)G/N+!NkN,$N,#N`N.)N.+)K#)K))\\")\\$)\\()M!)\\-)\\.)M$)M )M,)M.)h-)h.))$"))$)))W)C ))$+)C!)C"))$,)C%))E))N))^)s-)s.)a,)]/)]+)]-)]()]!)).-))..))/!))/"))1))/(s !s /sV)):s!)s"+s#\'sWs$"s$ s$#s#.)^%s$-)^+)^\')^/)i"sJ)i$)i))i+)i*s*-s+ s+,s, s,/s-!s-#s-$s-.s-/s:s<s5s./s.+s..s/$s/!s/\'s1a &a!(a!*a!/a~a"#aFa"\'a"(a")a"*a".a"/a#"a$$a$#aPa$-ap)Q!)Q(a\'$ahaoa\\aAaEa)/a* a*(a+$a, a,*a+)a`a,/a-!a-"a<a:a8a-$a9z#*a/"a/!a/ zOz!$z )z!#z ,z &z (z!"z *z|z".z!+zFz"$zyz0z$\'z#"zSz#.)T*)` )`\'z@z\'(zBz.,z/ ] )] (z.+] #] &]"*][]*/]"#]!/]$$]O]!"]$!]#/]#.]S]$(]%-]%.]&$]%!]% ]%)]n]()](\']*+]&/]d]s]*$]*)]+"],$],!]++]+(]+*]`],/],"]-)]-#]/(]5].-]./]/-)9*)9+)9.).>)B))B-).v).L).x).m).M).C).\\).]).^).*)).+().**).*-)@!).,,).,.).,/).- ).-$).-,).-.).--).;).6)..()../)./$).X)./\')./)).1)./,)./-)/ \')/ (@+\')/O)/y)/",)/#.)/$*)b")b$)X#)b/)X )X!)/=)X\')X,)X*)/R)/n)/@)/C)/z)tVeXz\'K%ESW!-,w)){{{{{{{{{{{{{{I\'.G(\\,h$(MLu-,P,E ++=#Um(M/)=1%/W$:(p9p/,P  P #P#)P%&PMPGPsP)$P,g|V ~$Hb !6|J \'V|F )W /W -?!$^UW!]%!+6!.T"O%")T"*J",V"-Q0V0>#"W#\'F#)Y#+F#--t 6$)T$G%$*C$H%%D%>C@%%dTl?l\'t H*!V()6xFKQCYCQCgAYsWa^QJ+, >"b+-?+.T,!6,*J,+^,b%-">g#t!O-$Fjg-+?-+C--V/"O/#WX>1>/-5Vj ?& G& -5 g&!" & /[!!U!#@!0&!)DyZ"*=#b&S &$]&$,5%$5&  =O=#+= )="5&!5&"$=J=%\'=%)t!"=q=))=* =+"=+/=/ic./MA\'=&rk?[l &fUuSmH*!ZA(t!S))D):&*0&ik*$=*\'Z*\'5*:&*8&+-=,#XT`,(=`X,-i- S-(@jX-)=-*`-,X-/D-/[-/`<A6`:@<`.+X/(D1%&H%cVc R "(c?c*+w /w|\'O,wSw$\'tOw,!w/B"+!n+B#"P*UqRq+-q,E#jq<q-"\'$ R#b\'$[\'$"*\'$"E$"BS"\'$(E$)/> !>&/@e@z@).@a@it!R\'$J"*/\'e!\'uBD$\'(d\')0t!(t!)t!*\'))P*!+\')ad-!dBt!,d.+r).t!-_$(_%,_+R-* _j\'6"\'/$Rt!t!.(0!(Z"o\'/o,\'oXu$L$+$?%#?%)?&+t!/?+ t" tyL \'LbG!"G#\'G\')G*\'G+.G-H*~GX(Q#x\'/m/ m/$}!"}@t"#(.,H*"P*FK&\'K-.t[\\O\\"\'\\-*\\-\'\\-.\\.-\\..\\8\\6M &M! M *M#*M$ M#,Mp)F))F!M#)M&\'M*\'MRM\'(MBM-\'M-)M- t"\'MgM;M-#hFhyM1t"(h!.MHh!-)0"hc)Y\'h*$h`h-.h/()$#!)$W)$$(CM/],t")A]A*/E##E#+E$#E$-EP)>!)>%)?\')D%t"*t"+)M\'t",))).sps-)s-,a>ana(/a+!a++z  ]c]&+t"-)9)).-!3ycywynyqy\'$y>y@yRy\'e!\')H:H8H \'H "{{{{{I74;  ; !; "; #;|;V; &; \'; (; ); *; +; ,; -; .; /;! ;!!;!";!#;!$;O;U;!\';!(;!);!*;!+;!,;!-;!.;!/;" ;y;~;"#;"$;F;[;"\';"(;");"*;"+;",;"-;".;"/;0;#!;#";##;#$;Y;Z;#\';#(;#);#*;#+;#,;#-;#.;#/;$ ;$!;$";$#;$$;W;S;$\';$(;$);$*;$+;$,;$-;p;P;% ;%!;%";%#;%$;%%;%&;%\';%(;%);%*;%+;%,;%-;%.;%/;& ;&!;&";&#;&$;J;=;&\';&(;&);&*;&+;&,;&-;&.;&/;c;w;n;q;\'$;>;@;R;\'(;\');d;r;l;_;\'.;\'/;f;v;e;o;u;?;D;(\';L;();G;x;m;};(.;(/;K;\\;M;h;)$;C;A;E;N;));s;a;z;];).;)/;* ;*!;*";*#;*$;^;i;*\';*(;*);**;*+;*,;*-;*.;*/;+ ;+!;+";+#;+$;Q;k;+\';+(;+);+*;++;+,;+-;+.;+/;, ;,!;,";,#;,$;T;`;,\';,(;,);,*;,+;,,;,-;,.;,/;- ;-!;-";-#;-$;g;j;-\';-(;-);-*;-+;-,;--;-.;-/;;;9;:;<;8;6;5;B;.(;.);.*;.+;.,;.-;..;./;/ ;/!;/";/#;/$;b;X;/\';/(;/);t;1;/,;/-;/.;H9  9 !9 "9 #9|9V9 &9 \'9 (9 )9 *9 +9 ,9 -9 .9 /9! 9!!9!"9!#9!$9O9U9!\'9!(9!)9!*9!+9!,9!-9!.9!/9" 9y9~9"#9"$9F9[9"\'9"(9")9"*9"+9",9"-9".9"/909#!9#"9##9#$9Y9Z9#\'9#(9#)9#*9#+9#,9#-9#.9#/9$ 9$!9$"9$#9$$9W9S9$\'9$(9$)9$*9$+9$,9$-9p9P9% 9%!9%"9%#9%$9%%9%&9%\'9%(9%)9%*9%+9%,9%-9%.9%/9& 9&!9&"9&#9&$9J9=9&\'9&(9&)9&*9&+9&,9&-9&.9&/9c9w9n9q9\'$9>9@9R9\'(9\')9d9r9l9_9\'.9\'/9f9v9e9o9u9?9D9(\'9L9()9G9x9m9}9(.9(/9K9\\9M9h9)$9C9A9E9N9))9s9a9z9]9).9)/9* 9*!9*"9*#9*$9^9i9*\'9*(9*)9**9*+9*,9*-9*.9*/9+ 9+!9+"9+#9+$9Q9k9+\'9+(9+)9+*9++9+,9+-9+.9+/9, 9,!9,"9,#9,$9T9`9,\'9,(9,)9,*9,+9,,9,-9,.9,/9- 9-!9-"9-#9-$9g9j9-\'9-(9-)9-*9-+9-,9--9-.9-/9;999:9<9896959B9.(9.)9.*9.+9.,9.-9..9./9/ 9/!9/"9/#9/$9b9X9/\'9/(9/)9t919/,9/-9/.9H:  : !: ": #:|:V: &: \': (: ): *: +: ,: -: .: /:! :!!:!":!#:!$:O:U:!\':!(:!):!*:!+:!,:!-:!.:!/:" :y:~:"#:"$:F:[:"\':"(:"):"*:"+:",:"-:".:"/:0:#!:#":##:#$:Y:Z:#\':#(:#):#*:#+:#,:#-:#.:#/:$ :$!:$":$#:$$:W:S:$\':$(:$):$*:$+:$,:$-:p:P:% :%!:%":%#:%$:%%:%&:%\':%(:%):%*:%+:%,:%-:%.:%/:& :&!:&":&#:&$:J:=:&\':&(:&):&*:&+:&,:&-:&.:&/:c:w:n:q:\'$:>:@:R:\'(:\'):d:r:l:_:\'.:\'/:f:v:e:o:u:?:D:(\':L:():G:x:m:}:(.:(/:K:\\:M:h:)$:C:A:E:N:)):s:a:z:]:).:)/:* :*!:*":*#:*$:^:i:*\':*(:*):**:*+:*,:*-:*.:*/:+ :+!:+":+#:+$:Q:k:+\':+(:+):+*:++:+,:+-:+.:+/:, :,!:,":,#:,$:T:`:,\':,(:,):,*:,+:,,:,-:,.:,/:- :-!:-":-#:-$:g:j:-\':-(:-):-*:-+:-,:--:-.:-/:;:9:::<:8:6:5:B:.(:.):.*:.+:.,:.-:..:./:/ :/!:/":/#:/$:b:X:/\':/(:/):t:1:/,:/-:/.:H.0 .0!.0".0#.0p0%.0&.0\'.0(.0).0*.0+.0,.0-.0..0/<! <!!<!"<!#<!$<O<U<!\'<!(<!)<!*<!+<!,<!-<!.<!/<" <y<~<"#<"$<F<[<"\'<"(<")<"*<"+<",<"-<".<"/<0<#!<#"<##<#$<Y<Z<#\'<#(<#)<#*<#+<#,<#-<#.<#/<$ <$!<$"<$#<$$<W<S<$\'<$(<$)<$*<$+<$,<$-<p<P<% <%!<%"<%#<%$<%%<%&<%\'<%(<%)<%*<%+<%,<%-<%.<%/<& <&!<&"<&#<&$<J<=<&\'<&(<&)<&*<&+<&,<&-<&.<&/<c<w<n<q<\'$<><@<R<\'(<\')<d<r<l<_<\'.<\'/<f<v<e<o<u<?<D<(\'<L<()<G<x<m<}<(.<(/<K<\\<M<h<)$<C<A<E<N<))<s<a<z<]<).<)/<* <*!<*"<*#<*$<^<i<*\'<*(<*)<**<*+<*,<*-<*.<*/<+ <+!<+"<+#<+$<Q<k<+\'<+(<+)<+*<++<+,<+-<+.<+/<, <,!<,"<,#<,$<T<`<,\'<,(<,)<,*<,+<,,<,-<,.<,/<- <-!<-"<-#<-$<g<j<-\'<-(<-)<-*<-+<-,<--<-.<-/<;<9<:<<<8<6<5<B<.(<.)<.*<.+<.,<.-<..<./</ </!</"</#</$<b<X</\'</(</)<t<1</,</-</.<H8  8 !8 "8 #8|8V8 &8 \'8 (8 )8 *8 +8 ,8 -8 .8 /8! 8!!8!"8!#8!$8O8U8!\'8!(8!)8!*8!+8!,8!-8!.8!/8" 8y8~8"#8"$8F8[8"\'8"(8")8"*8"+8",8"-8".8"/808#!8#"8##8#$8Y8Z8#\'8#(8#)8#*8#+8#,8#-8#.8#/8$ 8$!8$"8$#8$$8W8S8$\'8$(8$)8$*8$+8$,8$-8p8P8% 8%!8%"8%#8%$8%%8%&8%\'8%(8%)8%*8%+8%,8%-8%.8%/8& 8&!8&"8&#8&$8J8=8&\'8&(8&)8&*8&+8&,8&-8&.8&/8c8w8n8q8\'$8>8@8R8\'(8\')8d8r8l8_8\'.8\'/8f8v8e8o8u8?8D8(\'8L8()8G8x8m8}8(.8(/8K8\\8M8h8)$8C8A8E8N8))8s8a8z8]8).8)/8* 8*!8*"8*#8*$8^8i8*\'8*(8*)8**8*+8*,8*-8*.8*/8+ 8+!8+"8+#8+$8Q8k8+\'8+(8+)8+*8++8+,8+-8+.8+/8, 8,!8,"8,#8,$8T8`8,\'8,(8,)8,*8,+8,,8,-8,.8,/8- 8-!8-"8-#8-$8g8j8-\'8-(8-)8-*8-+8-,8--8-.8-/8;898:8<8886858B8.(8.)8.*8.+8.,8.-8..8./8/ 8/!8/"8/#8/$8b8X8/\'8/(8/)8t818/,8/-8/.8H6  6 !6 "6 #6|6V6 &6 \'6 (6 )6 *6 +6 ,6 -6 .6 /6! 6!!6!"6!#6!$6O6U6!\'6!(6!)6!*6!+6!,6!-6!.6!/6" 6y6~6"#6"$6F6[6"\'6"(6")6"*6"+6",6"-6".6"/606#!6#"6##6#$6Y6Z6#\'6#(6#)6#*6#+6#,6#-6#.6#/6$ 6$!6$"6$#6$$6W6S6$\'6$(6$)6$*6$+6$,6$-6p6P6% 6%!6%"6%#6%$6%%6%&6%\'6%(6%)6%*6%+6%,6%-6%.6%/6& 6&!6&"6&#6&$6J6=6&\'6&(6&)6&*6&+6&,6&-6&.6&/6c6w6n6q6\'$6>6@6R6\'(6\')6d6r6l6_6\'.6\'/6f6v6e6o6u6?6D6(\'6L6()6G6x6m6}6(.6(/6K6\\6M6h6)$6C6A6E6N6))6s6a6z6]6).6)/6* 6*!6*"6*#6*$6^6i6*\'6*(6*)6**6*+6*,6*-6*.6*/6+ 6+!6+"6+#6+$6Q6k6+\'6+(6+)6+*6++6+,6+-6+.6+/6, 6,!6,"6,#6,$6T6`6,\'6,(6,)6,*6,+6,,6,-6,.6,/6- 6-!6-"6-#6-$6g6j6-\'6-(6-)6-*6-+6-,6--6-.6-/6;696:6<6866656B6.(6.)6.*6.+6.,6.-6..6./6/ 6/!6/"6/#6/$6b6X6/\'6/(6/)6t616/,6/-6/.6H5  5 !5 "5 #5|5V5 &5 \'5 (5 )5 *5 +5 ,5 -5 .5 /5! 5!!5!"5!#5!$5O5U5!\'5!(5!)5!*5!+5!,5!-5!.5!/5" 5y5~5"#5"$5F5[5"\'5"(5")5"*5"+5",5"-5".5"/505#!5#"5##5#$5Y5Z5#\'5#(5#)5#*5#+5#,5#-5#.5#/5$ 5$!5$"5$#5$$5W5S5$\'5$(5$)5$*5$+5$,5$-5p5P5% 5%!5%"5%#5%$5%%5%&5%\'5%(5%)5%*5%+5%,5%-5%.5%/5& 5&!5&"5&#5&$5J5=5&\'5&(5&)5&*5&+5&,5&-5&.5&/5c5w5n5q5\'$5>5@5R5\'(5\')5d5r5l5_5\'.5\'/5f5v5e5o5u5?5D5(\'5L5()5G5x5m5}5(.5(/5K5\\5M5h5)$5C5A5E5N5))5s5a5z5]5).5)/5* 5*!5*"5*#5*$5^5i5*\'5*(5*)5**5*+5*,5*-5*.5*/5+ 5+!5+"5+#5+$5Q5k5+\'5+(5+)5+*5++5+,5+-5+.5+/5, 5,!5,"5,#5,$5T5`5,\'5,(5,)5,*5,+5,,5,-5,.5,/5- 5-!5-"5-#5-$5g5j5-\'5-(5-)5-*5-+5-,5--5-.5-/5;595:5<5856555B5.(5.)5.*5.+5.,5.-5..5./5/ 5/!5/"5/#5/$5b5X5/\'5/(5/)5t515/,5/-5/.5HB  B !B "B #B|BVB &B \'B (B )B *B +B ,B -B .B /B! B!!B!"B!#B!$BOBUB!\'B!(B!)B!*B!+B!,B!-B!.B!/B" ByB~B"#B"$BFB[B"\'B"(B")B"*B"+B",B"-B".B"/B0B#!B#"B##B#$BYBZB#\'B#(B#)B#*B#+B#,B#-B#.B#/B$ B$!B$"B$#B$$BWBSB$\'B$(B$)B$*B$+B$,B$-BpBP.> .>!.>".>#.>p>%.>&.>n!cywynyqy\'$y>y@yRy\'e!\'MU "U!"U~U#"U$yJy="UnUeU)H:H8H \'H "#"#!yUyy~Y\'.G(\\,h$(MLu-,P,E ++=#Um(M/)=1%/W$:(p9p/,P  P #P#)P%&PMPGPsP)$P,g|V ~$Hb !6|J \'V|F )W /W -?!$^UW!]%!+6!.T"O%")T"*J",V"-Q0V0>#"W#\'F#)Y#+F#--t 6$)T$G%$*C$H%%D%>C@%%dTl?l\'t H*!V()6xFKQCYCQCgAYsWa^QJ+, >"b+-?+.T,!6,*J,+^,b%-">g#t!O-$Fjg-+?-+C--V/"O/#WX>1>/-5Vj ?& G& -5 g&!" & /[!!U!#@!0&!)DyZ"*=#b&S &$]&$,5%$5&  =O=#+= )="5&!5&"$=J=%\'=%)t!"=q=))=* =+"=+/=/ic./MA\'=&rk?[l &fUuSmH*!ZA(t!S))D):&*0&ik*$=*\'Z*\'5*:&*8&+-=,#XT`,(=`X,-i- S-(@jX-)=-*`-,X-/D-/[-/`<A6`:@<`.+X/(D1%&H%cVc R "(c?c*+w /w|\'O,wSw$\'tOw,!w/B"+!n+B#"P*UqRq+-q,E#jq<q-"\'$ R#b\'$[\'$"*\'$"E$"BS"\'$(E$)/> !>&/@e@z@).@a@it!R\'$J"*/\'e!\'uBD$\'(d\')0t!(t!)t!*\'))P*!+\')ad-!dBt!,d.+r).t!-_$(_%,_+R-* _j\'6"\'/$Rt!t!.(0!(Z"o\'/o,\'oXu$L$+$?%#?%)?&+t!/?+ t" tyL \'LbG!"G#\'G\')G*\'G+.G-H*~GX(Q#x\'/m/ m/$}!"}@t"#(.,H*"P*FK&\'K-.t[\\O\\"\'\\-*\\-\'\\-.\\.-\\..\\8\\6M &M! M *M#*M$ M#,Mp)F))F!M#)M&\'M*\'MRM\'(MBM-\'M-)M- t"\'MgM;M-#hFhyM1t"(h!.MHh!-)0"hc)Y\'h*$h`h-.h/()$#!)$W)$$(CM/],t")A]A*/E##E#+E$#E$-EP)>!)>%)?\')D%t"*t"+)M\'t",))).sps-)s-,a>ana(/a+!a++z  ]c]&+t"-)9)).-!{{{{{I', r = "# /+012233.&.%44.$.!.\". .#&&'%(%'&)&.')%(&)'\"%(*//77&%) (()\")(!%$/+%''$&,%!& %$%/&#%#&\"&)!)-*%'-,&)+/%' '*(\"( -%)#*&-&+&',(,'\"(#$.'#'+)*/*($(!'!(+\"!),II $(-\"\"", i = new RegExp("[0-~]", "g"), a = function(e) {
                    var t = 2 * (e.charCodeAt(0) - 48);
                    return r.substring(t, t + 2)
                };
                (e = t.replace(i, a)) != t;) t = e;
            return e.replace(new RegExp("....", "g"), function(e) {
                return String.fromCharCode(e.charCodeAt(0) - 32 << 12 | e.charCodeAt(1) - 32 << 8 | e.charCodeAt(2) - 32 << 4 | e.charCodeAt(3) - 32)
            })
        }(),
        Bb = function(e) {
            function t(e) {
                return e && 1 === e.nodeType ? !0 : !1
            }
            for (var r = function(e) {
                    if (e && e.constructor === Array) {
                        for (var i = [], a = 0; a < e.length; a++) i.push(r(e[a]));
                        return i
                    }
                    if (e && "object" == typeof e) {
                        if (t(e)) return "<ELEMENT>";
                        var n = {};
                        for (var h in e) n[h] = r(e[h]);
                        return n
                    }
                    return "function" != typeof e ? e : void 0
                }, i = [], a = 0; a < e.Ii.length; a++) {
                var n = e.Ii[a];
                i.push(r(n))
            }
            JSON.stringify(i)
        },
        Cb = function(e) {
            this.ch = e, this.Ai = !1, this.Pd = !1, this.binary = [], this.Ig = 0
        };
    Cb.prototype.Eg = function(e, t) {
        if (!this.Ai)
            if (this.Ai = !0, this.ch.swfBinary) {
                this.Ig = this.ch.swfBinary.length;
                for (var r = 0; r < this.Ig; r++) this.binary[r] = 255 & this.ch.swfBinary.charCodeAt(r);
                this.Pd = !0, t(), this.onprogress = null
            } else {
                var i = new XMLHttpRequest;
                i.open("GET", e), i.overrideMimeType("text/plain; charset=x-user-defined"), i.onreadystatechange = function(e) {
                    return function() {
                        if (0 != i.status && 200 != i.status) return e.ch.onerror && e.ch.onerror("xhr failed"), void c("xhr failed status=" + i.status, i);
                        if (i.readyState >= 3) {
                            for (var t = i.responseText, r = t.length, a = e.Ig; r > a; a++) e.binary[a] = 255 & t.charCodeAt(a);
                            e.Ig = r, e.Pd = 4 == i.readyState, e.onprogress && e.onprogress(), e.Pd && (e.onprogress = null)
                        }
                    }
                }(this), this.onprogress = t, i.send(null)
            }
    };
    var Db = function(e) {
        this.ch = e, this.Pd = !1, this.Kg = new Cb(e), this.oh = 0, this.Bf = !1, this.Af = {}, this.Ii = [], this.loadingImageCount = 0, this.colorRange = e.colorLevels && e.colorLevels < 256 && 0 | Math.max(1, Math.min(256 / e.colorLevels, 256))
    };
    ! function() {
        Db.pe = function(e, t, r) {
            var i = e.Ig;
            if (20 > i) return 0;
            var a = 0,
                n = e.binary;
            if (n[a] != "F".charCodeAt(0) || n[a + 1] != "W".charCodeAt(0) || n[a + 2] != "S".charCodeAt(0)) {
                var h = "invalid swf signature: " + String.fromCharCode.apply(null, n.slice(0, 3));
                return r && r(h), c(h), 0
            }
            t.ji = "FWS", a += 3, t.jj = n[a], 4 != t.jj && d("unsupported flash version: " + t.jj), a++, t.Me = eb(n, a), a += 4;
            var s = [],
                o = pb(n, a, s);
            return t.nf = s, a += o, t.mf = n[a + 1], a += 2, t.df = cb(n, a), a += 2, a > i ? 0 : a
        }, Db.prototype.oe = function(e, t, r) {
            for (var i = this.Kg, a = i.Ig, n = i.binary, h = this.Ii; a > e;) {
                var s = cb(n, e),
                    o = 2;
                if (isNaN(s)) break;
                var c = s >> 6,
                    f = 63 & s;
                if (63 == f && (f = eb(n, e + 2), o += 4), isNaN(f)) break;
                if (o + f + e > a) break;
                var l = Dc[c] || Cc,
                    u = new l(n, e + o, f, c, t, this, r);
                h.push(u), e += f + o
            }
            return e
        }, Db.prototype.Eg = function(e, t) {
            this.onprogress = t && [t] || [], this.Kg.Eg(e, function(e) {
                return function() {
                    e.xh.apply(e, arguments)
                }
            }(this))
        }, Db.prototype.Ic = function(e) {
            this.Pd ? e() : this.onprogress.push(e)
        }, Db.prototype.xh = function() {
            var e = this.oh;
            if (!this.Bf) {
                var t = Db.pe(this.Kg, this.Af, this.ch.onerror);
                if (!t) return;
                e += t, this.Bf = !0
            }
            e = this.oe(e, this.ch.delayEval, this.colorRange), this.Pd = this.Kg.Pd, this.Pd && e != this.Kg.Ig && (d("parse warning: couldn't finish to tag all binary data"), this.ch.onerror && this.ch.onerror("broken binary")), this.oh = e;
            for (var t = this.onprogress.length, r = 0; t > r; r++) this.onprogress[r]();
            this.Pd && (this.onprogress = [])
        }
    }();
    var Eb = function() {};
    Eb.prototype.aj = g.Ub;
    var Fb = function(e, t, r, i, a) {
        wb(this, "Kd", function() {
            return fb(e, t)
        }, a)
    };
    Fb.prototype.aj = g.$b;
    var Gb = function(e, t, r, i, a) {
        wb(this, "name", function() {
            return ib(e, t)
        }, a)
    };
    Gb.prototype.aj = g.Vb;
    var Hb = function(e, t, r, i, a, n, h) {
        xb(this, function() {
            var i = {};
            i.wd = cb(e, t), i.re = cb(e, t + 2), i.Mg = [];
            var a = qb(e, t + 4, i.Mg),
                n = t + a + 4;
            return i.ie = null, r > n && (i.ie = [], rb(e, n, i.ie, h)), c("PlaceObjectTag is not supported"), i
        }, ["wd", "re", "Mg", "ie"], a)
    };
    Hb.prototype.aj = g.Xb;
    var Ib = function(e, t, r, i, a, n, h) {
        xb(this, function() {
            var r = {},
                i = e[t];
            r.Xg = 1 & i;
            var a, n = t + 1;
            return r.re = cb(e, n), n += 2, r.wd = null, 2 & i && (r.wd = cb(e, n), n += 2), r.Mg = null, 4 & i && (r.Mg = [], a = qb(e, n, r.Mg), n += a), r.ie = null, 8 & i && (r.ie = [], a = sb(e, n, r.ie, h), n += a), r.Ah = null, 16 & i && (r.Ah = cb(e, n), n += 2), r.name = null, 32 & i && (r.name = ib(e, n, r.name), n += r.name.length + 1), r.Ed = null, 64 & i && (r.Ed = cb(e, n)), r
        }, ["Xg", "re", "wd", "Mg", "ie", "Ah", "name", "Ed"], a)
    };
    Ib.prototype.aj = g.Yb;
    var Jb = function(e, t, r, i, a) {
        wb(this, "re", function() {
            return cb(e, t)
        }, a)
    };
    Jb.prototype.aj = g.Zb;
    var Kb = function() {};
    Kb.prototype.aj = g._b;
    var Lb = function(e, t, r) {
            for (var i = t;;) {
                var a = i - t,
                    n = e[i];
                if (i++, !n) {
                    var h = new Zb(e, i);
                    h.Id = 0, h._g = a, r.push(h);
                    break
                }
                var s = 0;
                if (128 > n) var o = Zb;
                else {
                    s = cb(e, i), i += 2;
                    var o = _b[n] || $b
                }
                var h = new o(e, i, s, n);
                i += s, h.Id = n, h._g = a, h.$g = i - t, r.push(h)
            }
            return i - t
        },
        Mb = function(e, t, r, i, a) {
            wb(this, "Gc", function() {
                var r = [];
                return Lb(e, t, r), r
            }, a)
        };
    Mb.prototype.aj = g.Tb;
    var Nb = function(e, t) {
            this.af = cb(e, t) + 1
        },
        Ob = function(e, t) {
            this.dj = ib(e, t), this.Ni = ib(e, t + this.dj.length + 1), c("ActionGetURL is not supported")
        },
        Pb = function(e, t) {
            this.af = cb(e, t), this.li = e[t + 2], c("ActionWaitForFrame is not supported")
        },
        Qb = function(e, t) {
            this.name = ib(e, t)
        },
        Rb = function(e, t) {
            this.ng = ib(e, t)
        },
        Sb = function(e, t, r) {
            for (var i = t, a = []; t + r > i;) {
                var n = e[i];
                switch (i++, n) {
                    case 0:
                        var h = kb(e, i);
                        a.push(h[0]), i += h[1];
                        break;
                    case 1:
                        a.push(tb(e, i)), i += 4;
                        break;
                    case 2:
                        a.push(null);
                        break;
                    case 3:
                        a.push(void 0);
                        break;
                    case 4:
                        a.push(e[i]), i++;
                        break;
                    case 5:
                        a.push(0 != e[i]), i++, d("action push: boolean is danger. change 1/0");
                        break;
                    case 6:
                        a.push(ub(e, i)), i += 8, d("action push: double value is not tested!");
                        break;
                    case 7:
                        a.push(eb(e, i)), i += 4;
                        break;
                    case 8:
                        a.push(e[i]), i++, d("action push: unsupported push recognized");
                        break;
                    case 9:
                        a.push(cb(e, i)), i += 2, d("action push: unsupported push recognized")
                }
            }
            this.fj = a
        },
        Tb = function(e, t) {
            this.ed = db(e, t)
        },
        Ub = function(e, t) {
            this.ed = db(e, t)
        },
        Vb = function() {},
        Wb = function(e, t) {
            var r = e[t];
            this.play = 1 & r, this.Xh = 2 & r, this.Xh && (this.Wh = cb(e, t + 1))
        },
        Xb = function(e, t) {
            this.li = e[t], c("ActionWaitForFrame2 is not supported")
        },
        Yb = function(e, t) {
            this.Gg = nb(e, t, 0), this.Hg = nb(e, t, 1), this.$h = ob(e, t, 6, 2)
        },
        Zb = function() {},
        $b = function(e, t, r, i) {
            d("action parser: not supported action code detected [" + i + "]")
        },
        _b = {
            129: Nb,
            131: Ob,
            138: Pb,
            139: Qb,
            140: Rb,
            150: Sb,
            153: Tb,
            157: Ub,
            158: Vb,
            159: Wb,
            141: Xb,
            154: Yb
        },
        ac = function(e, t, r, i) {
            var a = t,
                n = e[a];
            a++, 255 == n && (n = cb(e, a), a += 2);
            for (var h = 0, s = [], o = 0; n > o; o++) {
                var f = {},
                    l = e[a];
                a++, f.aj = l, 0 == l ? 3 == r ? (f.Kd = gb(e, a), a += 4) : (f.Kd = fb(e, a), a += 3) : 16 == l || 18 == l || 19 == l ? (f.Mg = [], f.zf = {
                    Bh: []
                }, h = qb(e, a, f.Mg), a += h, h = vb(e, a, r, f.zf), a += h, 19 == l && c("paser fillstyle: detected swf8 structure")) : 64 == l || 65 == l || 66 == l || 67 == l ? (f._c = cb(e, a), a += 2, f.Mg = [], h = qb(e, a, f.Mg), a += h) : c("parser fillstyle: unknown type:" + l), s.push(f)
            }
            return i.Qe = s, a - t
        },
        bc = function(e, t, r, i) {
            var a = t,
                n = e[a];
            a++, 255 == n && (n = cb(e, a), a += 2);
            for (var h = [], s = 0; n > s; s++) {
                var o = {};
                o.width = cb(e, a), a += 2, 3 == r ? (o.Kd = gb(e, a), a += 4) : (o.Kd = fb(e, a), a += 3), h.push(o)
            }
            return i.Bg = h, a - t
        },
        cc = function(e, t, r, i) {
            var a = t,
                n = 0;
            return n = ac(e, a, r, i), a += n, n = bc(e, a, r, i), a += n, n = dc(e, a, r, i, "hi"), a += n, a - t
        },
        dc = function(e, t, r, i, a) {
            var n, s = t,
                o = ob(e, s, 0, 4),
                c = ob(e, s, 4, 4);
            s++;
            var f;
            f = a ? [] : i;
            for (var l, u = 0; 0 != (l = ob(e, s, u, 6));) {
                var g = {};
                if (32 & l)
                    if (16 & l) {
                        g.aj = h.Ab, g.x = 0, g.y = 0, u += 2;
                        var b = ob(e, s, u, 4) + 2;
                        u += 4;
                        var p = nb(e, s, u);
                        if (u++, p) g.x = lb(ob(e, s, u, b), b), u += b, g.y = lb(ob(e, s, u, b), b), u += b;
                        else {
                            var d = nb(e, s, u);
                            u++, d ? (g.y = lb(ob(e, s, u, b), b), u += b) : (g.x = lb(ob(e, s, u, b), b), u += b)
                        }
                    } else {
                        g.aj = h.tb, u += 2;
                        var b = ob(e, s, u, 4) + 2;
                        u += 4, g.he = lb(ob(e, s, u, b), b), u += b, g.ke = lb(ob(e, s, u, b), b), u += b, g.Wc = lb(ob(e, s, u, b), b), u += b, g.Xc = lb(ob(e, s, u, b), b), u += b
                    }
                else {
                    g.aj = h.Bb, u++;
                    var v = nb(e, s, u);
                    u++;
                    var $ = nb(e, s, u);
                    u++;
                    var y = nb(e, s, u);
                    u++;
                    var j = nb(e, s, u);
                    u++;
                    var m = nb(e, s, u);
                    if (u++, m) {
                        var w = ob(e, s, u, 5);
                        u += 5;
                        var k = ob(e, s, u, w);
                        u += w;
                        var C = ob(e, s, u, w);
                        u += w, g.Ae = lb(k, w), g.Be = lb(C, w)
                    }
                    j && (g.Oe = ob(e, s, u, o), u += o), y && (g.Pe = ob(e, s, u, o), u += o), $ && (g.Ag = ob(e, s, u, c), u += c), v && (s += Math.ceil(u / 8), u = 0, n = ac(e, s, r, g), s += n, n = bc(e, s, r, g), s += n, o = ob(e, s, 0, 4), u += 4, c = ob(e, s, 4, 4), u += 4)
                }
                f.push(g)
            }
            return u += 6, a && (i[a] = f), s += Math.ceil(u / 8), s - t
        },
        ec = function(e, t, r, i, a) {
            this.id = cb(e, t), xb(this, function() {
                var r = {};
                r.dd = [];
                var i = pb(e, t + 2, r.dd);
                return cc(e, t + 2 + i, 1, r), r
            }, ["dd", "Qe", "Bg", "hi"], a)
        };
    ec.prototype.aj = g.Nb;
    var fc = function(e, t, r, i, a) {
        this.id = cb(e, t), xb(this, function() {
            var r = {};
            r.dd = [];
            var i = pb(e, t + 2, r.dd);
            return cc(e, t + 2 + i, 2, r), r
        }, ["dd", "Qe", "Bg", "hi"], a)
    };
    fc.prototype.aj = g.Ob;
    var gc = function(e, t, r, i, a) {
        this.id = cb(e, t), xb(this, function() {
            var r = {};
            r.dd = [];
            var i = pb(e, t + 2, r.dd);
            return cc(e, t + 2 + i, 3, r), r
        }, ["dd", "Qe", "Bg", "hi"], a)
    };
    gc.prototype.aj = g.Pb;
    var hc = function(e, t, r, i, a) {
        wb(this, "gg", function() {
            return e.slice(t, t + r)
        }, a), Ec.hg = this
    };
    hc.prototype.aj = g.Wb;
    var ic = function(e, t, r, i, a, n) {
        this.id = cb(e, t), wb(this, "img", function() {
            var i = e.slice(t + 2, t + r);
            return Ec.hg || d("DefineBits warning: not found JPEGTables"), Ec.$d(Ec.hg, i, n)
        }, !1)
    };
    ic.prototype.aj = g.Cb;
    var jc = function(e, t, r, i, a, n) {
        this.id = cb(e, t), wb(this, "img", function() {
            var i = e.slice(t + 2, t + r);
            return Ec.Xd(i, n)
        }, !1)
    };
    jc.prototype.aj = g.Db;
    var kc = function(e, t, r, i, a, n) {
        this.id = cb(e, t), wb(this, "img", function() {
            var i = t + 2,
                a = eb(e, i);
            i += 4;
            var h = e.slice(i, i + a);
            i += a;
            var s = e.slice(i, t + r);
            return Ec.Yd(h, s, n)
        }, !1)
    };
    kc.prototype.aj = g.Eb;
    var lc = function(e, t, r, i, a) {
        this.id = cb(e, t), xb(this, function() {
            var i = {},
                a = e[t + 2];
            i.width = cb(e, t + 3), i.height = cb(e, t + 5);
            var n = t + 7;
            if (3 == a) {
                var h = e[n] + 1;
                n++
            }
            var s;
            switch (a) {
                case 3:
                    s = 8;
                    break;
                case 4:
                    s = 16;
                    break;
                case 5:
                    s = 24
            }
            return i.img = Ec._d(e.slice(n, t + r), s, h, i.width, i.height, !1), i
        }, ["width", "height", "img"], a)
    };
    lc.prototype.aj = g.Fb;
    var mc = function(e, t, r, i, a) {
        this.id = cb(e, t), xb(this, function() {
            var i = {},
                a = e[t + 2];
            i.width = cb(e, t + 3), i.height = cb(e, t + 5);
            var n = t + 7;
            if (3 == a) {
                var h = e[n] + 1;
                n++
            }
            var s;
            switch (a) {
                case 3:
                    s = 8;
                    break;
                case 4:
                    s = 16;
                    break;
                case 5:
                    s = 32
            }
            return i.img = Ec._d(e.slice(n, t + r), s, h, i.width, i.height, !0), i
        }, ["width", "height", "img"], a)
    };
    mc.prototype.aj = g.Gb;
    var nc = function(e, t, r) {
            var i = t,
                a = e[i];
            i++;
            for (var n = 0; a > n; n++) {
                var h = {};
                h.xi = e[i], i++, h.ui = gb(e, i), i += 4, h.Ge = e[i], i++, h.De = gb(e, i), i += 4, r.push(h)
            }
            return i - t
        },
        oc = function(e, t, r) {
            var i = t,
                a = e[i];
            i++, 255 == a && (a = cb(e, i), i += 2);
            for (var n, h = [], s = 0; a > s; s++) {
                var o = {},
                    f = e[i];
                i++, o.aj = f, 0 == f ? (o.start = gb(e, i), i += 4, o.end = gb(e, i), i += 4) : 16 == f || 18 == f ? (o.start = [], o.end = [], o.zf = {
                    Bh: []
                }, n = qb(e, i, o.start), i += n, n = qb(e, i, o.end), i += n, n = nc(e, i, o.zf.Bh), i += n) : 64 == f || 65 == f || 66 == f || 67 == f ? (o._c = cb(e, i), i += 2, o.wi = [], o.Fe = [], n = qb(e, i, o.wi), i += n, n = qb(e, i, o.Fe), i += n) : c("DefineMorph parse: unknown type detected [" + f + "]"), h.push(o)
            }
            return r.Qe = h, i - t
        },
        pc = function(e, t, r) {
            var i = t,
                a = e[i];
            i++, 255 == a && (a = cb(e, i), i += 2);
            for (var n = [], h = 0; a > h; h++) {
                var s = {};
                s.zi = cb(e, i), i += 2, s.He = cb(e, i), i += 2, s.ui = gb(e, i), i += 4, s.De = gb(e, i), i += 4, n.push(s)
            }
            return r.Bg = n, i - t
        },
        qc = function(e, t, r, i, a) {
            this.id = cb(e, t), xb(this, function() {
                var r, i = {},
                    a = t + 2;
                return i.ti = [], r = pb(e, a, i.ti), a += r, i.Ce = [], r = pb(e, a, i.Ce), a += r, i._g = eb(e, a), a += 4, r = oc(e, a, i), a += r, r = pc(e, a, i), a += r, r = dc(e, a, 1, i, "vi"), a += r, r = dc(e, a, 1, i, "Ee"), a += r, i.vi.length - 1 == i.Ee.length && i.Ee[0] != h.Bb && i.Ee.unshift(i.vi[0]), i
            }, ["ti", "Ce", "_g", "Qe", "Bg", "vi", "Ee"], a)
        };
    qc.prototype.aj = g.Mb;
    var rc = function(e, t, r, i, a, n) {
            var h = t,
                s = e[h],
                o = 8 & s,
                c = 4 & s,
                f = 2 & s,
                l = 1 & s;
            h++, n.Ze = null, o && (n.Ze = cb(e, h), h += 2), n.Kd = null, c && (2 == r ? (n.Kd = gb(e, h), h += 4) : (n.Kd = fb(e, h), h += 3)), n.x = null, l && (n.x = db(e, h), h += 2), n.y = null, f && (n.y = db(e, h), h += 2), n.height = null, o && (n.height = cb(e, h), h += 2);
            var u = e[h];
            h++;
            for (var g = 0, b = [], p = 0; u > p; p++) {
                var d = {};
                d.Mf = ob(e, h, g, i), g += i, d.Kc = lb(ob(e, h, g, a), a), g += a, b.push(d)
            }
            return n.xf = b, h += Math.ceil(g / 8), h - t
        },
        sc = function(e, t, r, i, a) {
            this.id = cb(e, t), wb(this, "hi", function() {
                var r = t + 2,
                    i = cb(e, r);
                r += i, i /= 2;
                for (var a, n = [], h = 0; i > h; h++) {
                    var s = [];
                    a = dc(e, r, 1, s), r += a, n.push(s)
                }
                return n
            }, a)
        };
    sc.prototype.aj = g.Kb;
    var tc = function(e, t, r, i, a) {
        this.id = cb(e, t), xb(this, function() {
            var r, i = {},
                a = t + 2,
                n = e[a],
                h = 128 & n,
                s = 8 & n,
                o = 4 & n;
            a++, a++;
            var c = e[a];
            a++, a += c;
            var f = cb(e, a);
            a += 2, a += s ? 4 * (f + 1) : 2 * (f + 1);
            for (var l = [], u = 0; f > u; u++) {
                var g = [];
                r = dc(e, a, 1, g), a += r, l.push(g)
            }
            i.gi = l;
            for (var b = [], u = 0; f > u; u++) {
                var p = e[a];
                a++;
                var v = 0;
                if (o && (v = e[a], a++), 0 == v) b.push(p);
                else {
                    var $ = yb([v, p]);
                    b.push($.charCodeAt(0))
                }
            }
            if (i.Jd = b, i.Xe = null, i.Ye = null, i.$e = null, i.We = null, h) {
                i.Xe = cb(e, a), a += 2, i.Ye = cb(e, a), a += 2, i.$e = cb(e, a), a += 2;
                for (var y = [], u = 0; f > u; u++) y.push(cb(e, a)), a += 2;
                i.We = y;
                for (var u = 0; f > u; u++) {
                    var j = [];
                    r = pb(e, a, j), a += r
                }
                var m = cb(e, a);
                a += 2, 0 != m && d("DefineFont2 parse: wrong format detected")
            }
            return i
        }, ["gi", "Jd", "Xe", "Ye", "$e", "We"], a)
    };
    tc.prototype.aj = g.Lb;
    var uc = function(e, t, r, i, a) {
        this.id = cb(e, t), xb(this, function() {
            var r, i = {},
                a = t + 2;
            i.dd = [], r = pb(e, a, i.dd), a += r, i.Mg = [], r = qb(e, a, i.Mg), a += r;
            var n = e[a];
            a++;
            var h = e[a];
            a++;
            for (var s = []; e[a];) {
                var o = {};
                r = rc(e, a, 1, n, h, o), a += r, s.push(o)
            }
            return i.Bh = s, i
        }, ["dd", "Mg", "Bh"], a)
    };
    uc.prototype.aj = g.Rb;
    var vc = function(e, t, r, i, a) {
        this.id = cb(e, t), xb(this, function() {
            var r, i = {},
                a = t + 2;
            i.dd = [], r = pb(e, a, i.dd), a += r, i.Mg = [], r = qb(e, a, i.Mg), a += r;
            var n = e[a];
            a++;
            var h = e[a];
            a++;
            for (var s = []; e[a];) {
                var o = {};
                r = rc(e, a, 2, n, h, o), a += r, s.push(o)
            }
            return i.Bh = s, i
        }, ["dd", "Mg", "Bh"], a)
    };
    vc.prototype.aj = g.Sb;
    var wc = function(e, t, r, i, a) {
        this.id = cb(e, t), xb(this, function() {
            var r, i = {},
                a = t + 2;
            i.dd = [], r = pb(e, a, i.dd), a += r;
            var n = e[a],
                h = 128 & n;
            i.mj = !!(64 & n), i.multiline = !!(32 & n);
            var s = 4 & n,
                o = 2 & n,
                c = 1 & n;
            a++, n = e[a];
            var f = 128 & n,
                l = 32 & n;
            if (i.ej = !!(1 & n), a++, i.Ze = null, c && (i.Ze = cb(e, a), a += 2), f) {
                var u = ib(e, a);
                a += u.length
            }
            return i.height = null, c && (i.height = cb(e, a), a += 2), i.Kd = null, s && (i.Kd = gb(e, a), a += 4), i.Ng = null, o && (i.Ng = cb(e, a), a += 2), i.align = null, i.wg = null, i.Oh = null, i.Lf = null, i.vg = null, l && (i.align = e[a], a++, i.wg = cb(e, a), a += 2, i.Oh = cb(e, a), a += 2, i.Lf = cb(e, a), a += 2, i.vg = cb(e, a), a += 2), i.gj = ib(e, a), a += i.gj.length + 1, i.Rf = h ? kb(e, a)[0] : "", i
        }, ["dd", "mj", "multiline", "ej", "Ze", "height", "Kd", "Ng", "align", "wg", "Oh", "Lf", "vg", "gj", "Rf"], a)
    };
    wc.prototype.aj = g.Jb;
    var xc = function(e, t, r, i) {
            var a, n = t,
                h = e[t],
                s = 32 & h,
                o = 16 & h;
            return i.Ci = !!(8 & h), i.Bi = !!(4 & h), i.Di = !!(2 & h), i.Ei = !!(1 & h), n++, i.wd = cb(e, n), n += 2, i.re = cb(e, n), n += 2, i.Mg = [], a = qb(e, n, i.Mg), n += a, i.Ld = null, 2 == r && (i.Ld = [], a = rb(e, n, i.Ld), n += a, o && c("ButtonRecord parse error: hasFilterList is not supported in Flash 4"), s && c("ButtonRecord parse error: hasBlendMode is not supported in Flash 4")), n - t
        },
        yc = function(e, t, r) {
            var i = t;
            i += 2;
            var a = e[i];
            r.Hf = !!(128 & a), r.fh = !!(64 & a), r.gh = !!(32 & a), r.jh = !!(16 & a), r.kh = !!(8 & a), r.mh = !!(4 & a), r.lh = !!(2 & a), r.If = !!(1 & a), i++, a = e[i], r.ih = !!(1 & a), r.lg = ob(e, i, 0, 7), i++, r.Gc = [];
            var n = Lb(e, i, r.Gc);
            return i += n, i - t
        },
        zc = function(e, t, r, i, a) {
            this.id = cb(e, t), xb(this, function() {
                for (var r, i = {}, a = t + 2, n = []; e[a];) {
                    var h = {};
                    r = xc(e, a, 1, h), a += r, n.push(h)
                }
                return i.xd = n, a++, i.Gc = [], Lb(e, a, i.Gc), i
            }, ["xd", "Gc"], a)
        };
    zc.prototype.aj = g.Hb;
    var Ac = function(e, t, r, i, a) {
        this.id = cb(e, t), xb(this, function() {
            var r, i = {},
                a = t + 2;
            a++;
            var n = cb(e, a);
            a += 2;
            for (var h = []; e[a];) {
                var s = {};
                r = xc(e, a, 2, s), a += r, h.push(s)
            }
            i.xd = h, a++;
            var o = [];
            if (n) {
                var c;
                do {
                    var f = {};
                    c = cb(e, a), r = yc(e, a, f), a += r, o.push(f)
                } while (c)
            }
            return i.Gc = o, i
        }, ["xd", "Gc"], a)
    };
    Ac.prototype.aj = g.Ib;
    var Bc = function(e, t, r, i, a) {
        this.id = cb(e, t), xb(this, function() {
            var i = {},
                a = t + 2;
            i.df = cb(e, a), a += 2;
            for (var n = []; t + r > a;) {
                var h = cb(e, a),
                    s = 2,
                    o = h >> 6,
                    c = 63 & h;
                63 == c && (c = eb(e, a + 2), s += 4);
                var f = Dc[o] || Cc,
                    l = new f(e, a + s, c, o);
                n.push(l), a += c + s
            }
            return i.Ji = n, i
        }, ["df", "Ji"], a)
    };
    Bc.prototype.aj = g.Qb;
    var Cc = function(e, t, r, i) {
            d("parser: not supported tag detected [" + i + "]"), this.aj = i
        },
        Dc = {
            0: Eb,
            1: Kb,
            2: ec,
            4: Hb,
            6: ic,
            7: zc,
            8: hc,
            9: Fb,
            10: sc,
            11: uc,
            12: Mb,
            20: lc,
            21: jc,
            22: fc,
            26: Ib,
            28: Jb,
            32: gc,
            33: vc,
            34: Ac,
            35: kc,
            36: mc,
            37: wc,
            39: Bc,
            43: Gb,
            46: qc,
            48: tc
        },
        Ec = {
            hg: null,
            _d: function(e, t, r, i, a, n) {
                var h = new Zlib.Inflate(e).decompress(),
                    s = document.createElement("canvas");
                s.width = i, s.height = a;
                var o = s.getContext("2d"),
                    c = o.createImageData(i, a),
                    f = c.data,
                    l = 0,
                    u = 0;
                if (8 == t) {
                    var g = new Array(r),
                        b = new Array(r),
                        p = new Array(r),
                        d = new Array(r);
                    if (n)
                        if (this.usePremultipliedAlpha)
                            for (var v = 0; r > v; v++) g[v] = h[u++], b[v] = h[u++], p[v] = h[u++], d[v] = h[u++];
                        else
                            for (var v = 0; r > v; v++) {
                                var $ = h[u++],
                                    y = h[u++],
                                    j = h[u++],
                                    m = h[u++];
                                if (255 == m || 0 == m) g[v] = $, b[v] = y, p[v] = j;
                                else {
                                    var w = 255 / m;
                                    g[v] = ~~($ * w), b[v] = ~~(y * w), p[v] = ~~(j * w)
                                }
                                d[v] = m
                            } else
                                for (var v = 0; r > v; v++) g[v] = h[u++], b[v] = h[u++], p[v] = h[u++], d[v] = 255;
                    for (var k, C = 4 * Math.ceil(i / 4), A = h.slice ? h.slice(u) : h.subarray(u), M = 0; a > M; M++)
                        for (var I = 0, E = M * C; i > I; I++, E++) k = 255 & A[E], f[l++] = g[k], f[l++] = b[k], f[l++] = p[k], f[l++] = d[k]
                } else if (16 == t)
                    for (var S = i % 2 != 0, M = 0; a > M; M++) {
                        for (var I = 0; i > I; I++) {
                            var B = (h[u] << 8) + h[u + 1];
                            u += 2;
                            var F = (31744 & B) >>> 10,
                                D = (992 & B) >>> 5,
                                P = (31 & B) >>> 0;
                            f[l++] = (F << 3) + (F >>> 2), f[l++] = (D << 3) + (D >>> 2), f[l++] = (P << 3) + (P >>> 2), f[l++] = 255
                        }
                        S && (u += 2)
                    } else if (24 == t)
                        for (var M = 0; a > M; M++)
                            for (var I = 0; i > I; I++) u++, f[l++] = h[u++], f[l++] = h[u++], f[l++] = h[u++], f[l++] = 255;
                    else if (32 == t)
                    if (this.usePremultipliedAlpha)
                        for (var M = 0; a > M; M++)
                            for (var I = 0; i > I; I++) {
                                var m = h[u++];
                                f[l++] = h[u++], f[l++] = h[u++], f[l++] = h[u++], f[l++] = m
                            } else
                                for (var M = 0; a > M; M++)
                                    for (var I = 0; i > I; I++) {
                                        var m = h[u++];
                                        if (255 == m || 0 == m) f[l++] = h[u++], f[l++] = h[u++], f[l++] = h[u++];
                                        else
                                            for (var w = 255 / m, v = 0; 3 > v; v++) {
                                                var x = ~~(h[u++] * w);
                                                f[l++] = 255 > x ? x : 255
                                            }
                                        f[l++] = m
                                    }
                return o.putImageData(c, 0, 0), s
            },
            Xd: function(e, t) {
                var r = Ec.Td(e);
                return Ec.Zd(r, t)
            },
            Yd: function(e, t, r) {
                var i = Ec.Td(e),
                    a = new Zlib.Inflate(t).decompress(),
                    n = Ec.Uc(i),
                    h = document.createElement("img"),
                    s = document.createElement("canvas");
                s.width = 0, s.height = 0;
                var o = this.usePremultipliedAlpha;
                return h.onload = function() {
                    var e = h.width,
                        t = h.height;
                    s.width = e, s.height = t;
                    var i = s.getContext("2d");
                    i.drawImage(h, 0, 0);
                    var n, c = i.getImageData(0, 0, e, t),
                        f = c.data,
                        l = e * t;
                    if (o)
                        for (var u = 0, g = 3; l > u; u++, g += 4) n = f[g] = a[u], 0 == n ? f[g - 1] = f[g - 2] = f[g - 3] = 0 : 255 != n && (n < f[g - 1] && (f[g - 1] = n), n < f[g - 2] && (f[g - 2] = n), n < f[g - 3] && (f[g - 3] = n));
                    else
                        for (var b, u = 0, g = 3; l > u; u++, g += 4) n = f[g] = a[u], 255 != n && 0 != n && (b = 255 / n, f[g - 1] = ~~(f[g - 1] * b), f[g - 2] = ~~(f[g - 2] * b), f[g - 3] = ~~(f[g - 3] * b));
                    i.putImageData(c, 0, 0), --r.loadingImageCount
                }, h.src = "data:image/jpeg;base64," + n, ++r.loadingImageCount, setTimeout(function() {}, 0), s
            },
            $d: function(e, t, r) {
                var i;
                return null == e || e.length < 4 ? i = t : (e = e.gg, i = e.slice(0, e.length - 2).concat(t.slice(2))), Ec.Zd(i, r)
            },
            Zd: function(e, t) {
                var r = document.createElement("img");
                return r.onload = function() {
                    --t.loadingImageCount
                }, r.src = "data:image/jpeg;base64," + Ec.Uc(e), ++t.loadingImageCount, r
            },
            Td: function(e) {
                var t;
                if (255 == e[0] && 217 == e[1] && 255 == e[2] && 216 == e[3]) t = e.slice(4);
                else {
                    t = [];
                    var r = 0;
                    if (255 == e[r] && 216 == e[r + 1])
                        for (t = t.concat(e.slice(r, r + 2)), r += 2; r < e.length;)
                            if (255 == e[r]) {
                                if (217 == e[r + 1] && 255 == e[r + 2] && 216 == e[r + 3]) {
                                    r += 4, t = t.concat(e.slice(r));
                                    break
                                }
                                if (218 == e[r + 1]) {
                                    t = t.concat(e.slice(r));
                                    break
                                }
                                var i = (e[r + 2] << 8) + (255 & e[r + 3]);
                                t = t.concat(e.slice(r, r + i + 2)), r += i + 2
                            } else c("JPEG marker invalid: i=" + r);
                    else c("SOI missing")
                }
                return t
            },
            Uc: function(e) {
                for (var t = [], r = 1e4, i = Math.ceil(e.length / r), a = 0; i > a; a++) t.push(String.fromCharCode.apply(null, e.slice(a * r, Math.min((a + 1) * r, e.length))));
                return btoa(t.join(""))
            }
        };
    Ec.__defineGetter__("usePremultipliedAlpha", function() {
            delete this.usePremultipliedAlpha;
            var e = document.createElement("canvas");
            e.width = e.height = 1;
            var t = e.getContext("2d"),
                r = t.createImageData(1, 1),
                i = r.data;
            return i[0] = i[3] = 128, t.putImageData(r, 0, 0), this.usePremultipliedAlpha = 255 == t.getImageData(0, 0, 1, 1).data[0]
        }),
        function() {
            function e(e, t, r) {
                e = e.split("."), r = r || h, !(e[0] in r) && r.execScript && r.execScript("var " + e[0]);
                for (var i; e.length && (i = e.shift());) e.length || void 0 === t ? r = r[i] ? r[i] : r[i] = {} : r[i] = t
            }

            function t(e) {
                var t, r, i, a, n, h, s, c, f, l = e.length,
                    u = 0,
                    g = Number.POSITIVE_INFINITY;
                for (c = 0; l > c; ++c) e[c] > u && (u = e[c]), e[c] < g && (g = e[c]);
                for (t = 1 << u, r = new(o ? Uint32Array : Array)(t), i = 1, a = 0, n = 2; u >= i;) {
                    for (c = 0; l > c; ++c)
                        if (e[c] === i) {
                            for (h = 0, s = a, f = 0; i > f; ++f) h = h << 1 | 1 & s, s >>= 1;
                            for (f = h; t > f; f += n) r[f] = i << 16 | c;
                            ++a
                        }++ i, a <<= 1, n <<= 1
                }
                return [r, u, g]
            }

            function r(e, t) {
                this.length = e, this.u = t
            }

            function i(e) {
                switch (!0) {
                    case 3 === e:
                        return [257, e - 3, 0];
                    case 4 === e:
                        return [258, e - 4, 0];
                    case 5 === e:
                        return [259, e - 5, 0];
                    case 6 === e:
                        return [260, e - 6, 0];
                    case 7 === e:
                        return [261, e - 7, 0];
                    case 8 === e:
                        return [262, e - 8, 0];
                    case 9 === e:
                        return [263, e - 9, 0];
                    case 10 === e:
                        return [264, e - 10, 0];
                    case 12 >= e:
                        return [265, e - 11, 1];
                    case 14 >= e:
                        return [266, e - 13, 1];
                    case 16 >= e:
                        return [267, e - 15, 1];
                    case 18 >= e:
                        return [268, e - 17, 1];
                    case 22 >= e:
                        return [269, e - 19, 2];
                    case 26 >= e:
                        return [270, e - 23, 2];
                    case 30 >= e:
                        return [271, e - 27, 2];
                    case 34 >= e:
                        return [272, e - 31, 2];
                    case 42 >= e:
                        return [273, e - 35, 3];
                    case 50 >= e:
                        return [274, e - 43, 3];
                    case 58 >= e:
                        return [275, e - 51, 3];
                    case 66 >= e:
                        return [276, e - 59, 3];
                    case 82 >= e:
                        return [277, e - 67, 4];
                    case 98 >= e:
                        return [278, e - 83, 4];
                    case 114 >= e:
                        return [279, e - 99, 4];
                    case 130 >= e:
                        return [280, e - 115, 4];
                    case 162 >= e:
                        return [281, e - 131, 5];
                    case 194 >= e:
                        return [282, e - 163, 5];
                    case 226 >= e:
                        return [283, e - 195, 5];
                    case 257 >= e:
                        return [284, e - 227, 5];
                    case 258 === e:
                        return [285, e - 258, 0];
                    default:
                        throw "invalid length: " + e
                }
            }

            function a(e, t) {
                switch (this.k = [], this.f = 32768, this.e = this.h = this.b = this.n = 0, this.input = o ? new Uint8Array(e) : e, this.p = !1, this.i = k, this.I = !1, t && (t.Mf && (this.b = t.Mf), t.L && (this.f = t.f), t.i) && (this.i = t.i), this.i) {
                    case w:
                        this.a = 32768, this.c = new(o ? Uint8Array : Array)(32768 + this.f + 258);
                        break;
                    case k:
                        this.a = 0, this.c = new(o ? Uint8Array : Array)(this.f), this.g = this.A, this.q = this.v, this.l = this.z;
                        break;
                    default:
                        throw Error("invalid inflate mode")
                }
            }

            function n(e, t) {
                var r, i, n;
                switch (this.input = e, this.b = 0, t && (t.Mf && (this.b = t.Mf), t.f && (r = t.f), t.o) && (this.o = t.o), i = e[this.b++], n = e[this.b++], 15 & i) {
                    case et:
                        this.method = et;
                        break;
                    default:
                        throw Error("unsupported compression method")
                }
                if (0 !== ((i << 8) + n) % 31) throw Error("invalid fcheck flag:" + ((i << 8) + n) % 31);
                if (32 & n) throw Error("fdict flag is not supported");
                this.H = new a(e, {
                    Mf: this.b,
                    f: r
                })
            }
            var h = this;
            Math.floor(2147483648 * Math.random()).toString(36);
            var s, o = "function" == typeof Uint8Array && "function" == typeof Uint16Array && "function" == typeof Uint32Array,
                c = new(o ? Uint8Array : Array)(256);
            for (s = 0; 256 > s; ++s) {
                for (var f = c, l = s, u = s, g = u, b = 7, u = u >>> 1; u; u >>>= 1) g <<= 1, g |= 1 & u, --b;
                f[l] = (g << b & 255) >>> 0
            }
            var p = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
            o && new Uint32Array(p);
            var d, v = [];
            for (d = 0; 288 > d; d++) switch (!0) {
                case 143 >= d:
                    v.push([d + 48, 8]);
                    break;
                case 255 >= d:
                    v.push([d - 144 + 400, 9]);
                    break;
                case 279 >= d:
                    v.push([d - 256 + 0, 7]);
                    break;
                case 287 >= d:
                    v.push([d - 280 + 192, 8]);
                    break;
                default:
                    throw "invalid literal: " + d
            }
            var $, y, j = [];
            for ($ = 3; 258 >= $; $++) y = i($), j[$] = y[2] << 24 | y[1] << 16 | y[0];
            var m = o ? new Uint32Array(j) : j;
            r.prototype.B = function(e) {
                switch (!0) {
                    case 1 === e:
                        e = [0, e - 1, 0];
                        break;
                    case 2 === e:
                        e = [1, e - 2, 0];
                        break;
                    case 3 === e:
                        e = [2, e - 3, 0];
                        break;
                    case 4 === e:
                        e = [3, e - 4, 0];
                        break;
                    case 6 >= e:
                        e = [4, e - 5, 1];
                        break;
                    case 8 >= e:
                        e = [5, e - 7, 1];
                        break;
                    case 12 >= e:
                        e = [6, e - 9, 2];
                        break;
                    case 16 >= e:
                        e = [7, e - 13, 2];
                        break;
                    case 24 >= e:
                        e = [8, e - 17, 3];
                        break;
                    case 32 >= e:
                        e = [9, e - 25, 3];
                        break;
                    case 48 >= e:
                        e = [10, e - 33, 4];
                        break;
                    case 64 >= e:
                        e = [11, e - 49, 4];
                        break;
                    case 96 >= e:
                        e = [12, e - 65, 5];
                        break;
                    case 128 >= e:
                        e = [13, e - 97, 5];
                        break;
                    case 192 >= e:
                        e = [14, e - 129, 6];
                        break;
                    case 256 >= e:
                        e = [15, e - 193, 6];
                        break;
                    case 384 >= e:
                        e = [16, e - 257, 7];
                        break;
                    case 512 >= e:
                        e = [17, e - 385, 7];
                        break;
                    case 768 >= e:
                        e = [18, e - 513, 8];
                        break;
                    case 1024 >= e:
                        e = [19, e - 769, 8];
                        break;
                    case 1536 >= e:
                        e = [20, e - 1025, 9];
                        break;
                    case 2048 >= e:
                        e = [21, e - 1537, 9];
                        break;
                    case 3072 >= e:
                        e = [22, e - 2049, 10];
                        break;
                    case 4096 >= e:
                        e = [23, e - 3073, 10];
                        break;
                    case 6144 >= e:
                        e = [24, e - 4097, 11];
                        break;
                    case 8192 >= e:
                        e = [25, e - 6145, 11];
                        break;
                    case 12288 >= e:
                        e = [26, e - 8193, 12];
                        break;
                    case 16384 >= e:
                        e = [27, e - 12289, 12];
                        break;
                    case 24576 >= e:
                        e = [28, e - 16385, 13];
                        break;
                    case 32768 >= e:
                        e = [29, e - 24577, 13];
                        break;
                    default:
                        throw "invalid distance"
                }
                return e
            }, r.prototype.M = function() {
                var e, t = this.u,
                    r = [],
                    i = 0;
                return e = m[this.length], r[i++] = 65535 & e, r[i++] = e >> 16 & 255, r[i++] = e >> 24, e = this.B(t), r[i++] = e[0], r[i++] = e[1], r[i++] = e[2], r
            };
            var w = 0,
                k = 1,
                C = {
                    K: w,
                    J: k
                };
            a.prototype.m = function() {
                for (; !this.p;) this.C();
                return this.q()
            };
            var A, M, I = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                E = o ? new Uint16Array(I) : I,
                S = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
                B = o ? new Uint16Array(S) : S,
                F = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
                D = o ? new Uint8Array(F) : F,
                P = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
                x = o ? new Uint16Array(P) : P,
                L = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                _ = o ? new Uint8Array(L) : L,
                G = new(o ? Uint8Array : Array)(288);
            for (A = 0, M = G.length; M > A; ++A) G[A] = 143 >= A ? 8 : 255 >= A ? 9 : 279 >= A ? 7 : 8;
            var Q, N, R = t(G),
                O = new(o ? Uint8Array : Array)(30);
            for (Q = 0, N = O.length; N > Q; ++Q) O[Q] = 5;
            var U = t(O);
            a.prototype.C = function() {
                var e = this.d(3);
                switch (1 & e && (this.p = !0), e >>>= 1) {
                    case 0:
                        this.G();
                        break;
                    case 1:
                        this.F();
                        break;
                    case 2:
                        this.D();
                        break;
                    default:
                        throw Error("unknown BTYPE: " + e)
                }
            }, a.prototype.d = function(e) {
                for (var t, r = this.h, i = this.e, a = this.input, n = this.b; e > i;) {
                    if (t = a[n++], void 0 === t) throw Error("input buffer is broken");
                    r |= t << i, i += 8
                }
                return t = r & (1 << e) - 1, this.h = r >>> e, this.e = i - e, this.b = n, t
            }, a.prototype.j = function(e) {
                for (var t, r = this.h, i = this.e, a = this.input, n = this.b, h = e[0], e = e[1]; e > i;) {
                    if (t = a[n++], void 0 === t) throw Error("input buffer is broken");
                    r |= t << i, i += 8
                }
                return a = h[r & (1 << e) - 1], h = a >>> 16, this.h = r >> h, this.e = i - h, this.b = n, 65535 & a
            }, a.prototype.G = function() {
                var e, t, r, i = this.input,
                    a = this.b,
                    n = this.c,
                    h = this.a,
                    s = n.length;
                if (this.e = this.h = 0, e = i[a++], void 0 === e) throw Error("invalid uncompressed block header: LEN (first byte)");
                if (t = e, e = i[a++], void 0 === e) throw Error("invalid uncompressed block header: LEN (second byte)");
                if (t |= e << 8, e = i[a++], void 0 === e) throw Error("invalid uncompressed block header: NLEN (first byte)");
                if (r = e, e = i[a++], void 0 === e) throw Error("invalid uncompressed block header: NLEN (second byte)");
                if (t === ~(r | e << 8)) throw Error("invalid uncompressed block header: length verify");
                if (a + t > i.length) throw Error("input buffer is broken");
                switch (this.i) {
                    case w:
                        for (; h + t >= n.length;) {
                            if (e = s - h, t -= e, o) n.set(i.subarray(a, a + e), h), h += e, a += e;
                            else
                                for (; e--;) n[h++] = i[a++];
                            this.a = h, n = this.g(), h = this.a
                        }
                        break;
                    case k:
                        for (; h + t > n.length;) n = this.g({
                            s: 2
                        });
                        break;
                    default:
                        throw Error("invalid inflate mode")
                }
                if (o) n.set(i.subarray(a, a + t), h), h += t, a += t;
                else
                    for (; t--;) n[h++] = i[a++];
                this.b = a, this.a = h, this.c = n
            }, a.prototype.F = function() {
                this.l(R, U)
            }, a.prototype.D = function() {
                function e(e, t, r) {
                    for (var i, a, n = 0, n = 0; e > n;) switch (i = this.j(t)) {
                        case 16:
                            for (i = 3 + this.d(2); i--;) r[n++] = a;
                            break;
                        case 17:
                            for (i = 3 + this.d(3); i--;) r[n++] = 0;
                            a = 0;
                            break;
                        case 18:
                            for (i = 11 + this.d(7); i--;) r[n++] = 0;
                            a = 0;
                            break;
                        default:
                            a = r[n++] = i
                    }
                    return r
                }
                var r, i = this.d(5) + 257,
                    a = this.d(5) + 1,
                    n = this.d(4) + 4,
                    h = new(o ? Uint8Array : Array)(E.length);
                for (r = r = 0; n > r; ++r) h[E[r]] = this.d(3);
                n = t(h), h = new(o ? Uint8Array : Array)(i), r = new(o ? Uint8Array : Array)(a), this.l(t(e.call(this, i, n, h)), t(e.call(this, a, n, r)))
            }, a.prototype.l = function(e, t) {
                var r = this.c,
                    i = this.a;
                this.r = e, this.w = t;
                for (var a, n, h, s = r.length - 258; 256 !== (a = this.j(e));)
                    if (256 > a) i >= s && (this.a = i, r = this.g(), i = this.a), r[i++] = a;
                    else
                        for (a -= 257, h = B[a], 0 < D[a] && (h += this.d(D[a])), a = this.j(t), n = x[a], 0 < _[a] && (n += this.d(_[a])), i >= s && (this.a = i, r = this.g(), i = this.a); h--;) r[i] = r[i++ - n];
                for (; 8 <= this.e;) this.e -= 8, this.b--;
                this.a = i
            }, a.prototype.z = function(e, t) {
                var r = this.c,
                    i = this.a;
                this.r = e, this.w = t;
                for (var a, n, h, s = r.length; 256 !== (a = this.j(e));)
                    if (256 > a) i === s && (r = this.g(), s = r.length), r[i++] = a;
                    else
                        for (a -= 257, h = B[a], 0 < D[a] && (h += this.d(D[a])), a = this.j(t), n = x[a], 0 < _[a] && (n += this.d(_[a])), i + h >= s && (r = this.g(), s = r.length); h--;) r[i] = r[i++ - n];
                for (; 8 <= this.e;) this.e -= 8, this.b--;
                this.a = i
            }, a.prototype.g = function() {
                var e, t, r = new(o ? Uint8Array : Array)(this.a - 32768),
                    i = this.a - 32768,
                    a = this.c;
                if (o) r.set(a.subarray(32768, r.length));
                else
                    for (e = 0, t = r.length; t > e; ++e) r[e] = a[e + 32768];
                if (this.k.push(r), this.n += r.length, o) a.set(a.subarray(i, i + 32768));
                else
                    for (e = 0; 32768 > e; ++e) a[e] = a[i + e];
                return this.a = 32768, a
            }, a.prototype.A = function(e) {
                var t = this.input.length / this.b + 1 | 0,
                    r = this.input,
                    i = this.c;
                return e && ("number" == typeof e.s && (t = e.s), "number" == typeof e.t && (t += e.t)), 2 > t ? (e = (r.length - this.b) / this.r[2], e = 258 * (e / 2) | 0, e = e < i.length ? i.length + e : i.length << 1) : e = i.length * t, o ? (e = new Uint8Array(e), e.set(i)) : e = i, this.c = e
            }, a.prototype.q = function() {
                var e, t, r, i, a, n = 0,
                    h = this.c,
                    s = this.k,
                    c = new(o ? Uint8Array : Array)(this.n + (this.a - 32768));
                if (0 === s.length) return o ? this.c.subarray(32768, this.a) : this.c.slice(32768, this.a);
                for (t = 0, r = s.length; r > t; ++t)
                    for (e = s[t], i = 0, a = e.length; a > i; ++i) c[n++] = e[i];
                for (t = 32768, r = this.a; r > t; ++t) c[n++] = h[t];
                return this.k = [], this.buffer = c
            }, a.prototype.v = function() {
                var e, t = this.a;
                return this.I ? o ? (e = new Uint8Array(t), e.set(this.c.subarray(0, t))) : e = this.c.slice(0, t) : e = o ? this.c.subarray(0, t) : this.c.slice(0, t), this.buffer = e
            }, n.prototype.m = function() {
                var e, t = this.input;
                if (e = this.H.m(), this.o) {
                    var t = t[this.b++] << 24 | t[this.b++] << 16 | t[this.b++] << 8 | t[this.b++],
                        r = e;
                    if ("string" == typeof r) {
                        var i, a, r = r.split("");
                        for (i = 0, a = r.length; a > i; i++) r[i] = (255 & r[i].charCodeAt(0)) >>> 0
                    }
                    i = 1, a = 0;
                    for (var n, h = r.length, s = 0; h > 0;) {
                        n = h > 1024 ? 1024 : h, h -= n;
                        do i += r[s++], a += i; while (--n);
                        i %= 65521, a %= 65521
                    }
                    if (t !== (a << 16 | i) >>> 0) throw Error("invalid adler-32 checksum")
                }
                return e
            }, e("Zlib.Inflate", n, void 0), e("Zlib.Inflate.BufferType", C, void 0), e("Zlib.Inflate.prototype.decompress", n.prototype.m, void 0);
            var T = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
            o && new Uint16Array(T);
            var J = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258];
            o && new Uint16Array(J);
            var H = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0];
            o && new Uint8Array(H);
            var K = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
            o && new Uint16Array(K);
            var q = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
            o && new Uint8Array(q);
            var V, W, X = new(o ? Uint8Array : Array)(288);
            for (V = 0, W = X.length; W > V; ++V) X[V] = 143 >= V ? 8 : 255 >= V ? 9 : 279 >= V ? 7 : 8;
            t(X);
            var Z, Y, z = new(o ? Uint8Array : Array)(30);
            for (Z = 0, Y = z.length; Y > Z; ++Z) z[Z] = 5;
            t(z);
            var et = 8
        }.call(new Function("return this")())
}();