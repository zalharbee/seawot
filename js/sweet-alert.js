!function (e, t, n) { function o(e) { var t = x(), n = t.querySelector("h2"), o = t.querySelector("p"), a = t.querySelector("button.cancel"), r = t.querySelector("button.confirm"); if (n.innerHTML = e.html ? e.title : E(e.title).split("\n").join("<br>"), o.innerHTML = e.html ? e.text : E(e.text || "").split("\n").join("<br>"), e.text && A(o), e.customClass) T(t, e.customClass), t.setAttribute("data-custom-class", e.customClass); else { var i = t.getAttribute("data-custom-class"); B(t, i), t.setAttribute("data-custom-class", "") } if (O(t.querySelectorAll(".sa-icon")), e.type && !u()) { for (var c = !1, l = 0; l < h.length; l++)if (e.type === h[l]) { c = !0; break } if (!c) return f("Unknown alert type: " + e.type), !1; var d = t.querySelector(".sa-icon.sa-" + e.type); switch (A(d), e.type) { case "success": T(d, "animate"), T(d.querySelector(".sa-tip"), "animateSuccessTip"), T(d.querySelector(".sa-long"), "animateSuccessLong"); break; case "error": T(d, "animateErrorIcon"), T(d.querySelector(".sa-x-mark"), "animateXMark"); break; case "warning": T(d, "pulseWarning"), T(d.querySelector(".sa-body"), "pulseWarningIns"), T(d.querySelector(".sa-dot"), "pulseWarningIns") } } if (e.imageUrl) { var p = t.querySelector(".sa-icon.sa-custom"); p.style.backgroundImage = "url(" + e.imageUrl + ")", A(p); var y = 80, m = 80; if (e.imageSize) { var v = e.imageSize.toString().split("x"), b = v[0], g = v[1]; b && g ? (y = b, m = g) : f("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + e.imageSize) } p.setAttribute("style", p.getAttribute("style") + "width:" + y + "px; height:" + m + "px") } t.setAttribute("data-has-cancel-button", e.showCancelButton), e.showCancelButton ? a.style.display = "inline-block" : O(a), t.setAttribute("data-has-confirm-button", e.showConfirmButton), e.showConfirmButton ? r.style.display = "inline-block" : O(r), e.cancelButtonText && (a.innerHTML = E(e.cancelButtonText)), e.confirmButtonText && (r.innerHTML = E(e.confirmButtonText)), r.style.backgroundColor = e.confirmButtonColor, s(r, e.confirmButtonColor), t.setAttribute("data-allow-ouside-click", e.allowOutsideClick); var w = !!e.doneFunction; t.setAttribute("data-has-done-function", w), e.animation ? t.setAttribute("data-animation", "pop") : t.setAttribute("data-animation", "none"), t.setAttribute("data-timer", e.timer) } function a(e, t) { e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0; var n, o, a = "#"; for (o = 0; 3 > o; o++)n = parseInt(e.substr(2 * o, 2), 16), n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16), a += ("00" + n).substr(n.length); return a } function r(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]); return e } function i(e) { var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e); return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null } function s(e, t) { var n = i(t); e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)" } function c() { var e = x(); H(k(), 10), A(e), T(e, "showSweetAlert"), B(e, "hideSweetAlert"), d = t.activeElement; var n = e.querySelector("button.confirm"); n.focus(), setTimeout(function () { T(e, "visible") }, 500); var o = e.getAttribute("data-timer"); "null" !== o && "" !== o && (e.timeout = setTimeout(function () { v.close() }, o)) } function l() { var e = x(); e.style.marginTop = D(x()) } function u() { return !(!e.attachEvent || e.addEventListener) } function f(t) { e.console && e.console.log("SweetAlert: " + t) } var d, p, y, m, v, b, g = ".sweet-alert", w = ".sweet-overlay", h = ["error", "warning", "info", "success"], S = { title: "", text: "", type: null, allowOutsideClick: !1, showConfirmButton: !0, showCancelButton: !1, closeOnConfirm: !0, closeOnCancel: !0, confirmButtonText: "OK", confirmButtonColor: "#AEDEF4", cancelButtonText: "Cancel", imageUrl: null, imageSize: null, timer: null, customClass: "", html: !1, animation: !0, allowEscapeKey: !0 }, x = function () { var e = t.querySelector(g); return e || (j(), e = x()), e }, k = function () { return t.querySelector(w) }, C = function (e, t) { return new RegExp(" " + t + " ").test(" " + e.className + " ") }, T = function (e, t) { C(e, t) || (e.className += " " + t) }, B = function (e, t) { var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " "; if (C(e, t)) { for (; n.indexOf(" " + t + " ") >= 0;)n = n.replace(" " + t + " ", " "); e.className = n.replace(/^\s+|\s+$/g, "") } }, E = function (e) { var n = t.createElement("div"); return n.appendChild(t.createTextNode(e)), n.innerHTML }, q = function (e) { e.style.opacity = "", e.style.display = "block" }, A = function (e) { if (e && !e.length) return q(e); for (var t = 0; t < e.length; ++t)q(e[t]) }, I = function (e) { e.style.opacity = "", e.style.display = "none" }, O = function (e) { if (e && !e.length) return I(e); for (var t = 0; t < e.length; ++t)I(e[t]) }, M = function (e, t) { for (var n = t.parentNode; null !== n;) { if (n === e) return !0; n = n.parentNode } return !1 }, D = function (e) { e.style.left = "-9999px", e.style.display = "block"; var t, n = e.clientHeight; return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding"), 10) : parseInt(e.currentStyle.padding), e.style.left = "", e.style.display = "none", "-" + parseInt(n / 2 + t) + "px" }, H = function (e, t) { if (+e.style.opacity < 1) { t = t || 16, e.style.opacity = 0, e.style.display = "block"; var n = +new Date, o = function () { e.style.opacity = +e.style.opacity + (new Date - n) / 100, n = +new Date, +e.style.opacity < 1 && setTimeout(o, t) }; o() } e.style.display = "block" }, L = function (e, t) { t = t || 16, e.style.opacity = 1; var n = +new Date, o = function () { e.style.opacity = +e.style.opacity - (new Date - n) / 100, n = +new Date, +e.style.opacity > 0 ? setTimeout(o, t) : e.style.display = "none" }; o() }, N = function (n) { if ("function" == typeof MouseEvent) { var o = new MouseEvent("click", { view: e, bubbles: !1, cancelable: !0 }); n.dispatchEvent(o) } else if (t.createEvent) { var a = t.createEvent("MouseEvents"); a.initEvent("click", !1, !1), n.dispatchEvent(a) } else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick() }, P = function (t) { "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0) }, j = function () { var e = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="sa-icon sa-error"><span class="sa-x-mark"><span class="sa-line sa-left"></span><span class="sa-line sa-right"></span></span></div><div class="sa-icon sa-warning"> <span class="sa-body"></span> <span class="sa-dot"></span> </div> <div class="sa-icon sa-info"></div> <div class="sa-icon sa-success"> <span class="sa-line sa-tip"></span> <span class="sa-line sa-long"></span> <div class="sa-placeholder"></div> <div class="sa-fix"></div> </div> <div class="sa-icon sa-custom"></div> <h2>Title</h2><p>Text</p><button class="cancel" tabIndex="2">Cancel</button><button class="confirm" tabIndex="1">OK</button></div>', n = t.createElement("div"); for (n.innerHTML = e; n.firstChild;)t.body.appendChild(n.firstChild) }; v = b = function () { function i(e) { var t = b; return "undefined" != typeof t[e] ? t[e] : S[e] } function u(t) { var o = t || e.event, a = o.keyCode || o.which; if (-1 !== [9, 13, 32, 27].indexOf(a)) { for (var r = o.target || o.srcElement, i = -1, c = 0; c < D.length; c++)if (r === D[c]) { i = c; break } 9 === a ? (r = -1 === i ? I : i === D.length - 1 ? D[0] : D[i + 1], P(o), r.focus(), s(r, g.confirmButtonColor)) : (r = 13 === a || 32 === a ? -1 === i ? I : n : 27 === a && g.allowEscapeKey === !0 ? O : n, r !== n && N(r, o)) } } function d(t) { var n = t || e.event, o = n.target || n.srcElement, a = n.relatedTarget, r = C(B, "visible"); if (r) { var i = -1; if (null !== a) { for (var s = 0; s < D.length; s++)if (a === D[s]) { i = s; break } -1 === i && o.focus() } else m = o } } var b = arguments[0]; if (arguments[0] === n) return f("SweetAlert expects at least 1 attribute!"), !1; var g = r({}, S); switch (typeof arguments[0]) { case "string": g.title = arguments[0], g.text = arguments[1] || "", g.type = arguments[2] || ""; break; case "object": if (arguments[0].title === n) return f('Missing "title" argument!'), !1; g.title = arguments[0].title; for (var w = ["text", "type", "customClass", "allowOutsideClick", "showConfirmButton", "showCancelButton", "closeOnConfirm", "closeOnCancel", "timer", "confirmButtonColor", "cancelButtonText", "imageUrl", "imageSize", "html", "animation", "allowEscapeKey"], h = w.length, k = 0; h > k; k++) { var T = w[k]; g[T] = i(T) } g.confirmButtonText = g.showCancelButton ? "Confirm" : S.confirmButtonText, g.confirmButtonText = i("confirmButtonText"), g.doneFunction = arguments[1] || null; break; default: return f('Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]), !1 }o(g), l(), c(); for (var B = x(), E = function (t) { var n = t || e.event, o = n.target || n.srcElement, r = -1 !== o.className.indexOf("confirm"), i = C(B, "visible"), s = g.doneFunction && "true" === B.getAttribute("data-has-done-function"); switch (n.type) { case "mouseover": r && (o.style.backgroundColor = a(g.confirmButtonColor, -.04)); break; case "mouseout": r && (o.style.backgroundColor = g.confirmButtonColor); break; case "mousedown": r && (o.style.backgroundColor = a(g.confirmButtonColor, -.14)); break; case "mouseup": r && (o.style.backgroundColor = a(g.confirmButtonColor, -.04)); break; case "focus": var c = B.querySelector("button.confirm"), l = B.querySelector("button.cancel"); r ? l.style.boxShadow = "none" : c.style.boxShadow = "none"; break; case "click": if (r && s && i) g.doneFunction(!0), g.closeOnConfirm && v.close(); else if (s && i) { var u = String(g.doneFunction).replace(/\s/g, ""), f = "function(" === u.substring(0, 9) && ")" !== u.substring(9, 10); f && g.doneFunction(!1), g.closeOnCancel && v.close() } else v.close() } }, q = B.querySelectorAll("button"), A = 0; A < q.length; A++)q[A].onclick = E, q[A].onmouseover = E, q[A].onmouseout = E, q[A].onmousedown = E, q[A].onfocus = E; p = t.onclick, t.onclick = function (t) { var n = t || e.event, o = n.target || n.srcElement, a = B === o, r = M(B, o), i = C(B, "visible"), s = "true" === B.getAttribute("data-allow-ouside-click"); !a && !r && i && s && v.close() }; var I = B.querySelector("button.confirm"), O = B.querySelector("button.cancel"), D = B.querySelectorAll("button[tabindex]"); y = e.onkeydown, e.onkeydown = u, I.onblur = d, O.onblur = d, e.onfocus = function () { e.setTimeout(function () { m !== n && (m.focus(), m = n) }, 0) } }, v.setDefaults = b.setDefaults = function (e) { if (!e) throw new Error("userParams is required"); if ("object" != typeof e) throw new Error("userParams has to be a object"); r(S, e) }, v.close = b.close = function () { var o = x(); L(k(), 5), L(o, 5), B(o, "showSweetAlert"), T(o, "hideSweetAlert"), B(o, "visible"); var a = o.querySelector(".sa-icon.sa-success"); B(a, "animate"), B(a.querySelector(".sa-tip"), "animateSuccessTip"), B(a.querySelector(".sa-long"), "animateSuccessLong"); var r = o.querySelector(".sa-icon.sa-error"); B(r, "animateErrorIcon"), B(r.querySelector(".sa-x-mark"), "animateXMark"); var i = o.querySelector(".sa-icon.sa-warning"); B(i, "pulseWarning"), B(i.querySelector(".sa-body"), "pulseWarningIns"), B(i.querySelector(".sa-dot"), "pulseWarningIns"), e.onkeydown = y, t.onclick = p, d && d.focus(), m = n, clearTimeout(o.timeout) }, "function" == typeof define && define.amd ? define(function () { return v }) : "undefined" != typeof module && module.exports ? module.exports = v : "undefined" != typeof e && (e.sweetAlert = e.swal = v) }(window, document);