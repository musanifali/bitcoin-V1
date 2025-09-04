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
      title: 'Services',
      links: [
        { name: 'Investment Plans', href: '#investment-plans' },
        { name: 'Custody Solutions', href: '#custody' },
        { name: 'Portfolio Management', href: '#portfolio' },
        { name: 'Institutional Services', href: '#institutional' },
      ]
    },
    {
      title: 'Platform',
      links: [
        { name: 'Client Dashboard', href: '#dashboard' },
        { name: 'Security Features', href: '#security' },
        { name: 'API Access', href: '#api' },
        { name: 'Mobile App', href: '#mobile' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Investment Guides', href: '#guides' },
        { name: 'Market Analysis', href: '#analysis' },
        { name: 'Research Reports', href: '#research' },
        { name: 'Educational Content', href: '#education' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#careers' },
        { name: 'Contact Support', href: '#support' },
        { name: 'Partner Program', href: '#partners' },
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
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-bitcoin-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">₿</span>
              </div>
              <span className="text-xl font-display font-semibold text-foreground">
                Bitcoin V1
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Professional Bitcoin V1 and investment platform.
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
              <Link href="#legal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Legal
              </Link>
              <Link href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
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
              © {new Date().getFullYear()} Bitcoin V1. Professional Bitcoin investment platform.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
