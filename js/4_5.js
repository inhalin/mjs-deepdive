// Ch 4

console.log(salary);    // undefined

salary = 200;
var salary;

console.log(salary);       // 200

let invest = -3.59;
/*
let invest; // 변수 선언
invest = -3.59; // 값의 할당
*/

invest = 0.55;  // 값의 재할당

// Ch 5

// 5-4
var sum = 1 + 2;
// var, sum, =, 1, +, 2, ; 은 각각 토큰이고
// [ var sum = 1 + 2; ] 전체는 문이다.

// Ch 6

// 6-1
var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;

console.log(binary);    // 65
console.log(octal);     // 65
console.log(hex);       // 65

console.log(1 / 0);     // Infinity
console.log(-1 / 0);    // -Infinity
console.log(5 * 'hello'); // NaN
