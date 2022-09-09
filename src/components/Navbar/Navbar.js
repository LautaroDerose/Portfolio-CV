import React from 'react'
import './Navbar.css'
import { FaHome } from 'react-icons/fa' 

const menuItems = [

  {
    id: 1,
    label: 'formacion',
    toLink:'/#formacion',
  },
 
  {
    id: 2,
    label: 'proyectos',
    toLink:'/#projects',
  },

  {
    id: 3,
    label: 'contacto',
    toLink:'/#contact',
  },
 

]

const Navbar = () => {

  return (
    <header className='navbar__container'>
        <div className='navbar__content'>
          <div className='navbar__general'>
            <a className='navbar__logo' href='/'><h3>&lt; Lautaro Derose /&gt;</h3></a>
          </div>
          <nav>
            <a href='/' className='navbar__icon'><FaHome/></a>
            {
              menuItems.map((item) => (
                <a href={item.toLink} key={item.id} > {item.label}</a>
              ))
            }
          </nav>
        </div>
    </header>
  )
}

export default Navbar



// <div className="contact__container">
//           <ul className="contact__box">
//             <li className="contact__li">
//               <i><FaGithub/></i>
//               <a href="www.github.com/LautaroDerose">github.com/LautaroDerose</a>
//             </li>
//             <li className="contact__li">
//               <i><FaLinkedin/></i>  
//               <a href="#">linkedin.com/in/lautaro-derose-7322b6107/</a>
//             </li>
//             <li className="contact__li">
//               <i><HiMail/></i>
//               <a href="#">lautiderose@gmail.com</a>
//             </li>
//           </ul>
//         </div>