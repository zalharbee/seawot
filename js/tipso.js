!function (t) { "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery) }(function (t) { function o(o, e) { this.element = o, this.$element = t(this.element), this.doc = t(document), this.win = t(window), this.settings = t.extend({}, n, e), "object" == typeof this.$element.data("tipso") && t.extend(this.settings, this.$element.data("tipso")); for (var r = Object.keys(this.$element.data()), s = {}, d = 0; d < r.length; d++) { var l = r[d].replace(i, ""); if ("" !== l) { l = l.charAt(0).toLowerCase() + l.slice(1), s[l] = this.$element.data(r[d]); for (var p in this.settings) p.toLowerCase() == l && (this.settings[p] = s[l]) } } this._defaults = n, this._name = i, this._title = this.$element.attr("title"), this.mode = "hide", this.ieFade = !a, this.settings.preferedPosition = this.settings.position, this.init() } function e(o) { var e = o.clone(); e.css("visibility", "hidden"), t("body").append(e); var r = e.outerHeight(), s = e.outerWidth(); return e.remove(), { width: s, height: r } } function r(t) { t.removeClass("top_right_corner bottom_right_corner top_left_corner bottom_left_corner"), t.find(".tipso_title").removeClass("top_right_corner bottom_right_corner top_left_corner bottom_left_corner") } function s(o) { var i, n, a, d = o.tooltip(), l = o.$element, p = o, f = t(window), g = 10, c = p.settings.background, h = p.titleContent(); switch (void 0 !== h && "" !== h && (c = p.settings.titleBackground), l.parent().outerWidth() > f.outerWidth() && (f = l.parent()), p.settings.position) { case "top-right": n = l.offset().left + l.outerWidth(), i = l.offset().top - e(d).height - g, d.find(".tipso_arrow").css({ marginLeft: -p.settings.arrowWidth, marginTop: "" }), i < f.scrollTop() ? (i = l.offset().top + l.outerHeight() + g, d.find(".tipso_arrow").css({ "border-bottom-color": c, "border-top-color": "transparent", "border-left-color": "transparent", "border-right-color": "transparent" }), r(d), d.addClass("bottom_right_corner"), d.find(".tipso_title").addClass("bottom_right_corner"), d.find(".tipso_arrow").css({ "border-left-color": c }), d.removeClass("top-right top bottom left right"), d.addClass("bottom")) : (d.find(".tipso_arrow").css({ "border-top-color": p.settings.background, "border-bottom-color": "transparent ", "border-left-color": "transparent", "border-right-color": "transparent" }), r(d), d.addClass("top_right_corner"), d.find(".tipso_arrow").css({ "border-left-color": p.settings.background }), d.removeClass("top bottom left right"), d.addClass("top")); break; case "top-left": n = l.offset().left - e(d).width, i = l.offset().top - e(d).height - g, d.find(".tipso_arrow").css({ marginLeft: -p.settings.arrowWidth, marginTop: "" }), i < f.scrollTop() ? (i = l.offset().top + l.outerHeight() + g, d.find(".tipso_arrow").css({ "border-bottom-color": c, "border-top-color": "transparent", "border-left-color": "transparent", "border-right-color": "transparent" }), r(d), d.addClass("bottom_left_corner"), d.find(".tipso_title").addClass("bottom_left_corner"), d.find(".tipso_arrow").css({ "border-right-color": c }), d.removeClass("top-right top bottom left right"), d.addClass("bottom")) : (d.find(".tipso_arrow").css({ "border-top-color": p.settings.background, "border-bottom-color": "transparent ", "border-left-color": "transparent", "border-right-color": "transparent" }), r(d), d.addClass("top_left_corner"), d.find(".tipso_arrow").css({ "border-right-color": p.settings.background }), d.removeClass("top bottom left right"), d.addClass("top")); break; case "bottom-right": n = l.offset().left + l.outerWidth(), i = l.offset().top + l.outerHeight() + g, d.find(".tipso_arrow").css({ marginLeft: -p.settings.arrowWidth, marginTop: "" }), i + e(d).height > f.scrollTop() + f.outerHeight() ? (i = l.offset().top - e(d).height - g, d.find(".tipso_arrow").css({ "border-bottom-color": "transparent", "border-top-color": p.settings.background, "border-left-color": "transparent", "border-right-color": "transparent" }), r(d), d.addClass("top_right_corner"), d.find(".tipso_title").addClass("top_left_corner"), d.find(".tipso_arrow").css({ "border-left-color": p.settings.background }), d.removeClass("top-right top bottom left right"), d.addClass("top")) : (d.find(".tipso_arrow").css({ "border-top-color": "transparent", "border-bottom-color": c, "border-left-color": "transparent", "border-right-color": "transparent" }), r(d), d.addClass("bottom_right_corner"), d.find(".tipso_title").addClass("bottom_right_corner"), d.find(".tipso_arrow").css({ "border-left-color": c }), d.removeClass("top bottom left right"), d.addClass("bottom")); break; case "bottom-left": n = l.offset().left - e(d).width, i = l.offset().top + l.outerHeight() + g, d.find(".tipso_arrow").css({ marginLeft: -p.settings.arrowWidth, marginTop: "" }), i + e(d).height > f.scrollTop() + f.outerHeight() ? (i = l.offset().top - e(d).height - g, d.find(".tipso_arrow").css({ "border-bottom-color": "transparent", "border-top-color": p.settings.background, "border-left-color": "transparent", "border-right-color": "transparent" }), r(d), d.addClass("top_left_corner"), d.find(".tipso_title").addClass("top_left_corner"), d.find(".tipso_arrow").css({ "border-right-color": p.settings.background }), d.removeClass("top-right top bottom left right"), d.addClass("top")) : (d.find(".tipso_arrow").css({ "border-top-color": "transparent", "border-bottom-color": c, "border-left-color": "transparent", "border-right-color": "transparent" }), r(d), d.addClass("bottom_left_corner"), d.find(".tipso_title").addClass("bottom_left_corner"), d.find(".tipso_arrow").css({ "border-right-color": c }), d.removeClass("top bottom left right"), d.addClass("bottom")); break; case "top": n = l.offset().left + l.outerWidth() / 2 - e(d).width / 2, i = l.offset().top - e(d).height - g, d.find(".tipso_arrow").css({ marginLeft: -p.settings.arrowWidth, marginTop: "" }), i < f.scrollTop() ? (i = l.offset().top + l.outerHeight() + g, d.find(".tipso_arrow").css({ "border-bottom-color": c, "border-top-color": "transparent", "border-left-color": "transparent", "border-right-color": "transparent" }), d.removeClass("top bottom left right"), d.addClass("bottom")) : (d.find(".tipso_arrow").css({ "border-top-color": p.settings.background, "border-bottom-color": "transparent", "border-left-color": "transparent", "border-right-color": "transparent" }), d.removeClass("top bottom left right"), d.addClass("top")); break; case "bottom": n = l.offset().left + l.outerWidth() / 2 - e(d).width / 2, i = l.offset().top + l.outerHeight() + g, d.find(".tipso_arrow").css({ marginLeft: -p.settings.arrowWidth, marginTop: "" }), i + e(d).height > f.scrollTop() + f.outerHeight() ? (i = l.offset().top - e(d).height - g, d.find(".tipso_arrow").css({ "border-top-color": p.settings.background, "border-bottom-color": "transparent", "border-left-color": "transparent", "border-right-color": "transparent" }), d.removeClass("top bottom left right"), d.addClass("top")) : (d.find(".tipso_arrow").css({ "border-bottom-color": c, "border-top-color": "transparent", "border-left-color": "transparent", "border-right-color": "transparent" }), d.removeClass("top bottom left right"), d.addClass(p.settings.position)); break; case "left": n = l.offset().left - e(d).width - g, i = l.offset().top + l.outerHeight() / 2 - e(d).height / 2, d.find(".tipso_arrow").css({ marginTop: -p.settings.arrowWidth, marginLeft: "" }), n < f.scrollLeft() ? (n = l.offset().left + l.outerWidth() + g, d.find(".tipso_arrow").css({ "border-right-color": p.settings.background, "border-left-color": "transparent", "border-top-color": "transparent", "border-bottom-color": "transparent" }), d.removeClass("top bottom left right"), d.addClass("right")) : (d.find(".tipso_arrow").css({ "border-left-color": p.settings.background, "border-right-color": "transparent", "border-top-color": "transparent", "border-bottom-color": "transparent" }), d.removeClass("top bottom left right"), d.addClass(p.settings.position)); break; case "right": n = l.offset().left + l.outerWidth() + g, i = l.offset().top + l.outerHeight() / 2 - e(d).height / 2, d.find(".tipso_arrow").css({ marginTop: -p.settings.arrowWidth, marginLeft: "" }), n + g + p.settings.width > f.scrollLeft() + f.outerWidth() ? (n = l.offset().left - e(d).width - g, d.find(".tipso_arrow").css({ "border-left-color": p.settings.background, "border-right-color": "transparent", "border-top-color": "transparent", "border-bottom-color": "transparent" }), d.removeClass("top bottom left right"), d.addClass("left")) : (d.find(".tipso_arrow").css({ "border-right-color": p.settings.background, "border-left-color": "transparent", "border-top-color": "transparent", "border-bottom-color": "transparent" }), d.removeClass("top bottom left right"), d.addClass(p.settings.position)) }if ("top-right" === p.settings.position && d.find(".tipso_arrow").css({ "margin-left": -p.settings.width / 2 }), "top-left" === p.settings.position) { var m = d.find(".tipso_arrow").eq(0); m.css({ "margin-left": p.settings.width / 2 - 2 * p.settings.arrowWidth }) } if ("bottom-right" === p.settings.position) { var m = d.find(".tipso_arrow").eq(0); m.css({ "margin-left": -p.settings.width / 2, "margin-top": "" }) } if ("bottom-left" === p.settings.position) { var m = d.find(".tipso_arrow").eq(0); m.css({ "margin-left": p.settings.width / 2 - 2 * p.settings.arrowWidth, "margin-top": "" }) } n < f.scrollLeft() && ("bottom" === p.settings.position || "top" === p.settings.position) && (d.find(".tipso_arrow").css({ marginLeft: n - p.settings.arrowWidth }), n = 0), n + p.settings.width > f.outerWidth() && ("bottom" === p.settings.position || "top" === p.settings.position) && (a = f.outerWidth() - (n + p.settings.width), d.find(".tipso_arrow").css({ marginLeft: -a - p.settings.arrowWidth, marginTop: "" }), n += a), n < f.scrollLeft() && ("left" === p.settings.position || "right" === p.settings.position || "top-right" === p.settings.position || "top-left" === p.settings.position || "bottom-right" === p.settings.position || "bottom-left" === p.settings.position) && (n = l.offset().left + l.outerWidth() / 2 - e(d).width / 2, d.find(".tipso_arrow").css({ marginLeft: -p.settings.arrowWidth, marginTop: "" }), i = l.offset().top - e(d).height - g, i < f.scrollTop() ? (i = l.offset().top + l.outerHeight() + g, d.find(".tipso_arrow").css({ "border-bottom-color": c, "border-top-color": "transparent", "border-left-color": "transparent", "border-right-color": "transparent" }), d.removeClass("top bottom left right"), r(d), d.addClass("bottom")) : (d.find(".tipso_arrow").css({ "border-top-color": p.settings.background, "border-bottom-color": "transparent", "border-left-color": "transparent", "border-right-color": "transparent" }), d.removeClass("top bottom left right"), r(d), d.addClass("top")), n + p.settings.width > f.outerWidth() && (a = f.outerWidth() - (n + p.settings.width), d.find(".tipso_arrow").css({ marginLeft: -a - p.settings.arrowWidth, marginTop: "" }), n += a), n < f.scrollLeft() && (d.find(".tipso_arrow").css({ marginLeft: n - p.settings.arrowWidth }), n = 0)), n + p.settings.width > f.outerWidth() && ("left" === p.settings.position || "right" === p.settings.position || "top-right" === p.settings.position || "top-left" === p.settings.position || "bottom-right" === p.settings.position || "bottom-right" === p.settings.position) && (n = l.offset().left + l.outerWidth() / 2 - e(d).width / 2, d.find(".tipso_arrow").css({ marginLeft: -p.settings.arrowWidth, marginTop: "" }), i = l.offset().top - e(d).height - g, i < f.scrollTop() ? (i = l.offset().top + l.outerHeight() + g, d.find(".tipso_arrow").css({ "border-bottom-color": c, "border-top-color": "transparent", "border-left-color": "transparent", "border-right-color": "transparent" }), r(d), d.removeClass("top bottom left right"), d.addClass("bottom")) : (d.find(".tipso_arrow").css({ "border-top-color": p.settings.background, "border-bottom-color": "transparent", "border-left-color": "transparent", "border-right-color": "transparent" }), r(d), d.removeClass("top bottom left right"), d.addClass("top")), n + p.settings.width > f.outerWidth() && (a = f.outerWidth() - (n + p.settings.width), d.find(".tipso_arrow").css({ marginLeft: -a - p.settings.arrowWidth, marginTop: "" }), n += a), n < f.scrollLeft() && (d.find(".tipso_arrow").css({ marginLeft: n - p.settings.arrowWidth }), n = 0)), d.css({ left: n + p.settings.offsetX, top: i + p.settings.offsetY }), i < f.scrollTop() && ("right" === p.settings.position || "left" === p.settings.position) && (l.tipso("update", "position", "bottom"), s(p)), i + e(d).height > f.scrollTop() + f.outerHeight() && ("right" === p.settings.position || "left" === p.settings.position) && (l.tipso("update", "position", "top"), s(p)) } var i = "tipso", n = { speed: 400, background: "#55b555", titleBackground: "#333333", color: "#ffffff", titleColor: "#ffffff", titleContent: "", showArrow: !0, position: "top", width: 200, maxWidth: "", delay: 200, hideDelay: 0, animationIn: "", animationOut: "", offsetX: 0, offsetY: 0, arrowWidth: 8, tooltipHover: !1, content: null, ajaxContentUrl: null, ajaxContentBuffer: 0, contentElementId: null, useTitle: !1, templateEngineFunc: null, onBeforeShow: null, onShow: null, onHide: null }; t.extend(o.prototype, { init: function () { var t = this, o = this.$element; this.doc; if (o.addClass("tipso_style").removeAttr("title"), t.settings.tooltipHover) { var e = null, r = null; o.on("mouseover." + i, function () { clearTimeout(e), clearTimeout(r), r = setTimeout(function () { t.show() }, 150) }), o.on("mouseout." + i, function () { clearTimeout(e), clearTimeout(r), e = setTimeout(function () { t.hide() }, 200), t.tooltip().on("mouseover." + i, function () { t.mode = "tooltipHover" }).on("mouseout." + i, function () { t.mode = "show", clearTimeout(e), e = setTimeout(function () { t.hide() }, 200) }) }) } else o.on("mouseover." + i, function () { t.show() }), o.on("mouseout." + i, function () { t.hide() }); t.settings.ajaxContentUrl && (t.ajaxContent = null) }, tooltip: function () { return this.tipso_bubble || (this.tipso_bubble = t('<div class="tipso_bubble"><div class="tipso_title"></div><div class="tipso_content"></div><div class="tipso_arrow"></div></div>')), this.tipso_bubble }, show: function () { var o = this.tooltip(), e = this, r = this.win; e.settings.showArrow === !1 ? o.find(".tipso_arrow").hide() : o.find(".tipso_arrow").show(), "hide" === e.mode && (t.isFunction(e.settings.onBeforeShow) && e.settings.onBeforeShow(e.$element, e.element, e), e.settings.size && o.addClass(e.settings.size), e.settings.width ? o.css({ background: e.settings.background, color: e.settings.color, width: e.settings.width }).hide() : e.settings.maxWidth ? o.css({ background: e.settings.background, color: e.settings.color, maxWidth: e.settings.maxWidth }).hide() : o.css({ background: e.settings.background, color: e.settings.color, width: 200 }).hide(), o.find(".tipso_title").css({ background: e.settings.titleBackground, color: e.settings.titleColor }), o.find(".tipso_content").html(e.content()), o.find(".tipso_title").html(e.titleContent()), s(e), r.on("resize." + i, function () { e.settings.position = e.settings.preferedPosition, s(e) }), window.clearTimeout(e.timeout), e.timeout = null, e.timeout = window.setTimeout(function () { e.ieFade || "" === e.settings.animationIn || "" === e.settings.animationOut ? o.appendTo("body").stop(!0, !0).fadeIn(e.settings.speed, function () { e.mode = "show", t.isFunction(e.settings.onShow) && e.settings.onShow(e.$element, e.element, e) }) : o.remove().appendTo("body").stop(!0, !0).removeClass("animated " + e.settings.animationOut).addClass("noAnimation").removeClass("noAnimation").addClass("animated " + e.settings.animationIn).fadeIn(e.settings.speed, function () { t(this).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () { t(this).removeClass("animated " + e.settings.animationIn) }), e.mode = "show", t.isFunction(e.settings.onShow) && e.settings.onShow(e.$element, e.element, e), r.off("resize." + i, null, "tipsoResizeHandler") }) }, e.settings.delay)) }, hide: function (o) { var e = this, r = this.win, s = this.tooltip(), n = e.settings.hideDelay; o && (n = 0, e.mode = "show"), window.clearTimeout(e.timeout), e.timeout = null, e.timeout = window.setTimeout(function () { "tooltipHover" !== e.mode && (e.ieFade || "" === e.settings.animationIn || "" === e.settings.animationOut ? s.stop(!0, !0).fadeOut(e.settings.speed, function () { t(this).remove(), t.isFunction(e.settings.onHide) && "show" === e.mode && e.settings.onHide(e.$element, e.element, e), e.mode = "hide", r.off("resize." + i, null, "tipsoResizeHandler") }) : s.stop(!0, !0).removeClass("animated " + e.settings.animationIn).addClass("noAnimation").removeClass("noAnimation").addClass("animated " + e.settings.animationOut).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () { t(this).removeClass("animated " + e.settings.animationOut).remove(), t.isFunction(e.settings.onHide) && "show" === e.mode && e.settings.onHide(e.$element, e.element, e), e.mode = "hide", r.off("resize." + i, null, "tipsoResizeHandler") })) }, n) }, close: function () { this.hide(!0) }, destroy: function () { var t = this.$element, o = this.win; this.doc; t.off("." + i), o.off("resize." + i, null, "tipsoResizeHandler"), t.removeData(i), t.removeClass("tipso_style").attr("title", this._title) }, titleContent: function () { var t, o = this.$element, e = this; return t = e.settings.titleContent ? e.settings.titleContent : o.data("tipso-title") }, content: function () { var o, e = this.$element, r = this, s = this._title; return r.settings.ajaxContentUrl ? r._ajaxContent ? o = r._ajaxContent : (r._ajaxContent = o = t.ajax({ type: "GET", url: r.settings.ajaxContentUrl, async: !1 }).responseText, r.settings.ajaxContentBuffer > 0 ? setTimeout(function () { r._ajaxContent = null }, r.settings.ajaxContentBuffer) : r._ajaxContent = null) : r.settings.contentElementId ? o = t("#" + r.settings.contentElementId).text() : r.settings.content ? o = r.settings.content : r.settings.useTitle === !0 ? o = s : "string" == typeof e.data("tipso") && (o = e.data("tipso")), null !== r.settings.templateEngineFunc && (o = r.settings.templateEngineFunc(o)), o }, update: function (t, o) { var e = this; return o ? void (e.settings[t] = o) : e.settings[t] } }); var a = function () { var t = document.createElement("p").style, o = ["ms", "O", "Moz", "Webkit"]; if ("" === t.transition) return !0; for (; o.length;)if (o.pop() + "Transition" in t) return !0; return !1 }(); t[i] = t.fn[i] = function (e) { var r = arguments; if (void 0 === e || "object" == typeof e) return this instanceof t || t.extend(n, e), this.each(function () { t.data(this, "plugin_" + i) || t.data(this, "plugin_" + i, new o(this, e)) }); if ("string" == typeof e && "_" !== e[0] && "init" !== e) { var s; return this.each(function () { var n = t.data(this, "plugin_" + i); n || (n = t.data(this, "plugin_" + i, new o(this, e))), n instanceof o && "function" == typeof n[e] && (s = n[e].apply(n, Array.prototype.slice.call(r, 1))), "destroy" === e && t.data(this, "plugin_" + i, null) }), void 0 !== s ? s : this } } });