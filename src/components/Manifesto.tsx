import React from 'react';

export const Manifesto: React.FC = () => {
  return (
    <section className="relative py-28 md:py-36 bg-[#080A0D] border-t border-[#161A20] overflow-hidden">
      {/* Structural hairline aesthetic */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Conceptual Genesis */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#6B7280]">
              <span className="w-4 h-[1px] bg-[#7DD3FC]" />
              <span className="font-semibold text-[#E5E7EB]/90">00 / MANIFESTO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-[#F8FAFC] leading-[1.12]">
              Vale a pena lutar pelo que importa.
            </h2>

            <div className="pt-4 border-t border-[#161A20] space-y-3">
              <p className="text-xs uppercase font-mono tracking-widest text-[#7DD3FC]">
                DO GREGO: AGÓN (ἀγών)
              </p>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Esforço deliberado, disputa com integridade, perseverança diante da inércia. Na cultura clássica, não representava destruição, mas a nobreza de quem dá o seu melhor por um ideal superior.
              </p>
            </div>
          </div>

          {/* Right Column: Statement with Massive Typography & Negative Space */}
          <div className="lg:col-span-8 lg:pl-12 space-y-12">
            <div className="space-y-8">
              <p className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#E5E7EB] leading-[1.3] text-balance">
                Existem empresas que <span className="text-[#6B7280]">apenas existem</span>.
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#F8FAFC] leading-[1.3] text-balance">
                E existem empresas que querem <span className="text-white border-b border-[#7DD3FC]/80 pb-0.5">construir algo</span>.
              </p>
            </div>

            <div className="max-w-2xl space-y-6 text-base sm:text-lg text-[#E5E7EB]/80 leading-relaxed font-normal">
              <p>
                A <strong className="text-white font-semibold">AGON</strong> nasceu para trabalhar ao lado de quem escolheu a segunda opção. Negócios consistentes não dependem de modismos passageiros ou fórmulas genéricas de internet. Dependem de visão clara, rigor visual e engenharia confiável.
              </p>
              <p>
                Criamos experiências digitais para empresas que querem crescer, se posicionar com autoridade incontestável e construir algo que permaneça.
              </p>
            </div>

            {/* Principles Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-[#161A20]">
              <div>
                <span className="block font-mono text-xs uppercase tracking-widest text-[#6B7280]">Princípio 01</span>
                <span className="block text-sm font-semibold text-[#F8FAFC] mt-1">Disciplina Diária</span>
              </div>
              <div>
                <span className="block font-mono text-xs uppercase tracking-widest text-[#6B7280]">Princípio 02</span>
                <span className="block text-sm font-semibold text-[#F8FAFC] mt-1">Clareza Estratégica</span>
              </div>
              <div>
                <span className="block font-mono text-xs uppercase tracking-widest text-[#6B7280]">Princípio 03</span>
                <span className="block text-sm font-semibold text-[#F8FAFC] mt-1">Execução Impecável</span>
              </div>
              <div>
                <span className="block font-mono text-xs uppercase tracking-widest text-[#6B7280]">Princípio 04</span>
                <span className="block text-sm font-semibold text-[#7DD3FC] mt-1">Impacto Real</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
