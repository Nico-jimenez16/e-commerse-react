import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../../styles/product.css';

const ProductComponent = ( { product } ) => {
    
  return (
    <>
        
        <Link to={`/products/${product.id}`} className='w-full h-auto md:h-56 block md:flex justify-center items-center rounded-xl border-y p-4 shadow-xl mb-4'>
          <div className='w-full md:w-1/3 h-56 md:h-full'>
            <img className='w-full h-full object-contain' src={product.image} alt="" />
          </div>
          <div className='w-full md:w-2/3 h-auto'>
            <h1 className='text-md md:text-xl text-black font-bold whitespace-nowrap overflow-hidden text-ellipsis p-2'> {product.title} </h1>
            <div className='flex my-2'>
              <h2 className='text-2xl'>$ {product.price} </h2>
            </div>
            { product.discount > 0 &&
              <div className='w-3/4 md:w-2/3 lg:w-2/4 xl:w-2/5 flex border rounded-lg pl-2 bg-cyan-400'>
                <h4 className='text-white'> {product.discount}% OFF with associated cards </h4>
              </div>
            }
            { product.favorite &&

              <div className='w-3/4 md:w-2/3 lg:w-2/4 xl:w-2/5 flex border rounded-lg pl-2 bg-lime-400 mt-2'>
                <h4 className='text-white'> best selling product </h4>
              </div>
            }
          </div>
        </Link>
      
    </>
  )
}


ProductComponent.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductComponent;
