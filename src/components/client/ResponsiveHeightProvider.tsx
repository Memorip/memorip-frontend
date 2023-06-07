'use client'

import { useEffect } from 'react'

interface Props {
  children: React.ReactNode
}

const ResponsiveHeightProvider = ({ children }: Props) => {
  useEffect(() => {
    function setScreenSize() {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
      window.addEventListener('resize', setScreenSize)
    }

    setScreenSize()
  })

  return <>{children}</>
}

export default ResponsiveHeightProvider
