import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
/**
 * 1. "/" : 모든 일기를 조회하는 Home 페이지
 * 2. "/new" : 새로운 일기를 작성하는 New 페이지
 * 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
 */

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };
  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

// Route
// path = "*" 이면 모든 페이지를 의마하고, 위 3개 테그를 else if문처럼 거치고 오기 떄문에 정의되지 않은 url들은 아래 Route를 통해 이동하게 된다.

// Routes 안에는 Route 태그만 올 수 있다
// 다른 태그들이 오면 에라닌디. 하지만 Routes 밖이라면 어떤 태그도 상관없다.

// Link 태그는 html의 a같은 태그로 to에 어디로 이동시킬지를 적어주면 된다.
// navigator : 특정 조건에 따라 페이지를 이동시켜야할 때
export default App;
