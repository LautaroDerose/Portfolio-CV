import React from 'react'
import Formulario from '../Formulario/Formulario'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const Footer = () => {
  return (
    <div className="flex-col bg-palette3 pt-1">
      <div className='md:mx-[10%]  max-w-[1240px]'>
        <Formulario />
        <div className='flex flex-col items-center lg:flex-row gap-4 justify-center'>
          <div className='flex gap-4'>
            <a href="/" className='justify-center block text-base mb-2 text-palette1' ><HiMail className='flex justify-center items-center text-3xl'/></a>
            <a href='/' className='justify-center block text-base mb-2 text-palette1 font-bold'>lautiderose@gmail.com</a>
          </div>
          <div className='flex gap-4'>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lautaro-derose-7322b6107/" className='justify-center block text-base mb-2 text-palette1' ><FaLinkedin className='flex justify-center items-center text-3xl'/></a>
            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/lautaro-derose-7322b6107/' className='justify-center block text-base mb-2 text-palette1 font-bold' >linkedin.com/lautaro-derose</a>
          </div>
          <div className='flex gap-4'>
            <a target="_blank" rel="noreferrer" href="https://github.com/LautaroDerose" className='justify-center block text-base mb-2 text-palette1'><FaGithub className='flex justify-center items-center text-3xl' /></a>
            <a target="_blank" rel="noreferrer" href='https://github.com/LautaroDerose' className='justify-center block text-base mb-2 text-palette1 font-bold'>github.com/LautaroDerose</a>
          </div>
        </div>
      </div>
      <div className='p-4 text-center text-palette1 font-bold mx-auto mt-2 border-t-[1px] border-palette1  w-[80%] items-center'>
        Si llegaste hasta acá   <span className='text-palette1 font-black underline'>  Muchas Gracias!</span>
      </div>
    </div>
  )
}

export default Footer

                        // <a href="" className='btn__icon'><FaGithub/></a>
                        // <a href="https://www.linkedin.com/in/lautaro-derose-7322b6107/" className='btn__icon' ><FaLinkedin/></a>
                        // <a href="" className='btn__icon' ><HiMail/></a>