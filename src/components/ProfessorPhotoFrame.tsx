import React, { useState } from 'react';
import defaultPortrait from '../assets/images/professor-costa.jpg';
import { EMBEDDED_CUSTOM_PHOTO } from '../assets/images/savedPhotoData';

interface ProfessorPhotoFrameProps {
  className?: string;
  imageClassName?: string;
  aspectRatioClass?: string;
  alt?: string;
  showVignette?: boolean;
}

export const ProfessorPhotoFrame: React.FC<ProfessorPhotoFrameProps> = ({
  className = '',
  imageClassName = 'w-full h-full object-cover',
  aspectRatioClass = 'aspect-[4/5]',
  alt = 'Professor R. Costa',
  showVignette = false,
}) => {
  // Fontes sequenciais de carregamento para garantir que a foto sempre apareça na Hostinger
  // 1. Asset com hash do Vite (elimina qualquer cache antigo no navegador/Hostinger)
  // 2. Caminho relativo público ./assets/images/professor-costa.jpg
  // 3. Caminho raiz relativo ./professor-costa.jpg
  // 4. Caminhos absolutos /assets/images/professor-costa.jpg e /professor-costa.jpg
  // 5. Base64 embutido fisicamente no código (garante 100% de exibição se nada mais carregar)
  const sources: string[] = [
    defaultPortrait,
    './assets/images/professor-costa.jpg',
    './professor-costa.jpg',
    '/assets/images/professor-costa.jpg',
    '/professor-costa.jpg',
  ];

  if (EMBEDDED_CUSTOM_PHOTO && EMBEDDED_CUSTOM_PHOTO.startsWith('data:image/')) {
    sources.push(EMBEDDED_CUSTOM_PHOTO);
  }

  const [sourceIndex, setSourceIndex] = useState(0);

  const handleImageError = () => {
    if (sourceIndex < sources.length - 1) {
      console.warn(`[ProfessorPhotoFrame] Tentando rota de fallback ${sourceIndex + 1} de ${sources.length - 1}`);
      setSourceIndex((prev) => prev + 1);
    }
  };

  const currentSrc = sources[sourceIndex] || defaultPortrait;

  return (
    <div className={`relative group ${className}`}>
      {/* Main Image Container */}
      <div
        className={`relative overflow-hidden rounded-2xl bg-[#132A40] border border-[#1D3B5A] shadow-2xl transition-all duration-300 ${aspectRatioClass} flex items-center justify-center`}
      >
        <img
          src={currentSrc}
          alt={alt}
          onError={handleImageError}
          loading="eager"
          decoding="sync"
          className={`${imageClassName} transition-transform duration-700 group-hover:scale-[1.02]`}
        />

        {/* Optional Vignette for Cinematic Depth */}
        {showVignette && (
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B1726] via-[#0B1726]/40 to-transparent z-10 pointer-events-none" />
        )}
      </div>
    </div>
  );
};
