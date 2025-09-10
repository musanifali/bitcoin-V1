import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Building, TrendingUp, Shield, Globe } from 'lucide-react'

export default function Businesses() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-bitcoin-500/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Bitcoin V1 for 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                Businesses
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Accept Bitcoin V1 payments and expand your global reach.
            </p>
            <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600">
              Get Started for Business
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Building className="h-16 w-16 mx-auto text-bitcoin-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Lower Transaction Costs</h3>
                <p className="text-muted-foreground">Reduce payment processing fees significantly</p>
              </div>
              <div className="text-center">
                <Globe className="h-16 w-16 mx-auto text-bitcoin-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Global Payments</h3>
                <p className="text-muted-foreground">Accept payments from customers worldwide</p>
              </div>
              <div className="text-center">
                <Shield className="h-16 w-16 mx-auto text-bitcoin-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Irreversible Transactions</h3>
                <p className="text-muted-foreground">Eliminate chargeback fraud</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
