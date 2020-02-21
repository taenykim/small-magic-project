import React from 'react'
import Background from '../components/Background'
import styled from 'styled-components'

const IndexContainer = styled.div`
  display: flex;
  width: 90vw;
  height: 90vh;
  margin: 10px 10px 10px 10px;
  background: rgba(0, 255, 0, 0.3);
`

const index = () => {
  return (
    <Background>
      <IndexContainer></IndexContainer>
    </Background>
  )
}

export default index
