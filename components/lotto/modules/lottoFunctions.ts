import { Lotto } from './Lotto'

export const makeAutomaticLotto = (
  lottoCount: number,
  LOTTO_NUMBERS: number[],
  LOTTO_COUNT: number
) => {
  const lottos: Lotto[] = []
  for (let i = 0; i < lottoCount; i++) {
    lottos.push(
      new Lotto(setRandomNumbers(LOTTO_NUMBERS, LOTTO_COUNT).sort((a: number, b: number) => a - b))
    )
  }
  return lottos
}

export const setRandomNumbers = (LOTTO_NUMBERS: number[], LOTTO_COUNT: number) => {
  let takenLottoNumbers = [...LOTTO_NUMBERS]
  const resultNumbers: number[] = []
  for (let j = 0; j < LOTTO_COUNT; j++) {
    const randomNumber = Math.floor(Math.random() * (LOTTO_NUMBERS[LOTTO_NUMBERS.length - 1] - j))
    const chosen = takenLottoNumbers.splice(randomNumber, 1)[0]
    resultNumbers.push(Number(chosen))
  }
  return resultNumbers
}
