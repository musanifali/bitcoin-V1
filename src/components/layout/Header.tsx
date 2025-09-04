'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Search, Globe, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const navigation = [
    {
      name: 'Introduction',
      href: '#',
      dropdown: [
        { name: 'For Individuals', href: '#individuals' },
        { name: 'For Businesses', href: '#businesses' },
        { name: 'For Developers', href: '#developers' },
        { name: 'Getting Started', href: '#getting-started' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'White Paper', href: '#whitepaper' },
      ]
    },
    {
      name: 'Resources',
      href: '#',
      dropdown: [
        { name: 'Documentation', href: '#documentation' },
        { name: 'Wallets & Tools', href: '#wallets' },
        { name: 'Community', href: '#community' },
        { name: 'Events', href: '#events' },
        { name: 'Innovations', href: '#innovations' },
        { name: 'Glossary', href: '#glossary' },
      ]
    },
    {
      name: 'Participate',
      href: '#',
      dropdown: [
        { name: 'Support the Network', href: '#support' },
        { name: 'Nodes and Mining', href: '#mining' },
        { name: 'Developer Hub', href: '#developer-hub' },
      ]
    },
    {
      name: 'About',
      href: '#about'
    },
    {
      name: 'FAQ',
      href: '#faq'
    },
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleDropdownClick = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-bitcoin-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">₿</span>
              </div>
              <span className="text-xl font-display font-semibold text-gray-900">
                Bitcoin V1
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownClick(item.name)}
                      className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-bitcoin-500 transition-colors rounded-md hover:bg-gray-50"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-bitcoin-50 hover:text-bitcoin-600 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-bitcoin-500 transition-colors rounded-md hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hover:bg-gray-50">
              <Search className="h-4 w-4 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-gray-50">
              <Globe className="h-4 w-4 text-gray-600" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-gray-50"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownClick(item.name)}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-bitcoin-500 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-4 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-bitcoin-500 hover:bg-gray-50 rounded-md transition-colors"
                              onClick={() => {
                                setIsMenuOpen(false)
                                setActiveDropdown(null)
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-bitcoin-500 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2 pt-4 border-t border-gray-200 mt-4">
                <Button variant="ghost" size="icon" className="hover:bg-gray-50">
                  <Search className="h-4 w-4 text-gray-600" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-gray-50">
                  <Globe className="h-4 w-4 text-gray-600" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
