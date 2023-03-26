import "./about.css";
import Me from "../../img/me.jpeg";
import githubIcon from "../../img/github.svg";
import linkedInIcon from "../../img/linkedin.svg";
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
        <p className="a-desc">Full Stack Developer</p>
        <div>
          <a
            href="https://github.com/solaz0824"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="github" className="a-icon" />
          </a>
          <a
            href="https://linkedin.com/in/eunyoung-kim-81ba8117a"
            target="_blank"
          >
            <img src={linkedInIcon} alt="linkedIn" className="a-icon" />
          </a>
        </div>
        <p className="a-sub">
          Hi, I'm a fullstack developer with experience in both front- end and
          back-end development. I have a strong understanding of modern web
          development technologies such as HTML, CSS, JavaScript, React,
          Node.js, and databases such as MySQL and MongoDB..
        </p>
        <p className="a-sub-desc">
          <b>The Hotels Network</b>
          <br />
          Jan 2022- present
          <br />
          Location: Barcelona, Catalonia, Spain
          <br />
          - Building scripts that are dynamically injected on runtime in the
          clients’ websites to boost conversion by providing highly- targeted
          promotional and marketing content using Javascript
          <br />- Fix bugs found or reported by Sentry when sending data to the
          platform and displaying the tools and widgets
        </p>
        <p className="a-sub-desc">
          <b>Assembler School of Software Engineering</b>
          <br />
          Mar – Oct 2021
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
