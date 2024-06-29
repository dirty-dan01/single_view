import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import DayOfTheWeek from './DayOfTheWeek.js'
import Images from './Images.js'
import Video from './Video.js'
import Sounds from './Sounds.js'
import Calculator from './Calculator.js'
import './NavBarStyle.css'

const NavBarPlease = () => {
  return (
    <div>
        <h2>Welcome to my page</h2>
        <nav>
          <Link to={"/"} className='navItem'>Main</Link>
          <Link to={"/images"} className='navItem'>Images</Link>
          <Link to={"/video"} className='navItem'>Video</Link>
          <Link to={"/sounds"} className='navItem'>Sound</Link>
          <Link to={"/calculator"} className='navItem'>Calculator</Link>
        </nav>
        <Routes>
          <Route path='/' element={<DayOfTheWeek/>}/>
          <Route path='/images' element={<Images/>}/>
          <Route path='/video' element={<Video/>}/>
          <Route path='/sounds' element={<Sounds/>}/>
          <Route path='/calculator' element={<Calculator/>}/>
        </Routes>
    </div>
  )
}

export default NavBarPlease