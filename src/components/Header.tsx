import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onStartProject: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onStartProject }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Processo', href: '#processo' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080A0D]/90 backdrop-blur-md border-b border-[#161A20] py-4 shadow-xl shadow-black/20'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#inicio"
            className="group inline-flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#7DD3FC]"
            aria-label="AGON Digital - Página Inicial"
          >
            <Logo size="md" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wider uppercase text-[#E5E7EB]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-[#F8FAFC] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#7DD3FC] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onStartProject}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#080A0D] bg-[#F8FAFC] hover:bg-white transition-all duration-200 hover:shadow-[0_0_24px_rgba(125,211,252,0.25)] active:scale-[0.98] cursor-pointer"
            >
              <span>Começar um projeto</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#7DD3FC] group-hover:scale-125 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F8FAFC] hover:text-[#7DD3FC] transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080A0D]/98 backdrop-blur-xl flex flex-col justify-between px-6 pt-28 pb-10 lg:hidden animate-in fade-in duration-200">
          <div className="space-y-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#6B7280]">Navegação</p>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-2xl font-semibold tracking-tight text-[#F8FAFC] hover:text-[#7DD3FC] flex items-center justify-between group py-1 border-b border-[#161A20]"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#6B7280] group-hover:text-[#7DD3FC]">
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#161A20]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full py-4 text-xs uppercase font-bold tracking-widest text-[#080A0D] bg-[#F8FAFC] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Começar um projeto</span>
              <ArrowUpRight size={16} />
            </button>
            <p className="text-[12px] text-[#6B7280] text-center tracking-wider">
              AGON Digital — Lutar por algo que vale a pena.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
