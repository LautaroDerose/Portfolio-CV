import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer__container">
      <div className='footer__content'>
        <div className='footer__box'>
          <h3>email:</h3>
          <a href=''>lautiderose@gmail.com</a>
        </div>
        <div className='footer__box'>
          <h3>LinkedIn:</h3>
          <a href='https://www.linkedin.com/in/lautaro-derose-7322b6107/'></a>
        </div>
        <div className='footer__box'>
          <h3>GitHub:</h3>
          <a href='https://github.com/LautaroDerose'></a>
        </div>
      </div>
      <div className='footer__credit'>
        Si llegaste hasta acá   <span>  Muchas Gracias!</span>
      </div>
    </div>
  )
}

export default Footer