var pic = document.getElementById("vimage");

//say that there's an svg

//this.setAttribute("fill","green");

var c1 = document.createElementNS("https://www.w3.org/2000/svg","circle");

c1.setAttribute("cx",0);
c1.setAttribute("cy",0);
c1.setAttribute("r","100");
c1.setAttribute("fill","red");
c1.setAttribute("stroke","black");
//c1.addEventListener("click",functionNameToChangeSize);

pic.appendChild(c1);

console.log("hello");

/*
var clicked = function(e){
if(e.toElement == this){
drawDot(e.offsetX,e.offsetY);
}


pic.addEventListener("click",clicked);
*/
