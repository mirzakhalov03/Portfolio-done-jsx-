import React from 'react'
import './nav.scss'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <div className="container">
            <div className="nav__hug">
                <ul>
                    <li><NavLink className='nav__link' to="/">Home</NavLink></li>
                    <li><NavLink className='nav__link' to="/about">About</NavLink></li>
                    <li><NavLink className='nav__link' to="/experience">Experience</NavLink></li>
                    <li><NavLink className='nav__link' to="/projects">Projects</NavLink></li>
                    <li><NavLink className='nav__link' to="/contacts">Contacts</NavLink></li>
                    <li><NavLink className='nav__link' to="/game">Game</NavLink></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav