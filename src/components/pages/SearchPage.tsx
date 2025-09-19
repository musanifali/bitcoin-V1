'use client'

import React, { useState, useEffect } from 'react'
import { Search, ArrowRight, FileText, Globe, Layers, Filter } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface SearchResult {
  title: string
  description: string
  url: string
  category: 'page' | 'chain' | 'guide' | 'resource'
  icon?: React.ReactNode
  content?: string
}

const searchData: SearchResult[] = [
  // Main pages
  {
    title: 'Getting Started',
    description: 'Learn how to get started with Bitcoin Holding',
    url: '/en/getting-started',
    category: 'guide',
    icon: <ArrowRight className="w-4 h-4" />,
    content: 'bitcoin holding tutorial beginner start first time setup wallet'
  },
  {
    title: 'How it Works',
    description: 'Understand how Bitcoin Holding works',
    url: '/en/how-it-works',
    category: 'guide',
    icon: <FileText className="w-4 h-4" />,
    content: 'blockchain technology protocol consensus mechanism'
  },
  {
    title: 'Buy Bitcoin Holding Ecosystem',
    description: 'Learn how to buy Bitcoin Holding tokens',
    url: '/en/buy',
    category: 'guide',
    icon: <ArrowRight className="w-4 h-4" />,
    content: 'purchase exchange trading market price'
  },
  {
    title: 'Bitcoin Core',
    description: 'Bitcoin Holding Core software - Coming Soon',
    url: '/en/bitcoin-core',
    category: 'resource',
    icon: <FileText className="w-4 h-4" />,
    content: 'node software client download install'
  },
  {
    title: 'Resources',
    description: 'Bitcoin Holding resources and documentation',
    url: '/en/resources',
    category: 'resource',
    icon: <Globe className="w-4 h-4" />,
    content: 'documentation guides tutorials help support'
  },
  {
    title: 'Vocabulary',
    description: 'Bitcoin Holding terminology and definitions',
    url: '/en/vocabulary',
    category: 'guide',
    icon: <FileText className="w-4 h-4" />,
    content: 'definitions terms glossary dictionary terminology'
  },
  {
    title: 'Security',
    description: 'Learn about Bitcoin Holding security',
    url: '/en/security',
    category: 'guide',
    icon: <FileText className="w-4 h-4" />,
    content: 'safety protection private keys wallet backup'
  },
  {
    title: 'News',
    description: 'Latest Bitcoin Holding news and updates',
    url: '/en/news',
    category: 'page',
    icon: <Globe className="w-4 h-4" />,
    content: 'updates announcements press releases blog'
  },
  {
    title: 'Events',
    description: 'Bitcoin Holding community events',
    url: '/en/events',
    category: 'page',
    icon: <Globe className="w-4 h-4" />,
    content: 'meetups conferences community gathering'
  },
  // Chains
  {
    title: 'BTC1Ai',
    description: 'AI-Powered Bitcoin with intelligent transaction processing',
    url: '/en/chain/btc1ai',
    category: 'chain',
    icon: <Layers className="w-4 h-4" />,
    content: 'artificial intelligence machine learning smart contracts'
  },
  {
    title: '1Bitcoin1',
    description: 'One-to-One Bitcoin representation with enhanced features',
    url: '/en/chain/1bitcoin1',
    category: 'chain',
    icon: <Layers className="w-4 h-4" />,
    content: 'wrapped bitcoin cross chain bridge defi'
  },
  {
    title: 'BitcoinG1',
    description: 'Next-generation Bitcoin with revolutionary scalability',
    url: '/en/chain/bitcoing1',
    category: 'chain',
    icon: <Layers className="w-4 h-4" />,
    content: 'scalability layer2 fast transactions smart contracts'
  },
  {
    title: 'Bitcoin1USD',
    description: 'Stable Bitcoin fork for everyday transactions',
    url: '/en/chain/bitcoin1usd',
    category: 'chain',
    icon: <Layers className="w-4 h-4" />,
    content: 'stablecoin pegged usd stable value payments'
  },
  {
    title: 'BTC1Qu',
    description: 'Quantum-resistant Bitcoin for ultimate security',
    url: '/en/chain/btc-quantum',
    category: 'chain',
    icon: <Layers className="w-4 h-4" />,
    content: 'quantum resistance post-quantum cryptography security'
  },
  {
    title: 'All Chains',
    description: 'Explore all Bitcoin Holding ecosystem chains',
    url: '/en/chain',
    category: 'page',
    icon: <Layers className="w-4 h-4" />,
    content: 'ecosystem overview all networks'
  }
]

const SearchPage = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [filteredCategory, setFilteredCategory] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const q = urlParams.get('q')
    if (q) {
      setQuery(q)
    }
  }, [])

  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([])
      return
    }

    setIsLoading(true)
    
    // Simulate search delay
    const timer = setTimeout(() => {
      const filtered = searchData.filter(item => {
        const matchesQuery = 
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.content?.toLowerCase().includes(query.toLowerCase())
        
        const matchesCategory = filteredCategory === 'all' || item.category === filteredCategory
        
        return matchesQuery && matchesCategory
      })

      setResults(filtered)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [query, filteredCategory])

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

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'guide', label: 'Guides' },
    { value: 'chain', label: 'Chains' },
    { value: 'resource', label: 'Resources' },
    { value: 'page', label: 'Pages' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Search Bitcoin Holding</h1>
          <p className="text-gray-600">Find guides, resources, and information about the Bitcoin Holding ecosystem</p>
        </div>

        {/* Search Input */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for guides, chains, resources..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bitcoin-500 focus:border-transparent"
                autoFocus
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600 mr-2">Filter by:</span>
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilteredCategory(category.value)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  filteredCategory === category.value
                    ? 'bg-bitcoin-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-bitcoin-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Searching...</p>
            </div>
          ) : results.length > 0 ? (
            <>
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <p className="text-sm text-gray-600">
                  Found {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
                </p>
              </div>
              <div className="divide-y divide-gray-100">
                {results.map((result, index) => (
                  <motion.div
                    key={result.url}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={result.url as any}
                      className="block p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1 text-gray-400">
                          {result.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-medium text-gray-900 hover:text-bitcoin-600 transition-colors">
                              {result.title}
                            </h3>
                            <span className={`px-2 py-1 text-xs rounded-full ${getCategoryColor(result.category)}`}>
                              {result.category}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-2 line-clamp-2">
                            {result.description}
                          </p>
                          <div className="text-xs text-gray-500">
                            {result.url}
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-300 flex-shrink-0" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          ) : query.trim().length > 0 ? (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 mb-4">
                We couldn't find anything matching "{query}". Try different keywords or browse our popular content.
              </p>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-900 mb-3">Popular searches:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Getting Started', 'BTC1Ai', 'Security', 'How it Works'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-bitcoin-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-bitcoin-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Start searching</h3>
              <p className="text-gray-600 mb-4">
                Enter your search terms above to find guides, resources, and information about Bitcoin Holding.
              </p>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-900 mb-3">Popular topics:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {searchData.slice(0, 8).map((item) => (
                    <button
                      key={item.title}
                      onClick={() => setQuery(item.title)}
                      className="p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="text-gray-400">
                          {item.icon}
                        </div>
                        <span className="truncate">{item.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchPage
