'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
import UnifiedLoader from './UnifiedLoader'

const AppLoader = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingType, setLoadingType] = useState<'initial' | 'navigation'>('initial')
  const pathname = usePathname()
  const isInitialLoad = useRef(true)
  const previousPath = useRef('')

  // Handle initial page load
  useEffect(() => {
    if (isInitialLoad.current) {
      previousPath.current = pathname
      
      // Wait for the page to be fully loaded
      const handleInitialLoad = () => {
        // Minimum loading time for better UX
        const minTime = 1200
        const startTime = Date.now()
        
        const completeLoading = () => {
          const elapsed = Date.now() - startTime
          const remaining = Math.max(0, minTime - elapsed)
          
          setTimeout(() => {
            setIsLoading(false)
            isInitialLoad.current = false
          }, remaining)
        }

        if (document.readyState === 'complete') {
          completeLoading()
        } else {
          window.addEventListener('load', completeLoading, { once: true })
          // Fallback
          setTimeout(completeLoading, 3000)
        }
      }

      handleInitialLoad()
    }
  }, [pathname])

  // Handle route changes
  useEffect(() => {
    if (isInitialLoad.current) return

    if (previousPath.current !== pathname) {
      setLoadingType('navigation')
      setIsLoading(true)
      
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 600)

      previousPath.current = pathname
      return () => clearTimeout(timer)
    }
  }, [pathname])

  // Handle navigation clicks
  useEffect(() => {
    if (isInitialLoad.current) return

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href]') as HTMLAnchorElement
      
      if (!link || e.ctrlKey || e.metaKey || link.target) return
      
      const href = link.getAttribute('href')
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return
      
      try {
        const url = new URL(href, window.location.origin)
        if (url.origin === window.location.origin && url.pathname !== window.location.pathname) {
          setLoadingType('navigation')
          setIsLoading(true)
        }
      } catch {
        // Invalid URL, ignore
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <UnifiedLoader
          type={loadingType === 'initial' ? 'fullscreen' : 'overlay'}
          size={loadingType === 'initial' ? 'lg' : 'md'}
          message={loadingType === 'initial' ? 'Bitcoin Holding' : 'Loading...'}
        />
      )}
    </AnimatePresence>
  )
}

export default AppLoader
