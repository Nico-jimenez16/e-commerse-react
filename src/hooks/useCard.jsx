import { useState , useContext } from 'react';
import contextCard  from '../context/CardContext.js';

export function useCard() {

    const { priceTotal, setPriceTotal , priceFinal , setPriceFinal , products , setProducts } = useContext(contextCard)
    const [cantProduct, setCantProduct] = useState(1)

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

    
    // ! Funcion que suma en 1 la cantidad de un producto en el Carrito 
    const sumarProduct = (id) => {
        const product = products.find(product => product.id === id )
        product.quantityInCard = product.quantityInCard + 1
        calculateSubTotalPrice()
        calculateTotalPrice()
    }

    // ! Funcion que resta en 1 la cantidad de un producto en el Carrito
    const restarProduct = (id) => {
        const product = products.find(product => product.id === id )
        if(product.quantityInCard > 1){
            product.quantityInCard = product.quantityInCard - 1
        }else{
            remove(id)
        }
        calculateSubTotalPrice()
        calculateTotalPrice()
    }

    // ! Funcion que agrega un producto en el Carrito
    const addCard = (product , quantity) => {
        const matching = products.find( p => p.id === product.id )
        const notMatching = products.filter( p => p.id !== product.id )
        if( matching ){
            const cardProduct = {
                ...matching,
                "quantityInCard": matching.quantityInCard + quantity
                
            }
            const tempProduct = [ ...notMatching ]
            tempProduct.push( cardProduct )
            setProducts( tempProduct )
        }else {
            const cardProduct = {
                ...product,
                "quantityInCard": quantity
                
            }
            const tempProduct = [ ...products ]
            tempProduct.push( cardProduct)
            setProducts( tempProduct )
        }
    }

    // ! Funcion que elimina un producto del Carrito
    const remove = (id) => {
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

    const clearCart = () => {
        setProducts([])
        setPriceTotal(0)
        setPriceFinal(0)
    }

    return {
        cantProduct,
        setCantProduct,
        products,
        priceTotal,
        priceFinal,

        // ? funciones 
        addCard,
        remove,
        sumarProduct,
        restarProduct,
        clearCart
    }
}



