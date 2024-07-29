import React from 'react'
import { NavLink } from 'react-router-dom'
import Type from './Type'

const Home = () => {
  return (
    <>
    <section>
     <h3 className='hello'>Hello there!
            I'M   <b>SAI KUMAR K</b></h3><Type className="Typewritter"></Type>
    <nav className="nav-menu d-none d-lg-block">
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
    </nav>
  </section>
    </>
  )
}

export default Home