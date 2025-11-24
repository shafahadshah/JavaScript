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

//Practice Qestions
// 1. PURE FUNCTION + WHY USEFUL IN UI RENDERING
// ------------------------------------------------
/*
A pure function:
 - Depends ONLY on its inputs.
 - Produces NO side effects.
 - Always returns the same output for the same input.

Useful in UI:
 - Predictable rendering.
 - Easier to test.
 - No hidden mutations.
*/
function pureRender(user) {
  return `<h1>Hello, ${user.name}</h1>`;
}



// 2. USING .map() TO TRANSFORM PRODUCTS → HTML
// ------------------------------------------------
const products = [
  { id: 1, name: "Book", price: 10 },
  { id: 2, name: "Pen", price: 2 }
];

const productHTML = products.map(p =>
  `<div class="product">
     <h2>${p.name}</h2>
     <p>$${p.price}</p>
   </div>`
);

console.log(productHTML);



// 3. USING .reduce() TO CALCULATE TOTAL PRICE
// ------------------------------------------------
const cart = [
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 49 }
];

const total = cart.reduce((sum, item) => sum + item.price, 0);
console.log(total);



// 4. IMMUTABILITY + UPDATE OBJECT IN ARRAY
// ------------------------------------------------
const users = [
  { id: 1, name: "Sam" },
  { id: 2, name: "Alex" }
];

const updatedUsers = users.map(u =>
  u.id === 2 ? { ...u, name: "Alexander" } : u
);

console.log(updatedUsers);



// 5. FUNCTION COMPOSITION (sanitize → trim → capitalize)
// ------------------------------------------------

// helpers
const sanitize = str => str.replace(/[<>]/g, "");
const trim1 = str => str.trim();
const capitalize1 = str => str.charAt(0).toUpperCase() + str.slice(1);

// compose
const compose1 = (...fns) => x => fns.reduce((v, fn) => fn(v), x);

const processInput = compose(sanitize, trim, capitalize);

console.log(processInput("   <john>   ")); // "John"



// 6. DIFFERENCE BETWEEN forEach AND map
// ------------------------------------------------
/*
forEach:
 - Used for side effects (logging, updating external state).
 - Returns undefined.

map:
 - Used to TRANSFORM data.
 - Returns a NEW ARRAY.
 
Wrong to use map:
 - When you are NOT using its returned array (i.e., using it only for side effects).
*/

[1, 2, 3].forEach(n => console.log(n)); // OK
[1, 2, 3].map(n => console.log(n));     // WRONG use of map



// 7. IMPLEMENT YOUR OWN .map()
// ------------------------------------------------
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (Object.hasOwn(this, i)) {
      result.push(callback(this[i], i, this));
    }
  }
  return result;
};

console.log([1, 2, 3].myMap(n => n * 2));
