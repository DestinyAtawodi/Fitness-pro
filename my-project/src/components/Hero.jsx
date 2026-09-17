import React from 'react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-neutral-900 dark:text-white">
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-orange-300 to-red-400 opacity-20 blur-3xl"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="hero-orbit absolute left-[8%] top-[18%] h-40 w-40 rounded-full border border-orange-300/30" />
        <div className="hero-orbit-reverse absolute bottom-[10%] right-[8%] h-64 w-64 rounded-full border border-orange-400/20" />
        <div className="hero-drift absolute left-[17%] top-[28%] h-3 w-3 rounded-full bg-orange-400 shadow-[0_0_20px_6px_rgba(251,146,60,0.35)]" />
        <div className="hero-drift-reverse absolute right-[18%] top-[20%] h-2 w-2 rounded-full bg-red-400 shadow-[0_0_18px_5px_rgba(248,113,113,0.3)]" />
        <div className="absolute bottom-10 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-300/30 to-transparent" />
      </div>

      <div className="container mx-auto relative flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-16 md:py-24">
        <div className="max-w-xl">
          <p
            className="animate-fade-up text-sm font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500"
            style={{ animationDelay: '0ms' }}
          >
            WORK SMARTER. ACHIEVE MORE.
          </p>
          <h1
            className="animate-fade-up mt-3 text-4xl md:text-5xl font-black tracking-tight text-gray-800 dark:text-white"
            style={{ animationDelay: '80ms' }}
          >
            Simple fitness experience for everyone.
          </h1>
          <p
            className="animate-fade-up mt-4 text-gray-600 dark:text-gray-300"
            style={{ animationDelay: '160ms' }}
          >
            Track your progress and reach your goals with our intuitive fitness platform.
          </p>
          <div
            className="animate-fade-up flex gap-4 mt-8"
            style={{ animationDelay: '240ms' }}
          >
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-2xl transition-transform duration-300 hover:-translate-y-0.5">
              Get Started
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-2xl transition-transform duration-300 hover:-translate-y-0.5">
              Get Pricing
            </button>
          </div>
        </div>

        <div className="animate-float">
          <img
            src="https://res.cloudinary.com/kzekjix6/image/upload/f_auto,q_auto/fitness-B8CUCReL"
            alt="Fitness Pro"
            className="w-full max-w-md drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

