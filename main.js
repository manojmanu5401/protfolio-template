console.log(document.getElementsByClassName('det-top1').innerHTML)
// console.log("link"+ document.querySelector('#linkedin-link'))
// document.querySelector('a .skype-link').setAttribute('href','https//:www.google.com');

// document.addEventListener("DOMContentLoaded", function() { 
//      console.log(document.querySelector('.skype-link').setAttribute('href','https://www.google.com/'))
// });
function Click(){
    console.log("kdjfl")
     document.getElementById('navi').style.display="block";
    //  document.getElementById('prot').style.display="block";
}

// function otherclick(){
//     document.getElementById('navi').style.display="block";
//     // document.getElementById('prot').style.visibility="hidden";
// }
// function Prot(){
//     document.getElementById('prot').style.display="block";
//     document.getElementById('navi').style.display="block";
// }
var myval2 = 0;
function stars2(e) {
    let star = document.querySelectorAll('.star_');
    // let rate_num = document.querySelector('#rate-num');

    for (let i = 0; i <star.length; i++) {
        console.log('active-'+i)
        star[i].classList.remove('active-'+i);
    }
    for (let j = 0; j <= e; j++) {
        star[j].classList.add('active-'+j);
        myval2 = j + 1;
    }
    // rate_num.innerHTML = myval;
    console.log(myval2)
}
var job_title,company_name,company_loc,duration,project_name,project_duration,keyword,s_name,s_year,s_status;
var project_num=3,r=2,height=350;
var form1=document.getElementById('form1');
var form2=document.getElementById('form2');
var form3=document.getElementById('form3');
var form4=document.getElementById('form4');
var next1=document.getElementById('next1');
var next2=document.getElementById('next2');
var next3=document.getElementById('next3');
var next34=document.getElementById('next4');
var progress = document.getElementById('progress')
var skip1 =document.getElementById('skip1');
var skip2 =document.getElementById('skip2');
var skip3 =document.getElementById('skip3');
var cancel1=document.getElementById('cancel1');
var cancel2=document.getElementById('cancel2');
var cancel3=document.getElementById('cancel3');
var cancel4=document.getElementById('cancel4');
var clo=document.getElementById('close-button');
var add_k1=document.getElementById('add_keyword');
var add_k2=document.getElementById('add_skill1');
var key_list=[],job_list=[];
next1.onclick=function(){
    var month=['Jan','Feb','Mar',"Apr","May","Jun",'Jul','Aug','Sep','Oct','Nov','Dec'];
    console.log("helloclick");
    form1.style.marginLeft='-750px'
    form2.style.marginLeft='0px'
    progress.style.left="177px"
    progress.style.width="182px"
    job_title=document.getElementById("exp_experience").value;
    var from=document.getElementById("datepicker").value;
    var to=document.getElementById("datepicker2").value;
    if(from.slice(0,1)==0 && to.slice(0,1)==0){
        console.log(from.slice(0,0), to.slice(0,0))
        duration=month[from.slice(1,2)-1]+from.slice(-4)+"-"+month[to.slice(1,2)-1]+to.slice(-4)
        if(duration.slice(8)=="undefined"){
            duration=month[from.slice(1,2)-1]+from.slice(-4)+"-"+"NOW"
        }
        console.log(duration)
    }
    else if(from.slice(0,1)==0 && to.slice(0,1)!=0){
        duration=month[from.slice(1,2)-1]+from.slice(-4)+"-"+month[to.slice(0,2)-1]+to.slice(-4)
        if(duration.slice(8)=="undefined"){
            duration=month[from.slice(1,2)-1]+from.slice(-4)+"-"+"NOW"
        }
        console.log(duration)
    }
    else if(from.slice(0,1)!=0 && to.slice(0,1)==0){
        duration=month[from.slice(0,2)-1]+from.slice(-4)+"-"+month[to.slice(1,2)-1]+to.slice(-4)
        if(duration.slice(8)=="undefined"){
            duration=month[from.slice(0,2)-1]+from.slice(-4)+"-"+"NOW"
        }
        console.log(duration)
    }
    else if(from.slice(0,1)!=0 && to.slice(0,1)!=0){
        duration=month[from.slice(0,2)-1]+from.slice(-4)+"-"+month[to.slice(0,2)-1]+to.slice(-4)
        if(duration.slice(8)=="undefined"){
            duration=month[from.slice(0,2)-1]+from.slice(-4)+"-"+"NOW"
        }
        console.log(duration)
    }
    company_name=document.getElementById("company_name").value;
    company_loc=document.getElementById("company_location").value;
    console.log(company_loc);
}
next2.onclick=function(){
    console.log("helloclick");
    form2.style.marginLeft='-750px'
    form3.style.marginLeft='0px'
    progress.style.left="358px"
    progress.style.width="172px"
    project_name=document.getElementById("project_name").value
    var from =document.getElementById('datepicker3').value
    var to = document.getElementById('datepicker4').value
    project_duration=Math.abs(from.slice(0,2)-to.slice(0,2));
    console.log(project_duration);
}
next3.onclick=function(){
    console.log("helloclick");
    form3.style.marginLeft='-750px'
    form4.style.marginLeft='0px'
    progress.style.left="529px"
    progress.style.width="169px"
}
add_k1.onclick=function(){
    keyword=document.getElementById('keyword').value
    if(keyword.length !=0){
        const ele="<div class='col-md-2'><h5>"+keyword+"</h5></div>"
        key_list.push(keyword);
        var div =document.createElement('div')
        div.innerHTML=ele;
        document.getElementById('key_word_1').appendChild(div);
        document.querySelector(".exp #form3 .row4").style.marginTop='165px';
        console.log(key_list)
    }
    
}
next4.onclick=function(){
    var arr=["<span class='s1'> <i class='fas fa-star'></i></span>","<span class='s2' > <i class='fas fa-star'></i></span>","<span class='s3'> <i class='fas fa-star'></i></span>","<span class='s4' > <i class='fas fa-star'></i></span>","<span class='s5' > <i class='fas fa-star'></i></span>"]
    var l=[];
    for(k=0;k<myval2;k++){
        l.push(arr[k])
    }
    if(l.length!=5){
        var num=5-l.length
        console.log(5-l.length)
        for(i=0;i<num;i++){
            console.log("i")
            l.push("<span class='s6'> <i class='fas fa-star'></i></span>")
        }
    }
    
    console.log("helloclick");
    form3.style.marginLeft='700px'
    form4.style.marginLeft='700px'
    form2.style.marginLeft='700px'
    form1.style.marginLeft='0px'
    progress.style.left="38px"
    progress.style.width="140px"
    // var exp_card="<div class='row row-1 id='box4'><section class='sec1'><span class='hs'></span><h6>2015</h6><div class='details'><p class=date'> Jan 2014-Jan2015</p><p class='name'>Sonior Etl Devoloper</p><p class='cont'>Auto club group Acg10</p><span><i class='fas fa-map-marker-alt' aria-hidden='true'></i></span><span class='loc>Btoomington, LI</span></div></section></div>"
    // var exp_card_expand="<div class='row row-1' ><section class='sec1'><span class='hs'></span><h6>NOW</h6><div class='details'><p class='date'> Jan 2020-Present</p><p class='name'>Load information Developer</p><p class='cont'>Cigna Health Insurance Cgi10</p><div class='det'><span><i class='fas fa-map-marker-alt'></i><span class='loc'>  Lafayette, LA</span></span><a onclick='run(1)'><i class='fas fa-briefcase'></i></a></div></div></section></div>"
    // var project="<div class='row row-1' id='box1'><section class='sec2'><h4 style='left: -50px;'></h4><div class='details'><div class='row' style='padding-left: 0px;'><div class='col col-md-8'><p class='name1' id='pro-n1'>Name of the Project</p><p class='cont' id='mon1'>6 Months</p></div><div class='col col-md-4' style='padding-right: 0px;'><a data-toggle='modal' data-target='#modal-2'><span><i class='fas fa-pen'></i></span> </a><span><i class='fas fa-trash'></i></span></div><div class='modal mo1' id='modal-2' ><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button class='close' type='button' data-dismiss='modal'><i class='fas fa-times'></i></button><h3 class='modal-title'>Edit</h3></div><div class='modal-body'><form><div class='inner-form'><div class='input-group' id='pro-name'><input type='text' id='pname1' class='form-control' placeholder='Project Name' aria-describedby='basic-addon1'></div><div class='input-group txt' id='duration'><input type='number' id='dura1' class='form-control' placeholder='Duration' aria-describedby='basic-addon1'></div></div><button  type='submit' class='btn btn-success' data-dismiss='modal' onclick='expedit1(1)'>Submit</button></form></div></div></div></div></div></div></section></div> "
    // var key_ach="<div class='col-md-4'> <div class='thumbnail c' id='c' onclick='sliderol(0)'><div class='caption' style='padding: 5 5 5 5;'><span><img src='public/check.jpg'><b>UI Design</b></span></div></div></div>"
    // var content="<div class='col-xs-6 col-sm-3'><div class='thumbnail card-in' id='shadow'><div class='caption'><div class='row st' style='padding-left:5px; padding-right: 5px;'><div class='col-md-8'><h6>"+h6+"</h6></div><div class='col-md-4 card-in-icon'><span><i class='fas fa-ellipsis-h'></i></span></div></div></div><div class='stars'><div class='row' style='height:20'><div class='col-md-5'><p>Exp : "+exp+" year</p></div><div class='col-md-7'>"+l[0]+l[1]+l[2]+l[3]+l[4]+"</div></div></div></div></div>"
    // var div1=document.createElement('div').innerHTML=exp_card
    // var div2=document.createElement('div').innerHTML=exp_card_expand
    // var div3=document.createElement('div').innerHTML=project
    // var div4=document.createElement('div').innerHTML=key_ach
    // var div5=document.createElement('div').innerHTML=content
    if(project_name.length==0 && job_title.length!=0){
        if(duration.slice(8)=="NOW"){
            var exp_card="<div class='row row-1 id='box4'><section class='sec1'><span class='hs'></span><h6>"+duration.slice(8)+"</h6><div class='details'><p class='date'>"+duration.slice(0,8)+"- Present"+"</p><p class='name'>"+job_title+"</p><p class='cont'>"+company_name+"</p><span><i class='fas fa-map-marker-alt' aria-hidden='true'></i></span><span class='loc'>  "+company_loc+"</span></div></section></div>"
        }
        else{
            var exp_card="<div class='row row-1 id='box4'><section class='sec1'><span class='hs'></span><h6>"+duration.slice(-4)+"</h6><div class='details'><p class='date'>"+duration+"</p><p class='name'>"+job_title+"</p><p class='cont'>"+company_name+"</p><span><i class='fas fa-map-marker-alt' aria-hidden='true'></i></span><span class='loc'>  "+company_loc+"</span></div></section></div>"
        }
        var div1=document.createElement('div')
        div1.innerHTML=exp_card;
        document.getElementById('wrappp').appendChild(div1);
        height=height+120;
        document.getElementById("line").style.height=height;
    }
    else if(project_name.length!=0 && job_title.length!=0){
        console.log("project")
        if(duration.slice(8)=="NOW"){
            var exp_card_expand="<div class='row row-1'><section class='sec1'><span class='hs'></span><h6>"+duration.slice(8)+"</h6><div class='details'><p class='date'> "+duration.slice(0,8)+"- Present"+"</p><p class='name'>"+job_title+"</p><p class='cont'>"+company_name+"</p><div class='det'><span><i class='fas fa-map-marker-alt'></i><span class='loc'>  "+company_loc+"</span></span><a onclick='run("+r+")'><i class='fas fa-briefcase'></i></a></div></div></section></div>"    
        }
        else{
            var exp_card_expand="<div class='row row-1'><section class='sec1'><span class='hs'></span><h6>"+duration.slice(-4)+"</h6><div class='details'><p class='date'> "+duration+"</p><p class='name'>"+job_title+"</p><p class='cont'>"+company_name+"</p><div class='det'><span><i class='fas fa-map-marker-alt'></i><span class='loc'>  "+company_loc+"</span></span><a onclick='run("+r+")'><i class='fas fa-briefcase'></i></a></div></div></section></div>"    
        }
        var div2=document.createElement('div');
        div2.innerHTML=exp_card_expand;
        document.getElementById('wrappp').appendChild(div2);
        r=r+1;
        var project="<div class='row row-1' id='box1'><section class='sec2'><h4 style='left: -50px;'></h4><div class='details'><div class='row' style='padding-left: 0px;'><div class='col col-md-8'><p class='name1' id='pro-n"+project_num+"'"+">"+project_name+"</p><p class='cont' id='mon"+project_num+"'"+">"+project_duration+" Months</p></div><div class='col col-md-4' style='padding-right: 0px;'><a data-toggle='modal' data-target='#modal_"+project_num+"'><span><i class='fas fa-pen'></i></span> </a><span><i class='fas fa-trash'></i></span></div><div class='modal mojj' id='modal_"+project_num+"' ><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button class='close' type='button' data-dismiss='modal'><i class='fas fa-times'></i></button><h3 class='modal-title'>Edit</h3></div><div class='modal-body'><form><div class='inner-form'><div class='input-group' id='pro-name'><input type='text' id='pname"+project_num+"' class='form-control' placeholder='Project Name' aria-describedby='basic-addon1'></div><div class='input-group txt' id='duration'><input type='number' id='dura"+project_num+"' class='form-control' placeholder='Duration' aria-describedby='basic-addon1'></div></div><button  type='submit' class='btn btn-success' data-dismiss='modal' onclick='expedit1("+project_num+")'>Submit</button></form></div></div></div></div></div></div></section></div> "
        var div3=document.createElement('div')
        div3.id="boxx"+r;
        div3.innerHTML=project
        document.getElementById('wrappp').appendChild(div3);
        height=height+240;
        document.getElementById("line").style.height=height;
        project_num=project_num+1;
    }
    for(i=0;i<key_list.length;i++){
        var key_ach="<div class='col-md-4'> <div class='thumbnail c' id='c' onclick='sliderol(0)'><div class='caption' style='padding: 5 5 5 5;'><span><img src='public/check.jpg'><b>"+key_list[i]+"</b></span></div></div></div>"
        var div4=document.createElement('div')
        div4.innerHTML=key_ach
        document.getElementById("roch").appendChild(div4);
    }
    for(j=0;j<job_list.length;j++){
        console.log("job")
        if(job_list[j][1]=="job-skills"){
            var content="<div class='col-xs-6 col-sm-4'><div class='thumbnail card-in' id='shadow'><div class='caption'><div class='row st' style='padding-left:5px; padding-right: 5px;'><div class='col-md-8'><h6>"+job_list[j][0]+"</h6></div><div class='col-md-4 card-in-icon'><span><i class='fas fa-ellipsis-h'></i></span></div></div></div><div class='stars'><div class='row' style='height:20'><div class='col-md-5'><p>Exp : "+job_list[j][2]+" year</p></div><div class='col-md-7'>"+l[0]+l[1]+l[2]+l[3]+l[4]+"</div></div></div></div></div>"
            var div5=document.createElement('div')
            div5.innerHTML=content
            document.getElementById("job-row").appendChild(div5);
        }
        else if(job_list[j][1]=="soft-skills"){
            var content="<div class='col-xs-6 col-sm-12'><div class='thumbnail card-in' id='shadow'><div class='caption'><div class='row st' style='padding-left:5px; padding-right: 5px;'><div class='col-md-8'><h6>"+job_list[j][0]+"</h6></div><div class='col-md-4 card-in-icon'><span><i class='fas fa-ellipsis-h'></i></span></div></div></div><div class='stars'><div class='row' style='height:20'><div class='col-md-5'><p>Exp : "+job_list[j][2]+" year</p></div><div class='col-md-7'>"+l[0]+l[1]+l[2]+l[3]+l[4]+"</div></div></div></div></div>"
            var div5=document.createElement('div')
            div5.innerHTML=content
            document.getElementById("soft-row").appendChild(div5);
        }
    }
}
add_k2.onclick=function(){
    console.log("clicked");
    var data=[]
    s_name=document.getElementById('skill_name1').value;
    s_status=document.getElementById('sill_type').value;
    s_year=document.getElementById('sill_year1').value;
    console.log(s_status,s_name,s_year);
    if(s_status!='null' & s_name.length!=0 & s_year!='null'){
        data.push(s_name);
        data.push(s_status);
        data.push(s_year);
        data.push(myval2);
        job_list.push(data);
        const ele="<div class='col-md-2'><h5>"+s_name+"</h5></div>"
        var div =document.createElement('div')
        div.innerHTML=ele;
        document.getElementById('key_word_2').appendChild(div);
        document.querySelector('.exp #form4 .row5').style.marginTop="160px"
        console.log(job_list);
    }
}

skip1.onclick=function(){
    console.log("helloclick");
    form2.style.marginLeft='-750px'
    form3.style.marginLeft='0px'
    progress.style.left="358px"
    progress.style.width="172px"
}
skip2.onclick=function(){
    console.log("helloclick");
    form3.style.marginLeft='-750px'
    form4.style.marginLeft='0px'
    progress.style.left="529px"
    progress.style.width="169px"
}
skip3.onclick=function(){
    console.log("helloclick");
    form3.style.marginLeft='7000px'
    form4.style.marginLeft='700px'
    form2.style.marginLeft='700px'
    form1.style.marginLeft='0px'
    progress.style.left="38px"
    progress.style.width="140px"
    if(project_name.length==0 && job_title.length!=0){
        if(duration.slice(8)=="NOW"){
            var exp_card="<div class='row row-1 id='box4'><section class='sec1'><span class='hs'></span><h6>"+duration.slice(8)+"</h6><div class='details'><p class='date'>"+duration.slice(0,8)+"- Present"+"</p><p class='name'>"+job_title+"</p><p class='cont'>"+company_name+"</p><span><i class='fas fa-map-marker-alt' aria-hidden='true'></i></span><span class='loc'>  "+company_loc+"</span></div></section></div>"
        }
        else{
            var exp_card="<div class='row row-1 id='box4'><section class='sec1'><span class='hs'></span><h6>"+duration.slice(-4)+"</h6><div class='details'><p class='date'>"+duration+"</p><p class='name'>"+job_title+"</p><p class='cont'>"+company_name+"</p><span><i class='fas fa-map-marker-alt' aria-hidden='true'></i></span><span class='loc'>  "+company_loc+"</span></div></section></div>"
        }
        var div1=document.createElement('div')
        div1.innerHTML=exp_card;
        document.getElementById('wrappp').appendChild(div1);
        height=height+120;
        document.getElementById("line").style.height=height;
    }
    else if(project_name.length!=0 && job_title.length!=0){
        console.log("project")
        if(duration.slice(8)=="NOW"){
            var exp_card_expand="<div class='row row-1'><section class='sec1'><span class='hs'></span><h6>"+duration.slice(8)+"</h6><div class='details'><p class='date'> "+duration.slice(0,8)+"- Present"+"</p><p class='name'>"+job_title+"</p><p class='cont'>"+company_name+"</p><div class='det'><span><i class='fas fa-map-marker-alt'></i><span class='loc'>  "+company_loc+"</span></span><a onclick='run("+r+")'><i class='fas fa-briefcase'></i></a></div></div></section></div>"    
        }
        else{
            var exp_card_expand="<div class='row row-1'><section class='sec1'><span class='hs'></span><h6>"+duration.slice(-4)+"</h6><div class='details'><p class='date'> "+duration+"</p><p class='name'>"+job_title+"</p><p class='cont'>"+company_name+"</p><div class='det'><span><i class='fas fa-map-marker-alt'></i><span class='loc'>  "+company_loc+"</span></span><a onclick='run("+r+")'><i class='fas fa-briefcase'></i></a></div></div></section></div>"    
        }
        var div2=document.createElement('div');
        div2.innerHTML=exp_card_expand;
        document.getElementById('wrappp').appendChild(div2);
        r=r+1;
        var project="<div class='row row-1' id='box1'><section class='sec2'><h4 style='left: -50px;'></h4><div class='details'><div class='row' style='padding-left: 0px;'><div class='col col-md-8'><p class='name1' id='pro-n"+project_num+"'"+">"+project_name+"</p><p class='cont' id='mon"+project_num+"'"+">"+project_duration+" Months</p></div><div class='col col-md-4' style='padding-right: 0px;'><a data-toggle='modal' data-target='#modal_"+project_num+"'><span><i class='fas fa-pen'></i></span> </a><span><i class='fas fa-trash'></i></span></div><div class='modal mojj' id='modal_"+project_num+"' ><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button class='close' type='button' data-dismiss='modal'><i class='fas fa-times'></i></button><h3 class='modal-title'>Edit</h3></div><div class='modal-body'><form><div class='inner-form'><div class='input-group' id='pro-name'><input type='text' id='pname"+project_num+"' class='form-control' placeholder='Project Name' aria-describedby='basic-addon1'></div><div class='input-group txt' id='duration'><input type='number' id='dura"+project_num+"' class='form-control' placeholder='Duration' aria-describedby='basic-addon1'></div></div><button  type='submit' class='btn btn-success' data-dismiss='modal' onclick='expedit1("+project_num+")'>Submit</button></form></div></div></div></div></div></div></section></div> "
        var div3=document.createElement('div')
        div3.id="boxx"+r;
        div3.innerHTML=project
        document.getElementById('wrappp').appendChild(div3);
        height=height+240;
        document.getElementById("line").style.height=height;
        project_num=project_num+1;
    }
    for(i=0;i<key_list.length;i++){
        var key_ach="<div class='col-md-4'> <div class='thumbnail c' id='c' onclick='sliderol(0)'><div class='caption' style='padding: 5 5 5 5;'><span><img src='public/check.jpg'><b>"+key_list[i]+"</b></span></div></div></div>"
        var div4=document.createElement('div')
        div4.innerHTML=key_ach
        document.getElementById("roch").appendChild(div4);
    }

}

cancel1.onclick=function(){
    form3.style.marginLeft='700px'
    form4.style.marginLeft='700px'
    form2.style.marginLeft='700px'
    form1.style.marginLeft='0px'
    progress.style.left="38px"
    progress.style.width="140px"
}
cancel2.onclick=function(){
    console.log("cancle2")
    form3.style.marginLeft='700px'
    form4.style.marginLeft='700px'
    form2.style.marginLeft='700px'
    form1.style.marginLeft='0px'
    progress.style.left="38px"
    progress.style.width="140px"
}
cancel3.onclick=function(){
    form3.style.marginLeft='700px'
    form4.style.marginLeft='700px'
    form2.style.marginLeft='700px'
    form1.style.marginLeft='0px'
    progress.style.left="38px"
    progress.style.width="140px"
}
cancel4.onclick=function(){
    form3.style.marginLeft='700px'
    form4.style.marginLeft='700px'
    form2.style.marginLeft='700px'
    form1.style.marginLeft='0px'
    progress.style.left="38px"
    progress.style.width="140px"
}
clo.onclick=function(){
    form3.style.marginLeft='700px'
    form4.style.marginLeft='700px'
    form2.style.marginLeft='700px'
    form1.style.marginLeft='0px'
    progress.style.left="38px"
    progress.style.width="140px"
}
var myval = null;
function stars(e) {
    let star = document.querySelectorAll('.star');
    // let rate_num = document.querySelector('#rate-num');

    for (let i = 0; i <star.length; i++) {
        console.log('active'+i)
        star[i].classList.remove('active'+ i);
    }
    for (let j = 0; j <= e; j++) {
        star[j].classList.add('active'+j);
        myval = j + 1;
    }
    // rate_num.innerHTML = myval;
    console.log(myval)
}


document.addEventListener('DOMContentLoaded',function(event){
    document.getElementById('one').addEventListener("focus",function(){
        document.getElementById('two').style.color="#436F8C";
        document.getElementById('three').style.color="#436F8C";
        document.getElementById('four').style.color="#436F8C";
        document.getElementById('one').style.color="white";
        document.getElementById('ani').style.left="0px";
    }),
    document.getElementById('two').addEventListener("focus",function(){
        document.getElementById('one').style.color="#436F8C";
        document.getElementById('three').style.color="#436F8C";
        document.getElementById('four').style.color="#436F8C";
        document.getElementById('two').style.color="white";
        document.getElementById('ani').style.left="200px";
    }),
    document.getElementById('two').addEventListener('focusout',function(){
        // document.getElementById('one').style.color="white";
    }),
    document.getElementById('three').addEventListener('focus',function(){
        document.getElementById('one').style.color="#436F8C";
        document.getElementById('two').style.color="#436F8C";
        document.getElementById('four').style.color="#436F8C";
        document.getElementById('three').style.color="white";
        document.getElementById('ani').style.left="400px";
    }),
    document.getElementById('three').addEventListener('focusout',function(){
        // document.getElementById('one').style.color="white";
    }),
    document.getElementById('four').addEventListener('focus',function(){
        document.getElementById('one').style.color="#436F8C";
        document.getElementById('two').style.color="#436F8C";
        document.getElementById('three').style.color="#436F8C";
        document.getElementById('four').style.color="white";
        document.getElementById('ani').style.left="588px";
    }),
    document.getElementById('four').addEventListener('focusout',function(){
        // document.getElementById('one').style.color="white";
    });
})

var i=0;
function read(){
    if(!i){
        document.getElementById('more').style.display="inline";
        document.getElementById('dots').style.display="none";
        document.getElementById('para').style.marginBottom="0";
        document.getElementById('ca').style.marginBottom="10";
        document.getElementById('read-btn').innerHTML="Show Less";
        i=1;
    }else{
        document.getElementById('more').style.display="none";
        document.getElementById('para').style.marginBottom="10";
        document.getElementById('dots').style.display="inline";
        document.getElementById('ca').style.marginBottom="20";
        document.getElementById('read-btn').innerHTML="Show More";
        i=0;
    }
}

var j=0;
function expandsum(){
    if(!j){
        document.getElementById('rota').classList.remove("rota-new-a");
        document.getElementById('rota').classList.add("rota-new");
        document.getElementById('h6').style.visibility="hidden";
        document.getElementById('ca').style.visibility="hidden";
       
        j=1
    }else{
        document.getElementById('rota').classList.remove("rota-new");
        document.getElementById('rota').classList.add("rota");
        document.getElementById('rota').classList.add("rota-new-a");
        document.getElementById('h6').style.visibility="visible";
        document.getElementById('ca').style.visibility="visible";
        j=0;
    }
}
var k=0;
function expandskill(){
    if(!k){
        document.getElementById('rota2').classList.remove("rota-new3");
        document.getElementById('rota2').classList.add("rota-new1");
        document.getElementById('ca2').style.visibility="hidden";
        document.getElementById('ca3').style.visibility="hidden";
        k=1
    }else{
        document.getElementById('rota2').classList.remove("rota-new1");
        document.getElementById('rota2').classList.add("rota2");
        document.getElementById('rota2').classList.add("rota-new3");
        document.getElementById('ca2').style.visibility="visible";
        document.getElementById('ca3').style.visibility="visible";
        k=0;
    }
}

var l=0
function run(num){
    if(!l){
        // document.getElementById('line').style.display="none";
        document.getElementById('line').style.height="230px";
        document.getElementById('boxx'+num).style.display="none";
        // document.getElementById('box2').style.display="none";
        // document.getElementById('box3').style.display="none";
        // document.getElementById('box4').style.display="none";
        l=1
    }else{
        document.getElementById('line').style.height="350px";
        document.getElementById('boxx'+num).style.display="block";
        // document.getElementById('box2').style.display="block";
        // document.getElementById('box3').style.display="block";
        // document.getElementById('box4').style.display="block";
        l=0
    }
}

var m=0;
function showmore(){
    if(!m){
        document.getElementById('more-para').style.display="inline";
        document.getElementById('dots2').style.display="none";
        document.getElementById('a').innerHTML="Less";
        m=1;
    }else{
        document.getElementById('more-para').style.display="none";
        document.getElementById('dots2').style.display="inline";
        document.getElementById('a').innerHTML="More";
        m=0;
    }
}

var n=0;
function toogle(){
    if(!n){
        document.getElementById('rota3').classList.remove("rota-new4");
        document.getElementById('rota3').classList.add("rota-new2");
        document.getElementById('co1').style.visibility="hidden";
        document.getElementById('co2').style.visibility="hidden";
        document.getElementById('co3').style.visibility="hidden";
        document.getElementById('co4').style.visibility="hidden";
        // document.getElementById('co5').style.visibility="hidden";
        n=1
    }else{
        document.getElementById('rota3').classList.remove("rota-new2");
        document.getElementById('rota3').classList.add("rota3");
        document.getElementById('rota3').classList.add("rota-new4");
        document.getElementById('co1').style.visibility="visible";
        document.getElementById('co2').style.visibility="visible";
        document.getElementById('co3').style.visibility="visible";
        document.getElementById('co4').style.visibility="visible";
        // document.getElementById('co5').style.visibility="visible";
        n=0;
    }
}
function openedit(){
        document.getElementById("view1").style.display="none";
        document.getElementById("view2").style.display="block";
    
}
// function sumedit(){
//     var exp=document.getElementById("exp").value;
//     var summary=document.getElementById("sumtxt").value;
//     if (exp.length!=0 & summary.length!=0){
//         document.querySelector("#summary #h6").innerHTML="Years of Experience: <b>"+exp+" Years</b>";
//         document.querySelector("#summary #para").innerHTML=summary.substr(0,(summary.length)/2)+"<span id="+"dots"+">...</span> <span class="+"read-more"+" id="+"more"+">"+summary.substr((summary.length)/2,(summary.length)+1)+"</span><a role="+"button"+" id="+"read-btn"+" onclick="+"read()"+">Show More</a><span></span>";
//     }
//     else if(exp.length!=0 & summary.length==0){
//         document.querySelector("#summary #h6").innerHTML="Years of Experience: <b>"+exp+" Years</b>";
//     }
//     else if(exp.length==0 & summary.length!=0){
//         document.querySelector("#summary #para").innerHTML=summary.substr(0,(summary.length)/2)+"<span id="+"dots"+">...</span> <span class="+"read-more"+" id="+"more"+">"+summary.substr((summary.length)/2,(summary.length)+1)+"</span><a role="+"button"+" id="+"read-btn"+" onclick="+"read()"+">Show More</a><span></span>";
//     }
//     document.getElementById("view1").style.display="block";
//     document.getElementById("view2").style.display="none";
    
// }
function expedit1(number){
    var name=document.getElementById("pname"+number).value;
    var dur=document.getElementById("dura"+number).value;
    // console.log(name,dur);
    // console.log(name.length,dur);
    if (name.length!=0 & dur.length!=0){
        console.log(name,dur);
        document.querySelector("#pro-n"+number).innerHTML=name;
        document.querySelector("#mon"+number).innerHTML=dur+" Months"
    }
    else if(name.length!=0 & dur.length==0){
        // document.querySelector("#exp #pro-n").innerHTML=exp;
        document.querySelector("#pro-n"+number).innerHTML=name;
    }
    else if(name.length==0 & dur.length!=0){
        document.querySelector("#mon"+number).innerHTML=dur+" Months"
    }
}

// function expedit2(){
//     var name=document.getElementById("pname2").value;
//     var dur=document.getElementById("dura2").value;
//     console.log(name.length,dur);
//     if (name.length!=0 & dur.length!=0){
//         document.querySelector("#pro-n2").innerHTML=name;
//         document.querySelector("#mon2").innerHTML=dur+" Months"
//     }
//     else if(name.length!=0 & dur.length==0){
//         // document.querySelector("#exp #pro-n").innerHTML=exp;
//         document.querySelector("#pro-n2").innerHTML=name;
//     }
//     else if(name.length==0 & dur.length!=0){
//         document.querySelector("#mon2").innerHTML=dur+" Months"
//     }
// }
function openedit2(){
    document.getElementById("view1-1").style.display="none";
    document.getElementById("view2-2").style.display="block";

}

function expedit3(){
    var exp=document.getElementById("tare").value;
    if(exp.length!=0){
        document.querySelector("#exp #uniq").innerHTML=exp.substr(0,(exp.length)/2)+"<span id="+"dots2"+">...</span> <span id="+"more-para"+">"+exp.substr((exp.length)/2,(exp.length)+1)+"</span>";
    }
    document.getElementById("view1-1").style.display="block";
    document.getElementById("view2-2").style.display="none";
}
// function otheredit1(){
//     var name=document.getElementById("n1").value;
//     // var year=document.getElementById("year1").value;
//     if (name.length!=0 & year.length!=0){
//         document.querySelector("#other #cname").innerHTML=name;
//         document.querySelector("#other #ye").innerHTML=year
//     }
//     else if(name.length!=0 & year.length==0){
//         document.querySelector("#other #cname").innerHTML=name;
//     }
//     else if(name.length==0 & year.length!=0){
//         document.querySelector("#other #ye").innerHTML=year
//     }
// }
// function otheredit2(){
//     var name=document.getElementById("n2").value;
//     var year=document.getElementById("year2").value;
//     if (name.length!=0 & year.length!=0){
//         document.querySelector("#other #cname1").innerHTML=name;
//         document.querySelector("#other #ye1").innerHTML=year
//     }
//     else if(name.length!=0 & year.length==0){
//         document.querySelector("#other #cname1").innerHTML=name;
//     }
//     else if(name.length==0 & year.length!=0){
//         document.querySelector("#other #ye1").innerHTML=year
//     }
// }

// function otheredit1(){
//     var name=document.getElementById("n1").value;
//     // var year=document.getElementById("year1").value;
//     if (name.length!=0){
//         document.querySelector("#other #cname").innerHTML=name;
//         // document.querySelector("#other #ye").innerHTML=year
//     }
//     // else if(name.length!=0 & year.length==0){
//     //     document.querySelector("#other #cname").innerHTML=name;
//     // }
//     // else if(name.length==0 & year.length!=0){
//     //     document.querySelector("#other #ye").innerHTML=year
//     // }
// }
// function otheredit2(){
//     var name=document.getElementById("n2").value;
//     // var year=document.getElementById("year2").value;
//     if (name.length!=0 ){
//         document.querySelector("#other #cname1").innerHTML=name;
//         // document.querySelector("#other #ye1").innerHTML=year
//     }
//     // else if(name.length!=0 & year.length==0){
//     //     document.querySelector("#other #cname1").innerHTML=name;
//     // }
//     // else if(name.length==0 & year.length!=0){
//     //     document.querySelector("#other #ye1").innerHTML=year
//     // }
// }

function otheredit1(){
    var name=document.getElementById("n1").value;
    var year=document.getElementById("spanyear").value;
    console.log(year,name);
    if (name.length!=0 & year.length!=0){
        document.querySelector("#other #cname").innerHTML=name;
        document.querySelector("#other #ye").innerHTML=year
    }
    else if(name.length!=0 & year.length==0){
        document.querySelector("#other #cname").innerHTML=name;
    }
    else if(name.length==0 & year.length!=0){
        document.querySelector("#other #ye").innerHTML=year
    }
}
function otheredit2(){
    var name=document.getElementById("n2").value;
    var year=document.getElementById("spanyear2").value;
    if (name.length!=0 & year.length!=0){
        document.querySelector("#other #cname1").innerHTML=name;
        document.querySelector("#other #ye1").innerHTML=year
    }
    else if(name.length!=0 & year.length==0){
        document.querySelector("#other #cname1").innerHTML=name;
    }
    else if(name.length==0 & year.length!=0){
        document.querySelector("#other #ye1").innerHTML=year
    }
}
function otheredit(){
    var name=document.getElementById("n-2").value;
    // var year=document.getElementById("year2").value;
    if (name.length!=0 ){
        document.querySelector("#other #cname-1").innerHTML=name;
        // document.querySelector("#other #ye1").innerHTML=year
    }
    // else if(name.length!=0 & year.length==0){
    //     document.querySelector("#other #cname1").innerHTML=name;
    // }
    // else if(name.length==0 & year.length!=0){
    //     document.querySelector("#other #ye1").innerHTML=year
    // }
}
function otheredit3(){
    var name=document.getElementById("n3").value;
    var year=document.getElementById("year3").value;
    if (name.length!=0 & year.length!=0){
        document.querySelector("#other #cname2").innerHTML=name;
        document.querySelector("#other #ye2").innerHTML=year
    }
    else if(name.length!=0 & year.length==0){
        document.querySelector("#other #cname2").innerHTML=name;
    }
    else if(name.length==0 & year.length!=0){
        document.querySelector("#other #ye2").innerHTML=year
    }
}

function otheredit4(){
    var name=document.getElementById("n4").value;
    var year=document.getElementById("year4").value;
    if (name.length!=0 & year.length!=0){
        document.querySelector("#other #cname3").innerHTML=name;
        document.querySelector("#other #ye3").innerHTML=year
    }
    else if(name.length!=0 & year.length==0){
        document.querySelector("#other #cname3").innerHTML=name;
    }
    else if(name.length==0 & year.length!=0){
        document.querySelector("#other #ye3").innerHTML=year
    }
}

function otheredit5(){
    var name=document.getElementById("n5").value;
    var year=document.getElementById("year5").value;
    console.log(name,year)
    if (name.length!=0 & year.length!=0){
        document.querySelector("#cname4").innerHTML=name;
        document.querySelector("#ye4").innerHTML=year
    }
    else if(name.length!=0 & year.length==0){
        document.querySelector("#cname4").innerHTML=name;
    }
    else if(name.length==0 & year.length!=0){
        document.querySelector("#ye4").innerHTML=year
    }
}

function otheredit6(){
    var name=document.getElementById("n6").value;
    var year=document.getElementById("year6").value;
    console.log(name,year)
    if (name.length!=0 & year.length!=0){
        document.querySelector("#cname5").innerHTML=name;
        document.querySelector("#ye5").innerHTML=year
    }
    else if(name.length!=0 & year.length==0){
        document.querySelector("#cname5").innerHTML=name;
    }
    else if(name.length==0 & year.length!=0){
        document.querySelector("#ye5").innerHTML=year
    }
}

function otheredit7(){
    var name=document.getElementById("n7").value;
    var year=document.getElementById("year7").value;
    console.log(name,year)
    if (name.length!=0 & year.length!=0){
        document.querySelector("#cname6").innerHTML=name;
        document.querySelector("#ye6").innerHTML=year
    }
    else if(name.length!=0 & year.length==0){
        document.querySelector("#cname6").innerHTML=name;
    }
    else if(name.length==0 & year.length!=0){
        document.querySelector("#ye6").innerHTML=year
    }
}

function otheredit8(){
    var name=document.getElementById("n8").value;
    var year=document.getElementById("year8").value;
    console.log(name,year)
    if (name.length!=0 & year.length!=0){
        document.querySelector("#cname7").innerHTML=name;
        document.querySelector("#ye7").innerHTML=year
    }
    else if(name.length!=0 & year.length==0){
        document.querySelector("#cname7").innerHTML=name;
    }
    else if(name.length==0 & year.length!=0){
        document.querySelector("#ye7").innerHTML=year
    }
}

function otheredit9(){
    var name=document.getElementById("n9").value;
    var year=document.getElementById("year9").value;
    console.log(name,year)
    if (name.length!=0 & year.length!=0){
        document.querySelector("#cname8").innerHTML=name;
        document.querySelector("#ye8").innerHTML=year
    }
    else if(name.length!=0 & year.length==0){
        document.querySelector("#cname8").innerHTML=name;
    }
    else if(name.length==0 & year.length!=0){
        document.querySelector("#ye8").innerHTML=year
    }
}

function otheredit10(){
    var name=document.getElementById("n10").value;
    var year=document.getElementById("year10").value;
    console.log(name,year)
    if (name.length!=0 & year.length!=0){
        document.querySelector("#cname9").innerHTML=name;
        document.querySelector("#ye9").innerHTML=year
    }
    else if(name.length!=0 & year.length==0){
        document.querySelector("#cname9").innerHTML=name;
    }
    else if(name.length==0 & year.length!=0){
        document.querySelector("#ye9").innerHTML=year
    }
}

var slides=document.querySelectorAll(".exp #slide-1");
console.log(slides);
function sliderol(index){
    slides.forEach(function(node){
        node.style.display="none";
    })
    slides[index].style.display="block";
}
sliderol()

function profile_edit(){
    var input=document.querySelectorAll("#pro-name0 input")
    // console.log(input)
    var select =document.querySelectorAll("#pro-name0 select")
    console.log(select[0].id)
    for(var i=0;i<input.length;i++){
        // console.log("i: "+i)    
        // console.log(input[i])
        if(input[i].value.length!=0 & document.querySelector('.'+input[i].id)!=null){
            if (input[i].type=='url'){
                console.log(input[i].id);
                document.querySelector("."+input[i].id).href=input[i].value;
            }
            else{
                console.log(input[i].type)
                document.querySelector('.'+input[i].id).innerHTML=input[i].value;
            }
            
        }
    }
    for(var j=0;j<select.length;j++){
        document.querySelector("."+ select[j].id).innerHTML=select[j].value;
    }
}

function summary(){
    var input=document.querySelectorAll('#pro-name1 input')
    var select=document.querySelectorAll('#pro-name1 .select1')
    // var sum = document.getElementById('editor1').value
    var html=CKEDITOR.instances.editor.getSnapshot();
    var dom=document.createElement("DIV");
    dom.innerHTML=html;
    var summary=(dom.textContent || dom.innerText);
    // alert(summary);
    // console.log(document.querySelector(".ql-editor p"))
    // document.getElementById('para').innerHTML=document.querySelector(".ql-editor p");
    if(summary.length!=0){
        document.getElementById('para').innerHTML=summary.substr(0,(summary.length)/2)+"<span id="+"dots"+">...</span> <span class="+"read-more"+" id="+"more"+">"+summary.substr((summary.length)/2,(summary.length)+1)+"</span><a role="+"button"+" id="+"read-btn"+" onclick="+"read()"+">Show More</a><span></span>";;
    } 
    for(var i=0;i<input.length;i++){
        if(input[i].value.length!=0){
            document.querySelector("."+input[i].id).innerHTML=input[i].value
        }
    }
    console.log(select)
    for(var j =0;j<select.length;j++){
        // console.log(document.querySelector("."+ select[j].id))
        document.querySelector("."+ select[j].id).innerHTML=select[j].value;
    }
    // var summary = quill.getText(0,quill.getLength());
    // // var text=quill.root.innerHTML
    // console.log(quill.getLength())
}
// const content=
// <div class="col-xs-6 col-sm-3">
// <div class="thumbnail card-in" id="shadow">
//     <div class="caption">
//         <div class="row st" style="padding-left:5px; padding-right: 5px;">
//             <div class="col-md-8"><h6>Effective Comm</h6></div>
//             <div class="col-md-4 card-in-icon "><span><i class="fas fa-ellipsis-h"></i></span></div>
//         </div>
//     </div>
//     <div class="stars">
//        <div class="row">
//         <div class="col-md-5"><p>Exp : 1 year</p></div>
//         <div class="col-md-7">
//             <span class="s1" ><i class="fas fa-star"></i></span>
//             <span class="s2" ><i class="fas fa-star"></i></span>
//             <span class="s3" ><i class="fas fa-star"></i></span>
//             <span class="s4" ><i class="fas fa-star"></i></span>
//             <span class="s5" ><i class="fas fa-star"></i></span>
//         </div>
//        </div>
//     </div>
// </div>
// </div>





function skills(){
    var arr=["<span class='s1'> <i class='fas fa-star'></i></span>","<span class='s2' > <i class='fas fa-star'></i></span>","<span class='s3'> <i class='fas fa-star'></i></span>","<span class='s4' > <i class='fas fa-star'></i></span>","<span class='s5' > <i class='fas fa-star'></i></span>"]
    var l=[];
    var h6;
    var status;
    var exp=0;
    var input=document.querySelectorAll("#pro-name2 input")
    var select=document.querySelectorAll("#pro-name2 select")
    console.log(select)
    // console.log(input,select)
    for(var i=0;i<input.length;i++){
        if(input[i].type=='text' & input[i].length!=0){
            h6=input[i].value;
            break;
        }
    }
    for(j=0 ; j<select.length ; j++){
        console.log(select[j].value)
        if(select[j].value !='null'){
            console.log("not null:"+select[j].value)
            if(select[j].id=='type'){
                status=select[j].value
            }
            else if(select[j].id=='year1'){
                exp=select[j].value
            }
        }
    }
    console.log("select"+status)
    // l.push()
    for(k=0;k<myval;k++){
        l.push(arr[k])
    }
    if(l.length!=5){
        var num=5-l.length
        console.log(5-l.length)
        for(i=0;i<num;i++){
            console.log("i")
            l.push("<span class='s6'> <i class='fas fa-star'></i></span>")
        }
    }
    console.log(l)
    const content="<div class='col-xs-6 col-sm-3'><div class='thumbnail card-in' id='shadow'><div class='caption'><div class='row st' style='padding-left:5px; padding-right: 5px;'><div class='col-md-8'><h6>"+h6+"</h6></div><div class='col-md-4 card-in-icon'><span><i class='fas fa-ellipsis-h'></i></span></div></div></div><div class='stars'><div class='row' style='height:20'><div class='col-md-5'><p>Exp : "+exp+" year</p></div><div class='col-md-7'>"+l[0]+l[1]+l[2]+l[3]+l[4]+"</div></div></div></div></div>"
    var li =document.createElement('div')
    li.innerHTML=content;
    if(status=="ca2"){
        console.log(status)
        document.getElementById('roww').appendChild(li);
    }
    else if(status=="ca3"){
        console.log(status)
        document.getElementById('roww2').appendChild(li);
    }
    
    // var cal="col-xs-6"+' '+"    col-sm-3"
    // const content="<div class="+"col-xs-6"+"><div class="+"thumbnail" +"id="+"shadow"+"><div class="+"caption"+"><div class="+"row"+"style="+"padding-left:5px;padding-right:5px;"+"><div class="+"col-md-8"+"><h6>Effective Comm</h6></div><div class="+"col-md-4 card-in-icon "+"><span><i class="+"fas fa-ellipsis-h"+"></i></span></div></div></div><div class="+"stars"+"><div class="+"row"+"><div class="+"col-md-5"+"><p>Exp : 1 year</p></div><div class="+"col-md-7"+"><span class="+"s1"+" ><i class="+"fas fa-star"+"></i></span><span class="+"s2"+"><i class="+"fas fa-star"+"></i></span><span class="+"s3"+"><i class="+"fas fa-star"+"></i></span><span class="+"s4"+" ><i class="+"fas fa-star"+"></i></span><span class="+"s5"+" ><i class="+"fas fa-star"+"></i></span></div></div></div></div></div>";
    
    
    // console.log(content);
}


function saveform1(){
    // var exp=document.getElementById("exp_experience").value;
    // var from=document.getElementById("datepicker").value;
    // var to=document.getElementById("datepicker2").value;
    // var c_name=document.getElementById("company_name").value;
    // var c_location =document.getElementById("company_location").value;
    // console.log(exp,from,to,c_name,c_location);
}
