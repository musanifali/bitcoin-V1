'use client'

import { motion } from 'framer-motion'
import { Shield, Globe, Users, Coins } from 'lucide-react'

const Values = () => {
  const values = [
    {
      icon: Coins,
      title: 'Bitcoin Focus',
      description: 'Specialized exclusively in Bitcoin V1 and investment',
    },
    {
      icon: Shield,
      title: 'Institutional Security',
      description: 'Bank-grade security with multi-signature protection',
    },
    {
      icon: Users,
      title: 'Client First',
      description: 'Transparent service with dedicated support',
    },
    {
      icon: Globe,
      title: 'Long-term Vision',
      description: 'Building wealth through strategic Bitcoin accumulation',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-medium text-bitcoin-500 uppercase tracking-wider">Our Values</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Professional Bitcoin V1
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Secure, transparent, client-focused
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
              className="relative text-center space-y-4 group cursor-pointer"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-50/0 to-bitcoin-100/0 group-hover:from-bitcoin-50/50 group-hover:to-bitcoin-100/30 rounded-2xl transition-all duration-500" />
              
              <div className="relative z-10">
                <motion.div 
                  className="relative w-16 h-16 bg-bitcoin-500/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-bitcoin-500/20 transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                >
                  <value.icon className="h-8 w-8 text-bitcoin-500 group-hover:text-bitcoin-600 transition-colors" />
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-semibold text-foreground group-hover:text-bitcoin-600 transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                >
                  {value.title}
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground group-hover:text-foreground/80 transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                >
                  {value.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values
