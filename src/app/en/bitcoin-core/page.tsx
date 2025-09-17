import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Download, Shield, Network, Code, CheckCircle, Monitor, HardDrive, Cpu } from 'lucide-react'

export default function BitcoinCore() {
  const features = [
    {
      icon: Shield,
      title: 'Full Node Security',
      description: 'Validate all transactions and blocks independently without trusting third parties'
    },
    {
      icon: Network,
      title: 'Network Support',
      description: 'Help strengthen the Bitcoin Holding network by running a full node'
    },
    {
      icon: Code,
      title: 'Complete Control',
      description: 'Have full control over your Bitcoin Holding transactions and privacy'
    }
  ]

  const systemRequirements = [
    {
      component: 'Operating System',
      minimum: 'Windows 10, macOS 10.14, Ubuntu 18.04',
      recommended: 'Latest stable versions'
    },
    {
      component: 'RAM',
      minimum: '2 GB',
      recommended: '4+ GB'
    },
    {
      component: 'Storage',
      minimum: '400 GB',
      recommended: '1+ TB SSD'
    },
    {
      component: 'Internet',
      minimum: 'Broadband connection',
      recommended: 'Unlimited data plan'
    }
  ]

  const downloadOptions = [
    {
      platform: 'Windows',
      versions: ['Windows 64-bit', 'Windows 32-bit'],
      size: '45 MB',
      icon: Monitor
    },
    {
      platform: 'macOS',
      versions: ['Intel', 'Apple Silicon (M1/M2)'],
      size: '42 MB',
      icon: Monitor
    },
    {
      platform: 'Linux',
      versions: ['x86_64', 'ARM64'],
      size: '38 MB',
      icon: HardDrive
    }
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
                Core
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The reference implementation of Bitcoin Holding. Coming soon - run a full node and help secure the network.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-400 cursor-not-allowed" disabled>
                Coming Soon
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Bitcoin Core?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-bitcoin-500 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Bitcoin Core - Coming Soon</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {downloadOptions.map((option, index) => (
                <div key={index} className="bg-card rounded-xl border p-8 text-center hover:border-bitcoin-500/40 transition-colors">
                  <option.icon className="h-12 w-12 mx-auto text-bitcoin-500 mb-4" />
                  <h3 className="text-xl font-bold mb-4">{option.platform}</h3>
                  
                  <div className="space-y-2 mb-6">
                    {option.versions.map((version, versionIndex) => (
                      <div key={versionIndex} className="text-sm text-muted-foreground">
                        {version}
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6">Size: {option.size}</p>
                  
                  <Button className="w-full bg-gray-400 cursor-not-allowed" disabled>
                    Coming Soon
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground mb-4">
                Bitcoin Core - Coming Soon • Expected Release: Q1 2026
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-bitcoin-500 hover:text-bitcoin-600 text-sm">
                  Release Notes
                </a>
                <a href="#" className="text-bitcoin-500 hover:text-bitcoin-600 text-sm">
                  Verify Download
                </a>
                <a href="#" className="text-bitcoin-500 hover:text-bitcoin-600 text-sm">
                  GPG Signatures
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">System Requirements</h2>
            
            <div className="bg-card rounded-xl border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Component</th>
                      <th className="text-left p-4 font-semibold">Minimum</th>
                      <th className="text-left p-4 font-semibold">Recommended</th>
                    </tr>
                  </thead>
                  <tbody>
                    {systemRequirements.map((req, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-4 font-medium">{req.component}</td>
                        <td className="p-4 text-muted-foreground">{req.minimum}</td>
                        <td className="p-4 text-green-600">{req.recommended}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
              <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Important Notes</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Initial blockchain download may take several hours to days</li>
                <li>• Bitcoin Core requires significant bandwidth and storage</li>
                <li>• Consider using an SSD for better performance</li>
                <li>• Backup your wallet.dat file regularly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Guide */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Getting Started</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-bitcoin-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                  <p className="text-muted-foreground">Bitcoin Core is currently in development. Stay tuned for the official release and installation instructions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-bitcoin-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Blockchain Synchronization</h3>
                  <p className="text-muted-foreground">Once released, Bitcoin Core will synchronize and verify the entire blockchain to ensure network security.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-bitcoin-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Configure Settings</h3>
                  <p className="text-muted-foreground">Adjust network settings, enable wallet functionality, and configure security options.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-bitcoin-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Start Using</h3>
                  <p className="text-muted-foreground">Create or import a wallet and start sending/receiving Bitcoin Holding transactions.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                View Complete Setup Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Need Help?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get support from the Bitcoin Core community
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline">
                Documentation
              </Button>
              
              <Button size="lg" variant="outline">
                Community Forum
              </Button>
              
              <Button size="lg" variant="outline">
                GitHub Issues
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}


