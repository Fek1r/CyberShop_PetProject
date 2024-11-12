import React from 'react';
import Footer from '../footer/footer';
import './contact.css';
import img from './visa.png';

function Contact() {
    return (
        <div className="contact">
            <h1 className="contact-title">Letting Agents</h1>
            <div className="cont-info">
                <div className="agent">
                    <img src={img} alt="logo" className="img-logo" />
                    <div className="agent-info">
                        <h2 className="agent-name">Roman Koko</h2>
                        <p className="agent-phone">T: +371 00 000 000</p>
                        <p className="agent-email">E: romankoko@gmail.com</p>
                    </div>
                </div>
                <div className="agent">
                    <img src={img} alt="logo" className="img-logo" />
                    <div className="agent-info">
                        <h2 className="agent-name">Belij Koko</h2>
                        <p className="agent-phone">T: +371 00 000 000</p>
                        <p className="agent-email">E: belijkoko@gmail.com</p>
                    </div>
                </div>
                <div className="agent">
                    <img src={img} alt="logo" className="img-logo" />
                    <div className="agent-info">
                        <h2 className="agent-name">Vovka Koko</h2>
                        <p className="agent-phone">T: +371 00 000 000</p>
                        <p className="agent-email">E: Vovankoko@gmail.com</p>
                    </div>
                </div>
            </div>
            
            {/* Раздел On-site Marketing and Management Centre */}
            <div className="on-site">
                <h2 className="on-site-title">On-site Marketing and Management Centre</h2>
                <div className="on-site-agent-info">
                    <h3 className="on-site-agent-name">Sarah Molloy</h3>
                    <p className="on-site-agent-title">Park Manager</p>
                    <p className="on-site-agent-phone">T: 01923 252961</p>
                    <p className="on-site-agent-email">E: smolloy@croxleypark.com</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;
