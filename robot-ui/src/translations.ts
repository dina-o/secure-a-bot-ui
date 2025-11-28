export type Language = 'en' | 'fr';

export interface LandingTranslations {
  greeting: string;
  subtext: string;
  instruction: string;
}

export interface Translations {
  [key: string]: LandingTranslations;
}

export const translations: Translations = {
  en: {
    greeting: "Hello,",
    subtext: "how can I help you today?",
    instruction: "Touch the screen to begin",
  },
  fr: {
    greeting: "Bonjour,",
    subtext: "comment puis-je vous aider aujourd'hui?",
    instruction: "Touchez l'écran pour commencer",
  },
};

export const getTranslation = (language: Language): LandingTranslations => {
  return translations[language];
};