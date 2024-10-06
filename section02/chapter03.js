console.log("chapter 03");

// 구조 분해 할당
// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
// four에는 arr[3]이 없으니까 undefined 출력, default로 위처럼 구현도 가능

// 2. 객체의 구조 분해 할당
let person = {
  name: "이휘정",
  age: 26,
  hobby: "스쿼시",
};

let { name, age, hobby, extra = "hello" } = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
