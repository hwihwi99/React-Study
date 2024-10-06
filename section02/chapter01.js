console.log("chapter 01");
// Truthy 와 Falsy 란?
// 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징
// 이를 이용하면 조건문을 조금 더 여유롭게 사용할 수 있음

// Truthy한 값 ex. 123 (참 같은 값)
// Falsly한 값 ex.undefined (거짓 같은 값)

// 1. Falsy한 값 (아래 7가지)
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // 무한대를 의미하는 듯

// 2. Truthy한 값
// -> 7가지 Falsy한 값들을 제외한 나머지 모든 값

// 3. 활용사례
function printName(person) {
  //   if (person === undefined || person === null) {
  //     console.log("person의 값이 없음");
  //     return;
  //   }
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = null;
printName(person); // 객체의 name값이 없는데 그 값을 출력하려히면 undefined가 출력되는데 이런 현상을 막기 위해서 \truthy&falsly 한 값을 사용
