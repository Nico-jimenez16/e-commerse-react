import { useNavigate } from 'react-router-dom';

export function useRedirect () {

    const navigate = useNavigate()

    const goToPage = (ruta) => {
        navigate(ruta)
    }

    return {
        goToPage
    }
}