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

// problem 3 ..... filter array
var filter = function(arr, fn) {
    let filteredArr = [];
    arr.forEach((item,i) => {
       if(fn(item,i)){
        filteredArr.push(item)
       }
    })
    return filteredArr;
};
console.log(filter([1,2,3,4,5,6,7,8],function(n){return n > 5}))
console.log(filter([1,2,3,4,5,6,7,8],function(n){return n %2 === 0}))
console.log(filter([-2,-1,0,1,2],function(n){return n + 1}),"////////")


// problem 4 ..........Reduce Array
let reduce = function(nums, fn, init) {
  let result = init;
  nums.forEach((item) => {
   result = fn(result,item);
  })
  return result;  
};
console.log(reduce([1,2,3,4],function(i,a){return i += a},4));