import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import { faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubLink?: string;
  demoLink?: string;
  responsibilities: string[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image-container">
        {project.image ? (
          <img src={project.image} alt={project.title} className="project-image" />
        ) : (
          <div className="project-image-placeholder">
            <FontAwesomeIcon icon={faLaptopCode} />
          </div>
        )}
        <div className={`project-overlay ${isHovered ? 'visible' : ''}`}>
          <div className="project-links">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                <FontAwesomeIcon icon={faGithub} /> View Code
              </a>
            )}
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                <FontAwesomeIcon icon={faChrome} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="project-tech-badge">{tech}</span>
          ))}
        </div>
        <div className="project-responsibilities">
          <h4>Key Features:</h4>
          <ul>
            {project.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ProjectShowcase: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Personal Trainer Website",
      description: "A portfolio website for a personal trainer to advertise services and allow clients to get in touch.",
      technologies: ["React", "Figma", "CSS"],
      githubLink: "#",
      demoLink: "#",
      responsibilities: [
        "Website for advertising available packages to potential clients", 
        "Includes a sign-up form for automatically sending an email to the coach's personal email address",
        "Designed in Figma",
        "Developed in ReactJs"
      ]
    },
    {
      title: "Pet Product E-commerce App",
      description: "Mobile application for ordering pet products with location-based delivery.",
      technologies: ["Ionic Angular", "Google Firebase", "Google Maps API"],
      githubLink: "#",
      demoLink: "#",
      responsibilities: [
        "Application for ordering pet products on a mobile app",
        "Utilizes Google Maps API for distance-based delivery cost calculation",
        "Developed with Ionic Angular and Google Firebase"
      ]
    },
    {
      title: "Online Chess Bot",
      description: "An automated chess-playing bot that can play on online chess platforms.",
      technologies: ["Python", "Selenium", "Stockfish API"],
      githubLink: "#",
      demoLink: "#",
      responsibilities: [
        "An online chess-playing bot that logs into an online chess platform",
        "Plays the next best move after analyzing the current state of the board",
        "Developed using Python Selenium and Stockfish API"
      ]
    },
    {
      title: "VoteVault",
      description: "Final-year project: A secure online voting system using blockchain technology.",
      technologies: ["Ionic Angular", "Blockchain", "Smart Contracts"],
      githubLink: "#",
      demoLink: "#",
      responsibilities: [
        "Team-lead on final-year project",
        "Application that utilizes blockchain storage and verification for a secure online voting system",
        "Front-end developed on Ionic Angular",
        "Implemented secure identity verification and vote integrity"
      ]
    }
  ];

  return (
    <div className="project-showcase">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;