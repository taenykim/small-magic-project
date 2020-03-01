import { combineReducers } from 'redux'
import calculator from './calculator'
import wrapper from './wrapper'
import graph from './graph'

const rootReducer = combineReducers({
  wrapper,
  calculator,
  graph
})

export default rootReducer
