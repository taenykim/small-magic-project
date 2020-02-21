import React from 'react'
import styled from 'styled-components'

const AppNameContainer = styled.div`
  font-family: escore3;
  font-size: 12px;
  margin-top: 10px;
`

const AppName = ({ name }) => {
  return <AppNameContainer>{name}</AppNameContainer>
}

export default AppName
