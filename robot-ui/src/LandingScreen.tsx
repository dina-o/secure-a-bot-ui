import { useState } from 'react';
import selestLogo from './assets/selest-logo.png';
import './LandingScreen.css';
import { Language, getTranslation } from './translations';

interface LandingScreenProps {
  onBegin: () => void;
}

export default function LandingScreen({ onBegin }: LandingScreenProps) {
  const [language, setLanguage] = useState<Language>('en');
  const current = getTranslation(language);

  return (
    <div className="landing-screen" onClick={onBegin}>
      <img src={selestLogo} alt="SELEST Logo" className="landing-logo" />

      <div className="landing-content">
        <div className="landing-text">
          <h1 className="landing-greeting">{current.greeting}</h1>
          <p className="landing-subtext">{current.subtext}</p>
        </div>

        <div className="landing-instruction">
          <p>{current.instruction}</p>
        </div>
      </div>

      <div className="landing-languages">
        <button
          className={`lang-btn ${language === 'en' ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setLanguage('en');
          }}
        >
          EN
        </button>
        <button
          className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setLanguage('fr');
          }}
        >
          FR
        </button>
      </div>
    </div>
  );
}