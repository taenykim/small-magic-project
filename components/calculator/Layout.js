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
  const [result, setResult] = useState('0')
  const [tempResult, setTempResult] = useState('')
  const [pressedOperator, setPressedOperator] = useState('')
  const [isFirstNumberTyping, setIsFirstNumberTyping] = useState(true)

  const buttonClickHandler = button_type => {
    console.log(result)
    if (button_type === 'reset') {
      setResult('0')
      setTempResult('')
    } else if (button_type === 'delete') {
      if (result === '0') return
      result.length === 1
        ? (setResult('0'), setIsFirstNumberTyping(true))
        : setResult(result.substr(0, result.length - 1))
    } else if (button_type === 'plus') {
      const block_result = operating(pressedOperator)
      setTempResult(block_result)
      setPressedOperator('plus')
      setIsFirstNumberTyping(true)
      if (pressedOperator !== '') {
        setResult(block_result)
      }
    } else if (button_type === 'minus') {
      const block_result = operating(pressedOperator)
      setTempResult(block_result)
      setPressedOperator('minus')
      setIsFirstNumberTyping(true)
      if (pressedOperator !== '') {
        setResult(block_result)
      }
    } else if (button_type === 'multiple') {
      const block_result = operating(pressedOperator)
      setTempResult(block_result)
      setPressedOperator('multiple')
      setIsFirstNumberTyping(true)
      if (pressedOperator !== '') {
        setResult(block_result)
      }
    } else if (button_type === 'divide') {
      const block_result = operating(pressedOperator)
      setTempResult(block_result)
      setPressedOperator('divide')
      setIsFirstNumberTyping(true)
      if (pressedOperator !== '') {
        setResult(block_result)
      }
    } else if (button_type === 'equal') {
      const block_result = operating(pressedOperator)
      setTempResult(block_result)
      setPressedOperator('equal')
      setIsFirstNumberTyping(true)
      if (pressedOperator !== '') {
        setResult(block_result)
      }
    } else if (button_type === '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '0') {
      if (isFirstNumberTyping) {
        setResult(button_type)
        setIsFirstNumberTyping(false)
      } else {
        result[0] === '0' ? setResult(button_type) : setResult(result + button_type)
      }
    }
  }

  const operating = operator_type => {
    if (operator_type === 'plus') return String(Number(tempResult) + Number(result))
    else if (operator_type === 'minus') return String(Number(tempResult) - Number(result))
    else if (operator_type === 'multiple')
      return String(tempResult === '' ? Number(result) : Number(tempResult) * Number(result))
    else if (operator_type === 'divide')
      return String(tempResult === '' ? Number(result) : Number(tempResult) / Number(result))
    else return String(Number(result))
  }

  return (
    <CalculatorContainer>
      <div style={{ marginTop: '20px', height: '40px' }}>{result}</div>
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
      <button name="plus" type="button" onClick={e => buttonClickHandler(e.target.name)}>
        plus
      </button>
      <button name="minus" type="button" onClick={e => buttonClickHandler(e.target.name)}>
        minus
      </button>
      <button name="multiple" type="button" onClick={e => buttonClickHandler(e.target.name)}>
        multiple
      </button>
      <button name="divide" type="button" onClick={e => buttonClickHandler(e.target.name)}>
        divide
      </button>
      <button name="equal" type="button" onClick={e => buttonClickHandler(e.target.name)}>
        equal
      </button>
    </CalculatorContainer>
  )
}

export default Layout
