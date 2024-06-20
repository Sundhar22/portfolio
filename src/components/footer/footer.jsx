import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Sundhar</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#service" className="footer__link">
              Service
            </a>
          </li>

        
        </ul>
        <div className="footer__social">
            <a
              href="https://www.linkedin.com/in/mohanasundharam-s"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>

            <a
              href="https://github.com/Sundhar22"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="uil uil-github-alt"></i>
            </a>

            <a
              href="https://www.instagram.com/carzy_prime/"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="uil uil-instagram"></i>
            </a>
          </div>
          <span className="footer__copy">
            &copy; 2024 Mohanasundharam S. All right reserved
          </span>
      </div>
    </footer>
  );
}

export default Footer;
