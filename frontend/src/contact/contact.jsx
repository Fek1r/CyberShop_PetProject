import React from 'react';
import Footer from '../footer/footer';
import './contact.css';
import img1 from './human1.png';
import img2 from './human2.png';
import img3 from './human3.png';


function Contact() {
    return (
        <div className="contact">
            <h1 className="contact-title">Izīrēšanas aģenti</h1>
            <div className="cont-info">
                <div className="agent">
                    <img src={img1} alt="logo" className="img-logo" />
                    <div className="agent-info">
                        <h2 className="agent-name">Romans</h2>
                        <p className="agent-phone">T: +371 00 000 000</p>
                        <p className="agent-email">E: romankoko@gmail.com</p>
                    </div>
                </div>
                <div className="agent">
                    <img src={img2} alt="logo" className="img-logo" />
                    <div className="agent-info">
                        <h2 className="agent-name">Belijs</h2>
                        <p className="agent-phone">T: +371 00 000 000</p>
                        <p className="agent-email">E: belijkoko@gmail.com</p>
                    </div>
                </div>
                <div className="agent">
                    <img src={img3} alt="logo" className="img-logo" />
                    <div className="agent-info">
                        <h2 className="agent-name">Vovka</h2>
                        <p className="agent-phone">T: +371 00 000 000</p>
                        <p className="agent-email">E: Vovankoko@gmail.com</p>
                    </div>
                </div>
            </div>
            
            {/* On-site Marketing and Management Centre */}
            <div className="on-site">
                <h2 className="on-site-title">Tīkla mārketinga un pārvaldības centrs</h2>
                <div className="on-site-agent-info">
                    <h3 className="on-site-agent-name">Sara Molloja</h3>
                    <p className="on-site-agent-title">Parku vadītāja</p>
                    <p className="on-site-agent-phone">T: +371 00 000 000</p>
                    <p className="on-site-agent-email">E: meneger@gmail.com</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;
