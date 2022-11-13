import React from 'react';
import { useNavigate } from 'react-router-dom'
import Lineup from '../../components/pure/Lineup';
// import RecommendedProductComponent from '../../components/pure/RecommendedProducts';
import ContactForm from '../../components/pure/forms/ContactForm';

// import {useServiceProducts} from '../../hooks/useServiceProducts';

const bannerHome = require('../../assets/banner-technology.webp')

const HomePage = () => {

    // const { products } = useServiceProducts()
    const navigate = useNavigate()

    const goProduct = () => {
      navigate('/products')
    }
    return (
      <>
        <div className='w-full flex justify-center items-center p-1 bg-red-500'>
          <h2 className='text-sm md:text-md text-white'> this month, the best products for you ! </h2>
        </div>
        <div className='relative w-full h-full lg:h-96 flex justify-center items-center'>
          <img className='w-full h-full object-fill' src={ bannerHome } alt="Banner Home page" />
          <div className='absolute w-full h-full flex flex-col justify-center items-start p-8'>
            <h1 className='text-5xl text-white md:text-7xl font-serif'>VOTF</h1>
            <button onClick={ goProduct } className='text-xl text-white border border-cyan-600 p-1 md:p-2 mt-1 md:mt-2 hover:bg-cyan-600 hover:text-white'> Explore Products </button>
          </div>
        </div>
        <div className='w-full h-auto flex flex-col justify-top items-center p-4'>
          <Lineup/>
        </div>
        {/* <div className='p-4'>
          <h1 className='w-full flex mt-4 text-lg'>Recommended Products ...</h1>
          <div className='w-full h-56 flex justify-center items-center rounded-xl border-y p-2 shadow-xl'>
            {
              products.map((product) => {
                return (
                  <RecommendedProductComponent
                    key={product.id}
                    product={product}
                  />
                )
            })
            }
          </div>
        </div> */}
        <div className='w-full flex flex-col justify-center items-center my-8'>
          <ContactForm/>
        </div>
      </>
    )
}

export default HomePage;
