import React from 'react';
import Lineup from '../../components/pure/Lineup';
import ContactForm from '../../components/pure/forms/ContactForm';

const HomePage = () => {
  
    return (
      <>
        <div className='w-full flex justify-center items-center p-1 bg-red-500'>
          <h2 className='text-sm md:text-md text-white'>Este mes , Los mejores sorteos para vos ! </h2>
        </div>
        <div className='w-full h-72 md:h-96 flex justify-center items-center overflow-hidden'>
          <img className='w-full h-full object-fill' src="https://ingeniakids.com/wp-content/uploads/2020/09/laptop-child-hands.jpg" alt="" />
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
