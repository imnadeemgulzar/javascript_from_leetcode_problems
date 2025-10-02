// problem 1 ..... Counter with closure
let createCounter = function (init) {
    let currentValue = init;
    let increment = function () {
        currentValue += 1;
        return currentValue;
    }
    let decrement = function () {
        currentValue -= 1;
        return currentValue
    }
    let reset = function () {
        currentValue = init;
        return currentValue
    }
    return {increment:increment, decrement:decrement, reset:reset}
};
const counter = createCounter(5)
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.reset())

// problem 2 ..... array transformation
var map = function(arr, fn) {
    let newArr = [];
    arr.forEach((e,i) => {
        newArr.push(fn(e,i));
    })
    return newArr;
};
console.log(map([2,4,6],function(n,i){return n+ i}))
console.log(map([2,4,6],function(n,i){return n+ 2}))