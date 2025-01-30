import { useState } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  //   const [name, setName] = useState("");
  //   const [birth, setBirth] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [bio, setBio] = useState("");

  //   const onChangeName = (evt) => {
  //     setName(evt.target.value);
  //   };

  //   const onChangeBirth = (evt) => {
  //     setBirth(evt.target.value);
  //   };

  //   const onChangeCountry = (evt) => {
  //     setCountry(evt.target.value);
  //   };

  //   const onChangeBio = (evt) => {
  //     setBio(evt.target.value);
  //   };

  return (
    <div>
      REGISTER
      <input placeholder={"이름"} onChange={onChangeName} />
      {name}
      <input type="date" placeholder={"이름"} onChange={onChangeBirth} />
      {birth}
      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value=""></option>
          <option value="한국">한국</option>
          <option value="미국">미국</option>
          <option value="일본">일본</option>
        </select>
        {country}
      </div>
      <div>
        <textarea onChange={onChangeBio}></textarea>
        {bio}
      </div>
    </div>
  );
};

export default Register;
