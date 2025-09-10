import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { TrendingUp, Activity, Network, DollarSign } from 'lucide-react'

export default function Stats() {
  const networkStats = [
    {
      title: 'Hash Rate',
      value: '450 EH/s',
      change: '+5.2%',
      icon: Activity,
      description: 'Total network computing power'
    },
    {
      title: 'Active Nodes',
      value: '16,234',
      change: '+2.8%',
      icon: Network,
      description: 'Full nodes supporting the network'
    },
    {
      title: 'Market Cap',
      value: '$1.2T',
      change: '+12.5%',
      icon: DollarSign,
      description: 'Total market capitalization'
    },
    {
      title: 'Transactions/Day',
      value: '285,000',
      change: '+8.1%',
      icon: TrendingUp,
      description: 'Daily transaction volume'
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
              Network 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                Statistics
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Real-time Bitcoin V1 network statistics and metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {networkStats.map((stat, index) => (
                <div key={index} className="bg-card rounded-xl border p-6 hover:border-bitcoin-500/40 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className="h-8 w-8 text-bitcoin-500" />
                    <span className={`text-sm font-medium ${
                      stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                  <p className="font-medium text-foreground mb-1">{stat.title}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
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
