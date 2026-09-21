import React from 'react';
import { Lock, ArrowUp } from '@phosphor-icons/react';
import { FOOTER_DATA } from '../data/courseData';

interface FooterProps {
  onOpenLegal: (type: 'terms' | 'privacy' | 'support' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      className="bg-[#0B1726] border-t border-[#1D3B5A] text-[#F7F4EC] py-14"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1D3B5A]">
          
          {/* Brand info */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#D6A84F] to-[#B88732] flex items-center justify-center text-[#0B1726] font-black text-xs">
                RC
              </div>
              <span className="text-sm sm:text-base font-bold text-white tracking-wider">
                {FOOTER_DATA.brand}
              </span>
            </div>
            <p className="text-xs text-[#E8D5A8]/80 max-w-md font-medium">
              {FOOTER_DATA.author}
            </p>
          </div>

          {/* Legal and Support Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#E8D5A8]/80">
            {FOOTER_DATA.links.map((link, idx) => (
              <button
                key={idx}
                onClick={() => onOpenLegal(link.type)}
                className="hover:text-[#D6A84F] transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Back to top */}
          <div>
            <button
              onClick={scrollToTop}
              id="back-to-top-button"
              className="p-3 rounded-full bg-[#132A40] text-[#E8D5A8] hover:text-[#0B1726] hover:bg-[#D6A84F] transition-all border border-[#1D3B5A] flex items-center justify-center cursor-pointer shadow-md"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

        </div>

        {/* Security & Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-[#E8D5A8]/60">
          <div>
            © 2026 — {FOOTER_DATA.copyright}
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-[#E8D5A8]/80">
              <Lock className="w-3.5 h-3.5 text-[#D6A84F]" />
              Ambiente Seguro e Criptografado
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
