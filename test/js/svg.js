window.onload=function(){
	JZJN();
	TQGJJ();
	JGZL();
}



function JZJN(){
	var docm=document.getElementById("XMLID_1674_");
	docm.setAttribute("rx","4px");
	docm.setAttribute("ry","4px");
 	docm.setAttribute("fill","url(#linear)");
 	docm.setAttribute("stroke","yellow");
 	docm.setAttribute("stroke-width","2px");
 	docm.setAttribute("stroke-dasharray","6,2");
}

function TQGJJ(){
	var docm=document.getElementById("XMLID_1668_");
 	docm.setAttribute("fill","url(#linear1)");
}


function ClickIt(event){
	var svg=event.target;
	svg.setAttribute("fill",randomColor());
}
function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+","+g+","+b+")";
}

function JGZL(){
	var docm=document.getElementById("XMLID_1653_");
	docm.setAttribute("fill","yellow");
	docm.setAttribute("stroke","green");
	docm.setAttribute("stroke-width","3");
 	docm.setAttribute("filter","url(#f1)");
}
