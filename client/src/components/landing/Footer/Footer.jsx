import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div className="footer-brand">

          <h2>Skill<span>OS</span></h2>

          <p>
            Your AI powered career operating system.
            Learn, build projects and become placement ready.
          </p>

        </div>

        <div className="footer-links">

          <h4>Platform</h4>

          <a href="#">Home</a>
          <a href="#">Roadmaps</a>
          <a href="#">Projects</a>
          <a href="#">Resources</a>

        </div>

        <div className="footer-links">

          <h4>Careers</h4>

          <a href="#">Frontend</a>
          <a href="#">Backend</a>
          <a href="#">Coming Soon</a>

        </div>

        <div className="footer-social">

          <h4>Connect</h4>

          <div className="social-icons">

            <FaGithub />

            <FaLinkedin />

            <FaInstagram />

            <FaDiscord />

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Skill OS Lite • Built with ❤️ using React

      </div>

    </footer>
  );
}

export default Footer;