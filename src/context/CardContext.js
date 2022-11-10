import React , { useState , useEffect } from 'react';

const contextCard = React.createContext()

export function CardContextProvider ({ children }){

    const [products , setProducts] = useState([])
    const [priceTotal , setPriceTotal] = useState(0)


    useEffect(() => {
        const calculateTotalPrice = () => {
            products.map(product => {
                return(
                    setPriceTotal( priceTotal + (product.price * product.quantityInCard ) )
                )
            })
        }
        
        calculateTotalPrice()
        
    // eslint-disable-next-line
    }, [products])

    return (
        
        <contextCard.Provider value={{priceTotal , setPriceTotal , products , setProducts}}>
            { children }    
        </contextCard.Provider>
    )
    
}

export default contextCard;