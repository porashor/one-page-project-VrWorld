import React, { useEffect, useState } from 'react'
import { BsMoon } from 'react-icons/bs';
import { PiSunLight } from 'react-icons/pi';

const DarkMode = () => {
    const [light, setLight] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme"): "light");
    useEffect(()=>{
        if(light === "light"){
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }else{
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
    },[light])
    
    console.log(document.documentElement)  
    console.log(localStorage.getItem("theme"))

  return (
    <div className='text-2xl'>
      {
        light === "dark" ? <BsMoon onClick={()=>setLight("light")}/> : <PiSunLight onClick={()=>setLight("dark")}/>
      }
    </div>
  )
}

export default DarkMode
