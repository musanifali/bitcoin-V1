'use client'

import { motion } from 'framer-motion'
import { BookOpen, Shield, Eye, Users, HelpCircle, Lightbulb, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Education = () => {
  const educationCards = [
    {
      icon: BookOpen,
      title: 'Things You Need to Know',
      description: 'Essential Bitcoin Holding knowledge every user should understand before getting started.',
      href: '/en/you-need-to-know',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Shield,
      title: 'Secure Your Wallet',
      description: 'Learn how to protect your Bitcoin Holding with proper security practices.',
      href: '/en/secure-your-wallet',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Eye,
      title: 'Protect Your Privacy',
      description: 'Understand Bitcoin Holding privacy features and how to protect your financial data.',
      href: '/en/protect-your-privacy',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Users,
      title: 'For Individuals',
      description: 'How individuals can benefit from using Bitcoin Holding in their daily lives.',
      href: '/en/individuals',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Lightbulb,
      title: 'For Businesses',
      description: 'Learn how businesses can integrate Bitcoin Holding into their operations.',
      href: '/en/businesses',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: HelpCircle,
      title: 'FAQ',
      description: 'Get answers to frequently asked questions about Bitcoin Holding.',
      href: '/en/faq',
      color: 'from-red-500 to-red-600',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
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
            Education & Learning
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive guides and resources to help you understand Bitcoin Holding and use it safely
          </p>
        </motion.div>

        {/* Education Cards Grid - Masonry Style */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {educationCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="group cursor-pointer break-inside-avoid mb-6"
            >
              <a href={card.href} className="block">
                <div className={`relative p-6 bg-gradient-to-br ${card.color} rounded-2xl border-0 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2`}>
                  {/* Geometric Shapes */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                    <div className="w-full h-full bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 opacity-10">
                    <div className="w-full h-full bg-white rounded-lg transform -translate-x-4 translate-y-4 rotate-45"></div>
                  </div>
                  
                  <div className="relative z-10 text-white">
                    <motion.div 
                      className="flex items-center mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    >
                      <div className="relative">
                        <motion.div 
                          className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <card.icon className="h-7 w-7 text-white" />
                        </motion.div>
                        <div className="absolute inset-0 rounded-xl border-2 border-white/0 group-hover:border-white/30 transition-colors duration-300" />
                      </div>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-bold text-white mb-3 group-hover:scale-105 transition-transform origin-left"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    >
                      {card.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-white/90 mb-4 leading-relaxed text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    >
                      {card.description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                      className="inline-flex items-center text-white font-semibold text-sm group-hover:translate-x-2 transition-transform"
                    >
                      <span className="border-b border-white/50 group-hover:border-white transition-colors">
                        Learn More
                      </span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional Educational Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-bitcoin-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Bitcoin White Paper
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Read the original Bitcoin white paper by Satoshi Nakamoto that started the cryptocurrency revolution
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-bitcoin-500 hover:bg-bitcoin-600 text-white"
                asChild
              >
                <a href="/bitcoin.pdf">
                  Read White Paper
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-bitcoin-200 hover:border-bitcoin-500"
                asChild
              >
                <a href="/en/extension">
                  Extension
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
