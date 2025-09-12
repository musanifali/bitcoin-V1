import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight, Newspaper } from 'lucide-react'

export default function News() {
  const newsItems = [
    {
      title: 'Bitcoin Holding Lightning Network Integration Complete',
      excerpt: 'The Bitcoin Holding network now fully supports Lightning Network payments, enabling instant transactions with minimal fees.',
      date: '2025-09-09',
      time: '2 hours ago',
      category: 'Technology'
    },
    {
      title: 'New Mining Pool Joins Bitcoin Holding Network',
      excerpt: 'A major mining operation has joined the Bitcoin Holding network, further strengthening network security and decentralization.',
      date: '2025-09-08',
      time: '1 day ago',
      category: 'Mining'
    },
    {
      title: 'Bitcoin Holding Core 25.1 Released with Security Enhancements',
      excerpt: 'The latest version of Bitcoin Holding Core includes important security updates and performance improvements.',
      date: '2025-09-07',
      time: '2 days ago',
      category: 'Software'
    },
    {
      title: 'Global Adoption Surges: 50M+ Active Wallets',
      excerpt: 'Bitcoin Holding wallet adoption has reached a new milestone with over 50 million active wallets worldwide.',
      date: '2025-09-06',
      time: '3 days ago',
      category: 'Adoption'
    },
    {
      title: 'Developer Conference 2025 Announces Speakers',
      excerpt: 'Leading Bitcoin Holding developers and researchers announced for the upcoming Bitcoin Holding Developer Conference.',
      date: '2025-09-05',
      time: '4 days ago',
      category: 'Events'
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
              Bitcoin Holding 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                News
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Latest updates and announcements from the Bitcoin Holding ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* News Feed */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <article key={index} className="bg-card rounded-xl border p-6 hover:border-bitcoin-500/40 transition-colors">
                  <div className="flex items-center mb-3">
                    <span className="bg-bitcoin-100 text-bitcoin-700 px-3 py-1 rounded-full text-sm font-medium mr-3">
                      {item.category}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {item.time}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 hover:text-bitcoin-600 transition-colors cursor-pointer">
                    {item.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </span>
                    
                    <Button variant="outline" size="sm">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Load More News
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}


