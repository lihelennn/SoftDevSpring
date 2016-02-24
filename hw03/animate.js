/*
  Helen Li
  SoftDev2 pd 3
  HW03 -- Are We Ever Going to Start the Movie?
  2016-02-23
*/

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var s = document.getElementById("stop");
var circ = document.getElementById("circle");
var dvd = document.getElementById("dvd");

var width = c.width;
var height = c.height;

var radius = 0;
var dvdX = width/2;
var dvdY = height/2;

//variable boolean determining whether expanding or not
var expanding = true;
var movingRight = true;
var movingUp = true;

//variable for animation frame
var hello;

var logo = new Image();
logo.src = "logo_dvd.jpg";

//Draw the outer rectangle 
function drawOutside(){
    ctx.rect(0,0,width,height);
    ctx.stroke();
}

drawOutside();

//Event listener for drawing on the canvas
s.addEventListener("click",stop);
circ.addEventListener("click",animate);
dvd.addEventListener("click",animateDVD);

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

function loadDVD(){
    clear();
    ctx.drawImage(logo,dvdX,dvdY,100,100);
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
function stop(e){
    window.cancelAnimationFrame(hello);
}

function animateDVD(e){
    //console.log(dvdX);

    if (movingUp){
	dvdY--;
    }else{
	dvdY++;
    }

    if (movingRight){
	dvdX++;
    }else{
	dvdX--;
    }

    if (dvdX >= width-100){
	movingRight = false;
    }else{
	if (dvdX <= 0){
	    movingRight = true;
        }
    }
    if (dvdY >= height-100){
	movingUp = true;
    }else{
	if (dvdY <= 0){
	    movingUp = false;
        }
    }
    
    loadDVD();
    window.requestAnimationFrame(animateDVD);
   
}

