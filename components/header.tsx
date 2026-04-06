'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'INÍCIO' },
  { href: '/store', label: 'COLEÇÃO' },
  { href: '/atelier', label: 'ATELIER' },
  { href: '/contato', label: 'CONTATO' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <span className="font-serif text-2xl lg:text-3xl text-[#e8e4dc] tracking-wide">
              Maison Voss
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group"
              >
                <span className={`font-sans text-xs tracking-[0.15em] transition-colors duration-300 ${
                  pathname === link.href ? 'text-[#e8e4dc]' : 'text-[#6b6b6b] hover:text-[#a8a8a8]'
                }`}>
                  {link.label}
                </span>
                <span className={`absolute -bottom-1 left-0 h-px bg-[#c9b99a] transition-all duration-500 ${
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-[#e8e4dc] block absolute"
              style={{ top: isMenuOpen ? '50%' : 'calc(50% - 4px)' }}
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-px bg-[#e8e4dc] block absolute"
              style={{ top: '50%' }}
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-[#e8e4dc] block absolute"
              style={{ top: isMenuOpen ? '50%' : 'calc(50% + 4px)' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0a0a0a] z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-4 font-serif text-3xl tracking-wide ${
                      pathname === link.href ? 'text-[#e8e4dc]' : 'text-[#6b6b6b]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
