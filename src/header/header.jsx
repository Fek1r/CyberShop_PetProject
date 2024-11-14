import { Link } from 'react-router-dom';
import './header.css';
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
                    <li className="link-component">PROJECTS</li>
                    <li className="link-component">NEWS</li>
                    <li className="link-component">ABOUT US</li>
                    <li className="link-component">MAINTENANCE</li>
                </ul>

                <div className="contact-container">
                    <button>CONTACT US</button>
                </div>
              
            </div>
        </div>
    );
}

export default Header;
