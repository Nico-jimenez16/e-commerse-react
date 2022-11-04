import { useState , useEffect , useContext } from 'react';
import Servicios from '../data/data';

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
    

    // ! Funcion para encontrar un producto con un id especifico -DetailPage
    
    const searchProductId = (id) => {
      return products.filter((product) => product.id === id )
    }

    // ! Funcion para encontrar los producto de un categoria especifica - categoriaProductPage - LineUp
    const searchProductCategorie = (categorie) => {
      return products.filter((product) => product.categoria.toLowerCase() === categorie.toLowerCase() )
    }
      
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
      indexCategorieApplied,
      indexBrandApplied,
      
      // ? functions 
      filterProductsCategorias,
      filterProductsBrand,
      searchProductId,
      searchProductCategorie
    }
}



