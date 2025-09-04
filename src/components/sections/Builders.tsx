'use client'

import { motion } from 'framer-motion'
import { Code, Book, Github, Wrench, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Builders = () => {
  const resources = [
    {
      icon: Code,
      title: 'Platform API',
      description: 'Integrate with our secure Bitcoin holding platform',
    },
    {
      icon: Github,
      title: 'Analytics Dashboard',
      description: 'Monitor your Bitcoin portfolio performance',
    },
    {
      icon: Book,
      title: 'Investment Guides',
      description: 'Professional Bitcoin holding strategies and insights',
    },
    {
      icon: Wrench,
      title: 'Custody Solutions',
      description: 'Enterprise-grade Bitcoin storage and management',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Bitcoin Holding Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access our comprehensive suite of Bitcoin holding tools, analytics, 
            and professional services designed for serious Bitcoin investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-bitcoin-500/20 text-center">
                <div className="w-12 h-12 bg-bitcoin-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-bitcoin-500/20 transition-colors">
                  <resource.icon className="h-6 w-6 text-bitcoin-500" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {resource.description}
                </p>
                <Button variant="ghost" className="p-0 h-auto text-bitcoin-500 hover:text-bitcoin-600 text-sm">
                  Learn more →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-bitcoin-50 to-orange-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to contribute?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you&apos;re a seasoned developer or just getting started, 
            there are many ways to contribute to the Bitcoin ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600 text-white">
              View GitHub
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Browse Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Builders
