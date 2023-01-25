import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

// ? importando context
import contextUser from '../context/UserContext';

export function useServiceUser() {

    const { status , setStatus , loggedUser , setLoggedUser } = useContext(contextUser)
    const navigate = useNavigate()


    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('logguedUser')
        if(loggedUserJSON){
          const user = JSON.parse(loggedUserJSON)
          setLoggedUser(user)
          setStatus(true)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const goHome = () => {
        navigate('/')
    }

    const logged = (user) => {
        setLoggedUser(user)
        setStatus(true)
        goHome()
    }

    const unlogged = () => {
        window.localStorage.removeItem('logguedUser');
        setLoggedUser({})
        setStatus(false)
        goHome()
    }

    return {
            status ,
            loggedUser,

            // ? functions 
            logged,
            unlogged
    }
}



