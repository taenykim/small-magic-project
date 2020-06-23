import React from "react";
import styled from "styled-components";
import ContentsMenubar from "../ContentsMenubar";
import App from "./App";

const BackgroundContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 1000px;
  padding-top: 100px;
`;

const Layout = () => {
  return (
    <BackgroundContainer>
      <ContentsMenubar name="lotto" />
      <App />
    </BackgroundContainer>
  );
};

export default Layout;
