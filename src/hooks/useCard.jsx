import { useContext, useState } from 'react';
import contextCard  from '../context/CardContext.js';

import { useRedirect } from './useRedirect'

export function useCard() {

    const { goToPage } = useRedirect()
    const { priceTotal, setPriceTotal , priceFinal , setPriceFinal , products , setProducts } = useContext(contextCard)

    const [cantProduct, setCantProduct] = useState(1)
    const sumarCantidad = () => {
        setCantProduct(cantProduct => cantProduct + 1)
    }
    const restarCantidad = () => {
        if(cantProduct > 1) {
            setCantProduct(cantProduct => cantProduct - 1)
        }
    }

    // ! Funcion para calcular el precio sub total de la compra 
    const calculateSubTotalPrice = () => {
        let countPriceSubTotal = 0
        products.map(product => {
            countPriceSubTotal += product.price * product.quantityInCard
            return(
                setPriceTotal( countPriceSubTotal )
            )
        })
    }

    // ! Funcion para calcular el precio total final de la compra -- Aqui se tiene en cuanta los descuentos
    const calculateTotalPrice = () => {
        let countPrice = 0 
        products.map(product => {
            if(product.discount !== 0){
                countPrice += ( (product.price - (product.price * product.discount)/ 100) * product.quantityInCard )
            }else{
                countPrice += (product.price * product.quantityInCard)
            }
            return(
                setPriceFinal( countPrice )
            )
        })
    }
    calculateSubTotalPrice()
    calculateTotalPrice()
    

    // ! Funcion que agrega un producto en el Carrito
    const addCard = (product) => {
        const matching = products.find( p => p.id === product.id )
        const notMatching = products.filter( p => p.id !== product.id )
        if( matching ){
            const cardProduct = {
                ...matching,
                "quantityInCard": matching.quantityInCard + cantProduct
                
            }
            const tempProduct = [ ...notMatching ]
            tempProduct.push( cardProduct )
            setProducts( tempProduct )
        }else {
            const cardProduct = {
                ...product,
                "quantityInCard": cantProduct
                
            }
            const tempProduct = [ ...products ]
            tempProduct.push( cardProduct)
            setProducts( tempProduct )
        }
        goToPage(-1)
    }

    // ! Funcion que elimina un producto del Carrito
    const removeProduct = (id) => {
        let Indexprod = products.findIndex((prod) => prod.id === id)
        let product = products.find((prod) => prod.id === id)
        products.splice(Indexprod , 1)
        if(product.discount !== 0){
            setPriceTotal(priceTotal - ( product.price * product.quantityInCard ))
            setPriceFinal(priceFinal - (product.price - (product.price * product.discount)/ 100) * product.quantityInCard)   
        }else {
            setPriceTotal(priceTotal - (product.price * product.quantityInCard))
            setPriceFinal(priceFinal - (product.price * product.quantityInCard))
        }
    }
    
    // ! Funcion que suma en 1 la cantidad de un producto en el Carrito 
    const sumarCantProductInCart = (id) => {
        const product = products.find(product => product.id === id )
        product.quantityInCard = product.quantityInCard + 1
        calculateSubTotalPrice()
        calculateTotalPrice()
    }

    // ! Funcion que resta en 1 la cantidad de un producto en el Carrito
    const restarCantProductInCart = (id) => {
        const product = products.find(product => product.id === id )
        if(product.quantityInCard > 1){
            product.quantityInCard = product.quantityInCard - 1
            calculateSubTotalPrice()
        calculateTotalPrice()
        }else{
            removeProduct(id)
            calculateSubTotalPrice()
            calculateTotalPrice()
        }
    }

    const clearCart = () => {
        setProducts([])
        setPriceTotal(0)
        setPriceFinal(0)
    }

    return {
        products,
        priceTotal,
        priceFinal,
        cantProduct,

        // ? funciones 
        addCard,
        removeProduct,
        sumarCantProductInCart,
        restarCantProductInCart,
        clearCart,
        sumarCantidad,
        restarCantidad
    }
}



