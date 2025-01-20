import "./Main.css";
// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. (조건문, 반복문 불가)
// 2. JSX에서는 숫자, 문자열, 배열 값만 렌더링된다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야한다.
const Main = () => {
  const number = 10;
  const obj = { a: 1 };

  const user = {
    name: "이휘정",
    isLogin: true,
  };
  // return (
  //   <main>
  //     <h1>i am main part</h1>
  //     <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
  //     {10} <br />
  //     {[1, 2, 3]} <br />
  //     {obj.a} <br />
  //     {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
  //   </main>
  // );

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <>로그인</>;
  }
};

export default Main;
