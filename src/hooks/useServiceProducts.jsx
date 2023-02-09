import { useContext, useCallback, useMemo, useState } from 'react';

// ? importando contexto 
import contextProducts from '../context/ProductsContext';

export function useServiceProducts(id) {

    // STATE 
    const [product, setProduct] = useState({})

    // CONTEXTO
    const { status, products } = useContext(contextProducts)

    // ! Funcion para encontrar los producto de un categoria especifica - categoriaProductPage - LineUp
    const searchProductCategorie = useCallback((categorie) => {
      return products.filter((product) => product.categoria.toLowerCase() === categorie.toLowerCase() )
    },[products])


    // ! Funcion para encontrar un producto con un id especifico - DetailPage
    useMemo(() => {
      if(status) {
          const product = products.find( product => { return product.id === id })
          return setProduct(product)
      }

    // eslint-disable-next-line
    }, [status, id])

    return { 
      status,
      product,

      // ? function 
      searchProductCategorie
    }
}



