import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const ContentsMenubarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  top: 0;
  & img {
    width: 17px;
    height: 17px;
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  box-shadow: -4px -2px 4px 0px #ffffff, 4px 2px 6px 0px #ddd;
  border-radius: 2px;
  padding: 2px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: 2px 2px 2px 0px #dfe4ea inset, -2px -2px 2px 0px white inset;
  }
  & > img {
    filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%);
  }
`

const ContentsMenubar = () => {
  return (
    <ContentsMenubarContainer>
      <Link href="/">
        <a style={{ margin: '2px 2px 2px 10px' }}>
          <ImageContainer>
            <img src="cancel.png"></img>
          </ImageContainer>
        </a>
      </Link>
      <Link href="/">
        <a style={{ margin: '2px 2px 2px 10px' }}>
          <ImageContainer>
            <img src="bottom_arrow.png"></img>
          </ImageContainer>
        </a>
      </Link>
    </ContentsMenubarContainer>
  )
}

export default ContentsMenubar
