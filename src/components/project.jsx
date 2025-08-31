import "./project.css";

const projectsData = [
  {
    title: "Notes App",
    description: "Full-stack note-taking app using Node.js, MongoDB, EJS, with authentication and dark/light theme toggle.",
    tech: "Node.js, MongoDB, EJS, CSS",
    github: "https://github.com/yourusername/notes-app",
    demo: "https://notes-dcna.onrender.com/",
  },
  {
    title: "Weather App",
    description: "Weather forecast app using React and OpenWeather API with responsive UI.",
    tech: "React, CSS, API",
    github: "https://github.com/yourusername/weather-app",
    demo: "https://weatherweb06.netlify.app/"
  },
  // Add more projects here
    {
    title: "REGISTRATION FORM",
    description: "A full-stack web application built with Node.js, Express, MongoDB, and EJS. Allows students to register for the robotics club with secure data storage, form validation, and a responsive user interface.",
    tech: "NODE JS, EXPRESS, MONGODB, EJS, CSS",
    github: "https://github.com/Eshwanth13/eshwanthrobotics",
    demo: "https://eshwanthweb.netlify.app/"
  },
    {
    title: "ROCK PAPER SCISSORS",
    description: " A simple interactive game built with JavaScript, HTML, and CSS where users can play against the computer with a responsive UI and score tracking.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/Eshwanth13",
    demo: "https://eshwanthgame2pcversion.netlify.app/"
  },
    {
    title: "TIK TAC TOE",
    description: "A 2-player interactive game built with JavaScript, HTML, and CSS, featuring a responsive interface, real-time gameplay, and win/draw detection logic.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/Eshwanth13",
    demo: "https://eshwanth1stwebsite.netlify.app/"
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
