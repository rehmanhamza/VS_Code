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

// 1210

function Exam(code, name, cfu, score, honors, datePassed){
    this.code = code;
    this.name = name;
    this.cfu = cfu;
    this.score = score;
    this.honors = honors;
    this.datePassed = datePassed;
}

function ExamList(){
    this.exams = [];  // if 'this.' is removed it is like creating a local var in ftn
    
    this.add = (exam) => {
        this.exams.push(exam);
    }

    this.find = (courseCode) => {
         // filter always return an array
        const result = this.exams.filter(ex => ex.code === courseCode);
        if(result.length == 1){
            return result[0];
        }else{
            return undefined;
        }
    }
}
const wa1 = new Exam('01FXY', 'Web Application I', 6, 28, false, '2021-02-10');
const db = new Exam('01ANC', 'Data Science', 8, 25, false, '2021-02-11');

console.log(wa1);
console.log(db);

const myExams = new ExamList(); // object is constant, the reference is not
myExams.add(wa1);
myExams.add(db);

debugger;