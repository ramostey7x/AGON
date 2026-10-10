import React from 'react';
import { Shield, Zap, Target, Flame } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      title: 'DISCIPLINA',
      desc: 'Consistência nos fundamentos e precisão milimétrica em cada linha de código e layout.',
      icon: Target,
    },
    {
      title: 'CORAGEM',
      desc: 'Abandonar templates previsíveis e clichês de mercado para criar identidades com coragem e personalidade.',
      icon: Flame,
    },
    {
      title: 'INTELIGÊNCIA',
      desc: 'Decisões estéticas orientadas por estratégia de negócios, psicologia de compra e análise de dados.',
      icon: Zap,
    },
    {
      title: 'PROPÓSITO',
      desc: 'Construir marcas e sistemas que resistam ao tempo e gerem valor sustentável a longo prazo.',
      icon: Shield,
    },
  ];

  return (
    <section id="sobre" className="py-28 md:py-36 bg-[#080A0D] border-t border-[#161A20] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#6B7280]">
              <span className="w-4 h-[1px] bg-[#7DD3FC]" />
              <span className="font-semibold text-[#E5E7EB]/90">06 / INSTITUCIONAL</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.035em] text-[#F8FAFC] leading-[1.05]">
              Somos a AGON.
            </h2>

            <div className="space-y-6 text-lg sm:text-xl text-[#E5E7EB]/90 leading-relaxed font-light">
              <p className="font-medium text-white text-2xl">
                Uma agência digital independente criada para construir coisas que importam.
              </p>
              <p className="text-base sm:text-lg text-[#6B7280]">
                Acreditamos em trabalho bem feito, decisões conscientes e crescimento sustentável.
              </p>
              <div className="p-6 border-l-2 border-[#7DD3FC] bg-[#161A20]/40 my-6">
                <p className="text-xl sm:text-2xl font-semibold text-[#F8FAFC] tracking-tight">
                  "Não buscamos fazer mais barulho.
                  <br />
                  <span className="text-[#7DD3FC]">Buscamos fazer melhor.</span>"
                </p>
              </div>
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                Fundada com a premissa de que a presença digital de uma empresa deve ser um reflexo direto de sua excelência operacional, combinamos design editorial refinado, código contemporâneo e sensibilidade comercial.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#161A20]">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div key={idx} className="p-4 bg-[#161A20]/20 border border-[#161A20] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold tracking-widest text-[#7DD3FC]">
                        {v.title}
                      </span>
                      <Icon size={14} className="text-[#6B7280]" />
                    </div>
                    <p className="text-xs text-[#6B7280] leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Editorial Image Composition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative border border-[#161A20] bg-[#161A20]/20 overflow-hidden group">
              <div className="aspect-[4/5] sm:aspect-[4/4] overflow-hidden">
                <picture>
                  <source type="image/webp" srcSet="/images/hero_agon_studio.webp" />
                  <img
                    src="/images/hero_agon_studio.jpg"
                    alt="AGON Digital Headquarters e Atelier"
                    className="w-full h-full object-cover object-center grayscale contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                    width={1376}
                    height={768}
                  />
                </picture>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#080A0D]/90 backdrop-blur-md border border-[#161A20]">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-[#7DD3FC] tracking-widest">AGON DIGITAL LAB</span>
                  <span className="text-[#6B7280]">EST. 2022</span>
                </div>
                <p className="text-xs text-[#E5E7EB]/80 leading-relaxed">
                  Operando como parceira estratégica para empresas que disputam liderança de mercado nos ambientes físico e digital.
                </p>
              </div>
            </div>

            {/* Team / Culture Strip */}
            <div className="p-5 border border-[#161A20] bg-[#161A20]/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#6B7280]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7DD3FC]" />
                <span className="text-[#F8FAFC]">EQUIPE MULTIDISCIPLINAR SENIOR</span>
              </div>
              <span>DESDE O CONCEITO ATÉ A ESCALA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
