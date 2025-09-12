import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { CreditCard, Building, Users, Shield, ExternalLink, Star } from 'lucide-react'

export default function BuyBitcoin() {
  const buyingMethods = [
    {
      id: 'exchanges',
      name: 'Cryptocurrency Exchanges',
      icon: Building,
      description: 'Trade Bitcoin Holding on major exchanges with competitive rates',
      pros: ['Low fees', 'High liquidity', 'Advanced trading features'],
      cons: ['Requires verification', 'Technical knowledge helpful'],
      exchanges: [
        {
          name: 'BitExchange Pro',
          rating: 5,
          features: ['Low Fees (0.1%)', 'High Security', 'Global Access'],
          supported: ['Credit Card', 'Bank Transfer', 'Crypto Deposit']
        },
        {
          name: 'CryptoMarket',
          rating: 4,
          features: ['User Friendly', 'Fast Verification', 'Mobile App'],
          supported: ['Credit Card', 'PayPal', 'Bank Transfer']
        }
      ]
    },
    {
      id: 'brokers',
      name: 'Bitcoin Holding Brokers',
      icon: CreditCard,
      description: 'Simple purchase directly with credit card or bank transfer',
      pros: ['Easy to use', 'Quick purchase', 'Customer support'],
      cons: ['Higher fees', 'Limited features'],
      exchanges: [
        {
          name: 'InstantBTC',
          rating: 4,
          features: ['Instant Purchase', '24/7 Support', 'Beginner Friendly'],
          supported: ['Credit Card', 'Debit Card', 'Apple Pay']
        },
        {
          name: 'QuickCoin',
          rating: 4,
          features: ['Fast Verification', 'Multiple Payment Methods', 'Secure'],
          supported: ['Credit Card', 'Bank Transfer', 'Google Pay']
        }
      ]
    },
    {
      id: 'p2p',
      name: 'Peer-to-Peer Trading',
      icon: Users,
      description: 'Buy directly from other Bitcoin Holding users',
      pros: ['Privacy', 'Various payment methods', 'Competitive prices'],
      cons: ['Requires caution', 'Escrow recommended'],
      exchanges: [
        {
          name: 'P2P Bitcoin Market',
          rating: 4,
          features: ['Escrow Protection', 'User Reviews', 'Local Trading'],
          supported: ['Cash', 'Bank Transfer', 'Online Payment']
        },
        {
          name: 'LocalBTC V1',
          rating: 4,
          features: ['Local Meetups', 'Reputation System', 'Multiple Currencies'],
          supported: ['Cash', 'Bank Transfer', 'Mobile Money']
        }
      ]
    }
  ]

  const regions = [
    {
      name: 'United States',
      exchanges: ['BitExchange Pro', 'CryptoMarket', 'InstantBTC'],
      regulations: 'Regulated by FinCEN, state-level licensing required'
    },
    {
      name: 'European Union',
      exchanges: ['BitExchange Pro', 'CryptoMarket', 'QuickCoin'],
      regulations: 'MiCA regulation, individual country licensing'
    },
    {
      name: 'Asia Pacific',
      exchanges: ['BitExchange Pro', 'P2P Bitcoin Market'],
      regulations: 'Varies by country, check local regulations'
    },
    {
      name: 'Other Regions',
      exchanges: ['P2P Bitcoin Market', 'LocalBTC V1'],
      regulations: 'Check local cryptocurrency regulations'
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
              Buy 
              <span className="bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                Bitcoin Holding
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Purchase Bitcoin Holding safely and securely through trusted platforms and services.
            </p>
          </div>
        </div>
      </section>

      {/* Buying Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How to Buy Bitcoin Holding</h2>
            
            {buyingMethods.map((method, methodIndex) => (
              <div key={method.id} className={`mb-16 ${methodIndex > 0 ? 'border-t pt-16' : ''}`}>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto bg-bitcoin-500 rounded-full flex items-center justify-center mb-4">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{method.name}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{method.description}</p>
                  
                  <div className="flex justify-center gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Pros</h4>
                      <ul className="text-sm text-muted-foreground">
                        {method.pros.map((pro, index) => (
                          <li key={index}>✓ {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-600 mb-2">Cons</h4>
                      <ul className="text-sm text-muted-foreground">
                        {method.cons.map((con, index) => (
                          <li key={index}>⚠ {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {method.exchanges.map((exchange, exchangeIndex) => (
                    <div key={exchangeIndex} className="bg-card rounded-xl border p-6 hover:border-bitcoin-500/40 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold mb-2">{exchange.name}</h4>
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < exchange.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                            <span className="ml-2 text-sm text-muted-foreground">({exchange.rating}/5)</span>
                          </div>
                        </div>
                        <Button size="sm" className="bg-bitcoin-500 hover:bg-bitcoin-600">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit
                        </Button>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold mb-2">Features:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exchange.features.map((feature, featureIndex) => (
                            <span key={featureIndex} className="bg-bitcoin-100 text-bitcoin-700 px-2 py-1 rounded text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-2">Payment Methods:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exchange.supported.map((method, methodIndex) => (
                            <span key={methodIndex} className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm">
                              {method}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Information */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Buy by Region</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regions.map((region, index) => (
                <div key={index} className="bg-card rounded-xl border p-6">
                  <h3 className="text-xl font-bold mb-4">{region.name}</h3>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Available Exchanges:</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.exchanges.map((exchange, exchangeIndex) => (
                        <span key={exchangeIndex} className="bg-bitcoin-100 text-bitcoin-700 px-2 py-1 rounded text-sm">
                          {exchange}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Regulations:</h4>
                    <p className="text-sm text-muted-foreground">{region.regulations}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Safety Tips</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-6 border border-red-200">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-red-500" />
                  Verify Before You Buy
                </h3>
                <p className="text-muted-foreground">
                  Always verify the legitimacy of exchanges and brokers. Check reviews, regulations, and security measures.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-bold mb-4">💰 Start Small</h3>
                <p className="text-muted-foreground">
                  Begin with small purchases to test the platform and understand the process before making larger investments.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold mb-4">🔐 Secure Your Purchase</h3>
                <p className="text-muted-foreground">
                  Transfer your Bitcoin Holding to your own wallet as soon as possible. Don't leave large amounts on exchanges.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold mb-4">📚 Understand Fees</h3>
                <p className="text-muted-foreground">
                  Be aware of all fees including trading fees, withdrawal fees, and payment method charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}


