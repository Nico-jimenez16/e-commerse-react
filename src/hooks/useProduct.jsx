import { useContext, useState , useEffect } from 'react';
import Servicios from '../services/data';

// ? importando contexto 
import contextProducts from '../context/ProductsContext';

export function useProduct(id) {

    const { status , products } = useContext(contextProducts)
    const [product, setProduct] = useState({})


    // ! Funcion para encontrar un producto con un id especifico -DetailPage
    const searchProductId = () => {
        return products.filter((product) => product.id === id )
    }

    useEffect(() => {
      
        const response  = searchProductId()
        response.map((product) => { return setProduct(product) } )
    
      // eslint-disable-next-line
    }, [])

    return {
        status,
        product,
        searchProductId
    }
}



