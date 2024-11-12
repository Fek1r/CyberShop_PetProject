import React from 'react';
import './new-jau.css';

const NewsSection = () => {
    return (
        <div className="news-section-container">
            <h2 className="section-title">Jaunākās ziņas</h2>
            <p className="section-subtitle">Sekojiet līdzi jaunākajām ziņām un rakstiem</p>

            <div className="cards-container">
                <div className="news-card">
                    <h3 className="card-title">Ziņu raksts 1</h3>
                    <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium massa non arcu consequat, vel convallis urna sollicitudin.</p>
                    <button className="read-more-button">Lasīt vairāk</button>
                </div>

                <div className="news-card">
                    <h3 className="card-title">Ziņu raksts 2</h3>
                    <p className="card-description">Suspendisse potenti. Etiam ac libero ac augue placerat consectetur ut sit amet turpis.</p>
                    <button className="read-more-button">Lasīt vairāk</button>
                </div>

                <div className="news-card">
                    <h3 className="card-title">Ziņu raksts 3</h3>
                    <p className="card-description">Mauris sit amet lacus nec sapien consectetur bibendum. Integer hendrerit interdum risus, ac faucibus dui varius sit amet.</p>
                    <button className="read-more-button">Lasīt vairāk</button>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;
