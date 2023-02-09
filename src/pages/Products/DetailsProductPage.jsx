import React from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../hooks/useProduct';
import { useRedirect } from '../../hooks/useRedirect';


// ? importando componentes puros 
import Loader from '../../components/pure/Loader';
import DetailProduct from '../../components/pure/DetailProduct';
// import RecommendedProducts from '../../components/pure/RecommendedProducts';


const DetailsProductPage = () => {

    const { productId } = useParams()
    const { goToPage } = useRedirect()

    // ? funcion del custom hook que busca el producto === productId
    const id = parseInt( productId )
    const { status , product }  = useProduct(id)
    
    const goBack = (go) => {
      goToPage(go)
    }

  return (
    <>
        <p className='left-0 ml-4 pt-2 cursor-pointer text-cyan-600' onClick={() => goBack(-1) } > Back to Product </p>
        <div className='w-full px-4 py-2 flex justify-center'>
          <h1 className='text-xl font-bold underline'> Product Detail </h1>
        </div>
        { !status &&
            <Loader/>
        }
        { status &&
            
            <DetailProduct
              product={product}
              goBack={goBack} 
            />
        }
        {/* <div className='p-8'>
          <h2 className='text-xl text-cyan-700'> Recommended products: </h2>
            <RecommendedProducts
              product={ product }
            />
        </div> */}
        
    </>
  )
}

export default DetailsProductPage;
