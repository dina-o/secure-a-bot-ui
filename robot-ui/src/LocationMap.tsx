import { ArrowLeft, MapPin, Accessibility, CigaretteOff, Search  } from 'lucide-react';
import './LocationMap.css';

interface LocationMapProps {
  locationName: string;
  onBack: () => void;
}

export default function LocationMap({onBack }: LocationMapProps) {
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

      {/* Search Bar */}
      <div className="search-container">
        <Search/>
        <input
          type="text"
          className="search-input"
          placeholder="Search for a location..."
        />
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
        <span>You are here!</span>
      </button>
    </div>
  );
}