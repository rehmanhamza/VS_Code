"use strict";

// Asynchronicity
// JS is signle-threaded and inherently synchronous
// setTimeout()
// setInterval()

// first parameter of callback function is for storing any error,
// while the second one is for the result of the operation

// importing content of sqlite3 package and storing it's refernce in sqlite
const sqlite = require('sqlite3');

const db = new sqlite.Database('numbers.sqlite', (err) => {
    if(err) throw err;
});

db.all('SELECT * FROM number', (err, rows) => {
    if(err){
        throw err;
    }else{
        for(let row of rows){
            console.log(row.num);
        }
    }
});

console.log("Done");
db.close();