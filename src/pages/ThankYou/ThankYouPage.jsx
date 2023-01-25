import React from 'react';
import { useRedirect } from '../../hooks/useRedirect';

const ThankYouPage = () => {

  const { goToPage } = useRedirect()
  
  function goHome() {
    goToPage('/')
  }
  
  return (
    <>

      <div className='w-full h-auto flex flex-col justify-center items-center m-4'>
        <h1 className='text-xl font-bold p-4 underline'> Thank You. </h1>
        <div className='w-2/4 h-96'>
          <img className='w-full h-full m-auto' src="https://st2.depositphotos.com/5945712/10990/i/600/depositphotos_109907526-stock-photo-emoticons-emoji-smile-icons-isolated.jpg" alt="" />
        </div>
        <div onClick={goHome} className='w-1/3 p-4 bg-cyan-500 hover:bg-cyan-400 border cursor-pointer'>
          <h1 className='text-center text-xl font-bold text-white'>Go to Home</h1>
        </div>
      </div>

    </>
  )
}

export default ThankYouPage;
