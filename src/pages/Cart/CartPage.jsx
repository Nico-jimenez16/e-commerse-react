import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import CardContext from '../../context/CardContext';

// ? importando component 
import Card from '../../components/pure/Card';

const CartPage = () => {
  const navigate = useNavigate()
  const { priceTotal , products , dellete } = useContext(CardContext)

  function goProducts(){
    navigate('/products')
  }
  return (
    <>
        <div className='w-full h-full block md:flex p-4 border'>
          <div className='w-full md:w-4/6 h-auto flex flex-col p-2 shadow-md md:shadow-none'>
            <h1 className='w-full text-2xl flex border-b-2 border-cyan-300 p-2' >My Cart</h1>
            {products &&
              products.map((product) => {
                return (
                  <Card 
                      product={product}
                      dellete={dellete}
                      key={product.id} 
                  />
                )
              })
            }
            { products.length === 0 &&
              <div className='w-full flex justify-center items-center p-4'>
                <h1 className='text-xl font-normal'>There are no products in the cart !</h1>
              </div>
            }
          </div>
          <div className='w-full md:w-2/6 h-96 flex flex-col justify-center items-center border bg-gray-100 p-2 mt-14'>
            <div className='w-full h-16 flex justify-center items-center bg-white'>
              <h3 className='text-lg font-bold'> thank you for your purchase! </h3>
            </div>
            <div className='w-full h-16 flex justify-between items-center p-4'>
              <h3 className='text-md'> subtotal: </h3>
              <h3 className='text-md'> $ { priceTotal } </h3>
            </div>
            <div className='w-full h-16 flex justify-between items-center p-4'>
              <h3 className='text-lg font-bold'> Total: </h3>
              <h3 className='text-lg font-bold'> $ { priceTotal } </h3>
            </div>
            <div className='w-full h-16 flex justify-center items-center p-2'>
              <div className='w-full h-full bg-cyan-400'>
                <button className='w-full h-full text-lg text-white hover:bg-black'> Finalize Purchase </button>
              </div>
            </div>
            <div className='w-full h-16 flex justify-center items-center p-2'>
              <div className='w-full h-full bg-cyan-400'>
                <button onClick={goProducts} className='w-full h-full text-lg text-white hover:bg-black'> Continue Shopping </button>
              </div>
            </div>
          </div>
        </div>

    </>
  )
}

export default CartPage;
