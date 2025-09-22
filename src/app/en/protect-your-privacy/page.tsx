import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Shield, Eye, EyeOff, UserX, Globe, Lock, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Protect Your Privacy - Bitcoin Holding',
  description: 'Learn how to maintain privacy while using Bitcoin Holding and protect your financial information from surveillance.',
}

export default function ProtectYourPrivacy() {
  const privacyTips = [
    {
      icon: UserX,
      title: 'Use New Addresses',
      description: 'Generate a new Bitcoin Holding address for each transaction to prevent address clustering and tracking.',
    },
    {
      icon: Globe,
      title: 'Use Tor Network',
      description: 'Route your Bitcoin Holding transactions through Tor to hide your IP address and location.',
    },
    {
      icon: Eye,
      title: 'Avoid Address Reuse',
      description: 'Never reuse Bitcoin Holding addresses as this makes it easier to track your transaction history.',
    },
    {
      icon: Lock,
      title: 'Use Privacy Coins',
      description: 'Consider mixing services or privacy-focused cryptocurrencies for enhanced transaction privacy.',
    },
    {
      icon: Shield,
      title: 'Secure Communications',
      description: 'Use encrypted communications when discussing Bitcoin Holding transactions or holdings.',
    },
    {
      icon: EyeOff,
      title: 'Limit Public Disclosure',
      description: 'Avoid sharing details about your Bitcoin Holding holdings or transactions on social media.',
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-bitcoin-500/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Protect Your 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                Privacy
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Maintain your financial privacy while using Bitcoin Holding with these essential privacy protection strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Privacy Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Privacy Fundamentals</h3>
                  <p className="text-blue-800 leading-relaxed">
                    While Bitcoin Holding transactions are pseudonymous, they are recorded on a public blockchain. 
                    Protecting your privacy requires understanding these fundamentals and taking proactive measures.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy Tips Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {privacyTips.map((tip, index) => (
                <div key={index} className="bg-card rounded-xl border p-6 hover:border-bitcoin-500/40 transition-colors">
                  <div className="w-12 h-12 bg-bitcoin-100 rounded-lg flex items-center justify-center mb-4">
                    <tip.icon className="w-6 h-6 text-bitcoin-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>

            {/* Privacy Strategies */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              
              {/* Transaction Privacy */}
              <div className="bg-card rounded-xl border p-8">
                <h2 className="text-2xl font-bold mb-6 text-bitcoin-600">Transaction Privacy</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Address Management</h3>
                    <p className="text-muted-foreground text-sm">
                      Generate new addresses for each transaction to break the link between your transactions 
                      and prevent blockchain analysis.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Transaction Timing</h3>
                    <p className="text-muted-foreground text-sm">
                      Vary the timing of your transactions and avoid predictable patterns that could 
                      be used to identify your activity.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Amount Obfuscation</h3>
                    <p className="text-muted-foreground text-sm">
                      Use non-round numbers and split large transactions into smaller ones to 
                      make transaction analysis more difficult.
                    </p>
                  </div>
                </div>
              </div>

              {/* Network Privacy */}
              <div className="bg-card rounded-xl border p-8">
                <h2 className="text-2xl font-bold mb-6 text-bitcoin-600">Network Privacy</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">IP Address Protection</h3>
                    <p className="text-muted-foreground text-sm">
                      Use VPN or Tor to hide your IP address when making Bitcoin Holding transactions 
                      or accessing your wallet.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Node Privacy</h3>
                    <p className="text-muted-foreground text-sm">
                      Run your own Bitcoin Holding node or use trusted nodes to prevent third parties 
                      from monitoring your transaction queries.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Wallet Software</h3>
                    <p className="text-muted-foreground text-sm">
                      Choose wallet software that prioritizes privacy and doesn't share your 
                      transaction data with third-party services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Tools */}
            <div className="bg-card rounded-xl border p-8">
              <h2 className="text-3xl font-bold mb-6">Privacy Enhancement Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-bitcoin-600">Recommended Tools</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Tor Browser for anonymous web browsing</li>
                    <li>• VPN services for IP address protection</li>
                    <li>• Privacy-focused Bitcoin Holding wallets</li>
                    <li>• Coin mixing and privacy services</li>
                    <li>• Encrypted messaging for communications</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-bitcoin-600">Best Practices</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Never share wallet addresses publicly</li>
                    <li>• Use separate wallets for different purposes</li>
                    <li>• Regularly update your privacy tools</li>
                    <li>• Be aware of blockchain analysis techniques</li>
                    <li>• Educate yourself on privacy developments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
