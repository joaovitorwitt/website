export default function Footer() {
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
          </ul>
        </div>

        <span>&copy; 2023 João. All rights reserved.</span>

        <a href="#home" className="scroll-top">
          <i className="fa-solid fa-chevron-up"></i>
        </a>
      </div>
    </footer>
  );
}
