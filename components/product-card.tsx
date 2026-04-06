'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
  onSelect: (product: Product) => void
  className?: string
}

export function ProductCard({ product, onSelect, className = '' }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      className={`group ${className}`}
      data-cursor="expand"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(product)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#141414]">
        <motion.div
          animate={{ scale: isHovered ? 1.04 : 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="mt-6 space-y-2">
        <h3 className="font-serif text-xl lg:text-2xl text-[#e8e4dc] tracking-wide">
          {product.name}
        </h3>
        
        {/* Animated Line */}
        <div className="overflow-hidden h-px">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-full bg-[#c9b99a] origin-left"
          />
        </div>
        
        <p className="font-display italic text-lg text-[#a8a8a8]">
          {product.price}
        </p>
      </div>
    </motion.article>
  )
}
