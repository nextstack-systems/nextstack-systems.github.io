import Link from 'next/link'

export function Logo({ className = '' }) {
  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`}>
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 font-display text-lg font-bold text-white shadow-glow">
        A
        <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-white">
        Abhishek<span className="text-brand-400">.dev</span>
      </span>
    </Link>
  )
}
