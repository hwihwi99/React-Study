console.log("chapter 08");

// 1. null 변합 연산ㄷ자
// -> 존재하는 값을 추려내는 기능
// ->  null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 10
let var5 = var1 ?? var3; // 20
// ?? 는 두 연산에 참여하는 값 중 null이 아닌 걸 뽑아내는 것
let var6 = var2 ?? var3; // 10 : 둘다 NULL이 아니면 앞에 있는 변수값 출력

//2. typeOf 연산자
// -> 값의 타입을 문자열로 변환하는 기능을 하는 연산자

// 3. 산항연산자
// -> 항을 3개 사용하는 연산자
// -> 조걶식을 이용해서 참,거짓일 때의 값을 다르게 변환
