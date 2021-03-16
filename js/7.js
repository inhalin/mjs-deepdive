// ch 7 operator

/*
* 7-1 arithmatic op
*/

//binary
1 + 2; // 3
5 - 3; // 2
3 * 2; // 6
10 / 4; // 2.5
10 % 4; // 2
console.log((-2) ** 3);

//unary
var x = 1;

// postfix increment
res = x++;
console.log(res, x); // 1 2

// prefix increment
res = ++x;
console.log(res, x); // 3 3

// postfix decrement
res = x--;
console.log(res, x); // 3 2

// prefix decrement
res = --x;
console.log(res, x); // 1 1

// 문자 연결 연산자
console.log('2' + 3); // 23
console.log('hello' + 5); // hello5
console.log(1+true);  // 2
console.log(1+false); // 1
console.log(1+null);  // 1

/*
* 7-2 assignment op
*/

var a = 5;

console.log(a); // 5
console.log(a += 2);  // 7
console.log(a -= 4);  // 3
console.log(a *= 5);  // 15
console.log(a /= 3);  // 5
console.log(a %= 3);  // 2
console.log(a **= 3);  // 8

/*
* 7-3 comparison op
*/

console.log(5 == '5');  // true
console.log(5 === '5'); // false
console.log(5 === 5);   // true
console.log(undefined === undefined); // true
console.log(isNaN(undefined));  // true

console.log(NaN === NaN); // false
console.log(isNaN(NaN));  // true
console.log(Object.is(NaN, NaN)); // true

console.log(+0 === -0); // true
console.log(Object.is(+0, -0)); // false

/*
* 7-4 ternary op
*/

var x=5;

var result = x % 2 ? '홀수' : '짝수';
console.log(result);