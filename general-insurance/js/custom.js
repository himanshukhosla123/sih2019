function goBack() {
    window.history.back()
}
if ($("#familysizecall1").click(function() {
        $(".active-one").show(), $(".active-two").hide(), $(".active-family").hide()
    }), $("#familysizecall2").click(function() {
        $(".active-one").hide(), $(".active-two").show(), $(".active-family").hide()
    }), $("#familysizecall3").click(function() {
        $(".active-one").hide(), $(".active-two").hide(), $(".active-family").show()
    }), navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement("style");
    msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
}
$("#dtBox").DateTimePicker({
    dateFormat: "MM-dd-yyyy",
    timeFormat: "HH:mm",
    dateTimeFormat: "MM-dd-yyyy HH:mm:ss AA"
}), $("#search-bar").click(function() {
    $(".search-bar").fadeToggle()
}), $(".transparent-body").hide(), $(document).ready(function() {
    $(".transparent-body").hide(), $(".opentb").hover(function() {
        $(".dropdown-menu", this).stop(!0, !0).delay(200).slideDown("slow"), $(".transparent-body").delay(200).show()
    }, function() {
        $(".dropdown-menu", this).stop(!0, !0).slideUp("fast"), $(".transparent-body").hide()
    })
}), $("ul.dropdown-menu").on("click", function(o) {
    o.stopPropagation()
}), $(document).ready(function() {
    $(window).scroll(function() {
        $(this).scrollTop() > 100 ? $(".scrollup").fadeIn() : $(".scrollup").fadeOut()
    }), $(".scrollup").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 600), !1
    })
}), $(document).ready(function() {
    $(".dropdown-toggle").mouseover(function() {
        $(this).closest(".dropdown-toggle").addClass("current")
    }), $(".dropdown-toggle").mouseout(function() {
        $(this).closest(".dropdown-toggle").removeClass("current")
    }), $(".dropdown-menu").mouseover(function() {
        $(this).prev(".dropdown-toggle").addClass("current nav-bg")
    }), $(".dropdown-menu").mouseout(function() {
        $(this).prev(".dropdown-toggle").removeClass("current nav-bg")
    })
}), $(document).ready(function() {
    $(".inner-nav-open").hover(function() {
        $(".dropdown-menu", this).stop(!0, !0).slideDown("fast")
    }, function() {
        $(".dropdown-menu", this).stop(!0, !0).slideUp("fast")
    })
}), $(document).ready(function() {
    $(".inner-sub-toggle").mouseover(function() {
        $(this).closest(".inner-sub-toggle").addClass("current")
    }), $(".inner-sub-toggle").mouseout(function() {
        $(this).closest(".inner-sub-toggle").removeClass("current")
    }), $(".inner-dropmenu").mouseover(function() {
        $(this).prev(".inner-sub-toggle").addClass("current active")
    }), $(".inner-dropmenu").mouseout(function() {
        $(this).prev(".inner-sub-toggle").removeClass("current active")
    })
}), $(".home-carousel").owlCarousel({
    items: 1,
    animateOut: "fadeOutRight",
    animateIn: "fadeInLeft",
    autoplayHoverPause: !0,
    autoplayTimeout: 5e3,
    autoplay: !0,
    mouseDrag: !1,
    loop: !1,
    margin: 0,
    nav: !1,
    dots: !0,
    dotData: !0,
    lazyLoad: !0
}), $(function() {
    $('[data-toggle="tooltip"]').tooltip()
}), $("#hide-footer").hide(), $("#show-footer").click(function() {
    $(".footer-default").slideDown(), $("#show-footer").hide(), $("#hide-footer").show()
}), $("#hide-footer").click(function() {
    $(".footer-default").slideUp(), $("#hide-footer").hide(), $("#show-footer").show()
}), $(window).scroll(function() {
    $(".back-to-top").hide(), $(".scroll-down").show(), $(window).scrollTop() + $(window).height() == $(document).height() && ($(".back-to-top").show(), $(".scroll-down").hide())
});
var duration = 500;
$(".back-to-top").click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, duration)
}), $(function() {
    $("input, textarea").placeholder()
}), $("#sandbox-container .input-group.date").datepicker({
    autoclose: !0,
    format: "dd/mm/yyyy"
}), $("#ex6").slider({
    tooltip: "hide"
}), $("#ex6").on("slide", function(o) {
    $("#ex6SliderVal").text(o.value)
}), $("#ex7").slider({
    tooltip: "hide"
}), $("#ex7").on("slide", function(o) {
    $("#ex7SliderVal").text(o.value)
}), $("#ex8").slider({
    tooltip: "always"
}), $("#ex8").on("slide", function(o) {
    $("#ex8SliderVal").text(o.value)
}), $("#tabs").tabs({
    hide: "fadeOut",
    show: "fadeIn"
}), $(".btnNext").click(function() {
    $("#tabs").tabs("option", "active", $("#tabs").tabs("option", "active") + 1)
}), $(".btnPrev").click(function() {
    $("#tabs").tabs("option", "active", $("#tabs").tabs("option", "active") - 1)
}), $("#reasons").tabs({
    hide: "fadeOut",
    show: "fadeIn"
}), $(".reason-btnNext").click(function() {
    $("#reasons").tabs("option", "active", $("#reasons").tabs("option", "active") + 1)
}), $(".reason-btnPrev").click(function() {
    $("#reasons").tabs("option", "active", $("#reasons").tabs("option", "active") - 1)
}), $("#side-menu").sidr({
    onOpen: function() {
        $(".transparent-body2").fadeIn(), $("#accordion").css("height", "400px"), $("#accordion").css("overflow-y", "auto")
    },
    onClose: function() {
        $(".transparent-body2").fadeOut(), $("#accordion").css("height", "auto"), $("#accordion").css("overflow-y", "auto")
    }
}), $("#side-menu1").sidr({
    onOpen: function() {
        $(".transparent-body2").fadeIn(), $("#accordion").css("height", "400px"), $("#accordion").css("overflow-y", "auto")
    },
    onClose: function() {
        $(".transparent-body2").fadeOut(), $("#accordion").css("height", "auto"), $("#accordion").css("overflow-y", "auto")
    }
}), $("#side-menu2").sidr({
    onOpen: function() {
        $(".transparent-body2").fadeIn(), $("#accordion").css("height", "400px"), $("#accordion").css("overflow-y", "auto")
    },
    onClose: function() {
        $(".transparent-body2").fadeOut(), $("#accordion").css("height", "auto"), $("#accordion").css("overflow-y", "auto")
    }
}), $(".collapse").on("shown.bs.collapse", function() {
    $(this).parent().find(".glyphicon-chevron-down").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up")
}).on("hidden.bs.collapse", function() {
    $(this).parent().find(".glyphicon-chevron-up").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down")
});