import React from 'react';
import './info.css'; // Подключение стилей
import solarParkImage from './pc_image.jpg';
import Footer from '../footer/footer'; // Подключение изображения солнечного парка
import MapComponent from '../location/location';

const Planet = () => {
    return (
        <div className="planet-section">
            <div className="planet-background"></div>
            <div className="planet-content">
                <h1 className="planet-title">INFO</h1>
                <p className="planet-description">
                Our 5-year Vision is focused on redefining the esports and gaming community experience. We're dedicated to fostering sustainable growth through innovative gaming solutions, advanced technology, and inclusive community development.
                </p>
                
                <div className="roadmap-section">
                    <div className="roadmap-card">
                        <h3 className="roadmap-title">Year 1: Environmental Impact</h3>
                        <p className="roadmap-description">
                        Our first year focuses on creating a welcoming, inclusive gaming environment and establishing high-quality infrastructure, providing gamers with exceptional playing conditions and reliable network performance.
                        </p>
                    </div>
                    <div className="roadmap-card">
                        <h3 className="roadmap-title">Year 2: Social Responsibility</h3>
                        <p className="roadmap-description">
                        Strengthening community ties through tournaments, workshops, and local partnerships. We prioritize ethical practices, diversity, and creating safe, positive spaces for all players and staff.
                        </p>
                    </div>
                    <div className="roadmap-card">
                        <h3 className="roadmap-title">Year 3-5: Scaling Innovation</h3>
                        <p className="roadmap-description">
                        Expanding our club’s capabilities by integrating cutting-edge gaming hardware, dedicated streaming studios, and advanced LAN facilities. We aim to lead innovation in esports experiences, positioning our club as a premier gaming destination.
                        </p>
                    </div>
                </div>

                <div className="solar-park">
                    <img src={solarParkImage} alt="Solar Park" />
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Planet;
