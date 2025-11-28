import { ArrowLeft, MapPin, Accessibility, CigaretteOff, Search, Navigation  } from 'lucide-react';
import './LocationMap.css';
import { useState, useEffect } from 'react';
import selestLogo from './assets/selest-logo.png';

interface LocationMapProps {
  locationName: string;
  onBack: () => void;
}

export default function LocationMap({onBack }: LocationMapProps) {

    const [showFollowMe, setShowFollowMe] = useState(false);
    const [showSecondView, setShowSecondView] = useState(false);

    useEffect(() => {
        if (showFollowMe) {
            setShowSecondView(false);
            const timer = setTimeout(() => {
            setShowSecondView(true);
            setShowFollowMe(false);
            }, 6000);

            return () => clearTimeout(timer);
        }
    }, [showFollowMe]);

  return (
    <div className="location-map-container">
      <div className="map-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={32} />
          <span>Back</span>
        </button>

        <div className="map-title">PSE Level 2</div>

        <div className="map-controls">
          <button className="control-btn">
            <Accessibility/>
          </button>
          <button className="control-btn">
            <CigaretteOff/>
          </button>
        </div>
      </div>

    <div className='search-width'>
      <div className="search-container">
        <Search/>
        <input
          type="text"
          className="search-input"
          placeholder="Search for a location..."
        />
      </div>

    <div className='lets-go-container'>
      <Navigation className='navigation-icon'/>
      <button className='lets-go' onClick={() => setShowFollowMe(true)}>&nbsp; Let's Go!</button>
    </div>

    </div>
      <div className="map-grid">
        <div className="map-room lobby">
          <span>Lobby</span>
        </div>

        <div className="map-room front-desk">
          <span>Front Desk</span>
        </div>

        <div className="map-room restroom highlighted">
          <span className="rest-label">Restroom</span>
        </div>

        <div className="map-room admin">
          <span>Admin</span>
        </div>

        <div className="map-room event-hall">
          <span>Event Hall</span>
        </div>

        <div className="map-room cafe">
          <span>Cafe</span>
        </div>

        <div className="map-room storage">
          <span>Storage</span>
        </div>
      </div>

      <button className="you-are-here">
        <div className="location-dot"> <MapPin/></div>
        <span>You are here</span>
      </button>
      
      {/* Follow me Modal */}
      {showFollowMe && (
        <div className="modal-overlay" onClick={() => setShowFollowMe(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <button className="modal-close" onClick={() => setShowFollowMe(false)}>
                Back
              </button>
              
                <img src={selestLogo} alt="SELEST Logo" className="header-logo" />
             
            </div>
            <p className="modal-text">Follow me to your destination!</p>
          </div>
        </div>
      )}

      {showSecondView && (
        <div className="modal-overlay" onClick={() => setShowFollowMe(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              
                <img src={selestLogo} alt="SELEST Logo" className="header-logo" />
             
            </div>
            <p className="modal-text-2">You have arrived safely to the</p>
            <p className="destination-name">Restrooms</p>

            <p className='arrived-msg'>Please confirm your arrival by clicking the button below to end your session</p>
            <button className='arrived-btn'>Arrived</button>
          </div>
        </div>
      )}



    </div>
  );
}