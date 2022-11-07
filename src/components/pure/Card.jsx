import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardComponent = ({ product , remove }) => {
  
  return (
    <>
      <div className='w-full h-auto md:h-28 block md:flex mt-2 border-b'>
          <div className='w-full md:w-1/5 lg:w-1/6 h-full' > 
            <img className='w-fit h-32 md:h-full m-auto object-contain' src={product.image} alt="" /> 
          </div>
          <Link to={`/products/${product.id}`} className='w-full md:w-2/5 lg:w-3/6 h-full flex justify-center items-center p-2' > 
            <h5 className='whitespace-nowrap overflow-hidden text-ellipsis hover:text-cyan-600'> { product.title } </h5> 
          </Link>
          <div className='w-full md:w-1/5 lg:w-1/6 h-full flex justify-center items-center p-2' >
            contador
          </div>
          <div className='w-full md:w-1/5 lg:w-1/6 h-full flex justify-center items-center'> 
            <button onClick={() => remove(product.id)} className='w-full text-white p-2 bg-[#dc1626]'> Delete </button>
          </div>
      </div>
    </>
  )
}

CardComponent.propTypes = {
  product: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired
}

export default CardComponent;