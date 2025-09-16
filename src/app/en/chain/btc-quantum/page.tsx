'use client'

import ChainLanding from '@/components/pages/ChainLanding'
import { Atom, Shield, Lock, Zap, TrendingUp, Building, Globe, Users, Cpu, KeyRound } from 'lucide-react'

export default function BTCQuantumPage() {
  const chainData = {
    name: 'BTC Quantum',
    tagline: 'Quantum-Safe',
    description: 'Quantum-resistant Bitcoin for ultimate future-proof security against next-gen threats.',
    fullDescription: 'BTC Quantum implements cutting-edge post-quantum cryptography to ensure your Bitcoin remains secure against future quantum computer attacks, providing unbreakable security for decades to come.',
    logo: '₿Q',
    color: 'from-orange-500 to-red-500',
    gradient: 'from-orange-500 to-red-500',
    features: [
      {
        icon: Atom,
        title: 'Quantum Resistance',
        description: 'Advanced post-quantum cryptographic algorithms protect against both classical and quantum computer attacks.'
      },
      {
        icon: KeyRound,
        title: 'Post-Quantum Crypto',
        description: 'Implementation of NIST-approved post-quantum cryptographic standards for maximum future security.'
      },
      {
        icon: Shield,
        title: 'Future-Proof Security',
        description: 'Designed to remain secure for 50+ years, even against the most advanced quantum computers.'
      }
    ],
    stats: [
      {
        label: 'Security Rating',
        value: 'AAA+',
        change: 'NIST Approved'
      },
      {
        label: 'Quantum Attacks',
        value: '0',
        change: 'Blocked'
      },
      {
        label: 'Security Audits',
        value: '12',
        change: 'Passed'
      },
      {
        label: 'Future Protection',
        value: '50+ Years'
      }
    ],
    useCases: [
      {
        title: 'Long-term Hodling',
        description: 'Store Bitcoin for decades with confidence, protected against future quantum threats.',
        icon: Lock
      },
      {
        title: 'Enterprise Security',
        description: 'Corporate treasury protection with military-grade quantum-resistant security.',
        icon: Building
      },
      {
        title: 'Government Solutions',
        description: 'NIST-compliant blockchain solutions for government and defense applications.',
        icon: Shield
      },
      {
        title: 'Critical Infrastructure',
        description: 'Secure blockchain solutions for critical infrastructure requiring maximum security.',
        icon: Cpu
      }
    ],
    technology: {
      title: 'Post-Quantum Architecture',
      description: 'Secure-by-design with lattice-based cryptography and upgraded signature schemes.',
      specs: [
        { label: 'Signature Scheme', value: 'Dilithium' },
        { label: 'Key Exchange', value: 'Kyber' },
        { label: 'Block Time', value: '3s' },
        { label: 'Audits', value: '12/12 Passed' }
      ]
    },
    roadmap: [
      { quarter: 'Q1 2024', title: 'Crypto Primitives', status: 'completed' as const, items: ['Dilithium Integration', 'Kyber KEM', 'Key Rotation Flows'] },
      { quarter: 'Q2 2024', title: 'Network Hardening', status: 'completed' as const, items: ['Audit Wave 1', 'Hardware Wallet Support', 'Cold Storage Playbooks'] },
      { quarter: 'Q3 2024', title: 'Ecosystem Integrations', status: 'in-progress' as const, items: ['Custody Partners', 'Enterprise SDK', 'SIEM Connectors'] },
      { quarter: 'Q4 2024', title: 'Global Standards', status: 'planned' as const, items: ['NIST Alignment', 'ISO/IEC Framework', 'FIPS Process'] }
    ],
    team: {
      title: 'Security Researchers',
      description: 'Applied cryptographers and blockchain security engineers focused on PQC.',
      members: [
        { name: 'Dr. Lin Wei', role: 'Lead Cryptographer', avatar: 'LW' },
        { name: 'Patrick O’Neill', role: 'Security Engineering', avatar: 'PO' },
        { name: 'Amira Sol', role: 'Protocol Research', avatar: 'AS' }
      ]
    },
    partnerships: [
      { name: 'NIST', logo: '🏛️', category: 'Standards' },
      { name: 'Yubico', logo: '🔑', category: 'Hardware' },
      { name: 'Ledger', logo: '🧱', category: 'Hardware' }
    ],
    security: {
      audits: [
        { company: 'Kudelski Security', date: 'Jan 2024', status: 'Passed' },
        { company: 'Trail of Bits', date: 'Mar 2024', status: 'Passed' },
        { company: 'Least Authority', date: 'May 2024', status: 'Scheduled' }
      ],
      features: [
        'Quantum-safe signatures',
        'Key rotation and migration',
        'Multi-factor transaction auth'
      ]
    },
    faq: [
      { question: 'Why quantum-safe now?', answer: 'Preparing today eliminates migration risk and protects long-term holdings.' },
      { question: 'Will keys be upgraded automatically?', answer: 'We provide guided rotation tools and compatibility layers for seamless upgrades.' }
    ]
  }

  return <ChainLanding chainData={chainData} />
}
