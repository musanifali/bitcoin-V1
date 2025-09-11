import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { ArrowRight, Smartphone, Shield, Globe, Zap, DollarSign, Eye, QrCode } from 'lucide-react'

export default function Individuals() {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile payments made easy',
      description: 'Bitcoin when used on a mobile device allows you to pay with a simple two-step scan-and-pay. There\'s no need to sign up, swipe your card, type a PIN, or sign anything. All you need to receive Bitcoin payments is to display the QR code in your Bitcoin wallet app and let the other party scan your mobile, or touch the two phones together (using NFC radio technology).',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Security and control over your money',
      description: 'Bitcoin transactions are secured by mathematics and energy. Cryptographic signatures prevent other people from spending your money. Energy spent by proof of work (PoW) prevents other people from undoing, rearranging or losing your transactions. So long as you take the required steps to protect your wallet, Bitcoin can give you control over your money and a strong level of protection against many types of fraud.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      title: 'Works everywhere, anytime',
      description: 'Similarly to email, you don\'t need to ask recipients you\'re sending bitcoin to, to use the same software, wallets or service providers. You just need their bitcoin address and then you can transact with them anytime. The Bitcoin network is always running and never sleeps, even on weekends and holidays.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Fast international payments',
      description: 'Sending bitcoins across borders is as easy as sending them across the street. There are no banks to make you wait three business days, no extra fees for making an international transfer, and no special limitations on the minimum or maximum amount you can send.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: DollarSign,
      title: 'Choose your own fees',
      description: 'There is no fee to receive bitcoins, and many wallets let you control how large a fee to pay when spending. Most wallets have reasonable default fees, and higher fees can encourage faster confirmation of your transactions. Fees are unrelated to the amount transferred, so it\'s possible to send 100,000 bitcoins for the same fee it costs to send 1 bitcoin.',
      color: 'from-bitcoin-500 to-bitcoin-600'
    },
    {
      icon: Eye,
      title: 'Protect your identity',
      description: 'With Bitcoin, there\'s no credit card number that malicious actors can collect in order to steal from you. In fact, it\'s even possible in some cases to send a payment without revealing your identity, almost like with physical money. You should, however, take note that some effort can be required to protect your privacy.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-bitcoin-500/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Bitcoin for 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                Individuals
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Bitcoin is the easiest way to transact at a very low cost.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600" asChild>
                <a href="/en/getting-started">
                  Get started with Bitcoin
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <a href="/en/choose-your-wallet">
                  <QrCode className="mr-2 h-5 w-5" />
                  Choose a Wallet
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="relative group">
                  <div className="bg-card rounded-xl border p-8 hover:border-bitcoin-500/40 transition-all duration-300 hover:shadow-lg h-full">
                    {/* Background Gradient */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-10 overflow-hidden rounded-xl">
                      <div className={`w-full h-full bg-gradient-to-br ${feature.color} rounded-full blur-xl`} />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <feature.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4 group-hover:text-bitcoin-600 transition-colors">
                        {feature.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Bitcoin Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Bitcoin?</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Bitcoin offers unprecedented freedom and control over your money, making financial transactions simpler, faster, and more secure than ever before.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-bitcoin-500 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Secure</h3>
                <p className="text-muted-foreground text-sm">Protected by advanced cryptography and mathematics</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Global</h3>
                <p className="text-muted-foreground text-sm">Send and receive payments anywhere in the world</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Low Cost</h3>
                <p className="text-muted-foreground text-sm">Minimal fees compared to traditional payment methods</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to get started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join millions of people around the world who are already using Bitcoin
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600" asChild>
                <a href="/en/getting-started">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <a href="/en/you-need-to-know">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
