import React, { useState, useCallback, useRef } from 'react'
import { makeCars, makeProcess, moveCars, makeResult } from '../modules/racingCar'
import Processes from '../components/Processes'
import Result from '../components/Result'
import { validateInput } from '../modules/formValidator'
import styled from 'styled-components'

const Container = styled.div`
  & div {
    margin: 4px;
  }
`

const App = () => {
  const [carNames, setCarNames] = useState('')
  const [count, setCount] = useState('')
  const [carNameLengthError, setCarNameLengthError] = useState(false)
  const [carNameIsBlankError, setCarNameIsBlankError] = useState(false)
  const [countIsBlankError, setCountIsBlankError] = useState(false)
  const [countIsNotNumberError, setCountIsNotNumberError] = useState(false)
  const [process, setProcess] = useState<null | JSX.Element>(null)
  const [result, setResult] = useState<null | JSX.Element>(null)

  let timer: any = null

  const processRef = useRef(process)
  processRef.current = process

  const onChangeCarNames = useCallback((e) => {
    setCarNames(e.target.value)
  }, [])

  const onChangeCount = useCallback((e) => {
    setCount(e.target.value)
  }, [])

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      const validator = validateInput(carNames, count)
      if (validator === 'CAR_NAME_IS_BLANK_ERROR') {
        return setCarNameIsBlankError(true)
      }
      if (validator === 'COUNT_IS_BLANK_ERROR') {
        return setCountIsBlankError(true)
      }
      if (validator === 'CAR_NAME_LENGTH_ERROR') {
        return setCarNameLengthError(true)
      }
      if (validator === 'COUNT_IS_NOT_NUMBER_ERROR') {
        return setCountIsNotNumberError(true)
      }
      const _carNames = validator

      setCarNameIsBlankError(false)
      setCarNameLengthError(false)
      setCountIsBlankError(false)
      setCountIsNotNumberError(false)

      const cars = makeCars(_carNames)
      let _count = Number(count)
      for (let i = 0; i < _count; i++) {
        timer = setTimeout(() => {
          moveCars(cars)
          setProcess(makeProcess(i, cars))
          if (i === _count - 1) {
            setResult(makeResult(cars))
          }
        }, 1000 * i)
      }
    },
    [carNames, count]
  )

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <label htmlFor="carNames">
              경주할 자동차이름을 입력하세요. (이름은 쉼표(,)기준으로 구분)
            </label>
          </div>
          <input
            style={{ width: '500px' }}
            id="carNames"
            type="text"
            value={carNames}
            onChange={onChangeCarNames}
          ></input>
        </div>
        <div>
          <div>
            <label htmlFor="count">시도할 횟수는 몇회인가요?</label>
          </div>
          <input id="count" type="text" value={count} onChange={onChangeCount}></input>
          <button type="submit">입력</button>
        </div>
        {carNameLengthError && (
          <div style={{ color: 'red' }}>에러! 자동차이름은 5이하로 해야합니다</div>
        )}
        {carNameIsBlankError && (
          <div style={{ color: 'red' }}>에러! 자동차이름은 공백이 될 수 없습니다</div>
        )}
        {countIsBlankError && (
          <div style={{ color: 'blue' }}>에러! 시도할 횟수는 공백이 될 수 없습니다</div>
        )}
        {countIsNotNumberError && (
          <div style={{ color: 'blue' }}>에러! 시도할 횟수는 숫자를 입력하세오</div>
        )}
      </form>
      <Processes process={process} />
      <Result result={result} />
    </Container>
  )
}

export default App
