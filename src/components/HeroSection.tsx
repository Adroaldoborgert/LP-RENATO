import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { HERO_DATA } from '../data/courseData';

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout }) => {
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
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#0B1726] text-white border-b border-[#1D3B5A] overflow-hidden flex items-center"
    >
      {/* Background Soft Solar & Deep Blue Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#D6A84F]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-10 w-[500px] h-[350px] bg-[#132A40]/80 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Brand Eyebrow */}
            <div className="text-xs font-bold tracking-[0.2em] text-[#D6A84F] uppercase font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D6A84F] animate-pulse"></span>
              {HERO_DATA.brand}
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-[-0.03em] text-white leading-[1.15]">
              {HERO_DATA.title}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-[#F7F4EC]/90 leading-[1.65] max-w-2xl font-normal">
              {HERO_DATA.subtitle}
            </p>

            {/* CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button
                onClick={scrollToOffer}
                id="hero-primary-cta"
                className="px-8 py-4 sm:py-4.5 rounded-lg bg-gradient-to-r from-[#D6A84F] to-[#B88732] hover:from-[#E8D5A8] hover:to-[#D6A84F] text-[#0B1726] font-black text-sm sm:text-base tracking-[0.04em] uppercase transition-all duration-200 shadow-xl hover:shadow-yellow-500/20 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>{HERO_DATA.ctaText}</span>
                <ArrowUpRight className="w-5 h-5 text-[#0B1726] stroke-[3]" />
              </button>
            </div>

            {/* Microcopy */}
            <div className="pt-1 text-xs text-[#E8D5A8] font-medium">
              {HERO_DATA.microcopy}
            </div>

          </div>

          {/* Portrait Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Subtle solar halo behind portrait */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-[#D6A84F]/30 to-[#132A40]/40 blur-sm"></div>
              
              <div className="relative rounded-2xl overflow-hidden bg-[#132A40] border border-[#1D3B5A] shadow-2xl">
                <img
                  src="/src/assets/images/prof_costa_portrait_1788296304120.jpg"
                  alt="Professor R. Costa"
                  className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
