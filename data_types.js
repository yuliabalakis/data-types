/* 1. Perform addition of various types (string + boolean, string + number, number + boolean) */
let a = "5";
let b = true;
let sum = +a + +b;
console.log(sum);

let c = "4";
let f = 5;
let sum1 = +c + +f;
console.log(sum1);

let d = 3;
let e = false;
let sum2 = +d + +e
console.log(sum2);

/* 2. Perform multiplication of various types (string * boolean, string * number, number * boolean) */
let aa = "5";
let bb = true;
let multiplication = aa * bb;
console.log(multiplication);

let cc = "4";
let ff = 5;
let multiplication1 = cc * ff;
console.log(multiplication1);

let dd = 3;
let ee = false;
let multiplication2 = dd * ee;
console.log(multiplication2);

/* 3. Divide different types (string / boolean, string / number, number / Boolean) */
let aaa = "5";
let bbb = true;
let division = aaa / bbb;
console.log(division);

let ccc = "10";
let fff= 5;
let division1 = ccc / fff;
console.log(division1);

let ddd = 3;
let eee = true;
let division2 = ddd / eee;
console.log(division2);

/* 4. Perform explicit conversion (number, string, boolean) */
let value = Number("hello");
console.log('hello =', typeof value);

let value1 = String(10);
console.log('10 =', typeof value1);

let value2 = Boolean(1);
console.log('1 =', typeof value2);