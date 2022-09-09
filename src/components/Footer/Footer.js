import React from 'react'
import './Footer.css'
import Formulario from '../Formulario/Formulario'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const Footer = () => {
  return (
    <div className="footer__main">
      <div className='footer__container'>
      <Formulario/>
      <div className='footer__content'>
        <div className='footer__box'>
          <a href="" className='btn__icon' ><HiMail/></a>
          <a href=''>lautiderose@gmail.com</a>
        </div>
        <div className='footer__box'>
        <a target="_blank" href="https://www.linkedin.com/in/lautaro-derose-7322b6107/" className='btn__icon' ><FaLinkedin/></a>
          <a target="_blank" href='https://www.linkedin.com/in/lautaro-derose-7322b6107/'>linkedin.com/lautaro-derose</a>
        </div>
        <div className='footer__box'>
          <a target="_blank" href="https://github.com/LautaroDerose" className='btn__icon'><FaGithub/></a>
          <a target="_blank" href='https://github.com/LautaroDerose'>github.com/LautaroDerose</a>
        </div>
      </div>
      </div>
      <div className='footer__credit'>
        Si llegaste hasta acá   <span>  Muchas Gracias!</span>
      </div>
    </div>
  )
}

export default Footer

                        // <a href="" className='btn__icon'><FaGithub/></a>
                        // <a href="https://www.linkedin.com/in/lautaro-derose-7322b6107/" className='btn__icon' ><FaLinkedin/></a>
                        // <a href="" className='btn__icon' ><HiMail/></a>