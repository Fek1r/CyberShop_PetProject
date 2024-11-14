import React from 'react';
import './park.css'; // Подключаем стили
import Image1 from './image1.jpg';
import Footer from '../footer/footer'; // Используем изображение для каждой секции

const Park = () => {
    return (
        <div className="park-section">
            <Section title="History" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." image={Image1} />
            <Section title="Key Facts" text="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices." image={Image1} />
            <Section title="Why Utilities?" text="Mauris gravida lacus id suscipit tincidunt. Vivamus euismod." image={Image1} />
            <Section title="Masterplan" text="Sed consectetur erat vitae nisi tristique, eu varius enim aliquam." image={Image1} />
            <Section title="Location" text="Donec vel urna ut leo consequat dictum. Duis fermentum." image={Image1} />
            <Section title="Connections" text="Nulla sit amet dolor et risus tincidunt egestas. Integer fringilla." image={Image1} />
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
