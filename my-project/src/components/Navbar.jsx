import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun, FaDumbbell, FaBars, FaTimes } from 'react-icons/fa'

const links = ['Home', 'Features', 'Pricing', 'Testimonials']

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-md py-2'
          : 'bg-white dark:bg-neutral-900 py-4'
      } dark:text-white`}
    >
      <div className="container mx-auto flex items-center justify-between px-8">
        <div className="flex items-center gap-2">
          <FaDumbbell className="text-orange-400 text-2xl" />
          <h1 className="text-xl font-black tracking-tight">Fitness Pro</h1>
        </div>

        <nav className="hidden md:flex gap-8 font-medium">
          {links.map((label) => (
            <a
              key={label}
              href="/"
              className="relative text-neutral-500 dark:text-neutral-300 hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300 group"
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="p-2 rounded-full bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 transition-colors duration-300"
            type="button"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setDarkMode((current) => !current)}
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 text-lg" />
            ) : (
              <FaMoon className="text-gray-900 dark:text-gray-300 text-lg" />
            )}
          </button>

          <button
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-neutral-800"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-8 pb-4 font-medium animate-fade-up">
          {links.map((label) => (
            <a
              key={label}
              href="/"
              className="text-neutral-500 dark:text-neutral-300 hover:text-orange-400 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar
