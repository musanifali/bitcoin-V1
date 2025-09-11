import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { BookOpen, Video, Code, Users, Download, ExternalLink, Star, FileText } from 'lucide-react'

export default function Resources() {
  const resourceCategories = [
    {
      id: 'documentation',
      name: 'Documentation',
      icon: BookOpen,
      description: 'Comprehensive guides and technical documentation',
      resources: [
        {
          title: 'BitcoinG1 White Paper',
          description: 'The original BitcoinG1 paper by Satoshi Nakamoto',
          type: 'PDF',
          rating: 5,
          url: '/bitcoin.pdf'
        },
        {
          title: 'Developer Guide',
          description: 'Complete guide for BitcoinG1 developers',
          type: 'Web',
          rating: 5,
          url: '/en/developer-guide'
        },
        {
          title: 'API Reference',
          description: 'BitcoinG1 API documentation and examples',
          type: 'Web',
          rating: 4,
          url: '/en/api-reference'
        }
      ]
    },
    {
      id: 'tutorials',
      name: 'Tutorials & Guides',
      icon: Video,
      description: 'Step-by-step tutorials for beginners and experts',
      resources: [
        {
          title: 'Getting Started Guide',
          description: 'Complete beginner guide to BitcoinG1',
          type: 'Tutorial',
          rating: 5,
          url: '/en/getting-started'
        },
        {
          title: 'Wallet Setup Tutorial',
          description: 'How to set up and secure your wallet',
          type: 'Tutorial',
          rating: 5,
          url: '/en/wallet-tutorial'
        },
        {
          title: 'Mining Guide',
          description: 'Learn how to mine BitcoinG1',
          type: 'Guide',
          rating: 4,
          url: '/en/mining-guide'
        }
      ]
    },
    {
      id: 'tools',
      name: 'Developer Tools',
      icon: Code,
      description: 'Tools and libraries for BitcoinG1 development',
      resources: [
        {
          title: 'BitcoinG1 Core',
          description: 'Reference implementation of BitcoinG1',
          type: 'Software',
          rating: 5,
          url: '/en/bitcoin-core'
        },
        {
          title: 'JavaScript Library',
          description: 'BitcoinG1 JavaScript library for web development',
          type: 'Library',
          rating: 4,
          url: '/en/js-library'
        },
        {
          title: 'Python SDK',
          description: 'Python software development kit',
          type: 'SDK',
          rating: 4,
          url: '/en/python-sdk'
        }
      ]
    },
    {
      id: 'community',
      name: 'Community',
      icon: Users,
      description: 'Connect with the BitcoinG1 community',
      resources: [
        {
          title: 'Community Forum',
          description: 'Discussion forum for BitcoinG1 users',
          type: 'Forum',
          rating: 4,
          url: '/en/forum'
        },
        {
          title: 'Developer Chat',
          description: 'Real-time chat for developers',
          type: 'Chat',
          rating: 4,
          url: '/en/dev-chat'
        },
        {
          title: 'Local Meetups',
          description: 'Find BitcoinG1 meetups in your area',
          type: 'Events',
          rating: 4,
          url: '/en/meetups'
        }
      ]
    }
  ]

  const featuredResources = [
    {
      title: 'BitcoinG1 Fundamentals Course',
      description: 'Complete course covering all aspects of BitcoinG1',
      image: '/api/placeholder/400/200',
      rating: 5,
      duration: '8 hours',
      level: 'Beginner',
      url: '/en/course'
    },
    {
      title: 'Security Best Practices',
      description: 'Essential security practices for BitcoinG1 users',
      image: '/api/placeholder/400/200',
      rating: 5,
      duration: '45 minutes',
      level: 'All Levels',
      url: '/en/security-guide'
    }
  ]

  const quickLinks = [
    { name: 'White Paper', url: '/bitcoin.pdf', icon: FileText },
    { name: 'Download Core', url: '/en/download', icon: Download },
    { name: 'API Docs', url: '/en/api', icon: Code },
    { name: 'Community Forum', url: '/en/forum', icon: Users }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-bitcoin-500/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              BitcoinG1 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                Resources
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Everything you need to learn, build, and succeed with BitcoinG1.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="flex items-center space-x-2 bg-card border rounded-lg px-4 py-2 hover:border-bitcoin-500/40 transition-colors"
                >
                  <link.icon className="h-4 w-4 text-bitcoin-500" />
                  <span className="text-sm font-medium">{link.name}</span>
                  <ExternalLink className="h-3 w-3 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {featuredResources.map((resource, index) => (
                <div key={index} className="bg-card rounded-xl border overflow-hidden hover:border-bitcoin-500/40 transition-colors">
                  <div className="h-48 bg-gradient-to-br from-bitcoin-500/20 to-orange-500/20"></div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < resource.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="ml-2 text-sm text-muted-foreground">({resource.rating}/5)</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>⏱ {resource.duration}</span>
                        <span>📚 {resource.level}</span>
                      </div>
                      
                      <Button size="sm" className="bg-bitcoin-500 hover:bg-bitcoin-600">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
            
            {resourceCategories.map((category, categoryIndex) => (
              <div key={category.id} className={`mb-16 ${categoryIndex > 0 ? 'border-t pt-16' : ''}`}>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto bg-bitcoin-500 rounded-full flex items-center justify-center mb-4">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{category.name}</h3>
                  <p className="text-lg text-muted-foreground">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="bg-card rounded-xl border p-6 hover:border-bitcoin-500/40 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-bold mb-2">{resource.title}</h4>
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-3 w-3 ${i < resource.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                            <span className="ml-2 text-xs text-muted-foreground">({resource.rating}/5)</span>
                          </div>
                        </div>
                        <span className="bg-bitcoin-100 text-bitcoin-700 px-2 py-1 rounded text-xs font-medium">
                          {resource.type}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 text-sm">{resource.description}</p>
                      
                      <Button size="sm" variant="outline" className="w-full" asChild>
                        <a href={resource.url}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Access Resource
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help & Support */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Need More Help?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find what you're looking for? Get help from the community
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600">
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Button>
              
              <Button size="lg" variant="outline">
                <FileText className="mr-2 h-5 w-5" />
                Browse FAQ
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}

