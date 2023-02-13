import React from "react";
import useForm from "../Hooks/useForm";
import './Form.css';

const UserForm = (props) => {

    const initialValues = {
        username: { valor: '', error: '' },
        lastname: { valor: '', error: ''},
        email: { valor: '', error: '' },
        password: { valor: '', error: '' },
        passwordConfirm: { valor: '', error: '' }
    }

    const [datos, setDatos, handleInputs] = useForm(initialValues);

    const { username, email, password, passwordConfirm, lastname } = datos;


    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            username: username.valor,
            lastname: lastname.valor,
            email: email.valor,
            password: password.valor,
            passwordConfirm: passwordConfirm.valor
        };
        console.log("Welcome", newUser);
    };

    const handleInputsConErrorName = (e) => {
        handleInputs(e);

        if ((e.target.type === 'text') && (e.target.value.length < 2)) {
            setDatos({
                ...datos,
                [e.target.name]: { valor: e.target.value, error: 'Firs Name must be at least 2 characters' },
            });
        }
    }

    const handleInputsConErrorLastName = (e) => {
        handleInputs(e);

        if ((e.target.type === 'text') && (e.target.value.length < 2)) {
            setDatos({
                ...datos,
                [e.target.name]: { valor: e.target.value, error: 'Last Name must be at least 2 characters' },
            });
        }
    }

    const handleInputsConErrorEmail = (e) => {
        handleInputs(e);

        if ((e.target.type === 'text') && (e.target.value.length < 5)) {
            setDatos({
                ...datos,
                [e.target.name]: { valor: e.target.value, error: 'Email must be at least 5 characters' },
            });
        }
    }

    const handleInputsConErrorPasword = (e) => {
         handleInputs(e);    
        if ((e.target.type === 'password') && (e.target.value.length < 8))  {
            setDatos({
                ...datos,
                [e.target.name]: { valor: e.target.value, error: 'Password must be at least 8 characters'},
            });
        }
    }

    const handleInputsConErrorPaswordConfirm = (e) => {
        handleInputs(e);    

        if ((e.target.type === 'password') && (e.target.value.length < 8))  {
            setDatos({
                ...datos,
                [e.target.name]: { valor: e.target.value, error: 'Password must be at least 8 characters. Passwords must match.'},
            });
        }
    }



    return (
        <form onSubmit={createUser}>
            <div className="contenedor">
                <label className="labText">First Name: </label>
                <input className="inputStyle" value={username.valor} name="username" type="text" onChange={handleInputsConErrorName} />
            </div>
            { username.error && <p style={{ fontWeight: 'bold',color: 'red',}}>{username.error} </p> }
            <div className="contenedor">
                <label className="labText">Last Name: </label>
                <input className="inputStyle" value={lastname.valor} name="lastname" type="text" onChange={handleInputsConErrorLastName}/>
            </div>
            {lastname.error && <p style={{ fontWeight: 'bold',color: 'red',}}>{lastname.error} </p>}
            <div  className="contenedor">
                <label className="labTextEmail">Email: </label>
                <input className="inputStyleE" value={email.valor} name="email" type="text" onChange={handleInputsConErrorEmail} />
            </div>
            { email.error && <p style={{ fontWeight: 'bold',color: 'red',}}>{email.error} </p>}
            <div className="contenedor">
                <label className="labTextPC">Confirm Password: </label>
                <input className="inputStylePC" value={passwordConfirm.valor} name="passwordConfirm" type="password" onChange={handleInputsConErrorPasword} />
            </div>
            { passwordConfirm.error && <p style={{ fontWeight: 'bold',color: 'red',}}>{passwordConfirm.error} </p> }
             { passwordConfirm.valor === password.valor ? "" : "¡Passwords must match!"  } 
            <div className="contenedor">
                <label className="labText">Password: </label>
                <input className="inputStyle" value={password.valor} name="password" type="password" onChange={handleInputsConErrorPaswordConfirm} />
            </div>
            { password.error && <p style={{ fontWeight: 'bold',color: 'red',}}>{password.error} </p> }
            <input className="inpBtn" type="submit" value="Create User"  />
        </form>
    );
};

export default UserForm;
