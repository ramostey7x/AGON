import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, X, ExternalLink, Check } from 'lucide-react';

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  scope: string;
  image: string;
  headline: string;
  description: string;
  challenge: string;
  solution: string;
  metrics: { value: string; label: string }[];
  deliverables: string[];
  year: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'nova-house',
    number: '01',
    title: 'NOVA HOUSE',
    category: 'Arquitetura e Interiores',
    scope: 'Identidade + Website',
    image: '/images/project_nova_house.webp',
    headline: 'Elegância monolítica e captação de clientes de altíssimo padrão.',
    description:
      'Estúdio de arquitetura contemporânea necessitava de um reposicionamento digital à altura de seus projetos milionários em São Paulo e no litoral.',
    challenge:
      'O site anterior não transmitia o refinamento e a sofisticação dos projetos reais, resultando em contatos desqualificados e baixa percepção de valor nos honorários.',
    solution:
      'Criamos uma identidade visual minimalista, com grids assimétricos e fotografia arquitetural como protagonista. O novo site transformou a apresentação de portfólio em uma experiência de galeria contemporânea com navegação fluida.',
    metrics: [
      { value: '+210%', label: 'Captação de leads qualificados' },
      { value: '3.4x', label: 'Ticket médio de novos contratos' },
      { value: '99/100', label: 'Performance técnica Mobile' },
    ],
    deliverables: [
      'Identidade Visual & Diretrizes Tipográficas',
      'Website Institucional Responsivo',
      'Catálogo Digital de Obras e Projetos',
      'Configuração de Tracking Analítico',
    ],
    year: '2025',
  },
  {
    id: 'north-performance',
    number: '02',
    title: 'NORTH PERFORMANCE',
    category: 'Academia e Performance',
    scope: 'Branding + Website',
    image: '/images/project_north_performance.webp',
    headline: 'Presença implacável para o ecossistema de alto rendimento físico.',
    description:
      'Centro de treinamento e medicina esportiva focado em atletas e executivos de alta demanda que buscava expandir unidades com autoridade.',
    challenge:
      'O mercado de academias é saturado de comunicações genéricas e barulhentas. A North precisava de uma linguagem que respirasse disciplina militar, sobriedade e ciência aplicada.',
    solution:
      'Desenvolvemos um branding monocromático agressivo com tipografia industrial e um website de alta velocidade, integrando agendamento direto de avaliações biomecânicas.',
    metrics: [
      { value: '+145%', label: 'Conversão na página de matrículas' },
      { value: '<0.6s', label: 'Tempo de primeiro carregamento' },
      { value: '88%', label: 'Retenção semestral de membros' },
    ],
    deliverables: [
      'Branding & Logotipo Industrial',
      'Portal Web de Agendamento e Serviços',
      'Copywriting de Posicionamento e Força',
      'Integração com Sistema de Gestão',
    ],
    year: '2025',
  },
  {
    id: 'vertex',
    number: '03',
    title: 'VERTEX',
    category: 'Consultoria Empresarial',
    scope: 'Website + Estratégia',
    image: '/images/project_vertex_advisory.webp',
    headline: 'Estratégia corporativa com clareza executiva e tração B2B.',
    description:
      'Boutique de consultoria em fusões e aquisições e eficiência operacional com atuação internacional na América Latina.',
    challenge:
      'Falta de uma vitrine digital que espelhasse a complexidade e a solidez das transações conduzidas pelos sócios perante conselhos de administração.',
    solution:
      'Estruturamos uma arquitetura editorial austera, com estudos de caso detalhados, dados tabulares claros e uma jornada objetiva para reuniões de diagnóstico executivo.',
    metrics: [
      { value: '+180%', label: 'Solicitações de reunião C-Level' },
      { value: 'R$ 48M', label: 'Pipeline influenciado digitalmente' },
      { value: '100%', label: 'Conformidade LGPD & Segurança' },
    ],
    deliverables: [
      'Arquitetura de Informação Estratégica',
      'Desenvolvimento Web B2B de Alta Segurança',
      'Páginas de Insights & Relatórios Setoriais',
      'Funil de Conversão para Advisory',
    ],
    year: '2026',
  },
  {
    id: 'mono-coffee',
    number: '04',
    title: 'MONO COFFEE',
    category: 'Café Especial',
    scope: 'Branding + E-commerce',
    image: '/images/project_mono_coffee.webp',
    headline: 'Cafés raros apresentados com estética editorial e checkout ágil.',
    description:
      'Torrefação independente de microlotes selecionados que precisava migrar do atendimento manual no WhatsApp para uma plataforma de e-commerce e clube de assinatura.',
    challenge:
      'Consumidores de cafés especiais valorizam notas sensoriais, origem e rastreabilidade, mas a antiga loja online era lenta, confusa e com alta taxa de abandono.',
    solution:
      'Criamos um ecossistema visual minimalista onde cada safra possui ficha técnica detalhada, seleção de moagem intuitiva e assinatura mensal recorrente com checkout sem atrito.',
    metrics: [
      { value: '+310%', label: 'Receita recorrente no clube mensal' },
      { value: '4.2%', label: 'Taxa global de conversão no site' },
      { value: '-48%', label: 'Queda no abandono de carrinho' },
    ],
    deliverables: [
      'Identidade Visual & Embalagens de Edição Limitada',
      'Loja E-commerce com Sistema de Assinatura',
      'Fotografia de Produto & Direção de Arte',
      'Fluxos Automatizados de Recuperação e Boas-vindas',
    ],
    year: '2026',
  },
];

interface ProjectsProps {
  onStartProject: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onStartProject }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projetos" className="py-28 md:py-36 bg-[#080A0D] border-t border-[#161A20] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#161A20]">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#6B7280] mb-4">
              <span className="w-4 h-[1px] bg-[#7DD3FC]" />
              <span className="font-semibold text-[#E5E7EB]/90">03 / TRABALHOS SELECIONADOS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-[#F8FAFC]">
              Feito para ser visto.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6B7280] max-w-md font-normal leading-relaxed">
            Conceitos desenvolvidos com obsessão por detalhe, refinamento gráfico e foco inegociável em conversão.
          </p>
        </div>

        {/* Projects Grid: 2x2 Big Visual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer border border-[#161A20] bg-[#161A20]/20 hover:border-[#6B7280]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#080A0D]">
                <img
                  src={project.image}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith('.jpg')) {
                      target.src = target.src.replace('.webp', '.jpg');
                    }
                  }}
                  alt={`${project.title} - ${project.category}`}
                  className="w-full h-full object-cover object-center grayscale contrast-125 brightness-95 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-transparent to-transparent opacity-80" />

                {/* Micro badge overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-mono tracking-widest text-[#F8FAFC] bg-[#080A0D]/80 backdrop-blur-md px-3 py-1.5 border border-[#161A20]">
                  <span>PROJETO {project.number}</span>
                  <span className="text-[#6B7280]">·</span>
                  <span className="text-[#7DD3FC]">{project.year}</span>
                </div>

                {/* Hover CTA Indicator */}
                <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#F8FAFC] text-[#080A0D] shadow-lg">
                    <span>Ver projeto</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>

              {/* Info Block */}
              <div className="p-8">
                <div className="flex items-center justify-between gap-4 text-xs font-mono uppercase text-[#6B7280] mb-3">
                  <span>{project.category}</span>
                  <span className="text-[#E5E7EB]/90 font-medium">{project.scope}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F8FAFC] group-hover:text-white transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight
                    size={20}
                    className="text-[#6B7280] group-hover:text-[#7DD3FC] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
                  />
                </h3>

                <p className="mt-3 text-sm text-[#6B7280] leading-relaxed line-clamp-2">
                  {project.headline}
                </p>

                {/* Primary Metric Preview */}
                <div className="mt-6 pt-4 border-t border-[#161A20] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#6B7280]">{project.metrics[0].label}</span>
                  <span className="font-bold text-[#7DD3FC] text-sm">
                    {project.metrics[0].value}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#080A0D] border border-[#161A20] shadow-2xl p-6 sm:p-10">
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 text-[#6B7280] hover:text-[#F8FAFC] border border-[#161A20] hover:border-[#6B7280] bg-[#161A20]/40 transition-colors cursor-pointer"
              aria-label="Fechar detalhes do projeto"
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#7DD3FC] mb-2 uppercase">
                  <span>PROJETO {selectedProject.number}</span>
                  <span>·</span>
                  <span>{selectedProject.category}</span>
                  <span>·</span>
                  <span>{selectedProject.year}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC]">
                  {selectedProject.title}
                </h3>
                <p className="mt-2 text-lg text-[#E5E7EB]/90">
                  {selectedProject.headline}
                </p>
              </div>

              {/* Modal Image */}
              <div className="relative aspect-[16/9] overflow-hidden border border-[#161A20]">
                <img
                  src={selectedProject.image}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith('.jpg')) {
                      target.src = target.src.replace('.webp', '.jpg');
                    }
                  }}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-[#161A20]/40 border border-[#161A20]">
                {selectedProject.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="font-mono text-2xl font-bold text-[#7DD3FC]">
                      {m.value}
                    </p>
                    <p className="text-xs text-[#6B7280] uppercase tracking-wider">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-3">
                  <h4 className="text-xs font-mono tracking-widest uppercase text-[#6B7280]">
                    O DESAFIO
                  </h4>
                  <p className="text-sm text-[#E5E7EB]/85 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xs font-mono tracking-widest uppercase text-[#7DD3FC]">
                    A ESTRATÉGIA AGON
                  </h4>
                  <p className="text-sm text-[#E5E7EB]/85 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="pt-6 border-t border-[#161A20]">
                <h4 className="text-xs font-mono tracking-widest uppercase text-[#6B7280] mb-4">
                  ESCOPO ENTREGUE
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.deliverables.map((d, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-[#E5E7EB]/90"
                    >
                      <Check size={14} className="text-[#7DD3FC] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="pt-8 border-t border-[#161A20] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <p className="text-xs text-[#6B7280]">
                  Gostaria de uma transformação semelhante para sua empresa?
                </p>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onStartProject();
                  }}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#080A0D] bg-[#F8FAFC] hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Começar projeto similar</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
