import React from 'react'
import styled from 'styled-components'
import ContentsMenubar from '../ContentsMenubar'

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background: white;
`

const Layout = () => {
  return (
    <BackgroundContainer>
      <ContentsMenubar name="loading" />
      <div style={{ marginTop: '100px' }}>안녕</div>
    </BackgroundContainer>
  )
}

export default Layout
