"use client"

import { Button } from "@/components/ui/button"
import { 
  AlertTriangle, 
  ArrowRight, 
  Bell, 
  Clock, 
  Eye, 
  MessageSquare, 
  Newspaper, 
  Shield, 
  Star, 
  TrendingUp, 
  Zap 
} from "lucide-react"

export default function NewsAlerts() {
  const featuredNews = {
    title: "BitcoinG1 Network Upgrade: Enhanced Security and Performance",
    excerpt: "The latest BitcoinG1 protocol update introduces advanced security features and significant performance improvements. This major upgrade brings enhanced transaction speeds and improved security protocols.",
    date: "3 hours ago",
    category: "Protocol Update",
    readTime: "5 min read",
    views: "2.4k",
    likes: "156"
  }

  const trendingNews = [
    {
      title: "Lightning Network Integration Reaches 90% Completion",
      excerpt: "Major milestone achieved in Lightning Network integration with BitcoinG1",
      category: "Technology",
      time: "1 hour ago",
      views: "1.8k",
      priority: "high"
    },
    {
      title: "Major Exchange Adds BitcoinG1 Support",
      excerpt: "Leading cryptocurrency exchange announces full BitcoinG1 trading support",
      category: "Markets",
      time: "3 hours ago",
      views: "3.2k",
      priority: "high"
    },
    {
      title: "New Developer Tools Released",
      excerpt: "Enhanced SDK and API documentation now available for developers",
      category: "Development",
      time: "6 hours ago",
      views: "892",
      priority: "medium"
    }
  ]

  const alerts = [
    {
      title: "Critical Wallet Security Update",
      excerpt: "Immediate update required for all wallet versions below v2.1.0",
      date: "2 hours ago",
      severity: "critical",
      action: "Update Now"
    },
    {
      title: "Scheduled Network Maintenance",
      excerpt: "Brief maintenance window scheduled for this weekend",
      date: "1 day ago", 
      severity: "info",
      action: "Learn More"
    }
  ]

  const networkStats = [
    { label: "Hash Rate", value: "450 EH/s", change: "+5.2%", positive: true },
    { label: "Active Nodes", value: "16,234", change: "+2.1%", positive: true },
    { label: "Transactions/Day", value: "342K", change: "+8.7%", positive: true },
    { label: "Market Cap", value: "$1.2T", change: "-1.3%", positive: false }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-background dark:to-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Modern Header with Floating Elements */}
        <div className="text-center mb-20 relative">
          {/* Floating Background Elements */}
          <div className="absolute -top-8 left-1/4 w-32 h-32 bg-bitcoin-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-8 right-1/4 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-bitcoin-500/10 rounded-full text-bitcoin-600 text-sm font-medium mb-6">
              <Newspaper className="w-4 h-4" />
              <span>BitcoinG1 News Hub</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Stay 
              <span className="bg-gradient-to-r from-bitcoin-500 via-orange-500 to-red-500 bg-clip-text text-transparent"> Informed</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get the latest BitcoinG1 news, security alerts, and network insights in one place
            </p>
          </div>
        </div>

        {/* Hero News Card + Stats Dashboard Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 mb-16">
          
          {/* Featured Hero Card */}
          <div className="xl:col-span-3">
            <div className="relative group">
              {/* Main Featured Card */}
              <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-card dark:to-gray-800 rounded-3xl border border-gray-200 dark:border-border p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-bitcoin-500/5 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
                
                <div className="relative z-10">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-bitcoin-500 rounded-xl">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                      <span className="bg-bitcoin-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        FEATURED
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {featuredNews.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        {featuredNews.likes}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-3xl font-bold text-foreground mb-4 leading-tight group-hover:text-bitcoin-600 transition-colors">
                    {featuredNews.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {featuredNews.date}
                      </span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredNews.category}
                      </span>
                    </div>
                    
                    <Button className="bg-bitcoin-500 hover:bg-bitcoin-600 text-white">
                      Read Full Story
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Dashboard Sidebar */}
          <div className="xl:col-span-2 space-y-6">
            
            {/* Live Network Stats */}
            <div className="bg-gradient-to-br from-bitcoin-500 to-orange-600 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6" />
                    <span className="font-bold text-lg">Live Network</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm opacity-90">Active</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {networkStats.map((stat, index) => (
                    <div key={index} className="bg-white/10 rounded-xl p-4">
                      <div className="text-sm opacity-80 mb-1">{stat.label}</div>
                      <div className="font-bold text-lg">{stat.value}</div>
                      <div className={`text-xs flex items-center gap-1 ${stat.positive ? 'text-green-300' : 'text-red-300'}`}>
                        <TrendingUp className={`w-3 h-3 ${!stat.positive && 'rotate-180'}`} />
                        {stat.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Security Alerts Panel */}
            <div className="bg-white dark:bg-card rounded-2xl border border-gray-200 dark:border-border p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-100 dark:bg-red-900 rounded-xl">
                  <Shield className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <h4 className="font-bold text-lg text-foreground">Security Center</h4>
                <div className="ml-auto">
                  <Bell className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
              
              <div className="space-y-4">
                {alerts.map((alert, index) => (
                  <div key={index} className={`p-4 rounded-xl border-l-4 ${
                    alert.severity === 'critical' 
                      ? 'border-l-red-500 bg-red-50 dark:bg-red-950/30' 
                      : 'border-l-blue-500 bg-blue-50 dark:bg-blue-950/30'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="font-semibold text-foreground text-sm">
                        {alert.title}
                      </h5>
                      <AlertTriangle className={`w-4 h-4 ${
                        alert.severity === 'critical' ? 'text-red-500' : 'text-blue-500'
                      }`} />
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      {alert.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{alert.date}</span>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className={`text-xs ${
                          alert.severity === 'critical' 
                            ? 'border-red-500 text-red-600 hover:bg-red-500 hover:text-white' 
                            : 'border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white'
                        }`}
                      >
                        {alert.action}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trending News Carousel */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">Trending News</h3>
              <p className="text-muted-foreground">Most viewed stories in BitcoinG1 community</p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              View All News
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingNews.map((news, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white dark:bg-card rounded-2xl border border-gray-200 dark:border-border p-6 hover:shadow-lg hover:border-bitcoin-500/40 transition-all duration-300 h-full">
                  
                  {/* Priority Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-3 h-3 rounded-full ${
                      news.priority === 'high' ? 'bg-red-500' : 
                      news.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Eye className="w-4 h-4" />
                      <span>{news.views}</span>
                    </div>
                  </div>
                  
                  {/* Category */}
                  <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium mb-4">
                    {news.category}
                  </span>
                  
                  {/* Content */}
                  <h4 className="font-bold text-foreground mb-3 group-hover:text-bitcoin-600 transition-colors leading-tight">
                    {news.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {news.excerpt}
                  </p>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {news.time}
                    </span>
                    <Zap className="w-4 h-4 text-bitcoin-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-bitcoin-500/10 via-orange-500/10 to-red-500/10 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Stay Connected with BitcoinG1
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates, security alerts, and community news
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button className="bg-bitcoin-500 hover:bg-bitcoin-600 text-white flex-1">
              Subscribe to Updates
            </Button>
            <Button variant="outline" className="flex-1">
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

