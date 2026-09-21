import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';

interface NavbarProps {
  onOpenCheckout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenCheckout();
    }
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div 
        id="reading-progress-bar"
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-[#D6A84F] via-[#E8D5A8] to-[#D6A84F] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1726]/95 backdrop-blur-md border-b border-[#1D3B5A] py-3.5 shadow-xl'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Signature */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-[#D6A84F] to-[#B88732] flex items-center justify-center text-[#0B1726] font-black text-xs sm:text-sm shadow-md">
              RC
            </div>
            <div className="flex flex-col">
              <span className="tracking-[0.06em] text-xs sm:text-sm font-bold text-white uppercase">
                PROSPERE DE ONDE ESTÁ
              </span>
              <span className="text-[10px] tracking-[0.12em] text-[#E8D5A8] uppercase font-medium">
                Professor R. Costa
              </span>
            </div>
          </div>

          {/* Single Focused Direct CTA Button */}
          <button
            onClick={scrollToOffer}
            id="nav-cta-button"
            className="px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-[#D6A84F] to-[#B88732] hover:from-[#E8D5A8] hover:to-[#D6A84F] text-[#0B1726] font-extrabold text-xs rounded-lg tracking-[0.04em] uppercase transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <span>GARANTIR VAGA</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
          </button>
        </div>
      </header>
    </>
  );
};
