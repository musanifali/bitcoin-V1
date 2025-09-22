'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Activity as ActivityIcon, Network } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Activity = () => {
  const stats = [
    {
      icon: ActivityIcon,
      value: '$2.5B+',
      label: 'Assets Under Management',
      description: 'Bitcoin securely held for our clients',
    },
    {
      icon: TrendingUp,
      value: '50K+',
      label: 'Active Holders',
      description: 'Trusted clients worldwide',
    },
    {
      icon: Network,
      value: '99.9%',
      label: 'Platform Uptime',
      description: 'Reliable service guarantee',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-medium text-bitcoin-500 uppercase tracking-wider">Platform Performance</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Trusted Bitcoin Holding platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bitcoin Holding's platform continues to grow with institutional-grade security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative text-center space-y-4 group"
            >
              {/* Premium Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-50/0 to-orange-50/0 group-hover:from-bitcoin-50/30 group-hover:to-orange-50/20 rounded-2xl transition-all duration-500" />
              
              <div className="relative z-10">
                <motion.div 
                  className="relative w-16 h-16 bg-bitcoin-500/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-bitcoin-500/20 transition-all duration-300"
                  whileHover={{ 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <stat.icon className="h-8 w-8 text-bitcoin-500" />
                </motion.div>
                
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-foreground group-hover:text-bitcoin-600 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-lg font-medium text-foreground">
                    {stat.label}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" variant="outline">
            Explore network stats
          </Button>
          <Button size="lg" variant="ghost" className="text-bitcoin-500 hover:text-bitcoin-600">
            Learn how mining works
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Activity


