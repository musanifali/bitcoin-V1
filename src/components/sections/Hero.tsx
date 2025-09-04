'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Shield, TrendingUp, Globe, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative pt-8 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#fffdf1' }}>
      {/* Background Illustration */}
      <div className="absolute inset-0 z-0">
        {/* Geometric Bitcoin Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="w-full h-full relative">
            <div className="absolute top-20 right-20 w-32 h-32 border-2 border-bitcoin-500/30 rounded-full animate-pulse" />
            <div className="absolute top-40 right-40 w-24 h-24 border-2 border-bitcoin-400/40 rounded-full animate-pulse delay-100" />
            <div className="absolute top-60 right-60 w-16 h-16 border-2 border-bitcoin-600/20 rounded-full animate-pulse delay-200" />
            {/* Bitcoin Symbol */}
            <div className="absolute top-32 right-32 w-20 h-20 bg-bitcoin-500/10 rounded-full flex items-center justify-center">
              <span className="text-bitcoin-500 font-bold text-2xl">₿</span>
            </div>
          </div>
        </div>
        {/* Left side abstract shapes */}
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 opacity-5">
          <div className="w-full h-full relative">
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-bitcoin-500 to-orange-500 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-orange-400 to-bitcoin-400 rounded-full blur-2xl" />
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[60vh]">
          {/* Content Side */}
          <div className="space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground leading-tight">
                Welcome to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-bitcoin-500 to-bitcoin-600">
                  Bitcoin V1
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Your premium destination for Bitcoin investment strategies and secure digital asset holding solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start gap-3 max-w-2xl"
            >
              <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600 text-white shadow-lg hover:shadow-xl transition-all flex-1 sm:flex-none">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="group border-bitcoin-200 hover:border-bitcoin-500 flex-1 sm:flex-none">
                Choose Your Wallet
              </Button>
              <Button variant="ghost" size="lg" className="group text-bitcoin-600 hover:text-bitcoin-700 hover:bg-bitcoin-50 flex-1 sm:flex-none">
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
            <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
              {/* Hero Image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative">
                  {/* Main Hero Image */}
                  <div className="relative w-[400px] h-[400px] lg:w-[600px] lg:h-[600px]">
                    <Image
                      src="/illustrations/hero.png"
                      alt="Bitcoin V1 Hero Illustration"
                      fill
                      className="object-contain"
                      priority
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
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 pt-16 border-t border-border"
        >
          <div className="text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-foreground">$2.5B+</div>
            <div className="text-sm text-muted-foreground">Assets Under Management</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-foreground">50K+</div>
            <div className="text-sm text-muted-foreground">Active Holders</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-foreground">99.9%</div>
            <div className="text-sm text-muted-foreground">Platform Uptime</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
