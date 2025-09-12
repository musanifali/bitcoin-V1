/**
 * Bitcoin Holding Typography System
 * Centralized typography definitions for consistent text styling
 */

export const brandTypography = {
  // Font Families
  fonts: {
    display: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", monospace',
  },

  // Font Sizes (using Tailwind scale)
  sizes: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px  
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
  },

  // Line Heights
  lineHeights: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  // Font Weights
  weights: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  // Text Styles (pre-defined combinations)
  styles: {
    // Hero Text
    heroTitle: {
      fontSize: '3.75rem', // 60px
      fontWeight: '700',
      lineHeight: '1.1',
      letterSpacing: '-0.025em',
    },
    heroSubtitle: {
      fontSize: '1.25rem', // 20px
      fontWeight: '400',
      lineHeight: '1.6',
    },

    // Headings
    h1: {
      fontSize: '2.25rem', // 36px
      fontWeight: '700',
      lineHeight: '1.2',
      letterSpacing: '-0.025em',
    },
    h2: {
      fontSize: '1.875rem', // 30px
      fontWeight: '600',
      lineHeight: '1.3',
      letterSpacing: '-0.025em',
    },
    h3: {
      fontSize: '1.5rem', // 24px
      fontWeight: '600',
      lineHeight: '1.4',
    },
    h4: {
      fontSize: '1.25rem', // 20px
      fontWeight: '600',
      lineHeight: '1.5',
    },

    // Body Text
    bodyLarge: {
      fontSize: '1.125rem', // 18px
      fontWeight: '400',
      lineHeight: '1.7',
    },
    body: {
      fontSize: '1rem', // 16px
      fontWeight: '400',
      lineHeight: '1.6',
    },
    bodySmall: {
      fontSize: '0.875rem', // 14px
      fontWeight: '400',
      lineHeight: '1.5',
    },

    // UI Elements
    button: {
      fontSize: '0.875rem', // 14px
      fontWeight: '500',
      lineHeight: '1.25',
      letterSpacing: '0.025em',
    },
    caption: {
      fontSize: '0.75rem', // 12px
      fontWeight: '400',
      lineHeight: '1.4',
    },
    label: {
      fontSize: '0.875rem', // 14px
      fontWeight: '500',
      lineHeight: '1.25',
    },
  }
} as const

export type BrandTypography = typeof brandTypography
