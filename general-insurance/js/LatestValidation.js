function isNumericKey1(t) {
    var e = window.event.keyCode;
    return !(e > 31 && (e < 48 || e > 57))
}

function isAlphaNumeric(t) {
    var e;
    return (e = document.all ? t.keycode : t.which) > 47 && e < 58 || e > 64 && e < 91 || e > 96 && e < 123 || 0 == e
}

function alphanumeric(t, e, s, r) {
    for (var a = $(t).val(), n = 0, l = 0, o = 0; o < a.length; o++) {
        var i = a.charCodeAt(o);
        i > 64 && i < 91 || i > 96 && i < 123 ? n += 1 : i > 47 && i < 58 && (l += 1)
    }
    return n > 0 && l > 0 || ($(s).html(e), $(s).css("display", "block"), $(r).addClass("has-error"), $(t).focus(), !1)
}

function MobileNo(t, e, s, r) {
    var a, n = $(t).val();
    return 10 != n.length ? ($(s).html(e), $(s).css("display", "block"), $(r).addClass("has-error"), $(t).focus(), !1) : 9 == (a = n.split(""))[0] || 8 == a[0] || 7 == a[0] || ($(s).html(e), $(s).css("display", "block"), $(r).addClass("has-error"), $(t).focus(), !1)
}

function RequiredField(t, e, s, r) {
    return "" != $(t).val().trim() || ($(s).html(e), $(s).css("display", "block"), $(r).addClass("has-error"), !1)
}

function PinCode(t, e, s, r) {
    return 6 == $(t).val().length || ($(s).html(e), $(s).css("display", "block"), $(r).addClass("has-error"), $(t).focus(), !1)
}

function CheckIfValidEmail(t, e, s, r) {
    return !!/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($(t).val()) || ($(s).html(e), $(s).css("display", "block"), $(r).addClass("has-error"), $(t).focus(), !1)
}

function Ddl(t, e, s, r) {
    return 0 != $(t).val() || ($(s).html(e), $(s).css("display", "block"), $(r).addClass("has-error"), $(t).focus(), !1)
}

function DdlwithMinus1(t, e, s, r) {
    return -1 != $(t).val() || ($(s).html(e), $(s).css("display", "block"), $(r).addClass("has-error"), $(t).focus(), !1)
}

function ClearAllControls() {
    for (i = 0; i < document.forms[0].length; i++) switch (doc = document.forms[0].elements[i], doc.type) {
        case "text":
            doc.value = "";
            break;
        case "checkbox":
        case "radio":
            doc.checked = !1;
            break;
        case "select-one":
            doc.options[doc.selectedIndex].selected = !1;
            break;
        case "select-multiple":
            for (; - 1 != doc.selectedIndex;) indx = doc.selectedIndex, doc.options[indx].selected = !1;
            doc.selected = !1
    }
}

function validDate(t, e, s, r) {
    var a, n = new Date,
        l = n.getDate(),
        o = n.getMonth() + 1,
        i = n.getFullYear();
    l < 10 && (l = "0" + l), o < 10 && (o = "0" + o), n = l + "/" + o + "/" + yyyy, a = $("#" + t).val().toString().split("/");
    var c = parseInt(a[1]),
        d = parseInt(a[0]),
        u = parseInt(a[2]);
    if (c > 12) return $(s).html(e), $(s).css("display", "block"), $(r).addClass("has-error"), $(t).focus(), !1;
    if (c < 1) return $(s).html(e), $(s).css("display", "block"), $(r).addClass("has-error"), $(t).focus(), !1;
    if (d > 31) return $(s).html(e), $(s).css("display", "block"), $(r).addClass("has-error"), $(t).focus(), !1;
    if (d < 1) return $(s).html(e), $(s).css("display", "block"), $(r).addClass("has-error"), $(t).focus(), !1;
    if (u.toString().length < 4 || u.toString().length < 0) return $(s).html(e), $(s).css("display", "block"), $(r).addClass("has-error"), $(t).focus(), !1;
    if (parseInt(u) < 1900) return $(s).html("Please enter a valid date"), $(s).css("display", "block"), $(r).addClass("has-error"), $(t).focus(), !1;
    if (parseInt(u) > parseInt(i)) return $(s).html("Please enter a valid date"), $(s).css("display", "block"), $(r).addClass("has-error"), $(t).focus(), !1;
    if (parseInt(u) == parseInt(i)) {
        if (parseInt(c) > parseInt(o)) return $(s).html("Please enter a valid date"), $(s).css("display", "block"), $(r).addClass("has-error"), $(t).focus(), !1;
        if (parseInt(c) == parseInt(o) && parseInt(d) > parseInt(l)) return $(s).html("Please enter a valid date"), $(s).css("display", "block"), $(r).addClass("has-error"), $(t).focus(), !1
    }
    return !0
}

function validAmt(t, e, s, r) {
    var a = $("#" + t).val();
    return a = a.toString().replace(/,/g, ""), $.isNumeric(a) && !(a.indexOf(".") >= 0 && a.toString().split(".")[1].toString().length > 2) || ($(s).html(e), $(s).css("display", "block"), $(r).addClass("has-error"), $(t).focus(), !1)
}

function formatAmt(t) {
    var e = t.toString().replace(/,/g, ""),
        s = [],
        r = !1,
        a = [];
    t.toString().indexOf(".") >= 0 ? (r = !0, s = (a = t.toString().split("."))[0].toString().replace(/,/g, "").split("").join(",")) : s = t.toString().replace(/,/g, "").split("").join(",");
    var n = (s = s.split(",")).length;
    if (1 == n || 2 == n || 3 == n) return r ? "" == a[1].toString() ? e + ".00" : e + "." + a[1] : e;
    for (var l = 0, o = 0, i = n - 3, c = !1, d = 0; d < i; d++)
        if (i % 2 == 0) {
            if (0 == o && 0 == d) {
                o++, d == i - 1 && (c = !1), l = s[d];
                continue
            }
            if (0 == o) {
                o++, d == i - 1 && (c = !1), l += s[d];
                continue
            }
            if (1 == o) {
                o = 0, d == i - 1 && (c = !0), l += s[d] + ",";
                continue
            }
        } else c = !1, 0 == d ? l = s[d] : 0 == o ? (o++, l += "," + s[d]) : 1 == o && (o = 0, l += s[d]);
    for (d = i; d < i + 3; d++) l += d == i ? c ? s[d] : "," + s[d] : s[d];
    return r ? l + "." + a[1] : l
}
$(document).ready(function() {
    $("#FooterText,#InputCallMeContact").keypress(function(t) {
        var e = t.charCode || t.keyCode;
        return !(e > 31 && (e < 48 || e > 57))
    });
    var t = !1,
        e = "",
        s = 0;
    $("#txtApproxExpense,#txtAmountSpent,#txtAmountInUSD,#txtClaimedAmount,#txtLossEstimate").keypress(function(r) {
        var a = r.charCode || r.keyCode;
        if ("" == e) e = $(this).attr("id");
        else if ("" != e) {
            var n = $(this).attr("id");
            e.toString() == n.toString() || (e = $(this).attr("id"), t = !1)
        }
        if (46 == a && !t) return t = !0, !0;
        if (2 == s && t) {
            if ($(this).val().toString().indexOf(".") >= 0) return !1;
            s = 0, t = !1
        }
        return t && s++, !(a > 31 && (a < 48 || a > 57))
    }), $("#txtApproxExpense,#txtAmountSpent,#txtAmountInUSD,#txtClaimedAmount,#txtLossEstimate").keyup(function(t) {
        var e, s = $(this).val(),
            r = [],
            a = !1;
        s.toString().indexOf(".") >= 0 && (a = !0, s = (r = s.toString().split("."))[0], e = r[1]);
        var n = formatAmt(s);
        a ? $(this).val(n + "." + e) : $(this).val(n)
    })
});