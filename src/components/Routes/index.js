import React from 'react'
import {Routes, Route,} from "react-router-dom"
import Home from '../../pages/Home.js'
import Profile from '../../pages/Profile.js'
import Trending from '../../pages/Trending.js'
import Navbar from '../Navbar.js'

export default function index() {
  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/profil" exact element={<Profile />} />
            <Route path="/trending" exact element={<Trending />} />
        </Routes>
    </div>
  )
}
