import { Link } from 'react-router-dom';
import './head.css';
import { useEffect } from 'react';

function Head() {
  useEffect(() => {
    const header = document.getElementById('header');

    window.onscroll = function () {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
  }, []);

  return (
    <div className="return">
      <div id="header" className="head">
        <div className="logotype-n">
          <Link to="/">
            <div className="logotype"></div>
            <p>BALTIJAS INDUSTRIALAIS PARKS</p>
          </Link>
        </div>
        <div className="ul-elements">
          <ul className="links-components">
            <li><Link to="/projects">Projekti</Link></li>
            <li><Link to="/new-jau">Jaunumi</Link></li>
            <li><Link to="/location">Location</Link></li>
          </ul>
        </div>
        <div className="contact-button">
          <div className="circle"></div>
          <button><Link to="/contact">Contact Us</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Head;
