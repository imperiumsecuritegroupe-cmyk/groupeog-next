'use client'

import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  count: number
  suffix?: string
  className?: string
}

export default function Counter({ count, suffix = '', className = 'stat-num' }: CounterProps) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const duration = 1800
            const step = count / (duration / 16)
            let current = 0
            const timer = setInterval(() => {
              current += step
              if (current >= count) {
                current = count
                clearInterval(timer)
              }
              setValue(Math.floor(current))
            }, 16)
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [count])

  return (
    <span ref={ref} className={className}>
      {value}{suffix}
    </span>
  )
}
