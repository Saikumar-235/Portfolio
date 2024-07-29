import React from 'react'
import Navbar from './Navbar'

const Cv = () => {
  return (
    <><Navbar></Navbar>
    <section>
        
     <div className="cv-tiitle">
          <h2 className='cv'>CV</h2>
        </div> 
   <div className='Cvb'>
   <div className='resume'>
   <a href="https://drive.google.com/file/d/1ApAkvJPp_ORIO4ohg7BW_um4yLyCHs7w/view?usp=sharing"
     target="_blank"><img src="../img/resume1-.png" alt="" /></a>

     <h3 className='rch'><a href="https://drive.google.com/file/d/1ApAkvJPp_ORIO4ohg7BW_um4yLyCHs7w/view?usp=sharing"
     target='_blank'>Click Here</a></h3>
   </div>
   <div className='resume'>
   <a href="https://github.com/Saik2012/Netflix--Clone"
     target="_blank"><img src="../img/github1.png" alt="" /></a>

     <h3 className='rch'><a href="https://github.com/Saik2012/Netflix--Clone"
     target='_blank'>Click Here</a></h3>
   </div>
  
   </div>

    </section>
    </>
  )
}

export default Cv