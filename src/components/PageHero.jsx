'use client'

import { motion } from 'framer-motion'
import { Reveal } from './Reveal'

export function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      <div className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  )
}

export function BreadcrumbDot() {
  return <Reveal>{null}</Reveal>
}
