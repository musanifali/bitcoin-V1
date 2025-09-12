import LaunchingSoon from '@/components/sections/LaunchingSoon'

export const metadata = {
  title: 'BTC Quantum - Launching Soon | Bitcoin Holding',
  description: 'BTC Quantum is coming soon. Quantum-resistant Bitcoin with post-quantum cryptography and unbreakable security.',
}

export default function BTCQuantumPage() {
  return (
    <LaunchingSoon
      title="BTC Quantum"
      description="The future-proof Bitcoin. BTC Quantum implements post-quantum cryptography to ensure your assets remain secure even against quantum computer attacks."
    />
  )
}
