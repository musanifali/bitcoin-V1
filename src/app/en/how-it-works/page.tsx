import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { ArrowRight, User, Blocks, Key, Pickaxe, BookOpen, ExternalLink } from 'lucide-react'

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-bitcoin-500/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              How does 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                Bitcoin work?
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              This is a question often surrounded by confusion, so here's a quick explanation!
            </p>
          </div>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* The basics for a new user */}
              <div className="bg-card rounded-xl border p-8 hover:border-bitcoin-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">The basics for a new user</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      As a new user, you can get started with Bitcoin without understanding the technical details. Once you've installed a Bitcoin wallet on your computer or mobile phone, it will generate your first Bitcoin address and you can create more whenever you need one. You can disclose your addresses to your friends so that they can pay you or vice versa. In fact, this is pretty similar to how email works, except that Bitcoin addresses should be used only once.
                    </p>
                  </div>
                </div>
              </div>

              {/* Balances - block chain */}
              <div className="bg-card rounded-xl border p-8 hover:border-bitcoin-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-bitcoin-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Blocks className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Balances - block chain</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The block chain is a shared public ledger on which the entire Bitcoin network relies. All confirmed transactions are included in the block chain. It allows Bitcoin wallets to calculate their spendable balance so that new transactions can be verified thereby ensuring they're actually owned by the spender. The integrity and the chronological order of the block chain are enforced with cryptography.
                    </p>
                  </div>
                </div>
              </div>

              {/* Transactions - private keys */}
              <div className="bg-card rounded-xl border p-8 hover:border-bitcoin-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Key className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Transactions - private keys</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A transaction is a transfer of value between Bitcoin wallets that gets included in the block chain. Bitcoin wallets keep a secret piece of data called a private key or seed, which is used to sign transactions, providing a mathematical proof that they have come from the owner of the wallet. The signature also prevents the transaction from being altered by anybody once it has been issued. All transactions are broadcast to the network and usually begin to be confirmed within 10-20 minutes, through a process called mining.
                    </p>
                  </div>
                </div>
              </div>

              {/* Processing - mining */}
              <div className="bg-card rounded-xl border p-8 hover:border-bitcoin-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Pickaxe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Processing - mining</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Mining is a distributed consensus system that is used to confirm pending transactions by including them in the block chain. It enforces a chronological order in the block chain, protects the neutrality of the network, and allows different computers to agree on the state of the system. To be confirmed, transactions must be packed in a block that fits very strict cryptographic rules that will be verified by the network. These rules prevent previous blocks from being modified because doing so would invalidate all the subsequent blocks. Mining also creates the equivalent of a competitive lottery that prevents any individual from easily adding new blocks consecutively to the block chain. In this way, no group or individuals can control what is included in the block chain or replace parts of the block chain to roll back their own spends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Going down the rabbit hole */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-xl border p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-bitcoin-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Going down the rabbit hole</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                This is just a short summary of Bitcoin. If you want to learn more of the details, you can read the original paper that describes its design, the developer documentation, or explore the Bitcoin wiki.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" asChild>
                  <a href="/bitcoin.pdf" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Read Original Paper
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                
                <Button size="lg" variant="outline" asChild>
                  <a href="/en/development">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Developer Documentation
                  </a>
                </Button>
                
                <Button size="lg" variant="outline">
                  Bitcoin Wiki
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Flow Diagram */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">The Bitcoin Process</h2>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Install Wallet & Generate Address</h3>
                  <p className="text-muted-foreground text-sm">Similar to email, you get a unique address for receiving payments</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground hidden md:block" />
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-bitcoin-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Create Transaction</h3>
                  <p className="text-muted-foreground text-sm">Specify recipient and amount, sign with your private key</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground hidden md:block" />
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Broadcast to Network</h3>
                  <p className="text-muted-foreground text-sm">Transaction is sent to Bitcoin network for verification</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground hidden md:block" />
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Mining Confirmation</h3>
                  <p className="text-muted-foreground text-sm">Miners include transaction in blockchain, typically within 10-20 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to get started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Now that you understand how Bitcoin works, take your first steps
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600" asChild>
                <a href="/en/getting-started">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <a href="/en/choose-your-wallet">
                  Choose a Wallet
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
