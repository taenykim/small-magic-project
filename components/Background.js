import React from 'react'
import styled from 'styled-components'

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 0, 0, 0.3);
`

const Background = ({ children }) => {
  return <BackgroundContainer>{children}</BackgroundContainer>
}

export default Background
