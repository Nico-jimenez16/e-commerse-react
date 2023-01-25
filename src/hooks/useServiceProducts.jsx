import { useContext } from 'react';

// ? importando contexto 
import contextProducts from '../context/ProductsContext';

export function useServiceProducts() {

    const { status, products, productsFiltered } = useContext(contextProducts)

    // ! Funcion para encontrar los producto de un categoria especifica - categoriaProductPage - LineUp
    const searchProductCategorie = (categorie) => {
      return products.filter((product) => product.categoria.toLowerCase() === categorie.toLowerCase() )
    }

    return {
      products, 
      status, 
      productsFiltered,
      
      // ? functions 
      searchProductCategorie
    }
}



