! function(t) {
    "object" == typeof module && "object" == typeof module.exports ? t(require("jquery"), window, document) : t(window.jQuery, window, document)
}(function(t, s, i, e) {
    var o, r = "WebkitAppearance" in i.documentElement.style;

    function l(s, i) {
        this.el = s, this.$el = t(s), this.$track, this.$scrollbar, this.dragOffset, this.flashTimeout, this.$contentEl = this.$el, this.$scrollContentEl = this.$el, this.scrollDirection = "vert", this.scrollOffsetAttr = "scrollTop", this.sizeAttr = "height", this.scrollSizeAttr = "scrollHeight", this.offsetAttr = "top", this.options = t.extend({}, l.DEFAULTS, i), this.theme = this.options.css, this.init()
    }
    l.DEFAULTS = {
        wrapContent: !0,
        autoHide: !0,
        css: {
            container: "simplebar",
            content: "simplebar-content",
            scrollContent: "simplebar-scroll-content",
            scrollbar: "simplebar-scrollbar",
            scrollbarTrack: "simplebar-track"
        }
    }, l.prototype.init = function() {
        var s, i, e;
        void 0 === o && (e = t('<div class="scrollbar-width-tester" style="width:50px;height:50px;overflow-y:scroll;top:-200px;left:-200px;"><div style="height:100px;"></div>'), t("body").append(e), s = t(e).innerWidth(), i = t("div", e).innerWidth(), e.remove(), o = s - i), 0 !== o ? (("horizontal" === this.$el.data("simplebar-direction") || this.$el.hasClass(this.theme.container + " horizontal")) && (this.scrollDirection = "horiz", this.scrollOffsetAttr = "scrollLeft", this.sizeAttr = "width", this.scrollSizeAttr = "scrollWidth", this.offsetAttr = "left"), this.options.wrapContent && this.$el.wrapInner('<div class="' + this.theme.scrollContent + '"><div class="' + this.theme.content + '"></div></div>'), this.$contentEl = this.$el.find("." + this.theme.content), this.$el.prepend('<div class="' + this.theme.scrollbarTrack + '"><div class="' + this.theme.scrollbar + '"></div></div>'), this.$track = this.$el.find("." + this.theme.scrollbarTrack), this.$scrollbar = this.$el.find("." + this.theme.scrollbar), this.$scrollContentEl = this.$el.find("." + this.theme.scrollContent), this.resizeScrollContent(), this.options.autoHide && this.$el.on("mouseenter", t.proxy(this.flashScrollbar, this)), this.$scrollbar.on("mousedown", t.proxy(this.startDrag, this)), this.$scrollContentEl.on("scroll", t.proxy(this.startScroll, this)), this.resizeScrollbar(), this.options.autoHide || this.showScrollbar()) : this.$el.css("overflow-y", "auto")
    }, l.prototype.startDrag = function(s) {
        s.preventDefault();
        var e = s.pageY;
        "horiz" === this.scrollDirection && (e = s.pageX), this.dragOffset = e - this.$scrollbar.offset()[this.offsetAttr], t(i).on("mousemove", t.proxy(this.drag, this)), t(i).on("mouseup", t.proxy(this.endDrag, this))
    }, l.prototype.drag = function(t) {
        t.preventDefault();
        var s, i = t.pageY;
        "horiz" === this.scrollDirection && (i = t.pageX), s = (i - this.$track.offset()[this.offsetAttr] - this.dragOffset) / this.$track[this.sizeAttr]() * this.$contentEl[0][this.scrollSizeAttr], this.$scrollContentEl[this.scrollOffsetAttr](s)
    }, l.prototype.endDrag = function() {
        t(i).off("mousemove", this.drag), t(i).off("mouseup", this.endDrag)
    }, l.prototype.resizeScrollbar = function() {
        if (0 !== o) {
            var t = this.$contentEl[0][this.scrollSizeAttr],
                s = this.$scrollContentEl[this.scrollOffsetAttr](),
                i = this.$track[this.sizeAttr](),
                e = i / t,
                r = Math.round(e * s) + 2,
                l = Math.floor(e * (i - 2)) - 2;
            i < t ? ("vert" === this.scrollDirection ? this.$scrollbar.css({
                top: r,
                height: l
            }) : this.$scrollbar.css({
                left: r,
                width: l
            }), this.$track.show()) : this.$track.hide()
        }
    }, l.prototype.startScroll = function(t) {
        this.$el.trigger(t), this.flashScrollbar()
    }, l.prototype.flashScrollbar = function() {
        this.resizeScrollbar(), this.showScrollbar()
    }, l.prototype.showScrollbar = function() {
        this.$scrollbar.addClass("visible"), this.options.autoHide && ("number" == typeof this.flashTimeout && s.clearTimeout(this.flashTimeout), this.flashTimeout = s.setTimeout(t.proxy(this.hideScrollbar, this), 1e3))
    }, l.prototype.hideScrollbar = function() {
        this.$scrollbar.removeClass("visible"), "number" == typeof this.flashTimeout && s.clearTimeout(this.flashTimeout)
    }, l.prototype.resizeScrollContent = function() {
        r || ("vert" === this.scrollDirection ? (this.$scrollContentEl.width(this.$el.width() + o), this.$scrollContentEl.height(this.$el.height())) : (this.$scrollContentEl.width(this.$el.width()), this.$scrollContentEl.height(this.$el.height() + o)))
    }, l.prototype.recalculate = function() {
        this.resizeScrollContent(), this.resizeScrollbar()
    }, l.prototype.getScrollElement = function() {
        return this.$scrollContentEl
    }, l.prototype.getContentElement = function() {
        return this.$contentEl
    }, t(s).on("load", function() {
        t("[data-simplebar-direction]").each(function() {
            t(this).simplebar()
        })
    });
    var h = t.fn.simplebar;
    t.fn.simplebar = function(s) {
        var i, o = arguments;
        return void 0 === s || "object" == typeof s ? this.each(function() {
            t.data(this, "simplebar") || t.data(this, "simplebar", new l(this, s))
        }) : "string" == typeof s ? (this.each(function() {
            var e = t.data(this, "simplebar");
            e instanceof l && "function" == typeof e[s] && (i = e[s].apply(e, Array.prototype.slice.call(o, 1))), "destroy" === s && t.data(this, "simplebar", null)
        }), i !== e ? i : this) : void 0
    }, t.fn.simplebar.Constructor = l, t.fn.simplebar.noConflict = function() {
        return t.fn.simplebar = h, this
    }
}), $("#bodyscroll").simplebar(), $("#custom-scrollbar").simplebar();