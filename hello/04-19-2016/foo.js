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

//instance of a class
//constructor
var makeIncrementer = function(){
    var x = 0;
    return function(){
	x++;
	return x;
    }
};

var makeAdder = function(n){
    var x = 0;
    return function(){
	x+=n;
	return x;
    }
};

var makeAdder2 = function(n){
    return function(x){
	return x+n;
    }
};

var makeCounter = function(){
    var i = 0;
    var get = function(){
	return i;
    };
    return {
	x : "this is a str in dict",
	set: function(x){ i=x; },
	get: get,
	inc: function(){ i+=1; },
	dec: function(){ i-=1; },
	setx: function(v){ this.x = v; },
    }
}


