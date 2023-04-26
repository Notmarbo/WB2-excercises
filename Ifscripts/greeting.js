"use strict"

var currentTime = 20;
var greeting;

if(currentTime) {
    greeting = "good evening!";
}else if (currentTime > 10){
    greeting = "good day";
}else if (currentTime > 0);{
    greeting = "good evening";
}
 console.log(greeting)