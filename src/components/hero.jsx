import "./Hero.css";

function Hero() {
  return (
    <div id="hero" >
      <div class="heroinfo">
        <h1>Hello, I'm Eshwanth Raj.</h1>
        <p>Engineering Student | Web Developer | Tech Enthusiast</p>
        <p>
          I'm an engineering student and passionate developer who loves building interactive web experiences and smart digital solutions.
        </p>
        <a href="#" class="btn">
          Get Started...
        </a>
      </div>
      <div class="heroimg">
        <img src="../images/my_pic.PNG"></img>
      </div>
    </div>
  );
}

export default Hero;
