// problem 1 ..... Counter 
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

