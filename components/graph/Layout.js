import React, { useState } from 'react'
import styled from 'styled-components'
import ContentsMenubar from '../ContentsMenubar'
import { useSelector } from 'react-redux'

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 540px;
  border-radius: 3px;
  box-shadow: -4px -2px 4px 0px white, 4px 2px 6px 0px #dfe4ea;
`

const Title = styled.p`
  font-family: escore5;
  font-size: 12px;
  align-self: center;
  text-align: center;
  margin-top: 10px;
  color: white;
  background: #555;
  border-radius: 3px;
  padding: 8px 0px 8px 0px;
  width: 70%;
`

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ResultText = styled.p`
  font-family: escore7;
  color: #444;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 26px;
  margin-top: 20px;
  margin-right: 20px;
  height: 40px;
`

const ResultNumber = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  margin: 4px 20px 20px 0px;
  height: 40px;
`

const CaculatorButtonRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0px 6px 0px 6px;
  & > button {
    flex: 1 0 0;
    height: 50px;
    width: 50px;
    box-shadow: -4px -2px 4px 0px #ffffff, 4px 2px 6px 0px #ddd;
    border-radius: 8px;
    padding: 3px;
    margin: 3px;
  }
  & > button.flex2 {
    flex: 2 0 0;
    width: 100px;
    height: 50px;
  }
  & > button.topButton {
    font-family: escore5;
    color: #999;
  }
  & > button.rightButton {
    font-family: escore5;
    color: #da7a7a;
  }
  & > button:hover {
    cursor: pointer;
  }
  & > button:active {
    border-radius: 8px;
    box-shadow: 2px 2px 2px 0px #dfe4ea inset, -2px -2px 2px 0px white inset;
  }
`

const Layout = () => {
  const data = useSelector(state => state.calculator)
  const [result, setResult] = useState(data.result || '0')
  const [tempResult, setTempResult] = useState(data.tempResult || '')
  const [pressedOperator, setPressedOperator] = useState(data.pressedOperator || '')
  const [isFirstNumberTyping, setIsFirstNumberTyping] = useState(data.isFirstNumberTyping || false)

  const buttonClickHandler = button_type => {
    if (button_type === 'reset') {
      setResult('0')
      setTempResult('')
      setPressedOperator('')
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
    } else if (button_type === 'period') {
      if (result.indexOf('.') < 0) {
        setResult(result + '.')
      }
      setIsFirstNumberTyping(false)
    } else if (button_type === 'toggleSign') {
      setResult(result[0] === '-' ? result.substr(1) : '-' + result)
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
      <ContentsMenubar
        data={{ result, tempResult, pressedOperator, isFirstNumberTyping }}
        name="graph"
      ></ContentsMenubar>
      <Title>
        {tempResult + (pressedOperator === 'equal' ? '' : pressedOperator) || 'Calculator'}
      </Title>
      <ResultContainer>
        <ResultText>Result</ResultText>
        <ResultNumber>{result}</ResultNumber>
      </ResultContainer>
      <CaculatorButtonRow>
        <button
          className="topButton"
          name="reset"
          type="button"
          onClick={e => buttonClickHandler(e.target.name)}
        >
          reset
        </button>
        <button
          className="topButton"
          name="delete"
          type="button"
          onClick={e => buttonClickHandler(e.target.name)}
        >
          delete
        </button>
        <button
          className="topButton"
          name="toggleSign"
          type="button"
          onClick={e => buttonClickHandler(e.target.name)}
        >
          ±
        </button>
        <button
          className="rightButton"
          name="divide"
          type="button"
          onClick={e => buttonClickHandler(e.target.name)}
        >
          /
        </button>
      </CaculatorButtonRow>
      <CaculatorButtonRow>
        <button name="1" type="button" onClick={e => buttonClickHandler(e.target.name)}>
          1
        </button>
        <button name="2" type="button" onClick={e => buttonClickHandler(e.target.name)}>
          2
        </button>
        <button name="3" type="button" onClick={e => buttonClickHandler(e.target.name)}>
          3
        </button>
        <button
          className="rightButton"
          name="multiple"
          type="button"
          onClick={e => buttonClickHandler(e.target.name)}
        >
          *
        </button>
      </CaculatorButtonRow>
      <CaculatorButtonRow>
        <button name="4" type="button" onClick={e => buttonClickHandler(e.target.name)}>
          4
        </button>
        <button name="5" type="button" onClick={e => buttonClickHandler(e.target.name)}>
          5
        </button>
        <button name="6" type="button" onClick={e => buttonClickHandler(e.target.name)}>
          6
        </button>
        <button
          className="rightButton"
          name="plus"
          type="button"
          onClick={e => buttonClickHandler(e.target.name)}
        >
          +
        </button>
      </CaculatorButtonRow>
      <CaculatorButtonRow>
        <button name="7" type="button" onClick={e => buttonClickHandler(e.target.name)}>
          7
        </button>
        <button name="8" type="button" onClick={e => buttonClickHandler(e.target.name)}>
          8
        </button>
        <button name="9" type="button" onClick={e => buttonClickHandler(e.target.name)}>
          9
        </button>
        <button
          className="rightButton"
          name="minus"
          type="button"
          onClick={e => buttonClickHandler(e.target.name)}
        >
          -
        </button>
      </CaculatorButtonRow>
      <CaculatorButtonRow>
        <button
          className="flex2"
          name="0"
          type="button"
          onClick={e => buttonClickHandler(e.target.name)}
        >
          0
        </button>

        <button name="period" type="button" onClick={e => buttonClickHandler(e.target.name)}>
          .
        </button>

        <button
          className="rightButton"
          name="equal"
          type="button"
          onClick={e => buttonClickHandler(e.target.name)}
        >
          =
        </button>
      </CaculatorButtonRow>
    </CalculatorContainer>
  )
}

export default Layout
