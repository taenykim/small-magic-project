import React, { useState } from 'react'
import styled from 'styled-components'

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 600px;
  background: white;
  border-radius: 20px;
`
const Layout = () => {
  const [number, setNumber] = useState(0)

  const buttonClickHandler = () => {
    setNumber(number + 1)
  }

  return (
    <CalculatorContainer>
      <div style={{ marginTop: '20px' }}>{number}</div>
      <button type="button" onClick={buttonClickHandler}>
        +
      </button>
    </CalculatorContainer>
  )
}

export default Layout
