/**
 * Bitcoin Holding Spacing & Layout System
 * Consistent spacing, sizing, and layout values
 */

export const brandSpacing = {
  // Base spacing unit (4px)
  base: 4,

  // Spacing Scale (in pixels and rem)
  space: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
  },

  // Component Spacing
  component: {
    // Padding
    buttonPadding: {
      sm: '0.5rem 1rem',
      md: '0.75rem 1.5rem', 
      lg: '1rem 2rem',
    },
    cardPadding: {
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
    },
    sectionPadding: {
      sm: '2rem 1rem',
      md: '4rem 1.5rem',
      lg: '6rem 2rem',
    },

    // Margins
    sectionMargin: {
      sm: '3rem 0',
      md: '5rem 0',
      lg: '8rem 0',
    },
    elementMargin: {
      sm: '0.5rem 0',
      md: '1rem 0', 
      lg: '1.5rem 0',
    },
  },

  // Border Radius
  radius: {
    none: '0',
    sm: '0.125rem',   // 2px
    base: '0.25rem',  // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  },

  // Container Sizes
  containers: {
    xs: '20rem',      // 320px
    sm: '24rem',      // 384px
    md: '28rem',      // 448px
    lg: '32rem',      // 512px
    xl: '36rem',      // 576px
    '2xl': '42rem',   // 672px
    '3xl': '48rem',   // 768px
    '4xl': '56rem',   // 896px
    '5xl': '64rem',   // 1024px
    '6xl': '72rem',   // 1152px
    '7xl': '80rem',   // 1280px
    full: '100%',
  }
} as const

export type BrandSpacing = typeof brandSpacing
