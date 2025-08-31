import "@fortawesome/fontawesome-free/css/all.min.css";
import "./about.css";

function About() {
  return (
    <div id="about">
      <h1>About Me</h1>

      <p>
        Hello! I'm NADAM ESHWANTH RAJ, an engineering student and a passionate
        software developer. I love building interactive and scalable web
        applications that solve real-world problems. Over the years, I've gained
        hands-on experience with a variety of programming languages and modern
        web technologies.
      </p>

      <p>
        My expertise spans both frontend and backend development. I enjoy
        working with technologies like React, Node.js, MongoDB, and Bootstrap to
        create dynamic and user-friendly applications. I also have a strong
        foundation in programming languages such as C, C++, Java, and Python,
        which helps me approach problem-solving efficiently.
      </p>

      <p>
        Apart from coding, I enjoy contributing to open-source projects,
        learning new technologies, and exploring innovative solutions. I believe
        in the power of collaboration and continuous learning in the software
        development community.
      </p>

      <p>
        My goal is to craft software that not only meets functional requirements
        but also provides an engaging user experience. I'm always seeking
        opportunities to grow, improve my skills, and take on challenging
        projects.
      </p>

      <div className="skills">
        <b style={{fontSize:50}}>SKILLS</b>
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <ul>
            <li>
              <i className="fa-brands fa-cuttlefish"></i> C
            </li>{" "}
            {/* fallback for C */}
            <li>
              <i className="fa-brands fa-java"></i> Java
            </li>
            <li>
              <i className="fa-brands fa-python"></i> Python
            </li>
            <li>
              <i className="fa-brands fa-js-square"></i> JavaScript
            </li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Frontend Development</h3>
          <ul>
            <li>
              <i className="fa-brands fa-html5"></i> HTML
            </li>
            <li>
              <i className="fa-brands fa-css3-alt"></i> CSS
            </li>
            <li>
              <i className="fa-brands fa-react"></i> React
            </li>
            <li>
              <i className="fa-brands fa-bootstrap"></i> Bootstrap
            </li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Backend & Database</h3>
          <ul>
            <li>
              <i className="fa-brands fa-node-js"></i> Node.js
            </li>
            <li>
              <i className="fa-brands fa-envira"></i> MongoDB
            </li>{" "}
            {/* fallback icon */}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Tools</h3>
          <ul>
            <li>
              <i className="fa-brands fa-git-alt"></i> Git & GitHub
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
