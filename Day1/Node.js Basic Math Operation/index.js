// index.js
const sum = require("./addition");
const multiply = require("./multiplication");
const sub = require("./subtraction"); // Corrected this line
const div = require("./division");

let sumA = 3;
let sumB = 5;
let sumResult = sum(sumA, sumB);
console.log(sumResult);

let mulA = 4;
let mulB = 6;
let mulResult = multiply(mulA, mulB);
console.log(mulResult);

let subA = 2;
let subB = 20;
let subResult = sub(subA, subB);
console.log(subResult);

let divA = 3;
let divB = 33;
let divResult = div(divA, divB);
console.log(divResult);
