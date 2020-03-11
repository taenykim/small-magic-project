import { combineReducers } from 'redux'
import calculator from './calculator'
import wrapper from './wrapper'
import graph from './graph'
import jjal from './jjal'

const rootReducer = combineReducers({
  wrapper,
  calculator,
  graph,
  jjal
})

export default rootReducer
