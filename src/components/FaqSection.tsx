import React, { useState } from 'react';
import { CaretDown, ArrowUpRight } from '@phosphor-icons/react';
import { FAQ_DATA } from '../data/courseData';

interface FaqSectionProps {
  onOpenCheckout?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenCheckout }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenCheckout) {
      onOpenCheckout();
    }
  };

  return (
    <section
      id="faq"
      className="relative py-20 md:py-28 bg-[#0B1726] border-t border-b border-[#1D3B5A] text-white overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#D6A84F]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase leading-tight">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="text-sm sm:text-base text-[#E8D5A8]">
            Tire suas dúvidas sobre o curso e o acesso imediato.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-xl transition-all duration-200 overflow-hidden border ${
                  isOpen
                    ? 'bg-[#132A40] border-[#D6A84F]/80 shadow-xl'
                    : 'bg-[#132A40]/40 border-[#1D3B5A] hover:border-[#D6A84F]/40'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  id={`faq-item-toggle-${index}`}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? 'bg-[#D6A84F] text-[#0B1726] rotate-180 font-bold'
                      : 'bg-[#0B1726] text-[#E8D5A8] hover:bg-[#D6A84F] hover:text-[#0B1726]'
                  }`}>
                    <CaretDown className="w-4 h-4 stroke-[3]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#1D3B5A] text-sm sm:text-base text-[#F7F4EC]/90 leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="text-center pt-4">
          <button
            onClick={scrollToOffer}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#D6A84F] to-[#B88732] hover:from-[#E8D5A8] hover:to-[#D6A84F] text-[#0B1726] font-black text-sm sm:text-base uppercase tracking-wider transition-all duration-200 shadow-xl hover:shadow-yellow-500/20 hover:scale-[1.01] cursor-pointer"
          >
            <span>QUERO COMEÇAR O CURSO AGORA</span>
            <ArrowUpRight className="w-5 h-5 text-[#0B1726] stroke-[3]" />
          </button>
        </div>

      </div>
    </section>
  );
};
