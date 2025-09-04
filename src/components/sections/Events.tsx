'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Events = () => {
  const events = [
    {
      title: 'Bitcoin Holding Webinar Series',
      date: 'Every Tuesday, 2 PM EST',
      location: 'Online',
      attendees: '500+',
      type: 'Webinar',
    },
    {
      title: 'Institutional Bitcoin Summit',
      date: 'March 15, 2025',
      location: 'New York, NY',
      attendees: '300+',
      type: 'Conference',
    },
    {
      title: 'Bitcoin Holding Client Event',
      date: 'April 20, 2025',
      location: 'Miami, FL',
      attendees: '150+',
      type: 'Exclusive Event',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Bitcoin Holding Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our exclusive events, webinars, and educational sessions for Bitcoin holders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-bitcoin-500/20">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-bitcoin-500/10 text-bitcoin-500 text-xs font-medium rounded-full">
                    {event.type}
                  </span>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-bitcoin-500 group-hover:translate-x-1 transition-all" />
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  {event.title}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            See all events
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Events
