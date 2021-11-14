
var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel1");

function showPanel(panelI) {
    tabButtons.forEach(function(node){
        node.style.color="";
        node.style.border="";
    });
    tabButtons[panelI].style.borderTop = "1px solid #DDDDDD";
    tabButtons[panelI].style.borderLeft = "1px solid #DDDDDD";
    tabButtons[panelI].style.borderRight = "1px solid #DDDDDD";
    tabButtons[panelI].style.borderBottom = "3px solid #66DAB5";
    tabButtons[panelI].style.color="black";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelI].style.display="block";
    // tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0);