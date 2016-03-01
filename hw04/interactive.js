var pic = document.getElementById("vimage");

//this.setAttribute("fill","green");

var c = document.createElementNS("https://www.w3.org/2000/svg","circle");

var circle = document.getElementByTagName("circle")[0];
var radius = parseInt(c.getAttribute("r"));
var width = pic.width;
var height = pic.height;
var expanding = true;



c.setAttribute("cx",0);
c.setAttribute("cy",0);
c.setAttribute("r",radius.toString());
c.setAttribute("fill","red");
c.setAttribute("stroke","black");
pic.appendChild(c);

var start = document.getElementById("circle");
var stop = document.getElementById("stop");
var dvd = document.getElemenyById("dvd");
start.addEventListener("click", changeSize);

var changeSize = function(e){
    if (radius == width/2){
	expanding = false;
    }else{
	if ( radius = 0){
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



var clicked = function(e){
    if(e.toElement == this){
	drawDot(e.offsetX,e.offsetY);
    }
}

pic.addEventListener("click",clicked);

intervalID = window.setInterval(<fxn>,16);

