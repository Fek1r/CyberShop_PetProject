import React from 'react';
import './new-jau.css';
import Image1 from './l1.jpg';
import Image2 from './l2.jpg';
import Image3 from './l3.jpg';
import Image4 from './l4.jpg';
import Image5 from './l5.jpg';
import Image6 from './l6.jpg';
import Footer from '../footer/footer';

const NewsSection = () => {
    const newsData = [
        {
            title: "Park Aptauja",
            description: "Mēs atgriežamies ar Baltic Industrial Park nomnieku aptauju, un mēs vēlamies jūsu atsauksmes par visiem pasākumiem un aktivitātēm!",
            image: Image1, // izmantojiet to pašu attēlu visiem elementiem
            link: "#"
        },
        {
            title: "Votfordas biznesa solījums",
            description: "Votfordas biznesa solījums atzīst uzņēmumus Votfordā, kas apņemas veikt sociāli atbildīgu darbību piecus galvenos virzienos: stipras nodarbinātības prakses...",
            image: Image2, // izmantojiet to pašu attēlu visiem elementiem
            link: "#"
        },
        {
            title: "Ilgtspējas ziņojums",
            description: "Mūsu ikgadējais ilgtspējas ziņojums ir klāt! Lasiet par mūsu apņemšanos īstenot zaļākas prakses un to, kā mēs veicam izmaiņas.",
            image: Image3, // izmantojiet to pašu attēlu visiem elementiem
            link: "#"
        },
        {
            title: "Darbinieku labklājības programma",
            description: "Atklājiet mūsu jaunākās labklājības programmas, kas paredzētas, lai atbalstītu darbinieku veselību un laimi.",
            image: Image4, // izmantojiet to pašu attēlu visiem elementiem
            link: "#"
        },
        {
            title: "Jaunā tehnoloģiju platforma",
            description: "Mēs esam izstrādājuši jaunu platformu, kas ļauj uzņēmumiem ātrāk piekļūt jaunākajām tehnoloģijām un uzlabot savus darba procesus.",
            image: Image5, // izmantojiet to pašu attēlu visiem elementiem
            link: "#"
        },
        {
            title: "Korporatīvā sociālā atbildība",
            description: "Izpētiet, kā mūsu uzņēmums veicina pozitīvas izmaiņas sabiedrībā, atbalstot vietējās kopienas un ekoloģiskos projektus.",
            image: Image6, // izmantojiet to pašu attēlu visiem elementiem
            link: "#"
        }
    ];

    return (
        <div className="news-section">
            {newsData.map((news, index) => (
                <div key={index} className="news-item">
                    <img src={news.image} alt={news.title} className="news-image" />
                    <h3 className="news-title">{news.title}</h3>
                    <p className="news-description">{news.description}</p>
                    <a href={news.link} className="news-link">Lasīt vairāk</a>
                </div>
            ))}
            <Footer/>
        </div>
    );
};

export default NewsSection;
