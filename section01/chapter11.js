console.log("chapter 11");

//함수선언
function greeting() {
  console.log("안녕하세요");
}

console.log("호출 전");
greeting();
console.log("호출 후");

function getArea(width, height) {
  function anotherFunction() {
    // 중첩함수
    // 함수안에 또 다른 함수 선언도 가능
    console.log("나는 함수안의 함수");
  }
  anotherFunction();
  return width * height;
}
getArea(10, 40);

// javascript는 앞에서 함수 호출하고 뒤에 선언해두어도 에러없이 진행
// 이유 : 호스팅 -> 끌어올리다 라는 뜻으로 뒤에 선언되어 있어도 내부에서 호이스팅되어서 에러가 발생없다
