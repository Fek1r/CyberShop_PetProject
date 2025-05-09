import React from 'react';
import './location.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Footer from '../../components/footer/footer';   // Import the Footer component

const MapComponent = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: 56.946,   // Latitude of Riga
    lng: 24.1059,  // Longitude of Riga
  };

  return (
    <div className='main-container'>
      <h2 className='page-name'>LOCATION</h2>
      
      <div className='content-container'>
        <div className='time-work'>
          <h3 className='work'>WORK TIME</h3>
          <div className='day-time'>
            <div className='day'>
              <p>Mon: 8-19</p>
            </div>
            <div className='day'>
              <p>Tue: 8-19</p>
            </div>
            <div className='day'>
              <p>Wed: 8-19</p>
            </div>
            <div className='day'>
              <p>Thu: 8-19</p>
            </div>
            <div className='day'>
              <p>Fri: 8-19</p>
            </div>
            <div className='day'>
              <p>Sat/Sun: 10-17</p>
            </div>
            <div className='address'>
              <p>Adres: Meza iela 3,LV-1000</p>
            </div>
          </div>
        </div>
        
        <div className='map-container'>
          <LoadScript googleMapsApiKey="AIzaSyDaTAS_u-4SxZOKn9gIsqdWNRrMaPkMsBc">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={12} // Adjust the zoom level
            />
          </LoadScript>
        </div>
      </div>

      {/* Call the Footer component */}
      <Footer />
    </div>
  );
};

export default MapComponent;
