import React from 'react';
import './park.css'; // Подключаем стили
import Image1 from './solo.jpg';
import Image2 from'./plan_club.png';
import Image3 from './vip_room.jpg';
import Footer from '../footer/footer'; // Используем изображение для каждой секции

const Park = () => {
    return (
        <div className="park-section">
            <Section title="History" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." image={Image1} />
            <Section title="Key Facts" text="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices." image={Image2} />
            <Section title="Why Utilities?" text="Mauris gravida lacus id suscipit tincidunt. Vivamus euismod." image={Image3} />
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
