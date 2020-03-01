export const initialState = {
  graphData: {
    Austrailia: 1000,
    India: 2700,
    USA: 500,
    Brasil: 2100,
    China: 3000
  },
  country: '',
  population: ''
}

export const STORE_GRAPH_DATA = 'STORE_GRAPH_DATA'
export const STORE_RESET_GRAPH = 'STORE_RESET_GRAPH'

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_GRAPH_DATA: {
      return {
        graphData: action.data.graphData,
        country: action.data.country,
        population: action.data.population
      }
    }
    case STORE_RESET_GRAPH: {
      return {
        graphData: {
          Austrailia: 1000,
          India: 2700,
          USA: 500,
          Brasil: 2100,
          China: 3000
        },
        country: '',
        population: ''
      }
    }

    default: {
      return {
        ...state
      }
    }
  }
}
