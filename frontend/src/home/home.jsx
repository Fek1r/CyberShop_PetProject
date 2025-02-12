import Footer from '../footer/footer';
import React from 'react';
import './home.css';
import pc from "./pc.png";

function HomePage() {
  return (
    <div className="home-section">
      {/* Home Background Text */}
      <div className="home-background">
        <div className="home-text-container">
          <h1 className="home-title"> Welcome to PC GAMING CLUB </h1>
          <p className="home-description">
          <img src={pc} className="logo-center2" />
          </p>
        </div>
      </div>
      <img src={pc} className="logo-center" />
      {/* About Us Section */}
      <div className="about-us-page">
        <div className="about-us-background">
          <h2 className="about-us-title">ABOUT US</h2>
          <p className="about-us-subtitle">Innovation starts with Baltic Park</p>
          
          <div className="about-us-block">
            <div className="about-us-item">
              <h3 className="about-us-item-title">Our Mission</h3>
              <p className="about-us-item-text">
                We revolutionize the industrial space, setting new standards in sustainability and growth.
              </p>
            </div>
            <div className="about-us-item">
              <h3 className="about-us-item-title">Our Vision</h3>
              <p className="about-us-item-text">
                Building a future-driven park for dynamic multinational tenants focused on ESG values.
              </p>
            </div>
            <div className="about-us-item">
              <h3 className="about-us-item-title">Our Commitment</h3>
              <p className="about-us-item-text">
                Embracing professionalism, innovation, and collaboration in everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default HomePage;
