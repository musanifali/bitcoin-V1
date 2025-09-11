import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Clock } from 'lucide-react'

export default function Events() {
  const events = [
    {
      title: 'BitcoinG1 Developer Conference 2025',
      date: 'October 15-17, 2025',
      location: 'San Francisco, CA',
      type: 'Conference'
    },
    {
      title: 'Local BitcoinG1 Meetup',
      date: 'September 20, 2025',
      location: 'New York, NY',
      type: 'Meetup'
    },
    {
      title: 'BitcoinG1 Workshop',
      date: 'September 25, 2025',
      location: 'London, UK',
      type: 'Workshop'
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-bitcoin-500/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              BitcoinG1 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                Events
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Upcoming conferences, meetups, and workshops in the BitcoinG1 community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="bg-card rounded-xl border p-6 hover:border-bitcoin-500/40 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="bg-bitcoin-100 text-bitcoin-700 px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block">
                        {event.type}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {event.date}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
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

