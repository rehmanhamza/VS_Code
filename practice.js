"use strict"

let count = 0;
for(let i=2500; i<3500; i++){
    if(i%2 == 0 && i%5 == 0){
        count++;
        //console.log(count + "-> " + i);
    }
}

const reverse = (s) => s.split(' ').map(v => v.split('').reverse().join('')).join(' ');

console.log(reverse("Let's take LeetCode contest"));

const array = [1,-1];
const sum = array.reduce((a, b) => a+b, 0);
console.log(sum)