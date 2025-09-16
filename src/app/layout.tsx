import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import AppLoader from '@/components/ui/AppLoader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bitcoin Holding - Open source P2P money',
  description: 'Bitcoin Holding is an innovative payment network and a new kind of money. Find all you need to know and get started with Bitcoin Holding on bitcoin.org.',
  keywords: 'bitcoin holding, cryptocurrency, digital currency, blockchain, peer-to-peer, decentralized, open source',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppLoader />
        {children}
      </body>
    </html>
  )
}
