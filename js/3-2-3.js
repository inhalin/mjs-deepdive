const $counter = document.querySelector('#counterrrr');  //  id 이름을 잘못써서 에러 발생
const $increase = document.querySelector('#increase');
const $decrease = document.querySelector('#decrease');

let num = 0;
const render = function() { $counter.innerHTML = num }; // 이곳에서 -> Uncaught TypeError: Cannot set property 'innerHTML' of null

$increase.addEventListener('click', function(){
  num++;
  console.log(`increase button click, num=${num}`);
  render();
});

$decrease.addEventListener('click', function(){
  num--;
  console.log(`decrease button click, num=${num}`);
  render();
});