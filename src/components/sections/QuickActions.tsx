'use client'

import { motion } from 'framer-motion'
import { Wallet, Bitcoin, Send, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const QuickActions = () => {
  const actions = [
    {
      icon: Wallet,
      title: 'Secure Storage',
      description: 'Protect your Bitcoin with our institutional-grade security.',
      href: '#storage',
    },
    {
      icon: Bitcoin,
      title: 'Investment Plans',
      description: 'Explore our Bitcoin V1 and accumulation strategies.',
      href: '#investment',
    },
    {
      icon: Send,
      title: 'Portfolio Management',
      description: 'Monitor and optimize your Bitcoin V1 investments.',
      href: '#portfolio',
    },
    {
      icon: Heart,
      title: 'Join Community',
      description: 'Connect with fellow Bitcoin holders and investors.',
      href: '#community',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-bitcoin-500/20 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-bitcoin-500 to-orange-500 rounded-full blur-xl" />
                </div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="flex items-center space-x-4 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    <div className="relative">
                      <motion.div 
                        className="w-12 h-12 bg-bitcoin-500/10 rounded-lg flex items-center justify-center group-hover:bg-bitcoin-500/20 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <action.icon className="h-6 w-6 text-bitcoin-500" />
                      </motion.div>
                      {/* Subtle Border on Hover */}
                      <div className="absolute inset-0 rounded-lg border-2 border-bitcoin-500/0 group-hover:border-bitcoin-500/30 transition-colors duration-300" />
                    </div>
                  </motion.div>
                  <motion.h3 
                    className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-bitcoin-600 transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  >
                    {action.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-muted-foreground mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  >
                    {action.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
                  >
                    <Button variant="ghost" className="p-0 h-auto text-bitcoin-500 hover:text-bitcoin-600 group-hover:translate-x-1 transition-all">
                      Learn more →
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickActions
