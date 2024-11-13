import { Link } from 'react-router-dom';
import './head.css';

function Head(){
    return (
        
        <div className="return">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
            </style>
            <div className="head">
                <div className="logotype-n">
                    <Link to="/">
                        <div className="logotype">
                        </div>
                    
                    <p>BALTIJAS INDUSTRIĀLAIS PARKS</p>
                    </Link>
                </div>
                <div className="ul-elements">
                    <ul className="links-components">
                        <li><Link to="/projects">Projekti</Link></li>
                        <li><Link to="/new-jau">Jaunumi</Link></li>
                        <li><Link to="/projekti">Ilgtspējība</Link></li>
                        <li><Link to="/about">Par Mums</Link></li>
                    </ul>
                </div>
                <div class="contact-button">
                    <div class="circle"></div>
                    <button><Link to="/contact">Contact Us</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Head;
