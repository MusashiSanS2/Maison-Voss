'use client'

import { useState } from 'react'
import { AnimatedSection } from '@/components/animated-section'
import { AnimatedLine } from '@/components/animated-line'
import { ProductCard } from '@/components/product-card'
import { ProductModal } from '@/components/product-modal'
import { products, type Product } from '@/lib/products'

type Category = 'todos' | 'ternos' | 'camisas' | 'acessorios'

const categories: { value: Category; label: string }[] = [
  { value: 'todos', label: 'TODOS' },
  { value: 'ternos', label: 'TERNOS' },
  { value: 'camisas', label: 'CAMISAS' },
  { value: 'acessorios', label: 'ACESSÓRIOS' },
]

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('todos')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filteredProducts = selectedCategory === 'todos'
    ? products
    : products.filter((p) => p.category === selectedCategory)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h1 className="font-serif text-4xl lg:text-6xl text-[#e8e4dc] tracking-wide text-center">
              A Coleção
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-6 font-sans text-xs tracking-[0.15em] text-[#6b6b6b] uppercase text-center">
              Peças que transcendem o tempo
            </p>
          </AnimatedSection>

          <AnimatedLine className="mt-12 max-w-xs mx-auto" color="#c9b99a" delay={0.4} />
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 lg:px-12 border-y border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex flex-wrap justify-center gap-6 lg:gap-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className="relative group"
              >
                <span className={`font-sans text-xs tracking-[0.15em] transition-colors duration-300 ${
                  selectedCategory === cat.value 
                    ? 'text-[#e8e4dc]' 
                    : 'text-[#6b6b6b] hover:text-[#a8a8a8]'
                }`}>
                  {cat.label}
                </span>
                <span className={`absolute -bottom-1 left-0 h-px bg-[#c9b99a] transition-all duration-500 ${
                  selectedCategory === cat.value ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={setSelectedProduct}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <AnimatedSection>
              <p className="text-center font-sans text-sm text-[#6b6b6b]">
                Nenhuma peça encontrada nesta categoria.
              </p>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  )
}
