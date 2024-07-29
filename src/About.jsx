import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
    <> <Navbar></Navbar>
    
  <section id="about" className="about">
    <div >
      <div className='aboutme'>  
        <h3  className='me'>About me</h3>
       <img src="../img/profile_pic.jpeg" alt=""/>
      </div>
      <div className='myself'>
      <h3 className='saikumar'>
              Hi there, Myself SAI KUMAR K <br />
              I’m a graduate of gates institute of technology with a Bachelor's degree in "Mechanical Engineering"  <br />
           <br /> -> My academic journey seamlessly integrates these fields,providing me with a strong foundation <br />
                         in both theoretical and practical knowledge all areas that align with my personalinterests. <br />
                          This combination of skills allows me to innovate at the crossroads of hardware and software,<br /> bridging intricate  technological gaps.<br/><br/>
  <br /> 
              -> I’ve an strong knowledge in Front-End Technologies as well as  Back-End Technologies. I'm always <br /> 
              be active in internet which helps me to always keep updated about the new technologies. So, far using <br />
               my knowledge i have done many projects including front end and also back end too.
              <br /><br></br>
          
            </h3>
          
      </div>
    </div>
  </section>
  </>
  )
}

export default About