import type { Metadata } from 'next'
import { Poppins, Noto_Serif_Ethiopic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});
const notoEthiopic = Noto_Serif_Ethiopic({ 
  subsets: ["ethiopic"],
  weight: ["400", "600", "700"],
  variable: "--font-ethiopic"
});

export const metadata: Metadata = {
  title: 'ኑ ጦቢያ | Come and See Ethiopia',
  description: 'Discover Ethiopia&apos;s rich heritage, breathtaking landscapes, and vibrant cultures. Your trusted guide to safe travel across all Ethiopian regions.',
  generator: 'v0.app',
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
    <html lang="en" className={`${poppins.variable} ${notoEthiopic.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
