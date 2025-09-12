'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const QuickStart = () => {
  const quickStartItems = [
    {
      title: 'Get Your Wallet',
      description: 'Choose from our carefully selected Bitcoin Holding wallets to store your digital assets securely.',
      href: '/en/choose-your-wallet',
      color: 'from-blue-500 to-blue-600',
      emoji: '💰'
    },
    {
      title: 'Learn Bitcoin Holding',
      description: 'Understand the fundamentals of Bitcoin Holding, how it works, and why it matters.',
      href: '/en/you-need-to-know',
      color: 'from-emerald-500 to-emerald-600',
      emoji: '📚'
    },
    {
      title: 'Start Using Bitcoin Holding',
      description: 'Put your knowledge into practice. Learn how to send, receive, and manage your Bitcoin Holding safely.',
      href: '/en/getting-started',
      color: 'from-orange-500 to-orange-600',
      emoji: '🚀'
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-background via-bitcoin-50/20 to-orange-50/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Started with
            <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
              Bitcoin Holding
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your journey into the world of Bitcoin Holding starts here. Follow these three simple steps 
            to begin your adventure with digital currency and discover financial freedom.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {quickStartItems.map((item, index) => (
            <div key={item.title} className="text-center">
              {/* Step number */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-bitcoin-500 text-white font-bold text-lg mb-6">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-3xl">{item.emoji}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {item.description}
              </p>

              {/* CTA Button */}
              <Button 
                variant="outline" 
                className="border-bitcoin-200 hover:border-bitcoin-500 text-bitcoin-600 hover:text-bitcoin-700"
                asChild
              >
                <a href={item.href}>
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Begin Your Bitcoin Holding Journey?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already started their journey with Bitcoin Holding.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600 text-white" asChild>
              <a href="/en/getting-started">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-bitcoin-200 hover:border-bitcoin-500" asChild>
              <a href="/en/choose-your-wallet">
                Choose Your Wallet
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuickStart

