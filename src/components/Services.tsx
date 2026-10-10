import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  metric: string;
  metricLabel: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'websites',
    number: '01',
    title: 'Websites',
    description: 'Sites rápidos, estratégicos e desenvolvidos para transformar visitantes em oportunidades.',
    deliverables: [
      'Arquitetura de informação orientada a conversão',
      'Design autoral e responsivo (Desktop & Mobile)',
      'Performance técnica impecável (<1s carregamento)',
      'Integrações com CRM e ferramentas de marketing',
    ],
    metric: '98/100',
    metricLabel: 'Média Lighthouse Score',
  },
  {
    id: 'landing-pages',
    number: '02',
    title: 'Landing Pages',
    description: 'Páginas focadas em uma única ação: gerar resultados.',
    deliverables: [
      'Copywriting persuasivo e estruturado',
      'Design de alta conversão sem distrações',
      'Testes A/B e mensuração precisa de eventos',
      'Otimização para campanhas de tráfego pago',
    ],
    metric: '4.8x',
    metricLabel: 'Aumento médio de conversão',
  },
  {
    id: 'branding',
    number: '03',
    title: 'Branding',
    description: 'Identidades visuais que tornam empresas reconhecíveis.',
    deliverables: [
      'Diretrizes de identidade e logotipo autoral',
      'Sistema tipográfico e paleta de cores corporativa',
      'Guia de estilo digital e tom de voz',
      'Aplicações para redes, interfaces e papelaria',
    ],
    metric: '100%',
    metricLabel: 'Exclusividade e registro viável',
  },
  {
    id: 'estrategia',
    number: '04',
    title: 'Estratégia Digital',
    description: 'Clareza sobre o que comunicar, para quem e por quê.',
    deliverables: [
      'Diagnóstico aprofundado do posicionamento atual',
      'Mapeamento da jornada do cliente e personas',
      'Estruturação da proposta de valor e diferenciais',
      'Plano de ação digital de médio e longo prazo',
    ],
    metric: '360°',
    metricLabel: 'Visão de mercado e concorrência',
  },
  {
    id: 'automacao-ia',
    number: '05',
    title: 'Automação & IA',
    description: 'Processos inteligentes para reduzir trabalho manual e acelerar operações.',
    deliverables: [
      'Conexão entre CRM, formulários e WhatsApp',
      'Fluxos automatizados de qualificação de leads',
      'Pipelines de dados e notificações automáticas',
      'Integração de modelos de linguagem para atendimento',
    ],
    metric: '-65%',
    metricLabel: 'Tempo gasto em rotinas manuais',
  },
  {
    id: 'growth',
    number: '06',
    title: 'Growth',
    description: 'Dados, testes e otimização para transformar presença digital em crescimento.',
    deliverables: [
      'Configuração de GA4, Pixel e rastreamento Server-side',
      'Análise contínua de funil e taxa de rejeição',
      'Testes de usabilidade e mapas de calor',
      'Evolução contínua orientada a ROI',
    ],
    metric: '+140%',
    metricLabel: 'Crescimento de leads qualificados',
  },
];

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeService, setActiveService] = useState<string>(servicesData[0].id);

  const current = servicesData.find((s) => s.id === activeService) || servicesData[0];

  return (
    <section id="servicos" className="py-28 md:py-36 bg-[#080A0D] border-t border-[#161A20] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#161A20]">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#6B7280] mb-4">
              <span className="w-4 h-[1px] bg-[#7DD3FC]" />
              <span className="font-semibold text-[#E5E7EB]/90">01 / CAPACIDADES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-[#F8FAFC]">
              O digital é apenas o começo.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6B7280] max-w-md font-normal leading-relaxed">
            Não entregamos templates genéricos. Construímos ativos digitais proprietários desenhados para gerar autoridade e tração comercial real.
          </p>
        </div>

        {/* Services Grid (6 services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const isSelected = activeService === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`group relative p-8 cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? 'bg-[#161A20]/90 border-[#7DD3FC]/50 shadow-[0_0_30px_rgba(11,31,58,0.4)]'
                    : 'bg-[#161A20]/30 border-[#161A20] hover:border-[#6B7280]/40 hover:bg-[#161A20]/60'
                }`}
              >
                {/* Top bar in card */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs tracking-widest text-[#6B7280] group-hover:text-[#7DD3FC] transition-colors">
                    {service.number}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-sm flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-[#7DD3FC] text-[#080A0D]'
                        : 'border border-[#161A20] text-[#6B7280] group-hover:text-[#F8FAFC] group-hover:border-[#6B7280]'
                    }`}
                  >
                    <ArrowUpRight size={15} />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F8FAFC] mb-3 group-hover:translate-x-0.5 transition-transform">
                  {service.title}
                </h3>

                <p className="text-sm text-[#6B7280] leading-relaxed group-hover:text-[#E5E7EB]/90 transition-colors">
                  {service.description}
                </p>

                {/* Micro accent line */}
                <div className="mt-8 pt-4 border-t border-[#161A20]/60 flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] text-[#6B7280]">
                    {service.metricLabel}
                  </span>
                  <span className="font-mono font-bold text-[#F8FAFC] group-hover:text-[#7DD3FC]">
                    {service.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Drawer for Selected Service */}
        <div className="mt-12 p-8 sm:p-10 border border-[#161A20] bg-[#161A20]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#7DD3FC]/[0.03] rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#7DD3FC]">
                <span>DETALHAMENTO TÉCNICO</span>
                <span>/</span>
                <span>{current.number} — {current.title.toUpperCase()}</span>
              </div>
              <h4 className="text-2xl font-bold text-[#F8FAFC]">
                O que entregamos em {current.title}
              </h4>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Cada etapa deste serviço é documentada e validada em conjunto, garantindo alinhamento estrito com os objetivos de receita da sua marca.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {current.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3.5 bg-[#080A0D]/70 border border-[#161A20] text-xs text-[#E5E7EB]/90 leading-snug"
                  >
                    <CheckCircle2 size={14} className="text-[#7DD3FC] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#161A20]">
                <div className="text-xs text-[#6B7280]">
                  <span>Quer orçar esse escopo específico?</span>
                </div>
                <button
                  onClick={() => onSelectService(current.title)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#080A0D] bg-[#F8FAFC] hover:bg-white px-5 py-2.5 transition-colors cursor-pointer"
                >
                  <span>Solicitar {current.title}</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
