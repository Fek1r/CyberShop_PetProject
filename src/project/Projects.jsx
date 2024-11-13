import React from 'react';
import './Projects.css';
import projectImage1 from './home_image_1.jpg';
import projectImage2 from './home_image_2.jpg';
import projectImage3 from './home_image_3.jpg';
import Footer from '../footer/footer';

const Projects = () => {
    const projectsData = [
        {
            title: "Projekt 1",
            description: "Īss apraksts",
            image: projectImage1,
            link: "#",
            align: "right"
        },
        {
            title: "Projekt 2",
            description: "Īss apraksts",
            image: projectImage2,
            link: "#",
            align: "left"
        },
        {
            title: "Projekt 3",
            description: "Īss apraksts",
            image: projectImage3,
            link: "#",
            align: "right"
        }
    ];

    return (
        <div className="projects-section">
            {projectsData.map((project, index) => (
                <div key={index} className={`project-item ${project.align === "left" ? "left" : "right"}`}>
                    <div className="project-image-container">
                        <img src={project.image} alt={project.title} className="project-image" />
                    </div>
                    <div className="project-info">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} className="project-button">Apskatīt</a>
                    </div>
                </div>
            ))}
            <Footer/>
        </div>
    );
};

export default Projects;
