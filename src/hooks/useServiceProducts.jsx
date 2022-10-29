import { useState , useEffect } from 'react'
import Servicios from '../data/data'

export function useService() {

    const [status, setStatus] = useState(false)
    const [products , setProducts] = useState([])
    const [productsFiltered , setProductsFiltered] = useState([])

    // ! Estado para las categorias 
    const [categorias, setCategorias] = useState([])
    
    useEffect(() => {
      Servicios.getProducts()
          .then((product) => {
            setProducts(product)
            setProductsFiltered(product)
            setStatus(true)
          })
          .catch(() => { console.error() })

    },[])
    
    // ! Funcion para encontrar un producto con un id  
    const searchProductId = (id) => {
      const response = products.filter((product) => product.id === id )
      return response
    }
      
    
      //////////
    // ! FILTROS //
      ////////

    // const [filterCategorie, setFilterCategorie] = useState([])
    // const [filterBrand, setFilterBrand] = useState([])

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

      /////////////////////////////////////////////////////
    // ! ESTADOS PARA OBTENER TODAS LAS CATEGORIAS Y LAS MARCAS //
      /////////////////////////////////////////////////////

    const [brand, setBrand] = useState([]) 

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
      products, 
      status, 
      productsFiltered,
      categorias,
      brand,
      
      // ? functions 
      filterProductsCategorias,
      filterProductsBrand,
      searchProductId
    }
}



