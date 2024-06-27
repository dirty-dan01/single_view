import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import DayOfTheWeek from './DayOfTheWeek.js'
import Images from './Images.js'
import Video from './Video.js'
import './NavBarStyle.css'

const NavBarPlease = () => {
  return (
    <div>
        <h2>Welcome to my page</h2>
        <nav>
          <Link to={"/"} className='navItem'>Main</Link>
          <Link to={"/images"} className='navItem'>Images</Link>
          <Link to={"/video"} className='navItem'>Video</Link>
        </nav>
        <Routes>
          <Route path='/' element={<DayOfTheWeek/>}/>
          <Route path='/images' element={<Images/>}/>
          <Route path='/video' element={<Video/>}/>
        </Routes>
    </div>
  )
}

export default NavBarPlease