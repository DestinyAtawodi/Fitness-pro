import React from 'react'

const quotes = [
  {
    name: 'Amaka O.',
    role: 'Member since 2023',
    quote: 'I stopped guessing what to do at the gym. The plans just make sense for my schedule.',
  },
  {
    name: 'Tunde B.',
    role: 'Member since 2024',
    quote: 'Logging meals next to workouts finally made the connection click for me.',
  },
  {
    name: 'Chiamaka R.',
    role: 'Member since 2022',
    quote: 'The group challenges are the only reason I still show up on Monday mornings.',
  },
]

const Testimonials = () => {
  return (
    <section className="bg-gray-50 dark:bg-neutral-950 dark:text-white">
      <div className="container mx-auto px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-800 dark:text-white max-w-lg">
          Real people, real routines.
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {quotes.map(({ name, role, quote }) => (
            <blockquote
              key={name}
              className="p-6 rounded-2xl bg-white dark:bg-neutral-900 shadow-sm"
            >
              <p className="text-gray-700 dark:text-gray-300">&ldquo;{quote}&rdquo;</p>
              <footer className="mt-4 text-sm font-bold text-gray-800 dark:text-white">
                {name}
                <span className="block font-normal text-gray-500 dark:text-gray-400">{role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
