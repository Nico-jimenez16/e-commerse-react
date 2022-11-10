import React , { useState , useEffect } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { useServiceProducts } from '../../hooks/useServiceProducts';

// ? importando componentes puros 
import Loader from '../../components/pure/Loader';
import DetailProduct from '../../components/pure/DetailProduct';


const DetailsProductPage = () => {

    const { productId } = useParams()
    const navigate = useNavigate()

    // ? funcion del custom hook que busca el producto === productId
    const { status , searchProductId }  = useServiceProducts( )

    // ? Producto con id 
    const [product, setProduct] = useState({})
    
    useEffect(() => {
      
      const response  = searchProductId( parseInt(productId) )
      response.map((product) => { return setProduct(product) } )

    }, [productId , searchProductId])

    const goBack = (go) => {
      navigate(go)
    }

  return (
    <>
        <p className='left-0 ml-4 pt-2 cursor-pointer text-cyan-600' onClick={() => goBack(-1) } > { '<< Back' } </p>
        <div className='w-full px-4 py-2 flex justify-center'>
          <h1 className='text-xl font-bold underline'> Product Detail </h1>
        </div>
        { !status &&
            
            <Loader/>
        }
        { status &&
            
            <DetailProduct 
              product={ product }
              goBack={goBack} 
            />
        }
        
    </>
  )
}

export default DetailsProductPage;
