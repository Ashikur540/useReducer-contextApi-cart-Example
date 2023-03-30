
import { ADD_TO_CART, REMOVE_CART } from './actionTypes'
export const addToCart = (product) => {

    return {
        type: ADD_TO_CART,
        payload: product

    }
}
export const removeCart = (product) => {

    return {
        type: REMOVE_CART,
        payload: product
    }
}