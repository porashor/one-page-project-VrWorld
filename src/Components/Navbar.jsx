import React, { useState } from 'react'
import Image from "../assets/logo.png"
import { NavLinks } from '../Data/Data'
import { BiMenu, BiX } from 'react-icons/bi';
import { LiaGhostSolid } from 'react-icons/lia';
import { PiSunLight } from 'react-icons/pi';
import DarkMode from './Element/DarkMode';

const Navbar = () => {
    const [show, setShow] = useState(false);
  return (
    <div className='relative text-black dark:text-white'>
      <div className='container py-2 md:py-0'>
        <div className="flex items-center justify-between">
            {/* logo area */}
            <div className='flex items-center gap-3'>
                <img src={Image} alt="image" className='h-16' />
                <p className='text-3xl'>VR <span className='font-bold'>World</span></p>
            </div>
            <div className='flex items-center gap-5'>
                {/* desktop manu section */}
                <nav className='hidden md:block'>
                    <ul className='flex items-center gap-8'>
                        {NavLinks.map((item, index)=>(
                            <li key={index} className='py-4'>
                                <a href={item.links} className='text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-200'>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <DarkMode/>
                {/* mobile viewer slider */}
                <div className='md:hidden text-2xl'>
                    {
                        show ?  <BiX onClick={()=>setShow(false)}/> : <BiMenu onClick={()=>setShow(true)}/>
                    }
                </div>
            </div>
        </div>
      </div>
      {/* absolute menu for nav for mobile device */}
      {
        show ? <div className='absolute -bottom-40 top-[100px] right-0 left-0 h-[500px] bg-white/80 dark:bg-black/80 backdrop-blur-md flex items-center justify-center z-100'>
            <ul className='text-white'>
                        {NavLinks.map((item, index)=>(
                            <li key={index} className='py-4'>
                                <a href={item.links} className='text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors text-black dark:text-white duration-200'>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
        </div> : <div></div>
      }
    </div>
  )
}

export default Navbar
