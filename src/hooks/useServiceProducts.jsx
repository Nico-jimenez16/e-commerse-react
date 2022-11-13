import { useEffect , useContext } from 'react';
import Servicios from '../services/data';

// ? importando contexto 
import contextProducts from '../context/ProductsContext';

export function useServiceProducts() {

    const { status , setStatus , products , setProducts , productsFiltered , setProductsFiltered } = useContext(contextProducts)

    
    // ! llama al servicio para obtener los datos de los productos
    useEffect(() => {
      Servicios.getProducts()
          .then((product) => {
            setProducts(product)
            setProductsFiltered(product)
            setStatus(true)
          })
          .catch(() => { console.error() })
          
    },[setStatus, setProducts, setProductsFiltered])

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



