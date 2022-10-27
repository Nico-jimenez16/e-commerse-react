import React from 'react';
import PropTypes from 'prop-types';

// importacion de componentes 
import ProductComponent from '../pure/Product';
import Loader from '../pure/Loader';

const IndexProductsComponent = ({ products , status }) => {

  return (
    <>
      
        <div className='w-full lg:pl-4 mt-12'>
          { status &&
              <Loader/>
          }
          { !status &&
              products.map((product , index) => {
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


IndexProductsComponent.propTypes = {
  products: PropTypes.array.isRequired ,
  status: PropTypes.bool.isRequired
}

export default IndexProductsComponent;
