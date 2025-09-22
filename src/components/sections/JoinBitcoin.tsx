'use client'

import { motion } from 'framer-motion'
import { Heart, Code, Server, Download, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const JoinBitcoin = () => {
  const participationAreas = [
    {
      icon: Heart,
      title: 'Support Bitcoin Holding',
      description: 'Learn how to contribute to the Bitcoin Holding network and ecosystem',
      href: '/en/support-bitcoin',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Contribute to Bitcoin Holding development and open-source projects',
      href: '/en/development',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Server,
      title: 'Run a Full Node',
      description: 'Help secure the network by running your own Bitcoin Holding node',
      href: '/en/full-node',
      color: 'from-green-500 to-green-600',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Participate in Bitcoin Holding
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bitcoin Holding thrives through community participation. Discover how you can contribute 
            to the network, development, and adoption of this revolutionary technology.
          </p>
        </div>

        {/* Participation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {participationAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group cursor-pointer"
            >
              <a href={area.href} className="block">
                <div className="relative p-8 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-bitcoin-500/20 overflow-hidden h-full">
                  {/* Background Gradient */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${area.color} rounded-full blur-xl`} />
                  </div>
                  
                  <div className="relative z-10 text-center">
                    <motion.div 
                      className="flex items-center justify-center mb-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    >
                      <div className="relative">
                        <motion.div 
                          className="w-16 h-16 bg-bitcoin-500/10 rounded-xl flex items-center justify-center group-hover:bg-bitcoin-500/20 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <area.icon className="h-8 w-8 text-bitcoin-500" />
                        </motion.div>
                        <div className="absolute inset-0 rounded-xl border-2 border-bitcoin-500/0 group-hover:border-bitcoin-500/30 transition-colors duration-300" />
                      </div>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-bitcoin-600 transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                    >
                      {area.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-muted-foreground mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    >
                      {area.description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
                      className="flex items-center justify-center text-bitcoin-500 hover:text-bitcoin-600 group-hover:translate-x-1 transition-all font-medium"
                    >
                      Get Started 
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bitcoin Core Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-bitcoin-50 to-orange-50 rounded-2xl p-8 text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-bitcoin-500/10 rounded-xl flex items-center justify-center">
              <Download className="h-8 w-8 text-bitcoin-500" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Bitcoin Core
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Download the original Bitcoin client. Bitcoin Core is the backbone of the Bitcoin network, 
            providing security, privacy, and stability. Run your own node and help secure the network.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-bitcoin-500 hover:bg-bitcoin-600 text-white"
              asChild
            >
              <a href="/en/bitcoin-core/">
                Learn About Bitcoin Core
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
            >
              <a href="/en/download">
                Download Bitcoin Core
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default JoinBitcoin
