import React, { useState, useEffect } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  // Sample project data - you can replace this with your actual projects
  const projectsData = [
    {
      id: 1,
      title: "Personal Portfolio",
      description:
        "A responsive portfolio website built with React and CSS animations to showcase my projects and skills.",
      technologies: ["React", "CSS", "JavaScript"],
      image: "https://via.placeholder.com/600x340?text=Portfolio+Website",
      liveLink: "#",
      codeLink: "https://github.com/yourusername/portfolio",
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description:
        "An interactive dashboard for e-commerce analytics with real-time data visualization and filtering capabilities.",
      technologies: ["React", "Chart.js", "Node.js", "Express"],
      image: "https://via.placeholder.com/600x340?text=E-commerce+Dashboard",
      liveLink: "#",
      codeLink: "https://github.com/yourusername/ecommerce-dashboard",
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "A weather application that provides current weather data and forecasts based on user location or search.",
      technologies: ["JavaScript", "API", "CSS", "HTML"],
      image: "https://via.placeholder.com/600x340?text=Weather+App",
      liveLink: "#",
      codeLink: "https://github.com/yourusername/weather-app",
    },
    {
      id: 4,
      title: "Task Management App",
      description:
        "A full-stack application for managing tasks and projects with user authentication and real-time updates.",
      technologies: ["React", "Firebase", "Material UI"],
      image: "https://via.placeholder.com/600x340?text=Task+Management",
      liveLink: "#",
      codeLink: "https://github.com/yourusername/task-manager",
    },
  ];

  // State for animated entry of project cards
  const [visibleProjects, setVisibleProjects] = useState([]);

  // Animate projects entry on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleProjects(projectsData);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="section">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-container">
        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <div className="more-projects">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="more-link"
        >
          See more on GitHub
        </a>
      </div>
    </section>
  );
}

export default Projects;
