import React from 'react';
import './solution.css';
import Footer from '../footer/footer';
import image1 from './image22.png'; // Adjust the path based on your project structure

const Solutions = () => {
    return (
        <div className="solutions-section">
            <div className="solutions-content">
                <h2 className="solutions-title">SOLUTIONS</h2>
                <p className="solutions-description">
                    Build to suit, lease, Office-warehouse, Masterplan. We provide customized solutions tailored to meet the unique needs of businesses. Whether you're looking for state-of-the-art office spaces, versatile warehouses, or comprehensive master planning, we deliver with precision and quality.
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
