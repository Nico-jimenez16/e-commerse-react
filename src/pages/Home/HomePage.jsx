import React from 'react';
import '../../styles/title.css'
import Lineup from '../../components/pure/Lineup';
import ContactForm from '../../components/pure/forms/ContactForm';
import { useRedirect } from '../../hooks/useRedirect'

const bannerHome = require('../../assets/banner-technology.webp')


const HomePage = () => {

    const { goToPage } = useRedirect()

    const goProduct = () => {
      goToPage('/products')
    }

    return (
      <>
        <div className='w-full flex justify-center items-center p-1 bg-red-500'>
          <h2 className='text-sm md:text-md text-white'> this month, the best products for you ! </h2>
        </div>
        <div className='relative w-full h-full lg:h-96 flex justify-center items-center'>
          <img className='w-full h-full object-fill' src={ bannerHome } alt="Banner Home page" />
          <div className='absolute w-full h-full flex flex-col justify-center items-start p-2 md:p-8'>
            <span className='text-5xl text-white md:text-7xl style-title'>N-VOTF</span>
            <button onClick={ goProduct } className='text-xl text-white border border-cyan-400 p-1 md:p-2 mt-1 md:mt-2'> Explore Products </button>
          </div>
        </div>
        <div className='w-full h-auto flex flex-col justify-top items-center p-4'>
          <Lineup/>
        </div>
        <div className='w-full flex flex-col justify-center items-center my-8'>
          <ContactForm/>
        </div>
      </>
    )
}

export default HomePage;
