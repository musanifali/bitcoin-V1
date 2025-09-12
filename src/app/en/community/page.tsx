import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Users, MessageCircle, Calendar, Globe } from 'lucide-react'

export default function Community() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-bitcoin-500/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Bitcoin Holding 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                Community
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Connect with Bitcoin Holding enthusiasts, developers, and users worldwide.
            </p>
            <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600">
              Join Community
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <MessageCircle className="h-16 w-16 mx-auto text-bitcoin-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Forums</h3>
                <p className="text-muted-foreground">Discussion and support</p>
              </div>
              <div className="text-center">
                <Users className="h-16 w-16 mx-auto text-bitcoin-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Local Groups</h3>
                <p className="text-muted-foreground">Meet nearby enthusiasts</p>
              </div>
              <div className="text-center">
                <Calendar className="h-16 w-16 mx-auto text-bitcoin-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Events</h3>
                <p className="text-muted-foreground">Conferences and meetups</p>
              </div>
              <div className="text-center">
                <Globe className="h-16 w-16 mx-auto text-bitcoin-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Global Network</h3>
                <p className="text-muted-foreground">Worldwide community</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}


