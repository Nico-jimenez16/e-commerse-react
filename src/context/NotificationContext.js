import React , { useEffect, useState } from 'react';

const contextNotification = React.createContext()

export function NotificationContextProvider ({ children }){

    // ! estados globales para los productos en el carrito 
    const [showNotification , setShowNotification] = useState(false)
    const [type , setType] = useState()
    const [message , setMessage] = useState()

    useEffect(() => {
      const time = setTimeout(() => {
        setShowNotification(false)
      }, 3000)
    
      return () => clearTimeout(time)
    }, [showNotification])

    const notificationHandler = (args) =>{
        setType(args.type)
        setMessage(args.message)
        setShowNotification(true)
    }

    return (
        
        <contextNotification.Provider value={{ notificationHandler , showNotification , type , message }}>
            { children }    
        </contextNotification.Provider>
    )
    
}

export default contextNotification;