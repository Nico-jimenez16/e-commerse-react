import React , { useState } from 'react';

const contextProducts = React.createContext()

export function ProductsContextProvider ({ children }){

    const [status, setStatus] = useState(false)
    const [products , setProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([])

    return (
        <contextProducts.Provider value={{ status, products, productsFiltered , setStatus , setProducts, setProductsFiltered }}>
            { children }    
        </contextProducts.Provider>
    )
    
}

export default contextProducts;
