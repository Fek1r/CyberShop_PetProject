import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <Link to="/home" className="footer-link"><h3>HOME</h3></Link>
        <ul>
          <li><Link to="/" className="footer-link"></Link></li>
          <li><Link to="/" className="footer-link"></Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <Link to="/location" className="footer-link"><h3>LOCATION</h3></Link>
        <ul>
          <li><Link to="/" className="footer-link"></Link></li>
          <li><Link to="/" className="footer-link"></Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <Link to="/reservation" className="footer-link"><h3>RESERVATION</h3></Link>
        <ul>
          <li><Link to="/" className="footer-link"></Link></li>
          <li><Link to="/" className="footer-link"></Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <Link to="/new-jau" className="footer-link"><h3>NEWS</h3></Link>
        <ul>
          <li><Link to="/" className="footer-link"></Link></li>
          <li><Link to="/" className="footer-link"></Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <Link to="/contact" className="footer-link"><h3>CONTACT</h3></Link>
        <ul>
          <li><Link to="/" className="footer-link"></Link></li>
          <li><Link to="/" className="footer-link"></Link></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <h3>CONNECT WITH US ON SOCIAL MEDIA</h3>
        <p>© 2025 PC Gaming Club.</p>
      </div>
    </footer>
  );
};

export default Footer;
