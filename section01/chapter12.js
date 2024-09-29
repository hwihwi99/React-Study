console.log("chapter 12");

// 1. 함수 표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA;
varA();

let varB = function funcB() {
  console.log("funcB");
};

//2. 화살표 함수
let varC = () => {
  return 1;
};

let varD = () => 1;
let varE = (val) => val + 1;
