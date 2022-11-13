import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCard } from '../../hooks/useCardProducts';

// ? importando component 
import Card from '../../components/pure/Card';
import PurchaseDetails from '../../components/pure/PurchaseDatails';


const CartPage = () => {

  const navigate = useNavigate()
  const { sumProduct , resProduct , remove , priceTotal , priceFinal , products } = useCard()

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
                      sumar={sumProduct}
                      restar={resProduct}
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
            priceFinal={priceFinal}
            goProducts={goProducts}
          />
        </div>

    </>
  )
}

export default CartPage;
