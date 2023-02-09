import { useContext, useEffect } from 'react';
import { useRedirect } from './useRedirect'

// ? importando context
import contextUser from '../context/UserContext';

export function useServiceUser() {

    const { goToPage } = useRedirect()
    const { status , setStatus , loggedUser , setLoggedUser } = useContext(contextUser)


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
        goToPage('/')
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



