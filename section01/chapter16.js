console.log("chapter 16");

// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// animal = {a:1} // animal 자체를 건들이는 이런건 안돼

// 근데 저장되어 있는 객체값을 변경하는건 불가능하다
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// 2. method 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {
  name: "이휘정",
  // 메서드 선언
  sayHi: function () {
    console.log("안녕!");
  },
  sayBye() {
    // 이런 형태로도 사용가능
    console.log("Bye");
  },
};

person.sayHi();
person["sayBye"]();
