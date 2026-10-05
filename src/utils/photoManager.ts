import { useState, useEffect, useCallback } from 'react';
import defaultPortrait from '../assets/images/professor-costa.jpg';
import { EMBEDDED_CUSTOM_PHOTO } from '../assets/images/savedPhotoData';

const STORAGE_KEY = 'custom_prof_costa_photo';
const EVENT_NAME = 'prof-photo-changed';

export function getStoredProfessorPhoto(): string {
  // 1. Prioridade máxima: Foto embutida fisicamente no código do projeto
  if (EMBEDDED_CUSTOM_PHOTO && EMBEDDED_CUSTOM_PHOTO.startsWith('data:image/')) {
    return EMBEDDED_CUSTOM_PHOTO;
  }

  // 2. Segunda prioridade: Foto salva no localStorage da sessão atual
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved.startsWith('data:image/')) {
      return saved;
    }
  } catch (e) {
    console.warn('Could not read from localStorage:', e);
  }

  // 3. Imagem estática padrão
  return defaultPortrait;
}

export async function syncPhotoWithDisk(dataUrl: string): Promise<boolean> {
  try {
    const res = await fetch('/api/save-photo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dataUrl }),
    });
    if (res.ok) {
      console.log('✅ Foto do Professor salva com sucesso nos arquivos físicos para a Hostinger!');
      return true;
    }
  } catch (err) {
    // Modo estático no Hostinger ou fetch offline
    console.warn('[PhotoSync] Sincronização automática com servidor:', err);
  }
  return false;
}

// Auto-sincronizar assim que a página é carregada no navegador do usuário
if (typeof window !== 'undefined') {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved.startsWith('data:image/')) {
      syncPhotoWithDisk(saved);
    }
  } catch {
    // Ignora se localStorage restrito
  }
}

export function saveStoredProfessorPhoto(dataUrl: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, dataUrl);
  } catch (e) {
    console.warn('Could not save to localStorage:', e);
  }
  // Dispara sincronização em segundo plano para persistir nos arquivos físicos
  syncPhotoWithDisk(dataUrl);
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
    if (EMBEDDED_CUSTOM_PHOTO) return true;
    try {
      return !!localStorage.getItem(STORAGE_KEY);
    } catch {
      return false;
    }
  });

  useEffect(() => {
    // Tenta sincronizar com o disco sempre que o hook é montado
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && saved.startsWith('data:image/')) {
        syncPhotoWithDisk(saved);
      }
    } catch {
      // noop
    }

    const handleUpdate = () => {
      setPhotoUrl(getStoredProfessorPhoto());
      try {
        setIsCustom(!!EMBEDDED_CUSTOM_PHOTO || !!localStorage.getItem(STORAGE_KEY));
      } catch {
        setIsCustom(!!EMBEDDED_CUSTOM_PHOTO);
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
