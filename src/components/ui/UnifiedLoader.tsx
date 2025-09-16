/**
 * Unified Loader Component
 * Single consistent design used across the entire application
 */

'use client'

import { motion } from 'framer-motion'

interface UnifiedLoaderProps {
  /** Type of loader display */
  type?: 'fullscreen' | 'overlay' | 'inline' | 'minimal'
  /** Custom message to display */
  message?: string
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Show loading text */
  showText?: boolean
  /** Custom className */
  className?: string
}

const UnifiedLoader = ({
  type = 'fullscreen',
  message = 'Loading...',
  size = 'md',
  showText = true,
  className = ''
}: UnifiedLoaderProps) => {
  
  // Dot sizes based on size prop
  const dotSizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3', 
    lg: 'w-4 h-4'
  }
  
  // Text sizes based on size prop
  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }
  
  // Spacing based on size prop
  const spacings = {
    sm: 'space-x-1',
    md: 'space-x-2',
    lg: 'space-x-3'
  }

  // Core loader dots component
  const LoaderDots = () => (
    <div className={`flex items-center ${spacings[size]}`}>
      <motion.div
        className={`${dotSizes[size]} bg-bitcoin-500 rounded-full`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1]
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className={`${dotSizes[size]} bg-bitcoin-500 rounded-full`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1]
        }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className={`${dotSizes[size]} bg-bitcoin-500 rounded-full`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1]
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )

  // Content component
  const LoaderContent = () => (
    <div className="flex flex-col items-center gap-3">
      <LoaderDots />
      {showText && (
        <motion.p 
          className={`font-medium text-gray-700 dark:text-gray-300 ${textSizes[size]}`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {message}
        </motion.p>
      )}
    </div>
  )

  // Render based on type
  switch (type) {
    case 'fullscreen':
      return (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`app-loader fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-gray-900 ${className}`}
        >
          <LoaderContent />
        </motion.div>
      )
      
    case 'overlay':
      return (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`app-loader fixed inset-0 z-[9999] flex items-center justify-center bg-black/20 backdrop-blur-sm ${className}`}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <LoaderContent />
          </div>
        </motion.div>
      )
      
    case 'inline':
      return (
        <div className={`flex items-center justify-center p-4 ${className}`}>
          <LoaderContent />
        </div>
      )
      
    case 'minimal':
      return (
        <div className={`flex items-center justify-center ${className}`}>
          <LoaderDots />
        </div>
      )
      
    default:
      return null
  }
}

export default UnifiedLoader

// Export specific loader variants for convenience
export const FullscreenLoader = (props: Omit<UnifiedLoaderProps, 'type'>) => (
  <UnifiedLoader type="fullscreen" {...props} />
)

export const OverlayLoader = (props: Omit<UnifiedLoaderProps, 'type'>) => (
  <UnifiedLoader type="overlay" {...props} />
)

export const InlineLoader = (props: Omit<UnifiedLoaderProps, 'type'>) => (
  <UnifiedLoader type="inline" {...props} />
)

export const MinimalLoader = (props: Omit<UnifiedLoaderProps, 'type'>) => (
  <UnifiedLoader type="minimal" {...props} />
)
