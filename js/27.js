const sparse = [ , 2, , 4];

console.log(sparse.length);
console.log(sparse);
console.log(Object.getOwnPropertyDescriptors(sparse));

const arr = [1, 2, 3];

// 배열 요소 추가/삭제시 length 프로퍼티값은 자동 갱신
console.log(arr.length);	// 3
// 맨 뒤에 요소 추가
arr.push(4);
console.log(arr.length);	// 4
// 마지막 요소 삭제
arr.pop();
console.log(arr.length);	// 3

// 현재 legnth 프로퍼티 값보다 작은값 할당하면 배열 길이가 줄어든다.
arr.length = 2;
console.log(arr);	// [1, 2]
// 큰 값 할당하면 배열 길이 늘어나지 않는다.
arr.length = 3;
console.log(arr.length);
console.log(arr);
console.log(Object.getOwnPropertyDescriptors(arr));