import React, { useState } from 'react'
import {
  validatePurchaseAmountInput,
  validateManualLottoCountInput,
  validateLottoNumber,
  validateBonusBallInput,
} from './modules/formValidator'
import { Lotto } from './modules/Lotto'
import { makeAutomaticLotto } from './modules/lottoFunctions'
import { WinningLotto } from './modules/WinningLotto'
import styled from 'styled-components'

const Container = styled.div`
  margin-left: 100px;
  & button {
    border: 1px solid black;
    padding: 3px;
    font-size: 10px;
    border-radius: 2px;
    cursor: pointer;
    margin-left: 10px;
  }
  & form {
    margin: 5px 0px 5px 0px;
  }
`

const App = () => {
  const LOTTO_PRICE = 1000
  const LOTTO_COUNT = 6
  const LOTTO_MAX_NUMBER = 45
  const LOTTO_NUMBERS: number[] = []
  for (let i = 0; i < LOTTO_MAX_NUMBER; i++) {
    LOTTO_NUMBERS.push(i + 1)
  }
  const RANKS = {
    FIRST: 0,
    SECOND: 0,
    THIRD: 0,
    FOURTH: 0,
    FIFTH: 0,
    MISS: 0,
  }

  const [purchaseAmountIsBlankError, setPurchaseAmountIsBlankError] = useState(false)
  const [purchaseAmountIsNotNumberError, setPurchaseAmountIsNotNumberError] = useState(false)
  const [
    purchaseAmountIsLessThanMinimumAmountError,
    setPurchaseAmountIsLessThanMinimumAmountError,
  ] = useState(false)
  const [manualLottoCountIsBlankError, setManualLottoCountIsBlankError] = useState(false)
  const [manualLottoCountIsNotNumberError, setManualLottoCountIsNotNumberError] = useState(false)
  const [
    manualLottoCountIsGreaterThanLottoCountError,
    setManualLottoCountIsGreaterThanLottoCountError,
  ] = useState(false)
  const [manualLottoNumberIsBlankError, setManualLottoNumberIsBlankError] = useState(false)
  const [
    manualLottoNumberIsGreaterThanLottoCountError,
    setManualLottoNumberIsGreaterThanLottoCountError,
  ] = useState(false)
  const [
    manualLottoNumberIsLessThanLottoCountError,
    setManualLottoNumberIsLessThanLottoCountError,
  ] = useState(false)
  const [manualLottoNumberIsNotNumberError, setManualLottoNumberIsNotNumberError] = useState(false)
  const [
    manualLottoNumberIsNotBeInLottoScopeError,
    setManualLottoNumberIsNotBeInLottoScopeError,
  ] = useState(false)
  const [
    manualLottoNumberHasDuplicationNumberError,
    setManualLottoNumberHasDuplicationNumberError,
  ] = useState(false)
  const [winningLottoNumberIsBlankError, setWinningLottoNumberIsBlankError] = useState(false)
  const [
    winningLottoNumberIsGreaterThanLottoCountError,
    setWinningLottoNumberIsGreaterThanLottoCountError,
  ] = useState(false)
  const [
    winningLottoNumberIsLessThanLottoCountError,
    setWinningLottoNumberIsLessThanLottoCountError,
  ] = useState(false)
  const [winningLottoNumberIsNotNumberError, setWinningLottoNumberIsNotNumberError] = useState(
    false
  )
  const [
    winningLottoNumberIsNotBeInLottoScopeError,
    setWinningLottoNumberIsNotBeInLottoScopeError,
  ] = useState(false)
  const [
    winningLottoNumberHasDuplicationNumberError,
    setWinningLottoNumberHasDuplicationNumberError,
  ] = useState(false)
  const [bonusBallIsBlankError, setBonusBallIsBlankError] = useState(false)
  const [bonusBallIsNotNumberError, setBonusBallIsNotNumberError] = useState(false)
  const [bonusBallIsNotBeInLottoSopeError, setBonusBallIsNotBeInLottoSopeError] = useState(false)
  const [winningLottoNumberHasBounsBallError, setWinningLottoNumberHasBounsBallError] = useState(
    false
  )

  const [purchaseAmount, setPurchaseAmount] = useState('')
  const [lottoCount, setLottoCount] = useState(0)
  const [gotALottoCount, setGotALottoCount] = useState(false)
  const [manualLottoCount, setManualLottoCount] = useState('')
  const [manualLottos, setManualLottos] = useState<string[]>([])
  const [myLottos, setMyLottos] = useState<Lotto[]>([])
  const [gotUserLottos, setGotUserLottos] = useState(false)
  const [winningLottoNumbers, setWinningLottoNumbers] = useState('')
  const [bonusBall, setBonusBall] = useState('')
  const [ranks, setRanks] = useState(RANKS)
  const [gotResult, setGotResult] = useState(false)

  const onChangePurchaseAmount = (e: any) => {
    setPurchaseAmount(e.target.value)
  }

  const onChangeManualLottoCount = (e: any) => {
    setManualLottoCount(e.target.value)
  }

  const onChangeWinningLottoNumbers = (e: any) => {
    setWinningLottoNumbers(e.target.value)
  }

  const onChangeBonusBall = (e: any) => {
    setBonusBall(e.target.value)
  }

  const onSubmitPurchaseAmount = (e: any) => {
    e.preventDefault()
    setPurchaseAmountIsBlankError(false)
    setPurchaseAmountIsNotNumberError(false)
    setPurchaseAmountIsLessThanMinimumAmountError(false)
    setGotALottoCount(false)

    const validatedPurchaseAmount = validatePurchaseAmountInput(purchaseAmount, LOTTO_PRICE)
    if (validatedPurchaseAmount === 'PURCHASE_AMOUNT_IS_BLANK_ERROR') {
      return setPurchaseAmountIsBlankError(true)
    }
    if (validatedPurchaseAmount === 'PURCHASE_AMOUNT_IS_NOT_NUMBER_ERROR') {
      return setPurchaseAmountIsNotNumberError(true)
    }
    if (validatedPurchaseAmount === 'PURCHASE_AMOUNT_IS_LESS_THAN_MINIMUM_AMOUNT_ERROR') {
      return setPurchaseAmountIsLessThanMinimumAmountError(true)
    }
    const _purchaseAmount = Number(validatedPurchaseAmount)
    const lottoCount = Math.floor(_purchaseAmount / LOTTO_PRICE)
    setLottoCount(lottoCount)
    setGotALottoCount(true)
  }

  const onSubmitManualLottoCount = (e: any) => {
    e.preventDefault()
    setManualLottoCountIsBlankError(false)
    setManualLottoCountIsNotNumberError(false)
    setManualLottoCountIsGreaterThanLottoCountError(false)

    const validatedManualLottoCount = validateManualLottoCountInput(manualLottoCount, lottoCount)
    if (validatedManualLottoCount === 'MANUAL_LOTTO_COUNT_IS_BLANK_ERROR') {
      return setManualLottoCountIsBlankError(true)
    }
    if (validatedManualLottoCount === 'MANUAL_LOTTO_COUNT_IS_NOT_NUMBER_ERROR') {
      return setManualLottoCountIsNotNumberError(true)
    }
    if (validatedManualLottoCount === 'MAMUAL_LOTTO_COUNT_IS_GREATER_THAN_LOTTO_COUNT_ERROR') {
      return setManualLottoCountIsGreaterThanLottoCountError(true)
    }
    const _manualLottos = []
    for (let i = 0; i < Number(manualLottoCount); i++) {
      _manualLottos.push('')
    }
    setManualLottos(_manualLottos)
    if (validatedManualLottoCount === '0') {
      setAllAutomaticLotto(lottoCount)
    }
  }

  const setAllAutomaticLotto = (lottoCount: number) => {
    const automaticLottos = makeAutomaticLotto(lottoCount, LOTTO_NUMBERS, LOTTO_COUNT)
    setMyLottos([...automaticLottos])
    setGotUserLottos(true)
  }

  const onChangeManualLottoNumber = (e: any) => {
    const manualLottoIndex = Number(e.target.id.substr(17))
    manualLottos[manualLottoIndex] = e.target.value
    setManualLottos(manualLottos)
  }

  const onSubmitManualLottos = (e: any) => {
    e.preventDefault()
    setManualLottoNumberIsBlankError(false)
    setManualLottoNumberIsGreaterThanLottoCountError(false)
    setManualLottoNumberIsLessThanLottoCountError(false)
    setManualLottoNumberIsNotNumberError(false)
    setManualLottoNumberIsNotBeInLottoScopeError(false)

    for (let i = 0; i < manualLottos.length; i++) {
      const validatedManualLottoNumber = validateLottoNumber(
        manualLottos[i],
        LOTTO_COUNT,
        LOTTO_NUMBERS
      )
      if (validatedManualLottoNumber === 'LOTTO_NUMBER_IS_BLANK_ERROR') {
        return setManualLottoNumberIsBlankError(true)
      }
      if (validatedManualLottoNumber === 'LOTTO_NUMBER_IS_GREATER_THAN_LOTTO_COUNT') {
        return setManualLottoNumberIsGreaterThanLottoCountError(true)
      }
      if (validatedManualLottoNumber === 'LOTTO_NUMBER_IS_LESS_THAN_LOTTO_COUNT') {
        return setManualLottoNumberIsLessThanLottoCountError(true)
      }
      if (validatedManualLottoNumber === 'LOTTO_NUMBER_IS_NOT_NUMBER_ERROR') {
        return setManualLottoNumberIsNotNumberError(true)
      }
      if (validatedManualLottoNumber === 'LOTTO_NUMBER_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR') {
        return setManualLottoNumberIsNotBeInLottoScopeError(true)
      }
      if (validatedManualLottoNumber === 'LOTTO_NUMBER_HAS_DUPLICATION_NUMBER_ERROR') {
        return setManualLottoNumberHasDuplicationNumberError(true)
      }
    }
    setGotUserLottos(true)
    const _myLottos: Lotto[] = []
    for (let i = 0; i < Number(manualLottoCount); i++) {
      const _manualLotto = manualLottos[i].split(',')
      const manualLottoNumbers = _manualLotto.map((lottoNumber) => Number(lottoNumber))
      const sortedManualLottoNumbers = manualLottoNumbers.sort((a, b) => a - b)
      _myLottos.push(new Lotto(sortedManualLottoNumbers))
    }
    const automaticLottos = makeAutomaticLotto(
      lottoCount - Number(manualLottoCount),
      LOTTO_NUMBERS,
      LOTTO_COUNT
    )
    setMyLottos([..._myLottos, ...automaticLottos])
  }

  const onSubmitWinningLotto = (e: any) => {
    e.preventDefault()
    setWinningLottoNumberIsBlankError(false)
    setWinningLottoNumberIsGreaterThanLottoCountError(false)
    setWinningLottoNumberIsLessThanLottoCountError(false)
    setWinningLottoNumberIsNotNumberError(false)
    setWinningLottoNumberIsNotBeInLottoScopeError(false)
    setWinningLottoNumberHasDuplicationNumberError(false)
    setBonusBallIsBlankError(false)
    setBonusBallIsNotNumberError(false)
    setBonusBallIsNotBeInLottoSopeError(false)

    const validatedWinningLottoNumber = validateLottoNumber(
      winningLottoNumbers,
      LOTTO_COUNT,
      LOTTO_NUMBERS
    )
    if (validatedWinningLottoNumber === 'LOTTO_NUMBER_IS_BLANK_ERROR') {
      return setWinningLottoNumberIsBlankError(true)
    }
    if (validatedWinningLottoNumber === 'LOTTO_NUMBER_IS_GREATER_THAN_LOTTO_COUNT') {
      return setWinningLottoNumberIsGreaterThanLottoCountError(true)
    }
    if (validatedWinningLottoNumber === 'LOTTO_NUMBER_IS_LESS_THAN_LOTTO_COUNT') {
      return setWinningLottoNumberIsLessThanLottoCountError(true)
    }
    if (validatedWinningLottoNumber === 'LOTTO_NUMBER_IS_NOT_NUMBER_ERROR') {
      return setWinningLottoNumberIsNotNumberError(true)
    }
    if (validatedWinningLottoNumber === 'LOTTO_NUMBER_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR') {
      return setWinningLottoNumberIsNotBeInLottoScopeError(true)
    }
    if (validatedWinningLottoNumber === 'LOTTO_NUMBER_HAS_DUPLICATION_NUMBER_ERROR') {
      return setWinningLottoNumberHasDuplicationNumberError(true)
    }

    const validatedBonusBall = validateBonusBallInput(
      validatedWinningLottoNumber,
      bonusBall,
      LOTTO_NUMBERS
    )
    if (validatedBonusBall === 'BONUS_BALL_IS_BLANK_ERROR') {
      return setBonusBallIsBlankError(true)
    }
    if (validatedBonusBall === 'BONUS_BALL_IS_NOT_NUMBER_ERROR') {
      return setBonusBallIsNotNumberError(true)
    }
    if (validatedBonusBall === 'BONUS_BALL_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR') {
      return setBonusBallIsNotBeInLottoSopeError(true)
    }
    if (validatedBonusBall === 'WINNING_LOTTO_NUMBER_HAS_BONUS_BALL_ERROR') {
      return setWinningLottoNumberHasBounsBallError(true)
    }

    const winningLotto = new WinningLotto(
      new Lotto(winningLottoNumbers.split(',').map((item) => Number(item))),
      Number(bonusBall)
    )
    for (let i = 0; i < myLottos.length; i++) {
      RANKS[winningLotto.match(myLottos[i])]++
    }
    setRanks(RANKS)
    setGotResult(true)
  }

  return (
    <Container>
      <form onSubmit={onSubmitPurchaseAmount}>
        <label htmlFor="purchaseAmoutInput">구입 금액을 입력해주세요. </label>
        <input
          id="purchaseAmoutInput"
          type="text"
          value={purchaseAmount}
          onChange={onChangePurchaseAmount}
        ></input>
        <button type="submit">입력</button>
      </form>
      {purchaseAmountIsBlankError && (
        <div style={{ color: 'red' }}>구입 금액을 입력하지 않았습니다.</div>
      )}
      {purchaseAmountIsNotNumberError && (
        <div style={{ color: 'red' }}>구입 금액은 숫자로 입력해주세요.</div>
      )}
      {purchaseAmountIsLessThanMinimumAmountError && (
        <div style={{ color: 'red' }}>로또 최소 구입 가격은 {LOTTO_PRICE}원입니다.</div>
      )}
      {gotALottoCount && (
        <form onSubmit={onSubmitManualLottoCount}>
          <label htmlFor="manualLottoCountInput">수동으로 구매할 로또 수를 입력해주세요. </label>
          <input
            id="manualLottoCountInput"
            type="text"
            value={manualLottoCount}
            onChange={onChangeManualLottoCount}
          ></input>
          <button type="submit">입력</button>
        </form>
      )}
      {manualLottoCountIsBlankError && (
        <div style={{ color: 'red' }}>수동으로 구매할 로또 수를 입력하지 않았습니다.</div>
      )}
      {manualLottoCountIsNotNumberError && (
        <div style={{ color: 'red' }}>수동으로 구매할 로또 수는 숫자로 입력해주세요.</div>
      )}
      {manualLottoCountIsGreaterThanLottoCountError && (
        <div style={{ color: 'red' }}>{lottoCount}개보다 작게 입력해주세요.</div>
      )}
      {manualLottos.length > 0 && (
        <form onSubmit={onSubmitManualLottos}>
          {manualLottos.map((manualLotto, i) => {
            return (
              <div key={i}>
                <label htmlFor={'manualLottoNumber' + i}>
                  수동으로 구매할 번호를 입력해주세요.
                </label>
                <input
                  style={{ width: '200px' }}
                  id={'manualLottoNumber' + i}
                  type="text"
                  onChange={onChangeManualLottoNumber}
                ></input>
              </div>
            )
          })}
          <button type="submit">입력</button>
        </form>
      )}
      {manualLottoNumberIsBlankError && (
        <div style={{ color: 'red' }}>입력하지 않은 번호가 있습니다.</div>
      )}
      {manualLottoNumberIsGreaterThanLottoCountError && (
        <div style={{ color: 'red' }}>로또 개수는 {LOTTO_COUNT}개로 입력해주세요.</div>
      )}
      {manualLottoNumberIsLessThanLottoCountError && (
        <div style={{ color: 'red' }}>로또 개수는 {LOTTO_COUNT}개로 입력해주세요.</div>
      )}
      {manualLottoNumberIsNotNumberError && (
        <div style={{ color: 'red' }}>수동으로 구매할 번호는 숫자와 ,로 입력해주세요.</div>
      )}
      {manualLottoNumberIsNotBeInLottoScopeError && (
        <div style={{ color: 'red' }}>
          로또는 1부터 {LOTTO_MAX_NUMBER} 사이의 숫자를 입력해주세요.
        </div>
      )}
      {manualLottoNumberHasDuplicationNumberError && (
        <div style={{ color: 'red' }}>중복된 로또 번호가 있습니다.</div>
      )}
      {gotUserLottos && (
        <div>
          <div>
            수동으로 {manualLottoCount}장, 자동으로 {lottoCount - Number(manualLottoCount)}개를
            구매했습니다.
          </div>
          <div>
            {myLottos.map((myLotto, i) => {
              return <div key={i}>[{myLotto.numbers.join(', ')}]</div>
            })}
          </div>
          <form onSubmit={onSubmitWinningLotto}>
            <div style={{ margin: '5px 0px 5px 0px' }}>
              <label htmlFor="winningLottoInput">지난 주 당첨번호를 입력해주세요.</label>
              <input
                style={{ width: '200px' }}
                id="winningLottoInput"
                type="text"
                value={winningLottoNumbers}
                onChange={onChangeWinningLottoNumbers}
              ></input>
            </div>
            <div style={{ margin: '5px 0px 5px 0px' }}>
              <label htmlFor="bonusBallInput">보너스 볼을 입력해주세요.</label>
              <input
                id="bonusBallInput"
                type="text"
                value={bonusBall}
                onChange={onChangeBonusBall}
              ></input>
              <span>
                <button type="submit">입력</button>
              </span>
            </div>
          </form>
        </div>
      )}
      {winningLottoNumberIsBlankError && (
        <div style={{ color: 'red' }}>입력하지 않은 번호가 있습니다.</div>
      )}
      {winningLottoNumberIsGreaterThanLottoCountError && (
        <div style={{ color: 'red' }}>당첨 번호는 {LOTTO_COUNT}개로 입력해주세요.</div>
      )}
      {winningLottoNumberIsLessThanLottoCountError && (
        <div style={{ color: 'red' }}>당첨 번호는 {LOTTO_COUNT}개로 입력해주세요.</div>
      )}
      {winningLottoNumberIsNotNumberError && (
        <div style={{ color: 'red' }}>당첨 번호는 숫자와 ,로 입력해주세요.</div>
      )}
      {winningLottoNumberIsNotBeInLottoScopeError && (
        <div style={{ color: 'red' }}>
          로또는 1부터 {LOTTO_MAX_NUMBER} 사이의 숫자를 입력해주세요.
        </div>
      )}
      {winningLottoNumberHasDuplicationNumberError && (
        <div style={{ color: 'red' }}>중복된 로또 번호가 있습니다.</div>
      )}
      {bonusBallIsBlankError && <div style={{ color: 'blue' }}>보너스볼을 입력해주세요.</div>}
      {bonusBallIsNotNumberError && (
        <div style={{ color: 'blue' }}>보너스볼은 숫자로 입력해주세요.</div>
      )}
      {bonusBallIsNotBeInLottoSopeError && (
        <div style={{ color: 'blue' }}>
          보너스볼은 1부터 {LOTTO_MAX_NUMBER} 사이의 숫자를 입력해주세요.
        </div>
      )}
      {winningLottoNumberHasBounsBallError && (
        <div style={{ color: 'blue' }}>보너스볼은 당첨 번호와 다른 숫자로 입력해주세요.</div>
      )}
      {gotResult && (
        <div>
          <div style={{ marginTop: '20px' }}>당첨 통계</div>
          <div>--------</div>
          <div>3개 일치 (5000원) - {ranks.FIFTH}</div>
          <div>4개 일치 (50000원) - {ranks.FOURTH}</div>
          <div>5개 일치 (1500000원) - {ranks.THIRD}</div>
          <div>5개 일치, 보너스볼 일치 (30000000원) - {ranks.SECOND}</div>
          <div>6개 일치 (2000000000원) - {ranks.FIRST}</div>
          <div>
            총 수익률은{' '}
            {Math.floor(
              ((ranks.FIFTH * 5000 +
                ranks.FOURTH * 50000 +
                ranks.THIRD * 1500000 +
                ranks.SECOND * 30000000 +
                ranks.FIRST * 2000000000) /
                Number(purchaseAmount)) *
                100
            )}
            % 입니다.
          </div>
        </div>
      )}
    </Container>
  )
}

export default App
