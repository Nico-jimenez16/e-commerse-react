import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import CardContext from '../../context/CardContext';

// ? importando component 
import Card from '../../components/pure/Card';
import PurchaseDetails from '../../components/pure/PurchaseDatails';


const CartPage = () => {

  const navigate = useNavigate()
  const { priceTotal , products , remove } = useContext(CardContext)

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
                      remove={remove}
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
          <PurchaseDetails
            priceTotal={priceTotal}
            goProducts={goProducts}
          />
        </div>

    </>
  )
}

export default CartPage;
