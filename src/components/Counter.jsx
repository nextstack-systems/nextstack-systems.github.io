import { useEffect, useRef } from 'react'
import { useInView, useReducedMotion, animate } from 'framer-motion'

export function Counter({ to, duration = 1.6, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      ref.current.textContent = `${prefix}${to}${suffix}`
      return
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.round(v).toLocaleString('en-IN')}${suffix}`
        }
      },
    })
    return () => controls.stop()
  }, [inView, to, duration, suffix, prefix, reduce])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}0{suffix}
    </span>
  )
}
