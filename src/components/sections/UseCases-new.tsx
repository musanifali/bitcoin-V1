'use client'

import { motion } from 'framer-motion'
import { TrendingUp, PieChart, Building2, Target } from 'lucide-react'
import Image from 'next/image'

const UseCases = () => {
  const useCases = [
    {
      title: "Long-term Holding",
      description: "Strategic Bitcoin accumulation for wealth preservation and long-term growth with proven ROI.",
      icon: TrendingUp,
      illustration: "/illustrations/timeline-growth.svg",
      stats: "+784% ROI",
      color: "from-bitcoin-50 to-orange-50"
    },
    {
      title: "Portfolio Diversification", 
      description: "Balance your investment portfolio with optimal digital asset allocation strategies.",
      icon: PieChart,
      illustration: "/illustrations/portfolio-pie.svg",
      stats: "40% BTC Allocation",
      color: "from-blue-50 to-bitcoin-50"
    },
    {
      title: "Institutional Services",
      description: "Professional Bitcoin custody and management solutions for enterprise clients.",
      icon: Building2,
      illustration: "/illustrations/bitcoin-vault.svg",
      stats: "Bank-Grade Security",
      color: "from-gray-50 to-bitcoin-50"
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-bitcoin-300 rounded-full" />
        <div className="absolute bottom-20 right-16 w-24 h-24 border border-orange-300 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-bitcoin-200 rounded-full" />
      </div>
      
      <div className="container mx-auto max-w-7xl relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Bitcoin V1 Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive Bitcoin V1 and investment services designed for every investor
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon
            
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative p-6 bg-card rounded-xl border border-border hover:border-bitcoin-200 transition-all duration-300 hover:shadow-xl hover:shadow-bitcoin-100/30 h-full">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-30 rounded-xl transition-all duration-300`} />
                  
                  {/* Icon with background glow */}
                  <div className="relative mb-4 flex items-center justify-between">
                    <div className="relative">
                      <div className="absolute inset-0 bg-bitcoin-500/10 group-hover:bg-bitcoin-500/20 rounded-lg blur-lg transition-all duration-300" />
                      <div className="relative w-12 h-12 bg-bitcoin-100 group-hover:bg-bitcoin-200 rounded-lg flex items-center justify-center transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-bitcoin-600 group-hover:text-bitcoin-700 transition-colors duration-300" />
                      </div>
                    </div>
                    
                    {/* Stats badge */}
                    <div className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                      {useCase.stats}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative space-y-3 mb-6">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-bitcoin-700 transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {useCase.description}
                    </p>
                  </div>
                  
                  {/* Main Illustration */}
                  <div className="relative h-48 bg-gradient-to-br from-white to-gray-50 rounded-lg p-4 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                    <Image
                      src={useCase.illustration}
                      alt={useCase.title}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bitcoin-500/0 group-hover:from-bitcoin-500/5 to-transparent rounded-xl transition-all duration-300 pointer-events-none" />
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 text-bitcoin-600 hover:text-bitcoin-700 transition-colors cursor-pointer group">
            <span className="font-medium">Explore all solutions</span>
            <Target className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default UseCases
