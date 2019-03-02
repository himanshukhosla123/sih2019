var isFileUpload = !1,
    claimServiMssg = "Dear $Name$, Your $Motor$ Claim has been registered. Your reference number is $ReferenceNo$. We will get in touch with you shortly.",
    complServiMssg = "Dear $Name$, Your complaint has been registered with us. Your reference number is $ReferenceNo$. We will get in touch with you shortly.",
    claimMssg = "<p>Thank you, $Name$ </p><p>Your <b>$product$</b> claim has been reported and your request id is <b>$requestId$</b>. We will get in touch with you shortly.</p>",
    compMssg = "Thank you $Name$, %0D%0A%0D%0AWe will get in touch with you shortly. %0D%0A%0D%0AYour reference number is: $requestId$ .%0D%0A%0D%0AIn case of any further query, you may call us on our help line numbers: 1800-220-233 / 1860-500-3333 / 022-67837800. You may also like to keep the reference ID handy when you call us for anything related to your query. This will help us track your request faster and enable us to serve you better.",
    today = new Date,
    dd = today.getDate(),
    mm = today.getMonth() + 1,
    yyyy = today.getFullYear();

function SendServicesms(e, t) {
    t += "%0D%0A%0D%0ASent from Future Generali";
    var l = e;
    if (10 == l.length) {
        var a = new XMLHttpRequest;
        a.open("GET", "https://bulkpush.mytoday.com/BulkSms/SingleMsgApi?&feedid=326417&username=9004388957&password=dmtdj&To=" + l + "&Text=" + t + "&senderid=FUTGEN&v=1.1&msg_type=TEXT&auth_scheme=PLAIN", !0), a.onreadystatechange = function() {
            4 == a.readyState && JSON.parse(a.responseText).setHeader()
        }, a.send()
    }
}

function uploadResume() {
    var e = $("#txtFile").get(0).files,
        t = e[0].name.substr(e[0].name.lastIndexOf(".") + 1),
        l = e[0].size;
    if ("bin" == t || "exe" == t || "dll" == t) return $(".msgg").html("Please Upload Proper File"), $("#uploadfile").modal("show"), !1;
    if ("txt" != t && "doc" != t && "docx" != t && "pdf" != t && "jpeg" != t && "jpg" != t && "gif" != t && "png" != t) return $(".msgg").html("Please upload supported file formats ( .txt, .doc, .docx, .pdf, .jpeg, .jpg, .gif, .png). Max file size: 2 MB"), $("#uploadfile").modal("show"), !1;
    if (l > 2097152) return $(".msgg").html("Please upload file max upto 2 MB"), $("#uploadfile").modal("show"), !1;
    for (var a = new FormData, i = 0; i < e.length; i++) a.append(e[i].name, e[i]);
    $.ajax({
        url: "/general-insurance/Services/UploadHandler.ashx",
        type: "POST",
        contentType: !1,
        processData: !1,
        data: a,
        success: function(e) {
            $(".msgg").html("File Uploaded Successfully"), $("#uploadfile").modal("show"), $("#txtFile").val(""), $(".uploadmsg").html(e + '<span><a id="aremogve" href="javascript://" style="font-size: 18px;margin-left: 5px;">x</a></span>'), $(".uploadmsg").show(), isFileUpload = !0
        },
        error: function(e) {
            $(".msgg").html(e.statusText), $("#uploadfile").modal("show")
        }
    })
}

function ShowYes() {
    $("#yes").show(), $("#no").show()
}

function ShowNo() {
    $("#yes").hide(), $("#no").show()
}

function LoadPrefLoc(e) {
    $.ajax({
        url: "/general-insurance/services/ReportForms.ashx",
        type: "GET",
        async: !1,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "LoadPrefLoc",
            jobId: e
        },
        success: function(e) {
            e.indexOf("Database error") > 0 && //alert(e);
            try {
                var t = $.parseJSON(e);
                $("#ddlPrefLoc,.ddljPrefLoc").empty().append($("<option></option>").val("0").html("Select Preferred location*"));
                for (var l = 0; l < t.cLoclists.length; l++) $("#ddlPrefLoc,.ddljPrefLoc").append($("<option></option>").val("" + t.cLoclists[l].iID).html("" + t.cLoclists[l].sName));
                var a = sessionStorage.getItem("IsUploaded");
                if (null != a || void 0 != a) {
                    var i = sessionStorage.getItem("ddljPrefLoc");
                    $(".ddljPrefLoc").val(i)
                }
            } catch (e) {
                $("#ddlPrefLoc,.ddljPrefLoc").empty().append($("<option></option>").val("0").html("Select Preferred location*"))
            }
        },
        error: function(e) {
            //alert(e)
        }
    })
}

function LoadState() {
    $.ajax({
        url: "/general-insurance/services/ReportForms.ashx",
        type: "GET",
        async: !1,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "LoadState",
            iID: 1
        },
        success: function(e) {
            e.indexOf("Database error") > 0 && //alert(e);
            try {
                var t = $.parseJSON(e);
                $("#ddlState,.ddljstate").empty().append($("<option></option>").val("0").html("Please Select State *"));
                for (var l = 0; l < t.clists.length; l++) $("#ddlState,.ddljstate").append($("<option></option>").val("" + t.clists[l].iID).html("" + t.clists[l].sName));
                var a = sessionStorage.getItem("IsUploaded");
                if (null != a || void 0 != a) {
                    var i = sessionStorage.getItem("ddljstate");
                    $(".ddljstate").val(i), PopCityAccState()
                }
            } catch (e) {
                $("#ddlState,.ddljstate").empty().append($("<option></option>").val("0").html("Please Select State"))
            }
        },
        error: function(e) {
            //alert(e)
        }
    })
}

function SaveAdvisor() {
    var e;
    if ($(".form-group").removeClass("has-error"), $(".control-label:last-child").hide(), Ddl("#ddlSalutation", "select Salutation", "#lblerrSalutation", "#divSalutation") || (e = !1), Ddl("#ddlState", "Select State", "#lblerrState", "#divState") || (e = !1), Ddl("#ddlCity", "Select City", "#lblerrCity", "#divCity") || (e = !1), Ddl("#ddlgender", "Select Gender", "#lblgender", "#divCity") || (e = !1), RequiredField("#txtFirstName", " Enter first name.", "#lblerrFirstName", "#divFirstName") || (e = !1), RequiredField("#txtLastName", " Enter last name.", "#lblerrLastName", "#divLastName") || (e = !1), RequiredField("#txtDOB", " Enter date of birth.", "#lblerrDOB", "#divDOB") || (e = !1), validDate("txtDOB", " Enter valid date and it should be dd/mm/yyyy", "#lblerrDOB", "#divDOB") || (e = !1), RequiredField("#txtEmailID", " Enter email id", "#lblerrEmailID", "#divEmailID") && CheckIfValidEmail("#txtEmailID", " Enter correct email id", "#lblerrEmailID", "#divEmailID") || (e = !1), RequiredField("#txtMobileNo", " Enter mobile no", "#lblerrMobileNo", "#divMobileNo") && MobileNo("#txtMobileNo", " Enter correct mobile no", "#lblerrMobileNo", "#divMobileNo") || (e = !1), RequiredField("#txtComments", " Enter comments", "#lblerrComments", "#divComments") || (e = !1), 0 == e) return $("#error").html("* are the mandatory fields to be filled in"), $("#error").css("display", "none"), !1;
    var t = $("#ddlState").val(),
        l = $("#ddlCity").val(),
        a = $("#ddlgender").val();
    $.ajax({
        url: "/general-insurance/services/ReportForms.ashx",
        type: "GET",
        async: !1,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "SaveAdvisor",
            sSalutation: $("#ddlSalutation").val(),
            sFiristName: $("#txtFirstName").val(),
            sLastName: $("#txtLastName").val(),
            dtDOB: $("#txtDOB").val(),
            iMobileNo: $("#txtMobileNo").val(),
            sEmailId: $("#txtEmailID").val(),
            sComments: $("#txtComments").val(),
            istate: t,
            icity: l,
            sgender: a,
            state: $("#ddlState option:selected").text(),
            city: $("#ddlCity option:selected").text()
        },
        success: function(e) {
            $("#pErrorMessage").html(e), $("#divErrMessage").fadeIn(), ResetAdvisor(), window.location.href = e
        },
        error: function(e) {
            //alert(e)
        }
    })
}

function PopCityAccState() {
    var e = "0";
    try {
        e = document.getElementById("ddlState").value
    } catch (t) {
        e = $(".ddljstate").val()
    }
    $.ajax({
        url: "/general-insurance/services/ReportForms.ashx",
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "populateCityAccToState",
            stateId: e
        },
        success: function(e) {
            e.indexOf("Database error") > 0 && //alert(e);
            try {
                var t = $.parseJSON(e);
                $("#ddlCity,.ddljCity").empty().append($("<option></option>").val("0").html("Please Select City *"));
                for (var l = 0; l < t.clists.length; l++) $("#ddlCity,.ddljCity").append($("<option></option>").val("" + t.clists[l].cId).html("" + t.clists[l].cityN));
                var a = sessionStorage.getItem("IsUploaded");
                if (null != a || void 0 != a) {
                    var i = sessionStorage.getItem("ddljCity");
                    $(".ddljCity").val(i)
                }
            } catch (e) {
                $("#ddlCity,.ddljCity").empty().append($("<option></option>").val("0").html("Please Select City *"))
            }
        },
        error: function(e) {
            //alert("fn PopCityAccState " + e)
        }
    })
}

function ResetAdvisor() {
    $("#ddlSalutation").val(0), $("#txtFirstName").val(""), $("#txtLastName").val(""), $("#txtDOB").val(""), $("#txtStdCode").val(""), $("#txtPhoneNo").val(""), $("#txtMobileNo").val(""), $("#txtPincode").val(""), $("#txtEmailID").val(""), $("#txtComments").val(""), $("#txtAddress").val(""), $("#ddlState").val(0), $("#ddlCity").val(0), $("#txtIssue").val(""), $("#txtWhatYouSay").val(""), $("#txtFile").val(""), $("#ddlTypeOfQuery").val(0), $("#txtPolicyNo").val(""), $("#txtExTelNo").val(""), $("#ddlWorkExp").val(-1), $("#txtHighQualification").val(""), $("#txtEmailID2").val("")
}

function SaveAppreciation() {
    var e;
    if ($(".form-group").removeClass("has-error"), $(".control-label:last-child").hide(), Ddl("#ddlSalutation", " Select Salutation", "#lblerrSalutation", "#divSalutation") || (e = !1), RequiredField("#txtFirstName", " Enter first name", "#lblerrFirstName", "#divFirstName") || (e = !1), RequiredField("#txtLastName", " Enter last name", "#lblerrLastName", "#divLastName") || (e = !1), RequiredField("#txtEmailID", " Enter email id", "#lblerrEmailID", "#divEmailID") && CheckIfValidEmail("#txtEmailID", " Enter correct email id", "#lblerrEmailID", "#divEmailID") || (e = !1), RequiredField("#txtMobileNo", " Enter mobile no", "#lblerrMobileNo", "#divMobileNo") && MobileNo("#txtMobileNo", " Enter correct mobile no", "#lblerrMobileNo", "#divMobileNo") || (e = !1), RequiredField("#txtWhatYouSay", " Fill the Details", "#lblerrWhatYouSay", "#divWhatYouSay") || (e = !1), 0 == e) return !1;
    for (var t = $("#txtFile").get(0).files, l = new FormData, a = 0; a < t.length; a++) l.append(t[a].name, t[a]);
    $.ajax({
        url: "/general-insurance/Services/UploadHandler.ashx",
        type: "POST",
        contentType: !1,
        processData: !1,
        data: l,
        success: function(e) {},
        error: function(e) {
            //alert(e.statusText)
        }
    }), $.ajax({
        url: "/general-insurance/Services/ReportForms.ashx",
        type: "GET",
        async: !1,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "SaveAppreciation",
            sFiristName: $("#txtFirstName").val(),
            sLastName: $("#txtLastName").val(),
            iMobileNo: $("#txtMobileNo").val(),
            sEmailId: $("#txtEmailID").val(),
            sWhatYouSay: $("#txtWhatYouSay").val(),
            sFilePath: $("#txtFile").val()
        },
        success: function(e) {
            ResetAdvisor(), window.location.href = e
        },
        error: function(e) {
            //alert(e)
        }
    })
}

function SaveEnquiry() {
    var e, t;
    if ($(".form-group").removeClass("has-error"), $(".control-label:last-child").hide(), $("#rbtYes").is(":checked")) e = 1;
    else {
        if (!$("#rbtNo").is(":checked")) return !1;
        e = 0
    }
    if (0 == e || RequiredField("#txtPolicyNo", " Enter policy no", "#lblerrPolicyNo", "#divPolicyNo") || (t = !1), Ddl("#ddlTypeOfQuery", " Select Query", "#lblerrTypeOfQuery", "#divTypeOfQuery") || (t = !1), Ddl("#ddlTypeOfQuery", " Select Query", "#lblerrTypeOfQuery", "#divTypeOfQuery") || (t = !1), Ddl("#ddlState", " Select State", "#lblerrState", "#divState") || (t = !1), Ddl("#ddlCity", " Select City", "#lblerrCity", "#divCity") || (t = !1), RequiredField("#txtFirstName", " Enter first name", "#lblerrFirstName", "#divFirstName") || (t = !1), RequiredField("#txtLastName", " Enter last name", "#lblerrLastName", "#divLastName") || (t = !1), RequiredField("#txtEmailID", " Enter email id", "#lblerrEmailID", "#divEmailID") && CheckIfValidEmail("#txtEmailID", " Enter correct email id", "#lblerrEmailID", "#divEmailID") || (t = !1), RequiredField("#txtMobileNo", " Enter mobile no", "#lblerrMobileNo", "#divMobileNo") && MobileNo("#txtMobileNo", " Enter correct mobile no", "#lblerrMobileNo", "#divMobileNo") || (t = !1), RequiredField("#txtPincode", " Enter pincode", "#lblerrPincode", "#divPincode") || (t = !1), RequiredField("#txtAddress", " Enter address", "#lblerrAddress", "#divAddress") || (t = !1), 0 == t) return !1;
    var l = $("#ddlState option:selected").text(),
        a = $("#ddlCity option:selected").text(),
        i = $("#txtEmailID").val();
    "" == i && (i = $("#txtemailIDD").val()), $.ajax({
        url: "/general-insurance/Services/ReportForms.ashx",
        type: "GET",
        async: !1,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "SaveEnquery",
            sSalutation: $("#ddlSalutation").val(),
            sFiristName: $("#txtFirstName").val(),
            sLastName: $("#txtLastName").val(),
            dtDOB: $("#txtDOB").val(),
            iStdCode: $("#txtStdCode").val(),
            iTelPhoneNo: $("#txtPhoneNo").val(),
            iMobileNo: $("#txtMobileNo").val(),
            iPinCode: $("#txtPincode").val(),
            sEmailId: $("#txtEmailID").val(),
            sComments: $("#txtComments").val(),
            sAddress: $("#txtAddress").val(),
            iState: $("#ddlState").val(),
            iCity: $("#ddlCity").val(),
            bTypeOfCustomer: e,
            sTypeOfQuery: $("#ddlTypeOfQuery").val(),
            sPolicyNo: $("#txtPolicyNo").val(),
            sExTelNo: $("#txtExTelNo").val(),
            sstate: l,
            ccity: a
        },
        success: function(e) {
            var t;
            t = e.split("$%"), sessionStorage.setItem("enClient", t[1]), sessionStorage.setItem("enguid", t[2]);
            var l = compMssg;
            l = l.replace("$Name$", $("#txtFirstName").val()).replace("$requestId$", t[2]), SendServicesms($("#txtMobileNo").val(), l), ResetAdvisor(), window.location.href = "/general-insurance/" + t[0]
        },
        error: function(e) {
            //alert(e)
        }
    })
}

function SaveVOCSection() {
    var e;
    if ($(".form-group").removeClass("has-error"), $(".control-label:last-child").hide(), RequiredField("#txtName", " Enter name", "#lblerrName", "#divName") || (e = !1), RequiredField("#txtMobileNo", " Enter mobile no", "#lblerrMobileNo", "#divMobileNo") && MobileNo("#txtMobileNo", " Enter correct mobile no", "#lblerrMobileNo", "#divMobileNo") || (e = !1), RequiredField("#txtEmailID", " Enter email id", "#lblerrEmailID", "#divEmailID") && CheckIfValidEmail("#txtEmailID", " Enter correct email id", "#lblerrEmailID", "#divEmailID") || (e = !1), 0 == e) return !1;
    $.ajax({
        url: "/general-insurance/Services/ReportForms.ashx",
        type: "GET",
        async: !1,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "SaveVocSection",
            sName: $("#txtName").val(),
            iMobileNo: $("#txtMobileNo").val(),
            sEmailId: $("#txtEmailID").val(),
            sPolicyNo: $("#txtPolicyNo").val(),
            sFacebookID: $("#txtFacebookID").val(),
            sLinkedInID: $("#txtLinkedInID").val(),
            sFeedback: $("#txtFeedback").val()
        },
        success: function(e) {
            sessionStorage.setItem("UserComment", $("#txtFeedback").val()), window.location.href = "/general-insurance/share-your-appreciation/thank-you"
        },
        error: function(e) {
            //alert(e)
        }
    })
}

function ResetVoc() {
    $("#txtName").val(""), $("#txtMobileNo").val(""), $("#txtEmailID").val(""), $("#txtPolicyNo").val(""), $("#txtFacebookID").val(""), $("#txtLinkedInID").val(""), $("#txtFeedback").val(""), $("#txtIssue").val(""), $("#txtWhatYouSay").val(""), $("#txtFile").val(""), $("#ddlTypeOfQuery").val(0), $("#txtPolicyNo").val(""), $("#txtExTelNo").val(""), $("#ddlWorkExp").val(-1), $("#txtHighQualification").val(""), $("#txtEmailID2").val("")
}

function SaveRequestCallBack() {
    var e;
    if ($(".form-group").removeClass("has-error"), $(".control-label:last-child").hide(), Ddl("#ddlState", " Select State.", "#lblerrState", "#divState") || (e = !1), Ddl("#ddlCity", " Select City", "#lblerrCity", "#divCity") || (e = !1), RequiredField("#txtFirstName", " Enter name", "#lblerrFirstName", "#divFirstName") || (e = !1), RequiredField("#txtDOB", " Enter date of birth", "#lblerrDOB", "#divDOB") || (e = !1), RequiredField("#txtEmailID", " Enter email id", "#lblerrEmailID", "#divEmailID") && CheckIfValidEmail("#txtEmailID", " Enter correct email id", "#lblerrEmailID", "#divEmailID") || (e = !1), RequiredField("#txtMobileNo", " Enter mobile no", "#lblerrMobileNo", "#divMobileNo") && MobileNo("#txtMobileNo", " Enter correct mobile no", "#lblerrMobileNo", "#divMobileNo") || (e = !1), 0 == e) return !1;
    $.ajax({
        url: "/general-insurance/Services/ReportForms.ashx",
        type: "GET",
        async: !1,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "SaveRequestCallBack",
            sSalutation: $("#ddlSalutation").val(),
            sFiristName: $("#txtFirstName").val(),
            dtDOB: $("#txtDOB").val(),
            iMobileNo: $("#txtMobileNo").val(),
            sEmailId: $("#txtEmailID").val(),
            iState: $("#ddlState").val(),
            iCity: $("#ddlCity").val()
        },
        success: function(e) {
            ResetAdvisor(), window.location.href = e
        },
        error: function(e) {
            //alert(e)
        }
    })
}

function SaveClaimIntimationMotor() {
    var e;
    if ($(".form-group").removeClass("has-error"), $(".control-label:last-child").hide(), "Type of Claim*" == $("#txtTypeOfClaim").val() && (e = !1, $("#lblerrTypeOfClaim").html("Please select type of damage"), $("#lblerrTypeOfClaim").css("display", "block"), $("#divTypeOfClaim").addClass("has-error")), Ddl("#ddlSalutation", " Select Salutation", "#lblerrSalutation", "#divSalutation") || (e = !1), Ddl("#ddlState", " Select State", "#lblerrState", "#divState") || (e = !1), Ddl("#txtTypeOfClaim", " Select Type of Claim", "#lblerrTypeOfClaim", "#divTypeOfClaim") || (e = !1), Ddl("#ddlCity", " Select City", "#lblerrCity", "#divCity") || (e = !1), RequiredField("#txtPolicyNo", " Enter policy no", "#lblerrPolicyNo", "#divPolicyNo") || (e = !1), RequiredField("#txtlossloc", " Enter loss location", "#lblerrlossloc", "#divlossloc") || (e = !1), RequiredField("#txtFirstName", " Enter first name", "#lblerrFirstName", "#divFirstName") || (e = !1), RequiredField("#txtLastName", " Enter last name", "#lblerrLastName", "#divLastName") || (e = !1), RequiredField("#txtEmailID", " Enter email id", "#lblerrEmailID", "#divEmailID") && CheckIfValidEmail("#txtEmailID", " Enter correct email id", "#lblerrEmailID", "#divEmailID") || (e = !1), RequiredField("#txtMobileNo", " Enter mobile no", "#lblerrMobileNo", "#divMobileNo") && MobileNo("#txtMobileNo", " Enter correct mobile no", "#lblerrMobileNo", "#divMobileNo") || (e = !1), RequiredField("#txtAddress", " Enter address", "#lblerrAddress", "#divAddress") || (e = !1), RequiredField("#txtDateOfLoss", " Enter date of loss", "#lblerrDateOfLoss", "#divDateOfLoss") || (e = !1), validDate("txtDateOfLoss", "Enter valid date and it should be dd/mm/yyyy", "#lblerrDateOfLoss", "#divDateOfLoss") || (e = !1), RequiredField("#txtNameOfInsured", " Enter name of insured", "#lblerrNameOfInsured", "#divNameOfInsured") || (e = !1), 0 == e) return !1;
    var t = $("#ddlState option:selected").text(),
        l = $("#ddlCity option:selected").text();
    $.ajax({
        url: "/general-insurance/services/ReportForms.ashx",
        type: "GET",
        async: !1,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "SaveClaimIntimationMotor",
            sPolicyNo: $("#txtPolicyNo").val(),
            sVINChassisNo: " ",
            sSalutation: $("#ddlSalutation").val(),
            sFiristName: $("#txtFirstName").val(),
            sLastName: $("#txtLastName").val(),
            dtDOB: $("#txtDOB").val(),
            iStdCode: 1235,
            iTelPhoneNo: 12345,
            iMobileNo: $("#txtMobileNo").val(),
            iMobileNo2: $("#txtMobileNo2").val(),
            iPinCode: $("#txtPincode").val(),
            sEmailId: $("#txtEmailID").val(),
            sComments: $("#txtComments").val(),
            sAddress: $("#txtAddress").val(),
            sLandmark: $("#txtLandmark").val(),
            iState: $("#ddlState").val(),
            iCity: $("#ddlCity").val(),
            sNameOfInsured: $("#txtNameOfInsured").val(),
            sTypeOfClaim: $("#txtTypeOfClaim").val(),
            dtDateOfLoss: $("#txtDateOfLoss").val(),
            sDescription: $("#txtDescription").val(),
            sstate: t,
            ccity: l
        },
        success: function(e) {
            var t;
            t = e.split("%$"), sessionStorage.setItem("cliamCustomerName", t[2]), sessionStorage.setItem("product", t[3]), sessionStorage.setItem("claimguid", t[1]);
            var l = claimServiMssg;
            l = l.replace("$Name$", $("#txtFirstName").val()).replace("$Motor$", "Motor").replace("$ReferenceNo$", t[1]), SendServicesms($("#txtMobileNo").val(), l), ResetMotor(), window.location.href = "/general-insurance/" + t[0]
        },
        error: function(e) {
            //alert(e)
        }
    })
}

function SaveClaimIntimationNonMotor() {
    var e;
    if ($(".form-group").removeClass("has-error"), $(".control-label:last-child").hide(), Ddl("#ddlState", " Select State", "#lblerrState", "#divState") || (e = !1), Ddl("#ddlCity", " Select City", "#lblerrCity", "#divCity") || (e = !1), RequiredField("#txtPolicyNo", " Enter policy no", "#lblerrPolicyNo", "#divPolicyNo") || (e = !1), RequiredField("#txtFirstName", " Enter first name", "#lblerrFirstName", "#divFirstName") || (e = !1), RequiredField("#txtLastName", " Enter last name", "#lblerrLastName", "#divLastName") || (e = !1), RequiredField("#txtlossloc", " Enter loss location", "#lblerrlossloc", "#divlossloc") || (e = !1), RequiredField("#txtEmailID", " Enter email id", "#lblerrEmailID", "#divEmailID") && CheckIfValidEmail("#txtEmailID", " Enter correct email id", "#lblerrEmailID", "#divEmailID") || (e = !1), RequiredField("#txtMobileNo", " Enter mobile no", "#lblerrMobileNo", "#divMobileNo") && MobileNo("#txtMobileNo", " Enter correct mobile no", "#lblerrMobileNo", "#divMobileNo") || (e = !1), RequiredField("#txtAddress", " Enter address", "#lblerrAddress", "#divAddress") || (e = !1), RequiredField("#txtLossEstimate", " Enter loss estimate", "#lblerrLossEstimate", "#divLossEstimate") || (e = !1), validAmt("txtLossEstimate", " Enter valid amount", "#lblerrLossEstimate", "#divLossEstimate") || (e = !1), RequiredField("#txtDateOfLoss", " Enter date of loss", "#lblerrDateOfLoss", "#divDateOfLoss") || (e = !1), validDate("txtDateOfLoss", "Enter valid date and it should be dd/mm/yyyy", "#lblerrDateOfLoss", "#divDateOfLoss") || (e = !1), RequiredField("#txtDescription", " Enter the details", "#lblerrDescription", "#divDescription") || (e = !1), RequiredField("#txtNameOfInsured", " Enter name of insured", "#lblerrNameOfInsured", "#divNameOfInsured") || (e = !1), 0 == e) return !1;
    var t = $("#ddlState option:selected").text(),
        l = $("#ddlCity option:selected").text();
    $.ajax({
        url: "/general-insurance/services/ReportForms.ashx",
        type: "GET",
        async: !1,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "SaveClaimIntimationNonMotor",
            sPolicyNo: $("#txtPolicyNo").val(),
            sSalutation: $("#ddlSalutation").val(),
            sFiristName: $("#txtFirstName").val(),
            sLastName: $("#txtLastName").val(),
            dtDOB: $("#txtDOB").val(),
            iStdCode: " ",
            iTelPhoneNo: " ",
            iMobileNo: $("#txtMobileNo").val(),
            iMobileNo2: $("#txtMobileNo2").val(),
            iPinCode: $("#txtPincode").val(),
            sEmailId: $("#txtEmailID").val(),
            sComments: $("#txtComments").val(),
            sAddress: $("#txtAddress").val(),
            sLandmark: $("#txtLandmark").val(),
            iState: $("#ddlState").val(),
            iCity: $("#ddlCity").val(),
            sNameOfInsured: $("#txtNameOfInsured").val(),
            sLossEstimate: $("#txtLossEstimate").val(),
            dtDateOfLoss: $("#txtDateOfLoss").val(),
            sDescription: $("#txtDescription").val(),
            sstate: t,
            ccity: l
        },
        success: function(e) {
            var t;
            t = e.split("%$"), sessionStorage.setItem("cliamCustomerName", t[2]), sessionStorage.setItem("product", t[3]), sessionStorage.setItem("claimguid", t[1]);
            var l = claimServiMssg;
            l = l.replace("$Name$", $("#txtFirstName").val()).replace("$Motor$", "Other").replace("$ReferenceNo$", t[1]), SendServicesms($("#txtMobileNo").val(), l), ResetMotor(), ResetHealth(), window.location.href = "/general-insurance/" + t[0]
        },
        error: function(e) {
            //alert(e)
        }
    })
}

function SaveClaimIntimationHealth() {
    var e, t;
    if ($(".form-group").removeClass("has-error"), $(".control-label:last-child").hide(), $("#rbtYes").is(":checked")) e = 1;
    else {
        if (!$("#rbtNo").is(":checked")) return !1;
        e = 0
    }
    if (0 == e ? (RequiredField("#txtNameOfPatient", "Enter patient name", "#lblerrNameOfPatient", "#divNameOfPatient") || (t = !1), RequiredField("#txtHealthIdCardNo", "Enter patients heath id card no", "#lblerrHealthIdCardNo", "#divHealthIdCardNo") || (t = !1), RequiredField("#txtMobileNo", "Enter mobile no", "#lblerrMobileNo", "#divMobileNo") || (t = !1), RequiredField("#txtHospitalName", " Enter hospital name", "#lblerrHospitalName", "#divHospitalName") || (t = !1), RequiredField("#txtHospitalAddress", " Enter hospital address", "#lblerrHospitalAddress", "#divHospitalAddress") || (t = !1), Ddl("#ddlState", " Select State", "#lblerrState", "#divState") || (t = !1), Ddl("#ddlCity", " Select City", "#lblerrCity", "#divCity") || (t = !1), RequiredField("#txtPincode", " Enter pincode", "#lblerrPincode", "#divPincode") || (t = !1), RequiredField("#txtDoctorName", " Enter doctor name", "#lblerrDoctorName", "#divDoctorName") || (t = !1), RequiredField("#txtDoctorContactNo", " Enter doctor contact no", "#lblerrDoctorContactNo", "#divDoctorContactNo") || (t = !1), RequiredField("#txtAdmissionDate", " Enter admission date", "#lblerrAdmissionDate", "#divAdmissionDate") || (t = !1), validDate("txtAdmissionDate", "Enter valid date and it should be dd/mm/yyyy", "#lblerrAdmissionDate", "#divAdmissionDate") || (t = !1), RequiredField("#txtDischargeDate", " Enter discharge date", "#lblerrDischargeDate", "#divDischargeDate") || (t = !1), validDate("txtDischargeDate", "Enter valid date and it should be dd/mm/yyyy", "#lblerrDischargeDate", "#divDischargeDate") || (t = !1), RequiredField("#txtApproxExpense", " Enter approx expense", "#lblerrApproxExpense", "#divApproxExpense") || (t = !1), validAmt("txtApproxExpense", " Enter valid amount", "#lblerrApproxExpense", "#divApproxExpense") || (t = !1), RequiredField("#txtDiseaseAndTreatmentDetails", " Enter details", "#lblerrDiseaseAndTreatmentDetails", "#divDiseaseAndTreatmentDetails") || (t = !1)) : (RequiredField("#txtAccidentDate", " Enter accident date", "#lblerrAccidentDate", "#divAccidentDate") || (t = !1), validDate("txtAccidentDate", "Enter valid date and it should be dd/mm/yyyy", "#lblerrAccidentDate", "#divAccidentDate") || (t = !1), RequiredField("#txtAccidentTime", " Enter accident date", "#lblerrAccidentTime", "#divAccidentTime") || (t = !1), RequiredField("#txtDescription", " Enter the details", "#lblerrDescription", "#divDescription") || (t = !1), RequiredField("#txtPoliceStationDetails", " Enter the details", "#lblerrPoliceStationDetails", "#divPoliceStationDetails") || (t = !1), RequiredField("#txtPersonTookInsureToHospital", " Enter the details", "#lblerrPersonTookInsureToHospital", "#divPersonTookInsureToHospital") || (t = !1), RequiredField("#txtNameOfPatient", "Enter patient name", "#lblerrNameOfPatient", "#divNameOfPatient") || (t = !1), RequiredField("#txtHealthIdCardNo", "Enter patients heath id card no", "#lblerrHealthIdCardNo", "#divHealthIdCardNo") || (t = !1), RequiredField("#txtMobileNo", "Enter mobile no", "#lblerrMobileNo", "#divMobileNo") || (t = !1), RequiredField("#txtHospitalName", " Enter hospital name", "#lblerrHospitalName", "#divHospitalName") || (t = !1), RequiredField("#txtHospitalAddress", " Enter hospital address", "#lblerrHospitalAddress", "#divHospitalAddress") || (t = !1), Ddl("#ddlState", " Select State", "#lblerrState", "#divState") || (t = !1), Ddl("#ddlCity", " Select City", "#lblerrCity", "#divCity") || (t = !1), RequiredField("#txtPincode", " Enter pincode", "#lblerrPincode", "#divPincode") || (t = !1), RequiredField("#txtDoctorName", " Enter doctor name", "#lblerrDoctorName", "#divDoctorName") || (t = !1), RequiredField("#txtDoctorContactNo", " Enter doctor contact no", "#lblerrDoctorContactNo", "#divDoctorContactNo") || (t = !1), RequiredField("#txtAdmissionDate", " Enter admission date", "#lblerrAdmissionDate", "#divAdmissionDate") || (t = !1), validDate("txtAdmissionDate", "Enter valid date and it should be dd/mm/yyyy", "#lblerrAdmissionDate", "#divAdmissionDate") || (t = !1), RequiredField("#txtDischargeDate", " Enter discharge date", "#lblerrDischargeDate", "#divDischargeDate") || (t = !1), validDate("txtDischargeDate", "Enter valid date and it should be dd/mm/yyyy", "#lblerrDischargeDate", "#divDischargeDate") || (t = !1), RequiredField("#txtApproxExpense", " Enter approx expense", "#lblerrApproxExpense", "#divApproxExpense") || (t = !1), validAmt("txtApproxExpense", " Enter valid amount", "#lblerrApproxExpense", "#divApproxExpense") || (t = !1), RequiredField("#txtDiseaseAndTreatmentDetails", " Enter details", "#lblerrDiseaseAndTreatmentDetails", "#divDiseaseAndTreatmentDetails") || (t = !1)), 0 == t) return !1;
    $("#ddlState option:selected").text(), $("#ddlCity option:selected").text();
    $.ajax({
        url: "/general-insurance/services/ReportForms.ashx",
        type: "GET",
        async: !1,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "SaveClaimIntimationHealth",
            bhasAccident: e,
            sNameOfPatient: $("#txtNameOfPatient").val(),
            sHealthIdCardNo: $("#txtHealthIdCardNo").val(),
            sMobileNo: $("#txtMobileNo").val(),
            sHospitalName: $("#txtHospitalName").val(),
            sHospitalAddress: $("#txtHospitalAddress").val(),
            sHospitalContactNo: $("#txtHospitalContactNo").val(),
            iPinCode: $("#txtPincode").val(),
            iState: $("#ddlState").val(),
            iCity: $("#ddlCity").val(),
            sDoctorName: $("#txtDoctorName").val(),
            sDoctorContactNo: $("#txtDoctorContactNo").val(),
            sAdmissionDate: $("#txtAdmissionDate").val(),
            sDischargeDate: $("#txtDischargeDate").val(),
            sApproxExpense: $("#txtApproxExpense").val(),
            sDiseaseAndTreatmentDetails: $("#txtDiseaseAndTreatmentDetails").val(),
            dtAccidentDate: $("#txtAccidentDate").val(),
            sAccidentTime: $("#txtAccidentTime").val(),
            sDescription: $("#txtDescription").val(),
            sPoliceStationDetails: $("#txtPoliceStationDetails").val(),
            sPersonTookInsureToHospital: $("#txtPersonTookInsureToHospital").val()
        },
        success: function(e) {
            var t;
            t = e.split("%$"), sessionStorage.setItem("cliamCustomerName", t[2]), sessionStorage.setItem("product", t[3]), sessionStorage.setItem("claimguid", t[1]);
            var l = claimServiMssg;
            l = l.replace("$Name$", $("#txtNameOfPatient").val()).replace("$Motor$", "Health").replace("$ReferenceNo$", t[1]), SendServicesms($("#txtMobileNo").val(), l), ResetHealth(), window.location.href = "/general-insurance/" + t[0]
        },
        error: function(e) {
            //alert(e)
        }
    })
}

function SaveClaimIntimationPA() {
    $(".form-group").removeClass("has-error"), $(".control-label:last-child").hide();
    var e, t = 0,
        l = 0,
        a = 0,
        i = 0;
    if ($("#chkDeath").is(":checked") && (t = 1), $("#chkPTD").is(":checked") && (l = 1), $("#chkPPD").is(":checked") && (a = 1), $("#chkTTD").is(":checked") && (i = 1), RequiredField("#txtpolicyno", " Enter policy number", "#lblpolicyno", "#divpolicyno") || (e = !1), RequiredField("#txtNameOfPatient", " Enter patient name", "#lblerrNameOfPatient", "#divNameOfPatient") || (e = !1), RequiredField("#txtEmailID", " Enter email id", "#lblerrEmailID", "#divEmailID") && CheckIfValidEmail("#txtEmailID", " Enter correct email id", "#lblerrEmailID", "#divEmailID") || (e = !1), RequiredField("#txtMobileNo", " Enter mobile no", "#lblerrMobileNo", "#divMobileNo") && MobileNo("#txtMobileNo", " Enter correct mobile no", "#lblerrMobileNo", "#divMobileNo") || (e = !1), RequiredField("#txtHospitalName", " Enter hospital name", "#lblerrHospitalName", "#divHospitalName") || (e = !1), RequiredField("#txtHospitalAddress", " Enter hospital address", "#lblerrHospitalAddress", "#divHospitalAddress") || (e = !1), RequiredField("#txtClaimedAmount", " Enter claimed amount", "#lblerrClaimedAmount", "#divClaimedAmount") || (e = !1), validAmt("txtClaimedAmount", " Enter valid amount", "#lblerrClaimedAmount", "#divClaimedAmount") || (e = !1), RequiredField("#txtAccidentDate", " Enter accident date", "#lblerrAccidentDate", "#divAccidentDate") || (e = !1), validDate("txtAccidentDate", "Enter valid date and it should be dd/mm/yyyy", "#lblerrAccidentDate", "#divAccidentDate") || (e = !1), RequiredField("#txtAccidentTime", " Enter accident time", "#lblerrAccidentTime", "#divAccidentTime") || (e = !1), RequiredField("#txtDescription", " Enter the details", "#lblerrDescription", "#divDescription") || (e = !1), RequiredField("#txtPoliceStationDetails", " Enter the details", "#lblerrPoliceStationDetails", "#divPoliceStationDetails") || (e = !1), RequiredField("#txtPersonTookInsureToHospital", " Enter the details", "#lblerrPersonTookInsureToHospital", "#divPersonTookInsureToHospital") || (e = !1), 0 == e) return !1;
    $.ajax({
        url: "/general-insurance/services/ReportForms.ashx",
        type: "GET",
        async: !1,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "SaveClaimIntimationPA",
            sPolicyNo: $("#txtpolicyno").val(),
            sNameOfPatient: $("#txtNameOfPatient").val(),
            sHealthIdCardNo: $("#txtIdCardNo").val(),
            sMobileNo: $("#txtMobileNo").val(),
            sEmailID: $("#txtEmailID").val(),
            sHospitalName: $("#txtHospitalName").val(),
            sHospitalAddress: $("#txtHospitalAddress").val(),
            schkDeath: t,
            schkPTD: l,
            schkPPD: a,
            schkTTD: i,
            sClaimedAmount: $("#txtClaimedAmount").val(),
            dtAccidentDate: $("#txtAccidentDate").val(),
            sAccidentTime: $("#txtAccidentTime").val(),
            sDescription: $("#txtDescription").val(),
            sPoliceStationDetails: $("#txtPoliceStationDetails").val(),
            sPersonTookInsureToHospital: $("#txtPersonTookInsureToHospital").val()
        },
        success: function(e) {
            var t;
            t = e.split("%$"), sessionStorage.setItem("cliamCustomerName", t[2]), sessionStorage.setItem("product", t[3]), sessionStorage.setItem("claimguid", t[1]);
            var l = claimServiMssg;
            l = l.replace("$Name$", $("#txtNameOfPatient").val()).replace("$Motor$", "Accident").replace("$ReferenceNo$", t[1]), SendServicesms($("#txtMobileNo").val(), l), ResetHealth(), window.location.href = "/general-insurance/" + t[0]
        },
        error: function(e) {
            //alert(e)
        }
    })
}

function SaveClaimIntimationTravel() {
    var e;
    if ($(".form-group").removeClass("has-error"), $(".control-label:last-child").hide(), RequiredField("#txtPolicyNo", " Enter policy no", "#lblerrPolicyNo", "#divPolicyNo") || (e = !1), RequiredField("#txtPolicyType", " Enter policy type", "#lblerrPolicyType", "#divPolicyType") || (e = !1), RequiredField("#txtNameOfInsured", " Enter name of insured", "#lblerrNameOfInsured", "#divNameOfInsured") || (e = !1), RequiredField("#txtDOB", " Enter date of birth", "#lblerrDOB", "#divDOB") || (e = !1), validDate("txtDOB", "Enter valid date and it should be dd/mm/yyyy", "#lblerrDOB", "#divDOB") || (e = !1), RequiredField("#txtEmailID", " Enter email id", "#lblerrEmailID", "#divEmailID") && CheckIfValidEmail("#txtEmailID", " Enter correct email id", "#lblerrEmailID", "#divEmailID") || (e = !1), RequiredField("#txtCurrentContactNo", " Enter current contact no", "#lblerrCurrentContactNo", "#divCurrentContactNo") || (e = !1), RequiredField("#txtPermanentContactNo", " Enter permanent contact no", "#lblerrPermanentContactNo", "#divPermanentContactNo") || (e = !1), RequiredField("#txtLocation", " Enter location", "#lblerrLocation", "#divLocation") || (e = !1), RequiredField("#txtPassportNo", " Enter passport no", "#lblerrPassportNo", "#divPassportNo") || (e = !1), RequiredField("#txtIntimationReceivedFrom", " Enter intimation received from", "#lblerrIntimationReceivedFrom", "#divIntimationReceivedFrom") || (e = !1), RequiredField("#txtIEmailId", " Enter email id", "#lblerrIEmailId", "#divIEmailId") && CheckIfValidEmail("#txtIEmailId", " Enter correct email id", "#lblerrIEmailId", "#divIEmailId") || (e = !1), RequiredField("#txtMobileNo", " Enter mobile no", "#lblerrMobileNo", "#divMobileNo") && MobileNo("#txtMobileNo", " Enter correct mobile no", "#lblerrMobileNo", "#divMobileNo") || (e = !1), RequiredField("#txtIContactNo", " Enter contact no", "#lblerrIContactNo", "#divIContactNo") || (e = !1), RequiredField("#txtPlaceWhereLossOccurred", " Enter the details", "#lblerrPlaceWhereLossOccurred", "#divPlaceWhereLossOccurred") || (e = !1), RequiredField("#txtAmountSpent", " Enter the details", "#lblerrAmountSpent", "#divAmountSpent") || (e = !1), RequiredField("#txtAmountInUSD", " Enter the amount in USD", "#lblerrAmountInUSD", "#divAmountInUSD") || (e = !1), validAmt("txtAmountSpent", " Enter the valid amount", "#lblerrAmountSpent", "#divAmountSpent") || (e = !1), validAmt("txtAmountInUSD", " Enter the valid amount", "#lblerrAmountInUSD", "#divAmountInUSD") || (e = !1), RequiredField("#txtTypeOfClaim", " Enter claim type", "#lblerrTypeOfClaim", "#divTypeOfClaim") || (e = !1), RequiredField("#txtDateOfLoss", " Enter date Of loss", "#lblerrDateOfLoss", "#divDateOfLoss") || (e = !1), validDate("txtDateOfLoss", "Enter valid date and it should be dd/mm/yyyy", "#lblerrDateOfLoss", "#divDateOfLoss") || (e = !1), RequiredField("#txtLossType", " Enter the loss type", "#lblerrLossType", "#divLossType") || (e = !1), RequiredField("#txtLossSubType", " Enter loss sub type", "#lblerrLossSubType", "#divLossSubType") || (e = !1), RequiredField("#txtFirstSymptom", " Enter date of first symptom", "#lblerrFirstSymptom", "#divFirstSymptom") || (e = !1), validDate("txtFirstSymptom", "Enter valid date and it should be dd/mm/yyyy", "#lblerrFirstSymptom", "#divFirstSymptom") || (e = !1), 0 == e) return !1;
    $.ajax({
        url: "/general-insurance/services/ReportForms.ashx",
        type: "GET",
        async: !1,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "SaveClaimIntimationTravel",
            sPolicyNo: $("#txtPolicyNo").val(),
            sPolicyType: $("#txtPolicyType").val(),
            sNameOfInsured: $("#txtNameOfInsured").val(),
            dtDOB: $("#txtDOB").val(),
            sCurrentContactNo: $("#txtCurrentContactNo").val(),
            sPermanentContactNo: $("#txtPermanentContactNo").val(),
            sEmailID: $("#txtEmailID").val(),
            sMobileNo: $("#txtMobileNo").val(),
            sLocation: $("#txtLocation").val(),
            sPassportNo: $("#txtPassportNo").val(),
            sIntimationReceivedFrom: $("#txtIntimationReceivedFrom").val(),
            sIEmailID: $("#txtIEmailId").val(),
            sIContactNo: $("#txtIContactNo").val(),
            sPlaceWhereLossOccurred: $("#txtPlaceWhereLossOccurred").val(),
            sAmountSpent: $("#txtAmountSpent").val(),
            sAmountInUSD: $("#txtAmountInUSD").val(),
            sTypeOfClaim: $("#txtTypeOfClaim").val(),
            dtDateOfLoss: $("#txtDateOfLoss").val(),
            sLossType: $("#txtLossType").val(),
            sLossSubType: $("#txtLossSubType").val(),
            dtFirstSymptom: $("#txtFirstSymptom").val()
        },
        success: function(e) {
            var t;
            t = e.split("%$"), sessionStorage.setItem("cliamCustomerName", t[2]), sessionStorage.setItem("product", t[3]), sessionStorage.setItem("claimguid", t[1]);
            var l = claimServiMssg;
            l = l.replace("$Name$", $("#txtNameOfInsured").val()).replace("$Motor$", "Travel").replace("$ReferenceNo$", t[1]), SendServicesms($("#txtMobileNo").val(), l), ResetTravel(), window.location.href = "/general-insurance/" + t[0]
        },
        error: function(e) {
            //alert(e)
        }
    })
}

function ResetMotor() {
    $("#txtPolicyNo").val(""), $("#txtVINChassisNo").val(""), $("#ddlSalutation").val(0), $("#txtFirstName").val(""), $("#txtLastName").val(""), $("#txtDOB").val(""), $("#txtStdCode").val(""), $("#txtPhoneNo").val(""), $("#txtMobileNo").val(""), $("#txtMobileNo2").val(""), $("#txtPincode").val(""), $("#txtEmailID").val(""), $("#txtComments").val(""), $("#txtAddress").val(""), $("#txtLandmark").val(""), $("#ddlState").val(0), $("#ddlCity").val(0), $("#txtNameOfInsured").val(""), $("#txtLossEstimate").val(""), $("#txtDateOfLoss").val(""), $("#txtDescription").val(""), $("#txtTypeOfClaim").find("option:first").attr("selected", "selected"), $("#txtlossloc").val("")
}

function ResetHealth() {
    $("#ddlState").find("option:first").attr("selected", "selected"), $("#ddlCity").find("option:first").attr("selected", "selected"), $("#txtPincode").val(""), $("#txtpolicyno").val(""), $("#txtPolicyNo").val(""), $("#txtIdCardNo").val(""), $("#txtEmailID").val(""), $("#txtNameOfPatient").val(""), $("#txtHealthIdCardNo").val(""), $("#txtMobileNo").val(""), $("#txtHospitalName").val(""), $("#txtHospitalAddress").val(""), $("#txtHospitalContactNo").val(""), $("#txtDoctorName").val(""), $("#txtDoctorContactNo").val(""), $("#txtAdmissionDate").val(""), $("#txtDischargeDate").val(""), $("#txtApproxExpense").val(""), $("#txtDiseaseAndTreatmentDetails").val(""), $("#txtClaimedAmount").val(""), $("#txtAccidentDate").val(""), $("#txtAccidentTime").val(""), $("#txtDescription").val(""), $("#txtPoliceStationDetails").val(""), $("#txtPersonTookInsureToHospital").val(""), $("#chkDeath").attr("checked", !1), $("#chkPTD").attr("checked", !1), $("#chkPPD").attr("checked", !1), $("#chkTTD").attr("checked", !1)
}

function ResetTravel() {
    $("#txtPolicyNo").val(""), $("#txtPolicyType").val(""), $("#txtNameOfInsured").val(""), $("#txtDOB").val(""), $("#txtCurrentContactNo").val(""), $("#txtPermanentContactNo").val(""), $("#txtEmailID").val(""), $("#txtMobileNo").val(""), $("#txtLocation").val(""), $("#txtPassportNo").val(""), $("#txtIntimationReceivedFrom").val(""), $("#txtIEmailId").val(""), $("#txtIContactNo").val(""), $("#txtPlaceWhereLossOccurred").val(""), $("#txtAmountSpent").val(""), $("#txtAmountInUSD").val(""), $("#txtTypeOfClaim").val(""), $("#txtDateOfLoss").val(""), $("#txtLossType").val(""), $("#txtLossSubType").val(""), $("#txtFirstSymptom").val("")
}

function SaveJobPostingResume() {
    var e, t = $("#sRole").text();
    if ($(".form-group").removeClass("has-error"), $(".control-label:last-child").hide(), Ddl("#ddlState", " Select State", "#lblerrState", "#divState") || (e = !1), Ddl("#ddlCity", " Select City", "#lblerrCity", "#divCity") || (e = !1), DdlwithMinus1("#ddlWorkExp", " Select Work Exp", "#lblerrWorkExp", "#divWorkExp") || (e = !1), Ddl("#ddlGender", " Select Gender", "#lblerrGender", "#divGender") || (e = !1), RequiredField("#txtFirstName", " Enter first name", "#lblerrFirstName", "#divFirstName") || (e = !1), RequiredField("#txtLastName", " Enter last name", "#lblerrLastName", "#divLastName") || (e = !1), RequiredField("#txtDOB", " Enter date of birth", "#lblerrDOB", "#divDOB") || (e = !1), RequiredField("#txtEmailID", " Enter email id", "#lblerrEmailID", "#divEmailID") && CheckIfValidEmail("#txtEmailID", " Enter correct email id", "#lblerrEmailID", "#divEmailID") || (e = !1), RequiredField("#txtMobileNo", " Enter mobile no", "#lblerrMobileNo", "#divMobileNo") && MobileNo("#txtMobileNo", " Enter correct mobile no", "#lblerrMobileNo", "#divMobileNo") || (e = !1), RequiredField("#txtHighQualification", " Enter your highest qualification", "#lblerrHighQualification", "#divHighQualification") || (e = !1), 0 == e) return !1;
    var l = $("#ddlState option:selected").text(),
        a = $("#ddlCity option:selected").text();
    $.ajax({
        url: "/general-insurance/Services/ReportForms.ashx",
        type: "GET",
        async: !1,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "SaveJobPostingResume",
            sSalutation: $("#ddlSalutation").val(),
            sFiristName: $("#txtFirstName").val(),
            sLastName: $("#txtLastName").val(),
            dtDOB: $("#txtDOB").val(),
            iTelPhoneNo: $("#txtPhoneNo").val(),
            iMobileNo: $("#txtMobileNo").val(),
            sEmailId: $("#txtEmailID").val(),
            sEmailId2: $("#txtEmailID2").val(),
            iState: $("#ddlState").val(),
            iCity: $("#ddlCity").val(),
            sGender: $("#ddlGender").val(),
            sWorkExp: $("#ddlWorkExp").val(),
            sHighQualification: $("#txtHighQualification").val(),
            jobId: $("#lbljobId").val(),
            sttate: l,
            ccity: a,
            app: t
        },
        success: function(e) {
            ResetAdvisor(), window.location.href = e
        },
        error: function(e) {
            //alert(e)
        }
    })
}

function SaveComplaintFeedback() {
    var e;
    $(".form-group").removeClass("has-error"), $(".control-label:last-child").hide(), Ddl("#ddlState", " Select State", "#lblerrState", "#divState") || (e = !1), Ddl("#ddlCity", " Select City", "#lblerrCity", "#divCity") || (e = !1), RequiredField("#txtPolicyNo", " Enter Policy Number", "#lblpc", "#div4") || (e = !1), RequiredField("#txtFirstName", " Enter First Name", "#lblerrFirstName", "#divFirstName") || (e = !1), RequiredField("#txtLastName", " Enter last name", "#lblerrLastName", "#divLastName") || (e = !1), RequiredField("#txtDOB", " Enter date of birth", "#lblerrDOB", "#divDOB") || (e = !1), validDate("txtDOB", "Enter valid date and it should be dd/mm/yyyy", "#lblerrDOB", "#divDOB") || (e = !1), RequiredField("#txtaddress", " Enter address", "#lbladdress", "#divEmailID") || (e = !1), RequiredField("#txtPincode", " Enter pincode", "#lblerrPincode", "#divEmailID") || (e = !1), RequiredField("#txtEmailID", " Enter email id", "#lblerrEmailID", "#divEmailID") && CheckIfValidEmail("#txtEmailID", " Enter correct email id", "#lblerrEmailID", "#divEmailID") || (e = !1), RequiredField("#txtMobileNo", " Enter mobile no", "#lblerrMobileNo", "#divMobileNo") && MobileNo("#txtMobileNo", " Enter correct mobile no", "#lblerrMobileNo", "#divMobileNo") || (e = !1);
    var t = $("#txtDOB").val(),
        l = t.split("/");
    if (RequiredField("#txtIssue", " Enter issue.", "#lblerrIssue", "#divIssue") || (e = !1), 0 == e) return !1;
    if ("" != t && (e = checkDate(l)), 0 == e) return !1;
    var a = $("#ddlState option:selected").text(),
        i = $("#ddlCity option:selected").text();
    $.ajax({
        url: "/general-insurance/services/ReportForms.ashx",
        type: "GET",
        async: !1,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "SaveComplaintFeedback",
            sSalutation: $("#ddlSalutation").val(),
            sFiristName: $("#txtFirstName").val(),
            sLastName: $("#txtLastName").val(),
            dtDOB: $("#txtDOB").val(),
            iMobileNo: $("#txtMobileNo").val(),
            iPinCode: $("#txtPincode").val(),
            sEmailId: $("#txtEmailID").val(),
            sAddress: $("#txtAddress").val(),
            iState: $("#ddlState").val(),
            iCity: $("#ddlCity").val(),
            sDistrict: $("#txtDistrict").val(),
            fileN: $("#hdnfile").val(),
            sIssue: $("#txtIssue").val(),
            sstate: a,
            ccity: i,
            policyNo: $("#txtPolicyNo").val(),
            claimNo: $("#txtclaimno").val(),
            dob: $("#txtDOB").val(),
            pincode: $("#txtPincode").val(),
            address: $("#txtaddress").val()
        },
        success: function(e) {
            ResetAdvisor(), window.location.href = e
        },
        error: function(e) {
            //alert(e)
        }
    })
}

function email() {
    $.ajax({
        url: "/general-insurance/Services/GeneralHelper.ashx",
        type: "GET",
        async: !1,
        contentType: "application/json; charset=utf-8",
        data: {
            sAction: "SendMail"
        },
        success: function(e) {
            //alert(e)
        },
        error: function(e) {
            //alert(e)
        }
    })
}

function checkDate(e) {
    var t = parseInt(e[2]),
        l = parseInt(e[1]),
        a = parseInt(e[0]),
        i = parseInt(yyyy),
        r = parseInt(mm),
        o = parseInt(dd);
    return t > i ? ($("#lblerrDOB").html("Please enter proper date"), $("#lblerrDOB").css("display", "block"), !1) : l > 12 ? ($("#lblerrDOB").html("Please enter proper date"), $("#lblerrDOB").css("display", "block"), !1) : a > 31 ? ($("#lblerrDOB").html("Please enter proper date"), $("#lblerrDOB").css("display", "block"), !1) : yyyy == t && l > r ? ($("#lblerrDOB").html("Please enter proper date"), $("#lblerrDOB").css("display", "block"), !1) : !(yyyy == t && r == l && a >= o) || ($("#lblerrDOB").html("Please enter proper date"), $("#lblerrDOB").css("display", "block"), !1)
}

function onlyAlphabets(e, t) {
    try {
        if (window.event) var l = window.event.keyCode;
        else {
            if (!e) return !0;
            l = e.which
        }
        if (8 != l && 0 != l) return l > 64 && l < 91 || l > 96 && l < 123 || 32 == l
    } catch (e) {
        //alert(e.Description)
    }
}
dd < 10 && (dd = "0" + dd), mm < 10 && (mm = "0" + mm), today = dd + "/" + mm + "/" + yyyy, $(document).ready(function() {
    LoadState(), $(document).on("click", "#aremogve", function() {
        $(".uploadmsg").hide(), $("#hdnfile").val("")
    }), $("#yes").hide()
});