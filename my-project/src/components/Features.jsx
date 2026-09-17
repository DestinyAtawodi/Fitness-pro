import React from 'react'
import { FaChartLine, FaUsers, FaAppleAlt, FaBolt } from 'react-icons/fa'

const features = [
  {
    icon: FaChartLine,
    title: 'Track real progress',
    body: 'See your strength, endurance, and consistency change week over week, not just a streak counter.',
  },
  {
    icon: FaUsers,
    title: 'Train with people',
    body: 'Join group challenges and share workouts with friends who keep you honest on hard days.',
  },
  {
    icon: FaAppleAlt,
    title: 'Plan your meals',
    body: 'Simple meal logging that connects to your workouts, so your plate matches your goals.',
  },
  {
    icon: FaBolt,
    title: 'Adapt on the fly',
    body: 'Workouts adjust automatically when you miss a day or push harder than planned.',
  },
]

const Features = () => {
  return (
    <section className="bg-white dark:bg-neutral-900 dark:text-white">
      <div className="container mx-auto px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-800 dark:text-white max-w-lg">
          Everything you need, nothing you don't.
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="p-6 rounded-2xl border border-gray-200 dark:border-neutral-800 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-orange-400 dark:hover:border-orange-400"
            >
              <Icon className="text-orange-400 text-2xl" />
              <h3 className="mt-4 font-bold text-gray-800 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
