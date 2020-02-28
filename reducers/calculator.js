export const initialState = {
  result: '0',
  tempResult: '',
  pressedOperator: '',
  isFirstNumberTyping: true
}

export const STORE_CALCULATOR_DATA = 'STORE_CALCULATOR_DATA'
export const STORE_RESET_CALCULATOR = 'STORE_RESET_CALCULATOR'

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_CALCULATOR_DATA: {
      return {
        result: action.data.result,
        tempResult: action.data.tempResult,
        pressedOperator: action.data.pressedOperator,
        isFirstNumberTyping: action.data.isFirstNumberTyping
      }
    }
    case STORE_RESET_CALCULATOR: {
      return {
        result: '0',
        tempResult: '',
        pressedOperator: '',
        isFirstNumberTyping: false
      }
    }

    default: {
      return {
        ...state
      }
    }
  }
}
