'use client'

import { motion } from 'framer-motion'
import { Heart, ShoppingCart, DollarSign, Code, Server, ArrowRight, Users, BookOpen, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Participate = () => {
  const primaryActions = [
    {
      icon: ShoppingCart,
      title: 'Buy Bitcoin Holding Ecosystem',
      description: 'Start your Bitcoin Holding journey by purchasing your first coins safely and securely',
      href: '/en/buy',
      color: 'from-green-500 to-green-600',
      featured: true
    },
    {
      icon: DollarSign,
      title: 'Sell Bitcoin Holding Ecosystem',
      description: 'Learn how to safely sell your Bitcoin Holding when you need to convert back to fiat',
      href: '/en/sell',
      color: 'from-blue-500 to-blue-600',
      featured: true
    }
  ]

  const communityActions = [
    {
      icon: Heart,
      title: 'Support Bitcoin Holding',
      description: 'Learn how to contribute to the Bitcoin Holding network and ecosystem',
      href: '/en/support-bitcoin',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Server,
      title: 'Run a Full Node',
      description: 'Help secure the Bitcoin Holding network by running your own node',
      href: '/en/full-node',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Contribute to Bitcoin Holding development and open-source projects',
      href: '/en/development',
      color: 'from-purple-500 to-purple-600',
    }
  ]

  const educationActions = [
    {
      icon: BookOpen,
      title: 'Learn Bitcoin Holding',
      description: 'Understand the fundamentals of Bitcoin Holding technology',
      href: '/en/how-it-works',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Users,
      title: 'Join Community',
      description: 'Connect with fellow Bitcoin Holding enthusiasts worldwide',
      href: '/en/community',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Shield,
      title: 'Security Best Practices',
      description: 'Learn how to keep your Bitcoin Holding safe and secure',
      href: '/en/secure-your-wallet',
      color: 'from-teal-500 to-teal-600',
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Participate in Bitcoin Holding
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Bitcoin Holding thrives through community participation. Discover how you can contribute 
              to the network, development, and adoption of this revolutionary technology.
            </p>
          </motion.div>
        </div>

        {/* Featured Actions - Buy/Sell */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {primaryActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <a href={action.href} className="block">
                  <div className={`relative bg-gradient-to-br ${action.color} rounded-2xl p-8 text-white overflow-hidden h-64`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
                    </div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <motion.div 
                          className="flex items-center mb-4"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                            <action.icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">
                              {action.title}
                            </h3>
                            <span className="text-white/80 text-sm font-medium">Get Started</span>
                          </div>
                        </motion.div>
                        
                        <p className="text-white/90 leading-relaxed text-lg">
                          {action.description}
                        </p>
                      </div>
                      
                      <motion.div 
                        className="flex items-center text-white group-hover:text-white/90 transition-colors mt-6"
                        whileHover={{ x: 5 }}
                      >
                        <span className="font-medium mr-2">Learn More</span>
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Participation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Support the Network
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <a href={action.href} className="block">
                  <div className="bg-card border border-border rounded-xl p-6 group-hover:border-bitcoin-500/40 transition-all duration-300 h-full">
                    <div className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <action.icon className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-card-foreground mb-3 group-hover:text-bitcoin-600 transition-colors">
                        {action.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {action.description}
                      </p>
                      <motion.div 
                        className="inline-flex items-center text-bitcoin-500 group-hover:text-bitcoin-600 transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        <span className="text-sm font-medium mr-1">Get Involved</span>
                        <ArrowRight className="h-3 w-3" />
                      </motion.div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Safety */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Learn & Stay Safe
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="group cursor-pointer"
              >
                <a href={action.href} className="block">
                  <div className="bg-card border border-border rounded-xl p-6 group-hover:border-bitcoin-500/40 transition-all duration-300 h-full hover:shadow-lg">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <action.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-card-foreground mb-2 group-hover:text-bitcoin-600 transition-colors">
                          {action.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {action.description}
                        </p>
                        <motion.div 
                          className="inline-flex items-center text-bitcoin-500 group-hover:text-bitcoin-600 transition-colors"
                          whileHover={{ x: 3 }}
                        >
                          <span className="text-sm font-medium mr-1">Learn More</span>
                          <ArrowRight className="h-3 w-3" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Participate


