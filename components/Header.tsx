import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
  align-items: center;
  justify-content: space-around;
  margin: 10px 0px 10px 0px;
  & > p {
    font-family: harry;
    font-size: 80px;
  }
`;

const SubTitle = styled.div`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px 20px 0px;
  padding: 10px 0px 10px 0px;
`;

const Text = styled.p`
  color: #111;
  cursor: pointer;
  &:hover {
    color: red;
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
        <div>Small magic project</div>
        <p>Small magic project</p>
        <div>Small magic project</div>
      </Title>
      <div>
        <Text onClick={openFullScreen}>{full ? "exit full screen" : "full screen"}</Text>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="https://github.com/taenykim/small-magic-project" target="_blank">
          <Text>source code</Text>
        </a>
      </div>
      <SubTitle>YORK, MA - THURSDAY AUGUST 30, 1978 - SEVEN PAGES</SubTitle>
    </HeaderContainer>
  );
};

export default Header;
