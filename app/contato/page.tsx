'use client'

import { useState } from 'react'
import { AnimatedSection } from '@/components/animated-section'
import { AnimatedLine } from '@/components/animated-line'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const MapLeaflet = dynamic(() => import('@/components/map-leaflet').then(m => m.MapLeaflet), { ssr: false })

interface FormData {
  nome: string
  email: string
  assunto: string
  mensagem: string
}

export default function ContatoPage() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulação de envio (integração com Formspree pode ser adicionada)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ nome: '', email: '', assunto: '', mensagem: '' })
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h1 className="font-serif text-4xl lg:text-6xl text-[#e8e4dc] tracking-wide text-center">
              Contato
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-6 font-sans text-xs tracking-[0.15em] text-[#6b6b6b] uppercase text-center">
              Estamos à disposição
            </p>
          </AnimatedSection>

          <AnimatedLine className="mt-12 max-w-xs mx-auto" color="#c9b99a" delay={0.4} />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-12">
                <div>
                  <h2 className="font-serif text-2xl text-[#e8e4dc] mb-6">
                    Visite-nos
                  </h2>
                  <div className="space-y-4 font-sans text-sm text-[#a8a8a8]">
                    <p>
                      (Rua exemplo, 000)<br />
                      Centro, Curitiba - PR<br />
                      (CEP exemplo)
                    </p>
                    <p className="font-display italic text-xs text-[#6b6b6b]">
                      * Endereço ilustrativo
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-[#e8e4dc] mb-6">
                    Horário de Atendimento
                  </h2>
                  <div className="space-y-2 font-sans text-sm text-[#a8a8a8]">
                    <p>Segunda a Sexta: 10h às 19h</p>
                    <p>Sábado: 10h às 16h</p>
                    <p className="font-display italic text-[#6b6b6b]">
                      Agendamento prévio recomendado
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-[#e8e4dc] mb-6">
                    Telefone
                  </h2>
                  <p className="font-sans text-sm text-[#a8a8a8]">
                    (Número exemplo)
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-[#e8e4dc] mb-6">
                    E-mail
                  </h2>
                  <p className="font-sans text-sm text-[#a8a8a8]">
                    (email@exemplo.com.br)
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Nome */}
                <div>
                  <label 
                    htmlFor="nome" 
                    className="block font-sans text-xs tracking-[0.15em] text-[#6b6b6b] uppercase mb-3"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-[#2e2e2e] py-3 font-sans text-sm text-[#e8e4dc] placeholder-[#6b6b6b] focus:border-[#c9b99a] focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block font-sans text-xs tracking-[0.15em] text-[#6b6b6b] uppercase mb-3"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-[#2e2e2e] py-3 font-sans text-sm text-[#e8e4dc] placeholder-[#6b6b6b] focus:border-[#c9b99a] focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Assunto */}
                <div>
                  <label 
                    htmlFor="assunto" 
                    className="block font-sans text-xs tracking-[0.15em] text-[#6b6b6b] uppercase mb-3"
                  >
                    Assunto
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-[#2e2e2e] py-3 font-sans text-sm text-[#e8e4dc] focus:border-[#c9b99a] focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#141414]">Selecione um assunto</option>
                    <option value="terno" className="bg-[#141414]">Terno sob medida</option>
                    <option value="camisa" className="bg-[#141414]">Camisa sob medida</option>
                    <option value="acessorios" className="bg-[#141414]">Acessórios</option>
                    <option value="visita" className="bg-[#141414]">Agendar visita ao atelier</option>
                    <option value="outro" className="bg-[#141414]">Outro assunto</option>
                  </select>
                </div>

                {/* Mensagem */}
                <div>
                  <label 
                    htmlFor="mensagem" 
                    className="block font-sans text-xs tracking-[0.15em] text-[#6b6b6b] uppercase mb-3"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-[#2e2e2e] py-3 font-sans text-sm text-[#e8e4dc] placeholder-[#6b6b6b] focus:border-[#c9b99a] focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="group inline-flex items-center gap-4 disabled:opacity-50"
                  >
                    <span className="font-sans text-xs tracking-[0.15em] text-[#e8e4dc] uppercase">
                      {isSubmitting ? 'Enviando...' : isSubmitted ? 'Mensagem Enviada' : 'Enviar Mensagem'}
                    </span>
                    <span className="w-12 h-px bg-[#c9b99a] transition-all duration-500 group-hover:w-20 group-disabled:w-12" />
                  </button>
                </div>

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8"
                  >
                    <p className="font-display italic text-sm text-[#c9b99a]">
                      Agradecemos seu contato. Retornaremos em breve.
                    </p>
                  </motion.div>
                )}
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-[#141414]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <MapLeaflet />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
