import React from 'react';
import IndexProducts from '../../components/container/IndexProducts';
import IndexFilter from "../../components/container/IndexFilter";
import { useService } from '../../hooks/useServiceProducts';


const ProductsPage = () => {

  const { status , productsFiltered } = useService()

  return (
    <>
  
      <div className='w-full block lg:flex justify-center p-4'>
        <div className='w-full lg:w-3/12'>
          <IndexFilter/>
        </div>
        <div className='w-full lg:w-9/12'>
          <IndexProducts
            products={productsFiltered}
            status={status}
          />
        </div>
      </div>
    </>
  )
}

export default ProductsPage;