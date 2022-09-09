import React from 'react'
import miniatura1 from '../../assets/miniatura_ecommerce.png'
import miniatura2 from '../../assets/dashboard.png'
import miniatura3 from '../../assets/land-prueba2.jpg'
import './Project.css'


const Project = () => {
  return (
    <div className='project__main'>
      
      <div className='project__content'>
        <h5>React JS</h5>
        <div className='image__content'>
          <img src={miniatura1} alt=""/>
        </div>        
        <div className="project__detail">
            <h4 className='detail__title'>Ecommerce Project</h4>
            <p>Projecto ecommerce en react, consumo de prodctos por base de datos en Firebase, categorias de producto, login/register, carrito de compras.</p>
            <div className="project__links">
              <a target="_blank"  rel="noreferrer" className=" btn-line" href='https://github.com/LautaroDerose/DeroseEcommerceCoderhouse'>Go to Code</a>
              <a target="_blank"  rel="noreferrer" className="btn" href="https://derose-ecommerce-coderhouse.vercel.app/">Go to Web</a>
            </div>
        </div>          
      </div>  

      <div className='project__content'>
        <h5>React JS</h5>
        <div className='image__content'>
          <img src={miniatura2} alt=""/>
        </div>        
        <div className="project__detail">
            <h4 className='detail__title'>Dashboard-Challenge</h4>
            <p>Replica de challenge de Dashboard donde puse en practica y aprendi el uso de Styled-Components</p>
            <div className="project__links">
              <a className=" btn-line" target="_blank"  rel="noreferrer" href="https://github.com/LautaroDerose/Challenge-dashboard">Go to Code</a>
              <a className="btn__disabled" href="/#">Go to Web</a>
            </div>
        </div>          
      </div>  

      <div className='project__content'>
        <h5>HTML | CSS</h5>
        <div className='image__content'>
          <img src={miniatura3} alt=""/>
        </div>        
        <div className="project__detail">
            <h4 className='detail__title'>LandingPage</h4>
            <p>Challenge de Frontend-Mentor Realizado en css.</p>
            <div className="project__links">
              <a target="_blank"  rel="noreferrer" className=" btn-line" href='https://github.com/LautaroDerose/challenge_FrontEndMentor_blogrLandingPage'>Go to Code</a>
              <a className=" btn__disabled" href="/#">Go to Web</a>
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