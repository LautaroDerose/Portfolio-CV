import React from 'react'
import Perfil from '../assets/image_presentation.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import Swal from 'sweetalert2';

const Greeting = () => {

    const showAlert = () => {
     
        Swal.fire(
            'lautiderose@gmail.com'
        )
    }

  return (
        <div className='w-full h-[99%] bg-white py-16 px-4'>        
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <div className='flex flex-col justify-center'>
                    <h3 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Hola, soy Lautaro</h3>
                    <h4 className='md:text-3xl sm:text-2xl text-xl font-medium py-0'>Frontend Developer & Designer</h4>
                    <p className='md:text-2xl sm:text-xl text-sm max-w-sm font-light py-0'>Desarrollador FrontEnd principiante en busqueda de empleo </p>
                    <div className='flex md:w-[75%] '>
                        <a href="/#contact" className='bg-emerald-500 text-gray-900 font-medium w-[120px] text-center rounded-md my-6 py-3 hover:bg-palette1 hover:text-palette5 duration-300'> contáctame </a>
                        <div className='flex justify-between gap-6 ml-6'>
                        <a className=" flex items-center justify-center text-emerald-500 hover:text-palette1 duration-300 " target="_blank" rel="noreferrer" href="https://github.com/LautaroDerose" ><FaGithub size={30}/> </a>
                        <a className=" flex items-center justify-center text-emerald-500 hover:text-palette1 duration-300" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lautaro-derose-7322b6107/"  ><FaLinkedin size={30}/> </a>
                        <a className=" flex items-center justify-center text-emerald-500 hover:text-palette1 duration-300" href="/#" onClick={showAlert} ><HiMail size={30}/> </a>
                        </div>
                    </div>
                </div>
                    <img className='w-[500px] mx-auto' src={Perfil} alt=''/>
            </div>        
        </div>
  )
}

export default Greeting

