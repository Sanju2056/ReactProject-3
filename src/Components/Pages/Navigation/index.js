import React from 'react'
import './index.css'
import navBarLogo from '../../Images/Frame 2 1.png'
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>

const Navigation = () => {
  return (
    <div className='nav-container'>
    <div className='box-container'>
      <div className='box-1'>
        <img src={navBarLogo} className='box-1-image-css'/>
      </div>
      <div className='box-2'>
        <h5>Home</h5>
        <h5>ABOUT</h5>
        <h5>CONTACT</h5>    
      </div>
    </div>
    </div>
  )
}

export default Navigation