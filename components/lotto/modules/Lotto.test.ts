import { Lotto } from './Lotto'

describe('Lotto객체', () => {
  it('Lotto객체에 숫자배열이 잘 들어가는지 확인', () => {
    // given, when
    const lotto = new Lotto([1, 2, 3, 4])
    // then
    expect(lotto.numbers).toStrictEqual([1, 2, 3, 4])
  })
})
