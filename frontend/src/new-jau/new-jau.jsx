import React from 'react';
import './new-jau.css';
import Image1 from './club.jpeg';
import Image2 from './pc_image.jpg';
import Image3 from './plan_club.png';
import Image4 from './PS5.jpg';
import Image5 from './solo.jpg';
import Image6 from './vip_room.jpg';
import Footer from '../footer/footer';

const NewsSection = () => {
    // Array of news items
    const newsItems = [
        {
            title: "Park Survey",
            description: "We are back with the Baltic Industrial Park tenant survey, and we want your feedback on all events and activities!",
            image: Image1,
            link: "#"
        },
        {
            title: "Watford Business Pledge",
            description: "The Watford Business Pledge recognizes businesses in Watford that commit to socially responsible action in five key areas: strong employment practices...",
            image: Image2,
            link: "#"
        },
        {
            title: "Sustainability Report",
            description: "Our annual sustainability report is here! Read about our commitment to greener practices and how we are making a difference.",
            image: Image3,
            link: "#"
        },
        {
            title: "Employee Wellbeing Program",
            description: "Discover our latest wellbeing programs designed to support employee health and happiness.",
            image: Image4,
            link: "#"
        },
        {
            title: "New Technology Platform",
            description: "We have developed a new platform that enables businesses to access the latest technologies faster and improve their workflows.",
            image: Image5,
            link: "#"
        },
        {
            title: "Corporate Social Responsibility",
            description: "Explore how our company is driving positive changes in society by supporting local communities and ecological projects.",
            image: Image6,
            link: "#"
        }
    ];

    return (
        <div className="news-section">
            {/* Iterating through the newsItems array */}
            {newsItems.map((news, index) => (
                <div key={index} className="news-item">
                    <img src={news.image} alt={news.title} className="news-image" />
                    <h3 className="news-title">{news.title}</h3>
                    <p className="news-description">{news.description}</p>
                </div>
            ))}
            
            <Footer />
        </div>
    );
};

export default NewsSection;
