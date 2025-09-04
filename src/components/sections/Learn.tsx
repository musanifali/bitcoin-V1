'use client'

import { motion } from 'framer-motion'
import { BookOpen, HelpCircle, Shield, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Learn = () => {
  const topics = [
    {
      icon: BookOpen,
      title: 'Investment Strategies',
      description: 'Learn proven Bitcoin accumulation and holding strategies',
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Understand our multi-signature custody and security protocols',
    },
    {
      icon: HelpCircle,
      title: 'Platform Guide',
      description: 'Get answers about Bitcoin V1 services and features',
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
                Learn Bitcoin V1
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bitcoin V1 was founded to provide professional investors and individuals 
                with secure, institutional-grade Bitcoin custody and investment services. 
                Learn how to build and protect your Bitcoin wealth with our expert guidance.
              </p>
            </div>
            
            <Button size="lg" variant="outline" className="group">
              Other learning resources
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  x: 8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="relative p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-bitcoin-500/5 to-orange-500/5 rounded-full blur-xl" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 bg-bitcoin-500/10 rounded-lg flex items-center justify-center group-hover:bg-bitcoin-500/20 transition-colors group-hover:scale-105 duration-300">
                        <topic.icon className="h-6 w-6 text-bitcoin-500" />
                      </div>
                      {/* Subtle Status Indicator */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-semibold text-card-foreground group-hover:text-bitcoin-600 transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {topic.description}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-bitcoin-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Learn
