import { useState , useContext } from 'react';
import contextCard  from '../context/CardContext.js'

export function useCard() {

    const { priceTotal, setPriceTotal , products , setProducts } = useContext(contextCard)

    const [cantProduct, setCantProduct] = useState(1)

    const sumProduct = (id) => {
        const product = products.find(product => product.id === id )
        product.quantityInCard = product.quantityInCard + 1
    }


    const addCard = (product , quantity) => {
        const cardProduct = {
            ...product,
            "quantityInCard": quantity
            
        }
        const tempProduct = [ ...products ]
        tempProduct.push(cardProduct)
        setProducts(tempProduct)
    }

    const remove = (id) => {
        let Indexprod = products.findIndex((prod) => prod.id === id)
        let product = products.find((prod) => prod.id === id)
        products.splice(Indexprod , 1)
        setPriceTotal(priceTotal - (product.price * product.quantityInCard ) )
    }

    return {
        cantProduct,
        setCantProduct,
        products,
        priceTotal,

        // ? funciones 
        addCard,
        remove,
        sumProduct
    }
}



