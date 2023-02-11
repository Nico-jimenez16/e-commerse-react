import { useContext, useCallback, useEffect, useState } from 'react';
import { getProducts } from '../services/data';

// ? importando contexto 
import contextProducts from '../context/ProductsContext';
import contextNotification from '../context/NotificationContext.js'

export function useServiceProducts(id) {
  // STATE 
  const [product, setProduct] = useState({});

  // CONTEXTO
  const { status, setStatus, products, setProducts, productsFiltered, setProductsFiltered } = useContext(contextProducts)
  const { notify } = useContext(contextNotification)

  // ! llama al servicio para obtener los datos de los productos
  const fetchDataProducts = useCallback(async () => {
    try {
      const { data } = await getProducts()
      setProducts(data);
      setProductsFiltered(data);
    } catch (err) {
      notify({ type:'error', message:`${err.message}` });
    } finally {
      setStatus(true);
    }

  // eslint-disable-next-line
  }, [setProducts, setProductsFiltered, setStatus]);

  // ! Funcion para encontrar los producto de un categoria especifica - categoriaProductPage - LineUp
  const searchProductId = useCallback(() => {
    console.log('Ejecutando - searchProductId')
    if(status){
      const product = products.find((product) => product.id === id )
      setProduct(product)
    }
  // eslint-disable-next-line
  },[status, id])

  useEffect(() => {
    fetchDataProducts()
  // eslint-disable-next-line
  }, [fetchDataProducts]);
  
  useEffect(() => {
    searchProductId()
  }, [searchProductId]);

  // ! Funcion para encontrar los producto de un categoria especifica - categoriaProductPage - LineUp
  const searchProductCategorie = useCallback((categorie) => {
    return products.filter((product) => product.categoria.toLowerCase() === categorie.toLowerCase() )
  },[products])

  return { status, productsFiltered,product,
    // ? function 
    searchProductCategorie
  }
}