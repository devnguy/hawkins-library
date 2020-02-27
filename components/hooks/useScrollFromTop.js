import { useState, useEffect } from 'react'

/**
 * Hook returns true if currently at top of page.
 */
const useScrollFromTop = () => {
  const [isTop, setIsTop] = useState(true)

  // Add scroll event listener when component mounts.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setIsTop(false)
      } else {
        setIsTop(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    // Remove event listener (subscription) on unmount.
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isTop
}

export default useScrollFromTop
