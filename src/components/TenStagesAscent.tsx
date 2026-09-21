import React from 'react';
import { 
  Question, 
  ArrowUpRight
} from '@phosphor-icons/react';
import { TEN_STAGES, TEN_STAGES_HEADER } from '../data/courseData';

interface TenStagesAscentProps {
  onOpenCheckout: () => void;
}

export const TenStagesAscent: React.FC<TenStagesAscentProps> = ({ onOpenCheckout }) => {
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
      id="etapas"
      className="relative py-20 md:py-32 bg-[#0B1726] text-white border-b border-[#1D3B5A] overflow-hidden"
    >
      {/* Background Solar & Deep Blue Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D6A84F]/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#132A40]/80 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#D6A84F] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#D6A84F]"></span>
            O Mapa Completo do Curso
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase leading-tight">
            {TEN_STAGES_HEADER.title}
          </h2>

          <p className="text-base sm:text-lg text-[#F7F4EC]/90 max-w-2xl mx-auto font-normal">
            {TEN_STAGES_HEADER.lead}
          </p>

          <p className="text-sm sm:text-base text-[#D6A84F] font-bold">
            {TEN_STAGES_HEADER.subtitle}
          </p>
        </div>

        {/* All 10 Stages Displayed Continuously in Order */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {TEN_STAGES.map((stage, idx) => {
            const isSummit = idx === 9; // Stage 10: Renúncia

            return (
              <div
                key={stage.number}
                id={`stage-card-${stage.number}`}
                className={`p-6 sm:p-7 rounded-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group ${
                  isSummit
                    ? 'bg-gradient-to-b from-[#132A40] to-[#0E1E31] border-2 border-[#D6A84F] shadow-2xl'
                    : 'bg-[#132A40]/85 border border-[#1D3B5A] hover:border-[#D6A84F]/60 shadow-lg'
                }`}
              >
                <div className="space-y-3.5 relative z-10">
                  
                  {/* Top: Number badge + Title */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D6A84F] to-[#B88732] flex items-center justify-center text-[#0B1726] font-black text-sm shadow-sm shrink-0">
                      {stage.number}
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                      {stage.title}
                    </h3>
                  </div>

                  {/* Text Below */}
                  <p className="text-sm sm:text-base text-[#F7F4EC]/90 leading-relaxed font-normal">
                    {stage.description[0]}
                  </p>

                </div>

                {/* Question Phrase */}
                <div className="mt-4 pt-3 border-t border-[#1D3B5A] flex items-start sm:items-center gap-2 text-xs sm:text-sm text-[#E8D5A8] italic">
                  <Question className="w-4 h-4 text-[#D6A84F] shrink-0 mt-0.5 sm:mt-0" />
                  <span>{stage.reflectionQuestion}</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Direct Transition Callout Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#0E1E31] border border-[#1D3B5A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D6A84F]">
              Jornada Estruturada Passo a Passo
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Pronto para Construir sua Trajetória Ascendente?
            </h4>
            <p className="text-xs sm:text-sm text-[#E8D5A8]/80">
              Todas as 10 etapas sequenciais e práticas liberadas de forma imediata na área de membros.
            </p>
          </div>

          <button
            onClick={scrollToOffer}
            id="ascension-cta-trigger"
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#D6A84F] to-[#B88732] hover:from-[#E8D5A8] hover:to-[#D6A84F] text-[#0B1726] text-xs sm:text-sm font-black uppercase tracking-[0.04em] transition-all shrink-0 flex items-center gap-2 shadow-lg cursor-pointer"
          >
            <span>QUERO GARANTIR MINHA VAGA</span>
            <ArrowUpRight className="w-4 h-4 text-[#0B1726] stroke-[3]" />
          </button>
        </div>

      </div>
    </section>
  );
};
