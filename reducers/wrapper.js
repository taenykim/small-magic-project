export const initialState = {
  docker: []
}

export const DOCKER_STORE = 'DOCKER_STORE'
export const DOCKER_DELETE = 'DOCKER_DELETE'

export default (state = initialState, action) => {
  switch (action.type) {
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
