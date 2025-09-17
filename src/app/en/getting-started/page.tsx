import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Wallet, ShoppingCart, Store, CreditCard, Calculator, Globe, Search } from 'lucide-react'

export default function GettingStarted() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-bitcoin-500/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Getting Started with 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                Bitcoin Holding
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Using Bitcoin Holding to transact is easy and accessible to everyone.
            </p>
            
            {/* Two main paths */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-12">
              <a href="#how-to-use" className="bg-card rounded-xl border p-6 hover:border-bitcoin-500/40 transition-colors group">
                <Wallet className="h-12 w-12 mx-auto text-bitcoin-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-bitcoin-600 transition-colors">How to use Bitcoin Holding</h3>
                <p className="text-muted-foreground text-sm">Learn to send, receive and manage Bitcoin Holding</p>
              </a>
              
              <a href="#how-to-accept" className="bg-card rounded-xl border p-6 hover:border-bitcoin-500/40 transition-colors group">
                <Store className="h-12 w-12 mx-auto text-bitcoin-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-bitcoin-600 transition-colors">How to accept Bitcoin Holding</h3>
                <p className="text-muted-foreground text-sm">Start accepting Bitcoin Holding for your business</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How to use Bitcoin */}
      <section id="how-to-use" className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">How to use Bitcoin Holding</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1: Inform yourself */}
              <div className="bg-card rounded-xl border p-6 hover:border-bitcoin-500/40 transition-colors">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Inform yourself</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Bitcoin Holding is different than what you know and use every day. Before you start using Bitcoin Holding, there are a few things that you need to know in order to use it securely and avoid common pitfalls.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Read more
                </Button>
              </div>

              {/* Step 2: Choose your wallet */}
              <div className="bg-card rounded-xl border p-6 hover:border-bitcoin-500/40 transition-colors">
                <div className="w-12 h-12 bg-bitcoin-500 rounded-xl flex items-center justify-center mb-6">
                  <Wallet className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Choose your wallet</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Free Bitcoin Holding wallets are available for all major operating systems and devices to serve a variety of your needs. For example, you can install an app on your mobile device for everyday use or you can have a wallet only for online payments on your computer. In any case, choosing a wallet is easy and can be done in minutes.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="/en/choose-your-wallet">Choose your wallet</a>
                </Button>
              </div>

              {/* Step 3: Get Bitcoin */}
              <div className="bg-card rounded-xl border p-6 hover:border-bitcoin-500/40 transition-colors">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Get Bitcoin Holding</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  You can get Bitcoin Holding by accepting it as a payment for goods and services. There are also several ways you can buy Bitcoin Holding Ecosystem.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="/en/buy">Buy Bitcoin Holding Ecosystem</a>
                </Button>
              </div>

              {/* Step 4: Spend Bitcoin */}
              <div className="bg-card rounded-xl border p-6 hover:border-bitcoin-500/40 transition-colors">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <ShoppingCart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Spend Bitcoin Holding</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  There are a growing number of services and merchants accepting Bitcoin Holding all over the world. Use Bitcoin Holding to pay them and rate your experience to help them gain more visibility.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Find merchants and products
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to accept Bitcoin */}
      <section id="how-to-accept" className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">How to accept Bitcoin Holding</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1: Inform yourself */}
              <div className="bg-card rounded-xl border p-6 hover:border-bitcoin-500/40 transition-colors">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Inform yourself</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Bitcoin Holding does not require merchants to change their habits. However, Bitcoin Holding is different than what you know and use every day. Before you start using Bitcoin Holding, there are a few things that you need to know in order to use it securely and avoid common pitfalls.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Read more
                </Button>
              </div>

              {/* Step 2: Processing payments */}
              <div className="bg-card rounded-xl border p-6 hover:border-bitcoin-500/40 transition-colors">
                <div className="w-12 h-12 bg-bitcoin-500 rounded-xl flex items-center justify-center mb-6">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Processing payments</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  You can process payments and invoices by yourself or you can use merchant services and deposit money in your local currency or bitcoins. Most point of sales businesses use a tablet or a mobile phone to let customers pay with their mobile phones.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Find merchant services
                </Button>
              </div>

              {/* Step 3: Accounting and taxes */}
              <div className="bg-card rounded-xl border p-6 hover:border-bitcoin-500/40 transition-colors">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Accounting and taxes</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Merchants often deposit and display prices in their local currency. In other cases, Bitcoin Holding works similarly to a foreign currency. To get appropriate guidance regarding tax compliance for your own jurisdiction, you should contact a qualified accountant.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Read more
                </Button>
              </div>

              {/* Step 4: Gaining visibility */}
              <div className="bg-card rounded-xl border p-6 hover:border-bitcoin-500/40 transition-colors">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Gaining visibility</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  There is a growing number of users searching for ways to spend their Bitcoin Holding. You can submit your business in online directories to help them easily find you. You can also display the Bitcoin Holding logo on your website or your brick and mortar business.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Submit your business
                </Button>
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
              Choose your path and begin your Bitcoin journey today
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600" asChild>
                <a href="/en/choose-your-wallet">
                  <Wallet className="mr-2 h-5 w-5" />
                  Start Using Bitcoin
                </a>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <a href="/en/businesses">
                  <Store className="mr-2 h-5 w-5" />
                  Accept Bitcoin Payments
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
