import React from "react";
import { BiListPlus, BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { addToCart, removeCart } from "../redux/products/action";
const ProductCard = ({ product }) => {
  // const { dispatch } = useContext(PRODUCT_CONTEXT)
  const dispatch = useDispatch();
  const { pathname } = useLocation()

  return (
    <div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'

    >
      <div>{product.qty}</div>
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature) => {
            return <li className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>

        {
          pathname.includes("cart") ||
          <button className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
            // onClick={() => dispatch({ type: ADD_TO_CART, payload: product })}
            onClick={() => dispatch(addToCart(product))}

          >
            Add to cart
          </button>

        }
        {
          pathname.includes("cart") ||
          <button
            title='Add to wishlist'
            className='bg-indigo-500  py-1 px-2 rounded-full'
          >
            <BiListPlus className='text-white' />
          </button>
        }

        {
          pathname.includes("cart") &&
          <button
            title='Add to wishlist'
            className=' bg-red-600  py-1 px-2 rounded-full'
          >
            <BiTrash className='text-white' onClick={() => dispatch(removeCart(product))} />

          </button>
        }
      </div>
    </div>
  );
};

export default ProductCard;
