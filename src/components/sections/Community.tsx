'use client'

import { motion } from 'framer-motion'
import { Github, MessageSquare, Users, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Community = () => {
  const communityLinks = [
    {
      icon: Users,
      title: 'Private Forums',
      description: 'Exclusive discussions for Bitcoin Holding clients',
      href: '#forums',
    },
    {
      icon: MessageSquare,
      title: 'Expert Insights',
      description: 'Weekly market analysis and holding strategies',
      href: '#insights',
    },
    {
      icon: Github,
      title: 'Client Portal',
      description: 'Access your secure Bitcoin Holding dashboard',
      href: '#portal',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-medium text-bitcoin-500 uppercase tracking-wider">Bitcoin Holding Community</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Join fellow Bitcoin holders
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with a community of serious Bitcoin investors and holders. 
            Share insights, strategies, and learn from experienced professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {communityLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-bitcoin-500/20 cursor-pointer">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-bitcoin-500/10 rounded-lg flex items-center justify-center group-hover:bg-bitcoin-500/20 transition-colors">
                    <link.icon className="h-6 w-6 text-bitcoin-500" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-bitcoin-500 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {link.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600 text-white">
            Get Involved
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Community
