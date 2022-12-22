import React from 'react';

// importacion de componentes 
import ProductComponent from '../pure/Product';
import Loader from '../pure/Loader';

// importando Hooks 
import { useServiceProducts } from '../../hooks/useServiceProducts';


const IndexProductsComponent = () => {

  const {status , productsFiltered } = useServiceProducts()

  return (
    <>
      
        <div className='w-full lg:pl-4 mt-12'>
          { !status &&
              <Loader/>
          }
          { status &&
              productsFiltered.map((product) => {
                  return (
                    <ProductComponent
                      key={product.id}
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
