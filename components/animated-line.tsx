'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedLineProps {
  className?: string
  color?: string
  delay?: number
}

export function AnimatedLine({ className = '', color = '#c9b99a', delay = 0 }: AnimatedLineProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
          delay,
        }}
        style={{ backgroundColor: color, originX: 0 }}
        className="h-px w-full"
      />
    </div>
  )
}
