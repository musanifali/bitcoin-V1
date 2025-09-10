import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import QuickStart from '@/components/sections/QuickStart'
import Education from '@/components/sections/Education'
import Resources from '@/components/sections/Resources'
import Participate from '@/components/sections/Participate'
import JoinBitcoin from '@/components/sections/JoinBitcoin'
import NewsAlerts from '@/components/sections/NewsAlerts'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <QuickStart />
      <Education />
      <Resources />
      <Participate />
      <JoinBitcoin />
      <NewsAlerts />
      <Footer />
    </main>
  )
}
