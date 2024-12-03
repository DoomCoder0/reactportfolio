import "./AboutMe.css";
import myImage from "../../assets/images/Dizajn bez naslova.png";


function AboutMe() {
  return (
    <div id="aboutme" className="aboutme-container">
      <img src={myImage} alt="aboutme" />
      <div>
        <h1>About Me</h1>
        <p>
          I’m a passionate freelance motion designer specializing in creating
          dynamic, interactive animations using GSAP. With a solid foundation in
          full-stack development, I build responsive, user-friendly websites and
          applications using modern technologies like React, Node.js, and
          MongoDB. I combine creativity with technical expertise to bring
          engaging web experiences to life, whether it's through seamless
          animations or full-stack solutions. Looking to collaborate on exciting
          projects that push the boundaries of design and functionality.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
