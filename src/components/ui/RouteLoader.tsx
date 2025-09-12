'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const RouteLoader = () => {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const previousPathname = useRef<string>('')

  // Handle route changes
  useEffect(() => {
    // If this is the first load, just store the pathname
    if (!previousPathname.current) {
      previousPathname.current = pathname
      return
    }

    // If pathname changed, show loader
    if (previousPathname.current !== pathname) {
      setIsLoading(true)
      
      // Hide loader after a delay
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 800)

      // Update previous pathname
      previousPathname.current = pathname

      return () => clearTimeout(timer)
    }
  }, [pathname])

  // Handle navigation clicks
  useEffect(() => {
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
        <>
          {/* Top Progress Bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 1, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-bitcoin-500 via-orange-500 to-bitcoin-600 z-[9999] origin-left"
          />
          
          {/* Center Loading Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998] flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-lg px-6 py-4 shadow-xl border border-gray-200"
            >
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-bitcoin-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-bitcoin-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-bitcoin-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-700">Loading...</span>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default RouteLoader
