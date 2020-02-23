import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #f5f6f7;
`

const Background = ({ children }) => {
  return (
    <>
      <BackgroundContainer>
        <Header></Header>
        {children}
        <Footer></Footer>
      </BackgroundContainer>
    </>
  )
}

export default Background
