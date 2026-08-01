import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="relative text-center">
        <p className="font-display text-8xl font-bold text-gradient sm:text-9xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
          The page you're looking for doesn't exist or has moved. Let's get you back somewhere
          useful.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:scale-[1.03]"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </div>
    </section>
  )
}
