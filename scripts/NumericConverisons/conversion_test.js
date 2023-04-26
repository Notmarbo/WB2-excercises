//decription: THis script test various numeric conversion techniques
// Author: Msrco Sanchez
"use strict"

var a = ("101.1");
var b = ("55");
var c = ("402 Stevens");
var d = ("Number 5");
console.log(a, b, c, d);

var aInt = parseInt(a);
var bInt = parseInt(b);
var cInt = parseInt(c);
var dInt = parseInt(d);
console.log(aInt, bInt, cInt, dInt);

var aFloat = parseFloat(a);
var bFloat = parseFloat(b);
var cFloat = parseFloat(c);
var dFloat = parseFloat(d);
console.log(aFloat, bFloat, cFloat, dFloat);

var aNum = Number(a);
var bNum = Number(b);
var cNum = Number(c);
var dNum = Number(d);
console.log(aNum, bNum, cNum, dNum);

var aUninary = +(a);
var bUninary = +(b);
var cUninary = +(c);
var dUninary = +(d);
console.log(aUninary, bUninary, cUninary,dUninary);
