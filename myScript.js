var tabButtons1=document.querySelectorAll(".buttonContainer a");
var tabPanels1=document.querySelectorAll(".tabPanel");


function showPanel1(panelIndex) {
    // console.log(tabButtons1,tabPanels1)
    // tabButtons.forEach(function(node){
    //     node.style.backgroundColor="";
    //     node.style.color="";
    // });
    // tabButtons[panelIndex].style.b;ackgroundColor=colorCode;
    // tabButtons[panelIndex].style.color="white";
    tabPanels1.forEach(function(node){
        node.style.display="none";
    });
    tabPanels1[panelIndex].style.display="block";
    // tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel1(0);

var slides=document.querySelectorAll(".exp #slide-1");
console.log(slides);
var op=true;
function sliderol(index){
    slides.forEach(function(node){
        node.style.display="none";
    })
    console.log(slides[index])
    slides[index].style.display="block";
    document.getElementById("unify").className="col-md-7";
}
sliderol()
