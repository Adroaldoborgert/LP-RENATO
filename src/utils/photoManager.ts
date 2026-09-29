import { useState, useEffect, useCallback } from 'react';
import defaultPortrait from '../assets/images/professor-costa.jpg';

const STORAGE_KEY = 'custom_prof_costa_photo';
const EVENT_NAME = 'prof-photo-changed';

export function getStoredProfessorPhoto(): string {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved.startsWith('data:image/')) {
      return saved;
    }
  } catch (e) {
    console.warn('Could not read from localStorage:', e);
  }
  return defaultPortrait;
}

export function saveStoredProfessorPhoto(dataUrl: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, dataUrl);
  } catch (e) {
    console.warn('Could not save to localStorage:', e);
  }
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: dataUrl }));
}

export function resetStoredProfessorPhoto(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.warn('Could not clear localStorage:', e);
  }
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: defaultPortrait }));
}

export function useProfessorPhoto() {
  const [photoUrl, setPhotoUrl] = useState<string>(getStoredProfessorPhoto);
  const [isCustom, setIsCustom] = useState<boolean>(() => {
    try {
      return !!localStorage.getItem(STORAGE_KEY);
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const handleUpdate = () => {
      setPhotoUrl(getStoredProfessorPhoto());
      try {
        setIsCustom(!!localStorage.getItem(STORAGE_KEY));
      } catch {
        setIsCustom(false);
      }
    };

    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const handleFileSelect = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione um arquivo de imagem válido (JPEG, PNG ou WEBP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        saveStoredProfessorPhoto(result);
      }
    };
    reader.readAsDataURL(file);
  }, []);

  return {
    photoUrl,
    isCustom,
    handleFileSelect,
    resetPhoto: resetStoredProfessorPhoto,
  };
}
