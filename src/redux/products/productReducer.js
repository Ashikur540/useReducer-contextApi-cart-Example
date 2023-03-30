import { ADD_TO_CART, REMOVE_CART } from "./actionTypes";


const initialState = {
    cart: [],
};



export const productReducer = (state = initialState, action) => {

    const selectedProduct = state.cart.find(product => product._id === action.payload._id)
    console.log(selectedProduct);

    switch (action.type) {
        case ADD_TO_CART:
            if (selectedProduct) {
                selectedProduct.qty = selectedProduct.qty + 1;
                //immutably change korar jnno age je oi product ta cart e silo seta baad dia qty baraya selected ta re relace kore dissi tai aktai bar bar add hosse but qty increase hosse

                return {
                    ...state,
                    cart: [...state.cart.filter(product => product._id !== selectedProduct._id), selectedProduct]
                }
            }

            return {
                ...state,
                cart: [
                    ...state.cart,
                    { ...action.payload, qty: 1 }
                ]
            };
        case REMOVE_CART:
            if (selectedProduct.qty > 1) {
                selectedProduct.qty = selectedProduct.qty - 1;
                //immutably change korar jnno age je oi product ta cart e silo seta baad dia qty baraya selected ta re relace kore dissi tai aktai bar bar add hosse but qty increase hosse

                return {
                    ...state,
                    cart: [...state.cart.filter(product => product._id !== selectedProduct._id), selectedProduct]
                }
            }

            console.log(action.payload);
            const remain = state.cart.filter(product => product._id !== action.payload._id)
            return {
                ...state,
                cart: remain
            };

        default:
            return state;
    }

}