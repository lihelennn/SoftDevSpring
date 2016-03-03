var pic = document.getElementById("vimage");

//this.setAttribute("fill","green");

var mySVG = document.createElementNS("https://www.w3.org/2000/svg","svg");
mySVG.setAttribute("height",500);
mySVG.setAttribute("width",500);
mySVG.setAttribute("id","vimage");
mySVG.setAttribute("style","border:2px solid;");
document.body.appendChild(mySVG);

var radius = 100;
var width = mySVG.getAttribute("width");
var height = mySVG.getAttribute("height");
var expanding = true;

//var start = document.getElementById("circle");
//var stop = document.getElementById("stop");
//var dvd = document.getElementById("dvd");
mySVG.addEventListener("click",clicked);
//start.addEventListener("click", changeSize);

function clear(){
    var c = document.createElementNS("https://www.w3.org/2000/svg","circle");
    c.setAttribute("cx",0);
    c.setAttribute("cy",0);
    c.setAttribute("r",radius.toString());
    c.setAttribute("fill","white");
    c.setAttribute("stroke","white");
    mySVG.appendChild(c);
}

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
    var c = document.createElementNS("https://www.w3.org/2000/svg","circle");
    console.log("hello");
    clear();
    c.setAttribute("cx",0);
    c.setAttribute("cy",0);
    c.setAttribute("r",radius.toString());
    c.setAttribute("fill","red");
    c.setAttribute("stroke","black");
    mySVG.appendChild(c);
    console.log(document.getElementsByTagName("svg"));

}

function clicked(e){
    //console.log(radius);
    changeSize();
    intervalID = window.setInterval(clicked,16);

}

//drawDot(e.offsetX,e.offsetY);


