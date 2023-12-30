import React, {useEffect, useRef, useState} from 'react'

const WindowSizeTracker = ()=> {
  const windowSize = useRef({ width: window.innerWidth, height: window.innerHeight })
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateWindowDimensions = ()=> {
      const newWidth = window.innerWidth
      const newHeight = window.innerHeight

      setWindowDimensions({ width: newWidth, height: newHeight})
      windowSize.current ={ width: newWidth, height: newHeight}
    }

    window.addEventListener('resize', updateWindowDimensions)
    updateWindowDimensions()

    return()=> {
      window.removeEventListener('resize', updateWindowDimensions)
    }
  },[])

  return(
    <div>
      <p>Ширина окна: {windowDimensions.width}px</p>
      <p>Высота окна: {windowDimensions.height}px</p>
    </div>
  )
}

export default WindowSizeTracker;