'use client'

import { motion } from 'framer-motion'
import { Clock, ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const EcosystemBlog = () => {
  const blogPosts = [
    {
      title: 'Q1 2025 Bitcoin Market Outlook',
      excerpt: 'Our research team analyzes Bitcoin trends and provides strategic insights for long-term holders.',
      date: '2 days ago',
      category: 'Market Analysis',
      readTime: '8 min read',
    },
    {
      title: 'New Security Features in Bitcoin Holding',
      excerpt: 'Enhanced multi-signature custody and advanced security protocols now available for all clients.',
      date: '1 week ago',
      category: 'Platform Update',
      readTime: '5 min read',
    },
    {
      title: 'Institutional Bitcoin Adoption Trends',
      excerpt: 'How corporations and institutions are integrating Bitcoin into their treasury strategies.',
      date: '2 weeks ago',
      category: 'Research',
      readTime: '12 min read',
    },
    {
      title: 'Bitcoin Holding Strategy Guide',
      excerpt: 'Best practices for long-term Bitcoin accumulation and portfolio management techniques.',
      date: '3 weeks ago',
      category: 'Education',
      readTime: '10 min read',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Bitcoin Holding Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert analysis, market insights, and educational content from our research team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-bitcoin-500/20 h-full">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-bitcoin-500/10 text-bitcoin-500 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-bitcoin-500 transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-bitcoin-500 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <span>{post.date}</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="p-0 h-auto text-bitcoin-500 hover:text-bitcoin-600 text-sm">
                    Read more →
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View all posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default EcosystemBlog
