//1 get arr last value
let arr = [1,2,3,4,5,6,0];
function lastDigit(obj){
console.log(obj[obj.length-1] );
}
lastDigit(arr)

//2 two arr combination
let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9]
let two = [...arr1, ...arr2]
console.log(two);

//3 generate random int 0 to 18
let num = Math.floor(Math.random()*18+1)
console.log(num);

//4 fn return only string
let newArr = [1,2,3,'d',3,'f','f','h',6,8,8,'f']
let filterArr = newArr.filter((st)=>{
 if(typeof st === 'string'){
    return true
}else{
    return false
}
})
console.log(filterArr);

//5 max in arr 
let maxArr = [1,2,3,4,5,6,7,8,9,844776]
let max = Math.max(...maxArr)
console.log(max);

//6 key in obj
let obj ={
    name :'fahad',
    age:22
}
let objFn = (obj1)=>{
    return Object.keys(obj1).length
}
let l = objFn(obj)
console.log(l);

//7 Filter male gender
let genederArr = [
    {
        name:'ahamd',
        gender:'male'
    },
    {
        name:'ahad',
        gender:'male'
    },
    {
        name:'fahad',
        gender:'male'
    },
    {
        name:'saira',
        gender:'female'
    },
    {
        name:'lubna',
        gender:'female'
    },
]
let filterGender = genederArr.filter((obj)=>{
      return obj.gender === 'male'
})
console.log(filterGender);

//8 string in arr uppercase
let strArr = ['fahad','shah','haha','bye'];
let newArr2 = strArr.map(item => item.toUpperCase());
console.log(newArr);


//9 check empty obj
let emptObj = {
}
let emp = Object.keys(emptObj).length<1
console.log(emp);

//10 double arr value 
let digiArr =[1,2,3,4,5,6,7,8,9]
let double =digiArr.map((obj)=>{
return obj*2
})
console.log(double);

//11 arr string seprated by comma
let str =[1,'hddj',53,'ej']
let result = str.join()
console.log(result);

//12 arr flat 
let flatArr = [1,2,[3,[3,[4]]]]
let r = flatArr.flat(3)
console.log(r);

//13 check number in arr
let numArr = [1,2,3,'g',4,4]
function checkNum(arr){
return arr.every(elm =>
 typeof elm === 'number')
}

let isNum = checkNum(numArr)
console.log(isNum);

//14 check prime
function checkPrime(num){
if(num === 0|| num === 1){
    return false
}
for(let i=2;i<=Math.sqrt(num);i++){
    if(num % i === 0) return false
}
return true
}
console.log(checkPrime(5));

//15 remove duplicate from arr
let dupArr =[1,2,3,4,2,1,3,1,1,2,2,1,45,68,4,]
function dup(arr){
 let set = new Set(arr)
 return [...set]
}
let re = dup(dupArr)
console.log(re);

//16 diff betwwen parseInt or Number
console.log(parseInt('123.3456px'));
console.log(Number('123.3456px'));

/***********************
17. Why does 0.1 + 0.2 !== 0.3 ?
************************/
console.log(0.1 + 0.2 !== 0.3); 
// Because JS uses binary floating-point (IEEE 754), 
// 0.1 & 0.2 cannot be represented exactly → small rounding error.


/***********************
18. Explain floating-point precision issues
************************/
// JS stores decimals in binary → some decimals can’t be stored exactly.
// Result → inaccuracies like 0.1 + 0.2 = 0.3000000004.


/***********************
19. How to handle high-precision decimal math?
************************/
console.log((0.1 * 10 + 0.2 * 10) / 10);
// OR use libraries: big.js, decimal.js, bignumber.js


/***********************
20. Difference between slice & splice
************************/
// slice(start,end) → No modify original, returns new array
// splice(start,count) → Modifies original, can remove/add
console.log([1,2,3].slice(0,2)); 
console.log([1,2,3].splice(1,1));


/***********************
21. Reverse each word of sentence
************************/
function reverseWords(str){
  return str.split(" ")
            .map(w => w.split("").reverse().join(""))
            .join(" ");
}
console.log(reverseWords("Mai hun manas")); 
// sanam nuh iaM


/***********************
22. Add only numbers (ignore strings)
************************/
let mixed = [1, "2", 3, "a", 4];
let sum = mixed.reduce((acc, v) =>
  typeof v === "number" ? acc + v : acc, 0);
console.log(sum);


/***********************
23. Check if number is integer
************************/
console.log(Number.isInteger(5));  
console.log(Number.isInteger(5.5)); 


/***********************
24. Reverse a number
************************/
function reverseNum(n){
  return Number(String(n).split("").reverse().join(""));
}
console.log(reverseNum(12345));


/***********************
25. String → alphabetical order
************************/
function alphaSort(str){
  return str.split("").sort().join("");
}
console.log(alphaSort("zebra"));


/***********************
26. Capitalize first letter of each word
************************/
function capitalizeWords(str){
  return str.split(" ")
            .map(w => w[0].toUpperCase() + w.slice(1))
            .join(" ");
}
console.log(capitalizeWords("hello world from js"));


/***********************
27. First element or first 'n' elements
************************/
function first(arr, n = 1){
  return arr.slice(0, n);
}
console.log(first([1,2,3,4], 2));


/***********************
28. Count occurrences of each letter
************************/
function countLetters(str){
  let obj = {};
  for(let ch of str){
    obj[ch] = (obj[ch] || 0) + 1;
  }
  return obj;
}
console.log(countLetters("banana"));


/***********************
29. Most frequent item in array
************************/
function mostFreq(arr){
  let map = {};
  let maxCount = 0, maxItem = null;

  for(let v of arr){
    map[v] = (map[v] || 0) + 1;
    if(map[v] > maxCount){
      maxCount = map[v];
      maxItem = v;
    }
  }
  return maxItem;
}
console.log(mostFreq([1,1,2,3,3,3,4]));


/***********************
30. Shuffle an array (Fisher-Yates)
************************/
function shuffle(arr){
  for(let i = arr.length - 1; i > 0; i--){
    let r = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[r]] = [arr[r], arr[i]];
  }
  return arr;
}
console.log(shuffle([1,2,3,4,5]));


/***********************
31. Live update DOM from user input
************************/
// input.addEventListener("input", (e)=> output.innerText = e.target.value);


/***********************
32. Real-time form validation
************************/
// input.addEventListener("input", ()=>{
//   if(input.value.length < 3) error.textContent = "Too short";
//   else error.textContent = "";
// });


/***********************
33. Closest ancestor that matches selector
************************/
// element.closest(".className")


/***********************
34. Toggle class on click
************************/
// btn.addEventListener("click", ()=> sidebar.classList.toggle("show"));


/***********************
35. Show/Hide password toggle
************************/
// btn.onclick = () => pwd.type = pwd.type === "password" ? "text" : "password";


/***********************
36. Sticky header on scroll
************************/
// window.addEventListener("scroll", ()=>{
//   if(window.scrollY > 50) header.classList.add("sticky");
//   else header.classList.remove("sticky");
// });


/***********************
37. Pure function
************************/
// A function with no side effects & same output for same input.
// Useful in UI rendering → predictable, testable.

/***********************
38. Use map to convert product list → HTML
************************/
let products = ["phone","laptop"];
let htmlList = products.map(p => `<li>${p}</li>`);
console.log(htmlList);


/***********************
39. Use reduce to calculate cart total
************************/
let cart = [{p:100}, {p:200}, {p:50}];
let total = cart.reduce((a,item)=> a + item.p, 0);
console.log(total);


/***********************
40. Immutability: update object without mutation
************************/
let users = [{id:1, name:"Ali"}];
let updated = users.map(u =>
  u.id === 1 ? {...u, name:"Fahad"} : u
);
console.log(updated);


/***********************
41. Function composition (trim → sanitize → capitalize)
************************/
const trim = str => str.trim();
const sanitize = str => str.replace(/[^a-z ]/gi, "");
const capitalize = str => str[0].toUpperCase() + str.slice(1);

function pipe(...fns){
  return input => fns.reduce((v, fn)=> fn(v), input);
}

let clean = pipe(trim, sanitize, capitalize);
console.log(clean("   hello!!  "));


/***********************
42. Difference between forEach vs map
************************/
// forEach → no return array, only side effects
// map → returns new array, used for transforming
// Wrong: using map when you just want to console.log


/***********************
43. Implement custom map
************************/
Array.prototype.myMap = function(cb){
  let out = [];
  for(let i=0; i<this.length; i++){
    out.push(cb(this[i], i, this));
  }
  return out;
};
console.log([1,2,3].myMap(x=>x*2));


/***********************
45. Validate date range ≤ 30 days
************************/
function isValidRange(start, end){
  let diff = new Date(end) - new Date(start);
  return diff <= 30 * 24 * 60 * 60 * 1000;
}
console.log(isValidRange("2025-01-01","2025-01-20"));


/***********************
46. Full diff between two dates
************************/
function fullDiff(d1, d2){
  let diff = Math.abs(new Date(d2) - new Date(d1));

  let years = Math.floor(diff / (365.25*24*60*60*1000));
  diff %= 365.25*24*60*60*1000;

  let months = Math.floor(diff / (30*24*60*60*1000));
  diff %= 30*24*60*60*1000;

  let days = Math.floor(diff / (24*60*60*1000));
  diff %= 24*60*60*1000;

  let hours = Math.floor(diff / (60*60*1000));
  diff %= 60*60*1000;

  let minutes = Math.floor(diff / (60*1000));
  diff %= 60*1000;

  let seconds = Math.floor(diff / 1000);

  return {years, months, days, hours, minutes, seconds};
}
console.log(fullDiff("2020-01-01","2025-05-08"));


/***********************
47. Add or subtract n days
************************/
function addDays(dateStr, n){
  let d = new Date(dateStr);
  d.setDate(d.getDate() + n);
  return d;
}
console.log(addDays("2025-05-01", 7));


/***********************
48. Calculate age
************************/
function getAge(dob){
  let diff = Date.now() - new Date(dob).getTime();
  return Math.floor(diff / (365.25*24*60*60*1000));
}
console.log(getAge("2000-01-01"));


/***********************
49. formatDate utility
************************/
function formatDate(d){
  return new Date(d).toLocaleDateString("en-US", {
    month:"short",
    day:"numeric",
    year:"numeric"
  });
}
console.log(formatDate("2025-01-01"));
// Centralize format → same look everywhere in app.


/***********************
50. toLocaleString options
************************/
// date.toLocaleDateString("en-US", {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric"
// });

// date.toLocaleTimeString("en-US", {
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit"
// });

// date.toLocaleString("en-US", {
//   dateStyle: "long",
//   timeStyle: "short"
// });
