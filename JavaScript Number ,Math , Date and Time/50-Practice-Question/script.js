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
