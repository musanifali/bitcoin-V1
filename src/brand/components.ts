/**
 * Bitcoin Holding Component Variants
 * Pre-defined component styles for consistency
 */

import { brandColors } from './colors'
import { brandTypography } from './typography'
import { brandSpacing } from './spacing'

export const brandComponents = {
  // Button Variants
  buttons: {
    primary: {
      backgroundColor: brandColors.bitcoin[500],
      color: brandColors.background.white,
      padding: brandSpacing.component.buttonPadding.md,
      borderRadius: brandSpacing.radius.md,
      fontSize: brandTypography.styles.button.fontSize,
      fontWeight: brandTypography.styles.button.fontWeight,
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: brandColors.bitcoin[600],
        transform: 'translateY(-1px)',
        boxShadow: brandSpacing.shadows.md,
      }
    },
    
    secondary: {
      backgroundColor: 'transparent',
      color: brandColors.bitcoin[500],
      padding: brandSpacing.component.buttonPadding.md,
      borderRadius: brandSpacing.radius.md,
      fontSize: brandTypography.styles.button.fontSize,
      fontWeight: brandTypography.styles.button.fontWeight,
      border: `2px solid ${brandColors.bitcoin[500]}`,
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: brandColors.bitcoin[500],
        color: brandColors.background.white,
      }
    },

    ghost: {
      backgroundColor: 'transparent',
      color: brandColors.gray[700],
      padding: brandSpacing.component.buttonPadding.md,
      borderRadius: brandSpacing.radius.md,
      fontSize: brandTypography.styles.button.fontSize,
      fontWeight: brandTypography.styles.button.fontWeight,
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: brandColors.bitcoin[50],
        color: brandColors.bitcoin[600],
      }
    }
  },

  // Card Variants
  cards: {
    default: {
      backgroundColor: brandColors.background.white,
      borderRadius: brandSpacing.radius.lg,
      padding: brandSpacing.component.cardPadding.md,
      boxShadow: brandSpacing.shadows.base,
      border: `1px solid ${brandColors.gray[200]}`,
    },

    elevated: {
      backgroundColor: brandColors.background.white,
      borderRadius: brandSpacing.radius.lg,
      padding: brandSpacing.component.cardPadding.lg,
      boxShadow: brandSpacing.shadows.lg,
      border: 'none',
    },

    highlight: {
      backgroundColor: brandColors.bitcoin[50],
      borderRadius: brandSpacing.radius.lg,
      padding: brandSpacing.component.cardPadding.md,
      border: `2px solid ${brandColors.bitcoin[200]}`,
      boxShadow: brandSpacing.shadows.sm,
    }
  },

  // Typography Components
  text: {
    heading: {
      fontFamily: brandTypography.fonts.display,
      fontWeight: brandTypography.weights.bold,
      color: brandColors.gray[900],
      lineHeight: brandTypography.lineHeights.tight,
    },

    body: {
      fontFamily: brandTypography.fonts.body,
      fontWeight: brandTypography.weights.normal,
      color: brandColors.gray[700],
      lineHeight: brandTypography.lineHeights.relaxed,
    },

    caption: {
      fontFamily: brandTypography.fonts.body,
      fontWeight: brandTypography.weights.normal,
      color: brandColors.gray[500],
      fontSize: brandTypography.sizes.sm,
      lineHeight: brandTypography.lineHeights.normal,
    }
  },

  // Form Elements
  forms: {
    input: {
      backgroundColor: brandColors.background.white,
      border: `1px solid ${brandColors.gray[300]}`,
      borderRadius: brandSpacing.radius.md,
      padding: '0.75rem 1rem',
      fontSize: brandTypography.sizes.base,
      fontFamily: brandTypography.fonts.body,
      color: brandColors.gray[900],
      transition: 'all 0.2s ease-in-out',
      '&:focus': {
        outline: 'none',
        borderColor: brandColors.bitcoin[500],
        boxShadow: `0 0 0 3px ${brandColors.bitcoin[100]}`,
      }
    },

    label: {
      fontFamily: brandTypography.fonts.body,
      fontSize: brandTypography.sizes.sm,
      fontWeight: brandTypography.weights.medium,
      color: brandColors.gray[700],
      marginBottom: brandSpacing.space[2],
    }
  }
} as const

export type BrandComponents = typeof brandComponents
