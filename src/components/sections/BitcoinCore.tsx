'use client'

import { motion } from 'framer-motion'
import { Download, Shield, Settings, Network, HelpCircle, FileText, Users, Code, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const BitcoinCore = () => {
  const coreFeatures = [
    {
      icon: Shield,
      title: 'Validation',
      description: 'Full blockchain validation and verification',
      href: '/en/bitcoin-core/features/validation',
    },
    {
      icon: Settings,
      title: 'Privacy',
      description: 'Enhanced privacy features and controls',
      href: '/en/bitcoin-core/features/privacy',
    },
    {
      icon: Network,
      title: 'Network Support',
      description: 'Support for the Bitcoin network infrastructure',
      href: '/en/bitcoin-core/features/network-support',
    },
    {
      icon: Settings,
      title: 'User Interface',
      description: 'Clean and intuitive user interface',
      href: '/en/bitcoin-core/features/user-interface',
    },
  ]

  const helpResources = [
    {
      icon: HelpCircle,
      title: 'Help & Support',
      description: 'Get help with Bitcoin Core',
      href: '/en/bitcoin-core/help',
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Contribute to documentation',
      href: '/en/bitcoin-core/contribute/documentation',
    },
    {
      icon: Users,
      title: 'Support Community',
      description: 'Help other users',
      href: '/en/bitcoin-core/contribute/support',
    },
    {
      icon: Code,
      title: 'Report Issues',
      description: 'Report bugs and issues',
      href: '/en/bitcoin-core/contribute/issues',
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Bitcoin Core
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The original Bitcoin client and the backbone of the Bitcoin network. Bitcoin Core helps 
            ensure the network follows the same rules and provides security and privacy.
          </p>
        </motion.div>

        {/* Main Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-bitcoin-50 to-orange-50 rounded-2xl p-8 text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-bitcoin-500/10 rounded-xl flex items-center justify-center">
              <Download className="h-8 w-8 text-bitcoin-500" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Download Bitcoin Core
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Help support the Bitcoin network by running your own full node with the latest version of Bitcoin Core.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-bitcoin-500 hover:bg-bitcoin-600 text-white"
              asChild
            >
              <a href="/en/download">
                Download Bitcoin Core
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
            >
              <a href="/en/version-history">
                Version History
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-foreground mb-8 text-center"
          >
            Core Features
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="group cursor-pointer"
              >
                <a href={feature.href} className="block">
                  <div className="relative p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-bitcoin-500/20 overflow-hidden h-full">
                    <div className="relative z-10 text-center">
                      <motion.div 
                        className="flex items-center justify-center mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      >
                        <div className="w-12 h-12 bg-bitcoin-500/10 rounded-lg flex items-center justify-center group-hover:bg-bitcoin-500/20 transition-colors">
                          <feature.icon className="h-6 w-6 text-bitcoin-500" />
                        </div>
                      </motion.div>
                      
                      <h4 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-bitcoin-600 transition-colors">
                        {feature.title}
                      </h4>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        {feature.description}
                      </p>
                      
                      <div className="flex items-center justify-center text-bitcoin-500 hover:text-bitcoin-600 group-hover:translate-x-1 transition-all font-medium text-sm">
                        Learn More 
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Help & Contribute Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-foreground mb-8 text-center"
          >
            Help & Contribute
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="group cursor-pointer"
              >
                <a href={resource.href} className="block">
                  <div className="relative p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-bitcoin-500/20 overflow-hidden h-full">
                    <div className="relative z-10 text-center">
                      <motion.div 
                        className="flex items-center justify-center mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      >
                        <div className="w-12 h-12 bg-bitcoin-500/10 rounded-lg flex items-center justify-center group-hover:bg-bitcoin-500/20 transition-colors">
                          <resource.icon className="h-6 w-6 text-bitcoin-500" />
                        </div>
                      </motion.div>
                      
                      <h4 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-bitcoin-600 transition-colors">
                        {resource.title}
                      </h4>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        {resource.description}
                      </p>
                      
                      <div className="flex items-center justify-center text-bitcoin-500 hover:text-bitcoin-600 group-hover:translate-x-1 transition-all font-medium text-sm">
                        Get Involved 
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BitcoinCore
