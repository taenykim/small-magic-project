import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background: ivory;
  padding: 10px 0px 10px 0px;
  z-index: 5;
  font-size: 12px;
  font-family: escore6;
  color: #666;
  & > a {
    text-decoration: none;
    color: #666;
  }
`;

const Text = styled.p`
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
      <Text onClick={openFullScreen}>{full ? "exit full screen" : "full screen"}</Text>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="https://github.com/taenykim/small-magic-project" target="_blank">
        <Text>source code</Text>
      </a>
    </HeaderContainer>
  );
};

export default Header;
