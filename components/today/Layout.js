import React from 'react'
import styled from 'styled-components'
import Weather from './weather'
import Clock from './Clock'

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
      <Clock />
      <Weather />
    </BackgroundContainer>
  )
}

export default Layout
