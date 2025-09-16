# 🎨 Bitcoin Holding Color System

## Overview

This project uses a centralized color system to ensure brand consistency and maintainability across all components. **Hard-coded colors are not allowed** - all colors must use the centralized system.

## 🏗️ Architecture

### 1. **Brand Colors** (`/src/brand/colors.ts`)

```typescript
export const brandColors = {
  bitcoin: {
    50: '#fff8e1', // Lightest
    500: '#f57c00', // Main brand color
    900: '#bf360c', // Darkest
  },
}
```

### 2. **Tailwind Config** (`/tailwind.config.js`)

```javascript
colors: {
  bitcoin: {
    50: '#fff8e1',
    500: '#f57c00', // Main Bitcoin orange
    // ... full palette
  }
}
```

### 3. **Color Utilities** (`/src/lib/colors.ts`)

```typescript
export const colors = {
  primary: 'bg-bitcoin-500 hover:bg-bitcoin-600',
  primaryText: 'text-bitcoin-500',
  // ... semantic color names
}
```

### 4. **CSS Variables** (`/src/styles/globals.css`)

```css
:root {
  --bitcoin-500: #f57c00;
  --chain-bitcoin1usd: #10b981;
  /* ... all brand colors */
}
```

## 🎯 Usage Guidelines

### ✅ **CORRECT - Use Brand Colors**

```tsx
// Use Tailwind classes with brand colors
<div className="bg-bitcoin-500 text-white">
<div className="text-bitcoin-600 hover:text-bitcoin-700">

// Use utility functions
import { colors } from '@/lib/colors'
<Button className={colors.primary}>

// Use chain-specific colors
const chainColors = getChainColors('bitcoin1usd')
<div className={chainColors.gradient}>
```

### ❌ **WRONG - Hard-coded Colors**

```tsx
// Never use hard-coded colors
<div className="bg-orange-500">        // ❌ Hard-coded
<div className="text-#f57c00">         // ❌ Hex values
<div style={{color: 'orange'}}>        // ❌ Inline styles
```

## 🎨 Color Palette

### Primary Bitcoin Colors

- `bitcoin-50` to `bitcoin-900` - Main brand gradient
- `bitcoin-500` - Primary brand color (#f57c00)

### Chain-Specific Colors (with Dark Mode)

| Chain       | Background                           | Gradient                          | Text                                     | Dark Text |
| ----------- | ------------------------------------ | --------------------------------- | ---------------------------------------- | --------- |
| Bitcoin1USD | `bg-emerald-500 dark:bg-emerald-600` | `from-emerald-500 to-emerald-600` | `text-emerald-600 dark:text-emerald-400` |
| 1Bitcoin1   | `bg-blue-500 dark:bg-blue-600`       | `from-blue-500 to-indigo-600`     | `text-blue-600 dark:text-blue-400`       |
| BitcoinG1   | `bg-purple-500 dark:bg-purple-600`   | `from-purple-500 to-violet-600`   | `text-purple-600 dark:text-purple-400`   |
| BTC1Ai      | `bg-cyan-500 dark:bg-cyan-600`       | `from-cyan-500 to-teal-600`       | `text-cyan-600 dark:text-cyan-400`       |
| BTC Quantum | `bg-red-500 dark:bg-red-600`         | `from-orange-500 to-red-500`      | `text-red-600 dark:text-red-400`         |

### Light vs Dark Sections

#### Light Sections (Default)

- **Background**: `bg-white dark:bg-gray-900`
- **Text**: `text-gray-900 dark:text-white`
- **Cards**: `bg-white dark:bg-gray-800`

#### Dark Sections (NewsAlerts, Footer)

- **Background**: `bg-gray-900`
- **Text**: `text-white`
- **Cards**: `bg-gray-800 border-gray-700`
- **Accents**: `text-bitcoin-400`

### Semantic Colors (Status)

- **Light Sections**: `text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30`
- **Dark Sections**: `text-emerald-400 bg-emerald-950/30`

## 🛠️ Implementation

### Button Components

```tsx
// Updated button variants in /src/components/ui/button.tsx
variant: {
  default: "bg-bitcoin-500 text-white hover:bg-bitcoin-600",
  outline: "border border-bitcoin-300 hover:bg-bitcoin-50",
  ghost: "hover:bg-bitcoin-50 text-bitcoin-600"
}
```

### Chain Components

```tsx
// Use getChainColors utility
import { getChainColors } from '@/lib/colors'

const chainColors = getChainColors('bitcoin1usd')
<div className={chainColors.gradient}>
```

### Dark Section Components

```tsx
// For dark sections like NewsAlerts
import { getDarkSectionColors } from '@/lib/colors'

const darkColors = getDarkSectionColors()

// Use dark section colors
<section className="bg-gray-900">
  <div className={darkColors.elements.card}>
    <h2 className={darkColors.text.primary}>Title</h2>
    <p className={darkColors.text.secondary}>Content</p>
    <button className={darkColors.buttons.primary}>Action</button>
  </div>
</section>
```

## 📝 Migration Steps

1. **Identify Hard-coded Colors**

   ```bash
   # Search for hard-coded colors
   grep -r "bg-orange-500\|text-orange-500" src/
   ```

2. **Replace with Brand Colors**

   ```tsx
   // Before
   className = 'bg-orange-500'

   // After
   className = 'bg-bitcoin-500'
   ```

3. **Update Component Imports**
   ```tsx
   import { colors, getChainColors } from '@/lib/colors'
   ```

## 🔧 Utilities

### Color Utility Functions

```typescript
// Get chain-specific colors
const chainColors = getChainColors('bitcoin1usd')

// Pre-defined color combinations
const { primary, accent, background } = colors

// Status colors
const { success, warning, error } = colors.status
```

### CSS Custom Properties

```css
/* Available in all components */
var(--bitcoin-500)
var(--chain-bitcoin1usd)
```

## ✅ Best Practices

1. **Always use centralized colors** - Never hard-code color values
2. **Use semantic naming** - `primary` instead of `orange-500`
3. **Maintain accessibility** - Ensure proper contrast ratios
4. **Test across themes** - Colors should work in light/dark modes
5. **Document color usage** - Comment why specific colors are chosen

## 🚀 Benefits

- **Brand Consistency**: All colors follow brand guidelines
- **Easy Maintenance**: Change colors in one place
- **Accessibility**: Proper contrast ratios built-in
- **Type Safety**: TypeScript support for color variants
- **Performance**: Optimized CSS with Tailwind
- **Scalability**: Easy to add new color variants

## 📊 Color Audit Commands

```bash
# Find hard-coded orange colors
grep -r "orange-500\|orange-600" src/ --exclude-dir=node_modules

# Find hex color values
grep -r "#[0-9a-fA-F]\{6\}" src/ --exclude-dir=node_modules

# Find inline styles
grep -r "style={{.*color" src/ --exclude-dir=node_modules
```

---

**Remember**: The goal is brand consistency and maintainability. Every color should be traceable back to the centralized color system! 🎨✨
