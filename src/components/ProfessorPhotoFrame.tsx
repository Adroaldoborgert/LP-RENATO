import React, { useRef, useState } from 'react';
import { Camera, CheckCircle2, UploadCloud } from 'lucide-react';
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
  const { photoUrl, handleFileSelect } = useProfessorPhoto();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [syncedToast, setSyncedToast] = useState(false);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
      setSyncedToast(true);
      setTimeout(() => setSyncedToast(false), 4000);
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
      setSyncedToast(true);
      setTimeout(() => setSyncedToast(false), 4000);
    }
  };

  return (
    <div
      className={`relative group ${className}`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={onDrop}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={onFileChange}
      />

      {/* Main Image Container */}
      <div
        className={`relative overflow-hidden rounded-2xl bg-[#132A40] border ${
          isDragging ? 'border-2 border-[#D6A84F] scale-[1.01]' : 'border-[#1D3B5A]'
        } shadow-2xl transition-all duration-300 ${aspectRatioClass}`}
      >
        <img
          src={photoUrl}
          alt={alt}
          className={`${imageClassName} transition-transform duration-700 group-hover:scale-[1.02]`}
          referrerPolicy="no-referrer"
        />

        {/* Drag overlay */}
        {isDragging && (
          <div className="absolute inset-0 bg-[#0B1726]/90 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-4 text-center border-2 border-dashed border-[#D6A84F] rounded-2xl">
            <UploadCloud className="w-10 h-10 text-[#D6A84F] animate-bounce mb-2" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Solte a foto aqui
            </span>
            <span className="text-xs text-[#E8D5A8]/80 mt-1">
              Salva automaticamente nos arquivos para a Hostinger
            </span>
          </div>
        )}

        {/* Subtle camera icon on hover for quick file adjustment and disk sync */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          aria-label="Atualizar foto para Hostinger"
          title="Clique para selecionar a foto e salvar diretamente no projeto para a Hostinger"
          className="absolute bottom-3 right-3 z-20 p-2.5 rounded-full bg-[#0B1726]/85 backdrop-blur-md border border-[#1D3B5A] text-[#E8D5A8] hover:text-[#0B1726] hover:bg-[#D6A84F] opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer shadow-lg hover:scale-105"
        >
          <Camera className="w-4 h-4" />
        </button>

        {/* Optional Vignette */}
        {showVignette && (
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B1726] via-[#0B1726]/40 to-transparent z-10 pointer-events-none" />
        )}
      </div>

      {/* Sync Confirmation Toast */}
      {syncedToast && (
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-40 px-3.5 py-1.5 rounded-lg bg-[#0B1726]/95 border border-[#D6A84F] text-[#F7F4EC] text-xs font-semibold shadow-xl flex items-center gap-2 whitespace-nowrap animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Foto sincronizada para o deploy na Hostinger!</span>
        </div>
      )}
    </div>
  );
};
