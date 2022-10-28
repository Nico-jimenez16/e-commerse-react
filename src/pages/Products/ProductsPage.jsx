import React from 'react';
import IndexProducts from '../../components/container/IndexProducts';
import IndexFilter from "../../components/container/IndexFilter";

const ProductsPage = () => {
  
  return (
    <>
  
      <div className='w-full block lg:flex justify-center p-4'>
        <div className='w-full lg:w-3/12'>
          <IndexFilter/>
        </div>
        <div className='w-full lg:w-9/12'>
          <IndexProducts/>
        </div>
      </div>
    </>
  )
}

export default ProductsPage;