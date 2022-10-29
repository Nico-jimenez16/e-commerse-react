import React , { useState , useEffect } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { useService } from '../../hooks/useServiceProducts';

import Loader from '../../components/pure/Loader';
import DetailProduct from '../../components/pure/DetailProduct';

const DetailsProductPage = () => {

    const { productId } = useParams()
    const navigate = useNavigate()
    const { searchProductId , status }  = useService()

    const [product, setProduct] = useState([])
    
    useEffect(() => {
      
      const response  = searchProductId( parseInt(productId) )
      response.map((product) => { return setProduct(product) } )

    // eslint-disable-next-line
    }, [status] )

    const goBack = () => {
      navigate(-1)
    }

  return (
    <>
        <div className='relative w-full p-4 flex justify-center'>
          <p className='absolute left-0 ml-4 cursor-pointer text-cyan-600' onClick={goBack} > { '<<< back to products' } </p>
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
