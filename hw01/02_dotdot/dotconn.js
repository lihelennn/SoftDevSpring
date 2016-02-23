/*
Helen Li
SoftDev2 pd 3
HW 2b -- Dot, Dot, Dot
2016-02-11
*/

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var b = document.getElementById("clear");

var width = c.width;
var height = c.height;
var clickNum = 0;
var mouseX;
var mouseY;

//Draw the outer rectangle 
function drawOutside(){
    ctx.rect(0,0,width,height);
    ctx.stroke();
}

drawOutside();

//Event listener for drawing on the canvas
c.addEventListener("click",draw);

//Event listener for clicking the button
b.addEventListener("click",clear);

//Draw the big dots that are to be connected
function drawDot(xcoor, ycoor){
    //console.log("drawing circle");
    //console.log("circle: "+xcoor +","+ycoor);
    ctx.beginPath();
    ctx.arc(mouseX,mouseY,10,0,Math.PI/3);
    ctx.arc(mouseX,mouseY,10,Math.PI/3,2*Math.PI/3);
    ctx.arc(mouseX,mouseY,10,2*Math.PI/3,0);
    ctx.fillStyle="#ffe4c4";
    ctx.fill();
    ctx.closePath();
}

//Draw the lines
function draw(e){
    e.preventDefault();
    mouseX = e.pageX-c.offsetLeft;
    mouseY = e.pageY-c.offsetTop;
   // console.log("coordinates: "+mouseX +","+mouseY);
    if (clickNum==0){
	//Beginning dot
	clickNum++;
	ctx.beginPath();
	ctx.moveTo(mouseX,mouseY);
	drawDot(mouseX,mouseY);
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.moveTo(mouseX,mouseY);
	ctx.closePath();
    }else{
	//Not beginning dot
	ctx.lineTo(mouseX,mouseY);
	ctx.stroke();
	drawDot(mouseX,mouseY);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(mouseX,mouseY);
	ctx.closePath();
    }
}

//Clear the canvas
function clear(e){
    e.preventDefault();
    clickNum=0;
    ctx.clearRect(0,0,width,height);
    drawOutside();
}
