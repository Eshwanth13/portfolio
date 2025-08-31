import "./contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact() {
  return (
    <div id="contact">
      <h1>Contact Me</h1>
      <p>I'd love to connect! Feel free to reach out through any of the platforms below.</p>

      <div className="contact-icons">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
