import { useEffect, useState } from 'react'
import useStore from '../store/store'

const ScreenWidth = () => {
  const setUserScreen = useStore((state) => state.setUserScreen)
  // eslint-disable-next-line no-unused-vars
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640) 

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth
      setIsSmallScreen(newWidth <= 640)
      setUserScreen(newWidth <= 640)
    }

    // Initial check on mount
    handleResize()

    window.addEventListener('resize', handleResize)

    // remove on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setUserScreen])

  return null
}

export default ScreenWidth