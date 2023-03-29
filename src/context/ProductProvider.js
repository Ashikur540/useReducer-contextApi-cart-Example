import React, { createContext, useEffect, useReducer } from 'react';
import { actionTypes } from '../state/productsState/actionTypes';
import { initialState, productReducer } from '../state/productsState/productReducer';


export const PRODUCT_CONTEXT = createContext();

function ProductProvider({ children }) {

    const [state, dispatch] = useReducer(productReducer, initialState)
    console.log(state);

    useEffect(() => {
        // fetch start
        dispatch({ type: actionTypes.FETCH_START })

        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                dispatch({ type: actionTypes.FETCH_END, payload: data })
                // fetch end
            })
            // maintain erros
            .catch(err => {
                dispatch({ type: actionTypes.ERROR })
            })
    }, [])


    /*
        // old system .. using useEffect
        const [products, setProducts] = useState([]);
        useEffect(() => {
            fetch('products.json').then(res => res.json()).then(data => {
                console.log(data);
                setProducts(data)
            })
        }, [products])
    
        */
    const providerData = {
        state, dispatch

    }

    return (
        <PRODUCT_CONTEXT.Provider value={providerData}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    )
}

export default ProductProvider

