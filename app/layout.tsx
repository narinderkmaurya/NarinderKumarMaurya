import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import { ThemeProvider } from "@/components/theme-provider"

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Narinder Maurya',
  description: 'Portolio of Narinder Kumar Mauyra, ECE at NITJ, Punjab, India.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}> <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider></body>
    </html>
  )
}
