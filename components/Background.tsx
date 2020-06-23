import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const BackgroundContainer = styled.div`
  background-color: #c2c2c2;
  background-image: url("https://www.transparenttextures.com/patterns/checkered-pattern.png");
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
`;

const Background = ({ children }: { children: any }) => {
  return (
    <>
      <BackgroundContainer>
        {children}
        <Footer></Footer>
      </BackgroundContainer>
    </>
  );
};

export default Background;
