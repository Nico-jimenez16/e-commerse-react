import { useState , useEffect } from 'react';
import Servicios from '../services/data'

export function useProduct( id ) {

    const [products, setProducts] = useState([])
    const [status, setStatus] = useState(false)
    const [product, setProduct] = useState({})

    const getProducts = async () => {
        const { data } = await Servicios.getProducts()
            setProducts(data)
            setStatus(true)
    }

    // ! llama al servicio para obtener los datos de los productos
    useEffect(() => {
        try {
            getProducts()
          } catch (err) {
            console.error(err)
          }    
      },[id])

    // ! Funcion para encontrar un producto con un id especifico -DetailPage
    const searchProductId = () => {
        return products.filter((product) => product.id === id )
    }

    useEffect(() => {
      
        const response  = searchProductId()
        response.map((product) => { return setProduct( product ) })
    
    // eslint-disable-next-line
    }, [status])

    return {
        status,
        product,
        searchProductId
    }
}



