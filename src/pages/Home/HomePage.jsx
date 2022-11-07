import React from 'react';
import { useNavigate } from 'react-router-dom'
import Lineup from '../../components/pure/Lineup';
import ContactForm from '../../components/pure/forms/ContactForm';

const bannerHome = require('../../assets/BannerHome.jpg')

const HomePage = () => {

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
          <img className='w-full h-full object-full' src={ bannerHome } alt="Banner Home page" />
          <div className='absolute w-full h-full flex flex-col justify-center items-start p-8'>
            <h1 className='text-5xl text-white md:text-6xl font-serif'>VOTF</h1>
            <button onClick={ goProduct } className='text-xl text-white border border-cyan-200 p-2 mt-4 hover:bg-cyan-200 hover:text-black'> Explore Products </button>
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
