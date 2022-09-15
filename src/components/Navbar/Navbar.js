// import React from 'react'
// import './Navbar.css'
// import { FaHome } from 'react-icons/fa' 

// const menuItems = [

//   {
//     id: 1,
//     label: 'formacion',
//     toLink:'/#formacion',
//   },
 
//   {
//     id: 2,
//     label: 'proyectos',
//     toLink:'/#projects',
//   },

//   {
//     id: 3,
//     label: 'contacto',
//     toLink:'/#contact',
//   },
 

// ]

// const Navbar = () => {

//   return (
//     <header className='navbar__container'>
//         <div className='navbar__content'>
//           <div className='navbar__general'>
//             <a className='navbar__logo' href='/'><h3>&lt; Lautaro Derose /&gt;</h3></a>
//           </div>
//           <nav>
//             <a href='/' className='navbar__icon'><FaHome/></a>
//             {
//               menuItems.map((item) => (
//                 <a href={item.toLink} key={item.id} > {item.label}</a>
//               ))
//             }
//           </nav>
//         </div>
//     </header>
//   )
// }

// export default Navbar

import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
     setNav(!nav)
  }


  return (
    <div className="flex justify-between items-center bg-gray-900 h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className='w-full text-3xl font-bold text-[#34d399]'>React.</h1>
        <ul className='hidden md:flex'>
          <li className='p-4 hover:text-emerald-500'><a href='/'>Home</a></li>
          <li className='p-4 hover:text-emerald-500'><a href='/'>Formacion</a></li>
          <li className='p-4 hover:text-emerald-500'><a href='/'>Proyectos</a></li>
          <li className='p-4 hover:text-emerald-500'><a href='/'>Contacto</a></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'> 
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-gray-900 ease-in-out duration-500' : 'fixed left-[-100%] '}>
            <h1 className='w-full text-3xl font-bold text-[#34d399] m-8'>React.</h1>
            <ul className='p-4 uppercase '>    
                <li className='p-4 hover:text-emerald-500 border-b border-gray-600'><a href='/'>Home</a></li>
                <li className='p-4 hover:text-emerald-500 border-b border-gray-600'><a href='/'>Formacion</a></li>
                <li className='p-4 hover:text-emerald-500 border-b border-gray-600'><a href='/'>Proyectos</a></li>
                <li className='p-4 hover:text-emerald-500 border-b border-gray-600'><a href='/'>Contacto</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar