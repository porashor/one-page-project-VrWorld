import React from 'react'
import { BiPhone } from 'react-icons/bi'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'
import { NavLinks } from '../Data/Data'

const Foother = () => {
  return (
    <>
    <div className='bg-dark py-14 text-white'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10'>
            <div className='space-y-3'>
                <h1 className='text-2xl font-semibold '>Metaverse</h1>
                <p className='text-sm text-slate-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam voluptatem repellendus perferendis unde voluptas sit architecto maiores accusantium totam fuga.</p>
                <div className='flex items-center gap-3'>
                    <BsTwitter className='text-2xl'/>
                    <span className='text-xl '>Conatact with twitter</span>
                </div>
                <div className='flex items-center gap-4'>
                    <BiPhone className='text-2xl'/>
                    <span className='text-xl'>+880-1*********</span>
                </div>
                <div className='text-2xl flex gap-4'>
                    <FaFacebook/>
                    <BsInstagram/>
                    <LiaLinkedin/>
                </div>
            </div>
            <div className='space-y-3'>
                <h1 className='text-2xl font-semibold'>Importent Links</h1>
                <div className='flex flex-col gap-4'>
                    {
                        NavLinks.map((item, index)=>(
                            <div key={index} className=''>
                                <a href={item.links}>
                                    {item.name}
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='space-y-3'>
                <h1 className='text-2xl font-semibold'>Live Links</h1>
                <div className='flex flex-col gap-4'>
                    {
                        NavLinks.map((item, index)=>(
                            <div key={index} className=''>
                                <a href={item.links}>
                                    {item.name}
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='space-y-3'>
                <h1 className='text-2xl font-semibold'> Links</h1>
                <div className='flex flex-col gap-4'>
                    {
                        NavLinks.map((item, index)=>(
                            <div key={index} className=''>
                                <a href={item.links}>
                                    {item.name}
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
      </div>

    </div>
      <div className='py-5 bg-black text-white'>
        <div className='container flex items-center justify-between'>
            <div>all @copy right reserved by parashar</div>
            <div>contact to build your own</div>
        </div>
      </div>
    </>
  )
}

export default Foother
