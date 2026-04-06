'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import type { Product } from '@/lib/products'
import { AnimatedLine } from './animated-line'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden'
      setSelectedImage(0)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [product])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0a0a0a]/95 z-[100] cursor-pointer"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-4 lg:inset-12 bg-[#141414] z-[101] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center group"
              aria-label="Fechar"
            >
              <span className="absolute w-6 h-px bg-[#e8e4dc] rotate-45 transition-colors group-hover:bg-[#c9b99a]" />
              <span className="absolute w-6 h-px bg-[#e8e4dc] -rotate-45 transition-colors group-hover:bg-[#c9b99a]" />
            </button>

            <div className="grid lg:grid-cols-2 min-h-full">
              {/* Image Gallery */}
              <div className="relative bg-[#0a0a0a] p-6 lg:p-12">
                {/* Main Image */}
                <div className="relative aspect-[3/4] mb-4">
                  <Image
                    src={product.images?.[selectedImage] || product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Thumbnail Gallery */}
                {product.images && product.images.length > 1 && (
                  <div className="flex gap-3">
                    {product.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative w-16 h-20 overflow-hidden border transition-colors ${
                          selectedImage === index
                            ? 'border-[#c9b99a]'
                            : 'border-[#1e1e1e] hover:border-[#2e2e2e]'
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${product.name} - ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-6 lg:p-12 flex flex-col justify-center">
                <span className="font-sans text-xs tracking-[0.15em] text-[#6b6b6b] uppercase mb-4">
                  {product.category}
                </span>

                <h2 className="font-serif text-3xl lg:text-4xl text-[#e8e4dc] tracking-wide mb-4">
                  {product.name}
                </h2>

                <p className="font-display italic text-xl text-[#c9b99a] mb-8">
                  {product.price}
                </p>

                <AnimatedLine className="mb-8" color="#1e1e1e" />

                <div className="space-y-6 mb-12">
                  <p className="font-sans text-sm leading-relaxed text-[#a8a8a8]">
                    {product.description}
                  </p>

                  {product.materials && (
                    <div>
                      <h4 className="font-sans text-xs tracking-[0.15em] text-[#6b6b6b] uppercase mb-2">
                        Materiais
                      </h4>
                      <p className="font-display italic text-sm text-[#a8a8a8]">
                        {product.materials}
                      </p>
                    </div>
                  )}

                  {product.origin && (
                    <div>
                      <h4 className="font-sans text-xs tracking-[0.15em] text-[#6b6b6b] uppercase mb-2">
                        Origem do Tecido
                      </h4>
                      <p className="font-display italic text-sm text-[#a8a8a8]">
                        {product.origin}
                      </p>
                    </div>
                  )}
                </div>

                <button className="group inline-flex items-center gap-4 self-start">
                  <span className="font-sans text-xs tracking-[0.15em] text-[#e8e4dc] uppercase">
                    Solicitar Peça
                  </span>
                  <span className="w-12 h-px bg-[#c9b99a] transition-all duration-500 group-hover:w-20" />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
