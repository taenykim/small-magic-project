import React from 'react'
import Background from '../components/Background'
import styled from 'styled-components'
import AppIcon from '../components/AppIcon'
import AppName from '../components/AppName'

const IndexContainer = styled.div`
  display: flex;
  width: 90vw;
  height: 90vh;
  margin: 10px 10px 10px 10px;
  background: rgba(0, 255, 0, 0.3);
`

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 20px 10px 20px;
`

const index = () => {
  return (
    <Background>
      <IndexContainer>
        <AppContainer>
          <AppIcon />
          <AppName name="calculator" />
        </AppContainer>
        <AppContainer>
          <AppIcon />
          <AppName name="calculator" />
        </AppContainer>
        <AppContainer>
          <AppIcon />
          <AppName name="calculator" />
        </AppContainer>
      </IndexContainer>
    </Background>
  )
}

export default index
