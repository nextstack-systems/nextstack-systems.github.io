import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { FloatingActions } from './FloatingActions'
import { CtaModal } from './CtaModal'
import { HubSpotScript } from './HubSpotScript'
import { CtaProvider } from '../lib/cta-context'

export function Layout({ children }) {
  return (
    <CtaProvider>
      <HubSpotScript />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <FloatingActions />
      <CtaModal />
    </CtaProvider>
  )
}
