# Bitcoin Chain Color System

A comprehensive color management system for Bitcoin chain variants with consistent theming, accessibility, and developer experience.

## Overview

The Bitcoin Chain Color System provides:

- **Centralized Color Management**: All colors defined in one place
- **Chain-Specific Theming**: Unique color palettes for each Bitcoin chain
- **Consistent API**: Unified functions for accessing colors across chains
- **Tailwind Integration**: Full Tailwind CSS color palette support
- **Dark Mode Support**: Complete light/dark theme compatibility
- **Component Utilities**: Ready-to-use classes for common UI patterns

## Supported Chains

| Chain       | Symbol | Color  | Status      |
| ----------- | ------ | ------ | ----------- |
| Bitcoin1USD | B1USD  | Green  | Active      |
| 1Bitcoin1   | 1B1    | Blue   | Active      |
| BitcoinG1   | BG1    | Purple | Active      |
| BTC1Ai      | BTC1AI | Cyan   | Beta        |
| BTC Quantum | BTCQ   | Orange | Development |

## Installation & Setup

### 1. Import the Color System

```typescript
import { getChainColorSystem, getChainTheme, getAllChains } from '@/lib/colors'
```

### 2. Basic Usage

```typescript
// Get complete color system for a chain
const bitcoinUSDColors = getChainColorSystem('bitcoin1usd')

// Use in components
<div className={bitcoinUSDColors.getCard()}>
  <h2 className={bitcoinUSDColors.getText('primary')}>
    Bitcoin1USD
  </h2>
  <button className={bitcoinUSDColors.getButton()}>
    Learn More
  </button>
</div>
```

## API Reference

### Core Functions

#### `getChainColorSystem(chainId: string)`

Returns a complete color system object for a specific chain.

**Returns:**

- `palette`: Full color palette (50-950 shades)
- `info`: Chain metadata (name, symbol, description, etc.)
- `classes`: Generated Tailwind classes
- Utility functions for backgrounds, text, borders, etc.

**Example:**

```typescript
const system = getChainColorSystem('bitcoin1usd')

// Access palette
system.palette.colors[500] // Main brand color
system.palette.baseColor // 'green'
system.palette.name // 'Bitcoin1USD'

// Access metadata
system.info.fullName // 'Bitcoin1USD Network'
system.info.symbol // 'B1USD'
system.info.status // 'Active'

// Use utility functions
system.getBackground('light') // 'bg-green-50'
system.getText('primary') // 'text-green-700'
system.getButton() // 'bg-green-500 hover:bg-green-600...'
```

#### `getChainTheme(chainId: string, variant?: 'light' | 'dark' | 'default')`

Returns a theme object optimized for specific use cases.

**Example:**

```typescript
const lightTheme = getChainTheme('bitcoing1', 'light')
const darkTheme = getChainTheme('bitcoing1', 'dark')

<div className={lightTheme.background}>
  <p className={lightTheme.text}>Content</p>
  <button className={lightTheme.button}>Action</button>
</div>
```

#### `getAllChains()`

Returns color systems for all available chains.

**Example:**

```typescript
const allChains = getAllChains()

{allChains.map(chain => (
  <div key={chain.id} className={chain.getCard()}>
    <h3 className={chain.getText('primary')}>
      {chain.info.name}
    </h3>
  </div>
))}
```

### Utility Functions

#### Background Colors

```typescript
system.getBackground('light') // Subtle backgrounds, cards
system.getBackground('medium') // Section backgrounds
system.getBackground('strong') // Primary buttons, highlights
```

#### Text Colors

```typescript
system.getText('primary') // Headings, important text
system.getText('secondary') // Body text, descriptions
system.getText('muted') // Helper text, captions
```

#### Border Colors

```typescript
system.getBorder('light') // Card borders, dividers
system.getBorder('medium') // Form inputs, containers
system.getBorder('strong') // Active states, focus rings
```

#### Interactive Elements

```typescript
system.getCard() // Complete card styling
system.getBadge() // Status badges, tags
system.getButton() // Primary button styling
system.getGradient() // Background gradients
```

#### Status Indicators

```typescript
system.getStatus('active') // Green status
system.getStatus('beta') // Blue status
system.getStatus('development') // Orange status
system.getStatus('inactive') // Gray status
```

## Component Examples

### Chain Card Component

```typescript
const ChainCard = ({ chainId }: { chainId: string }) => {
  const system = getChainColorSystem(chainId)

  return (
    <div className={`${system.getCard()} p-6 rounded-xl`}>
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-lg ${system.getGradient()}
                        flex items-center justify-center text-white font-bold`}>
          {system.info.icon}
        </div>
        <div>
          <h3 className={`font-bold ${system.getText('primary')}`}>
            {system.info.name}
          </h3>
          <p className={`text-sm ${system.getText('secondary')}`}>
            {system.info.symbol}
          </p>
        </div>
      </div>

      <p className={`text-sm ${system.getText('muted')} mb-4`}>
        {system.info.description}
      </p>

      <div className="flex gap-3">
        <button className={system.getButton()}>
          Explore
        </button>
        <div className={system.getBadge()}>
          {system.info.status}
        </div>
      </div>
    </div>
  )
}
```

### Chain Navigation

```typescript
const ChainNavigation = () => {
  const chains = getAllChains()

  return (
    <nav className="flex gap-4">
      {chains.map(chain => (
        <Link
          key={chain.id}
          href={`/chain/${chain.id}`}
          className={`px-4 py-2 rounded-lg ${chain.getBackground('light')}
                     ${chain.getText('primary')} hover:${chain.getBackground('medium')}`}
        >
          {chain.info.name}
        </Link>
      ))}
    </nav>
  )
}
```

### Chain Stats Dashboard

```typescript
const ChainStats = ({ chainId }: { chainId: string }) => {
  const system = getChainColorSystem(chainId)

  return (
    <div className={`${system.getBackground('light')} p-6 rounded-xl
                    border ${system.getBorder('light')}`}>
      <h4 className={`font-bold ${system.getText('primary')} mb-4`}>
        {system.info.name} Stats
      </h4>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className={`text-sm ${system.getText('secondary')}`}>
            Market Cap
          </span>
          <p className={`font-semibold ${system.getText('primary')}`}>
            $2.1B
          </p>
        </div>
        <div>
          <span className={`text-sm ${system.getText('secondary')}`}>
            Volume 24h
          </span>
          <p className={`font-semibold ${system.getText('primary')}`}>
            $156M
          </p>
        </div>
      </div>

      <div className={`${system.getBadge()} mt-4 inline-block`}>
        Live Data
      </div>
    </div>
  )
}
```

## Tailwind Configuration

The system automatically extends your Tailwind config with chain-specific color palettes:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'chain-green': {
          /* Bitcoin1USD colors */
        },
        'chain-blue': {
          /* 1Bitcoin1 colors */
        },
        'chain-purple': {
          /* BitcoinG1 colors */
        },
        'chain-cyan': {
          /* BTC1Ai colors */
        },
        'chain-orange': {
          /* BTC Quantum colors */
        },
      },
    },
  },
}
```

## CSS Variables

For dynamic theming, the system provides CSS custom properties:

```css
:root {
  --chain-primary: /* Chain's main color */;
  --chain-secondary: /* Chain's secondary color */;
  --chain-accent: /* Chain's accent color */;
  --chain-bg-light: /* Light background */;
  --chain-bg-medium: /* Medium background */;
  --chain-text-primary: /* Primary text */;
  --chain-text-secondary: /* Secondary text */;
}
```

**Usage:**

```typescript
const themeProvider = getChainThemeProvider('bitcoin1usd')
// Apply themeProvider.cssVariables to your root element
```

## Advanced Usage

### Custom Color Variants

```typescript
const customVariant = {
  ...getChainColorSystem('bitcoing1'),
  customButton: 'bg-purple-gradient text-white shadow-lg hover:shadow-xl',
  customCard: 'bg-purple-50 border-purple-200 shadow-purple-100',
}
```

### Responsive Theming

```typescript
const ResponsiveChainCard = ({ chainId }: { chainId: string }) => {
  const system = getChainColorSystem(chainId)

  return (
    <div className={`
      ${system.getCard()}
      p-4 md:p-6
      ${system.getBackground('light')}
      md:${system.getBackground('medium')}
      rounded-lg md:rounded-xl
    `}>
      {/* Content */}
    </div>
  )
}
```

### Conditional Chain Styling

```typescript
const ConditionalStyling = ({ chainId, isActive }: Props) => {
  const system = getChainColorSystem(chainId)

  const styles = isActive
    ? `${system.getBackground('strong')} text-white`
    : `${system.getBackground('light')} ${system.getText('primary')}`

  return <div className={styles}>Content</div>
}
```

## Best Practices

### 1. **Consistent Usage**

Always use the color system functions instead of hardcoded Tailwind classes:

```typescript
// ✅ Good
const system = getChainColorSystem(chainId)
<div className={system.getBackground('light')}>

// ❌ Avoid
<div className="bg-green-50">
```

### 2. **Semantic Color Selection**

Choose colors based on their semantic meaning:

```typescript
// ✅ Good - semantic usage
<h1 className={system.getText('primary')}>    // Important heading
<p className={system.getText('secondary')}>   // Body text
<span className={system.getText('muted')}>    // Helper text

// ❌ Avoid - non-semantic usage
<h1 className={system.getText('muted')}>      // Important heading with muted color
```

### 3. **Theme Variants**

Use appropriate theme variants for different contexts:

```typescript
// Light sections
const lightTheme = getChainTheme(chainId, 'light')

// Dark sections
const darkTheme = getChainTheme(chainId, 'dark')

// Default/mixed sections
const defaultTheme = getChainTheme(chainId, 'default')
```

### 4. **Performance Optimization**

Cache color systems when used multiple times:

```typescript
const chainSystems = useMemo(
  () => chainIds.map(id => getChainColorSystem(id)),
  [chainIds]
)
```

## Migration Guide

### From Hard-coded Colors

```typescript
// Before
<div className="bg-green-100 border border-green-200 text-green-800">
  Bitcoin1USD Card
</div>

// After
const system = getChainColorSystem('bitcoin1usd')
<div className={`${system.getBackground('light')}
                border ${system.getBorder('light')}
                ${system.getText('primary')}`}>
  Bitcoin1USD Card
</div>
```

### From Basic Chain Colors

```typescript
// Before
const chainColors = getChainColors(chainId)
<div className={chainColors.badge}>

// After
const system = getChainColorSystem(chainId)
<div className={system.getBadge()}>
```

## Troubleshooting

### Common Issues

1. **Missing Colors in Build**
   - Ensure all chain colors are included in Tailwind's safelist
   - Use dynamic class generation carefully

2. **TypeScript Errors**
   - Import types correctly: `import type { ChainColorSystem } from '@/lib/colors'`
   - Use proper chain IDs as defined in the system

3. **Inconsistent Theming**
   - Always use the same chain color system throughout a component tree
   - Avoid mixing different chain color systems in the same context

### Debug Utilities

```typescript
// Log available chains
console.log(getAllChains().map(c => c.info))

// Inspect chain system
const system = getChainColorSystem('bitcoin1usd')
console.log('System:', system)
console.log('Palette:', system.palette)
console.log('Classes:', system.classes)
```

## Contributing

When adding new chains or extending the color system:

1. **Add Chain Palette**: Update `chainPalettes` in `chainColors.ts`
2. **Add Chain Info**: Update `chainInfo` with metadata
3. **Update Tailwind**: Add new colors to `tailwind.config.js`
4. **Test Integration**: Verify all utility functions work
5. **Update Documentation**: Add examples and usage notes

---

_For questions or issues with the chain color system, please refer to the development team or create an issue in the project repository._
