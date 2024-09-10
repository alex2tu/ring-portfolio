import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <ul className="nav-menu">
            
                <li className="nav-item">
                    <NavLink to='/ring-portfolio'end className={({isActive}) =>
                        "nav-link" + (!isActive ? "" : " on")
                    }>
                        Rings
                    </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to='/ring-portfolio/about' className={({isActive}) =>
                        "nav-link" + (!isActive ? "" : " on")
                    }>
                        About
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>

  )
}

export default Navbar;