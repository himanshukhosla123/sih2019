var HospitalJson, mapAddress, mapLatitude, mapLongitude, totHospital, GarageJson, totGarage, DiagnoJson, totDiag, BLHJson, SupectJson, totSus, onLoadAgentJson, totInvAgentCount, totCorpAgentCount, iagnType, BranchJson, totBranch, iInvestInfo, PubDiscAnnReJson, CategoryName = "",
    ProdName = "",
    isDirectProductCallme = !1,
    ssProduct = "",
    isfooterCallMe = !1,
    isAnnuReport = !1,
    smsContact = "",
    iscity = !1,
    isPageDataExist = !1,
    smsaddress = "",
    smsTitle = "",
    smsMobile = "",
    smsLandline = "",
    smsDisclaimer = "%0D%0A%0D%0ASent from Future Generali";

function allnumeric(t) {
    if (!t.match(/^[0-9]+$/)) return document.getElementById("modal-body-msg").innerHTML = "Please enter valid phone number", $("#callme").modal("show"), isfooterCallMe = !1;
    phoneNumberLength(t)
}

function phoneNumberLength(t) {
    return 10 == t.length || 11 == t.length || 12 == t.length ? (insertCallMeData(t), !0) : (document.getElementById("modal-body-msg").innerHTML = "Please enter valid phone number", $("#callme").modal("show"), isfooterCallMe = !1)
}

function aboutCallMe(t) {
    "" == t ? (document.getElementById("modal-body-msg").innerHTML = "Please enter your contact no", $("#callme").modal("show"), isfooterCallMe = !1) : allnumeric(t)
}

function insertCallMeData(t) {
    var e, a = window.location.href,
        s = "",
        n = 0,
        i = 0,
        o = 0,
        l = 0,
        r = 0;
    isfooterCallMe || (r = $("#txtgetCatPrdt").val()), 0 <= (s = a.toString().replace(dUrl, "")).indexOf("general-insurance/") && (s = s.replace("general-insurance/", ""));
    var d = [],
        c = !1;
    0 <= s.indexOf("retail-products") ? (e = 2) == (d = s.split("/")).length ? i = r : 3 == d.length && (n = r) : 0 <= s.indexOf("commercial-products") ? (e = 3, 2 == (d = s.split("/")).length ? l = r : 3 == d.length && (o = r)) : (e = 1, c = !0), $.ajax({
        url: "/general-insurance/Services/insertData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "insertCallMeDetail",
            sUrl: a,
            sPhoneNo: t,
            objProduct: n,
            objCategory: i,
            objCommercializationCategory: l,
            objCommercializationProduct: o,
            bIsNormalPage: c,
            bIsDirectProductCall: isDirectProductCallme,
            sProduct: ssProduct,
            type: e
        },
        success: function(t) {
            var e = "";
            e = 0 < t.indexOf("Database error") ? "Try after some time" : "success" == t ? "Will call you soon" : "Try after some time", document.getElementById("modal-body-msg").innerHTML = e, $("#callme").modal("show"), isfooterCallMe ? ($("#exampleInputAmount").val(""), isfooterCallMe = !1) : ($("#txtcallme").val(""), $(".close-menu").trigger("click"))
        },
        error: function(t) {
            //alert("fn insertCallMeData " + t)
        }
    })
}

function getLatLonDetailDisplayGoogleMap(t, e, a, s) {
    smsaddress = t, smsTitle = e;
    var n = "";
    if ("" != a ? n = a.toString().split("")[0] : 0 == a && (n = "0"), "0" != n.toString()) {
        if ("" != t && "" != a.toString()) {
            var i = document.getElementById("map"),
                o = {
                    center: new google.maps.LatLng(a, s),
                    zoom: 17,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                },
                l = new google.maps.Map(i, o);
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(a, s),
                map: l
            });
            var r = new google.maps.InfoWindow({
                content: t,
                maxWidth: 200
            });
            google.maps.event.addListener(marker, "click", function() {
                r.open(l, marker)
            }), r.open(l, marker)
        }
    } else {
        var d = t + ", India";
        l = new google.maps.Map(document.getElementById("map"), {
            zoom: 17
        }), (new google.maps.Geocoder).geocode({
            address: d
        }, function(t, e) {
            if (e == google.maps.GeocoderStatus.OK) {
                new google.maps.Marker({
                    position: t[0].geometry.location,
                    map: l
                }), l.setCenter(t[0].geometry.location);
                var a, s = "";
                a = d.split(",");
                for (var n = 0; n < a.length - 3; n++) 0 == n ? s = a[n] : s += "," + a[n];
                var i = new google.maps.InfoWindow({
                        content: "<b>" + s + "</b>",
                        maxWidth: 200
                    }),
                    o = new google.maps.Marker({
                        position: t[0].geometry.location,
                        map: l,
                        title: s
                    });
                i.open(l, o), google.maps.event.addListener(o, "click", function() {
                    i.open(l, o)
                })
            }
        })
    }
}

function showAddress(t) {
    var e = document.getElementById("map");
    e.clearOverlays(), t && 200 == t.Status.code ? (place = t.Placemark[0], point = new GLatLng(place.Point.coordinates[1], place.Point.coordinates[0]), marker = new GMarker(point), e.addOverlay(marker), marker.openInfoWindowHtml("<b>orig latlng:</b>" + t.name + "<br/><b>latlng:</b>" + place.Point.coordinates[1] + "," + place.Point.coordinates[0] + "<br><b>Status Code:</b>" + t.Status.code + "<br><b>Status Request:</b>" + t.Status.request + "<br><b>Address:</b>" + place.address + "<br><b>Accuracy:</b>" + place.AddressDetails.Accuracy + "<br><b>Country code:</b> " + place.AddressDetails.Country.CountryNameCode)) : //alert("Status Code:" + t.Status.code)
}

function paginingNo(t, e, a, s, n) {
    if (0 < t) {
        var i = t / a;
        i = c = parseInt(i), 0 < t % a && i++;
        var o = 0;
        if (1 == i) return $("#" + n).hide(), !1;
        var l = 0,
            r = "",
            d = "";
        if (s % 2 == 0)
            if (e >= (l = s / 2)) {
                if (1 < (m = e - l)) {
                    var c = i - m;
                    ++c < s && (m -= s - c)
                }
                m <= 0 && (m = 1), r = "<div class='fg-pagination' ><nav><ul class='pagination'>", 1 < e && 1 < e && (r += '<li class="' + d + '" value="' + (c = parseInt(e) - 1) + "\"><a class='pagination-a' href='javascript://'>Prev<<<span class='sr-only'>(current)</span></a></li>");
                for (var p = m; p <= i && o != s; p++) r += '<li class="' + (d = e == p ? "active" : "") + '" value="' + p + "\"><a class='pagination-a' href='javascript://'>" + p + "<span class='sr-only'>(current)</span></a></li>", o++;
                e == i || (r += '<li value="' + (c = parseInt(e) + 1) + "\"><a class='pagination-a' href='javascript://'>Next>><span class='sr-only'>(current)</span></a></li>"), r += "</ul></nav></div>", $("#" + n).html(r), $("#" + n).show()
            } else {
                r = "<div class='fg-pagination' ><nav><ul class='pagination'>";
                var g = 0;
                for (1 < e && (r += '<li class="' + d + '" value="' + (c = parseInt(e) - 1) + "\"><a class='pagination-a' href='javascript://'>Prev<<<span class='sr-only'>(current)</span></a></li>"), p = 0; p < i && o != s; p++) r += '<li class="' + (d = e == (g = p + 1) ? "active" : "") + '" value="' + g + "\"><a class='pagination-a' href='javascript://'>" + g + "<span class='sr-only'>(current)</span></a></li>", o++;
                e == i || (r += '<li value="' + (c = parseInt(e) + 1) + "\"><a class='pagination-a' href='javascript://'>Next>><span class='sr-only'>(current)</span></a></li>"), r += "</ul></nav></div>", $("#" + n).html(r), $("#" + n).show()
            }
        else if (e >= (l = (s - 1) / 2)) {
            var m;
            if (1 < (m = e - l)) {
                c = i - m;
                ++c < s && (m -= s - c)
            }
            for (m <= 0 && (m = 1), r = "<div class='fg-pagination' ><nav><ul class='pagination'>", 1 < e && (r += '<li class="' + d + '" value="' + (c = parseInt(e) - 1) + "\"><a class='pagination-a' href='javascript://'>Prev<<<span class='sr-only'>(current)</span></a></li>"), p = m; p <= i && o != s; p++) r += '<li class="' + (d = e == p ? "active" : "") + '" value="' + p + "\"><a class='pagination-a' href='javascript://'>" + p + "<span class='sr-only'>(current)</span></a></li>", o++;
            e == i || (r += '<li value="' + (c = parseInt(e) + 1) + "\"><a class='pagination-a' href='javascript://'>Next>><span class='sr-only'>(current)</span></a></li>"), r += "</ul></nav></div>", $("#" + n).html(r), $("#" + n).show()
        } else {
            for (r = "<div class='fg-pagination' ><nav><ul class='pagination'>", 1 < e && (r += '<li class="' + d + '" value="' + (c = parseInt(e) - 1) + "\"><a class='pagination-a' href='javascript://'>Prev<<<span class='sr-only'>(current)</span></a></li>"), p = g = 0; p < i && o != s; p++) r += '<li class="' + (d = e == (g = p + 1) ? "active" : "") + '" value="' + g + "\"><a class='pagination-a' href='javascript://'>" + g + "<span class='sr-only'>(current)</span></a></li>", o++;
            e == i || (r += '<li value="' + (c = parseInt(e) + 1) + "\"><a class='pagination-a' href='javascript://'>Next>><span class='sr-only'>(current)</span></a></li>"), r += "</ul></nav></div>", $("#" + n).html(r), $("#" + n).show()
        }
    } else $("#" + n).hide()
}

function PopCityAccStateForLoc(t) {
    var e = document.getElementById("ddlstate").value;
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "populateCityAccToStateLoc",
            stateId: e,
            module: t
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t);
            try {
                var e = $.parseJSON(t);
                $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                for (var a = 0; a < e.clists.length; a++) $("#ddlcity").append($("<option></option>").val("" + e.clists[a].cId).html("" + e.clists[a].cityN))
            } catch (t) {
                $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"))
            }
        },
        error: function(t) {
            //alert("fn PopCityAccState " + t)
        }
    })
}

function fillFaqDropDown(t) {
    $("#ddlproduct").html("");
    var e = "",
        a = 0;
    switch (t.toString()) {
        case "1":
            e += '<optgroup label="Motor FAQ\'s">', e += '<option value="1">Motor</option>', e += "</optgroup>", e += '<optgroup label="Health FAQ\'s">', e += '<option value="179">Health Total</option>', e += '<option value="3">Individual Plan</option>', e += '<option value="4">Family Floater Plan</option>', e += '<option value="5">Personal Accident</option>', e += '<option value="6">Critical Illness</option>', e += '<option value="7">Hospital Cash</option>', e += '<option value="8">Top-Up</option>', e += "</optgroup>", e += '<optgroup label="Travel FAQ\'s">', e += '<option value="180">Schengen and Worldwide</option>', e += '<option value="10">Overseas Travel</option>', e += '<option value="11">Student Travel</option>', e += "</optgroup>", e += '<optgroup label="Home FAQ\'s">', e += '<option value="12">Home</option>', e += "</optgroup>", a = 1;
            break;
        case "2":
            e += '<option value="1001">Policy Related FAQ\'s</option>', e += '<option value="1002">Renewal Related FAQ\'s</option>', e += '<option value="1003">General Information FAQ\'s</option>', e += '<option value="1004">Claim Related FAQ\'s</option>', a = 1001;
            break;
        case "3":
            break;
        case "4":
            e += '<option value="65">Motor Claim FAQ\'s</option>', e += '<option value="66">Travel Claim FAQ\'s</option>', e += '<option value="67">Health Claim FAQ\'s</option>', e += '<option value="68">Personal Accident Claim FAQ\'s</option>', a = 65
    }
    $("#ddlproduct").html(e), getFaq(a)
}

function getFaq(t) {
    var e = $("#ddlservice").val();
    $.ajax({
        url: "Services/faqs.ashx",
        contentType: "application/json; charset=utf-8",
        type: "Get",
        data: {
            sAction: "getFaqs",
            iFlag: e,
            iFaq: t
        },
        success: function(t) {
            if ("" == t.toString()) $("#divfaqdetails").html("No FAQ's Found");
            else {
                for (var e = $.parseJSON(t), a = "", s = 0; s < e.faqlist.length; s++) a += e.faqlist[s].sHtmlContent;
                $("#divfaqdetails").html(a)
            }
        },
        error: function(t) {}
    })
}

function Sendsms(t) {
    var e = "";
    "" == smsContact ? "" != smsMobile ? (e = "Mobile : " + smsMobile, "" != smsLandline && (e += "%0D%0ALandline : " + smsLandline)) : "" != smsLandline && (e = "Landline : " + smsLandline) : e = "Contact No : " + smsContact, smsDisclaimer = e + (smsDisclaimer = "%0D%0A%0D%0ASent from Future Generali");
    var a = t;
    if (10 == a.length) {
        var s = new XMLHttpRequest;
        s.open("GET", "https://bulkpush.mytoday.com/BulkSms/SingleMsgApi?&feedid=326417&username=9004388957&password=dmtdj&To=" + a + "&Text=" + smsTitle + ",%0D%0A%0D%0A" + smsaddress + "%0D%0A%0D%0A" + smsDisclaimer + "&senderid=FUTGEN&v=1.1&msg_type=TEXT&auth_scheme=PLAIN", !0), s.onreadystatechange = function() {
            4 == s.readyState && JSON.parse(s.responseText).setHeader()
        }, s.send()
    }
}

function populatFaq(t) {
    if (0 < t.faqlist.length) {
        for (var e = "", a = 0; a < t.faqlist.length; a++) e += '<div class="item clearfix">', e += '<span  class="">' + t.faqlist[a].sQuestion + "</span>", e += '<div style="display: none;" class="pane"><p>', e += t.faqlist[a].sAnswer, e += "</p></div></div>";
        $("#divfaqdetails").html(e)
    } else $("#divfaqdetails").html("No FAQ's Found")
}

function fillStateAndCityAndHopitalList() {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        type: "Get",
        data: {
            sAction: "fillStateAndCityAndHopitalList"
        },
        success: function(t) {
            var e = 0;
            if (0 < t.indexOf("Database error")) //alert(t);
            else {
                HospitalJson = $.parseJSON(t), $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state"));
                for (var a = 0; a < HospitalJson.statelist.length; a++) "Yes" == HospitalJson.statelist[a].isSameState && (e = 21), $("#ddlstate").append($("<option></option>").val("" + HospitalJson.statelist[a].sId).html("" + HospitalJson.statelist[a].stateN));
                document.getElementById("ddlstate").value = e, $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                try {
                    for (a = 0; a < HospitalJson.cityList.length; a++) $("#ddlcity").append($("<option></option>").val("" + HospitalJson.cityList[a].cId).html("" + HospitalJson.cityList[a].cityN));
                    document.getElementById("ddlcity").value = 5
                } catch (t) {}
                0 == HospitalJson.NetHosp.length || (populateHospital(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), paginingNo(totHospital, 1, 4, 10, "divPagination"))
            }
        },
        error: function(t) {
            //alert("fn fillStateAndCityAndHopitalList " + t)
        }
    })
}

function fillStateAndCityAndDiagnosticCenters() {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "fillStateAndCityAndDiagnosticCenters"
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t);
            var e = 0;
            if (0 < t.indexOf("%$")) {
                var a;
                a = t.split("%$");
                var s = $.parseJSON(a[0]);
                DiagnoJson = $.parseJSON(a[1]), $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state")), $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                try {
                    for (var n = 0; n < s.statelist.length; n++) s.statelist[n].isSameState, $("#ddlstate").append($("<option></option>").val("" + s.statelist[n].sId).html("" + s.statelist[n].stateN));
                    for (document.getElementById("ddlstate").value = 21, n = 0; n < s.cityList.length; n++) $("#ddlcity").append($("<option></option>").val("" + s.cityList[n].cId).html("" + s.cityList[n].cityN));
                    document.getElementById("ddlcity").value = 5
                } catch (t) {}
                0 == DiagnoJson.DiagnosticList.length || (populateDiagnosticCenters(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), paginingNo(totDiag, 1, 4, 10, "divPagination"))
            } else {
                for (s = $.parseJSON(t), $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state")), n = 0; n < s.statelist.length; n++) "Yes" == s.statelist[n].isSameState && (e = s.statelist[n].sId), $("#ddlstate").append($("<option></option>").val("" + s.statelist[n].sId).html("" + s.statelist[n].stateN));
                document.getElementById("ddlstate").value = e, $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                try {
                    for (n = 0; n < s.cityList.length; n++) $("#ddlcity").append($("<option></option>").val("" + s.cityList[n].cId).html("" + s.cityList[n].cityN))
                } catch (t) {}
            }
        },
        error: function(t) {
            //alert("fn fillStateAndCityAndDiagnosticCenters " + t)
        }
    })
}

function SearchByNetworkHospital(e) {
    var t = $("#HospitalName").val();
    "" == t ? //alert("Please enter hospital name") : $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getHospitalAccPage",
            stateId: 0,
            cityId: 0,
            pageNo: e,
            rowNo: 4,
            hospitalname: t
        },
        success: function(t) {
            if (0 < t.indexOf("Database error") && //alert(t), "" == t) return document.getElementById("idNetHosp").innerHTML = "No Record Found", $("#divPagination").hide(), !1;
            0 == (HospitalJson = $.parseJSON(t)).NetHosp.length || (populateHospital(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), paginingNo(totHospital, e, 4, 10, "divPagination"))
        },
        error: function(t) {
            //alert("fn getHospitalAccPage " + t)
        }
    })
}

function populateHospital() {
    if (0 < HospitalJson.NetHosp.length) {
        for (var t = "", e = 0; e < HospitalJson.NetHosp.length; e++) {
            if (0 == e) {
                var a = HospitalJson.NetHosp[e].sAddress + ", " + HospitalJson.NetHosp[e].cityname + ", " + HospitalJson.NetHosp[e].stateName;
                mapLongitude = HospitalJson.NetHosp[e].fLongitude, mapAddress = a, mapLatitude = HospitalJson.NetHosp[e].fLatitude, totHospital = HospitalJson.NetHosp[e].totNetHosp, smsTitle = HospitalJson.NetHosp[e].sHospitalName
            }
            t += ' <div class="address">', t += '<div class="marker-icon">', t += '<img src="img/icons/map_marker_icon.png" alt=""></div>', t += '<div class="address-holder">';
            var s = HospitalJson.NetHosp[e].sHospitalName;
            t += " <p>" + s + "<br /><span>" + HospitalJson.NetHosp[e].sAddress + "</span></p>", "" != HospitalJson.NetHosp[e].sPhoneNo && (t += '<p><img src="img/icons/phone_sm_icon.png" alt=""> ' + HospitalJson.NetHosp[e].sPhoneNo + "</p>"), "" != HospitalJson.NetHosp[e].sEmailId && (t += '<a href="mailto:' + HospitalJson.NetHosp[e].sEmailId + '"><img src="img/icons/mail_sm_icon.png" alt=""> ' + HospitalJson.NetHosp[e].sEmailId + "</a>"), t += "<br/>", "" != HospitalJson.NetHosp[e].fLatitude && "" != HospitalJson.NetHosp[e].fLongitude ? t += "<div id='mapdetail" + e + "'><a  onclick='getLatLonDetailDisplayGoogleMap(\"" + HospitalJson.NetHosp[e].sAddress + ", " + HospitalJson.NetHosp[e].cityname + ", " + HospitalJson.NetHosp[e].stateName + '","' + HospitalJson.NetHosp[e].sHospitalName + '",' + HospitalJson.NetHosp[e].fLatitude + "," + HospitalJson.NetHosp[e].fLongitude + ')\' class="btn btn-default btn-lg btn-main" href=\'javascript://\'>show on map <i class="fa fa-angle-right"></i></a> ' : t += "<div id='mapdetail" + e + "'><a  onclick='getLatLonDetailDisplayGoogleMap(\"" + HospitalJson.NetHosp[e].sAddress + ", " + HospitalJson.NetHosp[e].cityname + ", " + HospitalJson.NetHosp[e].stateName + '","' + HospitalJson.NetHosp[e].sHospitalName + '","","")\' class="btn btn-default btn-lg btn-main" href=\'javascript://\'>show on map <i class="fa fa-angle-right"></i></a> ', t += "<a b='0'  v=\"" + e + '" c="' + HospitalJson.NetHosp[e].sPhoneNo + '" m="" l="" t="' + HospitalJson.NetHosp[e].sHospitalName.replace(/&/g, "and") + '" a="' + HospitalJson.NetHosp[e].sAddress.replace(/&/g, "and") + "\" id='btnAddn" + e + '\'  class="btn btn-default btn-lg btn-main btnAddrShow" href=\'javascript://\'>SMS Address <i class="fa fa-angle-right"></i></a> ', t += "<span style='display:none;' class='spansms' id='span" + e + '\'><label class="control-label-garage" id="lblcriterName"><br></label>', t += ' <input type="text" maxlength=\'10\' placeholder=\'Enter Mobile No.\' onkeypress="return isNumericKey1(event);"  id="CriteriaName' + e + '" class="form-control">', t += ' <span class="input-group-btn-garage"> <a class="btn btn-default btn-blue cbtnSendSms" id=\'btnshowss' + e + "'  v=\"" + e + "\" href=\"javascript://\">Send</a> </span>  </span> </div><p class='msgAddmap' style='display:none;' id='msgAddmap" + e + "'>The address are sent to your mobile.</p></div>", t += "</div> </div>"
        }
        document.getElementById("idNetHosp").innerHTML = t
    } else document.getElementById("idNetHosp").innerHTML = "No Record Found"
}

function getHospitalAccPage(t, e, a, s) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getHospitalAccPage",
            stateId: t,
            cityId: e,
            pageNo: a,
            rowNo: s
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t), 0 == (HospitalJson = $.parseJSON(t)).NetHosp.length || (populateHospital(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), paginingNo(totHospital, a, s, 10, "divPagination"))
        },
        error: function(t) {
            //alert("fn getHospitalAccPage " + t)
        }
    })
}

function getDiagnosticCentersAccPage(t, e, a, s) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getDiagnosticCentersAccPage",
            stateId: t,
            cityId: e,
            pageNo: a,
            rowNo: s
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t), 0 == (DiagnoJson = $.parseJSON(t)).DiagnosticList.length || (populateDiagnosticCenters(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), paginingNo(totDiag, a, s, 10, "divPagination"))
        },
        error: function(t) {
            //alert("fn getDiagnosticCentersAccPage " + t)
        }
    })
}

function fillStateAndCityAndGarageList() {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        type: "Get",
        data: {
            sAction: "fillStateAndCityAndGarageList"
        },
        success: function(t) {
            if (0 < t.indexOf("Database error")) //alert(t);
            else {
                GarageJson = $.parseJSON(t), $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state"));
                for (var e = 0; e < GarageJson.statelist.length; e++) GarageJson.statelist[e].isSameState, $("#ddlstate").append($("<option></option>").val("" + GarageJson.statelist[e].sId).html("" + GarageJson.statelist[e].stateN));
                document.getElementById("ddlstate").value = 21, $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                try {
                    for (e = 0; e < GarageJson.cityList.length; e++) $("#ddlcity").append($("<option></option>").val("" + GarageJson.cityList[e].cId).html("" + GarageJson.cityList[e].cityN));
                    document.getElementById("ddlcity").value = 5, $("#cityname").hide()
                } catch (t) {}
                0 == GarageJson.GarageList.length || (populateGarage(), paginingNo(totGarage, 1, 4, 10, "divPagination"), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude))
            }
        },
        error: function(t) {
            //alert("fn fillStateAndCityAndGarageList " + t)
        }
    })
}

function populateGarage() {
    if (0 < GarageJson.GarageList.length) {
        for (var t = "", e = 0; e < GarageJson.GarageList.length; e++) {
            0 == e && (mapLongitude = GarageJson.GarageList[e].fLongitude, mapAddress = GarageJson.GarageList[e].sAddress, mapLatitude = GarageJson.GarageList[e].fLatitude, totGarage = GarageJson.GarageList[e].totGarage, smsTitle = GarageJson.GarageList[e].sworkShopName), t += ' <div class="address">', t += '<div class="marker-icon">', t += '<img src="img/icons/map_marker_icon.png" alt=""></div>', t += '<div class="address-holder"><p>', t += GarageJson.GarageList[e].sworkShopName;
            var a = GarageJson.GarageList[e].sAreaLandmark,
                s = "";
            "" != a && (s = "<br /> Landmark: " + a), t += "<br /> <span>" + GarageJson.GarageList[e].sAddress + s + "</span></p>";
            var n = GarageJson.GarageList[e].sLandline,
                i = "";
            "" != n && (i = " <span> Landline:" + n + " </span>"), "" == GarageJson.GarageList[e].sPhoneNo && "" == i || (t += '<p><img src="img/icons/phone_sm_icon.png" alt=""><a style="color: #454545;font-size: 14px;font-weight: 400;" href="tel:' + GarageJson.GarageList[e].sPhoneNo + '">' + GarageJson.GarageList[e].sPhoneNo + '<a style="color: #454545;font-size: 14px;font-weight: 400;" href="tel:' + n + '">' + i + "</p>"), "" != GarageJson.GarageList[e].sEmailId && (t += '<a href="mailto:' + GarageJson.GarageList[e].sEmailId + '"><img src="img/icons/mail_sm_icon.png" alt=""> ' + GarageJson.GarageList[e].sEmailId + "</a>"), t += "<br/>", "" != GarageJson.GarageList[e].fLatitude && GarageJson.GarageList[e].fLongitude && (t += "<div id='mapdetail" + e + "'><a  onclick='getLatLonDetailDisplayGoogleMap(\"" + GarageJson.GarageList[e].sAddress + '","' + GarageJson.GarageList[e].sworkShopName + '",' + GarageJson.GarageList[e].fLatitude + "," + GarageJson.GarageList[e].fLongitude + ')\' class="btn btn-default btn-lg btn-main" href=\'javascript://\'>show on map <i class="fa fa-angle-right"></i></a> '), t += "<a b='0' v=\"" + e + '"  l="' + GarageJson.GarageList[e].sLandline + '"  m="' + GarageJson.GarageList[e].sPhoneNo + '" t="' + GarageJson.GarageList[e].sworkShopName.replace(/&/g, "and") + '" a="' + GarageJson.GarageList[e].sAddress.replace(/&/g, "and") + '" class="btn btn-default btn-lg btn-main btnAddrShow" id=\'btnAddn' + e + "' href='javascript://'>SMS Address <i class=\"fa fa-angle-right\"></i></a> ", t += "<span style='display:none;' class='spansms' id='span" + e + '\'><label class="control-label-garage" id="lblcriterName"><br></label>', t += ' <input type="text"  maxlength=\'10\' placeholder=\'Enter Mobile No.\' onkeypress="return isNumericKey1(event);"  id="CriteriaName' + e + '" class="form-control">', t += ' <span class="input-group-btn-garage"> <a id=\'btnshowss' + e + '\' class="btn btn-default btn-blue cbtnSendSms" v="' + e + "\" href=\"javascript://\">Send</a> </span> </span></div><p class='msgAddmap' style='display:none;' id='msgAddmap" + e + "'>The address are sent to your mobile.</p></div>", t += "</div> </div>"
        }
        document.getElementById("idGarageList").innerHTML = t
    } else document.getElementById("idGarageList").innerHTML = "No Record Found"
}

function getGarageAccPage(t, e, a, s) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getGarageAccPage",
            stateId: t,
            cityId: e,
            pageNo: a,
            rowNo: s
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t), 0 == (GarageJson = $.parseJSON(t)).GarageList.length ? (document.getElementById("idGarageList").innerHTML = "No Record Found", $("#divPagination").hide()) : (populateGarage(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), $("#divPagination").show(), paginingNo(totGarage, a, s, 10, "divPagination"))
        },
        error: function(t) {
            //alert("fn getGarageAccPage " + t)
        }
    })
}

function getGarageBaseOnMakeAndShopName(t, e, a, s, n, i) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getGarageBaseOnMakeAndShopName",
            workshopName: t,
            MakeName: e,
            pageNo: a,
            rowNo: s,
            stateId: n,
            cityId: i
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t), 0 == (GarageJson = $.parseJSON(t)).GarageList.length ? (document.getElementById("idGarageList").innerHTML = "No Record Found", $("#divPagination").hide()) : (populateGarage(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), $("#divPagination").show(), paginingNo(totGarage, a, s, 10, "divPagination"), backtotoppage())
        },
        error: function(t) {
            //alert("fn getGarageAccPage " + t)
        }
    })
}

function populateIndiAgentCityAndState() {
    $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state"));
    for (var t = 0; t < onLoadAgentJson.indstatelist.length; t++) "Yes" == onLoadAgentJson.indstatelist[t].isSameState && (stateId = onLoadAgentJson.indstatelist[t].sId), $("#ddlstate").append($("<option></option>").val("" + onLoadAgentJson.indstatelist[t].sId).html("" + onLoadAgentJson.indstatelist[t].stateN));
    document.getElementById("ddlstate").value = 0, $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
    try {
        for (t = 0; t < onLoadAgentJson.indcityList.length; t++) $("#ddlcity").append($("<option></option>").val("" + onLoadAgentJson.indcityList[t].cId).html("" + onLoadAgentJson.indcityList[t].cityN));
        document.getElementById("ddlcity").value = 0
    } catch (t) {}
}

function PopCityAccStateForAgent() {
    var t = document.getElementById("ddlstate").value;
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "populateCityAccToStateAgent",
            stateId: t,
            iagnType: iagnType
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t);
            try {
                var e = $.parseJSON(t);
                $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                for (var a = 0; a < e.clists.length; a++) $("#ddlcity").append($("<option></option>").val("" + e.clists[a].cId).html("" + e.clists[a].cityN))
            } catch (t) {
                $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"))
            }
        },
        error: function(t) {
            //alert("fn PopCityAccState " + t)
        }
    })
}

function populateCorAgentCityAndState() {
    $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state"));
    for (var t = 0; t < onLoadAgentJson.corpstatelist.length && (0 != t || "no" != onLoadAgentJson.corpstatelist[0].isData); t++) "Yes" == onLoadAgentJson.corpstatelist[t].isSameState && (stateId = onLoadAgentJson.corpstatelist[t].sId), $("#ddlstate").append($("<option></option>").val("" + onLoadAgentJson.corpstatelist[t].sId).html("" + onLoadAgentJson.corpstatelist[t].stateN));
    document.getElementById("ddlstate").value = 29, $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
    try {
        for (t = 0; t < onLoadAgentJson.corpcityList.length && (0 != t || "no" != onLoadAgentJson.corpcityList[0].isData); t++) $("#ddlcity").append($("<option></option>").val("" + onLoadAgentJson.corpcityList[t].cId).html("" + onLoadAgentJson.corpcityList[t].cityN));
        document.getElementById("ddlcity").value = 1
    } catch (t) {}
}

function populateDiagnosticCenters() {
    if (0 < DiagnoJson.DiagnosticList.length) {
        for (var t = "", e = 0; e < DiagnoJson.DiagnosticList.length; e++) {
            if (0 == e) {
                var a = DiagnoJson.DiagnosticList[e].sAddress + ", " + DiagnoJson.DiagnosticList[e].cityname + ", " + DiagnoJson.DiagnosticList[e].stateName;
                mapLongitude = DiagnoJson.DiagnosticList[e].fLongitude, mapAddress = a, mapLatitude = DiagnoJson.DiagnosticList[e].fLatitude, totDiag = DiagnoJson.DiagnosticList[e].totDiag, smsTitle = "Future Generali"
            }
            t += ' <div class="address">', t += '<div class="marker-icon">', t += '<img src="img/icons/map_marker_icon.png" alt=""></div>', t += '<div class="address-holder">';
            var s = DiagnoJson.DiagnosticList[e].sDiagnosticCentresName;
            t += " <p>" + s + "<br /><span>" + DiagnoJson.DiagnosticList[e].sAddress + "</span><br /><span>" + DiagnoJson.DiagnosticList[e].sPincode + "</span></p>", "" != DiagnoJson.DiagnosticList[e].sPhoneNo && (t += '<p><img src="img/icons/phone_sm_icon.png" alt=""> ' + DiagnoJson.DiagnosticList[e].sPhoneNo + "</p>"), "" != DiagnoJson.DiagnosticList[e].sEmailId && (t += '<a href="mailto:' + DiagnoJson.DiagnosticList[e].sEmailId + '"><img src="img/icons/mail_sm_icon.png" alt=""> ' + DiagnoJson.DiagnosticList[e].sEmailId + "</a>"), t += "<br/>", "" != DiagnoJson.DiagnosticList[e].fLatitude && "" != DiagnoJson.DiagnosticList[e].fLongitude ? (t += "<div id='mapdetail" + e + "'><a  onclick='getLatLonDetailDisplayGoogleMap(\"" + DiagnoJson.DiagnosticList[e].sAddress + ", " + DiagnoJson.DiagnosticList[e].cityname + ", " + DiagnoJson.DiagnosticList[e].stateName + '","' + DiagnoJson.DiagnosticList[e].sDiagnosticCentresName + '",' + DiagnoJson.DiagnosticList[e].fLatitude + "," + DiagnoJson.DiagnosticList[e].fLongitude + ')\' class="btn btn-default btn-lg btn-main" href=\'javascript://\'>show on map <i class="fa fa-angle-right"></i></a> ', t += "<a b='0'  v=\"" + e + '" c="' + DiagnoJson.DiagnosticList[e].sPhoneNo + '" m="" l="" t="' + DiagnoJson.DiagnosticList[e].sDiagnosticCentresName.replace(/&/g, "and") + '" a="' + DiagnoJson.DiagnosticList[e].sAddress.replace(/&/g, "and") + "\" id='btnAddn" + e + '\'  class="btn btn-default btn-lg btn-main btnAddrShow" href=\'javascript://\'>SMS Address <i class="fa fa-angle-right"></i></a> ', t += "<span style='display:none;' class='spansms' id='span" + e + '\'><label class="control-label-garage" id="lblcriterName"><br></label>', t += ' <input type="text" maxlength=\'10\' placeholder=\'Enter Mobile No.\' onkeypress="return isNumericKey1(event);"  id="CriteriaName' + e + '" class="form-control">', t += ' <span class="input-group-btn-garage"> <a class="btn btn-default btn-blue cbtnSendSms" id=\'btnshowss' + e + "'  v=\"" + e + "\" href=\"javascript://\">Send</a> </span>  </span> </div><p class='msgAddmap' style='display:none;' id='msgAddmap" + e + "'>The address are sent to your mobile.</p></div>") : (t += "<div id='mapdetail" + e + "'><a  onclick='getLatLonDetailDisplayGoogleMap(\"" + DiagnoJson.DiagnosticList[e].sAddress + ", " + DiagnoJson.DiagnosticList[e].cityname + ", " + DiagnoJson.DiagnosticList[e].stateName + '","Future Generali",,)\' class="btn btn-default btn-lg btn-main" href=\'javascript://\'>show on map <i class="fa fa-angle-right"></i></a> ', t += "<a b='0' v=\"" + e + '" l="' + DiagnoJson.DiagnosticList[e].sPhoneNo + '" m="" t="Future Generali" a="' + DiagnoJson.DiagnosticList[e].sAddress.replace(/&/g, "and") + '" class="btn btn-default btn-lg btn-main btnAddrShow" id=\'btnAddn' + e + "' href='javascript://'>SMS Address <i class=\"fa fa-angle-right\"></i></a> ", t += "<span style='display:none;' class='spansms' id='span" + e + '\'><label class="control-label-garage" id="lblcriterName"><br></label>', t += ' <input type="text" maxlength=\'10\' placeholder=\'Enter Mobile No.\' onkeypress="return isNumericKey1(event);" id="CriteriaName' + e + '" class="form-control">', t += ' <span class="input-group-btn-garage"> <a class="btn btn-default btn-blue cbtnSendSms" id=\'btnshowss' + e + "' v=\"" + e + "\" href=\"javascript://\">Send</a> </span> </span></div><p class='msgAddmap' style='display:none;' id='msgAddmap" + e + "'>The address are sent to your mobile.</p></div>"), t += "</div> </div>"
        }
        document.getElementById("idDiagnosticCenters").innerHTML = t
    } else document.getElementById("idDiagnosticCenters").innerHTML = "No Record Found"
}

function fillStateAndCityAndSuspectedFraud() {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "fillStateAndCityAndSuspectedFraud"
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t);
            var e = 0;
            if (0 < t.indexOf("%$")) {
                var a;
                a = t.split("%$");
                var s = $.parseJSON(a[0]);
                SuspectJson = $.parseJSON(a[1]), $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state")), $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                try {
                    for (var n = 0; n < s.statelist.length; n++) s.statelist[n].isSameState, $("#ddlstate").append($("<option></option>").val("" + s.statelist[n].sId).html("" + s.statelist[n].stateN));
                    for (document.getElementById("ddlstate").value = 21, n = 0; n < s.cityList.length; n++) $("#ddlcity").append($("<option></option>").val("" + s.cityList[n].cId).html("" + s.cityList[n].cityN));
                    document.getElementById("ddlcity").value = 5
                } catch (t) {}
                0 == SuspectJson.SuspectedList.length || (populateSuspectedFraud(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), paginingNo(totSus, 1, 4, 10, "divPagination"))
            } else {
                for (s = $.parseJSON(t), $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state")), n = 0; n < s.statelist.length; n++) "Yes" == s.statelist[n].isSameState && (e = s.statelist[n].sId), $("#ddlstate").append($("<option></option>").val("" + s.statelist[n].sId).html("" + s.statelist[n].stateN));
                document.getElementById("ddlstate").value = e, $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                try {
                    for (n = 0; n < s.cityList.length; n++) $("#ddlcity").append($("<option></option>").val("" + s.cityList[n].cId).html("" + s.cityList[n].cityN))
                } catch (t) {}
            }
        },
        error: function(t) {
            //alert("fn fillStateAndCityAndSuspectedFraud " + t)
        }
    })
}

function getSuspectedFraudAccPage(t, e, a, s) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getSuspectedFraudAccPage",
            stateId: t,
            cityId: e,
            pageNo: a,
            rowNo: s
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t), SuspectJson = $.parseJSON(t), 0 == SuspectJson.SuspectedList.length || (populateSuspectedFraud(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), paginingNo(totSus, a, s, 10, "divPagination"))
        },
        error: function(t) {
            //alert("fn getSuspectedFraudAccPage " + t)
        }
    })
}

function populateSuspectedFraud() {
    if (0 < SuspectJson.SuspectedList.length) {
        for (var t = "", e = 0; e < SuspectJson.SuspectedList.length; e++) {
            if (0 == e) {
                var a = SuspectJson.SuspectedList[e].sAddress + ", " + SuspectJson.SuspectedList[e].cityname + ", " + SuspectJson.SuspectedList[e].stateName;
                mapLongitude = SuspectJson.SuspectedList[e].fLongitude, mapAddress = a, mapLatitude = SuspectJson.SuspectedList[e].fLatitude, totSus = SuspectJson.SuspectedList[e].totSus, smsTitle = "Future Generali"
            }
            t += ' <div class="address">', t += '<div class="marker-icon">', t += '<img src="img/icons/map_marker_icon.png" alt=""></div>', t += '<div class="address-holder">';
            var s = SuspectJson.SuspectedList[e].Hospital;
            t += " <p>" + s + "<br /><span>" + SuspectJson.SuspectedList[e].sAddress + "</span><br /><span>" + SuspectJson.SuspectedList[e].sPincode + "</span></p>", "" != SuspectJson.SuspectedList[e].sPhoneNo && (t += '<p><img src="img/icons/phone_sm_icon.png" alt=""> ' + SuspectJson.SuspectedList[e].sPhoneNo + "</p>"), "" != SuspectJson.SuspectedList[e].sEmailId && (t += '<a href="mailto:' + SuspectJson.SuspectedList[e].sEmailId + '"><img src="img/icons/mail_sm_icon.png" alt=""> ' + SuspectJson.SuspectedList[e].sEmailId + "</a>"), t += "<br/>", "" != SuspectJson.SuspectedList[e].fLatitude && "" != SuspectJson.SuspectedList[e].fLongitude ? (t += "<div id='mapdetail" + e + "'><a  onclick='getLatLonDetailDisplayGoogleMap(\"" + SuspectJson.SuspectedList[e].sAddress + ", " + SuspectJson.SuspectedList[e].cityname + ", " + SuspectJson.SuspectedList[e].stateName + '","' + SuspectJson.SuspectedList[e].Hospital + '",' + SuspectJson.SuspectedList[e].fLatitude + "," + SuspectJson.SuspectedList[e].fLongitude + ')\' class="btn btn-default btn-lg btn-main" href=\'javascript://\'>show on map <i class="fa fa-angle-right"></i></a> ', t += "<a b='0'  v=\"" + e + '" c="' + SuspectJson.SuspectedList[e].sPhoneNo + '" m="" l="" t="' + SuspectJson.SuspectedList[e].Hospital.replace(/&/g, "and") + '" a="' + SuspectJson.SuspectedList[e].sAddress.replace(/&/g, "and") + "\" id='btnAddn" + e + '\'  class="btn btn-default btn-lg btn-main btnAddrShow" href=\'javascript://\'>SMS Address <i class="fa fa-angle-right"></i></a> ', t += "<span style='display:none;' class='spansms' id='span" + e + '\'><label class="control-label-garage" id="lblcriterName"><br></label>', t += ' <input type="text" maxlength=\'10\' placeholder=\'Enter Mobile No.\' onkeypress="return isNumericKey1(event);"  id="CriteriaName' + e + '" class="form-control">', t += ' <span class="input-group-btn-garage"> <a class="btn btn-default btn-blue cbtnSendSms" id=\'btnshowss' + e + "'  v=\"" + e + "\" href=\"javascript://\">Send</a> </span>  </span> </div><p class='msgAddmap' style='display:none;' id='msgAddmap" + e + "'>The address are sent to your mobile.</p></div>") : (t += "<div id='mapdetail" + e + "'><a  onclick='getLatLonDetailDisplayGoogleMap(\"" + SuspectJson.SuspectedList[e].sAddress + ", " + SuspectJson.SuspectedList[e].cityname + ", " + SuspectJson.SuspectedList[e].stateName + '","Future Generali",,)\' class="btn btn-default btn-lg btn-main" href=\'javascript://\'>show on map <i class="fa fa-angle-right"></i></a> ', t += "<a b='0' v=\"" + e + '" l="' + SuspectJson.SuspectedList[e].sPhoneNo + '" m="" t="Future Generali" a="' + SuspectJson.SuspectedList[e].sAddress.replace(/&/g, "and") + '" class="btn btn-default btn-lg btn-main btnAddrShow" id=\'btnAddn' + e + "' href='javascript://'>SMS Address <i class=\"fa fa-angle-right\"></i></a> ", t += "<span style='display:none;' class='spansms' id='span" + e + '\'><label class="control-label-garage" id="lblcriterName"><br></label>', t += ' <input type="text" maxlength=\'10\' placeholder=\'Enter Mobile No.\' onkeypress="return isNumericKey1(event);" id="CriteriaName' + e + '" class="form-control">', t += ' <span class="input-group-btn-garage"> <a class="btn btn-default btn-blue cbtnSendSms" id=\'btnshowss' + e + "' v=\"" + e + "\" href=\"javascript://\">Send</a> </span> </span></div><p class='msgAddmap' style='display:none;' id='msgAddmap" + e + "'>The address are sent to your mobile.</p></div>"), t += "</div> </div>"
        }
        document.getElementById("idNetHosp").innerHTML = t
    } else document.getElementById("idNetHosp").innerHTML = "No Record Found"
}

function fillStateAndCityAndBLHospitals() {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "fillStateAndCityAndBLHospitals"
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t);
            var e = 0;
            if (0 < t.indexOf("%$")) {
                var a;
                a = t.split("%$");
                var s = $.parseJSON(a[0]);
                BLHJson = $.parseJSON(a[1]), $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state")), $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                try {
                    for (var n = 0; n < s.statelist.length; n++) s.statelist[n].isSameState, $("#ddlstate").append($("<option></option>").val("" + s.statelist[n].sId).html("" + s.statelist[n].stateN));
                    for (document.getElementById("ddlstate").value = 21, n = 0; n < s.cityList.length; n++) $("#ddlcity").append($("<option></option>").val("" + s.cityList[n].cId).html("" + s.cityList[n].cityN));
                    document.getElementById("ddlcity").value = 5
                } catch (t) {}
                0 == BLHJson.BLHList.length || (populateBLHospitals(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), paginingNo(totBLH, 1, 4, 10, "divPagination"))
            } else {
                for (s = $.parseJSON(t), $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state")), n = 0; n < s.statelist.length; n++) "Yes" == s.statelist[n].isSameState && (e = s.statelist[n].sId), $("#ddlstate").append($("<option></option>").val("" + s.statelist[n].sId).html("" + s.statelist[n].stateN));
                document.getElementById("ddlstate").value = e, $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                try {
                    for (n = 0; n < s.cityList.length; n++) $("#ddlcity").append($("<option></option>").val("" + s.cityList[n].cId).html("" + s.cityList[n].cityN))
                } catch (t) {}
            }
        },
        error: function(t) {
            //alert("fn fillStateAndCityAndBLHospitals " + t)
        }
    })
}

function getBLHospitalsAccPage(t, e, a, s) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getBLHospitalsAccPage",
            stateId: t,
            cityId: e,
            pageNo: a,
            rowNo: s
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t), 0 == (BLHJson = $.parseJSON(t)).BLHList.length || (populateBLHospitals(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), paginingNo(totBLH, a, s, 10, "divPagination"))
        },
        error: function(t) {
            //alert("fn getBLHospitalsAccPage" + t)
        }
    })
}

function populateBLHospitals() {
    if (0 < BLHJson.BLHList.length) {
        for (var t = "", e = 0; e < BLHJson.BLHList.length; e++) {
            if (0 == e) {
                var a = BLHJson.BLHList[e].sAddress + ", " + BLHJson.BLHList[e].cityname + ", " + BLHJson.BLHList[e].stateName;
                mapLongitude = BLHJson.BLHList[e].fLongitude, mapAddress = a, mapLatitude = BLHJson.BLHList[e].fLatitude, totBLH = BLHJson.BLHList[e].totBLH, smsTitle = "Future Generali"
            }
            t += ' <div class="address">', t += '<div class="marker-icon">', t += '<img src="img/icons/map_marker_icon.png" alt=""></div>', t += '<div class="address-holder">';
            var s = BLHJson.BLHList[e].sHospitalName;
            t += " <p>" + s + "<br /><span>" + BLHJson.BLHList[e].sAddress + "</span><br /><span>" + BLHJson.BLHList[e].sPincode + "</span></p>", "" != BLHJson.BLHList[e].sPhoneNo && (t += '<p><img src="img/icons/phone_sm_icon.png" alt=""> ' + BLHJson.BLHList[e].sPhoneNo + "</p>"), "" != BLHJson.BLHList[e].sEmailId && (t += '<a href="mailto:' + BLHJson.BLHList[e].sEmailId + '"><img src="img/icons/mail_sm_icon.png" alt=""> ' + BLHJson.BLHList[e].sEmailId + "</a>"), t += "<br/>", "" != BLHJson.BLHList[e].fLatitude && "" != BLHJson.BLHList[e].fLongitude ? (t += "<div id='mapdetail" + e + "'><a  onclick='getLatLonDetailDisplayGoogleMap(\"" + BLHJson.BLHList[e].sAddress + ", " + BLHJson.BLHList[e].cityname + ", " + BLHJson.BLHList[e].stateName + '","' + BLHJson.BLHList[e].sHospitalName + '",' + BLHJson.BLHList[e].fLatitude + "," + BLHJson.BLHList[e].fLongitude + ')\' class="btn btn-default btn-lg btn-main" href=\'javascript://\'>show on map <i class="fa fa-angle-right"></i></a> ', t += "<a b='0'  v=\"" + e + '" c="' + BLHJson.BLHList[e].sPhoneNo + '" m="" l="" t="' + BLHJson.BLHList[e].sHospitalName.replace(/&/g, "and") + '" a="' + BLHJson.BLHList[e].sAddress.replace(/&/g, "and") + "\" id='btnAddn" + e + '\'  class="btn btn-default btn-lg btn-main btnAddrShow" href=\'javascript://\'>SMS Address <i class="fa fa-angle-right"></i></a> ', t += "<span style='display:none;' class='spansms' id='span" + e + '\'><label class="control-label-garage" id="lblcriterName"><br></label>', t += ' <input type="text" maxlength=\'10\' placeholder=\'Enter Mobile No.\' onkeypress="return isNumericKey1(event);"  id="CriteriaName' + e + '" class="form-control">', t += ' <span class="input-group-btn-garage"> <a class="btn btn-default btn-blue cbtnSendSms" id=\'btnshowss' + e + "'  v=\"" + e + "\" href=\"javascript://\">Send</a> </span>  </span> </div><p class='msgAddmap' style='display:none;' id='msgAddmap" + e + "'>The address are sent to your mobile.</p></div>") : (t += "<div id='mapdetail" + e + "'><a  onclick='getLatLonDetailDisplayGoogleMap(\"" + BLHJson.BLHList[e].sAddress + ", " + BLHJson.BLHList[e].cityname + ", " + BLHJson.BLHList[e].stateName + '","Future Generali",,)\' class="btn btn-default btn-lg btn-main" href=\'javascript://\'>show on map <i class="fa fa-angle-right"></i></a> ', t += "<a b='0' v=\"" + e + '" l="' + BLHJson.BLHList[e].sPhoneNo + '" m="" t="Future Generali" a="' + BLHJson.BLHList[e].sAddress.replace(/&/g, "and") + '" class="btn btn-default btn-lg btn-main btnAddrShow" id=\'btnAddn' + e + "' href='javascript://'>SMS Address <i class=\"fa fa-angle-right\"></i></a> ", t += "<span style='display:none;' class='spansms' id='span" + e + '\'><label class="control-label-garage" id="lblcriterName"><br></label>', t += ' <input type="text" maxlength=\'10\' placeholder=\'Enter Mobile No.\' onkeypress="return isNumericKey1(event);" id="CriteriaName' + e + '" class="form-control">', t += ' <span class="input-group-btn-garage"> <a class="btn btn-default btn-blue cbtnSendSms" id=\'btnshowss' + e + "' v=\"" + e + "\" href=\"javascript://\">Send</a> </span> </span></div><p class='msgAddmap' style='display:none;' id='msgAddmap" + e + "'>The address are sent to your mobile.</p></div>"), t += "</div> </div>"
        }
        document.getElementById("idNetHosp").innerHTML = t
    } else document.getElementById("idNetHosp").innerHTML = "No Record Found"
}

function populateCorAgentName() {
    $("#ddlCorAgent").empty().append($("<option></option>").val("0").html("Please select corporate agent name"));
    for (var t = 0; t < onLoadAgentJson.corAgenName.length && (0 != t || "no" != onLoadAgentJson.corAgenName[0].isData); t++) $("#ddlCorAgent").append($("<option></option>").val("" + onLoadAgentJson.corAgenName[t].corAgenName).html("" + onLoadAgentJson.corAgenName[t].corAgenName))
}

function populateIndividualAgent(t) {
    if (0 < t.InvAgentList.length) {
        for (var e = "", a = 0, s = 0; s < t.InvAgentList.length; s++) {
            if (0 == s) {
                if (totInvAgentCount = t.InvAgentList[s].totIndAgen, "no" == (n = t.InvAgentList[s].isData)) break;
                0 < $("#ddlcity").val() && ($("#divCorDisplay1").hide(), $("#divInvDisplay1").show())
            }
            if (a < 6) {
                var n = '<tbody><tr><th class="agent-heading">Name of the Agent</th><td class="agent-heading"><strong>' + t.InvAgentList[s].sAgentName + "</strong></td></tr>";
                n += "<tr><th>PAN NUMBER</th><td>" + t.InvAgentList[s].sIRDALicenseno + "</td></tr>", n += "<tr><th>Insurer Agent Code</th><td><strong>" + t.InvAgentList[s].sInsurerAgentCode + "</strong></td></tr>", n += "<tr><th>City</td><td>" + t.InvAgentList[s].city + "</td></tr>", n += "<tr><th>District</th><td>" + t.InvAgentList[s].sDistrict + "</td></tr>", n += "<tr><th>Pin Code</th><td>" + t.InvAgentList[s].sPincode + "</td></tr>", n += "<tr><th>Branch to which agent is associated</th><td><strong>" + t.InvAgentList[s].sInsurersBranchAssociatedtoAgent + "</strong></td></tr>", n += "<tr><th>Composite (Y/N)</th><td>" + t.InvAgentList[s].comStatus + "</td></tr>", n += "<tr><th>If Composite, Name of Insurer</th><td>" + t.InvAgentList[s].sCompositeNameOfOtherInsurer + "</td></tr>", n += "<tr><th>License Issued on</th><td>" + t.InvAgentList[s].issuedon + "</td></tr>", n += "<tr><th>License Valid from</th><td>" + t.InvAgentList[s].validfrom + "</td></tr>", n += "</tbody>", e += ' <div class="address">', e += '<div class="address-holder">', e += '<div class="row">', e += '<div class="col-md-10 col-sm-10 col-xs-12">', e += "<p>" + t.InvAgentList[s].sAgentName + ", " + t.InvAgentList[s].city + "<br />", e += "<span>PAN Number: " + t.InvAgentList[s].sIRDALicenseno, e += "Insurance Agent Code: " + t.InvAgentList[s].sInsurerAgentCode, e += "<br /> Branch to which agent is associated: " + t.InvAgentList[s].sInsurersBranchAssociatedtoAgent, e += "</span></p> </div><div class=\"col-md-2 col-sm-2 col-xs-12\"><p><a class='aprof'href='javascript://' v='" + n + "' >", e += "<span class='profile'><i title='View Profile' class='fa fa-user'></i> <br/></span></a></p>", e += "</div></div></div></div>", a++
            } else t.InvAgentList[s].sAgentName, t.InvAgentList[s].sAddress, "" != t.InvAgentList[s].sPhoneNo && t.InvAgentList[s].sPhoneNo, "" != t.InvAgentList[s].sEmailId && (t.InvAgentList[s].sEmailId, t.InvAgentList[s].sEmailId)
        }
        document.getElementById("divInvDisplaysss").innerHTML = e, $("#tblProfile").hide(), $(".Left-update").hide()
    } else document.getElementById("divInvDisplaysss").innerHTML = "No Record Found", document.getElementById("tblProfile").innerHTML = "", $(".Left-update").hide()
}

function populateCorpAgent(t) {
    if (0 < t.CorpAgentList.length) {
        for (var e = "", a = !1, s = 0, n = 0; n < t.CorpAgentList.length; n++) {
            if (0 == n) {
                if (totCorpAgentCount = t.CorpAgentList[n].totCorpAgen, "no" == (e = t.CorpAgentList[n].isData)) break;
                0 != $("#ddlCorAgent").val() ? ($("#divCorDisplay1").show(), $("#divInvDisplay1").hide()) : a = !0
            }
            s < 6 ? (e = '<tbody><tr><th class="agent-heading">Name of the Corporate Agent</th><td class="agent-heading"><strong  style=\'text-transform: uppercase;\'>' + t.CorpAgentList[n].sCorporateAgentName + "</strong></th></tr>", e += "<tr><th>COR Number</th><td>" + t.CorpAgentList[n].sIRDALicenseno + "</td></tr>", e += "<tr><th>Name of CIE/PO</th><td>" + t.CorpAgentList[n].sChiefInsuranceExecutive + "</td></tr>", e += "<tr><th>Contact Number</th><td>" + t.CorpAgentList[n].sPhoneNo + "</td></tr>", e += "<tr><th>Address</th><td>" + t.CorpAgentList[n].sAddress + "</td></tr>", e += "<tr><th>State</td><td>" + t.CorpAgentList[n].state + "</td></tr>", e += "<tr><th>City</td><td>" + t.CorpAgentList[n].city + "</td></tr>", e += "<tr><th>Agent Code</th><td>" + t.CorpAgentList[n].sInsurerAgentCode + "</td></tr>", e += "<tr><th>Pin Code</th><td>" + t.CorpAgentList[n].sPincode + "</td></tr>", e += "<tr><th>Nature of Agent</td><td>" + t.CorpAgentList[n].sCompositeNameOfOtherInsurer + "</td></tr>", e += "<tr><th>CoR Valid From</th><td>" + t.CorpAgentList[n].validfrom + "</td></tr>", e += "<tr><th>CoR Valid To</th><td>" + t.CorpAgentList[n].validto + "</td></tr>", s++) : (t.CorpAgentList[n].sAddress, "" != t.CorpAgentList[n].sPhoneNo && t.CorpAgentList[n].sPhoneNo, "" != t.CorpAgentList[n].sEmailId && (t.CorpAgentList[n].sEmailId, t.CorpAgentList[n].sEmailId))
        }
        a || ($("#tblcorAg").html(e), $("#tblcorAg").show(), $(".Left-update").show(), $(".tblacor").trigger("click"))
    } else $("#tblcorAg").html("<tr><td>No Record Found</td></tr>"), $("#tblcorAg").show(), $(".Left-update").show()
}

function getAgentAccFilter(t, e, a, s, n) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getAgentAccFilter",
            stateId: t,
            cityId: e,
            pageNo: a,
            rowNo: s,
            iAgentType: n
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t);
            var e = $.parseJSON(t);
            1 == n ? 0 == e.InvAgentList.length ? (document.getElementById("divLeftSideInvAgent").innerHTML = "", document.getElementById("divRightSideInvAgent").innerHTML = "", $("#divInvAgentPagination").hide()) : (populateIndividualAgent(e), paginingNo(totInvAgentCount, a, s, 10, "divInvAgentPagination")) : 0 == e.CorpAgentList.length ? (document.getElementById("divLeftSideCorpAgent").innerHTML = "", document.getElementById("divRightSideCorpAgent").innerHTML = "", $("#divCorpAgentPagination").hide()) : (populateCorpAgent(e), paginingNo(totCorpAgentCount, a, s, 10, "divCorpAgentPagination"))
        },
        error: function(t) {
            //alert("fn getBranchAccPage " + t)
        }
    })
}

function getAgentBaseOnSearch(t, e, a, s, n, i, o, l) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getAgentBaseOnSearch",
            stateId: t,
            cityId: e,
            pageNo: a,
            rowNo: s,
            iAgentType: n,
            agentName: i,
            corAgentName: o,
            agentCode: l
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t);
            var e = $.parseJSON(t);
            1 == n ? 0 == e.InvAgentList.length ? (document.getElementById("divInvDisplaysss").innerHTML = "No Result Found", $("#tblProfile").hide(), $(".Left-update").hide(), $("#divInvAgentPagination").hide()) : (populateIndividualAgent(e), paginingNo(totInvAgentCount, a, s, 10, "divInvAgentPagination"), $("#divShowInvAge").show()) : 0 == e.CorpAgentList.length ? (document.getElementById("divLeftSideCorpAgent").innerHTML = "", document.getElementById("divRightSideCorpAgent").innerHTML = "", $("#divCorpAgentPagination").hide()) : (populateCorpAgent(e), paginingNo(totCorpAgentCount, a, s, 10, "divCorpAgentPagination"))
        },
        error: function(t) {
            //alert("fn getBranchAccPage " + t)
        }
    })
}

function fillSecurityAndStewardshipPolicy() {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "fillSecurityAndStewardshipPolicy",
            isFirstime: !0
        },
        success: function(t) {
            var e, a = (e = window.location.href.toString().split("/"))[e.length - 1];
            0 < t.indexOf("Database error") && //alert(t), SecurityJson = $.parseJSON(t), "information-and-cyber-security-policy" == a && (populateSecurityPolicy(SecurityJson), $("#tabs-1").show(), $("#tabs-2").hide(), $("#tabs-3").hide(), $("#tabs-4").hide()), "stewardship-policy" == a && (populatestewardshipPolicy(SecurityJson), $("#tabs-1").hide(), $("#tabs-2").show(), $("#tabs-3").hide(), $("#tabs-4").hide()), "whistle-blower-policy" == a && (populateWhistleBlowingPolicy(SecurityJson), $("#tabs-1").hide(), $("#tabs-2").hide(), $("#tabs-3").show(), $("#tabs-4").hide()), "anti-fraud-policy" == a && (populateAntiFraudPolicy(SecurityJson), $("#tabs-1").hide(), $("#tabs-2").hide(), $("#tabs-3").hide(), $("#tabs-4").show())
        },
        error: function(t) {
            //alert("fn fillSecurityAndStewardshipPolicy " + t)
        }
    })
}

function fillStateAndCityAndBranch() {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "fillStateAndCityAndBranch"
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t);
            var e = 0;
            if (0 < t.indexOf("%$")) {
                var a;
                a = t.split("%$");
                var s = $.parseJSON(a[0]);
                BranchJson = $.parseJSON(a[1]), $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state")), $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                try {
                    for (var n = 0; n < s.statelist.length; n++) s.statelist[n].isSameState, $("#ddlstate").append($("<option></option>").val("" + s.statelist[n].sId).html("" + s.statelist[n].stateN));
                    for (document.getElementById("ddlstate").value = 21, n = 0; n < s.cityList.length; n++) $("#ddlcity").append($("<option></option>").val("" + s.cityList[n].cId).html("" + s.cityList[n].cityN));
                    document.getElementById("ddlcity").value = 5
                } catch (t) {}
                0 == BranchJson.BranchList.length || (populateBranch(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), paginingNo(totBranch, 1, 4, 10, "divPagination"))
            } else {
                for (s = $.parseJSON(t), $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state")), n = 0; n < s.statelist.length; n++) "Yes" == s.statelist[n].isSameState && (e = s.statelist[n].sId), $("#ddlstate").append($("<option></option>").val("" + s.statelist[n].sId).html("" + s.statelist[n].stateN));
                document.getElementById("ddlstate").value = e, $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                try {
                    for (n = 0; n < s.cityList.length; n++) $("#ddlcity").append($("<option></option>").val("" + s.cityList[n].cId).html("" + s.cityList[n].cityN))
                } catch (t) {}
            }
        },
        error: function(t) {
            //alert("fn fillStateAndCityAndBranch " + t)
        }
    })
}

function getBranchAccPage(t, e, a, s) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getBranchAccPage",
            stateId: t,
            cityId: e,
            pageNo: a,
            rowNo: s
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t), 0 == (BranchJson = $.parseJSON(t)).BranchList.length || (41 == e && (iscity = !0), populateBranch(), paginingNo(totBranch, a, s, 10, "divPagination"), backtotoppage(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude))
        },
        error: function(t) {
            //alert("fn getBranchAccPage " + t)
        }
    })
}

function populateBranch() {
    if (0 < BranchJson.BranchList.length) {
        for (var t = "", e = 0; e < BranchJson.BranchList.length; e++) 0 == e && (mapLongitude = BranchJson.BranchList[e].fLongitude, mapAddress = BranchJson.BranchList[e].sAddress, mapLatitude = BranchJson.BranchList[e].fLatitude, totBranch = BranchJson.BranchList[e].totBran, smsTitle = "Future Generali"), t += ' <div class="address">', t += '<div class="marker-icon">', t += '<img src="img/icons/map_marker_icon.png" alt=""></div>', t += '<div class="address-holder">', t += " <p>" + BranchJson.BranchList[e].sAddress + "</p>", "" != BranchJson.BranchList[e].sPhoneNo && (t += '<p><i class="fa fa-phone-square"></i> <b style="color: grey;">Phone Number : </b> <a  style="color: #454545;font-size: 14px;margin-left:5px" href="tel:' + BranchJson.BranchList[e].sPhoneNo + '">' + BranchJson.BranchList[e].sPhoneNo + "</a></p>"), "" != BranchJson.BranchList[e].sEmailId && (t += '<a href="mailto:' + BranchJson.BranchList[e].sEmailId + '"><img src="img/icons/mail_sm_icon.png" alt=""> ' + BranchJson.BranchList[e].sEmailId + "</a>"), "" != BranchJson.BranchList[e].sGROName && (t += '<P><i class="fa fa-user"></i> <b style="color: grey;">GRO Name : </b>' + BranchJson.BranchList[e].sGROName + "</p>"), t += "<br/>", "" != BranchJson.BranchList[e].fLatitude && BranchJson.BranchList[e].fLongitude && (t += "<div id='mapdetail" + e + "'><a  onclick='getLatLonDetailDisplayGoogleMap(\"" + BranchJson.BranchList[e].sAddress + '","Future Generali",' + BranchJson.BranchList[e].fLatitude + "," + BranchJson.BranchList[e].fLongitude + ')\' class="btn btn-default btn-lg btn-main" href=\'javascript://\'>show on map <i class="fa fa-angle-right"></i></a> '), t += "<a b='0' v=\"" + e + '" l="' + BranchJson.BranchList[e].sPhoneNo + '" m="" t="Future Generali" a="' + BranchJson.BranchList[e].sAddress.replace(/&/g, "and") + '" class="btn btn-default btn-lg btn-main btnAddrShow" id=\'btnAddn' + e + "' href='javascript://'>SMS Address <i class=\"fa fa-angle-right\"></i></a> ", t += "<span style='display:none;' class='spansms' id='span" + e + '\'><label class="control-label-garage" id="lblcriterName"><br></label>', t += ' <input type="text" maxlength=\'10\' placeholder=\'Enter Mobile No.\' onkeypress="return isNumericKey1(event);" id="CriteriaName' + e + '" class="form-control">', t += ' <span class="input-group-btn-garage"> <a class="btn btn-default btn-blue cbtnSendSms" id=\'btnshowss' + e + "' v=\"" + e + "\" href=\"javascript://\">Send</a> </span> </span></div><p class='msgAddmap' style='display:none;' id='msgAddmap" + e + "'>The address are sent to your mobile.</p></div>", 1 == iscity && (t += "<p class=\"Left-update\" style='text-align: left;margin-top: 20px;'>Note:This notice is to bring it to the attention of the Policyholders and Customers of M/S Future Generali India Insurance Company Limited (the Company), that on account of certain unavoidable circumstances, the new branch office of the Company located at 3rd Floor, Chanakya Square, Plot No. 789, Exhibition Road, Patna – 800 001, which was scheduled to be operational with effect from June 20, 2017 shall now become operational with effect from July 10, 2017. The Policyholders/Customers are further informed that till such time the new branch office becomes operational, the Company shall continue to serve its policyholder/customer from the existing branch office located at Harihar Chamber, 1st Floor, Boring Road, Patna – 800 001.</p>"), t += "</div> </div>";
        iscity = !1, document.getElementById("idbranchdetail").innerHTML = t
    } else document.getElementById("idbranchdetail").innerHTML = "No Record Found"
}

function displayYear(t) {
    var e = t.toString().substring(0, 2),
        a = "<h3><span>" + e + "</span>" + t.toString().replace(e, "") + "</h3>";
    document.getElementById("divYear").innerHTML = a
}

function displayListOfPr(t, e) {
    if (0 < t.prlist.length) {
        for (var a = "", s = 0; s < t.prlist.length; s++)
            if ("no" == t.prlist[0].date);
            else {
                var n = t.prlist[s].date;
                if (a += '<div class="press-release"><div class="date-holder">', a += displayDate(n), a += "</div>", a += '<div class="press-content">', "pr" == e) a += '<p><a href="press-release-inner/iid=' + t.prlist[s].iid + '">' + t.prlist[s].sTitle + "</a></p>";
                else if ("pc" == e) {
                    var i = "",
                        o = t.prlist[s].sFilePath.split(".");
                    1 < o.length && (i = o[1].toLowerCase());
                    var l = t.prlist[s].sFilePath;
                    "pdf" == i || "jpg" == i || "jpeg" == i || "docx" == i ? -1 < l.indexOf("/general-insurance") ? a += "<p><a target='_blank' href='" + t.prlist[s].sFilePath + "'>" + t.prlist[s].sTitle + "</a> | <span>" + t.prlist[s].sPublication + "</span></p>" : a += "<p><a target='_blank' href='Images/Press Coverage/" + t.prlist[s].sFilePath + "'>" + t.prlist[s].sTitle + "</a> | <span>" + t.prlist[s].sPublication + "</span></p>" : -1 < l.indexOf("/general-insurance") ? a += "<p><a target='_blank' href='" + t.prlist[s].sFilePath + ".jpg'>" + t.prlist[s].sTitle + "</a> | <span>" + t.prlist[s].sPublication + "</span></p>" : a += "<p><a target='_blank' href='Images/Press Coverage/" + t.prlist[s].sFilePath + ".jpg'>" + t.prlist[s].sTitle + "</a> | <span>" + t.prlist[s].sPublication + "</span></p>"
                }
                a += "</div>", a += "</div>"
            }
        document.getElementById("divMediaCentre").innerHTML = a
    } else document.getElementById("divMediaCentre").innerHTML = ""
}

function displayDate(t) {
    var e = t.split(" ");
    return "<p>" + e[0] + "  " + e[1] + " <br/><span>" + e[2] + "</span></p>"
}

function getPressCoverageList() {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getListofPressCoverageAccYear",
            isFirstime: !0,
            pageNo: 1,
            rowNo: 20,
            year: ""
        },
        success: function(t) {
            var e = "";
            0 < t.indexOf("Database error") && //alert(t);
            try {
                var a = $.parseJSON(t);
                $("#ddlyear").empty();
                for (var s = 0; s < a.pcyear.length; s++) "no" == a.pcyear[0].pcyear || (0 == s && (e = a.pcyear[s].pcyear), $("#ddlyear").append($("<option></option>").val("" + a.pcyear[s].pcyear).html("" + a.pcyear[s].pcyear)));
                "" != e && (document.getElementById("ddlyear").value = e), displayListOfPr(a, "pc");
                var n = a.totallist[0].pctot;
                paginingNo(n, 1, 20, 10, "divPagination")
            } catch (t) {
                $("#ddlyear").empty()
            }
            "" != e && displayYear(e)
        },
        error: function(t) {
            //alert("fn getPressReleaseList " + t)
        }
    })
}

function backtotoppage() {
    $("html,body").animate({
        scrollTop: 0
    }, 0)
}

function getPCAccYear(t, s, e) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getListofPressCoverageAccYear",
            isFirstime: !1,
            pageNo: s,
            rowNo: e,
            year: t
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t);
            try {
                var e = $.parseJSON(t);
                displayListOfPr(e, "pc");
                var a = e.totallist[0].pctot;
                paginingNo(a, s, 20, 10, "divPagination"), backtotoppage()
            } catch (t) {}
        },
        error: function(t) {
            //alert("fn getPCAccYear " + t)
        }
    })
}

function getPRAccYear(t) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getListofPressReleaseAccYear",
            isFirstime: !1,
            pageNo: 1,
            rowNo: 20,
            year: t
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t);
            try {
                var e = $.parseJSON(t);
                displayListOfPr(e, "pr")
            } catch (t) {}
        },
        error: function(t) {
            //alert("fn getPRAccYear " + t)
        }
    })
}

function getPressReleaseList() {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getListofPressReleaseAccYear",
            isFirstime: !0,
            pageNo: 1,
            rowNo: 20,
            year: ""
        },
        success: function(t) {
            var e;
            0 < t.indexOf("Database error") && //alert(t);
            try {
                var a = $.parseJSON(t);
                $("#ddlyear").empty();
                for (var s = 0; s < a.prYear.length; s++) "no" == a.prYear[0].pryear || (0 == s && (e = a.prYear[s].pryear), $("#ddlyear").append($("<option></option>").val("" + a.prYear[s].pryear).html("" + a.prYear[s].pryear)));
                document.getElementById("ddlyear").value = e, displayListOfPr(a, "pr")
            } catch (t) {
                $("#ddlyear").empty()
            }
            displayYear(e)
        },
        error: function(t) {
            //alert("fn getPressReleaseList " + t)
        }
    })
}

function popPubDiscDdl(t) {
    var e = "";
    $("#ddlyear").empty();
    for (var a = 0; a < t.pubDisYear.length; a++) 0 == a && (e = t.pubDisYear[a].year), $("#ddlyear").append($("<option></option>").val("" + t.pubDisYear[a].year).html("" + t.pubDisYear[a].year));
    document.getElementById("ddlyear").value = e.toString(), document.getElementById("h4year").innerHTML = e
}

function popEgmDdl(t) {
    var e = "";
    $("#ddlyear").empty();
    for (var a = 0; a < t.egmYear.length; a++) "no" == t.egmYear[0].year || (0 == a && (e = t.egmYear[a].year), $("#ddlyear").append($("<option></option>").val("" + t.egmYear[a].year).html("" + t.egmYear[a].year))), document.getElementById("ddlyear").value = e, document.getElementById("h4egmYear").innerHTML = e
}

function displayYearinv(t) {
    var e = t.split("-")[0],
        a = "<h3><span>" + (e = t.toString().substring(0, 2)) + "</span>" + t.toString().replace(e, "") + "</h3>";
    document.getElementById("h4year").innerHTML = a
}

function displayYearAnu(t) {
    var e = t.split("-")[0],
        a = "<h3><span>" + (e = t.toString().substring(0, 2)) + "</span>" + t.toString().replace(e, "") + "</h3>";
    document.getElementById("h4anuYear").innerHTML = a
}

function popAnuuReDdl(t) {
    var e = "";
    $("#ddlyear").empty();
    for (var a = 0; a < t.annuReYear.length; a++) "no" == t.annuReYear[0].year || (0 == a && (e = t.annuReYear[a].year), $("#ddlyear").append($("<option></option>").val("" + t.annuReYear[a].year).html("" + t.annuReYear[a].year))), document.getElementById("ddlyear").value = e, document.getElementById("h4anuYear").innerHTML = e
}

function populatestewardshipPolicy(t) {
    try {
        if (0 < t.stewardD.length) {
            var e = "";
            e = '<table class="table table-pd"><tbody>';
            for (var a = 0; a < t.stewardD.length; a++) "no" == t.stewardD[0].sPolicyName || (e += "<tr><td><p><img src='img/icons/pdf.png'>     <a target='_blank' href=\"" + t.stewardD[a].sFile + '">' + t.stewardD[a].sPolicyName + "</a></p></td>", e += "<td><a target='_blank' class='btn btn-default btn-main'   href=\"" + t.stewardD[a].sFile + '">View <img alt="" src="img/icons/sm_download_icon_red.png"></a></td>', e += "</tr>");
            e += "</tbody> </table>", document.getElementById("divStewardship").innerHTML = e
        } else document.getElementById("divStewardship").innerHTML = "No Record Found"
    } catch (t) {}
}

function populateSecurityPolicy(t) {
    try {
        if (0 < t.securityD.length) {
            var e = "";
            e = '<table class="table table-pd"><tbody>';
            for (var a = 0; a < t.securityD.length; a++) "no" == t.securityD[0].sPolicyName || (e += "<tr><td><p><img src='img/icons/pdf.png'>     <a target='_blank' href=\"" + t.securityD[a].sFile + '">' + t.securityD[a].sPolicyName + "</a></p></td>", e += "<td><a target='_blank' class='btn btn-default btn-main'   href=\"" + t.securityD[a].sFile + '">View <img alt="" src="img/icons/sm_download_icon_red.png"></a></td>', e += "</tr>");
            e += "</tbody> </table>", document.getElementById("divSecurity").innerHTML = e
        } else document.getElementById("divSecurity").innerHTML = "No Record Found"
    } catch (t) {}
}

function populateWhistleBlowingPolicy(t) {
    try {
        if (0 < t.whistleD.length) {
            var e = "";
            e = '<table class="table table-pd"><tbody>';
            for (var a = 0; a < t.whistleD.length; a++) "no" == t.whistleD[0].sPolicyName || (e += "<tr><td><p><img src='img/icons/pdf.png'>     <a target='_blank' href=\"" + t.whistleD[a].sFile + '">' + t.whistleD[a].sPolicyName + "</a></p></td>", e += "<td><a target='_blank' class='btn btn-default btn-main'   href=\"" + t.whistleD[a].sFile + '">View <img alt="" src="img/icons/sm_download_icon_red.png"></a></td>', e += "</tr>");
            e += "</tbody> </table>", document.getElementById("divWhistle").innerHTML = e
        } else document.getElementById("divWhistle").innerHTML = "No Record Found"
    } catch (t) {}
}

function populateAntiFraudPolicy(t) {
    try {
        if (0 < t.AntifraudD.length) {
            var e = "";
            e = '<table class="table table-pd"><tbody>';
            for (var a = 0; a < t.AntifraudD.length; a++) "no" == t.AntifraudD[0].sPolicyName || (e += "<tr><td><p><img src='img/icons/pdf.png'>     <a target='_blank' href=\"" + t.AntifraudD[a].sFile + '">' + t.AntifraudD[a].sPolicyName + "</a></p></td>", e += "<td><a target='_blank' class='btn btn-default btn-main'   href=\"" + t.AntifraudD[a].sFile + '">View <img alt="" src="img/icons/sm_download_icon_red.png"></a></td>', e += "</tr>");
            e += "</tbody> </table>", document.getElementById("divAntiFraud").innerHTML = e
        } else document.getElementById("divAntiFraud").innerHTML = "No Record Found"
    } catch (t) {}
}

function populatePubDisc(t) {
    if (0 < t.pubDisD.length) {
        var e = "";
        e = '<table class="table table-pd"><tbody>';
        for (var a = 0; a < t.pubDisD.length; a++) e += "<tr><td><p><img src='img/icons/pdf.png'></i>     <a target='_blank' href=\"" + t.pubDisD[a].sFile + '">' + t.pubDisD[a].sFormName + "</a></p></td>", e += "<td><a class='btn btn-default btn-main' target='_blank'  href=\"" + t.pubDisD[a].sFile + '">View <img alt="" src="img/icons/sm_download_icon_red.png"></a></td>', e += "</tr>";
        e += "</tbody> </table>", document.getElementById("divPubliDisc").innerHTML = e
    } else document.getElementById("divPubliDisc").innerHTML = "No Record Found"
}

function populateAnnuRe(t) {
    try {
        if (0 < t.annuReD.length) {
            var e = "";
            e = '<table class="table table-pd"><tbody>';
            for (var a = 0; a < t.annuReD.length; a++) "no" == t.annuReD[0].sReportName || (e += "<tr><td><p><img src='img/icons/pdf.png'>     <a target='_blank' href=\"" + t.annuReD[a].sFile + '">' + t.annuReD[a].sReportName + "</a></p></td>", e += "<td><a target='_blank' class='btn btn-default btn-main'   href=\"" + t.annuReD[a].sFile + '">View <img alt="" src="img/icons/sm_download_icon_red.png"></a></td>', e += "</tr>");
            e += "</tbody> </table>", document.getElementById("divAnnuRe").innerHTML = e
        } else document.getElementById("divAnnuRe").innerHTML = "No Record Found"
    } catch (t) {}
}

function populateAgmNotice(t) {
    try {
        if (0 < t.agmD.length) {
            var e = "";
            e = '<table class="table table-pd"><tbody>';
            for (var a = 0; a < t.agmD.length; a++) "no" == t.agmD[0].sNoticeName || (e += "<tr><td><p><img src='img/icons/pdf.png'>     <a target='_blank' href=\"" + t.agmD[a].sFile + '">' + t.agmD[a].sNoticeName + "</a></p></td>", e += "<td><a target='_blank' class='btn btn-default btn-main'   href=\"" + t.agmD[a].sFile + '">View <img alt="" src="img/icons/sm_download_icon_red.png"></a></td>', e += "</tr>");
            e += "</tbody> </table>", document.getElementById("divAgm").innerHTML = e
        } else document.getElementById("divAgm").innerHTML = "No Record Found"
    } catch (t) {}
}

function populateEgmNotice(t) {
    try {
        if (0 < t.egmD.length) {
            var e = "";
            e = '<table class="table table-pd"><tbody>';
            for (var a = 0; a < t.egmD.length; a++) "no" == t.egmD[0].sNoticeName || (e += "<tr><td><p><img src='img/icons/pdf.png'>     <a target='_blank' href=\"" + t.egmD[a].sFile + '">' + t.egmD[a].sNoticeName + "</a></p></td>", e += "<td><a target='_blank' class='btn btn-default btn-main'   href=\"" + t.egmD[a].sFile + '">View <img alt="" src="img/icons/sm_download_icon_red.png"></a></td>', e += "</tr>");
            e += "</tbody> </table>", document.getElementById("divEgm").innerHTML = e
        } else document.getElementById("divEgm").innerHTML = "No Record Found"
    } catch (t) {}
}

function allnumeric(t) {
    if (!t.match(/^[0-9]+$/)) return document.getElementById("modal-body-msg").innerHTML = "Please enter valid phone number", $("#callme").modal("show"), isfooterCallMe = !1;
    phoneNumberLength(t)
}

function phoneNumberLength(t) {
    return 10 == t.length || 11 == t.length || 12 == t.length ? (insertCallMeData(t), !0) : (document.getElementById("modal-body-msg").innerHTML = "Please enter valid phone number", $("#callme").modal("show"), isfooterCallMe = !1)
}

function aboutCallMe(t) {
    "" == t ? (document.getElementById("modal-body-msg").innerHTML = "Please enter your contact no", $("#callme").modal("show"), isfooterCallMe = !1) : allnumeric(t)
}

function insertCallMeData(t) {
    var e, a = window.location.href,
        s = "",
        n = 0,
        i = 0,
        o = 0,
        l = 0,
        r = 0;
    isfooterCallMe || (r = $("#txtgetCatPrdt").val()), 0 <= (s = a.toString().replace(dUrl, "")).indexOf("general-insurance/") && (s = s.replace("general-insurance/", ""));
    var d = [],
        c = !1;
    0 <= s.indexOf("retail-products") ? (e = 2) == (d = s.split("/")).length ? i = r : 3 == d.length && (n = r) : 0 <= s.indexOf("commercial-products") ? (e = 3, 2 == (d = s.split("/")).length ? l = r : 3 == d.length && (o = r)) : (e = 1, c = !0), $.ajax({
        url: "/general-insurance/Services/insertData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "insertCallMeDetail",
            sUrl: a,
            sPhoneNo: t,
            objProduct: n,
            objCategory: i,
            objCommercializationCategory: l,
            objCommercializationProduct: o,
            bIsNormalPage: c,
            bIsDirectProductCall: isDirectProductCallme,
            sProduct: ssProduct,
            type: e
        },
        success: function(t) {
            var e;
            e = 0 < t.indexOf("Database error") ? "Try after some time" : "success" == t ? "Will call you soon" : "Try after some time", document.getElementById("modal-body-msg").innerHTML = e, $("#callme").modal("show"), isfooterCallMe ? ($("#exampleInputAmount").val(""), isfooterCallMe = !1) : ($("#txtcallme").val(""), $(".close-menu").trigger("click"))
        },
        error: function(t) {
            //alert("fn insertCallMeData " + t)
        }
    })
}

function getLatLonDetailDisplayGoogleMap(t, e, a, s) {
    smsaddress = t, smsTitle = e;
    var n = "";
    if ("" != a ? n = a.toString().split("")[0] : 0 == a && (n = "0"), "0" != n.toString()) {
        if ("" != t && "" != a.toString()) {
            var i = document.getElementById("map"),
                o = {
                    center: new google.maps.LatLng(a, s),
                    zoom: 17,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                },
                l = new google.maps.Map(i, o);
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(a, s),
                map: l
            });
            var r = new google.maps.InfoWindow({
                content: t,
                maxWidth: 200
            });
            google.maps.event.addListener(marker, "click", function() {
                r.open(l, marker)
            }), r.open(l, marker)
        }
    } else {
        var d = t + ", India";
        l = new google.maps.Map(document.getElementById("map"), {
            zoom: 17
        }), (new google.maps.Geocoder).geocode({
            address: d
        }, function(t, e) {
            if (e == google.maps.GeocoderStatus.OK) {
                new google.maps.Marker({
                    position: t[0].geometry.location,
                    map: l
                }), l.setCenter(t[0].geometry.location);
                var a, s = "";
                a = d.split(",");
                for (var n = 0; n < a.length - 3; n++) 0 == n ? s = a[n] : s += "," + a[n];
                var i = new google.maps.InfoWindow({
                        content: "<b>" + s + "</b>",
                        maxWidth: 200
                    }),
                    o = new google.maps.Marker({
                        position: t[0].geometry.location,
                        map: l,
                        title: s
                    });
                i.open(l, o), google.maps.event.addListener(o, "click", function() {
                    i.open(l, o)
                })
            }
        })
    }
}

function showAddress(t) {
    var e = document.getElementById("map");
    e.clearOverlays(), t && 200 == t.Status.code ? (place = t.Placemark[0], point = new GLatLng(place.Point.coordinates[1], place.Point.coordinates[0]), marker = new GMarker(point), e.addOverlay(marker), marker.openInfoWindowHtml("<b>orig latlng:</b>" + t.name + "<br/><b>latlng:</b>" + place.Point.coordinates[1] + "," + place.Point.coordinates[0] + "<br><b>Status Code:</b>" + t.Status.code + "<br><b>Status Request:</b>" + t.Status.request + "<br><b>Address:</b>" + place.address + "<br><b>Accuracy:</b>" + place.AddressDetails.Accuracy + "<br><b>Country code:</b> " + place.AddressDetails.Country.CountryNameCode)) : //alert("Status Code:" + t.Status.code)
}

function paginingNo(t, e, a, s, n) {
    if (0 < t) {
        var i = t / a;
        i = c = parseInt(i), 0 < t % a && i++;
        var o = 0;
        if (1 == i) return $("#" + n).hide(), !1;
        var l = 0,
            r = "",
            d = "";
        if (s % 2 == 0)
            if (e >= (l = s / 2)) {
                if (1 < (m = e - l)) {
                    var c = i - m;
                    ++c < s && (m -= s - c)
                }
                m <= 0 && (m = 1), r = "<div class='fg-pagination' ><nav><ul class='pagination'>", 1 < e && 1 < e && (r += '<li class="' + d + '" value="' + (c = parseInt(e) - 1) + "\"><a class='pagination-a' href='javascript://'>Prev<<<span class='sr-only'>(current)</span></a></li>");
                for (var p = m; p <= i && o != s; p++) r += '<li class="' + (d = e == p ? "active" : "") + '" value="' + p + "\"><a class='pagination-a' href='javascript://'>" + p + "<span class='sr-only'>(current)</span></a></li>", o++;
                e == i || (r += '<li value="' + (c = parseInt(e) + 1) + "\"><a class='pagination-a' href='javascript://'>Next>><span class='sr-only'>(current)</span></a></li>"), r += "</ul></nav></div>", $("#" + n).html(r), $("#" + n).show()
            } else {
                r = "<div class='fg-pagination' ><nav><ul class='pagination'>";
                var g = 0;
                for (1 < e && (r += '<li class="' + d + '" value="' + (c = parseInt(e) - 1) + "\"><a class='pagination-a' href='javascript://'>Prev<<<span class='sr-only'>(current)</span></a></li>"), p = 0; p < i && o != s; p++) r += '<li class="' + (d = e == (g = p + 1) ? "active" : "") + '" value="' + g + "\"><a class='pagination-a' href='javascript://'>" + g + "<span class='sr-only'>(current)</span></a></li>", o++;
                e == i || (r += '<li value="' + (c = parseInt(e) + 1) + "\"><a class='pagination-a' href='javascript://'>Next>><span class='sr-only'>(current)</span></a></li>"), r += "</ul></nav></div>", $("#" + n).html(r), $("#" + n).show()
            }
        else if (e >= (l = (s - 1) / 2)) {
            var m;
            if (1 < (m = e - l)) {
                c = i - m;
                ++c < s && (m -= s - c)
            }
            for (m <= 0 && (m = 1), r = "<div class='fg-pagination' ><nav><ul class='pagination'>", 1 < e && (r += '<li class="' + d + '" value="' + (c = parseInt(e) - 1) + "\"><a class='pagination-a' href='javascript://'>Prev<<<span class='sr-only'>(current)</span></a></li>"), p = m; p <= i && o != s; p++) r += '<li class="' + (d = e == p ? "active" : "") + '" value="' + p + "\"><a class='pagination-a' href='javascript://'>" + p + "<span class='sr-only'>(current)</span></a></li>", o++;
            e == i || (r += '<li value="' + (c = parseInt(e) + 1) + "\"><a class='pagination-a' href='javascript://'>Next>><span class='sr-only'>(current)</span></a></li>"), r += "</ul></nav></div>", $("#" + n).html(r), $("#" + n).show()
        } else {
            for (r = "<div class='fg-pagination' ><nav><ul class='pagination'>", 1 < e && (r += '<li class="' + d + '" value="' + (c = parseInt(e) - 1) + "\"><a class='pagination-a' href='javascript://'>Prev<<<span class='sr-only'>(current)</span></a></li>"), p = g = 0; p < i && o != s; p++) r += '<li class="' + (d = e == (g = p + 1) ? "active" : "") + '" value="' + g + "\"><a class='pagination-a' href='javascript://'>" + g + "<span class='sr-only'>(current)</span></a></li>", o++;
            e == i || (r += '<li value="' + (c = parseInt(e) + 1) + "\"><a class='pagination-a' href='javascript://'>Next>><span class='sr-only'>(current)</span></a></li>"), r += "</ul></nav></div>", $("#" + n).html(r), $("#" + n).show()
        }
    } else $("#" + n).hide()
}

function PopCityAccStateForLoc(t) {
    var e = document.getElementById("ddlstate").value;
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "populateCityAccToStateLoc",
            stateId: e,
            module: t
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t);
            try {
                var e = $.parseJSON(t);
                $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                for (var a = 0; a < e.clists.length; a++) $("#ddlcity").append($("<option></option>").val("" + e.clists[a].cId).html("" + e.clists[a].cityN))
            } catch (t) {
                $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"))
            }
        },
        error: function(t) {
            //alert("fn PopCityAccState " + t)
        }
    })
}

function fillFaqDropDown(t) {
    $("#ddlproduct").html("");
    var e = "",
        a = 0;
    switch (t.toString()) {
        case "1":
            e += '<optgroup label="Motor FAQ\'s">', e += '<option value="1">Motor</option>', e += "</optgroup>", e += '<optgroup label="Health FAQ\'s">', e += '<option value="179">Health Total</option>', e += '<option value="3">Individual Plan</option>', e += '<option value="4">Family Floater Plan</option>', e += '<option value="5">Personal Accident</option>', e += '<option value="6">Critical Illness</option>', e += '<option value="7">Hospital Cash</option>', e += '<option value="8">Top-Up</option>', e += "</optgroup>", e += '<optgroup label="Travel FAQ\'s">', e += '<option value="180">Schengen and Worldwide</option>', e += '<option value="10">Overseas Travel</option>', e += '<option value="11">Student Travel</option>', e += "</optgroup>", e += '<optgroup label="Home FAQ\'s">', e += '<option value="12">Home</option>', e += "</optgroup>", a = 1;
            break;
        case "2":
            e += '<option value="1001">Policy Related FAQ\'s</option>', e += '<option value="1002">Renewal Related FAQ\'s</option>', e += '<option value="1003">General Information FAQ\'s</option>', e += '<option value="1004">Claim Related FAQ\'s</option>', a = 1001;
            break;
        case "3":
            break;
        case "4":
            e += '<option value="65">Motor Claim FAQ\'s</option>', e += '<option value="66">Travel Claim FAQ\'s</option>', e += '<option value="67">Health Claim FAQ\'s</option>', e += '<option value="68">Personal Accident Claim FAQ\'s</option>', a = 65
    }
    $("#ddlproduct").html(e), getFaq(a)
}

function getFaq(t) {
    var e = $("#ddlservice").val();
    $.ajax({
        url: "/general-insurance/Services/faqs.ashx",
        contentType: "application/json; charset=utf-8",
        type: "Get",
        data: {
            sAction: "getFaqs",
            iFlag: e,
            iFaq: t
        },
        success: function(t) {
            if ("" == t.toString()) $("#divfaqdetails").html("No FAQ's Found");
            else {
                for (var e = $.parseJSON(t), a = "", s = 0; s < e.faqlist.length; s++) a += e.faqlist[s].sHtmlContent;
                $("#divfaqdetails").html(a)
            }
        },
        error: function(t) {}
    })
}

function Sendsms(t) {
    var e = "";
    "" == smsContact ? "" != smsMobile ? (e = "Mobile : " + smsMobile, "" != smsLandline && (e += "%0D%0ALandline : " + smsLandline)) : "" != smsLandline && (e = "Landline : " + smsLandline) : e = "Contact No : " + smsContact, smsDisclaimer = e + (smsDisclaimer = "%0D%0A%0D%0ASent from Future Generali");
    var a = t;
    if (10 == a.length) {
        var s = new XMLHttpRequest;
        s.open("GET", "https://bulkpush.mytoday.com/BulkSms/SingleMsgApi?&feedid=326417&username=9004388957&password=dmtdj&To=" + a + "&Text=" + smsTitle + ",%0D%0A%0D%0A" + smsaddress + "%0D%0A%0D%0A" + smsDisclaimer + "&senderid=FUTGEN&v=1.1&msg_type=TEXT&auth_scheme=PLAIN", !0), s.onreadystatechange = function() {
            4 == s.readyState && JSON.parse(s.responseText).setHeader()
        }, s.send()
    }
}

function populatFaq(t) {
    if (0 < t.faqlist.length) {
        for (var e = "", a = 0; a < t.faqlist.length; a++) e += '<div class="item clearfix">', e += '<span  class="">' + t.faqlist[a].sQuestion + "</span>", e += '<div style="display: none;" class="pane"><p>', e += t.faqlist[a].sAnswer, e += "</p></div></div>";
        $("#divfaqdetails").html(e)
    } else $("#divfaqdetails").html("No FAQ's Found")
}

function fillStateAndCityAndHopitalList() {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        type: "Get",
        data: {
            sAction: "fillStateAndCityAndHopitalList"
        },
        success: function(t) {
            var e = 0;
            if (0 < t.indexOf("Database error")) //alert(t);
            else {
                HospitalJson = $.parseJSON(t), $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state"));
                for (var a = 0; a < HospitalJson.statelist.length; a++) "Yes" == HospitalJson.statelist[a].isSameState && (e = 21), $("#ddlstate").append($("<option></option>").val("" + HospitalJson.statelist[a].sId).html("" + HospitalJson.statelist[a].stateN));
                document.getElementById("ddlstate").value = e, $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                try {
                    for (a = 0; a < HospitalJson.cityList.length; a++) $("#ddlcity").append($("<option></option>").val("" + HospitalJson.cityList[a].cId).html("" + HospitalJson.cityList[a].cityN));
                    document.getElementById("ddlcity").value = 5
                } catch (t) {}
                0 == HospitalJson.NetHosp.length || (populateHospital(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), paginingNo(totHospital, 1, 4, 10, "divPagination"))
            }
        },
        error: function(t) {
            //alert("fn fillStateAndCityAndHopitalList " + t)
        }
    })
}

function fillStateAndCityAndDiagnosticCenters() {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "fillStateAndCityAndDiagnosticCenters"
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t);
            var e = 0;
            if (0 < t.indexOf("%$")) {
                var a;
                a = t.split("%$");
                var s = $.parseJSON(a[0]);
                DiagnoJson = $.parseJSON(a[1]), $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state")), $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                try {
                    for (var n = 0; n < s.statelist.length; n++) s.statelist[n].isSameState, $("#ddlstate").append($("<option></option>").val("" + s.statelist[n].sId).html("" + s.statelist[n].stateN));
                    for (document.getElementById("ddlstate").value = 21, n = 0; n < s.cityList.length; n++) $("#ddlcity").append($("<option></option>").val("" + s.cityList[n].cId).html("" + s.cityList[n].cityN));
                    document.getElementById("ddlcity").value = 5
                } catch (t) {}
                0 == DiagnoJson.DiagnosticList.length || (populateDiagnosticCenters(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), paginingNo(totDiag, 1, 4, 10, "divPagination"))
            } else {
                for (s = $.parseJSON(t), $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state")), n = 0; n < s.statelist.length; n++) "Yes" == s.statelist[n].isSameState && (e = s.statelist[n].sId), $("#ddlstate").append($("<option></option>").val("" + s.statelist[n].sId).html("" + s.statelist[n].stateN));
                document.getElementById("ddlstate").value = e, $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                try {
                    for (n = 0; n < s.cityList.length; n++) $("#ddlcity").append($("<option></option>").val("" + s.cityList[n].cId).html("" + s.cityList[n].cityN))
                } catch (t) {}
            }
        },
        error: function(t) {
            //alert("fn fillStateAndCityAndDiagnosticCenters " + t)
        }
    })
}

function SearchByNetworkHospital(e) {
    var t = $("#HospitalName").val();
    "" == t ? //alert("Please enter hospital name") : $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getHospitalAccPage",
            stateId: 0,
            cityId: 0,
            pageNo: e,
            rowNo: 4,
            hospitalname: t
        },
        success: function(t) {
            if (0 < t.indexOf("Database error") && //alert(t), "" == t) return document.getElementById("idNetHosp").innerHTML = "No Record Found", $("#divPagination").hide(), !1;
            0 == (HospitalJson = $.parseJSON(t)).NetHosp.length || (populateHospital(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), paginingNo(totHospital, e, 4, 10, "divPagination"))
        },
        error: function(t) {
            //alert("fn getHospitalAccPage " + t)
        }
    })
}

function populateHospital() {
    if (0 < HospitalJson.NetHosp.length) {
        for (var t = "", e = 0; e < HospitalJson.NetHosp.length; e++) {
            if (0 == e) {
                var a = HospitalJson.NetHosp[e].sAddress + ", " + HospitalJson.NetHosp[e].cityname + ", " + HospitalJson.NetHosp[e].stateName;
                mapLongitude = HospitalJson.NetHosp[e].fLongitude, mapAddress = a, mapLatitude = HospitalJson.NetHosp[e].fLatitude, totHospital = HospitalJson.NetHosp[e].totNetHosp, smsTitle = HospitalJson.NetHosp[e].sHospitalName
            }
            t += ' <div class="address">', t += '<div class="marker-icon">', t += '<img src="img/icons/map_marker_icon.png" alt=""></div>', t += '<div class="address-holder">';
            var s = HospitalJson.NetHosp[e].sHospitalName;
            t += " <p>" + s + "<br /><span>" + HospitalJson.NetHosp[e].sAddress + "</span></p>", "" != HospitalJson.NetHosp[e].sPhoneNo && (t += '<p><img src="img/icons/phone_sm_icon.png" alt=""> ' + HospitalJson.NetHosp[e].sPhoneNo + "</p>"), "" != HospitalJson.NetHosp[e].sEmailId && (t += '<a href="mailto:' + HospitalJson.NetHosp[e].sEmailId + '"><img src="img/icons/mail_sm_icon.png" alt=""> ' + HospitalJson.NetHosp[e].sEmailId + "</a>"), t += "<br/>", "" != HospitalJson.NetHosp[e].fLatitude && "" != HospitalJson.NetHosp[e].fLongitude ? t += "<div id='mapdetail" + e + "'><a  onclick='getLatLonDetailDisplayGoogleMap(\"" + HospitalJson.NetHosp[e].sAddress + ", " + HospitalJson.NetHosp[e].cityname + ", " + HospitalJson.NetHosp[e].stateName + '","' + HospitalJson.NetHosp[e].sHospitalName + '",' + HospitalJson.NetHosp[e].fLatitude + "," + HospitalJson.NetHosp[e].fLongitude + ')\' class="btn btn-default btn-lg btn-main" href=\'javascript://\'>show on map <i class="fa fa-angle-right"></i></a> ' : t += "<div id='mapdetail" + e + "'><a  onclick='getLatLonDetailDisplayGoogleMap(\"" + HospitalJson.NetHosp[e].sAddress + ", " + HospitalJson.NetHosp[e].cityname + ", " + HospitalJson.NetHosp[e].stateName + '","' + HospitalJson.NetHosp[e].sHospitalName + '","","")\' class="btn btn-default btn-lg btn-main" href=\'javascript://\'>show on map <i class="fa fa-angle-right"></i></a> ', t += "<a b='0'  v=\"" + e + '" c="' + HospitalJson.NetHosp[e].sPhoneNo + '" m="" l="" t="' + HospitalJson.NetHosp[e].sHospitalName.replace(/&/g, "and") + '" a="' + HospitalJson.NetHosp[e].sAddress.replace(/&/g, "and") + "\" id='btnAddn" + e + '\'  class="btn btn-default btn-lg btn-main btnAddrShow" href=\'javascript://\'>SMS Address <i class="fa fa-angle-right"></i></a> ', t += "<span style='display:none;' class='spansms' id='span" + e + '\'><label class="control-label-garage" id="lblcriterName"><br></label>', t += ' <input type="text" maxlength=\'10\' placeholder=\'Enter Mobile No.\' onkeypress="return isNumericKey1(event);"  id="CriteriaName' + e + '" class="form-control">', t += ' <span class="input-group-btn-garage"> <a class="btn btn-default btn-blue cbtnSendSms" id=\'btnshowss' + e + "'  v=\"" + e + "\" href=\"javascript://\">Send</a> </span>  </span> </div><p class='msgAddmap' style='display:none;' id='msgAddmap" + e + "'>The address are sent to your mobile.</p></div>", t += "</div> </div>"
        }
        document.getElementById("idNetHosp").innerHTML = t
    } else document.getElementById("idNetHosp").innerHTML = "No Record Found"
}

function getHospitalAccPage(t, e, a, s) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getHospitalAccPage",
            stateId: t,
            cityId: e,
            pageNo: a,
            rowNo: s
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t), 0 == (HospitalJson = $.parseJSON(t)).NetHosp.length || (populateHospital(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), paginingNo(totHospital, a, s, 10, "divPagination"))
        },
        error: function(t) {
            //alert("fn getHospitalAccPage " + t)
        }
    })
}

function getDiagnosticCentersAccPage(t, e, a, s) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getDiagnosticCentersAccPage",
            stateId: t,
            cityId: e,
            pageNo: a,
            rowNo: s
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t), 0 == (DiagnoJson = $.parseJSON(t)).DiagnosticList.length || (populateDiagnosticCenters(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), paginingNo(totDiag, a, s, 10, "divPagination"))
        },
        error: function(t) {
            //alert("fn getDiagnosticCentersAccPage " + t)
        }
    })
}

function fillStateAndCityAndGarageList() {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        type: "Get",
        data: {
            sAction: "fillStateAndCityAndGarageList"
        },
        success: function(t) {
            if (0 < t.indexOf("Database error")) //alert(t);
            else {
                GarageJson = $.parseJSON(t), $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state"));
                for (var e = 0; e < GarageJson.statelist.length; e++) GarageJson.statelist[e].isSameState, $("#ddlstate").append($("<option></option>").val("" + GarageJson.statelist[e].sId).html("" + GarageJson.statelist[e].stateN));
                document.getElementById("ddlstate").value = 21, $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                try {
                    for (e = 0; e < GarageJson.cityList.length; e++) $("#ddlcity").append($("<option></option>").val("" + GarageJson.cityList[e].cId).html("" + GarageJson.cityList[e].cityN));
                    document.getElementById("ddlcity").value = 5, $("#cityname").hide()
                } catch (t) {}
                0 == GarageJson.GarageList.length || (populateGarage(), paginingNo(totGarage, 1, 4, 10, "divPagination"), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude))
            }
        },
        error: function(t) {
            //alert("fn fillStateAndCityAndGarageList " + t)
        }
    })
}

function populateGarage() {
    if (0 < GarageJson.GarageList.length) {
        for (var t = "", e = 0; e < GarageJson.GarageList.length; e++) {
            0 == e && (mapLongitude = GarageJson.GarageList[e].fLongitude, mapAddress = GarageJson.GarageList[e].sAddress, mapLatitude = GarageJson.GarageList[e].fLatitude, totGarage = GarageJson.GarageList[e].totGarage, smsTitle = GarageJson.GarageList[e].sworkShopName), t += ' <div class="address">', t += '<div class="marker-icon">', t += '<img src="img/icons/map_marker_icon.png" alt=""></div>', t += '<div class="address-holder"><p>', t += GarageJson.GarageList[e].sworkShopName;
            var a = GarageJson.GarageList[e].sAreaLandmark,
                s = "";
            "" != a && (s = "<br /> Landmark: " + a), t += "<br /> <span>" + GarageJson.GarageList[e].sAddress + s + "</span></p>";
            var n = GarageJson.GarageList[e].sLandline,
                i = "";
            "" != n && (i = " <span> Landline:" + n + " </span>"), "" == GarageJson.GarageList[e].sPhoneNo && "" == i || (t += '<p><img src="img/icons/phone_sm_icon.png" alt=""><a style="color: #454545;font-size: 14px;font-weight: 400;" href="tel:' + GarageJson.GarageList[e].sPhoneNo + '">' + GarageJson.GarageList[e].sPhoneNo + '<a style="color: #454545;font-size: 14px;font-weight: 400;" href="tel:' + n + '">' + i + "</p>"), "" != GarageJson.GarageList[e].sEmailId && (t += '<a href="mailto:' + GarageJson.GarageList[e].sEmailId + '"><img src="img/icons/mail_sm_icon.png" alt=""> ' + GarageJson.GarageList[e].sEmailId + "</a>"), t += "<br/>", "" != GarageJson.GarageList[e].fLatitude && GarageJson.GarageList[e].fLongitude && (t += "<div id='mapdetail" + e + "'><a  onclick='getLatLonDetailDisplayGoogleMap(\"" + GarageJson.GarageList[e].sAddress + '","' + GarageJson.GarageList[e].sworkShopName + '",' + GarageJson.GarageList[e].fLatitude + "," + GarageJson.GarageList[e].fLongitude + ')\' class="btn btn-default btn-lg btn-main" href=\'javascript://\'>show on map <i class="fa fa-angle-right"></i></a> '), t += "<a b='0' v=\"" + e + '"  l="' + GarageJson.GarageList[e].sLandline + '"  m="' + GarageJson.GarageList[e].sPhoneNo + '" t="' + GarageJson.GarageList[e].sworkShopName.replace(/&/g, "and") + '" a="' + GarageJson.GarageList[e].sAddress.replace(/&/g, "and") + '" class="btn btn-default btn-lg btn-main btnAddrShow" id=\'btnAddn' + e + "' href='javascript://'>SMS Address <i class=\"fa fa-angle-right\"></i></a> ", t += "<span style='display:none;' class='spansms' id='span" + e + '\'><label class="control-label-garage" id="lblcriterName"><br></label>', t += ' <input type="text"  maxlength=\'10\' placeholder=\'Enter Mobile No.\' onkeypress="return isNumericKey1(event);"  id="CriteriaName' + e + '" class="form-control">', t += ' <span class="input-group-btn-garage"> <a id=\'btnshowss' + e + '\' class="btn btn-default btn-blue cbtnSendSms" v="' + e + "\" href=\"javascript://\">Send</a> </span> </span></div><p class='msgAddmap' style='display:none;' id='msgAddmap" + e + "'>The address are sent to your mobile.</p></div>", t += "</div> </div>"
        }
        document.getElementById("idGarageList").innerHTML = t
    } else document.getElementById("idGarageList").innerHTML = "No Record Found"
}

function getGarageAccPage(t, e, a, s) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getGarageAccPage",
            stateId: t,
            cityId: e,
            pageNo: a,
            rowNo: s
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t), 0 == (GarageJson = $.parseJSON(t)).GarageList.length ? (document.getElementById("idGarageList").innerHTML = "No Record Found", $("#divPagination").hide()) : (populateGarage(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), $("#divPagination").show(), paginingNo(totGarage, a, s, 10, "divPagination"))
        },
        error: function(t) {
            //alert("fn getGarageAccPage " + t)
        }
    })
}

function getGarageBaseOnMakeAndShopName(t, e, a, s, n, i) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getGarageBaseOnMakeAndShopName",
            workshopName: t,
            MakeName: e,
            pageNo: a,
            rowNo: s,
            stateId: n,
            cityId: i
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t), 0 == (GarageJson = $.parseJSON(t)).GarageList.length ? (document.getElementById("idGarageList").innerHTML = "No Record Found", $("#divPagination").hide()) : (populateGarage(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), $("#divPagination").show(), paginingNo(totGarage, a, s, 10, "divPagination"), backtotoppage())
        },
        error: function(t) {
            //alert("fn getGarageAccPage " + t)
        }
    })
}

function populateIndiAgentCityAndState() {
    $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state"));
    for (var t = 0; t < onLoadAgentJson.indstatelist.length; t++) "Yes" == onLoadAgentJson.indstatelist[t].isSameState && (stateId = onLoadAgentJson.indstatelist[t].sId), $("#ddlstate").append($("<option></option>").val("" + onLoadAgentJson.indstatelist[t].sId).html("" + onLoadAgentJson.indstatelist[t].stateN));
    document.getElementById("ddlstate").value = 0, $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
    try {
        for (t = 0; t < onLoadAgentJson.indcityList.length; t++) $("#ddlcity").append($("<option></option>").val("" + onLoadAgentJson.indcityList[t].cId).html("" + onLoadAgentJson.indcityList[t].cityN));
        document.getElementById("ddlcity").value = 0
    } catch (t) {}
}

function PopCityAccStateForAgent() {
    var t = document.getElementById("ddlstate").value;
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "populateCityAccToStateAgent",
            stateId: t,
            iagnType: iagnType
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t);
            try {
                var e = $.parseJSON(t);
                $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                for (var a = 0; a < e.clists.length; a++) $("#ddlcity").append($("<option></option>").val("" + e.clists[a].cId).html("" + e.clists[a].cityN))
            } catch (t) {
                $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"))
            }
        },
        error: function(t) {
            //alert("fn PopCityAccState " + t)
        }
    })
}

function populateCorAgentCityAndState() {
    $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state"));
    for (var t = 0; t < onLoadAgentJson.corpstatelist.length && (0 != t || "no" != onLoadAgentJson.corpstatelist[0].isData); t++) "Yes" == onLoadAgentJson.corpstatelist[t].isSameState && (stateId = onLoadAgentJson.corpstatelist[t].sId), $("#ddlstate").append($("<option></option>").val("" + onLoadAgentJson.corpstatelist[t].sId).html("" + onLoadAgentJson.corpstatelist[t].stateN));
    document.getElementById("ddlstate").value = 29, $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
    try {
        for (t = 0; t < onLoadAgentJson.corpcityList.length && (0 != t || "no" != onLoadAgentJson.corpcityList[0].isData); t++) $("#ddlcity").append($("<option></option>").val("" + onLoadAgentJson.corpcityList[t].cId).html("" + onLoadAgentJson.corpcityList[t].cityN));
        document.getElementById("ddlcity").value = 1
    } catch (t) {}
}

function populateDiagnosticCenters() {
    if (0 < DiagnoJson.DiagnosticList.length) {
        for (var t = "", e = 0; e < DiagnoJson.DiagnosticList.length; e++) {
            if (0 == e) {
                var a = DiagnoJson.DiagnosticList[e].sAddress + ", " + DiagnoJson.DiagnosticList[e].cityname + ", " + DiagnoJson.DiagnosticList[e].stateName;
                mapLongitude = DiagnoJson.DiagnosticList[e].fLongitude, mapAddress = a, mapLatitude = DiagnoJson.DiagnosticList[e].fLatitude, totDiag = DiagnoJson.DiagnosticList[e].totDiag, smsTitle = "Future Generali"
            }
            t += ' <div class="address">', t += '<div class="marker-icon">', t += '<img src="img/icons/map_marker_icon.png" alt=""></div>', t += '<div class="address-holder">';
            var s = DiagnoJson.DiagnosticList[e].sDiagnosticCentresName;
            t += " <p>" + s + "<br /><span>" + DiagnoJson.DiagnosticList[e].sAddress + "</span><br /><span>" + DiagnoJson.DiagnosticList[e].sPincode + "</span></p>", "" != DiagnoJson.DiagnosticList[e].sPhoneNo && (t += '<p><img src="img/icons/phone_sm_icon.png" alt=""> ' + DiagnoJson.DiagnosticList[e].sPhoneNo + "</p>"), "" != DiagnoJson.DiagnosticList[e].sEmailId && (t += '<a href="mailto:' + DiagnoJson.DiagnosticList[e].sEmailId + '"><img src="img/icons/mail_sm_icon.png" alt=""> ' + DiagnoJson.DiagnosticList[e].sEmailId + "</a>"), t += "<br/>", "" != DiagnoJson.DiagnosticList[e].fLatitude && "" != DiagnoJson.DiagnosticList[e].fLongitude ? (t += "<div id='mapdetail" + e + "'><a  onclick='getLatLonDetailDisplayGoogleMap(\"" + DiagnoJson.DiagnosticList[e].sAddress + ", " + DiagnoJson.DiagnosticList[e].cityname + ", " + DiagnoJson.DiagnosticList[e].stateName + '","' + DiagnoJson.DiagnosticList[e].sDiagnosticCentresName + '",' + DiagnoJson.DiagnosticList[e].fLatitude + "," + DiagnoJson.DiagnosticList[e].fLongitude + ')\' class="btn btn-default btn-lg btn-main" href=\'javascript://\'>show on map <i class="fa fa-angle-right"></i></a> ', t += "<a b='0'  v=\"" + e + '" c="' + DiagnoJson.DiagnosticList[e].sPhoneNo + '" m="" l="" t="' + DiagnoJson.DiagnosticList[e].sDiagnosticCentresName.replace(/&/g, "and") + '" a="' + DiagnoJson.DiagnosticList[e].sAddress.replace(/&/g, "and") + "\" id='btnAddn" + e + '\'  class="btn btn-default btn-lg btn-main btnAddrShow" href=\'javascript://\'>SMS Address <i class="fa fa-angle-right"></i></a> ', t += "<span style='display:none;' class='spansms' id='span" + e + '\'><label class="control-label-garage" id="lblcriterName"><br></label>', t += ' <input type="text" maxlength=\'10\' placeholder=\'Enter Mobile No.\' onkeypress="return isNumericKey1(event);"  id="CriteriaName' + e + '" class="form-control">', t += ' <span class="input-group-btn-garage"> <a class="btn btn-default btn-blue cbtnSendSms" id=\'btnshowss' + e + "'  v=\"" + e + "\" href=\"javascript://\">Send</a> </span>  </span> </div><p class='msgAddmap' style='display:none;' id='msgAddmap" + e + "'>The address are sent to your mobile.</p></div>") : (t += "<div id='mapdetail" + e + "'><a  onclick='getLatLonDetailDisplayGoogleMap(\"" + DiagnoJson.DiagnosticList[e].sAddress + ", " + DiagnoJson.DiagnosticList[e].cityname + ", " + DiagnoJson.DiagnosticList[e].stateName + '","Future Generali",,)\' class="btn btn-default btn-lg btn-main" href=\'javascript://\'>show on map <i class="fa fa-angle-right"></i></a> ', t += "<a b='0' v=\"" + e + '" l="' + DiagnoJson.DiagnosticList[e].sPhoneNo + '" m="" t="Future Generali" a="' + DiagnoJson.DiagnosticList[e].sAddress.replace(/&/g, "and") + '" class="btn btn-default btn-lg btn-main btnAddrShow" id=\'btnAddn' + e + "' href='javascript://'>SMS Address <i class=\"fa fa-angle-right\"></i></a> ", t += "<span style='display:none;' class='spansms' id='span" + e + '\'><label class="control-label-garage" id="lblcriterName"><br></label>', t += ' <input type="text" maxlength=\'10\' placeholder=\'Enter Mobile No.\' onkeypress="return isNumericKey1(event);" id="CriteriaName' + e + '" class="form-control">', t += ' <span class="input-group-btn-garage"> <a class="btn btn-default btn-blue cbtnSendSms" id=\'btnshowss' + e + "' v=\"" + e + "\" href=\"javascript://\">Send</a> </span> </span></div><p class='msgAddmap' style='display:none;' id='msgAddmap" + e + "'>The address are sent to your mobile.</p></div>"), t += "</div> </div>"
        }
        document.getElementById("idDiagnosticCenters").innerHTML = t
    } else document.getElementById("idDiagnosticCenters").innerHTML = "No Record Found"
}

function fillStateAndCityAndSuspectedFraud() {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "fillStateAndCityAndSuspectedFraud"
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t);
            var e = 0;
            if (0 < t.indexOf("%$")) {
                var a;
                a = t.split("%$");
                var s = $.parseJSON(a[0]);
                SuspectJson = $.parseJSON(a[1]), $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state")), $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                try {
                    for (var n = 0; n < s.statelist.length; n++) s.statelist[n].isSameState, $("#ddlstate").append($("<option></option>").val("" + s.statelist[n].sId).html("" + s.statelist[n].stateN));
                    for (document.getElementById("ddlstate").value = 21, n = 0; n < s.cityList.length; n++) $("#ddlcity").append($("<option></option>").val("" + s.cityList[n].cId).html("" + s.cityList[n].cityN));
                    document.getElementById("ddlcity").value = 5
                } catch (t) {}
                0 == SuspectJson.SuspectedList.length || (populateSuspectedFraud(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), paginingNo(totSus, 1, 4, 10, "divPagination"))
            } else {
                for (s = $.parseJSON(t), $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state")), n = 0; n < s.statelist.length; n++) "Yes" == s.statelist[n].isSameState && (e = s.statelist[n].sId), $("#ddlstate").append($("<option></option>").val("" + s.statelist[n].sId).html("" + s.statelist[n].stateN));
                document.getElementById("ddlstate").value = e, $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                try {
                    for (n = 0; n < s.cityList.length; n++) $("#ddlcity").append($("<option></option>").val("" + s.cityList[n].cId).html("" + s.cityList[n].cityN))
                } catch (t) {}
            }
        },
        error: function(t) {
            //alert("fn fillStateAndCityAndSuspectedFraud " + t)
        }
    })
}

function getSuspectedFraudAccPage(t, e, a, s) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getSuspectedFraudAccPage",
            stateId: t,
            cityId: e,
            pageNo: a,
            rowNo: s
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t), SuspectJson = $.parseJSON(t), 0 == SuspectJson.SuspectedList.length || (populateSuspectedFraud(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), paginingNo(totSus, a, s, 10, "divPagination"))
        },
        error: function(t) {
            //alert("fn getSuspectedFraudAccPage " + t)
        }
    })
}

function populateSuspectedFraud() {
    if (0 < SuspectJson.SuspectedList.length) {
        for (var t = "", e = 0; e < SuspectJson.SuspectedList.length; e++) {
            if (0 == e) {
                var a = SuspectJson.SuspectedList[e].sAddress + ", " + SuspectJson.SuspectedList[e].cityname + ", " + SuspectJson.SuspectedList[e].stateName;
                mapLongitude = SuspectJson.SuspectedList[e].fLongitude, mapAddress = a, mapLatitude = SuspectJson.SuspectedList[e].fLatitude, totSus = SuspectJson.SuspectedList[e].totSus, smsTitle = "Future Generali"
            }
            t += ' <div class="address">', t += '<div class="marker-icon">', t += '<img src="img/icons/map_marker_icon.png" alt=""></div>', t += '<div class="address-holder">';
            var s = SuspectJson.SuspectedList[e].Hospital;
            t += " <p>" + s + "<br /><span>" + SuspectJson.SuspectedList[e].sAddress + "</span><br /><span>" + SuspectJson.SuspectedList[e].sPincode + "</span></p>", "" != SuspectJson.SuspectedList[e].sPhoneNo && (t += '<p><img src="img/icons/phone_sm_icon.png" alt=""> ' + SuspectJson.SuspectedList[e].sPhoneNo + "</p>"), "" != SuspectJson.SuspectedList[e].sEmailId && (t += '<a href="mailto:' + SuspectJson.SuspectedList[e].sEmailId + '"><img src="img/icons/mail_sm_icon.png" alt=""> ' + SuspectJson.SuspectedList[e].sEmailId + "</a>"), t += "<br/>", "" != SuspectJson.SuspectedList[e].fLatitude && "" != SuspectJson.SuspectedList[e].fLongitude ? (t += "<div id='mapdetail" + e + "'><a  onclick='getLatLonDetailDisplayGoogleMap(\"" + SuspectJson.SuspectedList[e].sAddress + ", " + SuspectJson.SuspectedList[e].cityname + ", " + SuspectJson.SuspectedList[e].stateName + '","' + SuspectJson.SuspectedList[e].Hospital + '",' + SuspectJson.SuspectedList[e].fLatitude + "," + SuspectJson.SuspectedList[e].fLongitude + ')\' class="btn btn-default btn-lg btn-main" href=\'javascript://\'>show on map <i class="fa fa-angle-right"></i></a> ', t += "<a b='0'  v=\"" + e + '" c="' + SuspectJson.SuspectedList[e].sPhoneNo + '" m="" l="" t="' + SuspectJson.SuspectedList[e].Hospital.replace(/&/g, "and") + '" a="' + SuspectJson.SuspectedList[e].sAddress.replace(/&/g, "and") + "\" id='btnAddn" + e + '\'  class="btn btn-default btn-lg btn-main btnAddrShow" href=\'javascript://\'>SMS Address <i class="fa fa-angle-right"></i></a> ', t += "<span style='display:none;' class='spansms' id='span" + e + '\'><label class="control-label-garage" id="lblcriterName"><br></label>', t += ' <input type="text" maxlength=\'10\' placeholder=\'Enter Mobile No.\' onkeypress="return isNumericKey1(event);"  id="CriteriaName' + e + '" class="form-control">', t += ' <span class="input-group-btn-garage"> <a class="btn btn-default btn-blue cbtnSendSms" id=\'btnshowss' + e + "'  v=\"" + e + "\" href=\"javascript://\">Send</a> </span>  </span> </div><p class='msgAddmap' style='display:none;' id='msgAddmap" + e + "'>The address are sent to your mobile.</p></div>") : (t += "<div id='mapdetail" + e + "'><a  onclick='getLatLonDetailDisplayGoogleMap(\"" + SuspectJson.SuspectedList[e].sAddress + ", " + SuspectJson.SuspectedList[e].cityname + ", " + SuspectJson.SuspectedList[e].stateName + '","Future Generali",,)\' class="btn btn-default btn-lg btn-main" href=\'javascript://\'>show on map <i class="fa fa-angle-right"></i></a> ', t += "<a b='0' v=\"" + e + '" l="' + SuspectJson.SuspectedList[e].sPhoneNo + '" m="" t="Future Generali" a="' + SuspectJson.SuspectedList[e].sAddress.replace(/&/g, "and") + '" class="btn btn-default btn-lg btn-main btnAddrShow" id=\'btnAddn' + e + "' href='javascript://'>SMS Address <i class=\"fa fa-angle-right\"></i></a> ", t += "<span style='display:none;' class='spansms' id='span" + e + '\'><label class="control-label-garage" id="lblcriterName"><br></label>', t += ' <input type="text" maxlength=\'10\' placeholder=\'Enter Mobile No.\' onkeypress="return isNumericKey1(event);" id="CriteriaName' + e + '" class="form-control">', t += ' <span class="input-group-btn-garage"> <a class="btn btn-default btn-blue cbtnSendSms" id=\'btnshowss' + e + "' v=\"" + e + "\" href=\"javascript://\">Send</a> </span> </span></div><p class='msgAddmap' style='display:none;' id='msgAddmap" + e + "'>The address are sent to your mobile.</p></div>"), t += "</div> </div>"
        }
        document.getElementById("idNetHosp").innerHTML = t
    } else document.getElementById("idNetHosp").innerHTML = "No Record Found"
}

function fillStateAndCityAndBLHospitals() {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "fillStateAndCityAndBLHospitals"
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t);
            var e = 0;
            if (0 < t.indexOf("%$")) {
                var a;
                a = t.split("%$");
                var s = $.parseJSON(a[0]);
                BLHJson = $.parseJSON(a[1]), $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state")), $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                try {
                    for (var n = 0; n < s.statelist.length; n++) s.statelist[n].isSameState, $("#ddlstate").append($("<option></option>").val("" + s.statelist[n].sId).html("" + s.statelist[n].stateN));
                    for (document.getElementById("ddlstate").value = 21, n = 0; n < s.cityList.length; n++) $("#ddlcity").append($("<option></option>").val("" + s.cityList[n].cId).html("" + s.cityList[n].cityN));
                    document.getElementById("ddlcity").value = 5
                } catch (t) {}
                0 == BLHJson.BLHList.length || (populateBLHospitals(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), paginingNo(totBLH, 1, 4, 10, "divPagination"))
            } else {
                for (s = $.parseJSON(t), $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state")), n = 0; n < s.statelist.length; n++) "Yes" == s.statelist[n].isSameState && (e = s.statelist[n].sId), $("#ddlstate").append($("<option></option>").val("" + s.statelist[n].sId).html("" + s.statelist[n].stateN));
                document.getElementById("ddlstate").value = e, $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                try {
                    for (n = 0; n < s.cityList.length; n++) $("#ddlcity").append($("<option></option>").val("" + s.cityList[n].cId).html("" + s.cityList[n].cityN))
                } catch (t) {}
            }
        },
        error: function(t) {
            //alert("fn fillStateAndCityAndBLHospitals " + t)
        }
    })
}

function getBLHospitalsAccPage(t, e, a, s) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getBLHospitalsAccPage",
            stateId: t,
            cityId: e,
            pageNo: a,
            rowNo: s
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t), 0 == (BLHJson = $.parseJSON(t)).BLHList.length || (populateBLHospitals(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), paginingNo(totBLH, a, s, 10, "divPagination"))
        },
        error: function(t) {
            //alert("fn getBLHospitalsAccPage" + t)
        }
    })
}

function populateBLHospitals() {
    if (0 < BLHJson.BLHList.length) {
        for (var t = "", e = 0; e < BLHJson.BLHList.length; e++) {
            if (0 == e) {
                var a = BLHJson.BLHList[e].sAddress + ", " + BLHJson.BLHList[e].cityname + ", " + BLHJson.BLHList[e].stateName;
                mapLongitude = BLHJson.BLHList[e].fLongitude, mapAddress = a, mapLatitude = BLHJson.BLHList[e].fLatitude, totBLH = BLHJson.BLHList[e].totBLH, smsTitle = "Future Generali"
            }
            t += ' <div class="address">', t += '<div class="marker-icon">', t += '<img src="img/icons/map_marker_icon.png" alt=""></div>', t += '<div class="address-holder">';
            var s = BLHJson.BLHList[e].sHospitalName;
            t += " <p>" + s + "<br /><span>" + BLHJson.BLHList[e].sAddress + "</span><br /><span>" + BLHJson.BLHList[e].sPincode + "</span></p>", "" != BLHJson.BLHList[e].sPhoneNo && (t += '<p><img src="img/icons/phone_sm_icon.png" alt=""> ' + BLHJson.BLHList[e].sPhoneNo + "</p>"), "" != BLHJson.BLHList[e].sEmailId && (t += '<a href="mailto:' + BLHJson.BLHList[e].sEmailId + '"><img src="img/icons/mail_sm_icon.png" alt=""> ' + BLHJson.BLHList[e].sEmailId + "</a>"), t += "<br/>", "" != BLHJson.BLHList[e].fLatitude && "" != BLHJson.BLHList[e].fLongitude ? (t += "<div id='mapdetail" + e + "'><a  onclick='getLatLonDetailDisplayGoogleMap(\"" + BLHJson.BLHList[e].sAddress + ", " + BLHJson.BLHList[e].cityname + ", " + BLHJson.BLHList[e].stateName + '","' + BLHJson.BLHList[e].sHospitalName + '",' + BLHJson.BLHList[e].fLatitude + "," + BLHJson.BLHList[e].fLongitude + ')\' class="btn btn-default btn-lg btn-main" href=\'javascript://\'>show on map <i class="fa fa-angle-right"></i></a> ', t += "<a b='0'  v=\"" + e + '" c="' + BLHJson.BLHList[e].sPhoneNo + '" m="" l="" t="' + BLHJson.BLHList[e].sHospitalName.replace(/&/g, "and") + '" a="' + BLHJson.BLHList[e].sAddress.replace(/&/g, "and") + "\" id='btnAddn" + e + '\'  class="btn btn-default btn-lg btn-main btnAddrShow" href=\'javascript://\'>SMS Address <i class="fa fa-angle-right"></i></a> ', t += "<span style='display:none;' class='spansms' id='span" + e + '\'><label class="control-label-garage" id="lblcriterName"><br></label>', t += ' <input type="text" maxlength=\'10\' placeholder=\'Enter Mobile No.\' onkeypress="return isNumericKey1(event);"  id="CriteriaName' + e + '" class="form-control">', t += ' <span class="input-group-btn-garage"> <a class="btn btn-default btn-blue cbtnSendSms" id=\'btnshowss' + e + "'  v=\"" + e + "\" href=\"javascript://\">Send</a> </span>  </span> </div><p class='msgAddmap' style='display:none;' id='msgAddmap" + e + "'>The address are sent to your mobile.</p></div>") : (t += "<div id='mapdetail" + e + "'><a  onclick='getLatLonDetailDisplayGoogleMap(\"" + BLHJson.BLHList[e].sAddress + ", " + BLHJson.BLHList[e].cityname + ", " + BLHJson.BLHList[e].stateName + '","Future Generali",,)\' class="btn btn-default btn-lg btn-main" href=\'javascript://\'>show on map <i class="fa fa-angle-right"></i></a> ', t += "<a b='0' v=\"" + e + '" l="' + BLHJson.BLHList[e].sPhoneNo + '" m="" t="Future Generali" a="' + BLHJson.BLHList[e].sAddress.replace(/&/g, "and") + '" class="btn btn-default btn-lg btn-main btnAddrShow" id=\'btnAddn' + e + "' href='javascript://'>SMS Address <i class=\"fa fa-angle-right\"></i></a> ", t += "<span style='display:none;' class='spansms' id='span" + e + '\'><label class="control-label-garage" id="lblcriterName"><br></label>', t += ' <input type="text" maxlength=\'10\' placeholder=\'Enter Mobile No.\' onkeypress="return isNumericKey1(event);" id="CriteriaName' + e + '" class="form-control">', t += ' <span class="input-group-btn-garage"> <a class="btn btn-default btn-blue cbtnSendSms" id=\'btnshowss' + e + "' v=\"" + e + "\" href=\"javascript://\">Send</a> </span> </span></div><p class='msgAddmap' style='display:none;' id='msgAddmap" + e + "'>The address are sent to your mobile.</p></div>"), t += "</div> </div>"
        }
        document.getElementById("idNetHosp").innerHTML = t
    } else document.getElementById("idNetHosp").innerHTML = "No Record Found"
}

function populateCorAgentName() {
    $("#ddlCorAgent").empty().append($("<option></option>").val("0").html("Please select corporate agent name"));
    for (var t = 0; t < onLoadAgentJson.corAgenName.length && (0 != t || "no" != onLoadAgentJson.corAgenName[0].isData); t++) $("#ddlCorAgent").append($("<option></option>").val("" + onLoadAgentJson.corAgenName[t].corAgenName).html("" + onLoadAgentJson.corAgenName[t].corAgenName))
}

function populateIndividualAgent(t) {
    if (0 < t.InvAgentList.length) {
        for (var e = "", a = 0, s = 0; s < t.InvAgentList.length; s++) {
            if (0 == s) {
                if (totInvAgentCount = t.InvAgentList[s].totIndAgen, "no" == (n = t.InvAgentList[s].isData)) break;
                0 < $("#ddlcity").val() && ($("#divCorDisplay1").hide(), $("#divInvDisplay1").show())
            }
            if (a < 6) {
                var n = '<tbody><tr><th class="agent-heading">Name of the Agent</th><td class="agent-heading"><strong>' + t.InvAgentList[s].sAgentName + "</strong></td></tr>";
                n += t.InvAgentList[s].sIRDALicenseno + "</td></tr>", n += "<tr><th>Insurer Agent Code</th><td><strong>" + t.InvAgentList[s].sInsurerAgentCode + "</strong></td></tr>", n += "<tr><th>City</td><td>" + t.InvAgentList[s].city + "</td></tr>", n += "<tr><th>District</th><td>" + t.InvAgentList[s].sDistrict + "</td></tr>", n += "<tr><th>Pin Code</th><td>" + t.InvAgentList[s].sPincode + "</td></tr>", n += "<tr><th>Branch to which agent is associated</th><td><strong>" + t.InvAgentList[s].sInsurersBranchAssociatedtoAgent + "</strong></td></tr>", n += "<tr><th>Composite (Y/N)</th><td>" + t.InvAgentList[s].comStatus + "</td></tr>", n += "<tr><th>If Composite, Name of Insurer</th><td>" + t.InvAgentList[s].sCompositeNameOfOtherInsurer + "</td></tr>", n += "<tr><th>License Issued on</th><td>" + t.InvAgentList[s].issuedon + "</td></tr>", n += "<tr><th>License Valid from</th><td>" + t.InvAgentList[s].validfrom + "</td></tr>", n += "<tr><th>Pan Number</th><td>" + t.InvAgentList[s].sPanNo + "</td></tr>", n += "</tbody>", e += ' <div class="address">', e += '<div class="address-holder">', e += '<div class="row">', e += '<div class="col-md-10 col-sm-10 col-xs-12">', e += "<p>Agent  Name: " + t.InvAgentList[s].sAgentName + "<br/> City: " + t.InvAgentList[s].city + "<br />", t.InvAgentList[s].sIRDALicenseno, e += " Insurance Agent Code: " + t.InvAgentList[s].sInsurerAgentCode, e += "<br /> Associated Branch: " + t.InvAgentList[s].sInsurersBranchAssociatedtoAgent, e += "</span></p> </div><div class=\"col-md-2 col-sm-2 col-xs-12\"><p><a class='aprof'href='javascript://' v='" + n + "' >", e += "<span class='profile'><i title='View Profile' class='fa fa-user'></i> <br/></span></a></p>", e += "</div></div></div></div>", a++
            } else t.InvAgentList[s].sAgentName, t.InvAgentList[s].sAddress, "" != t.InvAgentList[s].sPhoneNo && t.InvAgentList[s].sPhoneNo, "" != t.InvAgentList[s].sEmailId && (t.InvAgentList[s].sEmailId, t.InvAgentList[s].sEmailId)
        }
        document.getElementById("divInvDisplaysss").innerHTML = e, $("#tblProfile").hide(), $(".Left-update").hide()
    } else document.getElementById("divInvDisplaysss").innerHTML = "No Record Found", document.getElementById("tblProfile").innerHTML = "", $(".Left-update").hide()
}

function populateCorpAgent(t) {
    if (0 < t.CorpAgentList.length) {
        for (var e = "", a = !1, s = 0, n = 0; n < t.CorpAgentList.length; n++) {
            if (0 == n) {
                if (totCorpAgentCount = t.CorpAgentList[n].totCorpAgen, "no" == (e = t.CorpAgentList[n].isData)) break;
                0 != $("#ddlCorAgent").val() ? ($("#divCorDisplay1").show(), $("#divInvDisplay1").hide()) : a = !0
            }
            s < 6 ? (e = '<tbody><tr><th class="agent-heading">Name of the Corporate Agent</th><td class="agent-heading"><strong  style=\'text-transform: uppercase;\'>' + t.CorpAgentList[n].sCorporateAgentName + "</strong></th></tr>", e += "<tr><th>COR Number</th><td>" + t.CorpAgentList[n].sIRDALicenseno + "</td></tr>", e += "<tr><th>Agent Code</th><td>" + t.CorpAgentList[n].sInsurerAgentCode + "</td></tr>", e += "<tr><th>Name of CIE/PO</th><td>" + t.CorpAgentList[n].sChiefInsuranceExecutive + "</td></tr>", e += "<tr><th>Contact Number</th><td>" + t.CorpAgentList[n].sPhoneNo + "</td></tr>", e += "<tr><th>Address</th><td>" + t.CorpAgentList[n].sAddress + "</td></tr>", e += "<tr><th>State</td><td>" + t.CorpAgentList[n].state + "</td></tr>", e += "<tr><th>City</td><td>" + t.CorpAgentList[n].city + "</td></tr>", e += "<tr><th>Pin Code</th><td>" + t.CorpAgentList[n].sPincode + "</td></tr>", e += "<tr><th>Nature of Agent</td><td>" + t.CorpAgentList[n].sCompositeNameOfOtherInsurer + "</td></tr>", e += "<tr><th>CoR Valid From</th><td>" + t.CorpAgentList[n].validfrom + "</td></tr>", e += "<tr><th>CoR Valid To</th><td>" + t.CorpAgentList[n].validto + "</td></tr>", s++) : (t.CorpAgentList[n].sAddress, "" != t.CorpAgentList[n].sPhoneNo && t.CorpAgentList[n].sPhoneNo, "" != t.CorpAgentList[n].sEmailId && (t.CorpAgentList[n].sEmailId, t.CorpAgentList[n].sEmailId))
        }
        a || ($("#tblcorAg").html(e), $("#tblcorAg").show(), $(".Left-update").show(), $(".tblacor").trigger("click"))
    } else $("#tblcorAg").html("<tr><td>No Record Found</td></tr>"), $("#tblcorAg").show(), $(".Left-update").show()
}

function getAgentAccFilter(t, e, a, s, n) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getAgentAccFilter",
            stateId: t,
            cityId: e,
            pageNo: a,
            rowNo: s,
            iAgentType: n
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t);
            var e = $.parseJSON(t);
            1 == n ? 0 == e.InvAgentList.length ? (document.getElementById("divLeftSideInvAgent").innerHTML = "", document.getElementById("divRightSideInvAgent").innerHTML = "", $("#divInvAgentPagination").hide()) : (populateIndividualAgent(e), paginingNo(totInvAgentCount, a, s, 10, "divInvAgentPagination")) : 0 == e.CorpAgentList.length ? (document.getElementById("divLeftSideCorpAgent").innerHTML = "", document.getElementById("divRightSideCorpAgent").innerHTML = "", $("#divCorpAgentPagination").hide()) : (populateCorpAgent(e), paginingNo(totCorpAgentCount, a, s, 10, "divCorpAgentPagination"))
        },
        error: function(t) {
            //alert("fn getBranchAccPage " + t)
        }
    })
}

function getAgentBaseOnSearch(t, e, a, s, n, i, o, l) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getAgentBaseOnSearch",
            stateId: t,
            cityId: e,
            pageNo: a,
            rowNo: s,
            iAgentType: n,
            agentName: i,
            corAgentName: o,
            agentCode: l
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t);
            var e = $.parseJSON(t);
            1 == n ? 0 == e.InvAgentList.length ? (document.getElementById("divInvDisplaysss").innerHTML = "No Result Found", $("#tblProfile").hide(), $(".Left-update").hide(), $("#divInvAgentPagination").hide()) : (populateIndividualAgent(e), paginingNo(totInvAgentCount, a, s, 10, "divInvAgentPagination"), $("#divShowInvAge").show()) : 0 == e.CorpAgentList.length ? (document.getElementById("divLeftSideCorpAgent").innerHTML = "", document.getElementById("divRightSideCorpAgent").innerHTML = "", $("#divCorpAgentPagination").hide()) : (populateCorpAgent(e), paginingNo(totCorpAgentCount, a, s, 10, "divCorpAgentPagination"))
        },
        error: function(t) {
            //alert("fn getBranchAccPage " + t)
        }
    })
}

function fillSecurityAndStewardshipPolicy() {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "fillSecurityAndStewardshipPolicy",
            isFirstime: !0
        },
        success: function(t) {
            var e, a = (e = window.location.href.toString().split("/"))[e.length - 1];
            0 < t.indexOf("Database error") && //alert(t), SecurityJson = $.parseJSON(t), "information-and-cyber-security-policy" == a && (populateSecurityPolicy(SecurityJson), $("#tabs-1").show(), $("#tabs-2").hide(), $("#tabs-3").hide(), $("#tabs-4").hide()), "stewardship-policy" == a && (populatestewardshipPolicy(SecurityJson), $("#tabs-1").hide(), $("#tabs-2").show(), $("#tabs-3").hide(), $("#tabs-4").hide()), "whistle-blower-policy" == a && (populateWhistleBlowingPolicy(SecurityJson), $("#tabs-1").hide(), $("#tabs-2").hide(), $("#tabs-3").show(), $("#tabs-4").hide()), "anti-fraud-policy" == a && (populateAntiFraudPolicy(SecurityJson), $("#tabs-1").hide(), $("#tabs-2").hide(), $("#tabs-3").hide(), $("#tabs-4").show())
        },
        error: function(t) {
            //alert("fn fillSecurityAndStewardshipPolicy " + t)
        }
    })
}

function fillStateAndCityAndBranch() {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "fillStateAndCityAndBranch"
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t);
            var e = 0;
            if (0 < t.indexOf("%$")) {
                var a;
                a = t.split("%$");
                var s = $.parseJSON(a[0]);
                BranchJson = $.parseJSON(a[1]), $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state")), $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                try {
                    for (var n = 0; n < s.statelist.length; n++) s.statelist[n].isSameState, $("#ddlstate").append($("<option></option>").val("" + s.statelist[n].sId).html("" + s.statelist[n].stateN));
                    for (document.getElementById("ddlstate").value = 21, n = 0; n < s.cityList.length; n++) $("#ddlcity").append($("<option></option>").val("" + s.cityList[n].cId).html("" + s.cityList[n].cityN));
                    document.getElementById("ddlcity").value = 5
                } catch (t) {}
                0 == BranchJson.BranchList.length || (populateBranch(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude), paginingNo(totBranch, 1, 4, 10, "divPagination"))
            } else {
                for (s = $.parseJSON(t), $("#ddlstate").empty().append($("<option></option>").val("0").html("Please select state")), n = 0; n < s.statelist.length; n++) "Yes" == s.statelist[n].isSameState && (e = s.statelist[n].sId), $("#ddlstate").append($("<option></option>").val("" + s.statelist[n].sId).html("" + s.statelist[n].stateN));
                document.getElementById("ddlstate").value = e, $("#ddlcity").empty().append($("<option></option>").val("0").html("Please select city"));
                try {
                    for (n = 0; n < s.cityList.length; n++) $("#ddlcity").append($("<option></option>").val("" + s.cityList[n].cId).html("" + s.cityList[n].cityN))
                } catch (t) {}
            }
        },
        error: function(t) {
            //alert("fn fillStateAndCityAndBranch " + t)
        }
    })
}

function getBranchAccPage(t, e, a, s) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getBranchAccPage",
            stateId: t,
            cityId: e,
            pageNo: a,
            rowNo: s
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t), 0 == (BranchJson = $.parseJSON(t)).BranchList.length || (41 == e && (iscity = !0), populateBranch(), paginingNo(totBranch, a, s, 10, "divPagination"), backtotoppage(), getLatLonDetailDisplayGoogleMap(mapAddress, smsTitle, mapLatitude, mapLongitude))
        },
        error: function(t) {
            //alert("fn getBranchAccPage " + t)
        }
    })
}

function populateBranch() {
    if (0 < BranchJson.BranchList.length) {
        for (var t = "", e = 0; e < BranchJson.BranchList.length; e++) 0 == e && (mapLongitude = BranchJson.BranchList[e].fLongitude, mapAddress = BranchJson.BranchList[e].sAddress, mapLatitude = BranchJson.BranchList[e].fLatitude, totBranch = BranchJson.BranchList[e].totBran, smsTitle = "Future Generali"), t += ' <div class="address">', t += '<div class="marker-icon">', t += '<img src="img/icons/map_marker_icon.png" alt=""></div>', t += '<div class="address-holder">', t += " <p>" + BranchJson.BranchList[e].sAddress + "</p>", "" != BranchJson.BranchList[e].sPhoneNo && (t += '<p><i class="fa fa-phone-square"></i> <b style="color: grey;">Phone Number : </b> <a  style="color: #454545;font-size: 14px;margin-left:5px" href="tel:' + BranchJson.BranchList[e].sPhoneNo + '">' + BranchJson.BranchList[e].sPhoneNo + "</a></p>"), "" != BranchJson.BranchList[e].sEmailId && (t += '<a href="mailto:' + BranchJson.BranchList[e].sEmailId + '"><img src="img/icons/mail_sm_icon.png" alt=""> ' + BranchJson.BranchList[e].sEmailId + "</a>"), "" != BranchJson.BranchList[e].sGROName && (t += '<P><i class="fa fa-user"></i> <b style="color: grey;">GRO Name : </b>' + BranchJson.BranchList[e].sGROName + "</p>"), t += "<br/>", "" != BranchJson.BranchList[e].fLatitude && BranchJson.BranchList[e].fLongitude && (t += "<div id='mapdetail" + e + "'><a  onclick='getLatLonDetailDisplayGoogleMap(\"" + BranchJson.BranchList[e].sAddress + '","Future Generali",' + BranchJson.BranchList[e].fLatitude + "," + BranchJson.BranchList[e].fLongitude + ')\' class="btn btn-default btn-lg btn-main" href=\'javascript://\'>show on map <i class="fa fa-angle-right"></i></a> '), t += "<a b='0' v=\"" + e + '" l="' + BranchJson.BranchList[e].sPhoneNo + '" m="" t="Future Generali" a="' + BranchJson.BranchList[e].sAddress.replace(/&/g, "and") + '" class="btn btn-default btn-lg btn-main btnAddrShow" id=\'btnAddn' + e + "' href='javascript://'>SMS Address <i class=\"fa fa-angle-right\"></i></a> ", t += "<span style='display:none;' class='spansms' id='span" + e + '\'><label class="control-label-garage" id="lblcriterName"><br></label>', t += ' <input type="text" maxlength=\'10\' placeholder=\'Enter Mobile No.\' onkeypress="return isNumericKey1(event);" id="CriteriaName' + e + '" class="form-control">', t += ' <span class="input-group-btn-garage"> <a class="btn btn-default btn-blue cbtnSendSms" id=\'btnshowss' + e + "' v=\"" + e + "\" href=\"javascript://\">Send</a> </span> </span></div><p class='msgAddmap' style='display:none;' id='msgAddmap" + e + "'>The address are sent to your mobile.</p></div>", 1 == iscity && (t += "<p class=\"Left-update\" style='text-align: left;margin-top: 20px;'>Note:This notice is to bring it to the attention of the Policyholders and Customers of M/S Future Generali India Insurance Company Limited (the Company), that on account of certain unavoidable circumstances, the new branch office of the Company located at 3rd Floor, Chanakya Square, Plot No. 789, Exhibition Road, Patna – 800 001, which was scheduled to be operational with effect from June 20, 2017 shall now become operational with effect from July 10, 2017. The Policyholders/Customers are further informed that till such time the new branch office becomes operational, the Company shall continue to serve its policyholder/customer from the existing branch office located at Harihar Chamber, 1st Floor, Boring Road, Patna – 800 001.</p>"), t += "</div> </div>";
        iscity = !1, document.getElementById("idbranchdetail").innerHTML = t
    } else document.getElementById("idbranchdetail").innerHTML = "No Record Found"
}

function displayYear(t) {
    var e = t.toString().substring(0, 2),
        a = "<h3><span>" + e + "</span>" + t.toString().replace(e, "") + "</h3>";
    document.getElementById("divYear").innerHTML = a
}

function displayListOfPr(t, e) {
    if (0 < t.prlist.length) {
        for (var a = "", s = 0; s < t.prlist.length; s++)
            if ("no" == t.prlist[0].date);
            else {
                var n = t.prlist[s].date;
                if (a += '<div class="press-release"><div class="date-holder">', a += displayDate(n), a += "</div>", a += '<div class="press-content">', "pr" == e) a += '<p><a href="press-release-inner/iid=' + t.prlist[s].iid + '">' + t.prlist[s].sTitle + "</a></p>";
                else if ("pc" == e) {
                    var i = "",
                        o = t.prlist[s].sFilePath.split(".");
                    1 < o.length && (i = o[1].toLowerCase());
                    var l = t.prlist[s].sFilePath;
                    "pdf" == i || "jpg" == i || "jpeg" == i || "docx" == i ? -1 < l.indexOf("/general-insurance") ? a += "<p><a target='_blank' href='" + t.prlist[s].sFilePath + "'>" + t.prlist[s].sTitle + "</a> | <span>" + t.prlist[s].sPublication + "</span></p>" : a += "<p><a target='_blank' href='Images/Press Coverage/" + t.prlist[s].sFilePath + "'>" + t.prlist[s].sTitle + "</a> | <span>" + t.prlist[s].sPublication + "</span></p>" : -1 < l.indexOf("/general-insurance") ? a += "<p><a target='_blank' href='" + t.prlist[s].sFilePath + ".jpg'>" + t.prlist[s].sTitle + "</a> | <span>" + t.prlist[s].sPublication + "</span></p>" : a += "<p><a target='_blank' href='Images/Press Coverage/" + t.prlist[s].sFilePath + ".jpg'>" + t.prlist[s].sTitle + "</a> | <span>" + t.prlist[s].sPublication + "</span></p>"
                }
                a += "</div>", a += "</div>"
            }
        document.getElementById("divMediaCentre").innerHTML = a
    } else document.getElementById("divMediaCentre").innerHTML = ""
}

function displayDate(t) {
    var e = t.split(" ");
    return "<p>" + e[0] + "  " + e[1] + " <br/><span>" + e[2] + "</span></p>"
}

function getPressCoverageList() {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getListofPressCoverageAccYear",
            isFirstime: !0,
            pageNo: 1,
            rowNo: 20,
            year: ""
        },
        success: function(t) {
            var e = "";
            0 < t.indexOf("Database error") && //alert(t);
            try {
                var a = $.parseJSON(t);
                $("#ddlyear").empty();
                for (var s = 0; s < a.pcyear.length; s++) "no" == a.pcyear[0].pcyear || (0 == s && (e = a.pcyear[s].pcyear), $("#ddlyear").append($("<option></option>").val("" + a.pcyear[s].pcyear).html("" + a.pcyear[s].pcyear)));
                "" != e && (document.getElementById("ddlyear").value = e), displayListOfPr(a, "pc");
                var n = a.totallist[0].pctot;
                paginingNo(n, 1, 20, 10, "divPagination")
            } catch (t) {
                $("#ddlyear").empty()
            }
            "" != e && displayYear(e)
        },
        error: function(t) {
            //alert("fn getPressReleaseList " + t)
        }
    })
}

function backtotoppage() {
    $("html,body").animate({
        scrollTop: 0
    }, 0)
}

function getPCAccYear(t, s, e) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getListofPressCoverageAccYear",
            isFirstime: !1,
            pageNo: s,
            rowNo: e,
            year: t
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t);
            try {
                var e = $.parseJSON(t);
                displayListOfPr(e, "pc");
                var a = e.totallist[0].pctot;
                paginingNo(a, s, 20, 10, "divPagination"), backtotoppage()
            } catch (t) {}
        },
        error: function(t) {
            //alert("fn getPCAccYear " + t)
        }
    })
}

function getPRAccYear(t) {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getListofPressReleaseAccYear",
            isFirstime: !1,
            pageNo: 1,
            rowNo: 20,
            year: t
        },
        success: function(t) {
            0 < t.indexOf("Database error") && //alert(t);
            try {
                var e = $.parseJSON(t);
                displayListOfPr(e, "pr")
            } catch (t) {}
        },
        error: function(t) {
            //alert("fn getPRAccYear " + t)
        }
    })
}

function getPressReleaseList() {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getListofPressReleaseAccYear",
            isFirstime: !0,
            pageNo: 1,
            rowNo: 20,
            year: ""
        },
        success: function(t) {
            var e;
            0 < t.indexOf("Database error") && //alert(t);
            try {
                var a = $.parseJSON(t);
                $("#ddlyear").empty();
                for (var s = 0; s < a.prYear.length; s++) "no" == a.prYear[0].pryear || (0 == s && (e = a.prYear[s].pryear), $("#ddlyear").append($("<option></option>").val("" + a.prYear[s].pryear).html("" + a.prYear[s].pryear)));
                document.getElementById("ddlyear").value = e, displayListOfPr(a, "pr")
            } catch (t) {
                $("#ddlyear").empty()
            }
            displayYear(e)
        },
        error: function(t) {
            //alert("fn getPressReleaseList " + t)
        }
    })
}

function fillPubDiscAndAnnRe() {
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "fillPubDiscAndAnnRe",
            isFirstime: !0
        },
        success: function(t) {
            iInvestInfo = 1;
            var e, a = (e = window.location.href.toString().split("/"))[e.length - 1];
            PubDiscAnnReJson = $.parseJSON(t), "public-disclosure" == a && (iInvestInfo = 1, popPubDiscDdl(PubDiscAnnReJson), populatePubDisc(PubDiscAnnReJson), $("#tabs-1").show(), $("#tabs-2").hide(), $("#tabs-3").hide(), $("#tabs-4").hide()), "annual-report" == a && (iInvestInfo = 2, popAnuuReDdl(PubDiscAnnReJson), populateAnnuRe(PubDiscAnnReJson), $("#tabs-1").hide(), $("#tabs-2").show(), $("#tabs-3").hide(), $("#tabs-4").hide()), "agm-notices" == a && (iInvestInfo = 3, populateAgmNotice(PubDiscAnnReJson), $("#tabs-1").hide(), $("#tabs-2").hide(), $("#tabs-3").show(), $("#tabs-4").hide()), "egm-notices" == a && (iInvestInfo = 4, popEgmDdl(PubDiscAnnReJson), populateEgmNotice(PubDiscAnnReJson), $("#tabs-1").hide(), $("#tabs-2").hide(), $("#tabs-3").hide(), $("#tabs-4").show())
        },
        error: function(t) {
            //alert("fn fillPubDiscAndAnnRe " + t)
        }
    })
}

function popPubDiscDdl(t) {
    var e = "";
    $("#ddlyear").empty();
    for (var a = 0; a < t.pubDisYear.length; a++) 0 == a && (e = t.pubDisYear[a].year), $("#ddlyear").append($("<option></option>").val("" + t.pubDisYear[a].year).html("" + t.pubDisYear[a].year));
    document.getElementById("ddlyear").value = e.toString(), document.getElementById("h4year").innerHTML = e
}

function popEgmDdl(t) {
    var e = "";
    $("#ddlyear").empty();
    for (var a = 0; a < t.egmYear.length; a++) "no" == t.egmYear[0].year || (0 == a && (e = t.egmYear[a].year), $("#ddlyear").append($("<option></option>").val("" + t.egmYear[a].year).html("" + t.egmYear[a].year))), document.getElementById("ddlyear").value = e, document.getElementById("h4egmYear").innerHTML = e
}

function displayYearinv(t) {
    var e = t.split("-")[0],
        a = "<h3><span>" + (e = t.toString().substring(0, 2)) + "</span>" + t.toString().replace(e, "") + "</h3>";
    document.getElementById("h4year").innerHTML = a
}

function displayYearAnu(t) {
    var e = t.split("-")[0],
        a = "<h3><span>" + (e = t.toString().substring(0, 2)) + "</span>" + t.toString().replace(e, "") + "</h3>";
    document.getElementById("h4anuYear").innerHTML = a
}

function popAnuuReDdl(t) {
    var e = "";
    $("#ddlyear").empty();
    for (var a = 0; a < t.annuReYear.length; a++) "no" == t.annuReYear[0].year || (0 == a && (e = t.annuReYear[a].year), $("#ddlyear").append($("<option></option>").val("" + t.annuReYear[a].year).html("" + t.annuReYear[a].year))), document.getElementById("ddlyear").value = e, document.getElementById("h4anuYear").innerHTML = e
}

function populatestewardshipPolicy(t) {
    try {
        if (0 < t.stewardD.length) {
            var e = "";
            e = '<table class="table table-pd"><tbody>';
            for (var a = 0; a < t.stewardD.length; a++) "no" == t.stewardD[0].sPolicyName || (e += "<tr><td><p><img src='img/icons/pdf.png'>     <a target='_blank' href=\"" + t.stewardD[a].sFile + '">' + t.stewardD[a].sPolicyName + "</a></p></td>", e += "<td><a target='_blank' class='btn btn-default btn-main'   href=\"" + t.stewardD[a].sFile + '">View <img alt="" src="img/icons/sm_download_icon_red.png"></a></td>', e += "</tr>");
            e += "</tbody> </table>", document.getElementById("divStewardship").innerHTML = e
        } else document.getElementById("divStewardship").innerHTML = "No Record Found"
    } catch (t) {}
}

function populateSecurityPolicy(t) {
    try {
        if (0 < t.securityD.length) {
            var e = "";
            e = '<table class="table table-pd"><tbody>';
            for (var a = 0; a < t.securityD.length; a++) "no" == t.securityD[0].sPolicyName || (e += "<tr><td><p><img src='img/icons/pdf.png'>     <a target='_blank' href=\"" + t.securityD[a].sFile + '">' + t.securityD[a].sPolicyName + "</a></p></td>", e += "<td><a target='_blank' class='btn btn-default btn-main'   href=\"" + t.securityD[a].sFile + '">View <img alt="" src="img/icons/sm_download_icon_red.png"></a></td>', e += "</tr>");
            e += "</tbody> </table>", document.getElementById("divSecurity").innerHTML = e
        } else document.getElementById("divSecurity").innerHTML = "No Record Found"
    } catch (t) {}
}

function populateWhistleBlowingPolicy(t) {
    try {
        if (0 < t.whistleD.length) {
            var e = "";
            e = '<table class="table table-pd"><tbody>';
            for (var a = 0; a < t.whistleD.length; a++) "no" == t.whistleD[0].sPolicyName || (e += "<tr><td><p><img src='img/icons/pdf.png'>     <a target='_blank' href=\"" + t.whistleD[a].sFile + '">' + t.whistleD[a].sPolicyName + "</a></p></td>", e += "<td><a target='_blank' class='btn btn-default btn-main'   href=\"" + t.whistleD[a].sFile + '">View <img alt="" src="img/icons/sm_download_icon_red.png"></a></td>', e += "</tr>");
            e += "</tbody> </table>", document.getElementById("divWhistle").innerHTML = e
        } else document.getElementById("divWhistle").innerHTML = "No Record Found"
    } catch (t) {}
}

function populateAntiFraudPolicy(t) {
    try {
        if (0 < t.AntifraudD.length) {
            var e = "";
            e = '<table class="table table-pd"><tbody>';
            for (var a = 0; a < t.AntifraudD.length; a++) "no" == t.AntifraudD[0].sPolicyName || (e += "<tr><td><p><img src='img/icons/pdf.png'>     <a target='_blank' href=\"" + t.AntifraudD[a].sFile + '">' + t.AntifraudD[a].sPolicyName + "</a></p></td>", e += "<td><a target='_blank' class='btn btn-default btn-main'   href=\"" + t.AntifraudD[a].sFile + '">View <img alt="" src="img/icons/sm_download_icon_red.png"></a></td>', e += "</tr>");
            e += "</tbody> </table>", document.getElementById("divAntiFraud").innerHTML = e
        } else document.getElementById("divAntiFraud").innerHTML = "No Record Found"
    } catch (t) {}
}

function populatePubDisc(t) {
    if (0 < t.pubDisD.length) {
        var e = "";
        e = '<table class="table table-pd"><tbody>';
        for (var a = 0; a < t.pubDisD.length; a++) e += "<tr><td><p><img src='img/icons/pdf.png'></i>     <a target='_blank' href=\"" + t.pubDisD[a].sFile + '">' + t.pubDisD[a].sFormName + "</a></p></td>", e += "<td><a class='btn btn-default btn-main' target='_blank'  href=\"" + t.pubDisD[a].sFile + '">View <img alt="" src="img/icons/sm_download_icon_red.png"></a></td>', e += "</tr>";
        e += "</tbody> </table>", document.getElementById("divPubliDisc").innerHTML = e
    } else document.getElementById("divPubliDisc").innerHTML = "No Record Found"
}

function populateAnnuRe(t) {
    try {
        if (0 < t.annuReD.length) {
            var e = "";
            e = '<table class="table table-pd"><tbody>';
            for (var a = 0; a < t.annuReD.length; a++) "no" == t.annuReD[0].sReportName || (e += "<tr><td><p><img src='img/icons/pdf.png'>     <a target='_blank' href=\"" + t.annuReD[a].sFile + '">' + t.annuReD[a].sReportName + "</a></p></td>", e += "<td><a target='_blank' class='btn btn-default btn-main'   href=\"" + t.annuReD[a].sFile + '">View <img alt="" src="img/icons/sm_download_icon_red.png"></a></td>', e += "</tr>");
            e += "</tbody> </table>", document.getElementById("divAnnuRe").innerHTML = e
        } else document.getElementById("divAnnuRe").innerHTML = "No Record Found"
    } catch (t) {}
}

function populateAgmNotice(t) {
    try {
        if (0 < t.agmD.length) {
            var e = "";
            e = '<table class="table table-pd"><tbody>';
            for (var a = 0; a < t.agmD.length; a++) "no" == t.agmD[0].sNoticeName || (e += "<tr><td><p><img src='img/icons/pdf.png'>     <a target='_blank' href=\"" + t.agmD[a].sFile + '">' + t.agmD[a].sNoticeName + "</a></p></td>", e += "<td><a target='_blank' class='btn btn-default btn-main'   href=\"" + t.agmD[a].sFile + '">View <img alt="" src="img/icons/sm_download_icon_red.png"></a></td>', e += "</tr>");
            e += "</tbody> </table>", document.getElementById("divAgm").innerHTML = e
        } else document.getElementById("divAgm").innerHTML = "No Record Found"
    } catch (t) {}
}

function populateEgmNotice(t) {
    try {
        if (0 < t.egmD.length) {
            var e = "";
            e = '<table class="table table-pd"><tbody>';
            for (var a = 0; a < t.egmD.length; a++) "no" == t.egmD[0].sNoticeName || (e += "<tr><td><p><img src='img/icons/pdf.png'>     <a target='_blank' href=\"" + t.egmD[a].sFile + '">' + t.egmD[a].sNoticeName + "</a></p></td>", e += "<td><a target='_blank' class='btn btn-default btn-main'   href=\"" + t.egmD[a].sFile + '">View <img alt="" src="img/icons/sm_download_icon_red.png"></a></td>', e += "</tr>");
            e += "</tbody> </table>", document.getElementById("divEgm").innerHTML = e
        } else document.getElementById("divEgm").innerHTML = "No Record Found"
    } catch (t) {}
}

function GetDataYearChange() {
    var a = $("#ddlyear").val();
    $.ajax({
        url: "/general-insurance/Services/getData.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "getPubDiscAndAnnReAccYearChange",
            isFirstime: !1,
            iInvestInfo: iInvestInfo,
            year: a
        },
        success: function(t) {
            if (0 < t.indexOf("Database error")) //alert(t);
            else {
                var e = $.parseJSON(t);
                1 == iInvestInfo && (populatePubDisc(e), document.getElementById("h4year").innerHTML = a), 2 == iInvestInfo && (populateAnnuRe(e), document.getElementById("h4anuYear").innerHTML = a), 3 == iInvestInfo && populateAgmNotice(e), 4 == iInvestInfo && (populateEgmNotice(e), document.getElementById("h4egmYear").innerHTML = a)
            }
        },
        error: function(t) {
            //alert("fn GetDataYearChange " + t)
        }
    })
}
$(document).ready(function() {
    $(".val-ph").click(function() {
        var t = $("#txtcallme").val();
        aboutCallMe(t)
    }), $(document).on("click", ".category-btns ul li a", function() {
        if (0 <= $(this).html().indexOf("Call")) {
            isDirectProductCallme = !0;
            var t = [];
            ssProduct = (t = (ssProduct = $(this).closest(".insure-category-container").find(".aMore").find("a").attr("href")).toString().split("/"))[t.length - 1].toString(), $(".open-menu").trigger("click"), DivProductName.innerHTML = ssProduct
        }
    }), $(".givemeacall").click(function() {
        var t = $("#exampleInputAmount").val();
        isfooterCallMe = !0, aboutCallMe(t)
    })
}), $(document).ready(function() {
    $(document).on("click", "a.btnAddrShow", function() {
        if (0 == $(this).attr("b")) {
            $(".spansms").css("display", "none");
            var t = $(this).attr("v"),
                e = $(this).attr("t"),
                a = $(this).attr("a");
            $("#span" + t).css("display", "block"), smsTitle = e, smsaddress = a, smsContact = smsLandline = smsMobile = "", smsMobile = $(this).attr("m"), smsLandline = $(this).attr("l"), null == smsMobile && (smsMobile = ""), null == smsLandline && (smsLandline = "");
            try {
                $(this).attr("c") && (smsContact = $(this).attr("c"))
            } catch (t) {
                smsContact = ""
            }
            null == smsContact && (smsContact = "")
        }
    }), $(document).on("click", "a.cbtnSendSms", function() {
        var t = $(this).attr("v"),
            e = $("#CriteriaName" + t).val();
        return Sendsms(e), 10 == e.length && ($("#CriteriaName" + t).css("display", "none"), $("#btnshowss" + t).css("display", "none"), $("#btnAddn" + t).html("Sent successfully"), $("#btnAddn" + t).attr("style", "background-color: #749e76 !important;color:white !important;"), $("#btnAddn" + t).attr("b", 1)), !1
    })
}), isPageDataExist = iscity = isAnnuReport = isfooterCallMe = isDirectProductCallme = !1, smsLandline = smsMobile = smsTitle = smsaddress = smsContact = ssProduct = ProdName = CategoryName = "", smsDisclaimer = "%0D%0A%0D%0ASent from Future Generali", $(document).ready(function() {
    $(".val-ph").click(function() {
        var t = $("#txtcallme").val();
        aboutCallMe(t)
    }), $(document).on("click", ".category-btns ul li a", function() {
        if (0 <= $(this).html().indexOf("Call")) {
            isDirectProductCallme = !0;
            var t = [];
            ssProduct = (t = (ssProduct = $(this).closest(".insure-category-container").find(".aMore").find("a").attr("href")).toString().split("/"))[t.length - 1].toString(), $(".open-menu").trigger("click"), DivProductName.innerHTML = ssProduct
        }
    }), $(".givemeacall").click(function() {
        var t = $("#exampleInputAmount").val();
        isfooterCallMe = !0, aboutCallMe(t)
    })
}), $(document).ready(function() {
    $(document).on("click", "a.btnAddrShow", function() {
        if (0 == $(this).attr("b")) {
            $(".spansms").css("display", "none");
            var t = $(this).attr("v"),
                e = $(this).attr("t"),
                a = $(this).attr("a");
            $("#span" + t).css("display", "block"), smsTitle = e, smsaddress = a, smsContact = smsLandline = smsMobile = "", smsMobile = $(this).attr("m"), smsLandline = $(this).attr("l"), null == smsMobile && (smsMobile = ""), null == smsLandline && (smsLandline = "");
            try {
                $(this).attr("c") && (smsContact = $(this).attr("c"))
            } catch (t) {
                smsContact = ""
            }
            null == smsContact && (smsContact = "")
        }
    }), $(document).on("click", "a.cbtnSendSms", function() {
        var t = $(this).attr("v"),
            e = $("#CriteriaName" + t).val();
        return Sendsms(e), 10 == e.length && ($("#CriteriaName" + t).css("display", "none"), $("#btnshowss" + t).css("display", "none"), $("#btnAddn" + t).html("Sent successfully"), $("#btnAddn" + t).attr("style", "background-color: #749e76 !important;color:white !important;"), $("#btnAddn" + t).attr("b", 1)), !1
    })
});