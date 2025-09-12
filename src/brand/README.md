# Bitcoin Holding Brand Kit 🎨

A comprehensive brand system for consistent design across the Bitcoin Holding platform.

## 📂 Structure

```
src/brand/
├── index.ts          # Main export file
├── colors.ts         # Color palette and gradients
├── typography.ts     # Font system and text styles
├── spacing.ts        # Spacing, sizing, and layout
├── components.ts     # Pre-defined component styles
├── examples.tsx      # Usage examples
└── assets/
    └── icons.tsx     # Brand icons and SVG components
```

## 🚀 Quick Start

### 1. Import the brand system:

```tsx
import { brand, brandColors, brandTypography } from '@/brand'
```

### 2. Use in your components:

```tsx
const MyComponent = () => (
  <div style={{
    backgroundColor: brand.colors.background,
    color: brand.colors.text,
    padding: brand.spacing.lg,
    borderRadius: brand.radius.md,
  }}>
    <h1 style={brandTypography.styles.h1}>
      Welcome to Bitcoin Holding
    </h1>
  </div>
)
```

## 🎨 Color System

### Primary Colors
- **Primary**: `brand.colors.primary` (#f57c00)
- **Secondary**: `brand.colors.secondary` (#ff9800)
- **Background**: `brand.colors.background` (#fffdf1)

### Usage Examples
```tsx
// Quick access
backgroundColor: brand.colors.primary

// Full palette access
backgroundColor: brandColors.bitcoin[500]

// Gradients
background: brandColors.gradients.primary
```

## 📝 Typography System

### Font Families
- **Display**: Inter, SF Pro Display (for headings)
- **Body**: Inter (for body text)
- **Mono**: SF Mono, Monaco (for code)

### Pre-defined Styles
```tsx
// Hero text
style={brandTypography.styles.heroTitle}

// Section headings  
style={brandTypography.styles.h2}

// Body text
style={brandTypography.styles.body}
```

## 📏 Spacing System

### Quick Spacing
```tsx
padding: brand.spacing.md     // 1.5rem (24px)
margin: brand.spacing.lg      // 2rem (32px)
```

### Component Spacing
```tsx
padding: brandSpacing.component.buttonPadding.md
margin: brandSpacing.component.sectionMargin.lg
```

## 🧩 Component Variants

### Pre-defined Button Styles
```tsx
// Primary button
style={brandComponents.buttons.primary}

// Secondary button
style={brandComponents.buttons.secondary}

// Ghost button
style={brandComponents.buttons.ghost}
```

### Card Variants
```tsx
// Default card
style={brandComponents.cards.default}

// Elevated card
style={brandComponents.cards.elevated}

// Highlight card
style={brandComponents.cards.highlight}
```

## 🎯 Brand Icons

### Import and Use Icons
```tsx
import { BitcoinHoldingIcon, LoadingDots, ArrowRightIcon } from '@/brand/assets/icons'

<BitcoinHoldingIcon size={32} className="text-bitcoin-500" />
<LoadingDots className="text-bitcoin-500" />
<ArrowRightIcon size={16} />
```

## 📖 Usage Guidelines

### ✅ Do's
- Use the brand color palette consistently
- Follow the typography hierarchy
- Use consistent spacing based on the 4px grid
- Use pre-defined component variants when possible
- Import from the main brand index file

### ❌ Don'ts
- Don't use arbitrary colors outside the palette
- Don't mix different font families
- Don't use inconsistent spacing
- Don't create custom variants without following brand guidelines

## 🔧 Integration with Tailwind CSS

Update your `tailwind.config.js` to use brand colors:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        bitcoin: {
          50: '#fff8e1',
          100: '#ffecb3',
          // ... rest of bitcoin colors
          500: '#f57c00',
          600: '#fb8500',
          // ...
        }
      },
      fontFamily: {
        'display': ['Inter', 'SF Pro Display', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      }
    }
  }
}
```

## 📱 Responsive Usage

The brand kit works seamlessly with responsive design:

```tsx
<div style={{
  padding: brand.spacing.sm,      // Mobile
  '@media (min-width: 768px)': {
    padding: brand.spacing.lg,    // Desktop
  }
}}>
```

## 🚀 Implementation Examples

### Hero Section with Brand Kit
```tsx
import { brand, brandTypography, brandColors } from '@/brand'

const Hero = () => (
  <section style={{ backgroundColor: brand.colors.background }}>
    <h1 style={brandTypography.styles.heroTitle}>
      Welcome to Bitcoin Holding
    </h1>
    <button style={{
      ...brandComponents.buttons.primary,
      boxShadow: brand.shadows.lg
    }}>
      Get Started
    </button>
  </section>
)
```

### Card Component with Brand Kit
```tsx
const FeatureCard = ({ title, description }) => (
  <div style={brandComponents.cards.elevated}>
    <h3 style={brandComponents.text.heading}>{title}</h3>
    <p style={brandComponents.text.body}>{description}</p>
  </div>
)
```

## 🔄 Future Updates

The brand kit is designed to be:
- **Scalable**: Easy to add new colors, typography, or components
- **Maintainable**: Centralized system for easy updates
- **Flexible**: Can be extended without breaking existing implementations
- **Type-safe**: Full TypeScript support for better development experience

## 📞 Support

For brand kit questions or requests for new components, please:
1. Check the examples in `src/brand/examples.tsx`
2. Review the brand guidelines in `src/brand/index.ts`
3. Submit requests for new brand components or variants
