import { WinningLotto } from './WinningLotto'
import { Lotto } from './Lotto'

describe('WinningLotto객체', () => {
  it('WinningLotto객체에 Lotto객체가 잘 들어가는지 확인', () => {
    // given, when
    const lotto = new Lotto([1, 2, 3, 4, 5, 6])
    const winningLotto = new WinningLotto(lotto, 3)
    // then
    expect(winningLotto.lotto).toStrictEqual(new Lotto([1, 2, 3, 4, 5, 6]))
  })
  it('WinningLotto객체에 보너스볼 숫자가 잘 들어가는지 확인', () => {
    // given, when
    const lotto = new Lotto([1, 2, 3, 4, 5, 6])
    const winningLotto = new WinningLotto(lotto, 3)
    // then
    expect(winningLotto.bonusNo).toStrictEqual(3)
  })
})

describe('WinningLotto객체 match메소드', () => {
  // given
  const FirstLotto = new Lotto([1, 2, 3, 4, 5, 6])
  const winningLotto = new WinningLotto(FirstLotto, 7)
  it('WinningLotto객체에 6개의 숫자 모두 맞을 경우, 1등을 리턴하는지 확인', () => {
    // when
    const myLotto = new Lotto([1, 2, 3, 4, 5, 6])
    const result = winningLotto.match(myLotto)
    // then
    expect(result).toStrictEqual('FIRST')
  })
  it('WinningLotto객체에 5개의 숫자, 1개의 보너스볼이 맞을 경우, 2등을 리턴하는지 확인', () => {
    // when
    const myLotto = new Lotto([1, 2, 3, 4, 5, 7])
    const result = winningLotto.match(myLotto)
    // then
    expect(result).toStrictEqual('SECOND')
  })
  it('WinningLotto객체에 5개의 숫자만 맞을 경우, 3등을 리턴하는지 확인', () => {
    // when
    const myLotto = new Lotto([1, 2, 3, 4, 5, 8])
    const result = winningLotto.match(myLotto)
    // then
    expect(result).toStrictEqual('THIRD')
  })
  it('WinningLotto객체에 4개의 숫자만 맞을 경우, 4등을 리턴하는지 확인', () => {
    // when
    const myLotto = new Lotto([1, 2, 3, 4, 8, 9])
    const result = winningLotto.match(myLotto)
    // then
    expect(result).toStrictEqual('FOURTH')
  })
  it('WinningLotto객체에 3개의 숫자만 맞을 경우, 5등을 리턴하는지 확인', () => {
    // when
    const myLotto = new Lotto([1, 2, 3, 8, 9, 10])
    const result = winningLotto.match(myLotto)
    // then
    expect(result).toStrictEqual('FIFTH')
  })
  it('WinningLotto객체에 맞는 숫자가 3개도 없을 경우 MISS를 리턴하는지 확인', () => {
    // when
    const myLotto = new Lotto([8, 9, 10, 11, 12, 13])
    const result = winningLotto.match(myLotto)
    // then
    expect(result).toStrictEqual('MISS')
  })
})
