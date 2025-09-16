/**
 * Chain Color System
 * Dedicated color management for Bitcoin chain variants
 */

// Chain color palettes
export const chainPalettes = {
  bitcoin1usd: {
    name: 'Bitcoin1USD',
    symbol: 'B1USD', 
    baseColor: 'green',
    colors: {
      50: '#f0fdf4',
      100: '#dcfce7', 
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16',
    }
  },
  
  onebitcoin: {
    name: '1Bitcoin1',
    symbol: '1B1',
    baseColor: 'blue',
    colors: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe', 
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    }
  },
  
  bitcoing1: {
    name: 'BitcoinG1',
    symbol: 'BG1',
    baseColor: 'purple',
    colors: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe', 
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7c3aed',
      800: '#6b21a8',
      900: '#581c87',
      950: '#3b0764',
    }
  },
  
  btc1ai: {
    name: 'BTC1Ai',
    symbol: 'BTC1AI',
    baseColor: 'cyan',
    colors: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
      950: '#083344',
    }
  },
  
  btcQuantum: {
    name: 'BTC Quantum',
    symbol: 'BTCQ',
    baseColor: 'orange',
    colors: {
      50: '#fff7ed',
      100: '#ffedd5', 
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407',
    }
  }
} as const

// Chain metadata
export const chainInfo = {
  bitcoin1usd: {
    name: 'Bitcoin1USD',
    fullName: 'Bitcoin1USD Network', 
    description: 'Stable Bitcoin fork pegged to USD value',
    symbol: 'B1USD',
    icon: '💚',
    category: 'Stable',
    status: 'Active',
    launchDate: '2024-Q1'
  },
  
  onebitcoin: {
    name: '1Bitcoin1',
    fullName: '1Bitcoin1 Protocol',
    description: 'Enhanced Bitcoin with improved scalability',
    symbol: '1B1',
    icon: '🔵',
    category: 'Scalable',
    status: 'Active', 
    launchDate: '2024-Q2'
  },
  
  bitcoing1: {
    name: 'BitcoinG1',
    fullName: 'BitcoinG1 Network',
    description: 'Next-generation Bitcoin with smart contracts',
    symbol: 'BG1',
    icon: '🟣',
    category: 'Smart',
    status: 'Active',
    launchDate: '2024-Q3'
  },
  
  btc1ai: {
    name: 'BTC1Ai',
    fullName: 'BTC1Ai Intelligence Network',
    description: 'AI-powered Bitcoin ecosystem',
    symbol: 'BTC1AI',
    icon: '🔷',
    category: 'AI-Powered',
    status: 'Beta',
    launchDate: '2024-Q4'
  },
  
  btcQuantum: {
    name: 'BTC Quantum',
    fullName: 'BTC Quantum Network',
    description: 'Quantum-resistant Bitcoin protocol',
    symbol: 'BTCQ',
    icon: '🟠',
    category: 'Quantum-Safe',
    status: 'Development',
    launchDate: '2025-Q1'
  }
} as const

// Helper function to get chain palette
export const getChainPalette = (chainId: string) => {
  const normalizedId = chainId.replace(/[-_]/g, '').toLowerCase()
  
  const chainMap: Record<string, keyof typeof chainPalettes> = {
    'bitcoin1usd': 'bitcoin1usd',
    '1bitcoin1': 'onebitcoin',
    'bitcoing1': 'bitcoing1', 
    'btc1ai': 'btc1ai',
    'btcquantum': 'btcQuantum',
    'btc-quantum': 'btcQuantum',
  }
  
  return chainPalettes[chainMap[normalizedId]] || chainPalettes.bitcoin1usd
}

// Helper function to get chain information
export const getChainInfo = (chainId: string) => {
  const normalizedId = chainId.replace(/[-_]/g, '').toLowerCase()
  
  const chainMap: Record<string, keyof typeof chainInfo> = {
    'bitcoin1usd': 'bitcoin1usd',
    '1bitcoin1': 'onebitcoin', 
    'bitcoing1': 'bitcoing1',
    'btc1ai': 'btc1ai',
    'btcquantum': 'btcQuantum',
    'btc-quantum': 'btcQuantum',
  }
  
  return chainInfo[chainMap[normalizedId]] || chainInfo.bitcoin1usd
}

// Generate Tailwind classes for a chain
export const generateChainClasses = (chainId: string) => {
  const palette = getChainPalette(chainId)
  const info = getChainInfo(chainId)
  
  return {
    // Background classes
    bg: {
      light: `bg-${palette.baseColor}-50`,
      medium: `bg-${palette.baseColor}-100`, 
      strong: `bg-${palette.baseColor}-500`,
      dark: `bg-${palette.baseColor}-600`,
    },
    
    // Text classes  
    text: {
      primary: `text-${palette.baseColor}-700`,
      secondary: `text-${palette.baseColor}-600`,
      muted: `text-${palette.baseColor}-500`,
      light: `text-${palette.baseColor}-400`,
    },
    
    // Border classes
    border: {
      light: `border-${palette.baseColor}-200`,
      medium: `border-${palette.baseColor}-300`,
      strong: `border-${palette.baseColor}-500`,
    },
    
    // Interactive states
    hover: {
      bg: `hover:bg-${palette.baseColor}-600`,
      text: `hover:text-${palette.baseColor}-700`,
    },
    
    // Gradients
    gradient: {
      subtle: `from-${palette.baseColor}-50 to-${palette.baseColor}-100`,
      medium: `from-${palette.baseColor}-500 to-${palette.baseColor}-600`, 
      strong: `from-${palette.baseColor}-600 to-${palette.baseColor}-700`,
    },
    
    // Chain metadata
    info,
    palette,
  }
}

export type ChainId = keyof typeof chainPalettes
export type ChainPalette = typeof chainPalettes[ChainId]
export type ChainInfo = typeof chainInfo[ChainId]
