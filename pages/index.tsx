import React from "react";
import styled from "styled-components";
import AppIcon from "../components/AppIcon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IndexContainer = styled.div`
  display: flex;
  width: 84vw;
  margin: 100px 0px 0px 0px;
  flex-wrap: wrap;
`;

const AppContainer = styled.div`
  margin: 20px;
`;

const index = () => {
  return (
    <Container>
      <IndexContainer>
        <AppContainer>
          <AppIcon name="calculator" />
        </AppContainer>
        <AppContainer>
          <AppIcon name="graph" />
        </AppContainer>
        <AppContainer>
          <AppIcon name="crawling" />
        </AppContainer>
        <AppContainer>
          <AppIcon name="today" />
        </AppContainer>
        <AppContainer>
          <AppIcon name="jjal" />
        </AppContainer>
        <AppContainer>
          <AppIcon name="avengers" />
        </AppContainer>
        <AppContainer>
          <AppIcon name="maskmap" />
        </AppContainer>
        <AppContainer>
          <AppIcon name="loading" />
        </AppContainer>
        <AppContainer>
          <AppIcon name="lazyloading" />
        </AppContainer>
        <AppContainer>
          <AppIcon name="music" />
        </AppContainer>
        <AppContainer>
          <AppIcon name="racingcar" />
        </AppContainer>
        <AppContainer>
          <AppIcon name="lotto" />
        </AppContainer>
      </IndexContainer>
    </Container>
  );
};

export default index;
