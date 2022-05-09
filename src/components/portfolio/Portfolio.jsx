import React from 'react'
import './portfolio.css'
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
    Demo: ''
  },
  {
    id: 2,
    image: IMG2,
    title: 'Java Language Analyser',
    github: 'https://github.com/JHughes135/JavaAssignment',
    Demo: ''
  },
  {
    id: 3,
    image: IMG3,
    title: 'Pharmacy Website',
    github: 'https://github.com/JHughes135/3rdYearWebDevAssignment',
    Demo: ''
  },
  {
    id: 4,
    image: IMG4,
    title: 'Pizza Delivery Website',
    github: 'https://github.com/JHughes135/WebDev_Assignment',
    Demo: ''
  }



]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>  
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return(
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />

              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} target= '_blank' className='btn'>Github</a>
                <a href='Github' target= '_blank' className='btn btn-primary'>Live Demo</a>
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