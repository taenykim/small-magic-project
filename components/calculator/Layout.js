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

  const buttonClickHandler = button_type => {
    if (button_type === '1') {
      setNumber(1)
    } else if (button_type === '2') {
      setNumber(2)
    } else if (button_type === '3') {
      setNumber(3)
    } else if (button_type === '4') {
      setNumber(4)
    }
  }

  return (
    <CalculatorContainer>
      <div style={{ marginTop: '20px' }}>{number}</div>
      <button name="1" type="button" onClick={e => buttonClickHandler(e.target.name)}>
        1
      </button>
      <button name="2" type="button" onClick={e => buttonClickHandler(e.target.name)}>
        2
      </button>
      <button name="3" type="button" onClick={e => buttonClickHandler(e.target.name)}>
        3
      </button>
      <button name="4" type="button" onClick={e => buttonClickHandler(e.target.name)}>
        4
      </button>
    </CalculatorContainer>
  )
}

export default Layout
