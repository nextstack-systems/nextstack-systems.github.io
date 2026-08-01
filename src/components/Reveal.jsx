import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

export function Reveal({ children, delay = 0, y = 28, className = '', once = true }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduce ? 0 : y }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({ children, className = '', delayChildren = 0.1, stagger = 0.08 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', y = 24 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function GradientBlob({ className = '' }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} />
  )
}
