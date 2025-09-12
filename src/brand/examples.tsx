/**
 * Brand Kit Usage Examples
 * How to use the Bitcoin Holding brand system in components
 */

import { brand, brandColors, brandTypography, brandSpacing, brandComponents } from './index'

// Example 1: Using brand colors directly
export const exampleColorUsage = {
  // Direct color access
  primaryButton: {
    backgroundColor: brand.colors.primary,
    color: brand.colors.white,
  },

  // Full color palette access
  gradientBackground: {
    background: brandColors.gradients.primary,
  },

  // Status colors
  successMessage: {
    color: brandColors.status.success,
  }
}

// Example 2: Using typography system
export const exampleTypographyUsage = {
  // Pre-defined text styles
  heroTitle: brandTypography.styles.heroTitle,
  
  // Custom combinations
  sectionHeading: {
    fontFamily: brandTypography.fonts.display,
    fontSize: brandTypography.sizes['3xl'],
    fontWeight: brandTypography.weights.bold,
    lineHeight: brandTypography.lineHeights.tight,
  }
}

// Example 3: Using spacing system
export const exampleSpacingUsage = {
  // Component spacing
  buttonStyle: {
    padding: brandSpacing.component.buttonPadding.md,
    borderRadius: brandSpacing.radius.md,
    marginBottom: brandSpacing.space[4],
  },

  // Layout spacing
  sectionStyle: {
    padding: brandSpacing.component.sectionPadding.lg,
    margin: brandSpacing.component.sectionMargin.lg,
  }
}

// Example 4: Using pre-defined component styles
export const exampleComponentUsage = {
  // Button variants
  primaryButton: brandComponents.buttons.primary,
  secondaryButton: brandComponents.buttons.secondary,
  
  // Card variants  
  defaultCard: brandComponents.cards.default,
  highlightCard: brandComponents.cards.highlight,
  
  // Text styles
  heading: brandComponents.text.heading,
  body: brandComponents.text.body,
}

// Example React Component Implementation
export const ExampleBrandedComponent = () => {
  return (
    <div style={{
      backgroundColor: brand.colors.background,
      padding: brand.spacing.lg,
      borderRadius: brand.radius.lg,
    }}>
      <h2 style={{
        ...brandTypography.styles.h2,
        color: brand.colors.text,
        marginBottom: brand.spacing.md,
      }}>
        Bitcoin Holding Features
      </h2>
      
      <p style={{
        ...brandTypography.styles.body,
        color: brand.colors.gray,
        marginBottom: brand.spacing.lg,
      }}>
        Experience the future of digital currency with our secure and innovative platform.
      </p>
      
      <button style={{
        ...brandComponents.buttons.primary,
        boxShadow: brand.shadows.md,
      }}>
        Get Started Today
      </button>
    </div>
  )
}
