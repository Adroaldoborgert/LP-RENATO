import React from 'react';
import { useProfessorPhoto } from '../utils/photoManager';

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
  const { photoUrl } = useProfessorPhoto();

  return (
    <div className={`relative ${className}`}>
      {/* Main Image Container */}
      <div
        className={`relative overflow-hidden rounded-2xl bg-[#132A40] border border-[#1D3B5A] shadow-2xl ${aspectRatioClass}`}
      >
        <img
          src={photoUrl}
          alt={alt}
          className={`${imageClassName} transition-transform duration-700 hover:scale-[1.02]`}
          referrerPolicy="no-referrer"
        />

        {/* Optional Vignette */}
        {showVignette && (
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B1726] via-[#0B1726]/40 to-transparent z-10 pointer-events-none" />
        )}
      </div>
    </div>
  );
};
