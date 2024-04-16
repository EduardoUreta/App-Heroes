import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    // Funcion de cambiar cualquier input de manera DINAMICA
    const onInputChange = ({target}) => {
        // Con esto puedo saber que input cambio,
        // ya que tengo name y su value 
        const {name, value} = target;
        setFormState({
            ...formState,
            // Al name, le doy el nuevo valor
            [name]: value
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}


