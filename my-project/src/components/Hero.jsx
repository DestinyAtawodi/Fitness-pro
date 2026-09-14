import React from 'react'


const Hero = () => {
  return (
    <section className="bg-white dark:bg-neutral-900 dark:text-white shadow-md">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-16">
          
        <div>
          <p className="text-2xl text-gray-600 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">WORK SMARTER. ACHIEVE MORE.</p>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Simple fitness experience for everyone.</h1>
          <p className="text-gray-600 dark:text-gray-300">Track your progress and reach your goals with our intuitive fitness platform.</p>
        </div>

        <div>
          <img src="https://res.cloudinary.com/kzekjix6/image/upload/f_auto,q_auto/fitness-B8CUCReL" alt="Fitness Pro" />
        </div>

        </div>
        <div><button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">Get Started</button> <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">Get Pricing</button></div>
    </section>
  )
}

export default Hero