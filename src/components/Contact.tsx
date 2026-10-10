import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Instagram, Linkedin, CheckCircle, Send } from 'lucide-react';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    whatsapp: '',
    servico: initialService || 'Websites',
    orcamento: 'R$ 15k – R$ 35k',
    mensagem: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if initialService changed from parent click
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, servico: initialService }));
    }
  }, [initialService]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nome.trim()) newErrors.nome = 'Por favor, informe seu nome.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Informe um e-mail corporativo válido.';
    }
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'Informe um WhatsApp para contato rápido.';
    }
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Conte um pouco sobre o momento e necessidades do seu projeto.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate instantaneous high-touch agency receipt
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contato" className="py-28 md:py-36 bg-[#080A0D] border-t border-[#161A20] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Pre-Contact Impact CTA Banner */}
        <div className="mb-24 p-8 sm:p-14 border border-[#161A20] bg-gradient-to-r from-[#080A0D] via-[#0B1F3A]/30 to-[#080A0D] relative overflow-hidden">
          {/* Subtle light-blue radial spark */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#7DD3FC]/[0.08] blur-[80px]"
            aria-hidden="true"
          />

          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#7DD3FC]">
              INICIE SEU PROJETO
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8FAFC]">
              Tem algo que vale a pena construir?
            </h2>
            <p className="text-base sm:text-xl text-[#6B7280]">
              Vamos conversar sobre o próximo passo da sua empresa no digital.
            </p>
          </div>
        </div>

        {/* Contact Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Agency Channels & Address */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#6B7280] mb-4">
                <span className="w-4 h-[1px] bg-[#7DD3FC]" />
                <span className="font-semibold text-[#E5E7EB]/90">07 / CONTATO DIRETO</span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-[#F8FAFC]">
                Vamos construir algo.
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[#6B7280] leading-relaxed">
                Respondemos em até 24 horas úteis com uma avaliação prévia de escopo e disponibilidade de agenda.
              </p>
            </div>

            {/* Direct Info List */}
            <div className="space-y-6 pt-4 border-t border-[#161A20]">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 border border-[#161A20] bg-[#161A20]/20">
                <div className="w-9 h-9 rounded-sm border border-[#161A20] flex items-center justify-center text-[#7DD3FC] shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#6B7280]">E-MAIL OFICIAL</p>
                  <a
                    href="mailto:hello@agon.digital"
                    className="text-base font-semibold text-[#F8FAFC] hover:text-[#7DD3FC] transition-colors"
                  >
                    hello@agon.digital
                  </a>
                </div>
              </div>

              {/* WhatsApp / Phone */}
              <div className="flex items-start gap-4 p-4 border border-[#161A20] bg-[#161A20]/20">
                <div className="w-9 h-9 rounded-sm border border-[#161A20] flex items-center justify-center text-[#7DD3FC] shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#6B7280]">ATENDIMENTO DIRETO</p>
                  <a
                    href="tel:+5521999999999"
                    className="text-base font-semibold text-[#F8FAFC] hover:text-[#7DD3FC] transition-colors"
                  >
                    +55 21 99999-9999
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 border border-[#161A20] bg-[#161A20]/20">
                <div className="w-9 h-9 rounded-sm border border-[#161A20] flex items-center justify-center text-[#7DD3FC] shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#6B7280]">SEDE / BASE</p>
                  <p className="text-base font-semibold text-[#F8FAFC]">
                    Rio de Janeiro, Brasil
                  </p>
                  <p className="text-xs text-[#6B7280]">Atendimento remoto global</p>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-6 border-t border-[#161A20] space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-[#6B7280]">REDES PROFISSIONAIS</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-mono text-[#E5E7EB] border border-[#161A20] hover:border-[#6B7280] hover:text-white transition-colors"
                >
                  <Instagram size={14} className="text-[#7DD3FC]" />
                  <span>@agon.digital</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-mono text-[#E5E7EB] border border-[#161A20] hover:border-[#6B7280] hover:text-white transition-colors"
                >
                  <Linkedin size={14} className="text-[#7DD3FC]" />
                  <span>AGON Digital</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 border border-[#161A20] bg-[#161A20]/30 relative">
            {submitted ? (
              <div className="py-16 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#7DD3FC]/10 border border-[#7DD3FC] flex items-center justify-center text-[#7DD3FC]">
                  <CheckCircle size={32} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-[#F8FAFC]">
                    Projeto enviado com sucesso.
                  </h4>
                  <p className="text-sm text-[#6B7280] max-w-md mx-auto leading-relaxed">
                    Obrigado, <strong className="text-white">{formData.nome}</strong>. Recebemos seus dados para{' '}
                    <strong className="text-white">{formData.empresa || 'sua empresa'}</strong> e entraremos em contato via WhatsApp e e-mail em até 24 horas.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#161A20] flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        nome: '',
                        empresa: '',
                        email: '',
                        whatsapp: '',
                        servico: 'Websites',
                        orcamento: 'R$ 15k – R$ 35k',
                        mensagem: '',
                      });
                    }}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#6B7280] hover:text-white border border-[#161A20] cursor-pointer"
                  >
                    Enviar nova mensagem
                  </button>
                  <a
                    href="https://wa.me/5521999999999"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#F8FAFC] text-[#080A0D] hover:bg-white flex items-center gap-2 cursor-pointer"
                  >
                    <span>Falar no WhatsApp agora</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#161A20]">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#7DD3FC]">
                    FORMULÁRIO DE PROJETO
                  </span>
                  <span className="text-xs text-[#6B7280]">Campos com * são obrigatórios</span>
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#E5E7EB] mb-2">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Rafael Costa"
                      value={formData.nome}
                      onChange={(e) => {
                        setFormData({ ...formData, nome: e.target.value });
                        if (errors.nome) setErrors({ ...errors, nome: '' });
                      }}
                      className={`w-full px-4 py-3 bg-[#080A0D] border text-sm text-[#F8FAFC] placeholder-[#6B7280] focus:outline-none transition-colors ${
                        errors.nome
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-[#161A20] focus:border-[#7DD3FC]'
                      }`}
                    />
                    {errors.nome && (
                      <p className="mt-1 text-xs text-red-400">{errors.nome}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#E5E7EB] mb-2">
                      Empresa / Negócio
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Nova Arquitetura"
                      value={formData.empresa}
                      onChange={(e) =>
                        setFormData({ ...formData, empresa: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#080A0D] border border-[#161A20] focus:border-[#7DD3FC] text-sm text-[#F8FAFC] placeholder-[#6B7280] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#E5E7EB] mb-2">
                      E-mail corporativo *
                    </label>
                    <input
                      type="email"
                      placeholder="nome@empresa.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`w-full px-4 py-3 bg-[#080A0D] border text-sm text-[#F8FAFC] placeholder-[#6B7280] focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-[#161A20] focus:border-[#7DD3FC]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#E5E7EB] mb-2">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      placeholder="(21) 99999-9999"
                      value={formData.whatsapp}
                      onChange={(e) => {
                        setFormData({ ...formData, whatsapp: e.target.value });
                        if (errors.whatsapp) setErrors({ ...errors, whatsapp: '' });
                      }}
                      className={`w-full px-4 py-3 bg-[#080A0D] border text-sm text-[#F8FAFC] placeholder-[#6B7280] focus:outline-none transition-colors ${
                        errors.whatsapp
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-[#161A20] focus:border-[#7DD3FC]'
                      }`}
                    />
                    {errors.whatsapp && (
                      <p className="mt-1 text-xs text-red-400">{errors.whatsapp}</p>
                    )}
                  </div>
                </div>

                {/* Service Interest Picker */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#E5E7EB] mb-2">
                    Serviço principal de interesse
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'Websites',
                      'Landing Pages',
                      'Branding',
                      'Estratégia Digital',
                      'Automação & IA',
                      'Growth',
                    ].map((srv) => (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => setFormData({ ...formData, servico: srv })}
                        className={`py-2 px-3 text-xs font-medium border text-left transition-colors cursor-pointer truncate ${
                          formData.servico === srv
                            ? 'bg-[#0B1F3A] border-[#7DD3FC] text-white'
                            : 'bg-[#080A0D] border-[#161A20] text-[#6B7280] hover:text-[#E5E7EB]'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Investment Range */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#E5E7EB] mb-2">
                    Expectativa de investimento
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['R$ 8k – R$ 15k', 'R$ 15k – R$ 35k', 'Acima de R$ 35k'].map((budget) => (
                      <button
                        type="button"
                        key={budget}
                        onClick={() => setFormData({ ...formData, orcamento: budget })}
                        className={`py-2 px-2.5 text-xs text-center border transition-colors cursor-pointer truncate ${
                          formData.orcamento === budget
                            ? 'bg-[#161A20] border-[#7DD3FC] text-[#7DD3FC]'
                            : 'bg-[#080A0D] border-[#161A20] text-[#6B7280] hover:text-[#E5E7EB]'
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase text-[#E5E7EB] mb-2">
                    Conte um pouco sobre seu projeto *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Quais são os principais desafios da sua empresa hoje? Tem um prazo específico ou link do site atual?"
                    value={formData.mensagem}
                    onChange={(e) => {
                      setFormData({ ...formData, mensagem: e.target.value });
                      if (errors.mensagem) setErrors({ ...errors, mensagem: '' });
                    }}
                    className={`w-full px-4 py-3 bg-[#080A0D] border text-sm text-[#F8FAFC] placeholder-[#6B7280] focus:outline-none transition-colors resize-none ${
                      errors.mensagem
                        ? 'border-red-400 focus:border-red-400'
                        : 'border-[#161A20] focus:border-[#7DD3FC]'
                    }`}
                  />
                  {errors.mensagem && (
                    <p className="mt-1 text-xs text-red-400">{errors.mensagem}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-xs font-bold uppercase tracking-widest text-[#080A0D] bg-[#F8FAFC] hover:bg-white transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer hover:shadow-[0_0_25px_rgba(125,211,252,0.25)] active:scale-[0.99] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Enviando dados...</span>
                  ) : (
                    <>
                      <span>Enviar projeto →</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
