'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
import UnifiedLoader from './UnifiedLoader'

const RouteLoader = () => {
  const [isLoading, setIsLoading] = useState(true) // Start with true for initial load
  const [loadingType, setLoadingType] = useState<'initial' | 'navigation'>('initial')
  const pathname = usePathname()
  const previousPathname = useRef<string>('')
  const hasInitialized = useRef(false)

  // Handle initial page load
  useEffect(() => {
    if (!hasInitialized.current) {
      // Initial page load
      const timer = setTimeout(() => {
        setIsLoading(false)
        hasInitialized.current = true
        previousPathname.current = pathname
      }, 1500) // 1.5 seconds for initial load

      return () => clearTimeout(timer)
    }
  }, [])

  // Handle route changes after initialization
  useEffect(() => {
    if (!hasInitialized.current || !previousPathname.current) return

    // Only trigger for actual route changes
    if (previousPathname.current !== pathname) {
      setLoadingType('navigation')
      setIsLoading(true)
      
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 600) // Shorter duration for navigation

      previousPathname.current = pathname
      return () => clearTimeout(timer)
    }
  }, [pathname])

  // Handle navigation clicks (only after initialization)
  useEffect(() => {
    if (!hasInitialized.current) return

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      // Check if it's a Next.js Link or regular link
      if (link && link.href) {
        try {
          const url = new URL(link.href)
          const currentUrl = new URL(window.location.href)
          
          // Only show loader for internal navigation that changes the pathname
          if (url.origin === currentUrl.origin && 
              url.pathname !== currentUrl.pathname && 
              !link.target && 
              !url.href.startsWith('#')) {
            setLoadingType('navigation')
            setIsLoading(true)
          }
        } catch (error) {
          // Invalid URL, ignore
        }
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <UnifiedLoader
          type={loadingType === 'initial' ? 'fullscreen' : 'overlay'}
          size={loadingType === 'initial' ? 'md' : 'sm'}
          message={loadingType === 'initial' ? 'Loading...' : 'Navigating...'}
        />
      )}
    </AnimatePresence>
  )
}

export default RouteLoader
