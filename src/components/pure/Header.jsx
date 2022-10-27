import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <nav id='desk' className='fixed z-50 w-full hidden md:flex justify-start items-center h-16 border-b bg-white top-0'>  
            <div className='w-full h-full flex justify-start items-center'>
              <Link className='p-4 text-gray-400' to='/' > Home </Link>
              <Link className='p-4 text-gray-400' to='/products' > Products </Link>
            </div>
            <div className='w-full h-full flex justify-end items-center'>
              <Link className='p-4 text-gray-400' to='/login' > Login </Link>
              <Link className='p-4 text-gray-400' to='/register' > Register </Link>
              <Link className='p-4 text-cyan-700' to='/cart' > view cart </Link>
            </div>
        </nav>
        <nav id='mobile' className='fixed z-50 w-full flex md:hidden justify-start items-center h-16 border-b bg-white top-0'>
            <div className='w-1/4 md:w-full h-full flex justify-center items-center p-4'>
              <button className="w-16 p-2 flex justify-center items-center bg-cyan-500 rounded-sm">
                <span className="w-1/2 h-full flex justify-center items-center">
                  <svg fill='#fff' viewBox="0 0 512 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
                    <path d="M0 96c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className='w-3/4 md:w-full h-full flex justify-end items-center'>
              <Link className='p-2 md:p-4 text-gray-400' to='/login' > Login </Link>
              <Link className='p-2 md:p-4 text-gray-400' to='/register' > Register </Link>
              <Link className='p-2 md:p-4 text-cyan-700' to='/cart' > view cart </Link>
            </div>
        </nav>
    </>
  )
}

export default Header;
