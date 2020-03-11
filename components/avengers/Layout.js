import React from 'react'
import styled from 'styled-components'
import ContentsMenubar from '../ContentsMenubar'

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-top:70px;
  }};
  background: #f5f6f7;
`

const Layout = () => {
  return (
    <BackgroundContainer>
      <ContentsMenubar name="avengers" />
      어벤져스
    </BackgroundContainer>
  )
}

export default Layout
