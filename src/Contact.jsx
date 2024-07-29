import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <><Navbar></Navbar>
    <div className="skills-tiitle">
          <h2>CONTACT</h2>
        </div> 
        <div className='contact'>
            <div className='circle'>
               <a href="https://www.linkedin.com/in/sai-kumar-942543255/" target='_blank'><img src="../img/linkdin1.png" alt="" /></a> 
               <h2 className='contactlink'><a href="https://www.linkedin.com/in/sai-kumar-942543255/" >Linkedin</a></h2>
            </div>
            <div className='circle'>
            <a href="kondasaikumar2020@gmail.com" target='_blank'><img src="../img/gmail1.png" alt="" /></a> 
               <h2 className='contactlink'><a href="kondasaikumar2020@gmail.com" >Gmail</a></h2>
           
            </div>
            <div className='circle'>
            <a href="https://github.com/Saik2012/Netflix--Clone" target='_blank'><img src="../img/github1.png" alt="" /></a> 
               <h2 className='contactlink'><a href="https://github.com/Saik2012/Netflix--Clone" >Github</a></h2>
           
            </div>
        </div>
    </>
  )
}

export default Contact
