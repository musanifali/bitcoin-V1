/**
 * Bitcoin Holding Brand Kit
 * Main export file for all brand assets and guidelines
 */

export { brandColors, type BrandColor } from './colors'
export { brandTypography, type BrandTypography } from './typography'
export { brandSpacing, type BrandSpacing } from './spacing'
export { brandComponents, type BrandComponents } from './components'

/**
 * Brand Guidelines and Usage
 */
export const brandGuidelines = {
  // Logo Usage
  logo: {
    minSize: '24px',
    clearSpace: '16px',
    preferredFormats: ['SVG', 'PNG'],
    colorVariants: ['orange', 'white', 'black'],
  },

  // Color Usage
  colors: {
    primary: 'Use Bitcoin orange (#f57c00) for primary actions and branding',
    secondary: 'Use orange shades for accents and highlights', 
    neutral: 'Use gray scale for text and backgrounds',
    background: 'Prefer cream (#fffdf1) for main backgrounds',
  },

  // Typography Usage
  typography: {
    headings: 'Use Inter font family for all headings',
    body: 'Use Inter for body text with proper line heights',
    hierarchy: 'Maintain clear visual hierarchy with font sizes and weights',
  },

  // Spacing Usage
  spacing: {
    consistent: 'Use the 4px base unit for all spacing',
    sections: 'Use large spacing (5rem+) between sections',
    components: 'Use medium spacing (1-2rem) within components',
  },

  // Component Usage
  components: {
    buttons: 'Use primary variant for main actions, secondary for alternatives',
    cards: 'Use elevated variant for important content, default for lists',
    forms: 'Maintain consistent styling across all form elements',
  }
}

/**
 * Quick Brand Access
 * Commonly used brand values for easy access
 */
export const brand = {
  colors: {
    primary: '#f57c00',
    secondary: '#ff9800', 
    background: '#fffdf1',
    white: '#ffffff',
    gray: '#616161',
    text: '#212121',
  },
  
  fonts: {
    main: '"Inter", sans-serif',
    display: '"Inter", "SF Pro Display", sans-serif',
  },

  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '5rem',
  },

  radius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
  },

  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  }
} as const

export type Brand = typeof brand
