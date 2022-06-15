import React from 'react'
import { useState } from 'react'
import './portfolio.css'
import MoreInfo from '../moreInfo/MoreInfo'
import IMG1 from '../../assets/FYP_IMG1.png'
import IMG2 from '../../assets/JAVA_IMG2.png'
import IMG3 from '../../assets/PHAR_IMG3.png'
import IMG4 from '../../assets/PIZZA_IMG4.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Final Year Project',
    github: 'https://github.com/JHughes135/Final-Year-Project',
    repoName: 'Final-Year-Project'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Java Language Analyser',
    github: 'https://github.com/JHughes135/JavaAssignment',
    repoName: 'JavaAssignment'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Pharmacy Website',
    github: 'https://github.com/JHughes135/3rdYearWebDevAssignment',
    repoName: '3rdYearWebDevAssignment'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Pizza Delivery Website',
    github: 'https://github.com/JHughes135/WebDev_Assignment',
    repoName: 'WebDev_Assignment'
  }



]


const Portfolio = () => {

  const [buttonPopup, setButtonPopup] = useState(false);
  const [projectRepo, setProjectRepo] = useState('');

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>  
      <h2>Portfolio</h2>

      <div className='container portfolio__container'> 

        <MoreInfo trigger={buttonPopup} setTrigger={setButtonPopup} repoName={projectRepo}>

                
        </MoreInfo>
        {
          
          data.map(({id, image, title, github, repoName}) => {
            return(
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />

              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} target= '_blank' className='btn'>Github</a>
                <a onClick={() => {setButtonPopup(true); setProjectRepo(repoName);}} className='btn btn-primary'>More Info</a>
                
              </div>
              
            </article>   
            )
          })
          
        }    
      </div>
      
    </section>


  )
}

export default Portfolio