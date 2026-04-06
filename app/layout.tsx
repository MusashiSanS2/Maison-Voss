import type { Metadata } from 'next'
import { Cormorant_Garamond, Cormorant_Infant, Raleway } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { CustomCursor } from '@/components/custom-cursor'
import { PageTransition } from '@/components/page-transition'
import { Footer } from '@/components/footer'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const cormorantInfant = Cormorant_Infant({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Maison Voss | Alfaiataria Masculina de Alto Padrão',
  description: 'Alfaiataria masculina artesanal desde 1987. Peças únicas feitas sob medida com tecidos italianos e ingleses de excelência.',
  keywords: ['alfaiataria', 'ternos sob medida', 'luxo', 'moda masculina', 'artesanal'],
  authors: [{ name: 'Maison Voss' }],
  openGraph: {
    title: 'Maison Voss | Alfaiataria Masculina de Alto Padrão',
    description: 'Alfaiataria masculina artesanal desde 1987. Peças únicas feitas sob medida.',
    type: 'website',
    locale: 'pt_BR',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${cormorantGaramond.variable} ${cormorantInfant.variable} ${raleway.variable}`}>
      <body className="font-sans antialiased bg-[#0a0a0a] text-[#e8e4dc] min-h-screen">
        <CustomCursor />
        <Header />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
