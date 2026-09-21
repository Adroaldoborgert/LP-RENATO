import React from 'react';
import { MANIFESTO_DATA } from '../data/courseData';

export const NotMagicSection: React.FC = () => {
  return (
    <section
      id="manifesto"
      className="relative py-20 md:py-28 bg-[#0B1726] border-b border-[#1D3B5A] text-white overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight leading-tight">
            {MANIFESTO_DATA.title}
          </h2>
          <p className="text-xl sm:text-2xl text-[#D6A84F] font-bold">
            {MANIFESTO_DATA.subtitle}
          </p>
        </div>

        {/* Manifesto Content Cards */}
        <div className="space-y-6 max-w-3xl mx-auto text-left sm:text-center text-[#F7F4EC]/90 text-base sm:text-lg leading-relaxed">
          
          <div className="p-6 sm:p-8 rounded-2xl bg-[#132A40]/90 border border-[#1D3B5A] space-y-4 shadow-xl">
            <p className="text-[#F7F4EC]/90">
              {MANIFESTO_DATA.body[0]}
            </p>
            <p className="text-white font-semibold text-lg sm:text-xl">
              {MANIFESTO_DATA.body[1]}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#132A40] to-[#0E1E31] border-l-4 border-[#D6A84F] border border-[#1D3B5A] space-y-3 shadow-2xl text-left">
            <p className="text-xl sm:text-2xl font-bold text-white">
              {MANIFESTO_DATA.body[2]}
            </p>
            <p className="text-[#F7F4EC]/90 text-base sm:text-lg">
              {MANIFESTO_DATA.body[3]}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
