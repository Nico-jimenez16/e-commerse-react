import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'

// ? importando context
import contextUser from '../context/UserContext';

export function useServiceUser() {

    const { status , setStatus , users , loggedUser , setLoggedUser } = useContext(contextUser)
    const navigate = useNavigate()


    const goHome = () => {
        navigate('/')
    }

    const logged = (user) => {
        setLoggedUser(user)
        setStatus(true)
        goHome()
    }

    const unlogged = () => {
        setLoggedUser({})
        setStatus(false)
        goHome()
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



