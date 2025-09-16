/**
 * Bitcoin Holding SVG Logos and Icons
 * Consistent brand assets as React components
 */

import React from 'react'

// Bitcoin Holding Logo Icon
export const BitcoinHoldingIcon: React.FC<{ size?: number; className?: string }> = ({ 
  size = 24, 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="12" fill="#f57c00" />
    <path 
      d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm2.5 9.5h-1.5v1.5h-1v-1.5h-1.5v-1h1.5v-3h-1.5v-1h1.5v-1.5h1v1.5h1.5v1h-1.5v3h1.5v1z"
      fill="#ffffff"
    />
  </svg>
)

// Bitcoin Symbol
export const BitcoinSymbol: React.FC<{ size?: number; className?: string }> = ({ 
  size = 24, 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.5 17.5h-2v1.5h-2v-1.5H8v-2h1.5V7H8V5h1.5V3.5h2V5h2v2h-1.5v8.5H15v2zm-2-2V7h1.5v8.5h-1.5z"/>
  </svg>
)

// Loading Dots (for loaders) - DEPRECATED: Use UnifiedLoader instead
export const LoadingDots: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex space-x-1 ${className}`}>
    <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
  </div>
)

// Arrow Right Icon
export const ArrowRightIcon: React.FC<{ size?: number; className?: string }> = ({ 
  size = 16, 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M6 3L11 8L6 13" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
)

// Check Icon
export const CheckIcon: React.FC<{ size?: number; className?: string }> = ({ 
  size = 16, 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M2 8L6 12L14 4" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
)

// Star Icon
export const StarIcon: React.FC<{ size?: number; className?: string }> = ({ 
  size = 16, 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 16 16" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M8 .5L9.5 5.5H15L11 8.5L12.5 13.5L8 10.5L3.5 13.5L5 8.5L1 5.5H6.5L8 .5Z"/>
  </svg>
)
