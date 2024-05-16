import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

    // Para obtener el nombre del usuario logueado
    const { user, logout } = useContext(AuthContext);

    // Custom Hook de react-router-dom, 
    // que da acceso a leer la ruta y distintas funciones
    const navigate = useNavigate();
    const onLogout = () => {
        logout(); // Elimina el nombre de usuario al no estar logueado
        navigate('/login', {
            replace: true, //El replace evita que el usuario vuelva a la página anterior
        });
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        className={({isActive}) => `nav-item nav-link (${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link (${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link (${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary '>
                        {user?.name}
                    </span>
                    
                    <button 
                        className='nav-item nav-link btn'
                        onClick={onLogout}
                        >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}