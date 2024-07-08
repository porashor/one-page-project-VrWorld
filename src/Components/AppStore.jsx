import React from 'react'
import app from "../assets/website/app_store.png"
import soft from "../assets/website/play_store.png"
const AppStore = () => {
  return (
    <div className='container py-14'>
      <div className='text-center w-[400px] mx-auto space-y-3'>
        <h1 className='text-3xl font-semibold capitalize text-center '>Get start with our app</h1>
        <p className='text-sm text-slate-500'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae minus suscipit tenetur rerum fugit rem!
        </p>
        <div className='flex items-center gap-4 '>
            <img src={app} alt="" className='h-[60px]' />
            <img src={soft} alt="" className='h-[60px]' />
        </div>
      </div>
    </div>
  )
}

export default AppStore
