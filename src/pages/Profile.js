import React from 'react';
import Log from '../components/Log';
import Logo from '../assets/icon-above-font.png'

export default function Profile() {
  return (
    <div className='profil-page'>
        <div className='log-container'>
            <Log signin={false} signup={true}/>
            <div className='img-container'>
                <img src={Logo} alt='logo' />
            </div>
        </div>
    </div>
  )
}
