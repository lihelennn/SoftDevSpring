/*
  Helen Li
  SoftDev2 pd 3
  HW02 -- Circular
  2016-02-22
*/

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var s = document.getElementById("stop");
var circ=document.getElementById("circle");

var width = c.width;
var height = c.height;

var radius = 0;

//variable boolean determining whether expanding or not
var expanding = true;

//variable for animation frame
var hello;

//Draw the outer rectangle 
function drawOutside(){
    ctx.rect(0,0,width,height);
    ctx.stroke();
}

drawOutside();

//Event listener for drawing on the canvas
s.addEventListener("click",stop);
circ.addEventListener("click",animate);

//Draw circle with the current radius
function drawDot(){
    clear();
    ctx.beginPath();
    ctx.moveTo(width/2,height/2);
    ctx.arc(width/2,height/2,radius,0,Math.PI*2);
    ctx.stroke();
    ctx.fillStyle="#0000ff";
    ctx.fill();
    ctx.closePath();
}

//Clear the canvas
function clear(){
    ctx.clearRect(0,0,width,height);
    drawOutside();
}

//Change the radius and draw, draw, draw
function animate(e){
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
    hello = window.requestAnimationFrame(animate);
}

//Stop the drawing until told to draw again
function stop(){
    window.cancelAnimationFrame(hello);
}


