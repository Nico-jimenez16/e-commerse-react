import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {

  const navigate = useNavigate()
  
  function goHome() {
    navigate('/')
  }
  
  return (
    <>

      <div className='w-full h-auto flex flex-col justify-center items-center m-4'>
        <h1 className='text-xl font-bold p-4 underline'> Thank You. </h1>
        <div className='w-2/4 h-96'>
          <img className='w-full h-full m-auto' src="https://st2.depositphotos.com/5945712/10990/i/600/depositphotos_109907526-stock-photo-emoticons-emoji-smile-icons-isolated.jpg" alt="" />
        </div>
        <div onClick={goHome} className='p-4 border cursor-pointer'>
          <h1 className='text-xl font-bold text-green-600'>Go to Home</h1>
        </div>
      </div>

    </>
  )
}

export default ThankYouPage;
