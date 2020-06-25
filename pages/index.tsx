import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import AppIcon from "../components/AppIcon";
import Header from "../components/Header";

const scale = keyframes`
  0% {
  }
  100% {
    transform: perspective(500px) scale(1.05) ;
    background:#fff;
    background-image: url("https://www.transparenttextures.com/patterns/checkered-pattern.png");

  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IndexContainer = styled.div`
  width: 84vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const AppContainer = styled.div`
  margin: 10px;
  width: 200px;
  overflow-wrap: anywhere;
  border: 2px solid black;
  box-sizing: border-box;
  transform: rotateY(-180deg) translate(50%, 50%);
  opacity: 0;
  &:hover {
    animation: ${scale} 0.6s ease;
    animation-fill-mode: forwards;
  }
`;

const Text = styled.div`
  font-family: escore5;
  font-size: 22px;
`;

const SubText = styled.div`
  font-family: escore3;
  font-size: 14px;
  margin: 8px 0px 10px 0px;
`;

const index: React.FC = () => {
  useEffect(() => {
    const figure = document.querySelectorAll(".app-container");
    const vid = document.querySelectorAll("video");
    const appIconImage = document.querySelectorAll(".app-icon-image");

    [].forEach.call(figure, function (item: any, index) {
      item.addEventListener("mouseover", hoverVideo.bind(item, index), false);
      item.addEventListener("mouseout", hideVideo.bind(item, index), false);
    });

    const cards = document.querySelectorAll(".app-container");
    let timer: any;
    for (let i = 0; i < cards.length; i++) {
      timer = setTimeout(() => {
        cards[i].classList.add("flip");
      }, 200 * i);
    }

    function hoverVideo(index: any, e: any) {
      vid[index].style.opacity = "100%";
      const playPromise = vid[index].play();

      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
            // Automatic playback started!
            // Show playing UI.
            console.log("audio played auto");
          })
          .catch((error) => {
            // Auto-play was prevented
            // Show paused UI.
            console.log("playback prevented");
          });
      }
      const appIcon = appIconImage[index] as HTMLElement;
      appIcon.style.opacity = "0%";
    }

    function hideVideo(index: any, e: any) {
      vid[index].style.opacity = "0%";
      var playPromise: any = vid[index].pause();

      if (playPromise !== undefined) {
        playPromise
          .then((_: any) => {
            // Automatic playback started!
            // Show playing UI.
            console.log("audio played auto");
          })
          .catch((error: any) => {
            // Auto-play was prevented
            // Show paused UI.
            console.log("playback prevented");
          });
      }
      const appIcon = appIconImage[index] as HTMLElement;
      appIcon.style.opacity = "100%";
    }
  }, []);
  return (
    <Container>
      <Header></Header>
      <Text>Welcome to my small magic project !</Text>
      <SubText>Enjoy a collection of front-end projects.</SubText>
      <IndexContainer>
        <AppContainer className="app-container">
          <AppIcon name="calculator" />
        </AppContainer>
        <AppContainer className="app-container">
          <AppIcon name="graph" />
        </AppContainer>
        <AppContainer className="app-container">
          <AppIcon name="crawling" />
        </AppContainer>
        <AppContainer className="app-container">
          <AppIcon name="today" />
        </AppContainer>
        <AppContainer className="app-container">
          <AppIcon name="jjal" />
        </AppContainer>
        <AppContainer className="app-container">
          <AppIcon name="avengers" />
        </AppContainer>
        <AppContainer className="app-container">
          <AppIcon name="maskmap" />
        </AppContainer>
        <AppContainer className="app-container">
          <AppIcon name="loading" />
        </AppContainer>
        <AppContainer className="app-container">
          <AppIcon name="lazyloading" />
        </AppContainer>
        <AppContainer className="app-container">
          <AppIcon name="music" />
        </AppContainer>
        <AppContainer className="app-container">
          <AppIcon name="racingcar" />
        </AppContainer>
        <AppContainer className="app-container">
          <AppIcon name="lotto" />
        </AppContainer>
      </IndexContainer>
    </Container>
  );
};

export default index;
