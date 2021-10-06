"use strict";

let a=2;

// === -> strict -> equal same value and same type
// == -> equal -> same value but type does not matter

if({}){
    console.log("Hello");
}else{
    console.log("else here");
}

let v = [1, 2];
console.log(v);
let arr = v; // copy by reference
console.log(arr);
let b = Array.from(arr);  // not copy by reference, shallow copy
b[1] = 3;
console.log("b = ", b);
console.log("arr = ", arr);
console.log("v = ", v);
console.log(v.join(';'));  // convert an array into a string with a delimiter ';' or anything
// commenting for seeing changes taking place at repo (macOS)
// used git pull and obtained the desired changes
// Now pushing from Windows 10 and trying git pull from macOS
// Works 100%