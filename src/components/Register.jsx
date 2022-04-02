import React from 'react';
import Axios from 'axios'
import '../styles/Registration.scss';
import { useState } from 'react';
import axios from 'axios';

function Register() {
    // Input register state
    const [usernameRegister, setUsernameRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState('')
    const [emailRegister, setEmailRegister] = useState('')
    const [bioRegister, setBioRegister] = useState('')

    // Input connexion state
    const [emailLogin, setEmailLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')

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

    // Fonction de connexion
    const login = () => {
        axios.post('http://localhost:3000/api/auth/login/', {
            email: emailLogin,
            password: passwordLogin,
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div className='register'>
            <div className='registration'>
                <h1>Inscription</h1>
                <label>Nom d'utilisateur</label>
                <input type="text" onChange={(e) => { setUsernameRegister(e.target.value) }} />
                <label>E-mail</label>
                <input type="text" onChange={(e) => { setEmailRegister(e.target.value) }} />
                <label>Biographie</label>
                <input type="text" onChange={(e) => { setBioRegister(e.target.value) }} />
                <label>Mot de passe</label>
                <input type="password" onChange={(e) => { setPasswordRegister(e.target.value) }} />
                <button onClick={register}>Inscription</button>
            </div>
            <div className='login'>
                <h1>Connexion</h1>
                <input type="text" placeholder="E-mail" onChange={(e) => { setEmailLogin(e.target.value) }}/>
                <input type="password" placeholder="Mot de passe" onChange={(e) => { setPasswordLogin(e.target.value) }}/>
                <button onClick={login}>Connexion</button>
            </div>
        </div>
    )
}

export default Register