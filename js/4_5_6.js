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

// 6-3 template literal

var old_str = '<ul>\n\t<li>일반 문자열<li>\n</ul>';

console.log(old_str);

var template_literal = `<ul>
	<li>템플릿 리터럴</li>
</ul>`;

console.log(template_literal);

var name = '홍길동';
var age = '18';

console.log(`반갑습니다! ${name}님의 ${age}번째 생일을 축하합니다!`);	// 반갑습니다! 홍길동님의 18번째 생일을 축하합니다!

console.log(`3 + 16 = ${3 + 16}`);	// 3 + 6 = 19

// 6-7 Symbol
var key = Symbol('key');
console.log(typeof key);

var obj = {};

obj[key] = 'Kimin';
console.log(obj[key]);