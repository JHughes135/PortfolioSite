import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {ImWhatsapp} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>James</a>

      <ul className='permalinks'>

        <li><a href="#">Home</a></li>  
        <li><a href="#about">About</a></li> 
        <li><a href="#experience">Experience</a></li> 
        <li><a href="#portfolio">Portfolio</a></li> 
        <li><a href="#contact">Contact</a></li> 
        
      </ul>  

      <div className="footer__socials">

        <a href='https://www.linkedin.com/in/james-hughes-8516b1132' target='_blank'><BsLinkedin /></a>
        <a href='https://www.instagram.com/jhughes2110' target='_blank'><BsInstagram /></a>
      </div>
    
    </footer>
  )
}

export default Footer