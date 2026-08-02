'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'

const CtaContext = createContext(null)

export function CtaProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [defaultService, setDefaultService] = useState('')

  const openCta = useCallback((service = '') => {
    setDefaultService(service)
    setOpen(true)
  }, [])

  const closeCta = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <CtaContext.Provider value={{ open, defaultService, openCta, closeCta }}>
      {children}
    </CtaContext.Provider>
  )
}

export function useCta() {
  const ctx = useContext(CtaContext)
  if (!ctx) throw new Error('useCta must be used inside <CtaProvider>')
  return ctx
}
