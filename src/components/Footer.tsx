import React from 'react';
import { Logo } from './Logo';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Processo', href: '#processo' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-[#080A0D] border-t border-[#161A20] text-[#E5E7EB] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="lg" />
            <p className="text-base text-[#6B7280] font-normal leading-relaxed max-w-sm">
              "Lutar por algo que vale a pena."
            </p>
            <p className="text-xs text-[#6B7280] font-mono leading-relaxed pt-2">
              AGON Digital · Design, tecnologia e estratégias orientadas para empresas que constroem legado.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-[#7DD3FC]">
              MAPA DO SITE
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm text-[#6B7280]">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-white transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between h-full">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#7DD3FC] mb-3">
                CONEXÃO
              </p>
              <div className="flex flex-col space-y-2 text-sm text-[#6B7280]">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram: @agon.digital
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn: AGON Digital
                </a>
                <a
                  href="mailto:hello@agon.digital"
                  className="hover:text-white transition-colors"
                >
                  hello@agon.digital
                </a>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6B7280] hover:text-[#7DD3FC] transition-colors cursor-pointer"
                aria-label="Voltar ao topo da página"
              >
                <span>Voltar ao topo</span>
                <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 border-t border-[#161A20] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6B7280]">
          <p>© 2026 AGON Digital. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span>Privacidade & LGPD</span>
            <span>·</span>
            <span>Termos de Serviço</span>
            <span>·</span>
            <span className="text-[#7DD3FC]/80">Rio de Janeiro · Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
