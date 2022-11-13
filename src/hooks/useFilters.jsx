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
    // eslint-disable-next-line
    const [indexCategorieApplied, setFiltercategorieApplied] = useState(null)
    // eslint-disable-next-line
    const [indexBrandApplied, setFilterBrandApplied] = useState(null)

    const [categorieFiltered, setCategorieFiltered] = useState('')
    const [brandFiltered, setBrandFiltered] = useState('')

    const filterProductsCategorias = (categoria) => {
      setCategorieFiltered(categoria)
      if( categorieFiltered === categoria ){
        setProductsFiltered(products)
        setCategorieFiltered('')
      } 
      else {
        const newFilter = products.filter((product) =>
          product.categoria.toLowerCase() === categoria.toLowerCase()
        )
        setProductsFiltered(newFilter)
      }
    }

    const filterProductsBrand = (brand) => {
      setBrandFiltered(brand)
      if( brandFiltered === brand ){
        setProductsFiltered(products)
        setBrandFiltered('')
        console.log(categorieFiltered)
      }else {
        const newFilter = productsFiltered.filter((product) =>
          product.brand.toLowerCase() === brand.toLowerCase()
        )
        setProductsFiltered(newFilter)
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



