import React from 'react';
import IndexProducts from '../../components/container/IndexProducts';
import IndexFilter from "../../components/container/IndexFilter";

const ProductsPage = () => {

    // const image = 'https://larue.com.kh//image/catalog/Electronics.jpg'

    return (
      <>
        {/* <div className='w-full h-64 p-4'>
          <img className='w-fit h-full m-auto' src={image} alt="" />
        </div> */}
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