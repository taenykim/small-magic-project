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

  const [purchaseAmountError, setPurchaseAmountError] = useState('')
  const [manualLottoCountError, setManualLottoCountError] = useState('')
  const [manualLottoNumberError, setManualLottoNumberError] = useState('')
  const [winningLottoNumberError, setWinningLottoNumberError] = useState('')
  const [bonusBallError, setBonusBallError] = useState('')

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
    setPurchaseAmountError('')
    setGotALottoCount(false)

    const validatedPurchaseAmount = validatePurchaseAmountInput(purchaseAmount, LOTTO_PRICE)
    if (validatedPurchaseAmount === 'PURCHASE_AMOUNT_IS_BLANK_ERROR') {
      return setPurchaseAmountError('PURCHASE_AMOUNT_IS_BLANK_ERROR')
    }
    if (validatedPurchaseAmount === 'PURCHASE_AMOUNT_IS_NOT_NUMBER_ERROR') {
      return setPurchaseAmountError('PURCHASE_AMOUNT_IS_NOT_NUMBER_ERROR')
    }
    if (validatedPurchaseAmount === 'PURCHASE_AMOUNT_IS_LESS_THAN_MINIMUM_AMOUNT_ERROR') {
      return setPurchaseAmountError('PURCHASE_AMOUNT_IS_LESS_THAN_MINIMUM_AMOUNT_ERROR')
    }
    const _purchaseAmount = Number(validatedPurchaseAmount)
    const lottoCount = Math.floor(_purchaseAmount / LOTTO_PRICE)
    setLottoCount(lottoCount)
    setGotALottoCount(true)
  }

  const onSubmitManualLottoCount = (e: any) => {
    e.preventDefault()
    setManualLottoCountError('')

    const validatedManualLottoCount = validateManualLottoCountInput(manualLottoCount, lottoCount)
    if (validatedManualLottoCount === 'MANUAL_LOTTO_COUNT_IS_BLANK_ERROR') {
      return setManualLottoCountError('MANUAL_LOTTO_COUNT_IS_BLANK_ERROR')
    }
    if (validatedManualLottoCount === 'MANUAL_LOTTO_COUNT_IS_NOT_NUMBER_ERROR') {
      return setManualLottoCountError('MANUAL_LOTTO_COUNT_IS_NOT_NUMBER_ERROR')
    }
    if (validatedManualLottoCount === 'MAMUAL_LOTTO_COUNT_IS_GREATER_THAN_LOTTO_COUNT_ERROR') {
      return setManualLottoCountError('MAMUAL_LOTTO_COUNT_IS_GREATER_THAN_LOTTO_COUNT_ERROR')
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
    setManualLottoNumberError('')

    for (let i = 0; i < manualLottos.length; i++) {
      const validatedManualLottoNumber = validateLottoNumber(
        manualLottos[i],
        LOTTO_COUNT,
        LOTTO_NUMBERS
      )
      if (validatedManualLottoNumber === 'LOTTO_NUMBER_IS_BLANK_ERROR') {
        return setManualLottoNumberError('LOTTO_NUMBER_IS_BLANK_ERROR')
      }
      if (validatedManualLottoNumber === 'LOTTO_NUMBER_IS_GREATER_THAN_LOTTO_COUNT') {
        return setManualLottoNumberError('LOTTO_NUMBER_IS_GREATER_THAN_LOTTO_COUNT')
      }
      if (validatedManualLottoNumber === 'LOTTO_NUMBER_IS_LESS_THAN_LOTTO_COUNT') {
        return setManualLottoNumberError('LOTTO_NUMBER_IS_LESS_THAN_LOTTO_COUNT')
      }
      if (validatedManualLottoNumber === 'LOTTO_NUMBER_IS_NOT_NUMBER_ERROR') {
        return setManualLottoNumberError('LOTTO_NUMBER_IS_NOT_NUMBER_ERROR')
      }
      if (validatedManualLottoNumber === 'LOTTO_NUMBER_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR') {
        return setManualLottoNumberError('LOTTO_NUMBER_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR')
      }
      if (validatedManualLottoNumber === 'LOTTO_NUMBER_HAS_DUPLICATION_NUMBER_ERROR') {
        return setManualLottoNumberError('LOTTO_NUMBER_HAS_DUPLICATION_NUMBER_ERROR')
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
    setWinningLottoNumberError('')
    setBonusBallError('')

    const validatedWinningLottoNumber = validateLottoNumber(
      winningLottoNumbers,
      LOTTO_COUNT,
      LOTTO_NUMBERS
    )
    if (validatedWinningLottoNumber === 'LOTTO_NUMBER_IS_BLANK_ERROR') {
      return setWinningLottoNumberError('LOTTO_NUMBER_IS_BLANK_ERROR')
    }
    if (validatedWinningLottoNumber === 'LOTTO_NUMBER_IS_GREATER_THAN_LOTTO_COUNT') {
      return setWinningLottoNumberError('LOTTO_NUMBER_IS_GREATER_THAN_LOTTO_COUNT')
    }
    if (validatedWinningLottoNumber === 'LOTTO_NUMBER_IS_LESS_THAN_LOTTO_COUNT') {
      return setWinningLottoNumberError('LOTTO_NUMBER_IS_LESS_THAN_LOTTO_COUNT')
    }
    if (validatedWinningLottoNumber === 'LOTTO_NUMBER_IS_NOT_NUMBER_ERROR') {
      return setWinningLottoNumberError('LOTTO_NUMBER_IS_NOT_NUMBER_ERROR')
    }
    if (validatedWinningLottoNumber === 'LOTTO_NUMBER_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR') {
      return setWinningLottoNumberError('LOTTO_NUMBER_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR')
    }
    if (validatedWinningLottoNumber === 'LOTTO_NUMBER_HAS_DUPLICATION_NUMBER_ERROR') {
      return setWinningLottoNumberError('LOTTO_NUMBER_HAS_DUPLICATION_NUMBER_ERROR')
    }

    const validatedBonusBall = validateBonusBallInput(
      validatedWinningLottoNumber,
      bonusBall,
      LOTTO_NUMBERS
    )
    if (validatedBonusBall === 'BONUS_BALL_IS_BLANK_ERROR') {
      return setBonusBallError('BONUS_BALL_IS_BLANK_ERROR')
    }
    if (validatedBonusBall === 'BONUS_BALL_IS_NOT_NUMBER_ERROR') {
      return setBonusBallError('BONUS_BALL_IS_NOT_NUMBER_ERROR')
    }
    if (validatedBonusBall === 'BONUS_BALL_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR') {
      return setBonusBallError('BONUS_BALL_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR')
    }
    if (validatedBonusBall === 'WINNING_LOTTO_NUMBER_HAS_BONUS_BALL_ERROR') {
      return setBonusBallError('WINNING_LOTTO_NUMBER_HAS_BONUS_BALL_ERROR')
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
      {purchaseAmountError === 'PURCHASE_AMOUNT_IS_BLANK_ERROR' && (
        <div style={{ color: 'red' }}>구입 금액을 입력하지 않았습니다.</div>
      )}
      {purchaseAmountError === 'PURCHASE_AMOUNT_IS_NOT_NUMBER_ERROR' && (
        <div style={{ color: 'red' }}>구입 금액은 숫자로 입력해주세요.</div>
      )}
      {purchaseAmountError === 'PURCHASE_AMOUNT_IS_LESS_THAN_MINIMUM_AMOUNT_ERROR' && (
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
      {manualLottoCountError === 'MANUAL_LOTTO_COUNT_IS_BLANK_ERROR' && (
        <div style={{ color: 'red' }}>수동으로 구매할 로또 수를 입력하지 않았습니다.</div>
      )}
      {manualLottoCountError === 'MANUAL_LOTTO_COUNT_IS_NOT_NUMBER_ERROR' && (
        <div style={{ color: 'red' }}>수동으로 구매할 로또 수는 숫자로 입력해주세요.</div>
      )}
      {manualLottoCountError === 'MAMUAL_LOTTO_COUNT_IS_GREATER_THAN_LOTTO_COUNT_ERROR' && (
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
      {manualLottoNumberError === 'LOTTO_NUMBER_IS_BLANK_ERROR' && (
        <div style={{ color: 'red' }}>입력하지 않은 번호가 있습니다.</div>
      )}
      {manualLottoNumberError === 'LOTTO_NUMBER_IS_GREATER_THAN_LOTTO_COUNT' && (
        <div style={{ color: 'red' }}>로또 개수는 {LOTTO_COUNT}개로 입력해주세요.</div>
      )}
      {manualLottoNumberError === 'LOTTO_NUMBER_IS_LESS_THAN_LOTTO_COUNT' && (
        <div style={{ color: 'red' }}>로또 개수는 {LOTTO_COUNT}개로 입력해주세요.</div>
      )}
      {manualLottoNumberError === 'LOTTO_NUMBER_IS_NOT_NUMBER_ERROR' && (
        <div style={{ color: 'red' }}>수동으로 구매할 번호는 숫자와 ,로 입력해주세요.</div>
      )}
      {manualLottoNumberError === 'LOTTO_NUMBER_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR' && (
        <div style={{ color: 'red' }}>
          로또는 1부터 {LOTTO_MAX_NUMBER} 사이의 숫자를 입력해주세요.
        </div>
      )}
      {manualLottoNumberError === 'LOTTO_NUMBER_HAS_DUPLICATION_NUMBER_ERROR' && (
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
      {winningLottoNumberError === 'LOTTO_NUMBER_IS_BLANK_ERROR' && (
        <div style={{ color: 'red' }}>입력하지 않은 번호가 있습니다.</div>
      )}
      {winningLottoNumberError === 'LOTTO_NUMBER_IS_GREATER_THAN_LOTTO_COUNT' && (
        <div style={{ color: 'red' }}>당첨 번호는 {LOTTO_COUNT}개로 입력해주세요.</div>
      )}
      {winningLottoNumberError === 'LOTTO_NUMBER_IS_LESS_THAN_LOTTO_COUNT' && (
        <div style={{ color: 'red' }}>당첨 번호는 {LOTTO_COUNT}개로 입력해주세요.</div>
      )}
      {winningLottoNumberError === 'LOTTO_NUMBER_IS_NOT_NUMBER_ERROR' && (
        <div style={{ color: 'red' }}>당첨 번호는 숫자와 ,로 입력해주세요.</div>
      )}
      {winningLottoNumberError === 'LOTTO_NUMBER_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR' && (
        <div style={{ color: 'red' }}>
          로또는 1부터 {LOTTO_MAX_NUMBER} 사이의 숫자를 입력해주세요.
        </div>
      )}
      {winningLottoNumberError === 'LOTTO_NUMBER_HAS_DUPLICATION_NUMBER_ERROR' && (
        <div style={{ color: 'red' }}>중복된 로또 번호가 있습니다.</div>
      )}
      {bonusBallError === 'BONUS_BALL_IS_BLANK_ERROR' && (
        <div style={{ color: 'blue' }}>보너스볼을 입력해주세요.</div>
      )}
      {bonusBallError === 'BONUS_BALL_IS_NOT_NUMBER_ERROR' && (
        <div style={{ color: 'blue' }}>보너스볼은 숫자로 입력해주세요.</div>
      )}
      {bonusBallError === 'BONUS_BALL_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR' && (
        <div style={{ color: 'blue' }}>
          보너스볼은 1부터 {LOTTO_MAX_NUMBER} 사이의 숫자를 입력해주세요.
        </div>
      )}
      {bonusBallError === 'WINNING_LOTTO_NUMBER_HAS_BONUS_BALL_ERROR' && (
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
