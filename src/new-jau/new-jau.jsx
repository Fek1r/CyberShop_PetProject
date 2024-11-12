import React from 'react';
import './new-jau.css';
import partyImage from './party.png';

const NewsSection = () => {
    const newsData = [
        {
            title: "Croxley Park Survey",
            description: "We’re back with our Croxley Park Occupier Survey, and we want your feedback on all things events and activities!",
            image: partyImage, // use the same image for all items
            link: "#"
        },
        {
            title: "Watford Business Pledge",
            description: "The Watford Business Pledge recognizes businesses in Watford that commit to social responsibility, with five core areas: strong employment practices...",
            image: partyImage, // use the same image for all items
            link: "#"
        },
        {
            title: "Sustainability Report",
            description: "Our annual sustainability report is out! Read about our commitment to greener practices and how we're making a difference.",
            image: partyImage, // use the same image for all items
            link: "#"
        },
        {
            title: "Employee Wellness Program",
            description: "Discover our latest wellness programs designed to support employee health and happiness.",
            image: partyImage, // use the same image for all items
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
                    <a href={news.link} className="news-link">Read more</a>
                </div>
            ))}
        </div>
    );
};

export default NewsSection;
