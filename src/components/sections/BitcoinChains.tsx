'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { getChainColorSystem } from '@/lib/colors'

const BitcoinChains = () => {
  const bitcoinChains = [
    {
      name: 'BTC1Ai',
      logo: '/en/ai white logo.png',
      id: 'btc1ai'
    },
    {
      name: '1Bitcoin1',
      logo: '/en/1btc1 white logo.png',
      id: 'onebitcoin'
    },
    {
      name: 'BitcoinG1',
      logo: '/en/genesis white logo.png',
      id: 'bitcoing1'
    },
    {
      name: 'Bitcoin1USD',
      logo: '/en/btc1usd white logo.png',
      id: 'bitcoin1usd'
    },
    {
      name: 'BTC1Qu',
      logo: '/en/quantum white logo.png',
      id: 'btcQuantum'
    }
  ]

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-bitcoin-500/20 text-bitcoin-300 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
            ✨ ECOSYSTEM BRANDS - Updated Sep 21, 2025
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Bitcoin Holding <span className="text-bitcoin-400">Ecosystem</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Five powerful brands, one unified vision of decentralized innovation
          </p>
        </motion.div>

        {/* Brand Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-16 lg:gap-20 items-center justify-items-center">
          {bitcoinChains.map((chain, index) => {
            const chainSystem = getChainColorSystem(chain.id)
            return (
              <motion.div
                key={chain.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <Link 
                  href={`/en/chain/${chain.id}` as any} 
                  className="block transition-all duration-300 group-hover:scale-110"
                  title={`Explore ${chain.name}`}
                >
                  {/* Pure Brand Logo */}
                  <div 
                    className="flex items-center justify-center"
                    style={{
                      fontFamily: 'initial',
                      fontSize: 'initial',
                      fontWeight: 'initial',
                      letterSpacing: 'initial',
                      textTransform: 'initial'
                    }}
                  >
                    <img 
                      src={chain.logo} 
                      alt={`${chain.name} Brand Logo`}
                      className="
                        h-16 w-auto
                        object-contain
                        transition-all duration-300
                        filter drop-shadow-lg
                        group-hover:drop-shadow-xl
                      "
                      style={{
                        fontFamily: 'initial',
                        fontSize: 'initial',
                        fontWeight: 'initial'
                      }}
                    />
                  </div>
                  
                  {/* Brand Name */}
                  <div className="
                    mt-3
                    text-center
                    text-sm md:text-base
                    font-semibold
                    text-gray-300
                    group-hover:text-bitcoin-400
                    transition-colors duration-300
                  ">
                    {chain.name}
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
        
        {/* Brand Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              United by Innovation, Powered by Bitcoin Holding
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Each brand in our ecosystem represents a unique approach to blockchain technology, 
              united under the Bitcoin Holding vision of decentralized financial freedom.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default BitcoinChains