import { combineReducers } from 'redux'
import calculator from './calculator'
import wrapper from './wrapper'
import graph from './graph'
import jjal from './jjal'
import avengers from './avengers'

const rootReducer = combineReducers({
  wrapper,
  calculator,
  graph,
  jjal,
  avengers
})

export default rootReducer
