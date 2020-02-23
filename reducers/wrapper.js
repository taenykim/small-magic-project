import produce from 'immer'

export const initialState = {
  full: false
}

export const FULLSCREEN_TOGGLE = 'FULLSCREEN_TOGGLE'

export default (state = initialState, action) => {
  //   return produce(state, draft => {
  switch (action.type) {
    case FULLSCREEN_TOGGLE:
      return {
        ...state,
        full: !state.full
      }
    default: {
      return {
        ...state
      }
    }
  }
}
