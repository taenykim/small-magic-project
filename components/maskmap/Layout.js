import React from 'react'
import styled from 'styled-components'
import ContentsMenubar from '../ContentsMenubar'

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height:100vh;
  }};
  background: #f5f6f7;
`

const Layout = () => {
  return (
    <BackgroundContainer>
      <ContentsMenubar name="maskmap" />
      코로나 마스크 지도
    </BackgroundContainer>
  )
}

export default Layout