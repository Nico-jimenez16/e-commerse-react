import React , { useState } from 'react';

const contextUser = React.createContext()

export function UserContextProvider ({ children }){

    const [status, setStatus] = useState(false)
    const [loggedUser, setLoggedUser] = useState({})


    return (
        <contextUser.Provider value={{ status , setStatus , loggedUser , setLoggedUser }}>
            { children }    
        </contextUser.Provider>
    )
    
}

export default contextUser;
