import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar} from "../../../src/ui/components/Navbar";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <NavBar/>', () => {

    const contextValue = {
        logged: true,
        user : {
            name: "Edu",
            id: '1'
        },
        logout: jest.fn(),
    };

    beforeEach(() => jest.clearAllMocks());
  
    test('Debe de mostrar el nombre del usuario loggeado ', () => {
      
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // screen.debug();
        expect(screen.getByText('Edu')).toBeTruthy();
    });

    test('Debe de llamar el logout y el navigate cuando se hace click en el botón ', () => {
      
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {"replace": true});
    });    
    
})
