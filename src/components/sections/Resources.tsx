'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Users, TrendingUp, Calendar, MessageCircle, AlertTriangle, ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Resources = () => {
  const resources = [
    {
      icon: BookOpen,
      title: 'Resources',
      description: 'Comprehensive guides, tutorials, and documentation to get you started with Bitcoin Holding',
      href: '/en/resources',
      color: 'from-blue-500 to-blue-600',
      featured: true
    },
    {
      icon: TrendingUp,
      title: 'Exchanges',
      description: 'Find trusted platforms where you can buy and sell Bitcoin Holding Ecosystem',
      href: '/en/exchanges',
      color: 'from-green-500 to-green-600',
      featured: false
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join forums and discussions with fellow Bitcoin Holding enthusiasts',
      href: '/en/community',
      color: 'from-purple-500 to-purple-600',
      featured: false
    },
    {
      icon: Calendar,
      title: 'Events',
      description: 'Discover Bitcoin Holding conferences, meetups, and educational events',
      href: '/en/events',
      color: 'from-orange-500 to-orange-600',
      featured: false
    },
    {
      icon: MessageCircle,
      title: 'Vocabulary',
      description: 'Learn Bitcoin Holding terminology and technical concepts',
      href: '/en/vocabulary',
      color: 'from-teal-500 to-teal-600',
      featured: false
    },
    {
      icon: AlertTriangle,
      title: 'Scam Awareness',
      description: 'Learn to identify and avoid common Bitcoin scams',
      href: '/en/scams',
      color: 'from-red-500 to-red-600',
      featured: true
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/20 to-background">
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
            Resources & Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connect with the Bitcoin ecosystem through our curated resources, exchanges, community forums, 
            and educational events designed to support your Bitcoin journey.
          </p>
        </motion.div>

        {/* Asymmetric Grid Layout */}
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full">
              <motion.div 
                className="absolute top-10 left-10 w-32 h-32 border border-bitcoin-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute bottom-20 right-20 w-24 h-24 border border-bitcoin-500/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>

          {/* Improved Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
            {/* Featured Resource - Large Card (spans 5 columns) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <a href={resources[0].href} className="group block h-full">
                <div className="relative h-full bg-card border border-border rounded-2xl overflow-hidden group-hover:border-bitcoin-500/40 transition-all duration-500 min-h-[280px]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${resources[0].color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col justify-between">
                    <div>
                      <motion.div 
                        className="flex items-center mb-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="w-14 h-14 bg-bitcoin-500/10 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-bitcoin-500/20 transition-colors">
                          {React.createElement(resources[0].icon, { className: "h-7 w-7 text-bitcoin-500" })}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-card-foreground group-hover:text-bitcoin-600 transition-colors">
                            {resources[0].title}
                          </h3>
                          <span className="text-sm text-bitcoin-500 font-medium">Featured</span>
                        </div>
                      </motion.div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {resources[0].description}
                      </p>
                    </div>
                    
                    <motion.div 
                      className="flex items-center text-bitcoin-500 group-hover:text-bitcoin-600 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <span className="font-medium mr-2">Explore Resources</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Middle Column - 2 Cards (spans 4 columns) */}
            <div className="lg:col-span-4 space-y-6">
              {resources.slice(1, 3).map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="group cursor-pointer"
                >
                  <a href={resource.href} className="block">
                    <div className="bg-card border border-border rounded-xl p-6 group-hover:border-bitcoin-500/40 transition-all duration-300 h-[130px] flex items-center">
                      <div className="flex items-center space-x-4 w-full">
                        <div className={`w-12 h-12 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <resource.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-card-foreground mb-2 group-hover:text-bitcoin-600 transition-colors truncate">
                            {resource.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                            {resource.description}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-bitcoin-500 transition-colors flex-shrink-0" />
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Right Column - Alert Card (spans 3 columns) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <a href={resources[5].href} className="group block h-full">
                <div className="relative h-full bg-card border border-border rounded-2xl overflow-hidden group-hover:border-bitcoin-500/40 transition-all duration-500 min-h-[280px]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${resources[5].color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Alert Badge */}
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Important
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-6 h-full flex flex-col justify-between">
                    <div className="text-center">
                      <motion.div 
                        className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-500/20 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {React.createElement(resources[5].icon, { className: "h-8 w-8 text-red-500" })}
                      </motion.div>
                      
                      <h3 className="text-lg font-bold text-card-foreground mb-4 group-hover:text-red-600 transition-colors">
                        {resources[5].title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {resources[5].description}
                      </p>
                    </div>
                    
                    <motion.div 
                      className="flex items-center justify-center text-red-500 group-hover:text-red-600 transition-colors mt-6"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="font-medium mr-2 text-sm">Learn More</span>
                      <ArrowRight className="h-3 w-3" />
                    </motion.div>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Bottom Row - 2 Cards (spans full width) */}
            <div className="lg:col-span-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.slice(3, 5).map((resource, index) => (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: (index + 4) * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group cursor-pointer"
                  >
                    <a href={resource.href} className="block">
                      <div className="bg-card border border-border rounded-xl p-6 group-hover:border-bitcoin-500/40 transition-all duration-300 h-[160px]">
                        <div className="flex items-start space-x-4 h-full">
                          <div className={`w-14 h-14 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                            <resource.icon className="h-7 w-7 text-white" />
                          </div>
                          <div className="flex-1 flex flex-col justify-between h-full">
                            <div>
                              <h4 className="font-bold text-card-foreground mb-3 group-hover:text-bitcoin-600 transition-colors">
                                {resource.title}
                              </h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {resource.description}
                              </p>
                            </div>
                            <motion.div 
                              className="inline-flex items-center text-bitcoin-500 group-hover:text-bitcoin-600 transition-colors mt-4"
                              whileHover={{ x: 3 }}
                            >
                              <span className="text-sm font-medium mr-1">Visit</span>
                              <ArrowRight className="h-3 w-3" />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resources
