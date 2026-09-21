import React from 'react';
import { PROBLEM_DATA } from '../data/courseData';

interface IdentificationSectionProps {
  onOpenCheckout?: () => void;
}

export const IdentificationSection: React.FC<IdentificationSectionProps> = () => {
  return (
    <section
      id="problema"
      className="relative py-20 md:py-28 bg-[#0E1E31] border-b border-[#1D3B5A] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-white uppercase mb-12">
          {PROBLEM_DATA.title}
        </h2>

        {/* 4 Effort Cadence Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {PROBLEM_DATA.rhythm.map((verb, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#132A40]/90 border border-[#1D3B5A] shadow-lg flex flex-col items-center justify-center transition-all hover:border-[#D6A84F]/60 group"
            >
              <span className="text-xs font-mono font-bold text-[#D6A84F] mb-1 group-hover:scale-110 transition-transform">
                0{idx + 1}
              </span>
              <span className="text-lg sm:text-xl font-bold text-white tracking-wide">
                {verb}
              </span>
            </div>
          ))}
        </div>

        {/* Narrative Blocks */}
        <div className="space-y-6 text-[#F7F4EC]/90 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto text-left sm:text-center">
          <p className="text-[#F7F4EC] font-medium">
            {PROBLEM_DATA.stagnation}
          </p>
          
          <p className="text-[#E8D5A8]/80 text-base sm:text-lg">
            {PROBLEM_DATA.insight}
          </p>

          <div className="pt-6 pb-2">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#132A40] to-[#0B1726] border border-[#1D3B5A] shadow-2xl text-center space-y-3">
              <p className="text-base sm:text-lg text-[#F7F4EC]/80 font-normal">
                {PROBLEM_DATA.coreDilemma}
              </p>
              <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F7F4EC] via-[#E8D5A8] to-[#D6A84F]">
                {PROBLEM_DATA.punchline}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
