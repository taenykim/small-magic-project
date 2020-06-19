import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const BackgroundContainer = styled.div``;

const Background = ({ children }: { children: any }) => {
  return (
    <>
      <BackgroundContainer>
        <Header></Header>
        {children}
        <Footer></Footer>
      </BackgroundContainer>
    </>
  );
};

export default Background;
