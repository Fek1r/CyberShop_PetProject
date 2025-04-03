
import { Link } from 'react-router-dom';
import './header.css';
import image12345 from './12345.png'; 
import { useEffect } from 'react';

function Header() {
    useEffect(() => {
        const header = document.getElementById('header-new');
    
        window.onscroll = function () {
          if (window.scrollY > 50) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        };
      }, []);
    
    return (
        <div id='header-new' className="header-wrapper-n">
            <div className="header-n">
                <div className="logo-container">
                    <div className="logo-image-n"></div>
                </div>
                
                <ul className="link-container">
                    <li className="link-component"><Link to="/">HOME</Link></li>
                    <li className="link-component"><Link to="/reservation">RESERVATION</Link></li>
                    <li className="link-component"><Link to="/solution">SOLUTIONS</Link></li>
                    <li className="link-component"><Link to="/new-jau">NEWS</Link></li>
                    <li className="link-component"><Link to="/game">GAME</Link></li>
                    <li className="link-component"><Link to="/info">INFO</Link></li>
                    <li className="link-component"><Link to="/location">LOCATION</Link></li>
                </ul>

                <div className="contact-container">
                    <button><Link to="/contact">CONTACT US</Link></button>
                    <button><Link to="/login">Log In</Link></button>
                    <Link to="/profile">
                        <button className="image-button">
                          <img src={image12345} alt="Button Icon" className="image-icon"/>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Header;

