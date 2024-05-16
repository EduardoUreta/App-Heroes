import { render, screen} from '@testing-library/react'
import { PublicRoute } from '../../src/router/PublicRoute'
import { AuthContext } from '../../src/auth/context/AuthContext'
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Pruebas en <PublicRoute/>', () => {
  
    test('debe de mostrar el children si no está autenticado ', () => {

        const contextValue = {
            logged: false,
        }
      
        render(
            <AuthContext.Provider value={contextValue} >
                <PublicRoute>
                    <h1>Ruta Pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        // screen.debug();
        expect(screen.getByText('Ruta Pública')).toBeTruthy();
    });

    test("Debe de navegar si está autenticado", () => {

        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'edu'
            }
        }
      
        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta Pública</h1>
                            </PublicRoute>
                         }/>
                        <Route path='marvel' element={ <h1>Pagina de marvel</h1>}/>
                    </Routes>
                    
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // screen.debug();
        expect(screen.getByText('Pagina de marvel')).toBeTruthy();

    });
    
})
