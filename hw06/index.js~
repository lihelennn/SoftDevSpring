/*
Helen Li
SoftDev2 pd3
HW05 -- The Best Defense Against Tyranny...
2016-03-21
*/


var states = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Deleware", "District of Columbia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Marianas", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

var republicanDelegateNumber = [50, 28, 9, 58, 40, 172, 37, 28, 16, 19, 99, 76, 9, 19, 32, 69, 57, 30, 40, 46, 46, 23, 38, 42, 59, 38, 40, 52, 27, 36, 30, 23, 51, 24, 95, 72, 28, 9, 66, 43, 28, 71, 23, 19, 50, 29, 58, 155, 40, 16, 9, 49, 44, 34, 42, 29];

var alreadyAllotedR = ["Iowa", "New Hampshire", "Nevada", "South Carolina", "Alabama", "Alaska", "Arkansas", "Georiga", "Massaschusetts", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "American Samoa", "Kansas", "Kentucky", "Louisiana", "Maine", "Puerto Rico", "Hawaii", "Idaho", "Michigan", "Mississippi", "Virgin Islands", "District of Columbia", "Guam", "Wyoming", "Florida", "Illinois", "Missouri", "North Carolina", "Nortern Marianas", "Ohio"];

//republican bars
var chart = d3.select(".chartR");
var bar = chart.selectAll("div");
var barUpdate = bar.data(republicanDelegateNumber);
var barEnter = barUpdate.enter().append("div");
barEnter.style("width",function(d){return d*2.5+"px";});
bar = chart.selectAll("div");
barUpdate = bar.data(states);

barEnter.style("background-color",function(d){
    if (alreadyAllotedR.indexOf(d) >= 0){
	return "purple";
}});

barEnter.text(function(d){
    return d + " " + republicanDelegateNumber[states.indexOf(d)];
});


//making the republican key
var key = d3.select(".keyR");
var keyBar = key.selectAll("div");
var keyBarUpdate = keyBar.data([10, 10]);
var keyBarEnter = keyBarUpdate.enter().append("div");
keyBarEnter.style("width",function(d){return d*5+"px";});
keyBarEnter.style("align",function(d){return "center"});
keyBar = key.selectAll("div");
keyBarUpdate = keyBar.data(["allotted", "not allotted"]);

keyBarEnter.text(function(d){return d;});
keyBarEnter.style("background-color",function(d){
    if (d == "allotted"){
	return "purple";
}});


//--------------------------------------//

var democratStates = ["Iowa", "New Hampshire", "Nevada", "South Carolina", "Alabama", "American Samoa", "Arkansas", "Colorado", "Georgia", "Massachusetts", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "Kansas", "Louisiana", "Nebraska", "Maine", "Democrats Abroad", "Michigan", "Mississippi", "Northern Marianas", "Florida", "Illinois", "Missouri", "North Carolina", "Ohio", "Arizona", "Idaho", "Utah", "Alaska", "Hawaii", "Washington", "Wisconsin", "Wyoming", "New York", "Connecticut", "Deleware", "Maryland", "Pennsylvania", "Rhode Island", "Indiana", "Guam", "West Virginia", "Kentucky", "Oregon", "Virgin Islands", "Puerto Rico", "California", "Montana", "New Jersey", "New Mexico", "North Dakota", "South Dakota", "District of Columbia", "Unassigned"];

var alreadyAllottedD = democratStates.slice(0,democratStates.indexOf("Ohio")+1);

var democratDelegateNumber = [52, 32, 43, 59, 60, 11, 37, 78, 117, 116, 93, 42, 75, 251, 26, 109, 37, 59, 30, 30, 17, 147, 41, 11, 246, 182, 84, 121, 160, 85, 27, 37, 20, 35, 118, 96, 18, 291, 71, 31, 118, 210, 33, 92, 12, 37, 60, 74, 12, 67, 548, 27, 142, 43, 23, 25, 46, 1];


//democratic bars
var chart = d3.select(".chartD");
var bar = chart.selectAll("div");
var barUpdate = bar.data(states);
var barEnter = barUpdate.enter().append("div");
barEnter.style("width",function(d){return democratDelegateNumber[democratStates.indexOf(d)]*2.5+"px";});

barEnter.style("background-color",function(d){
    if (alreadyAllottedD.indexOf(d) >= 0){
	return "purple";
}});

barEnter.text(function(d){
    return d + " " + democratDelegateNumber[democratStates.indexOf(d)];
});

//adding "democrats abroad" and unassigned"
barUpdate = bar.data(["Democrats Abroad", "Unassigned"]);
barEnter = barUpdate.enter().append("div");
barEnter.style("width",function(d){return democratDelegateNumber[democratStates.indexOf(d)]*2.5+"px";});
barEnter.style("background-color",function(d){
    if (alreadyAllottedD.indexOf(d) >= 0){
	return "purple";
}});

barEnter.text(function(d){
    return d + " " + democratDelegateNumber[democratStates.indexOf(d)];
});


//making the democratic key
var key = d3.select(".keyD");
var keyBar = key.selectAll("div");
var keyBarUpdate = keyBar.data([10, 10]);
var keyBarEnter = keyBarUpdate.enter().append("div");
keyBarEnter.style("width",function(d){return d*5+"px";});
keyBarEnter.style("align",function(d){return "center"});
keyBar = key.selectAll("div");
keyBarUpdate = keyBar.data(["allotted", "not allotted"]);

keyBarEnter.text(function(d){return d;});
keyBarEnter.style("background-color",function(d){
    if (d == "allotted"){
	return "purple";
}});
