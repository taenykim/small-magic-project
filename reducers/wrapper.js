import produce from 'immer'

export const initialState = {
  full: false,
  docker: []
}

export const FULLSCREEN_TOGGLE = 'FULLSCREEN_TOGGLE'
export const DOCKER_STORE = 'DOCKER_STORE'

export default (state = initialState, action) => {
  //   return produce(state, draft => {
  switch (action.type) {
    case FULLSCREEN_TOGGLE:
      return {
        ...state,
        full: !state.full
      }
    case DOCKER_STORE:
      return {
        ...state,
        docker: [...state.docker, action.data]
      }
    default: {
      return {
        ...state
      }
    }
  }
}
