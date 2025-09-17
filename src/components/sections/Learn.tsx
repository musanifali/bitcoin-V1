'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, TrendingUp, Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Learn = () => {
  const resources = [
    {
      icon: BookOpen,
      title: 'Resources',
      description: 'Comprehensive guides and documentation to help you understand Bitcoin Holding',
      href: '/en/resources',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: TrendingUp,
      title: 'Exchanges',
      description: 'Find trusted platforms where you can buy and sell Bitcoin Holding Ecosystem',
      href: '/en/exchanges',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join forums and discussions with fellow Bitcoin Holding enthusiasts',
      href: '/en/community',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Calendar,
      title: 'Events',
      description: 'Discover Bitcoin Holding conferences, meetups, and educational events',
      href: '/en/events',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Illustration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-bitcoin-500/30 rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-bitcoin-500/10 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-bitcoin-500/20 to-orange-500/20 rounded-full blur-sm" />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Resources & Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connect with the Bitcoin Holding ecosystem through our curated resources, exchanges, community forums, 
            and educational events designed to support your Bitcoin Holding journey.
          </p>
        </motion.div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
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
                  {/* Background Gradient */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${resource.color} rounded-full blur-lg`} />
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="flex items-center justify-center mb-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    >
                      <div className="relative">
                        <motion.div 
                          className="w-14 h-14 bg-bitcoin-500/10 rounded-xl flex items-center justify-center group-hover:bg-bitcoin-500/20 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <resource.icon className="h-7 w-7 text-bitcoin-500" />
                        </motion.div>
                        <div className="absolute inset-0 rounded-xl border-2 border-bitcoin-500/0 group-hover:border-bitcoin-500/30 transition-colors duration-300" />
                      </div>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-lg font-semibold text-card-foreground mb-3 text-center group-hover:text-bitcoin-600 transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    >
                      {resource.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-sm text-muted-foreground text-center mb-4 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    >
                      {resource.description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                      className="flex items-center justify-center text-bitcoin-500 hover:text-bitcoin-600 group-hover:translate-x-1 transition-all font-medium text-sm"
                    >
                      Explore 
                      <ArrowRight className="ml-1 h-3 w-3" />
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

export default Learn
