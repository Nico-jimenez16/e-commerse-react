import React from 'react';
import { useParams } from 'react-router-dom';

// Custom Hooks
import { useServiceProducts } from '../../hooks/useServiceProducts';

// ? importando componentes puros 
import Loader from '../../components/pure/Loader';
import DetailProduct from '../../components/pure/DetailProduct';

const DetailsProductPage = () => {
  const { productId } = useParams()
  const id = parseInt( productId )

  const { status, product } = useServiceProducts(id)

  return (
    <>
        { status ?
            <DetailProduct
              product={product} 
            /> 
          :
            <Loader />
        }
    </>
  )
}

export default DetailsProductPage;
