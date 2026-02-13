import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/sonner"

import './globals.css'
import { Navbar } from '@/components/navbar'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'VedicAstro',
  description: 'Connect with verified Vedic astrologers for personalized horoscopes, kundli matching, and live consultations.',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: true,
  },
  icons: {
    icon: '/Logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Toaster richColors />
      </body>
    </html>
  )
}
