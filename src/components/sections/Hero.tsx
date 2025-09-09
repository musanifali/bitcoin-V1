'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Shield, TrendingUp, Globe, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#fffdf1' }}>
      {/* Background Illustration */}
      <div className="absolute inset-0 z-0">
        {/* Geometric Bitcoin Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="w-full h-full relative">
            <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-16 h-16 sm:w-32 sm:h-32 border-2 border-bitcoin-500/30 rounded-full animate-pulse" />
            <div className="absolute top-20 right-20 sm:top-40 sm:right-40 w-12 h-12 sm:w-24 sm:h-24 border-2 border-bitcoin-400/40 rounded-full animate-pulse delay-100" />
            <div className="absolute top-32 right-32 sm:top-60 sm:right-60 w-8 h-8 sm:w-16 sm:h-16 border-2 border-bitcoin-600/20 rounded-full animate-pulse delay-200" />
            {/* Bitcoin Symbol */}
            <div className="absolute top-16 right-16 sm:top-32 sm:right-32 w-12 h-12 sm:w-20 sm:h-20 bg-bitcoin-500/10 rounded-full flex items-center justify-center">
              <span className="text-bitcoin-500 font-bold text-lg sm:text-2xl">₿</span>
            </div>
          </div>
        </div>
        {/* Left side abstract shapes */}
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 opacity-5">
          <div className="w-full h-full relative">
            <div className="absolute bottom-5 left-5 sm:bottom-10 sm:left-10 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-r from-bitcoin-500 to-orange-500 rounded-full blur-xl sm:blur-3xl" />
            <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-r from-orange-400 to-bitcoin-400 rounded-full blur-lg sm:blur-2xl" />
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[70vh] sm:min-h-[60vh]">
          {/* Content Side */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display font-bold text-foreground leading-[1.1] sm:leading-tight">
                Welcome to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-bitcoin-500 to-bitcoin-600">
                  Bitcoin V1
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Your premium destination for Bitcoin investment strategies and secure digital asset holding solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-start gap-3 sm:gap-3 lg:gap-4 max-w-2xl"
            >
              <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600 text-white shadow-lg hover:shadow-xl transition-all w-full sm:w-auto lg:w-full xl:w-auto">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="group border-bitcoin-200 hover:border-bitcoin-500 w-full sm:w-auto lg:w-full xl:w-auto">
                Choose Your Wallet
              </Button>
              <Button variant="ghost" size="lg" className="group text-bitcoin-600 hover:text-bitcoin-700 hover:bg-bitcoin-50 w-full sm:w-auto lg:w-full xl:w-auto">
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                How It Works
              </Button>
            </motion.div>
          </div>

          {/* Illustration Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            {/* Main Illustration Container */}
            <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] flex items-center justify-center">
              {/* Hero Image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative">
                  {/* Main Hero Image */}
                  <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] 2xl:w-[550px] 2xl:h-[550px]">
                    <Image
                      src="/illustrations/coin.png"
                      alt="Bitcoin V1 Hero Illustration"
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 400px, (max-width: 1280px) 450px, (max-width: 1536px) 500px, 550px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 lg:mt-20 pt-12 sm:pt-16 border-t border-border"
        >
          <div className="text-center space-y-2">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">$2.5B+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Assets Under Management</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">50K+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Active Holders</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">99.9%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Platform Uptime</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
