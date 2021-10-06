"use strict";

/*let a=2;

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


// 0610
// swaping arrays elements
// destructing assignmenet

let number = [1,2,3,4];
let first = number[0];
let [first2, last] = [number[0], number[number.length-1]];
//console.log("number[0] = ", first2, "\nnumber[last] = ", last)

// spread operator
let [x, ...y] = [1,2,3,4]; // y = [2,3,4]
let a = ['greed', 'lust'];
let b = ['you', ...a];
console.log(b)

// strings in JS are immutable
// Methods --> repeat() = returns a string consisting of the elements of the object
// repeated the given times

// template literals
let name = "Bill";
let greeting = `Hello ${name}.`; // useful for long strings
console.log(greeting)

// objects are dynamic in JS. objects maye exist without classes.
// an object is unordered collection of properties, each property has a name(key) and a value.
let point = {x: 2, 
    y: 5
};

let book = {author: "David", 
    title: "Learning JS", 
    for: "students", 
    pages: 520,
    "chapter pages": [90, 50, 60, 140]
};
// accessing properties
// both works
let person = book.author;
let person1 = book["author"];

// checking before accessing, also undefined is a reserved keyword in JS
let surname = undefined;
if(book){
    if(book.author){
        surname = book.author.surname;
        console.log(surname)
    }
}

// iterating over properties
// const --> because in the same iteration prop doesn't change
for (const prop in book){
    console.log(`${prop} = ${book[prop]}`);
}
let k = Object.keys(book);
console.log(k)

// copying objects or modifying objects
// both are same
let book2 = book;
let book3 = Object.assign({}, book); // assign(target, source)
Object.assign(book, {price: 30});
console.log(book.price)

// spread operator in objects
let newpoint = {...point, z: 12}
console.log(newpoint)

// checking if property exists
console.log('author' in book) // should return true
*/

// Functions

// classic
function sqrt(x){
    let y = x * x;
    return y; 
}

let y = sqrt(4);
console.log(y);

/*
// Function expression
const fn = function(params){

}

// Named function expression
const fn = function do(params){

}
*/

