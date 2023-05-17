import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './style.css'

const NavBar = () => {
  const activeStyle = {
    color: "red"
  }
  
  const navA = ({ isActive }) => (isActive ?  activeStyle : undefined)

  return (
    <>
      <nav>
        <h2>Bring Me the Horizon</h2>
        <ul className='nav-links'>
          <li>
            <NavLink style={navA} to='/'>Home</NavLink>
            <NavLink style={navA} to='/songs'>Songs</NavLink>
            <NavLink style={navA} to='/comments'>Comments</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default NavBar
