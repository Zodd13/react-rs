import React from 'react';
import '../styles/Registration.scss';
import { useState } from 'react';
import axios from 'axios';

function Register() {
    // Input register state
    const [usernameRegister, setUsernameRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState('')
    const [emailRegister, setEmailRegister] = useState('')
    const [bioRegister, setBioRegister] = useState('')

    // Fonction de création de compte
    const register = () => {
        axios.post('http://localhost:3000/api/auth/signup/', {
            username: usernameRegister,
            email: emailRegister,
            password: passwordRegister,
            bio: bioRegister
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div className='register'>
            <div className='registration'>
                <h1>Inscription</h1>
                <form className='registration' action="">
                    <label>Nom d'utilisateur</label>
                    <input type="text" onChange={(e) => { setUsernameRegister(e.target.value) }} />
                    <label>E-mail</label>
                    <input type="text" onChange={(e) => { setEmailRegister(e.target.value) }} />
                    <label>Biographie</label>
                    <input type="text" onChange={(e) => { setBioRegister(e.target.value) }} />
                    <label>Mot de passe</label>
                    <input type="password" autoComplete='true' onChange={(e) => { setPasswordRegister(e.target.value) }} />
                    <button onClick={register}>Inscription</button>
                </form>
            </div>
        </div>
    )
}

export default Register