import './footer.css';
import React from 'react';
/*import { useLocation } from 'react-router-dom';*/
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
        <h2 className = 'loggo'>Baltic industrial park</h2>
        <nav className="footer-nav">
            <Link to="/about" className='foot_a'>Par mums</Link>
            <Link to="/contact" className='/foot_a'>Kontakti</Link>
            <Link to="/projects" className='foot_a'>Projekti</Link>
            <Link to="/new-jau" className='foot_a'>Jaunumi</Link>
            <Link to="/" className='foot_a'>Ilgtspējība</Link>
        </nav>
        <p>info.balticindustrial@gmail.com</p>
      <p>+371 00 000 00</p>
    </footer>
  );
}

export default Footer;