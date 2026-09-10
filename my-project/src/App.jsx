 import React from 'react'
 import {useState, useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar' 
import Hero from './components/Hero'

const App = () => {
   const [darkMode, setDarkMode] = useState(
    () => {
      const savedTheme = localStorage.getItem("theme")
      return savedTheme ? savedTheme === "dark" : true
    })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  })
  return (
    <>
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
    </div>
    </>
  )
}

export default App