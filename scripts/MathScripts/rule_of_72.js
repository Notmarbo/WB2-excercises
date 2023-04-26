"use strict";
 var startingbalance = 5000;
 var constant = 72;
 var intrestRate = 4;
 var yearsToDouble = constant / intrestRate;
 var endingBalance = startingbalance * 2;

 console.log("At a " + intrestRate + " percent interest rate, your savings account will be worth " + endingBalance + " in " + yearsToDouble + " years.")