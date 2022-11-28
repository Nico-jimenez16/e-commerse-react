import React , { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';

import { useServiceUser } from '../../hooks/useServiceUsers'

const HeaderComponent = () => {
  
  const navigate = useNavigate()
  const [modalView, setModalView] = useState(false)
  const [logout, setLogout] = useState(false)

  const { status , loggedUser , unlogged } = useServiceUser()

  const viewModalMobile = () => {
    setModalView(!modalView)
  }

  const viewModalLogout = () => {
    setLogout(!logout)
  }

  const logoutSesion = () => {
    unlogged()
    viewModalLogout()
  }

  const goCart = () => {
    navigate('/cart')
  }
  
  return (
    <>
        <nav id='desk' className='fixed z-50 w-full hidden md:flex justify-start items-center h-16 border-b bg-white top-0'>  
            <div className='w-full h-full flex justify-start items-center'>
              <Link className='p-4 text-gray-400' to='/' > Home </Link>
              <Link className='p-4 text-gray-400' to='/products' > Products </Link>
            </div>
            <div className='w-full h-full flex justify-end items-center'>
              { status &&
                <Link onClick={ viewModalLogout } className='w-auto h-full flex justify-center items-center'>
                  <div className='w-auto h-10 flex justify-center items-center border-b border-cyan-500 rounded-lg px-2'>
                    <img className='h-8' src="https://cdn-icons-png.flaticon.com/512/4526/4526817.png" alt="" />
                    <h2 className='pl-2 text-black font-bold'> { loggedUser.username } </h2>
                    <div className='p-2'>
                      <svg aria-label="Icono de comilla angular hacia abajo" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12" className="_ab6-"><path d="M12 17.502a1 1 0 01-.707-.293l-9-9.004a1 1 0 011.414-1.414L12 15.087l8.293-8.296a1 1 0 011.414 1.414l-9 9.004a1 1 0 01-.707.293z"></path></svg>
                    </div>
                  </div>
                </Link>
              }
              { !status &&
                <>
                  <Link className='p-4 text-gray-400' to='/login' > Login </Link>
                  <Link className='p-4 text-gray-400' to='/register' > Register </Link>
                </>
              }
              <Link className='p-4 text-cyan-700' to='/cart' > view cart </Link>
            </div>
        </nav>
        <nav id='mobile' className='fixed z-50 w-full flex md:hidden justify-start items-center h-16 border-b bg-white top-0'>
            <div className='w-1/4 md:w-full h-full flex justify-center items-center px-5 py-3'>
              <button onClick={ viewModalMobile } className="w-20 h-full flex justify-center items-center bg-cyan-500 rounded-md">
                <span className="w-2/3 h-full flex justify-center items-center">
                  <svg fill='#fff' viewBox="0 0 512 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em">
                    <path d="M0 96c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className='w-3/4 md:w-full h-full flex justify-end items-center'>
            <div onClick={ goCart } className='w-auto h-16 flex justify-center items-center mr-4'>
              <img className='h-8' src="https://cdn-icons-png.flaticon.com/512/4202/4202388.png" alt="bag"/>
            </div>
            { status &&
                <Link onClick={ viewModalLogout } className='w-auto h-full flex justify-center items-center mr-2'>
                  <div className='w-auto h-10 flex justify-center items-center border-b border-cyan-500 rounded-lg px-2'>
                    <img className='h-8' src="https://cdn-icons-png.flaticon.com/512/4526/4526817.png" alt="" />
                    <h2 className='pl-2 text-black font-bold'> { loggedUser.username } </h2>
                    <div className='p-2'>
                      <svg aria-label="Icono de comilla angular hacia abajo" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12" className="_ab6-"><path d="M12 17.502a1 1 0 01-.707-.293l-9-9.004a1 1 0 011.414-1.414L12 15.087l8.293-8.296a1 1 0 011.414 1.414l-9 9.004a1 1 0 01-.707.293z"></path></svg>
                    </div>
                  </div>
                </Link>

              }
              { !status &&
                <>
                  <Link className='p-2 md:p-4 text-gray-400' to='/login' > Login </Link>
                  <Link className='p-2 md:p-4 text-gray-400' to='/register' > Register </Link>
                </>
              }
            </div>
        </nav>
        { modalView &&
          <div id='modal-mobile' className='w-full flex justify-center items-center md:hidden fixed z-50'>
            <div className='w-3/4 h-48 flex flex-col bg-white border-x-2 border-b-2 border-cyan-500'>
              <Link onClick={ viewModalMobile } className='w-full h-10 flex justify-center items-center text-gray-400 border-b' to='/' > Home </Link>
              <Link onClick={ viewModalMobile } className='w-full h-10 flex justify-center items-center text-gray-400 border-b' to='/products' > Products </Link>
              <div className="w-full h-10 flex justify-evenly items-center mt-1 mr-1">
                <a href="mailto:jimeneznicolas520@gmail.com" target="_blank" rel="noreferrer">
                  <img className="w-6 mr-2 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" alt="mail" />
                </a>
                <a href="https://www.linkedin.com/in/jimenez-nicolas/" target="_blank" rel="noreferrer">
                  <img className="w-6 mr-2 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" />
                </a>
                <a href="https://github.com/Nico-jimenez16/e-commerse-react" target="_blank" rel="noreferrer" >
                  <svg className='cursor-pointer' height="24" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
                      <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        }
        { logout &&
          <div className='absolute w-48 h-12 border border-t-0 flex justify-start items-center right-2 md:right-24 bg-white z-50'>
            <h2 onClick={ logoutSesion } className='text-md ml-2 text-gray-400 p-2 cursor-pointer'> - Log out </h2>
          </div>
        }
    </>
  )
}

export default HeaderComponent;
