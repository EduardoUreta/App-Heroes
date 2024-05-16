import { MemoryRouter } from "react-router-dom";
import { screen, render } from '@testing-library/react'
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

describe('Pruebas en <SearchPage/>', () => {
  
    test('Debe de mostrarse correctamente con valores por defecto ', () => {
      
        render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        );

        screen.debug();
    })
    
})
