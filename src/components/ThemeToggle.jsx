'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../lib/theme'

export function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className={`grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-zinc-200 transition-colors duration-200 hover:border-brand-400 hover:text-white ${className}`}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}
