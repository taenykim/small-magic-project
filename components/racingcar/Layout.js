import React from "react";
import styled from "styled-components";
import ContentsMenubar from "../ContentsMenubar";
import App from "./containers/App";

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Layout = () => {
  return (
    <>
      <BackgroundContainer>
        <ContentsMenubar name="racingcar" />
        <App />
      </BackgroundContainer>
    </>
  );
};

export default Layout;
