console.log("chapter 15");

// 객체란?
// 객체를 이용하면 현실세계에 존재하는 어떤 사물이나 개념을 표현하기 용이함

//1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  // key : value
  name: "이휘정",
  age: 26,
  hobby: "스쿼시",
};

// 3. 객체 프로퍼티 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name);

let age = person["age"]; // 대괄호안에 키값은 ""로 묶어줘야한다. 아니면 문자열로 취급함

let peoperty = "hobby";
let hobby = person[peoperty];

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

// 3.3 프로퍼티를 수정하는 방법
person.job = " be dveloper";
person["favoriteFood"] = "마라탕";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; // name이란 key값이 객체안에 있니?
let result2 = "cat" in person; // cat이란 key값이 객체안에 잇니?
