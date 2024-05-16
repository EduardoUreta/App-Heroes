import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { render, screen } from "@testing-library/react";

describe('Pruebas en <PrivateRoute/>', () => {
  
    test('debe de mostrar el children si está autenticado ', () => {
      
        Storage.prototype.setItem = jest.fn();
        
        const contextValue = {
            logged: true,
            user: {
                id: '1',
                name: "edu"
            }
        }

        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/search?q=batman");
    });
    
    
})
