import { makeAutomaticLotto, setRandomNumbers } from './lottoFunctions'
import { Lotto } from './Lotto'

describe('랜덤넘버 생성기', () => {
  it('리턴 값의 배열이 숫자 배열인지  확인', () => {
    // given
    const LOTTO_NUMBERS: number[] = []
    const LOTTO_MAX_NUMBER = 45
    for (let i = 0; i < LOTTO_MAX_NUMBER; i++) {
      LOTTO_NUMBERS.push(i + 1)
    }
    const LOTTO_COUNT = 6
    // when
    const result = setRandomNumbers(LOTTO_NUMBERS, LOTTO_COUNT)
    // then
    expect(typeof result[0]).toStrictEqual('number')
  })
})

describe('자동 로또 생성기', () => {
  const LOTTO_NUMBERS: number[] = []
  const LOTTO_MAX_NUMBER = 45
  for (let i = 0; i < LOTTO_MAX_NUMBER; i++) {
    LOTTO_NUMBERS.push(i + 1)
  }
  const LOTTO_COUNT = 6
  it('정해진 개수의 로또가 생성되는지 확인', () => {
    // given
    const lottoCount = 3
    // when
    const result = makeAutomaticLotto(lottoCount, LOTTO_NUMBERS, LOTTO_COUNT)
    // then
    expect(result.length).toStrictEqual(3)
  })
  it('리턴 값의 배열이 Lotto객체 배열인지  확인', () => {
    // given
    const lottoCount = 3
    // when
    const result = makeAutomaticLotto(lottoCount, LOTTO_NUMBERS, LOTTO_COUNT)
    // then
    expect(result[0] instanceof Lotto).toStrictEqual(true)
  })
})
