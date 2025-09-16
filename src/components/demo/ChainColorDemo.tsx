/**
 * Chain Color System Demo
 * Showcases the comprehensive Bitcoin chain color system
 */

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { getChainColorSystem, getAllChains } from '@/lib/colors'
import { Copy, Check, Palette, Eye } from 'lucide-react'

const ChainColorDemo = () => {
  const [selectedChain, setSelectedChain] = useState<string>('bitcoin1usd')
  const [copiedClass, setCopiedClass] = useState<string | null>(null)
  
  const allChains = getAllChains()
  const currentSystem = getChainColorSystem(selectedChain)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedClass(text)
    setTimeout(() => setCopiedClass(null), 2000)
  }

  const colorVariants = [
    { name: 'Light Background', class: currentSystem.getBackground('light'), usage: 'Subtle backgrounds, cards' },
    { name: 'Medium Background', class: currentSystem.getBackground('medium'), usage: 'Section backgrounds, sidebars' }, 
    { name: 'Strong Background', class: currentSystem.getBackground('strong'), usage: 'Primary buttons, highlights' },
    { name: 'Primary Text', class: currentSystem.getText('primary'), usage: 'Headings, important text' },
    { name: 'Secondary Text', class: currentSystem.getText('secondary'), usage: 'Body text, descriptions' },
    { name: 'Muted Text', class: currentSystem.getText('muted'), usage: 'Helper text, captions' },
    { name: 'Light Border', class: currentSystem.getBorder('light'), usage: 'Card borders, dividers' },
    { name: 'Medium Border', class: currentSystem.getBorder('medium'), usage: 'Form inputs, containers' },
    { name: 'Strong Border', class: currentSystem.getBorder('strong'), usage: 'Active states, focus rings' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-bitcoin-100 text-bitcoin-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Palette className="w-4 h-4" />
            Chain Color System Demo
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Bitcoin Chain Color System
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive color management for all Bitcoin chain variants with consistent theming and accessibility
          </p>
        </motion.div>

        {/* Chain Selector */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Select a Chain</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {allChains.map((chain) => (
              <button
                key={chain.id}
                onClick={() => setSelectedChain(chain.id)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedChain === chain.id
                    ? `${chain.getBorder('strong')} ${chain.getBackground('light')}`
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg ${chain.getGradient()} flex items-center justify-center text-white text-lg font-bold mb-3 mx-auto`}>
                  {chain.info.icon}
                </div>
                <h3 className={`font-semibold text-sm ${selectedChain === chain.id ? chain.getText('primary') : 'text-gray-900 dark:text-white'}`}>
                  {chain.info.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {chain.info.symbol}
                </p>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Chain Info Panel */}
        <motion.div
          key={selectedChain}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`${currentSystem.getCard()} p-8 rounded-2xl mb-8`}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Chain Details */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl ${currentSystem.getGradient()} flex items-center justify-center text-white text-2xl font-bold`}>
                  {currentSystem.info.icon}
                </div>
                <div>
                  <h2 className={`text-2xl font-bold ${currentSystem.getText('primary')}`}>
                    {currentSystem.info.name}
                  </h2>
                  <p className={`${currentSystem.getText('secondary')}`}>
                    {currentSystem.info.fullName}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Description</span>
                  <p className={`${currentSystem.getText('primary')} mt-1`}>
                    {currentSystem.info.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Category</span>
                    <div className={`${currentSystem.getBadge()} inline-block mt-1`}>
                      {currentSystem.info.category}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</span>
                    <div className={`${currentSystem.getStatus(currentSystem.info.status.toLowerCase() as any)} inline-block mt-1`}>
                      {currentSystem.info.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Palette Preview */}
            <div>
              <h3 className={`text-lg font-semibold ${currentSystem.getText('primary')} mb-4`}>
                Color Palette
              </h3>
              <div className="grid grid-cols-5 gap-2">
                {Object.entries(currentSystem.palette.colors).map(([shade, color]) => (
                  <div key={shade} className="text-center">
                    <div 
                      className="w-12 h-12 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 mb-2"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                      {shade}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Color Classes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Available Classes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {colorVariants.map((variant, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {variant.name}
                  </h3>
                  <button
                    onClick={() => copyToClipboard(variant.class)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    {copiedClass === variant.class ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                
                {/* Preview */}
                <div className={`w-full h-8 rounded-lg ${variant.class} mb-3 border`} />
                
                {/* Class Name */}
                <code className="text-xs font-mono bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded text-gray-800 dark:text-gray-200 block mb-2">
                  {variant.class}
                </code>
                
                {/* Usage */}
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {variant.usage}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Usage Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Component Examples</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Card Example */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Chain Card</h3>
              <div className={`${currentSystem.getCard()} p-6 rounded-xl`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg ${currentSystem.getGradient()} flex items-center justify-center text-white font-bold`}>
                    {currentSystem.info.icon}
                  </div>
                  <div>
                    <h4 className={`font-bold ${currentSystem.getText('primary')}`}>
                      {currentSystem.info.name}
                    </h4>
                    <p className={`text-sm ${currentSystem.getText('secondary')}`}>
                      {currentSystem.info.symbol}
                    </p>
                  </div>
                </div>
                <p className={`text-sm ${currentSystem.getText('muted')} mb-4`}>
                  {currentSystem.info.description}
                </p>
                <button className={`${currentSystem.getButton()} w-full`}>
                  Explore Chain
                </button>
              </div>
            </div>

            {/* Stats Example */} 
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Chain Stats</h3>
              <div className={`${currentSystem.getBackground('light')} p-6 rounded-xl border ${currentSystem.getBorder('light')}`}>
                <h4 className={`font-bold ${currentSystem.getText('primary')} mb-4`}>
                  Network Statistics
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className={`text-sm ${currentSystem.getText('secondary')}`}>Market Cap</span>
                    <span className={`font-semibold ${currentSystem.getText('primary')}`}>$2.1B</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`text-sm ${currentSystem.getText('secondary')}`}>24h Volume</span>
                    <span className={`font-semibold ${currentSystem.getText('primary')}`}>$156M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`text-sm ${currentSystem.getText('secondary')}`}>Active Nodes</span>
                    <span className={`font-semibold ${currentSystem.getText('primary')}`}>15,847</span>
                  </div>
                </div>
                <div className={`${currentSystem.getBadge()} mt-4 inline-flex items-center gap-1`}>
                  <Eye className="w-3 h-3" />
                  Live Data
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default ChainColorDemo
