import React , { useState , useEffect } from 'react';

const contextCard = React.createContext()

export function CardContextProvider ({ children }){

    const [products , setProducts] = useState([])
    const [priceFinal , setPriceFinal] = useState(0)
    const [priceTotal , setPriceTotal] = useState(0)


    useEffect(() => {
        const calculateSubTotalPrice = () => {
            products.map(product => {
                return(
                    setPriceTotal( priceTotal + (product.price * product.quantityInCard) )
                )
            })
        }
        
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
        
    // eslint-disable-next-line
    }, [products])

    return (
        
        <contextCard.Provider value={{ priceTotal, setPriceTotal , priceFinal , setPriceFinal ,  products , setProducts }}>
            { children }    
        </contextCard.Provider>
    )
    
}

export default contextCard;