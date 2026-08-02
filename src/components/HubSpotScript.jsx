'use client'

import { useEffect } from 'react'
import { HUBSPOT } from '../lib/config'

// Loads the HubSpot tracking code which also enables the live chat widget.
export function HubSpotScript() {
  useEffect(() => {
    if (!HUBSPOT.chatEnabled || !HUBSPOT.portalId) return

    const existing = document.getElementById('hs-script-loader')
    if (existing) return

    const script = document.createElement('script')
    script.id = 'hs-script-loader'
    script.async = true
    script.defer = true
    script.src = `//js.hs-scripts.com/${HUBSPOT.portalId}.js`
    document.body.appendChild(script)
  }, [])

  return null
}
