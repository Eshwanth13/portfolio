import "./contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact() {
  return (
    <div id="contact">
      <h1>Contact Me</h1>
      <p>I'd love to connect! Feel free to reach out through any of the platforms below.</p>

      <div className="contact-icons">
        <a href="https://github.com/Eshwanth13" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/eshwanth33_patel?igsh=ZXJmMGV6MGl4djB5" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/eshwanth-nadam-545a04327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://x.com/Eshwanth33?t=buiQMr04-DYui3D0K7gFsA&s=08" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
