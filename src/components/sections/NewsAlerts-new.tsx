"use client"

import { Button } from "@/components/ui/button"
import { 
  AlertCircle, 
  ArrowRight, 
  Clock, 
  Newspaper, 
  TrendingUp 
} from "lucide-react"

export default function NewsAlerts() {
  const featuredNews = {
    title: "Bitcoin Holding Network Upgrade: Enhanced Security and Performance",
    excerpt: "The latest Bitcoin Holding protocol update introduces advanced security features and significant performance improvements.",
    date: "3 hours ago",
    category: "Protocol Update",
    readTime: "5 min read"
  }

  const quickNews = [
    {
      title: "Lightning Network Integration Complete",
      category: "Technology",
      time: "1 hour ago",
      urgency: "high"
    },
    {
      title: "New Mining Pool Joins Network",
      category: "Mining",
      time: "2 hours ago", 
      urgency: "medium"
    },
    {
      title: "Developer Documentation Updated",
      category: "Development",
      time: "4 hours ago",
      urgency: "low"
    }
  ]

  const alerts = [
    {
      title: "Wallet Security Update Required",
      excerpt: "Update to the latest wallet version to ensure optimal security",
      date: "1 day ago",
      severity: "high"
    },
    {
      title: "Network Maintenance Scheduled",
      excerpt: "Planned maintenance window this weekend for infrastructure upgrades",
      date: "2 days ago", 
      severity: "medium"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bitcoin Holding News & 
            <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
              Security Alerts
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest developments and security information from the Bitcoin Holding ecosystem
          </p>
        </div>

        {/* Main Content Grid - Simplified and Aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Featured News - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl border border-border p-8 h-full">
              <div className="flex items-center mb-4">
                <Newspaper className="h-6 w-6 text-bitcoin-500 mr-3" />
                <span className="text-sm font-semibold text-bitcoin-500 uppercase tracking-wide">Featured News</span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                {featuredNews.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {featuredNews.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredNews.date}
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    {featuredNews.category}
                  </span>
                </div>
                
                <Button variant="outline" size="sm" asChild>
                  <a href="/en/news">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Security Alerts Sidebar */}
          <div className="space-y-6">
            
            {/* Security Alerts */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-red-500 mr-3" />
                <span className="text-sm font-semibold text-red-500 uppercase tracking-wide">Security Alerts</span>
              </div>
              
              <div className="space-y-4">
                {alerts.map((alert, index) => (
                  <div key={index} className="border-l-4 border-l-red-500 pl-4 py-2">
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {alert.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {alert.excerpt}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {alert.date}
                    </span>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" size="sm" className="w-full mt-4" asChild>
                <a href="/en/security">
                  View All Alerts
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-bitcoin-500 to-orange-500 rounded-2xl p-6 text-white">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 mr-3" />
                <span className="font-semibold">Network Stats</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/80 text-sm">Hash Rate</span>
                  <span className="font-bold">450 EH/s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80 text-sm">Active Nodes</span>
                  <span className="font-bold">16,234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80 text-sm">Market Cap</span>
                  <span className="font-bold">$1.2T</span>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full mt-4 bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <a href="/en/stats">
                  View Details
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Quick News Updates */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Latest Updates</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickNews.map((news, index) => (
              <div key={index} className="bg-card rounded-xl border border-border p-6 hover:border-bitcoin-500/40 transition-colors">
                <div className="flex items-center mb-3">
                  <div className={`w-3 h-3 rounded-full mr-3 ${
                    news.urgency === 'high' ? 'bg-red-500' : 
                    news.urgency === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}></div>
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                    {news.category}
                  </span>
                </div>
                
                <h4 className="font-semibold text-foreground mb-2 leading-tight">
                  {news.title}
                </h4>
                
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  {news.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


