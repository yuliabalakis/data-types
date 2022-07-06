/* 1. Perform addition of various types (string + boolean, string + number, number + boolean) */
let x = "5";
let y = true;
let sum = x + y;
console.log(sum);

let x = "4";
let y = 5;
let sum = x + y;
console.log(sum);

let x = 3;
let y = false;
let sum = x + y;
console.log(sum);

/* 2. Perform multiplication of various types (string * boolean, string * number, number * boolean) */
let x = "5";
let y = true;
let multiplication = x * y;
console.log(multiplication);

let x = "4";
let y = 5;
let multiplication = x * y;
console.log(multiplication);

let x = 3;
let y = false;
let multiplication = x * y;
console.log(multiplication);

/* 3. Divide different types (string / boolean, string / number, number / Boolean) */
let x = "5";
let y = true;
let division = x / y;
console.log(division);

let x = "10";
let y= 5;
let division = x / y;
console.log(division);

let x = 3;
let y = true;
let division = x / y;
console.log(division);

/* 4. Perform explicit conversion (number, string, boolean) */
let value = Number("hello");
console.log('hello =', typeof value);

let value1 = String(10);
console.log('10 =', typeof value1);

let value2 = Boolean(1);
console.log('1 =', typeof value2);
