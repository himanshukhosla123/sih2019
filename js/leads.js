function loadLeads(){
    $.ajax({
        url:"https://stormy-bayou-91573.herokuapp.com/get-leads",
        type:"get"
    }).done(function(data){
        renderLead(data);
    }).fail(function(error){
        console.log(error);
        alert("Error loading Leads");
    })
}
var insurances=[ { Age: 25,
    smoke: 'n',
    Gender: 'm',
    'income(k)': 25,
    Policy: 'Term Plan' },
  { Age: 26,
    smoke: 'n',
    Gender: 'f',
    'income(k)': 30,
    Policy: 'pension plan' },
  { Age: 30,
    smoke: 'n',
    Gender: 'm',
    'income(k)': 33,
    Policy: 'pension plan' },
  { Age: 32,
    smoke: 'n',
    Gender: 'm',
    'income(k)': 45,
    Policy: 'retirement plan' },
  { Age: 35,
    smoke: 'n',
    Gender: 'm',
    'income(k)': 23,
    Policy: 'term Plan' },
  { Age: 33,
    smoke: 'n',
    Gender: 'm',
    'income(k)': 46,
    Policy: 'child plan' },
  { Age: 28,
    smoke: 'n',
    Gender: 'f',
    'income(k)': 28,
    Policy: 'child plan' },
  { Age: 37,
    smoke: 'n',
    Gender: 'f',
    'income(k)': 59,
    Policy: 'retirement plan' },
  { Age: 40,
    smoke: 'n',
    Gender: 'f',
    'income(k)': 70,
    Policy: 'pension plan' },
  { Age: 34,
    smoke: 'n',
    Gender: 'm',
    'income(k)': 27,
    Policy: 'term Plan' },
  { Age: 23,
    smoke: 'y',
    Gender: 'f',
    'income(k)': 48,
    Policy: 'health plan' },
  { Age: 34,
    smoke: 'n',
    Gender: 'f',
    'income(k)': 43,
    Policy: 'pension plan' },
  { Age: 45,
    smoke: 'y',
    Gender: 'm',
    'income(k)': 22,
    Policy: 'child plan' },
  { Age: 36,
    smoke: 'n',
    Gender: 'f',
    'income(k)': 34,
    Policy: 'term Plan' },
  { Age: 41,
    smoke: 'y',
    Gender: 'f',
    'income(k)': 49,
    Policy: 'pension plan' },
  { Age: 20,
    smoke: 'n',
    Gender: 'm',
    'income(k)': 67,
    Policy: 'term plan' },
  { Age: 27,
    smoke: 'n',
    Gender: 'f',
    'income(k)': 45,
    Policy: 'child plan' },
  { Age: 39,
    smoke: 'y',
    Gender: 'm',
    'income(k)': 37,
    Policy: 'health plan' },
  { Age: 41,
    smoke: 'n',
    Gender: 'f',
    'income(k)': 24,
    Policy: 'term plan' } ];

    function getBase64(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
    }
    function getGender2(){ 
      var file = document.querySelector('input[type="file"]').files[0];
      var img=document.getElementById("cam-img")
    //   img.src=document.getElementById("img-btn").files[0];
      getBase64(file).then(
        data => {
            // console.log(data)
            // debugger;
            getGender(data);
        }
      );
}

function getRecommendation(){
    let arr=[];
    if(!age || !gender || isNaN(gender)){
        if(age<30){
            arr=[{ 
            plan:"Term Plan",
            desc:"Unlike wine, the older, the better, term plans are best when bought at a young age. 20s is the time when your health history is pretty flawless. You may not have experienced major health concerns that could later make you uninsurable. In this manner, you pose fewer risks to the insurance company, which is the reason you are offered the most moderate rates."
            },{
                plan:"Critical Illness Health Plan",
                desc:`Most youths in India purchase health insurance for availing tax benefits. Not surprisingly, Indians pay the majority of the medical expenses out of their own pockets. Although tax benefits are crucial, it ought not be the essential factor for purchasing health coverage. With rising incidences of lifestyle diseases, it is smart to cover yourself with critical illness insurance in your 20s. If you are diagnosed with any of the listed diseases in the critical illness policy document, the cover amount is paid as a compensation, which could be a helping hand and life saviour during the medical and financial crisis.
                `
            },
            {plan:"Pension Plan",
            desc:"In your 20s, your likely meagre paycheck may always be competing with a variety of expenses. Nevertheless, you are in the best position in your life, to begin investing for your future. If you start investing in pension plans and give it about 40 years to grow, you might even retire early. Unlike individuals who begin their retirement planning in their 40s or 50s (making massive contributions each month), you can make small contributions to pension plans for a longer period and wind up in a better financial position closer to your career finish line."
            },
            {
            plan:"Investment Plan for Your Goals (ULIPs)",
            desc:"Isn’t it a great idea to buy an insurance plan that also multiplies your wealth? That’s ULIP (Unit Linked Insurance Plan) for you.But, why invest in a ULIP in your 20s? Because the earlier you sign up, the more you stand to gain from it (you can invest in equity-based funds on the basis of your risk profile). The investment made in a ULIP plan for a long-term horizon makes it is an ideal instrument to create and grow your wealth."
            }];
    }
    else if(age<40){
        arr=[{ 
            plan:"Child Plan",
            desc:"Your 30’s can be full of exciting possibilities as you have officially hit the next milestone in your life. Yet, this also ushers in a time where you need to shoulder greater responsibility as the best parts of your life are still ahead of you.This is the time when the likelihood of you having a child increases and thus proves to be the ideal time to invest in child plans. Such plans are specially designed to meet the educational and other needs of your growing child. Moreover, they enable you to invest systematically for your child’s future (even in case of your unfortunate demise)."
            },{
                plan:"Increase Your Term Insurance Cover:",
                desc:`40’s is the likely time when you are married and have children. Thus, your responsibility increases manifold. You not only start worrying about securing your children’s future but also other financial obligations like car loans, home loans, and other long-term commitments. Even your parents may be dependent on you, which further adds to your financial expenses.`
            }];
    }
    else {
        arr=[{ 
            plan:"Immediate Annuity Plan",
            desc:"Your 50’s can be full of exciting possibilities as you have officially hit the next milestone in your life. Yet, this also ushers in a time where you need to shoulder greater responsibility as the best parts of your life are still ahead of you.This is the time when the likelihood of you having a child increases and thus proves to be the ideal time to invest in child plans. Such plans are specially designed to meet the educational and other needs of your growing child. Moreover, they enable you to invest systematically for your child’s future (even in case of your unfortunate demise)."
            },{
                plan:"Balancing your ULIP’s Portfolio::",
                desc:`50’s is the likely time when you are married and have children. Thus, your responsibility increases manifold. You not only start worrying about securing your children’s future but also other financial obligations like car loans, home loans, and other long-term commitments. Even your parents may be dependent on you, which further adds to your financial expenses.`
            }];
    }
    renderRecommendation(arr);
    }

}

function renderRecommendation(arr){
    showRecommendation();
    var row =document.getElementById("recom");   
    var childer='';
    if(arr.length==0){
        childer="<h2>No Leads Found at the moment!</h2>";
    }
    for(var i=0;i<arr.length;i++){
        childer+=`<div class="col-sm-4">
            <div class="thumbnail">
              <img src="./img/policy1.png" alt="Paris" width="400" height="300">
              <p><strong>${arr[i].plan}</strong></p>
              <p>${arr[i].desc}</p>
              <button class="btn">Know More</button>
            </div>
          </div>`;
    }
      row.innerHTML=childer+"";
}

function getGender(url){
    
    $.ajax({
        url:"https://api-us.faceplusplus.com/facepp/v3/detect",
        type:"POST",
        // jsonp:true,
        datatype: 'application/json',
        crossDomain: true,
        data:{
            "api_key":"ZrOYcjhLISAG_ph2I4Ld9j0VellBVHcT",
            "api_secret":"bU6MSWF6E9sAKVSnsextwyGJKhmGBH0_",
            return_landmark:0,
            return_attributes:"gender,age",
            "image_base64":url
        }
    }).done(function(data){
        console.log(data);
        try{
            if(data.faces)
            {
                var face=data.faces[0];
                age=face.attributes.age.value;
                gender=face.attributes.gender.value;
                $("#sex").val(gender);
                $("#age").val(age);
                $("#income").val("Rs 5,00,000 - 7,50,000");
            }
        }   
        catch(e){

        }
    }).fail(function(error){
        console.log(error);
        alert("Error loading Leads");
    })
}

function renderLead(data){
    var container=document.getElementById("wrapper3");
    var childer='<div class=""><h2>Leads</h2>';
    if(data.length==0){
        childer="<h2>No Leads Found at the moment!</h2>";
    }
    for(var i=0;i<data.length;i++){
        childer+=generateLead(data[i]);
    }
    container.innerHTML=childer+"</div>";
}

function generateLead(obj){
    return `<div class="">
    <div class="cand-box">
            <div class="cand-box-header row no-mrg">
                            <div class="col-lg-9 col-sm-8 no-padd">
                            <strong class="select" > Big Baazar </strong>
                            </div>
                            <div class="col-lg-3 col-sm-4 no-padd text-right">
                               <button class="btn mrg-rght-5 btn-custom"
                                    style={{backgroundImage:"url('reinvite.svg')", width: "24px", height: "24px", backgroundColor:"transparent", backgroundSize:"contain" }}
                                ></button>
                                <button class="btn btn-default btn-custom"
                                    style={{background:"transparent",color:"black"}}
                                ><i class="fa fa-plus" style={{paddingRight:0}}></i> </button>    
                            </div>
            </div>
            
            <div class="cand-box-body  no-mrg">
                
                <div class="user_thumb">
                    <img src=${obj.image && obj.image.length>15||"./img/girls.png"} class="img-responsive img-circle"/>
                </div>
                
                <div class="user_info pull-left">
                    <div class="cand-name">${obj.name}</div>
                    <div class="cand-desig">${obj.phone}</div>             
                </div>
            
            <div class="user_extra_info">
                    <div class="cand-info-col">
                        Age : ${obj.age||obj.exp||"NA"}
                    </div>
                    <div class="cand-info-col">
                      Gender : ${obj.gender||"NA"}
                    </div> 
                    <div class="cand-info-col" style={{border:"none"}}>
                     Smoker : ${obj.smoker||"NA"}
                    </div>            
            </div>
            <div class="cand-box-footer row no-mrg">
                    <div class="col-lg-12 no-padd">
                            Monthly Salary Calculated : ${obj.salary||"Rs 5,00,000 - 7,00,000"}
                    </div>
                    <div class="col-lg-5 no-padd text-right">
                                <button class="btn btn-default btn-custom"
                                    onclick="$("#resume_modal").modal("show");"
                                    style={{color:"blue",borderRight:"1px solid blue",background:"transparent"}}
                        > Recommend Plans</button>
                    </div>
            </div>
      </div>
</div>`;
}

var video = document.querySelector('#camera-stream'),
image = document.querySelector('#snap'),
start_camera = document.querySelector('#start-camera'),
controls = document.querySelector('.controls'),
take_photo_btn = document.querySelector('#take-photo'),
delete_photo_btn = document.querySelector('#delete-photo')
// download_photo_btn = document.querySelector('#download-photo'),
// error_message = document.querySelector('#error-message');

function callCamera(){
    navigator.getUserMedia(
        // Options
        {
            video: true
        },
        // Success Callback
        function(stream){
    
            // Create an object URL for the video stream and
            // set it as src of our HTLM video element.
            video.src = window.URL.createObjectURL(stream);
    
            // Play the video element to show the stream to the user.
            video.play();
    
        },
        // Error Callback
        function(err){
    
            // Most common errors are PermissionDenied and DevicesNotFound.
            console.error(err);
    
        }
    );
    
}

function takeSnapshot(){

    var hidden_canvas = document.querySelector('canvas'),
        video = document.querySelector('video.camera_stream'),
        image = document.querySelector('img.photo'),

        // Get the exact size of the video element.
        width = video.videoWidth,
        height = video.videoHeight,

        // Context object for working with the canvas.
        context = hidden_canvas.getContext('2d');

    // Set the canvas to the same dimensions as the video.
    hidden_canvas.width = width;
    hidden_canvas.height = height;

    // Draw a copy of the current frame from the video on the canvas.
    context.drawImage(video, 0, 0, width, height);

    // Get an image dataURL from the canvas.
    var imageDataURL = hidden_canvas.toDataURL('image/png');

    // Set the dataURL as source of an image element, showing the captured photo.
    image.setAttribute('src', imageDataURL); 

}