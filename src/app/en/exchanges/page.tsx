import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { TrendingUp, Shield, Globe, Star } from 'lucide-react'

export default function Exchanges() {
  const exchanges = [
    { name: 'Swipe 21', rating: 5, features: ['Premium Trading', 'DeFi Integration', 'Multi-Chain'] },
    { name: 'BitExchange Pro', rating: 5, features: ['Low Fees', 'High Security', 'Global'] },
    { name: 'CryptoMarket', rating: 4, features: ['User Friendly', 'Fast KYC', 'Mobile App'] },
    { name: 'TradeBTC', rating: 4, features: ['Advanced Trading', 'API Access', 'Institutional'] }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-bitcoin-500/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Bitcoin Holding 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                Exchanges
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Trusted platforms to buy, sell, and trade Bitcoin Holding.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {exchanges.map((exchange, index) => (
                <div key={index} className="bg-card rounded-xl border p-6 hover:border-bitcoin-500/40 transition-colors">
                  <h3 className="text-xl font-bold mb-2">{exchange.name}</h3>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < exchange.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <div className="space-y-2 mb-6">
                    {exchange.features.map((feature, i) => (
                      <span key={i} className="inline-block bg-bitcoin-100 text-bitcoin-700 px-2 py-1 rounded text-sm mr-2">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button disabled className="w-full bg-gray-400 cursor-not-allowed">Coming Soon</Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}


