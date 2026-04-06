'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '@/components/animated-section'
import { AnimatedText } from '@/components/animated-text'
import { AnimatedLine } from '@/components/animated-line'

const timeline = [
  { year: '1987', event: 'Fundação do atelier em São Paulo' },
  { year: '1992', event: 'Primeira parceria com lanifícios italianos' },
  { year: '1998', event: 'Expansão para clientela internacional' },
  { year: '2005', event: 'Reconhecimento como melhor alfaiataria do país' },
  { year: '2012', event: 'Inauguração do novo atelier na Rua Oscar Freire' },
  { year: '2019', event: 'Terceira geração assume a direção criativa' },
]

export default function AtelierPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h1 className="font-serif text-4xl lg:text-6xl text-[#e8e4dc] tracking-wide text-center">
              O Atelier
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-6 font-sans text-xs tracking-[0.15em] text-[#6b6b6b] uppercase text-center">
              Tradição, Artesanato, Permanência
            </p>
          </AnimatedSection>

          <AnimatedLine className="mt-12 max-w-xs mx-auto" color="#c9b99a" delay={0.4} />
        </div>
      </section>

      {/* Image Section */}
      <section className="px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="relative aspect-[21/9] overflow-hidden">
              <Image
                src="/images/atelier.jpg"
                alt="Interior do atelier Maison Voss"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <AnimatedText
              text="Uma filosofia de permanência"
              as="h2"
              className="font-serif text-3xl lg:text-4xl text-[#e8e4dc] tracking-wide mb-12"
              staggerChildren={0.04}
            />
          </AnimatedSection>

          <div className="space-y-8 text-[#a8a8a8] font-sans text-base leading-relaxed">
            <AnimatedSection delay={0.1}>
              <p>
                A Maison Voss nasceu de uma convicção simples: num mundo de produção 
                acelerada e descarte programado, há espaço — e necessidade — para 
                peças que durem. Que resistam ao tempo não apenas fisicamente, mas 
                esteticamente. Que envelheçam com a mesma dignidade de seus donos.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p>
                Nosso fundador, Heinrich Voss, chegou ao Brasil em 1983 com duas 
                malas e quarenta anos de experiência nas melhores casas de Milão e 
                Londres. Trouxe consigo não apenas técnica, mas uma visão: a de que 
                a verdadeira elegância masculina transcende modas e temporadas.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p>
                Hoje, três décadas depois, mantemos o mesmo compromisso. Cada peça 
                que deixa nosso atelier carrega em si a assinatura invisível de 
                nossos mestres — pontos que nenhuma máquina reproduz, proporções 
                que só o olho treinado alcança, detalhes que revelam seu valor 
                silenciosamente ao longo dos anos.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p>
                Não fazemos moda. Fazemos roupas que serão usadas, vividas, 
                lembradas. Roupas que contarão histórias muito depois de nós.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#141414]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#e8e4dc] tracking-wide text-center mb-16">
              Os Pilares
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <h3 className="font-serif text-2xl text-[#e8e4dc] mb-4">Tempo</h3>
                <AnimatedLine className="mb-6 max-w-[60px] mx-auto" color="#c9b99a" />
                <p className="font-sans text-sm leading-relaxed text-[#a8a8a8]">
                  Cada peça leva o tempo que precisa. Não aceleramos processos, 
                  não pulamos etapas. O tempo é nosso aliado, não nosso inimigo.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <h3 className="font-serif text-2xl text-[#e8e4dc] mb-4">Matéria</h3>
                <AnimatedLine className="mb-6 max-w-[60px] mx-auto" color="#c9b99a" />
                <p className="font-sans text-sm leading-relaxed text-[#a8a8a8]">
                  Selecionamos tecidos pessoalmente nos melhores lanifícios do mundo. 
                  Cada fio, cada trama tem origem conhecida e história própria.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <h3 className="font-serif text-2xl text-[#e8e4dc] mb-4">Mão</h3>
                <AnimatedLine className="mb-6 max-w-[60px] mx-auto" color="#c9b99a" />
                <p className="font-sans text-sm leading-relaxed text-[#a8a8a8]">
                  As mãos de nossos mestres carregam décadas de conhecimento. 
                  Técnicas passadas de geração em geração, impossíveis de replicar.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#e8e4dc] tracking-wide text-center mb-16">
              Nossa História
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#1e1e1e] transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <AnimatedSection key={item.year} delay={index * 0.1}>
                  <div className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 w-2 h-2 bg-[#c9b99a] transform md:-translate-x-1/2 rounded-full" />

                    {/* Content */}
                    <div className={`pl-8 md:pl-0 md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                    }`}>
                      <span className="font-display italic text-lg text-[#c9b99a]">
                        {item.year}
                      </span>
                      <p className="mt-1 font-sans text-sm text-[#a8a8a8]">
                        {item.event}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#141414]">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#e8e4dc] tracking-wide mb-8">
              Agende sua visita
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-sans text-sm leading-relaxed text-[#a8a8a8] mb-12">
              Convidamos você a conhecer nosso atelier. Venha entender como suas 
              próximas peças serão criadas — cada ponto, cada detalhe, cada decisão.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Link href="/contato" className="inline-block group">
              <span className="font-sans text-xs tracking-[0.15em] text-[#e8e4dc] uppercase">
                Entrar em Contato
              </span>
              <span className="block mt-2 h-px bg-[#c9b99a] w-0 group-hover:w-full transition-all duration-500" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
