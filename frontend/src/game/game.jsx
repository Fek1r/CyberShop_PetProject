import React from 'react';
import './game.css'; // Подключаем стили
import Image1 from './cs.jpg';
import Image2 from'./Dota_2.jpg';
import Image3 from './fortnite.jpg';
import Image4 from './LoL.jpg';
import Image5 from './Pubg.jpg';
import Image6 from './Valorant.jpeg';

import Footer from '../footer/footer'; // Используем изображение для каждой секции

const Park = () => {
    return (
        <div className="park-section">
            <Section title="CS 2" text="Description." image={Image1} />
            <Section title="Dota 2" text="Description" image={Image2} />
            <Section title="Fortnite" text="Description" image={Image3} />
            <Section title="League of Legends" text="Description" image={Image4} />
            <Section title="Pubg" text="Description" image={Image5} />
            <Section title="Valorant" text="Description" image={Image6} />
            <Footer/>
        </div>
    );
};

// Секционный компонент для каждого блока
const Section = ({ title, text, image }) => {
    return (
        <div className="section">
            <div className="section-content">
                <h2 className="section-title">{title}</h2>
                <p className="section-text">{text}</p>
            </div>
            <div className="section-image">
                <img src={image} alt={title} />
            </div>
        </div>
    );
};

export default Park;
