// ch  12

function add(x, y){
  return x + y;
}

console.log(add(1, 2)); // 3

const add1 = function foo(x, y){
  return x + y;
}

console.log(add1(1, 2)); // 3
console.log(foo(1, 2));

// 12.3 function literal

const checkFresh = function leftover(food){
  let freshness = false;
  if(food.buy < 3) freshness = true;
  return freshness;
}

// 12.4.3 function hoisting

console.log(add2(1, 2));	// 3
console.log(sub(1, 2));	// TypeError: sub is not a function

// 함수 선언문 -> 함수 호이스팅 발생
function add2(x, y){
  return x + y;
}

// 함수 표현식 -> 변수 호이스팅 발생
var sub = function(x, y){
  return x - y;
}