import React from 'react'
import styled from 'styled-components'
import AppIcon from '../components/AppIcon'
import AppName from '../components/AppName'

const IndexContainer = styled.div`
  display: flex;
  width: 90vw;
  height: 90vh;
  margin: 10px 10px 10px 10px;
  flex-wrap: wrap;
`

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 20px 10px 20px;
`

const index = () => {
  return (
    <>
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
      </IndexContainer>
    </>
  )
}

export default index
