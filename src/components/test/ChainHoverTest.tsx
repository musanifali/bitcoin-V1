'use client'

import { getChainColorSystem } from '@/lib/colors'

const ChainHoverTest = () => {
  const chains = [
    { id: 'bitcoin1usd', name: 'Bitcoin1USD', color: 'green' },
    { id: 'onebitcoin', name: '1Bitcoin1', color: 'blue' },
    { id: 'bitcoing1', name: 'BitcoinG1', color: 'purple' },
    { id: 'btc1ai', name: 'BTC1Ai', color: 'cyan' },
    { id: 'btcQuantum', name: 'BTC Quantum', color: 'orange' },
  ]

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Chain Hover Effects Test
      </h1>
      
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {chains.map((chain) => {
          const system = getChainColorSystem(chain.id)
          
          const hoverClasses = {
            green: 'hover:bg-green-50 dark:hover:bg-gray-700 hover:border-green-300',
            blue: 'hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-blue-300',
            purple: 'hover:bg-purple-50 dark:hover:bg-gray-700 hover:border-purple-300',
            cyan: 'hover:bg-cyan-50 dark:hover:bg-gray-700 hover:border-cyan-300',
            orange: 'hover:bg-orange-50 dark:hover:bg-gray-700 hover:border-orange-300',
          }
          
          return (
            <div key={chain.id} className="group">
              <div className={`
                bg-white dark:bg-gray-800 
                border ${system.getBorder('light')} 
                ${hoverClasses[chain.color as keyof typeof hoverClasses]}
                hover:shadow-lg 
                p-6 rounded-xl 
                transition-all duration-300 
                group-hover:scale-105
                cursor-pointer
              `}>
                {/* Chain Logo */}
                <div className={`
                  w-16 h-16 rounded-lg 
                  ${system.getGradient()} 
                  flex items-center justify-center 
                  text-white text-xl font-bold 
                  mb-4 mx-auto shadow-lg 
                  group-hover:shadow-xl transition-all duration-300
                `}>
                  {system.info.icon}
                </div>
                
                {/* Chain Info */}
                <div className="text-center">
                  <h3 className={`
                    font-bold text-gray-900 dark:text-white 
                    group-hover:${system.getText('primary')} 
                    mb-2 transition-colors duration-300
                  `}>
                    {chain.name}
                  </h3>
                  
                  <div className={`${system.getBadge()} inline-block`}>
                    {system.info.symbol}
                  </div>
                </div>
                
                {/* Hover Indicator */}
                <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className={`text-xs ${system.getText('secondary')} font-medium`}>
                    Hover working! ✓
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          Hover over each card to see the chain-specific color effects
        </p>
      </div>
    </div>
  )
}

export default ChainHoverTest
