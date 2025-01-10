import React from 'react';
import './planet.css'; // Подключение стилей
import solarParkImage from './pc_image.jpg';
import Footer from '../footer/footer'; // Подключение изображения солнечного парка
import MapComponent from '../location/location';

const Planet = () => {
    return (
        <div className="planet-section">
            <div className="planet-background"></div>
            <div className="planet-content">
                <h1 className="planet-title">PLANET BALTICA</h1>
                <p className="planet-description">
                    Our 5-year Vision is focused on transforming the future of sustainability. We're dedicated to enhancing the ESG (Environmental, Social, and Governance) roadmap through strategic initiatives like our state-of-the-art Solar Park and more.
                </p>
                
                <div className="roadmap-section">
                    <div className="roadmap-card">
                        <h3 className="roadmap-title">Year 1: Environmental Impact</h3>
                        <p className="roadmap-description">
                            Our first year focuses on minimizing carbon footprints and setting the foundation for sustainable practices across all operations.
                        </p>
                    </div>
                    <div className="roadmap-card">
                        <h3 className="roadmap-title">Year 2: Social Responsibility</h3>
                        <p className="roadmap-description">
                            Strengthening community relationships, promoting ethical labor practices, and focusing on diversity and inclusion within the workplace.
                        </p>
                    </div>
                    <div className="roadmap-card">
                        <h3 className="roadmap-title">Year 3-5: Scaling Innovation</h3>
                        <p className="roadmap-description">
                            Expanding renewable energy sources, including the large-scale Solar Park, and implementing advanced sustainable technologies across all departments.
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
