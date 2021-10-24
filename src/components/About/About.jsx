import "./about.css";
import Me from "../../img/me.jpeg";
import githubIcon from "../../img/github.svg"
import linkedInIcon from "../../img/linkedin.svg"
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-desc">
          Full Stack Developer
        </p>
        <div>
        <a href="https://github.com/solaz0824" target="_blank" rel="noreferrer"><img src={githubIcon} alt="github" className="a-icon" /></a>
        <a href="https://linkedin.com/in/eunyoung-kim-81ba8117a" target="_blank"><img src={linkedInIcon} alt="linkedIn" className="a-icon" /></a>
       </div>
        <p className="a-sub">
          I am an easy-going and self driven person. As a full-stack developer,
          I enjoy working on both frontend and backend projects. Also, my study
          background in psychology helps me understand user experience better.
        </p>
        <p className="a-sub-desc">
          <b>Assembler School of Software Engineering</b>
          <br />
          Mar 2021 – Present
          <br />
          Location: Barcelona, Catalonia, Spain
          <br />
          Software development based in AGILE methodology, building entire real
          world projects using various skills as described in each of the
          projects below.
        </p>
      </div>
    </div>
  );
};

export default About;
