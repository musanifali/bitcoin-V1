import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download, Globe, BookOpen, ExternalLink } from 'lucide-react'

export default function BitcoinWhitepaper() {
  const translations = [
    { language: 'English', code: 'en', note: 'Original', author: '', sponsor: '' },
    { language: 'Հայերեն', code: 'hy', note: '', author: 'Diana Sisakian', sponsor: 'ClearTalks' },
    { language: 'Bahasa Indonesia', code: 'id', note: '', author: 'Christopher Tahir, Gregorius Airlangga, K Hendrawan', sponsor: '' },
    { language: 'Czech', code: 'cs', note: '', author: 'braiins.com', sponsor: '' },
    { language: 'Deutsch', code: 'de', note: '', author: 'Daniel Deckner', sponsor: '' },
    { language: 'Español', code: 'es', note: '', author: 'Breathingdog', sponsor: '' },
    { language: 'Français', code: 'fr', note: '', author: 'Arnaud-François Fausse', sponsor: '' },
    { language: 'Italiano', code: 'it', note: '', author: 'Terzim', sponsor: '' },
    { language: 'Lietuvių Kalba', code: 'lt', note: '', author: 'Domas Dranginis', sponsor: '' },
    { language: 'Magyar Nyelv', code: 'hu', note: '', author: 'Balaxi', sponsor: '' },
    { language: 'मराठी', code: 'mr', note: '', author: 'Shivaji Ambedkar', sponsor: '' },
    { language: 'Nederlands', code: 'nl', note: '', author: 'GiftBitNL', sponsor: '' },
    { language: 'Norsk (Bokmål)', code: 'no', note: '', author: 'Kryptografen.no', sponsor: '' },
    { language: 'Íslenska', code: 'is', note: '', author: 'PEGA Pool', sponsor: '' },
    { language: 'Polski', code: 'pl', note: '', author: 'meeDamian', sponsor: '' },
    { language: 'Português', code: 'pt', note: '', author: 'rhlinden', sponsor: '' },
    { language: 'Português Brasileiro', code: 'pt-br', note: '', author: 'Rodrigo Silva Pinto', sponsor: '' },
    { language: 'Română', code: 'ro', note: '', author: 'Gazeta Bitcoin', sponsor: '' },
    { language: 'Slovenčina', code: 'sk', note: '', author: 'Ondrej Sarnecký', sponsor: '' },
    { language: 'Slovenščina', code: 'sl', note: '', author: 'Bitcoin Association Slovenia', sponsor: '' },
    { language: 'српски', code: 'sr', note: '', author: 'Božo Popović', sponsor: '' },
    { language: 'Suomen kieli', code: 'fi', note: '', author: 'Biocycle, LohkoKettu, Aleksi Suomalainen, Antti Majakivi, Niko Laamanen', sponsor: '' },
    { language: 'Svenska', code: 'sv', note: '', author: 'hanspandeya', sponsor: '' },
    { language: 'Türkçe', code: 'tr', note: '', author: 'Efe Cini', sponsor: '' },
    { language: 'ελληνικά', code: 'el', note: '', author: 'chdimosthenis', sponsor: '' },
    { language: 'मानक हिन्दी', code: 'hi', note: '', author: 'Praneet Jain', sponsor: '' },
    { language: 'తెలుగు', code: 'te', note: '', author: 'Charaen', sponsor: '' },
    { language: 'اُردُو', code: 'ur', note: '', author: 'Muhammad Safdar Jamal', sponsor: '' },
    { language: 'தமிழ்', code: 'ta', note: '', author: 'Raja Sahaya Jose', sponsor: '' },
    { language: 'മലയാളം', code: 'ml', note: '', author: 'Hyder Ali Abdulla', sponsor: '' },
    { language: 'עברית', code: 'he', note: '', author: 'Meni Rosenfeld', sponsor: '' },
    { language: 'Русский', code: 'ru', note: '', author: 'Ar Vicco, Ivan Nikolaev', sponsor: '' },
    { language: 'Tiếng Việt', code: 'vi', note: '', author: 'Pham Cong Dinh', sponsor: '' },
    { language: 'Yкраїнська', code: 'uk', note: '', author: 'WTFBit', sponsor: '' },
    { language: 'العربية', code: 'ar', note: '', author: 'Ahmed Alsayadi', sponsor: '' },
    { language: 'پارسی', code: 'fa', note: '', author: 'ZeeAmini', sponsor: '' },
    { language: '한국어', code: 'ko', note: '', author: 'Mincheol Im', sponsor: '' },
    { language: '日本語', code: 'ja', note: '', author: 'hakka', sponsor: '' },
    { language: 'ภาษาไทย', code: 'th', note: '', author: 'Peeraphat Hankongkaew', sponsor: '' },
    { language: '简化字', code: 'zh-cn', note: '', author: 'shdxiang, Bill Zhao', sponsor: '' },
    { language: 'বাংলা', code: 'bn', note: '', author: 'Shafiun Miraz, Tonmoy Sarkar', sponsor: '' },
    { language: 'Estonian', code: 'et', note: '', author: 'ekukxs', sponsor: '' },
    { language: 'Albanian', code: 'sq', note: '', author: 'Tony Xhufi', sponsor: '' },
    { language: 'አማርኛ', code: 'am', note: '', author: 'Ξ c r y p t o', sponsor: '' },
    { language: 'Croatian', code: 'hr', note: '', author: 'LuxBTC', sponsor: '' },
    { language: 'Braille', code: 'braille', note: '', author: '@NeatNik', sponsor: '' },
    { language: 'Nepali', code: 'ne', note: '', author: 'Krishna Dahal, Bibek Koirala', sponsor: '' },
    { language: 'Basque', code: 'eu', note: '', author: '@Blooma_Lorea', sponsor: '' },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-bitcoin-500/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto bg-bitcoin-500 rounded-full flex items-center justify-center mb-8">
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Bitcoin: A Peer-to-Peer 
              <span className="block bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 bg-clip-text text-transparent">
                Electronic Cash System
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The paper that first introduced Bitcoin
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600" asChild>
                <a href="/bitcoin-whitepaper.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/bitcoin/bitcoin/tree/master/doc" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-5 w-5" />
                  GitHub Repository
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">About the Whitepaper</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Satoshi Nakamoto's original paper is still recommended reading for anyone studying how Bitcoin works. 
              Choose which translation of the paper you want to read:
            </p>
          </div>
        </div>
      </section>

      {/* Translations Grid */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Available Translations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {translations.map((translation, index) => (
                <div key={`${translation.code}-${index}`} className="bg-card rounded-xl border p-6 hover:border-bitcoin-500/40 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        {translation.language}
                        {translation.note && (
                          <span className="px-2 py-1 bg-bitcoin-500/10 text-bitcoin-600 text-xs rounded-full">
                            {translation.note}
                          </span>
                        )}
                      </h3>
                      
                      {translation.author && (
                        <p className="text-sm text-muted-foreground mb-1">
                          <span className="font-medium">Translated by:</span> {translation.author}
                        </p>
                      )}
                      
                      {translation.sponsor && (
                        <p className="text-sm text-muted-foreground mb-4">
                          <span className="font-medium">Sponsored by:</span> {translation.sponsor}
                        </p>
                      )}
                    </div>
                    
                    <Button variant="outline" size="sm" asChild>
                      <a href={`/bitcoin-whitepaper-${translation.code}.pdf`} target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Want to Contribute?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Do you want to translate the paper into your language? Visit the Bitcoin white paper repository on GitHub for instructions and open an issue if you have any questions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600" asChild>
                <a href="https://github.com/bitcoin/bitcoin" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-5 w-5" />
                  Visit GitHub Repository
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <a href="/en/development">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Development Resources
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Context */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Historical Context</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-bitcoin-500 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Published 2008</h3>
                <p className="text-muted-foreground text-sm">Released on October 31, 2008 by Satoshi Nakamoto</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Global Impact</h3>
                <p className="text-muted-foreground text-sm">Translated into 45+ languages by volunteers worldwide</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <Download className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Open Source</h3>
                <p className="text-muted-foreground text-sm">Freely available and continuously maintained by the community</p>
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
              Understanding the Bitcoin whitepaper is the first step to mastering cryptocurrency
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-bitcoin-500 hover:bg-bitcoin-600" asChild>
                <a href="/en/how-it-works">
                  How Bitcoin Works
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <a href="/en/getting-started">
                  Get Started with Bitcoin
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
