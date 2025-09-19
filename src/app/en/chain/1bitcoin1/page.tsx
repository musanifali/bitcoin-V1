'use client'

import ChainLanding from '@/components/pages/ChainLanding'
import { ArrowUpDown, Shield, Zap, Globe, Users, Code, Building, DollarSign, Lock, TrendingUp, ArrowLeftRight } from 'lucide-react'

export default function OneBitcoinOnePage() {
  const chainData = {
    name: '1Bitcoin1',
    tagline: 'One-to-One',
    description: 'Direct 1:1 Bitcoin representation with enhanced features and cross-chain compatibility.',
    fullDescription: 'Each 1Bitcoin1 token is backed by exactly 1 Bitcoin, bringing maximum decentralization and security to DeFi while maintaining perfect parity with the original Bitcoin.',
    logo: '/en/1btc1 white logo.svg',
    color: 'from-blue-500 to-indigo-600',
    gradient: 'from-blue-500 to-indigo-600',
    features: [
      {
        icon: ArrowUpDown,
        title: '1:1 Bitcoin Backing',
        description: 'Every token is backed by exactly one Bitcoin held in secure, audited cold storage with full transparency.'
      },
      {
        icon: ArrowLeftRight,
        title: 'Cross-Chain Bridge',
        description: 'Seamlessly move between Bitcoin and other blockchains while maintaining your Bitcoin exposure.'
      },
      {
        icon: Shield,
        title: 'Maximum Security',
        description: 'Inherits Bitcoin\'s security model with additional smart contract protections and regular security audits.'
      }
    ],
    stats: [
      {
        label: 'Bitcoin Locked',
        value: '45,231',
        change: '7.8%'
      },
      {
        label: 'Total Supply',
        value: '45,231',
        change: '7.8%'
      },
      {
        label: 'Bridge Volume',
        value: '$1.2B',
        change: '23.4%'
      },
      {
        label: 'Uptime',
        value: '99.98%'
      }
    ],
    useCases: [
      {
        title: 'DeFi Participation',
        description: 'Use Bitcoin in DeFi protocols without losing exposure to BTC price movements.',
        icon: DollarSign
      },
      {
        title: 'Cross-Chain Trading',
        description: 'Trade Bitcoin on multiple blockchains while maintaining 1:1 value with the original asset.',
        icon: ArrowUpDown
      },
      {
        title: 'Yield Generation',
        description: 'Earn yield on your Bitcoin holdings through secure lending and liquidity provision.',
        icon: TrendingUp
      },
      {
        title: 'Institutional Holdings',
        description: 'Secure Bitcoin custody solution for institutions requiring blockchain transparency.',
        icon: Building
      }
    ],
    technology: {
      title: 'Cutting-Edge Bridge Technology',
      description: 'Our proprietary cross-chain bridge technology ensures seamless and secure Bitcoin transfers across multiple blockchain networks.',
      specs: [
        { label: 'Bridge Speed', value: '~10min' },
        { label: 'Supported Chains', value: '12+' },
        { label: 'Security Score', value: 'AAA' },
        { label: 'Gas Efficiency', value: '85%' }
      ]
    },
    roadmap: [
      {
        quarter: 'Q1 2024',
        title: 'Core Infrastructure',
        status: 'completed' as const,
        items: [
          'Bitcoin Bridge Launch',
          'Ethereum Integration',
          'Security Audits Complete',
          'Governance Token Launch'
        ]
      },
      {
        quarter: 'Q2 2024',
        title: 'Multi-Chain Expansion',
        status: 'completed' as const,
        items: [
          'Polygon Integration',
          'BSC Support',
          'Avalanche Bridge',
          'Mobile Wallet App'
        ]
      },
      {
        quarter: 'Q3 2024',
        title: 'DeFi Integration',
        status: 'in-progress' as const,
        items: [
          'Uniswap V4 Integration',
          'Lending Protocol Launch',
          'Yield Farming Features',
          'Cross-chain Governance'
        ]
      },
      {
        quarter: 'Q4 2024',
        title: 'Enterprise Features',
        status: 'planned' as const,
        items: [
          'Institutional Custody',
          'Regulatory Compliance',
          'Enterprise API',
          'Advanced Analytics'
        ]
      }
    ],
    team: {
      title: 'Blockchain Pioneers',
      description: 'Our team combines deep Bitcoin expertise with cutting-edge cross-chain technology experience to deliver the most secure and reliable Bitcoin bridge solution.',
      members: [
        { name: 'James Thompson', role: 'Founder & CEO', avatar: 'JT' },
        { name: 'Dr. Maria Santos', role: 'Head of Research', avatar: 'MS' },
        { name: 'Kevin Liu', role: 'Lead Bridge Engineer', avatar: 'KL' },
        { name: 'Rachel Green', role: 'Security Architect', avatar: 'RG' },
        { name: 'Daniel Park', role: 'DevOps Lead', avatar: 'DP' },
        { name: 'Anna Kowalski', role: 'Compliance Officer', avatar: 'AK' }
      ]
    },
    partnerships: [
      { name: 'Bitcoin Core', logo: '₿', category: 'Network' },
      { name: 'Ethereum', logo: 'Ξ', category: 'Blockchain' },
      { name: 'Polygon', logo: '⬟', category: 'L2 Solution' },
      { name: 'Chainlink', logo: '🔗', category: 'Oracle' },
      { name: 'Gnosis Safe', logo: '🔐', category: 'Security' },
      { name: 'Dune Analytics', logo: '📊', category: 'Analytics' }
    ],
    security: {
      audits: [
        { company: 'Trail of Bits', date: 'April 2024', status: 'Passed' },
        { company: 'Quantstamp', date: 'March 2024', status: 'Passed' },
        { company: 'Hacken', date: 'February 2024', status: 'Passed' }
      ],
      features: [
        'Multi-signature Bitcoin custody',
        'Time-locked withdrawals',
        'Emergency pause mechanisms',
        'Continuous security monitoring',
        'Slashing conditions for validators',
        'Insurance coverage for bridge funds'
      ]
    },
    faq: [
      {
        question: 'How is the 1:1 peg maintained?',
        answer: 'Every 1Bitcoin1 token is backed by exactly one Bitcoin held in audited cold storage. Our smart contracts enforce this 1:1 relationship and prevent over-minting. All Bitcoin reserves are publicly verifiable on the blockchain.'
      },
      {
        question: 'What chains does 1Bitcoin1 support?',
        answer: 'Currently, we support Ethereum, Polygon, BSC, and Avalanche with more chains coming soon. Our modular bridge architecture allows for rapid deployment on new networks while maintaining security standards.'
      },
      {
        question: 'How long do cross-chain transfers take?',
        answer: 'Cross-chain transfers typically complete within 10-30 minutes depending on the source and destination chains. Bitcoin withdrawals require additional confirmations for security and may take up to 1 hour.'
      },
      {
        question: 'Are there any fees for bridging?',
        answer: 'Bridge fees are minimal and cover network costs and security operations. Typical fees range from 0.05% to 0.1% of the bridged amount, with additional gas fees for the destination chain.'
      },
      {
        question: 'Is 1Bitcoin1 compatible with DeFi protocols?',
        answer: 'Yes! 1Bitcoin1 is designed to be fully compatible with existing DeFi protocols. You can use it for lending, borrowing, liquidity provision, and yield farming while maintaining Bitcoin price exposure.'
      }
    ]
  }

  return <ChainLanding chainData={chainData} />
}
