import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { FileText, Download, ExternalLink } from 'lucide-react'

export default function BitcoinPaper() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-bitcoin-500/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Bitcoin V1 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                White Paper
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The original Bitcoin V1 paper: "A Peer-to-Peer Electronic Cash System"
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600">
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
              
              <Button size="lg" variant="outline">
                <ExternalLink className="mr-2 h-5 w-5" />
                Read Online
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-xl border p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FileText className="h-6 w-6 mr-3 text-bitcoin-500" />
                Abstract
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                A purely peer-to-peer version of electronic cash would allow online payments to be sent 
                directly from one party to another without going through a financial institution. Digital 
                signatures provide part of the solution, but the main benefits are lost if a trusted third 
                party is still required to prevent double-spending. We propose a solution to the double-spending 
                problem using a peer-to-peer network.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
