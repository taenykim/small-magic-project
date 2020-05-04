import {
  validatePurchaseAmountInput,
  validateManualLottoCountInput,
  validateLottoNumber,
  validateBonusBallInput,
} from './formValidator'

describe('구입금액 유효성 검사', () => {
  const LOTTO_PRICE = 1000
  it('입력값이 없는 경우, 잘 걸러내는 지 확인', () => {
    // given
    const purchaseAmount = ''
    // when
    const result = validatePurchaseAmountInput(purchaseAmount, LOTTO_PRICE)
    // then
    expect(result).toStrictEqual('PURCHASE_AMOUNT_IS_BLANK_ERROR')
  })
  it('입력값이 숫자가 아닐 경우, 잘 걸러내는 지 확인', () => {
    // given
    const purchaseAmount = '태은'
    // when
    const result = validatePurchaseAmountInput(purchaseAmount, LOTTO_PRICE)
    // then
    expect(result).toStrictEqual('PURCHASE_AMOUNT_IS_NOT_NUMBER_ERROR')
  })
  it('입력값이 로또하나 가격보다 작을 경우, 잘 걸러내는 지 확인', () => {
    // given
    const purchaseAmount = '500'
    // when
    const result = validatePurchaseAmountInput(purchaseAmount, LOTTO_PRICE)
    // then
    expect(result).toStrictEqual('PURCHASE_AMOUNT_IS_LESS_THAN_MINIMUM_AMOUNT_ERROR')
  })
  it('에러가 없을 시, 정확한 값을 잘 리턴하는 지 확인', () => {
    // given
    const purchaseAmount = '2000'
    // when
    const result = validatePurchaseAmountInput(purchaseAmount, LOTTO_PRICE)
    // then
    expect(result).toStrictEqual('2000')
  })
})

describe('수동 로또 개수 유효성 검사', () => {
  const lottoCount = 3
  it('입력값이 없는 경우, 잘 걸러내는 지 확인', () => {
    // given
    const manualLottoCount = ''
    // when
    const result = validateManualLottoCountInput(manualLottoCount, lottoCount)
    // then
    expect(result).toStrictEqual('MANUAL_LOTTO_COUNT_IS_BLANK_ERROR')
  })
  it('입력값이 숫자가 아닐 경우, 잘 걸러내는 지 확인', () => {
    // given
    const manualLottoCount = '태은'
    // when
    const result = validateManualLottoCountInput(manualLottoCount, lottoCount)
    // then
    expect(result).toStrictEqual('MANUAL_LOTTO_COUNT_IS_NOT_NUMBER_ERROR')
  })
  it('입력값이 로또하나 가격보다 작을 경우, 잘 걸러내는 지 확인', () => {
    // given
    const manualLottoCount = '4'
    // when
    const result = validateManualLottoCountInput(manualLottoCount, lottoCount)
    // then
    expect(result).toStrictEqual('MAMUAL_LOTTO_COUNT_IS_GREATER_THAN_LOTTO_COUNT_ERROR')
  })
  it('에러가 없을 시, 정확한 값을 잘 리턴하는 지 확인', () => {
    // given
    const manualLottoCount = '1'
    // when
    const result = validateManualLottoCountInput(manualLottoCount, lottoCount)
    // then
    expect(result).toStrictEqual('1')
  })
})

describe('로또 숫자입력 유효성 검사', () => {
  const LOTTO_NUMBERS: number[] = []
  const LOTTO_MAX_NUMBER = 45
  for (let i = 0; i < LOTTO_MAX_NUMBER; i++) {
    LOTTO_NUMBERS.push(i + 1)
  }
  const LOTTO_COUNT = 6
  it('입력값이 없는 경우, 잘 걸러내는 지 확인', () => {
    // given
    const manualLottoNumber = ''
    // when
    const result = validateLottoNumber(manualLottoNumber, LOTTO_COUNT, LOTTO_NUMBERS)
    // then
    expect(result).toStrictEqual('LOTTO_NUMBER_IS_BLANK_ERROR')
  })
  it('입력값이 로또 카운트보다 클 경우, 잘 걸러내는 지 확인', () => {
    // given
    const manualLottoNumber = '1,2,3,4,5,6,7'
    // when
    const result = validateLottoNumber(manualLottoNumber, LOTTO_COUNT, LOTTO_NUMBERS)
    // then
    expect(result).toStrictEqual('LOTTO_NUMBER_IS_GREATER_THAN_LOTTO_COUNT')
  })
  it('입력값이 로또 카운트보다 작을 경우, 잘 걸러내는 지 확인', () => {
    // given
    const manualLottoNumber = '1,2,3,4,5'
    // when
    const result = validateLottoNumber(manualLottoNumber, LOTTO_COUNT, LOTTO_NUMBERS)
    // then
    expect(result).toStrictEqual('LOTTO_NUMBER_IS_LESS_THAN_LOTTO_COUNT')
  })
  it('입력값을 배열로 잘랐을 때, 빈칸이 있을 경우, 잘 걸러내는 지 확인', () => {
    // given
    const manualLottoNumber = '1,2,3,4,,6'
    // when
    const result = validateLottoNumber(manualLottoNumber, LOTTO_COUNT, LOTTO_NUMBERS)
    // then
    expect(result).toStrictEqual('LOTTO_NUMBER_IS_BLANK_ERROR')
  })
  it('입력값을 배열로 잘랐을 때, 숫자가 아닌 것이 있을 경우, 잘 걸러내는 지 확인', () => {
    // given
    const manualLottoNumber = '1,2,3,4,태은,6'
    // when
    const result = validateLottoNumber(manualLottoNumber, LOTTO_COUNT, LOTTO_NUMBERS)
    // then
    expect(result).toStrictEqual('LOTTO_NUMBER_IS_NOT_NUMBER_ERROR')
  })
  it('입력값을 배열로 잘랐을 때, 로또 범위를 벗어난 것이 있을 경우, 잘 걸러내는 지 확인', () => {
    // given
    const manualLottoNumber = '1,2,3,4,5000,6'
    // when
    const result = validateLottoNumber(manualLottoNumber, LOTTO_COUNT, LOTTO_NUMBERS)
    // then
    expect(result).toStrictEqual('LOTTO_NUMBER_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR')
  })
  it('입력값을 배열로 잘랐을 때, 중복된 것이 있을 경우, 잘 걸러내는 지 확인', () => {
    // given
    const manualLottoNumber = '1,2,3,4,6,6'
    // when
    const result = validateLottoNumber(manualLottoNumber, LOTTO_COUNT, LOTTO_NUMBERS)
    // then
    expect(result).toStrictEqual('LOTTO_NUMBER_HAS_DUPLICATION_NUMBER_ERROR')
  })
  it('에러가 없을 시, 정확한 값을 잘 리턴하는 지 확인', () => {
    // given
    const manualLottoNumber = '1,2,3,4,5,6'
    // when
    const result = validateLottoNumber(manualLottoNumber, LOTTO_COUNT, LOTTO_NUMBERS)
    // then
    expect(result).toStrictEqual(['1', '2', '3', '4', '5', '6'])
  })
})

describe('보너스볼 유효성 검사', () => {
  const LOTTO_NUMBERS: number[] = []
  const LOTTO_MAX_NUMBER = 45
  for (let i = 0; i < LOTTO_MAX_NUMBER; i++) {
    LOTTO_NUMBERS.push(i + 1)
  }
  const validatedWinningLottoNumber = ['1', '2', '3', '4', '5', '6']
  it('입력값이 없는 경우, 잘 걸러내는 지 확인', () => {
    // given
    const bonusBall = ''
    // when
    const result = validateBonusBallInput(validatedWinningLottoNumber, bonusBall, LOTTO_NUMBERS)
    // then
    expect(result).toStrictEqual('BONUS_BALL_IS_BLANK_ERROR')
  })
  it('보너스볼이 숫자가 아닐 경우, 잘 걸러내는 지 확인', () => {
    // given
    const bonusBall = '태은'
    // when
    const result = validateBonusBallInput(validatedWinningLottoNumber, bonusBall, LOTTO_NUMBERS)
    // then
    expect(result).toStrictEqual('BONUS_BALL_IS_NOT_NUMBER_ERROR')
  })
  it('보너스볼이 로또 범위 밖의 숫자일 경우, 잘 걸러내는 지 확인', () => {
    // given
    const bonusBall = '5000'
    // when
    const result = validateBonusBallInput(validatedWinningLottoNumber, bonusBall, LOTTO_NUMBERS)
    // then
    expect(result).toStrictEqual('BONUS_BALL_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR')
  })
  it('보너스볼이 위닝 로또 번호와 겹칠 경우, 잘 걸러내는 지 확인', () => {
    // given
    const bonusBall = '3'
    // when
    const result = validateBonusBallInput(validatedWinningLottoNumber, bonusBall, LOTTO_NUMBERS)
    // then
    expect(result).toStrictEqual('WINNING_LOTTO_NUMBER_HAS_BONUS_BALL_ERROR')
  })
  it('에러가 없을 경우, 정확한 값을 리턴하는 지 확인', () => {
    // given
    const bonusBall = '7'
    // when
    const result = validateBonusBallInput(validatedWinningLottoNumber, bonusBall, LOTTO_NUMBERS)
    // then
    expect(result).toStrictEqual('7')
  })
})
