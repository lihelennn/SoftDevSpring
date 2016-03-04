//Had a small bug (fixed as of 03/03/2016): had "https://www.w3.org/2000/svg" instead of "http://www.w3.org/2000/svg"

/*
  Helen Li
  SoftDev2 pd 3
  HW04 -- SVG
  2016-03-03
*/

var pic = document.getElementById("vimage");
var c = document.createElementNS("http://www.w3.org/2000/svg","circle");

var radius = 0;
var width = pic.getAttribute("width");
var height = pic.getAttribute("height");
var expanding = true;
var intervalID;

c.setAttribute("cx",width/2);
c.setAttribute("cy",height/2);
c.setAttribute("r",radius.toString());
c.setAttribute("fill","blue");
c.setAttribute("stroke","black");
pic.appendChild(c);

startCircle = document.getElementById("startCircle");
stopCircle = document.getElementById("stopCircle");

startCircle.addEventListener("click",startC);
stopCircle.addEventListener("click",stopC);

var changeSize = function(){
    console.log(radius);
    if (radius == width/2){
	expanding = false;
    }else{
	if (radius == 0){
	    expanding = true;
	}
    }
    if (expanding){
	radius++;
    }else{
	radius--;
    }
    drawDot();
}

function drawDot(){
    c.setAttribute("r",radius.toString());
    pic.appendChild(c);

}

function startC(e){
    changeSize();
    intervalID = window.setInterval(changeSize,16);
}

function stopC(e){
    clearInterval(intervalID);
}

