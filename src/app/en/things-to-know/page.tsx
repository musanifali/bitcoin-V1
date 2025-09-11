import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Shield, TrendingUp, ArrowLeftRight, Eye, Clock, FlaskConical, Scale, AlertTriangle, CheckCircle } from 'lucide-react'

export default function ThingsToKnow() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-bitcoin-500/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Some things you 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                need to know
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              If you're getting started with Bitcoin, there are a few things you should know. Bitcoin lets you exchange money and transact in a different way than you normally do. As such, you should take time to inform yourself before using Bitcoin for any serious transaction. Bitcoin should be treated with the same care as your regular wallet, or even more in some cases!
            </p>
          </div>
        </div>
      </section>

      {/* Important Information Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Securing your wallet */}
              <div className="bg-card rounded-xl border p-8 hover:border-bitcoin-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Securing your wallet</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Like in real life, your wallet must be secured. Bitcoin makes it possible to transfer value anywhere in a very easy way and it allows you to be in control of your money. Such great features also come with great security concerns. At the same time, Bitcoin can provide very high levels of security if used correctly. Always remember that it is your responsibility to adopt good practices in order to protect your money.
                    </p>
                    <Button variant="outline" size="sm">
                      Read more about securing your wallet
                    </Button>
                  </div>
                </div>
              </div>

              {/* Bitcoin price is volatile */}
              <div className="bg-card rounded-xl border p-8 hover:border-bitcoin-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Bitcoin price is volatile</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The price of a bitcoin can unpredictably increase or decrease over a short period of time due to its young economy, novel nature, and sometimes illiquid markets. Consequently, keeping your savings with Bitcoin is not recommended at this point. Bitcoin should be seen like a high risk asset, and you should never store money that you cannot afford to lose with Bitcoin. If you receive payments with Bitcoin, many service providers can convert them to your local currency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bitcoin payments are irreversible */}
              <div className="bg-card rounded-xl border p-8 hover:border-bitcoin-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ArrowLeftRight className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Bitcoin payments are irreversible</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A Bitcoin transaction cannot be reversed, it can only be refunded by the person receiving the funds. This means you should take care to do business with people and organizations you know and trust, or who have an established reputation. For their part, businesses need to keep track of the payment requests they are displaying to their customers. Bitcoin can detect typos and usually won't let you send money to an invalid address by mistake, but it's best to have controls in place for additional safety and redundancy. Additional services might exist in the future to provide more choice and protection for both businesses and consumers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bitcoin is not anonymous */}
              <div className="bg-card rounded-xl border p-8 hover:border-bitcoin-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Bitcoin is not anonymous</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Some effort is required to protect your privacy with Bitcoin. All Bitcoin transactions are stored publicly and permanently on the network, which means anyone can see the balance and transactions of any Bitcoin address. However, the identity of the user behind an address remains unknown until information is revealed during a purchase or in other circumstances. This is one reason why Bitcoin addresses should only be used once. Always remember that it is your responsibility to adopt good practices in order to protect your privacy.
                    </p>
                    <Button variant="outline" size="sm">
                      Read more about protecting your privacy
                    </Button>
                  </div>
                </div>
              </div>

              {/* Bitcoin is still experimental */}
              <div className="bg-card rounded-xl border p-8 hover:border-bitcoin-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FlaskConical className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Bitcoin is still experimental</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Bitcoin is an experimental new currency that is in active development. Each improvement makes Bitcoin more appealing but also reveals new challenges as Bitcoin adoption grows. During these growing pains you might encounter increased fees, slower confirmations, or even more severe issues. Be prepared for problems and consult a technical expert before making any major investments, but keep in mind that nobody can predict Bitcoin's future.
                    </p>
                  </div>
                </div>
              </div>

              {/* Government taxes and regulations */}
              <div className="bg-card rounded-xl border p-8 hover:border-bitcoin-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Scale className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Government taxes and regulations</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Bitcoin is not an official currency. That said, most jurisdictions still require you to pay income, sales, payroll, and capital gains taxes on anything that has value, including bitcoins. It is your responsibility to ensure that you adhere to tax and other legal or regulatory mandates issued by your government and/or local municipalities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transaction Confirmations Table */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Transaction Confirmations</h2>
            
            <div className="bg-card rounded-xl border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Confirmations</th>
                      <th className="px-6 py-4 text-left font-semibold">Lightweight wallets</th>
                      <th className="px-6 py-4 text-left font-semibold">Bitcoin Core</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-6 py-4 font-mono">0</td>
                      <td className="px-6 py-4 text-red-600">Only safe if you trust the person paying you</td>
                      <td className="px-6 py-4 text-red-600">Only safe if you trust the person paying you</td>
                    </tr>
                    <tr className="border-t bg-muted/25">
                      <td className="px-6 py-4 font-mono">1</td>
                      <td className="px-6 py-4 text-orange-600">Somewhat reliable</td>
                      <td className="px-6 py-4 text-yellow-600">Mostly reliable</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-6 py-4 font-mono">3</td>
                      <td className="px-6 py-4 text-yellow-600">Mostly reliable</td>
                      <td className="px-6 py-4 text-green-600">Highly reliable</td>
                    </tr>
                    <tr className="border-t bg-muted/25">
                      <td className="px-6 py-4 font-mono">6</td>
                      <td className="px-6 py-4 text-green-600" colSpan={2}>Minimum recommendation for high-value bitcoin transfers</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-6 py-4 font-mono">30</td>
                      <td className="px-6 py-4 text-blue-600" colSpan={2}>Recommendation during emergencies to allow human intervention</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Unconfirmed transactions aren't secure</h3>
                  <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
                    Transactions don't start out as irreversible. Instead, they get a confirmation score that indicates how hard it is to reverse them (see table). Each confirmation takes between a few seconds and 90 minutes, with 10 minutes being the average. If the transaction pays too low a fee or is otherwise atypical, getting the first confirmation can take much longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to learn more?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Understanding these fundamentals is crucial for safe Bitcoin usage
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600" asChild>
                <a href="/en/getting-started">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Get Started Safely
                </a>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <a href="/en/security">
                  <Shield className="mr-2 h-5 w-5" />
                  Learn About Security
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
