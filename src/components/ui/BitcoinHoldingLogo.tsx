import React from 'react'

interface BitcoinHoldingLogoProps {
  className?: string
  width?: number
  height?: number
}

const BitcoinHoldingLogo: React.FC<BitcoinHoldingLogoProps> = ({ 
  className = "h-12 w-auto", 
  width, 
  height 
}) => {
  return (
    <div 
      className="logo-container" 
      style={{ 
        fontFamily: 'initial', 
        fontSize: 'initial', 
        fontWeight: 'initial',
        letterSpacing: 'initial',
        textTransform: 'initial'
      }}
    >
      <img 
        src="/en/btc holding logo.png" 
        alt="Bitcoin Holding" 
        className={className}
        width={width}
        height={height}
        style={{ 
          fontFamily: 'initial',
          fontSize: 'initial', 
          fontWeight: 'initial',
          letterSpacing: 'initial',
          textTransform: 'initial',
          display: 'block'
        }}
      />
    </div>
  )
}

export default BitcoinHoldingLogo
