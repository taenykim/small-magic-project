import React from "react";
import styled from "styled-components";
import Weather from "./Weather";
import Clock from "./Clock";
import ContentsMenubar from "../ContentsMenubar";

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const TodayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  box-shadow: -4px -2px 4px 0px white, 4px 2px 6px 0px #dfe4ea;
  padding: 40px 40px 40px 40px;
`;

const Layout = () => {
  return (
    <>
      <BackgroundContainer>
        <ContentsMenubar name="today" />
        <TodayContainer>
          <Clock />
          <Weather />
        </TodayContainer>
      </BackgroundContainer>
    </>
  );
};

export default Layout;
