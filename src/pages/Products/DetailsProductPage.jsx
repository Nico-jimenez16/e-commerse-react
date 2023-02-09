import React from 'react';
import { useParams } from 'react-router-dom';
import { useServiceProducts } from '../../hooks/useServiceProducts';
import { useRedirect } from '../../hooks/useRedirect';


// ? importando componentes puros 
import Loader from '../../components/pure/Loader';
import DetailProduct from '../../components/pure/DetailProduct';

const DetailsProductPage = () => {

  const { productId } = useParams()
  const { goToPage } = useRedirect()

  // ? funcion del custom hook que busca el producto === productId
  const id = parseInt( productId )
  const { status , product }  = useServiceProducts(id)
  
  const goBack = (go) => {
    goToPage(go)
  }

  return (
    <>
        {/* <div className='w-full px-4 py-2 flex justify-center'>
          <h1 className='text-xl font-bold underline'> Product Detail </h1>
        </div> */}
        { !status &&
            <Loader/>
        }
        { status &&
            
            <DetailProduct
              product={product}
              goBack={goBack} 
            />
        }
    </>
  )
}

export default DetailsProductPage;
