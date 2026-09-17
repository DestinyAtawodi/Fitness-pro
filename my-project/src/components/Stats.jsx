import React, { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 12000, suffix: '+', label: 'Active members' },
  { value: 850, suffix: '+', label: 'Workouts logged daily' },
  { value: 35, suffix: '', label: 'Certified trainers' },
  { value: 4.9, suffix: '', label: 'Average rating', decimals: 1 },
]

const useCountUp = (target, decimals, active) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = null
    const duration = 1400

    const step = (timestamp) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(target * eased)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target])

  return decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString()
}

const StatItem = ({ stat, active }) => {
  const display = useCountUp(stat.value, stat.decimals, active)
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-black tracking-tight text-lime-300">
        {display}
        {stat.suffix}
      </p>
      <p className="mt-2 text-neutral-400 text-sm">{stat.label}</p>
    </div>
  )
}

const Stats = () => {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-neutral-900 text-white">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-16">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} active={active} />
        ))}
      </div>
    </section>
  )
}

export default Stats
