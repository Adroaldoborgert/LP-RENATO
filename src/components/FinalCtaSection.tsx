import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { FINAL_DECISION_DATA } from '../data/courseData';

interface FinalCtaSectionProps {
  onOpenCheckout: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenCheckout }) => {
  const scrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenCheckout();
    }
  };

  return (
    <section
      id="ultimo-cta"
      className="relative py-24 md:py-32 bg-[#0E1E31] text-white text-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D6A84F]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Minimalist Typography */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-tight uppercase">
            {FINAL_DECISION_DATA.title}
          </h2>
        </div>

        {/* Alternatives body */}
        <div className="space-y-3 text-lg sm:text-xl text-[#F7F4EC]/90 max-w-xl mx-auto leading-relaxed">
          <p className="text-[#E8D5A8]/80">
            {FINAL_DECISION_DATA.alternatives[0]}
          </p>
          <p className="text-white font-bold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#F7F4EC] via-[#E8D5A8] to-[#D6A84F]">
            {FINAL_DECISION_DATA.alternatives[1]}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4 space-y-3">
          <button
            onClick={scrollToOffer}
            id="final-cta-button"
            className="px-10 py-5 rounded-xl bg-gradient-to-r from-[#D6A84F] to-[#B88732] hover:from-[#E8D5A8] hover:to-[#D6A84F] text-[#0B1726] font-black text-base sm:text-lg uppercase tracking-[0.04em] transition-all duration-200 shadow-2xl hover:shadow-yellow-500/20 hover:scale-[1.01] inline-flex items-center gap-3 cursor-pointer"
          >
            <span>{FINAL_DECISION_DATA.ctaText}</span>
            <ArrowUpRight className="w-5 h-5 text-[#0B1726] stroke-[3]" />
          </button>

          <p className="text-xs text-[#E8D5A8] font-medium">
            {FINAL_DECISION_DATA.microcopy}
          </p>
        </div>

      </div>
    </section>
  );
};
