function BuyOnline(a) {
    $.ajax({
        url: "/general-insurance/services/LoadContent.ashx",
        type: "GET",
        async: !1,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "BuyOnlineUrl",
            sProduct: a
        },
        success: function(a) {
            var e = JSON.parse(a);
            void 0 != e.sUrl && window.open(e.sUrl, "_blank")
        },
        error: function(a) {
            alert(a)
        }
    })
}

function searchC(a, e, n) {
    $.ajax({
        url: "/general-insurance/services/LoadContent.ashx",
        type: "GET",
        async: !1,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "LoadSearchContent",
            sKeyword: a,
            pageNo: e,
            rowNo: n
        },
        success: function(a) {
            var t = $.parseJSON(a);
            if (0 != t.SearchContent.length) {
                $("#searchcontent").html("");
                var s, l = t.SearchContent[0].totcount;
                for (s = 0; s < t.SearchContent.length; s++) {
                    var i = '<div class="dark-service-box search"><a class="search-title" href="$Url$" target="_blank">$Title$</a><div class="dotted-border"></div><p>$Description$</p><a href="$Url$" target="_blank">More Info</a></div>';
                    i = (i = (i = (i = i.toString().replace("$Title$", t.SearchContent[s].sTitle)).toString().replace("$Description$", t.SearchContent[s].sDescription)).toString().replace("$Url$", t.SearchContent[s].sUrl)).toString().replace("$Url$", t.SearchContent[s].sUrl), $("#searchcontent").append(i)
                }
                paginingNo(l, e, n, 10, "divPagination")
            } else $("#searchcontent").html("No result found"), $("#divPagination").hide()
        },
        error: function(a) {
            alert(a)
        }
    })
}

function onlyAlphabets(a, e) {
    try {
        if (window.event) var n = window.event.keyCode;
        else {
            if (!a) return !0;
            n = a.which
        }
        if (8 != n && 0 != n) return n > 64 && n < 91 || n > 96 && n < 123 || 32 == n
    } catch (a) {
        alert(a.Description)
    }
}

function paginingNo(a, e, n, t, s) {
    if (a > 0) {
        var l = a / n;
        l = p = parseInt(l), a % n > 0 && l++;
        var i = 0;
        if (1 == l) return $("#" + s).hide(), !1;
        var r = 0,
            c = "",
            o = "";
        if (t % 2 == 0)
            if (e >= (r = t / 2)) {
                if ((d = e - r) > 1) {
                    var p = l - d;
                    ++p < t && (d -= t - p)
                }
                d <= 0 && (d = 1), c = "<div class='fg-pagination' ><nav><ul class='pagination'>", e > 1 && e > 1 && (c += '<li class="' + o + '" value="' + (p = parseInt(e) - 1) + "\"><a class='pagination-a' href='javascript://'>Prev<<<span class='sr-only'>(current)</span></a></li>");
                for (var u = d; u <= l && i != t; u++) c += '<li class="' + (o = e == u ? "active" : "") + '" value="' + u + "\"><a class='pagination-a' href='javascript://'>" + u + "<span class='sr-only'>(current)</span></a></li>", i++;
                e == l || (c += '<li value="' + (p = parseInt(e) + 1) + "\"><a class='pagination-a' href='javascript://'>Next>><span class='sr-only'>(current)</span></a></li>"), c += "</ul></nav></div>", $("#" + s).html(c), $("#" + s).show()
            } else {
                c = "<div class='fg-pagination' ><nav><ul class='pagination'>";
                var v = 0;
                for (e > 1 && (c += '<li class="' + o + '" value="' + (p = parseInt(e) - 1) + "\"><a class='pagination-a' href='javascript://'>Prev<<<span class='sr-only'>(current)</span></a></li>"), u = 0; u < l && i != t; u++) c += '<li class="' + (o = e == (v = u + 1) ? "active" : "") + '" value="' + v + "\"><a class='pagination-a' href='javascript://'>" + v + "<span class='sr-only'>(current)</span></a></li>", i++;
                e == l || (c += '<li value="' + (p = parseInt(e) + 1) + "\"><a class='pagination-a' href='javascript://'>Next>><span class='sr-only'>(current)</span></a></li>"), c += "</ul></nav></div>", $("#" + s).html(c), $("#" + s).show()
            }
        else if (e >= (r = (t - 1) / 2)) {
            var d;
            if ((d = e - r) > 1) {
                p = l - d;
                ++p < t && (d -= t - p)
            }
            for (d <= 0 && (d = 1), c = "<div class='fg-pagination' ><nav><ul class='pagination'>", e > 1 && (c += '<li class="' + o + '" value="' + (p = parseInt(e) - 1) + "\"><a class='pagination-a' href='javascript://'>Prev<<<span class='sr-only'>(current)</span></a></li>"), u = d; u <= l && i != t; u++) c += '<li class="' + (o = e == u ? "active" : "") + '" value="' + u + "\"><a class='pagination-a' href='javascript://'>" + u + "<span class='sr-only'>(current)</span></a></li>", i++;
            e == l || (c += '<li value="' + (p = parseInt(e) + 1) + "\"><a class='pagination-a' href='javascript://'>Next>><span class='sr-only'>(current)</span></a></li>"), c += "</ul></nav></div>", $("#" + s).html(c), $("#" + s).show()
        } else {
            for (c = "<div class='fg-pagination' ><nav><ul class='pagination'>", e > 1 && (c += '<li class="' + o + '" value="' + (p = parseInt(e) - 1) + "\"><a class='pagination-a' href='javascript://'>Prev<<<span class='sr-only'>(current)</span></a></li>"), v = 0, u = 0; u < l && i != t; u++) c += '<li class="' + (o = e == (v = u + 1) ? "active" : "") + '" value="' + v + "\"><a class='pagination-a' href='javascript://'>" + v + "<span class='sr-only'>(current)</span></a></li>", i++;
            e == l || (c += '<li value="' + (p = parseInt(e) + 1) + "\"><a class='pagination-a' href='javascript://'>Next>><span class='sr-only'>(current)</span></a></li>"), c += "</ul></nav></div>", $("#" + s).html(c), $("#" + s).show()
        }
    } else $("#" + s).hide()
}
$("#CallMeSubmit").click(function() {
    var a = window.location.href.split("/");
    if (!validTextBox("InputCallMeName", "Please enter name")) return !1;
    if (!validMobileNo("InputCallMeContact", "Please enter valid phone number")) return !1;
    if (!validTextBox("InputCallMeEmail", "Please enter email Id")) return !1;
    if (!ValidEmail("InputCallMeEmail", "Please enter valid email Id")) return !1;
    var e = $("#InputCallMeName").val(),
        n = $("#InputCallMeContact").val(),
        t = $("#InputCallMeEmail").val(),
        s = window.location.href,
        l = "";
    if ("retail-products" == a[4] || "commercial-products" == a[4] ? void 0 != a[6] && (l = a[6]) : "" != DivProductName.innerHTML && (l = DivProductName.innerHTML), 1 != $("#ChkFuture").is(":checked")) return document.getElementById("modal-body-msg").innerHTML = "Please check the box before submitting", $("#callme").modal("show"), !1;
    document.getElementById("modal-body-msg").innerHTML = "Processing...", $("#callme").modal("show"), $.ajax({
        url: "/general-insurance/services/LoadContent.ashx",
        type: "GET",
        async: !1,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "CallMeWebService",
            sName: e,
            sEmail: t,
            sContact: n,
            sPageSource: s,
            sProductName: l
        },
        success: function(a) {
            $("#CallmeName").html(a), $("#InputCallMeName").val(""), $("#InputCallMeContact").val(""), $("#InputCallMeEmail").val(""), $(".divchkmsg").hide(), $("#left-menu-container").css("height", "235px"), $("#divcallmeMsg").show()
        },
        error: function(a) {
            alert(a)
        }
    })
}), $("#AgiveCall").click(function() {
    var a = window.location.href.split("/"),
        e = $("#FooterText").val();
    if (!validMobileNo("FooterText", "Please enter valid phone number")) return !1;
    var n = window.location.href,
        t = "";
    "retail-products" != a[4] && "commercial-products" != a[4] || void 0 != a[6] && (t = a[6]), $.ajax({
        url: "/general-insurance/services/LoadContent.ashx",
        type: "GET",
        async: !1,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "NeedHelpWebService",
            sName: "",
            sEmail: "",
            sContact: e,
            sPageSource: n,
            sProductName: t
        },
        success: function(a) {
            $("#FooterText").val(""), $("#placeholderlast1").show(), $("#placeholderlast").hide()
        },
        error: function(a) {
            alert(a)
        }
    })
}), $(document).ready(function() {
    $("#lbllgin").hide(), $(document).on("click", "a.btn-main", function() {
        $(this).html().toString().indexOf("Call Me") >= 0 && $(".open-menu").trigger("click")
    }), $(document).on("click", ".btnsrch", function() {
        var a = $("#Searchtext").val();
        if ("" != a && (searchC(a, 1, 10), window.location.href.toString().indexOf("keyw") >= 0)) {
            var e = window.location.host;
            e = e.toString().indexOf("local") >= 0 ? "http://" + e + "/FutureGenerali/general-insurance/search/keyw=" + a : "http://" + e + "/general-insurance/search/keyw=" + a, window.history.pushState("", "", e)
        }
    })
});