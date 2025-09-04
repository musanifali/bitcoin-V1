'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Shield, TrendingUp, Globe, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Illustration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-50/50 to-orange-50/30 dark:from-bitcoin-950/20 dark:to-orange-950/10" />
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Content Side */}
          <div className="space-y-8">
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
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Button size="xl" className="bg-bitcoin-500 hover:bg-bitcoin-600 text-white shadow-lg hover:shadow-xl transition-all">
                Start Investing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl" className="group border-bitcoin-200 hover:border-bitcoin-500">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Illustration Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Main Illustration Container */}
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Central Bitcoin Vault */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Vault/Safe Illustration */}
                  <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl relative overflow-hidden border-4 border-bitcoin-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-500/10 to-orange-500/10" />
                    
                    {/* V1 Badge - Top Right Corner */}
                    <motion.div 
                      className="absolute -top-2 -right-2 z-10"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
                    >
                      <div className="relative">
                        {/* Main V1 Badge */}
                        <div className="w-16 h-16 bg-gradient-to-br from-bitcoin-500 via-bitcoin-600 to-orange-600 rounded-full shadow-2xl border-4 border-white/20 flex items-center justify-center">
                          <span className="text-white font-black text-lg tracking-tight">V1</span>
                        </div>
                        {/* Subtle Shine Effect */}
                        <div className="absolute top-2 left-2 w-3 h-3 bg-white/40 rounded-full blur-sm" />
                      </div>
                    </motion.div>
                    
                    {/* Vault Door Handle */}
                    <div className="absolute top-1/2 right-4 w-8 h-8 bg-gradient-to-r from-bitcoin-400 to-bitcoin-600 rounded-full shadow-lg transform -translate-y-1/2" />
                    
                    {/* Bitcoin Symbol in Center */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 80 }}
                    >
                      <span className="text-bitcoin-500 text-6xl lg:text-7xl font-bold">₿</span>
                    </motion.div>
                    
                    {/* Security Lock Indicators */}
                    <motion.div 
                      className="absolute top-4 left-4 w-3 h-3 bg-green-400 rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                    />
                    <motion.div 
                      className="absolute top-4 right-12 w-3 h-3 bg-green-400 rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                    />
                    <motion.div 
                      className="absolute bottom-4 left-4 w-3 h-3 bg-green-400 rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    />
                    <motion.div 
                      className="absolute bottom-4 right-4 w-3 h-3 bg-green-400 rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.3 }}
                    />
                  </div>
                  
                  {/* Floating Elements Around Vault */}
                  <motion.div 
                    className="absolute -top-8 -left-8 w-16 h-16 bg-bitcoin-500/20 rounded-full flex items-center justify-center"
                    initial={{ opacity: 0, x: -20, y: -20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.4, type: "spring", stiffness: 100 }}
                  >
                    <Shield className="w-8 h-8 text-bitcoin-500" />
                  </motion.div>
                  <motion.div 
                    className="absolute -top-8 -right-8 w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center"
                    initial={{ opacity: 0, x: 20, y: -20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.5, type: "spring", stiffness: 100 }}
                  >
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </motion.div>
                  <motion.div 
                    className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center"
                    initial={{ opacity: 0, x: -20, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.6, type: "spring", stiffness: 100 }}
                  >
                    <Globe className="w-8 h-8 text-blue-600" />
                  </motion.div>
                  <motion.div 
                    className="absolute -bottom-8 -right-8 w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center"
                    initial={{ opacity: 0, x: 20, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.7, type: "spring", stiffness: 100 }}
                  >
                    <Users className="w-8 h-8 text-purple-600" />
                  </motion.div>
                </div>
              </div>

              {/* Background Grid Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full" style={{
                  backgroundImage: `radial-gradient(circle, ${`hsl(var(--bitcoin-500))`} 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }} />
              </div>

              {/* Floating V1 Elements */}
              <motion.div 
                className="absolute top-8 left-8"
                initial={{ opacity: 0, rotate: -90 }}
                whileInView={{ opacity: 0.3, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 2.0, ease: "easeOut" }}
              >
                <div className="text-bitcoin-500/40 font-black text-2xl">V1</div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-12 right-12"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 0.2, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
              >
                <div className="text-bitcoin-400/50 font-black text-xl tracking-wider">V1</div>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/3 right-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.15, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 2.4, ease: "easeOut" }}
              >
                <div className="text-orange-500/60 font-black text-3xl">V1</div>
              </motion.div>
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
