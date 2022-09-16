import React from 'react'
import Formation from './Formation'

import Greeting from './Greeting'
import Habilidades from './Habilidades'
import Project from './Project'

const Home = () => {
  return (

        <section className=''>
            <Greeting/>
            <Formation/>
            <Project/>
            <Habilidades/>
        </section>
        
  )
}

export default Home