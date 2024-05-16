import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";

describe('Pruebas en <AppRouter/>', () => {
  
    test('Debe de mostrar el login si no está autenticado', () => {
      
        const contextValue = {
            logged: false,
        };
        
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>

        );

        // expect(screen.getByText('Login')).toBeTruthy();
        screen.debug();
    })
    
})
