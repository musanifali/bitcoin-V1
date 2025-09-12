/**
 * Bitcoin Holding Brand Colors
 * Centralized color palette for consistent branding
 */

export const brandColors = {
  // Primary Bitcoin Colors
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

  // Secondary Accent Colors  
  orange: {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
  },

  // Neutral Colors
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },

  // Background Colors
  background: {
    cream: '#fffdf1',
    white: '#ffffff',
    light: '#fafafa',
    dark: '#1a1a1a',
  },

  // Status Colors
  status: {
    success: '#4caf50',
    warning: '#ff9800',
    error: '#f44336',
    info: '#2196f3',
  },

  // Brand Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #f57c00 0%, #ff9800 100%)',
    secondary: 'linear-gradient(135deg, #ff9800 0%, #ffa726 100%)',
    warm: 'linear-gradient(135deg, #f57c00 0%, #ffb74d 100%)',
    subtle: 'linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)',
  }
} as const

export type BrandColor = typeof brandColors
