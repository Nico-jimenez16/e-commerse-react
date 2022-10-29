import { useState , useEffect } from 'react';
import Servicios from '../data/data';

export function useService() {

    const [status, setStatus] = useState(false)
    const [filtered, setFiltered] = useState(false)
    const [products , setProducts] = useState([])
    const [productsFiltered , setProductsFiltered] = useState([])
    console.log("🚀 ~ file: useServiceProducts.jsx ~ line 10 ~ useService ~ productsFiltered", productsFiltered)

    // ! Funcion para retornar los products 
    const getProducts = () => {
      return productsFiltered
    }
    
    // ! llama al servicio para obtener los datos de los productos 
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
      return products.filter((product) => product.id === id )
    }
      
    
      //////////
    // ! FILTROS //
      ////////

    const filterProductsCategorias = (categoria) => {
      const newFilter = products.filter((product) =>
        product.categoria.toLowerCase() === categoria.toLowerCase()
      )
      setProductsFiltered(newFilter)
      setFiltered(true)
    }

    const filterProductsBrand = (brand) => {
      const newFilter = products.filter((product) =>  
        product.brand.toLowerCase() === brand.toLowerCase()
      )
      setProductsFiltered(newFilter)
      setFiltered(true)
    }

      /////////////////////////////////////////////////////
    // ! ESTADOS PARA OBTENER TODAS LAS CATEGORIAS Y LAS MARCAS //
      /////////////////////////////////////////////////////
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


    return {
      products, 
      status, 
      productsFiltered,
      categorias,
      brand,
      filtered,
      
      // ? functions 
      filterProductsCategorias,
      filterProductsBrand,
      searchProductId,
      getProducts
    }
}



