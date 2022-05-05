import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/james-hughes-8516b1132' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/JHughes135' target="_blank"><FaGithub /></a>

    </div>
  )
}

export default HeaderSocials