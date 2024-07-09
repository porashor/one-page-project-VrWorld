import React from 'react'
import hero from "../assets/hero.png"
import { BsPlayBtnFill } from 'react-icons/bs'
import { BiPlayCircle } from 'react-icons/bi'
const Hero = () => {
  return (
    <div className='text-black dark:text-white py-12 sm:py-0 dark:bg-black duration-300 overflow-hidden '>
      <div className='container min-h-[700px] flex relative'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center relative z-10'>
            {/* text section */}
            <div data-aos="zoom-in" className='w-[80%] flex flex-col gap-5 order-2 md:order-1'>
                <h1 className='text-5xl uppercase font-semibold leading-12'>
                    Get ready to see the <span className='gradients bg-clip-text text-transparent'>vr games with this platform</span> 
                </h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni optio ipsam possimus maxime accusamus voluptatum necessitatibus a deleniti, nesciunt animi laborum. Officiis veritatis consequatur qui provident nesciunt aspernatur? Corrupti animi, voluptas natus, itaque odio commodi non eos explicabo quas, illum quasi qui placeat sunt 
                </p>
                <div className='flex gap-5'>
                    <button className='primary-btn'>Get Start</button>
                    <button className='flex items-center gap-3'> <BiPlayCircle className='text-3xl'/> See Demo</button>
                </div>
            </div>
            {/* image section */}
            <div data-aos="zoom-in" data-aos-delay="500" className='order-1 md:order-2'>
                <img src={hero} alt="" className='max-h-[600px]' />
            </div>
        </div>
        {/* animate volv */}
        <div className='w-[300px] h-[300px] gradients absolute rounded-full blur-3xl top-0 left-0 animation-wrapper'></div>
      </div>
    </div>
  )
}

export default Hero
