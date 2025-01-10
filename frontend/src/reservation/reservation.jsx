import React from "react";
import { Link } from "react-router-dom"; // Добавляем импорт Link
import "./reservation.css";
import Buy from "../buy/buy.jsx";
import projectImage1 from "./vip_rom.jpg";
import projectImage2 from "./solo.jpg";
import projectImage3 from "./PS5.jpg";
import Footer from "../footer/footer.jsx";

const Projects = () => {
  const projectsData = [
    {
      title: "VIP Room",
      description: " VIP Room 3 Best PC and 2 PS5 ",
      image: projectImage1,
      link: "#",
      align: "right",
    },
    {
      title: "For-1-PC-Player",
      description: "1 top pc ",
      image: projectImage2,
      link: "#",
      align: "left",
    },
    {
      title: "PS5",
      description: "PS5 player place",
      image: projectImage3,
      link: "#",
      align: "right",
    },
  ];

  return (
    <div className="projects-section">
      {projectsData.map((project, index) => (
        <div
          key={index}
          className={`project-item ${
            project.align === "left" ? "left" : "right"
          }`}
        >
          <div className="project-image-container">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          </div>
          <div className="project-info">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="buy-link">
              <a href="/buy" className="buy-button">Buy</a>
              <a href="/read-more" className="project-button">Read More</a>
            </div>
          </div>
        </div>
      ))}
      {/* Важно обернуть элементы верхнего уровня в один контейнер */}
      <Footer />
    </div>
  );
};

export default Projects;
