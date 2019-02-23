if (function() {
        var t, e, i, a, s, n = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            o = [].indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        e = function() {
            function t() {}
            return t.prototype.extend = function(t, e) {
                var i, a;
                for (i in e) a = e[i], null == t[i] && (t[i] = a);
                return t
            }, t.prototype.isMobile = function(t) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
            }, t.prototype.addEvent = function(t, e, i) {
                return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
            }, t.prototype.removeEvent = function(t, e, i) {
                return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e]
            }, t.prototype.innerHeight = function() {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, t
        }(), i = this.WeakMap || this.MozWeakMap || (i = function() {
            function t() {
                this.keys = [], this.values = []
            }
            return t.prototype.get = function(t) {
                var e, i, a, s, n;
                for (e = a = 0, s = (n = this.keys).length; s > a; e = ++a)
                    if (i = n[e], i === t) return this.values[e]
            }, t.prototype.set = function(t, e) {
                var i, a, s, n, o;
                for (i = s = 0, n = (o = this.keys).length; n > s; i = ++s)
                    if (a = o[i], a === t) return void(this.values[i] = e);
                return this.keys.push(t), this.values.push(e)
            }, t
        }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
            function t() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return t.notSupported = !0, t.prototype.observe = function() {}, t
        }()), a = this.getComputedStyle || function(t) {
            return this.getPropertyValue = function(e) {
                var i;
                return "float" === e && (e = "styleFloat"), s.test(e) && e.replace(s, function(t, e) {
                    return e.toUpperCase()
                }), (null != (i = t.currentStyle) ? i[e] : void 0) || null
            }, this
        }, s = /(\-([a-z]){1})/g, this.WOW = function() {
            function s(t) {
                null == t && (t = {}), this.scrollCallback = n(this.scrollCallback, this), this.scrollHandler = n(this.scrollHandler, this), this.start = n(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new i
            }
            return s.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null
            }, s.prototype.init = function() {
                var t;
                return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, s.prototype.start = function() {
                var e, i, a, s, n;
                if (this.stopped = !1, this.boxes = function() {
                        var t, i, a, s;
                        for (s = [], t = 0, i = (a = this.element.querySelectorAll("." + this.config.boxClass)).length; i > t; t++) e = a[t], s.push(e);
                        return s
                    }.call(this), this.all = function() {
                        var t, i, a, s;
                        for (s = [], t = 0, i = (a = this.boxes).length; i > t; t++) e = a[t], s.push(e);
                        return s
                    }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (s = this.boxes, i = 0, a = s.length; a > i; i++) e = s[i], this.applyStyle(e, !0);
                return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t((n = this, function(t) {
                    var e, i, a, s, o;
                    for (o = [], a = 0, s = t.length; s > a; a++) i = t[a], o.push(function() {
                        var t, a, s, n;
                        for (n = [], t = 0, a = (s = i.addedNodes || []).length; a > t; t++) e = s[t], n.push(this.doSync(e));
                        return n
                    }.call(n));
                    return o
                })).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, s.prototype.stop = function() {
                return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
            }, s.prototype.sync = function() {
                return t.notSupported ? this.doSync(this.element) : void 0
            }, s.prototype.doSync = function(t) {
                var e, i, a, s, n;
                if (null == t && (t = this.element), 1 === t.nodeType) {
                    for (n = [], i = 0, a = (s = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; a > i; i++) e = s[i], o.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), n.push(this.scrolled = !0)) : n.push(void 0);
                    return n
                }
            }, s.prototype.show = function(t) {
                return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback ? this.config.callback(t) : void 0
            }, s.prototype.applyStyle = function(t, e) {
                var i, a, s, n;
                return a = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), s = t.getAttribute("data-wow-iteration"), this.animate((n = this, function() {
                    return n.customStyle(t, e, a, i, s)
                }))
            }, s.prototype.animate = "requestAnimationFrame" in window ? function(t) {
                return window.requestAnimationFrame(t)
            } : function(t) {
                return t()
            }, s.prototype.resetStyle = function() {
                var t, e, i, a, s;
                for (s = [], e = 0, i = (a = this.boxes).length; i > e; e++) t = a[e], s.push(t.style.visibility = "visible");
                return s
            }, s.prototype.customStyle = function(t, e, i, a, s) {
                return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
                    animationDuration: i
                }), a && this.vendorSet(t.style, {
                    animationDelay: a
                }), s && this.vendorSet(t.style, {
                    animationIterationCount: s
                }), this.vendorSet(t.style, {
                    animationName: e ? "none" : this.cachedAnimationName(t)
                }), t
            }, s.prototype.vendors = ["moz", "webkit"], s.prototype.vendorSet = function(t, e) {
                var i, a, s, n;
                n = [];
                for (i in e) a = e[i], t["" + i] = a, n.push(function() {
                    var e, n, o, r;
                    for (r = [], e = 0, n = (o = this.vendors).length; n > e; e++) s = o[e], r.push(t["" + s + i.charAt(0).toUpperCase() + i.substr(1)] = a);
                    return r
                }.call(this));
                return n
            }, s.prototype.vendorCSS = function(t, e) {
                var i, s, n, o, r, l;
                for (i = (s = a(t)).getPropertyCSSValue(e), o = 0, r = (l = this.vendors).length; r > o; o++) n = l[o], i = i || s.getPropertyCSSValue("-" + n + "-" + e);
                return i
            }, s.prototype.animationName = function(t) {
                var e;
                try {
                    e = this.vendorCSS(t, "animation-name").cssText
                } catch (i) {
                    e = a(t).getPropertyValue("animation-name")
                }
                return "none" === e ? "" : e
            }, s.prototype.cacheAnimationName = function(t) {
                return this.animationNameCache.set(t, this.animationName(t))
            }, s.prototype.cachedAnimationName = function(t) {
                return this.animationNameCache.get(t)
            }, s.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, s.prototype.scrollCallback = function() {
                var t;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                    var e, i, a, s;
                    for (s = [], e = 0, i = (a = this.boxes).length; i > e; e++) t = a[e], t && (this.isVisible(t) ? this.show(t) : s.push(t));
                    return s
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, s.prototype.offsetTop = function(t) {
                for (var e; void 0 === t.offsetTop;) t = t.parentNode;
                for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
                return e
            }, s.prototype.isVisible = function(t) {
                var e, i, a, s, n;
                return i = t.getAttribute("data-wow-offset") || this.config.offset, s = (n = window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, e = (a = this.offsetTop(t)) + t.clientHeight, s >= a && e >= n
            }, s.prototype.util = function() {
                return null != this._util ? this._util : this._util = new e
            }, s.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, s
        }()
    }.call(this), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

function getUrlPath() {
    var t, e = [];
    return t = (e = window.location.href.toString().split("//"))[1].toString().split("/"), e[0] + "//" + t[0] + "/general-insurance/"
}

function getUrlPath1() {
    var t, e = [];
    return t = (e = window.location.href.toString().split("//"))[1].toString().split("/"), e[0] + "//" + t[0] + "/"
}! function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery),
function(t) {
    "use strict";
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            a = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        return setTimeout(function() {
            i || t(a).trigger(t.support.transition.end)
        }, e), this
    }, t(function() {
        t.support.transition = function() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in e)
                if (void 0 !== t.style[i]) return {
                    end: e[i]
                };
            return !1
        }(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        i = function(i) {
            t(i).on("click", e, this.close)
        };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        function a() {
            o.detach().trigger("closed.bs.alert").remove()
        }
        var s = t(this),
            n = s.attr("data-target");
        n || (n = (n = s.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var o = t(n);
        e && e.preventDefault(), o.length || (o = s.closest(".alert")), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", a).emulateTransitionEnd(i.TRANSITION_DURATION) : a())
    };
    var a = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var a = t(this),
                s = a.data("bs.alert");
            s || a.data("bs.alert", s = new i(this)), "string" == typeof e && s[e].call(a)
        })
    }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = a, this
    }, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var a = t(this),
                s = a.data("bs.button"),
                n = "object" == typeof e && e;
            s || a.data("bs.button", s = new i(this, n)), "toggle" == e ? s.toggle() : e && s.setState(e)
        })
    }
    var i = function(e, a) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, a), this.isLoading = !1
    };
    i.VERSION = "3.3.4", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) {
        var i = "disabled",
            a = this.$element,
            s = a.is("input") ? "val" : "html",
            n = a.data();
        e += "Text", null == n.resetText && a.data("resetText", a[s]()), setTimeout(t.proxy(function() {
            a[s](null == n[e] ? this.options[e] : n[e]), "loadingText" == e ? (this.isLoading = !0, a.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, a.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        t && this.$element.toggleClass("active")
    };
    var a = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = a, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var a = t(i.target);
        a.hasClass("btn") || (a = a.closest(".btn")), e.call(a, "toggle"), i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var a = t(this),
                s = a.data("bs.carousel"),
                n = t.extend({}, i.DEFAULTS, a.data(), "object" == typeof e && e),
                o = "string" == typeof e ? e : n.slide;
            s || a.data("bs.carousel", s = new i(this, n)), "number" == typeof e ? s.to(e) : o ? s[o]() : n.interval && s.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        var a = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(a)
    }, i.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function(e, a) {
        var s = this.$element.find(".item.active"),
            n = a || this.getItemForDirection(e, s),
            o = this.interval,
            r = "next" == e ? "left" : "right",
            l = this;
        if (n.hasClass("active")) return this.sliding = !1;
        var h = n[0],
            d = t.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = t(this.$indicators.children()[this.getItemIndex(n)]);
                c && c.addClass("active")
            }
            var u = t.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (n.addClass(e), n[0].offsetWidth, s.addClass(r), n.addClass(r), s.one("bsTransitionEnd", function() {
                n.removeClass([e, r].join(" ")).addClass("active"), s.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(u)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (s.removeClass("active"), n.addClass("active"), this.sliding = !1, this.$element.trigger(u)), o && this.cycle(), this
        }
    };
    var a = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = a, this
    };
    var s = function(i) {
        var a, s = t(this),
            n = t(s.attr("data-target") || (a = s.attr("href")) && a.replace(/.*(?=#[^\s]+$)/, ""));
        if (n.hasClass("carousel")) {
            var o = t.extend({}, n.data(), s.data()),
                r = s.attr("data-slide-to");
            r && (o.interval = !1), e.call(n, o), r && n.data("bs.carousel").to(r), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        var i, a = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(a)
    }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                s = i.data("bs.collapse"),
                n = t.extend({}, a.DEFAULTS, i.data(), "object" == typeof e && e);
            !s && n.toggle && /show|hide/.test(e) && (n.toggle = !1), s || i.data("bs.collapse", s = new a(this, n)), "string" == typeof e && s[e]()
        })
    }
    var a = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, a.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    a.VERSION = "3.3.4", a.TRANSITION_DURATION = 350, a.DEFAULTS = {
        toggle: !0
    }, a.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, a.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(s && s.length && (e = s.data("bs.collapse"), e && e.transitioning))) {
                var n = t.Event("show.bs.collapse");
                if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                    s && s.length && (i.call(s, "hide"), e || s.data("bs.collapse", null));
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return r.call(this);
                    var l = t.camelCase(["scroll", o].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(a.TRANSITION_DURATION)[o](this.$element[0][l])
                }
            }
        }
    }, a.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var s = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : s.call(this)
            }
        }
    }, a.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, a.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, a) {
            var s = t(a);
            this.addAriaAndCollapsedClass(e(s), s)
        }, this)).end()
    }, a.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var s = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = a, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = s, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(a) {
        var s = t(this);
        s.attr("data-target") || a.preventDefault();
        var n = e(s),
            o = n.data("bs.collapse") ? "toggle" : s.data();
        i.call(n, o)
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        e && 3 === e.which || (t(a).remove(), t(s).each(function() {
            var a = t(this),
                s = i(a),
                n = {
                    relatedTarget: this
                };
            s.hasClass("open") && (s.trigger(e = t.Event("hide.bs.dropdown", n)), e.isDefaultPrevented() || (a.attr("aria-expanded", "false"), s.removeClass("open").trigger("hidden.bs.dropdown", n)))
        }))
    }

    function i(e) {
        var i = e.attr("data-target");
        i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var a = i && t(i);
        return a && a.length ? a : e.parent()
    }
    var a = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        n = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    n.VERSION = "3.3.4", n.prototype.toggle = function(a) {
        var s = t(this);
        if (!s.is(".disabled, :disabled")) {
            var n = i(s),
                o = n.hasClass("open");
            if (e(), !o) {
                "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var r = {
                    relatedTarget: this
                };
                if (n.trigger(a = t.Event("show.bs.dropdown", r)), a.isDefaultPrevented()) return;
                s.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger("shown.bs.dropdown", r)
            }
            return !1
        }
    }, n.prototype.keydown = function(e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var a = t(this);
            if (e.preventDefault(), e.stopPropagation(), !a.is(".disabled, :disabled")) {
                var n = i(a),
                    o = n.hasClass("open");
                if (!o && 27 != e.which || o && 27 == e.which) return 27 == e.which && n.find(s).trigger("focus"), a.trigger("click");
                var r = " li:not(.disabled):visible a",
                    l = n.find('[role="menu"]' + r + ', [role="listbox"]' + r);
                if (l.length) {
                    var h = l.index(e.target);
                    38 == e.which && h > 0 && h--, 40 == e.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var o = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var i = t(this),
                a = i.data("bs.dropdown");
            a || i.data("bs.dropdown", a = new n(this)), "string" == typeof e && a[e].call(i)
        })
    }, t.fn.dropdown.Constructor = n, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = o, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, n.prototype.toggle).on("keydown.bs.dropdown.data-api", s, n.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', n.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', n.prototype.keydown)
}(jQuery),
function(t) {
    "use strict";

    function e(e, a) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.modal"),
                o = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
            n || s.data("bs.modal", n = new i(this, o)), "string" == typeof e ? n[e](a) : o.show && n.show(a)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var a = this,
            s = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            a.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(a.$element) && (a.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var s = t.support.transition && a.$element.hasClass("fade");
            a.$element.parent().length || a.$element.appendTo(a.$body), a.$element.show().scrollTop(0), a.adjustDialog(), s && a.$element[0].offsetWidth, a.$element.addClass("in").attr("aria-hidden", !1), a.enforceFocus();
            var n = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            s ? a.$dialog.one("bsTransitionEnd", function() {
                a.$element.trigger("focus").trigger(n)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : a.$element.trigger("focus").trigger(n)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var a = this,
            s = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = t.support.transition && s;
            if (this.$backdrop = t('<div class="modal-backdrop ' + s + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var o = function() {
                a.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : o()
        } else e && e()
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var a = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = a, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var a = t(this),
            s = a.attr("href"),
            n = t(a.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
            o = n.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(s) && s
            }, n.data(), a.data());
        a.is("a") && i.preventDefault(), n.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || n.one("hidden.bs.modal", function() {
                a.is(":visible") && a.trigger("focus")
            })
        }), e.call(n, o, this)
    })
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", t, e)
    };
    e.VERSION = "3.3.4", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, e.prototype.init = function(e, i, a) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(a), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var s = this.options.trigger.split(" "), n = s.length; n--;) {
            var o = s[n];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != o) {
                var r = "hover" == o ? "mouseenter" : "focusin",
                    l = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.getOptions = function(e) {
        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, a) {
            i[t] != a && (e[t] = a)
        }), e
    }, e.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i && i.$tip && i.$tip.is(":visible") ? void(i.hoverState = "in") : (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, e.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, e.prototype.show = function() {
        var i = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(i);
            var a = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (i.isDefaultPrevented() || !a) return;
            var s = this,
                n = this.tip(),
                o = this.getUID(this.type);
            this.setContent(), n.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && n.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                h = l.test(r);
            h && (r = r.replace(l, "") || "top"), n.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
            var d = this.getPosition(),
                c = n[0].offsetWidth,
                u = n[0].offsetHeight;
            if (h) {
                var p = r,
                    m = this.options.container ? t(this.options.container) : this.$element.parent(),
                    f = this.getPosition(m);
                r = "bottom" == r && d.bottom + u > f.bottom ? "top" : "top" == r && d.top - u < f.top ? "bottom" : "right" == r && d.right + c > f.width ? "left" : "left" == r && d.left - c < f.left ? "right" : r, n.removeClass(p).addClass(r)
            }
            var g = this.getCalculatedOffset(r, d, c, u);
            this.applyPlacement(g, r);
            var v = function() {
                var t = s.hoverState;
                s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == t && s.leave(s)
            };
            t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", v).emulateTransitionEnd(e.TRANSITION_DURATION) : v()
        }
    }, e.prototype.applyPlacement = function(e, i) {
        var a = this.tip(),
            s = a[0].offsetWidth,
            n = a[0].offsetHeight,
            o = parseInt(a.css("margin-top"), 10),
            r = parseInt(a.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(r) && (r = 0), e.top = e.top + o, e.left = e.left + r, t.offset.setOffset(a[0], t.extend({
            using: function(t) {
                a.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), a.addClass("in");
        var l = a[0].offsetWidth,
            h = a[0].offsetHeight;
        "top" == i && h != n && (e.top = e.top + n - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? e.left += d.left : e.top += d.top;
        var c = /top|bottom/.test(i),
            u = c ? 2 * d.left - s + l : 2 * d.top - n + h,
            p = c ? "offsetWidth" : "offsetHeight";
        a.offset(e), this.replaceArrow(u, a[0][p], c)
    }, e.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function(i) {
        function a() {
            "in" != s.hoverState && n.detach(), s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), i && i()
        }
        var s = this,
            n = t(this.$tip),
            o = t.Event("hide.bs." + this.type);
        return this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (n.removeClass("in"), t.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", a).emulateTransitionEnd(e.TRANSITION_DURATION) : a(), this.hoverState = null, this)
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function() {
        return this.getTitle()
    }, e.prototype.getPosition = function(e) {
        var i = (e = e || this.$element)[0],
            a = "BODY" == i.tagName,
            s = i.getBoundingClientRect();
        null == s.width && (s = t.extend({}, s, {
            width: s.right - s.left,
            height: s.bottom - s.top
        }));
        var n = a ? {
                top: 0,
                left: 0
            } : e.offset(),
            o = {
                scroll: a ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            r = a ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, s, o, r, n)
    }, e.prototype.getCalculatedOffset = function(t, e, i, a) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - a,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - a / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - a / 2,
            left: e.left + e.width
        }
    }, e.prototype.getViewportAdjustedDelta = function(t, e, i, a) {
        var s = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return s;
        var n = this.options.viewport && this.options.viewport.padding || 0,
            o = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - n - o.scroll,
                l = e.top + n - o.scroll + a;
            r < o.top ? s.top = o.top - r : l > o.top + o.height && (s.top = o.top + o.height - l)
        } else {
            var h = e.left - n,
                d = e.left + n + i;
            h < o.left ? s.left = o.left - h : d > o.width && (s.left = o.left + o.width - d)
        }
        return s
    }, e.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, e.prototype.getUID = function(t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, e.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.enable = function() {
        this.enabled = !0
    }, e.prototype.disable = function() {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function(e) {
        var i = this;
        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, e.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type)
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = function(i) {
        return this.each(function() {
            var a = t(this),
                s = a.data("bs.tooltip"),
                n = "object" == typeof i && i;
            (s || !/destroy|hide/.test(i)) && (s || a.data("bs.tooltip", s = new e(this, n)), "string" == typeof i && s[i]())
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.3.4", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = function(i) {
        return this.each(function() {
            var a = t(this),
                s = a.data("bs.popover"),
                n = "object" == typeof i && i;
            (s || !/destroy|hide/.test(i)) && (s || a.data("bs.popover", s = new e(this, n)), "string" == typeof i && s[i]())
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery),
function(t) {
    "use strict";

    function e(i, a) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, a), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var a = t(this),
                s = a.data("bs.scrollspy"),
                n = "object" == typeof i && i;
            s || a.data("bs.scrollspy", s = new e(this, n)), "string" == typeof i && s[i]()
        })
    }
    e.VERSION = "3.3.4", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            a = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", a = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                s = e.data("target") || e.attr("href"),
                n = /^#./.test(s) && t(s);
            return n && n.length && n.is(":visible") && [
                [n[i]().top + a, s]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            a = this.options.offset + i - this.$scrollElement.height(),
            s = this.offsets,
            n = this.targets,
            o = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= a) return o != (t = n[n.length - 1]) && this.activate(t);
        if (o && e < s[0]) return this.activeTarget = null, this.clear();
        for (t = s.length; t--;) o != n[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(n[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            a = t(i).parents("li").addClass("active");
        a.parent(".dropdown-menu").length && (a = a.closest("li.dropdown").addClass("active")), a.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var a = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = a, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var a = t(this),
                s = a.data("bs.tab");
            s || a.data("bs.tab", s = new i(this)), "string" == typeof e && s[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            a = e.data("target");
        if (a || (a = (a = e.attr("href")) && a.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var s = i.find(".active:last a"),
                n = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                o = t.Event("show.bs.tab", {
                    relatedTarget: s[0]
                });
            if (s.trigger(n), e.trigger(o), !o.isDefaultPrevented() && !n.isDefaultPrevented()) {
                var r = t(a);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() {
                    s.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: s[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, a, s) {
        function n() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), s && s()
        }
        var o = a.find("> .active"),
            r = s && t.support.transition && (o.length && o.hasClass("fade") || !!a.find("> .fade").length);
        o.length && r ? o.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), o.removeClass("in")
    };
    var a = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = a, this
    };
    var s = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var a = t(this),
                s = a.data("bs.affix"),
                n = "object" == typeof e && e;
            s || a.data("bs.affix", s = new i(this, n)), "string" == typeof e && s[e]()
        })
    }
    var i = function(e, a) {
        this.options = t.extend({}, i.DEFAULTS, a), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.4", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, a) {
        var s = this.$target.scrollTop(),
            n = this.$element.offset(),
            o = this.$target.height();
        if (null != i && "top" == this.affixed) return i > s && "top";
        if ("bottom" == this.affixed) return null != i ? !(s + this.unpin <= n.top) && "bottom" : !(t - a >= s + o) && "bottom";
        var r = null == this.affixed,
            l = r ? s : n.top;
        return null != i && i >= s ? "top" : null != a && l + (r ? o : e) >= t - a && "bottom"
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                a = this.options.offset,
                s = a.top,
                n = a.bottom,
                o = t(document.body).height();
            "object" != typeof a && (n = s = a), "function" == typeof s && (s = a.top(this.$element)), "function" == typeof n && (n = a.bottom(this.$element));
            var r = this.getState(o, e, s, n);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : ""),
                    h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: o - e - n
            })
        }
    };
    var a = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = a, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this),
                a = i.data();
            a.offset = a.offset || {}, null != a.offsetBottom && (a.offset.bottom = a.offsetBottom), null != a.offsetTop && (a.offset.top = a.offsetTop), e.call(i, a)
        })
    })
}(jQuery), window.Modernizr = function(t, e, i) {
        function a(t) {
            m.cssText = t
        }

        function s(t, e) {
            return typeof t === e
        }

        function n(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function o(t, e) {
            for (var a in t) {
                var s = t[a];
                if (!n(s, "-") && m[s] !== i) return "pfx" != e || s
            }
            return !1
        }

        function r(t, e, a) {
            var n = t.charAt(0).toUpperCase() + t.slice(1),
                r = (t + " " + C.join(n + " ") + n).split(" ");
            return s(e, "string") || s(e, "undefined") ? o(r, e) : function(t, e, a) {
                for (var n in t) {
                    var o = e[t[n]];
                    if (o !== i) return !1 === a ? t[n] : s(o, "function") ? o.bind(a || e) : o
                }
                return !1
            }(r = (t + " " + _.join(n + " ") + n).split(" "), e, a)
        }
        var l, h, d = {},
            c = e.documentElement,
            u = "modernizr",
            p = e.createElement(u),
            m = p.style,
            f = e.createElement("input"),
            g = ":)",
            v = {}.toString,
            b = " -webkit- -moz- -o- -ms- ".split(" "),
            y = "Webkit Moz O ms",
            C = y.split(" "),
            _ = y.toLowerCase().split(" "),
            D = "http://www.w3.org/2000/svg",
            w = {},
            T = {},
            O = {},
            k = [],
            j = k.slice,
            x = function(t, i, a, s) {
                var n, o, r, l, h = e.createElement("div"),
                    d = e.body,
                    p = d || e.createElement("body");
                if (parseInt(a, 10))
                    for (; a--;) r = e.createElement("div"), r.id = s ? s[a] : u + (a + 1), h.appendChild(r);
                return n = ["&#173;", '<style id="s', u, '">', t, "</style>"].join(""), h.id = u, (d ? h : p).innerHTML += n, p.appendChild(h), d || (p.style.background = "", p.style.overflow = "hidden", l = c.style.overflow, c.style.overflow = "hidden", c.appendChild(p)), o = i(h, t), d ? h.parentNode.removeChild(h) : (p.parentNode.removeChild(p), c.style.overflow = l), !!o
            },
            M = function() {
                var t = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return function(a, n) {
                    n = n || e.createElement(t[a] || "div");
                    var o = (a = "on" + a) in n;
                    return o || (n.setAttribute || (n = e.createElement("div")), n.setAttribute && n.removeAttribute && (n.setAttribute(a, ""), o = s(n[a], "function"), s(n[a], "undefined") || (n[a] = i), n.removeAttribute(a))), n = null, o
                }
            }(),
            E = {}.hasOwnProperty;
        h = s(E, "undefined") || s(E.call, "undefined") ? function(t, e) {
            return e in t && s(t.constructor.prototype[e], "undefined")
        } : function(t, e) {
            return E.call(t, e)
        }, Function.prototype.bind || (Function.prototype.bind = function(t) {
            var e = this;
            if ("function" != typeof e) throw new TypeError;
            var i = j.call(arguments, 1),
                a = function() {
                    if (this instanceof a) {
                        var s = function() {};
                        s.prototype = e.prototype;
                        var n = new s,
                            o = e.apply(n, i.concat(j.call(arguments)));
                        return Object(o) === o ? o : n
                    }
                    return e.apply(t, i.concat(j.call(arguments)))
                };
            return a
        }), w.flexbox = function() {
            return r("flexWrap")
        }, w.flexboxlegacy = function() {
            return r("boxDirection")
        }, w.canvas = function() {
            var t = e.createElement("canvas");
            return !!t.getContext && !!t.getContext("2d")
        }, w.canvastext = function() {
            return !!d.canvas && !!s(e.createElement("canvas").getContext("2d").fillText, "function")
        }, w.webgl = function() {
            return !!t.WebGLRenderingContext
        }, w.touch = function() {
            var i;
            return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? i = !0 : x(["@media (", b.join("touch-enabled),("), u, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
                i = 9 === t.offsetTop
            }), i
        }, w.geolocation = function() {
            return "geolocation" in navigator
        }, w.postmessage = function() {
            return !!t.postMessage
        }, w.websqldatabase = function() {
            return !!t.openDatabase
        }, w.indexedDB = function() {
            return !!r("indexedDB", t)
        }, w.hashchange = function() {
            return M("hashchange", t) && (e.documentMode === i || e.documentMode > 7)
        }, w.history = function() {
            return !!t.history && !!history.pushState
        }, w.draganddrop = function() {
            var t = e.createElement("div");
            return "draggable" in t || "ondragstart" in t && "ondrop" in t
        }, w.websockets = function() {
            return "WebSocket" in t || "MozWebSocket" in t
        }, w.rgba = function() {
            return a("background-color:rgba(150,255,150,.5)"), n(m.backgroundColor, "rgba")
        }, w.hsla = function() {
            return a("background-color:hsla(120,40%,100%,.5)"), n(m.backgroundColor, "rgba") || n(m.backgroundColor, "hsla")
        }, w.multiplebgs = function() {
            return a("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(m.background)
        }, w.backgroundsize = function() {
            return r("backgroundSize")
        }, w.borderimage = function() {
            return r("borderImage")
        }, w.borderradius = function() {
            return r("borderRadius")
        }, w.boxshadow = function() {
            return r("boxShadow")
        }, w.textshadow = function() {
            return "" === e.createElement("div").style.textShadow
        }, w.opacity = function() {
            return t = "opacity:.55", a(b.join(t + ";") + (e || "")), /^0.55$/.test(m.opacity);
            var t, e
        }, w.cssanimations = function() {
            return r("animationName")
        }, w.csscolumns = function() {
            return r("columnCount")
        }, w.cssgradients = function() {
            var t = "background-image:";
            return a((t + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + t) + b.join("linear-gradient(left top,#9f9, white);" + t)).slice(0, -t.length)), n(m.backgroundImage, "gradient")
        }, w.cssreflections = function() {
            return r("boxReflect")
        }, w.csstransforms = function() {
            return !!r("transform")
        }, w.csstransforms3d = function() {
            var t = !!r("perspective");
            return t && "webkitPerspective" in c.style && x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e) {
                t = 9 === e.offsetLeft && 3 === e.offsetHeight
            }), t
        }, w.csstransitions = function() {
            return r("transition")
        }, w.fontface = function() {
            var t;
            return x('@font-face {font-family:"font";src:url("https://")}', function(i, a) {
                var s = e.getElementById("smodernizr"),
                    n = s.sheet || s.styleSheet,
                    o = n ? n.cssRules && n.cssRules[0] ? n.cssRules[0].cssText : n.cssText || "" : "";
                t = /src/i.test(o) && 0 === o.indexOf(a.split(" ")[0])
            }), t
        }, w.generatedcontent = function() {
            var t;
            return x(["#", u, "{font:0/0 a}#", u, ':after{content:"', g, '";visibility:hidden;font:3px/1 a}'].join(""), function(e) {
                t = e.offsetHeight >= 3
            }), t
        }, w.video = function() {
            var t = e.createElement("video"),
                i = !1;
            try {
                (i = !!t.canPlayType) && ((i = new Boolean(i)).ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), i.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), i.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (t) {}
            return i
        }, w.audio = function() {
            var t = e.createElement("audio"),
                i = !1;
            try {
                (i = !!t.canPlayType) && ((i = new Boolean(i)).ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), i.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), i.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), i.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (t) {}
            return i
        }, w.localstorage = function() {
            try {
                return localStorage.setItem(u, u), localStorage.removeItem(u), !0
            } catch (t) {
                return !1
            }
        }, w.sessionstorage = function() {
            try {
                return sessionStorage.setItem(u, u), sessionStorage.removeItem(u), !0
            } catch (t) {
                return !1
            }
        }, w.webworkers = function() {
            return !!t.Worker
        }, w.applicationcache = function() {
            return !!t.applicationCache
        }, w.svg = function() {
            return !!e.createElementNS && !!e.createElementNS(D, "svg").createSVGRect
        }, w.inlinesvg = function() {
            var t = e.createElement("div");
            return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == D
        }, w.smil = function() {
            return !!e.createElementNS && /SVGAnimate/.test(v.call(e.createElementNS(D, "animate")))
        }, w.svgclippaths = function() {
            return !!e.createElementNS && /SVGClipPath/.test(v.call(e.createElementNS(D, "clipPath")))
        };
        for (var S in w) h(w, S) && (l = S.toLowerCase(), d[l] = w[S](), k.push((d[l] ? "" : "no-") + l));
        return d.input || (d.input = function(i) {
                for (var a = 0, s = i.length; a < s; a++) O[i[a]] = i[a] in f;
                return O.list && (O.list = !!e.createElement("datalist") && !!t.HTMLDataListElement), O
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), d.inputtypes = function(t) {
                for (var a, s, n, o = 0, r = t.length; o < r; o++) f.setAttribute("type", s = t[o]), a = "text" !== f.type, a && (f.value = g, f.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(s) && f.style.WebkitAppearance !== i ? (c.appendChild(f), n = e.defaultView, a = n.getComputedStyle && "textfield" !== n.getComputedStyle(f, null).WebkitAppearance && 0 !== f.offsetHeight, c.removeChild(f)) : /^(search|tel)$/.test(s) || (a = /^(url|email)$/.test(s) ? f.checkValidity && !1 === f.checkValidity() : f.value != g)), T[t[o]] = !!a;
                return T
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))), d.addTest = function(t, e) {
                if ("object" == typeof t)
                    for (var a in t) h(t, a) && d.addTest(a, t[a]);
                else {
                    if (t = t.toLowerCase(), d[t] !== i) return d;
                    e = "function" == typeof e ? e() : e, c.className += " " + (e ? "" : "no-") + t, d[t] = e
                }
                return d
            }, a(""), p = f = null,
            function(t, e) {
                function i() {
                    var t = m.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function a(t) {
                    var e = p[t[c]];
                    return e || (e = {}, u++, t[c] = u, p[u] = e), e
                }

                function s(t, i, s) {
                    return i || (i = e), r ? i.createElement(t) : (s || (s = a(i)), !(n = s.cache[t] ? s.cache[t].cloneNode() : d.test(t) ? (s.cache[t] = s.createElem(t)).cloneNode() : s.createElem(t)).canHaveChildren || h.test(t) || n.tagUrn ? n : s.frag.appendChild(n));
                    var n
                }

                function n(t) {
                    t || (t = e);
                    var n, l, h, d, c, u, p = a(t);
                    return m.shivCSS && !o && !p.hasCSS && (p.hasCSS = (d = "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}", c = (h = t).createElement("p"), u = h.getElementsByTagName("head")[0] || h.documentElement, c.innerHTML = "x<style>" + d + "</style>", !!u.insertBefore(c.lastChild, u.firstChild))), r || (n = t, (l = p).cache || (l.cache = {}, l.createElem = n.createElement, l.createFrag = n.createDocumentFragment, l.frag = l.createFrag()), n.createElement = function(t) {
                        return m.shivMethods ? s(t, n, l) : l.createElem(t)
                    }, n.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(t) {
                        return l.createElem(t), l.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(m, l.frag)), t
                }
                var o, r, l = t.html5 || {},
                    h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    c = "_html5shiv",
                    u = 0,
                    p = {};
                ! function() {
                    try {
                        var t = e.createElement("a");
                        t.innerHTML = "<xyz></xyz>", o = "hidden" in t, r = 1 == t.childNodes.length || function() {
                            e.createElement("a");
                            var t = e.createDocumentFragment();
                            return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
                        }()
                    } catch (t) {
                        o = !0, r = !0
                    }
                }();
                var m = {
                    elements: l.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: "3.7.0",
                    shivCSS: !1 !== l.shivCSS,
                    supportsUnknownElements: r,
                    shivMethods: !1 !== l.shivMethods,
                    type: "default",
                    shivDocument: n,
                    createElement: s,
                    createDocumentFragment: function(t, s) {
                        if (t || (t = e), r) return t.createDocumentFragment();
                        for (var n = (s = s || a(t)).frag.cloneNode(), o = 0, l = i(), h = l.length; o < h; o++) n.createElement(l[o]);
                        return n
                    }
                };
                t.html5 = m, n(e)
            }(this, e), d._version = "2.8.3", d._prefixes = b, d._domPrefixes = _, d._cssomPrefixes = C, d.hasEvent = M, d.testProp = function(t) {
                return o([t])
            }, d.testAllProps = r, d.testStyles = x, c.className = c.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + k.join(" "), d
    }(this, this.document),
    function(t, e, i) {
        function a(t) {
            return "[object Function]" == f.call(t)
        }

        function s(t) {
            return "string" == typeof t
        }

        function n() {}

        function o(t) {
            return !t || "loaded" == t || "complete" == t || "uninitialized" == t
        }

        function r() {
            var t = g.shift();
            v = 1, t ? t.t ? p(function() {
                ("c" == t.t ? c.injectCss : c.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
            }, 0) : (t(), r()) : v = 0
        }

        function l(t, i, a, n, l) {
            return v = 0, i = i || "j", s(t) ? function(t, i, a, s, n, l, h) {
                function d(e) {
                    if (!f && o(u.readyState) && (_.r = f = 1, !v && r(), u.onload = u.onreadystatechange = null, e)) {
                        "img" != t && p(function() {
                            C.removeChild(u)
                        }, 50);
                        for (var a in O[i]) O[i].hasOwnProperty(a) && O[i][a].onload()
                    }
                }
                h = h || c.errorTimeout;
                var u = e.createElement(t),
                    f = 0,
                    b = 0,
                    _ = {
                        t: a,
                        s: i,
                        e: n,
                        a: l,
                        x: h
                    };
                1 === O[i] && (b = 1, O[i] = []), "object" == t ? u.data = i : (u.src = i, u.type = t), u.width = u.height = "0", u.onerror = u.onload = u.onreadystatechange = function() {
                    d.call(this, b)
                }, g.splice(s, 0, _), "img" != t && (b || 2 === O[i] ? (C.insertBefore(u, y ? null : m), p(d, h)) : O[i].push(u))
            }("c" == i ? D : _, t, i, this.i++, a, n, l) : (g.splice(this.i++, 0, t), 1 == g.length && r()), this
        }

        function h() {
            var t = c;
            return t.loader = {
                load: l,
                i: 0
            }, t
        }
        var d, c, u = e.documentElement,
            p = t.setTimeout,
            m = e.getElementsByTagName("script")[0],
            f = {}.toString,
            g = [],
            v = 0,
            b = "MozAppearance" in u.style,
            y = b && !!e.createRange().compareNode,
            C = y ? u : m.parentNode,
            _ = (u = t.opera && "[object Opera]" == f.call(t.opera), u = !!e.attachEvent && !u, b ? "object" : u ? "script" : "img"),
            D = u ? "script" : _,
            w = Array.isArray || function(t) {
                return "[object Array]" == f.call(t)
            },
            T = [],
            O = {},
            k = {
                timeout: function(t, e) {
                    return e.length && (t.timeout = e[0]), t
                }
            };
        (c = function(t) {
            function e(t, e, s, n, o) {
                var r = function(t) {
                        t = t.split("!");
                        var e, i, a, s = T.length,
                            n = t.pop(),
                            o = t.length;
                        for (n = {
                                url: n,
                                origUrl: n,
                                prefixes: t
                            }, i = 0; i < o; i++) a = t[i].split("="), (e = k[a.shift()]) && (n = e(n, a));
                        for (i = 0; i < s; i++) n = T[i](n);
                        return n
                    }(t),
                    l = r.autoCallback;
                r.url.split(".").pop().split("?").shift(), r.bypass || (e && (e = a(e) ? e : e[t] || e[n] || e[t.split("/").pop().split("?")[0]]), r.instead ? r.instead(t, e, s, n, o) : (O[r.url] ? r.noexec = !0 : O[r.url] = 1, s.load(r.url, r.forceCSS || !r.forceJS && "css" == r.url.split(".").pop().split("?").shift() ? "c" : i, r.noexec, r.attrs, r.timeout), (a(e) || a(l)) && s.load(function() {
                    h(), e && e(r.origUrl, o, n), l && l(r.origUrl, o, n), O[r.url] = 2
                })))
            }

            function o(t, i) {
                function o(t, n) {
                    if (t) {
                        if (s(t)) n || (c = function() {
                            var t = [].slice.call(arguments);
                            u.apply(this, t), p()
                        }), e(t, c, i, 0, h);
                        else if (Object(t) === t)
                            for (l in r = function() {
                                    var e, i = 0;
                                    for (e in t) t.hasOwnProperty(e) && i++;
                                    return i
                                }(), t) t.hasOwnProperty(l) && (!n && !--r && (a(c) ? c = function() {
                                var t = [].slice.call(arguments);
                                u.apply(this, t), p()
                            } : c[l] = function(t) {
                                return function() {
                                    var e = [].slice.call(arguments);
                                    t && t.apply(this, e), p()
                                }
                            }(u[l])), e(t[l], c, i, l, h))
                    } else !n && p()
                }
                var r, l, h = !!t.test,
                    d = t.load || t.both,
                    c = t.callback || n,
                    u = c,
                    p = t.complete || n;
                o(h ? t.yep : t.nope, !!d), d && o(d)
            }
            var r, l, d = this.yepnope.loader;
            if (s(t)) e(t, 0, d, 0);
            else if (w(t))
                for (r = 0; r < t.length; r++) l = t[r], s(l) ? e(l, 0, d, 0) : w(l) ? c(l) : Object(l) === l && o(l, d);
            else Object(t) === t && o(t, d)
        }).addPrefix = function(t, e) {
            k[t] = e
        }, c.addFilter = function(t) {
            T.push(t)
        }, c.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", d = function() {
            e.removeEventListener("DOMContentLoaded", d, 0), e.readyState = "complete"
        }, 0)), t.yepnope = h(), t.yepnope.executeStack = r, t.yepnope.injectJs = function(t, i, a, s, l, h) {
            var d, u, f = e.createElement("script");
            s = s || c.errorTimeout;
            f.src = t;
            for (u in a) f.setAttribute(u, a[u]);
            i = h ? r : i || n, f.onreadystatechange = f.onload = function() {
                !d && o(f.readyState) && (d = 1, i(), f.onload = f.onreadystatechange = null)
            }, p(function() {
                d || (d = 1, i(1))
            }, s), l ? f.onload() : m.parentNode.insertBefore(f, m)
        }, t.yepnope.injectCss = function(t, i, a, s, o, l) {
            var h;
            s = e.createElement("link"), i = l ? r : i || n;
            s.href = t, s.rel = "stylesheet", s.type = "text/css";
            for (h in a) s.setAttribute(h, a[h]);
            o || (m.parentNode.insertBefore(s, m), p(i, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(t) {
        "use strict";

        function e() {}

        function i() {
            try {
                return document.activeElement
            } catch (t) {}
        }

        function a(t, e) {
            for (var i = 0, a = t.length; a > i; i++)
                if (t[i] === e) return !0;
            return !1
        }

        function s(t, e, i) {
            return t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent ? t.attachEvent("on" + e, i) : void 0
        }

        function n(t, e) {
            var i;
            t.createTextRange ? ((i = t.createTextRange()).move("character", e), i.select()) : t.selectionStart && (t.focus(), t.setSelectionRange(e, e))
        }

        function o(t, e) {
            try {
                return t.type = e, !0
            } catch (t) {
                return !1
            }
        }

        function r(t, e) {
            if (t && t.getAttribute(b)) e(t);
            else
                for (var i, a = t ? t.getElementsByTagName("input") : j, s = t ? t.getElementsByTagName("textarea") : x, n = a ? a.length : 0, o = s ? s.length : 0, r = n + o, l = 0; r > l; l++) i = n > l ? a[l] : s[l - n], e(i)
        }

        function l(t) {
            r(t, h)
        }

        function h(t, e) {
            var i = !!e && t.value !== e,
                a = t.value === t.getAttribute(b);
            if ((i || a) && "true" === t.getAttribute(y)) {
                t.removeAttribute(y), t.value = t.value.replace(t.getAttribute(b), ""), t.className = t.className.replace(v, "");
                var s = t.getAttribute(w);
                parseInt(s, 10) >= 0 && (t.setAttribute("maxLength", s), t.removeAttribute(w));
                var n = t.getAttribute(C);
                return n && (t.type = n), !0
            }
            return !1
        }

        function d(t) {
            var e = t.getAttribute(b);
            return !("" !== t.value || !e) && (t.setAttribute(y, "true"), t.value = e, t.className += " " + g, t.getAttribute(w) || (t.setAttribute(w, t.maxLength), t.removeAttribute("maxLength")), t.getAttribute(C) ? t.type = "text" : "password" === t.type && o(t, "text") && t.setAttribute(C, "password"), !0)
        }

        function c(t) {
            var e, o, r, c, u, m, g = t.form;
            g && "string" == typeof g && ((g = document.getElementById(g)).getAttribute(_) || (s(g, "submit", (m = g, function() {
                l(m)
            })), g.setAttribute(_, "true"))), s(t, "focus", (u = t, function() {
                M && u.value === u.getAttribute(b) && "true" === u.getAttribute(y) ? n(u, 0) : h(u)
            })), s(t, "blur", (c = t, function() {
                d(c)
            })), M && (s(t, "keydown", (r = t, function(t) {
                return p = r.value, "true" === r.getAttribute(y) && p === r.getAttribute(b) && a(f, t.keyCode) ? (t.preventDefault && t.preventDefault(), !1) : void 0
            })), s(t, "keyup", (o = t, function() {
                h(o, p), "" === o.value && (o.blur(), n(o, 0))
            })), s(t, "click", (e = t, function() {
                e === i() && e.value === e.getAttribute(b) && "true" === e.getAttribute(y) && n(e, 0)
            }))), t.setAttribute(D, "true"), t.setAttribute(b, I), (M || t !== i()) && d(t)
        }
        var u = void 0 !== document.createElement("input").placeholder;
        if (t.Placeholders = {
                nativeSupport: u,
                disable: u ? e : l,
                enable: u ? e : function(t) {
                    r(t, d)
                }
            }, !u) {
            var p, m = ["text", "search", "url", "tel", "email", "password", "number", "textarea"],
                f = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
                g = "placeholdersjs",
                v = new RegExp("(?:^|\\s)" + g + "(?!\\S)"),
                b = "data-placeholder-value",
                y = "data-placeholder-active",
                C = "data-placeholder-type",
                _ = "data-placeholder-submit",
                D = "data-placeholder-bound",
                w = "data-placeholder-maxlength",
                T = document.getElementsByTagName("head")[0],
                O = document.documentElement,
                k = t.Placeholders,
                j = document.getElementsByTagName("input"),
                x = document.getElementsByTagName("textarea"),
                M = "false" === O.getAttribute("data-placeholder-focus"),
                E = "false" !== O.getAttribute("data-placeholder-live"),
                S = document.createElement("style");
            S.type = "text/css";
            var A = document.createTextNode("." + g + " {color:#ccc;}");
            S.styleSheet ? S.styleSheet.cssText = A.nodeValue : S.appendChild(A), T.insertBefore(S, T.firstChild);
            for (var I, F, N = 0, V = j.length + x.length; V > N; N++) F = N < j.length ? j[N] : x[N - j.length], I = F.attributes.placeholder, I && (I = I.nodeValue, I && a(m, F.type) && c(F));
            var $ = setInterval(function() {
                for (var t = 0, e = j.length + x.length; e > t; t++) F = t < j.length ? j[t] : x[t - j.length], I = F.attributes.placeholder, I ? (I = I.nodeValue, I && a(m, F.type) && (F.getAttribute(D) || c(F), (I !== F.getAttribute(b) || "password" === F.type && !F.getAttribute(C)) && ("password" === F.type && !F.getAttribute(C) && o(F, "text") && F.setAttribute(C, "password"), F.value === F.getAttribute(b) && (F.value = I), F.setAttribute(b, I)))) : F.getAttribute(y) && (h(F), F.removeAttribute(b));
                E || clearInterval($)
            }, 100);
            s(t, "beforeunload", function() {
                k.disable()
            })
        }
    }(this),
    function(t, e) {
        function i() {
            return new Date(Date.UTC.apply(Date, arguments))
        }

        function a() {
            var t = new Date;
            return i(t.getFullYear(), t.getMonth(), t.getDate())
        }

        function s(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        var n, o = (n = {
                get: function(t) {
                    return this.slice(t)[0]
                },
                contains: function(t) {
                    for (var e = t && t.valueOf(), i = 0, a = this.length; a > i; i++)
                        if (this[i].valueOf() === e) return i;
                    return -1
                },
                remove: function(t) {
                    this.splice(t, 1)
                },
                replace: function(e) {
                    e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e))
                },
                clear: function() {
                    this.length = 0
                },
                copy: function() {
                    var t = new o;
                    return t.replace(this), t
                }
            }, function() {
                var e = [];
                return e.push.apply(e, arguments), t.extend(e, n), e
            }),
            r = function(e, i) {
                this._process_options(i), this.dates = new o, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = t(e), this.isInline = !1, this.isInput = this.element.is("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = t(m.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot .today, tfoot .clear").attr("colspan", function(t, e) {
                    return parseInt(e) + 1
                }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.setDatesDisabled(this.o.datesDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
            };
        r.prototype = {
            constructor: r,
            _process_options: function(s) {
                this._o = t.extend({}, this._o, s);
                var n = this.o = t.extend({}, this._o),
                    o = n.language;
                switch (p[o] || (o = o.split("-")[0], p[o] || (o = c.language)), n.language = o, n.startView) {
                    case 2:
                    case "decade":
                        n.startView = 2;
                        break;
                    case 1:
                    case "year":
                        n.startView = 1;
                        break;
                    default:
                        n.startView = 0
                }
                switch (n.minViewMode) {
                    case 1:
                    case "months":
                        n.minViewMode = 1;
                        break;
                    case 2:
                    case "years":
                        n.minViewMode = 2;
                        break;
                    default:
                        n.minViewMode = 0
                }
                n.startView = Math.max(n.startView, n.minViewMode), !0 !== n.multidate && (n.multidate = Number(n.multidate) || !1, !1 !== n.multidate && (n.multidate = Math.max(0, n.multidate))), n.multidateSeparator = String(n.multidateSeparator), n.weekStart %= 7, n.weekEnd = (n.weekStart + 6) % 7;
                var r = m.parseFormat(n.format);
                if (n.startDate !== -1 / 0 && (n.startDate = n.startDate ? n.startDate instanceof Date ? this._local_to_utc(this._zero_time(n.startDate)) : m.parseDate(n.startDate, r, n.language) : -1 / 0), 1 / 0 !== n.endDate && (n.endDate = n.endDate ? n.endDate instanceof Date ? this._local_to_utc(this._zero_time(n.endDate)) : m.parseDate(n.endDate, r, n.language) : 1 / 0), n.daysOfWeekDisabled = n.daysOfWeekDisabled || [], t.isArray(n.daysOfWeekDisabled) || (n.daysOfWeekDisabled = n.daysOfWeekDisabled.split(/[,\s]*/)), n.daysOfWeekDisabled = t.map(n.daysOfWeekDisabled, function(t) {
                        return parseInt(t, 10)
                    }), n.datesDisabled = n.datesDisabled || [], !t.isArray(n.datesDisabled)) {
                    var l = [];
                    l.push(m.parseDate(n.datesDisabled, r, n.language)), n.datesDisabled = l
                }
                n.datesDisabled = t.map(n.datesDisabled, function(t) {
                    return m.parseDate(t, r, n.language)
                });
                var h = String(n.orientation).toLowerCase().split(/\s+/g),
                    d = n.orientation.toLowerCase();
                if (h = t.grep(h, function(t) {
                        return /^auto|left|right|top|bottom$/.test(t)
                    }), n.orientation = {
                        x: "auto",
                        y: "auto"
                    }, d && "auto" !== d)
                    if (1 === h.length) switch (h[0]) {
                        case "top":
                        case "bottom":
                            n.orientation.y = h[0];
                            break;
                        case "left":
                        case "right":
                            n.orientation.x = h[0]
                    } else d = t.grep(h, function(t) {
                        return /^left|right$/.test(t)
                    }), n.orientation.x = d[0] || "auto", d = t.grep(h, function(t) {
                        return /^top|bottom$/.test(t)
                    }), n.orientation.y = d[0] || "auto";
                if (n.defaultViewDate) {
                    var u = n.defaultViewDate.year || (new Date).getFullYear(),
                        f = n.defaultViewDate.month || 0,
                        g = n.defaultViewDate.day || 1;
                    n.defaultViewDate = i(u, f, g)
                } else n.defaultViewDate = a();
                n.showOnFocus = n.showOnFocus === e || n.showOnFocus
            },
            _events: [],
            _secondaryEvents: [],
            _applyEvents: function(t) {
                for (var i, a, s, n = 0; n < t.length; n++) i = t[n][0], 2 === t[n].length ? (a = e, s = t[n][1]) : 3 === t[n].length && (a = t[n][1], s = t[n][2]), i.on(s, a)
            },
            _unapplyEvents: function(t) {
                for (var i, a, s, n = 0; n < t.length; n++) i = t[n][0], 2 === t[n].length ? (s = e, a = t[n][1]) : 3 === t[n].length && (s = t[n][1], a = t[n][2]), i.off(a, s)
            },
            _buildEvents: function() {
                var e = {
                    keyup: t.proxy(function(e) {
                        -1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                    }, this),
                    keydown: t.proxy(this.keydown, this)
                };
                !0 === this.o.showOnFocus && (e.focus = t.proxy(this.show, this)), this.isInput ? this._events = [
                    [this.element, e]
                ] : this.component && this.hasInput ? this._events = [
                    [this.element.find("input"), e],
                    [this.component, {
                        click: t.proxy(this.show, this)
                    }]
                ] : this.element.is("div") ? this.isInline = !0 : this._events = [
                    [this.element, {
                        click: t.proxy(this.show, this)
                    }]
                ], this._events.push([this.element, "*", {
                    blur: t.proxy(function(t) {
                        this._focused_from = t.target
                    }, this)
                }], [this.element, {
                    blur: t.proxy(function(t) {
                        this._focused_from = t.target
                    }, this)
                }]), this._secondaryEvents = [
                    [this.picker, {
                        click: t.proxy(this.click, this)
                    }],
                    [t(window), {
                        resize: t.proxy(this.place, this)
                    }],
                    [t(document), {
                        "mousedown touchstart": t.proxy(function(t) {
                            this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.hide()
                        }, this)
                    }]
                ]
            },
            _attachEvents: function() {
                this._detachEvents(), this._applyEvents(this._events)
            },
            _detachEvents: function() {
                this._unapplyEvents(this._events)
            },
            _attachSecondaryEvents: function() {
                this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
            },
            _detachSecondaryEvents: function() {
                this._unapplyEvents(this._secondaryEvents)
            },
            _trigger: function(e, i) {
                var a = i || this.dates.get(-1),
                    s = this._utc_to_local(a);
                this.element.trigger({
                    type: e,
                    date: s,
                    dates: t.map(this.dates, this._utc_to_local),
                    format: t.proxy(function(t, e) {
                        0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format;
                        var i = this.dates.get(t);
                        return m.formatDate(i, e, this.o.language)
                    }, this)
                })
            },
            show: function() {
                return this.element.attr("readonly") && !1 === this.o.enableOnReadonly ? void 0 : (this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && t(this.element).blur(), this)
            },
            hide: function() {
                return this.isInline ? this : this.picker.is(":visible") ? (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"), this) : this
            },
            remove: function() {
                return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
            },
            _utc_to_local: function(t) {
                return t && new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
            },
            _local_to_utc: function(t) {
                return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
            },
            _zero_time: function(t) {
                return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
            },
            _zero_utc_time: function(t) {
                return t && new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()))
            },
            getDates: function() {
                return t.map(this.dates, this._utc_to_local)
            },
            getUTCDates: function() {
                return t.map(this.dates, function(t) {
                    return new Date(t)
                })
            },
            getDate: function() {
                return this._utc_to_local(this.getUTCDate())
            },
            getUTCDate: function() {
                var t = this.dates.get(-1);
                return void 0 !== t ? new Date(t) : null
            },
            clearDates: function() {
                var t;
                this.isInput ? t = this.element : this.component && (t = this.element.find("input")), t && t.val("").change(), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
            },
            setDates: function() {
                var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.update.apply(this, e), this._trigger("changeDate"), this.setValue(), this
            },
            setUTCDates: function() {
                var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.update.apply(this, t.map(e, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this
            },
            setDate: s("setDates"),
            setUTCDate: s("setUTCDates"),
            setValue: function() {
                var t = this.getFormattedDate();
                return this.isInput ? this.element.val(t).change() : this.component && this.element.find("input").val(t).change(), this
            },
            getFormattedDate: function(i) {
                i === e && (i = this.o.format);
                var a = this.o.language;
                return t.map(this.dates, function(t) {
                    return m.formatDate(t, i, a)
                }).join(this.o.multidateSeparator)
            },
            setStartDate: function(t) {
                return this._process_options({
                    startDate: t
                }), this.update(), this.updateNavArrows(), this
            },
            setEndDate: function(t) {
                return this._process_options({
                    endDate: t
                }), this.update(), this.updateNavArrows(), this
            },
            setDaysOfWeekDisabled: function(t) {
                return this._process_options({
                    daysOfWeekDisabled: t
                }), this.update(), this.updateNavArrows(), this
            },
            setDatesDisabled: function(t) {
                this._process_options({
                    datesDisabled: t
                }), this.update(), this.updateNavArrows()
            },
            place: function() {
                if (this.isInline) return this;
                var e = this.picker.outerWidth(),
                    i = this.picker.outerHeight(),
                    a = t(this.o.container).width(),
                    s = t(this.o.container).height(),
                    n = t(this.o.container).scrollTop(),
                    o = t(this.o.container).offset(),
                    r = [];
                this.element.parents().each(function() {
                    var e = t(this).css("z-index");
                    "auto" !== e && 0 !== e && r.push(parseInt(e))
                });
                var l = Math.max.apply(Math, r) + 10,
                    h = this.component ? this.component.parent().offset() : this.element.offset(),
                    d = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                    c = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                    u = h.left - o.left,
                    p = h.top - o.top;
                this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (u -= e - c)) : h.left < 0 ? (this.picker.addClass("datepicker-orient-left"), u -= h.left - 10) : u + e > a ? (this.picker.addClass("datepicker-orient-right"), u = h.left + c - e) : this.picker.addClass("datepicker-orient-left");
                var m, f, g = this.o.orientation.y;
                if ("auto" === g && (m = -n + p - i, f = n + s - (p + d + i), g = Math.max(m, f) === f ? "top" : "bottom"), this.picker.addClass("datepicker-orient-" + g), "top" === g ? p += d : p -= i + parseInt(this.picker.css("padding-top")), this.o.rtl) {
                    var v = a - (u + c);
                    this.picker.css({
                        top: p,
                        right: v,
                        zIndex: l
                    })
                } else this.picker.css({
                    top: p,
                    left: u,
                    zIndex: l
                });
                return this
            },
            _allow_update: !0,
            update: function() {
                if (!this._allow_update) return this;
                var e = this.dates.copy(),
                    i = [],
                    a = !1;
                return arguments.length ? (t.each(arguments, t.proxy(function(t, e) {
                    e instanceof Date && (e = this._local_to_utc(e)), i.push(e)
                }, this)), a = !0) : (i = (i = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val()) && this.o.multidate ? i.split(this.o.multidateSeparator) : [i], delete this.element.data().date), i = t.map(i, t.proxy(function(t) {
                    return m.parseDate(t, this.o.format, this.o.language)
                }, this)), i = t.grep(i, t.proxy(function(t) {
                    return t < this.o.startDate || t > this.o.endDate || !t
                }, this), !0), this.dates.replace(i), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate)), a ? this.setValue() : i.length && String(e) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && e.length && this._trigger("clearDate"), this.fill(), this
            },
            fillDow: function() {
                var t = this.o.weekStart,
                    e = "<tr>";
                if (this.o.calendarWeeks) {
                    this.picker.find(".datepicker-days thead tr:first-child .datepicker-switch").attr("colspan", function(t, e) {
                        return parseInt(e) + 1
                    });
                    e += '<th class="cw">&#160;</th>'
                }
                for (; t < this.o.weekStart + 7;) e += '<th class="dow">' + p[this.o.language].daysMin[t++ % 7] + "</th>";
                e += "</tr>", this.picker.find(".datepicker-days thead").append(e)
            },
            fillMonths: function() {
                for (var t = "", e = 0; 12 > e;) t += '<span class="month">' + p[this.o.language].monthsShort[e++] + "</span>";
                this.picker.find(".datepicker-months td").html(t)
            },
            setRange: function(e) {
                e && e.length ? this.range = t.map(e, function(t) {
                    return t.valueOf()
                }) : delete this.range, this.fill()
            },
            getClassNames: function(e) {
                var i = [],
                    a = this.viewDate.getUTCFullYear(),
                    s = this.viewDate.getUTCMonth(),
                    n = new Date;
                return e.getUTCFullYear() < a || e.getUTCFullYear() === a && e.getUTCMonth() < s ? i.push("old") : (e.getUTCFullYear() > a || e.getUTCFullYear() === a && e.getUTCMonth() > s) && i.push("new"), this.focusDate && e.valueOf() === this.focusDate.valueOf() && i.push("focused"), this.o.todayHighlight && e.getUTCFullYear() === n.getFullYear() && e.getUTCMonth() === n.getMonth() && e.getUTCDate() === n.getDate() && i.push("today"), -1 !== this.dates.contains(e) && i.push("active"), (e.valueOf() < this.o.startDate || e.valueOf() > this.o.endDate || -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)) && i.push("disabled"), this.o.datesDisabled.length > 0 && t.grep(this.o.datesDisabled, function(t) {
                    return a = t, (i = e).getUTCFullYear() === a.getUTCFullYear() && i.getUTCMonth() === a.getUTCMonth() && i.getUTCDate() === a.getUTCDate();
                    var i, a
                }).length > 0 && i.push("disabled", "disabled-date"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && i.push("range"), -1 !== t.inArray(e.valueOf(), this.range) && i.push("selected")), i
            },
            fill: function() {
                var a, s = new Date(this.viewDate),
                    n = s.getUTCFullYear(),
                    o = s.getUTCMonth(),
                    r = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                    l = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                    h = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCFullYear() : 1 / 0,
                    d = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCMonth() : 1 / 0,
                    c = p[this.o.language].today || p.en.today || "",
                    u = p[this.o.language].clear || p.en.clear || "";
                if (!isNaN(n) && !isNaN(o)) {
                    this.picker.find(".datepicker-days thead .datepicker-switch").text(p[this.o.language].months[o] + " " + n), this.picker.find("tfoot .today").text(c).toggle(!1 !== this.o.todayBtn), this.picker.find("tfoot .clear").text(u).toggle(!1 !== this.o.clearBtn), this.updateNavArrows(), this.fillMonths();
                    var f = i(n, o - 1, 28),
                        g = m.getDaysInMonth(f.getUTCFullYear(), f.getUTCMonth());
                    f.setUTCDate(g), f.setUTCDate(g - (f.getUTCDay() - this.o.weekStart + 7) % 7);
                    var v = new Date(f);
                    v.setUTCDate(v.getUTCDate() + 42), v = v.valueOf();
                    for (var b, y = []; f.valueOf() < v;) {
                        if (f.getUTCDay() === this.o.weekStart && (y.push("<tr>"), this.o.calendarWeeks)) {
                            var C = new Date(+f + (this.o.weekStart - f.getUTCDay() - 7) % 7 * 864e5),
                                _ = new Date(Number(C) + (11 - C.getUTCDay()) % 7 * 864e5),
                                D = new Date(Number(D = i(_.getUTCFullYear(), 0, 1)) + (11 - D.getUTCDay()) % 7 * 864e5),
                                w = (_ - D) / 864e5 / 7 + 1;
                            y.push('<td class="cw">' + w + "</td>")
                        }
                        if ((b = this.getClassNames(f)).push("day"), this.o.beforeShowDay !== t.noop) {
                            var T = this.o.beforeShowDay(this._utc_to_local(f));
                            T === e ? T = {} : "boolean" == typeof T ? T = {
                                enabled: T
                            } : "string" == typeof T && (T = {
                                classes: T
                            }), !1 === T.enabled && b.push("disabled"), T.classes && (b = b.concat(T.classes.split(/\s+/))), T.tooltip && (a = T.tooltip)
                        }
                        b = t.unique(b), y.push('<td class="' + b.join(" ") + '"' + (a ? ' title="' + a + '"' : "") + ">" + f.getUTCDate() + "</td>"), a = null, f.getUTCDay() === this.o.weekEnd && y.push("</tr>"), f.setUTCDate(f.getUTCDate() + 1)
                    }
                    this.picker.find(".datepicker-days tbody").empty().append(y.join(""));
                    var O = this.picker.find(".datepicker-months").find("th:eq(1)").text(n).end().find("span").removeClass("active");
                    if (t.each(this.dates, function(t, e) {
                            e.getUTCFullYear() === n && O.eq(e.getUTCMonth()).addClass("active")
                        }), (r > n || n > h) && O.addClass("disabled"), n === r && O.slice(0, l).addClass("disabled"), n === h && O.slice(d + 1).addClass("disabled"), this.o.beforeShowMonth !== t.noop) {
                        var k = this;
                        t.each(O, function(e, i) {
                            if (!t(i).hasClass("disabled")) {
                                var a = new Date(n, e, 1);
                                !1 === k.o.beforeShowMonth(a) && t(i).addClass("disabled")
                            }
                        })
                    }
                    y = "", n = 10 * parseInt(n / 10, 10);
                    var j = this.picker.find(".datepicker-years").find("th:eq(1)").text(n + "-" + (n + 9)).end().find("td");
                    n -= 1;
                    for (var x, M = t.map(this.dates, function(t) {
                            return t.getUTCFullYear()
                        }), E = -1; 11 > E; E++) x = ["year"], -1 === E ? x.push("old") : 10 === E && x.push("new"), -1 !== t.inArray(n, M) && x.push("active"), (r > n || n > h) && x.push("disabled"), y += '<span class="' + x.join(" ") + '">' + n + "</span>", n += 1;
                    j.html(y)
                }
            },
            updateNavArrows: function() {
                if (this._allow_update) {
                    var t = new Date(this.viewDate),
                        e = t.getUTCFullYear(),
                        i = t.getUTCMonth();
                    switch (this.viewMode) {
                        case 0:
                            this.picker.find(".prev").css(this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? {
                                visibility: "hidden"
                            } : {
                                visibility: "visible"
                            }), this.picker.find(".next").css(1 / 0 !== this.o.endDate && e >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? {
                                visibility: "hidden"
                            } : {
                                visibility: "visible"
                            });
                            break;
                        case 1:
                        case 2:
                            this.picker.find(".prev").css(this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() ? {
                                visibility: "hidden"
                            } : {
                                visibility: "visible"
                            }), this.picker.find(".next").css(1 / 0 !== this.o.endDate && e >= this.o.endDate.getUTCFullYear() ? {
                                visibility: "hidden"
                            } : {
                                visibility: "visible"
                            })
                    }
                }
            },
            click: function(e) {
                e.preventDefault();
                var a, s, n, o = t(e.target).closest("span, td, th");
                if (1 === o.length) switch (o[0].nodeName.toLowerCase()) {
                    case "th":
                        switch (o[0].className) {
                            case "datepicker-switch":
                                this.showMode(1);
                                break;
                            case "prev":
                            case "next":
                                var r = m.modes[this.viewMode].navStep * ("prev" === o[0].className ? -1 : 1);
                                switch (this.viewMode) {
                                    case 0:
                                        this.viewDate = this.moveMonth(this.viewDate, r), this._trigger("changeMonth", this.viewDate);
                                        break;
                                    case 1:
                                    case 2:
                                        this.viewDate = this.moveYear(this.viewDate, r), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)
                                }
                                this.fill();
                                break;
                            case "today":
                                var l = new Date;
                                l = i(l.getFullYear(), l.getMonth(), l.getDate(), 0, 0, 0), this.showMode(-2);
                                var h = "linked" === this.o.todayBtn ? null : "view";
                                this._setDate(l, h);
                                break;
                            case "clear":
                                this.clearDates()
                        }
                        break;
                    case "span":
                        o.hasClass("disabled") || (this.viewDate.setUTCDate(1), o.hasClass("month") ? (n = 1, s = o.parent().find("span").index(o), a = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(s), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(i(a, s, n))) : (n = 1, s = 0, a = parseInt(o.text(), 10) || 0, this.viewDate.setUTCFullYear(a), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(i(a, s, n))), this.showMode(-1), this.fill());
                        break;
                    case "td":
                        o.hasClass("day") && !o.hasClass("disabled") && (n = parseInt(o.text(), 10) || 1, a = this.viewDate.getUTCFullYear(), s = this.viewDate.getUTCMonth(), o.hasClass("old") ? 0 === s ? (s = 11, a -= 1) : s -= 1 : o.hasClass("new") && (11 === s ? (s = 0, a += 1) : s += 1), this._setDate(i(a, s, n)))
                }
                this.picker.is(":visible") && this._focused_from && t(this._focused_from).focus(), delete this._focused_from
            },
            _toggle_multidate: function(t) {
                var e = this.dates.contains(t);
                if (t || this.dates.clear(), -1 !== e ? (!0 === this.o.multidate || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(e) : !1 === this.o.multidate ? (this.dates.clear(), this.dates.push(t)) : this.dates.push(t), "number" == typeof this.o.multidate)
                    for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
            },
            _setDate: function(t, e) {
                var i;
                e && "date" !== e || this._toggle_multidate(t && new Date(t)), e && "view" !== e || (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), e && "view" === e || this._trigger("changeDate"), this.isInput ? i = this.element : this.component && (i = this.element.find("input")), i && i.change(), !this.o.autoclose || e && "date" !== e || this.hide()
            },
            moveMonth: function(t, i) {
                if (!t) return e;
                if (!i) return t;
                var a, s, n = new Date(t.valueOf()),
                    o = n.getUTCDate(),
                    r = n.getUTCMonth(),
                    l = Math.abs(i);
                if (i = i > 0 ? 1 : -1, 1 === l) s = -1 === i ? function() {
                    return n.getUTCMonth() === r
                } : function() {
                    return n.getUTCMonth() !== a
                }, a = r + i, n.setUTCMonth(a), (0 > a || a > 11) && (a = (a + 12) % 12);
                else {
                    for (var h = 0; l > h; h++) n = this.moveMonth(n, i);
                    a = n.getUTCMonth(), n.setUTCDate(o), s = function() {
                        return a !== n.getUTCMonth()
                    }
                }
                for (; s();) n.setUTCDate(--o), n.setUTCMonth(a);
                return n
            },
            moveYear: function(t, e) {
                return this.moveMonth(t, 12 * e)
            },
            dateWithinRange: function(t) {
                return t >= this.o.startDate && t <= this.o.endDate
            },
            keydown: function(t) {
                if (this.picker.is(":visible")) {
                    var e, i, s, n, o = !1,
                        r = this.focusDate || this.viewDate;
                    switch (t.keyCode) {
                        case 27:
                            this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault();
                            break;
                        case 37:
                        case 39:
                            if (!this.o.keyboardNavigation) break;
                            e = 37 === t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || a(), e), s = this.moveYear(r, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || a(), e), s = this.moveMonth(r, e), this._trigger("changeMonth", this.viewDate)) : ((i = new Date(this.dates.get(-1) || a())).setUTCDate(i.getUTCDate() + e), (s = new Date(r)).setUTCDate(r.getUTCDate() + e)), this.dateWithinRange(s) && (this.focusDate = this.viewDate = s, this.setValue(), this.fill(), t.preventDefault());
                            break;
                        case 38:
                        case 40:
                            if (!this.o.keyboardNavigation) break;
                            e = 38 === t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || a(), e), s = this.moveYear(r, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || a(), e), s = this.moveMonth(r, e), this._trigger("changeMonth", this.viewDate)) : ((i = new Date(this.dates.get(-1) || a())).setUTCDate(i.getUTCDate() + 7 * e), (s = new Date(r)).setUTCDate(r.getUTCDate() + 7 * e)), this.dateWithinRange(s) && (this.focusDate = this.viewDate = s, this.setValue(), this.fill(), t.preventDefault());
                            break;
                        case 32:
                            break;
                        case 13:
                            r = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(r), o = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), "function" == typeof t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, this.o.autoclose && this.hide());
                            break;
                        case 9:
                            this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
                    }
                    if (o) this._trigger(this.dates.length ? "changeDate" : "clearDate"), this.isInput ? n = this.element : this.component && (n = this.element.find("input")), n && n.change()
                } else 27 === t.keyCode && this.show()
            },
            showMode: function(t) {
                t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + t))), this.picker.children("div").hide().filter(".datepicker-" + m.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
            }
        };
        var l = function(e, i) {
            this.element = t(e), this.inputs = t.map(i.inputs, function(t) {
                return t.jquery ? t[0] : t
            }), delete i.inputs, d.call(t(this.inputs), i).bind("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function(e) {
                return t(e).data("datepicker")
            }), this.updateDates()
        };
        l.prototype = {
            updateDates: function() {
                this.dates = t.map(this.pickers, function(t) {
                    return t.getUTCDate()
                }), this.updateRanges()
            },
            updateRanges: function() {
                var e = t.map(this.dates, function(t) {
                    return t.valueOf()
                });
                t.each(this.pickers, function(t, i) {
                    i.setRange(e)
                })
            },
            dateUpdated: function(e) {
                if (!this.updating) {
                    this.updating = !0;
                    var i = t(e.target).data("datepicker").getUTCDate(),
                        a = t.inArray(e.target, this.inputs),
                        s = a - 1,
                        n = a + 1,
                        o = this.inputs.length;
                    if (-1 !== a) {
                        if (t.each(this.pickers, function(t, e) {
                                e.getUTCDate() || e.setUTCDate(i)
                            }), i < this.dates[s])
                            for (; s >= 0 && i < this.dates[s];) this.pickers[s--].setUTCDate(i);
                        else if (i > this.dates[n])
                            for (; o > n && i > this.dates[n];) this.pickers[n++].setUTCDate(i);
                        this.updateDates(), delete this.updating
                    }
                }
            },
            remove: function() {
                t.map(this.pickers, function(t) {
                    t.remove()
                }), delete this.element.data().datepicker
            }
        };
        var h = t.fn.datepicker,
            d = function(i) {
                var a, s = Array.apply(null, arguments);
                return s.shift(), this.each(function() {
                    var n = t(this),
                        o = n.data("datepicker"),
                        h = "object" == typeof i && i;
                    if (!o) {
                        var d = function(e, i) {
                                function a(t, e) {
                                    return e.toLowerCase()
                                }
                                var s, n = t(e).data(),
                                    o = {},
                                    r = new RegExp("^" + i.toLowerCase() + "([A-Z])");
                                i = new RegExp("^" + i.toLowerCase());
                                for (var l in n) i.test(l) && (s = l.replace(r, a), o[s] = n[l]);
                                return o
                            }(this, "date"),
                            m = function(e) {
                                var i = {};
                                if (p[e] || (e = e.split("-")[0], p[e])) {
                                    var a = p[e];
                                    return t.each(u, function(t, e) {
                                        e in a && (i[e] = a[e])
                                    }), i
                                }
                            }(t.extend({}, c, d, h).language),
                            f = t.extend({}, c, m, d, h);
                        if (n.hasClass("input-daterange") || f.inputs) {
                            var g = {
                                inputs: f.inputs || n.find("input").toArray()
                            };
                            n.data("datepicker", o = new l(this, t.extend(f, g)))
                        } else n.data("datepicker", o = new r(this, f))
                    }
                    return ("string" != typeof i || "function" != typeof o[i] || (a = o[i].apply(o, s)) === e) && void 0
                }), a !== e ? a : this
            };
        t.fn.datepicker = d;
        var c = t.fn.datepicker.defaults = {
                autoclose: !1,
                beforeShowDay: t.noop,
                beforeShowMonth: t.noop,
                calendarWeeks: !1,
                clearBtn: !1,
                toggleActive: !1,
                daysOfWeekDisabled: [],
                datesDisabled: [],
                endDate: 1 / 0,
                forceParse: !0,
                format: "mm/dd/yyyy",
                keyboardNavigation: !0,
                language: "en",
                minViewMode: 0,
                multidate: !1,
                multidateSeparator: ",",
                orientation: "auto",
                rtl: !1,
                startDate: -1 / 0,
                startView: 0,
                todayBtn: !1,
                todayHighlight: !1,
                weekStart: 0,
                disableTouchKeyboard: !1,
                enableOnReadonly: !0,
                container: "body"
            },
            u = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
        t.fn.datepicker.Constructor = r;
        var p = t.fn.datepicker.dates = {
                en: {
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    today: "Today",
                    clear: "Clear"
                }
            },
            m = {
                modes: [{
                    clsName: "days",
                    navFnc: "Month",
                    navStep: 1
                }, {
                    clsName: "months",
                    navFnc: "FullYear",
                    navStep: 1
                }, {
                    clsName: "years",
                    navFnc: "FullYear",
                    navStep: 10
                }],
                isLeapYear: function(t) {
                    return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
                },
                getDaysInMonth: function(t, e) {
                    return [31, m.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
                },
                validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
                nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
                parseFormat: function(t) {
                    var e = t.replace(this.validParts, "\0").split("\0"),
                        i = t.match(this.validParts);
                    if (!e || !e.length || !i || 0 === i.length) throw new Error("Invalid date format.");
                    return {
                        separators: e,
                        parts: i
                    }
                },
                parseDate: function(a, s, n) {
                    function o() {
                        var t = this.slice(0, u[d].length),
                            e = u[d].slice(0, t.length);
                        return t.toLowerCase() === e.toLowerCase()
                    }
                    if (!a) return e;
                    if (a instanceof Date) return a;
                    "string" == typeof s && (s = m.parseFormat(s));
                    var l, h, d, c = /([\-+]\d+)([dmwy])/,
                        u = a.match(/([\-+]\d+)([dmwy])/g);
                    if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(a)) {
                        for (a = new Date, d = 0; d < u.length; d++) switch (l = c.exec(u[d]), h = parseInt(l[1]), l[2]) {
                            case "d":
                                a.setUTCDate(a.getUTCDate() + h);
                                break;
                            case "m":
                                a = r.prototype.moveMonth.call(r.prototype, a, h);
                                break;
                            case "w":
                                a.setUTCDate(a.getUTCDate() + 7 * h);
                                break;
                            case "y":
                                a = r.prototype.moveYear.call(r.prototype, a, h)
                        }
                        return i(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), 0, 0, 0)
                    }
                    u = a && a.match(this.nonpunctuation) || [], a = new Date;
                    var f, g, v = {},
                        b = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                        y = {
                            yyyy: function(t, e) {
                                return t.setUTCFullYear(e)
                            },
                            yy: function(t, e) {
                                return t.setUTCFullYear(2e3 + e)
                            },
                            m: function(t, e) {
                                if (isNaN(t)) return t;
                                for (e -= 1; 0 > e;) e += 12;
                                for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1);
                                return t
                            },
                            d: function(t, e) {
                                return t.setUTCDate(e)
                            }
                        };
                    y.M = y.MM = y.mm = y.m, y.dd = y.d, a = i(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0);
                    var C = s.parts.slice();
                    if (u.length !== C.length && (C = t(C).filter(function(e, i) {
                            return -1 !== t.inArray(i, b)
                        }).toArray()), u.length === C.length) {
                        var _, D, w;
                        for (d = 0, _ = C.length; _ > d; d++) {
                            if (f = parseInt(u[d], 10), l = C[d], isNaN(f)) switch (l) {
                                case "MM":
                                    g = t(p[n].months).filter(o), f = t.inArray(g[0], p[n].months) + 1;
                                    break;
                                case "M":
                                    g = t(p[n].monthsShort).filter(o), f = t.inArray(g[0], p[n].monthsShort) + 1
                            }
                            v[l] = f
                        }
                        for (d = 0; d < b.length; d++) w = b[d], w in v && !isNaN(v[w]) && (D = new Date(a), y[w](D, v[w]), isNaN(D) || (a = D))
                    }
                    return a
                },
                formatDate: function(e, i, a) {
                    if (!e) return "";
                    "string" == typeof i && (i = m.parseFormat(i));
                    var s = {
                        d: e.getUTCDate(),
                        D: p[a].daysShort[e.getUTCDay()],
                        DD: p[a].days[e.getUTCDay()],
                        m: e.getUTCMonth() + 1,
                        M: p[a].monthsShort[e.getUTCMonth()],
                        MM: p[a].months[e.getUTCMonth()],
                        yy: e.getUTCFullYear().toString().substring(2),
                        yyyy: e.getUTCFullYear()
                    };
                    s.dd = (s.d < 10 ? "0" : "") + s.d, s.mm = (s.m < 10 ? "0" : "") + s.m, e = [];
                    for (var n = t.extend([], i.separators), o = 0, r = i.parts.length; r >= o; o++) n.length && e.push(n.shift()), e.push(s[i.parts[o]]);
                    return e.join("")
                },
                headTemplate: '<thead><tr><th class="prev">&#171;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&#187;</th></tr></thead>',
                contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
                footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
            };
        m.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + m.headTemplate + "<tbody></tbody>" + m.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + m.headTemplate + m.contTemplate + m.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + m.headTemplate + m.contTemplate + m.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = m, t.fn.datepicker.noConflict = function() {
            return t.fn.datepicker = h, this
        }, t.fn.datepicker.version = "1.4.0", t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(e) {
            var i = t(this);
            i.data("datepicker") || (e.preventDefault(), d.call(i, "show"))
        }), t(function() {
            d.call(t('[data-provide="datepicker-inline"]'))
        })
    }(window.jQuery),
    function() {
        var t, e, i, a, s, n, o = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            r = [].indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        t = jQuery, e = window, document, n = "immybox", a = {
            choices: [],
            maxResults: 50,
            showArrow: !0,
            openOnClick: !0,
            defaultSelectedValue: void 0,
            filterFn: function(t) {
                return function(e) {
                    return e.text.toLowerCase().indexOf(t.toLowerCase()) >= 0
                }
            },
            formatChoice: function(t) {
                var e;
                return null != t && "" !== t ? (e = new RegExp(t.replace(/[#-.]|[[-^]|[?|{}]/g, "\\$&"), "gi"), function(t) {
                    return t.text.replace(e, '<span class="highlight">$&</span>')
                }) : function(t) {
                    return t.text
                }
            }
        }, s = [], i = function() {
            function i(e, i) {
                var s, r;
                this.reposition = o(this.reposition, this), this.revert = o(this.revert, this), this.openResults = o(this.openResults, this), this.doSelection = o(this.doSelection, this), this.doQuery = o(this.doQuery, this), s = this, this.element = t(e), this.element.addClass(n), this.element.attr("autocomplete", "off"), this._defaults = a, this._name = n, this.options = t.extend({}, a, i), this.choices = this.options.choices, this.selectedChoice = null, this.defaultSelectedChoice = null != this.options.defaultSelectedValue ? this.choices.filter(function(t) {
                    return t.value === s.options.defaultSelectedValue
                })[0] || null : this.options.defaultSelectedValue, this.options.showArrow && this.element.addClass(n + "_witharrow"), this.options.openOnClick && this.element.on("click", this.openResults), this.selectChoiceByValue(this.element.val()), this.queryResultArea = t("<div class='" + n + "_results'></div>"), "function" == typeof(r = this.queryResultArea).scrollLock && r.scrollLock(), this.queryResultAreaVisible = !1, this._val = this.element.val(), this.oldQuery = this._val, this.queryResultArea.on("click", "li." + n + "_choice", function() {
                    var e;
                    e = t(this).data("value"), s.selectChoiceByValue(e), s.hideResults(), s._val = s.element.val(), s.element.focus()
                }), this.queryResultArea.on("mouseenter", "li." + n + "_choice", function() {
                    s.queryResultArea.find("li." + n + "_choice.active").removeClass("active"), t(this).addClass("active")
                }), this.element.on("keyup change search", this.doQuery), this.element.on("keydown", this.doSelection)
            }
            return i.prototype.doQuery = function() {
                var t;
                t = this.element.val(), this._val !== t && (this._val = t, this.oldQuery = t, "" === t ? (this.hideResults(), this.selectChoiceByValue(null)) : this.insertFilteredChoiceElements(t))
            }, i.prototype.doSelection = function(t) {
                if (27 === t.which && (this.display(), this.hideResults()), this.queryResultAreaVisible) switch (t.which) {
                    case 9:
                        this.selectHighlightedChoice();
                        break;
                    case 13:
                        t.preventDefault(), this.selectHighlightedChoice();
                        break;
                    case 38:
                        t.preventDefault(), this.highlightPreviousChoice(), this.scroll();
                        break;
                    case 40:
                        t.preventDefault(), this.highlightNextChoice(), this.scroll()
                } else switch (t.which) {
                    case 40:
                        t.preventDefault(), this.insertFilteredChoiceElements(null != this.selectedChoice ? this.oldQuery : "");
                        break;
                    case 9:
                        this.revert()
                }
            }, i.prototype.openResults = function(t) {
                t.stopPropagation(), this.revertOtherInstances(), this.insertFilteredChoiceElements(null != this.selectedChoice ? this.oldQuery : "")
            }, i.prototype.revert = function() {
                this.queryResultAreaVisible ? (this.display(), this.hideResults()) : "" === this.element.val() && this.selectChoiceByValue(null)
            }, i.prototype.reposition = function() {
                this.queryResultAreaVisible && this.positionResultsArea()
            }, i.prototype.insertFilteredChoiceElements = function(e) {
                var i, a, s, o, l, h, d, c, u;
                c = (a = "" === e ? this.choices : this.choices.filter(this.options.filterFn(this.oldQuery))).slice(0, this.options.maxResults), (i = this.defaultSelectedChoice) && r.call(a, i) >= 0 && (r.call(c, i) < 0 ? (c.unshift(i), c.pop()) : c[0] !== i && (c = c.filter(function(t) {
                    return t.value !== i.value
                })).unshift(i)), 1 === (s = this.options.formatChoice).length && (s = s(e)), d = !1, 0 === (h = c.map((u = this, function(i) {
                    var a;
                    return (a = t("<li class='" + n + "_choice'></li>")).attr("data-value", i.value), a.html(s(i, e)), i === u.selectedChoice && (d = !0, a.addClass("active")), a
                }))).length ? (o = t("<p class='" + n + "_noresults'>no matches</p>"), this.queryResultArea.empty().append(o)) : (d || null !== i && h[0].addClass("active"), l = t("<ul></ul>").append(h), this.queryResultArea.empty().append(l)), this.showResults()
            }, i.prototype.scroll = function() {
                var t, e, i, a, s, n, o;
                n = this.queryResultArea.height(), s = (o = this.queryResultArea.scrollTop()) + n, null != (t = this.getHighlightedChoice()) && (i = t.outerHeight(), e = (a = t.position().top + o) + i, o > a && this.queryResultArea.scrollTop(a), e > s && this.queryResultArea.scrollTop(e - n))
            }, i.prototype.positionResultsArea = function() {
                var i, a, s, n, o, r;
                a = this.element.offset(), i = this.element.outerHeight(), s = this.element.outerWidth(), o = this.queryResultArea.outerHeight(), n = a.top + i + o, r = t(e).height() + t(e).scrollTop(), this.queryResultArea.outerWidth(s), this.queryResultArea.css({
                    left: a.left
                }), this.queryResultArea.css(n > r ? {
                    top: a.top - o
                } : {
                    top: a.top + i
                })
            }, i.prototype.getHighlightedChoice = function() {
                var t;
                return 1 === (t = this.queryResultArea.find("li." + n + "_choice.active")).length ? t : null
            }, i.prototype.highlightNextChoice = function() {
                var e, i, a;
                null != (i = this.getHighlightedChoice()) ? 1 === (a = i.next("li." + n + "_choice")).length && (i.removeClass("active"), a.addClass("active")) : (e = this.queryResultArea.find("li." + n + "_choice")).length && t(e[0]).addClass("active")
            }, i.prototype.highlightPreviousChoice = function() {
                var e, i, a;
                null != (i = this.getHighlightedChoice()) ? 1 === (a = i.prev("li." + n + "_choice")).length && (i.removeClass("active"), a.addClass("active")) : (e = this.queryResultArea.find("li." + n + "_choice")).length && t(e[e.length - 1]).addClass("active")
            }, i.prototype.selectHighlightedChoice = function() {
                var t, e;
                null != (t = this.getHighlightedChoice()) ? (e = t.data("value"), this.selectChoiceByValue(e), this._val = this.element.val(), this.hideResults()) : this.revert()
            }, i.prototype.display = function() {
                null != this.selectedChoice ? (this.selectedChoice.text, this.element.val(this.selectedChoice.text)) : this.element.val(""), this._val = this.element.val()
            }, i.prototype.selectChoiceByValue = function(t) {
                var e, i, a;
                a = this.getValue(), null != t && "" !== t ? (e = this.choices.filter(function(e) {
                    return e.value == t
                }), this.selectedChoice = null != e[0] ? e[0] : null) : this.selectedChoice = null, (i = this.getValue()) !== a && this.element.trigger("update", [i]), this.display()
            }, i.prototype.revertOtherInstances = function() {
                var t, e, i;
                for (e = 0, i = s.length; i > e; e++) t = s[e], t !== this && t.revert()
            }, i.prototype.publicMethods = ["showResults", "hideResults", "getChoices", "setChoices", "getValue", "setValue", "destroy"], i.prototype.showResults = function() {
                t("body").append(this.queryResultArea), this.queryResultAreaVisible = !0, this.scroll(), this.positionResultsArea()
            }, i.prototype.hideResults = function() {
                this.queryResultArea.detach(), this.queryResultAreaVisible = !1
            }, i.prototype.getChoices = function() {
                return this.choices
            }, i.prototype.setChoices = function(t) {
                return this.choices = t, null != this.selectedChoice && this.selectChoiceByValue(this.selectedChoice.value), this.oldQuery = "", t
            }, i.prototype.getValue = function() {
                return null != this.selectedChoice ? this.selectedChoice.value : null
            }, i.prototype.setValue = function(t) {
                var e;
                return (e = this.getValue()) !== t ? (this.selectChoiceByValue(t), this.oldQuery = "", this.getValue()) : e
            }, i.prototype.destroy = function() {
                var e;
                this.element.off("keyup change search", this.doQuery), this.element.off("keydown", this.doSelection), this.options.openOnClick && this.element.off("click", this.openResults), this.element.removeClass(n), this.queryResultArea.remove(), t.removeData(this.element[0], "plugin_" + n), s = s.filter((e = this, function(t) {
                    return t !== e
                }))
            }, i
        }(), t("html").on("click", function() {
            var t, e, i;
            for (e = 0, i = s.length; i > e; e++) t = s[e], t.revert()
        }), t(e).on("resize scroll", function() {
            var t, e, i;
            for (e = 0, i = s.length; i > e; e++) t = s[e], t.queryResultAreaVisible && t.reposition()
        }), t.fn[n] = function(e) {
            var a, o;
            return a = Array.prototype.slice.call(arguments, 1), o = [], this.each(function() {
                var l, h, d;
                if (t.data(this, "plugin_" + n)) {
                    if (null != e && "string" == typeof e) {
                        if (d = t.data(this, "plugin_" + n), l = e, !(r.call(d.publicMethods, l) >= 0)) throw new Error(n + " has no method '" + l + "'");
                        o.push(d[l].apply(d, a))
                    }
                } else h = new i(this, e), s.push(h), o.push(t.data(this, "plugin_" + n, h))
            }), o
        }
    }.call(this),
    function(t, e) {
        if ("function" == typeof define && define.amd) define(["jquery"], e);
        else if ("object" == typeof module && module.exports) {
            var i;
            try {
                i = require("jquery")
            } catch (t) {
                i = null
            }
            module.exports = e(i)
        } else t.Slider = e(t.jQuery)
    }(this, function(t) {
        var e;
        return function(t) {
                "use strict";

                function e() {}
                var i = Array.prototype.slice;
                ! function(t) {
                    if (t) {
                        var a = "undefined" == typeof console ? e : function(t) {
                            console.error(t)
                        };
                        t.bridget = function(e, s) {
                            var n, o, r;
                            (r = s).prototype.option || (r.prototype.option = function(e) {
                                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                            }), n = e, o = s, t.fn[n] = function(e) {
                                if ("string" == typeof e) {
                                    for (var s = i.call(arguments, 1), r = 0, l = this.length; l > r; r++) {
                                        var h = this[r],
                                            d = t.data(h, n);
                                        if (d)
                                            if (t.isFunction(d[e]) && "_" !== e.charAt(0)) {
                                                var c = d[e].apply(d, s);
                                                if (void 0 !== c && c !== d) return c
                                            } else a("no such method '" + e + "' for " + n + " instance");
                                        else a("cannot call methods on " + n + " prior to initialization; attempted to call '" + e + "'")
                                    }
                                    return this
                                }
                                var u = this.map(function() {
                                    var i = t.data(this, n);
                                    return i ? (i.option(e), i._init()) : (i = new o(this, e), t.data(this, n, i)), t(this)
                                });
                                return !u || u.length > 1 ? u : u[0]
                            }
                        }, t.bridget
                    }
                }(t)
            }(t),
            function(t) {
                function i(e, i) {
                    function a(t, e) {
                        var i = "data-slider-" + e.replace(/_/g, "-"),
                            a = t.getAttribute(i);
                        try {
                            return JSON.parse(a)
                        } catch (t) {
                            return a
                        }
                    }
                    "string" == typeof e ? this.element = document.querySelector(e) : e instanceof HTMLElement && (this.element = e), i = i || {};
                    for (var n = Object.keys(this.defaultOptions), o = 0; o < n.length; o++) {
                        var r = n[o],
                            l = i[r];
                        l = null !== (l = void 0 !== l ? l : a(this.element, r)) ? l : this.defaultOptions[r], this.options || (this.options = {}), this.options[r] = l
                    }
                    var h, d, c, u, p, m = this.element.style.width,
                        f = !1,
                        g = this.element.parentNode;
                    if (this.sliderElem) f = !0;
                    else {
                        this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";
                        var v = document.createElement("div");
                        if (v.className = "slider-track", (d = document.createElement("div")).className = "slider-track-low", (h = document.createElement("div")).className = "slider-selection", (c = document.createElement("div")).className = "slider-track-high", (u = document.createElement("div")).className = "slider-handle min-slider-handle", (p = document.createElement("div")).className = "slider-handle max-slider-handle", v.appendChild(d), v.appendChild(h), v.appendChild(c), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
                            for (o = 0; o < this.options.ticks.length; o++) {
                                var b = document.createElement("div");
                                b.className = "slider-tick", this.ticks.push(b), v.appendChild(b)
                            }
                            h.className += " tick-slider-selection"
                        }
                        if (v.appendChild(u), v.appendChild(p), this.tickLabels = [], Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0)
                            for (this.tickLabelContainer = document.createElement("div"), this.tickLabelContainer.className = "slider-tick-label-container", o = 0; o < this.options.ticks_labels.length; o++) {
                                var y = document.createElement("div");
                                y.className = "slider-tick-label", y.innerHTML = this.options.ticks_labels[o], this.tickLabels.push(y), this.tickLabelContainer.appendChild(y)
                            }
                        var C = function(t) {
                                var e = document.createElement("div");
                                e.className = "tooltip-arrow";
                                var i = document.createElement("div");
                                i.className = "tooltip-inner", t.appendChild(e), t.appendChild(i)
                            },
                            _ = document.createElement("div");
                        _.className = "tooltip tooltip-main", C(_);
                        var D = document.createElement("div");
                        D.className = "tooltip tooltip-min", C(D);
                        var w = document.createElement("div");
                        w.className = "tooltip tooltip-max", C(w), this.sliderElem.appendChild(v), this.sliderElem.appendChild(_), this.sliderElem.appendChild(D), this.sliderElem.appendChild(w), this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), g.insertBefore(this.sliderElem, this.element), this.element.style.display = "none"
                    }
                    if (t && (this.$element = t(this.element), this.$sliderElem = t(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), s[this.options.scale] && (this.options.scale = s[this.options.scale]), !0 === f && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "top", "width", "height"].forEach(function(t) {
                            this._removeProperty(this.trackLow, t), this._removeProperty(this.trackSelection, t), this._removeProperty(this.trackHigh, t)
                        }, this), [this.handle1, this.handle2].forEach(function(t) {
                            this._removeProperty(t, "left"), this._removeProperty(t, "top")
                        }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function(t) {
                            this._removeProperty(t, "left"), this._removeProperty(t, "top"), this._removeProperty(t, "margin-left"), this._removeProperty(t, "margin-top"), this._removeClass(t, "right"), this._removeClass(t, "top")
                        }, this)), "vertical" === this.options.orientation ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight", this._addClass(this.tooltip, "right"), this.tooltip.style.left = "100%", this._addClass(this.tooltip_min, "right"), this.tooltip_min.style.left = "100%", this._addClass(this.tooltip_max, "right"), this.tooltip_max.style.left = "100%") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = m, this.options.orientation = "horizontal", this.stylePos = "left", this.mousePos = "pageX", this.sizePos = "offsetWidth", this._addClass(this.tooltip, "top"), this.tooltip.style.top = -this.tooltip.outerHeight - 14 + "px", this._addClass(this.tooltip_min, "top"), this.tooltip_min.style.top = -this.tooltip_min.outerHeight - 14 + "px", this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = -this.tooltip_max.outerHeight - 14 + "px"), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (this.options.max = Math.max.apply(Math, this.options.ticks), this.options.min = Math.min.apply(Math, this.options.ticks)), Array.isArray(this.options.value) ? this.options.range = !0 : this.options.range && (this.options.value = [this.options.value, this.options.max]), this.trackLow = d || this.trackLow, this.trackSelection = h || this.trackSelection, this.trackHigh = c || this.trackHigh, "none" === this.options.selection && (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")), this.handle1 = u || this.handle1, this.handle2 = p || this.handle2, !0 === f)
                        for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), o = 0; o < this.ticks.length; o++) this._removeClass(this.ticks[o], "round triangle hide");
                    if (-1 !== ["round", "triangle", "custom"].indexOf(this.options.handle))
                        for (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle), o = 0; o < this.ticks.length; o++) this._addClass(this.ticks[o], this.options.handle);
                    this.offset = this._offset(this.sliderElem), this.size = this.sliderElem[this.sizePos], this.setValue(this.options.value), this.handle1Keydown = this._keydown.bind(this, 0), this.handle1.addEventListener("keydown", this.handle1Keydown, !1), this.handle2Keydown = this._keydown.bind(this, 1), this.handle2.addEventListener("keydown", this.handle2Keydown, !1), this.mousedown = this._mousedown.bind(this), this.touchCapable && this.sliderElem.addEventListener("touchstart", this.mousedown, !1), this.sliderElem.addEventListener("mousedown", this.mousedown, !1), "hide" === this.options.tooltip ? (this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), this._addClass(this.tooltip_max, "hide")) : "always" === this.options.tooltip ? (this._showTooltip(), this._alwaysShowTooltip = !0) : (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), this.sliderElem.addEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.addEventListener("mouseleave", this.hideTooltip, !1), this.handle1.addEventListener("focus", this.showTooltip, !1), this.handle1.addEventListener("blur", this.hideTooltip, !1), this.handle2.addEventListener("focus", this.showTooltip, !1), this.handle2.addEventListener("blur", this.hideTooltip, !1)), this.options.enabled ? this.enable() : this.disable()
                }
                var a = function(t) {
                        return "Invalid input value '" + t + "' passed in"
                    },
                    s = {
                        linear: {
                            toValue: function(t) {
                                var e = t / 100 * (this.options.max - this.options.min),
                                    i = this.options.min + Math.round(e / this.options.step) * this.options.step;
                                return i < this.options.min ? this.options.min : i > this.options.max ? this.options.max : i
                            },
                            toPercentage: function(t) {
                                return this.options.max === this.options.min ? 0 : 100 * (t - this.options.min) / (this.options.max - this.options.min)
                            }
                        },
                        logarithmic: {
                            toValue: function(t) {
                                var e = 0 === this.options.min ? 0 : Math.log(this.options.min),
                                    i = Math.log(this.options.max);
                                return Math.exp(e + (i - e) * t / 100)
                            },
                            toPercentage: function(t) {
                                if (this.options.max === this.options.min) return 0;
                                var e = Math.log(this.options.max),
                                    i = 0 === this.options.min ? 0 : Math.log(this.options.min);
                                return 100 * ((0 === t ? 0 : Math.log(t)) - i) / (e - i)
                            }
                        }
                    };
                if ((e = function(t, e) {
                        return i.call(this, t, e), this
                    }).prototype = {
                        _init: function() {},
                        constructor: e,
                        defaultOptions: {
                            id: "",
                            min: 0,
                            max: 10,
                            step: 1,
                            precision: 0,
                            orientation: "horizontal",
                            value: 5,
                            range: !1,
                            selection: "before",
                            tooltip: "show",
                            tooltip_split: !1,
                            handle: "round",
                            reversed: !1,
                            enabled: !0,
                            formatter: function(t) {
                                return Array.isArray(t) ? t[0] + " : " + t[1] : t
                            },
                            natural_arrow_keys: !1,
                            ticks: [],
                            ticks_labels: [],
                            ticks_snap_bounds: 0,
                            scale: "linear",
                            focus: !1
                        },
                        over: !1,
                        inDrag: !1,
                        getValue: function() {
                            return this.options.range ? this.options.value : this.options.value[0]
                        },
                        setValue: function(t, e, i) {
                            t || (t = 0);
                            var a = this.getValue();
                            this.options.value = this._validateInputValue(t);
                            var s = this._applyPrecision.bind(this);
                            this.options.range ? (this.options.value[0] = s(this.options.value[0]), this.options.value[1] = s(this.options.value[1]), this.options.value[0] = Math.max(this.options.min, Math.min(this.options.max, this.options.value[0])), this.options.value[1] = Math.max(this.options.min, Math.min(this.options.max, this.options.value[1]))) : (this.options.value = s(this.options.value), this.options.value = [Math.max(this.options.min, Math.min(this.options.max, this.options.value))], this._addClass(this.handle2, "hide"), this.options.value[1] = "after" === this.options.selection ? this.options.max : this.options.min), this.percentage = this.options.max > this.options.min ? [this._toPercentage(this.options.value[0]), this._toPercentage(this.options.value[1]), 100 * this.options.step / (this.options.max - this.options.min)] : [0, 0, 100], this._layout();
                            var n = this.options.range ? this.options.value : this.options.value[0];
                            return !0 === e && this._trigger("slide", n), a !== n && !0 === i && this._trigger("change", {
                                oldValue: a,
                                newValue: n
                            }), this._setDataVal(n), this
                        },
                        destroy: function() {
                            this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), this.element.style.display = "", this._cleanUpEventCallbacksMap(), this.element.removeAttribute("data"), t && (this._unbindJQueryEventHandlers(), this.$element.removeData("slider"))
                        },
                        disable: function() {
                            return this.options.enabled = !1, this.handle1.removeAttribute("tabindex"), this.handle2.removeAttribute("tabindex"), this._addClass(this.sliderElem, "slider-disabled"), this._trigger("slideDisabled"), this
                        },
                        enable: function() {
                            return this.options.enabled = !0, this.handle1.setAttribute("tabindex", 0), this.handle2.setAttribute("tabindex", 0), this._removeClass(this.sliderElem, "slider-disabled"), this._trigger("slideEnabled"), this
                        },
                        toggle: function() {
                            return this.options.enabled ? this.disable() : this.enable(), this
                        },
                        isEnabled: function() {
                            return this.options.enabled
                        },
                        on: function(t, e) {
                            return this._bindNonQueryEventHandler(t, e), this
                        },
                        getAttribute: function(t) {
                            return t ? this.options[t] : this.options
                        },
                        setAttribute: function(t, e) {
                            return this.options[t] = e, this
                        },
                        refresh: function() {
                            return this._removeSliderEventHandlers(), i.call(this, this.element, this.options), t && t.data(this.element, "slider", this), this
                        },
                        relayout: function() {
                            return this._layout(), this
                        },
                        _removeSliderEventHandlers: function() {
                            this.handle1.removeEventListener("keydown", this.handle1Keydown, !1), this.handle1.removeEventListener("focus", this.showTooltip, !1), this.handle1.removeEventListener("blur", this.hideTooltip, !1), this.handle2.removeEventListener("keydown", this.handle2Keydown, !1), this.handle2.removeEventListener("focus", this.handle2Keydown, !1), this.handle2.removeEventListener("blur", this.handle2Keydown, !1), this.sliderElem.removeEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, !1), this.sliderElem.removeEventListener("touchstart", this.mousedown, !1), this.sliderElem.removeEventListener("mousedown", this.mousedown, !1)
                        },
                        _bindNonQueryEventHandler: function(t, e) {
                            void 0 === this.eventToCallbackMap[t] && (this.eventToCallbackMap[t] = []), this.eventToCallbackMap[t].push(e)
                        },
                        _cleanUpEventCallbacksMap: function() {
                            for (var t = Object.keys(this.eventToCallbackMap), e = 0; e < t.length; e++) {
                                var i = t[e];
                                this.eventToCallbackMap[i] = null
                            }
                        },
                        _showTooltip: function() {
                            !1 === this.options.tooltip_split ? this._addClass(this.tooltip, "in") : (this._addClass(this.tooltip_min, "in"), this._addClass(this.tooltip_max, "in")), this.over = !0
                        },
                        _hideTooltip: function() {
                            !1 === this.inDrag && !0 !== this.alwaysShowTooltip && (this._removeClass(this.tooltip, "in"), this._removeClass(this.tooltip_min, "in"), this._removeClass(this.tooltip_max, "in")), this.over = !1
                        },
                        _layout: function() {
                            var t, e;
                            if (t = this.options.reversed ? [100 - this.percentage[0], this.percentage[1]] : [this.percentage[0], this.percentage[1]], this.handle1.style[this.stylePos] = t[0] + "%", this.handle2.style[this.stylePos] = t[1] + "%", Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
                                var i = Math.max.apply(Math, this.options.ticks),
                                    a = Math.min.apply(Math, this.options.ticks),
                                    s = "vertical" === this.options.orientation ? "height" : "width",
                                    n = "vertical" === this.options.orientation ? "marginTop" : "marginLeft",
                                    o = this.size / (this.options.ticks.length - 1);
                                if (this.tickLabelContainer && (this.tickLabelContainer.style[n] = -o / 2 + "px", "horizontal" === this.options.orientation)) {
                                    var r = this.tickLabelContainer.offsetHeight - this.sliderElem.offsetHeight;
                                    this.sliderElem.style.marginBottom = r + "px"
                                }
                                for (var l = 0; l < this.options.ticks.length; l++) {
                                    var h = 100 * (this.options.ticks[l] - a) / (i - a);
                                    this.ticks[l].style[this.stylePos] = h + "%", this._removeClass(this.ticks[l], "in-selection"), h <= t[0] && !this.options.range ? this._addClass(this.ticks[l], "in-selection") : h >= t[0] && h <= t[1] && this._addClass(this.ticks[l], "in-selection"), this.tickLabels[l] && (this.tickLabels[l].style[s] = o + "px")
                                }
                            }
                            if ("vertical" === this.options.orientation) this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(t[0], t[1]) + "%", this.trackSelection.style.top = Math.min(t[0], t[1]) + "%", this.trackSelection.style.height = Math.abs(t[0] - t[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height = 100 - Math.min(t[0], t[1]) - Math.abs(t[0] - t[1]) + "%";
                            else {
                                this.trackLow.style.left = "0", this.trackLow.style.width = Math.min(t[0], t[1]) + "%", this.trackSelection.style.left = Math.min(t[0], t[1]) + "%", this.trackSelection.style.width = Math.abs(t[0] - t[1]) + "%", this.trackHigh.style.right = "0", this.trackHigh.style.width = 100 - Math.min(t[0], t[1]) - Math.abs(t[0] - t[1]) + "%";
                                var d = this.tooltip_min.getBoundingClientRect(),
                                    c = this.tooltip_max.getBoundingClientRect();
                                d.right > c.left ? (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = this.tooltip_min.style.top)
                            }
                            if (this.options.range) {
                                e = this.options.formatter(this.options.value), this._setText(this.tooltipInner, e), this.tooltip.style[this.stylePos] = (t[1] + t[0]) / 2 + "%", "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px"), "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px");
                                var u = this.options.formatter(this.options.value[0]);
                                this._setText(this.tooltipInner_min, u);
                                var p = this.options.formatter(this.options.value[1]);
                                this._setText(this.tooltipInner_max, p), this.tooltip_min.style[this.stylePos] = t[0] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip_min, "margin-top", -this.tooltip_min.offsetHeight / 2 + "px") : this._css(this.tooltip_min, "margin-left", -this.tooltip_min.offsetWidth / 2 + "px"), this.tooltip_max.style[this.stylePos] = t[1] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip_max, "margin-top", -this.tooltip_max.offsetHeight / 2 + "px") : this._css(this.tooltip_max, "margin-left", -this.tooltip_max.offsetWidth / 2 + "px")
                            } else e = this.options.formatter(this.options.value[0]), this._setText(this.tooltipInner, e), this.tooltip.style[this.stylePos] = t[0] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px")
                        },
                        _removeProperty: function(t, e) {
                            t.style.removeProperty ? t.style.removeProperty(e) : t.style.removeAttribute(e)
                        },
                        _mousedown: function(t) {
                            if (!this.options.enabled) return !1;
                            this.offset = this._offset(this.sliderElem), this.size = this.sliderElem[this.sizePos];
                            var e = this._getPercentage(t);
                            if (this.options.range) {
                                var i = Math.abs(this.percentage[0] - e),
                                    a = Math.abs(this.percentage[1] - e);
                                this.dragged = a > i ? 0 : 1
                            } else this.dragged = 0;
                            this.percentage[this.dragged] = this.options.reversed ? 100 - e : e, this._layout(), this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1), this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1), this.mousemove = this._mousemove.bind(this), this.mouseup = this._mouseup.bind(this), this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)), document.addEventListener("mousemove", this.mousemove, !1), document.addEventListener("mouseup", this.mouseup, !1), this.inDrag = !0;
                            var s = this._calculateValue();
                            return this._trigger("slideStart", s), this._setDataVal(s), this.setValue(s, !1, !0), this._pauseEvent(t), this.options.focus && this._triggerFocusOnHandle(this.dragged), !0
                        },
                        _triggerFocusOnHandle: function(t) {
                            0 === t && this.handle1.focus(), 1 === t && this.handle2.focus()
                        },
                        _keydown: function(t, e) {
                            if (!this.options.enabled) return !1;
                            var i;
                            switch (e.keyCode) {
                                case 37:
                                case 40:
                                    i = -1;
                                    break;
                                case 39:
                                case 38:
                                    i = 1
                            }
                            if (i) {
                                if (this.options.natural_arrow_keys) {
                                    var a = "vertical" === this.options.orientation && !this.options.reversed,
                                        s = "horizontal" === this.options.orientation && this.options.reversed;
                                    (a || s) && (i = -i)
                                }
                                var n = this.options.value[t] + i * this.options.step;
                                return this.options.range && (n = [t ? this.options.value[0] : n, t ? n : this.options.value[1]]), this._trigger("slideStart", n), this._setDataVal(n), this.setValue(n, !0, !0), this._trigger("slideStop", n), this._setDataVal(n), this._layout(), this._pauseEvent(e), !1
                            }
                        },
                        _pauseEvent: function(t) {
                            t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault(), t.cancelBubble = !0, t.returnValue = !1
                        },
                        _mousemove: function(t) {
                            if (!this.options.enabled) return !1;
                            var e = this._getPercentage(t);
                            this._adjustPercentageForRangeSliders(e), this.percentage[this.dragged] = this.options.reversed ? 100 - e : e, this._layout();
                            var i = this._calculateValue(!0);
                            return this.setValue(i, !0, !0), !1
                        },
                        _adjustPercentageForRangeSliders: function(t) {
                            this.options.range && (0 === this.dragged && this.percentage[1] < t ? (this.percentage[0] = this.percentage[1], this.dragged = 1) : 1 === this.dragged && this.percentage[0] > t && (this.percentage[1] = this.percentage[0], this.dragged = 0))
                        },
                        _mouseup: function() {
                            if (!this.options.enabled) return !1;
                            this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), document.removeEventListener("mousemove", this.mousemove, !1), document.removeEventListener("mouseup", this.mouseup, !1), this.inDrag = !1, !1 === this.over && this._hideTooltip();
                            var t = this._calculateValue(!0);
                            return this._layout(), this._trigger("slideStop", t), this._setDataVal(t), !1
                        },
                        _calculateValue: function(t) {
                            var e;
                            if (this.options.range ? (e = [this.options.min, this.options.max], 0 !== this.percentage[0] && (e[0] = this._toValue(this.percentage[0]), e[0] = this._applyPrecision(e[0])), 100 !== this.percentage[1] && (e[1] = this._toValue(this.percentage[1]), e[1] = this._applyPrecision(e[1]))) : (e = this._toValue(this.percentage[0]), e = parseFloat(e), e = this._applyPrecision(e)), t) {
                                for (var i = [e, 1 / 0], a = 0; a < this.options.ticks.length; a++) {
                                    var s = Math.abs(this.options.ticks[a] - e);
                                    s <= i[1] && (i = [this.options.ticks[a], s])
                                }
                                if (i[1] <= this.options.ticks_snap_bounds) return i[0]
                            }
                            return e
                        },
                        _applyPrecision: function(t) {
                            var e = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
                            return this._applyToFixedAndParseFloat(t, e)
                        },
                        _getNumDigitsAfterDecimalPlace: function(t) {
                            var e = ("" + t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                            return e ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? +e[2] : 0)) : 0
                        },
                        _applyToFixedAndParseFloat: function(t, e) {
                            var i = t.toFixed(e);
                            return parseFloat(i)
                        },
                        _getPercentage: function(t) {
                            !this.touchCapable || "touchstart" !== t.type && "touchmove" !== t.type || (t = t.touches[0]);
                            var e = (t[this.mousePos] - this.offset[this.stylePos]) / this.size * 100;
                            return e = Math.round(e / this.percentage[2]) * this.percentage[2], Math.max(0, Math.min(100, e))
                        },
                        _validateInputValue: function(t) {
                            if ("number" == typeof t) return t;
                            if (Array.isArray(t)) return this._validateArray(t), t;
                            throw new Error(a(t))
                        },
                        _validateArray: function(t) {
                            for (var e = 0; e < t.length; e++) {
                                var i = t[e];
                                if ("number" != typeof i) throw new Error(a(i))
                            }
                        },
                        _setDataVal: function(t) {
                            var e = "value: '" + t + "'";
                            this.element.setAttribute("data", e), this.element.setAttribute("value", t), this.element.value = t
                        },
                        _trigger: function(e, i) {
                            i = i || 0 === i ? i : void 0;
                            var a = this.eventToCallbackMap[e];
                            if (a && a.length)
                                for (var s = 0; s < a.length; s++) {
                                    (0, a[s])(i)
                                }
                            t && this._triggerJQueryEvent(e, i)
                        },
                        _triggerJQueryEvent: function(t, e) {
                            var i = {
                                type: t,
                                value: e
                            };
                            this.$element.trigger(i), this.$sliderElem.trigger(i)
                        },
                        _unbindJQueryEventHandlers: function() {
                            this.$element.off(), this.$sliderElem.off()
                        },
                        _setText: function(t, e) {
                            void 0 !== t.innerText ? t.innerText = e : void 0 !== t.textContent && (t.textContent = e)
                        },
                        _removeClass: function(t, e) {
                            for (var i = e.split(" "), a = t.className, s = 0; s < i.length; s++) {
                                var n = i[s],
                                    o = new RegExp("(?:\\s|^)" + n + "(?:\\s|$)");
                                a = a.replace(o, " ")
                            }
                            t.className = a.trim()
                        },
                        _addClass: function(t, e) {
                            for (var i = e.split(" "), a = t.className, s = 0; s < i.length; s++) {
                                var n = i[s];
                                new RegExp("(?:\\s|^)" + n + "(?:\\s|$)").test(a) || (a += " " + n)
                            }
                            t.className = a.trim()
                        },
                        _offset: function(t) {
                            if ("vertical" === this.options.orientation) return {
                                left: t.offsetLeft,
                                top: t.offsetTop
                            };
                            var e = t.getBoundingClientRect();
                            return {
                                left: e.left,
                                top: e.top
                            }
                        },
                        _css: function(e, i, a) {
                            if (t) t.style(e, i, a);
                            else {
                                var s = i.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(t, e) {
                                    return e.toUpperCase()
                                });
                                e.style[s] = a
                            }
                        },
                        _toValue: function(t) {
                            return this.options.scale.toValue.apply(this, [t])
                        },
                        _toPercentage: function(t) {
                            return this.options.scale.toPercentage.apply(this, [t])
                        }
                    }, t) {
                    var n = t.fn.slider ? "bootstrapSlider" : "slider";
                    t.bridget(n, e)
                }
            }(t), e
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        function e(e, a) {
            var s, n, o, r = e.nodeName.toLowerCase();
            return "area" === r ? (n = (s = e.parentNode).name, !(!e.href || !n || "map" !== s.nodeName.toLowerCase()) && (!!(o = t("img[usemap='#" + n + "']")[0]) && i(o))) : (/^(input|select|textarea|button|object)$/.test(r) ? !e.disabled : "a" === r && e.href || a) && i(e)
        }

        function i(e) {
            return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
                return "hidden" === t.css(this, "visibility")
            }).length
        }
        var a, s, n, o;
        t.ui = t.ui || {}, t.extend(t.ui, {
            version: "1.11.4",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), t.fn.extend({
            scrollParent: function(e) {
                var i = this.css("position"),
                    a = "absolute" === i,
                    s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    n = this.parents().filter(function() {
                        var e = t(this);
                        return (!a || "static" !== e.css("position")) && s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== i && n.length ? n : t(this[0].ownerDocument || document)
            },
            uniqueId: (o = 0, function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++o)
                })
            }),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                })
            }
        }), t.extend(t.expr[":"], {
            data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                return function(i) {
                    return !!t.data(i, e)
                }
            }) : function(e, i, a) {
                return !!t.data(e, a[3])
            },
            focusable: function(i) {
                return e(i, !isNaN(t.attr(i, "tabindex")))
            },
            tabbable: function(i) {
                var a = t.attr(i, "tabindex"),
                    s = isNaN(a);
                return (s || a >= 0) && e(i, !s)
            }
        }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(e, i) {
            function a(e, i, a, n) {
                return t.each(s, function() {
                    i -= parseFloat(t.css(e, "padding" + this)) || 0, a && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), n && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                }), i
            }
            var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                n = i.toLowerCase(),
                o = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                };
            t.fn["inner" + i] = function(e) {
                return void 0 === e ? o["inner" + i].call(this) : this.each(function() {
                    t(this).css(n, a(this, e) + "px")
                })
            }, t.fn["outer" + i] = function(e, s) {
                return "number" != typeof e ? o["outer" + i].call(this, e) : this.each(function() {
                    t(this).css(n, a(this, e, !0, s) + "px")
                })
            }
        }), t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = (n = t.fn.removeData, function(e) {
            return arguments.length ? n.call(this, t.camelCase(e)) : n.call(this)
        })), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
            focus: (s = t.fn.focus, function(e, i) {
                return "number" == typeof e ? this.each(function() {
                    var a = this;
                    setTimeout(function() {
                        t(a).focus(), i && i.call(a)
                    }, e)
                }) : s.apply(this, arguments)
            }),
            disableSelection: (a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
                return this.bind(a + ".ui-disableSelection", function(t) {
                    t.preventDefault()
                })
            }),
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function(e) {
                if (void 0 !== e) return this.css("zIndex", e);
                if (this.length)
                    for (var i, a, s = t(this[0]); s.length && s[0] !== document;) {
                        if (("absolute" === (i = s.css("position")) || "relative" === i || "fixed" === i) && (a = parseInt(s.css("zIndex"), 10), !isNaN(a) && 0 !== a)) return a;
                        s = s.parent()
                    }
                return 0
            }
        }), t.ui.plugin = {
            add: function(e, i, a) {
                var s, n = t.ui[e].prototype;
                for (s in a) n.plugins[s] = n.plugins[s] || [], n.plugins[s].push([i, a[s]])
            },
            call: function(t, e, i, a) {
                var s, n = t.plugins[e];
                if (n && (a || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (s = 0; n.length > s; s++) t.options[n[s][0]] && n[s][1].apply(t.element, i)
            }
        };
        var r, l, h = 0,
            d = Array.prototype.slice;
        t.cleanData = (l = t.cleanData, function(e) {
            var i, a, s;
            for (s = 0; null != (a = e[s]); s++) try {
                (i = t._data(a, "events")) && i.remove && t(a).triggerHandler("remove")
            } catch (t) {}
            l(e)
        }), t.widget = function(e, i, a) {
            var s, n, o, r, l = {},
                h = e.split(".")[0];
            return e = e.split(".")[1], s = h + "-" + e, a || (a = i, i = t.Widget), t.expr[":"][s.toLowerCase()] = function(e) {
                return !!t.data(e, s)
            }, t[h] = t[h] || {}, n = t[h][e], o = t[h][e] = function(t, e) {
                return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e)
            }, t.extend(o, n, {
                version: a.version,
                _proto: t.extend({}, a),
                _childConstructors: []
            }), (r = new i).options = t.widget.extend({}, r.options), t.each(a, function(e, a) {
                return t.isFunction(a) ? void(l[e] = (s = function() {
                    return i.prototype[e].apply(this, arguments)
                }, n = function(t) {
                    return i.prototype[e].apply(this, t)
                }, function() {
                    var t, e = this._super,
                        i = this._superApply;
                    return this._super = s, this._superApply = n, t = a.apply(this, arguments), this._super = e, this._superApply = i, t
                })) : void(l[e] = a);
                var s, n
            }), o.prototype = t.widget.extend(r, {
                widgetEventPrefix: n && r.widgetEventPrefix || e
            }, l, {
                constructor: o,
                namespace: h,
                widgetName: e,
                widgetFullName: s
            }), n ? (t.each(n._childConstructors, function(e, i) {
                var a = i.prototype;
                t.widget(a.namespace + "." + a.widgetName, o, i._proto)
            }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
        }, t.widget.extend = function(e) {
            for (var i, a, s = d.call(arguments, 1), n = 0, o = s.length; o > n; n++)
                for (i in s[n]) a = s[n][i], s[n].hasOwnProperty(i) && void 0 !== a && (e[i] = t.isPlainObject(a) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], a) : t.widget.extend({}, a) : a);
            return e
        }, t.widget.bridge = function(e, i) {
            var a = i.prototype.widgetFullName || e;
            t.fn[e] = function(s) {
                var n = "string" == typeof s,
                    o = d.call(arguments, 1),
                    r = this;
                return n ? this.each(function() {
                    var i, n = t.data(this, a);
                    return "instance" === s ? (r = n, !1) : n ? t.isFunction(n[s]) && "_" !== s.charAt(0) ? (i = n[s].apply(n, o)) !== n && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
                }) : (o.length && (s = t.widget.extend.apply(null, [s].concat(o))), this.each(function() {
                    var e = t.data(this, a);
                    e ? (e.option(s || {}), e._init && e._init()) : t.data(this, a, new i(s, this))
                })), r
            }
        }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(e, i) {
                i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = h++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(t) {
                        t.target === i && this.destroy()
                    }
                }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: t.noop,
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: t.noop,
            widget: function() {
                return this.element
            },
            option: function(e, i) {
                var a, s, n, o = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (o = {}, a = e.split("."), e = a.shift(), a.length) {
                        for (s = o[e] = t.widget.extend({}, this.options[e]), n = 0; a.length - 1 > n; n++) s[a[n]] = s[a[n]] || {}, s = s[a[n]];
                        if (e = a.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                        s[e] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        o[e] = i
                    }
                return this._setOptions(o), this
            },
            _setOptions: function(t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function(t, e) {
                return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _on: function(e, i, a) {
                var s, n = this;
                "boolean" != typeof e && (a = i, i = e, e = !1), a ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (a = i, i = this.element, s = this.widget()), t.each(a, function(a, o) {
                    function r() {
                        return e || !0 !== n.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? n[o] : o).apply(n, arguments) : void 0
                    }
                    "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || t.guid++);
                    var l = a.match(/^([\w:-]*)\s*(.*)$/),
                        h = l[1] + n.eventNamespace,
                        d = l[2];
                    d ? s.delegate(d, h, r) : i.bind(h, r)
                })
            },
            _off: function(e, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(i).undelegate(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
            },
            _delay: function(t, e) {
                var i = this;
                return setTimeout(function() {
                    return ("string" == typeof t ? i[t] : t).apply(i, arguments)
                }, e || 0)
            },
            _hoverable: function(e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function(e) {
                        t(e.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(e) {
                        t(e.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function(e) {
                        t(e.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(e) {
                        t(e.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(e, i, a) {
                var s, n, o = this.options[e];
                if (a = a || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], n = i.originalEvent)
                    for (s in n) s in i || (i[s] = n[s]);
                return this.element.trigger(i, a), !(t.isFunction(o) && !1 === o.apply(this.element[0], [i].concat(a)) || i.isDefaultPrevented())
            }
        }, t.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(e, i) {
            t.Widget.prototype["_" + e] = function(a, s, n) {
                "string" == typeof s && (s = {
                    effect: s
                });
                var o, r = s ? !0 === s || "number" == typeof s ? i : s.effect || i : e;
                "number" == typeof(s = s || {}) && (s = {
                    duration: s
                }), o = !t.isEmptyObject(s), s.complete = n, s.delay && a.delay(s.delay), o && t.effects && t.effects.effect[r] ? a[e](s) : r !== e && a[r] ? a[r](s.duration, s.easing, n) : a.queue(function(i) {
                    t(this)[e](), n && n.call(a[0]), i()
                })
            }
        }), t.widget, t.widget("ui.tabs", {
            version: "1.11.4",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _isLocal: (r = /#.*$/, function(t) {
                var e, i;
                e = (t = t.cloneNode(!1)).href.replace(r, ""), i = location.href.replace(r, "");
                try {
                    e = decodeURIComponent(e)
                } catch (t) {}
                try {
                    i = decodeURIComponent(i)
                } catch (t) {}
                return t.hash.length > 1 && e === i
            }),
            _create: function() {
                var e = this,
                    i = this.options;
                this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                    return e.tabs.index(t)
                }))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
            },
            _initialActive: function() {
                var e = this.options.active,
                    i = this.options.collapsible,
                    a = location.hash.substring(1);
                return null === e && (a && this.tabs.each(function(i, s) {
                    return t(s).attr("aria-controls") === a ? (e = i, !1) : void 0
                }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = !!this.tabs.length && 0)), !1 !== e && (-1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0)), !i && !1 === e && this.anchors.length && (e = 0), e
            },
            _getCreateEventData: function() {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : t()
                }
            },
            _tabKeydown: function(e) {
                var i = t(this.document[0].activeElement).closest("li"),
                    a = this.tabs.index(i),
                    s = !0;
                if (!this._handlePageNav(e)) {
                    switch (e.keyCode) {
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                            a++;
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.LEFT:
                            s = !1, a--;
                            break;
                        case t.ui.keyCode.END:
                            a = this.anchors.length - 1;
                            break;
                        case t.ui.keyCode.HOME:
                            a = 0;
                            break;
                        case t.ui.keyCode.SPACE:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(a);
                        case t.ui.keyCode.ENTER:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(a !== this.options.active && a);
                        default:
                            return
                    }
                    e.preventDefault(), clearTimeout(this.activating), a = this._focusNextTab(a, s), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(a).attr("aria-selected", "true"), this.activating = this._delay(function() {
                        this.option("active", a)
                    }, this.delay))
                }
            },
            _panelKeydown: function(e) {
                this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
            },
            _handlePageNav: function(e) {
                return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function(e, i) {
                for (var a = this.tabs.length - 1; - 1 !== t.inArray((e > a && (e = 0), 0 > e && (e = a), e), this.options.disabled);) e = i ? e + 1 : e - 1;
                return e
            },
            _focusNextTab: function(t, e) {
                return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
            },
            _setOption: function(t, e) {
                return "active" === t ? void this._activate(e) : "disabled" === t ? void this._setupDisabled(e) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
            },
            _sanitizeSelector: function(t) {
                return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function() {
                var e = this.options,
                    i = this.tablist.children(":has(a[href])");
                e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                    return i.index(t)
                }), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
            },
            _refresh: function() {
                this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function() {
                var e = this,
                    i = this.tabs,
                    a = this.anchors,
                    s = this.panels;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(e) {
                    t(this).is(".ui-state-disabled") && e.preventDefault()
                }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                    t(this).closest("li").is(".ui-state-disabled") && this.blur()
                }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab",
                    tabIndex: -1
                }), this.anchors = this.tabs.map(function() {
                    return t("a", this)[0]
                }).addClass("ui-tabs-anchor").attr({
                    role: "presentation",
                    tabIndex: -1
                }), this.panels = t(), this.anchors.each(function(i, a) {
                    var s, n, o, r = t(a).uniqueId().attr("id"),
                        l = t(a).closest("li"),
                        h = l.attr("aria-controls");
                    e._isLocal(a) ? (o = (s = a.hash).substring(1), n = e.element.find(e._sanitizeSelector(s))) : (s = "#" + (o = l.attr("aria-controls") || t({}).uniqueId()[0].id), (n = e.element.find(s)).length || (n = e._createPanel(o)).insertAfter(e.panels[i - 1] || e.tablist), n.attr("aria-live", "polite")), n.length && (e.panels = e.panels.add(n)), h && l.data("ui-tabs-aria-controls", h), l.attr({
                        "aria-controls": o,
                        "aria-labelledby": r
                    }), n.attr("aria-labelledby", r)
                }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), i && (this._off(i.not(this.tabs)), this._off(a.not(this.anchors)), this._off(s.not(this.panels)))
            },
            _getList: function() {
                return this.tablist || this.element.find("ol,ul").eq(0)
            },
            _createPanel: function(e) {
                return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function(e) {
                t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
                for (var i, a = 0; i = this.tabs[a]; a++) !0 === e || -1 !== t.inArray(a, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = e
            },
            _setupEvents: function(e) {
                var i = {};
                e && t.each(e.split(" "), function(t, e) {
                    i[e] = "_eventHandler"
                }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                    click: function(t) {
                        t.preventDefault()
                    }
                }), this._on(this.anchors, i), this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }), this._on(this.panels, {
                    keydown: "_panelKeydown"
                }), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function(e) {
                var i, a = this.element.parent();
                "fill" === e ? (i = a.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                    var e = t(this),
                        a = e.css("position");
                    "absolute" !== a && "fixed" !== a && (i -= e.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function() {
                    i -= t(this).outerHeight(!0)
                }), this.panels.each(function() {
                    t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                    i = Math.max(i, t(this).height("").height())
                }).height(i))
            },
            _eventHandler: function(e) {
                var i = this.options,
                    a = this.active,
                    s = t(e.currentTarget).closest("li"),
                    n = s[0] === a[0],
                    o = n && i.collapsible,
                    r = o ? t() : this._getPanelForTab(s),
                    l = a.length ? this._getPanelForTab(a) : t(),
                    h = {
                        oldTab: a,
                        oldPanel: l,
                        newTab: o ? t() : s,
                        newPanel: r
                    };
                e.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || n && !i.collapsible || !1 === this._trigger("beforeActivate", e, h) || (i.active = !o && this.tabs.index(s), this.active = n ? t() : s, this.xhr && this.xhr.abort(), l.length || r.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), r.length && this.load(this.tabs.index(s), e), this._toggle(e, h))
            },
            _toggle: function(e, i) {
                function a() {
                    n.running = !1, n._trigger("activate", e, i)
                }

                function s() {
                    i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && n.options.show ? n._show(o, n.options.show, a) : (o.show(), a())
                }
                var n = this,
                    o = i.newPanel,
                    r = i.oldPanel;
                this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                    i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s()
                }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), s()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function() {
                    return 0 === t(this).attr("tabIndex")
                }).attr("tabIndex", -1), o.attr("aria-hidden", "false"), i.newTab.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _activate: function(e) {
                var i, a = this._findActive(e);
                a[0] !== this.active[0] && (a.length || (a = this.active), i = a.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function(e) {
                return !1 === e ? t() : this.tabs.eq(e)
            },
            _getIndex: function(t) {
                return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
            },
            _destroy: function() {
                this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
                    t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }), this.tabs.each(function() {
                    var e = t(this),
                        i = e.data("ui-tabs-aria-controls");
                    i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function(e) {
                var i = this.options.disabled;
                !1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
                    return t !== e ? t : null
                }) : t.map(this.tabs, function(t, i) {
                    return i !== e ? i : null
                })), this._setupDisabled(i))
            },
            disable: function(e) {
                var i = this.options.disabled;
                if (!0 !== i) {
                    if (void 0 === e) i = !0;
                    else {
                        if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                        i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                    }
                    this._setupDisabled(i)
                }
            },
            load: function(e, i) {
                e = this._getIndex(e);
                var a = this,
                    s = this.tabs.eq(e),
                    n = s.find(".ui-tabs-anchor"),
                    o = this._getPanelForTab(s),
                    r = {
                        tab: s,
                        panel: o
                    },
                    l = function(t, e) {
                        "abort" === e && a.panels.stop(!1, !0), s.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), t === a.xhr && delete a.xhr
                    };
                this._isLocal(n[0]) || (this.xhr = t.ajax(this._ajaxSettings(n, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (s.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.done(function(t, e, s) {
                    setTimeout(function() {
                        o.html(t), a._trigger("load", i, r), l(s, e)
                    }, 1)
                }).fail(function(t, e) {
                    setTimeout(function() {
                        l(t, e)
                    }, 1)
                })))
            },
            _ajaxSettings: function(e, i, a) {
                var s = this;
                return {
                    url: e.attr("href"),
                    beforeSend: function(e, n) {
                        return s._trigger("beforeLoad", i, t.extend({
                            jqXHR: e,
                            ajaxSettings: n
                        }, a))
                    }
                }
            },
            _getPanelForTab: function(e) {
                var i = t(e).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i))
            }
        })
    }),
    function(t) {
        var e = !1,
            i = !1,
            a = function(t) {
                return !!RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(t)
            },
            s = function(t, e) {
                t.html(e)
            },
            n = function(t) {
                var e = t.attr("id"),
                    i = t.attr("class");
                "string" == typeof e && "" !== e && t.attr("id", e.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-id-$1")), "string" == typeof i && "" !== i && "sidr-inner" !== i && t.attr("class", i.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-class-$1")), t.removeAttr("style")
            },
            o = function(a, s, n) {
                "function" == typeof s ? (n = s, s = "sidr") : s || (s = "sidr");
                var o, l, h, d = t("#" + s),
                    c = t(d.data("body")),
                    u = t("html"),
                    p = d.outerWidth(!0),
                    m = d.data("speed"),
                    f = d.data("side"),
                    g = d.data("displace"),
                    v = d.data("onOpen"),
                    b = d.data("onClose"),
                    y = "sidr" === s ? "sidr-open" : "sidr-open " + s + "-open";
                if ("open" === a || "toggle" === a && !d.is(":visible")) {
                    if (d.is(":visible") || e) return;
                    if (!1 !== i) return void r.close(i, function() {
                        r.open(s)
                    });
                    e = !0, "left" === f ? (o = {
                        left: p + "px"
                    }, l = {
                        left: "0px"
                    }) : (o = {
                        right: p + "px"
                    }, l = {
                        right: "0px"
                    }), c.is("body") && (h = u.scrollTop(), u.css("overflow-x", "hidden").scrollTop(h)), g ? c.addClass("sidr-animating").css({
                        width: c.width(),
                        position: "absolute"
                    }).animate(o, m, function() {
                        t(this).addClass(y)
                    }) : setTimeout(function() {
                        t(this).addClass(y)
                    }, m), d.css("display", "block").animate(l, m, function() {
                        e = !1, i = s, "function" == typeof n && n(s), c.removeClass("sidr-animating")
                    }), v()
                } else {
                    if (!d.is(":visible") || e) return;
                    e = !0, "left" === f ? (o = {
                        left: 0
                    }, l = {
                        left: "-" + p + "px"
                    }) : (o = {
                        right: 0
                    }, l = {
                        right: "-" + p + "px"
                    }), c.is("body") && (h = u.scrollTop(), u.removeAttr("style").scrollTop(h)), c.addClass("sidr-animating").animate(o, m).removeClass(y), d.animate(l, m, function() {
                        d.removeAttr("style").hide(), c.removeAttr("style"), t("html").removeAttr("style"), e = !1, i = !1, "function" == typeof n && n(s), c.removeClass("sidr-animating")
                    }), b()
                }
            },
            r = {
                open: function(t, e) {
                    o("open", t, e)
                },
                close: function(t, e) {
                    o("close", t, e)
                },
                toggle: function(t, e) {
                    o("toggle", t, e)
                },
                toogle: function(t, e) {
                    o("toggle", t, e)
                }
            };
        t.sidr = function(e) {
            return r[e] ? r[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "function" != typeof e && "string" != typeof e && e ? void t.error("Method " + e + " does not exist on jQuery.sidr") : r.toggle.apply(this, arguments)
        }, t.fn.sidr = function(e) {
            var i = t.extend({
                    name: "sidr",
                    speed: 200,
                    side: "right",
                    source: null,
                    renaming: !0,
                    body: "body",
                    displace: !0,
                    onOpen: function() {},
                    onClose: function() {}
                }, e),
                o = i.name,
                l = t("#" + o);
            if (0 === l.length && (l = t("<div />").attr("id", o).appendTo(t("body"))), l.addClass("sidr").addClass(i.side).data({
                    speed: i.speed,
                    side: i.side,
                    body: i.body,
                    displace: i.displace,
                    onOpen: i.onOpen,
                    onClose: i.onClose
                }), "function" == typeof i.source) {
                var h = i.source(o);
                s(l, h)
            } else if ("string" == typeof i.source && a(i.source)) t.get(i.source, function(t) {
                s(l, t)
            });
            else if ("string" == typeof i.source) {
                var d = "",
                    c = i.source.split(",");
                if (t.each(c, function(e, i) {
                        d += '<div class="sidr-inner">' + t(i).html() + "</div>"
                    }), i.renaming) {
                    var u = t("<div />").html(d);
                    u.find("*").each(function(e, i) {
                        var a = t(i);
                        n(a)
                    }), d = u.html()
                }
                s(l, d)
            } else null !== i.source && t.error("Invalid Sidr Source");
            return this.each(function() {
                var e = t(this);
                e.data("sidr") || (e.data("sidr", o), "ontouchstart" in document.documentElement ? (e.bind("touchstart", function(t) {
                    t.originalEvent.touches[0], this.touched = t.timeStamp
                }), e.bind("touchend", function(t) {
                    200 > Math.abs(t.timeStamp - this.touched) && (t.preventDefault(), r.toggle(o))
                })) : e.click(function(t) {
                    t.preventDefault(), r.toggle(o)
                }))
            })
        }
    }(jQuery),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        function e(e, n) {
            this.element = e, this.settings = t.extend({}, a, n), this.dataObject = s, this._defaults = a, this._name = i, this.init()
        }
        var i = "DateTimePicker",
            a = {
                mode: "date",
                defaultDate: new Date,
                dateSeparator: "-",
                timeSeparator: ":",
                timeMeridiemSeparator: " ",
                dateTimeSeparator: " ",
                dateTimeFormat: "dd-MM-yyyy HH:mm:ss",
                dateFormat: "dd-MM-yyyy",
                timeFormat: "HH:mm",
                maxDate: null,
                minDate: null,
                maxTime: null,
                minTime: null,
                maxDateTime: null,
                minDateTime: null,
                shortDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                fullDayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                fullMonthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                formatHumanDate: function(t) {
                    return t.dayShort + ", " + t.month + " " + t.dd + ", " + t.yyyy
                },
                minuteInterval: 1,
                roundOffMinutes: !0,
                titleContentDate: "",
                titleContentTime: "Set Time",
                titleContentDateTime: "Set Date & Time",
                buttonsToDisplay: ["HeaderCloseButton", "SetButton", "ClearButton"],
                setButtonContent: "OK",
                clearButtonContent: "Cancel",
                setValueInTextboxOnEveryClick: !1,
                animationDuration: 400,
                isPopup: !0,
                parentElement: null,
                addEventHandlers: null,
                beforeShow: null,
                afterShow: null,
                beforeHide: null,
                afterHide: null,
                buttonClicked: null
            },
            s = {
                dCurrentDate: new Date,
                iCurrentDay: 0,
                iCurrentMonth: 0,
                iCurrentYear: 0,
                iCurrentHour: 0,
                iCurrentMinutes: 0,
                sCurrentMeridiem: "",
                iMaxNumberOfDays: 0,
                sDateFormat: "",
                sTimeFormat: "",
                sDateTimeFormat: "",
                dMinValue: null,
                dMaxValue: null,
                sArrInputDateFormats: [],
                sArrInputTimeFormats: [],
                sArrInputDateTimeFormats: [],
                oInputElement: null,
                iTabIndex: 0,
                bElemFocused: !1,
                bIs12Hour: !1
            };
        t.fn.DateTimePicker = function(a) {
            return this.each(function() {
                t.removeData(this, "plugin_" + i), t.data(this, "plugin_" + i) || t.data(this, "plugin_" + i, new e(this, a))
            })
        }, e.prototype = {
            init: function() {
                var e = this;
                e._setDateFormatArray(), e._setTimeFormatArray(), e._setDateTimeFormatArray(), e.settings.isPopup && (e._createPicker(), t(e.element).addClass("dtpicker-mobile")), e._addEventHandlersForInput()
            },
            _setDateFormatArray: function() {
                var t = this;
                t.dataObject.sArrInputDateFormats = new Array;
                var e = "";
                e = "dd" + t.settings.dateSeparator + "MM" + t.settings.dateSeparator + "yyyy", t.dataObject.sArrInputDateFormats.push(e), e = "MM" + t.settings.dateSeparator + "dd" + t.settings.dateSeparator + "yyyy", t.dataObject.sArrInputDateFormats.push(e), e = "yyyy" + t.settings.dateSeparator + "MM" + t.settings.dateSeparator + "dd", t.dataObject.sArrInputDateFormats.push(e), e = "dd" + t.settings.dateSeparator + "MMM" + t.settings.dateSeparator + "yyyy", t.dataObject.sArrInputDateFormats.push(e)
            },
            _setTimeFormatArray: function() {
                var t = this;
                t.dataObject.sArrInputTimeFormats = new Array;
                var e = "";
                e = "hh" + t.settings.timeSeparator + "mm" + t.settings.timeMeridiemSeparator + "AA", t.dataObject.sArrInputTimeFormats.push(e), e = "HH" + t.settings.timeSeparator + "mm", t.dataObject.sArrInputTimeFormats.push(e)
            },
            _setDateTimeFormatArray: function() {
                var t = this;
                t.dataObject.sArrInputDateTimeFormats = new Array;
                var e = "",
                    i = "",
                    a = "";
                e = "dd" + t.settings.dateSeparator + "MM" + t.settings.dateSeparator + "yyyy", i = "HH" + t.settings.timeSeparator + "mm" + t.settings.timeSeparator + "ss", a = e + t.settings.dateTimeSeparator + i, t.dataObject.sArrInputDateTimeFormats.push(a), e = "dd" + t.settings.dateSeparator + "MM" + t.settings.dateSeparator + "yyyy", i = "hh" + t.settings.timeSeparator + "mm" + t.settings.timeSeparator + "ss" + t.settings.timeMeridiemSeparator + "AA", a = e + t.settings.dateTimeSeparator + i, t.dataObject.sArrInputDateTimeFormats.push(a), e = "MM" + t.settings.dateSeparator + "dd" + t.settings.dateSeparator + "yyyy", i = "HH" + t.settings.timeSeparator + "mm" + t.settings.timeSeparator + "ss", a = e + t.settings.dateTimeSeparator + i, t.dataObject.sArrInputDateTimeFormats.push(a), e = "MM" + t.settings.dateSeparator + "dd" + t.settings.dateSeparator + "yyyy", i = "hh" + t.settings.timeSeparator + "mm" + t.settings.timeSeparator + "ss" + t.settings.timeMeridiemSeparator + "AA", a = e + t.settings.dateTimeSeparator + i, t.dataObject.sArrInputDateTimeFormats.push(a), e = "yyyy" + t.settings.dateSeparator + "MM" + t.settings.dateSeparator + "dd", i = "HH" + t.settings.timeSeparator + "mm" + t.settings.timeSeparator + "ss", a = e + t.settings.dateTimeSeparator + i, t.dataObject.sArrInputDateTimeFormats.push(a), e = "yyyy" + t.settings.dateSeparator + "MM" + t.settings.dateSeparator + "dd", i = "hh" + t.settings.timeSeparator + "mm" + t.settings.timeSeparator + "ss" + t.settings.timeMeridiemSeparator + "AA", a = e + t.settings.dateTimeSeparator + i, t.dataObject.sArrInputDateTimeFormats.push(a), e = "dd" + t.settings.dateSeparator + "MMM" + t.settings.dateSeparator + "yyyy", i = "hh" + t.settings.timeSeparator + "mm" + t.settings.timeSeparator + "ss", a = e + t.settings.dateTimeSeparator + i, t.dataObject.sArrInputDateTimeFormats.push(a), e = "dd" + t.settings.dateSeparator + "MMM" + t.settings.dateSeparator + "yyyy", i = "hh" + t.settings.timeSeparator + "mm" + t.settings.timeSeparator + "ss" + t.settings.timeMeridiemSeparator + "AA", a = e + t.settings.dateTimeSeparator + i, t.dataObject.sArrInputDateTimeFormats.push(a)
            },
            _createPicker: function() {
                var e = this;
                t(e.element).addClass("dtpicker-overlay"), t(".dtpicker-overlay").click(function() {
                    e._hidePicker("")
                });
                var i = "";
                i += "<div class='dtpicker-bg'>", i += "<div class='dtpicker-cont'>", i += "<div class='dtpicker-content'>", i += "<div class='dtpicker-subcontent'>", i += "</div>", i += "</div>", i += "</div>", i += "</div>", t(e.element).html(i)
            },
            _addEventHandlersForInput: function() {
                var e = this;
                e.dataObject.oInputElement = null;
                var i = void 0;
                void 0 != e.settings.parentElement ? (t(e.settings.parentElement).find("input[type='date'], input[type='time'], input[type='datetime']").each(function() {
                    var e = t(this).attr("type");
                    t(this).attr("type", "text"), t(this).attr("data-field", e)
                }), i = t(e.settings.parentElement).find("[data-field='date'], [data-field='time'], [data-field='datetime']")) : (t("input[type='date'], input[type='time'], input[type='datetime']").each(function() {
                    var e = t(this).attr("type");
                    t(this).attr("type", "text"), t(this).attr("data-field", e)
                }), i = t("[data-field='date'], [data-field='time'], [data-field='datetime']")), t(i).unbind("focus", e._inputFieldFocus), t(i).on("focus", {
                    obj: e
                }, e._inputFieldFocus), t(i).not("input").click(function() {
                    null == e.dataObject.oInputElement && e.showDateTimePicker(this)
                }), t(i).click(function(t) {
                    t.stopPropagation()
                }), e.settings.addEventHandlers && e.settings.addEventHandlers.call(e)
            },
            _inputFieldFocus: function(t) {
                var e = t.data.obj;
                null == e.dataObject.oInputElement && e.showDateTimePicker(t.target), e.dataObject.bMouseDown = !1
            },
            setDateTimeStringInInputField: function(e, i) {
                var a = this;
                i = i || a.dataObject.dCurrentDate;
                var s = void 0;
                null !== e && void 0 !== e ? (s = [], "string" == typeof e ? s.push(e) : "object" == typeof e && (s = e)) : s = null !== a.settings.parentElement && void 0 !== a.settings.parentElement ? t(a.settings.parentElement).find("[data-field='date'], [data-field='time'], [data-field='datetime']") : t("[data-field='date'], [data-field='time'], [data-field='datetime']"), s.each(function() {
                    var e, s, n, o = this;
                    e = t(o).data("field"), a._compare(e, "date") ? s = t(o).data("format") || a.settings.dateFormat : a._compare(e, "time") ? s = t(o).data("format") || a.settings.timeFormat : a._compare(e, "datetime") && (s = t(o).data("format") || a.settings.dateTimeFormat), n = a.getIs12Hour(e, s);
                    var r = a._setOutput(e, s, n, i);
                    t(o).val(r)
                })
            },
            getDateTimeStringInFormat: function(t, e, i) {
                var a = this.getIs12Hour(t, e);
                return this._setOutput(t, e, a, i)
            },
            showDateTimePicker: function(e) {
                var i = this;
                if (null == i.dataObject.oInputElement) {
                    i.dataObject.oInputElement = e, i.dataObject.iTabIndex = parseInt(t(e).attr("tabIndex"));
                    var a = t(e).data("field") || "",
                        s = t(e).data("min") || "",
                        n = t(e).data("max") || "",
                        o = t(e).data("format") || "",
                        r = t(e).data("view") || "",
                        l = t(e).data("startend") || "",
                        h = t(e).data("startendelem") || "",
                        d = i._getValueOfElement(e) || "";
                    if ("" != r && i.setIsPopup(!!i._compare(r, "Popup")), !i.settings.isPopup) {
                        i._createPicker();
                        var c = t(i.dataObject.oInputElement).offset().top + t(i.dataObject.oInputElement).outerHeight(),
                            u = t(i.dataObject.oInputElement).offset().left,
                            p = t(i.dataObject.oInputElement).outerWidth();
                        t(i.element).css({
                            position: "absolute",
                            top: c,
                            left: u,
                            width: p,
                            height: "auto"
                        })
                    }
                    i._showPicker(a, s, n, o, d, e, l, h)
                }
            },
            _setButtonAction: function(t) {
                if (null != this.dataObject.oInputElement) {
                    var e = this._setOutput();
                    this._setValueOfElement(e), this._hidePicker(t ? 0 : "")
                }
            },
            _setOutput: function(t, e, i, a) {
                var s = this;
                t = t || s.settings.mode, s._compare(t, "date") ? e = e || s.dataObject.sDateFormat : s._compare(t, "time") ? e = e || s.dataObject.sTimeFormat : s._compare(t, "datetime") && (e = e || s.dataObject.sDateTimeFormat), a = a || s.dataObject.dCurrentDate, i = i || s.dataObject.bIs12Hour;
                var n, o, r, l, h, d = "",
                    c = a.getDate(),
                    u = a.getMonth(),
                    p = a.getFullYear(),
                    m = a.getHours(),
                    f = a.getMinutes(),
                    g = "",
                    v = "";
                return s._compare(t, "date") ? s._compare(e, s.dataObject.sArrInputDateFormats[0]) ? (u++, n = 10 > c ? "0" + c : c, o = 10 > u ? "0" + u : u, d = n + s.settings.dateSeparator + o + s.settings.dateSeparator + p) : s._compare(e, s.dataObject.sArrInputDateFormats[1]) ? (u++, n = 10 > c ? "0" + c : c, d = (o = 10 > u ? "0" + u : u) + s.settings.dateSeparator + n + s.settings.dateSeparator + p) : s._compare(e, s.dataObject.sArrInputDateFormats[2]) ? (u++, n = 10 > c ? "0" + c : c, o = 10 > u ? "0" + u : u, d = p + s.settings.dateSeparator + o + s.settings.dateSeparator + n) : s._compare(e, s.dataObject.sArrInputDateFormats[3]) && (n = 10 > c ? "0" + c : c, o = s.settings.shortMonthNames[u], d = n + s.settings.dateSeparator + o + s.settings.dateSeparator + p) : s._compare(t, "time") ? s._compare(e, s.dataObject.sArrInputTimeFormats[0]) ? (r = s._determineMeridiemFromHourAndMinutes(m, f), 0 == m && "AM" == r ? m = 12 : m > 12 && "PM" == r && (m -= 12), l = 10 > m ? "0" + m : m, h = 10 > f ? "0" + f : f, d = l + s.settings.timeSeparator + h + s.settings.timeMeridiemSeparator + r) : s._compare(e, s.dataObject.sArrInputTimeFormats[1]) && (l = 10 > m ? "0" + m : m, h = 10 > f ? "0" + f : f, d = l + s.settings.timeSeparator + h) : s._compare(t, "datetime") && (s._compare(e, s.dataObject.sArrInputDateTimeFormats[0]) || s._compare(s.dataObject.sDateTimeFormat, s.dataObject.sArrInputDateTimeFormats[1]) ? (u++, n = 10 > c ? "0" + c : c, o = 10 > u ? "0" + u : u, g = n + s.settings.dateSeparator + o + s.settings.dateSeparator + p) : s._compare(e, s.dataObject.sArrInputDateTimeFormats[2]) || s._compare(s.dataObject.sDateTimeFormat, s.dataObject.sArrInputDateTimeFormats[3]) ? (u++, n = 10 > c ? "0" + c : c, g = (o = 10 > u ? "0" + u : u) + s.settings.dateSeparator + n + s.settings.dateSeparator + p) : s._compare(e, s.dataObject.sArrInputDateTimeFormats[4]) || s._compare(s.dataObject.sDateTimeFormat, s.dataObject.sArrInputDateTimeFormats[5]) ? (u++, n = 10 > c ? "0" + c : c, o = 10 > u ? "0" + u : u, g = p + s.settings.dateSeparator + o + s.settings.dateSeparator + n) : (s._compare(e, s.dataObject.sArrInputDateTimeFormats[6]) || s._compare(s.dataObject.sDateTimeFormat, s.dataObject.sArrInputDateTimeFormats[7])) && (n = 10 > c ? "0" + c : c, o = s.settings.shortMonthNames[u], g = n + s.settings.dateSeparator + o + s.settings.dateSeparator + p), i ? (r = s._determineMeridiemFromHourAndMinutes(m, f), 0 == m && "AM" == r ? m = 12 : m > 12 && "PM" == r && (m -= 12), l = 10 > m ? "0" + m : m, h = 10 > f ? "0" + f : f, v = l + s.settings.timeSeparator + h + s.settings.timeMeridiemSeparator + r) : (l = 10 > m ? "0" + m : m, h = 10 > f ? "0" + f : f, v = l + s.settings.timeSeparator + h), d = g + s.settings.dateTimeSeparator + v), d
            },
            _clearButtonAction: function() {
                null != this.dataObject.oInputElement && this._setValueOfElement(""), this._hidePicker("")
            },
            _setOutputOnIncrementOrDecrement: function() {
                if (null != this.dataObject.oInputElement && this.settings.setValueInTextboxOnEveryClick) {
                    var t = this._setOutput();
                    this._setValueOfElement(t)
                }
            },
            _showPicker: function(e, i, a, s, n, o, r, l) {
                var h = this;
                if (h.settings.beforeShow && h.settings.beforeShow.call(h, o), "" != e && (h.settings.mode = e), h.dataObject.dMinValue = null, h.dataObject.dMaxValue = null, h.dataObject.bIs12Hour = !1, h._compare(h.settings.mode, "date")) {
                    var d = i || h.settings.minDate,
                        c = a || h.settings.maxDate,
                        u = s || h.settings.dateFormat;
                    if ("" != u && null != u && (h.dataObject.sDateFormat = u), "" != d && null != d && (h.dataObject.dMinValue = h._parseDate(d)), "" != c && null != c && (h.dataObject.dMaxValue = h._parseDate(c)), "" != r && (h._compare(r, "start") || h._compare(r, "end")) && "" != l && t(l).length >= 1) {
                        var p = h._getValueOfElement(t(l));
                        if ("" != p) {
                            var m = h._parseDate(p);
                            h._compare(r, "start") ? "" != c && null != c ? h._compareDates(m, h.dataObject.dMaxValue) < 0 && (h.dataObject.dMaxValue = new Date(m)) : h.dataObject.dMaxValue = new Date(m) : h._compare(r, "end") && ("" != d && null != d ? h._compareDates(m, h.dataObject.dMinValue) > 0 && (h.dataObject.dMinValue = new Date(m)) : h.dataObject.dMinValue = new Date(m))
                        }
                    }
                    h.dataObject.dCurrentDate = h._parseDate(n), h.dataObject.dCurrentDate.setHours(0), h.dataObject.dCurrentDate.setMinutes(0), h.dataObject.dCurrentDate.setSeconds(0)
                } else if (h._compare(h.settings.mode, "time")) {
                    d = i || h.settings.minTime, c = a || h.settings.maxTime;
                    var f = s || h.settings.timeFormat;
                    if ("" != f && null != f && (h.dataObject.sTimeFormat = f), "" != d && null != d && (h.dataObject.dMinValue = h._parseTime(d)), "" != c && null != c && (h.dataObject.dMaxValue = h._parseTime(c)), "" != r && (h._compare(r, "start") || h._compare(r, "end")) && "" != l && t(l).length >= 1) {
                        var g = h._getValueOfElement(t(l));
                        if ("" != g) {
                            var v = h._parseTime(g);
                            h._compare(r, "start") ? (v.setMinutes(v.getMinutes() - 1), "" != c && null != c ? 2 == h._compareTime(v, h.dataObject.dMaxValue) && (h.dataObject.dMaxValue = new Date(v)) : h.dataObject.dMaxValue = new Date(v)) : h._compare(r, "end") && (v.setMinutes(v.getMinutes() + 1), "" != d && null != d ? 3 == h._compareTime(v, h.dataObject.dMinValue) && (h.dataObject.dMinValue = new Date(v)) : h.dataObject.dMinValue = new Date(v))
                        }
                    }
                    h.dataObject.bIs12Hour = h.getIs12Hour("time", h.dataObject.sTimeFormat), h.dataObject.dCurrentDate = h._parseTime(n)
                } else if (h._compare(h.settings.mode, "datetime")) {
                    d = i || h.settings.minDateTime, c = a || h.settings.maxDateTime;
                    var b = s || h.settings.dateTimeFormat;
                    if ("" != b && null != b && (h.dataObject.sDateTimeFormat = b), "" != d && null != d && (h.dataObject.dMinValue = h._parseDateTime(d)), "" != c && null != c && (h.dataObject.dMaxValue = h._parseDateTime(c)), "" != r && (h._compare(r, "start") || h._compare(r, "end")) && "" != l && t(l).length >= 1) {
                        var y = h._getValueOfElement(t(l));
                        if ("" != y) {
                            var C = h._parseDateTime(y);
                            h._compare(r, "start") ? "" != c && null != c ? h._compareDateTime(C, h.dataObject.dMaxValue) < 0 && (h.dataObject.dMaxValue = new Date(C)) : h.dataObject.dMaxValue = new Date(C) : h._compare(r, "end") && ("" != d && null != d ? h._compareDateTime(C, h.dataObject.dMinValue) > 0 && (h.dataObject.dMinValue = new Date(C)) : h.dataObject.dMinValue = new Date(C))
                        }
                    }
                    h.dataObject.bIs12Hour = h.getIs12Hour("datetime", h.dataObject.sDateTimeFormat), h.dataObject.dCurrentDate = h._parseDateTime(n)
                }
                h._setVariablesForDate(), h._modifyPicker(), t(h.element).fadeIn(h.settings.animationDuration), h.settings.afterShow && setTimeout(function() {
                    h.settings.afterShow.call(h, o)
                }, h.settings.animationDuration)
            },
            _hidePicker: function(e) {
                var i = this,
                    a = i.dataObject.oInputElement;
                i.settings.beforeHide && i.settings.beforeHide.call(i, a), ("" === e || void 0 === e || null === e) && (e = i.settings.animationDuration), null != i.dataObject.oInputElement && (t(i.dataObject.oInputElement).blur(), i.dataObject.oInputElement = null), t(i.element).fadeOut(e), 0 == e ? t(i.element).find(".dtpicker-subcontent").html("") : setTimeout(function() {
                    t(i.element).find(".dtpicker-subcontent").html("")
                }, e), t(document).unbind("click.DateTimePicker"), t(document).unbind("keydown.DateTimePicker"), t(document).unbind("keyup.DateTimePicker"), i.settings.afterHide && setTimeout(function() {
                    i.settings.afterHide.call(i, a)
                }, e)
            },
            _modifyPicker: function() {
                var e, i, a = this,
                    s = new Array;
                a._compare(a.settings.mode, "date") ? (e = a.settings.titleContentDate, i = 3, a._compare(a.dataObject.sDateFormat, a.dataObject.sArrInputDateFormats[0]) ? s = ["day", "month", "year"] : a._compare(a.dataObject.sDateFormat, a.dataObject.sArrInputDateFormats[1]) ? s = ["month", "day", "year"] : a._compare(a.dataObject.sDateFormat, a.dataObject.sArrInputDateFormats[2]) ? s = ["year", "month", "day"] : a._compare(a.dataObject.sDateFormat, a.dataObject.sArrInputDateFormats[3]) && (s = ["day", "month", "year"])) : a._compare(a.settings.mode, "time") ? (e = a.settings.titleContentTime, a._compare(a.dataObject.sTimeFormat, a.dataObject.sArrInputTimeFormats[0]) ? (i = 3, s = ["hour", "minutes", "meridiem"]) : a._compare(a.dataObject.sTimeFormat, a.dataObject.sArrInputTimeFormats[1]) && (i = 2, s = ["hour", "minutes"])) : a._compare(a.settings.mode, "datetime") && (e = a.settings.titleContentDateTime, a._compare(a.dataObject.sDateTimeFormat, a.dataObject.sArrInputDateTimeFormats[0]) ? (i = 5, s = ["day", "month", "year", "hour", "minutes"]) : a._compare(a.dataObject.sDateTimeFormat, a.dataObject.sArrInputDateTimeFormats[1]) ? (i = 6, s = ["day", "month", "year", "hour", "minutes", "meridiem"]) : a._compare(a.dataObject.sDateTimeFormat, a.dataObject.sArrInputDateTimeFormats[2]) ? (i = 5, s = ["month", "day", "year", "hour", "minutes"]) : a._compare(a.dataObject.sDateTimeFormat, a.dataObject.sArrInputDateTimeFormats[3]) ? (i = 6, s = ["month", "day", "year", "hour", "minutes", "meridiem"]) : a._compare(a.dataObject.sDateTimeFormat, a.dataObject.sArrInputDateTimeFormats[4]) ? (i = 5, s = ["year", "month", "day", "hour", "minutes"]) : a._compare(a.dataObject.sDateTimeFormat, a.dataObject.sArrInputDateTimeFormats[5]) ? (i = 6, s = ["year", "month", "day", "hour", "minutes", "meridiem"]) : a._compare(a.dataObject.sDateTimeFormat, a.dataObject.sArrInputDateTimeFormats[6]) ? (i = 5, s = ["day", "month", "year", "hour", "minutes"]) : a._compare(a.dataObject.sDateTimeFormat, a.dataObject.sArrInputDateTimeFormats[7]) && (i = 6, s = ["day", "month", "year", "hour", "minutes", "meridiem"]));
                for (var n = "dtpicker-comp" + i, o = !1, r = !1, l = !1, h = 0; h < a.settings.buttonsToDisplay.length; h++) a._compare(a.settings.buttonsToDisplay[h], "HeaderCloseButton") ? o = !0 : a._compare(a.settings.buttonsToDisplay[h], "SetButton") ? r = !0 : a._compare(a.settings.buttonsToDisplay[h], "ClearButton") && (l = !0);
                var d = "";
                d += "<div class='dtpicker-header'>", d += "<div class='dtpicker-title'>" + e + "</div>", o && (d += "<a class='dtpicker-close'>&times;</a>"), d += "<div class='dtpicker-value'></div>", d += "</div>";
                var c = "";
                c += "<div class='dtpicker-components'>";
                for (h = 0; i > h; h++) {
                    c += "<div class='dtpicker-compOutline " + n + "'>", c += "<div class='dtpicker-comp " + s[h] + "'>", c += "<a class='dtpicker-compButton increment'>+</a>", c += "<input type='text' class='dtpicker-compValue'></input>", c += "<a class='dtpicker-compButton decrement'>-</a>", c += "</div>", c += "</div>"
                }
                c += "</div>";
                var u = "";
                u += "<div class='dtpicker-buttonCont" + (r && l ? " dtpicker-twoButtons" : " dtpicker-singleButton") + "'>", r && (u += "<a class='dtpicker-button dtpicker-buttonSet'>" + a.settings.setButtonContent + "</a>"), l && (u += "<a class='dtpicker-button dtpicker-buttonClear'>" + a.settings.clearButtonContent + "</a>"), u += "</div>", sTempStr = d + c + u, t(a.element).find(".dtpicker-subcontent").html(sTempStr), a._setCurrentDate(), a._addEventHandlersForPicker()
            },
            _addEventHandlersForPicker: function() {
                var e = this;
                t(document).on("click.DateTimePicker", function() {
                    e._hidePicker("")
                }), t(document).on("keydown.DateTimePicker", function(i) {
                    return t(".dtpicker-compValue").is(":focus") || "9" != (i.keyCode ? i.keyCode : i.which) ? void 0 : (e._setButtonAction(!0), t("[tabIndex=" + (e.dataObject.iTabIndex + 1) + "]").focus(), !1)
                }), t(document).on("keydown.DateTimePicker", function(i) {
                    t(".dtpicker-compValue").is(":focus") || "9" == (i.keyCode ? i.keyCode : i.which) || e._hidePicker("")
                }), t(".dtpicker-cont *").click(function(t) {
                    t.stopPropagation()
                }), t(".dtpicker-compValue").not(".month .dtpicker-compValue, .meridiem .dtpicker-compValue").keyup(function() {
                    this.value = this.value.replace(/[^0-9\.]/g, "")
                }), t(".dtpicker-compValue").focus(function() {
                    e.dataObject.bElemFocused = !0
                }), t(".dtpicker-compValue").blur(function() {
                    e._getValuesFromInputBoxes(), e._setCurrentDate(), e.dataObject.bElemFocused = !1;
                    var i = t(this).parent().parent();
                    setTimeout(function() {
                        i.is(":last-child") && !e.dataObject.bElemFocused && e._setButtonAction(!1)
                    }, 50)
                }), t(".dtpicker-compValue").keyup(function() {
                    var e = t(this),
                        i = e.val(),
                        a = i.length;
                    if (e.parent().hasClass("day") || e.parent().hasClass("hour") || e.parent().hasClass("minutes") || e.parent().hasClass("meridiem")) {
                        if (a > 2) {
                            var s = i.slice(0, 2);
                            e.val(s)
                        }
                    } else if (e.parent().hasClass("month")) {
                        if (a > 3) {
                            s = i.slice(0, 3);
                            e.val(s)
                        }
                    } else if (e.parent().hasClass("year") && a > 4) {
                        s = i.slice(0, 4);
                        e.val(s)
                    }
                }), t(e.element).find(".dtpicker-close").click(function() {
                    e.settings.buttonClicked && e.settings.buttonClicked.call(e, "CLOSE", e.dataObject.oInputElement), e._hidePicker("")
                }), t(e.element).find(".dtpicker-buttonSet").click(function() {
                    e.settings.buttonClicked && e.settings.buttonClicked.call(e, "Ok", e.dataObject.oInputElement), e._setButtonAction(!1)
                }), t(e.element).find(".dtpicker-buttonClear").click(function() {
                    e.settings.buttonClicked && e.settings.buttonClicked.call(e, "Cancel", e.dataObject.oInputElement), e._clearButtonAction()
                }), t(e.element).find(".day .increment").click(function() {
                    e.dataObject.iCurrentDay++, e._setCurrentDate(), e._setOutputOnIncrementOrDecrement()
                }), t(e.element).find(".day .decrement").click(function() {
                    e.dataObject.iCurrentDay--, e._setCurrentDate(), e._setOutputOnIncrementOrDecrement()
                }), t(e.element).find(".month .increment").click(function() {
                    e.dataObject.iCurrentMonth++, e._setCurrentDate(), e._setOutputOnIncrementOrDecrement()
                }), t(e.element).find(".month .decrement").click(function() {
                    e.dataObject.iCurrentMonth--, e._setCurrentDate(), e._setOutputOnIncrementOrDecrement()
                }), t(e.element).find(".year .increment").click(function() {
                    e.dataObject.iCurrentYear++, e._setCurrentDate(), e._setOutputOnIncrementOrDecrement()
                }), t(e.element).find(".year .decrement").click(function() {
                    e.dataObject.iCurrentYear--, e._setCurrentDate(), e._setOutputOnIncrementOrDecrement()
                }), t(e.element).find(".hour .increment").click(function() {
                    e.dataObject.iCurrentHour++, e._setCurrentDate(), e._setOutputOnIncrementOrDecrement()
                }), t(e.element).find(".hour .decrement").click(function() {
                    e.dataObject.iCurrentHour--, e._setCurrentDate(), e._setOutputOnIncrementOrDecrement()
                }), t(e.element).find(".minutes .increment").click(function() {
                    e.dataObject.iCurrentMinutes += e.settings.minuteInterval, e._setCurrentDate(), e._setOutputOnIncrementOrDecrement()
                }), t(e.element).find(".minutes .decrement").click(function() {
                    e.dataObject.iCurrentMinutes -= e.settings.minuteInterval, e._setCurrentDate(), e._setOutputOnIncrementOrDecrement()
                }), t(e.element).find(".meridiem .dtpicker-compButton").click(function() {
                    e._compare(e.dataObject.sCurrentMeridiem, "AM") ? (e.dataObject.sCurrentMeridiem = "PM", e.dataObject.iCurrentHour += 12) : e._compare(e.dataObject.sCurrentMeridiem, "PM") && (e.dataObject.sCurrentMeridiem = "AM", e.dataObject.iCurrentHour -= 12), e._setCurrentDate(), e._setOutputOnIncrementOrDecrement()
                })
            },
            _adjustMinutes: function(t) {
                var e = this;
                return e.settings.roundOffMinutes && 1 != e.settings.minuteInterval && (t = t % e.settings.minuteInterval ? t - t % e.settings.minuteInterval + e.settings.minuteInterval : t), t
            },
            _getValueOfElement: function(e) {
                return this._compare(t(e).prop("tagName"), "INPUT") ? t(e).val() : t(e).html()
            },
            _setValueOfElement: function(e) {
                var i = t(this.dataObject.oInputElement);
                return this._compare(i.prop("tagName"), "INPUT") ? i.val(e) : i.html(e), i.change(), e
            },
            _parseDate: function(t) {
                var e = this,
                    i = new Date(e.settings.defaultDate),
                    a = i.getDate(),
                    s = i.getMonth(),
                    n = i.getFullYear();
                if ("" != t && void 0 != t && null != t) {
                    var o = t.split(e.settings.dateSeparator);
                    e._compare(e.dataObject.sDateFormat, e.dataObject.sArrInputDateFormats[0]) ? (a = parseInt(o[0]), s = parseInt(o[1] - 1), n = parseInt(o[2])) : e._compare(e.dataObject.sDateFormat, e.dataObject.sArrInputDateFormats[1]) ? (s = parseInt(o[0] - 1), a = parseInt(o[1]), n = parseInt(o[2])) : e._compare(e.dataObject.sDateFormat, e.dataObject.sArrInputDateFormats[2]) ? (n = parseInt(o[0]), s = parseInt(o[1] - 1), a = parseInt(o[2])) : e._compare(e.dataObject.sDateFormat, e.dataObject.sArrInputDateFormats[3]) && (a = parseInt(o[0]), s = e._getShortMonthIndex(o[1]), n = parseInt(o[2]))
                }
                return new Date(n, s, a, 0, 0, 0, 0)
            },
            _parseTime: function(t) {
                var e = this,
                    i = new Date(e.settings.defaultDate),
                    a = i.getDate(),
                    s = i.getMonth(),
                    n = i.getFullYear(),
                    o = i.getHours(),
                    r = i.getMinutes();
                if ("" != t && void 0 != t && null != t)
                    if (e._compare(e.dataObject.sTimeFormat, e.dataObject.sArrInputTimeFormats[0])) {
                        var l = t.split(e.settings.timeMeridiemSeparator),
                            h = l[1],
                            d = l[0].split(e.settings.timeSeparator);
                        o = parseInt(d[0]), r = parseInt(d[1]), 12 == o && e._compare(h, "AM") ? o = 0 : 12 > o && e._compare(h, "PM") && (o += 12)
                    } else if (e._compare(e.dataObject.sTimeFormat, e.dataObject.sArrInputTimeFormats[1])) {
                    d = t.split(e.settings.timeSeparator);
                    o = parseInt(d[0]), r = parseInt(d[1])
                }
                return r = e._adjustMinutes(r), new Date(n, s, a, o, r, 0, 0)
            },
            _parseDateTime: function(t) {
                var e = this,
                    i = new Date(e.settings.defaultDate),
                    a = i.getDate(),
                    s = i.getMonth(),
                    n = i.getFullYear(),
                    o = i.getHours(),
                    r = i.getMinutes(),
                    l = "";
                if ("" != t && void 0 != t && null != t) {
                    var h = t.split(e.settings.dateTimeSeparator),
                        d = h[0].split(e.settings.dateSeparator);
                    e._compare(e.dataObject.sDateTimeFormat, e.dataObject.sArrInputDateTimeFormats[0]) || e._compare(e.dataObject.sDateTimeFormat, e.dataObject.sArrInputDateTimeFormats[1]) ? (a = parseInt(d[0]), s = parseInt(d[1] - 1), n = parseInt(d[2])) : e._compare(e.dataObject.sDateTimeFormat, e.dataObject.sArrInputDateTimeFormats[2]) || e._compare(e.dataObject.sDateTimeFormat, e.dataObject.sArrInputDateTimeFormats[3]) ? (s = parseInt(d[0] - 1), a = parseInt(d[1]), n = parseInt(d[2])) : e._compare(e.dataObject.sDateTimeFormat, e.dataObject.sArrInputDateTimeFormats[4]) || e._compare(e.dataObject.sDateTimeFormat, e.dataObject.sArrInputDateTimeFormats[5]) ? (n = parseInt(d[0]), s = parseInt(d[1] - 1), a = parseInt(d[2])) : (e._compare(e.dataObject.sDateTimeFormat, e.dataObject.sArrInputDateTimeFormats[6]) || e._compare(e.dataObject.sDateTimeFormat, e.dataObject.sArrInputDateTimeFormats[7])) && (a = parseInt(d[0]), s = e._getShortMonthIndex(d[1]), n = parseInt(d[2]));
                    var c = h[1];
                    if (e.dataObject.bIs12Hour) {
                        if (e._compare(e.settings.dateTimeSeparator, e.settings.timeMeridiemSeparator) && 3 == h.length) l = h[2];
                        else {
                            var u = c.split(e.settings.timeMeridiemSeparator);
                            c = u[0], l = u[1]
                        }
                        e._compare(l, "AM") || e._compare(l, "PM") || (l = "")
                    }
                    var p = c.split(e.settings.timeSeparator);
                    o = parseInt(p[0]), r = parseInt(p[1]), 12 == o && e._compare(l, "AM") ? o = 0 : 12 > o && e._compare(l, "PM") && (o += 12)
                }
                return r = e._adjustMinutes(r), new Date(n, s, a, o, r, 0, 0)
            },
            _getShortMonthIndex: function(t) {
                for (var e = 0; e < this.settings.shortMonthNames.length; e++)
                    if (this._compare(t, this.settings.shortMonthNames[e])) return e
            },
            getIs12Hour: function(t, e) {
                var i = this,
                    a = !1;
                return i._compare(t, "time") ? a = i._compare(e, i.dataObject.sArrInputTimeFormats[0]) : i._compare(t, "datetime") && (a = i._compare(e, i.dataObject.sArrInputDateTimeFormats[1]) || i._compare(e, i.dataObject.sArrInputDateTimeFormats[3]) || i._compare(e, i.dataObject.sArrInputDateTimeFormats[5]) || i._compare(e, i.dataObject.sArrInputDateTimeFormats[7])), a
            },
            _setVariablesForDate: function() {
                var t = this;
                t.dataObject.iCurrentDay = t.dataObject.dCurrentDate.getDate(), t.dataObject.iCurrentMonth = t.dataObject.dCurrentDate.getMonth(), t.dataObject.iCurrentYear = t.dataObject.dCurrentDate.getFullYear(), t._compare(t.settings.mode, "time") ? (t.dataObject.iCurrentHour = t.dataObject.dCurrentDate.getHours(), t.dataObject.iCurrentMinutes = t.dataObject.dCurrentDate.getMinutes(), t._compare(t.dataObject.sTimeFormat, t.dataObject.sArrInputTimeFormats[0]) && (t.dataObject.sCurrentMeridiem = t._determineMeridiemFromHourAndMinutes(t.dataObject.iCurrentHour, t.dataObject.iCurrentMinutes))) : t._compare(t.settings.mode, "datetime") && (t.dataObject.iCurrentHour = t.dataObject.dCurrentDate.getHours(), t.dataObject.iCurrentMinutes = t.dataObject.dCurrentDate.getMinutes(), (t._compare(t.dataObject.sDateTimeFormat, t.dataObject.sArrInputDateTimeFormats[1]) || t._compare(t.dataObject.sDateTimeFormat, t.dataObject.sArrInputDateTimeFormats[3]) || t._compare(t.dataObject.sDateTimeFormat, t.dataObject.sArrInputDateTimeFormats[5]) || t._compare(t.dataObject.sDateTimeFormat, t.dataObject.sArrInputDateTimeFormats[7])) && (t.dataObject.sCurrentMeridiem = t._determineMeridiemFromHourAndMinutes(t.dataObject.iCurrentHour, t.dataObject.iCurrentMinutes)))
            },
            _getValuesFromInputBoxes: function() {
                var e = this;
                if (e._compare(e.settings.mode, "date") || e._compare(e.settings.mode, "datetime")) {
                    var i = t(e.element).find(".month .dtpicker-compValue").val();
                    i.length > 1 && (i = i.charAt(0).toUpperCase() + i.slice(1));
                    var a = e.settings.shortMonthNames.indexOf(i); - 1 != a ? e.dataObject.iCurrentMonth = parseInt(a) : i.match("^[+|-]?[0-9]+$") && (e.dataObject.iCurrentMonth = parseInt(i - 1)), e.dataObject.iCurrentDay = parseInt(t(e.element).find(".day .dtpicker-compValue").val()) || e.dataObject.iCurrentDay, e.dataObject.iCurrentYear = parseInt(t(e.element).find(".year .dtpicker-compValue").val()) || e.dataObject.iCurrentYear
                }
                if (e._compare(e.settings.mode, "time") || e._compare(e.settings.mode, "datetime")) {
                    if (e.dataObject.iCurrentHour = parseInt(t(e.element).find(".hour .dtpicker-compValue").val()), e.dataObject.iCurrentMinutes = e._adjustMinutes(parseInt(t(e.element).find(".minutes .dtpicker-compValue").val())), e._compare(e.settings.mode, "time"))
                        if (e.dataObject.bIs12Hour) {
                            if (e.dataObject.iCurrentHour > 12 && (e.dataObject.iCurrentHour = e.dataObject.iCurrentHour % 12), e.dataObject.iCurrentMinutes > 59) {
                                var s = e.dataObject.iCurrentMinutes / 60,
                                    n = e.dataObject.iCurrentMinutes % 59;
                                (o = e.dataObject.iCurrentHour + s) > 12 && (e.dataObject.iCurrentHour = o % 12), e.dataObject.iCurrentMinutes = n
                            }
                        } else if (e.dataObject.iCurrentHour > 23 && (e.dataObject.iCurrentHour = e.dataObject.iCurrentHour % 23), e.dataObject.iCurrentMinutes > 59) {
                        var o;
                        s = e.dataObject.iCurrentMinutes / 60, n = e.dataObject.iCurrentMinutes % 59;
                        (o = e.dataObject.iCurrentHour + s) > 23 && (e.dataObject.iCurrentHour = o % 23), e.dataObject.iCurrentMinutes = n
                    }
                    if (e.dataObject.bIs12Hour) {
                        var r = t(e.element).find(".meridiem .dtpicker-compValue").val();
                        (e._compare(r, "AM") || e._compare(r, "PM")) && (e.dataObject.sCurrentMeridiem = r), e._compare(e.dataObject.sCurrentMeridiem, "PM") && e.dataObject.iCurrentHour < 13 && (e.dataObject.iCurrentHour += 12), e._compare(e.dataObject.sCurrentMeridiem, "AM") && 12 == e.dataObject.iCurrentHour && (e.dataObject.iCurrentHour = 0)
                    }
                }
            },
            _setCurrentDate: function() {
                var e = this,
                    i = new Date(e.dataObject.iCurrentYear, e.dataObject.iCurrentMonth, e.dataObject.iCurrentDay, e.dataObject.iCurrentHour, e.dataObject.iCurrentMinutes, 0, 0),
                    a = !1,
                    s = !1;
                if (null != e.dataObject.dMaxValue && (a = i.getTime() > e.dataObject.dMaxValue.getTime()), null != e.dataObject.dMinValue && (s = i.getTime() < e.dataObject.dMinValue.getTime()), a || s) {
                    var n = !1,
                        o = !1;
                    null != e.dataObject.dMaxValue && (n = e.dataObject.dCurrentDate.getTime() > e.dataObject.dMaxValue.getTime()), null != e.dataObject.dMinValue && (o = e.dataObject.dCurrentDate.getTime() < e.dataObject.dMinValue.getTime()), n || o ? (n && (i = new Date(e.dataObject.dMaxValue)), o && (i = new Date(e.dataObject.dMinValue))) : i = new Date(e.dataObject.dCurrentDate)
                }
                if (e.dataObject.dCurrentDate = new Date(i), e._setVariablesForDate(), e._compare(e.settings.mode, "date")) {
                    v = 10 > (v = e.dataObject.iCurrentDay) ? "0" + v : v;
                    var r = e.dataObject.iCurrentMonth;
                    b = 10 > (b = e.dataObject.iCurrentMonth) ? "0" + b : b;
                    var l = e.settings.shortMonthNames[r],
                        h = e.settings.fullMonthNames[r],
                        d = e.dataObject.iCurrentYear,
                        c = e.dataObject.dCurrentDate.getDay(),
                        u = e.settings.shortDayNames[c],
                        p = e.settings.fullDayNames[c];
                    t(e.element).find(".day .dtpicker-compValue").val(v), t(e.element).find(".month .dtpicker-compValue").val(l), t(e.element).find(".year .dtpicker-compValue").val(d);
                    var m = e.settings.formatHumanDate({
                        dd: v,
                        MM: b,
                        yyyy: d,
                        day: p,
                        dayShort: u,
                        month: h,
                        monthShort: l
                    });
                    t(e.element).find(".dtpicker-value").html(m)
                } else if (e._compare(e.settings.mode, "time")) {
                    var f = e.dataObject.iCurrentHour;
                    e.dataObject.bIs12Hour && (f > 12 && (f -= 12), t(e.element).find(".meridiem .dtpicker-compValue").val(e.dataObject.sCurrentMeridiem)), f = 10 > f ? "0" + f : f, e.dataObject.bIs12Hour && "00" == f && (f = 12), y = 10 > (y = e.dataObject.iCurrentMinutes) ? "0" + y : y, t(e.element).find(".hour .dtpicker-compValue").val(f), t(e.element).find(".minutes .dtpicker-compValue").val(y);
                    var g = f + e.settings.timeSeparator + y;
                    e.dataObject.bIs12Hour && (g += e.settings.timeMeridiemSeparator + e.dataObject.sCurrentMeridiem), t(e.element).find(".dtpicker-value").html(g)
                } else if (e._compare(e.settings.mode, "datetime")) {
                    var v;
                    v = 10 > (v = e.dataObject.iCurrentDay) ? "0" + v : v;
                    var b = 10 > (r = e.dataObject.iCurrentMonth) ? "0" + r : r;
                    l = e.settings.shortMonthNames[r], h = e.settings.fullMonthNames[r], d = e.dataObject.iCurrentYear, c = e.dataObject.dCurrentDate.getDay(), u = e.settings.shortDayNames[c], p = e.settings.fullDayNames[c];
                    t(e.element).find(".day .dtpicker-compValue").val(v), t(e.element).find(".month .dtpicker-compValue").val(l), t(e.element).find(".year .dtpicker-compValue").val(d);
                    var y;
                    m = e.settings.formatHumanDate({
                        dd: v,
                        MM: b,
                        yyyy: d,
                        day: p,
                        dayShort: u,
                        month: h,
                        monthShort: l
                    }), f = e.dataObject.iCurrentHour;
                    e.dataObject.bIs12Hour && (f > 12 && (f -= 12), t(e.element).find(".meridiem .dtpicker-compValue").val(e.dataObject.sCurrentMeridiem)), f = 10 > f ? "0" + f : f, e.dataObject.bIs12Hour && "00" == f && (f = 12), y = 10 > (y = e.dataObject.iCurrentMinutes) ? "0" + y : y, t(e.element).find(".hour .dtpicker-compValue").val(f), t(e.element).find(".minutes .dtpicker-compValue").val(y);
                    g = f + e.settings.timeSeparator + y;
                    e.dataObject.bIs12Hour && (g += e.settings.timeMeridiemSeparator + e.dataObject.sCurrentMeridiem);
                    var C = m + e.settings.dateTimeSeparator + g;
                    t(e.element).find(".dtpicker-value").html(C)
                }
                e._setButtons()
            },
            _setButtons: function() {
                var e, i = this;
                if (t(i.element).find(".dtpicker-compButton").removeClass("dtpicker-compButtonDisable").addClass("dtpicker-compButtonEnable"), null != i.dataObject.dMaxValue && (i._compare(i.settings.mode, "time") ? ((i.dataObject.iCurrentHour + 1 > i.dataObject.dMaxValue.getHours() || i.dataObject.iCurrentHour + 1 == i.dataObject.dMaxValue.getHours() && i.dataObject.iCurrentMinutes > i.dataObject.dMaxValue.getMinutes()) && t(i.element).find(".hour .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), i.dataObject.iCurrentHour >= i.dataObject.dMaxValue.getHours() && i.dataObject.iCurrentMinutes + 1 > i.dataObject.dMaxValue.getMinutes() && t(i.element).find(".minutes .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable")) : ((e = new Date(i.dataObject.iCurrentYear, i.dataObject.iCurrentMonth, i.dataObject.iCurrentDay + 1, i.dataObject.iCurrentHour, i.dataObject.iCurrentMinutes, 0, 0)).getTime() > i.dataObject.dMaxValue.getTime() && t(i.element).find(".day .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), (e = new Date(i.dataObject.iCurrentYear, i.dataObject.iCurrentMonth + 1, i.dataObject.iCurrentDay, i.dataObject.iCurrentHour, i.dataObject.iCurrentMinutes, 0, 0)).getTime() > i.dataObject.dMaxValue.getTime() && t(i.element).find(".month .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), (e = new Date(i.dataObject.iCurrentYear + 1, i.dataObject.iCurrentMonth, i.dataObject.iCurrentDay, i.dataObject.iCurrentHour, i.dataObject.iCurrentMinutes, 0, 0)).getTime() > i.dataObject.dMaxValue.getTime() && t(i.element).find(".year .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), (e = new Date(i.dataObject.iCurrentYear, i.dataObject.iCurrentMonth, i.dataObject.iCurrentDay, i.dataObject.iCurrentHour + 1, i.dataObject.iCurrentMinutes, 0, 0)).getTime() > i.dataObject.dMaxValue.getTime() && t(i.element).find(".hour .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), (e = new Date(i.dataObject.iCurrentYear, i.dataObject.iCurrentMonth, i.dataObject.iCurrentDay, i.dataObject.iCurrentHour, i.dataObject.iCurrentMinutes + 1, 0, 0)).getTime() > i.dataObject.dMaxValue.getTime() && t(i.element).find(".minutes .increment").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"))), null != i.dataObject.dMinValue && (i._compare(i.settings.mode, "time") ? ((i.dataObject.iCurrentHour - 1 < i.dataObject.dMinValue.getHours() || i.dataObject.iCurrentHour - 1 == i.dataObject.dMinValue.getHours() && i.dataObject.iCurrentMinutes < i.dataObject.dMinValue.getMinutes()) && t(i.element).find(".hour .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), i.dataObject.iCurrentHour <= i.dataObject.dMinValue.getHours() && i.dataObject.iCurrentMinutes - 1 < i.dataObject.dMinValue.getMinutes() && t(i.element).find(".minutes .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable")) : ((e = new Date(i.dataObject.iCurrentYear, i.dataObject.iCurrentMonth, i.dataObject.iCurrentDay - 1, i.dataObject.iCurrentHour, i.dataObject.iCurrentMinutes, 0, 0)).getTime() < i.dataObject.dMinValue.getTime() && t(i.element).find(".day .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), (e = new Date(i.dataObject.iCurrentYear, i.dataObject.iCurrentMonth - 1, i.dataObject.iCurrentDay, i.dataObject.iCurrentHour, i.dataObject.iCurrentMinutes, 0, 0)).getTime() < i.dataObject.dMinValue.getTime() && t(i.element).find(".month .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), (e = new Date(i.dataObject.iCurrentYear - 1, i.dataObject.iCurrentMonth, i.dataObject.iCurrentDay, i.dataObject.iCurrentHour, i.dataObject.iCurrentMinutes, 0, 0)).getTime() < i.dataObject.dMinValue.getTime() && t(i.element).find(".year .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), (e = new Date(i.dataObject.iCurrentYear, i.dataObject.iCurrentMonth, i.dataObject.iCurrentDay, i.dataObject.iCurrentHour - 1, i.dataObject.iCurrentMinutes, 0, 0)).getTime() < i.dataObject.dMinValue.getTime() && t(i.element).find(".hour .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"), (e = new Date(i.dataObject.iCurrentYear, i.dataObject.iCurrentMonth, i.dataObject.iCurrentDay, i.dataObject.iCurrentHour, i.dataObject.iCurrentMinutes - 1, 0, 0)).getTime() < i.dataObject.dMinValue.getTime() && t(i.element).find(".minutes .decrement").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable"))), i.dataObject.bIs12Hour && (null != i.dataObject.dMaxValue || null != i.dataObject.dMinValue)) {
                    var a = i.dataObject.iCurrentHour;
                    if (i._compare(i.dataObject.sCurrentMeridiem, "AM") ? a += 12 : i._compare(i.dataObject.sCurrentMeridiem, "PM") && (a -= 12), e = new Date(i.dataObject.iCurrentYear, i.dataObject.iCurrentMonth, i.dataObject.iCurrentDay, a, i.dataObject.iCurrentMinutes, 0, 0), null != i.dataObject.dMaxValue)
                        if (i._compare(i.settings.mode, "time")) {
                            var s = i.dataObject.iCurrentMinutes;
                            (a > i.dataObject.dMaxValue.getHours() || a == i.dataObject.dMaxValue.getHours() && s > i.dataObject.dMaxValue.getMinutes()) && t(i.element).find(".meridiem .dtpicker-compButton").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable")
                        } else e.getTime() > i.dataObject.dMaxValue.getTime() && t(i.element).find(".meridiem .dtpicker-compButton").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable");
                    if (null != i.dataObject.dMinValue)
                        if (i._compare(i.settings.mode, "time")) {
                            s = i.dataObject.iCurrentMinutes;
                            (a < i.dataObject.dMinValue.getHours() || a == i.dataObject.dMinValue.getHours() && s < i.dataObject.dMinValue.getMinutes()) && t(i.element).find(".meridiem .dtpicker-compButton").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable")
                        } else e.getTime() < i.dataObject.dMinValue.getTime() && t(i.element).find(".meridiem .dtpicker-compButton").removeClass("dtpicker-compButtonEnable").addClass("dtpicker-compButtonDisable")
                }
            },
            _compare: function(t, e) {
                return void 0 !== t && null !== t && (void 0 !== e && null !== e) ? t.toLowerCase() == e.toLowerCase() : void 0
            },
            setIsPopup: function(e) {
                var i = this;
                if (i.settings.isPopup = e, "none" != t(i.element).css("display") && i._hidePicker(0), i.settings.isPopup) t(i.element).addClass("dtpicker-mobile"), t(i.element).css({
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                });
                else if (t(i.element).removeClass("dtpicker-mobile"), null != i.dataObject.oInputElement) {
                    var a = t(i.dataObject.oInputElement).offset().top + t(i.dataObject.oInputElement).outerHeight(),
                        s = t(i.dataObject.oInputElement).offset().left,
                        n = t(i.dataObject.oInputElement).outerWidth();
                    t(i.element).css({
                        position: "absolute",
                        top: a,
                        left: s,
                        width: n,
                        height: "auto"
                    })
                }
            },
            _compareDates: function(t, e) {
                t = new Date(t.getDate(), t.getMonth(), t.getFullYear(), 0, 0, 0, 0);
                var i = ((t = new Date(t.getDate(), t.getMonth(), t.getFullYear(), 0, 0, 0, 0)).getTime() - e.getTime()) / 864e5;
                return 0 == i ? i : i / Math.abs(i)
            },
            _compareTime: function(t, e) {
                var i = 0;
                return t.getHours() == e.getHours() && t.getMinutes() == e.getMinutes() ? i = 1 : t.getHours() < e.getHours() ? i = 2 : t.getHours() > e.getHours() ? i = 3 : t.getHours() == e.getHours() && (t.getMinutes() < e.getMinutes() ? i = 2 : t.getMinutes() > e.getMinutes() && (i = 3)), i
            },
            _compareDateTime: function(t, e) {
                var i = (t.getTime() - e.getTime()) / 6e4;
                return 0 == i ? i : i / Math.abs(i)
            },
            _determineMeridiemFromHourAndMinutes: function(t, e) {
                return t > 12 ? "PM" : 12 == t && e >= 0 ? "PM" : "AM"
            }
        }
    });