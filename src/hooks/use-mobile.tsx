
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Set default to true for initial mobile-friendly render
  // This will prevent hydration issues and make initial loading faster
  const [isMobile, setIsMobile] = React.useState<boolean>(true)

  React.useEffect(() => {
    // Check just once on mount to avoid constant re-renders
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Run once immediately
    checkMobile()
    
    // Then set up listener for resize events
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    mql.addEventListener("change", checkMobile)
    
    return () => mql.removeEventListener("change", checkMobile)
  }, [])

  return isMobile
}
