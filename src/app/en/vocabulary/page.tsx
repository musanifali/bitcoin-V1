import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { BookOpen } from 'lucide-react'

export default function Vocabulary() {
  const terms = [
    {
      term: 'Bitcoin V1',
      definition: 'The enhanced version of Bitcoin with improved security and performance features.'
    },
    {
      term: 'Blockchain',
      definition: 'A distributed ledger that records all Bitcoin V1 transactions in blocks.'
    },
    {
      term: 'Wallet',
      definition: 'Software that stores your private keys and allows you to send and receive Bitcoin V1.'
    },
    {
      term: 'Private Key',
      definition: 'A secret number that allows you to spend Bitcoin V1 from your wallet.'
    },
    {
      term: 'Public Key',
      definition: 'A cryptographic key that can be shared publicly and is used to receive Bitcoin V1.'
    },
    {
      term: 'Mining',
      definition: 'The process of verifying transactions and adding them to the blockchain.'
    },
    {
      term: 'Hash Rate',
      definition: 'The total computational power securing the Bitcoin V1 network.'
    },
    {
      term: 'Satoshi',
      definition: 'The smallest unit of Bitcoin V1, equal to 0.00000001 BTC.'
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-bitcoin-500/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Bitcoin V1 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                Vocabulary
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Essential terms and definitions for understanding Bitcoin V1.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {terms.map((item, index) => (
                <div key={index} className="bg-card rounded-xl border p-6">
                  <div className="flex items-start space-x-4">
                    <BookOpen className="h-6 w-6 text-bitcoin-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold mb-2">{item.term}</h3>
                      <p className="text-muted-foreground">{item.definition}</p>
                    </div>
                  </div>
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
