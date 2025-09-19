'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { getChainColorSystem } from '@/lib/colors'

const BitcoinChains = () => {
  const bitcoinChains = [
    {
      name: 'BTC1Ai',
      logo: '/en/ai white logo.svg',
      id: 'btc1ai'
    },
    {
      name: '1Bitcoin1',
      logo: '/en/1btc1 white logo.svg', 
      id: 'onebitcoin'
    },
    {
      name: 'BitcoinG1',
      logo: '/en/genesis white logo.svg',
      id: 'bitcoing1'
    },
    {
      name: 'Bitcoin1USD',
      logo: '/en/btc1usd white logo.svg',
      id: 'bitcoin1usd'
    },
    {
      name: 'BTC1Qu',
      logo: '/en/quantum white logo.svg',
      id: 'btcQuantum'
    }
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10 max-w-full overflow-hidden"
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
                  <div className={`w-28 h-28 md:w-32 md:h-32 rounded-2xl ${chainSystem.getBackground('strong')} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 cursor-pointer`}>
                    <img src={chain.logo} alt={chain.name} className="w-20 h-20 md:w-24 md:h-24 object-contain" />
                  </div>
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