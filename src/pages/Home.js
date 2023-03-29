import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { PRODUCT_CONTEXT } from "../context/ProductProvider";

const Home = () => {
  const { state } = useContext(PRODUCT_CONTEXT)

  const { products, loading, error } = state;


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        loading && <><p className="text-center text-4xl font-semibold">Loading...</p></>
      }
      {
        error && <><p className="text-center text-4xl font-semibold text-red-600">ERROR😓</p></>
      }
      {
        products.length > 0 && loading === false && products?.map((product, i) => <ProductCard product={product} key={i}></ProductCard>)
      }
    </div >
  );
};

export default Home;
