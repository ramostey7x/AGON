import React from 'react';
import { Logo } from './Logo';

export const FinalManifesto: React.FC = () => {
  return (
    <section className="relative py-32 md:py-48 bg-[#080A0D] border-t border-[#161A20] overflow-hidden">
      {/* Hairline subtle geometric lines */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-40"
        aria-hidden="true"
      />

      {/* Atmospheric center glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#7DD3FC]/[0.025] blur-[150px]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center relative z-10 space-y-16">
        {/* Abstract kicker */}
        <div className="inline-flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-[#6B7280]">
          <span className="w-8 h-[1px] bg-[#7DD3FC]" />
          <span>DECLARAÇÃO FINAL</span>
          <span className="w-8 h-[1px] bg-[#7DD3FC]" />
        </div>

        {/* Enormous Statement Typography */}
        <div className="space-y-6">
          <p className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-medium tracking-[-0.03em] text-[#6B7280] leading-[1.08] text-balance">
            Não queremos apenas criar coisas bonitas.
          </p>
          <p className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-extrabold tracking-[-0.035em] text-[#F8FAFC] leading-[1.08] text-balance">
            Queremos criar coisas que{' '}
            <span className="relative inline-block text-white">
              valham a pena
              <span className="absolute -bottom-1.5 left-0 w-full h-[2.5px] bg-[#7DD3FC]" />
            </span>
            .
          </p>
        </div>

        {/* Wordmark and Tagline */}
        <div className="pt-12 border-t border-[#161A20] flex flex-col items-center justify-center space-y-4">
          <Logo size="lg" />
          <p className="text-base sm:text-lg font-light tracking-[0.15em] text-[#6B7280] uppercase">
            "Lutar por algo que vale a pena."
          </p>
        </div>
      </div>
    </section>
  );
};
