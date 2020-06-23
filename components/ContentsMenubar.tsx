import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { STORE_CALCULATOR_DATA, STORE_RESET_CALCULATOR } from "../reducers/calculator";
import { STORE_GRAPH_DATA, STORE_RESET_GRAPH } from "../reducers/graph";
import { DOCKER_STORE, DOCKER_DELETE } from "../reducers/wrapper";
import { STORE_JJAL_DATA, STORE_RESET_JJAL } from "../reducers/jjal";
import { STORE_RESET_AVENGERS, STORE_AVENGERS_DATA } from "../reducers/avengers";

const ContentsMenubarContainer = styled.div`
  display: flex;
  z-index: 1;
  align-items: center;
  width: 100%;
  height: 60px;
  top: 0px;
  & img {
    width: 10px;
    height: 10px;
  }
  position: absolute;
`;

const ImageContainer = styled.div`
  border: 2px solid #111;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 2px;
  padding: 2px;
  &:hover {
    cursor: pointer;
  }
`;
interface ContentsMenubarProps {
  data: any;
  name: string;
}

const ContentsMenubar: React.FC<ContentsMenubarProps> = ({ data, name }) => {
  const dispatch = useDispatch();

  const storeHandler = () => {
    switch (name) {
      case "calculator": {
        dispatch({
          type: STORE_CALCULATOR_DATA,
          data: data,
        });
        dispatch({
          type: DOCKER_STORE,
          data: name,
        });
        return;
      }
      case "graph": {
        dispatch({
          type: STORE_GRAPH_DATA,
          data: data,
        });
        dispatch({
          type: DOCKER_STORE,
          data: name,
        });
        return;
      }
      case "jjal": {
        dispatch({
          type: STORE_JJAL_DATA,
          data: data,
        });
        dispatch({
          type: DOCKER_STORE,
          data: name,
        });
        return;
      }
      case "avengers": {
        dispatch({
          type: STORE_AVENGERS_DATA,
          data: data,
        });
        dispatch({
          type: DOCKER_STORE,
          data: name,
        });
        return;
      }
      default: {
        dispatch({
          type: DOCKER_STORE,
          data: name,
        });
        return;
      }
    }
  };

  const storeReset = () => {
    switch (name) {
      case "calculator": {
        dispatch({
          type: STORE_RESET_CALCULATOR,
        });
        dispatch({
          type: DOCKER_DELETE,
          data: name,
        });
        return;
      }
      case "graph": {
        dispatch({
          type: STORE_RESET_GRAPH,
        });
        dispatch({
          type: DOCKER_DELETE,
          data: name,
        });
        return;
      }
      case "jjal": {
        dispatch({
          type: STORE_RESET_JJAL,
        });
        dispatch({
          type: DOCKER_DELETE,
          data: name,
        });
        return;
      }
      case "avengers": {
        dispatch({
          type: STORE_RESET_AVENGERS,
        });
        dispatch({
          type: DOCKER_DELETE,
          data: name,
        });
        return;
      }
      default: {
        dispatch({
          type: DOCKER_DELETE,
          data: name,
        });
        return;
      }
    }
  };

  return (
    <ContentsMenubarContainer>
      <Link href="/">
        <a style={{ margin: "2px 2px 2px 10px" }}>
          <ImageContainer onClick={storeReset}>
            <img src="cancel.png"></img>
          </ImageContainer>
        </a>
      </Link>
      <Link href="/">
        <a style={{ margin: "2px 2px 2px 10px" }}>
          <ImageContainer onClick={storeHandler}>
            <img src="bottom_arrow.png"></img>
          </ImageContainer>
        </a>
      </Link>
    </ContentsMenubarContainer>
  );
};

export default ContentsMenubar;
