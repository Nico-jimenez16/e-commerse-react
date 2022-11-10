import { useState , useEffect , useContext } from 'react';

// ? importando contexto 
import contextProducts from '../context/ProductsContext';

export function useFilterProducts() {

    const { products , productsFiltered , setProductsFiltered } = useContext(contextProducts)
    const [categorias, setCategorias] = useState([])
    const [brand, setBrand] = useState([])
      
      //////////
    // ! FILTROS //
      ////////

    // ? estados para los filtros aplicados 
    const [indexCategorieApplied, setFiltercategorieApplied] = useState(null)
    const [indexBrandApplied, setFilterBrandApplied] = useState(null)

    const filterProductsCategorias = (categoria) => {
      const index = categorias.indexOf(categoria)
      if( index === indexCategorieApplied ){
        setProductsFiltered(products)
        setFiltercategorieApplied(null)
        setFilterBrandApplied(null)
      } 
      else {
        const newFilter = products.filter((product) =>
          product.categoria.toLowerCase() === categoria.toLowerCase()
        )
          setProductsFiltered(newFilter)
          setFiltercategorieApplied(index)
          setFilterBrandApplied(null)
      }
    }

    const filterProductsBrand = (brand) => {
      const index = brand.indexOf(brand)
      if( index === indexBrandApplied ){
        setProductsFiltered(products)
        setFiltercategorieApplied([])
        setFilterBrandApplied([])
      }else {
        const newFilter = productsFiltered.filter((product) =>
          product.brand.toLowerCase() === brand.toLowerCase()
        )
        setProductsFiltered(newFilter)
        setFilterBrandApplied(index)
      }
    }

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


    return { 
      categorias,
      brand,
      indexCategorieApplied,
      indexBrandApplied,
      
      // ? functions 
      filterProductsCategorias,
      filterProductsBrand,
    }
}



