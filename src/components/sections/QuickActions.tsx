'use client'

import { motion } from 'framer-motion'
import { BookOpen, Shield, Eye, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const QuickActions = () => {
  const educationCards = [
    {
      icon: BookOpen,
      title: 'Things You Need to Know',
      description: 'Essential Bitcoin knowledge every user should understand before getting started.',
      href: '/en/you-need-to-know',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Shield,
      title: 'Stay Safe',
      description: 'Learn how to secure your wallet and protect your Bitcoin from threats.',
      href: '/en/secure-your-wallet',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Eye,
      title: 'Privacy Matters',
      description: 'Understand Bitcoin privacy features and how to protect your financial data.',
      href: '/en/protect-your-privacy',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Education Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master the fundamentals of Bitcoin with our comprehensive educational resources
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group cursor-pointer"
            >
              <a href={card.href} className="block">
                <div className="relative p-8 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-bitcoin-500/20 overflow-hidden h-full">
                  {/* Background Gradient */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${card.color} rounded-full blur-xl`} />
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="flex items-center space-x-4 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    >
                      <div className="relative">
                        <motion.div 
                          className="w-16 h-16 bg-bitcoin-500/10 rounded-xl flex items-center justify-center group-hover:bg-bitcoin-500/20 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <card.icon className="h-8 w-8 text-bitcoin-500" />
                        </motion.div>
                        <div className="absolute inset-0 rounded-xl border-2 border-bitcoin-500/0 group-hover:border-bitcoin-500/30 transition-colors duration-300" />
                      </div>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-bitcoin-600 transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                    >
                      {card.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-muted-foreground mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    >
                      {card.description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
                      className="flex items-center text-bitcoin-500 hover:text-bitcoin-600 group-hover:translate-x-1 transition-all font-medium"
                    >
                      Learn more 
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickActions
