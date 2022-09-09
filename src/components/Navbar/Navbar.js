import React from 'react'
import './Navbar.css'


const menuItems = [

  {
    id: 1,
    label: 'home',
    toLink:'/#home',
  },
  
  {
    id: 2,
    label: 'formacion',
    toLink:'/#formacion',
  },
 
  {
    id: 3,
    label: 'projects',
    toLink:'/#projects',
  },

  {
    id: 4,
    label: 'tecnologias',
    toLink:'/#tech',
  },
  {
    id: 5,
    label: 'contacto',
    toLink:'/#contact',
  },

]

const Navbar = () => {

  return (
    <header className='navbar__container'>
        <div className='navbar__content'>
          <div className='navbar__general'>
            <a className='navbar__logo'><h3>&lt; Lautaro Derose /&gt;</h3></a>
          </div>
          <nav>
            {
              menuItems.map((item) => (
                <a href={item.toLink} key={item.id} > {item.label} </a>
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