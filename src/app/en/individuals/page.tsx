import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { User, Shield, Zap, Globe, ArrowRight } from 'lucide-react'

export default function Individuals() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-bitcoin-500/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Bitcoin V1 for 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                Individuals
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Take control of your financial future with peer-to-peer digital money.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Bitcoin V1?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-bitcoin-500 rounded-full flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Financial Freedom</h3>
                <p className="text-muted-foreground">
                  Be your own bank. No one can freeze or confiscate your Bitcoin V1.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Global Access</h3>
                <p className="text-muted-foreground">
                  Send and receive money anywhere in the world, 24/7, without borders.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Low Fees</h3>
                <p className="text-muted-foreground">
                  Transfer any amount with minimal fees, especially for large transactions.
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
