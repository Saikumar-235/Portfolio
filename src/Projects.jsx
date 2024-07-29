import React from 'react'
import Navbar from './Navbar'
import NO from "../img/netflix-clone.jpeg"
import CRUD from "../img/crud2.jpeg"
import NTA from "../img/note-taking.png"
import TDL from "../img/todolist.jpg"
import EMI from "../img/loanemicalculator.png"
import AD from "../img/Analog&Digital.jpeg"

const Projects = () => {
  return (
    <> <Navbar></Navbar>
    <section>

        <center><div className='projecttittle'><h2>PROJECTS</h2></div></center>


        <div className='project'>
          <img src={NO} alt="" />
          <p>A Netflix clone can refer to either an Android app created with MVVM architecture that uses APIs from TMDB (The Movie Database) and includes features like trailer playback, home feed, and movie search</p><br />
           <p className='codelink'>Code: <a href="https://github.com/Saik2012/Netflix--Clone">Click Here</a></p>
        </div>

        <div className='project'>
          <img src={CRUD} alt="" />
          <p>CRUD refers to the four basic operations a software application should be able to perform – Create, Read, Update, and Delete.
            In such apps, users must be able to create data, have access to the data in the UI by reading the data, update or edit the data, and delete the data.
           </p> <p className='codelink'>Code: <a href="https://github.com/Saik2012/Crud-Files">Click Here</a></p>
           </div>

        <div className='project'>
          <img src={NTA} alt="" />
          <p>Note taking apps are digital tools for recording and managing information on a mobile device (Android or iOS) or desktop computer. They are a modern replacement for your old pen and paper to-do list with enhanced features for handling information efficiently, including sub-tasks, bullet points, and checklists.</p>
          <p className='codelink'>Code: <a href="https://github.com/Saik2012/Notes-TakingApp">Click Here</a></p> </div>

        <div className='project'>
          <img src={TDL} alt="" />
          <p>It’s a list of tasks you need to complete or things that you want to do. Most typically, they’re organised in order of priority. Traditionally, they’re written on a piece of paper or post it notes and act as a memory aid. As technology has evolved we have been able to create a todo lists with excel spreadsheets, word documents, email lists, todo list apps, </p>
          <p className='codelink'>Code: <a href="https://github.com/Saik2012/Todo-List">Click Here</a></p></div>

        <div className='project'>
          <img src={EMI} alt="" />
          <p>An EMI (Equated Monthly Installment) calculator is an online tool that helps you estimate the monthly payments you need to make to repay a loan. It’s useful for planning your finances when taking out loans such as home loans, car loans, personal loans, or education loans.</p>
          <p className='codelink'>Code: <a href="">Click Here</a></p></div>

        <div className='project'>
          <img src={AD} alt="" />
          <p>Analog and digital clocks are two different types of timekeeping devices:
         Analog clocks have a circular face with numbers 1-12 and two hands (hour and minute) that point to the time123.
        Digital clocks display the exact time in numbers on a digital scree</p>
        <p className='codelink'>Code: <a href="https://github.com/Saik2012/Analog-Clock">Click Here</a></p></div>

    </section>
    </>
  )
}

export default Projects