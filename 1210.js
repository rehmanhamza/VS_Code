"use strict";

// 1210
// Immediatley Invoked Function Expression (IIFE)

let num = (function() {
    let a = 3;
    console.log(a);
}) ();

// Constructor Function
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isNew = () => (year > 2000); // return is implicit here in this function
}

let mycar = new Car('Eagle', 'Talson TSi', 1993);
console.log(mycar.isNew()); // should return false because year is less than 2000


// Asynchronous Programming in JS

// Callbacks
// A callback function is a function that is being passed into another
// function as an argument, which is then invoked inside the other function
// to complete some kind of routine or action.

function logQuote(quote){
    console.log(quote);
}

function createQuote(quote, callback){
    const myQuote = `Like I always say, '${quote}'`;
    callback(myQuote);
}

createQuote("WebApp I rocks", logQuote);

// Synchronous Callbacks
let a = [3, 4, 88, 12, 9, 17];
a.sort((x,y) => (x-y)); // it usese each element as a string and sorts it, so add a ftn
console.log(a);

// more like a for loop
a.forEach((value, index) => {console.log(value + " at position " + index)});
