import React from 'react'

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-orange-400 to-red-500 text-white">
      <div className="container mx-auto px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black tracking-tight">Ready to start your first week?</h2>
          <p className="mt-2 text-white/90">No card required. Cancel any time.</p>
        </div>
        <button className="bg-white text-orange-500 font-bold py-3 px-6 rounded-2xl transition-transform duration-300 hover:-translate-y-0.5 whitespace-nowrap">
          Get Started Free
        </button>
      </div>
    </section>
  )
}

export default CTA
