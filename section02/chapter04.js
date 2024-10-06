console.log("chapter 04");

// Spread 연산자와 Rest 매개변수

// 1. Spread 연산자
// -> Spreaed : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개 변수
// -> Rest는 나머지, 나머지 매개변수
// rest 매개변수는 앞에 저장한 후에 남은 거 저장하는 것이므로 ...rest뒤에는 다른 매개변수가 올 수 없음
function funcB(one, ...rest) {
  console.log(rest);
}
funcB(...arr1);
