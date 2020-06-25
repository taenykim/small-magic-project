import React from "react";
import styled from "styled-components";
import Link from "next/link";

interface AppIconContainerProps {
  name: string;
}

const AppIconContainer = styled.div`
  position: relative;
  height: 300px;
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
`;

interface AppIconProps {
  name: string;
}

const AppIcon: React.FC<AppIconProps> = ({ name }) => {
  let url = `/${name}`;
  const str = String(name).toUpperCase();

  return (
    <AppIconContainer name={name}>
      <Link href={url}>
        <a style={{ textDecoration: "none" }}>
          <img className="app-icon-image" style={{ filter: "grayscale(100%)", transition: "1s ease", position: "absolute", top: 0, left: 0, maxWidth: "100%", opacity: "100%" }} src="captain.jpg" />
          <video style={{ objectFit: "cover", transition: "1s ease", position: "absolute", top: 0, left: 0, height: "100%", opacity: "0%", width: "196px" }} playsInline muted loop autoPlay>
            <source src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </a>
      </Link>
      <div style={{ fontFamily: "escore9", fontSize: "18px", width: "-webkit-fill-available", position: "absolute", top: "200px", textAlign: "center", margin: "11px 11px 11px 11px" }}>{str}</div>
    </AppIconContainer>
  );
};

export default AppIcon;
