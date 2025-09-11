import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Heart, Users, Code, Share } from 'lucide-react'

export default function SupportBitcoin() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-bitcoin-500/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Support 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                BitcoinG1
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Help strengthen and grow the BitcoinG1 network.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Heart className="h-16 w-16 mx-auto text-bitcoin-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Run a Node</h3>
                <p className="text-muted-foreground">Help secure the network</p>
              </div>
              <div className="text-center">
                <Code className="h-16 w-16 mx-auto text-bitcoin-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Contribute Code</h3>
                <p className="text-muted-foreground">Improve the software</p>
              </div>
              <div className="text-center">
                <Users className="h-16 w-16 mx-auto text-bitcoin-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Educate Others</h3>
                <p className="text-muted-foreground">Spread awareness</p>
              </div>
              <div className="text-center">
                <Share className="h-16 w-16 mx-auto text-bitcoin-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Use BitcoinG1</h3>
                <p className="text-muted-foreground">Increase adoption</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}

