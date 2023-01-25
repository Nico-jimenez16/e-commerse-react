import { useState, useEffect, useContext } from 'react';

// ? importando contexto 
import contextProducts from '../context/ProductsContext';

export function useProduct( id ) {
    // STATE 
    const [product, setProduct] = useState({})

    const { status, products } = useContext(contextProducts)

    // ! Funcion para encontrar un producto con un id especifico -DetailPage
    useEffect(() => {
        const searchProductId = () => {
            return products.filter((product) => product.id === id )
        }
        const response  = searchProductId()
        response.map((product) => { return setProduct( product ) })
    
    }, [status, id, products])

    return {
        status,
        product
    }
}



