import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { ArrowRight, DollarSign, Shield, Zap, Lock, Users, CheckCircle, FileText } from 'lucide-react'

export default function Businesses() {
  const features = [
    {
      icon: DollarSign,
      title: 'Choose your own fees',
      description: 'There is no fee to receive bitcoins, and many wallets let you control how large a fee to pay when spending. Most wallets have reasonable default fees, and higher fees can encourage faster confirmation of your transactions. Fees are unrelated to the amount transferred, so it\'s possible to send 100,000 bitcoins for the same fee it costs to send 1 bitcoin.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Protection against fraud',
      description: 'Any business that accepts credit cards or PayPal knows the problem of payments that are later reversed. Chargeback frauds result in limited market reach and increased prices, which in turn penalizes customers. Bitcoin payments are irreversible and secure, meaning that the cost of fraud is no longer pushed onto the shoulders of the merchants.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Zap,
      title: 'Fast international payments',
      description: 'Sending bitcoins across borders is as easy as sending them across the street. There are no banks to make you wait three business days, no extra fees for making an international transfer, and no special limitations on the minimum or maximum amount you can send.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Lock,
      title: 'No PCI compliance required',
      description: 'Accepting credit cards online typically requires extensive security checks in order to comply with the PCI standard. Bitcoin still requires you to secure your wallet and your payment requests, however, you do not carry the costs and responsibilities that come with processing sensitive information from your customers like with credit card numbers.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Get some free visibility',
      description: 'Bitcoin is an emerging market of new customers who are searching for ways to spend their bitcoins. Accepting them is a good way to get new customers and give your business some new visibility. Accepting a new payment method has often shown to be a clever practice for online businesses.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: CheckCircle,
      title: 'Multi-signature',
      description: 'Bitcoin also includes a multi-signature feature which allows bitcoins to be spent only if a subset of a group of people authorize the transaction. This can be used by a board of directors, for example, to prevent members from making expenditures without enough consent from other members, as well as to track which members permitted particular transactions.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: FileText,
      title: 'Accounting transparency',
      description: 'Many organizations are required to produce accounting documents about their activity. Using Bitcoin allows you to offer the highest level of transparency since you can provide information to verify balances and transactions through the block chain. For example, non-profit organizations can allow the public to see how much they receive in donations.',
      color: 'from-bitcoin-500 to-bitcoin-600'
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
                Businesses
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Bitcoin is a very secure and inexpensive way to handle payments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600" asChild>
                <a href="/en/getting-started">
                  Get started with Bitcoin
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <a href="/en/exchanges">
                  Find Payment Processors
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

      {/* Business Benefits Summary */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Businesses Choose Bitcoin</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Bitcoin offers unique advantages for businesses looking to modernize their payment systems and reach new markets.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-bitcoin-500 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Lower Costs</h3>
                <p className="text-muted-foreground text-sm">Reduce transaction fees and eliminate chargebacks</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Faster Payments</h3>
                <p className="text-muted-foreground text-sm">Receive payments instantly, settle internationally fast</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">New Markets</h3>
                <p className="text-muted-foreground text-sm">Access global customers and Bitcoin early adopters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Getting Started is Easy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-bitcoin-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Choose Integration</h3>
                <p className="text-muted-foreground text-sm">Select payment processor or direct wallet integration</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Set Up Wallet</h3>
                <p className="text-muted-foreground text-sm">Create secure business wallet for receiving payments</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-green-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Add Payment Option</h3>
                <p className="text-muted-foreground text-sm">Display Bitcoin payment option on your website</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Start Accepting</h3>
                <p className="text-muted-foreground text-sm">Begin receiving Bitcoin payments from customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to accept Bitcoin payments?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of businesses already benefiting from Bitcoin payments
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600" asChild>
                <a href="/en/getting-started">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <a href="/en/exchanges">
                  Find Payment Solutions
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
