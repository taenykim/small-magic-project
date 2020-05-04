import {
  checkCarNameLength,
  trimCarNameBlank,
  checkCountIsNumber,
  validateInput,
} from './formValidator'

describe('validateInput 함수', () => {
  it('빈문자열일 때, 잘 걸러내는지 확인', () => {
    expect(validateInput('', '')).toBe('CAR_NAME_IS_BLANK_ERROR')
  })
  it('자동차이름길이가 5초과할 경우 잘 걸러내는지 확인', () => {
    expect(validateInput('123456', '2')).toBe('CAR_NAME_LENGTH_ERROR')
  })
  it('시도할 횟수가 숫자가 아닐 경우 잘 제거되는지 확인', () => {
    expect(validateInput('126,a', 'aa')).toBe('COUNT_IS_NOT_NUMBER_ERROR')
  })
})

describe('checkCarNameLength 함수', () => {
  it('자동차이름길이가 5초과할 경우 잘 걸러내는지 확인', () => {
    expect(checkCarNameLength(['123456', '123'])).toBe(false)
  })
})

describe('trimCarNameBlank 함수', () => {
  it('자동차이름이 공백일 경우 잘 제거되는지 확인', () => {
    expect(trimCarNameBlank(['   ', ' '])).toStrictEqual(['', ''])
  })
})

describe('checkCountIsNumber 함수', () => {
  it('시도할 횟수가 숫자가 아닐 경우 잘 제거되는지 확인', () => {
    expect(checkCountIsNumber('ㅁ')).toStrictEqual(false)
  })
  it('시도할 횟수가 숫자가 아닐 경우 잘 제거되는지 확인', () => {
    expect(checkCountIsNumber('123a')).toStrictEqual(false)
  })
  it('시도할 횟수가 숫자가 아닐 경우 잘 제거되는지 확인', () => {
    expect(checkCountIsNumber('123')).toStrictEqual(true)
  })
})
