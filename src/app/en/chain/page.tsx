'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, DollarSign, ArrowUpDown, Layers, Brain, Atom } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'

export default function ChainsIndexPage() {
  const chains = [
    {
      id: 'bitcoin1usd',
      name: 'Bitcoin1USD',
      tagline: 'Stable Value',
      description: 'The first truly stable Bitcoin fork designed for everyday transactions with price stability.',
      logo: '/en/btc1usd white logo.png',
      color: 'from-green-500 to-emerald-600',
      icon: DollarSign,
      features: ['Price Stability', 'Fast Transactions', 'Low Volatility'],
      stats: { marketCap: '$2.4B', volume: '$847M' }
    },
    {
      id: '1bitcoin1',
      name: '1Bitcoin1',
      tagline: 'One-to-One',
      description: 'Direct 1:1 Bitcoin representation with enhanced features and cross-chain compatibility.',
      logo: '/en/1btc1 white logo.svg',
      color: 'from-blue-500 to-indigo-600',
      icon: ArrowUpDown,
      features: ['1:1 Bitcoin Backing', 'Cross-Chain Bridge', 'DeFi Compatible'],
      stats: { bitcoinLocked: '45,231', uptime: '99.98%' }
    },
    {
      id: 'bitcoing1',
      name: 'BitcoinG1',
      tagline: 'Generation One',
      description: 'Next-generation Bitcoin with revolutionary scalability and smart contracts.',
      logo: '/en/genesis white logo.png',
      color: 'from-purple-500 to-violet-600',
      icon: Layers,
      features: ['100K+ TPS', 'Smart Contracts', '99% Energy Efficient'],
      stats: { tps: '100K+', contracts: '47K' }
    },
    {
      id: 'btc1ai',
      name: 'BTC1Ai',
      tagline: 'AI-Powered',
      description: 'AI-enhanced Bitcoin with intelligent transaction processing and predictive analytics.',
      logo: '/en/ai white logo.png',
      color: 'from-cyan-500 to-teal-600',
      icon: Brain,
      features: ['AI Transaction Routing', 'Predictive Analytics', 'Automated Trading'],
      stats: { aiAccuracy: '94.7%', feeReduction: '67%' }
    },
    {
      id: 'btc-quantum',
      name: 'BTC1Qu',
      tagline: 'Quantum-Safe',
      description: 'Quantum-resistant Bitcoin for ultimate future-proof security against next-gen threats.',
      logo: '/en/quantum white logo.png',
      color: 'from-orange-500 to-red-500',
      icon: Atom,
      features: ['Quantum Resistance', 'Post-Quantum Crypto', 'Future-Proof Security'],
      stats: { securityRating: 'AAA+', quantumAttacks: '0' }
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-bitcoin-50 text-bitcoin-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              ⚡ Multi-Chain Ecosystem
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Bitcoin Holding
              <span className="block bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Chain Ecosystem
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Explore our portfolio of five revolutionary Bitcoin forks, each designed to solve unique challenges in the digital economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chains Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {chains.map((chain, index) => (
              <motion.div
                key={chain.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/en/chain/${chain.id}` as any}>
                  <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] h-full">
                    
                    {/* Chain Name Header */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{chain.name}</h3>
                      <span className="text-sm text-gray-500 font-medium">{chain.tagline}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {chain.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {chain.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(chain.stats).slice(0, 2).map(([key, value], idx) => (
                        <div key={idx} className="text-center p-3 bg-gray-50 rounded-xl">
                          <div className="font-bold text-gray-900">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-orange-500 font-medium text-sm group-hover:text-orange-600 transition-colors">
                        Learn More
                      </span>
                      <ArrowRight className="h-5 w-5 text-orange-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Explore Our Ecosystem?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Each chain offers unique advantages. Choose the one that fits your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-orange-200 text-orange-600 hover:border-orange-500">
                Compare All Chains
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
