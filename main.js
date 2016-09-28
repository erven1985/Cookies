
var total1 = Cookies.get("lemon");

if(total1 == null) {

    total1 = 0;
}

var total2 = Cookies.get("sugar");

if(total2 == null) {

    total2 = 0;
}

var total3 = Cookies.get("chocolate");

if(total3 == null) {

    total3 = 0;
}

$(document).ready(function(){


$("#lemon").click(function(){
	total1 = parseInt(total1, 10) + 1;
	$("#first").html(total1);
	Cookies.set("lemon", total1);
	
});

$("#sugar").click(function() {
    total2 = parseInt(total2, 10) + 1;
    $("#second").html(total2);
    Cookies.set("sugar" , total2);

});

$("#chocolate").click(function(){
	total3 = parseInt(total3, 10) + 1;
	$("#third").html(total3);
	Cookies.set("chocolate", total3);
	
});

switch1();

});

//Animation

var switch1 = function(){

$("#three").animate({opacity:0},4000, "swing", switch2);

}

var switch2 = function(){

$("#two").animate({opacity:0},4000, "swing", switch3);

}
var switch3 = function(){

$("#two").animate({opacity:1},4000, "swing", switch4);

}
var switch4 = function(){

$("#three").animate({opacity:1},4000, "swing", switch1);

}

