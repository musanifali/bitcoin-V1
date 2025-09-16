'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { getChainColorSystem } from '@/lib/colors'

const BitcoinChains = () => {
  const bitcoinChains = [
    {
      name: 'Bitcoin1USD',
      logo: '₿$',
      id: 'bitcoin1usd'
    },
    {
      name: '1Bitcoin1',
      logo: '1₿1', 
      id: 'onebitcoin'
    },
    {
      name: 'BitcoinG1',
      logo: '₿G1',
      id: 'bitcoing1'
    },
    {
      name: 'BTC1Ai',
      logo: '₿AI',
      id: 'btc1ai'
    },
    {
      name: 'BTC Quantum',
      logo: '₿Q',
      id: 'btcQuantum'
    }
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-3">
            ✅ UPDATED - Sep 15, 2025
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Bitcoin Ecosystem
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Click any logo below to explore that Bitcoin chain's dedicated landing page
          </p>
        </motion.div>

        {/* Simple Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16"
        >
          {bitcoinChains.map((chain, index) => {
            const chainSystem = getChainColorSystem(chain.id)
            return (
              <motion.div
                key={chain.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="group"
              >
                <Link href={`/en/chain/${chain.id}` as any} className="block">
                  {/* Logo Only */}
                  <div className={`w-20 h-20 rounded-2xl ${chainSystem.getBackground('strong')} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 cursor-pointer`}>
                    {chain.logo}
                  </div>
                  
                  {/* Chain Name - Simple */}
                  <p className="text-center text-sm font-medium text-gray-700 dark:text-gray-300 mt-3 group-hover:text-bitcoin-500 transition-colors cursor-pointer">
                    {chain.name}
                  </p>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}

export default BitcoinChains