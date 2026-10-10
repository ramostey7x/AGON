import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onViewProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewProjects }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-[#080A0D] bg-grid-subtle"
    >
      {/* Subtle atmospheric ambient glow - very restrained electric highlight */}
      <div
        className="pointer-events-none absolute -top-40 right-10 w-[550px] h-[550px] rounded-full bg-[#7DD3FC]/[0.035] blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-[-100px] w-[450px] h-[450px] rounded-full bg-[#0B1F3A]/30 blur-[130px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 my-auto">
        {/* Micro-label kicker: Editorial unboxed style */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#6B7280] mb-8">
          <span className="w-6 h-[1px] bg-[#7DD3FC]" />
          <span className="font-semibold text-[#E5E7EB]/90">
            AGON DIGITAL — DESIGN • TECHNOLOGY • GROWTH
          </span>
        </div>

        {/* Headline principal */}
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-extrabold tracking-[-0.035em] text-[#F8FAFC] leading-[1.04] text-balance">
            Construímos o digital que leva negócios{' '}
            <span className="relative inline-block text-white">
              para frente
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#7DD3FC]/60" />
            </span>
            .
          </h1>

          {/* Subheadline */}
          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-[#6B7280] font-normal leading-relaxed max-w-3xl">
            Sites, experiências digitais e estratégias para empresas que não querem permanecer no mesmo lugar.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <button
              onClick={onStartProject}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#080A0D] bg-[#F8FAFC] hover:bg-white transition-all duration-200 hover:shadow-[0_0_30px_rgba(125,211,252,0.22)] active:scale-[0.99] cursor-pointer"
            >
              <span>Começar um projeto</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 text-[#080A0D] transition-transform duration-200"
              />
            </button>

            <button
              onClick={onViewProjects}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#F8FAFC] border border-[#161A20] hover:border-[#6B7280]/40 bg-[#161A20]/40 hover:bg-[#161A20] transition-all duration-200 cursor-pointer"
            >
              <span>Ver nossos projetos</span>
              <span className="text-[#6B7280] group-hover:text-[#7DD3FC] transition-colors">↓</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Asset & Strategic Coordinates */}
        <div className="mt-16 pt-10 border-t border-[#161A20]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 relative group overflow-hidden border border-[#161A20] bg-[#161A20]/40">
              <div className="relative aspect-[16/8] sm:aspect-[16/7] overflow-hidden">
                <img
                  src="/images/hero_agon_studio.webp"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith('.jpg')) {
                      target.src = '/images/hero_agon_studio.jpg';
                    }
                  }}
                  alt="AGON Studio - Arquitetura, tecnologia e estratégia digital de ponta"
                  className="w-full h-full object-cover object-center grayscale contrast-125 brightness-90 group-hover:scale-[1.02] transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-[#080A0D]/40 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-2 text-[#E5E7EB]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7DD3FC] animate-pulse" />
                    <span className="tracking-widest uppercase font-mono text-[11px]">
                      ATELIER DIGITAL · RIO DE JANEIRO & GLOBAL
                    </span>
                  </div>
                  <span className="text-[#6B7280] font-mono text-[11px] tracking-wider">
                    COORD: 22°54'S 43°11'W
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              <div className="p-6 border border-[#161A20] bg-[#161A20]/20 space-y-3">
                <p className="text-xs uppercase font-mono tracking-widest text-[#7DD3FC]">
                  FILOSOFIA DO AGÓN
                </p>
                <p className="text-sm text-[#E5E7EB]/90 leading-relaxed">
                  "O resultado duradouro não vem de atalhos, mas de precisão estratégica, código meticuloso e coragem criativa."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border-l border-[#161A20]">
                  <p className="text-2xl font-bold font-mono text-[#F8FAFC] tracking-tight">100%</p>
                  <p className="text-xs text-[#6B7280] uppercase tracking-wider mt-1">Design Autoral</p>
                </div>
                <div className="p-4 border-l border-[#161A20]">
                  <p className="text-2xl font-bold font-mono text-[#7DD3FC] tracking-tight">&lt;0.8s</p>
                  <p className="text-xs text-[#6B7280] uppercase tracking-wider mt-1">Carregamento Core</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full mt-12 flex justify-between items-center text-xs text-[#6B7280]">
        <div className="flex items-center gap-2 tracking-widest uppercase font-mono text-[11px]">
          <span>Scroll para explorar</span>
          <ArrowDown size={12} className="animate-bounce text-[#7DD3FC]" />
        </div>
        <div className="hidden md:flex items-center gap-4 font-mono text-[11px] text-[#6B7280]">
          <span>MÉTODO: ESTRATÉGIA → DESIGN → EXECUÇÃO</span>
        </div>
      </div>
    </section>
  );
};
