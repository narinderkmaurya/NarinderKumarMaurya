import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import { ThemeProvider } from "@/components/theme-provider"

import { Analytics } from '@vercel/analytics/react';

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Narinder Maurya - Portfolio',
  description: 'Narinder Maurya ECE student at NITJ, Jalandhar Punjab. Seasonal Web Developer | DSA | UI/UX Desinger.Ready to collarab on any kind of software projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={manrope.className}> <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
            <Analytics />
          </ThemeProvider></body>
    </html>
  )
}
