import React , { useState } from 'react';

const contextCard = React.createContext()

export function CardContextProvider ({ children }){

    const [count, setCount] = useState(1)
    const [products , setProducts] = useState([])
    
    const addCard = (product) => {
        const tempProduct = [...products]
        tempProduct.push(product)
        setProducts(tempProduct)
    } 

    return (
        
        <contextCard.Provider value={{ count , setCount, products , addCard }}>
            { children }    
        </contextCard.Provider>
    )
    
}

export default contextCard;