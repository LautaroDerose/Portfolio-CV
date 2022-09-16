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
//             <a className='navbar__logo' href='/'><h3>&lt; Lautaro Derose /&gt;</h3></NavLink>
//           </div>
//           <nav>
//             <a href='/' className='navbar__icon'><FaHome/></NavLink>
//             {
//               menuItems.map((item) => (
//                 <a href={item.toLink} key={item.id} > {item.label}</NavLink>
//               ))
//             }
//           </nav>
//         </div>
//     </header>
//   )
// }

// export default Navbar

import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'
import {AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
     setNav(!nav)
  }


  return (
    <div className=" bg-gray-900 sticky top-0 ">
        <div className='flex justify-between sticky top-0 items-center  h-16 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#34d399]'>React.</h1>
        <ul className='hidden md:flex'>
          <li className='p-4 hover:text-emerald-500'><NavLink to='/' smooth>Home</NavLink></li>
          <li className='p-4 hover:text-emerald-500'><NavLink to='/formation' smooth>Formacion</NavLink></li>
          <li className='p-4 hover:text-emerald-500'><NavLink to='/project' smooth>Proyectos</NavLink></li>
          <li className='p-4 hover:text-emerald-500'><NavLink to='/contact' smooth>Contacto</NavLink></li>
        </ul>
        </div>
        <div onClick={handleNav} className='block md:hidden'> 
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-gray-900 ease-in-out duration-500' : 'fixed left-[-100%] '}>
            <h1 className='w-full text-3xl font-bold text-[#34d399] m-8'>React.</h1>
            <ul className='p-4 uppercase '>    
                <li className='p-4 hover:text-emerald-500 border-b border-gray-600'><NavLink to='/'>Home</NavLink></li>
                <li className='p-4 hover:text-emerald-500 border-b border-gray-600'><NavLink to='/formation'>Formacion</NavLink></li>
                <li className='p-4 hover:text-emerald-500 border-b border-gray-600'><NavLink to='/project'>Proyectos</NavLink></li>
                <li className='p-4 hover:text-emerald-500 border-b border-gray-600'><NavLink to='/contact'>Contacto</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar