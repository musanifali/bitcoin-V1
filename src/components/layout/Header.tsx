'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Search, Globe, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SearchBox from '@/components/ui/SearchBox'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const navigation = [
    {
      name: 'Introduction',
      href: '#',
      dropdown: [
        { name: 'For Individuals', href: '/en/individuals' },
        { name: 'For Businesses', href: '/en/businesses' },
        { name: 'For Developers', href: '/en/development' },
        { name: 'Getting Started', href: '/en/getting-started' },
        { name: 'How It Works', href: '/en/how-it-works' },
        { name: 'White Paper', href: '/bitcoin.pdf' },
      ]
    },
    {
      name: 'Resources',
      href: '#',
      dropdown: [
        { name: 'Resources', href: '/en/resources' },
        { name: 'Choose Your Wallet', href: '/en/choose-your-wallet' },
        { name: 'Exchanges', href: '/en/exchanges' },
        { name: 'Community', href: '/en/community' },
        { name: 'Events', href: '/en/events' },
        { name: 'Vocabulary', href: '/en/vocabulary' },
      ]
    },
    {
      name: 'Participate',
      href: '#',
      dropdown: [
        { name: 'Support Bitcoin Holding', href: '/en/support-bitcoin' },
        { name: 'Buy Bitcoin Holding Ecosystem', href: '/en/buy' },
        { name: 'Full Node', href: '/en/full-node' },
        { name: 'Development', href: '/en/development' },
      ]
    },
    {
      name: 'Chain',
      href: '/en/chain',
      dropdown: [
        { name: 'Bitcoin1USD', href: '/en/chain/bitcoin1usd' },
        { name: '1Bitcoin1', href: '/en/chain/1bitcoin1' },
        { name: 'BitcoinG1', href: '/en/chain/bitcoing1' },
        { name: 'BTC1Ai', href: '/en/chain/btc1ai' },
        { name: 'BTC1Qu', href: '/en/chain/btc-quantum' },
      ]
    },
    {
      name: 'Bitcoin Core',
      href: '/en/bitcoin-core/'
    },
    {
      name: 'News',
      href: '/en/blog'
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
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      // Cleanup timeout on unmount
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  const handleDropdownClick = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const handleMouseEnter = (name: string) => {
    // Clear any pending timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setActiveDropdown(name)
  }

  const handleMouseLeave = () => {
    // Add delay before closing dropdown
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 200) // Increased to 200ms for better reliability
  }

  // Immediate dropdown opening for better responsiveness
  const handleButtonHover = (name: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setActiveDropdown(name)
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img src="/en/btc hnolding logo.svg" alt="Bitcoin Holding" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
              >
                {item.dropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-bitcoin-500 transition-colors rounded-md hover:bg-gray-50 w-full"
                      onMouseOver={() => handleButtonHover(item.name)}
                      onFocus={() => handleButtonHover(item.name)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {activeDropdown === item.name && (
                      <div 
                        className="absolute top-full left-0 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50 mt-1"
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href as any}
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
                    href={item.href as any}
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-bitcoin-500 transition-colors rounded-md hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <SearchBox />
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
                              href={subItem.href as any}
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
                      href={item.href as any}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-bitcoin-500 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-3 py-2 pt-4 border-t border-gray-200 mt-4">
                <div className="mb-4">
                  <SearchBox />
                </div>
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="icon" className="hover:bg-gray-50">
                    <Globe className="h-4 w-4 text-gray-600" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

