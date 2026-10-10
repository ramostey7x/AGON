import React from 'react';

export const Stats: React.FC = () => {
  const stats = [
    {
      value: '42+',
      label: 'Projetos desenvolvidos',
      sublabel: 'Sites, plataformas & marcas de alta demanda',
    },
    {
      value: '18',
      label: 'Marcas transformadas',
      sublabel: 'Reposicionamentos e novas identidades autorais',
    },
    {
      value: '07',
      label: 'Segmentos atendidos',
      sublabel: 'Arquitetura, M&A, Esporte, E-commerce e mais',
    },
    {
      value: '04',
      label: 'Anos construindo no digital',
      sublabel: 'Compromisso com consistência e evolução contínua',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#080A0D] border-t border-[#161A20] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Subtle section label */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-[#161A20]">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#6B7280]">
            <span className="w-4 h-[1px] bg-[#7DD3FC]" />
            <span className="font-semibold text-[#E5E7EB]/90">04 / MÉTRICAS CONCEITUAIS</span>
          </div>
          <span className="font-mono text-xs text-[#6B7280]">
            TRACK RECORD · 2022 — 2026
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 border border-[#161A20] bg-[#161A20]/20 hover:border-[#6B7280]/30 transition-colors flex flex-col justify-between space-y-6 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#6B7280]">
                  STAT 0{idx + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#161A20] group-hover:bg-[#7DD3FC] transition-colors" />
              </div>

              <div>
                <p className="text-5xl sm:text-6xl font-extrabold font-mono tracking-tight text-[#F8FAFC] tabular-nums group-hover:text-white transition-colors">
                  {stat.value}
                </p>
                <h3 className="mt-3 text-base font-bold text-[#E5E7EB] tracking-tight">
                  {stat.label}
                </h3>
                <p className="mt-1 text-xs text-[#6B7280] leading-relaxed">
                  {stat.sublabel}
                </p>
              </div>

              <div className="w-full h-[1px] bg-[#161A20] group-hover:bg-[#7DD3FC]/40 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
