import React , { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useService } from '../../hooks/useServiceProducts';

import Loader from '../../components/pure/Loader';
import DetailProduct from '../../components/pure/DetailProduct';

const DetailsProductPage = () => {

    const { productId } = useParams()
    const { status , searchProductId }  = useService()

    const [product, setProduct] = useState([])

    useEffect(() => {
      const getProduct = () => {
          const response = searchProductId( parseInt(productId))
          response.map((product) => {
            return (
              setProduct( product )
            )
          })
      
      }
      getProduct()
    
      // eslint-disable-next-line
    }, [status] )

  return (
    <>
        <div className='w-full p-4 flex justify-center'>
          <h1 className='text-lg font-bold' > Details Page - <span className='underline'> Product { productId } </span> </h1>
        </div>
        { product.length === 0 &&
            
            <Loader/>
        }
        { product.length !== 0 &&

            <DetailProduct product={ product } />
        }
        
    </>
  )
}

export default DetailsProductPage;
