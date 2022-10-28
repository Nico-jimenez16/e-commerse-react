import React from 'react';
import { useService } from '../../hooks/useServiceProducts';

// importacion de componentes 
import ProductComponent from '../pure/Product';
import Loader from '../pure/Loader';

const IndexProductsComponent = () => {

  const { status , productsFiltered } = useService()

  return (
    <>
      
        <div className='w-full lg:pl-4 mt-12'>
          { !status &&
              <Loader/>
          }
          { status &&
              productsFiltered.map((product , index) => {
                  return (
                    <ProductComponent
                      key={index}
                      product={product}
                    />
                  )
              })
          }
        </div>
        
    </>
  )
}

export default IndexProductsComponent;
