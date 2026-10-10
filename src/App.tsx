/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Services } from './components/Services';
import { Diferencial } from './components/Diferencial';
import { Projects } from './components/Projects';
import { Stats } from './components/Stats';
import { Process } from './components/Process';
import { About } from './components/About';
import { FinalManifesto } from './components/FinalManifesto';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');

  const scrollToContact = () => {
    const contactElem = document.getElementById('contato');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsElem = document.getElementById('projetos');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#080A0D] text-[#F8FAFC] selection:bg-[#7DD3FC] selection:text-[#080A0D]">
      {/* 1. Header */}
      <Header onStartProject={scrollToContact} />

      <main>
        {/* 2. Hero */}
        <Hero
          onStartProject={scrollToContact}
          onViewProjects={scrollToProjects}
        />

        {/* 3. Manifesto */}
        <Manifesto />

        {/* 4. Serviços */}
        <Services onSelectService={handleSelectService} />

        {/* 5. Diferencial (3 Pilares) */}
        <Diferencial />

        {/* 6. Projetos */}
        <Projects onStartProject={scrollToContact} />

        {/* 7. Números / Métricas */}
        <Stats />

        {/* 8. Processo */}
        <Process />

        {/* 9. Sobre a AGON */}
        <About />

        {/* 10. Manifesto Final */}
        <FinalManifesto />

        {/* 11 & 12. CTA & Contato */}
        <Contact initialService={selectedServiceForContact} />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
