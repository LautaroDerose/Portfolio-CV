import React from 'react'
import './Home.css'
import Perfil from '../../assets/image_presentation.png'
import AbstractImage from  '../../assets/abstract_image.png'
import Project from '../Project/Project'
import Habilidades from '../Habilidades/Habilidades'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const Home = () => {
  return (
    <div className='main__container'>
                    <a  name='home'href='/#'> </a>
        <section className='presentation__container'>
            <div className='presentation__content'>
                
                <div className='presentation__detail'>
                    <h3>Hola, soy Lautaro</h3>
                    <h4>Frontend Developer & Designer</h4>
                    <p>Desarrollador FrontEnd con profundos conocimientos en Diseno y Comunicacion Visual</p>
                    <div className='btns__principal'>
                        <a href="/#" className='btn__general'>Algun boton </a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/LautaroDerose" className='btn__icon'><FaGithub/> </a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lautaro-derose-7322b6107/" className='btn__icon' ><FaLinkedin/> </a>
                        <a href="/#" className='btn__icon' ><HiMail/> </a>
                    </div>
                </div>
                <div className='presentation__image'>
                    <img src={Perfil} alt=''/>
                </div>
            </div>
        </section>
            <a  name='formacion'href='/#'> </a>
        <section className='abstract__main'>
            <h1 className='section__title'>Mi recorrido</h1>
            <div className='abstract__container'>
                <div className='abstract__content'>
                <div className='abstract__info'>
                    <p> Estudiante avanzado en Diseño en Comunicación Visual por la <b>Universidad Nacional de La Plata</b>, Desde el 2019 comencé a formarme en  desarrollo web en <b>Digital House</b>, realizando el curso de “Programación web Full Stack” donde adquirí conocimientos en <b>HTML</b>, <b>CSS</b>, <b>php</b>, <b>MySQL</b>, <b>Laravel</b>, y <b>Bootstrap</b>. 
                    <br/><br/>
                    Entre el 2020 y 2022 desde que finalicé el curso a la actualidad, me dedique a terminar la cursada de mi carrera universitaria, al mismo tiempo que me mantuve aprendiendo de forma autodidacta y en la plataforma de <b>EdTeam</b> donde pude fortalecer y profundizar mis conocimientos en, <b>CSS</b> Y <b>Javascript</b>. 
                    <br/><br/>
                    En la actualidad, recientemente finalicé el curso de <b>React JS</b> en <b>CoderHouse</b>, y estoy en la búsqueda activa para obtener mi primer empleo como <b>Programador Frontend</b>.
                    </p>

                </div>
                <div className='abstract__image'>
                    <img src={AbstractImage} alt="abstract-fondo"/>
                </div>
                </div>
            </div>
a\
        </section>
        <a  name='projects' href='/#'> </a>
        <section className='projects__main'>
                <h1 className='section__title'>Mis Projectos</h1>
            <div className='projects__title'>
                <Project/>
            </div>
        </section>
        <section className='tech__main'>
                <h1 className='section__title2'>Tecnologias</h1>
            <div className='tech__container'>
                <Habilidades/>
            </div>
        </section>
        <a  name='contact' href='/#'> </a>
        <section className='contact__main'>
                <h1 className='section__title2'>Contactarse</h1>
            {/* <Formulario/> */}
        </section>
        
    </div>
  )
}

export default Home