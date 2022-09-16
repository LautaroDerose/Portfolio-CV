import React, {useState} from 'react';
import { Link } from 'react-scroll'
import {AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
     setNav(!nav)

  }

  return (
        <div className='fixed w-full bg-gray-900 z-10 top-0  flex justify-between items-center  h-16  mx-auto px-4 md:px-[2rem] lg:px-[15%] text-white'>
          
          <h1 className='w-full text-xl font-bold text-[#34d399]'>&lt; Lautaro Derose /&gt;</h1>
          <ul className='hidden md:flex'>
            <li className='p-4 hover:text-emerald-500 '><button className='focus:outline-none focus:text-emerald-500'><Link to='/' spy={true} smooth={true} offset={50} duration={500}  >Home</Link></button></li>
            <li className='p-4 hover:text-emerald-500 '><button className='focus:outline-none focus:text-emerald-500'><Link to='formation' spy={true} smooth={true} offset={-100} duration={500}  >Formacion</Link></button></li>
            <li className='p-4 hover:text-emerald-500 '><button className='focus:outline-none focus:text-emerald-500'><Link to='project' spy={true} smooth={true} offset={-50} duration={500}  >Proyectos</Link></button></li>
            <li className='p-4 hover:text-emerald-500 '><button className='focus:outline-none focus:text-emerald-500'><Link to='contact' spy={true} smooth={true} offset={50} duration={500}  >Contacto</Link></button></li>
          </ul>
        
        <div onClick={handleNav} className='block md:hidden'> 
          {nav ? <AiOutlineClose size={20} className='text-gray-400' /> : <AiOutlineMenu size={20} className='text-gray-400'/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-gray-900 ease-in-out duration-500' : 'fixed left-[-100%] '}>
            <h1 className='w-full text-lg font-bold text-[#34d399] m-8'>&lt; Lautaro Derose /&gt;</h1>
            <ul className='p-4 uppercase '>    
                    
                <li className='p-4 text-gray-400 hover:text-emerald-500 border-b border-gray-600'><button className='focus:outline-none focus:text-emerald-500'><Link to='/' spy={true} smooth={true} offset={50} duration={500}  >Home</Link></button></li>
                <li className='p-4 text-gray-400 hover:text-emerald-500 border-b border-gray-600'><button className='focus:outline-none focus:text-emerald-500'><Link to='formation' spy={true} smooth={true} offset={-100} duration={500}  >Formacion</Link></button></li>
                <li className='p-4 text-gray-400 hover:text-emerald-500 border-b border-gray-600'><button className='focus:outline-none focus:text-emerald-500'><Link to='project' spy={true} smooth={true} offset={-50} duration={500}  >Proyectos</Link></button></li>
                <li className='p-4 text-gray-400 hover:text-emerald-500 border-b border-gray-600'><button className='focus:outline-none focus:text-emerald-500'><Link to='contact' spy={true} smooth={true} offset={50} duration={500}  >Contacto</Link></button></li>

            </ul>
        </div>
    </div>
  )
}

export default Navbar