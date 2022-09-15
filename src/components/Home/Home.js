import React from 'react'
import './Home.css'
import Project from '../Project/Project'
import Habilidades from '../Habilidades/Habilidades'

import Greeting from '../Greeting'
import Formation from '../Formation'

const Home = () => {
  return (
    <div className=''>
        <a  name='home'href='/#'> </a>
        <section className=''>
            <Greeting/>
        </section>
        <section className=''>
            <a  name='formacion'href='/#formation'> </a>
            <Formation/>
        </section>
        <a  name='projects' href='/#'> </a>
        <section className=''>
                <Project/>
        </section>
        <section className=''>
            <Habilidades/>
        </section>
        <a  name='contact' href='/#'> </a>       
    </div>
  )
}

export default Home