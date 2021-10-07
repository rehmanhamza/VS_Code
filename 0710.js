// 0710
// parameter is like a local copy

function append1(a){
    a = [...a, 1];
    return a;
}

let c = [2, 3, 5];
c = append1(c);
//console.log(c)

// arrow function, same as classic style function
const append2 = (a) => {
    a = [...a, 1];
    return a;
}

d = [4, 5, 6];
d = append2(d);
//console.log(d)

// nested function
function hypotenuse(a, b){
    const square = x => x*x;
    return Math.sqrt(square(a) + square(b));
}

console.log(hypotenuse(2, 3));

function count(){
    let c = 0;

    const increment = () => {c = c + 1; return c};
    
    return increment;
}

let counter = count();
console.log(counter());
console.log(counter());
console.log(counter());

// an array of function
function make_counter(){
    let n = 0;

    return {
        count: function(){
            return n++;
        },
        reset: function(){
            n = 0;
        }
    }
}
