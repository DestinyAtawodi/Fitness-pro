import React from 'react'
import {FaMoon, FaSun, FaDumbbell} from 'react-icons/fa'
const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-white dark:bg-neutral-900 dark:text-white shadow-md">
      <div className="container flex items-center justify-between px-8 py-4">

        <div className="flex items-center gap-2">
          <FaDumbbell className="text-orange-400 text-2xl"/>
          <h1 className="text-xl font-bold">Fitness Pro</h1>
        </div>

        <nav className="hidden md:flex gap-8 font-medium">
          <a href="/" className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300 transition-duration-300">Home</a>
          <a href="/" className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300 transition-duration-300">Features</a>
          <a href="/" className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300 transition-duration-300">Pricing</a>
          <a href="/" className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300 transition-duration-300">Testimonials</a>
          <a href="/" className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300 transition-duration-300">Testimonials</a>
        </nav>

        <button
        className="ml-6 p-2 rounded-full bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 transition-colors duration-300"
        type="button"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        onClick={() => setDarkMode((currentMode) => !currentMode)}
        > {
          darkMode ? (
            <FaSun className="text-yellow-400 text-lg" />
          ) : (
            <FaMoon className="text-gray-900 dark:text-gray-300 text-lg" />
          )
        }
        </button>

      </div>
    </header>
  )
}

export default Navbar