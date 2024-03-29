import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AiFillDelete } from "react-icons/ai";

// importando hooks 
import { useCard } from '../../hooks/useCard';

const CardComponent = ({ product }) => {
console.log("🚀 ~ file: Card.jsx:9 ~ CardComponent ~ product", product)

  const { sumarCantProductInCart , restarCantProductInCart , removeProduct } = useCard()
  
  return (
    <>
      <div className='w-full h-auto md:h-28 block md:flex mt-2 border-b'>
          <div className='w-full md:w-1/5 lg:w-1/6 h-full'> 
            <img className='w-fit h-32 md:h-full m-auto object-contain' src={product.image} alt="" /> 
          </div>
          <Link to={`/products/${product.id}`} className='w-full md:w-2/5 lg:w-3/6 h-full flex justify-center items-center p-2'> 
            <h5 className='whitespace-nowrap overflow-hidden text-ellipsis hover:text-cyan-600'> { product.title } </h5> 
          </Link>
          <div className='w-full md:w-1/5 lg:w-1/6 h-full flex justify-center items-center p-2'>
            <div onClick={() => restarCantProductInCart(product.id) } className='w-1/3 h-full flex justify-end md:justify-center items-center'><span className='rounded-full h-1/2 flex items-center border border-black p-3 cursor-pointer'> - </span></div>
            <div className='w-1/3 h-full flex justify-center items-center'><span> { product.quantityInCard } </span></div>
            <div onClick={() => sumarCantProductInCart(product.id) } className='w-1/3 h-full flex justify-start md:justify-center items-center'><span className='rounded-full h-1/2 flex items-center border border-black p-3 cursor-pointer'> + </span></div>
          </div>
          <div onClick={() => removeProduct(product.id)} className='w-full md:w-1/5 lg:w-1/6 h-full flex justify-center items-center'>
            <div className='w-1/2 h-1/2 flex justify-center items-center hover:border hover:border-red-300 transition'>
              <AiFillDelete />
            </div>
            {/* <button className='w-full text-white bg-red-700 md:text-cyan-600 md:bg-transparent p-2'> Delete </button> */}
          </div>
      </div>
    </>
  )
}

CardComponent.propTypes = {
  product: PropTypes.object.isRequired
}

export default CardComponent;
