import React from 'react'
import miniatura1 from '../../assets/miniatura_ecommerce.png'
import miniatura2 from '../../assets/spot-prueba.jpg'
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
        <div class="project__detail">
            <h4 className='detail__title'>Ecommerce Project</h4>
            <p>Projecto ecommerce en react, consumo de prodctos por base de datos en Firebase, categorias de producto, login/register, carrito de compras.</p>
            <div class="project__links">
              <h4><a href='https://github.com/LautaroDerose/DeroseEcommerceCoderhouse'>Go to Code</a></h4>
              <a class="btn" href="https://derose-ecommerce-coderhouse.vercel.app/">Go to Web</a>
            </div>
        </div>          
      </div>  

      <div className='project__content'>
        <h5>React JS</h5>
        <div className='image__content'>
          <img src={miniatura2} alt=""/>
        </div>        
        <div class="project__detail">
            <h4 className='detail__title'>Spotify-clone</h4>
            <p>Replica de Spotify consumiendo su api y agregando funcionalidad de ordenar playlist por parametros</p>
            <div class="project__links">
              <h4>Go to Code</h4>
              <a class="btn" href="">Go to Web</a>
            </div>
        </div>          
      </div>  

      <div className='project__content'>
        <h5>HTML | CSS</h5>
        <div className='image__content'>
          <img src={miniatura3} alt=""/>
        </div>        
        <div class="project__detail">
            <h4 className='detail__title'>LandingPage</h4>
            <p>Challenge de Frontend-Mentor Realizado en css.</p>
            <div class="project__links">
              <h4><a href='https://github.com/LautaroDerose/challenge_FrontEndMentor_blogrLandingPage'>Go to Code</a></h4>
              <a class="btn__disabled" href="">Go to Web</a>
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