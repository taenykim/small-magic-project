import { Lotto } from './Lotto'

export class WinningLotto {
  lotto: Lotto
  bonusNo: number = 0

  constructor(lotto: Lotto, bonusNo: number) {
    this.lotto = lotto
    this.bonusNo = bonusNo
  }

  match(userLotto: Lotto) {
    let count = 0
    let bonusCount = 0
    this.lotto.numbers.map((number) => {
      userLotto.numbers.indexOf(number) >= 0 && count++
    })
    userLotto.numbers.indexOf(this.bonusNo) >= 0 && bonusCount++
    if (count === 6) return 'FIRST'
    if (count === 5 && bonusCount) return 'SECOND'
    if (count + bonusCount === 5) return 'THIRD'
    if (count + bonusCount === 4) return 'FOURTH'
    if (count + bonusCount === 3) return 'FIFTH'
    return 'MISS'
  }
}
