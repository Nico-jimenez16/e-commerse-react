import { useEffect , useContext } from 'react';
import Servicios from '../services/data';

// ? importando context
import contextUser from '../context/UserContext.js';

export function useServiceUser() {

    const { status , setStatus , users , setUsers , loggedUser , setLoggedUser } = useContext(contextUser)
    
    useEffect(() => {
        Servicios.loginUser()
            .then((user) => {
                setUsers(user)
                setStatus(true)
            })
            .catch(() => { console.error() })
    },[setStatus , setUsers])

    const logged = (user) => {
        setLoggedUser(user)
        setStatus(true)
    }

    const unlogged = () => {
        setLoggedUser({})
        setStatus(false)
    }

    return {
            users,
            status ,
            loggedUser,

            // ? functions 
            logged,
            unlogged
    }
}



