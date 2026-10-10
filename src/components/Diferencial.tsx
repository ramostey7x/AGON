import React, { useState } from 'react';
import { Compass, PenTool, Terminal, Check, X } from 'lucide-react';

export const Diferencial: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      number: '01',
      title: 'ESTRATÉGIA',
      subtitle: 'Antes de criar, entendemos.',
      description:
        'Não abrimos o Figma no primeiro minuto. Mapeamos modelo de receita, objeções do cliente, concorrência e proposta de valor. O design é a consequência visual de uma tese bem resolvida.',
      icon: Compass,
      highlights: [
        'Diagnóstico profundo de posicionamento',
        'Arquitetura de persuasão e jornada',
        'Definição clara do público e ticket',
      ],
    },
    {
      number: '02',
      title: 'DESIGN',
      subtitle: 'Forma e função trabalhando juntas.',
      description:
        'Eliminamos ruídos e ornamentos vazios. O design da AGON opera como uma ferramenta de clareza: hierarquia austera, tipografia com presença e contraste magnético que guia o olhar para a ação.',
      icon: PenTool,
      highlights: [
        'Identidade visual autoral e duradoura',
        'Experiência do usuário (UX) intuitiva e ágil',
        'Sistemas visuais escaláveis e consistentes',
      ],
    },
    {
      number: '03',
      title: 'EXECUÇÃO',
      subtitle: 'Do conceito ao projeto publicado.',
      description:
        'Construímos sem atalhos com código moderno e limpo. Carregamento instantâneo, compatibilidade impecável em qualquer resolução e infraestrutura sólida que não te deixa na mão no lançamento.',
      icon: Terminal,
      highlights: [
        'Engenharia de front-end moderna (Vite/React)',
        'Otimização extrema de Core Web Vitals',
        'Entrega pronta para campanhas e captação',
      ],
    },
  ];

  return (
    <section id="diferenciais" className="py-28 md:py-36 bg-[#0B1F3A]/25 border-t border-[#161A20] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#6B7280] mb-4">
            <span className="w-4 h-[1px] bg-[#7DD3FC]" />
            <span className="font-semibold text-[#E5E7EB]/90">02 / O MÉTODO AGON</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-[#F8FAFC] leading-[1.08] text-balance">
            Não entregamos apenas uma página.
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-[#6B7280] leading-relaxed">
            Cada projeto começa entendendo o negócio, o público e o objetivo. O design vem depois.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = selectedPillar === idx;
            return (
              <div
                key={pillar.number}
                onClick={() => setSelectedPillar(idx)}
                className={`p-8 sm:p-10 border transition-all duration-300 cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#161A20] border-[#7DD3FC]/40 shadow-[0_12px_40px_rgba(0,0,0,0.5)]'
                    : 'bg-[#080A0D]/70 border-[#161A20] hover:border-[#6B7280]/40 hover:bg-[#161A20]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs tracking-widest text-[#7DD3FC]">
                      {pillar.number}
                    </span>
                    <Icon size={20} className={isSelected ? 'text-[#7DD3FC]' : 'text-[#6B7280]'} />
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[#7DD3FC]/90">
                    "{pillar.subtitle}"
                  </p>

                  <p className="mt-4 text-sm text-[#6B7280] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#161A20] space-y-2.5">
                  {pillar.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-[#E5E7EB]/80">
                      <span className="w-1 h-1 rounded-full bg-[#7DD3FC]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Perspective Comparison: Traditional Agency vs AGON Digital */}
        <div className="mt-16 border border-[#161A20] bg-[#080A0D] p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#161A20]">
            <div>
              <p className="text-xs font-mono tracking-widest uppercase text-[#7DD3FC]">
                DIAGNÓSTICO COMPARATIVO
              </p>
              <h4 className="text-xl font-bold text-[#F8FAFC] mt-1">
                Por que a maioria dos sites não gera resultados?
              </h4>
            </div>
            <p className="text-xs text-[#6B7280] max-w-xs">
              A diferença entre um custo estético e um investimento de retorno previsível.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Agency */}
            <div className="p-6 border border-[#161A20] bg-[#161A20]/20 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#6B7280] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-400/80" />
                <span>O Mercado Convencional</span>
              </div>
              <ul className="space-y-3 text-xs text-[#6B7280] leading-relaxed">
                <li className="flex items-start gap-2">
                  <X size={14} className="text-red-400 shrink-0 mt-0.5" />
                  <span>Templates pré-fabricados inflados com dezenas de plugins lentos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X size={14} className="text-red-400 shrink-0 mt-0.5" />
                  <span>Foco apenas na aparência bonita sem estudar a proposta comercial.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X size={14} className="text-red-400 shrink-0 mt-0.5" />
                  <span>Nenhum rastreamento de métricas ou preparo para tráfego pago.</span>
                </li>
              </ul>
            </div>

            {/* AGON Method */}
            <div className="p-6 border border-[#7DD3FC]/30 bg-[#0B1F3A]/20 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#F8FAFC] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#7DD3FC]" />
                <span>O Método AGON Digital</span>
              </div>
              <ul className="space-y-3 text-xs text-[#E5E7EB]/90 leading-relaxed">
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#7DD3FC] shrink-0 mt-0.5" />
                  <span>Arquitetura sob medida, código limpo de alta performance (&lt;1s).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#7DD3FC] shrink-0 mt-0.5" />
                  <span>Estratégia de copywriting que combate objeções e qualifica o lead.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#7DD3FC] shrink-0 mt-0.5" />
                  <span>Tags, eventos de conversão e GA4 configurados de ponta a ponta.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
