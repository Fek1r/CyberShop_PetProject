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
            <Section title="CS 2" text="The legendary tactical shooter returns, bringing refined gameplay, improved graphics, and ultra-responsive gunplay. Precision, teamwork, and split-second decision-making define each intense round, making every victory thrilling and hard-earned." image={Image1} />
            <Section title="Dota 2" text="An iconic multiplayer battle arena where teams of heroes with unique abilities clash in epic 5v5 battles. Strategic thinking, quick reflexes, and teamwork make every match thrilling and unforgettable." image={Image2} />
            <Section title="Fortnite" text="A vibrant battle royale phenomenon that combines fast-paced combat and creative building mechanics. Fight, build, and survive in an ever-changing world until only one player or team remains victorious." image={Image3} />
            <Section title="League of Legends" text="A fast-paced competitive MOBA that blends intense combat with deep strategy. Choose your champion, master unique skills, and battle alongside your team to dominate the Rift." image={Image4} />
            <Section title="Pubg" text="The classic battle royale that redefined survival gaming. Parachute onto a sprawling battlefield, scavenge weapons, and outsmart your opponents until you're the last one standing." image={Image5} />
            <Section title="Valorant" text="A tactical FPS game combining precise gunplay with unique agent abilities. Teamwork, sharp shooting, and clever use of powers decide who claims victory in intense 5v5 matches." image={Image6} />
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
