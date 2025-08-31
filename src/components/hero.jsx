import "./Hero.css";
import mypic from "../../images/my_pic.PNG";
function Hero() {
  return (
    <div id="hero" >
      <div class="heroinfo">
        <h1>Hello, I'm Eshwanth Raj.</h1>
        <p>Engineering Student | Web Developer | Tech Enthusiast</p>
        <p>
          I'm an engineering student at NIT Bhopal, originally from Telangana, India. I’m a passionate developer who loves building interactive web experiences and smart digital solutions.
        </p>
        <a href="#about" class="btn">
          Get Started...
        </a>
      </div>
      <div className="heroimg">
        <img src={mypic}></img>
      </div>
    </div>
  );
}

export default Hero;
