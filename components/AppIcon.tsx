import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";

const scale = keyframes`
  0% {
  }
  100% {
    transform: perspective(500px) scale(1.05) ;
  }
`;

interface AppIconContainerProps {
  name: string;
}

const AppIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 258px;
  height: 437px;
  box-sizing: border-box;
  box-shadow: -4px -2px 4px 0px #ffffff, 4px 2px 6px 0px #ddd;
  border-radius: 5px;
  background: #f5f6f7;
  color: ${(props: AppIconContainerProps) => {
    if (props.name === "calculator") return "red";
    else if (props.name === "graph") return "blue";
    else if (props.name === "crawling") return "purple";
    else if (props.name === "today") return "orange";
    else if (props.name === "jjal") return "green";
    else if (props.name === "avengers") return "navy";
    else if (props.name === "maskmap") return "darkgoldenrod";
    else if (props.name === "loading") return "darkcyan";
    else if (props.name === "lazyloading") return "black";
    else if (props.name === "music") return "red";
    else if (props.name === "racingcar") return "blue";
    else if (props.name === "lotto") return "purple";
    else return "black";
  }};

  &:active {
    box-shadow: 2px 2px 2px 0px #dfe4ea inset, -2px -2px 2px 0px white inset;
  }
  &:hover {
    animation: ${scale} 0.6s ease;
    animation-fill-mode: forwards;
    background: green;
  }

  & > div {
    font-family: escore9;
    font-size: 12px;
  }
`;

interface AppIconProps {
  name: string;
}

const AppIcon: React.FC<AppIconProps> = ({ name }) => {
  let url = `/${name}`;
  const str = String(name).toUpperCase();

  return (
    <Link href={url}>
      <a style={{ textDecoration: "none" }}>
        <AppIconContainer className="ff" name={name}>
          <div>{str}</div>
        </AppIconContainer>
      </a>
    </Link>
  );
};

export default AppIcon;
