"use strict"

let studentName = "Marco ";
let studentMajor = "asas";
let major;
let advisingLocation;

if(studentMajor == "CSCI"){
   major = "Computer Science ";
   advisingLocation = "Sheppard Hall, Room 314.";
   console.log(studentName + major + advisingLocation);
}
else if(studentMajor == "BIOL"){
    major = "Biology ";
    advisingLocation = "Science Bldg, Room 310";
    console.log(studentName + major + advisingLocation);
 }
else if(studentMajor == "ENG"){
    major = "English ";
    advisingLocation = "Kerr Hall, Room 201";
    console.log(studentName + major + advisingLocation);
 }
else if(studentMajor == "HIST"){
    major = "History ";
    advisingLocation = "Kerr Hall, Room 114";
    console.log(studentName + major + advisingLocation);
 }
else if(studentMajor == "MKT"){
    major = "Marketing ";
    advisingLocation = "Westly Hall, Room 310";
    console.log(studentName + major + advisingLocation);
 }
else{
    major = "Unkown "
    advisingLocation ="Unkown"
    console.log(studentName + major + advisingLocation);
}

