import React from 'react'
import BannerPng from "../assets/banner1.png"
import { BiPlayCircle } from 'react-icons/bi'



function Banner(){
  return (
    <div className='container py-6 px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center '>
        <div className='flex items-center justify-center'>
            <img src={BannerPng} alt="" />
        </div>
        <div className='w-[80%] flex flex-col gap-5 order-2 md:order-1'>
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
      </div>
    </div>
  )
}

export default Banner