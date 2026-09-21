import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IdentificationSection } from './components/IdentificationSection';
import { TenStagesAscent } from './components/TenStagesAscent';
import { StorySection } from './components/StorySection';
import { NotMagicSection } from './components/NotMagicSection';
import { OfferSection } from './components/OfferSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { LegalModal } from './components/LegalModal';
import { ArrowUpRight } from '@phosphor-icons/react';

export function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | 'support' | 'contact' | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bottom conversion bar after scrolling past the hero
      const scrollY = window.scrollY;
      setShowStickyBar(scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsCheckoutOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1726] text-[#F7F4EC] selection:bg-[#D6A84F]/30 selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Top Header Bar */}
      <Navbar onOpenCheckout={() => setIsCheckoutOpen(true)} />

      {/* Main Sequential Conversion Flow */}
      <main className="relative">
        {/* SEÇÃO 01 — HERO */}
        <HeroSection onOpenCheckout={() => setIsCheckoutOpen(true)} />

        {/* SEÇÃO 02 — IDENTIFICAÇÃO / O PROBLEMA */}
        <IdentificationSection onOpenCheckout={() => setIsCheckoutOpen(true)} />

        {/* SEÇÃO 03 — AS 10 ETAPAS (TRAJETÓRIA ASCENDENTE) */}
        <TenStagesAscent onOpenCheckout={() => setIsCheckoutOpen(true)} />

        {/* SEÇÃO 04 — A HISTÓRIA REAL / AUTORIDADE */}
        <StorySection />

        {/* SEÇÃO 05 — MANIFESTO: NÃO É UMA FÓRMULA MÁGICA */}
        <NotMagicSection />

        {/* SEÇÃO 06 — A OFERTA (O QUE VOCÊ VAI RECEBER) */}
        <OfferSection onOpenCheckout={() => setIsCheckoutOpen(true)} />

        {/* SEÇÃO 07 — PERGUNTAS FREQUENTES */}
        <FaqSection onOpenCheckout={() => setIsCheckoutOpen(true)} />

        {/* SEÇÃO 08 — DECISÃO FINAL & ÚLTIMO CTA */}
        <FinalCtaSection onOpenCheckout={() => setIsCheckoutOpen(true)} />
      </main>

      {/* Mobile / Desktop Bottom Floating Action Bar */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#0B1726]/95 backdrop-blur-md border-t border-[#1D3B5A] shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                PROSPERE DE ONDE ESTÁ
              </span>
              <span className="text-[11px] text-[#D6A84F] block font-medium">
                R$ 97 à vista ou até 12x • Garantia 7 Dias
              </span>
            </div>
            
            <button
              onClick={scrollToOffer}
              id="sticky-bar-cta-btn"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#D6A84F] to-[#B88732] hover:from-[#E8D5A8] hover:to-[#D6A84F] text-[#0B1726] font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <span>GARANTIR ACESSO AGORA</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* Transparency Legal Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;
