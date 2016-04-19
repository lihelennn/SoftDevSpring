var base = "this is in f1 in the flobal namespace";
var x = "x in the global namespace";

var f2 = function(){
    console.log("this is f2");
};


var f1 = {
    x : "something in the f1 namespace",
    f2 : f2,
    f: function(){
	console.log("this is f in the f1 namespace");
	console.log("x is " + x); //looks globally
	console.log("f1.x is " + f1.x);
	console.log("better way: " + this.x); //look in this function
    }
};


var makeIncrementer = function(){
    var x = 0;
    return function(){
	x++;
	return x;
    }
};

var makeAdder = function(n){
    var x = 0;
    return function(n){
	x+=n;
	return x;
    }
};
