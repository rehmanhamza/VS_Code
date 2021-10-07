"use strict";

let scores = [28, 30, 24, 20, 27, 23, 18, 21, 27, 27, 27, 22, 24, 23, 23, 20, 28, 20, 29, 29];

let score_imp = Array.from(scores);
score_imp = score_imp.sort().reverse();
let l = score_imp.length;
score_imp.length = l - 2;

const average = array => array.reduce( ( a, b ) => a + b, 0 ) / array.length;    
const result_imp = average(score_imp);
const result_original = average(scores);

score_imp = [...score_imp, Math.round(result_imp), Math.round(result_imp)];

console.log("Original average = ", result_original);
console.log("Improved average = ", result_imp);



let courses = "Chemistry, Physics 1, Physics 2, Automatic Control, Applied Electronics, \
Mathematical Methods, Open and Virtualized Networks, Computer Architecture";

let array_courses = courses.split(",");
console.log(array_courses);