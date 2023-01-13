import { useState , useEffect , useContext } from 'react';

// ? importando contexto 
import contextProducts from '../context/ProductsContext';

export function useFilterProducts() {

    const { products , productsFiltered , setProductsFiltered } = useContext(contextProducts)
    const [categorias, setCategorias] = useState([])
    const [brand, setBrand] = useState([])

        // ! Filtra las categorias que existen en los profuctos
        useEffect(() =>  {

          const getCategories = () => {
            const categories = products.map((product) => {
              return (
                product.categoria.toLowerCase()
              )
            })
            const uniques = new Set(categories)
            let result = [...uniques]
            setCategorias(result)
          }
    
          const getBrand = () => {
            const brand = productsFiltered.map((product) => {
              return (
                product.brand.toLowerCase()
              )
            })
            const uniques = new Set(brand);
            let result = [...uniques];
            setBrand(result)
          }
    
          getCategories()
          getBrand()
        
        } , [products, productsFiltered])
      
      //////////
    // ! FILTROS //
      ////////

    const [categorieFiltered, setCategorieFiltered] = useState('')
    const [brandFiltered, setBrandFiltered] = useState('')
    
    const filterProductsCategorias = (categoria) => {
      const match = categorieFiltered.toLowerCase() === categoria.toLowerCase()
      
      if( !match || match === undefined ){
        const addFilter = (categoria) => {
          setCategorieFiltered(categoria)
          const newFilter = products.filter((product) =>
            product.categoria.toLowerCase() === categoria.toLowerCase()
          )
          setProductsFiltered(newFilter)
        }
        addFilter(categoria)
      }else{
        setProductsFiltered(products)
        setCategorieFiltered('')
      }
    }

    const filterProductsBrand = (brand) => {
      setBrandFiltered(brand)
      const obj = productsFiltered.find((c) => c.categoria )
      const match =  brandFiltered.toLowerCase() === brand.toLowerCase()

      if( match && categorieFiltered === ''){
        filterProductsCategorias(obj.categoria)
        setBrandFiltered('')
        setCategorieFiltered('')
      }
      else {
        const newFilter = productsFiltered.filter((product) =>
          product.brand.toLowerCase() === brand.toLowerCase()
        )
        setProductsFiltered(newFilter)
      }
    }


    return { 
      categorias,
      brand,
      
      // ? functions 
      filterProductsCategorias,
      filterProductsBrand,
    }
}



