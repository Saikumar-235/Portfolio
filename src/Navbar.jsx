import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <section className='navbar'><nav>
    <ul>
        <li className="active">
          <NavLink to="/"> <span>Home</span></NavLink>
        </li>
        <li>
          <NavLink to="/about"> <span>About</span></NavLink>
        </li>
        <li>
          <NavLink to="/education"> <span>Education</span></NavLink>
        </li>
        <li>
          <NavLink to="/projects"> <span>Projects</span></NavLink>
        </li>
        <li>
          <NavLink to="/skills"> <span>Skills</span></NavLink>
        </li>
        <li>
          <NavLink to="/cv"> <span>CV</span></NavLink>
        </li>
        <li>
          <NavLink to="/contact"> <span>Contact</span></NavLink>
        </li>
      </ul>
        </nav></section></>
  )
}

export default Navbar