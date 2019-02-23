! function(t) {
    var e = -1,
        o = -1,
        a = function(t) {
            return parseFloat(t) || 0
        },
        i = function(e) {
            var o = {
                byRow: !0,
                remove: !1,
                property: "height"
            };
            return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
        },
        n = t.fn.matchHeight = function(e) {
            var o = i(e);
            if (o.remove) {
                var a = this;
                return this.css(o.property, ""), t.each(n._groups, function(t, e) {
                    e.elements = e.elements.not(a)
                }), this
            }
            return this.length <= 1 ? this : (n._groups.push({
                elements: this,
                options: o
            }), n._apply(this, o), this)
        };
    n._groups = [], n._throttle = 80, n._maintainScroll = !1, n._beforeUpdate = null, n._afterUpdate = null, n._apply = function(e, o) {
        var r, s, h = i(o),
            c = t(e),
            l = [c],
            p = t(window).scrollTop(),
            d = t("html").outerHeight(!0),
            u = c.parents().filter(":hidden");
        return u.each(function() {
            var e = t(this);
            e.data("style-cache", e.attr("style"))
        }), u.css("display", "block"), h.byRow && (c.each(function() {
            var e = t(this),
                o = "inline-block" === e.css("display") ? "inline-block" : "block";
            e.data("style-cache", e.attr("style")), e.css({
                display: o,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px"
            })
        }), r = null, s = [], t(c).each(function() {
            var e = t(this),
                o = e.offset().top - a(e.css("margin-top")),
                i = s.length > 0 ? s[s.length - 1] : null;
            null === i ? s.push(e) : Math.floor(Math.abs(r - o)) <= 1 ? s[s.length - 1] = i.add(e) : s.push(e), r = o
        }), l = s, c.each(function() {
            var e = t(this);
            e.attr("style", e.data("style-cache") || "")
        })), t.each(l, function(e, o) {
            var i = t(o),
                n = 0;
            return h.byRow && i.length <= 1 ? void i.css(h.property, "") : (i.each(function() {
                var e = t(this),
                    o = {
                        display: "inline-block" === e.css("display") ? "inline-block" : "block"
                    };
                o[h.property] = "", e.css(o), e.outerHeight(!1) > n && (n = e.outerHeight(!1)), e.css("display", "")
            }), void i.each(function() {
                var e = t(this),
                    o = 0;
                "border-box" !== e.css("box-sizing") && (o += a(e.css("border-top-width")) + a(e.css("border-bottom-width")), o += a(e.css("padding-top")) + a(e.css("padding-bottom"))), e.css(h.property, n - o)
            }))
        }), u.each(function() {
            var e = t(this);
            e.attr("style", e.data("style-cache") || null)
        }), n._maintainScroll && t(window).scrollTop(p / d * t("html").outerHeight(!0)), this
    }, n._applyDataApi = function() {
        var e = {};
        t("[data-match-height], [data-mh]").each(function() {
            var o = t(this),
                a = o.attr("data-match-height") || o.attr("data-mh");
            e[a] = a in e ? e[a].add(o) : o
        }), t.each(e, function() {
            this.matchHeight(!0)
        })
    };
    var r = function(e) {
        n._beforeUpdate && n._beforeUpdate(e, n._groups), t.each(n._groups, function() {
            n._apply(this.elements, this.options)
        }), n._afterUpdate && n._afterUpdate(e, n._groups)
    };
    n._update = function(a, i) {
        if (i && "resize" === i.type) {
            var s = t(window).width();
            if (s === e) return;
            e = s
        }
        a ? -1 === o && (o = setTimeout(function() {
            r(i), o = -1
        }, n._throttle)) : r(i)
    }, t(n._applyDataApi), t(window).bind("load", function(t) {
        n._update(!1, t)
    }), t(window).bind("resize orientationchange", function(t) {
        n._update(!0, t)
    })
}(jQuery);