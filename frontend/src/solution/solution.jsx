import React from 'react';
import './solution.css';
import Footer from '../footer/footer';
import image1 from './image222.png'; // Adjust the path based on your project structure

const Solutions = () => {
    return (
        <div className="solutions-section">
            <div className="solutions-content">
                <h2 className="solutions-title">SOLUTIONS</h2>
                <p className="solutions-description">
                    Gaming setups, Dedicated Spaces, LAN areas, Custom planning. We provide customized solutions tailored specifically for computer clubs and esports centers. Whether you're looking for state-of-the-art gaming stations, dedicated streaming rooms, fully-equipped LAN areas, or comprehensive facility layouts, we deliver precision, quality, and optimal performance to elevate every gamer's experien
                </p>
            </div>
            <div className="solutions-image-container">
                <img src={image1} alt="Solutions" className="solutions-image" />
            </div>
            <Footer />
        </div>
    );
};

export default Solutions;
