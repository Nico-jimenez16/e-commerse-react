import { useEffect , useContext } from 'react';
import Servicios from '../services/data';

// ? importando contexto 
import contextProducts from '../context/ProductsContext';

export function useServiceProducts() {

    const { status , setStatus , products , setProducts , productsFiltered , setProductsFiltered } = useContext(contextProducts)

    const getProducts = async () => {
      const { data } = await Servicios.getProducts()
        setProducts(data)
        setProductsFiltered(data)
        setStatus(true)
    }
    
    // ! llama al servicio para obtener los datos de los productos
    useEffect(() => {
      try {
        getProducts()
      } catch (err) {
        console.error(err)
      }
      // eslint-disable-next-line      
    },[])

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



