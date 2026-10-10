import React, { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'CONVERSA',
      subtitle: 'Entendemos o negócio, os objetivos e o momento atual.',
      description:
        'Uma reunião de alinhamento estratégico profunda para radiografar seu mercado, público-alvo, margens de produto e gargalos de conversão no ecossistema digital.',
      deliverables: [
        'Diagnóstico comercial e de marca',
        'Mapeamento de referências e concorrentes',
        'Definição de escopo e cronograma de entrega',
      ],
      timeframe: 'Semana 01',
    },
    {
      number: '02',
      title: 'ESTRATÉGIA',
      subtitle: 'Definimos a direção, estrutura e prioridades.',
      description:
        'Planejamos a arquitetura de páginas, copywriting estratégico e os caminhos de persuasão que conduzirão o visitante até o contato comercial.',
      deliverables: [
        'Wireframes estruturais de baixa fidelidade',
        'Redação completa do copywriting de conversão',
        'Matriz de objeções e respostas estratégicas',
      ],
      timeframe: 'Semana 02',
    },
    {
      number: '03',
      title: 'CRIAÇÃO',
      subtitle: 'Transformamos estratégia em design e tecnologia.',
      description:
        'Design autoral no Figma com grids milimétricos seguido da engenharia de front-end com código limpo, animações responsivas e testes de usabilidade.',
      deliverables: [
        'Protótipo navegável em alta fidelidade',
        'Desenvolvimento em React com velocidade extrema',
        'Integrações com formulários e automações',
      ],
      timeframe: 'Semanas 03 – 04',
    },
    {
      number: '04',
      title: 'LANÇAMENTO',
      subtitle: 'Publicamos, analisamos e entregamos.',
      description:
        'Publicação no servidor em produção, conexão com domínio oficial, configuração minuciosa de SEO, Pixel, GA4 e validação de Core Web Vitals.',
      deliverables: [
        'Deploy em produção com SSL e CDN global',
        'Configuração de rastreamento e eventos',
        'Checklist de entrega e treinamento de uso',
      ],
      timeframe: 'Semana 05',
    },
    {
      number: '05',
      title: 'EVOLUÇÃO',
      subtitle: 'O projeto continua evoluindo junto com o negócio.',
      description:
        'O site não é estático. Acompanhamos os dados das primeiras semanas para sugerir refinamentos de taxa de conversão e expansão de novas páginas e automações.',
      deliverables: [
        'Relatório de primeiras métricas de acesso',
        'Ajustes de usabilidade baseados em comportamento',
        'Suporte técnico e plano de expansão',
      ],
      timeframe: 'Contínuo',
    },
  ];

  return (
    <section id="processo" className="py-28 md:py-36 bg-[#080A0D] border-t border-[#161A20] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pb-8 border-b border-[#161A20]">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#6B7280] mb-4">
              <span className="w-4 h-[1px] bg-[#7DD3FC]" />
              <span className="font-semibold text-[#E5E7EB]/90">05 / METODOLOGIA</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-[#F8FAFC]">
              Do primeiro contato ao próximo nível.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6B7280] max-w-md font-normal leading-relaxed">
            Processo previsível, transparente e sem improvisos. Você sabe exatamente o que está sendo construído em cada etapa.
          </p>
        </div>

        {/* Step Progression Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector Column (Left) */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 border cursor-pointer transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? 'bg-[#161A20] border-[#7DD3FC]/50 text-[#F8FAFC]'
                      : 'bg-[#080A0D] border-[#161A20] text-[#6B7280] hover:border-[#6B7280]/40 hover:text-[#E5E7EB]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isActive ? 'text-[#7DD3FC]' : 'text-[#6B7280]'
                      }`}
                    >
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-base font-bold tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#6B7280] truncate max-w-[240px] sm:max-w-xs mt-0.5">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    size={18}
                    className={`shrink-0 transition-transform ${
                      isActive ? 'text-[#7DD3FC] translate-x-1' : 'text-[#6B7280]'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Box (Right) */}
          <div className="lg:col-span-7 p-8 sm:p-12 border border-[#161A20] bg-[#161A20]/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 font-mono text-7xl font-extrabold text-[#161A20] select-none pointer-events-none">
              {steps[activeStep].number}
            </div>

            <div className="relative z-10 space-y-8">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#7DD3FC] mb-2">
                  <span>ETAPA {steps[activeStep].number}</span>
                  <span>·</span>
                  <span>{steps[activeStep].timeframe}</span>
                </div>
                <h3 className="text-3xl font-extrabold text-[#F8FAFC]">
                  {steps[activeStep].title}
                </h3>
                <p className="text-lg text-[#E5E7EB] mt-2 font-medium">
                  "{steps[activeStep].subtitle}"
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="pt-6 border-t border-[#161A20] space-y-4">
                <p className="text-xs font-mono uppercase tracking-widest text-[#E5E7EB]">
                  ENTREGÁVEIS DESTA FASE
                </p>
                <div className="space-y-2.5">
                  {steps[activeStep].deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-3 p-3 bg-[#080A0D]/60 border border-[#161A20] text-xs text-[#E5E7EB]/90"
                    >
                      <Check size={14} className="text-[#7DD3FC] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress dots */}
              <div className="flex items-center gap-2 pt-4">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`h-1.5 transition-all cursor-pointer ${
                      i === activeStep
                        ? 'w-8 bg-[#7DD3FC]'
                        : 'w-2 bg-[#161A20] hover:bg-[#6B7280]'
                    }`}
                    aria-label={`Ver etapa 0${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
