import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Education from './Education'
import Projects from './Projects'
import Skills from './Skills'
import Cv from './Cv'
import Contact from './Contact'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/education"  element={<Education/>}/>
      <Route path='/projects' element={<Projects/>}/> 
      <Route path='/skills' element={<Skills/>}/> 
      <Route path='/cv' element={<Cv/>}/> 
      <Route path='/contact' element={<Contact/>}/>  
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App