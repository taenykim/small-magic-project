export const initialState = {
  result: '0',
  tempResult: '',
  pressedOperator: '',
  isFirstNumberTyping: true
}

export const STORE_CALCULATOR_DATA = 'STORE_CALCULATOR_DATA'

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

    default: {
      return {
        ...state
      }
    }
  }
}
