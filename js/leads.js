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