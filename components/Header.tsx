import React, { useEffect, useState } from "react";
import styled from "styled-components";

const week = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
const month = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  top: 0;
  width: 100vw;
  align-items: center;
  justify-content: center;
  padding: 10px 0px 10px 0px;
  z-index: 5;
  font-size: 12px;
  font-family: escore6;
  color: #111;
  & a {
    text-decoration: none;
    color: #111;
  }
  & > div {
    display: flex;
  }
`;

const Title = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0px 10px 0px;
  text-align: center;
  & > p {
    font-family: harry;
    font-size: 80px;
    line-height: 70px;
  }
`;

const SubTitle = styled.div`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px 10px 0px;
  padding: 10px 0px 10px 0px;
  text-align: center;
`;

const Text = styled.p`
  color: #111;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

const Text2 = styled.span`
  color: #111;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

const Header = () => {
  const [full, setFull] = useState(false);

  useEffect(() => {
    document.addEventListener("fullscreenchange", () => {
      setFull(!full);
    });
  });

  const openFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <HeaderContainer>
      <Title>
        <p>Small magic project</p>
      </Title>
      <div style={{ marginBottom: "6px" }}>
        Author :
        <a href="https://github.com/taenykim" target="_blank">
          <Text2>taenykim</Text2>
        </a>
      </div>
      <div>
        <Text onClick={openFullScreen}>{full ? "exit full screen" : "full screen"}</Text>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="https://github.com/taenykim/small-magic-project" target="_blank">
          <Text>source code</Text>
        </a>
      </div>
      <SubTitle>
        SUWON, REPUBLIC OF KOREA - {week[new Date().getDay()]} {month[new Date().getMonth()]} {new Date().getDate()}, {new Date().getFullYear()} - FIFTEEN PAGES
      </SubTitle>
    </HeaderContainer>
  );
};

export default Header;
