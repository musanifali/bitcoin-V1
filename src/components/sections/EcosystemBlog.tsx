'use client'

import { motion } from 'framer-motion'
import { Clock, ArrowRight, ExternalLink, AlertCircle, Newspaper } from 'lucide-react'
import { Button } from '@/components/ui/button'

const EcosystemBlog = () => {
  const blogPosts = [
    {
      title: 'Bitcoin V1 Network Upgrade Scheduled',
      excerpt: 'Important information about upcoming Bitcoin V1 protocol improvements and what users need to know.',
      date: '2 days ago',
      category: 'Network Update',
      readTime: '5 min read',
      type: 'blog',
    },
    {
      title: 'Security Best Practices Update',
      excerpt: 'New recommendations for securing your Bitcoin V1 wallet and protecting your private keys.',
      date: '1 week ago',
      category: 'Security',
      readTime: '8 min read',
      type: 'blog',
    },
    {
      title: 'Bitcoin V1 Adoption Milestones',
      excerpt: 'Latest developments in Bitcoin V1 adoption by institutions and governments worldwide.',
      date: '2 weeks ago',
      category: 'Adoption',
      readTime: '10 min read',
      type: 'blog',
    },
  ]

  const alerts = [
    {
      title: 'Phishing Alert: Fake Bitcoin V1 Sites',
      excerpt: 'Warning about fraudulent websites mimicking legitimate Bitcoin V1 services.',
      date: '1 day ago',
      severity: 'high',
      type: 'alert',
    },
    {
      title: 'Bitcoin V1 Wallet Software Update Available',
      excerpt: 'Recommended security update for popular Bitcoin V1 wallet applications.',
      date: '3 days ago',
      severity: 'medium',
      type: 'alert',
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'from-red-500 to-red-600'
      case 'medium': return 'from-yellow-500 to-yellow-600'
      default: return 'from-blue-500 to-blue-600'
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            News & Alerts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest Bitcoin V1 news, security alerts, and important updates
          </p>
        </div>

        {/* Alerts Section */}
        {alerts.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <AlertCircle className="h-5 w-5 text-orange-500 mr-2" />
              Security Alerts
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {alerts.map((alert, index) => (
                <motion.div
                  key={alert.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <a href="/en/alerts" className="block">
                    <div className="p-4 bg-card rounded-lg border-l-4 border-l-orange-500 border border-border hover:shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:border-bitcoin-500/20">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className={`px-2 py-1 bg-gradient-to-r ${getSeverityColor(alert.severity)} text-white text-xs font-medium rounded-full mr-3`}>
                              {alert.severity.toUpperCase()}
                            </span>
                            <span className="text-sm text-muted-foreground">{alert.date}</span>
                          </div>
                          <h4 className="font-semibold text-card-foreground mb-1 group-hover:text-bitcoin-600 transition-colors">
                            {alert.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{alert.excerpt}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-bitcoin-500 group-hover:translate-x-1 transition-all ml-4 flex-shrink-0" />
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Blog Posts Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
            <Newspaper className="h-5 w-5 text-bitcoin-500 mr-2" />
            Latest News
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <a href="/en/blog" className="block">
                  <div className="p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-bitcoin-500/20 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 bg-bitcoin-500/10 text-bitcoin-500 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-bitcoin-500 transition-colors" />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-card-foreground mb-3 group-hover:text-bitcoin-600 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-3">
                        <span>{post.date}</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <span className="text-bitcoin-500 group-hover:text-bitcoin-600 transition-colors font-medium">
                        Read more →
                      </span>
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>

        {/* View All Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            variant="outline"
            asChild
          >
            <a href="/en/blog">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-orange-200 hover:border-orange-500 text-orange-600 hover:text-orange-700"
            asChild
          >
            <a href="/en/alerts">
              View All Alerts
              <AlertCircle className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default EcosystemBlog
