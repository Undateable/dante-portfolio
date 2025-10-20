import React from "react";
import "../assets/css/style.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>© 2025 Dante Pentito | Todos los derechos reservados.</p>
      </div>

      <div className="footer-iconTop">
        <a href="#home" aria-label="Volver al inicio">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>

      <div className="social-icons">
          <a href="https://www.linkedin.com/in/dpentito/" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/Undateable" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="mailto:pentitodante2@gmail.com">
            <i className="bx bx-envelope"></i>
          </a>
          <a href="https://dannette.itch.io/" target="_blank" rel="noopener noreferrer">
            <i className="bx bx-home-smile"></i>
          </a>
        </div>
    </footer>
  );
}

