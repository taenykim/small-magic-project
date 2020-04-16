import React from 'react'
import styled from 'styled-components'
import ContentsMenubar from '../ContentsMenubar'

const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const Layout = () => {
  return (
    <BackgroundContainer>
      <ContentsMenubar name="share" />
      <div>준비중</div>
    </BackgroundContainer>
  )
}

export default Layout
