import { useState, useEffect } from "react";
import logo from "../assets/img/logodp.png";
import "../assets/css/style.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Toggle del menú responsive
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ScrollSpy para cambiar el link activo
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollY = window.scrollY;

      sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (scrollY >= offset && scrollY < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <a href="#home" className="logo">
        <span>
          <img src={logo} alt="Logo Dante" />
        </span>
      </a>

      <i
        className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`}
        id="menu-icon"
        onClick={toggleMenu}
      ></i>

      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <a href="#home" className={activeSection === "home" ? "active" : ""}>
          Home
        </a>
        <a
          href="https://dannette.itch.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Projects
        </a>
        <a
          href="https://drive.google.com/file/d/1fg7bb0M45zv695UVJp11MiIL0T8YUGt3/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          Certificates
        </a>
        <a
          href="https://drive.google.com/file/d/1tTxT6hwCTARD0ukYWnZO85zkxzGxi_PX/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          Curriculum
        </a>
        {/* <a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contacto</a> */}
      </nav>
    </header>
  );
}
