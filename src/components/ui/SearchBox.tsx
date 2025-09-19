'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Search, X, ArrowRight, FileText, Globe, Layers } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface SearchResult {
  title: string
  description: string
  url: string
  category: 'page' | 'chain' | 'guide' | 'resource'
  icon?: React.ReactNode
}

const searchData: SearchResult[] = [
  // Main pages
  {
    title: 'Getting Started',
    description: 'Learn how to get started with Bitcoin Holding',
    url: '/en/getting-started',
    category: 'guide',
    icon: <ArrowRight className="w-4 h-4" />
  },
  {
    title: 'How it Works',
    description: 'Understand how Bitcoin Holding works',
    url: '/en/how-it-works',
    category: 'guide',
    icon: <FileText className="w-4 h-4" />
  },
  {
    title: 'Buy Bitcoin Holding Ecosystem',
    description: 'Learn how to buy Bitcoin Holding tokens',
    url: '/en/buy',
    category: 'guide',
    icon: <ArrowRight className="w-4 h-4" />
  },
  {
    title: 'Bitcoin Core',
    description: 'Bitcoin Holding Core software - Coming Soon',
    url: '/en/bitcoin-core',
    category: 'resource',
    icon: <FileText className="w-4 h-4" />
  },
  {
    title: 'Resources',
    description: 'Bitcoin Holding resources and documentation',
    url: '/en/resources',
    category: 'resource',
    icon: <Globe className="w-4 h-4" />
  },
  {
    title: 'Vocabulary',
    description: 'Bitcoin Holding terminology and definitions',
    url: '/en/vocabulary',
    category: 'guide',
    icon: <FileText className="w-4 h-4" />
  },
  {
    title: 'Security',
    description: 'Learn about Bitcoin Holding security',
    url: '/en/security',
    category: 'guide',
    icon: <FileText className="w-4 h-4" />
  },
  {
    title: 'News',
    description: 'Latest Bitcoin Holding news and updates',
    url: '/en/news',
    category: 'page',
    icon: <Globe className="w-4 h-4" />
  },
  {
    title: 'Events',
    description: 'Bitcoin Holding community events',
    url: '/en/events',
    category: 'page',
    icon: <Globe className="w-4 h-4" />
  },
  // Chains
  {
    title: 'BTC1Ai',
    description: 'AI-Powered Bitcoin with intelligent transaction processing',
    url: '/en/chain/btc1ai',
    category: 'chain',
    icon: <Layers className="w-4 h-4" />
  },
  {
    title: '1Bitcoin1',
    description: 'One-to-One Bitcoin representation with enhanced features',
    url: '/en/chain/1bitcoin1',
    category: 'chain',
    icon: <Layers className="w-4 h-4" />
  },
  {
    title: 'BitcoinG1',
    description: 'Next-generation Bitcoin with revolutionary scalability',
    url: '/en/chain/bitcoing1',
    category: 'chain',
    icon: <Layers className="w-4 h-4" />
  },
  {
    title: 'Bitcoin1USD',
    description: 'Stable Bitcoin fork for everyday transactions',
    url: '/en/chain/bitcoin1usd',
    category: 'chain',
    icon: <Layers className="w-4 h-4" />
  },
  {
    title: 'BTC1Qu',
    description: 'Quantum-resistant Bitcoin for ultimate security',
    url: '/en/chain/btc-quantum',
    category: 'chain',
    icon: <Layers className="w-4 h-4" />
  },
  {
    title: 'All Chains',
    description: 'Explore all Bitcoin Holding ecosystem chains',
    url: '/en/chain',
    category: 'page',
    icon: <Layers className="w-4 h-4" />
  }
]

const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === '/' && !isOpen) {
        event.preventDefault()
        setIsOpen(true)
        inputRef.current?.focus()
      }
      
      if (event.key === 'Escape') {
        setIsOpen(false)
        setQuery('')
        setResults([])
        setSelectedIndex(-1)
      }

      if (isOpen && results.length > 0) {
        if (event.key === 'ArrowDown') {
          event.preventDefault()
          setSelectedIndex(prev => (prev + 1) % results.length)
        }
        if (event.key === 'ArrowUp') {
          event.preventDefault()
          setSelectedIndex(prev => prev <= 0 ? results.length - 1 : prev - 1)
        }
        if (event.key === 'Enter' && selectedIndex >= 0) {
          event.preventDefault()
          window.location.href = results[selectedIndex].url
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex])

  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([])
      setSelectedIndex(-1)
      return
    }

    const filtered = searchData.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    )

    setResults(filtered.slice(0, 8)) // Limit to 8 results
    setSelectedIndex(-1)
  }, [query])

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'chain':
        return 'bg-bitcoin-100 text-bitcoin-700'
      case 'guide':
        return 'bg-blue-100 text-blue-700'
      case 'resource':
        return 'bg-green-100 text-green-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div ref={searchRef} className="relative">
      {/* Search Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors border border-gray-200 rounded-lg hover:border-gray-300 min-w-0"
      >
        <Search className="w-4 h-4 flex-shrink-0" />
        <span className="hidden sm:inline">Search...</span>
        <kbd className="hidden md:inline-block px-2 py-1 text-xs bg-gray-100 rounded">
          /
        </kbd>
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Search Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="absolute top-full right-0 mt-2 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden"
            >
              {/* Search Input */}
              <div className="flex items-center px-4 py-3 border-b border-gray-100">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search Bitcoin Holding..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 text-sm text-gray-900 placeholder-gray-500 bg-transparent border-0 focus:outline-none"
                  autoFocus
                />
                {query && (
                  <button
                    onClick={() => {
                      setQuery('')
                      setResults([])
                    }}
                    className="ml-2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {results.length > 0 ? (
                  <div className="py-2">
                    {results.map((result, index) => (
                      <Link
                        key={result.url}
                        href={result.url}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-start px-4 py-3 hover:bg-gray-50 transition-colors ${
                          index === selectedIndex ? 'bg-bitcoin-50' : ''
                        }`}
                      >
                        <div className="flex-shrink-0 mt-0.5 mr-3 text-gray-400">
                          {result.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-sm font-medium text-gray-900 truncate">
                              {result.title}
                            </h3>
                            <span className={`px-2 py-0.5 text-xs rounded-full ${getCategoryColor(result.category)}`}>
                              {result.category}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 line-clamp-2">
                            {result.description}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-300 flex-shrink-0 ml-2 mt-1" />
                      </Link>
                    ))}
                  </div>
                ) : query.trim().length > 0 ? (
                  <div className="px-4 py-8 text-center text-sm text-gray-500">
                    No results found for "{query}"
                  </div>
                ) : (
                  <div className="px-4 py-6">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Popular searches</h3>
                    <div className="space-y-2">
                      {searchData.slice(0, 4).map((item) => (
                        <Link
                          key={item.url}
                          href={item.url}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center text-sm text-gray-600 hover:text-bitcoin-600 transition-colors"
                        >
                          <div className="mr-2 text-gray-400">
                            {item.icon}
                          </div>
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2 border-t border-gray-100 bg-gray-50 text-xs text-gray-500">
                <div className="flex items-center justify-between">
                  <span>Press <kbd className="px-1 bg-white rounded">↵</kbd> to select</span>
                  <span>Press <kbd className="px-1 bg-white rounded">ESC</kbd> to close</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SearchBox
