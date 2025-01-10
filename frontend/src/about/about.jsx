import React from 'react';
import './about.css';
import logo from './image.png'; 
import Footer from '../footer/footer';// Make sure to add your logo image in the same directory or specify the path accordingly.

function About() {
  return (
    <div className="about-us-page">
      <div className="about-us-container">
        <img src={logo} alt="Logo" className="about-us-logo" />
        <h1 className="about-us-title">Par mums</h1>
        <p className="about-us-text">
          Baltic Industrial Park is a warehousing, logistics and office park covering 12 ha in Rumbula industrial area. The park will undergo renovation to its outside and implement a sustainability program.​
        </p>
        <p className="about-us-text">
          Our objective is to create a brand identity to set the property as a dynamic, industrial-focused and sustainable-driven park. Our tenants are multinationals which are driven by the need to showcase focus on ESG. The park personality should project professionalism (impeccable in what we do), innovative and collaborative.​
        </p>
        <p className="about-us-text">
          We intend to leverage the brand identity to establish a presence online, comfort our existing tenants and attract new ones.​
        </p>
        <p className="about-us-text">
          Some of our competitors in Latvia:​
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
