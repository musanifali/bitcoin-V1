/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Bitcoin Brand Colors
        bitcoin: {
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#f57c00', // Main Bitcoin orange
          600: '#fb8500',
          700: '#ef6c00',
          800: '#e65100',
          900: '#bf360c',
        },
        brand: {
          primary: '#f57c00',
          secondary: '#ff9800',
          accent: '#ffa726',
        },
        // UI Colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        bitcoin: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Bitcoin orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        // Chain-specific color palettes
        'chain-green': {
          50: '#f0fdf4',
          100: '#dcfce7', 
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Bitcoin1USD green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        'chain-blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe', 
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // 1Bitcoin1 blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        'chain-purple': {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe', 
          400: '#c084fc',
          500: '#a855f7', // BitcoinG1 purple
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        'chain-cyan': {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4', // BTC1Ai cyan
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        'chain-orange': {
          50: '#fff7ed',
          100: '#ffedd5', 
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // BTC Quantum orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-up': 'fade-up 0.8s ease-out'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  safelist: [
    // Chain color variants for dynamic classes
    'bg-green-50', 'bg-green-100', 'bg-green-500', 'bg-green-600',
    'bg-blue-50', 'bg-blue-100', 'bg-blue-500', 'bg-blue-600', 
    'bg-purple-50', 'bg-purple-100', 'bg-purple-500', 'bg-purple-600',
    'bg-cyan-50', 'bg-cyan-100', 'bg-cyan-500', 'bg-cyan-600',
    'bg-orange-50', 'bg-orange-100', 'bg-orange-500', 'bg-orange-600',
    
    'text-green-700', 'text-green-600', 'text-green-500', 'text-green-400',
    'text-blue-700', 'text-blue-600', 'text-blue-500', 'text-blue-400',
    'text-purple-700', 'text-purple-600', 'text-purple-500', 'text-purple-400',  
    'text-cyan-700', 'text-cyan-600', 'text-cyan-500', 'text-cyan-400',
    'text-orange-700', 'text-orange-600', 'text-orange-500', 'text-orange-400',
    
    'border-green-200', 'border-green-300', 'border-green-500',
    'border-blue-200', 'border-blue-300', 'border-blue-500',
    'border-purple-200', 'border-purple-300', 'border-purple-500',
    'border-cyan-200', 'border-cyan-300', 'border-cyan-500',
    'border-orange-200', 'border-orange-300', 'border-orange-500',
    
    'hover:bg-green-50', 'hover:bg-green-600', 'hover:border-green-300',
    'hover:bg-blue-50', 'hover:bg-blue-600', 'hover:border-blue-300',
    'hover:bg-purple-50', 'hover:bg-purple-600', 'hover:border-purple-300', 
    'hover:bg-cyan-50', 'hover:bg-cyan-600', 'hover:border-cyan-300',
    'hover:bg-orange-50', 'hover:bg-orange-600', 'hover:border-orange-300',
  ],
  plugins: [require('tailwindcss-animate')],
}
