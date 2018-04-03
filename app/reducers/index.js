import { combineReducers } from 'redux'
import form from './formReducers'
import character from './character'

const rootReducer = combineReducers({
  form,
  character
})

export default rootReducer
