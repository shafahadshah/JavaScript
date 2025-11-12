//  Number
let num = 123456;
console.log(num);
console.log(typeof num);  //Typeof Number

let num3 = Number(123456);
console.log(num3);
console.log(typeof num3);  //Typeof Number

let num4 = Number('123456');
console.log(num4);
console.log(typeof num4);  //Typeof Number

let num1 = 1.234567;
console.log(num1);
console.log(typeof num1); //Typeof Number

let numn = "1234567";
console.log(numn);
console.log(typeof numn); //Typeof String

//  Litral Method
let number = 123456;
console.log(number);

// Constructor Method
let num2 = new Number(123456);
console.log(num2);  
 
// Number Properties
// Max Value
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

//Min Value
console.log(Number.MIN_VALUE); // 5e-324

//Positive Infinity
console.log(Number.POSITIVE_INFINITY); //infinity

//Negitive Infinity
console.log(Number.NEGATIVE_INFINITY); //-infinity

//NaN
console.log(Number.NaN); //NaN

//isNaN
console.log(Number.isNaN); //isNaN

//Epsilon
console.log(Number.EPSILON); //2.220446049250313e-16

//Number Method
//parseInt()
let a =12.34;
console.log(Number.parseInt(a));

//parseFloat() 
console.log(Number.parseFloat(a));

//isFinite()
console.log(Number.isFinite(a)); //true
console.log(Number.isFinite(Infinity)); // false

//Number Instance Method(Used on Primitive Number)
//toFixed()
let x = 123.3655575850;
console.log(typeof x.toFixed(3)); //123.366  string

//toExponential()
console.log(x.toExponential(3)); //1.234e+2  string

//toPrecision()
console.log(x.toPrecision(3)); //123   string
console.log(x.toPrecision(4)); //123.3    string

//toString()
console.log(x.toString()); //'123.3655575850'

//valueOf()
let y = new Number('12334'); 
console.log(y);              //Number{12334}
console.log(y.valueOf());  //12334 Primitive Number








