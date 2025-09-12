import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight, Tag, User } from 'lucide-react'

export default function Blog() {
  const featuredPost = {
    title: 'Bitcoin Holding Network Upgrade: What You Need to Know',
    excerpt: 'The latest Bitcoin Holding protocol update introduces significant improvements to security, scalability, and user experience. Learn about the new features and how they benefit the entire ecosystem.',
    author: 'Bitcoin Holding Team',
    date: '2025-09-08',
    readTime: '8 min read',
    category: 'Protocol Updates',
    image: '/api/placeholder/800/400'
  }

  const recentPosts = [
    {
      title: 'Lightning Network Integration: Faster Payments',
      excerpt: 'How the Lightning Network integration makes Bitcoin Holding payments instant and affordable.',
      author: 'Alice Johnson',
      date: '2025-09-07',
      readTime: '5 min read',
      category: 'Technology',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Security Best Practices for 2025',
      excerpt: 'Updated security recommendations for Bitcoin Holding users in the evolving digital landscape.',
      author: 'Bob Smith',
      date: '2025-09-06',
      readTime: '7 min read',
      category: 'Security',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Developer Spotlight: Building on Bitcoin Holding',
      excerpt: 'Meet the developers creating innovative applications on the Bitcoin Holding network.',
      author: 'Carol Davis',
      date: '2025-09-05',
      readTime: '6 min read',
      category: 'Development',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Global Adoption Report: Q3 2025',
      excerpt: 'Analyzing Bitcoin Holding adoption trends and usage patterns around the world.',
      author: 'David Wilson',
      date: '2025-09-04',
      readTime: '10 min read',
      category: 'Analysis',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Mining Pool Decentralization Update',
      excerpt: 'Recent developments in mining pool distribution and network security.',
      author: 'Eve Brown',
      date: '2025-09-03',
      readTime: '4 min read',
      category: 'Mining',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Educational Initiative: Bitcoin Holding in Schools',
      excerpt: 'New educational programs bringing Bitcoin Holding knowledge to students worldwide.',
      author: 'Frank Miller',
      date: '2025-09-02',
      readTime: '5 min read',
      category: 'Education',
      image: '/api/placeholder/400/250'
    }
  ]

  const categories = [
    'All Posts',
    'Protocol Updates',
    'Technology',
    'Security',
    'Development',
    'Analysis',
    'Mining',
    'Education'
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
                News & Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stay updated with the latest Bitcoin Holding developments, insights, and community news.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl border overflow-hidden hover:border-bitcoin-500/40 transition-colors">
              <div className="h-64 md:h-80 bg-gradient-to-br from-bitcoin-500/20 to-orange-500/20"></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-bitcoin-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">
                    FEATURED
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  
                  <Button className="bg-bitcoin-500 hover:bg-bitcoin-600">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "bg-bitcoin-500 hover:bg-bitcoin-600" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Recent Posts</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <article key={index} className="bg-card rounded-xl border overflow-hidden hover:border-bitcoin-500/40 transition-colors group cursor-pointer">
                  <div className="h-48 bg-gradient-to-br from-muted to-muted/50"></div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 group-hover:text-bitcoin-600 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <span className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {post.author}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Load More Posts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest Bitcoin Holding news and updates
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-bitcoin-500"
              />
              <Button className="bg-bitcoin-500 hover:bg-bitcoin-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}


