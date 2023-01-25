import React , { useState, useEffect } from 'react';
import Servicios from '../services/data'

const contextProducts = React.createContext()

export function ProductsContextProvider ({ children }){

    const [status, setStatus] = useState(false)
    const [products , setProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([])


    // ! llama al servicio para obtener los datos de los productos
    useEffect(() => {
      console.log('Context LLamada a API')
        try {
          const getProducts = async () => {
            const { data } = await Servicios.getProducts()
              setProducts(data)
              setProductsFiltered(data)
              setStatus(true)
          }
          getProducts()
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
