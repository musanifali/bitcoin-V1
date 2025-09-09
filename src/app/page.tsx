import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import QuickActions from '@/components/sections/QuickActions'
import UseCases from '@/components/sections/UseCases'
import Activity from '@/components/sections/Activity'
import Learn from '@/components/sections/Learn'
import Values from '@/components/sections/Values'
import Builders from '@/components/sections/Builders'
import Community from '@/components/sections/Community'
import EcosystemBlog from '@/components/sections/EcosystemBlog'
import Events from '@/components/sections/Events'
import JoinBitcoin from '@/components/sections/JoinBitcoin'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <QuickActions />
      <UseCases />
      <Activity />
      <Learn />
      <Values />
      <Builders />
      <Community />
      <EcosystemBlog />th
      <Events />
      <JoinBitcoin />
      <Footer />
    </main>
  )
}
