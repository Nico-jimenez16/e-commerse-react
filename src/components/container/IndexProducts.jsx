import React , { useContext } from 'react';

// importacion de componentes 
import ProductComponent from '../pure/Product';
import Loader from '../pure/Loader';

// Usamos el context
import contextProducts from '../../context/ProductsContext' 



const IndexProductsComponent = () => {

  const {status , productsFiltered } = useContext(contextProducts)

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
