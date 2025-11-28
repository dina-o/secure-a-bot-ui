import { HelpCircle, Toilet, Users, Coffee, Wifi, X, ShieldAlert, Smartphone } from 'lucide-react';
import { useState, useEffect } from 'react';
import './App.css';
import selestLogo from './assets/selest-logo.png';
import qrCodeImage from './assets/qrc.png';
import LocationMap from './LocationMap';

export default function SelestApp() {
  const [showQRModal, setShowQRModal] = useState(false);
    const [time, setTime] = useState("");

    useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const estTime = now.toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(estTime);
    };
     updateTime();                
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const [currentLocation, setCurrentLocation] = useState<string | null>(null);


  return (
    currentLocation ? (
      <LocationMap locationName={currentLocation} onBack={() => setCurrentLocation(null)} />
    ) : (

    <div className="app-container">

      <div className="header">
        <div className="header-left">
        <img src={selestLogo} alt="SELEST Logo" className="header-logo" />
        </div>
        <div className="header-time">{time}</div>
      </div>

      <div className="main-content">

        <div className="title-section">
          <div className="accent-bar"></div>
          <h1 className="main-title">Where do you want to go?</h1>
        </div>

        <div className="nav-container">
          <div className="location-row">
            <button className="location-btn">
              <HelpCircle size={48} />
              <span className="location-btn-text">Front Desk</span>
            </button>

            <button className="location-btn" onClick={() => setCurrentLocation('Restrooms')}>
              <Toilet size={48} />
              <span className="location-btn-text">Restrooms</span>
            </button>

            <button className="location-btn">
              <Users size={48} />
              <span className="location-btn-text">Event Hall</span>
            </button>

            <button className="location-btn">
              <Coffee size={48} />
              <span className="location-btn-text">Cafe</span>
            </button>

            <button className="location-btn">
              <Wifi size={48} />
              <span className="location-btn-text">Wifi Lounge</span>
            </button>
          </div>

          {/* Action Buttons Row */}
          <div className="action-row">
            <button className="action-btn action-btn-security">
              <span className="action-btn-text">Call Security Attendant</span>
              <ShieldAlert/>
            </button>


            <button className="action-btn action-btn-qr" onClick={() => setShowQRModal(true)}>
              <span className="action-btn-text">Connect to Mobile Through QR Code</span>
              <Smartphone/>
            </button>
          </div>
        </div>
      </div>

      {/* QR Modal */}
      {showQRModal && (
        <div className="modal-overlay" onClick={() => setShowQRModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
                      <img src={selestLogo} alt="SELEST Logo" className="header-logo" />
              <button className="modal-close" onClick={() => setShowQRModal(false)}>
                <X size={32} />
              </button>
            </div>
            <div className="qr-code-container">
              <img src={qrCodeImage} alt="QR Code" className="qr-code" />
            </div>
            <p className="modal-text">Scan to access SELEST Security Mobile App</p>
          </div>
        </div>
      )}
    </div>
  )
);
}