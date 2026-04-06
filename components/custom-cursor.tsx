'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type CursorState = 'default' | 'link' | 'product' | 'map'

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [cursorState, setCursorState] = useState<CursorState>('default')

  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  // Dot follows closely
  const dotX = useSpring(mouseX, { damping: 28, stiffness: 350, mass: 0.4 })
  const dotY = useSpring(mouseY, { damping: 28, stiffness: 350, mass: 0.4 })

  // Ring follows with more lag (luxurious feel)
  const ringX = useSpring(mouseX, { damping: 32, stiffness: 180, mass: 0.8 })
  const ringY = useSpring(mouseY, { damping: 32, stiffness: 180, mass: 0.8 })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', moveCursor)
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)
    document.documentElement.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [mouseX, mouseY])

  useEffect(() => {
    const onLinkEnter = () => setCursorState('link')
    const onLinkLeave = () => setCursorState('default')
    const onProductEnter = () => setCursorState('product')
    const onProductLeave = () => setCursorState('default')
    const onMapEnter = () => setCursorState('map')
    const onMapLeave = () => setCursorState('default')

    const bindElements = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.removeEventListener('mouseenter', onLinkEnter)
        el.removeEventListener('mouseleave', onLinkLeave)
        el.addEventListener('mouseenter', onLinkEnter)
        el.addEventListener('mouseleave', onLinkLeave)
      })
      document.querySelectorAll('[data-cursor="expand"]').forEach((el) => {
        el.removeEventListener('mouseenter', onProductEnter)
        el.removeEventListener('mouseleave', onProductLeave)
        el.addEventListener('mouseenter', onProductEnter)
        el.addEventListener('mouseleave', onProductLeave)
      })
      document.querySelectorAll('[data-cursor="map"]').forEach((el) => {
        el.removeEventListener('mouseenter', onMapEnter)
        el.removeEventListener('mouseleave', onMapLeave)
        el.addEventListener('mouseenter', onMapEnter)
        el.addEventListener('mouseleave', onMapLeave)
      })
    }

    bindElements()

    const observer = new MutationObserver(bindElements)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  // --- Per-state visual config ---
  // product: dark ring + dark dot for visibility on white/light fabrics
  // map: crosshair-style, white with high contrast for dark map background
  // link: gold ring expanded
  // default: gold ring small

  const isProduct = cursorState === 'product'
  const isMap = cursorState === 'map'
  const isLink = cursorState === 'link'

  const ringSize = isMap ? 40 : isProduct ? 52 : isLink ? 36 : 28
  const ringColor = isProduct ? '#1a1a1a' : isMap ? '#ffffff' : '#c9b99a'
  const ringOpacity = isMap ? 0.9 : isProduct ? 0.75 : isLink ? 0.5 : 0.35
  const ringBorderWidth = isMap ? 1.5 : 1

  const dotColor = isProduct ? '#0a0a0a' : isMap ? '#ffffff' : '#c9b99a'
  const dotSize = isProduct ? 6 : isMap ? 4 : 6
  const dotOpacity = isVisible ? (isProduct || isMap ? 1 : 0.9) : 0

  // Crosshair lines (only for map)
  const crosshairLength = 10
  const crosshairColor = '#ffffff'

  return (
    <div className="hidden md:block">
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          translateX: '-50%',
          translateY: '-50%',
          border: `${ringBorderWidth}px solid ${ringColor}`,
          opacity: isVisible ? ringOpacity : 0,
          backgroundColor: isProduct ? 'rgba(200,180,155,0.08)' : 'transparent',
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          opacity: isVisible ? ringOpacity : 0,
        }}
        transition={{
          width: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
          height: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
          opacity: { duration: 0.2 },
        }}
      />

      {/* Crosshair lines — only visible in map mode */}
      {isMap && (
        <>
          {/* Horizontal left */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            style={{
              x: dotX,
              y: dotY,
              translateX: `calc(-50% - ${crosshairLength + 4}px)`,
              translateY: '-50%',
              width: crosshairLength,
              height: 1,
              backgroundColor: crosshairColor,
              opacity: isVisible ? 0.85 : 0,
            }}
          />
          {/* Horizontal right */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            style={{
              x: dotX,
              y: dotY,
              translateX: `calc(-50% + 4px)`,
              translateY: '-50%',
              width: crosshairLength,
              height: 1,
              backgroundColor: crosshairColor,
              opacity: isVisible ? 0.85 : 0,
            }}
          />
          {/* Vertical top */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            style={{
              x: dotX,
              y: dotY,
              translateX: '-50%',
              translateY: `calc(-50% - ${crosshairLength + 4}px)`,
              width: 1,
              height: crosshairLength,
              backgroundColor: crosshairColor,
              opacity: isVisible ? 0.85 : 0,
            }}
          />
          {/* Vertical bottom */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            style={{
              x: dotX,
              y: dotY,
              translateX: '-50%',
              translateY: `calc(-50% + 4px)`,
              width: 1,
              height: crosshairLength,
              backgroundColor: crosshairColor,
              opacity: isVisible ? 0.85 : 0,
            }}
          />
        </>
      )}

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          width: dotSize,
          height: dotSize,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: dotColor,
          opacity: dotOpacity,
        }}
        animate={{
          width: dotSize,
          height: dotSize,
          opacity: dotOpacity,
        }}
        transition={{
          width: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
          height: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
          opacity: { duration: 0.2 },
        }}
      />
    </div>
  )
}
