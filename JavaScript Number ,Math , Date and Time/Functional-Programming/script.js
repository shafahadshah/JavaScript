// Functional Programming Example Collection



//  1. Pure Functions

function add(a, b) {
  return a + b; // No side effects
}


//  * 2. Immutability

const user = { name: "Fahad", age: 22 };
const updatedUser = { ...user, age: 23 }; // Does not mutate original

//  * 3. Higher-Order Functions (HOF)

function multiplyBy(factor) {
  return function (num) {
    return num * factor;
  };
}
const double = multiplyBy(2);


//  * 4. Function Composition

const compose = (f, g) => (x) => f(g(x));

const trim = (str) => str.trim();
const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

const cleanAndCap = compose(capitalize, trim);

               
//   5. Map / Filter / Reduce

const nums = [1, 2, 3, 4, 5];
const squared = nums.map((n) => n * n);
const evens = nums.filter((n) => n % 2 === 0);
const sum = nums.reduce((acc, curr) => acc + curr, 0);


//  * 6. Currying

function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
const curriedResult = curryAdd(1)(2)(3);

//  * 7. Recursion

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}


//  * 8. Avoiding Mutations With Arrays

const arr = [1, 2, 3];
const newArr = [...arr, 4];
const removed = arr.filter((x) => x !== 2);


//  * 9. Declarative vs Imperative

// Imperative
let impSum = 0;
for (let i = 0; i < nums.length; i++) {
  impSum += nums[i];
}

// Declarative (FP)
let decSum = nums.reduce((a, b) => a + b);


//  * 10. Avoid Side Effects

let counter = 0;
function badIncrement() {
  counter++; // side effect
}

function goodIncrement(x) {
  return x + 1; // pure
}


//  * 11. Partial Application

function partial(fn, ...fixed) {
  return function (...later) {
    return fn(...fixed, ...later);
  };
}

function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}
const sayHello = partial(greet, "Hello");

//  * 12. Lazy Evaluation (using closures)

function lazyAdd(a, b) {
  return () => a + b;
}
const calcLater = lazyAdd(5, 10);
                   
//  * 13. Pipeline Function

const pipe = (...fns) => (value) => fns.reduce((v, fn) => fn(v), value);

const toLower = (s) => s.toLowerCase();
const removeSpaces = (s) => s.replace(/\s+/g, "");

const format = pipe(trim, toLower, removeSpaces);

//  * 14. Custom Map Implementation

Array.prototype.myMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};


//  * 15. Memoization

function memoize(fn) {
  const cache = {};
  return function (x) {
    if (cache[x]) return cache[x];
    cache[x] = fn(x);
    return cache[x];
  };
}

const slowSquare = (n) => {
  for (let i = 0; i < 1e7; i++); // simulate heavy work
  return n * n;
};
const fastSquare = memoize(slowSquare);

//  * Export for Node.js

module.exports = {
  add,
  updatedUser,
  multiplyBy,
  compose,
  squared,
  evens,
  sum,
  curryAdd,
  factorial,
  newArr,
  removed,
  decSum,
  goodIncrement,
  partial,
  lazyAdd,
  pipe,
  format,
  memoize,
  fastSquare,
};
