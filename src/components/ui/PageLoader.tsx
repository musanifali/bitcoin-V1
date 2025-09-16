'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import UnifiedLoader from './UnifiedLoader'

interface PageLoaderProps {
  message?: string
  duration?: number
}

const PageLoader = ({ message = 'Loading...', duration = 1500 }: PageLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  return (
    <AnimatePresence>
      {isLoading && (
        <UnifiedLoader
          type="fullscreen"
          message={message}
          size="md"
        />
      )}
    </AnimatePresence>
  )
}

export default PageLoader
