var dUrl = 'http://' + document.location.host + '/';
var sFamilySize;
var Current = "";

function validTextBox(control, errMsg) {
    var a = $("#" + control).val();
    if (a == "") {
        document.getElementById('modal-body-msg').innerHTML = errMsg;
        $('#callme').modal('show');
        return false;
    }
    return true;
}

function ValidEmail(control, errMessage) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test($("#" + control).val())) {
        document.getElementById('modal-body-msg').innerHTML = errMessage;
        $('#callme').modal('show');
        return false;
    }
    return true;
}

function highlightmenu(pagename) {
    $(".dropdown-toggle:contains('Marine Insurance')").addClass("active-nav");
}

function validLogin() {
    $("#lbllgin").hide();
    var Username = $("#Username").val();
    var Passwords = $("#Passwords").val();
    if (Username == "") {
        $("#lbllgin").html('Please enter username');
        $("#lbllgin").show();
        return false;
    } else if (Passwords == "") {
        $("#lbllgin").html('Please enter password');
        $("#lbllgin").show();
        return false;
    }
    return true;
}

function validMobileNo(control, errMsg) {
    var num = $("#" + control).val();
    if (num == "") {
        document.getElementById('modal-body-msg').innerHTML = errMsg;
        $('#callme').modal('show');
        return false;
    }
    if (num.length < 10 || num.length > 10) {
        document.getElementById('modal-body-msg').innerHTML = errMsg;
        $('#callme').modal('show');
        return false;
    }
    return true;
}

function formatCurrency(currencyAmt) {
    var spliter = [];
    spliter = currencyAmt.toString().split('').join(',');
    spliter = spliter.split(',');
    var totLen = spliter.length;
    var formatAmt = 0;
    var a = totLen - 3;
    for (var i = 0; i < spliter.length; i++) {
        if (totLen % 2 == 0) {
            if (i >= a) {
                formatAmt += spliter[i];
            } else {
                if (i % 2 == 0) {
                    if (i == 0) {
                        formatAmt = spliter[i] + ",";
                    } else {
                        formatAmt += spliter[i] + ",";
                    }
                } else {
                    if (i % 2 != 0) {
                        formatAmt += spliter[i];
                    } else {
                        formatAmt += spliter[i] + ",";
                    }
                }
            }
        } else {
            if (i >= a) {
                if (a == i)
                    formatAmt += "," + spliter[i];
                else
                    formatAmt += spliter[i];
            } else {
                if (i % 2 == 0) {
                    if (i == 0)
                        formatAmt = spliter[i];
                    else
                        formatAmt += "," + spliter[i];
                } else {
                    formatAmt += spliter[i];
                }
            }
        }
    }
    return formatAmt;
}

function RedirectUrl(Url) {
    if (Url != undefined) {
        window.location.href = Url;
    }
}

function BuyOnline(Product) {
    $.ajax({
        url: "/general-insurance/services/LoadContent.ashx",
        type: 'GET',
        async: false,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "BuyOnlineUrl",
            sProduct: Product
        },
        success: function(result) {
            var obj = JSON.parse(result);
            if (obj.sUrl != undefined) {
                window.open(obj.sUrl, '_blank');
            }
        },
        error: function(result) {
            alert(result);
        }
    });
}

function PopulatePlan(iID) {
    switch (iID) {
        case 'Whats-Not-Covered':
            {
                $('#tabs-2').fadeIn().attr('aria-hidden', 'false');$('#tabs-1').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-3').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-4').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-5').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-6').css('display', 'none').attr('aria-hidden', 'true');$('#Plan-Overview').closest("li").removeClass('ui-tabs-active ui-state-active');$('#How-to-Buy').closest("li").removeClass('ui-tabs-active ui-state-active');$('#After-Purchasing').closest("li").removeClass('ui-tabs-active ui-state-active');$('#FAQs').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Whats-Not-Covered').closest("li").addClass('ui-tabs-active ui-state-active');$('#Roadside-Assistance').closest("li").removeClass('ui-tabs-active ui-state-active');
            }
            break;
        case 'Plan-Overview':
            {
                $('#tabs-1').fadeIn().attr('aria-hidden', 'false');$('#tabs-2').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-3').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-4').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-5').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-6').css('display', 'none').attr('aria-hidden', 'true');$('#Whats-Not-Covered').closest("li").removeClass('ui-tabs-active ui-state-active');$('#How-to-Buy').closest("li").removeClass('ui-tabs-active ui-state-active');$('#After-Purchasing').closest("li").removeClass('ui-tabs-active ui-state-active');$('#FAQs').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Plan-Overview').closest("li").addClass('ui-tabs-active ui-state-active');$('#Roadside-Assistance').closest("li").removeClass('ui-tabs-active ui-state-active');
            }
            break;
        case 'How-to-Buy':
            {
                $('#tabs-3').fadeIn().attr('aria-hidden', 'false');$('#tabs-1').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-2').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-6').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-4').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-5').css('display', 'none').attr('aria-hidden', 'true');$('#Plan-Overview').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Whats-Not-Covered').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Roadside-Assistance').closest("li").removeClass('ui-tabs-active ui-state-active');$('#After-Purchasing').closest("li").removeClass('ui-tabs-active ui-state-active');$('#FAQs').closest("li").removeClass('ui-tabs-active ui-state-active');$('#How-to-Buy').closest("li").addClass('ui-tabs-active ui-state-active');
            }
            break;
        case 'After-Purchasing':
            {
                $('#tabs-4').fadeIn().attr('aria-hidden', 'false');$('#tabs-1').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-2').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-3').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-5').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-6').css('display', 'none').attr('aria-hidden', 'true');$('#Plan-Overview').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Whats-Not-Covered').closest("li").removeClass('ui-tabs-active ui-state-active');$('#How-to-Buy').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Roadside-Assistance').closest("li").removeClass('ui-tabs-active ui-state-active');$('#FAQs').closest("li").removeClass('ui-tabs-active ui-state-active');$('#After-Purchasing').closest("li").addClass('ui-tabs-active ui-state-active');
            }
            break;
        case 'FAQs':
            {
                $('#tabs-5').fadeIn().attr('aria-hidden', 'false');$('#tabs-1').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-2').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-3').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-4').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-6').css('display', 'none').attr('aria-hidden', 'true');$('#After-Purchasing').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Plan-Overview').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Whats-Not-Covered').closest("li").removeClass('ui-tabs-active ui-state-active');$('#How-to-Buy').closest("li").removeClass('ui-tabs-active ui-state-active');$('#FAQs').closest("li").addClass('ui-tabs-active ui-state-active');$('#Roadside-Assistance').closest("li").removeClass('ui-tabs-active ui-state-active');
            }
            break;
        case 'Roadside-Assistance':
            {
                $('#tabs-1').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-2').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-3').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-4').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-5').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-6').fadeIn().attr('aria-hidden', 'false');$('#Plan-Overview').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Whats-Not-Covered').closest("li").removeClass('ui-tabs-active ui-state-active');$('#How-to-Buy').closest("li").removeClass('ui-tabs-active ui-state-active');$('#After-Purchasing').closest("li").removeClass('ui-tabs-active ui-state-active');$('#FAQs').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Roadside-Assistance').closest("li").addClass('ui-tabs-active ui-state-active');
            }
            break;
    }
}

function PopulatePlanNew(iID) {
    switch (iID) {
        case '0':
            {
                $('#tabs-0').fadeIn().attr('aria-hidden', 'false');$('#tabs-1').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-2').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-3').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-4').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-5').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-6').css('display', 'none').attr('aria-hidden', 'true');$('#Title-0').closest("li").addClass('ui-tabs-active ui-state-active');$('#Title-1').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-2').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-3').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-4').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-5').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-6').closest("li").removeClass('ui-tabs-active ui-state-active');
            }
            break;
        case '1':
            {
                $('#tabs-0').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-1').fadeIn().attr('aria-hidden', 'false');$('#tabs-2').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-3').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-4').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-5').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-6').css('display', 'none').attr('aria-hidden', 'true');$('#Title-0').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-1').closest("li").addClass('ui-tabs-active ui-state-active');$('#Title-2').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-3').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-4').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-5').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-6').closest("li").removeClass('ui-tabs-active ui-state-active');
            }
            break;
        case '2':
            {
                $('#tabs-0').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-1').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-2').fadeIn().attr('aria-hidden', 'false');$('#tabs-3').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-4').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-5').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-6').css('display', 'none').attr('aria-hidden', 'true');$('#Title-0').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-1').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-2').closest("li").addClass('ui-tabs-active ui-state-active');$('#Title-3').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-4').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-5').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-6').closest("li").removeClass('ui-tabs-active ui-state-active');
            }
            break;
        case '3':
            {
                $('#tabs-0').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-1').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-2').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-3').fadeIn().attr('aria-hidden', 'false');$('#tabs-4').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-5').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-6').css('display', 'none').attr('aria-hidden', 'true');$('#Title-0').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-1').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-2').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-3').closest("li").addClass('ui-tabs-active ui-state-active');$('#Title-4').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-5').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-6').closest("li").removeClass('ui-tabs-active ui-state-active');
            }
            break;
        case '4':
            {
                $('#tabs-0').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-1').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-2').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-3').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-4').fadeIn().attr('aria-hidden', 'false');$('#tabs-5').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-6').css('display', 'none').attr('aria-hidden', 'true');$('#Title-0').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-1').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-2').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-3').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-4').closest("li").addClass('ui-tabs-active ui-state-active');$('#Title-5').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-6').closest("li").removeClass('ui-tabs-active ui-state-active');
            }
            break;
        case '5':
            {
                $('#tabs-0').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-1').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-2').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-3').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-4').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-5').fadeIn().attr('aria-hidden', 'false');$('#tabs-6').css('display', 'none').attr('aria-hidden', 'true');$('#Title-0').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-1').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-2').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-3').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-4').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-5').closest("li").addClass('ui-tabs-active ui-state-active');$('#Title-6').closest("li").removeClass('ui-tabs-active ui-state-active');
            }
            break;
        case '6':
            {
                $('#tabs-0').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-1').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-2').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-3').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-4').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-5').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-6').fadeIn().attr('aria-hidden', 'false');$('#Title-0').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-1').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-2').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-3').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-4').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-5').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Title-6').closest("li").addClass('ui-tabs-active ui-state-active');
            }
            break;
    }
}

function PopulateDummy(iID) {
    switch (iID) {
        case 'tabs-1':
            {
                $('#tab5click').removeClass('ui-tabs-active ui-state-active');$('#tabs-1').fadeIn().attr('aria-hidden', 'false');$('#tabs-2').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-3').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-4').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-5').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-1').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-2').closest("li").addClass('ui-tabs-active ui-state-active');$('#tabs-3').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-4').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-5').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-6').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-6').closest("li").removeClass('ui-tabs-active ui-state-active');
            }
            break;
        case 'tabs-2':
            {
                $('#tab5click').removeClass('ui-tabs-active ui-state-active');$('#tabs-1').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-2').fadeIn().attr('aria-hidden', 'false');$('#tabs-3').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-4').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-5').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-1').closest("li").addClass('ui-tabs-active ui-state-active');$('#tabs-2').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-3').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-4').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-5').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-6').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-6').closest("li").removeClass('ui-tabs-active ui-state-active');
            }
            break;
        case 'tabs-3':
            {
                $('#tab5click').removeClass('ui-tabs-active ui-state-active');$('#tabs-1').fadeOut().attr('aria-hidden', 'false');$('#tabs-2').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-3').fadeIn().attr('aria-hidden', 'true');$('#tabs-4').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-5').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-1').closest("li").addClass('ui-tabs-active ui-state-active');$('#tabs-2').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-3').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-4').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-5').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-6').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-6').closest("li").removeClass('ui-tabs-active ui-state-active');
            }
            break;
        case 'tabs-4':
            {
                $('#tab5click').removeClass('ui-tabs-active ui-state-active');$('#tabs-1').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-2').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-3').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-4').fadeIn().attr('aria-hidden', 'false');$('#tabs-5').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-1').closest("li").addClass('ui-tabs-active ui-state-active');$('#tabs-2').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-3').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-4').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-5').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-6').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-6').closest("li").removeClass('ui-tabs-active ui-state-active');
            }
            break;
        case 'tabs-5':
            {
                $('#tabs-5').closest("li").addClass('ui-tabs-active ui-state-active');$('#tabs-1').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-2').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-3').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-4').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-1').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-2').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-3').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-4').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-5').fadeIn().attr('aria-hidden', 'false');$('#tabs-6').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-6').closest("li").removeClass('ui-tabs-active ui-state-active');
            }
            break;
        case 'tabs-6':
            {
                $('#tabs-5').closest("li").addClass('ui-tabs-active ui-state-active');$('#tabs-1').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-2').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-3').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-4').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-5').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-1').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-2').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-3').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-4').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-5').closest("li").removeClass('ui-tabs-active ui-state-active');$('#tabs-6').fadeIn().attr('aria-hidden', 'false');$('#tabs-6').closest("li").addClass('ui-tabs-active ui-state-active');
            }
            break;
    }
};

function PopulatefromUrl(iID) {
    switch (iID) {
        case 'Whats-Not-Covered':
            {
                $('#tabs-2').fadeIn().attr('aria-hidden', 'false');$('#tabs-1').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-3').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-4').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-5').css('display', 'none').attr('aria-hidden', 'true');$('#Plan-Overview').closest("li").removeClass('ui-tabs-active ui-state-active');$('#How-to-Buy').closest("li").removeClass('ui-tabs-active ui-state-active');$('#After-Purchasing').closest("li").removeClass('ui-tabs-active ui-state-active');$('#FAQs').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Whats-Not-Covered').closest("li").addClass('ui-tabs-active ui-state-active');
            }
            break;
        case 'Plan-Overview':
            {
                $('#tabs-1').fadeIn().attr('aria-hidden', 'false');$('#tabs-2').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-3').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-4').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-5').css('display', 'none').attr('aria-hidden', 'true');$('#Whats-Not-Covered').closest("li").removeClass('ui-tabs-active ui-state-active');$('#How-to-Buy').closest("li").removeClass('ui-tabs-active ui-state-active');$('#After-Purchasing').closest("li").removeClass('ui-tabs-active ui-state-active');$('#FAQs').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Plan-Overview').closest("li").addClass('ui-tabs-active ui-state-active');
            }
            break;
        case 'How-to-Buy':
            {
                $('#tabs-3').fadeIn().attr('aria-hidden', 'true');$('#tabs-1').fadeOut().attr('aria-hidden', 'false');$('#tabs-2').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-4').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-5').css('display', 'none').attr('aria-hidden', 'true');$('#Plan-Overview').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Whats-Not-Covered').closest("li").removeClass('ui-tabs-active ui-state-active');$('#After-Purchasing').closest("li").removeClass('ui-tabs-active ui-state-active');$('#FAQs').closest("li").removeClass('ui-tabs-active ui-state-active');$('#How-to-Buy').closest("li").addClass('ui-tabs-active ui-state-active');
            }
            break;
        case 'After-Purchasing':
            {
                $('#tabs-4').fadeIn().attr('aria-hidden', 'true');$('#tabs-1').fadeOut().attr('aria-hidden', 'false');$('#tabs-2').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-3').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-5').css('display', 'none').attr('aria-hidden', 'true');$('#Plan-Overview').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Whats-Not-Covered').closest("li").removeClass('ui-tabs-active ui-state-active');$('#How-to-Buy').closest("li").removeClass('ui-tabs-active ui-state-active');$('#FAQs').closest("li").removeClass('ui-tabs-active ui-state-active');$('#After-Purchasing').closest("li").addClass('ui-tabs-active ui-state-active');
            }
            break;
        case 'FAQs':
            {
                $('#tabs-1').fadeOut().attr('aria-hidden', 'false');$('#tabs-2').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-3').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-4').css('display', 'none').attr('aria-hidden', 'true');$('#tabs-5').fadeIn().attr('aria-hidden', 'true');$('#After-Purchasing').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Plan-Overview').closest("li").removeClass('ui-tabs-active ui-state-active');$('#Whats-Not-Covered').closest("li").removeClass('ui-tabs-active ui-state-active');$('#How-to-Buy').closest("li").removeClass('ui-tabs-active ui-state-active');$('#FAQs').closest("li").addClass('ui-tabs-active ui-state-active');
            }
            break;
    }
};

function NextClick(iID, sStatus) {
    switch (iID) {
        case 'Plan-Overview':
            {
                if (sStatus == 'Plan')
                    PopulatePlan('Whats-Not-Covered');
                else
                    PopulatefromUrl('Whats-Not-Covered');
            }
            break;
        case 'Whats-Not-Covered':
            {
                if (sStatus == 'Plan')
                    PopulatePlan('How-to-Buy');
                else
                    PopulatefromUrl('How-to-Buy');
            }
            break;
        case 'How-to-Buy':
            {
                if (sStatus == 'Plan')
                    PopulatePlan('After-Purchasing');
                else
                    PopulatefromUrl('After-Purchasing');
            }
            break;
        case 'After-Purchasing':
            {
                if (sStatus == 'Plan')
                    PopulatePlan('FAQs');
                else
                    PopulatefromUrl('FAQs');
            }
            break;
        case 'FAQs':
            {
                if (sStatus == 'Plan')
                    PopulatePlan('Plan-Overview');
                else
                    PopulatefromUrl('Plan-Overview');
            }
            break;
    }
}

function PrevClick(iID, sStatus) {
    switch (iID) {
        case 'Plan-Overview':
            {
                if (sStatus == 'Plan')
                    PopulatePlan('FAQs');
                else
                    PopulatefromUrl('FAQs');
            }
            break;
        case 'Whats-Not-Covered':
            {
                if (sStatus == 'Plan')
                    PopulatePlan('Plan-Overview');
                else
                    PopulatefromUrl('Plan-Overview');
            }
            break;
        case 'How-to-Buy':
            {
                if (sStatus == 'Plan')
                    PopulatePlan('Whats-Not-Covered');
                else
                    PopulatefromUrl('Whats-Not-Covered');
            }
            break;
        case 'After-Purchasing':
            {
                if (sStatus == 'Plan')
                    PopulatePlan('How-to-Buy');
                else
                    PopulatefromUrl('How-to-Buy');
            }
            break;
        case 'FAQs':
            {
                if (sStatus == 'Plan')
                    PopulatePlan('After-Purchasing');
                else
                    PopulatefromUrl('After-Purchasing');
            }
            break;
    }
}

function URLlink(iID) {}

function LoadArticleContent(iID) {
    $.ajax({
        url: "/general-insurance/services/LoadContent.ashx",
        type: 'GET',
        async: false,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "LoadArticleContent",
            sTitle: iID
        },
        success: function(result) {
            var obj = JSON.parse(result);
            DivArticleContent.innerHTML = obj.sContent.replace(/&fs/g, "/").replace(/&quot;/g, "\"");;
            DivMenu.innerHTML = obj.sMenu.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            DivTitle.innerHTML = obj.sTitles.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
        },
        error: function(result) {
            alert(result);
        }
    });
}

function LoadProductContent(iID) {
    $.ajax({
        url: "/general-insurance/services/LoadContent.ashx",
        type: 'GET',
        async: false,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "LoadProductContent",
            sTitle: iID
        },
        success: function(result) {
            if (iID == 'Home-Plan') {
                $('#DivMenu').hide();
                $('#Privilegessection').html('<div class="col-md-8 col-sm-8 col-xs-12"> <h3>Calculate the valuation of house and its contents for Insurance.</h3></div><div class="col-md-4 col-sm-4 col-xs-12"><a href="javascript://" class="btn btn-default btn-lg btn-main pull-right">Find Out How? <i class="fa fa-angle-right"></i></a></div>');
                $('#ReasonsFooter').hide();
            }
            if (iID == 'student-travel-plan' || iID == 'overseas-travel-plan') {}
            if (iID == 'motor-plan') {
                $('#Whats-Not-Covered').html('Coverages');
            }
            var obj = JSON.parse(result);
            HTitle.innerHTML = obj.sTitle;
            DivDownloads.innerHTML = obj.sDownloads.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            DivBanner.innerHTML = obj.sBanner.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            HCategoryTitle.innerHTML = obj.sCategoryTitle;
            DivMenu.innerHTML = obj.sMenu.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            DivProductInfo.innerHTML = obj.sProductInfo.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            DivNotCovered.innerHTML = obj.sNotCovered.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            DivHowToBuy.innerHTML = obj.sHowToBuy.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            DivAfterPurchase.innerHTML = obj.sAfterPurchase.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            DivFAQs.innerHTML = obj.sFAQs.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            DivBreadCrumb.innerHTML = obj.sBreadCrumb.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            DivReasons.innerHTML = obj.sReasons.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            DivPrivilegessection.innerHTML = obj.sPrivileges.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            DivReasonsFooter.innerHTML = obj.sReasonsFooter.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            DivIllustrations.innerHTML = obj.sIllustration.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            DivDisclaimer.innerHTML = obj.sDisclaimer.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            $("#txtgetCatPrdt").val(obj.productId);
            $('meta[name=description]').remove();
            $('meta[name=keywords]').remove();
            $('#head').append('<meta name="description" content="' + obj.sMetaDescription + '">');
            $('#head').append('<meta name="description" content="' + obj.sMetaKeywords + '">');
            $('#head').append('<title>"' + obj.sTitle + '"</title>');
            Testimonial1.innerHTML = obj.sTestimonials1.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            Testimonial2.innerHTML = obj.sTestimonials2.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            Testimonial3.innerHTML = obj.sTestimonials3.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
        },
        error: function(result) {
            alert(result);
        }
    });
}

function LoadCProductContent(iID) {
    $.ajax({
        url: "/general-insurance/services/LoadContent.ashx",
        type: 'GET',
        async: false,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "LoadCProductContent",
            sTitle: iID
        },
        success: function(result) {
            if (iID == 'group-health') {
                $('#DivNotCovered').hide();
            }
            var obj = JSON.parse(result);
            $("#txtgetCatPrdt").val(obj.productId);
            DivMenu.innerHTML = DivMenu.innerHTML.replace(/#sMenu#/g, obj.sMenu.replace(/&fs/g, "/").replace(/&quot;/g, "\""));
            DivTitle.innerHTML = DivTitle.innerHTML.replace("#sTitle#", obj.sTitle);
            DivCategoryTitle.innerHTML = DivCategoryTitle.innerHTML.replace("#sCategoryTitle#", obj.sCategoryTitle);
            DivBanner.innerHTML = DivBanner.innerHTML.replace("#sBanner#", obj.sBanner.replace(/&fs/g, "/").replace(/&quot;/g, "\""));
            DivCovered.innerHTML = DivCovered.innerHTML.replace(/#sCovered#/g, obj.sCovered.replace(/&fs/g, "/").replace(/&quot;/g, "\""));
            DivDescription.innerHTML = DivDescription.innerHTML.replace(/#sDescription#/g, obj.sDescription.replace(/&fs/g, "/").replace(/&quot;/g, "\""));
            DivNotCovered.innerHTML = DivNotCovered.innerHTML.replace(/#sNotCovered#/g, obj.sNotCovered.replace(/&fs/g, "/").replace(/&quot;/g, "\""));
            DivBreadCrumb.innerHTML = DivBreadCrumb.innerHTML.replace("#sBreadcrumb#", obj.sBreadCrumb.replace(/&fs/g, "/").replace(/&quot;/g, "\""));
        },
        error: function(result) {
            alert(result);
        }
    });
}

function LoadCategoryContent(iID) {
    $.ajax({
        url: "/general-insurance/services/LoadContent.ashx",
        type: 'GET',
        async: false,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "LoadCategoryContent",
            sName: iID
        },
        success: function(result) {
            var obj = JSON.parse(result);
            DivTitle.innerHTML = DivTitle.innerHTML.replace("#sTitle#", obj.sTitle);
            DivBanner.innerHTML = DivBanner.innerHTML.replace("#sBanner#", obj.sBanner.replace(/&fs/g, "/").replace(/&quot;/g, "\""));
            Testimonial1.innerHTML = obj.sTestimonials1.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            Testimonial2.innerHTML = obj.sTestimonials2.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            Testimonial3.innerHTML = obj.sTestimonials3.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            $("#txtgetCatPrdt").val(obj.categoryId);
            DivMenu.innerHTML = obj.sMenu.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            DivQuestionaires.innerHTML = obj.sQuestionaires.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            DivProducts.innerHTML = obj.sProducts.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
            DivArticles.innerHTML = obj.sArticles.replace(/&fs/g, "/").replace(/&quot;/g, "\"");
        },
        error: function(result) {
            alert(result);
        }
    });
}

function LoadCCategoryContent(iID) {
    $.ajax({
        url: "/general-insurance/services/LoadContent.ashx",
        type: 'GET',
        async: false,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "LoadCCategoryContent",
            sName: iID
        },
        success: function(result) {
            var obj = JSON.parse(result);
            $("#txtgetCatPrdt").val(obj.categoryId);
            DivMenu.innerHTML = DivMenu.innerHTML.replace("#sMenu#", obj.sMenu.replace(/&fs/g, "/").replace(/&quot;/g, "\""));
            DivTitle.innerHTML = DivTitle.innerHTML.replace("#sTitle#", obj.sTitle);
            DivBanner.innerHTML = DivBanner.innerHTML.replace("#sBanner#", obj.sBanner.replace(/&fs/g, "/").replace(/&quot;/g, "\""));
            DivLiner.innerHTML = DivLiner.innerHTML.replace(/#sLiner#/g, obj.sLiner.replace(/&fs/g, "/").replace(/&quot;/g, "\""));
            DivProducts.innerHTML = DivProducts.innerHTML.replace(/#sProducts#/g, obj.sProducts.replace(/&fs/g, "/").replace(/&quot;/g, "\""));
            DivArticles.innerHTML = DivArticles.innerHTML.replace(/#sArticles#/g, obj.sArticles.replace(/&fs/g, "/").replace(/&quot;/g, "\""));
        },
        error: function(result) {
            alert(result);
        }
    });
}

function familysizecall(familysize) {
    sFamilySize = familysize;
    if (sFamilySize == 1) {
        $('#familysizecall1').addClass('family-selector-active');
        $('#familysizecall2').removeClass('family-selector-active');
        $('#familysizecall3').removeClass('family-selector-active');
        $('#exstatus').text('Single');
    } else if (sFamilySize == 2) {
        $('#familysizecall2').addClass('family-selector-active');
        $('#familysizecall1').removeClass('family-selector-active');
        $('#familysizecall3').removeClass('family-selector-active');
        $('#exstatus').text('Married');
    } else {
        $('#familysizecall3').addClass('family-selector-active');
        $('#familysizecall2').removeClass('family-selector-active');
        $('#familysizecall1').removeClass('family-selector-active');
        $('#exstatus').text('Married with children(s)');
    }
}

function searchC(sKeyword, pageNo, rowNo) {
    $.ajax({
        url: "/general-insurance/services/LoadContent.ashx",
        type: 'GET',
        async: false,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "LoadSearchContent",
            sKeyword: sKeyword,
            pageNo: pageNo,
            rowNo: rowNo
        },
        success: function(result) {
            var obj = $.parseJSON(result);
            if (obj.SearchContent.length != 0) {
                $('#searchcontent').html("");
                var a = '<div class="dark-service-box search">' + '<a class="search-title" href="$Url$" target="_blank">$Title$</a>' + '<div class="dotted-border"></div>' + '<p>$Description$</p>' + '<a href="$Url$" target="_blank">More Info</a>' + '</div>'
                var i;
                var totcount = obj.SearchContent[0].totcount;
                for (i = 0; i < obj.SearchContent.length; i++) {
                    var content = a;
                    content = content.toString().replace('$Title$', obj.SearchContent[i].sTitle);
                    content = content.toString().replace('$Description$', obj.SearchContent[i].sDescription);
                    content = content.toString().replace('$Url$', obj.SearchContent[i].sUrl);
                    content = content.toString().replace('$Url$', obj.SearchContent[i].sUrl);
                    $('#searchcontent').append(content);
                }
                paginingNo(totcount, pageNo, rowNo, 10, 'divPagination');
            } else {
                $('#searchcontent').html("No result found");
                $("#divPagination").hide();
            }
        },
        error: function(result) {
            alert(result);
        }
    });
}
$(document).ready(function() {
    $("#lbllgin").hide();
    $(document).on('click', 'a.btn-main', function() {
        var a = $(this).html();
        if (a.toString().indexOf('Call Me') >= 0) {
            $(".open-menu").trigger("click");
        }
    });
    $(document).on('click', '.btnsrch', function() {
        var sKeyword = $('#Searchtext').val();
        if (sKeyword != "") {
            searchC(sKeyword, 1, 10);
            var url = window.location.href;
            if (url.toString().indexOf('keyw') >= 0) {
                var surl = window.location.host;
                if (surl.toString().indexOf('local') >= 0) {
                    surl = "http://" + surl + "/FutureGenerali/general-insurance/search/keyw=" + sKeyword;
                } else {
                    surl = "http://" + surl + "/general-insurance/search/keyw=" + sKeyword;
                }
                window.history.pushState("", "", surl);
            }
        }
    });
    $("#BtnResetPolicyNo").click(function() {
        $("#lblspn").hide();
        $('#PolicyNumber').val('');
    });
    $('#BReasonsPrev').hide();
    if ($("#DivR2").html() != undefined) {
        if ($("#DivR2").html().trim().length == 0)
            $('#BReasonsNext').hide();
    }
    $("#BtnSubmitPolicyNumber, #btnMRenew").click(function() {
        var v = '';
        try {
            v = $(this).attr('v').toString();
        } catch (e) {
            v = '';
        }
        var policynumber = "";
        if (v == "m") {
            policynumber = $('#txtmRenewNo').val();
        } else {
            policynumber = $('#PolicyNumber').val();
        }
        if (policynumber == '') {
            $("#lblspn").html("Please enter your policy number");
            $("#lblspn").show();
        } else {
            $.ajax({
                url: "/general-insurance/services/LoadContent.ashx",
                type: 'GET',
                async: false,
                contentType: "application/json; charset=utf-8",
                data: {
                    sAction: "PolicyRenewal",
                    policynumber: policynumber
                },
                success: function(result) {
                    var obj = JSON.parse(result);
                    $('#PolicyNumber').val('');
                    $('#txtmRenewNo').val('');
                    if (obj.sUrl != undefined) {
                        window.open(obj.sUrl, '_blank');
                    }
                },
                error: function(result) {
                    alert(result);
                }
            });
        }
    });
    $('#BReasonsPrev').click(function() {
        if (Current == "") {
            $('#BReasonsPrev').hide();
        } else if (Current == "2" && $("#DivR1").html().trim().length != 0) {
            Current = "";
            $('#DivR1').fadeIn().attr('aria-hidden', 'false');
            $('#DivR2').css('display', 'none').attr('aria-hidden', 'true');
            $('#DivR3').css('display', 'none').attr('aria-hidden', 'true');
            $('#BReasonsPrev').show();
            if ($("#DivR2").html().trim().length != 0) {
                $('#BReasonsNext').show();
            }
        } else if (Current == "3" && $("#DivR2").html().trim().length != 0) {
            Current = "2";
            $('#DivR2').fadeIn().attr('aria-hidden', 'false');
            $('#DivR1').css('display', 'none').attr('aria-hidden', 'true');
            $('#DivR3').css('display', 'none').attr('aria-hidden', 'true');
            $('#BReasonsPrev').show();
            if ($("#DivR3").html().trim().length != 0) {
                $('#BReasonsNext').show();
            }
        }
    });
    $('#BReasonsNext').click(function() {
        if (Current == "" && $("#DivR2").html().trim().length != 0) {
            Current = "2";
            $('#DivR2').fadeIn().attr('aria-hidden', 'false');
            $('#DivR1').css('display', 'none').attr('aria-hidden', 'true');
            $('#DivR3').css('display', 'none').attr('aria-hidden', 'true');
            $('#BReasonsPrev').show();
            if ($("#DivR3").html().trim().length == 0) {
                $('#BReasonsNext').hide();
            }
        } else if (Current == "2" && $("#DivR3").html().trim().length != 0) {
            Current = "3"
            $('#DivR3').fadeIn().attr('aria-hidden', 'false');
            $('#DivR2').css('display', 'none').attr('aria-hidden', 'true');
            $('#DivR1').css('display', 'none').attr('aria-hidden', 'true');
            $('#BReasonsNext').hide();
            $('#BReasonsPrev').show();
        } else if (Current == "3" && $('#DivR3').html() != "") {
            $('#BReasonsNext').hide();
        }
    });
    $('#CallMeSubmit').click(function() {
        var url = (window.location.href).split('/');
        if (!validTextBox("InputCallMeName", "Please enter name")) {
            return false;
        }
        if (!validMobileNo('InputCallMeContact', "Please enter valid phone number")) {
            return false;
        }
        if (!validTextBox("InputCallMeEmail", "Please enter email Id")) {
            return false;
        }
        if (!ValidEmail("InputCallMeEmail", "Please enter valid email Id")) {
            return false;
        }
        var sName = $('#InputCallMeName').val();
        var sContact = $('#InputCallMeContact').val();
        var sEmail = $('#InputCallMeEmail').val();
        var sPageSource = window.location.href;
        var sProduct = '';
        if (url[4] == 'retail-products' || url[4] == 'commercial-products') {
            if (url[6] != undefined) {
                sProduct = url[6];
            }
        } else if (DivProductName.innerHTML != '') {
            sProduct = DivProductName.innerHTML;
        }
        if ($('#ChkFuture').is(':checked') == true) {
            document.getElementById('modal-body-msg').innerHTML = "Processing...";
            $('#callme').modal('show');
            $.ajax({
                url: "/general-insurance/services/LoadContent.ashx",
                type: 'GET',
                async: false,
                contentType: "application/json; charset=utf-8",
                data: {
                    sAction: "CallMeWebService",
                    sName: sName,
                    sEmail: sEmail,
                    sContact: sContact,
                    sPageSource: sPageSource,
                    sProductName: sProduct
                },
                success: function(result) {
                    $('#CallmeName').html(result);
                    $('#InputCallMeName').val('');
                    $('#InputCallMeContact').val('');
                    $('#InputCallMeEmail').val('');
                    $(".divchkmsg").hide();
                    $("#left-menu-container").css('height', '235px');
                    $("#divcallmeMsg").show();
                },
                error: function(result) {
                    alert(result);
                }
            });
        } else {
            document.getElementById('modal-body-msg').innerHTML = "Please check the box before submitting";
            $('#callme').modal('show');
            return false;
        }
    });

    function getval(control) {
        var num = $("#" + control).val();
        return num;
    }
    $('#AgiveCall').click(function() {
        var url = (window.location.href).split('/');
        var sName = "";
        var sContact = $('#FooterText').val();
        if (!validMobileNo('FooterText', "Please enter valid phone number")) {
            return false;
        }
        var sEmail = "";
        var sPageSource = window.location.href;
        var sProduct = '';
        if (url[4] == 'retail-products' || url[4] == 'commercial-products') {
            if (url[6] != undefined) {
                sProduct = url[6];
            }
        }
        $.ajax({
            url: "/general-insurance/services/LoadContent.ashx",
            type: 'GET',
            async: false,
            contentType: "application/json; charset=utf-8",
            data: {
                sAction: "NeedHelpWebService",
                sName: sName,
                sEmail: sEmail,
                sContact: sContact,
                sPageSource: sPageSource,
                sProductName: sProduct
            },
            success: function(result) {
                $('#FooterText').val('');
                $("#placeholderlast1").show();
                $("#placeholderlast").hide();
            },
            error: function(result) {
                alert(result);
            }
        });
    });
    $('input:radio').change(function() {
        if ($('#RadioTopUpyes').is(':checked')) {
            $('#DivFilterSection').show();
        };
    });
    $("#ex6").slider({
        tooltip: 'hide'
    });
    $("#ex6").on("slideStop", function(slideEvt) {
        var amt = slideEvt.value;
        var famt = formatCurrency(parseInt(amt));
        $("#ex6SliderVal").text(famt);
    });
    $("#ex7").slider({
        tooltip: 'hide'
    });
    $("#ex7").on("slideStop", function(slideEvt) {
        $("#ex7SliderVal").text(slideEvt.value);
    });
    $('#DivShowtopUpPlans').click(function() {
        if ($('#ex8').val() < 3) {
            sCriteria = 'Annual Income 2000000';
        } else if ($('#ex8').val() < 5) {
            sCriteria = 'Annual Income 3000000';
        } else {
            sCriteria = 'Annual Income 5000000';
        }
        $.ajax({
            url: "/general-insurance/services/LoadContent.ashx",
            type: 'GET',
            async: false,
            contentType: "application/json; charset=utf-8",
            data: {
                sAction: "LoadProductRecommendation",
                sCriteria: sCriteria
            },
            success: function(result) {
                var obj = JSON.parse(result);
                DivTopUpPlan.innerHTML = obj.sTopup;
            },
            error: function(result) {
                alert(result);
            }
        });
        $('#DivTopupplanpolicy').show();
    });
    $('#btnShowAll').click(function() {
        $('#UnsuggestPlan').fadeIn();
        $('#DivSuggestPlan').hide();
        $('#btnShowAll').hide();
        $('#productDiv').show();
    });
    $('#btnSuggestPlan').click(function() {
        $('#btnShowAll').show();
        if (sFamilySize <= 1 || sFamilySize == undefined) {
            $('#DivFamilyPlan').hide();
        } else {
            $('#DivFamilyPlan').show();
        }
        $('#UnsuggestPlan').hide();
        $('#productDiv').hide();
        $('#DivSuggestPlan').fadeIn();
        var income = $('#ex6').val();
        var age = $('#ex7').val();
        var sCriteria;
        switch (true) {
            case income <= 250000:
                {
                    if (age >= 18 && age <= 35) {
                        sCriteria = 'Annual Income 250000 Age 18-35';
                    } else if (age > 35 && age <= 55) {
                        sCriteria = 'Annual Income 250000 Age 36-55';
                    } else if (age > 55 && age <= 65) {
                        sCriteria = 'Annual Income 250000 Age 56-65';
                    } else if (age > 65 && age <= 70) {
                        sCriteria = 'Annual Income 250000 Age 66-70';
                    }
                }
                break;
            case income <= 500000:
                {
                    if (age > 18 && age <= 35) {
                        sCriteria = 'Annual Income 250000-500000 Age 18-35';
                    } else if (age > 35 && age <= 55) {
                        sCriteria = 'Annual Income 250000-500000 Age 36-55';
                    } else if (age > 55 && age <= 65) {
                        sCriteria = 'Annual Income 250000-500000 Age 56-65';
                    } else if (age > 65 && age <= 70) {
                        sCriteria = 'Annual Income 250000-500000 Age 66-70';
                    }
                }
                break;
            case income <= 1000000:
                {
                    if (age > 18 && age <= 35) {
                        sCriteria = 'Annual Income 500000-1000000 Age 18-35';
                    } else if (age > 35 && age <= 55) {
                        sCriteria = 'Annual Income 500000-1000000 Age 36-55';
                    } else if (age > 55 && age <= 65) {
                        sCriteria = 'Annual Income 500000-1000000 Age 56-65';
                    } else if (age > 65 && age <= 70) {
                        sCriteria = 'Annual Income 500000-1000000 Age 66-70';
                    }
                }
                break;
            case income <= 2000000:
                {
                    if (age > 18 && age <= 35) {
                        sCriteria = 'Annual Income 1000000-2000000 Age 18-35';
                    } else if (age > 35 && age <= 55) {
                        sCriteria = 'Annual Income 1000000-2000000 Age 36-55';
                    } else if (age > 55 && age <= 65) {
                        sCriteria = 'Annual Income 1000000-2000000 Age 56-65';
                    } else if (age > 65 && age <= 70) {
                        sCriteria = 'Annual Income 1000000-2000000 Age 66-70';
                    }
                }
                break;
            case income <= 5000000:
                {
                    if (age > 18 && age <= 35) {
                        sCriteria = 'Annual Income 2000000-5000000 Age 18-35';
                    } else if (age > 35 && age <= 55) {
                        sCriteria = 'Annual Income 2000000-5000000 Age 36-55';
                    } else if (age > 55 && age <= 65) {
                        sCriteria = 'Annual Income 2000000-5000000 Age 56-65';
                    } else if (age > 65 && age <= 70) {
                        sCriteria = 'Annual Income 2000000-5000000 Age 66-70';
                    }
                }
                break;
            case income > 5000000:
                {
                    if (age > 18 && age <= 35) {
                        sCriteria = 'Annual Income Above 5000000 Age 18-35';
                    } else if (age > 35 && age <= 55) {
                        sCriteria = 'Annual Income Above 5000000 Age 36-55';
                    } else if (age > 55 && age <= 65) {
                        sCriteria = 'Annual Income Above 5000000 Age 56-65';
                    } else if (age > 65 && age <= 70) {
                        sCriteria = 'Annual Income Above 5000000 Age 66-70';
                    }
                }
                break;
        }
        $.ajax({
            url: "/general-insurance/services/LoadContent.ashx",
            type: 'GET',
            async: false,
            contentType: "application/json; charset=utf-8",
            data: {
                sAction: "LoadProductRecommendation",
                sCriteria: sCriteria
            },
            success: function(result) {
                var obj = JSON.parse(result);
                DivIndividualHealth.innerHTML = obj.sHealth;
                DivFamilyHealth.innerHTML = obj.sFloater;
                DivPersonalAccident.innerHTML = obj.sPersonalAccident;
                DivCriticalIllness.innerHTML = obj.sCriticarePolicy;
                DivHospiCash.innerHTML = obj.sHospicash;
            },
            error: function(result) {
                alert(result);
            }
        });
    });
});