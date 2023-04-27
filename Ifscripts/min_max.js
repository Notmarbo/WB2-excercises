"use strict"

let a = 102;
let b = 108;
let c = 30;

let min;
let max;

if (a > b && a > c) {
    max = a;
    if (b > c) {
        min = c;
    } else {
        min = b;
    }
}
else if (b > a && b > c) {
    max = b;
    if (a > c) {
        min = c;
    } else {
        min = a;
    }
}else {
    max = c;
    if (a > b)
        min = b;
    else {
        min = a;
    }
}




console.log(min);
console.log(max);