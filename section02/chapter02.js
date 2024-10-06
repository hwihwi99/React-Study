console.log("chapter 02");

// 딘락 평가
// false && true => 앞에가 false면 뒤에 검사 안하고 바로 false출력해주는 원리
function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue());

// 딘릭 평가 활용 사례
function printName(person) {
  // console.log(person && person.name);
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
