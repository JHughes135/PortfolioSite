import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {GiTrophyCup} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>

      <h5>Get To Know More</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
      
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
          
        </div>
        
        <div className='about__content'>
          <div className="about__cards">
            <a href="#experience">
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>1+ year working</small>
              </article>
            </a>
            <article className='about__card'>
              <GiTrophyCup className='about__icon' />
              <h5>Achievements</h5>
              <small></small>
            </article>
            <a href="#portfolio">
              <article className='about__card'>
                <AiOutlineFolderOpen className='about__icon' />
                <h5>Projects</h5>
                <small>See Portfolio Section</small>
              </article>
            </a>
          </div> 
          <p>

              I have a BSc Computer Science (Infrastructure) from Technological University Dublin, 
            Ireland. I have experience with several programming/scripting languages, database admin 
            technologies, operating systems, network configuration/admin, microcontrollers, Unity Games 
            engine, API’s, Image Processing and Cloud infrastructure from college and previous jobs. I have 
            worked on some projects including a game, a language analyser, multiple websites, an android 
            application and a lot of assignments from my time in college.  
          </p>
          <p>

          I have completed an internship with SAP in my third year of college where I created a web application with a team of 7 people as a full stack developer with SAPUI5 framework.

        </p>
          <p>

            I'm currenty searching for a remote job as a Full Stack Developer.

        </p>
        <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About