import React from 'react';

export const StorySection: React.FC = () => {
  return (
    <section
      id="historia"
      className="relative py-20 md:py-32 bg-[#0E1E31] border-b border-[#1D3B5A] text-white overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#D6A84F]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#132A40]/80 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Master Card Layout (Matching the Reference UI) */}
        <div className="rounded-[32px] bg-[#0B1726]/90 border border-[#1D3B5A] shadow-2xl p-6 sm:p-10 lg:p-14 backdrop-blur-md relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Portrait */}
            <div className="lg:col-span-5 relative">
              
              {/* Photo Frame Container with Organic Blue Gradients */}
              <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-b from-[#132A40] via-[#1D3B5A]/60 to-[#0B1726] border border-[#1D3B5A] shadow-2xl aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] flex items-end justify-center">
                
                {/* Soft ambient concentric circular auras behind head */}
                <div className="absolute top-12 w-64 h-64 rounded-full bg-[#1D3B5A]/80 blur-2xl pointer-events-none" />
                <div className="absolute top-20 w-44 h-44 rounded-full bg-[#D6A84F]/15 blur-xl pointer-events-none" />

                {/* Professor Costa Portrait */}
                <img
                  src="/src/assets/images/prof_costa_portrait_1788296304120.jpg"
                  alt="Professor R. Costa"
                  className="w-full h-full object-cover object-top relative z-10 transition-transform duration-700 hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom Soft Vignette Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B1726] via-[#0B1726]/40 to-transparent z-10 pointer-events-none" />

              </div>

            </div>

            {/* Right Column: Bio & Author Details */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Instructor Name & Credentials */}
              <div className="space-y-1.5">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Professor R. Costa
                </h2>
                <div className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#D6A84F] uppercase">
                  JURISTA, EMPRESÁRIO E PALESTRANTE
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-[#F7F4EC]/90 leading-relaxed font-normal">
                <p>
                  Com mais de 35 anos dedicados ao estudo das leis, à gestão de empresas e à superação de crises severas. Ao longo dessa trajetória, viveu na pele quebras consecutivas, dívidas e a perda total do patrimônio — até entender que sem postura, princípios e alinhamento de direção, o esforço diário é apenas cansaço.
                </p>

                <p>
                  Foi ao parar, estudar profundamente os fundamentos da sabedoria prática e reconstruir sua própria vida passo a passo que consolidou o que hoje ensina: autorresponsabilidade, discernimento estratégico, gestão de relações e solidez patrimonial.
                </p>

                <div className="p-4 sm:p-5 rounded-xl bg-[#132A40]/80 border-l-4 border-[#D6A84F] border border-[#1D3B5A] text-sm sm:text-base text-white font-medium leading-relaxed">
                  A sua premissa é simples: <strong className="text-[#D6A84F]">ninguém precisa chegar ao fundo do poço para começar a mudar</strong>. O <span className="font-extrabold text-[#D6A84F]">MÉTODO PROSPERE DE ONDE ESTÁ®</span> sintetiza essa maturidade em 10 etapas claras e práticas para você aplicar na sua própria vida.
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
