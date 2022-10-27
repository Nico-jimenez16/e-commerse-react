import React , { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Servicios from '../../data/data';

const DetailsProductPage = () => {

  const { productId } = useParams() ;

  const [product, setProduct] = useState({})

  useEffect(() => {
      Servicios.getProducts()
          .then((products) => {
            const product = products.filter((product) => {
              return product.id === parseInt(productId)
            })
            setProduct(...product)
          })
          .catch(() => console.error())
  }, [])


  return (
    <>
        <h1 className='w-full p-4 flex justify-center' > details page { productId } </h1>
        <h1> { product.title } </h1>
    </>
  )
}

export default DetailsProductPage;
