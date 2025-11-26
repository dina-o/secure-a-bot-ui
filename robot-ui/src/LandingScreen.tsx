import selestLogo from './assets/selest-logo.png';
import './LandingScreen.css';

interface LandingScreenProps {
  onBegin: () => void;
}

export default function LandingScreen({ onBegin }: LandingScreenProps) {
  return (
    <div className="landing-screen" onClick={onBegin}>
          <img src={selestLogo} alt="SELEST Logo" className="landing-logo" />

      <div className="landing-content">

        <div className="landing-text">
          <h1 className="landing-greeting">Hello,</h1>
          <p className="landing-subtext">how can I help you today?</p>
        </div>

        <div className="landing-instruction">
          <p>Touch the screen to begin</p>
        </div>
      </div>

        <div className="landing-languages">
          <button className="lang-btn">EN</button>
          <button className="lang-btn">FR</button>
        </div>
    </div>
  );
}