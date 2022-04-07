import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LeftNav() {
  return (
    <div className='left-nav-container'>
        <div className='icons'>
            <div className='icons-bis'>
                <NavLink to='/' exact >
                    logo1
                </NavLink>
                <br/>
                <NavLink to="/" exact>
                    LOG2
                </NavLink>
                <br/>
                <NavLink to='/profil' exact>
                    logo3
                </NavLink>
            </div>
        </div>
    </div>
  )
}
