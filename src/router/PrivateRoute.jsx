import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({children}) => {

    const { logged } = useContext(AuthContext);

    // Para conocer que se hizo en la ultima solicitud
    const { pathname, search } = useLocation(); 

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);

  return (logged)
    ? children
    : <Navigate to="/login"/>
}

