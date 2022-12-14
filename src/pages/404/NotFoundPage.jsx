import React from 'react';
import { useRedirect } from '../../hooks/useRedirect';

const NotFoundPage = () => {
  
  const { goToPage } = useRedirect()
  
  const goHome = () => {
    goToPage('/')
  }

  return (
    <>
      <div className='w-full h-96 flex flex-col justify-center items-center py-12'>
        <img onClick={goHome} className='w-full w-fit h-full object-fill cursor-pointer' src="https://img.freepik.com/premium-vector/error-404-landing-page-with-file-flat-design_249405-162.jpg?w=2000" alt="" />
      </div>
    </>
  )
}

export default NotFoundPage;
