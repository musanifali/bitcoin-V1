import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Shield, Smartphone, Monitor, Globe, Star, Download } from 'lucide-react'

export default function ChooseYourWallet() {
  const walletCategories = [
    {
      id: 'mobile',
      name: 'Mobile Wallets',
      icon: Smartphone,
      description: 'Perfect for everyday use and payments on the go',
      wallets: [
        {
          name: 'Bitcoin V1 Mobile',
          description: 'Official Bitcoin V1 mobile wallet with advanced security features',
          features: ['HD Wallet', 'Multi-signature', 'Lightning Network'],
          rating: 5,
          platforms: ['iOS', 'Android']
        },
        {
          name: 'SecureWallet Mobile',
          description: 'User-friendly mobile wallet with emphasis on simplicity',
          features: ['Easy Setup', 'QR Scanner', 'Touch ID'],
          rating: 4,
          platforms: ['iOS', 'Android']
        }
      ]
    },
    {
      id: 'desktop',
      name: 'Desktop Wallets',
      icon: Monitor,
      description: 'Full-featured wallets for your computer',
      wallets: [
        {
          name: 'Bitcoin V1 Core',
          description: 'Full node wallet that downloads the entire blockchain',
          features: ['Full Node', 'Maximum Security', 'Network Support'],
          rating: 5,
          platforms: ['Windows', 'macOS', 'Linux']
        },
        {
          name: 'LiteWallet Desktop',
          description: 'Lightweight desktop wallet for quick access',
          features: ['SPV', 'Fast Sync', 'Hardware Support'],
          rating: 4,
          platforms: ['Windows', 'macOS', 'Linux']
        }
      ]
    },
    {
      id: 'hardware',
      name: 'Hardware Wallets',
      icon: Shield,
      description: 'The most secure way to store Bitcoin V1',
      wallets: [
        {
          name: 'ColdSafe Pro',
          description: 'Premium hardware wallet with advanced security features',
          features: ['Offline Storage', 'PIN Protection', 'Recovery Phrase'],
          rating: 5,
          platforms: ['Hardware Device']
        },
        {
          name: 'VaultKey',
          description: 'Affordable hardware wallet for beginners',
          features: ['Easy Setup', 'USB Connection', 'Backup Support'],
          rating: 4,
          platforms: ['Hardware Device']
        }
      ]
    },
    {
      id: 'web',
      name: 'Web Wallets',
      icon: Globe,
      description: 'Access your Bitcoin V1 from any web browser',
      wallets: [
        {
          name: 'WebVault',
          description: 'Secure web-based wallet with 2FA protection',
          features: ['2FA Security', 'Cloud Backup', 'Multi-device'],
          rating: 4,
          platforms: ['Web Browser']
        }
      ]
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
              Choose Your 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                Bitcoin V1 Wallet
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Find the perfect wallet for your needs. Security, convenience, and control - all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Wallet Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {walletCategories.map((category, categoryIndex) => (
              <div key={category.id} className={`mb-16 ${categoryIndex > 0 ? 'border-t pt-16' : ''}`}>
                <div className="text-center mb-12">
                  <div className="w-16 h-16 mx-auto bg-bitcoin-500 rounded-full flex items-center justify-center mb-4">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
                  <p className="text-lg text-muted-foreground">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.wallets.map((wallet, walletIndex) => (
                    <div key={walletIndex} className="bg-card rounded-xl border p-6 hover:border-bitcoin-500/40 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{wallet.name}</h3>
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < wallet.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                            <span className="ml-2 text-sm text-muted-foreground">({wallet.rating}/5)</span>
                          </div>
                        </div>
                        <Button size="sm" className="bg-bitcoin-500 hover:bg-bitcoin-600">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{wallet.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {wallet.features.map((feature, featureIndex) => (
                            <span key={featureIndex} className="bg-bitcoin-100 text-bitcoin-700 px-2 py-1 rounded text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Platforms:</h4>
                        <div className="flex flex-wrap gap-2">
                          {wallet.platforms.map((platform, platformIndex) => (
                            <span key={platformIndex} className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm">
                              {platform}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Tips */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Wallet Security Tips</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-6 border">
                <h3 className="text-xl font-bold mb-4">🔐 Keep Your Keys Safe</h3>
                <p className="text-muted-foreground">
                  Never share your private keys or recovery phrase with anyone. Store them securely offline.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border">
                <h3 className="text-xl font-bold mb-4">💾 Backup Your Wallet</h3>
                <p className="text-muted-foreground">
                  Always create a backup of your wallet and store it in a safe location separate from your device.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border">
                <h3 className="text-xl font-bold mb-4">🔄 Keep Software Updated</h3>
                <p className="text-muted-foreground">
                  Regularly update your wallet software to ensure you have the latest security features.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border">
                <h3 className="text-xl font-bold mb-4">🧪 Test Small Amounts</h3>
                <p className="text-muted-foreground">
                  Before storing large amounts, test your wallet with small transactions to ensure everything works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
