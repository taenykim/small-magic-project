import React from "react";
import styled from "styled-components";
import ContentsMenubar from "../components/ContentsMenubar";
import Header from "../components/Header";

const Container = styled.div`
  min-height: 100vh;
  font-family: escore9;
  font-size: 30px;
  width: 100vw;
  text-align: center;
`;

const _error = () => {
  return (
    <Container>
      <Header></Header>
      <ContentsMenubar data={{}} name="404" />
      Hello, this is small magic project
    </Container>
  );
};

export default _error;
