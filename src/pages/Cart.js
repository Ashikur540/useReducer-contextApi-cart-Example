import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { PRODUCT_CONTEXT } from "../context/ProductProvider";

const Cart = () => {
  const { state } = useContext(PRODUCT_CONTEXT)

  const { cart, loading, error } = state;


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        loading && <><p className="text-center text-4xl font-semibold">Loading...</p></>
      }
      {
        error && <><p className="text-center text-4xl font-semibold text-red-600">ERROR😓</p></>
      }
      {
        cart.length > 0 && loading === false && cart?.map((product, i) => <ProductCard product={product} key={i}></ProductCard>)
      }
    </div >
  );
};

export default Cart;
