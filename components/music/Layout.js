import React, { useEffect } from 'react'
import styled from 'styled-components'
import ContentsMenubar from '../ContentsMenubar'

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: white;
`

const Contents = styled.div``

const Layout = () => {
  return (
    <BackgroundContainer>
      <ContentsMenubar name="music" />
      <Contents>음악 플레이어</Contents>
    </BackgroundContainer>
  )
}

export default Layout
