import React, { useContext } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { PRODUCT_CONTEXT } from "../context/ProductProvider";

const Cart = () => {
  const { state } = useContext(PRODUCT_CONTEXT)

  const { loading, error } = state;
  const cart = useSelector(state => state.cart)

  console.log(cart);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        loading && <><p className="text-center text-4xl font-semibold">Loading...</p></>
      }
      {
        error && <><p className="text-center text-4xl font-semibold text-red-600">ERROR😓</p></>
      }
      {
        cart.length > 0 && loading === false && cart?.sort((a, b) => a._id - b._id).map((product, i) => <ProductCard product={product} key={i}></ProductCard>)
      }
    </div >
  );
};

export default Cart;
