import { useState , useEffect } from 'react'
import Servicios from '../data/data'

export function useService() {

    const [status, setStatus] = useState(true)
    const [products , setProducts] = useState([])
    const [productsFiltered , setProductsFiltered] = useState([])
    
    useEffect(() => {
      Servicios.getProducts()
          .then((product) => {
            setProducts(product)
            setProductsFiltered(product)
            setStatus(false)
          })
          .catch(() => { console.error() })
    },[])
      
      //////////
    // FILTROS //
      ////////
    const filterProductsCategorias = (categoria) => {
      const newFilter = products.filter((product) =>  
        product.categoria.toLowerCase() === categoria.toLowerCase()
      )
      setProductsFiltered(newFilter)
    }

    const filterProductsBrand = (brand) => {
      const newFilter = products.filter((product) =>  
        product.brand.toLowerCase() === brand.toLowerCase()
      )
      setProductsFiltered(newFilter)
    }

    // ESTADOS PARA OBTENER TODAS LAS CATEGORIAS Y LAS MARCAS 
    const [brand, setBrand] = useState([]) 
    const [categorias, setCategorias] = useState([])

    useEffect(() =>  {

      const getCategories = () => {
        const categories = productsFiltered.map((product) => {
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
      
      getBrand()
      getCategories()
    } , [productsFiltered])

    return {
      products, 
      status, 
      productsFiltered,
      categorias,
      brand,
      
      // ? functions 
      filterProductsCategorias,
      filterProductsBrand
    }
}



