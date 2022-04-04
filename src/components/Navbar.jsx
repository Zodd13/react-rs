import React from 'react'
import '../styles/Navbar.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import Auth from '../contexts/Auth';

export default function Navbar() {
  const { isAuthenticated } = useContext(Auth);
  return (
    <div className='navbar'>
      <div className="navbar--title">
        <h1>Groupomania</h1>
      </div>
      <ul className='navbar--ul'>
        {(!isAuthenticated && (
          <>
            <li className='navbar--ul__item'>
              <Link to="/home">Accueil</Link>
            </li>
            <li className='navbar--ul__item'>
              <Link to="/register">S'inscire</Link>
            </li>
            <li className='navbar--ul__item'>
              <Link to="/connexion">Se connecter</Link>
            </li>
          </>
        )) || (
          <>
          <li className='navbar--ul__item'>
            <Link to="/account">Mon profil</Link>
          </li>
          <li className='navbar--ul__item'>
            <Link to="/connexion">Me déconnecter</Link>
          </li>
          </>
        )}
      </ul>
    </div>
  )
}
