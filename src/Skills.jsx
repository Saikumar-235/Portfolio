import React from 'react'
import Navbar from './Navbar'

const Skills = () => {
  return (
    <>
    <Navbar></Navbar>
    
    <section>
  
     <div className="skills-tiitle">
          <h2>SKILLS</h2>
        </div> 
       
        <div className='skills'>
            <p>Programming Languages</p>
    <div className='lss'>
        <img src="../img/java11-removebg-preview.png" alt="" />
        <img src="../img/javascript.jpeg" alt="" />
    </div>
  </div>

  <div className='skills'>
            <p>Front-End Development</p>
    <div className='lss'>
        <img src="../img/hcjs-removebg-preview.png" alt="" />
        <img src="../img/React.png" alt="" />
    </div>
  </div>

  <div className='skills'>
            <p>Software & Tools</p>
    <div className='lss'>
        <img src="../img/Github-removebg-preview.png" alt="" />
        <img src="../img/mysqlimg-removebg-preview.png" alt="" />
    </div>
  </div>
  <div className='skills'>
            <p>IDEs</p>
    <div className='lss'>
        <img src="../img/VSCode-or-Visual-Studio-Code-.png" alt="" />
        <img src="../img/eclipse-.png" alt="" />
    </div>
  </div>



        </section></>
  )
}

export default Skills