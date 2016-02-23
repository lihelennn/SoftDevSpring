var c = document.getElementById("ftb2maga");
var ctx = c.getContext("2d");

var width=c.width;
var height=c.height;

//OUTER RECTANGLE
//Set the color that will fill the inner area of whatever is drawn.
ctx.fillStyle="#0000ff";

//Set the color that will draw the lines and shapes.
ctx.strokeStyle="ffff00";

//Pinpoint the outline of the rectangle at coordinates (a,b) and (c,d).
ctx.rect(0,0,width,height);

//Draw the outline of the pinpointed rectangle (or in general, shape) with the strokeStyle color.
ctx.stroke();

//Fill the inner area of whatever is drawn with the fillStyle color.
//ctx.fillRect(0,0,width,height);


//LINES AND FILL AREA

//Begin a new block of commands.
ctx.beginPath();

//Set the starting coordinte  to (a,b) given. There can only be one moveTo in every block of commands.
ctx.moveTo(width/2,height/2);

//Pinpoint a line(s) from the starting coordinate to the coordinate (a,b) given.
ctx.lineTo(width,height);
ctx.lineTo(0,height);
ctx.lineTo(width/2,height/2);

//Draw that/those line(s) in this block of commands from where the cursor was last to where it is now.
ctx.stroke();

//Fill the inner area that is enclosed by the lines in this block of commands with the fill color.
ctx.fill();

//End this block of commands.
ctx.closePath();

//Draw the top blue triangle.
ctx.beginPath();
ctx.moveTo(width/2,height/2);
ctx.lineTo(width,0);
ctx.lineTo(0,0);
ctx.lineTo(width/2,height/2);
ctx.stroke();
ctx.fill();
ctx.closePath();

//ARC
ctx.beginPath();

//Draw an arc with a center at (a,b), radius c, and an angle that goes from d to e. d and e are in radians.
ctx.arc(width/2,height/2,30,-Math.PI/4,Math.PI/4);
ctx.stroke();
ctx.closePath();

//Draw the left arc.
ctx.beginPath();
ctx.arc(width/2,height/2,30,Math.PI-Math.PI/4,Math.PI+Math.PI/4);
ctx.stroke();
ctx.closePath();

//TEXT
ctx.beginPath();

//Set the size and font of the text.
ctx.font="30px arial";

//Place the text, "txt," starting at coordinates (a,b) with the set size and font.
ctx.fillText("Cool!",10,height/2);
ctx.closePath();
