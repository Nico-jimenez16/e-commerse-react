import React, { useContext } from 'react';
import CardContext from '../../context/CardContext'

const CartPage = () => {

  const { products } = useContext(CardContext)
  
  return (
    <>
        <h1>Cart Page</h1>
        {
          products.map((product) => {
            return (
              <div key={ product.id } className='m-4'>
                <h1> { product.title } </h1>
              </div>
            )
          })
        }
    </>
  )
}

export default CartPage;
