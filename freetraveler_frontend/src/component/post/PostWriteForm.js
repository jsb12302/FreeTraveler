import React, { useEffect, useReducer, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import post, { changeField } from "../../module/posting";
import PWDayBoxGenerator from "./generator/PWDayBoxGenerator";
import PostTemplate from "./PostTemplate";
import palette from "../../lib/styles/palette";
import { Link } from "react-scroll";
import { IoIosArrowUp } from "react-icons/io";
import DayButton from "./buttons/DayButton";

const POWBox = styled.div`
  width: auto;
  height: 100%;
  padding: 35px;
  margin-top: -10px;
  margin-left: 10%;
  margin-right: 10%;
  background-color: white;
  @media screen and (max-width: 612px) {
    margin-left: 0px;
    margin-right: 0px;
    padding: 0px;
  }
`;

const PWOABox = styled.div`
  width: auto;
  height: 90vh;
  padding: 35px;
  margin-top: -10px;
  margin-left: 10%;
  margin-right: 10%;
  background-color: white;
  display: flex;
  justify-content:center;
  align-items: center; 
  @media screen and (max-width: 612px) {
    margin-left: 0px;
    margin-right: 0px;
    padding: 0px;
  }
`;

const PWDayBox = styled.div``;

const PWForm = styled.form`
  width: auto;
  /* padding: 50px; */
  margin-top: -10px;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 30px;
  text-align: center; 

  @media screen and (max-width: 612px) {
    margin-left: 15%;
    margin-right: 15%;
  }
  /* background-color: white; */
  /* width: auto;
  height: 100%;
  padding: 50px;
  text-align: center; */
`;

const ScrollBar = styled.div`
  justify-content: center;
  align-items: flex-end;
  align-content: center;
  position: fixed;
  right: 1.2rem;
  bottom: 40%;
  z-index: 10;
  transform: translateY(-5rem);
  transition-duration: 0.25s, 0.25s;
  transition-timing-function: cubic-bezier(0.75, 0.25, 0.25, 0.75),
    cubic-bezier(0.75, 0.25, 0.25, 0.75);
  transition-delay: initial, initial;
  transition-property: transform, transform;
`;

const PostInput = styled.input`
  font-size: 15px;
  margin: 0 40px 6px;
  outline-color: ${palette.mint[0]};
  border-color: ${palette.mint[0]};
  border: none;
  width: 100%;
  height: 30px;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${palette.mint[0]};
  /* border: 1px solid rgba(var(--c8c, 168, 168, 168), 1); */
`;

const TitleInput = styled.input`
  outline: none;
  border: none;
  font-size: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 1rem;
  width: 100%;
`;

const PostObjectTitle = styled.div`
  text-align: left;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  width: 100%;
`;

const DayAddBtn = styled.div`
  width: 100%;
  text-align: center;
`;

const DayRemoveBtn = styled.div`
  width: 100%;
  text-align: center;
`;

export default function PostWriteForm({ id }) {
  var [gen, setGen] = useState(new PWDayBoxGenerator());
  var [days, setDays] = useState(gen.render());
  var [dayIndex, setDayIndex] = useState(0);

  var [postName, setPostName] = useState("");
  var [totalCost, setTotalCost] = useState("");
  var [totalDays, setTotalDays] = useState("");
  var [totalTrans, setTotalTrans] = useState("");
  var [comment, setComment] = useState("");

  const dispatch = useDispatch();

  //인풋 변경 이벤트 핸들러
  const onChange = (event) => {
    const { value, name } = event.target;
    switch (name) {
      case "postName":
        console.log(value);
        setPostName(value);
        break;
      case "totalCost":
        setTotalCost(value);
        break;
      case "totalDays":
        setTotalDays(value);
        break;
      case "totalTrans":
        setTotalTrans(value);
        break;
      case "comment":
        setComment(value);
        break;
    }
  };

  const OABox = (
    <PWOABox>
      <PWForm>
        <TitleInput
          name="postName"
          type="text"
          placeholder="포스트 제목"
          onChange={onChange}
        />
        <PostObjectTitle> 여행 비용 </PostObjectTitle>
        <PostInput
          name="totalCost"
          type="text"
          placeholder="여행 비용"
          onChange={onChange}
        />
        <PostObjectTitle> 여행 일수 </PostObjectTitle>
        <PostInput
          name="totalDays"
          type="text"
          placeholder="여행 일수"
          onChange={onChange}
        />
        <PostObjectTitle> 여행 방법 </PostObjectTitle>
        <PostInput
          name="totalTrans"
          type="text"
          placeholder="여행 방법"
          onChange={onChange}
        />
        <PostObjectTitle> 경험자의 한마디 </PostObjectTitle>
        <PostInput
          name="comment"
          type="text"
          placeholder="경험자의 한마디"
          onChange={onChange}
        />

        <DayButton type="button" onClick={() => dayAddAction()}>
          <DayAddBtn>하루 추가</DayAddBtn>
        </DayButton>
        <DayButton type="button" onClick={() => dayRemoveAction()}>
          <DayRemoveBtn>하루 삭제</DayRemoveBtn>
        </DayButton>
      </PWForm>
    </PWOABox>
  );

  const dayRender = () => {
    const dayInputIndex = [];
    for (let i = 1; i <= dayIndex; i++) {
      dayInputIndex.push(
        <Link to={i} spy={true} smooth={true}>
          <span key={i}>{i + " DAY"}</span>
          <br />
        </Link>
      );
    }
    return dayInputIndex;
  };

  const DBox = (
    <ScrollBar>
      {dayRender()}
      <Link to={"scrollup"} spy={true} smooth={false}>
        <IoIosArrowUp size="25" color="#000" />
      </Link>
    </ScrollBar>
  );

  const dayAddAction = function () {
    gen.addBox({ id: dayIndex, day: dayIndex + 1, gen });
    setDayIndex(++dayIndex);
    setDays(gen.render());
  };

  const dayRemoveAction = function () {
    if (dayIndex >= 0) {
      gen.removeTop();
      setDayIndex(--dayIndex);
      setDays(gen.render());
    }
  };

  const testlog = function () {
    console.log("test");
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    var formData = gen.getFormData();
    formData.append("postName", postName);
    formData.append("totalCost", totalCost);
    formData.append("totalDays", totalDays);
    formData.append("totalTrans", totalTrans);
    formData.append("comment", comment);

    dispatch(post(formData));
  };

  return (
    // <POWBox>
      <div id="scrollup">
        {OABox}
        <br />
        <PWForm method="post" onSubmit={onSubmit}>
          {DBox}
          {days}
          <PostInput type="submit" />
          <br />
        </PWForm>
      </div>
    // </POWBox>
  );
}
