import React from 'react'
import './Header.css'
import logo from '../../assets/Header/logo.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='container'>
            <div className='header-main'>
                <div className='header-logo'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className='nav-panel'>
                    <div className='nav-links'>
                        <a href='#'>Home</a>
                        <a href='#'>About</a>
                        <a href='#'>Services</a>
                        <a href='#'>Blog</a>
                    </div>
                    <div className='btn'>
                        <a href='#'>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header