import React from 'react';
import { 
  Check, 
  ShieldCheck, 
  Lock, 
  ArrowUpRight 
} from '@phosphor-icons/react';
import { OFFER_DATA, GUARANTEE_DATA } from '../data/courseData';

interface OfferSectionProps {
  onOpenCheckout: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section
      id="oferta"
      className="relative py-20 md:py-32 bg-[#0E1E31] border-b border-[#1D3B5A] text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D6A84F]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight leading-tight">
            {OFFER_DATA.title}
          </h2>
          <p className="text-base sm:text-lg text-[#E8D5A8] font-medium">
            {OFFER_DATA.lead}
          </p>
        </div>

        {/* Master Offer Card */}
        <div className="rounded-3xl bg-[#132A40]/90 border-2 border-[#1D3B5A] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Deliverables List */}
          <div className="lg:col-span-7 p-8 sm:p-10 space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide uppercase">
              Tudo o que está incluso:
            </h3>

            <ul className="space-y-4">
              {OFFER_DATA.deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#0B1726] border border-[#1D3B5A] flex items-center justify-center text-[#D6A84F] shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-[#F7F4EC]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Pricing & Conversion Box */}
          <div className="lg:col-span-5 bg-[#0B1726] p-8 sm:p-10 flex flex-col justify-between items-center text-center space-y-6 border-t lg:border-t-0 lg:border-l border-[#1D3B5A]">
            
            <div className="text-xs font-mono font-bold tracking-widest text-[#D6A84F] uppercase">
              {OFFER_DATA.pricing.headline}
            </div>

            {/* Price Display */}
            <div className="space-y-1">
              <div className="flex items-baseline justify-center gap-1.5 text-white">
                <span className="text-2xl sm:text-3xl font-bold text-[#D6A84F]">R$</span>
                <span className="text-6xl sm:text-7xl font-black tracking-tight text-white">
                  97
                </span>
              </div>
              <div className="text-sm font-semibold text-[#E8D5A8]">
                {OFFER_DATA.pricing.installments}
              </div>
            </div>

            {/* CTA Button */}
            <div className="w-full space-y-3">
              <button
                onClick={onOpenCheckout}
                id="offer-cta-btn"
                className="w-full py-4.5 rounded-xl bg-gradient-to-r from-[#D6A84F] to-[#B88732] hover:from-[#E8D5A8] hover:to-[#D6A84F] text-[#0B1726] font-black text-sm sm:text-base uppercase tracking-wider transition-all duration-200 shadow-xl hover:shadow-yellow-500/20 hover:scale-[1.01] flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>{OFFER_DATA.ctaText}</span>
                <ArrowUpRight className="w-5 h-5 text-[#0B1726] stroke-[3]" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#E8D5A8]/80 font-medium">
                <Lock className="w-3.5 h-3.5 text-[#D6A84F]" />
                <span>Pagamento 100% seguro e criptografado</span>
              </div>
            </div>

            <p className="text-[11px] text-[#E8D5A8]/70">
              {OFFER_DATA.microcopy}
            </p>

          </div>

        </div>

        {/* 7 Days Guarantee Section */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#132A40]/80 border border-[#1D3B5A] flex flex-col sm:flex-row items-center gap-6 shadow-xl">
          <div className="w-16 h-16 rounded-2xl bg-[#0B1726] border border-[#1D3B5A] flex items-center justify-center text-[#D6A84F] shrink-0 shadow-md">
            <ShieldCheck className="w-9 h-9" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
              {GUARANTEE_DATA.title}
            </h4>
            <p className="text-sm sm:text-base text-[#F7F4EC]/90 leading-relaxed">
              {GUARANTEE_DATA.body.join(' ')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
