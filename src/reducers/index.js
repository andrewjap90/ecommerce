
import { combineReducers } from 'redux'

import input from './input-reducers'
import cart from './cart-reducer'
export default combineReducers({
  input: input,
  cart: cart,
})
