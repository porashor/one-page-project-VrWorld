import React , {useEffect} from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Quotes from './Components/Quotes'
import Banner from './Components/Banner'
import Banner2 from './Components/Banner2'
import Features from './Components/Features'
import AppStore from './Components/AppStore'
import Foother from './Components/Foother'
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {


  useEffect(() => {
    AOS.init({
      disable: "phone", // Show animations only on desktop (optional)
      duration: 700, // Animation duration (optional)
      easing: "ease-out-cubic", // Easing function (optional)
      once: false, // Display animation only once (optional)
    });
  }, []);
  
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
