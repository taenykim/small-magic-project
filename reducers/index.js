import { combineReducers } from 'redux'
import calculator from './calculator'
import wrapper from './wrapper'

const rootReducer = combineReducers({
  wrapper,
  calculator
})

export default rootReducer
