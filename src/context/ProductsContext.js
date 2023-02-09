import React , { useState, useEffect } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import {getProducts} from '../services/data'
=======
import Servicios from '../services/data'
>>>>>>> e0d5a6b27d4a7a60888a452b524c0cfa394eb522
=======
import { getProducts } from '../services/data';
>>>>>>> parent of e0d5a6b (Revert "nejoras de codigo, agregue button component")

const contextProducts = React.createContext()

export function ProductsContextProvider ({ children }){

    const [status, setStatus] = useState(false)
    const [products , setProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([])


    // ! llama al servicio para obtener los datos de los productos
    useEffect(() => {
        try {
          const handleObtainProducts = async () => {
            const { data } = await getProducts()
              setProducts(data)
              setProductsFiltered(data)
              setStatus(true)
          }
          handleObtainProducts()
        } catch (err) {
          console.error(err)
        }
      },[])


    return (
        <contextProducts.Provider value={{ status, products, productsFiltered , setStatus , setProducts, setProductsFiltered }}>
            { children }    
        </contextProducts.Provider>
    )
    
}

export default contextProducts;
