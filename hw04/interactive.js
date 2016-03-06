//Had a small bug (fixed as of 03/03/2016): had "https://www.w3.org/2000/svg" instead of "http://www.w3.org/2000/svg"

/*
  Helen Li
  SoftDev2 pd 3
  HW04 -- SVG
  2016-03-03
*/

var pic = document.getElementById("vimage");

var radius = 0;
var width = pic.getAttribute("width");
var height = pic.getAttribute("height");
var expanding = true;
var intervalID;
var dvdX = 250;
var dvdY = 250;
var movingUp = true;
var movingRight = true;

var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
c.setAttribute("cx",width/2);
c.setAttribute("cy",height/2);
c.setAttribute("r",radius.toString());
c.setAttribute("fill","blue");
c.setAttribute("stroke","black");
pic.appendChild(c);

var image = document.createElementNS("http://www.w3.org/2000/svg","image");
image.setAttribute("x",dvdX.toString());
image.setAttribute("y",dvdY.toString());
image.setAttribute("width","100");
image.setAttribute("height","100");
//image.setAttribute("xlink:href","logo_dvd.jpg");
image.setAttributeNS('http://www.w3.org/1999/xlink','href','logo_dvd.jpg');

startCircle = document.getElementById("startCircle");
stopCircle = document.getElementById("stopCircle");
dvd = document.getElementById("dvd");

startCircle.addEventListener("click",startC);
stopCircle.addEventListener("click",stopC);
dvd.addEventListener("click",animateDVD);

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

function moveDVD(){
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
	console.log(dvdY);
    }else{
	if (dvdY <= 0){
	    movingUp = false;
	    console.log(dvdY);
        }
    }
    loadDVD();
}

function loadDVD(){
    image.setAttribute("x",dvdX.toString());
    image.setAttribute("y",dvdY.toString());
    pic.appendChild(image);  
}


function animateDVD(e){
    loadDVD();
    intervalIDDVD = window.setInterval(moveDVD,16);
}



