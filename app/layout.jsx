import { CtaProvider } from '../src/lib/cta-context'
import { Navbar } from '../src/components/Navbar'
import { Footer } from '../src/components/Footer'
import { FloatingActions } from '../src/components/FloatingActions'
import { CtaModal } from '../src/components/CtaModal'
import { HubSpotScript } from '../src/components/HubSpotScript'
import { ScrollToTop } from '../src/components/ScrollToTop'
import { SITE } from '../src/lib/config'
import '../src/index.css'

export const metadata = {
  metadataBase: new URL('https://abhisheksharma.dev'),
  title: 'Abhishek Sharma — Full Stack Developer & AI Automation Expert',
  description:
    'Abhishek Sharma — Full Stack Developer & AI Automation Expert. I build websites and AI systems that businesses actually use, from first conversation to full deployment.',
  keywords: [
    'Abhishek Sharma',
    'Full Stack Developer',
    'AI Automation Expert',
    'website development',
    'WhatsApp CRM',
    'n8n automation',
    'marketing funnels',
    'SEO',
  ],
  authors: [{ name: SITE.name }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    title: 'Abhishek Sharma — Full Stack Developer & AI Automation Expert',
    description:
      'I build websites and AI systems that businesses actually use, from first conversation to full deployment.',
    siteName: 'Abhishek Sharma',
    locale: 'en_US',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#05060b',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CtaProvider>
          <ScrollToTop />
          <HubSpotScript />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingActions />
          <CtaModal />
        </CtaProvider>
      </body>
    </html>
  )
}
