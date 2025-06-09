import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Language, getTranslation } from '../lib/translationUtils';

interface LanguageStore {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      currentLanguage: 'en',
      setLanguage: (lang: Language) => set({ currentLanguage: lang }),
      t: (key: string) => getTranslation(get().currentLanguage, key),
    }),
    {
      name: 'language-storage',
    }
  )
);
