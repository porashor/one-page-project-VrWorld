import React from 'react'
import { featuresData } from '../Data/Data'

const Features = () => {
  return (
    <div className='container py-14 sm:min-h-[600px]'>
        <div>
          <h1 data-aos="fade-up" data-aos-delay="400" className='text-3xl font-semibold text-center py-10'>Why Choose Us </h1>
          {/* card sections */}
          <div className='grid grid-cols-1 sm:grid-cols-3 items-center gap-10'>
            {
              featuresData.map((item, index)=>(
                <div data-aos="zoom-in" data-aos-delay={item.aosDelay} className='text-center group space-y-3 sm:space-y-6 sm:py-10 bg-dark hover:gradients hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300 px-10' key={index}>
                  <div className='grid place-items-center'>{item.icon}</div>
                  <h1 className='text-2xl'>{item.name}</h1>
                  <p>{item.descriptions}</p>
                  <a href={item.link} className='inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300'>Learn More...</a>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Features
