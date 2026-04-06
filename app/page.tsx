'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '@/components/animated-section'
import { AnimatedText } from '@/components/animated-text'
import { AnimatedLine } from '@/components/animated-line'
import { ProductCard } from '@/components/product-card'
import { ProductModal } from '@/components/product-modal'
import { getFeaturedProducts, type Product } from '@/lib/products'

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const featuredProducts = getFeaturedProducts()

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatedText
            text="Maison Voss"
            as="h1"
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#e8e4dc] tracking-wide"
            staggerChildren={0.05}
          />
          
          <AnimatedSection delay={0.5}>
            <p className="mt-8 font-sans text-xs md:text-sm tracking-[0.2em] text-[#6b6b6b] uppercase">
              Alfaiataria Masculina Desde 1987
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <Link href="/store" className="inline-block mt-16 group">
              <span className="font-sans text-xs tracking-[0.15em] text-[#e8e4dc] uppercase">
                Ver Coleção
              </span>
              <span className="block mt-2 h-px bg-[#c9b99a] w-0 group-hover:w-full transition-all duration-500" />
            </Link>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <AnimatedSection delay={1.2} className="absolute bottom-12">
          <div className="flex flex-col items-center gap-2">
            <span className="font-sans text-[10px] tracking-[0.2em] text-[#6b6b6b] uppercase">
              Scroll
            </span>
            <div className="w-px h-12 bg-[#2e2e2e] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-[#c9b99a] animate-pulse" />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Featured Collection - Asymmetric Layout */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-6 mb-16">
              <AnimatedLine className="w-16" color="#c9b99a" />
              <h2 className="font-sans text-xs tracking-[0.2em] text-[#6b6b6b] uppercase">
                A Coleção
              </h2>
            </div>
          </AnimatedSection>

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Large Card */}
            <div className="lg:col-span-7">
              <ProductCard
                product={featuredProducts[0]}
                onSelect={setSelectedProduct}
              />
            </div>

            {/* Stacked Cards */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-12 lg:pt-24">
              <ProductCard
                product={featuredProducts[1]}
                onSelect={setSelectedProduct}
              />
              <ProductCard
                product={featuredProducts[2]}
                onSelect={setSelectedProduct}
              />
            </div>
          </div>

          <AnimatedSection delay={0.3} className="mt-16 text-center">
            <Link href="/store" className="inline-block group">
              <span className="font-sans text-xs tracking-[0.15em] text-[#e8e4dc] uppercase">
                Ver Toda a Coleção
              </span>
              <span className="block mt-2 h-px bg-[#c9b99a] w-0 group-hover:w-full transition-all duration-500" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Image */}
            <AnimatedSection>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/processo-artesanal.jpg"
                  alt="Processo artesanal de alfaiataria"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection delay={0.2}>
              <div className="lg:max-w-md">
                <h2 className="font-serif text-3xl lg:text-4xl text-[#e8e4dc] tracking-wide mb-8">
                  O Processo Artesanal
                </h2>
                
                <AnimatedLine className="mb-8" color="#c9b99a" />
                
                <div className="space-y-6 text-[#a8a8a8] font-sans text-sm leading-relaxed">
                  <p>
                    Cada peça Maison Voss começa com uma conversa. Entendemos não apenas 
                    suas medidas, mas sua rotina, suas aspirações, os ambientes que frequenta.
                  </p>
                  <p>
                    Nossos mestres alfaiates trabalham com tecidos selecionados pessoalmente 
                    nas melhores lanifícios da Itália e Inglaterra. São necessárias mais de 
                    cinquenta horas de trabalho manual para criar um único terno.
                  </p>
                  <p>
                    O resultado não é apenas uma roupa — é uma segunda pele que comunica 
                    quem você é antes mesmo de falar.
                  </p>
                </div>

                <Link href="/atelier" className="inline-block mt-12 group">
                  <span className="font-sans text-xs tracking-[0.15em] text-[#e8e4dc] uppercase">
                    Conhecer o Atelier
                  </span>
                  <span className="block mt-2 h-px bg-[#c9b99a] w-0 group-hover:w-full transition-all duration-500" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-40 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-serif text-3xl lg:text-5xl text-[#e8e4dc] tracking-wide text-center mb-16">
              Cada peça é feita uma vez
            </h2>
          </AnimatedSection>

          <AnimatedLine className="mb-16 max-w-xs mx-auto" color="#c9b99a" />

          <div className="space-y-8 text-[#a8a8a8] font-sans text-base lg:text-lg leading-relaxed">
            <AnimatedSection delay={0.1}>
              <p>
                Na Maison Voss, não acreditamos em produção em série. Cada terno que 
                sai do nosso atelier carrega as marcas invisíveis das mãos que o criaram — 
                pontos dados um a um, prensagens feitas com paciência, ajustes milimétricos 
                que fazem toda a diferença.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p>
                Nossos clientes não compram roupas. Eles investem em peças que os 
                acompanharão por décadas, que serão passadas para filhos e que, com o 
                tempo, contarão histórias. Um terno bem feito envelhece com dignidade — 
                assim como o homem que o veste.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p>
                Levamos em média três semanas para completar uma peça. Não por falta de 
                eficiência, mas por respeito ao processo. Há etapas que não podem ser 
                apressadas, pausas necessárias para que os tecidos assentem, provas que 
                garantem a perfeição.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="font-display italic text-[#c9b99a]">
                O tempo é o ingrediente invisível que separa o extraordinário do comum.
              </p>
            </AnimatedSection>
          </div>
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
