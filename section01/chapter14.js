console.log("chapter 14");

// 스코프란?
// 변수나 함수에 접근하거나 호출할 수 있는 범위를 말함

// -> 전역(전체영역) 스코프 / 지역 스코프
// 전역 스코프 : 전체 영역에서 접근 가능
// 지역스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a); // 1 출력

  function funcB() {
    // 함수인에 함수 : 지역스코프
  }
}

funcA();
console.log(b); // b is not defined 에러 발생
funcB(); // funcB is not defined

if (true) {
  let c = 3; // 지역 스코프
  function funcC() {
    // 조건문안에서 함수는 지역스코프를 갖지 않음 (즉 안에서 정의하고 밖에서 사용 가능)
  }
}
console.log(c); // c is not defined 에러 발생

for (let i = 0; i < 10; i++) {
  let d = 4; // 지역 스코프
  function funcD() {
    // 반복문도 마찬가지로 함수는 지역스코프를 갖지 않음 (즉 안에서 정의하고 밖에서 사용 가능)
  }
}

console.log(d); // d is not defined 에러 발생
