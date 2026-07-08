import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="container navbar-wrapper">
        {/* Logo */}

        <a href="/" className="logo">
          <div className="logo-icon">
            <span>◈</span>
          </div>

          <div className="logo-text">
            Skill<span>OS</span>
          </div>
        </a>

        {/* Navigation */}

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <a href="#features" onClick={closeMenu}>
            Features
          </a>

          <a href="#careers" onClick={closeMenu}>
            Careers
          </a>

          <a href="#roadmaps" onClick={closeMenu}>
            Roadmaps
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <button className="nav-login">
            Login
          </button>

          <button className="nav-primary">
            Get Started
          </button>
        </nav>

        {/* Mobile Toggle */}

        <button
          className="mobile-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;