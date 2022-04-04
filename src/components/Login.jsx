import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import '../styles/Connexion.scss'

function Login() {
    // Input connexion state
    const [emailLogin, setEmailLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')

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
        <div className="connect">
            <div className='connexion'>
                <h1>Connexion</h1>
                <input type="text" placeholder="E-mail" onChange={(e) => { setEmailLogin(e.target.value) }}/>
                <input type="password" placeholder="Mot de passe" onChange={(e) => { setPasswordLogin(e.target.value) }}/>
                <button onClick={login}>Connexion</button>
            </div>
        </div>
    )
}

export default Login