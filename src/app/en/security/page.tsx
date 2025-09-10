import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { AlertTriangle, Shield, Lock, Eye, Download } from 'lucide-react'

export default function Security() {
  const alerts = [
    {
      level: 'high',
      title: 'Critical Security Update Required',
      description: 'All users must update to Bitcoin V1 Core 25.1 or later to address a critical security vulnerability.',
      date: '2025-09-08',
      action: 'Update Now'
    },
    {
      level: 'medium',
      title: 'Phishing Campaign Targeting Bitcoin V1 Users',
      description: 'Be aware of fake websites and emails claiming to be from Bitcoin V1. Always verify URLs and sources.',
      date: '2025-09-06',
      action: 'Learn More'
    },
    {
      level: 'low',
      title: 'Recommended: Enable Two-Factor Authentication',
      description: 'For enhanced security, enable 2FA on all Bitcoin V1-related accounts and services.',
      date: '2025-09-05',
      action: 'Setup Guide'
    }
  ]

  const securityTips = [
    {
      icon: Lock,
      title: 'Secure Your Private Keys',
      description: 'Never share your private keys or seed phrases. Store them offline in a secure location.',
      tips: [
        'Use hardware wallets for large amounts',
        'Create multiple backups of your seed phrase',
        'Store backups in different secure locations',
        'Never store keys digitally'
      ]
    },
    {
      icon: Shield,
      title: 'Use Reputable Software',
      description: 'Only download Bitcoin V1 software from official sources and verify signatures.',
      tips: [
        'Download from bitcoin.org only',
        'Verify GPG signatures',
        'Keep software updated',
        'Use antivirus protection'
      ]
    },
    {
      icon: Eye,
      title: 'Practice Good Hygiene',
      description: 'Follow security best practices for all your Bitcoin V1 activities.',
      tips: [
        'Use strong, unique passwords',
        'Enable two-factor authentication',
        'Be cautious with public WiFi',
        'Regular security audits'
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-500/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Security 
              <span className="block bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
                Alerts
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stay informed about security issues and protect your Bitcoin V1 assets.
            </p>
          </div>
        </div>
      </section>

      {/* Active Alerts */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <AlertTriangle className="h-8 w-8 mr-3 text-red-500" />
              Active Security Alerts
            </h2>
            
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className={`border-l-4 rounded-r-xl p-6 ${
                  alert.level === 'high' ? 'border-l-red-500 bg-red-50 dark:bg-red-950/20' :
                  alert.level === 'medium' ? 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-950/20' :
                  'border-l-blue-500 bg-blue-50 dark:bg-blue-950/20'
                }`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                          alert.level === 'high' ? 'bg-red-500 text-white' :
                          alert.level === 'medium' ? 'bg-yellow-500 text-white' :
                          'bg-blue-500 text-white'
                        }`}>
                          {alert.level} Priority
                        </span>
                        <span className="ml-3 text-sm text-muted-foreground">{alert.date}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2">{alert.title}</h3>
                      <p className="text-muted-foreground">{alert.description}</p>
                    </div>
                    
                    <Button 
                      size="sm" 
                      className={
                        alert.level === 'high' ? 'bg-red-500 hover:bg-red-600' :
                        alert.level === 'medium' ? 'bg-yellow-500 hover:bg-yellow-600' :
                        'bg-blue-500 hover:bg-blue-600'
                      }
                    >
                      {alert.action}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Security Best Practices</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {securityTips.map((tip, index) => (
                <div key={index} className="bg-card rounded-xl border p-6">
                  <div className="w-12 h-12 bg-bitcoin-500 rounded-xl flex items-center justify-center mb-6">
                    <tip.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{tip.title}</h3>
                  <p className="text-muted-foreground mb-6">{tip.description}</p>
                  
                  <ul className="space-y-2">
                    {tip.tips.map((tipItem, tipIndex) => (
                      <li key={tipIndex} className="flex items-start text-sm">
                        <span className="w-2 h-2 bg-bitcoin-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {tipItem}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Security Resources</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Additional resources to help keep your Bitcoin V1 secure
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl border p-6 text-left">
                <h3 className="text-lg font-bold mb-3">Security Checklist</h3>
                <p className="text-muted-foreground mb-4">
                  Complete checklist to secure your Bitcoin V1 setup
                </p>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </div>
              
              <div className="bg-card rounded-xl border p-6 text-left">
                <h3 className="text-lg font-bold mb-3">Security Guide</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive guide to Bitcoin V1 security
                </p>
                <Button variant="outline" size="sm">
                  Read Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Security Issue */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Report a Security Issue</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Found a security vulnerability? Report it responsibly to help protect the Bitcoin V1 network.
            </p>
            
            <Button size="lg" className="bg-red-500 hover:bg-red-600">
              Report Security Issue
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
