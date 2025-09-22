'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { brand, brandColors } from '@/brand'

const Hero = () => {
  return (
    <section className="relative pt-20 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: brand.colors.background }}>
      {/* Background Illustration */}
      <div className="absolute inset-0 z-0">
        {/* Geometric Bitcoin Holding Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="w-full h-full relative">
            <div className="absolute top-20 right-20 w-32 h-32 border-2 border-bitcoin-500/30 rounded-full animate-pulse" />
            <div className="absolute top-40 right-40 w-24 h-24 border-2 border-bitcoin-400/40 rounded-full animate-pulse delay-100" />
            <div className="absolute top-60 right-60 w-16 h-16 border-2 border-bitcoin-600/20 rounded-full animate-pulse delay-200" />
            {/* Bitcoin Holding Symbol */}
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
        <div className="flex items-center justify-center min-h-[60vh]">
          {/* Full Width Content */}
          <div className="w-full max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-bitcoin-50 border border-bitcoin-200 rounded-full text-bitcoin-600 text-sm font-medium"
              >
                <span className="w-2 h-2 bg-bitcoin-500 rounded-full mr-2 animate-pulse"></span>
                Innovative Digital Currency Platform
              </motion.div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-display font-bold text-foreground leading-[1.6] py-4">
                Bitcoin Holding is an innovative{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-bitcoin-500 to-bitcoin-600">
                  payment network
                </span>
                {' '}and a new kind of money
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mx-auto leading-[1.7] py-3">
                Empowering financial freedom through security and innovation. Join the global decentralized currency revolution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Button 
                size="lg" 
                className="bg-bitcoin-500 hover:bg-bitcoin-600 text-white shadow-lg hover:shadow-xl transition-all flex-1 sm:flex-none"
                asChild
              >
                <a href="/en/getting-started">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-bitcoin-200 hover:border-bitcoin-500 flex-1 sm:flex-none"
                asChild
              >
                <a href="/en/choose-your-wallet">
                  Choose Your Wallet
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-bitcoin-200 hover:border-bitcoin-500 flex-1 sm:flex-none"
                asChild
              >
                <a href="/en/buy">
                  Buy Bitcoin Holding Ecosystem
                </a>
              </Button>
              
            </motion.div>

            {/* Quick Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 mx-auto max-w-3xl"
            >
              <p className="text-base text-muted-foreground leading-loose mb-4">
                Bitcoin Holding operates through a decentralized network of computers that verify transactions using cryptographic proof instead of trust. 
                This peer-to-peer electronic cash system enables direct transactions without intermediaries, giving you complete control over your money.
              </p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="group text-bitcoin-600 hover:text-bitcoin-700 hover:bg-bitcoin-50 p-0"
                asChild
              >
                <a href="/en/how-it-works">
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Learn More
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 pt-16 border-t border-border"
        >
          <div className="text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-foreground">$2.35T</div>
            <div className="text-sm text-muted-foreground">Market Cap</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-foreground">106M+</div>
            <div className="text-sm text-muted-foreground">Active Holders</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-foreground">99.99%</div>
            <div className="text-sm text-muted-foreground">Platform Uptime</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
