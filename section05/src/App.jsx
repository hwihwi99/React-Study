import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/main";
import Footer from "./components/footer";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Bulb from "./components/Bulb";
import Register from "./components/Register";

function App() {
  // const state = useState(0);
  // console.log(state);

  const buttonProps = {
    text: "메일",
    color: "green",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      <Counter></Counter>
      <Bulb />
      <Register></Register>
      {/* Header는 자식 컴포넌트다 */}
      {/* <Header></Header>
      <h1>안녕 리액트</h1>
      <Main></Main>
      <Button text={"메일"} color={"black"}></Button>
      <Button text={"카페"} color={"red"}></Button>
      <Button text={"블로그"}>
        <div>자식요소</div>
      </Button>
      <Button {...buttonProps}></Button>
      <Footer></Footer> */}
    </>
  );
}

export default App;
