import React from "react";

const PurchaseDetails = ({ priceTotal , priceFinal , goProducts}) => {

    return (
      <>
        <div className='w-full md:w-2/6 h-96 flex flex-col justify-center items-center border bg-gray-100 p-2 mt-14'>
          <div className='w-full h-16 flex justify-center items-center bg-white'>
            <h3 className='text-lg font-bold'> thank you for your purchase! </h3>
          </div>
          { priceTotal !== 0 &&
            <>
              <div className='w-full h-16 flex justify-between items-center p-4 line-through'>
                <h3 className='text-md'> subtotal: </h3>
                <h3 className='text-md'> $ { priceTotal } </h3>
              </div>
              <div className='w-full h-16 flex justify-between items-center p-4'>
                <h3 className='text-lg font-bold'> Price Final: </h3>
                <h3 className='text-lg font-bold'> $ { priceFinal } </h3>
              </div>
              <div className='w-full h-16 flex justify-center items-center p-2'>
                <div className='w-full h-full bg-cyan-400'>
                  <button className='w-full h-full text-lg text-white hover:bg-black'> Finalize Purchase </button>
                </div>
              </div>
            </>
          }
          <div className='w-full h-16 flex justify-center items-center p-2'>
            <div className='w-full h-full bg-cyan-400'>
              <button onClick={goProducts} className='w-full h-full text-lg text-white hover:bg-black'> Continue Shopping </button>
            </div>
          </div>
        </div>
      </>
  
    )
  }

  export default PurchaseDetails;