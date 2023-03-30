import { createStore } from 'redux'
import { productReducer } from './products/productReducer'

export const store = createStore(productReducer)