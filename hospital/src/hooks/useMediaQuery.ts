import { useEffect, useState } from 'react'

const MOBILE_VIEW = '(max-width: 1200px)'

export const useMediaQuery = (maxWidth: string) => {
  const mql = window.matchMedia(maxWidth)
  const [isMatch, setIsMatch] = useState(mql.matches)

  useEffect(() => {
    const resizeHandler = (e: MediaQueryListEvent) => setIsMatch(e.matches)

    mql.addEventListener('change', resizeHandler)

    return () => mql.removeEventListener('change', resizeHandler)
  }, [])

  return isMatch
}

export const useMobile = () => useMediaQuery(MOBILE_VIEW)
