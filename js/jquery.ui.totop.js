!function (n) { n.fn.UItoTop = function (e) { var o = { text: "To Top", min: 200, inDelay: 400, outDelay: 200, containerID: "back_totop", containerHoverID: "toTopHover", scrollSpeed: 1200, easingType: "linear" }, t = n.extend(o, e), i = "#" + t.containerID, a = "#" + t.containerHoverID; n("body").append('<a href="#" id="' + t.containerID + '">' + t.text + "</a>"), n(i).hide().on("click.UItoTop", function () { return n("html, body").animate({ scrollTop: 0 }, t.scrollSpeed, t.easingType), n("#" + t.containerHoverID, this).stop().animate({ opacity: 0 }, t.inDelay, t.easingType), !1 }).prepend('<span id="' + t.containerHoverID + '"></span>').hover(function () { n(a, this).stop().animate({ opacity: 1 }, 600, "linear") }, function () { n(a, this).stop().animate({ opacity: 0 }, 700, "linear") }), n(window).scroll(function () { var e = n(window).scrollTop(); "undefined" == typeof document.body.style.maxHeight && n(i).css({ position: "absolute", top: e + n(window).height() - 50 }), e > t.min ? n(i).fadeIn(t.inDelay) : n(i).fadeOut(t.Outdelay) }) } }(jQuery);