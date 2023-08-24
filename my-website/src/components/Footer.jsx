import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="social-media">
          <ul className="list">
            <li className="list-item">
              <a
                href="https://github.com/joaovitorwitt"
                target="_blank"
                className="list-link"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>

            <li className="list-item">
              <a
                href="https://www.linkedin.com/in/joaovitorwitt/"
                target="_blank"
                className="list-link"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>

            <li className="list-item">
              <FontAwesomeIcon icon={faPhone} />
              <p>+55 54 991109265</p>
            </li>
          </ul>
        </div>

        <span>&copy; {year} João. All rights reserved.</span>

        <a href="#home" className="scroll-top">
          <i className="fa-solid fa-chevron-up"></i>
        </a>
      </div>
    </footer>
  );
}
