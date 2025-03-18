import React from 'react'
import miniatura1 from '../assets/miniatura_ecommerce.png'
import miniatura2 from '../assets/dashboard.png'
import miniatura3 from '../assets/land-prueba2.jpg'
import miniatura4 from '../assets/chatApp-full.png'
import miniatura5 from '../assets/calculator.png'
import miniatura6 from '../assets/todo.png'
import miniatura7 from '../assets/miniatura7.png'
import miniatura8 from '../assets/Screenshot-web-potenciandohabitos.png'
import miniatura9 from '../assets/museo-screenshot.png'

const Project = () => {
  return (
    <div className='w-full py-[3rem] px-4 bg-white' id='project'>
        <h1 className='text-center uppercase text-emerald-500 font-bold text-xl'>Proyectos</h1>
      <div className='max-w-[1240px]  mx-auto grid md:grid-cols-3 gap-8 justify-center items-center' >

      <div  className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-2'>
        <h5 className='absolute bg-emerald-300 max-w-fit px-4 text-emerald-900 font-medium'>NextJS | TailwindCSS</h5>
        <div className=' max-h-200px '>
          <img className=' mx-auto h-[150px] object-cover' src={miniatura9} alt=""/>
        </div>        
        <div className="p-4">
            <h4 className='flex justify-start text-palette2  font-bold text-xl py-1'>Blog de Museo virtual </h4>
            <p className=' flex font-light md:h-[100px] items-center text-sm pb-1'>Museo virtual con varias secciones de fototeca, colecciones, salas y mas...</p>
            <div className="flex gap-1 lg:justify-between lg:flex-row content-end flex-col items-center">
              <a target="_blank"  rel="noreferrer" className=" text-emerald-500 font-bold hover:underline w-full text-center py-1" href='https://github.com/LautaroDerose/museo'>Ver código</a>
              <a target="_blank"  rel="noreferrer" className=' bg-emerald-500 text-gray-900 font-medium w-full text-center rounded-md py-1 hover:bg-palette1 hover:text-palette5 duration-300' href="https://www.museoepecuen.gob.ar/">Ir a Web</a>
            </div>
        </div>          
      </div>   

      <div  className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-2'>
        <h5 className='absolute bg-emerald-300 max-w-fit px-4 text-emerald-900 font-medium'>ReactJS | TailwindCSS</h5>
        <div className=' max-h-200px '>
          <img className=' mx-auto h-[150px] object-fit' src={miniatura7} alt=""/>
        </div>        
        <div className="p-4">
            <h4 className='flex justify-start text-palette2  font-bold text-xl py-1'>LandingPage | Servicios </h4>
            <p className=' flex font-light md:h-[100px] items-center text-sm pb-1'>LandingPage de servicios Agrimensores</p>
            <div className="flex gap-1 lg:justify-between lg:flex-row content-end flex-col items-center">
              <a target="_blank"  rel="noreferrer" className=" text-emerald-500 font-bold hover:underline w-full text-center py-1" href='https://github.com/LautaroDerose/ATC-EstudioAgrimensura'>Ver código</a>
              <a target="_blank"  rel="noreferrer" className=' bg-emerald-500 text-gray-900 font-medium w-full text-center rounded-md py-1 hover:bg-palette1 hover:text-palette5 duration-300' href="https://www.atcagrimensura.com.ar/">Ir a Web</a>
            </div>
        </div>          
      </div>   

      <div  className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-2'>
        <h5 className='absolute bg-emerald-300 max-w-fit px-4 text-emerald-900 font-medium'>ReactJS | TailwindCSS</h5>
        <div className=' max-h-200px '>
          <img className=' mx-auto h-[150px] object-cover' src={miniatura8} alt=""/>
        </div>        
        <div className="p-4">
            <h4 className='flex justify-start text-palette2  font-bold text-xl py-1'>LandingPage | Servicios </h4>
            <p className=' flex font-light md:h-[100px] items-center text-sm pb-1'>LandingPage de servicios Nutrición y Entrenamiento</p>
            <div className="flex gap-1 lg:justify-between lg:flex-row content-end flex-col items-center">
              <a target="_blank"  rel="noreferrer" className=" text-emerald-500 font-bold hover:underline w-full text-center py-1" href='https://github.com/LautaroDerose/ph'>Ver código</a>
              <a target="_blank"  rel="noreferrer" className=' bg-emerald-500 text-gray-900 font-medium w-full text-center rounded-md py-1 hover:bg-palette1 hover:text-palette5 duration-300' href="https://www.potenciandohabitos.com.ar/">Ir a Web</a>
            </div>
        </div>          
      </div>   
      
      
      <div  className='w-full shadow-xl flex flex-col p-4 py-4 my-4 rounded-lg hover:scale-105 duration-300 border-2 '>
        <h5 className='absolute bg-emerald-300 max-w-fit px-4 text-emerald-900 font-medium'>React JS</h5>
        <div className='max-h-200px'>
          <img className=' mx-auto h-[150px] object-contain' src={miniatura2} alt=""/>
        </div>        
        <div className="p-4">
            <h4 className='flex justify-start text-palette2 font-bold text-xl py-1'>Dashboard | Challenge</h4>
            <p className=' flex font-light md:h-[100px] justify-center items-center text-sm pb-1'>Replica de challenge de Dashboard donde puse en practica y aprendi el uso de Styled-Components</p>
            <div className="flex gap-1 lg:justify-between lg:flex-row content-end flex-col items-center">
              <a className=" text-emerald-500 font-bold hover:underline w-full text-center py-1 " target="_blank"  rel="noreferrer" href="https://github.com/LautaroDerose/Challenge-dashboard">Ver código</a>
              <span className='bg-gray-400 text-gray-900 font-medium w-full text-center rounded-md py-1' >Ir a Web</span>
            </div>
        </div>          
      </div>  

        {/* <div  className='w-full shadow-xl flex flex-col p-8 my-4 rounded-lg hover:scale-105 duration-300 border-2 bg-gray-100'>
          <h5 className='absolute bg-emerald-300 max-w-fit px-4 text-emerald-900 font-medium'>React JS</h5>
          <div className='max-h-200px'>
            <img className=' mx-auto h-[150px] object-contain' src={miniatura1} alt=""/>
          </div>        
          <div className="p-4">
              <h4 className='flex justify-start text-palette2 font-bold text-xl py-1'>Ecommerce Project</h4>
              <p className=' flex font-light h-[150px] md:h-[100px] justify-center items-center text-sm pb-1' >Projecto ecommerce en react, consumo de prodctos por base de datos en Firebase, categorias de producto, login/register, carrito de compras.</p>
              <div className="flex gap-1 lg:justify-between lg:flex-row content-end flex-col items-center">
                <a target="_blank"  rel="noreferrer" className=" text-emerald-500 font-bold hover:underline w-full text-center py-1 " href='https://github.com/LautaroDerose/DeroseEcommerceCoderhouse'>Ver código</a>
                <a target="_blank"  rel="noreferrer" className=' bg-emerald-500 text-gray-900 font-medium w-full text-center rounded-md py-1 hover:bg-palette1 hover:text-palette5 duration-300' href="https://derose-ecommerce-coderhouse.vercel.app/">Ir a Web</a>
              </div>
          </div>          
        </div>   */}


      <div  className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-2'>
        <h5 className='absolute bg-emerald-300 max-w-fit px-4 text-emerald-900 font-medium'>HTML | CSS</h5>
        <div className=' max-h-200px '>
          <img className=' mx-auto h-[150px] object-contain' src={miniatura3} alt=""/>
        </div>        
        <div className="p-4">
            <h4 className='flex justify-start text-palette2  font-bold text-xl py-1'>LandingPage | Challenge</h4>
            <p className=' flex font-light md:h-[100px] justify-center items-center text-sm pb-1'>Challenge de Frontend-Mentor sobre una landing-page realizado en css.</p>
            <div className="flex gap-1 lg:justify-between lg:flex-row content-end flex-col items-center">
              <a target="_blank"  rel="noreferrer" className=" text-emerald-500 font-bold hover:underline w-full text-center py-1" href='https://github.com/LautaroDerose/challenge_FrontEndMentor_blogrLandingPage'>Ver código</a>
              <span className='bg-gray-400 text-gray-900 font-medium w-full text-center rounded-md py-1 ' >Ir a Web</span>
            </div>
        </div>          
      </div>   

      <div  className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-2'>
        <h5 className='absolute bg-emerald-300 max-w-fit px-4 text-emerald-900 font-medium'>ReactJS | TailwindCSS</h5>
        <div className=' max-h-200px '>
          <img className=' mx-auto h-[150px] object-contain' src={miniatura4} alt=""/>
        </div>        
        <div className="p-4">
            <h4 className='flex justify-start text-palette2  font-bold text-xl py-1'>Chat App | Challenge</h4>
            <p className=' flex font-light md:h-[100px] justify-center items-center text-sm pb-1'>Aplicacion simple de mensajeria realizado ReactJs y TailwindCSS</p>
            <div className="flex gap-1 lg:justify-between lg:flex-row content-end flex-col items-center">
              <a target="_blank"  rel="noreferrer" className=" text-emerald-500 font-bold hover:underline w-full text-center py-1" href='https://github.com/LautaroDerose/Single-chat-App'>Ver código</a>
              <span className='bg-gray-400 text-gray-900 font-medium w-full text-center rounded-md py-1 ' >Ir a Web</span>
            </div>
        </div>          
      </div>   

      <div  className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-2'>
        <h5 className='absolute bg-emerald-300 max-w-fit px-4 text-emerald-900 font-medium'>ReactJS | TailwindCSS</h5>
        <div className=' max-h-200px '>
          <img className=' mx-auto h-[150px] object-fit' src={miniatura5} alt=""/>
        </div>        
        <div className="p-4">
            <h4 className='flex justify-start text-palette2  font-bold text-xl py-1'>Calculadora | Challenge</h4>
            <p className=' flex font-light md:h-[100px]  items-center text-sm pb-1'>Calculadora sencilla ReactJs y TailwindCSS</p>
            <div className="flex gap-1 lg:justify-between lg:flex-row content-end flex-col items-center">
              <a target="_blank"  rel="noreferrer" className=" text-emerald-500 font-bold hover:underline w-full text-center py-1" href='https://github.com/LautaroDerose/calculator'>Ver código</a>
              <span className='bg-gray-400 text-gray-900 font-medium w-full text-center rounded-md py-1 ' >Ir a Web</span>
            </div>
        </div>          
      </div>   

      <div  className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-2'>
        <h5 className='absolute bg-emerald-300 max-w-fit px-4 text-emerald-900 font-medium'>ReactJS | TailwindCSS</h5>
        <div className=' max-h-200px '>
          <img className=' mx-auto h-[150px] object-fit' src={miniatura6} alt=""/>
        </div>        
        <div className="p-4">
            <h4 className='flex justify-start text-palette2  font-bold text-xl py-1'>TodoList | Challenge</h4>
            <p className=' flex font-light md:h-[100px]  items-center text-sm pb-1'>TodoList | CRUD | realizado ReactJs y TailwindCSS</p>
            <div className="flex gap-1 lg:justify-between lg:flex-row content-end flex-col items-center">
              <a target="_blank"  rel="noreferrer" className=" text-emerald-500 font-bold hover:underline w-full text-center py-1" href='https://github.com/LautaroDerose/TodoList'>Ver código</a>
              <span className='bg-gray-400 text-gray-900 font-medium w-full text-center rounded-md py-1 ' >Ir a Web</span>
            </div>
        </div>          
      </div>   
      
      


      </div> 
    </div>
  )
}

export default Project