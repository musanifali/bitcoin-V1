'use client'

import ChainLanding from '@/components/pages/ChainLanding'
import { Layers, Zap, Code, Shield, TrendingUp, Globe, Users, Cpu, Building, Smartphone } from 'lucide-react'

export default function BitcoinG1Page() {
  const chainData = {
    name: 'BitcoinG1',
    tagline: 'Generation One',
    description: 'Next-generation Bitcoin with revolutionary scalability and smart contracts.',
    fullDescription: 'BitcoinG1 represents the evolution of Bitcoin, bringing lightning-fast transactions, smart contract capabilities, and unprecedented energy efficiency while maintaining Bitcoin\'s core principles.',
    logo: '/en/genesis white logo.png',
    color: 'from-purple-500 to-violet-600',
    gradient: 'from-purple-500 to-violet-600',
    features: [
      {
        icon: Layers,
        title: '100K+ TPS',
        description: 'Revolutionary consensus mechanism enables over 100,000 transactions per second with instant finality.'
      },
      {
        icon: Code,
        title: 'Smart Contracts',
        description: 'Full smart contract functionality compatible with existing Bitcoin infrastructure and tools.'
      },
      {
        icon: Zap,
        title: '99% Energy Efficient',
        description: 'Advanced proof-of-stake consensus reduces energy consumption by 99% compared to traditional Bitcoin.'
      }
    ],
    stats: [
      {
        label: 'Max TPS',
        value: '100K+',
        change: 'Unlimited'
      },
      {
        label: 'Smart Contracts',
        value: '47,231',
        change: '156%'
      },
      {
        label: 'Energy Savings',
        value: '99%',
        change: 'vs Bitcoin'
      },
      {
        label: 'Block Time',
        value: '1s'
      }
    ],
    useCases: [
      {
        title: 'DeFi Applications',
        description: 'Build sophisticated DeFi protocols with Bitcoin-level security and instant transactions.',
        icon: Building
      },
      {
        title: 'Gaming & NFTs',
        description: 'Create blockchain games and NFT marketplaces with near-zero gas fees.',
        icon: Cpu
      },
      {
        title: 'Mobile Payments',
        description: 'Enable instant micropayments and mobile commerce with sub-second confirmation times.',
        icon: Smartphone
      },
      {
        title: 'Enterprise Solutions',
        description: 'Deploy enterprise blockchain applications with enterprise-grade performance and security.',
        icon: Shield
      }
    ],
    technology: {
      title: 'Scalable Smart Contract Platform',
      description: 'Built for speed and scale with developer-friendly tools and EVM-like compatibility.',
      specs: [
        { label: 'Block Time', value: '1s' },
        { label: 'TPS Capacity', value: '100,000+' },
        { label: 'Gas Fees', value: '< $0.001' },
        { label: 'Nodes', value: '2,500+' }
      ]
    },
    roadmap: [
      { quarter: 'Q1 2024', title: 'Mainnet Launch', status: 'completed' as const, items: ['Validator Onboarding', 'Core Wallets', 'Bridge Alpha'] },
      { quarter: 'Q2 2024', title: 'Ecosystem Growth', status: 'in-progress' as const, items: ['DeFi Primitives', 'NFT Support', 'Dev Grants'] },
      { quarter: 'Q3 2024', title: 'Enterprise Focus', status: 'planned' as const, items: ['Compliance Suite', 'Audit Trails', 'SLA Support'] },
      { quarter: 'Q4 2024', title: 'Global Expansion', status: 'planned' as const, items: ['Regional Hubs', 'Hackathons', 'Academia Partnerships'] }
    ],
    team: {
      title: 'Builders Behind BitcoinG1',
      description: 'A distributed team of protocol engineers, cryptographers, and product designers.',
      members: [
        { name: 'Nina Patel', role: 'Protocol Lead', avatar: 'NP' },
        { name: 'Omar Hassan', role: 'Lead DevRel', avatar: 'OH' },
        { name: 'Julia Park', role: 'Smart Contracts', avatar: 'JP' }
      ]
    },
    partnerships: [
      { name: 'The Graph', logo: '📈', category: 'Indexing' },
      { name: 'Infura', logo: '☁️', category: 'Infra' },
      { name: 'Ledger', logo: '🧱', category: 'Hardware' }
    ],
    security: {
      audits: [
        { company: 'Trail of Bits', date: 'Apr 2024', status: 'Passed' },
        { company: 'OpenZeppelin', date: 'May 2024', status: 'In Review' }
      ],
      features: [
        'Deterministic builds',
        'On-chain governance limits',
        'Rate-limited bridges'
      ]
    },
    faq: [
      { question: 'Is BitcoinG1 EVM-compatible?', answer: 'It offers EVM-like tooling and compatibility layers for easy porting.' },
      { question: 'How do validators join?', answer: 'Apply via the validator program and meet stake and uptime requirements.' }
    ]
  }

  return <ChainLanding chainData={chainData} />
}
