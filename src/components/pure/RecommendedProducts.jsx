import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../../styles/product.css';

const RecommendedProductComponent = ( { product } ) => {

  return (
    <>
        <Link to={`/products/${product.id}`} className='w-48 h-48 block md:flex justify-center items-center rounded-xl border-y p-2 m-2 shadow-xl'>
          <div className='w-full md:w-1/3 h-56 md:h-full'>
            <img className='w-fit h-full m-auto object-contain' src={product.image} alt="" />
          </div>
        </Link>
    </>
  )
}

RecommendedProductComponent.propTypes = {
  product: PropTypes.object.isRequired
}

export default RecommendedProductComponent;