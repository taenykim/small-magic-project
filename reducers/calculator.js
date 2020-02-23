export const initialState = {}

export const TEST = 'TEST'

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST: {
      return {
        ...state
      }
    }

    default: {
      return {
        ...state
      }
    }
  }
}
