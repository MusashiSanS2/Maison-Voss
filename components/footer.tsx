'use client'

import Link from 'next/link'
import { AnimatedLine } from './animated-line'

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedLine className="mb-12" color="#1e1e1e" />
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <span className="font-serif text-2xl text-[#e8e4dc] tracking-wide">
              Maison Voss
            </span>
            <p className="mt-2 font-sans text-xs tracking-[0.1em] text-[#6b6b6b] uppercase">
              Alfaiataria Masculina Desde 1987
            </p>
          </div>
          
          <nav className="flex gap-8 lg:gap-12">
            <Link
              href="/store"
              className="font-sans text-xs tracking-[0.15em] text-[#6b6b6b] hover:text-[#a8a8a8] transition-colors duration-300 uppercase"
            >
              Coleção
            </Link>
            <Link
              href="/atelier"
              className="font-sans text-xs tracking-[0.15em] text-[#6b6b6b] hover:text-[#a8a8a8] transition-colors duration-300 uppercase"
            >
              Atelier
            </Link>
            <Link
              href="/contato"
              className="font-sans text-xs tracking-[0.15em] text-[#6b6b6b] hover:text-[#a8a8a8] transition-colors duration-300 uppercase"
            >
              Contato
            </Link>
          </nav>
        </div>
        
        <AnimatedLine className="mt-12" color="#1e1e1e" />
        
        <p className="mt-8 font-sans text-[10px] tracking-[0.1em] text-[#6b6b6b] text-center uppercase">
          Todos os direitos reservados Maison Voss
        </p>
      </div>
    </footer>
  )
}
