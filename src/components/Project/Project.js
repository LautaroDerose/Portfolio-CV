import React from 'react'
import miniatura1 from '../../assets/miniatura_ecommerce.png'
import miniatura2 from '../../assets/dashboard.png'
import miniatura3 from '../../assets/land-prueba2.jpg'
import './Project.css'


const Project = () => {
  return (
    <div className='w-full py-[3rem] px-4 bg-white'>
      <a href='/#projects'></a>
        <h1 className='text-center uppercase text-emerald-500 font-bold text-xl'>Proyectos</h1>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 justify-center items-center' >

        <div  className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-2'>
          <h5 className='absolute bg-emerald-300 max-w-fit px-4 text-emerald-900 font-medium'>React JS</h5>
          <div className='max-h-200px'>
            <img className=' h-[150px] object-contain' src={miniatura1} alt=""/>
          </div>        
          <div className="p-4">
              <h4 className='flex justify-start text-palette2 font-bold text-xl py-1'>Ecommerce Project</h4>
              <p className=' flex font-light h-[150px] md:h-[100px] justify-center items-center text-sm pb-1' >Projecto ecommerce en react, consumo de prodctos por base de datos en Firebase, categorias de producto, login/register, carrito de compras.</p>
              <div className="flex gap-1 lg:justify-between lg:flex-row content-end flex-col items-center">
                <a target="_blank"  rel="noreferrer" className=" text-emerald-500 font-bold hover:underline w-full text-center py-1 " href='https://github.com/LautaroDerose/DeroseEcommerceCoderhouse'>Ver código</a>
                <a target="_blank"  rel="noreferrer" className=' bg-emerald-500 text-gray-900 font-medium w-full text-center rounded-md py-1 hover:bg-palette1 hover:text-palette5 ' href="https://derose-ecommerce-coderhouse.vercel.app/">Ir a Web</a>
              </div>
          </div>          
        </div>  

      <div  className='w-full shadow-xl flex flex-col p-4 py-8 my-4 rounded-lg hover:scale-105 duration-300 border-2 bg-gray-100'>
        <h5 className='absolute bg-emerald-300 max-w-fit px-4 text-emerald-900 font-medium'>React JS</h5>
        <div className='max-h-200px'>
          <img className=' h-[150px] object-contain' src={miniatura2} alt=""/>
        </div>        
        <div className="p-4">
            <h4 className='flex justify-start text-palette2 font-bold text-xl py-1'>Dashboard-Challenge</h4>
            <p className=' flex font-light md:h-[100px] justify-center items-center text-sm pb-1'>Replica de challenge de Dashboard donde puse en practica y aprendi el uso de Styled-Components</p>
            <div className="flex gap-1 lg:justify-between lg:flex-row content-end flex-col items-center">
              <a className=" text-emerald-500 font-bold hover:underline w-full text-center py-1 " target="_blank"  rel="noreferrer" href="https://github.com/LautaroDerose/Challenge-dashboard">Ver código</a>
              <span className='bg-gray-400 text-gray-900 font-medium w-full text-center rounded-md py-1' >Ir a Web</span>
            </div>
        </div>          
      </div>  

      <div  className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-2'>
        <h5 className='absolute bg-emerald-300 max-w-fit px-4 text-emerald-900 font-medium'>HTML | CSS</h5>
        <div className=' max-h-200px '>
          <img className=' h-[150px] object-contain' src={miniatura3} alt=""/>
        </div>        
        <div className="p-4">
            <h4 className='flex justify-start text-palette2  font-bold text-xl py-1'>LandingPage</h4>
            <p className=' flex font-light md:h-[100px] justify-center items-center text-sm pb-1'>Challenge de Frontend-Mentor sobre una landing-page realizado en css.</p>
            <div className="flex gap-1 lg:justify-between lg:flex-row content-end flex-col items-center">
              <a target="_blank"  rel="noreferrer" className=" text-emerald-500 font-bold hover:underline w-full text-center py-1" href='https://github.com/LautaroDerose/challenge_FrontEndMentor_blogrLandingPage'>Ver código</a>
              <span className='bg-gray-400 text-gray-900 font-medium w-full text-center rounded-md py-1 ' >Ir a Web</span>
            </div>
        </div>          
      </div>   
      </div> 
    </div>
  )
}

export default Project



// {
//   projectsArray.map((project) => (
//     <div className='project__content' key={project.id}>
//         <h5>{project.label}</h5>
//         <img src={`'../../assets/${project.image}'`} alt=""/>
//         <div class="project__detail">
//             <h4 className='detail__title'>{project.title}</h4>
//             <p>{project.detail}</p>
//             <div class="project__links">
//                 <h4>{project.codeLink}</h4>
//                 <a class="btn" href={project.deployCode}>{project.deployCode}</a>
//             </div>
//         </div>
//     </div>
//   ) )
// }