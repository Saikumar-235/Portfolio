import React from 'react'
import Navbar from './Navbar'

const Education = () => {
  return (
    <><Navbar></Navbar>
     <section id="education" className="services">
     <div className="container">
     <div className="section-title">
          <h2>Education</h2>
        </div>
  <div className='btech'>
     <img src="../img/gatesbgg.jpg" alt="" />
    <div className='gates'>
        <p>Gates Institute Of Technology, Gooty ,Andhra Pradesh</p><br />
        <p>Mechanical Engineering :CGPA:6.58</p><br />
        <p>June 2019-July 2023</p>

    </div> 
  </div>
<br /> <br />
  <div className='intermediate'>
  <img src="../img/sastra.jpeg" alt="" />
  <div className='sastra'>
   <p>Sastra Jr College, Guntakal ,Andhra Pradesh</p><br />
        <p>MPC :CGPA:6.58</p><br />
        <p>June 2017-July 2019</p>
        </div>  </div>
     </div> 
     <br /><br />
     <div className='intermediate'>
  <img src="../img/Zphs.png" alt="" />
  <div className='zphs'>
   <p>ZPHS, Guntakal ,Andhra Pradesh</p><br />
        <p>SSC :CGPA:7.8</p><br />
        <p>June 2016-July 2017</p>
        </div>  </div>
    
     </section>
    </>
  )
}

export default Education