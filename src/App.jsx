import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Quotes from './Components/Quotes'
import Banner from './Components/Banner'

const App = () => {
  return (
    <div className=' dark:bg-black bg-white text-black dark:text-white'>
      <Navbar/>
      <Hero/>
      <Quotes/>
      <Banner/>
    </div>
  )
}

export default App
