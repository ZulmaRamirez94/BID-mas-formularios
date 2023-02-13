import { useState } from "react";

const useForm = (initialValues={}) => {

    const[datos, setDatos] = useState(initialValues);

    
    const handleInputs = (e) =>{
        setDatos({
            ...datos,
            [e.target.name] : {valor: e.target.value, error:''},
        });
    }

    return [datos, setDatos, handleInputs];

}

export default useForm