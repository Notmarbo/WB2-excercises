"use script"

let payRate = 17.30;
let hoursWorked = 45;
const check = payRate * hoursWorked;

if(hoursWorked>=41){
    const overTime = (hoursWorked - 40) * (payRate * 1.5);
    const overTimeCheck = (40 * payRate) + overTime;
    console.log(overTimeCheck);
}
if(hoursWorked == 40){
    console.log(check);
}
if(hoursWorked<=39){
    console.log(check);
}