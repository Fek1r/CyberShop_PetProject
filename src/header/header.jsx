import { Link, useLocation } from 'react-router-dom';
import './header.css';


function Header(){
    return (
        <div className="returner">
            <div className="header">
                <div className="social-networks">
                    <a href=''><div className="image2"></div></a>
                    <a href=''><div className="image"></div></a>
                    <a href=''><div className="image1"></div></a>
                </div>
                <div className="logo">
                    <h1>Baltic industrial park</h1>
                </div>
                <div className="links">
                    <ul className='links-components'>
                        <li><Link to="/projekti">Projekti</Link></li>
                        <li><Link to="/projekti">Jaunumi</Link></li>
                        <li><Link to="/projekti">Ilgtspējība</Link></li>
                        <li><Link to="/projekti">Par mums</Link></li>
                        <li><Link to="/projekti">Kontakti</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default Header;