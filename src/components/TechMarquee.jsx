import { TECH_STACK } from '../lib/config'

export function TechMarquee() {
  const items = [...TECH_STACK, ...TECH_STACK]

  return (
    <div className="relative w-full overflow-hidden py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-4">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="whitespace-nowrap rounded-full border border-white/10 bg-ink-900/60 px-5 py-2 text-sm font-medium text-zinc-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
