import produce from 'immer'

export const initialState = {
  full: false,
  docker: []
}

export const FULLSCREEN_TOGGLE = 'FULLSCREEN_TOGGLE'
export const DOCKER_STORE = 'DOCKER_STORE'
export const DOCKER_DELETE = 'DOCKER_DELETE'

export default (state = initialState, action) => {
  //   return produce(state, draft => {
  switch (action.type) {
    case FULLSCREEN_TOGGLE:
      return {
        ...state,
        full: !state.full
      }
    case DOCKER_STORE: {
      if (state.docker.indexOf(action.data) >= 0)
        return {
          ...state
        }
      return {
        ...state,
        docker: [...state.docker, action.data]
      }
    }
    case DOCKER_DELETE:
      return {
        ...state,
        docker: state.docker.filter((v, i) => action.data !== v)
      }
    default: {
      return {
        ...state
      }
    }
  }
}
