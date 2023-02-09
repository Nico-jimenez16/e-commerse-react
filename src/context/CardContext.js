import React , { useState } from 'react';

const contextCard = React.createContext()

export function CardContextProvider ({ children }){

    // ! estados globales para los productos en el carrito 
    const [products , setProducts] = useState([])
    const [priceFinal , setPriceFinal] = useState(0)
    const [priceTotal , setPriceTotal] = useState(0)
    
    return (
        
        <contextCard.Provider value={{ products , setProducts , priceFinal , setPriceFinal , priceTotal, setPriceTotal }}>
            { children }    
        </contextCard.Provider>
    )
    
}

export default contextCard;