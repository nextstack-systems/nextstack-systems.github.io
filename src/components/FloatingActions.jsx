import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP } from '../lib/config'
import { useCta } from '../lib/cta-context'

export function FloatingActions() {
  const { openCta } = useCta()
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            className="mb-1 rounded-2xl rounded-br-md border border-white/10 bg-ink-850/95 px-4 py-2.5 text-sm text-zinc-300 shadow-xl backdrop-blur-xl"
          >
            Get a free project estimate — usually under 24h.
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => openCta()}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:scale-[1.03] hover:shadow-glow-cyan"
      >
        <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center">
          <span className="absolute h-4 w-4 animate-ping rounded-full bg-accent-400/60" />
          <span className="relative h-2.5 w-2.5 rounded-full bg-accent-400" />
        </span>
        Let's Talk
      </button>

      <a
        href={WHATSAPP.url}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.6)] transition-transform duration-300 hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-wa/40" />
        <MessageCircle className="relative h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
      </a>
    </div>
  )
}
