export const validatePurchaseAmountInput = (purchaseAmount: string, lottoPrice: number) => {
  let _purchaseAmount = purchaseAmount.trim()

  if (_purchaseAmount.length === 0) {
    return 'PURCHASE_AMOUNT_IS_BLANK_ERROR'
  }

  const purchaseAmountHasString = _purchaseAmount && _purchaseAmount.match(/\D/g)
  if (purchaseAmountHasString !== null && purchaseAmountHasString.length >= 0) {
    return 'PURCHASE_AMOUNT_IS_NOT_NUMBER_ERROR'
  }
  if (_purchaseAmount.length < String(lottoPrice).length) {
    return 'PURCHASE_AMOUNT_IS_LESS_THAN_MINIMUM_AMOUNT_ERROR'
  }

  return _purchaseAmount
}

export const validateManualLottoCountInput = (manualLottoCount: string, lottoCount: number) => {
  let _manualLottoCount = manualLottoCount.trim()

  if (_manualLottoCount.length === 0) {
    return 'MANUAL_LOTTO_COUNT_IS_BLANK_ERROR'
  }

  const manualLottoCountHasString = _manualLottoCount && _manualLottoCount.match(/\D/g)
  if (manualLottoCountHasString !== null && manualLottoCountHasString.length >= 0) {
    return 'MANUAL_LOTTO_COUNT_IS_NOT_NUMBER_ERROR'
  }
  if (Number(_manualLottoCount) > lottoCount) {
    return 'MAMUAL_LOTTO_COUNT_IS_GREATER_THAN_LOTTO_COUNT_ERROR'
  }

  return _manualLottoCount
}

export const validateLottoNumber = (
  lottoNumber: string,
  LOTTO_COUNT: number,
  LOTTO_NUMBERS: number[]
) => {
  const checkDuplicationLottoNumber: boolean[] = []
  for (let i = 1; i <= LOTTO_NUMBERS[LOTTO_NUMBERS.length - 1]; i++) {
    checkDuplicationLottoNumber.push(false)
  }

  if (lottoNumber === '') {
    return 'LOTTO_NUMBER_IS_BLANK_ERROR'
  }

  let _lottoNumber = lottoNumber.split(',')
  _lottoNumber = _lottoNumber.map((lottoNumber) => lottoNumber.trim())

  if (_lottoNumber.length > LOTTO_COUNT) {
    return 'LOTTO_NUMBER_IS_GREATER_THAN_LOTTO_COUNT'
  }
  if (_lottoNumber.length < LOTTO_COUNT) {
    return 'LOTTO_NUMBER_IS_LESS_THAN_LOTTO_COUNT'
  }

  for (let i = 0; i < _lottoNumber.length; i++) {
    if (_lottoNumber[i] === '') {
      return 'LOTTO_NUMBER_IS_BLANK_ERROR'
    }
    const lottoNumberHasString = _lottoNumber[i] && _lottoNumber[i].match(/\D/g)
    if (lottoNumberHasString !== null && lottoNumberHasString.length >= 0) {
      return 'LOTTO_NUMBER_IS_NOT_NUMBER_ERROR'
    }
    if (LOTTO_NUMBERS.indexOf(Number(_lottoNumber[i])) < 0) {
      return 'LOTTO_NUMBER_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR'
    }
    if (checkDuplicationLottoNumber[Number(_lottoNumber[i])] === true) {
      return 'LOTTO_NUMBER_HAS_DUPLICATION_NUMBER_ERROR'
    }
    checkDuplicationLottoNumber[Number(_lottoNumber[i])] = true
  }

  return _lottoNumber
}

export const validateBonusBallInput = (
  validatedWinningLottoNumber: string[],
  bonusBall: string,
  LOTTO_NUMBERS: number[]
) => {
  if (bonusBall === '') {
    return 'BONUS_BALL_IS_BLANK_ERROR'
  }
  const _bonusBall = Number(bonusBall)

  const bonusBallHasString = bonusBall.match(/\D/g)
  if (bonusBallHasString !== null && bonusBallHasString.length >= 0) {
    return 'BONUS_BALL_IS_NOT_NUMBER_ERROR'
  }
  if (LOTTO_NUMBERS.indexOf(_bonusBall) < 0) {
    return 'BONUS_BALL_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR'
  }
  if (validatedWinningLottoNumber.indexOf(bonusBall) >= 0) {
    return 'WINNING_LOTTO_NUMBER_HAS_BONUS_BALL_ERROR'
  }

  return bonusBall
}
