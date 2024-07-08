import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Quotes from './Components/Quotes'
import Banner from './Components/Banner'
import Banner2 from './Components/Banner2'
import Features from './Components/Features'
import AppStore from './Components/AppStore'
import Foother from './Components/Foother'

const App = () => {
  return (
    <div className=' dark:bg-black bg-white text-black dark:text-white -z-10'>
      <Navbar/>
      <Hero/>
      <Quotes/>
      <Banner/>
      <Banner2/>
      <Features/>
      <AppStore/>
      <Foother/>
    </div>
  )
}

export default App
