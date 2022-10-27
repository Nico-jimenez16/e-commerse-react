import { useState , useEffect } from 'react'
import Servicios from '../data/data'

export function useServiceUser() {

    const [status, setStatus] = useState(false)
    const [users , setUsers] = useState([])
    const [loggedUser, setLoggedUser] = useState({})
    
    useEffect(() => {
        Servicios.getUsers()
            .then((user) => {
                setUsers(user)
            })
            .catch(() => { console.error() })
    },[])

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



