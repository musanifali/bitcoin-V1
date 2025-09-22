import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Shield, Lock, Key, Eye, AlertTriangle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Secure Your Wallet - Bitcoin Holding',
  description: 'Learn how to secure your Bitcoin Holding wallet and protect your digital assets with best practices and security measures.',
}

export default function SecureYourWallet() {
  const securityTips = [
    {
      icon: Lock,
      title: 'Use Strong Passwords',
      description: 'Create a unique, complex password for your wallet that includes uppercase and lowercase letters, numbers, and symbols.',
    },
    {
      icon: Key,
      title: 'Backup Your Wallet',
      description: 'Always create secure backups of your wallet seed phrase and store them in multiple safe locations offline.',
    },
    {
      icon: Eye,
      title: 'Enable Two-Factor Authentication',
      description: 'Add an extra layer of security by enabling 2FA on all your cryptocurrency-related accounts.',
    },
    {
      icon: Shield,
      title: 'Use Hardware Wallets',
      description: 'For large amounts, consider using hardware wallets that keep your private keys offline and secure.',
    },
    {
      icon: AlertTriangle,
      title: 'Beware of Phishing',
      description: 'Always verify website URLs and never enter your wallet credentials on suspicious or unofficial sites.',
    },
    {
      icon: CheckCircle,
      title: 'Regular Updates',
      description: 'Keep your wallet software and security tools updated to the latest versions with security patches.',
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-bitcoin-500/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Secure Your 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                Bitcoin Holding Wallet
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Protect your digital assets with essential security practices and tips for keeping your Bitcoin Holding safe.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Security Alert */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-red-900 mb-2">Important Security Notice</h3>
                  <p className="text-red-800 leading-relaxed">
                    Your Bitcoin Holding security is entirely in your hands. Unlike traditional banking, 
                    there is no customer service to call if you lose access to your wallet. 
                    Take these security measures seriously to protect your assets.
                  </p>
                </div>
              </div>
            </div>

            {/* Security Tips Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {securityTips.map((tip, index) => (
                <div key={index} className="bg-card rounded-xl border p-6 hover:border-bitcoin-500/40 transition-colors">
                  <div className="w-12 h-12 bg-bitcoin-100 rounded-lg flex items-center justify-center mb-4">
                    <tip.icon className="w-6 h-6 text-bitcoin-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>

            {/* Best Practices Section */}
            <div className="bg-card rounded-xl border p-8">
              <h2 className="text-3xl font-bold mb-6">Security Best Practices</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-bitcoin-600">Wallet Backup</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Your wallet backup (seed phrase) is the most important part of wallet security. 
                    Write it down on paper and store it in multiple secure locations. Never store it digitally or take photos of it.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-bitcoin-600">Transaction Verification</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Always double-check recipient addresses before sending Bitcoin Holding. 
                    Transactions cannot be reversed, so accuracy is crucial.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-bitcoin-600">Software Security</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Keep your devices and wallet software updated. Use antivirus software and avoid 
                    accessing your wallet on public or shared computers.
                  </p>
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
