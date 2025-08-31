import "./project.css";

const projectsData = [
  {
    title: "Notes App",
    description: "Full-stack note-taking app using Node.js, MongoDB, EJS, with authentication and dark/light theme toggle.",
    tech: "Node.js, MongoDB, EJS, CSS",
    github: "https://github.com/yourusername/notes-app",
    demo: "#",
  },
  {
    title: "Weather App",
    description: "Weather forecast app using React and OpenWeather API with responsive UI.",
    tech: "React, CSS, API",
    github: "https://github.com/yourusername/weather-app",
    demo: "#"
  },
  // Add more projects here
    {
    title: "Weather App",
    description: "Weather forecast app using React and OpenWeather API with responsive UI.",
    tech: "React, CSS, API",
    github: "https://github.com/yourusername/weather-app",
    demo: "#"
  },
    {
    title: "Weather App",
    description: "Weather forecast app using React and OpenWeather API with responsive UI.",
    tech: "React, CSS, API",
    github: "https://github.com/yourusername/weather-app",
    demo: "#"
  },
    {
    title: "Weather App",
    description: "Weather forecast app using React and OpenWeather API with responsive UI.",
    tech: "React, CSS, API",
    github: "https://github.com/yourusername/weather-app",
    demo: "#"
  },
];

function Project() {
  return (
    <div id="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="tech">{project.tech}</span>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
