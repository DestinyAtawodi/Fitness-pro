import React from 'react'
import {FaMoon, FaSun, FaDumbbell} from 'react-icons/fa'

const Navbar = () => {
  return (
    <header>
      <div className="container flex items-center justify-between px-8 py-4">

        <div className="flex items-center gap-2">
          <FaDumbbell className="text-orange-400 text-2xl"/>
          <h1 className="text-xl font-bold">Fitness Pro</h1>
        </div>

        <nav className="hidden md:flex gap-8 font-medium">
          <a href="/" className="hover:text-orange-400 transition-duration-300">Home</a>
          <a href="/" className="hover:text-orange-400 transition-duration-300">Features</a>
          <a href="/" className="hover:text-orange-400 transition-duration-300">Pricing</a>
          <a href="/" className="hover:text-orange-400 transition-duration-300">Testimonials</a>
          <a href="/" className="hover:text-orange-400 transition-duration-300">Testimonials</a>
        </nav>

        <button>
          <FaSun className="text-yellow-400 text-lg" />
        </button>

      </div>
    </header>
  )
}

export default Navbar