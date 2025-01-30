import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";

import { getEmotionImage } from "./util/get-emotion-image";
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

  // assert 폴더에 넣으면 빌드 됨과 동시에 메모리 캐시에 저장되어서 다시 불려질 땐 그냥 캐시 가져오므로 0ms안에 불러진다.
  // 하지만 public의 경우 매번 정적인 공간에서 불러와야해서 시간은 조금 소요되지만
  // 너무 많은 이미지양을 저장해야할때는 assert에 넣는것은 오히려 메모리를 과다하게 잡아먹는 것으로
  // 적은 이미지 : assert / 많은 이미지 : public 폴더에 넣어 진행하는 것이 좋다

  return (
    <>
      <div>
        <img src={getEmotionImage(1)} alt="이모지1" />
        <img src={getEmotionImage(2)} alt="이모지2" />
        <img src={getEmotionImage(3)} alt="이모지3" />
        <img src={getEmotionImage(4)} alt="이모지4" />
        <img src={getEmotionImage(5)} alt="이모지5" />
      </div>
      {/* 
      <div>
        <img src={"/emotion1.png"} alt="" />
        <img src={"/emotion2.png"} alt="" />
        <img src={"/emotion3.png"} alt="" />
        <img src={"/emotion4.png"} alt="" />
        <img src={"/emotion5.png"} alt="" />
      </div> */}
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
