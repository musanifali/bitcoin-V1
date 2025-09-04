'use client'

import { motion } from 'framer-motion'
import { Globe, FileText, Palette, Code, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const JoinBitcoin = () => {
  const contributionAreas = [
    {
      icon: Globe,
      title: 'Individual Plans',
      description: 'Personal Bitcoin V1 accounts with flexible terms',
      action: 'Get Started',
    },
    {
      icon: FileText,
      title: 'Corporate Accounts',
      description: 'Business Bitcoin treasury management solutions',
      action: 'Learn More',
    },
    {
      icon: Palette,
      title: 'Institutional Services',
      description: 'White-glove service for large-scale Bitcoin V1 investments',
      action: 'Contact Sales',
    },
    {
      icon: Code,
      title: 'API Integration',
      description: 'Integrate Bitcoin V1 services into your platform',
      action: 'View API Docs',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Join Bitcoin V1
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Start your Bitcoin V1 journey with our professional platform. 
            Whether you&apos;re an individual investor or institution, we have the right solution for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contributionAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-bitcoin-500/20 text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-bitcoin-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-bitcoin-500/20 transition-colors">
                  <area.icon className="h-8 w-8 text-bitcoin-500" />
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {area.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 flex-1">
                  {area.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="w-full text-bitcoin-500 hover:text-bitcoin-600 hover:bg-bitcoin-500/10"
                >
                  {area.action}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-bitcoin-50 to-orange-50 dark:from-bitcoin-950/20 dark:to-orange-950/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to start holding Bitcoin professionally?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of investors who trust Bitcoin V1 for secure, 
            professional Bitcoin custody and investment management services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600 text-white">
              Open Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinBitcoin
