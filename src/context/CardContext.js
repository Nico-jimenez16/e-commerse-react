import React , { useState , useEffect } from 'react';

const contextCard = React.createContext()

export function CardContextProvider ({ children }){

    const [count, setCount] = useState(1)
    const [products , setProducts] = useState([])
    const [priceTotal , setPriceTotal] = useState(0)

    const addCard = (product) => {
        const tempProduct = [...products]
        tempProduct.push(product)
        setProducts(tempProduct)
    }

    const remove = (id) => {
        let Indexprod = products.findIndex((prod) => prod.id === id)
        let product = products.find((prod) => prod.id === id)
        products.splice(Indexprod , 1)
        setPriceTotal(priceTotal - product.price )
    }

    useEffect(() => {
        const calculateTotalPrice = () => {
            products.map(product => {
                return(
                    setPriceTotal( priceTotal + product.price )
                )
            })
        }
        
        calculateTotalPrice()
        
    // eslint-disable-next-line
    }, [products])

    return (
        
        <contextCard.Provider value={{priceTotal , count , setCount, products , addCard , remove }}>
            { children }    
        </contextCard.Provider>
    )
    
}

export default contextCard;