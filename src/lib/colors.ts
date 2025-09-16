/**
 * Color Utility Functions
 * Centralized color management for the entire application
 */

import { brandColors } from '@/brand/colors'
import { getChainPalette, getChainInfo, generateChainClasses, type ChainId } from './chainColors'

// Main brand colors for consistent usage
export const colors = {
  // Primary Bitcoin colors
  primary: 'bg-bitcoin-500 hover:bg-bitcoin-600',
  primaryText: 'text-bitcoin-500',
  primaryBorder: 'border-bitcoin-500',
  
  // Secondary colors  
  secondary: 'bg-bitcoin-400 hover:bg-bitcoin-500',
  secondaryText: 'text-bitcoin-400',
  
  // Accent colors
  accent: 'bg-bitcoin-600 hover:bg-bitcoin-700',
  accentText: 'text-bitcoin-500 dark:text-bitcoin-400',
  
  // Background colors
  background: {
    light: 'bg-white dark:bg-gray-900',
    dark: 'bg-gray-900 dark:bg-gray-950',
    subtle: 'bg-gray-50 dark:bg-gray-800',
    card: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    section: 'bg-white dark:bg-gray-900',
    darkSection: 'bg-gray-900 dark:bg-gray-950',
  },
  
  // Text colors for light sections
  text: {
    primary: 'text-gray-900 dark:text-white',
    secondary: 'text-gray-600 dark:text-gray-300',
    muted: 'text-gray-500 dark:text-gray-400',
    accent: 'text-bitcoin-500 dark:text-bitcoin-400',
  },

  // Text colors for dark sections
  darkText: {
    primary: 'text-white',
    secondary: 'text-gray-300',
    muted: 'text-gray-400',
    accent: 'text-bitcoin-400',
    brand: 'text-bitcoin-400',
  },

  // Dark section elements
  darkElements: {
    badge: 'bg-bitcoin-500/10 text-bitcoin-400 border-bitcoin-500/20',
    card: 'bg-gray-800 border border-gray-700',
    input: 'bg-gray-800 border-gray-700 text-white placeholder-gray-400',
    button: 'bg-bitcoin-500 hover:bg-bitcoin-600 text-white',
    buttonSecondary: 'bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-600',
  },
  
  // Status colors
  status: {
    success: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/30',
    warning: 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30', 
    error: 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30',
    info: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30',
  },

  // Status colors for dark sections
  darkStatus: {
    success: 'text-green-400 bg-green-950/30',
    warning: 'text-orange-400 bg-orange-950/30',
    error: 'text-red-400 bg-red-950/30',
    info: 'text-blue-400 bg-blue-950/30',
  },
  
  // Chain specific colors - Comprehensive color system for all Bitcoin chains
  chains: {
    bitcoin1usd: {
      // Primary colors
      primary: 'bg-green-500 hover:bg-green-600',
      primaryText: 'text-green-600 dark:text-green-400',
      primaryBorder: 'border-green-500 dark:border-green-400',
      
      // Background variants
      bgLight: 'bg-green-50 dark:bg-green-950/20',
      bgMedium: 'bg-green-100 dark:bg-green-950/40',
      bgStrong: 'bg-green-500 dark:bg-green-600',
      
      // Text variants
      textPrimary: 'text-green-700 dark:text-green-300',
      textSecondary: 'text-green-600 dark:text-green-400',
      textMuted: 'text-green-500 dark:text-green-500',
      
      // Gradients
      gradient: 'from-green-500 to-emerald-600',
      gradientDark: 'from-green-600 to-emerald-700',
      gradientSubtle: 'from-green-50 to-emerald-50',
      
      // Interactive elements
      button: 'bg-green-500 hover:bg-green-600 text-white',
      buttonSecondary: 'bg-green-100 hover:bg-green-200 text-green-800 dark:bg-green-950/30 dark:hover:bg-green-950/50 dark:text-green-300',
      badge: 'bg-green-100 text-green-800 dark:bg-green-950/30 dark:text-green-400',
      
      // Status indicators
      success: 'bg-green-500 text-white',
      warning: 'bg-yellow-500 text-white',
      error: 'bg-red-500 text-white',
      
      // Card elements
      card: 'bg-white border border-green-200 dark:bg-gray-800 dark:border-green-800/30',
      cardHover: 'hover:bg-green-50 dark:hover:bg-green-950/10',
    },
    
    onebitcoin: {
      // Primary colors
      primary: 'bg-blue-500 hover:bg-blue-600',
      primaryText: 'text-blue-600 dark:text-blue-400',
      primaryBorder: 'border-blue-500 dark:border-blue-400',
      
      // Background variants
      bgLight: 'bg-blue-50 dark:bg-blue-950/20',
      bgMedium: 'bg-blue-100 dark:bg-blue-950/40',
      bgStrong: 'bg-blue-500 dark:bg-blue-600',
      
      // Text variants
      textPrimary: 'text-blue-700 dark:text-blue-300',
      textSecondary: 'text-blue-600 dark:text-blue-400',
      textMuted: 'text-blue-500 dark:text-blue-500',
      
      // Gradients
      gradient: 'from-blue-500 to-indigo-600',
      gradientDark: 'from-blue-600 to-indigo-700',
      gradientSubtle: 'from-blue-50 to-indigo-50',
      
      // Interactive elements
      button: 'bg-blue-500 hover:bg-blue-600 text-white',
      buttonSecondary: 'bg-blue-100 hover:bg-blue-200 text-blue-800 dark:bg-blue-950/30 dark:hover:bg-blue-950/50 dark:text-blue-300',
      badge: 'bg-blue-100 text-blue-800 dark:bg-blue-950/30 dark:text-blue-400',
      
      // Status indicators
      success: 'bg-green-500 text-white',
      warning: 'bg-yellow-500 text-white',
      error: 'bg-red-500 text-white',
      
      // Card elements
      card: 'bg-white border border-blue-200 dark:bg-gray-800 dark:border-blue-800/30',
      cardHover: 'hover:bg-blue-50 dark:hover:bg-blue-950/10',
    },
    
    bitcoing1: {
      // Primary colors
      primary: 'bg-purple-500 hover:bg-purple-600',
      primaryText: 'text-purple-600 dark:text-purple-400',
      primaryBorder: 'border-purple-500 dark:border-purple-400',
      
      // Background variants
      bgLight: 'bg-purple-50 dark:bg-purple-950/20',
      bgMedium: 'bg-purple-100 dark:bg-purple-950/40',
      bgStrong: 'bg-purple-500 dark:bg-purple-600',
      
      // Text variants
      textPrimary: 'text-purple-700 dark:text-purple-300',
      textSecondary: 'text-purple-600 dark:text-purple-400',
      textMuted: 'text-purple-500 dark:text-purple-500',
      
      // Gradients
      gradient: 'from-purple-500 to-violet-600',
      gradientDark: 'from-purple-600 to-violet-700',
      gradientSubtle: 'from-purple-50 to-violet-50',
      
      // Interactive elements
      button: 'bg-purple-500 hover:bg-purple-600 text-white',
      buttonSecondary: 'bg-purple-100 hover:bg-purple-200 text-purple-800 dark:bg-purple-950/30 dark:hover:bg-purple-950/50 dark:text-purple-300',
      badge: 'bg-purple-100 text-purple-800 dark:bg-purple-950/30 dark:text-purple-400',
      
      // Status indicators
      success: 'bg-green-500 text-white',
      warning: 'bg-yellow-500 text-white',
      error: 'bg-red-500 text-white',
      
      // Card elements
      card: 'bg-white border border-purple-200 dark:bg-gray-800 dark:border-purple-800/30',
      cardHover: 'hover:bg-purple-50 dark:hover:bg-purple-950/10',
    },
    
    btc1ai: {
      // Primary colors
      primary: 'bg-cyan-500 hover:bg-cyan-600',
      primaryText: 'text-cyan-600 dark:text-cyan-400',
      primaryBorder: 'border-cyan-500 dark:border-cyan-400',
      
      // Background variants
      bgLight: 'bg-cyan-50 dark:bg-cyan-950/20',
      bgMedium: 'bg-cyan-100 dark:bg-cyan-950/40',
      bgStrong: 'bg-cyan-500 dark:bg-cyan-600',
      
      // Text variants
      textPrimary: 'text-cyan-700 dark:text-cyan-300',
      textSecondary: 'text-cyan-600 dark:text-cyan-400',
      textMuted: 'text-cyan-500 dark:text-cyan-500',
      
      // Gradients
      gradient: 'from-cyan-500 to-teal-600',
      gradientDark: 'from-cyan-600 to-teal-700',
      gradientSubtle: 'from-cyan-50 to-teal-50',
      
      // Interactive elements
      button: 'bg-cyan-500 hover:bg-cyan-600 text-white',
      buttonSecondary: 'bg-cyan-100 hover:bg-cyan-200 text-cyan-800 dark:bg-cyan-950/30 dark:hover:bg-cyan-950/50 dark:text-cyan-300',
      badge: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950/30 dark:text-cyan-400',
      
      // Status indicators
      success: 'bg-green-500 text-white',
      warning: 'bg-yellow-500 text-white',
      error: 'bg-red-500 text-white',
      
      // Card elements
      card: 'bg-white border border-cyan-200 dark:bg-gray-800 dark:border-cyan-800/30',
      cardHover: 'hover:bg-cyan-50 dark:hover:bg-cyan-950/10',
    },
    
    btcQuantum: {
      // Primary colors
      primary: 'bg-orange-500 hover:bg-orange-600',
      primaryText: 'text-orange-600 dark:text-orange-400',
      primaryBorder: 'border-orange-500 dark:border-orange-400',
      
      // Background variants
      bgLight: 'bg-orange-50 dark:bg-orange-950/20',
      bgMedium: 'bg-orange-100 dark:bg-orange-950/40',
      bgStrong: 'bg-orange-500 dark:bg-orange-600',
      
      // Text variants
      textPrimary: 'text-orange-700 dark:text-orange-300',
      textSecondary: 'text-orange-600 dark:text-orange-400',
      textMuted: 'text-orange-500 dark:text-orange-500',
      
      // Gradients
      gradient: 'from-orange-500 to-red-500',
      gradientDark: 'from-orange-600 to-red-600',
      gradientSubtle: 'from-orange-50 to-red-50',
      
      // Interactive elements
      button: 'bg-orange-500 hover:bg-orange-600 text-white',
      buttonSecondary: 'bg-orange-100 hover:bg-orange-200 text-orange-800 dark:bg-orange-950/30 dark:hover:bg-orange-950/50 dark:text-orange-300',
      badge: 'bg-orange-100 text-orange-800 dark:bg-orange-950/30 dark:text-orange-400',
      
      // Status indicators
      success: 'bg-green-500 text-white',
      warning: 'bg-yellow-500 text-white',
      error: 'bg-red-500 text-white',
      
      // Card elements
      card: 'bg-white border border-orange-200 dark:bg-gray-800 dark:border-orange-800/30',
      cardHover: 'hover:bg-orange-50 dark:hover:bg-orange-950/10',
    }
  }
} as const

// Gradient utilities
export const gradients = {
  primary: 'bg-gradient-to-br from-bitcoin-500 to-bitcoin-600',
  secondary: 'bg-gradient-to-br from-bitcoin-400 to-bitcoin-500',
  subtle: 'bg-gradient-to-br from-bitcoin-50 to-bitcoin-100',
  dark: 'bg-gradient-to-br from-gray-900 via-gray-800 to-black',
  darkSection: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
} as const

// Button variants using brand colors
export const buttonVariants = {
  primary: 'bg-bitcoin-500 hover:bg-bitcoin-600 text-white',
  secondary: 'bg-white hover:bg-gray-50 text-bitcoin-500 border border-bitcoin-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-bitcoin-400 dark:border-gray-600',
  ghost: 'hover:bg-bitcoin-50 text-bitcoin-600 dark:hover:bg-bitcoin-950/20 dark:text-bitcoin-400',
  outline: 'border border-bitcoin-500 text-bitcoin-500 hover:bg-bitcoin-500 hover:text-white dark:border-bitcoin-400 dark:text-bitcoin-400',
} as const

// Dark section button variants  
export const darkButtonVariants = {
  primary: 'bg-bitcoin-500 hover:bg-bitcoin-600 text-white',
  secondary: 'bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-600',
  ghost: 'hover:bg-gray-800 text-gray-300',
  outline: 'border border-bitcoin-400 text-bitcoin-400 hover:bg-bitcoin-400 hover:text-gray-900',
} as const

// Enhanced helper function to get chain colors with comprehensive system
export const getChainColors = (chainId: string) => {
  const chainMap: Record<string, keyof typeof colors.chains> = {
    'bitcoin1usd': 'bitcoin1usd',
    '1bitcoin1': 'onebitcoin', 
    'bitcoing1': 'bitcoing1',
    'btc1ai': 'btc1ai',
    'btc-quantum': 'btcQuantum',
    'btcquantum': 'btcQuantum'
  }
  
  return colors.chains[chainMap[chainId]] || colors.chains.bitcoin1usd
}

// Helper function to get chain theme colors for specific use cases
export const getChainTheme = (chainId: string, variant: 'light' | 'dark' | 'default' = 'default') => {
  const chainColors = getChainColors(chainId)
  
  switch (variant) {
    case 'light':
      return {
        background: chainColors.bgLight,
        text: chainColors.textPrimary,
        accent: chainColors.primaryText,
        button: chainColors.buttonSecondary,
        card: chainColors.card,
      }
    case 'dark':
      return {
        background: chainColors.bgStrong,
        text: 'text-white',
        accent: 'text-white/90',
        button: chainColors.button,
        card: 'bg-black/20 border border-white/10',
      }
    default:
      return {
        background: chainColors.bgMedium,
        text: chainColors.textPrimary,
        accent: chainColors.primaryText,
        button: chainColors.button,
        card: chainColors.card,
      }
  }
}

// Helper function for chain-specific gradients
export const getChainGradient = (chainId: string, intensity: 'subtle' | 'medium' | 'strong' = 'medium') => {
  const chainColors = getChainColors(chainId)
  
  switch (intensity) {
    case 'subtle':
      return `bg-gradient-to-br ${chainColors.gradientSubtle}`
    case 'strong':
      return `bg-gradient-to-br ${chainColors.gradientDark}`
    default:
      return `bg-gradient-to-br ${chainColors.gradient}`
  }
}

// Helper function for chain badges with different styles
export const getChainBadge = (chainId: string, style: 'default' | 'outline' | 'solid' = 'default') => {
  const chainColors = getChainColors(chainId)
  
  switch (style) {
    case 'outline':
      return `border ${chainColors.primaryBorder} ${chainColors.primaryText} bg-transparent`
    case 'solid':
      return `${chainColors.primary} text-white border-transparent`
    default:
      return chainColors.badge
  }
}

// Chain-specific button variants
export const getChainButtons = (chainId: string) => {
  const chainColors = getChainColors(chainId)
  
  return {
    primary: chainColors.button,
    secondary: chainColors.buttonSecondary,
    outline: `border ${chainColors.primaryBorder} ${chainColors.primaryText} hover:${chainColors.primary} hover:text-white`,
    ghost: `${chainColors.primaryText} hover:${chainColors.bgLight}`,
  }
}

// CSS custom properties for dynamic theming
export const cssVariables = {
  '--color-primary': brandColors.bitcoin[500],
  '--color-secondary': brandColors.orange[500],
  '--color-accent': brandColors.orange[400],
  '--color-text-primary': brandColors.gray[900],
  '--color-text-secondary': brandColors.gray[600],
  '--color-background': brandColors.background.white,
} as const

// Helper function for dark sections
export const getDarkSectionColors = () => ({
  background: 'bg-gray-900',
  text: colors.darkText,
  elements: colors.darkElements,
  status: colors.darkStatus,
  buttons: darkButtonVariants,
  gradient: gradients.darkSection,
})

// Helper function to determine if component is in dark section
export const isDarkSection = (sectionName: string) => {
  const darkSections = ['newsalerts', 'footer', 'cta-dark']
  return darkSections.includes(sectionName.toLowerCase())
}

// Advanced chain color utilities
export const getChainColorSystem = (chainId: string) => {
  const palette = getChainPalette(chainId)
  const info = getChainInfo(chainId)
  const classes = generateChainClasses(chainId)
  
  return {
    palette,
    info,
    classes,
    
    // Utility functions for the chain
    getBackground: (intensity: 'light' | 'medium' | 'strong' = 'medium') => classes.bg[intensity],
    getText: (variant: 'primary' | 'secondary' | 'muted' = 'primary') => classes.text[variant],
    getBorder: (intensity: 'light' | 'medium' | 'strong' = 'medium') => classes.border[intensity],
    getGradient: (intensity: 'subtle' | 'medium' | 'strong' = 'medium') => 
      `bg-gradient-to-br ${classes.gradient[intensity]}`,
    
    // Component-specific utilities
    getCard: () => `bg-white dark:bg-gray-800 border ${classes.border.light}`,
    getCardHover: () => {
      const hoverMap = {
        green: 'hover:bg-green-50 dark:hover:bg-gray-700 hover:border-green-300',
        blue: 'hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-blue-300', 
        purple: 'hover:bg-purple-50 dark:hover:bg-gray-700 hover:border-purple-300',
        cyan: 'hover:bg-cyan-50 dark:hover:bg-gray-700 hover:border-cyan-300',
        orange: 'hover:bg-orange-50 dark:hover:bg-gray-700 hover:border-orange-300',
      }
      return hoverMap[palette.baseColor as keyof typeof hoverMap] || hoverMap.green
    },
    getCardInteractive: () => {
      const baseCard = `bg-white dark:bg-gray-800 border ${classes.border.light} transition-all duration-300`
      const hoverMap = {
        green: 'hover:bg-green-50 dark:hover:bg-gray-700 hover:border-green-300 hover:shadow-lg',
        blue: 'hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-blue-300 hover:shadow-lg', 
        purple: 'hover:bg-purple-50 dark:hover:bg-gray-700 hover:border-purple-300 hover:shadow-lg',
        cyan: 'hover:bg-cyan-50 dark:hover:bg-gray-700 hover:border-cyan-300 hover:shadow-lg',
        orange: 'hover:bg-orange-50 dark:hover:bg-gray-700 hover:border-orange-300 hover:shadow-lg',
      }
      const hover = hoverMap[palette.baseColor as keyof typeof hoverMap] || hoverMap.green
      return `${baseCard} ${hover}`
    },
    getBadge: () => `${classes.bg.light} ${classes.text.primary} px-2 py-1 rounded-full text-xs font-medium`,
    getButton: () => `${classes.bg.strong} ${classes.hover.bg} text-white px-4 py-2 rounded-lg font-medium transition-colors`,
    
    // Status indicators
    getStatus: (status: 'active' | 'beta' | 'development' | 'inactive') => {
      const statusColors = {
        active: 'bg-green-100 text-green-800 dark:bg-green-950/30 dark:text-green-400',
        beta: 'bg-blue-100 text-blue-800 dark:bg-blue-950/30 dark:text-blue-400',
        development: 'bg-orange-100 text-orange-800 dark:bg-orange-950/30 dark:text-orange-400',
        inactive: 'bg-gray-100 text-gray-800 dark:bg-gray-950/30 dark:text-gray-400',
      }
      return statusColors[status] || statusColors.inactive
    }
  }
}

// Chain comparison utilities
export const compareChains = (chainIds: string[]) => {
  return chainIds.map(id => ({
    id,
    ...getChainColorSystem(id)
  }))
}

// Get all available chains
export const getAllChains = () => {
  const chainIds: ChainId[] = ['bitcoin1usd', 'onebitcoin', 'bitcoing1', 'btc1ai', 'btcQuantum']
  return compareChains(chainIds)
}

// Chain-specific theme provider
export const getChainThemeProvider = (chainId: string) => {
  const system = getChainColorSystem(chainId)
  
  return {
    ...system,
    cssVariables: {
      '--chain-primary': system.palette.colors[500],
      '--chain-secondary': system.palette.colors[400],
      '--chain-accent': system.palette.colors[600],
      '--chain-bg-light': system.palette.colors[50],
      '--chain-bg-medium': system.palette.colors[100],
      '--chain-text-primary': system.palette.colors[700],
      '--chain-text-secondary': system.palette.colors[600],
    }
  }
}

export type ColorVariant = keyof typeof colors
export type GradientVariant = keyof typeof gradients  
export type ButtonVariant = keyof typeof buttonVariants
export type DarkButtonVariant = keyof typeof darkButtonVariants
export type ChainColorSystem = ReturnType<typeof getChainColorSystem>
