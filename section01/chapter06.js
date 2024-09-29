console.log("chapter 06");

// 현변환

// 1. 묵시적 형 변환 (암묵적 형변환)
// => 개발자가 직접 설정하지 않아도 알아서 js 엔진이 형 변환을 함

let num = 10;
let str = "20";

const result = num + str;
console.log(result); // 1020으로 출력 숫자 + 문자를 더하면 숫자를 자동으로 문자열로 바꿈

// 2. 명시적 형 변환
// => 개발자가 직접 함수 등을 이용해 형 변환을 일으킴
let str1 = "10";
let str1ToNum = Number(str1);

let str2 = "10개";
let str2ToNum = parseInt(str2);
console.log(str2ToNum); // 10 출력
// parseInt는 문자->숫자로 변환할 때 문자랑 숫자가 섞여 잇으면 숫자만 숫자로 변환해서 보여준다.

let num1 = 20;
let num1Tostr = String(num1);
