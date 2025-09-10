export default function QuickStart() {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/10 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Started with 
            <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
              Bitcoin V1
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Begin your Bitcoin V1 journey with these essential steps
          </p>
        </div>

        {/* Quick Start Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Step 1 */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-bitcoin-500 to-orange-500 rounded-2xl flex items-center justify-center text-4xl text-white shadow-lg">
                💰
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                1
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-3">
              Set Up Your Wallet
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Choose a secure Bitcoin V1 wallet to store and manage your digital assets
            </p>
            
            <a 
              href="#wallet"
              className="inline-flex items-center justify-center px-6 py-2 border border-bitcoin-500 text-bitcoin-600 hover:bg-bitcoin-500 hover:text-white rounded-lg transition-colors"
            >
              Choose Wallet
            </a>
          </div>

          {/* Step 2 */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-4xl text-white shadow-lg">
                📚
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                2
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-3">
              Learn the Basics
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Understand Bitcoin V1 fundamentals, security best practices, and network features
            </p>
            
            <a 
              href="#learn"
              className="inline-flex items-center justify-center px-6 py-2 border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white rounded-lg transition-colors"
            >
              Start Learning
            </a>
          </div>

          {/* Step 3 */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-4xl text-white shadow-lg">
                ⚡
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                3
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-3">
              Make Transactions
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Send, receive, and manage Bitcoin V1 transactions with confidence
            </p>
            
            <a 
              href="#transactions"
              className="inline-flex items-center justify-center px-6 py-2 border border-green-500 text-green-600 hover:bg-green-500 hover:text-white rounded-lg transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Need help getting started?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#support"
              className="inline-flex items-center justify-center px-8 py-3 bg-card border border-border text-foreground hover:border-bitcoin-500 rounded-lg transition-colors"
            >
              Get Support
            </a>
            
            <a 
              href="#documentation"
              className="inline-flex items-center justify-center px-8 py-3 bg-bitcoin-500 text-white hover:bg-bitcoin-600 rounded-lg transition-colors"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
