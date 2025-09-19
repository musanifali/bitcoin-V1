'use client'

import Link from 'next/link'
import { Github, Twitter, Globe, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const Footer = () => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  const footerSections = [
    {
      title: 'Getting Started',
      links: [
        { name: 'Choose Your Wallet', href: '/en/choose-your-wallet' },
        { name: 'How It Works', href: '/en/how-it-works' },
        { name: 'Getting Started', href: '/en/getting-started' },
        { name: 'Download', href: '/en/download' },
      ]
    },
    {
      title: 'Learn',
      links: [
        { name: 'Things You Need to Know', href: '/en/you-need-to-know' },
        { name: 'Secure Your Wallet', href: '/en/secure-your-wallet' },
        { name: 'Protect Your Privacy', href: '/en/protect-your-privacy' },
        { name: 'Bitcoin Core', href: '/en/bitcoin-core/' },
      ]
    },
    {
      title: 'Participate',
      links: [
        { name: 'Support Bitcoin Holding', href: '/en/support-bitcoin' },
        { name: 'Development', href: '/en/development' },
        { name: 'Run a Full Node', href: '/en/full-node' },
        { name: 'Resources', href: '/en/resources' },
      ]
    },
    {
      title: 'Community',
      links: [
        { name: 'Community Forums', href: '/en/community' },
        { name: 'Exchanges', href: '/en/exchanges' },
        { name: 'Events', href: '/en/events' },
        { name: 'News & Blog', href: '/en/blog' },
      ]
    }
  ]

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo Section */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <img src="/en/btc hnolding logo.svg" alt="Bitcoin Holding" className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              An open-source, peer-to-peer digital currency that empowers you to store and exchange value without relying on a central authority.
            </p>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href as any}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <Link href={"/en/about-us" as any} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link href={"/en/privacy" as any} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href={"/en/legal" as any} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Legal
              </Link>
              <Link href={"/en/press" as any} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Press
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon">
                <Globe className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Bitcoin Holding. Supporting Bitcoin Holding since 2009.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
