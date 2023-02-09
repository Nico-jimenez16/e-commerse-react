import React, { useContext } from "react";
import ButtonComponent from "./Button";

// impotando Hooks 
import { useCard } from '../../hooks/useCard';
import { useRedirect } from '../../hooks/useRedirect';

import contextCard from "../../context/CardContext";

const PurchaseDetails = () => {

  const { priceFinal, priceTotal } = useContext(contextCard)
  const { clearCart } = useCard()
  const { goToPage } = useRedirect()

  function goProducts(){
    goToPage('/products')
  }

  function goThankYou(){
    clearCart()
    goToPage('/thankyou')
  }

  return (
    <>
      <div className='w-full md:w-2/6 h-auto flex flex-col justify-center items-center border bg-gray-100 p-2 mt-14'>
        <div className='w-full h-16 flex justify-center items-center bg-white mb-2'>
          <h3 className='text-lg font-bold'> thank you for your purchase! </h3>
        </div>
        { priceTotal !== 0 &&
          <>
            <div className='w-full h-auto flex justify-between items-center p-4 line-through'>
              <h3 className='text-md'> subtotal: </h3>
              <h3 className='text-md'> $ { priceTotal } </h3>
            </div>
            <div className='w-full h-auto flex justify-between items-center p-4'>
              <h3 className='text-lg font-bold'> Price Final: </h3>
              <h3 className='text-lg font-bold'> $ { priceFinal } </h3>
            </div>
            <div className='w-full flex justify-center items-center mb-1'>
              <ButtonComponent 
                text='Finalize Purchase' 
                handleFunction={goThankYou} 
              />
            </div>
          </>
        }
        <div className='w-full flex justify-center items-center mt-1'>
          <ButtonComponent 
            text='Continue Shopping' 
            handleFunction={goProducts} 
          />
        </div>
      </div>
    </>
  
  )
}

export default PurchaseDetails;