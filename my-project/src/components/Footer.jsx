import React from 'react'
import { FaDumbbell, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-8 py-12 grid md:grid-cols-3 gap-8">
        <div className="flex items-center gap-2">
          <FaDumbbell className="text-orange-400 text-xl" />
          <span className="font-black tracking-tight text-white">Fitness Pro</span>
        </div>

        <nav className="flex gap-6 text-sm">
          <a href="/" className="hover:text-orange-400 transition-colors">Home</a>
          <a href="/" className="hover:text-orange-400 transition-colors">Features</a>
          <a href="/" className="hover:text-orange-400 transition-colors">Pricing</a>
          <a href="/" className="hover:text-orange-400 transition-colors">Testimonials</a>
        </nav>

        <div className="flex gap-4 md:justify-end text-lg">
          <a href="/" aria-label="Instagram" className="hover:text-orange-400 transition-colors"><FaInstagram /></a>
          <a href="/" aria-label="Twitter" className="hover:text-orange-400 transition-colors"><FaTwitter /></a>
          <a href="/" aria-label="YouTube" className="hover:text-orange-400 transition-colors"><FaYoutube /></a>
        </div>
      </div>
      <div className="border-t border-neutral-800 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Fitness Pro. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
