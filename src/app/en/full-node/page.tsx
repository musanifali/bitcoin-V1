import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Server, Shield, Network, Download } from 'lucide-react'

export default function FullNode() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-bitcoin-500/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Run a Bitcoin Holding 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                Full Node
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Help secure and decentralize the Bitcoin Holding network by running your own full node.
            </p>
            <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600">
              <Download className="mr-2 h-5 w-5" />
              Download Bitcoin Core
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-16 w-16 mx-auto text-bitcoin-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Network Security</h3>
                <p className="text-muted-foreground">Strengthen Bitcoin Holding's decentralization</p>
              </div>
              <div className="text-center">
                <Server className="h-16 w-16 mx-auto text-bitcoin-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Full Validation</h3>
                <p className="text-muted-foreground">Verify all transactions independently</p>
              </div>
              <div className="text-center">
                <Network className="h-16 w-16 mx-auto text-bitcoin-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Support Network</h3>
                <p className="text-muted-foreground">Help other nodes synchronize</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}


