import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Download, Monitor, Smartphone, HardDrive } from 'lucide-react'

export default function DownloadPage() {
  const downloads = [
    {
      name: 'BitcoinG1 Core',
      description: 'Full node client for maximum security and privacy',
      platforms: ['Windows', 'macOS', 'Linux'],
      icon: Monitor,
      featured: true
    },
    {
      name: 'Mobile Wallet',
      description: 'Lightweight wallet for everyday transactions',
      platforms: ['iOS', 'Android'],
      icon: Smartphone,
      featured: false
    },
    {
      name: 'Hardware Wallet Support',
      description: 'Compatible hardware wallet software',
      platforms: ['Windows', 'macOS', 'Linux'],
      icon: HardDrive,
      featured: false
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
              Download 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                BitcoinG1
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Get the official BitcoinG1 software for your device.
            </p>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {downloads.map((item, index) => (
                <div key={index} className={`bg-card rounded-xl border p-8 text-center ${
                  item.featured ? 'border-bitcoin-500 shadow-lg' : 'hover:border-bitcoin-500/40'
                } transition-colors`}>
                  {item.featured && (
                    <div className="bg-bitcoin-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                      RECOMMENDED
                    </div>
                  )}
                  
                  <item.icon className="h-12 w-12 mx-auto text-bitcoin-500 mb-4" />
                  <h3 className="text-xl font-bold mb-4">{item.name}</h3>
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {item.platforms.map((platform, platformIndex) => (
                      <div key={platformIndex} className="text-sm text-muted-foreground">
                        {platform}
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`w-full ${
                    item.featured ? 'bg-bitcoin-500 hover:bg-bitcoin-600' : ''
                  }`}>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
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

