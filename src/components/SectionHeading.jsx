'use client'

import { Reveal } from './Reveal'

export function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignCls =
    align === 'center' ? 'text-center mx-auto' : 'text-left'
  const alignInner =
    align === 'center' ? 'mx-auto' : ''

  return (
    <Reveal className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse" />
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] ${alignInner}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg ${alignInner}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
