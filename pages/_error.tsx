import React from "react";
import styled from "styled-components";
import ContentsMenubar from "../components/ContentsMenubar";
import Header from "../components/Header";

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  text-align: center;
`;

const _error: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      This is 404 pages
      <div style={{ margin: "10px" }}>
        <a href="http://localhost:3001/">HOME</a>
      </div>
    </Container>
  );
};

export default _error;
