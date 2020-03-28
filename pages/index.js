import React from 'react'
import styled from 'styled-components'
import AppIcon from '../components/AppIcon'
import AppName from '../components/AppName'

const BackgroundContainer = styled.div`
  background: #f5f6f7;
  min-height: 100vh;
`

const IndexContainer = styled.div`
  display: flex;
  width: 90vw;
  margin: 40px 10px 10px 10px;
  flex-wrap: wrap;
  margin-bottom: 100px;
`

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 20px 10px 20px;
  height: fit-content;
`

const index = () => {
  return (
    <BackgroundContainer>
      <IndexContainer>
        <AppContainer>
          <AppIcon name="calculator" />
          <AppName name="calculator" />
        </AppContainer>
        <AppContainer>
          <AppIcon name="graph" />
          <AppName name="graph" />
        </AppContainer>
        <AppContainer>
          <AppIcon name="crawling" />
          <AppName name="crawling" />
        </AppContainer>
        <AppContainer>
          <AppIcon name="today" />
          <AppName name="today" />
        </AppContainer>
        <AppContainer>
          <AppIcon name="jjal" />
          <AppName name="jjal" />
        </AppContainer>
        <AppContainer>
          <AppIcon name="avengers" />
          <AppName name="avengers" />
        </AppContainer>
        <AppContainer>
          <AppIcon name="maskmap" />
          <AppName name="maskmap" />
        </AppContainer>
        <AppContainer>
          <AppIcon name="loading" />
          <AppName name="loading" />
        </AppContainer>
      </IndexContainer>
    </BackgroundContainer>
  )
}

export default index
