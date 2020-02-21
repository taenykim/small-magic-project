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
  const [result, setResult] = useState('')

  const buttonClickHandler = button_type => {
    console.log(button_type)
    if (button_type === 'reset') {
      setResult('')
    } else if (button_type === 'delete') {
      setResult(result.substr(0, result.length - 1))
    } else if (button_type === '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '0') {
      setResult(result + button_type)
    }
  }

  return (
    <CalculatorContainer>
      <div style={{ marginTop: '20px' }}>{result}</div>
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
      <button name="5" type="button" onClick={e => buttonClickHandler(e.target.name)}>
        5
      </button>
      <button name="6" type="button" onClick={e => buttonClickHandler(e.target.name)}>
        6
      </button>
      <button name="7" type="button" onClick={e => buttonClickHandler(e.target.name)}>
        7
      </button>
      <button name="8" type="button" onClick={e => buttonClickHandler(e.target.name)}>
        8
      </button>
      <button name="9" type="button" onClick={e => buttonClickHandler(e.target.name)}>
        9
      </button>
      <button name="0" type="button" onClick={e => buttonClickHandler(e.target.name)}>
        0
      </button>
      <button name="reset" type="button" onClick={e => buttonClickHandler(e.target.name)}>
        reset
      </button>
      <button name="delete" type="button" onClick={e => buttonClickHandler(e.target.name)}>
        delete
      </button>
    </CalculatorContainer>
  )
}

export default Layout
