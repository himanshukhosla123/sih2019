// function loadLeads(){
//     $({
//         url:"https://stormy-bayou-91573.herokuapp.com/users",
//         type:"get"
//     }).done(function(data){

//     }).fail(function(error){
//         console.log(error);
//         alert("Error loading Leads");
//     })
// }

// function renderLead(data){
//     var container=document.getElementById("wrapper3");
//     var childer='';
//     if(arr.length==0){
//         childer="<h2>No Leads Found at the moment!</h2>";
//     }
//     for(var i=0;i<data.length;i++){
//         childer+=generateLead(data[i]);
//     }
//     container.innerHTML=childer;
//     // lists.innerHTML=list;
//     // $("#carousel-example-generic").carousel();
    
// }

// function generateLead(obj){
//     return `<div>
//     <div className="cand-box">
//             <div className="cand-box-header row no-mrg">
//                             <div className="col-xs-9 col-sm-8 no-padd">
//                             <strong className="select" > Big Baazar </strong>
//                             </div>
//                             <div className="col-xs-3 col-sm-4 no-padd text-right">
//                                <button className="btn mrg-rght-5 btn-custom"
//                                     style={{backgroundImage:"url('reinvite.svg')", width: "24px", height: "24px", backgroundColor:"transparent", backgroundSize:"contain" }}
//                                 ></button>
//                                 <button className="btn btn-default btn-custom"
//                                     style={{background:"transparent",color:"black"}}
//                                 ><i className="fa fa-plus" style={{paddingRight:0}}></i> </button>    
//                             </div>
//             </div>
            
//             <div className="cand-box-body row">
                
//                 <div className="user_thumb">
//                     <img src=${obj.image||"assets/image/user.jpg"} className="img-responsive img-circle"/>
//                 </div>
                
//                 <div className="user_info pull-left">
//                     <div className="cand-name">${obj.candidateName}</div>
//                     <div className="cand-desig">${obj.designation}</div> 
//                     <div className="cand-emp">${obj.employer} | ${obj.location}</div>            
//                 </div>
            
//             <div className="user_extra_info-xs">
//                     <div className="cand-info-col">
//                         "Exp" : ${obj.experience||obj.exp||""}
//                     </div>
//                     <div className="cand-info-col">
//                     "CTC" : ${obj.currentCtc||obj.current_ctc||""}
//                     </div> 
//                     <div className="cand-info-col" style={{border:"none"}}>
//                     "N.P." : ${obj.notice_period||obj.noticePeriod||""}
//                     </div>            
//                 </div>
//             <div className="cand-box-footer row no-mrg">
//                             <div className="col-xs-7 no-padd">
//                             Applied : ${obj.designation}
//                             </div>
//                             <div className="col-xs-5 no-padd text-right">
//                                 <button className="btn btn-default btn-custom"
//                                     onClick={()=>{
//                                         $("#resume_modal").modal("show");
//                                     }}
//                                     style={{color:"blue",borderRight:"1px solid blue",background:"transparent"}}
//                                 > Resume</button>
//                             </div>
//             </div>
//       </div>
// </div>`;
// }