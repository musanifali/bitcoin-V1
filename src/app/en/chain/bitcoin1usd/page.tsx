'use client'

import ChainLanding from '@/components/pages/ChainLanding'
import { Shield, DollarSign, TrendingUp, Lock, Zap, Globe, Users, Code, Building, ShoppingCart, CreditCard } from 'lucide-react'

export default function Bitcoin1USDPage() {
  const chainData = {
    name: 'Bitcoin1USD',
    tagline: 'Stable Value',
    description: 'The first truly stable Bitcoin fork designed for everyday transactions with price stability and security.',
    fullDescription: 'Bitcoin1USD combines the security and decentralization of Bitcoin with price stability mechanisms, making it perfect for daily transactions, remittances, and store of value.',
    logo: '₿$',
    color: 'from-green-500 to-emerald-600',
    gradient: 'from-green-500 to-emerald-600',
    features: [
      {
        icon: DollarSign,
        title: 'Price Stability',
        description: 'Advanced algorithms maintain stable value relative to USD, reducing volatility by 95% compared to traditional cryptocurrencies.'
      },
      {
        icon: Shield,
        title: 'Enhanced Security',
        description: 'Built on proven Bitcoin technology with additional security layers and multi-signature protection for institutional use.'
      },
      {
        icon: Zap,
        title: 'Fast Transactions',
        description: 'Lightning-fast transactions with average confirmation times under 3 seconds and minimal fees.'
      }
    ],
    stats: [
      {
        label: 'Market Cap',
        value: '$2.4B',
        change: '12.5%'
      },
      {
        label: 'Daily Volume',
        value: '$847M',
        change: '8.3%'
      },
      {
        label: 'Active Wallets',
        value: '1.2M',
        change: '15.2%'
      },
      {
        label: 'Stability Score',
        value: '98.7%'
      }
    ],
    useCases: [
      {
        title: 'E-commerce Payments',
        description: 'Seamlessly integrate stable Bitcoin payments into your online store with predictable transaction values.',
        icon: ShoppingCart
      },
      {
        title: 'International Remittances',
        description: 'Send money globally with Bitcoin security and USD stability, avoiding traditional banking delays and fees.',
        icon: Globe
      },
      {
        title: 'Business Treasury',
        description: 'Corporate treasury management with the stability of USD and the efficiency of blockchain technology.',
        icon: Building
      },
      {
        title: 'DeFi Integration',
        description: 'Participate in decentralized finance protocols with a stable asset that maintains Bitcoin-level security.',
        icon: CreditCard
      }
    ],
    technology: {
      title: 'Advanced Technology Stack',
      description: 'Built with cutting-edge blockchain technology and innovative stability mechanisms to deliver unparalleled performance and reliability.',
      specs: [
        { label: 'Block Time', value: '2.5s' },
        { label: 'TPS Capacity', value: '50,000+' },
        { label: 'Energy Efficiency', value: '99.9%' },
        { label: 'Uptime', value: '99.99%' }
      ]
    },
    roadmap: [
      {
        quarter: 'Q1 2024',
        title: 'Foundation',
        status: 'completed' as const,
        items: [
          'Mainnet Launch',
          'Core Wallet Release',
          'Exchange Listings',
          'Security Audits'
        ]
      },
      {
        quarter: 'Q2 2024',
        title: 'Ecosystem',
        status: 'completed' as const,
        items: [
          'Mobile Apps',
          'DeFi Integrations',
          'Payment Gateways',
          'API Documentation'
        ]
      },
      {
        quarter: 'Q3 2024',
        title: 'Enterprise',
        status: 'in-progress' as const,
        items: [
          'Enterprise Solutions',
          'Institutional Custody',
          'Compliance Tools',
          'Advanced Analytics'
        ]
      },
      {
        quarter: 'Q4 2024',
        title: 'Global Expansion',
        status: 'planned' as const,
        items: [
          'Global Partnerships',
          'Regulatory Approvals',
          'Cross-chain Bridges',
          'Layer 2 Solutions'
        ]
      }
    ],
    team: {
      title: 'Meet Our Team',
      description: 'World-class experts in blockchain technology, finance, and engineering working together to build the future of stable digital currency.',
      members: [
        { name: 'Alex Chen', role: 'CEO & Co-founder', avatar: 'AC' },
        { name: 'Sarah Johnson', role: 'CTO', avatar: 'SJ' },
        { name: 'Michael Rodriguez', role: 'Head of Engineering', avatar: 'MR' },
        { name: 'Emma Davis', role: 'VP of Finance', avatar: 'ED' },
        { name: 'David Kim', role: 'Security Lead', avatar: 'DK' },
        { name: 'Lisa Wang', role: 'Product Manager', avatar: 'LW' }
      ]
    },
    partnerships: [
      { name: 'Coinbase', logo: '🏦', category: 'Exchange' },
      { name: 'MetaMask', logo: '🦊', category: 'Wallet' },
      { name: 'Chainlink', logo: '🔗', category: 'Oracle' },
      { name: 'Uniswap', logo: '🦄', category: 'DEX' },
      { name: 'Aave', logo: '👻', category: 'DeFi' },
      { name: 'Circle', logo: '⚪', category: 'Infrastructure' }
    ],
    security: {
      audits: [
        { company: 'CertiK', date: 'March 2024', status: 'Passed' },
        { company: 'ConsenSys Diligence', date: 'February 2024', status: 'Passed' },
        { company: 'OpenZeppelin', date: 'January 2024', status: 'Passed' }
      ],
      features: [
        'Multi-signature wallet protection',
        'Time-locked smart contracts',
        'Formal verification of critical code',
        'Bug bounty program active',
        'Real-time security monitoring',
        'Decentralized governance controls'
      ]
    },
    faq: [
      {
        question: 'How does Bitcoin1USD maintain price stability?',
        answer: 'Bitcoin1USD uses a combination of algorithmic mechanisms, collateralization, and market-making strategies to maintain a stable value relative to the US Dollar while preserving the security and decentralization of Bitcoin.'
      },
      {
        question: 'Is Bitcoin1USD fully backed by reserves?',
        answer: 'Yes, Bitcoin1USD is backed by a combination of US Dollar reserves, Bitcoin collateral, and other high-quality assets. All reserves are regularly audited and publicly verifiable through our transparency dashboard.'
      },
      {
        question: 'What are the transaction fees?',
        answer: 'Transaction fees are minimal, typically less than $0.01 per transaction. Fees help secure the network and are automatically adjusted based on network congestion to ensure fast confirmation times.'
      },
      {
        question: 'Can I stake Bitcoin1USD to earn rewards?',
        answer: 'Yes, Bitcoin1USD holders can participate in our staking program to earn rewards while helping secure the network. Current staking rewards range from 4-8% APY depending on the staking duration.'
      },
      {
        question: 'How can I integrate Bitcoin1USD into my business?',
        answer: 'We provide comprehensive APIs, SDKs, and plugins for popular e-commerce platforms. Our developer documentation includes everything you need to start accepting Bitcoin1USD payments in minutes.'
      }
    ]
  }

  return <ChainLanding chainData={chainData} />
}
