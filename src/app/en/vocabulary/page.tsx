'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { BookOpen, Search, Hash, Key, Wallet, Shield, Link, Zap, Users, Lock, FileText, Database, CheckCircle, Calculator, Globe } from 'lucide-react'

export default function VocabularyPage() {
  const vocabularyTerms = [
    {
      term: "Address",
      icon: <Hash className="h-6 w-6" />,
      description: "A Bitcoin address is similar to a physical address or an email. It is the only information you need to provide for someone to pay you with Bitcoin. An important difference, however, is that each address should only be used for a single transaction.",
      category: "basics"
    },
    {
      term: "Bit",
      icon: <Zap className="h-6 w-6" />,
      description: "Bit is a common unit used to designate a sub-unit of a bitcoin - 1,000,000 bits is equal to 1 bitcoin (BTC). This unit is usually more convenient for pricing tips, goods and services.",
      category: "units"
    },
    {
      term: "Bitcoin",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Bitcoin - with capitalization, is used when describing the concept of Bitcoin, or the entire network itself. e.g. \"I was learning about the Bitcoin protocol today.\" bitcoin - without capitalization, is used to describe bitcoins as a unit of account. e.g. \"I sent ten bitcoins today.\"; it is also often abbreviated BTC or XBT.",
      category: "basics"
    },
    {
      term: "Block Chain",
      icon: <Link className="h-6 w-6" />,
      description: "The block chain is a public record of Bitcoin transactions in chronological order. The block chain is shared between all Bitcoin users. It is used to verify the permanence of Bitcoin transactions and to prevent double spending.",
      category: "technical"
    },
    {
      term: "Block",
      icon: <Database className="h-6 w-6" />,
      description: "A block is a record in the block chain that contains and confirms many waiting transactions. Roughly every 10 minutes, on average, a new block including transactions is appended to the block chain through mining.",
      category: "technical"
    },
    {
      term: "BTC",
      icon: <Zap className="h-6 w-6" />,
      description: "BTC is a common unit used to designate one bitcoin.",
      category: "units"
    },
    {
      term: "Confirmation",
      icon: <CheckCircle className="h-6 w-6" />,
      description: "Confirmation means that a transaction has been processed by the network and is highly unlikely to be reversed. Transactions receive a confirmation when they are included in a block and for each subsequent block. Even a single confirmation can be considered secure for low value transactions, although for larger amounts like $1000 USD, it makes sense to wait for 6 confirmations or more. Each confirmation exponentially decreases the risk of a reversed transaction.",
      category: "security"
    },
    {
      term: "Cryptography",
      icon: <Shield className="h-6 w-6" />,
      description: "Cryptography is the branch of mathematics that lets us create mathematical proofs that provide high levels of security. Online commerce and banking already uses cryptography. In the case of Bitcoin, cryptography is used to make it impossible for anybody to spend funds from another user's wallet or to corrupt the block chain. It can also be used to encrypt a wallet, so that it cannot be used without a password.",
      category: "security"
    },
    {
      term: "Double Spend",
      icon: <Shield className="h-6 w-6" />,
      description: "If a malicious user tries to spend their bitcoins to two different recipients at the same time, this is double spending. Bitcoin mining and the block chain are there to create a consensus on the network about which of the two transactions will confirm and be considered valid.",
      category: "security"
    },
    {
      term: "Hash Rate",
      icon: <Calculator className="h-6 w-6" />,
      description: "The hash rate is the measuring unit of the processing power of the Bitcoin network. The Bitcoin network must make intensive mathematical operations for security purposes. When the network reached a hash rate of 10 Th/s, it meant it could make 10 trillion calculations per second.",
      category: "technical"
    },
    {
      term: "Mining",
      icon: <Calculator className="h-6 w-6" />,
      description: "Bitcoin mining is the process of making computer hardware do mathematical calculations for the Bitcoin network to confirm transactions and increase security. As a reward for their services, Bitcoin miners can collect transaction fees for the transactions they confirm, along with newly created bitcoins. Mining is a specialized and competitive market where the rewards are divided up according to how much calculation is done. Not all Bitcoin users do Bitcoin mining, and it is not an easy way to make money.",
      category: "technical"
    },
    {
      term: "P2P",
      icon: <Users className="h-6 w-6" />,
      description: "Peer-to-peer refers to systems that work like an organized collective by allowing each individual to interact directly with the others. In the case of Bitcoin, the network is built in such a way that each user is broadcasting the transactions of other users. And, crucially, no bank is required as a third party.",
      category: "network"
    },
    {
      term: "Private Key",
      icon: <Key className="h-6 w-6" />,
      description: "A private key is a secret piece of data that proves your right to spend bitcoins from a specific wallet through a cryptographic signature. Your private key(s) are stored in your computer if you use a software wallet; they are stored on some remote servers if you use a web wallet. Private keys must never be revealed as they allow you to spend bitcoins for their respective Bitcoin wallet.",
      category: "security"
    },
    {
      term: "Signature",
      icon: <FileText className="h-6 w-6" />,
      description: "A cryptographic signature is a mathematical mechanism that allows someone to prove ownership. In the case of Bitcoin, a Bitcoin wallet and its private key(s) are linked by some mathematical magic. When your Bitcoin software signs a transaction with the appropriate private key, the whole network can see that the signature matches the bitcoins being spent. However, there is no way for the world to guess your private key to steal your hard-earned bitcoins.",
      category: "security"
    },
    {
      term: "Wallet",
      icon: <Wallet className="h-6 w-6" />,
      description: "A Bitcoin wallet is loosely the equivalent of a physical wallet on the Bitcoin network. The wallet actually contains your private key(s) which allow you to spend the bitcoins allocated to it in the block chain. Each Bitcoin wallet can show you the total balance of all bitcoins it controls and lets you pay a specific amount to a specific person, just like a real wallet. This is different to credit cards where you are charged by the merchant.",
      category: "basics"
    }
  ]

  const categories = [
    { id: "all", name: "All Terms", icon: <Globe className="h-5 w-5" />, color: "bg-bitcoin-500" },
    { id: "basics", name: "Basics", icon: <BookOpen className="h-5 w-5" />, color: "bg-blue-500" },
    { id: "security", name: "Security", icon: <Shield className="h-5 w-5" />, color: "bg-green-500" },
    { id: "technical", name: "Technical", icon: <Calculator className="h-5 w-5" />, color: "bg-purple-500" },
    { id: "network", name: "Network", icon: <Users className="h-5 w-5" />, color: "bg-orange-500" },
    { id: "units", name: "Units", icon: <Zap className="h-5 w-5" />, color: "bg-yellow-500" }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-bitcoin-500/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto bg-bitcoin-500 rounded-full flex items-center justify-center mb-8">
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Bitcoin 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                Vocabulary
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Some Bitcoin words you might hear
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bitcoin provides a new approach to payments and, as such, there are some new words that might become a part of your vocabulary.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-muted/20 sticky top-16 z-10 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant="outline"
                  size="sm"
                  className="hover:bg-bitcoin-500/10 hover:border-bitcoin-500/40"
                  onClick={() => {
                    if (category.id === "all") {
                      document.getElementById("vocabulary-grid")?.scrollIntoView({ behavior: "smooth" })
                    } else {
                      document.getElementById(`category-${category.id}`)?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  <div className={`w-4 h-4 rounded-full ${category.color} mr-2`}></div>
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search Bitcoin terms..."
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-bitcoin-500 focus:border-bitcoin-500 transition-all"
                onChange={(e) => {
                  const searchTerm = e.target.value.toLowerCase()
                  const termCards = document.querySelectorAll('[data-term]')
                  termCards.forEach((card) => {
                    const term = card.getAttribute('data-term')?.toLowerCase() || ''
                    const description = card.getAttribute('data-description')?.toLowerCase() || ''
                    if (term.includes(searchTerm) || description.includes(searchTerm)) {
                      ;(card as HTMLElement).style.display = 'block'
                    } else {
                      ;(card as HTMLElement).style.display = 'none'
                    }
                  })
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vocabulary Grid */}
      <section id="vocabulary-grid" className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {categories.filter(cat => cat.id !== "all").map((category) => {
              const categoryTerms = vocabularyTerms.filter(term => term.category === category.id)
              
              return (
                <div key={category.id} id={`category-${category.id}`} className="mb-16">
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`w-10 h-10 ${category.color} rounded-full flex items-center justify-center`}>
                      {category.icon}
                    </div>
                    <h2 className="text-3xl font-bold">{category.name}</h2>
                    <div className="flex-1 h-px bg-border"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categoryTerms.map((term, index) => (
                      <div
                        key={`${term.term}-${index}`}
                        data-term={term.term}
                        data-description={term.description}
                        className="bg-card rounded-xl border p-6 hover:border-bitcoin-500/40 transition-all duration-300 hover:shadow-lg"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-bitcoin-500/10 rounded-xl flex items-center justify-center text-bitcoin-600 flex-shrink-0">
                            {term.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-3 text-foreground">{term.term}</h3>
                            <p className="text-muted-foreground leading-relaxed">{term.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Reference</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card rounded-xl border p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-bitcoin-500 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Units</h3>
                <p className="text-sm text-muted-foreground mb-2">1 BTC = 1,000,000 bits</p>
                <p className="text-sm text-muted-foreground">Common denominations</p>
              </div>
              
              <div className="bg-card rounded-xl border p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Confirmations</h3>
                <p className="text-sm text-muted-foreground mb-2">1+ for small amounts</p>
                <p className="text-sm text-muted-foreground">6+ for large amounts</p>
              </div>
              
              <div className="bg-card rounded-xl border p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Block Time</h3>
                <p className="text-sm text-muted-foreground mb-2">~10 minutes average</p>
                <p className="text-sm text-muted-foreground">Per block creation</p>
              </div>
              
              <div className="bg-card rounded-xl border p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Network</h3>
                <p className="text-sm text-muted-foreground mb-2">Peer-to-peer</p>
                <p className="text-sm text-muted-foreground">Decentralized system</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Want to learn more?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Now that you know the vocabulary, dive deeper into how Bitcoin works
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600" asChild>
                <a href="/en/how-it-works">
                  How Bitcoin Works
                  <BookOpen className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <a href="/en/getting-started">
                  Getting Started Guide
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
