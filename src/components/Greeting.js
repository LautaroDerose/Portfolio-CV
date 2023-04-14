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
        <div className='w-full  bg-white py-16 mt-16 px-4'>        
            <div className='md:flex md:items-center md:justify-between mx-auto md:px-[3%] lg:px-[6.5%] xl:px-[15%] '>
                <div className='flex flex-col justify-center lg:pt-[3rem]'>
                    <h3 className=' lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-bold py-2'>Hola, soy Lautaro</h3>
                    <h4 className=' lg:text-2xl md:text-lg sm:text-2xl text-xl font-medium py-0'>Frontend Developer & Designer</h4>
                    <p className='lg:text-2xl md:text-base sm:text-xl text-sm max-w-sm font-light py-0'>Desarrollador FrontEnd principiante en busqueda de empleo </p>
                    <div className='flex md:w-[75%] '>
                        <a href="/#contact" className='bg-emerald-500 text-gray-900 font-medium w-[120px] text-center rounded-md my-6 p-3 hover:bg-palette1 hover:text-palette5 hover:-translate-y-1 duration-300'> contáctame </a>
                        <div className='flex justify-between gap-6 ml-6'>
                        <a className=" flex items-center justify-center text-emerald-500 hover:text-palette1 duration-300 " target="_blank" rel="noreferrer" href="https://github.com/LautaroDerose" ><FaGithub size={30}/> </a>
                        <a className=" flex items-center justify-center text-emerald-500 hover:text-palette1 duration-300" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lautaro-derose-7322b6107/"  ><FaLinkedin size={30}/> </a>
                        <a className=" flex items-center justify-center  text-emerald-500 hover:text-palette1 duration-300" href="/#" onClick={showAlert} ><HiMail size={30}/> </a>
                        </div>
                    </div>
                </div>
                    <img className='lg:w-[500px] w-[400px]' src={Perfil} alt=''/>
            </div>        
        </div>
  )
}

export default Greeting

